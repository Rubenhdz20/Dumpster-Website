import { Mail, MessageCircle, Phone } from "lucide-react"
import { BUSINESS } from "@/libs/constants"

const closingPoints = [
  "Fast answers from a local owner-operated team",
  "Same-day when available, next-day as the standard fallback",
  "Clear pricing before the dumpster is delivered",
] as const


export default function FinalCTA() {
  return (
    <section
      id="contact"
      aria-labelledby="final-cta-title"
      className="bg-[linear-gradient(180deg,#f6fbf7_0%,#eef8ef_100%)] py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1120px] px-5">
        <div className="overflow-hidden rounded-[32px] border border-[var(--green-border)] bg-[linear-gradient(135deg,#ffffff_0%,#edf8ee_52%,#dff1e1_100%)] shadow-[0_22px_60px_rgba(56,142,60,0.14)]">
          <div className="grid gap-8 px-6 py-8 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] lg:gap-10 lg:px-10 lg:py-10">
            <div>
              <div className="mb-3 flex items-center gap-2.5">
                <div className="h-0.5 w-8 bg-[var(--green)]" />
                <span className="font-[family-name:var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--green)]">
                  Get Started
                </span>
              </div>

              <h2
                id="final-cta-title"
                className="mb-4 max-w-[14ch] font-[family-name:var(--font-barlow-condensed)] text-[clamp(36px,5vw,58px)] font-extrabold uppercase leading-[0.92] text-[var(--text)]"
              >
                Ready to get a dumpster on your schedule?
              </h2>

              <p className="mb-6 max-w-[58ch] font-[family-name:var(--font-barlow)] text-[17px] leading-7 text-[var(--text-dim)]">
                Call or message us with your cleanup type, address, and timing. We will recommend the right size, confirm pricing, and get your delivery window locked in.
              </p>

              <ul className="mb-8 grid gap-3" aria-label="Reasons to contact HIDA Dumpster now">
                {closingPoints.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--green)] shadow-[0_0_0_4px_rgba(56,142,60,0.12)]"
                    />
                    <span className="font-[family-name:var(--font-barlow)] text-[15px] leading-6 text-[var(--text-dim)]">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={BUSINESS.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-[14px] bg-[var(--green)] px-6 py-4 font-[family-name:var(--font-inter)] text-[15px] font-bold text-white shadow-[0_12px_28px_rgba(56,142,60,0.25)] transition-all hover:bg-[var(--green-dark)] hover:shadow-[0_16px_34px_rgba(56,142,60,0.3)]"
                >
                  <Phone aria-hidden="true" className="h-5 w-5 shrink-0" strokeWidth={2.25} />
                  <span>Call {BUSINESS.phone}</span>
                </a>
                <a
                  href={BUSINESS.sms}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-[14px] bg-[var(--whatsapp)] px-6 py-4 font-[family-name:var(--font-inter)] text-[15px] font-bold text-white transition-colors hover:brightness-95"
                >
                  <MessageCircle aria-hidden="true" className="h-5 w-5 shrink-0" strokeWidth={2.25} />
                  <span>Send us a Text</span>
                </a>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="inline-flex items-center justify-center gap-2 rounded-[14px] border border-[var(--green-border)] bg-white px-6 py-4 font-[family-name:var(--font-inter)] text-[15px] font-bold text-[var(--green)] transition-colors hover:bg-[var(--green-light)]"
                >
                  <Mail aria-hidden="true" className="h-5 w-5 shrink-0" strokeWidth={2.25} />
                  <span>Email Us</span>
                </a>
              </div>
            </div>

        
          </div>
        </div>
      </div>
    </section>
  )
}