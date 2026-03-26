import { render, screen, within } from "@testing-library/react"
import { describe, expect, it } from "@jest/globals"

import FAQ from "@/components/FAQ"
import FinalCTA from "@/components/FinalCTA"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import HowItWorks from "@/components/HowItWorks"
import Pricing from "@/components/Pricing"
import Reviews from "@/components/Reviews"
import ServiceAreas from "@/components/ServiceAreas"
import Services from "@/components/Services"
import WhyChooseUs from "@/components/WhyChooseUs"
import { BUSINESS, HERO, PRICING, SERVICE_AREAS } from "@/libs/constants"

describe("landing page sections", () => {
  it("renders the hero section with both primary contact actions", () => {
    render(<Hero />)

    expect(screen.getByRole("heading", { level: 1, name: HERO.title })).toBeInTheDocument()
    expect(screen.getByText(HERO.subtitle)).toBeInTheDocument()
    expect(screen.getByRole("img", { name: HERO.imageAlt })).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /call for a free quote/i })).toHaveAttribute("href", BUSINESS.phoneHref)

    const textLink = screen.getByRole("link", { name: /send us a text/i })
    expect(textLink).toHaveAttribute("href", BUSINESS.sms)
    expect(textLink).toHaveAttribute("target", "_blank")
  })

  it("renders the services section with all service cards and badges", () => {
    const { container } = render(<Services />)

    expect(screen.getByRole("heading", { level: 2, name: /cleanup support for homes, contractors, and job sites/i })).toBeInTheDocument()
    expect(screen.getByRole("heading", { level: 3, name: /residential cleanouts/i })).toBeInTheDocument()
    expect(screen.getByRole("heading", { level: 3, name: /material delivery/i })).toBeInTheDocument()
    expect(screen.getByText("Popular Add-On")).toBeInTheDocument()
    expect(screen.getByText("Free Estimate")).toBeInTheDocument()
    expect(container.querySelector(`a[href="${BUSINESS.phoneHref}"]`)).toBeInTheDocument()
  })

  it("renders pricing plans with included details and payment methods", () => {
    render(<Pricing />)

    expect(screen.getByRole("heading", { level: 2, name: /pick the right size for your project/i })).toBeInTheDocument()
    expect(screen.getByRole("heading", { level: 3, name: PRICING.tenYard.size })).toBeInTheDocument()
    expect(screen.getByRole("heading", { level: 3, name: PRICING.fifteenYard.size })).toBeInTheDocument()
    expect(screen.getByText("Most Popular")).toBeInTheDocument()
    expect(screen.getByText(/Cash App/, { selector: "span" })).toBeInTheDocument()

    const tenYardList = screen.getByRole("list", { name: /10 yard rental details/i })
    expect(within(tenYardList).getByText("7-day rental period")).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /book 15 yard dumpster/i })).toHaveAttribute("href", "#contact")
  })

  it("renders the how-it-works flow with each step in sequence", () => {
    render(<HowItWorks />)

    expect(screen.getByRole("heading", { level: 2, name: /renting a dumpster should take minutes/i })).toBeInTheDocument()
    expect(screen.getByText("01")).toBeInTheDocument()
    expect(screen.getByText("02")).toBeInTheDocument()
    expect(screen.getByText("03")).toBeInTheDocument()
    expect(screen.getByRole("heading", { level: 3, name: /call or text us/i })).toBeInTheDocument()
    expect(screen.getByRole("heading", { level: 3, name: /we deliver your container/i })).toBeInTheDocument()
    expect(screen.getByRole("heading", { level: 3, name: /fill it up, we pick it up/i })).toBeInTheDocument()
  })

  it("renders the why-choose-us section with reasons and stats", () => {
    render(<WhyChooseUs />)

    expect(screen.getByRole("heading", { level: 2, name: /local service without the call-center runaround/i })).toBeInTheDocument()
    expect(screen.getByRole("heading", { level: 3, name: /next-day delivery/i })).toBeInTheDocument()
    expect(screen.getByRole("heading", { level: 3, name: /transparent pricing/i })).toBeInTheDocument()
    expect(screen.getByText("100+")).toBeInTheDocument()
    expect(screen.getByText(BUSINESS.hours.replace(" Daily", ""))).toBeInTheDocument()
    expect(screen.getAllByText(/trusted/i).length).toBeGreaterThanOrEqual(4)
  })

  it("renders service areas, map embeds, and delivery contact links", () => {
    const { container } = render(<ServiceAreas />)

    expect(screen.getByRole("heading", { level: 2, name: /we deliver across lafayette and the surrounding area/i })).toBeInTheDocument()
    expect(screen.getByRole("heading", { level: 3, name: SERVICE_AREAS[0] })).toBeInTheDocument()
    expect(screen.getByRole("heading", { level: 3, name: SERVICE_AREAS[1] })).toBeInTheDocument()
    expect(screen.getByText(SERVICE_AREAS[2])).toBeInTheDocument()
    expect(screen.getByText("Nearby areas by request")).toBeInTheDocument()
    expect(screen.getByTitle(/service area map/i)).toHaveAttribute("src", expect.stringContaining("google.com/maps/embed"))

    const openMapLink = screen.getByRole("link", { name: /open map/i })
    expect(openMapLink).toHaveAttribute("href", expect.stringContaining("maps.google.com"))
    expect(openMapLink).toHaveAttribute("target", "_blank")

    expect(container.querySelector(`a[href="${BUSINESS.phoneHref}"]`)).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /send us a text/i })).toHaveAttribute("href", BUSINESS.sms)
  })

  it("renders customer reviews and trust signals", () => {
    render(<Reviews />)

    expect(screen.getByRole("heading", { level: 2, name: /trusted by cleanup jobs across lafayette/i })).toBeInTheDocument()
    expect(screen.getByText("James R.")).toBeInTheDocument()
    expect(screen.getByText("Maria L.")).toBeInTheDocument()
    expect(screen.getByText(/exact placement and straightforward pricing/i)).toBeInTheDocument()
    expect(screen.getByText(HERO.socialProof.toLowerCase())).toBeInTheDocument()
  })

  it("renders the final CTA section with all contact options", () => {
    const { container } = render(<FinalCTA />)

    expect(screen.getByRole("heading", { level: 2, name: /ready to get a dumpster on your schedule/i })).toBeInTheDocument()
    expect(screen.getByText(/fast answers from a local owner-operated team/i)).toBeInTheDocument()
    expect(container.querySelector(`a[href="${BUSINESS.phoneHref}"]`)).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /send us a text/i })).toHaveAttribute("href", BUSINESS.sms)
    expect(screen.getByRole("link", { name: /email us/i })).toHaveAttribute("href", `mailto:${BUSINESS.email}`)
  })

  it("renders the footer with navigation, coverage preview, and business contact details", () => {
    render(<Footer />)

    expect(screen.getByRole("contentinfo")).toBeInTheDocument()

    const footerNav = screen.getByRole("navigation", { name: /footer/i })
    expect(within(footerNav).getByRole("link", { name: "Home" })).toHaveAttribute("href", "#hero")
    expect(within(footerNav).getByRole("link", { name: "FAQ" })).toHaveAttribute("href", "#faq")

    expect(screen.getByText(SERVICE_AREAS[0])).toBeInTheDocument()
    expect(screen.getByText(SERVICE_AREAS[3])).toBeInTheDocument()
    expect(screen.getByText("Surrounding areas")).toBeInTheDocument()
    expect(screen.getByRole("link", { name: BUSINESS.phone })).toHaveAttribute("href", BUSINESS.phoneHref)
    expect(screen.getByRole("link", { name: BUSINESS.email })).toHaveAttribute("href", `mailto:${BUSINESS.email}`)
    expect(screen.getByText(new RegExp(`© 2026 ${BUSINESS.name}`, "i"))).toBeInTheDocument()
  })

  it("keeps FAQ section accessible within the full landing page section suite", () => {
    render(<FAQ />)

    expect(screen.getByRole("heading", { level: 2, name: /common questions before you book/i })).toBeInTheDocument()
    expect(screen.getAllByRole("button").length).toBeGreaterThanOrEqual(5)
  })
})