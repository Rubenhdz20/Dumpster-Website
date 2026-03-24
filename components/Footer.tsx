import Image from "next/image"
import { BUSINESS, HERO, SERVICE_AREAS } from "@/libs/constants"

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Prices", href: "#pricing" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Service Areas", href: "#areas" },
  { label: "FAQ", href: "#faq" },
] as const

const coveragePreview = [...SERVICE_AREAS.slice(0, 4), "Surrounding areas"] as const

const trustItems = [
  {
    value: HERO.socialProof,
    label: "completed rentals",
  },
  {
    value: BUSINESS.hours.replace(" Daily", ""),
    label: "available daily",
  },
] as const

export default function Footer() {
  return (
    <footer className="border-t border-[var(--green-border)] bg-[linear-gradient(180deg,#eef8ef_0%,#f7fbf8_100%)]">
      <div className="mx-auto max-w-[1120px] px-5 pt-12">
        <div className="mb-8 overflow-hidden rounded-[28px] border border-[var(--green-border)] bg-white shadow-[0_14px_34px_rgba(17,17,17,0.05)]">
          <div className="grid gap-8 px-6 py-8 lg:grid-cols-[minmax(0,1.2fr)_repeat(3,minmax(0,1fr))] lg:px-8">
            <div>
              <Image
                src="/images/Logo.png"
                alt="HIDA Dumpster"
                width={160}
                height={50}
                style={{ height: 200, width: "auto", objectFit: "contain" }}
              />
            </div>

            <FooterColumn title="Navigation">
              <nav aria-label="Footer">
                <ul className="space-y-3">
                  {navLinks.map((link) => (
                    <li key={link.href} className="list-none">
                      <a
                        href={link.href}
                        className="font-[family-name:var(--font-inter)] text-[14px] font-medium text-[var(--text-dim)] transition-colors hover:text-[var(--green)]"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </FooterColumn>

            <FooterColumn title="Service Area">
              <p className="mb-4 font-[family-name:var(--font-barlow)] text-[15px] leading-6 text-[var(--text-dim)]">
                Lafayette-based delivery with surrounding-town coverage as scheduling allows.
              </p>
              <ul className="flex flex-wrap gap-2" aria-label="Footer service areas">
                {coveragePreview.map((area) => (
                  <li key={area} className="list-none">
                    <span className="inline-flex rounded-full bg-[var(--surface-2)] px-3 py-1.5 font-[family-name:var(--font-inter)] text-[12px] font-medium text-[var(--text)]">
                      {area}
                    </span>
                  </li>
                ))}
              </ul>
            </FooterColumn>

            <FooterColumn title="Contact">
              <div className="space-y-4">
                <div>
                  <p className="font-[family-name:var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--text-muted)]">
                    Phone
                  </p>
                  <a
                    href={BUSINESS.phoneHref}
                    className="mt-1 block font-[family-name:var(--font-barlow)] text-[24px] font-bold leading-none text-[var(--text)] transition-colors hover:text-[var(--green)]"
                  >
                    {BUSINESS.phone}
                  </a>
                </div>

                <div>
                  <p className="font-[family-name:var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--text-muted)]">
                    Email
                  </p>
                  <a
                    href={`mailto:${BUSINESS.email}`}
                    className="mt-1 block break-all font-[family-name:var(--font-barlow)] text-[15px] leading-6 text-[var(--text-dim)] transition-colors hover:text-[var(--green)]"
                  >
                    {BUSINESS.email}
                  </a>
                </div>

                <div>
                  <p className="font-[family-name:var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--text-muted)]">
                    Hours
                  </p>
                  <p className="mt-1 font-[family-name:var(--font-barlow)] text-[15px] leading-6 text-[var(--text-dim)]">
                    {BUSINESS.hours}
                  </p>
                </div>
              </div>
            </FooterColumn>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-[var(--green-border)] py-5 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p className="font-[family-name:var(--font-inter)] text-[12px] text-[var(--text-muted)]">
            © 2026 {BUSINESS.name}. All rights reserved.
          </p>
          <p className="font-[family-name:var(--font-inter)] text-[12px] text-[var(--text-muted)]">
            {BUSINESS.city} · Fast local dumpster rental
          </p>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div>
      <p className="mb-4 font-[family-name:var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--green)]">
        {title}
      </p>
      {children}
    </div>
  )
}