import { NextRequest, NextResponse } from "next/server"
import { supabase } from "@/libs/supabase"

// ── Rate limiting store (in-memory) ──
const rateLimit = new Map<string, { count: number; timestamp: number }>()
const RATE_LIMIT_MAX = 3        // max submissions
const RATE_LIMIT_WINDOW = 60 * 60 * 1000 // 1 hour in ms

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimit.get(ip)

  if (!entry || now - entry.timestamp > RATE_LIMIT_WINDOW) {
    rateLimit.set(ip, { count: 1, timestamp: now })
    return true
  }

  if (entry.count >= RATE_LIMIT_MAX) return false

  entry.count++
  return true
}

// ── Input sanitization ──
function sanitize(input: string): string {
  return input
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;")
    .trim()
}

// ── POST — submit a new comment ──
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, comment, rating, honeypot } = body

    // 1. Honeypot check — bots fill hidden fields, humans don't
    if (honeypot) {
      // Silently reject — don't tell bots they failed
      return NextResponse.json(
        { message: "Comment submitted successfully" },
        { status: 201 }
      )
    }

    // 2. Rate limiting — max 3 per IP per hour
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      request.headers.get("x-real-ip") ??
      "unknown"

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many submissions. Please try again later." },
        { status: 429 }
      )
    }

    // 3. Required field validation
    if (!name || !comment) {
      return NextResponse.json(
        { error: "Name and comment are required" },
        { status: 400 }
      )
    }

    // 4. Minimum length — at least 10 characters
    if (comment.trim().length < 10) {
      return NextResponse.json(
        { error: "Comment must be at least 10 characters" },
        { status: 400 }
      )
    }

    // 5. Maximum length
    if (name.length > 100 || comment.length > 1000) {
      return NextResponse.json(
        { error: "Input too long" },
        { status: 400 }
      )
    }

    // 6. Input sanitization — strip HTML and dangerous characters
    const cleanName = sanitize(name)
    const cleanComment = sanitize(comment)
    const cleanRating = Math.min(5, Math.max(1, Number(rating) || 5))

    // 7. Save to Supabase
    const { error } = await supabase
      .from("comments")
      .insert([{
        name: cleanName,
        comment: cleanComment,
        rating: cleanRating,
        status: "pending",
      }])

    if (error) throw error

    return NextResponse.json(
      { message: "Comment submitted successfully" },
      { status: 201 }
    )
  } catch (error) {
    console.error("Failed to submit comment:", error)
    return NextResponse.json(
      { error: "Failed to submit comment" },
      { status: 500 }
    )
  }
}

// ── GET — fetch approved comments ──
export async function GET() {
  try {
    const { data, error } = await supabase
      .from("comments")
      .select("id, name, comment, rating, created_at")
      .eq("status", "approved")
      .order("created_at", { ascending: false })

    if (error) throw error

    return NextResponse.json({ comments: data })
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch comments" },
      { status: 500 }
    )
  }
}