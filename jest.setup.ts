import "@testing-library/jest-dom/jest-globals"
import { jest } from "@jest/globals"
import React from "react"

jest.mock("next/image", () => ({
  __esModule: true,
  default: ({
    alt,
    fill: _fill,
    priority: _priority,
    placeholder: _placeholder,
    blurDataURL: _blurDataURL,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement> & {
    fill?: boolean
    priority?: boolean
    placeholder?: string
    blurDataURL?: string
  }) => React.createElement("img", { alt, ...props }),
}))

jest.mock("next/link", () => ({
  __esModule: true,
  default: ({
    children,
    href,
    ...props
  }: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string | { pathname?: string }
    children: React.ReactNode
  }) =>
    React.createElement(
      "a",
      {
        href: typeof href === "string" ? href : href.pathname ?? "",
        ...props,
      },
      children,
    ),
}))