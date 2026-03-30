"use client"

import useEmblaCarousel from "embla-carousel-react"
import { useCallback, useEffect, useState } from "react"
import { BUSINESS, FEATURES, HERO } from "@/libs/constants"

type Review = {
  initials: string
  name: string
  location: string
  review: string
  rating?: number
}

type ApprovedComment = {
  id: number
  name: string
  comment: string
  rating: number
  created_at: string
}

const placeholderReviews: Review[] = [
  {
    initials: "JR",
    name: "James R.",
    location: "Lafayette, IN",
    rating: 5,
    review: "Fast delivery and honest pricing. The driver was professional and placed the container exactly where I needed it. Will use again for my next project.",
  },
  {
    initials: "ML",
    name: "Maria L.",
    location: "Lafayette, IN",
    rating: 5,
    review: "Very easy to book, next-day delivery as promised. The weight receipt was a nice touch with no surprises on the bill. Highly recommend.",
  },
]

const trustPoints = [
  { value: "5.0", label: "customer rating" },
  { value: "100+", label: HERO.socialProof.toLowerCase() },
  { value: "Local", label: "owner-led service" },
] as const

export default function Reviews() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="overflow-hidden bg-[var(--surface)] py-16 lg:py-20"
    >
      <div className="mx-auto max-w-[1120px] px-5">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)] lg:items-start lg:gap-10">

          {/* Left column */}
          <div>
            <div className="mb-3 flex items-center gap-2.5">
              <div className="h-0.5 w-8 bg-[var(--green)]" />
              <span className="font-[family-name:var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--green)]">
                What Customers Say
              </span>
            </div>
            <h2
              id="reviews-title"
              className="mb-4 font-[family-name:var(--font-barlow-condensed)] text-[clamp(30px,4vw,44px)] font-extrabold uppercase leading-[0.95] text-[var(--text)]"
            >
              Trusted by cleanup jobs across Lafayette
            </h2>
            <p className="mb-6 max-w-[34ch] font-[family-name:var(--font-barlow)] text-[16px] leading-7 text-[var(--text-dim)]">
              Customers come back for clear pricing, fast delivery, and direct
              communication from the first call to final pickup.
            </p>
            <div className="mb-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {trustPoints.map((point) => (
                <div
                  key={point.label}
                  className="rounded-[18px] border border-[var(--green-border)] bg-[linear-gradient(180deg,#ffffff_0%,#eef8ef_100%)] px-5 py-4 shadow-[0_8px_24px_rgba(56,142,60,0.08)]"
                >
                  <p className="font-[family-name:var(--font-barlow-condensed)] text-[34px] font-extrabold uppercase leading-none text-[var(--text)]">
                    {point.value}
                  </p>
                  <p className="mt-2 font-[family-name:var(--font-inter)] text-[12px] font-medium uppercase tracking-[0.08em] text-[var(--text-dim)]">
                    {point.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className="min-w-0 overflow-hidden">
            <ReviewsCarousel />

            <div className="mt-6 rounded-[24px] bg-[var(--green)] px-6 py-6 text-white shadow-[0_12px_32px_rgba(56,142,60,0.2)]">
              <p className="font-[family-name:var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.16em] text-white/75">
                Reputation built locally
              </p>
              <h3 className="mt-2 font-[family-name:var(--font-barlow-condensed)] text-[32px] font-extrabold uppercase leading-none">
                Straight answers, clean drop-offs, reliable pickup
              </h3>
              <p className="mt-3 max-w-[60ch] font-[family-name:var(--font-barlow)] text-[15px] leading-6 text-white/85">
                That is the pattern behind the reviews we get from homeowners,
                contractors, and property managers around {BUSINESS.city}.
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              {FEATURES.googleReviewEnabled && (
                <a
                  href={FEATURES.googleReviewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-[14px] border-2 border-[var(--green)] px-6 py-4 font-[family-name:var(--font-inter)] text-[14px] font-bold text-[var(--green)] transition-colors hover:bg-[var(--green)] hover:text-white"
                >
                  ⭐ Review us on Google
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ReviewsCarousel() {
  const [allReviews, setAllReviews] = useState<Review[]>(placeholderReviews)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  })

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on("select", () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    })
  }, [emblaApi])

  useEffect(() => {
    async function fetchComments() {
      try {
        const res = await fetch("/api/comments")
        const data = await res.json()
        const approved: ApprovedComment[] = data.comments || []
        const mapped: Review[] = approved.map((c) => ({
          initials: c.name.charAt(0).toUpperCase(),
          name: c.name,
          location: "Lafayette, IN",
          review: c.comment,
          rating: c.rating,
        }))
        setAllReviews([...placeholderReviews, ...mapped])
      } catch {
        console.error("Failed to fetch comments")
      }
    }
    fetchComments()
  }, [])

  return (
    <div className="w-full min-w-0">

      {/* Header row with arrows */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-0.5 w-6 bg-[var(--green)]" />
          <span className="font-[family-name:var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--green)]">
            What they say
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={scrollPrev}
            aria-label="Previous review"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] bg-white text-[var(--text-dim)] transition-colors hover:border-[var(--green)] hover:text-[var(--green)]"
          >
            ‹
          </button>
          <button
            onClick={scrollNext}
            aria-label="Next review"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] bg-white text-[var(--text-dim)] transition-colors hover:border-[var(--green)] hover:text-[var(--green)]"
          >
            ›
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div className="w-full overflow-hidden" ref={emblaRef}>
        <ul
          className="flex"
          aria-label="Customer reviews"
          style={{ touchAction: "pan-y" }}
        >
          {allReviews.map((review, index) => (
            <li
              key={index}
              className="min-w-0 flex-[0_0_100%] pr-4"
            >
              <ReviewCard review={review} />
            </li>
          ))}
        </ul>
      </div>

      {/* Dot indicators */}
      {allReviews.length > 1 && (
        <div className="mt-4 flex justify-center gap-1.5">
          {allReviews.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              aria-label={`Go to review ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-200 ${
                index === selectedIndex
                  ? "w-4 bg-[var(--green)]"
                  : "w-1.5 bg-[var(--border)]"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="flex h-full flex-col rounded-[20px] border border-[var(--border)] bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.05)] transition-transform duration-200 hover:-translate-y-1">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--green-light)] shadow-inner">
            <span className="font-[family-name:var(--font-inter)] text-[13px] font-bold text-[var(--green)]">
              {review.initials}
            </span>
          </div>
          <div>
            <p className="font-[family-name:var(--font-inter)] text-[15px] font-bold text-[var(--text)]">
              {review.name}
            </p>
            <p className="font-[family-name:var(--font-inter)] text-[12px] font-medium text-[var(--text-muted)]">
              {review.location}
            </p>
          </div>
        </div>
        <span className="rounded-full bg-[var(--green-light)] px-3 py-1 font-[family-name:var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--green)]">
          Verified
        </span>
      </div>

      <div className="mb-4 flex items-center gap-2" aria-hidden="true">
        <span className="text-[#f5a623] text-base">
          {"★".repeat(review.rating ?? 5)}
          {"☆".repeat(5 - (review.rating ?? 5))}
        </span>
        <span className="font-[family-name:var(--font-inter)] text-[12px] font-semibold uppercase tracking-[0.08em] text-[var(--text-dim)]">
          {`${review.rating ?? 5} out of 5`}
        </span>
      </div>

      <p className="font-[family-name:var(--font-barlow)] text-[16px] leading-7 text-[var(--text-dim)]">
        {review.review}
      </p>
    </article>
  )
}