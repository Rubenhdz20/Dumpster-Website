import Image from "next/image"
import { BUSINESS, HERO } from "../libs/constants"

const ctaLinks = [
  {
    href: BUSINESS.phoneHref,
    label: "Call for a Free Quote",
    icon: "📞",
    className:
      "bg-[var(--green)] shadow-[0_4px_20px_rgba(56,142,60,0.35)] hover:bg-[var(--green-dark)] focus-visible:outline-[var(--green)] md:shadow-[0_4px_20px_rgba(56,142,60,0.4)]",
    external: false,
  },
  {
    href: BUSINESS.whatsapp,
    label: "Message on WhatsApp",
    icon: "💬",
    className:
      "bg-[var(--whatsapp)] hover:brightness-95 focus-visible:outline-[var(--whatsapp)]",
    external: true,
  },
] as const

export default function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-title">
      <div className="relative overflow-hidden md:min-h-[580px]">
        <div className="relative h-[350px] w-full md:absolute md:inset-0 md:h-full">
        <Image
          src="/images/heroimage.jpeg"
          alt={HERO.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        </div>
        <div
          aria-hidden="true"
          className="hidden md:block md:absolute md:inset-0 md:bg-black/50"
        />
        <div
          className="relative bg-white px-5 py-8 md:flex md:min-h-[620px] md:items-center md:justify-center md:bg-transparent md:px-6 md:py-16"
        >
          <div className="mx-auto w-full max-w-[680px] md:text-center">
            <p className="mb-3 hidden font-[family-name:var(--font-inter)] text-xs font-semibold uppercase tracking-[0.1em] text-white/75 md:block">
              {HERO.eyebrow}
            </p>

            <h1
              id="hero-title"
              className="mb-3 font-[family-name:var(--font-barlow-condensed)] text-[36px] font-extrabold uppercase leading-[1.05] text-[var(--text)] md:mb-4 md:text-[clamp(36px,5vw,58px)] md:text-white"
            >
              {HERO.title}
            </h1>

            <p className="mb-4 font-[family-name:var(--font-barlow)] text-[15px] text-[var(--text-dim)] md:mb-6 md:text-[clamp(15px,2vw,18px)] md:text-white/80">
              {HERO.subtitle}
            </p>

            <div
              aria-label={HERO.ratingLabel}
              className="mb-6 flex items-center gap-2 md:mb-8 md:justify-center"
            >
              <span aria-hidden="true" className="text-[15px] text-[#f5a623] md:text-base">
                ★★★★★
              </span>
              <span className="font-[family-name:var(--font-inter)] text-[13px] font-medium text-[var(--text-dim)] md:text-white/85">
                {HERO.socialProof}
              </span>
            </div>

            <div className="flex flex-col gap-3 md:flex-row md:flex-wrap md:justify-center">
              {ctaLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className={`inline-flex items-center justify-center gap-2 rounded-[10px] px-6 py-4 font-[family-name:var(--font-inter)] text-[15px] font-bold text-white no-underline transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 md:px-8 ${link.className}`}
                >
                  <span aria-hidden="true">{link.icon}</span>
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
        </div>
        </div>
      </div>
    </section>
  )
}