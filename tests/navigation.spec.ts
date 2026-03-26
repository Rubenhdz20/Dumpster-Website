import { expect, test } from "@playwright/test"

test.describe("navigation", () => {
  test("page loads without errors at localhost:3000", async ({ page }) => {
    const pageErrors: string[] = []
    page.on("pageerror", (err) => pageErrors.push(err.message))
    await page.setViewportSize({ width: 1280, height: 800 })
    await page.goto("/")
    await expect(page).toHaveTitle(/HIDA Dumpster/)
    expect(pageErrors).toHaveLength(0)
  })

  test("header is visible and sticky", async ({ page }) => {
    await page.goto("/")
    const header = page.locator('[data-testid="header"]')
    await expect(header).toBeVisible()
    const position = await header.evaluate((el) => window.getComputedStyle(el).position)
    expect(position).toBe("fixed")
  })

  test("logo is visible", async ({ page }) => {
    await page.goto("/")
    await expect(page.locator('[data-testid="logo"]')).toBeVisible()
  })

  test("phone number (765) 586-7136 is visible in header", async ({ page }) => {
    await page.goto("/")
    await expect(page.locator('[data-testid="header"]').getByText("(765) 586-7136")).toBeVisible()
  })

  test.describe("desktop nav links", () => {
    test.use({ viewport: { width: 1280, height: 800 } })

    test("all nav links are present: Services, Prices, How It Works, Service Areas, FAQ", async ({ page }) => {
      await page.goto("/")
      const nav = page.locator('[data-testid="nav-desktop"]')
      await expect(nav.getByRole("link", { name: "Services" })).toBeVisible()
      await expect(nav.getByRole("link", { name: "Prices" })).toBeVisible()
      await expect(nav.getByRole("link", { name: "How It Works" })).toBeVisible()
      await expect(nav.getByRole("link", { name: "Service Areas" })).toBeVisible()
      await expect(nav.getByRole("link", { name: "FAQ" })).toBeVisible()
    })

    test("clicking each nav link scrolls to the correct section", async ({ page }) => {
      await page.goto("/")
      const nav = page.locator('[data-testid="nav-desktop"]')

      await nav.getByRole("link", { name: "Services" }).click()
      await expect(page).toHaveURL(/#services/)

      await nav.getByRole("link", { name: "Prices" }).click()
      await expect(page).toHaveURL(/#pricing/)

      await nav.getByRole("link", { name: "How It Works" }).click()
      await expect(page).toHaveURL(/#how-it-works/)

      await nav.getByRole("link", { name: "Service Areas" }).click()
      await expect(page).toHaveURL(/#areas/)

      await nav.getByRole("link", { name: "FAQ" }).click()
      await expect(page).toHaveURL(/#faq/)
    })
  })

  test.describe("mobile viewport (375px)", () => {
    test.use({ viewport: { width: 375, height: 812 } })

    test("hamburger menu opens and closes", async ({ page }) => {
      await page.goto("/")
      const hamburger = page.locator('[data-testid="hamburger"]')
      await expect(hamburger).toBeVisible()

      await hamburger.click()
      await expect(page.locator('[data-testid="mobile-menu"]')).toBeVisible()
      await expect(hamburger).toHaveAttribute("aria-expanded", "true")

      await hamburger.click()
      await expect(page.locator('[data-testid="mobile-menu"]')).not.toBeVisible()
      await expect(hamburger).toHaveAttribute("aria-expanded", "false")
    })

    test("mobile menu shows both CTA buttons", async ({ page }) => {
      await page.goto("/")
      await page.locator('[data-testid="hamburger"]').click()

      const menu = page.locator('[data-testid="mobile-menu"]')
      await expect(menu.locator('[data-testid="mobile-cta-call"]')).toBeVisible()
      await expect(menu.locator('[data-testid="mobile-cta-sms"]')).toBeVisible()
    })
  })
})
