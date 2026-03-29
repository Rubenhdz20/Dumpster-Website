import "@testing-library/jest-dom/jest-globals"
import { jest } from "@jest/globals"
import React from "react"
import type { UrlObject } from "url"


type LinkProps = {
  href: string | UrlObject
  children?: React.ReactNode
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

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
  }: LinkProps) =>
    React.createElement(
      "a",
      {
        href: typeof href === "string" ? href : (href as UrlObject).pathname ?? "",
        ...props,
      },
      children,
    ),
}))