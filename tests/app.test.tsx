import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "@jest/globals"
import { renderToStaticMarkup } from "react-dom/server"

import RootLayout, { metadata } from "@/app/layout"
import Home from "@/app/page"

describe("app composition", () => {
  it("renders the full homepage section stack in the main landmark", () => {
    const { container } = render(<Home />)

    expect(screen.getByRole("main")).toBeInTheDocument()
    
    expect(screen.getByRole("banner")).toBeInTheDocument()
    expect(screen.getByRole("heading", { level: 1, name: /fast dumpster rental in lafayette, in/i })).toBeInTheDocument()
    expect(screen.getByRole("contentinfo")).toBeInTheDocument()

    const directChildren = container.querySelectorAll("main > *")
    expect(directChildren).toHaveLength(11)
    expect(container.querySelector("#services")).toBeInTheDocument()
    expect(container.querySelector("#pricing")).toBeInTheDocument()
    expect(container.querySelector("#contact")).toBeInTheDocument()
  })

  it("exports the production metadata for search and social previews", () => {
    expect(metadata.title).toBe("HIDA Dumpster | Fast Dumpster Rental in Lafayette, IN")
    expect(metadata.description).toContain("Local dumpster rental and junk removal")
  })

  it("wraps children in the document shell with the expected html language and font variables", () => {
    const markup = renderToStaticMarkup(
      <RootLayout>
        <div>Page content</div>
      </RootLayout>,
    )

    expect(markup).toContain('<html lang="en">')
    expect(markup).toContain("Page content")
    expect(markup).toContain('<body class="variable variable variable">')
  })
})