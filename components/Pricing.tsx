import Image from "next/image"
import { PRICING } from "../libs/constants"

const paymentMethods = [
  { icon: "💵", label: "Cash" },
  { icon: "🏦", label: "Zelle" },
  { icon: "📱", label: "Venmo" },
  { icon: "🟩", label: "Cash App" },
  { icon: "💳", label: "Card" },
]

const pricingCards = [
  {
    key: "ten-yard",
    image: "/images/10Yard.jpeg",
    imageAlt: "10 Yard Dumpster",
    plan: PRICING.tenYard,
    popular: false,
  },
  {
    key: "fifteen-yard",
    image: "/images/15Yard.jpeg",
    imageAlt: "15 Yard Dumpster",
    plan: PRICING.fifteenYard,
    popular: true,
  },
] as const

export default function Pricing() {
  return (
    <section id="pricing" className="bg-[#f9f9f9] py-20" aria-labelledby="pricing-heading">
      <div className="max-w-[900px] mx-auto px-5">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-2.5">
            <div className="w-6 h-0.5 bg-[#388e3c]" />
            <span className="font-semibold text-[11px] uppercase tracking-widest text-[#388e3c]">
              Sizes & Pricing
            </span>
            <div className="w-6 h-0.5 bg-[#388e3c]" />
          </div>
          <h2
            id="pricing-heading"
            className="font-extrabold text-[clamp(28px,4vw,40px)] uppercase text-[#111111] leading-tight"
          >
            Pick the Right Size For Your Project
          </h2>
          <p className="mt-3 text-[14px] text-[#5f5f5f]">
            Transparent weekly pricing with included tonnage and no surprise add-ons.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" role="list" aria-label="Dumpster rental sizes and prices">
          {pricingCards.map((card) => (
            <article
              key={card.key}
              role="listitem"
              className={`bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] ${
                card.popular ? "relative ring-2 ring-[#388e3c]/20" : ""
              }`}
            >
              <div className="h-[160px] bg-[#e8f5e9] flex items-center justify-center">
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  className="w-full h-full object-cover object-center"
                  width={150}
                  height={160}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {card.popular && (
                <div className="absolute top-[148px] right-0 bg-[#388e3c] text-white font-bold text-[11px] uppercase tracking-wide px-3 py-1.5 rounded-bl-lg">
                  Most Popular
                </div>
              )}

              <div className={`p-6 ${card.popular ? "pt-8" : ""}`}>
                <h3 className="font-extrabold text-[26px] uppercase text-[#111111] leading-tight">
                  {card.plan.size}
                </h3>
                <p className="text-[12px] font-semibold uppercase tracking-wide text-[#6b6b6b] mt-2">
                  Starting at
                </p>
                <p className="font-extrabold text-[32px] text-[#388e3c] leading-tight mb-2">
                  ${card.plan.price}{" "}
                  <span className="text-[18px] font-semibold text-[#6b6b6b]">/ week</span>
                </p>
                <p className="text-[14px] text-[#6b6b6b] mb-4 min-h-[42px]">
                  {card.plan.description}
                </p>
                <ul className="flex flex-col gap-2 mb-6" aria-label={`${card.plan.size} rental details`}>
                  {card.plan.includes.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-[14px] text-[#333]">
                      <span className="text-[#388e3c] font-bold" aria-hidden="true">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="block w-full bg-[#388e3c] hover:bg-[#2e7d32] text-white font-bold text-[15px] py-3.5 rounded-xl text-center transition-colors"
                  aria-label={`Book ${card.plan.size} dumpster`}
                >
                  Book {card.plan.size}
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Payment methods */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          <span className="text-[13px] font-semibold text-[#6b6b6b] mr-1">
            We Accept:
          </span>
          {paymentMethods.map((method) => (
            <span
              key={method.label}
              className="flex items-center gap-1.5 bg-white border border-[#e0e0e0] rounded-full px-3.5 py-1.5 text-[12px] font-semibold text-[#555]"
            >
              {method.icon} {method.label}
            </span>
          ))}
        </div>

      </div>
    </section>
  )
}