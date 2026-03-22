import type { Metadata } from "next"
import { Barlow, Barlow_Condensed, Inter } from "next/font/google"
import "./globals.css"

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-barlow",
})

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["800"],
  variable: "--font-barlow-condensed",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "HIDA Dumpster | Fast Dumpster Rental in Lafayette, IN",
  description: "Local dumpster rental and junk removal in Lafayette, Indiana. 10 and 15 yard containers. Next-day delivery. Call (765) 586-7136.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${barlow.variable} ${barlowCondensed.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  )
}