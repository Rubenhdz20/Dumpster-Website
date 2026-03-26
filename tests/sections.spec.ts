import { expect, test } from "@playwright/test"

test.describe("landing page sections", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/")
  })

  test("hero section is visible with headline containing 'Lafayette'", async ({ page }) => {
    const hero = page.locator("#hero")
    await expect(hero).toBeVisible()
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Lafayette")
  })

  test("services section renders 5 service cards", async ({ page }) => {
    await expect(page.locator('#services [data-testid="service-card"]')).toHaveCount(5)
  })

  test("pricing section shows $280 and $370", async ({ page }) => {
    const pricing = page.locator("#pricing")
    await expect(pricing).toContainText("$280")
    await expect(pricing).toContainText("$370")
  })

  test("pricing section shows all payment methods", async ({ page }) => {
    const pricing = page.locator("#pricing")
    await expect(pricing).toContainText("Cash")
    await expect(pricing).toContainText("Zelle")
    await expect(pricing).toContainText("Venmo")
    await expect(pricing).toContainText("Cash App")
    await expect(pricing).toContainText("Card")
  })

  test("how it works section shows 3 steps", async ({ page }) => {
    const section = page.locator("#how-it-works")
    await expect(section).toBeVisible()
    await expect(section.getByText("01")).toBeVisible()
    await expect(section.getByText("02")).toBeVisible()
    await expect(section.getByText("03")).toBeVisible()
  })

  test("why choose us section shows stats bar with '100+'", async ({ page }) => {
    const statsBar = page.locator('[data-testid="stats-bar"]')
    await expect(statsBar).toBeVisible()
    await expect(statsBar).toContainText("100+")
  })

  test("service areas section is visible", async ({ page }) => {
    await expect(page.locator("#areas")).toBeVisible()
  })

  test("reviews section shows James R. and Maria L.", async ({ page }) => {
    const reviews = page.locator("#reviews")
    await expect(reviews.getByText("James R.")).toBeVisible()
    await expect(reviews.getByText("Maria L.")).toBeVisible()
  })

  test("FAQ first item is expanded by default", async ({ page }) => {
    const firstButton = page.locator('[data-testid="faq-button"]').first()
    await expect(firstButton).toHaveAttribute("aria-expanded", "true")
  })

  test("FAQ item opens and closes on click", async ({ page }) => {
    const secondButton = page.locator('[data-testid="faq-button"]').nth(1)
    await expect(secondButton).toHaveAttribute("aria-expanded", "false")

    await secondButton.click()
    await expect(secondButton).toHaveAttribute("aria-expanded", "true")

    await secondButton.click()
    await expect(secondButton).toHaveAttribute("aria-expanded", "false")
  })

  test("footer shows copyright '2026 HIDA Dumpster'", async ({ page }) => {
    await expect(page.locator("footer")).toContainText("2026 HIDA Dumpster")
  })
})
