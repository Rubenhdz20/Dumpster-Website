# HIDA Dumpster — Marketing Website

A high-performance, conversion-focused landing page for **HIDA Dumpster**, a family-owned dumpster rental and junk removal service based in Lafayette, Indiana. Built with Next.js 16 and Tailwind CSS.

---

## Overview

This single-page marketing site is designed to convert local search traffic into phone calls and booking inquiries. It communicates pricing, service areas, and trust signals without requiring any backend, database, or authentication.

**Live contact:**
- Phone: (765) 586-7136
- Email: Andresrmzhidalgo@gmail.com
- Location: Lafayette, IN 47904

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| UI Library | React 19 |
| Language | TypeScript 5 (strict mode) |
| Styling | Tailwind CSS 3.4 |
| Fonts | Google Fonts via `next/font` (Barlow, Barlow Condensed, Inter) |
| Images | Next.js `Image` component (AVIF/WebP optimization) |
| Linting | ESLint 9 with Next.js core-web-vitals config |
| Deployment | Compatible with Vercel, Netlify, or any Node host |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Install & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

---

## Project Structure

```
hida-dumpster/
├── app/
│   ├── layout.tsx          # Root layout — fonts, metadata, HTML shell
│   ├── page.tsx            # Home page — composes all section components
│   └── globals.css         # Global styles, CSS custom properties, Tailwind base
├── components/
│   ├── Header.tsx          # Sticky nav with mobile hamburger menu (Client Component)
│   ├── Hero.tsx            # Hero section with background image and dual CTAs
│   ├── Services.tsx        # 5-card service grid (2 featured)
│   ├── Pricing.tsx         # 10-yard and 15-yard pricing tiers
│   ├── HowItWorks.tsx      # 3-step process flow
│   ├── WhyChooseUs.tsx     # 4 differentiator cards + stats
│   ├── ServiceAreas.tsx    # Embedded Google Map + coverage details
│   ├── Reviews.tsx         # Customer testimonials with star ratings
│   ├── FAQ.tsx             # Accordion FAQ — 5 items (Client Component)
│   ├── FinalCTA.tsx        # Closing call-to-action with contact buttons
│   └── Footer.tsx          # Footer with navigation, contact, and copyright
├── libs/
│   └── constants.ts        # All business data — update here to change site content
├── public/
│   └── images/
│       ├── Logo.png
│       ├── heroimage.jpeg
│       ├── 10Yard.jpeg
│       └── 15Yard.jpeg
├── types/
│   └── index.ts            # Reserved for shared TypeScript types
└── Configuration
    ├── next.config.ts
    ├── tailwind.config.ts
    ├── tsconfig.json
    ├── postcss.config.mjs
    └── eslint.config.mjs
```

---

## Components

### Server Components (default)
Most components are React Server Components — they render at build time with no client-side JavaScript.

| Component | Section ID | Description |
|-----------|-----------|-------------|
| `Hero` | `#hero` | Full-width hero with overlay, star rating, and CTA buttons |
| `Services` | `#services` | Cards for Residential, Commercial, Construction, Material Delivery, and Junk Removal |
| `Pricing` | `#pricing` | Side-by-side pricing cards for 10-yard and 15-yard dumpsters |
| `HowItWorks` | `#how-it-works` | Numbered 3-step process with a connecting line on desktop |
| `WhyChooseUs` | `#why-us` | Trust signals: next-day delivery, transparent pricing, family-owned, material delivery |
| `ServiceAreas` | `#areas` | Embedded Google Map + primary and secondary coverage cities |
| `Reviews` | `#reviews` | Two verified customer testimonials with avatar initials and star ratings |
| `FinalCTA` | `#cta` | Closing section with call, WhatsApp, and email action buttons |
| `Footer` | — | Logo, navigation links, service area preview, contact info, copyright |

### Client Components
These components use React state and require client-side JavaScript.

| Component | Why Client |
|-----------|-----------|
| `Header` | Mobile menu toggle, scroll-lock body, keyboard `Escape` handler |
| `FAQ` | Accordion open/close state per item |

---

## Business Data (`libs/constants.ts`)

All site content is centralized in a single file. To update phone numbers, pricing, service areas, hours, or any other business detail — edit only this file.

