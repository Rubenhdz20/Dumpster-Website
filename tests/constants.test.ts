import { describe, expect, it } from "@jest/globals"

import { BUSINESS, HERO, PRICING, SERVICE_AREAS } from "@/libs/constants"

describe("site constants", () => {
  it("defines business contact details used across the site", () => {
    expect(BUSINESS.name).toBe("HIDA Dumpster")
    expect(BUSINESS.phone).toBe("(765) 586-7136")
    expect(BUSINESS.phoneHref).toBe("tel:+17655867136")
    expect(BUSINESS.sms).toContain("sms:+17655867136")
    expect(BUSINESS.hours).toContain("Daily")
    expect(BUSINESS.city).toBe("Lafayette, Indiana")
  })

  it("keeps hero content aligned with business messaging", () => {
    expect(HERO.eyebrow).toContain("Lafayette")
    expect(HERO.title).toContain("Dumpster Rental")
    expect(HERO.subtitle).toContain("Same-day or next-day")
    expect(HERO.socialProof).toBe("100+ Rentals Completed")
    expect(HERO.ratingLabel).toContain("5 out of 5")
    expect(HERO.imageAlt).toContain("Lafayette, Indiana")
  })

  it("defines both pricing plans with consistent included charges", () => {
    const plans = Object.values(PRICING)

    expect(plans).toHaveLength(2)

    for (const plan of plans) {
      expect(plan.price).toBeGreaterThan(0)
      expect(plan.includes).toEqual(
        expect.arrayContaining([
          "Includes 2 tons of trash",
          "7-day rental period",
          "Extra ton: +$60",
          "Extra day: +$30",
        ]),
      )
    }

    expect(PRICING.fifteenYard.price).toBeGreaterThan(PRICING.tenYard.price)
  })

  it("lists unique service areas with Lafayette first", () => {
    expect(SERVICE_AREAS[0]).toBe("Lafayette")
    expect(new Set(SERVICE_AREAS).size).toBe(SERVICE_AREAS.length)
    expect(SERVICE_AREAS).toEqual(
      expect.arrayContaining(["West Lafayette", "Frankfort", "Crawfordsville"]),
    )
  })
})