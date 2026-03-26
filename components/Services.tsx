import { Phone } from "lucide-react"
import { BUSINESS } from "@/libs/constants"

type Service = {
  icon: string
  title: string
  description: string
  bestFor: string
  featured?: boolean
  badge?: string
}

const services: readonly Service[] = [
  {
    icon: "🏠",
    title: "Residential Cleanouts",
    description: "Simple dumpster rentals for moving, garage cleanups, downsizing, and home renovation debris.",
    bestFor: "Best for homeowners and landlords",
  },
  {
    icon: "🏢",
    title: "Commercial Jobs",
    description: "Reliable dumpster placement and pickup for offices, retail spaces, property managers, and business cleanups.",
    bestFor: "Best for recurring or scheduled jobs",
  },
  {
    icon: "🏗️",
    title: "Construction Debris",
    description: "Built for roofing, remodeling, demolition, flooring, and contractor job sites that need fast turnaround.",
    bestFor: "Best for remodelers and crews",
  },
  {
    icon: "🚛",
    title: "Material Delivery",
    description: "Need gravel, dirt, or other materials dropped off at the same site? We handle delivery alongside cleanup support.",
    bestFor: "Save time with one local provider",
    featured: true,
    badge: "Popular Add-On",
  },
  {
    icon: "🗑️",
    title: "Junk Removal",
    description: "We haul away furniture, appliances, and bulky items when you want the mess gone without doing the loading yourself.",
    bestFor: "Free estimate available",
    badge: "Free Estimate",
  },
]

function ServiceCard({ service }: { service: Service }) {
  return (
    <li className="h-full list-none">
      <article
        data-testid="service-card"
        className={`group flex h-full flex-col rounded-[18px] border bg-white p-5 shadow-[0_8px_30px_rgba(0,0,0,0.05)] transition-transform duration-200 hover:-translate-y-1 ${service.featured ? "border-[var(--green)] bg-[linear-gradient(180deg,#ffffff_0%,#f5fbf6_100%)]" : "border-[var(--border)]"}`}
      >
        <div className="mb-4 flex items-start justify-between gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-[12px] bg-[var(--green-light)] text-2xl shadow-inner">
            <span aria-hidden="true">{service.icon}</span>
          </div>
          {service.badge ? (
            <span className={`rounded-full px-3 py-1 font-[family-name:var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.08em] ${service.featured ? "bg-[var(--green)] text-white" : "bg-[var(--green-light)] text-[var(--green)]"}`}>
              {service.badge}
            </span>
          ) : null}
        </div>

        <h3
          className={`mb-2 font-[family-name:var(--font-barlow-condensed)] text-[24px] font-extrabold uppercase leading-none ${service.featured ? "text-[var(--green)]" : "text-[var(--text)]"}`}
        >
          {service.title}
        </h3>

        <p className="mb-4 font-[family-name:var(--font-barlow)] text-[15px] leading-6 text-[var(--text-dim)]">
          {service.description}
        </p>

        <div className="mt-auto rounded-[12px] border border-[var(--green-border)] bg-[var(--green-light)]/60 px-3.5 py-3 font-[family-name:var(--font-inter)] text-[13px] font-medium text-[var(--text)]">
          {service.bestFor}
        </div>
      </article>
    </li>
  )
}

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="bg-[var(--surface)] py-16 md:py-20">
      <div className="mx-auto max-w-[1120px] px-5">
        <div className="mb-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end">
          <div>
            <div className="mb-3 flex items-center gap-2.5">
              <div className="h-0.5 w-8 bg-[var(--green)]" />
              <span className="font-[family-name:var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--green)]">
                Our Services
              </span>
            </div>
            <h2
              id="services-title"
              className="mb-3 font-[family-name:var(--font-barlow-condensed)] text-[clamp(30px,4vw,44px)] font-extrabold uppercase leading-[0.95] text-[var(--text)]"
            >
              Cleanup support for homes, contractors, and job sites
            </h2>
            <p className="max-w-[700px] font-[family-name:var(--font-barlow)] text-[16px] leading-7 text-[var(--text-dim)]">
              Whether you need a driveway-friendly dumpster, debris hauled away, or materials delivered to the same address, HIDA keeps the process fast and straightforward.
            </p>
          </div>

          <div className="rounded-[20px] border border-[var(--green-border)] bg-[linear-gradient(180deg,#ffffff_0%,#eef8ef_100%)] p-5 shadow-[0_8px_24px_rgba(56,142,60,0.08)]">
            <p className="mb-1 font-[family-name:var(--font-inter)] text-[12px] font-semibold uppercase tracking-[0.14em] text-[var(--green)]">
              Need help choosing?
            </p>
            <p className="mb-4 font-[family-name:var(--font-barlow)] text-[15px] leading-6 text-[var(--text-dim)]">
              Tell us what you are cleaning up and we will point you to the right service.
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

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </ul>
      </div>
    </section>
  )
}
