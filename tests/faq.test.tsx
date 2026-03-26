import { fireEvent, render, screen } from "@testing-library/react"
import { describe, expect, it } from "@jest/globals"

import FAQ from "@/components/FAQ"

describe("FAQ", () => {
  it("opens the first answer by default", () => {
    render(<FAQ />)

    const firstQuestion = screen.getByRole("button", { name: /what sizes do you offer\?/i })
    const answerRegion = document.getElementById(firstQuestion.getAttribute("aria-controls") ?? "")

    expect(firstQuestion).toHaveAttribute("aria-expanded", "true")
    expect(answerRegion).toHaveClass("block")
    expect(screen.getByText(/containers starting at \$280/i)).toBeVisible()
  })

  it("collapses the active question when clicked again", () => {
    render(<FAQ />)

    const firstQuestion = screen.getByRole("button", { name: /what sizes do you offer\?/i })
    const answerRegionId = firstQuestion.getAttribute("aria-controls") ?? ""
    fireEvent.click(firstQuestion)

    expect(firstQuestion).toHaveAttribute("aria-expanded", "false")
    expect(document.getElementById(answerRegionId)).toHaveClass("hidden")
  })

  it("switches the open panel when another question is selected", () => {
    render(<FAQ />)

    const firstQuestion = screen.getByRole("button", { name: /what sizes do you offer\?/i })
    const deliveryQuestion = screen.getByRole("button", { name: /do you offer same-day delivery\?/i })
    const firstRegionId = firstQuestion.getAttribute("aria-controls") ?? ""
    const deliveryRegionId = deliveryQuestion.getAttribute("aria-controls") ?? ""

    fireEvent.click(deliveryQuestion)

    expect(firstQuestion).toHaveAttribute("aria-expanded", "false")
    expect(deliveryQuestion).toHaveAttribute("aria-expanded", "true")
    expect(document.getElementById(firstRegionId)).toHaveClass("hidden")
    expect(document.getElementById(deliveryRegionId)).toHaveClass("block")
    expect(screen.getByText(/next-day delivery is our standard fallback/i)).toBeVisible()
  })
})