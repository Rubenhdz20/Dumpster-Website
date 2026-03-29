import { NextRequest, NextResponse } from "next/server"
import { supabase } from "@/libs/supabase"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, comment, rating } = body

    console.log("Received:", { name, comment, rating }) // ← add this

    const { data, error } = await supabase
      .from("comments")
      .insert([{ name, comment, rating, status: "pending" }])

    console.log("Supabase response:", { data, error }) // ← add this

    if (error) throw error

    return NextResponse.json(
      { message: "Comment submitted successfully" },
      { status: 201 }
    )
  } catch (error) {
    console.error("Error details:", error) // ← add this
    return NextResponse.json(
      { error: "Failed to submit comment" },
      { status: 500 }
    )
  }
}

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