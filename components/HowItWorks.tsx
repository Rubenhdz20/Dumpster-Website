const steps = [
  {
    number: "01",
    title: "Call or Text Us",
    description: "Tell us your project, preferred container size and date. We'll confirm availability right away.",
    detail: "Fast quote and availability check",
  },
  {
    number: "02",
    title: "We Deliver Your Container",
    description: "We drop off the container at your location. Next-day delivery available — same-day if we have availability.",
    detail: "Placed where it works best for your site",
  },
  {
    number: "03",
    title: "Fill It Up, We Pick It Up",
    description: "Load your debris. When you're done, call us and we'll haul everything away. Simple.",
    detail: "Straightforward pickup when you are ready",
  },
] as const

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-title"
      className="bg-[linear-gradient(180deg,#ffffff_0%,#f6fbf7_100%)] py-16 lg:py-20"
    >
      <div className="mx-auto max-w-[1120px] px-5">

        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-2.5 flex items-center justify-center gap-2">
            <div className="h-0.5 w-6 bg-[var(--green)]" />
            <span className="font-[family-name:var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--green)]">
              How It Works
            </span>
            <div className="h-0.5 w-6 bg-[var(--green)]" />
          </div>
          <h2
            id="how-it-works-title"
            className="mb-3 font-[family-name:var(--font-barlow-condensed)] text-[clamp(30px,4vw,44px)] font-extrabold uppercase leading-[0.95] text-[var(--text)]"
          >
            Renting a dumpster should take minutes, not phone tag
          </h2>
          <p className="mx-auto max-w-[700px] font-[family-name:var(--font-barlow)] text-[16px] leading-7 text-[var(--text-dim)]">
            From the first message to final pickup, we keep the process clear, fast, and local.
          </p>
        </div>

        <div className="relative">
          <div aria-hidden="true" className="absolute left-[calc(16.666%-12px)] right-[calc(16.666%-12px)] top-11 hidden h-0.5 bg-[linear-gradient(90deg,var(--green-border)_0%,var(--green)_50%,var(--green-border)_100%)] lg:block" />
          <ol className="grid gap-4 lg:grid-cols-3 lg:gap-6">
            {steps.map((step) => (
              <li key={step.number} className="list-none">
                <article className="relative flex h-full flex-col rounded-[20px] border border-[var(--green-border)] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--green)] font-[family-name:var(--font-barlow-condensed)] text-[24px] font-extrabold leading-none text-white shadow-[0_8px_20px_rgba(56,142,60,0.25)]">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="mb-2 font-[family-name:var(--font-barlow-condensed)] text-[26px] font-extrabold uppercase leading-none text-[var(--text)]">
                    {step.title}
                  </h3>
                  <p className="mb-4 font-[family-name:var(--font-barlow)] text-[15px] leading-7 text-[var(--text-dim)]">
                    {step.description}
                  </p>
                  <div className="mt-auto rounded-[14px] border border-[var(--green-border)] bg-[var(--green-light)]/70 px-4 py-3 font-[family-name:var(--font-inter)] text-[13px] font-medium text-[var(--text)]">
                    {step.detail}
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}