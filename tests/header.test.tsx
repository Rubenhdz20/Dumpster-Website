import { fireEvent, render, screen, within } from "@testing-library/react"
import { describe, expect, it } from "@jest/globals"

import Header from "@/components/Header"
import { BUSINESS } from "@/libs/constants"

describe("Header", () => {
  it("renders branding, desktop navigation, and primary call CTA", () => {
    const { container } = render(<Header />)

    expect(screen.getByRole("banner")).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /hida dumpster home/i })).toHaveAttribute("href", "/")

    const primaryNav = screen.getByRole("navigation", { name: /primary/i })
    expect(within(primaryNav).getByRole("link", { name: "Services" })).toHaveAttribute("href", "#services")
    expect(within(primaryNav).getByRole("link", { name: "Prices" })).toHaveAttribute("href", "#pricing")

    const phoneLinks = container.querySelectorAll(`a[href="${BUSINESS.phoneHref}"]`)
    expect(phoneLinks.length).toBeGreaterThanOrEqual(2)
  })

  it("opens and closes the mobile menu while managing body scroll lock", () => {
    render(<Header />)

    const toggle = screen.getByRole("button", { name: /open menu/i })
    fireEvent.click(toggle)

    expect(toggle).toHaveAttribute("aria-expanded", "true")
    expect(document.body).toHaveStyle({ overflow: "hidden" })

    const mobileNav = screen.getByRole("navigation", { name: /mobile/i })
    fireEvent.click(within(mobileNav).getByRole("link", { name: "FAQ" }))

    expect(screen.queryByRole("navigation", { name: /mobile/i })).not.toBeInTheDocument()
    expect(document.body.style.overflow).toBe("")
  })

  it("closes the mobile menu when Escape is pressed", () => {
    render(<Header />)

    fireEvent.click(screen.getByRole("button", { name: /open menu/i }))
    fireEvent.keyDown(window, { key: "Escape" })

    expect(screen.queryByRole("navigation", { name: /mobile/i })).not.toBeInTheDocument()
    expect(screen.getByRole("button", { name: /open menu/i })).toHaveAttribute("aria-expanded", "false")
  })

  it("cleans up the body overflow style on unmount", () => {
    const { unmount } = render(<Header />)

    fireEvent.click(screen.getByRole("button", { name: /open menu/i }))
    expect(document.body).toHaveStyle({ overflow: "hidden" })

    unmount()

    expect(document.body.style.overflow).toBe("")
  })
})