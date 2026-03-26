import { expect, test } from "@playwright/test"

test.describe("responsive — mobile (375px)", () => {
  test.use({ viewport: { width: 375, height: 812 } })

  test("page renders and hero is visible", async ({ page }) => {
    await page.goto("/")
    await expect(page.locator("#hero")).toBeVisible()
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible()
  })

  test("hamburger is visible at 375px", async ({ page }) => {
    await page.goto("/")
    await expect(page.locator('[data-testid="hamburger"]')).toBeVisible()
  })

  test("desktop nav is hidden at 375px", async ({ page }) => {
    await page.goto("/")
    await expect(page.locator('[data-testid="nav-desktop"]')).not.toBeVisible()
  })

  test("hero CTA buttons are visible on mobile", async ({ page }) => {
    await page.goto("/")
    const hero = page.locator("#hero")
    await expect(hero.getByRole("link", { name: /call for a free quote/i })).toBeVisible()
    await expect(hero.getByRole("link", { name: /send us a text/i })).toBeVisible()
  })

  test("pricing section is readable on mobile", async ({ page }) => {
    await page.goto("/")
    await expect(page.locator("#pricing")).toContainText("$280")
    await expect(page.locator("#pricing")).toContainText("$370")
  })
})

test.describe("responsive — tablet (768px)", () => {
  test.use({ viewport: { width: 768, height: 1024 } })

  test("page renders and hero is visible", async ({ page }) => {
    await page.goto("/")
    await expect(page.locator("#hero")).toBeVisible()
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible()
  })

  test("hamburger is visible at 768px", async ({ page }) => {
    await page.goto("/")
    await expect(page.locator('[data-testid="hamburger"]')).toBeVisible()
  })

  test("desktop nav is hidden at 768px", async ({ page }) => {
    await page.goto("/")
    await expect(page.locator('[data-testid="nav-desktop"]')).not.toBeVisible()
  })

  test("services section is visible on tablet", async ({ page }) => {
    await page.goto("/")
    await expect(page.locator("#services")).toBeVisible()
    await expect(page.locator('#services [data-testid="service-card"]')).toHaveCount(5)
  })

  test("pricing section is readable on tablet", async ({ page }) => {
    await page.goto("/")
    await expect(page.locator("#pricing")).toContainText("$280")
    await expect(page.locator("#pricing")).toContainText("$370")
  })
})

test.describe("responsive — desktop (1280px)", () => {
  test.use({ viewport: { width: 1280, height: 800 } })

  test("page renders and hero is visible", async ({ page }) => {
    await page.goto("/")
    await expect(page.locator("#hero")).toBeVisible()
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible()
  })

  test("desktop nav links are visible at 1280px", async ({ page }) => {
    await page.goto("/")
    const nav = page.locator('[data-testid="nav-desktop"]')
    await expect(nav).toBeVisible()
    await expect(nav.getByRole("link", { name: "Services" })).toBeVisible()
    await expect(nav.getByRole("link", { name: "Prices" })).toBeVisible()
    await expect(nav.getByRole("link", { name: "How It Works" })).toBeVisible()
    await expect(nav.getByRole("link", { name: "Service Areas" })).toBeVisible()
    await expect(nav.getByRole("link", { name: "FAQ" })).toBeVisible()
  })

  test("hamburger is hidden at 1280px", async ({ page }) => {
    await page.goto("/")
    await expect(page.locator('[data-testid="hamburger"]')).not.toBeVisible()
  })

  test("header phone button is visible at 1280px", async ({ page }) => {
    await page.goto("/")
    await expect(page.locator('[data-testid="header-phone-desktop"]')).toBeVisible()
  })

  test("all major sections are rendered on desktop", async ({ page }) => {
    await page.goto("/")
    await expect(page.locator("#hero")).toBeVisible()
    await expect(page.locator("#services")).toBeVisible()
    await expect(page.locator("#pricing")).toBeVisible()
    await expect(page.locator("#how-it-works")).toBeVisible()
    await expect(page.locator("#areas")).toBeVisible()
    await expect(page.locator("#faq")).toBeVisible()
    await expect(page.locator("#contact")).toBeVisible()
    await expect(page.locator("footer")).toBeVisible()
  })
})
