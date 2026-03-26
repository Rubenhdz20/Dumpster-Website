import { expect, test } from "@playwright/test"

test.describe("accessibility", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/")
  })

  test("all images have alt text", async ({ page }) => {
    const images = page.locator("img")
    const count = await images.count()
    expect(count).toBeGreaterThan(0)
    for (let i = 0; i < count; i++) {
      const alt = await images.nth(i).getAttribute("alt")
      expect(alt, `Image at index ${i} is missing alt text`).not.toBeNull()
      expect(alt?.trim(), `Image at index ${i} has empty alt text`).not.toBe("")
    }
  })

  test("all buttons have accessible labels", async ({ page }) => {
    const buttons = page.locator("button")
    const count = await buttons.count()
    expect(count).toBeGreaterThan(0)
    for (let i = 0; i < count; i++) {
      const button = buttons.nth(i)
      const ariaLabel = await button.getAttribute("aria-label")
      const text = await button.textContent()
      expect(
        ariaLabel?.trim() || text?.trim(),
        `Button at index ${i} has no accessible label`,
      ).toBeTruthy()
    }
  })

  test("phone links are keyboard accessible", async ({ page }) => {
    const phoneLink = page.locator('a[href="tel:+17655867136"]').first()
    await phoneLink.focus()
    await expect(phoneLink).toBeFocused()
  })

  test("SMS links are keyboard accessible", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 })
    const smsLink = page.locator('a[href^="sms:+17655867136"]').first()
    await smsLink.focus()
    await expect(smsLink).toBeFocused()
  })

  test("FAQ buttons are keyboard accessible", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 })
    const secondButton = page.locator('[data-testid="faq-button"]').nth(1)
    await secondButton.focus()
    await expect(secondButton).toBeFocused()

    await page.keyboard.press("Enter")
    await expect(secondButton).toHaveAttribute("aria-expanded", "true")

    await page.keyboard.press("Enter")
    await expect(secondButton).toHaveAttribute("aria-expanded", "false")
  })
})
