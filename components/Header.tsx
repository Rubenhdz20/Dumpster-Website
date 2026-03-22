"use client"

import { useState } from "react"
import { BUSINESS } from "../libs/constants"
import Image from "next/image"
import Link from "next/link"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Prices", href: "#pricing" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Service Areas", href: "#areas" },
    { label: "FAQ", href: "#faq" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-[1120px] mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">

        <Link href="/" className="shrink-0">
          <Image
            src="/images/Logo.png"
            alt="HIDA Dumpster"
            width={180}
            height={56}
            priority
            style={{ height: 150, width: "auto", objectFit: "contain" }}
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-semibold text-sm text-[#333] hover:text-[#388e3c] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={BUSINESS.phoneHref}
          className="hidden lg:flex items-center gap-2 bg-[#388e3c] text-white font-bold text-sm px-5 py-2.5 rounded-lg hover:bg-[#2e7d32] transition-colors"
        >
          📞 {BUSINESS.phone}
        </a>

        <div className="flex lg:hidden items-center gap-3">
          <a
            href={BUSINESS.phoneHref}
            className="flex items-center gap-2 bg-[#388e3c] text-white font-bold text-sm px-4 py-2.5 rounded-lg whitespace-nowrap hover:bg-[#2e7d32] transition-colors"
          >
            📞 {BUSINESS.phone}
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 p-1"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-[#333] transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#333] transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#333] transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-semibold text-lg text-[#111] py-3 border-b border-gray-100 flex items-center justify-between"
            >
              {link.label}
              <span className="text-gray-300">›</span>
            </a>
          ))}

          <div className="mt-4 bg-[#f9f9f9] rounded-xl p-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Contact Us</p>
            <a href={BUSINESS.phoneHref} className="flex items-center gap-2 text-[#388e3c] font-semibold text-base mb-1 hover:underline hover:bg-[#2e7d32] transition-colors rounded-md px-2 py-1">
              📞 {BUSINESS.phone}
            </a>
            <p className="text-sm text-gray-500">{BUSINESS.email}</p>
            <p className="text-sm text-gray-500 mt-1">{BUSINESS.hours}</p>
          </div>

          <div className="mt-4 flex flex-col gap-3">
            <a
              href={BUSINESS.phoneHref}
              className="w-full bg-[#388e3c] text-white font-bold text-base py-3.5 rounded-xl text-center hover:bg-[#2e7d32] transition-colors"
            >
              📞 Call for a Free Quote
            </a>
            <a
              href={BUSINESS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] text-white font-bold text-base py-3.5 rounded-xl text-center"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
