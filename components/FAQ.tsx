"use client"

import { useState } from "react"
import { BUSINESS, PRICING } from "@/libs/constants"

type FAQItem = {
  question: string
  answer: string
  tag: string
}

const faqs: readonly FAQItem[] = [
  {
    question: "What sizes do you offer?",
    answer: `We offer ${PRICING.tenYard.size.toLowerCase()} containers starting at $${PRICING.tenYard.price} and ${PRICING.fifteenYard.size.toLowerCase()} containers starting at $${PRICING.fifteenYard.price}. Both include 2 tons of trash. If you are unsure which size fits your cleanup, call us and we will help you choose the practical option.`,
    tag: "Sizes",
  },
  {
    question: "What's included in the rental price?",
    answer: "Every rental includes 2 tons of trash, a 7-day rental period, and delivery and pickup. If you go over the weight limit, we'll send you the official weight receipt so there are no surprises.",
    tag: "Pricing",
  },
  {
    question: "Do you offer same-day delivery?",
    answer: `Same-day delivery is available depending on schedule, and next-day delivery is our standard fallback. Call ${BUSINESS.phone} to check availability for your address and preferred drop-off window.`,
    tag: "Delivery",
  },
  {
    question: "What materials are NOT accepted in the container?",
    answer: "We do not accept hazardous materials, tires, paint, chemicals, asbestos, or medical waste. For a full list call us and we'll be happy to help.",
    tag: "Restrictions",
  },
  {
    question: "What happens if my container is too heavy?",
    answer: "If your load exceeds the included 2 tons, we charge $60 per extra ton or $30 per extra half ton. We always send you the official weight receipt so you can see exactly what you're being charged for.",
    tag: "Weight",
  },
] as const

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="bg-[linear-gradient(180deg,#ffffff_0%,#f6fbf7_100%)] py-16 lg:py-20"
    >
      <div className="mx-auto max-w-[1120px] px-5">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)] lg:items-start lg:gap-10">
          <div>
            <div className="mb-3 flex items-center gap-2.5">
              <div className="h-0.5 w-8 bg-[var(--green)]" />
              <span className="font-[family-name:var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--green)]">
                FAQ
              </span>
            </div>

            <h2
              id="faq-title"
              className="mb-4 font-[family-name:var(--font-barlow-condensed)] text-[clamp(30px,4vw,44px)] font-extrabold uppercase leading-[0.95] text-[var(--text)]"
            >
              Common questions before you book
            </h2>

            <p className="mb-6 max-w-[34ch] font-[family-name:var(--font-barlow)] text-[16px] leading-7 text-[var(--text-dim)]">
              The questions below cover the details customers usually want before scheduling delivery, loading debris, and planning pickup.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index
              const answerId = `faq-answer-${index}`
              const buttonId = `faq-button-${index}`

              return (
                <article
                  key={faq.question}
                  className={`overflow-hidden rounded-[20px] border bg-white shadow-[0_8px_30px_rgba(0,0,0,0.05)] transition-colors ${
                    isOpen
                      ? "border-[var(--green-border)]"
                      : "border-[var(--border)]"
                  }`}
                >
                  <button
                    id={buttonId}
                    type="button"
                    data-testid="faq-button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                  >
                    <div>
                      <span className="mb-2 inline-flex rounded-full bg-[var(--green-light)] px-3 py-1 font-[family-name:var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--green)]">
                        {faq.tag}
                      </span>
                      <span className="block font-[family-name:var(--font-inter)] text-[16px] font-semibold leading-6 text-[var(--text)]">
                        {faq.question}
                      </span>
                    </div>
                    <span
                      aria-hidden="true"
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border font-[family-name:var(--font-inter)] text-[20px] font-semibold transition-all ${
                        isOpen
                          ? "border-[var(--green-border)] bg-[var(--green-light)] text-[var(--green)]"
                          : "border-[var(--border)] bg-[var(--surface)] text-[var(--text-dim)]"
                      }`}
                    >
                      {isOpen ? "-" : "+"}
                    </span>
                  </button>

                  <div
                    id={answerId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`${isOpen ? "block" : "hidden"}`}
                  >
                    <div className="border-t border-[var(--green-border)] bg-[var(--green-light)]/35 px-5 py-5">
                      <p className="font-[family-name:var(--font-barlow)] text-[15px] leading-7 text-[var(--text-dim)]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}