```ts
// Key exports:
BUSINESS       // name, phone, phoneHref, email, city, zip, hours
HERO           // headline, subheadline, socialProof
PRICING        // tiers[], features[], paymentMethods[]
SERVICE_AREAS  // string[] of city names
SERVICES       // service card definitions
FAQ_ITEMS      // question/answer pairs
HOW_IT_WORKS   // step definitions
WHY_CHOOSE_US  // differentiator cards
REVIEWS        // customer testimonial objects
```

---

## Design System

### CSS Custom Properties

Defined in `app/globals.css` and used throughout all components:

```css
--green:          #388e3c    /* Primary brand color */
--green-dark:     #2e7d32    /* Hover/active state */
--green-light:    #e8f5e9    /* Subtle green backgrounds */
--green-border:   #c8e6c9    /* Green-tinted borders */
--whatsapp:       #25D366    /* WhatsApp CTA button */
--text:           #111111    /* Primary text */
--text-dim:       #6b6b6b    /* Secondary text */
--text-muted:     #999999    /* Placeholder/caption text */
--surface:        #f9f9f9    /* Page background */
--surface-2:      #f4f4f4    /* Card/chip backgrounds */
--border:         #e0e0e0    /* Default border color */
```

### Typography

| Role | Font | Weight | Variable |
|------|------|--------|----------|
| Display / Headlines | Barlow Condensed | 800 ExtraBold | `--font-barlow-condensed` |
| Body / Subheadings | Barlow | 400, 700 | `--font-barlow` |
| Labels / UI | Inter | 400–700 | `--font-inter` |

Headline font sizes use `clamp()` for fluid responsive scaling (e.g., `clamp(30px, 4vw, 44px)`).

---

## Page Sections (in order)

```
Header          ← Sticky navigation
Hero            ← #hero
Services        ← #services
Pricing         ← #pricing
HowItWorks      ← #how-it-works
WhyChooseUs     ← #why-us
ServiceAreas    ← #areas
Reviews         ← #reviews
FAQ             ← #faq
FinalCTA        ← #cta
Footer
```

All section IDs are also used by the `Header` nav links for smooth-scroll anchoring.

---

## Pricing

| Container | Weekly Rate | Included Weight | Extra Ton | Extra Day |
|-----------|------------|----------------|-----------|-----------|
| 10 Yard | $280 | 2 tons | +$60 | +$30 |
| 15 Yard | $370 | 2 tons | +$60 | +$30 |

- 7-day rental period
- Delivery radius: 15 miles free, $1/mile beyond
- Weight receipts provided
- Accepted payments: Cash, Zelle, Venmo, CashApp

---

## Service Areas

**Primary:** Lafayette, West Lafayette
**Secondary:** Frankfort, Crawfordsville, Delphi, Monticello, Attica
**Delivery:** 15-mile free radius from Lafayette, IN 47904

---

## Accessibility

- Semantic HTML throughout (`nav`, `main`, `footer`, `article`, `ul`, `button`)
- ARIA attributes: `aria-label`, `aria-labelledby`, `aria-controls`, `aria-expanded`
- Keyboard support: `Escape` closes the mobile menu; all interactive elements are focusable
- Color contrast meets WCAG AA for primary text/background combinations
- Images include descriptive `alt` text

---

## Performance

- **Static generation** — No server-side rendering required; entire site pre-renders at build time
- **Image optimization** — Next.js serves AVIF/WebP with correct `sizes` attributes
- **Font optimization** — Google Fonts loaded via `next/font` with `display: swap` and Latin subset only
- **Tailwind purging** — Unused CSS classes are removed at build time
- **Zero client JS on most sections** — Only `Header` and `FAQ` ship JavaScript to the browser

---

## Updating Content

1. **Business info** (phone, email, hours) → `libs/constants.ts` → `BUSINESS`
2. **Pricing** → `libs/constants.ts` → `PRICING`
3. **Service areas** → `libs/constants.ts` → `SERVICE_AREAS`
4. **FAQ questions** → `libs/constants.ts` → `FAQ_ITEMS`
5. **Images** → replace files in `public/images/` (keep same filenames or update the `src` props)
6. **Brand colors** → `app/globals.css` → CSS custom properties under `:root`

---

## License

Private project. All rights reserved — HIDA Dumpster, Lafayette, IN.
