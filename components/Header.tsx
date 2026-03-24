"use client"

import { useEffect, useId, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { BUSINESS } from "../libs/constants"

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Prices", href: "#pricing" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Service Areas", href: "#areas" },
  { label: "FAQ", href: "#faq" },
] as const

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuId = useId()

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false)
      }
    }

    window.addEventListener("keydown", handleEscape)

    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleEscape)
    }
  }, [menuOpen])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[color:var(--border)] bg-white/92 backdrop-blur-md">
      <div className="mx-auto flex h-[84px] max-w-[1120px] items-center justify-between gap-4 px-5 lg:px-10">
        <Link href="/" className="flex min-w-0 items-center" aria-label={`${BUSINESS.name} home`}>
          <Image
            src="/images/Logo.png"
            alt="HIDA Dumpster"
            width={180}
            height={56}
            priority
            className="h-[130px] w-auto object-contain sm:h-[74px]"
          />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative font-[family-name:var(--font-inter)] text-[13px] font-semibold uppercase tracking-[0.08em] text-[var(--text-dim)] transition-colors hover:text-[var(--green)]"
            >
              {link.label}
              <span className="absolute inset-x-0 -bottom-2 h-0.5 origin-left scale-x-0 rounded-full bg-[var(--green)] transition-transform duration-200 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <div className="rounded-full border border-[var(--green-border)] bg-[var(--green-light)] px-4 py-2 text-right">
            <p className="font-[family-name:var(--font-inter)] text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--green)]">
              Free Quote
            </p>
            <p className="font-[family-name:var(--font-barlow)] text-sm font-bold text-[var(--text)]">
              {BUSINESS.hours}
            </p>
          </div>

          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center gap-3 rounded-[14px] bg-[var(--green)] px-5 py-3 text-white shadow-[0_10px_30px_rgba(56,142,60,0.28)] transition-all hover:bg-[var(--green-dark)] hover:shadow-[0_14px_36px_rgba(56,142,60,0.34)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--green)]"
          >
            <span className="text-lg" aria-hidden="true">📞</span>
            <span>
              <span className="block font-[family-name:var(--font-inter)] text-[10px] font-semibold uppercase tracking-[0.14em] text-white/75">
                Call Now
              </span>
              <span className="block font-[family-name:var(--font-barlow)] text-lg font-bold leading-none">
                {BUSINESS.phone}
              </span>
            </span>
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center justify-center rounded-full bg-[var(--green)] px-4 py-2.5 font-[family-name:var(--font-inter)] text-sm font-bold text-white shadow-[0_10px_24px_rgba(56,142,60,0.22)] transition-colors hover:bg-[var(--green-dark)]"
          >
            Call
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls={menuId}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--border)] bg-white text-[var(--text)] shadow-sm transition-colors hover:border-[var(--green-border)] hover:text-[var(--green)]"
          >
            <span className="relative block h-4 w-5">
              <span className={`absolute left-0 top-0 block h-0.5 w-5 rounded-full bg-current transition-all ${menuOpen ? "top-[7px] rotate-45" : ""}`} />
              <span className={`absolute left-0 top-[7px] block h-0.5 w-5 rounded-full bg-current transition-all ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 top-[14px] block h-0.5 w-5 rounded-full bg-current transition-all ${menuOpen ? "top-[7px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-x-0 bottom-0 top-[84px] z-40 bg-black/20 px-4 py-4 lg:hidden">
          <div
            id={menuId}
            className="mx-auto flex max-w-[1120px] flex-col gap-5 overflow-hidden rounded-[24px] border border-white/70 bg-white p-5 shadow-[0_24px_80px_rgba(17,17,17,0.18)]"
          >
            <nav aria-label="Mobile" className="flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between border-b border-[color:var(--border)] py-4 font-[family-name:var(--font-barlow)] text-[22px] font-bold text-[var(--text)] transition-colors hover:text-[var(--green)]"
                >
                  <span>{link.label}</span>
                  <span className="text-[var(--text-muted)]" aria-hidden="true">›</span>
                </a>
              ))}
            </nav>

            <div className="rounded-[20px] border border-[var(--green-border)] bg-[linear-gradient(135deg,var(--green-light),#ffffff)] p-4">
              <p className="font-[family-name:var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--green)]">
                Local Support
              </p>
              <p className="mt-2 font-[family-name:var(--font-barlow)] text-2xl font-bold text-[var(--text)]">
                {BUSINESS.city}
              </p>
              <p className="mt-1 font-[family-name:var(--font-inter)] text-sm text-[var(--text-dim)]">
                {BUSINESS.hours}
              </p>
              <a
                href={BUSINESS.phoneHref}
                className="mt-4 inline-flex font-[family-name:var(--font-inter)] text-base font-bold text-[var(--green)]"
              >
                {BUSINESS.phone}
              </a>
              <p className="mt-1 font-[family-name:var(--font-inter)] text-sm text-[var(--text-dim)]">
                {BUSINESS.email}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center justify-center rounded-[16px] bg-[var(--green)] px-5 py-4 font-[family-name:var(--font-inter)] text-base font-bold text-white transition-colors hover:bg-[var(--green-dark)]"
              >
                📞 Call for a Free Quote
              </a>
              <a
                href={BUSINESS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-[16px] bg-[var(--whatsapp)] px-5 py-4 font-[family-name:var(--font-inter)] text-base font-bold text-white"
              >
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
