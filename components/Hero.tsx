import { BUSINESS } from "../libs/constants"

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        width: "100%",
        height: "580px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Background photo */}
      <img
        src="/images/hero.jpg"
        alt="HIDA Dumpster"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />

      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.52)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          padding: "0 24px",
          maxWidth: 680,
          width: "100%",
        }}
      >
        {/* Eyebrow */}
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: 12,
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "rgba(255,255,255,0.75)",
            marginBottom: 12,
          }}
        >
          Lafayette, Indiana's Local Dumpster Rental
        </p>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "var(--font-barlow-condensed)",
            fontWeight: 800,
            fontSize: "clamp(36px, 6vw, 58px)",
            textTransform: "uppercase",
            color: "#ffffff",
            lineHeight: 1.05,
            marginBottom: 16,
          }}
        >
          Fast Dumpster Rental in Lafayette, IN
        </h1>

        {/* Subheadline */}
        <p
          style={{
            fontFamily: "var(--font-barlow)",
            fontSize: "clamp(15px, 2vw, 18px)",
            color: "rgba(255,255,255,0.82)",
            marginBottom: 24,
          }}
        >
          Same-day or next-day delivery. No hidden fees.
        </p>

        {/* Trust row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            marginBottom: 32,
          }}
        >
          <span style={{ color: "#f5a623", fontSize: 16 }}>★★★★★</span>
          <span
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: 13,
              fontWeight: 500,
              color: "rgba(255,255,255,0.85)",
            }}
          >
            100+ Rentals Completed
          </span>
        </div>

        {/* CTA Buttons */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
            alignItems: "center",
          }}
          className="sm:flex-row sm:justify-center"
        >
          <a
            href={BUSINESS.phoneHref}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              backgroundColor: "#388e3c",
              color: "#ffffff",
              fontWeight: 700,
              fontSize: 15,
              padding: "16px 32px",
              borderRadius: 10,
              textDecoration: "none",
              width: "100%",
              boxShadow: "0 4px 20px rgba(56,142,60,0.4)",
            }}
            className="sm:w-auto"
          >
            📞 Call for a Free Quote
          </a>
            <a
            href={BUSINESS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              backgroundColor: "#25D366",
              color: "#ffffff",
              fontWeight: 700,
              fontSize: 15,
              padding: "16px 32px",
              borderRadius: 10,
              textDecoration: "none",
              width: "100%",
            }}
            className="sm:w-auto"
          >
            💬 Message on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}