export const BUSINESS = {
  name: "HIDA Dumpster",
  phone: "(765) 586-7136",
  phoneHref: "tel:+17655867136",
  whatsapp: "https://wa.me/17655867136?text=Hi%20HIDA%20Dumpster%2C%20I%27d%20like%20to%20get%20a%20quote",
  email: "Andresrmzhidalgo@gmail.com",
  hours: "6:00 AM – 7:00 PM Daily",
  city: "Lafayette, Indiana",
  zip: "47904",
} as const

export const HERO = {
  eyebrow: "Lafayette, Indiana's Local Dumpster Rental",
  title: "Fast Dumpster Rental in Lafayette, IN",
  subtitle: "Same-day or next-day delivery. No hidden fees.",
  socialProof: "100+ Rentals Completed",
  ratingLabel: "Rated 5 out of 5 by customers across more than 100 completed rentals",
  imageAlt: "Roll-off dumpster container ready for delivery in Lafayette, Indiana",
} as const

export const PRICING = {
  tenYard: {
    size: "10 Yard",
    price: 280,
    description: "Perfect for small cleanouts, bathroom remodels, small decks",
    includes: [
      "Includes 2 tons of trash",
      "7-day rental period",
      "Extra ton: +$60",
      "Extra day: +$30",
    ],
  },
  fifteenYard: {
    size: "15 Yard",
    price: 370,
    description: "Ideal for large renovations, roofing, garage and estate cleanouts",
    includes: [
      "Includes 2 tons of trash",
      "7-day rental period",
      "Extra ton: +$60",
      "Extra day: +$30",
    ],
  },
} as const

export const SERVICE_AREAS = [
  "Lafayette",
  "West Lafayette",
  "Frankfort",
  "Crawfordsville",
  "Delphi",
  "Monticello",
  "Attica",
] as const