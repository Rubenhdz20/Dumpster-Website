import { Phone } from "lucide-react"
import { BUSINESS, HERO } from "@/libs/constants"

type Reason = {
  icon: string
  title: string
  description: string
  highlight: string
}

const reasons: readonly Reason[] = [
  {
    icon: "⏱️",
    title: "Next-Day Delivery",
    description: "We deliver the next day. Same-day available depending on schedule.",
    highlight: "Fast scheduling for active cleanup jobs",
  },
  {
    icon: "📋",
    title: "Transparent Pricing",
    description: "Flat rates with no surprises. If extra weight applies, we send you the official weight receipt.",
    highlight: "Clear rates and documented overage receipts",
  },
  {
    icon: "🤝",
    title: "Local & Family-Owned",
    description: "You deal directly with the owner. Real people, real service.",
    highlight: "Direct communication from quote to pickup",
  },
  {
    icon: "🚛",
    title: "Material Delivery Available",
    description: "Need materials delivered to your job site? We do that too.",
    highlight: "One local partner for debris and materials",
  },
] as const

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      aria-labelledby="why-us-title"
      className="bg-[var(--surface)] py-16 lg:py-20"
    >
      <div className="mx-auto max-w-[1120px] px-5">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,380px)_minmax(0,1fr)] lg:items-start lg:gap-10">
          <div>
            <div className="mb-3 flex items-center gap-2.5">
              <div className="h-0.5 w-8 bg-[var(--green)]" />
              <span className="font-[family-name:var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--green)]">
                Why HIDA
              </span>
            </div>

            <h2
              id="why-us-title"
              className="mb-4 font-[family-name:var(--font-barlow-condensed)] text-[clamp(30px,4vw,44px)] font-extrabold uppercase leading-[0.95] text-[var(--text)]"
            >
              Local service without the call-center runaround
            </h2>

            <p className="mb-6 max-w-[340px] font-[family-name:var(--font-barlow)] text-[16px] leading-7 text-[var(--text-dim)]">
              Family-owned, direct, and built around practical cleanup timelines for homeowners, contractors, and property managers in {BUSINESS.city}.
            </p>

            <div className="rounded-[22px] border border-[var(--green-border)] bg-[linear-gradient(180deg,#ffffff_0%,#eef8ef_100%)] p-5 shadow-[0_8px_24px_rgba(56,142,60,0.08)]">
              <p className="mb-1 font-[family-name:var(--font-inter)] text-[12px] font-semibold uppercase tracking-[0.14em] text-[var(--green)]">
                Built for quick decisions
              </p>
              <p className="mb-4 font-[family-name:var(--font-barlow)] text-[15px] leading-6 text-[var(--text-dim)]">
                Tell us what you are cleaning up and we will recommend the right dumpster size, timeline, and next available drop-off.
              </p>
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-[12px] bg-[var(--green)] px-4 py-3 font-[family-name:var(--font-inter)] text-[14px] font-bold text-white transition-colors hover:bg-[var(--green-dark)]"
              >
                <Phone aria-hidden="true" className="h-5 w-5 shrink-0" strokeWidth={2.25} />
                <span>Call {BUSINESS.phone}</span>
              </a>
            </div>
          </div>

          <div>
            <ul className="grid gap-4 sm:grid-cols-2" aria-label="Reasons to choose HIDA Dumpster">
              {reasons.map((reason) => (
                <CheckCard key={reason.title} reason={reason} />
              ))}
            </ul>

            <div data-testid="stats-bar" className="mt-6 grid gap-4 rounded-[24px] bg-[var(--green)] px-6 py-6 text-white shadow-[0_12px_32px_rgba(56,142,60,0.2)] sm:grid-cols-3">
              <div>
                <p className="font-[family-name:var(--font-barlow-condensed)] text-[44px] font-extrabold uppercase leading-none">
                  100+
                </p>
                <p className="mt-2 font-[family-name:var(--font-inter)] text-[13px] font-medium text-white/80">
                  {HERO.socialProof}
                </p>
              </div>
              <div className="border-white/20 sm:border-l sm:pl-5">
                <p className="font-[family-name:var(--font-barlow-condensed)] text-[44px] font-extrabold uppercase leading-none">
                  {BUSINESS.hours.replace(" Daily", "")}
                </p>
                <p className="mt-2 font-[family-name:var(--font-inter)] text-[13px] font-medium text-white/80">
                  Available daily
                </p>
              </div>
              <div className="border-white/20 sm:border-l sm:pl-5">
                <p className="font-[family-name:var(--font-barlow-condensed)] text-[44px] font-extrabold uppercase leading-none">
                  Local
                </p>
                <p className="mt-2 font-[family-name:var(--font-inter)] text-[13px] font-medium text-white/80">
                  Direct owner communication from quote to pickup
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CheckCard({ reason }: { reason: Reason }) {
  return (
    <li className="list-none">
      <article className="flex h-full flex-col rounded-[18px] border border-[var(--border)] bg-white p-5 shadow-[0_8px_30px_rgba(0,0,0,0.05)] transition-transform duration-200 hover:-translate-y-1">
        <div className="mb-4 flex items-start justify-between gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-[12px] bg-[var(--green-light)] text-2xl shadow-inner">
            <span aria-hidden="true">{reason.icon}</span>
          </div>
          <span className="rounded-full bg-[var(--green-light)] px-3 py-1 font-[family-name:var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--green)]">
            Trusted
          </span>
        </div>

        <h3 className="mb-2 font-[family-name:var(--font-barlow-condensed)] text-[24px] font-extrabold uppercase leading-none text-[var(--text)]">
          {reason.title}
        </h3>

        <p className="mb-4 font-[family-name:var(--font-barlow)] text-[15px] leading-6 text-[var(--text-dim)]">
          {reason.description}
        </p>

        <div className="mt-auto rounded-[12px] border border-[var(--green-border)] bg-[var(--green-light)]/60 px-3.5 py-3 font-[family-name:var(--font-inter)] text-[13px] font-medium text-[var(--text)]">
          {reason.highlight}
        </div>
      </article>
    </li>
  )
}