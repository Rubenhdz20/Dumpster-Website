"use client"

import { useState } from "react"

export default function CommentForm() {
  const [name, setName] = useState("")
  const [comment, setComment] = useState("")
  const [rating, setRating] = useState(5)
  const [hovered, setHovered] = useState(0)
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("loading")

    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, comment, rating }),
      })

      if (!response.ok) throw new Error("Failed to submit")

      setStatus("success")
      setName("")
      setComment("")
      setRating(5)
    } catch {
      setStatus("error")
    }
  }

  return (
    <section
      id="leave-comment"
      className="bg-white py-16 lg:py-20 border-t border-[var(--border)]"
    >
      <div className="max-w-[600px] mx-auto px-5">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-2.5">
            <div className="w-6 h-0.5 bg-[#388e3c]" />
            <span className="font-semibold text-[11px] uppercase tracking-widest text-[#388e3c]">
              Share Your Experience
            </span>
            <div className="w-6 h-0.5 bg-[#388e3c]" />
          </div>
          <h2 className="font-extrabold text-[clamp(24px,4vw,36px)] uppercase text-[#111111] leading-tight mb-3">
            Leave a Comment
          </h2>
          <p className="text-[14px] text-[#6b6b6b]">
            Your feedback helps us improve and helps others in Lafayette make better decisions.
          </p>
        </div>

        {/* Success message */}
        {status === "success" && (
          <div className="mb-6 bg-[#e8f5e9] border border-[#c8e6c9] rounded-xl p-4 text-center">
            <p className="font-semibold text-[#388e3c] text-[15px]">
              ✅ Thank you! Your comment has been submitted for review.
            </p>
          </div>
        )}

        {/* Error message */}
        {status === "error" && (
          <div className="mb-6 bg-red-50 border border-red-200 rounded-xl p-4 text-center">
            <p className="font-semibold text-red-600 text-[15px]">
              Something went wrong. Please try again or call us directly.
            </p>
          </div>
        )}

        {status !== "success" && (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            {/* Name */}
            <div>
              <label htmlFor="name" className="block font-semibold text-[13px] text-[#333] mb-1.5">
                Your Name *
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John D."
                maxLength={100}
                required
                className="w-full border border-[#e0e0e0] rounded-xl px-4 py-3 text-[14px] text-[#111] placeholder:text-[#aaa] focus:outline-none focus:border-[#388e3c] focus:ring-2 focus:ring-[#388e3c]/20 transition-colors"
              />
            </div>

            {/* Star Rating */}
            <div>
              <label className="block font-semibold text-[13px] text-[#333] mb-2">
                Your Rating *
              </label>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHovered(star)}
                    onMouseLeave={() => setHovered(0)}
                    className="text-[32px] transition-transform hover:scale-110 focus:outline-none"
                    aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}
                  >
                    <span className={hovered >= star || rating >= star ? "text-[#f5a623]" : "text-[#e0e0e0]"}>
                      ★
                    </span>
                  </button>
                ))}
                <span className="ml-2 text-[13px] font-medium text-[#6b6b6b]">
                  {hovered || rating} out of 5
                </span>
              </div>
            </div>

            {/* Comment */}
            <div>
              <label htmlFor="comment" className="block font-semibold text-[13px] text-[#333] mb-1.5">
                Your Comment *
              </label>
              <textarea
                id="comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Tell us about your experience with HIDA Dumpster..."
                maxLength={1000}
                required
                rows={5}
                className="w-full border border-[#e0e0e0] rounded-xl px-4 py-3 text-[14px] text-[#111] placeholder:text-[#aaa] focus:outline-none focus:border-[#388e3c] focus:ring-2 focus:ring-[#388e3c]/20 transition-colors resize-none"
              />
              <p className="text-[11px] text-[#aaa] mt-1 text-right">
                {comment.length}/1000
              </p>
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-[#388e3c] hover:bg-[#2e7d32] disabled:opacity-60 text-white font-bold text-[15px] py-4 rounded-xl transition-colors"
            >
              {status === "loading" ? "Submitting..." : "Submit Comment"}
            </button>

            <p className="text-[11px] text-[#aaa] text-center">
              All comments are reviewed before being published.
            </p>
          </form>
        )}
      </div>
    </section>
  )
}