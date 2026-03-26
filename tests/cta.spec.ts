import { expect, test } from "@playwright/test"

const PHONE_HREF = "tel:+17655867136"
const SMS_PREFIX = "sms:+17655867136"

test.describe("CTAs", () => {
  test("all phone buttons have href='tel:+17655867136'", async ({ page }) => {
    await page.goto("/")
    const phoneLinks = page.locator(`a[href="${PHONE_HREF}"]`)
    const count = await phoneLinks.count()
    expect(count).toBeGreaterThanOrEqual(1)
    for (let i = 0; i < count; i++) {
      await expect(phoneLinks.nth(i)).toHaveAttribute("href", PHONE_HREF)
    }
  })

  test("all SMS buttons have href starting with 'sms:+17655867136'", async ({ page }) => {
    await page.goto("/")
    const smsLinks = page.locator(`a[href^="${SMS_PREFIX}"]`)
    const count = await smsLinks.count()
    expect(count).toBeGreaterThanOrEqual(1)
    for (let i = 0; i < count; i++) {
      const href = await smsLinks.nth(i).getAttribute("href")
      expect(href).toContain(SMS_PREFIX)
    }
  })

  test("final CTA section has both phone and SMS buttons", async ({ page }) => {
    await page.goto("/")
    const ctaSection = page.locator("#contact")
    await expect(ctaSection.locator(`a[href="${PHONE_HREF}"]`)).toBeVisible()
    await expect(ctaSection.locator(`a[href^="${SMS_PREFIX}"]`)).toBeVisible()
  })

  test.describe("desktop (1280px)", () => {
    test.use({ viewport: { width: 1280, height: 800 } })

    test("header phone button is visible on desktop", async ({ page }) => {
      await page.goto("/")
      await expect(page.locator('[data-testid="header-phone-desktop"]')).toBeVisible()
    })
  })

  test.describe("mobile (375px)", () => {
    test.use({ viewport: { width: 375, height: 812 } })

    test("hero call button is visible on mobile", async ({ page }) => {
      await page.goto("/")
      await expect(
        page.locator("#hero").getByRole("link", { name: /call for a free quote/i }),
      ).toBeVisible()
    })

    test("hero SMS button is visible on mobile", async ({ page }) => {
      await page.goto("/")
      await expect(
        page.locator("#hero").getByRole("link", { name: /send us a text/i }),
      ).toBeVisible()
    })
  })
})
