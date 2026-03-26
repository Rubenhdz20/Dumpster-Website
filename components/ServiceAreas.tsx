import { BUSINESS, SERVICE_AREAS } from "@/libs/constants"

const mapEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97772.36603960819!2d-86.97456!3d40.41653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8812e3351a71d6f7%3A0xbac3c4e9a0d64d0!2sLafayette%2C%20IN!5e0!3m2!1sen!2sus!4v1234567890"
const mapDirectionsUrl = "https://maps.google.com/?q=Lafayette,IN"

const featuredAreas = SERVICE_AREAS.slice(0, 2)
const surroundingAreas = SERVICE_AREAS.slice(2)

const coverageFacts = [
  {
    value: "15 mi",
    label: "free delivery radius",
  },
  {
    value: "$1/mi",
    label: "outside the included zone",
  },
  {
    value: BUSINESS.zip,
    label: "home base zip code",
  },
] as const

const deliveryNotes = [
  "Primary coverage across Lafayette and West Lafayette.",
  "Straightforward mileage pricing outside the included radius.",
  "Call or message us if your job site is nearby but not listed.",
] as const

export default function ServiceAreas() {
  return (
    <section
      id="areas"
      aria-labelledby="service-areas-title"
      className="bg-[linear-gradient(180deg,#ffffff_0%,#f6fbf7_100%)] py-16 lg:py-20"
    >
      <div className="mx-auto max-w-[1120px] px-5">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,460px)] lg:items-center lg:gap-10">
          <div>
            <div className="mb-3 flex items-center gap-2.5">
              <div className="h-0.5 w-8 bg-[var(--green)]" />
              <span className="font-[family-name:var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--green)]">
                Service Areas
              </span>
            </div>

            <h2
              id="service-areas-title"
              className="mb-4 max-w-[12ch] font-[family-name:var(--font-barlow-condensed)] text-[clamp(30px,4vw,44px)] font-extrabold uppercase leading-[0.95] text-[var(--text)]"
            >
              We deliver across Lafayette and the surrounding area
            </h2>

            <p className="mb-6 max-w-[58ch] font-[family-name:var(--font-barlow)] text-[16px] leading-7 text-[var(--text-dim)]">
              Free delivery within 15 miles of zip code {BUSINESS.zip}. If your address is outside that radius, we keep it simple with an added $1 per mile.
            </p>

            <div className="mb-6 grid gap-3 sm:grid-cols-3">
              {coverageFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-[18px] border border-[var(--green-border)] bg-white px-4 py-4 shadow-[0_8px_24px_rgba(0,0,0,0.04)]"
                >
                  <p className="font-[family-name:var(--font-barlow-condensed)] text-[30px] font-extrabold uppercase leading-none text-[var(--text)]">
                    {fact.value}
                  </p>
                  <p className="mt-2 font-[family-name:var(--font-inter)] text-[12px] font-medium uppercase tracking-[0.08em] text-[var(--text-dim)]">
                    {fact.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mb-6 grid gap-3 sm:grid-cols-2">
              {featuredAreas.map((area) => (
                <article
                  key={area}
                  className="rounded-[20px] border border-[var(--green-border)] bg-[linear-gradient(180deg,#ffffff_0%,#eef8ef_100%)] p-5 shadow-[0_10px_30px_rgba(56,142,60,0.08)]"
                >
                  <p className="mb-2 font-[family-name:var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--green)]">
                    Core coverage
                  </p>
                  <h3 className="font-[family-name:var(--font-barlow-condensed)] text-[28px] font-extrabold uppercase leading-none text-[var(--text)]">
                    {area}
                  </h3>
                  <p className="mt-3 font-[family-name:var(--font-barlow)] text-[15px] leading-6 text-[var(--text-dim)]">
                    Fast scheduling and simple delivery logistics for cleanup jobs in {area}.
                  </p>
                </article>
              ))}
            </div>

            <div className="mb-6 rounded-[22px] border border-[var(--border)] bg-white p-5 shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div>
                  <p className="font-[family-name:var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--green)]">
                    Surrounding towns we serve
                  </p>
                  <p className="mt-2 font-[family-name:var(--font-barlow)] text-[15px] leading-6 text-[var(--text-dim)]">
                    We regularly deliver to nearby communities around Lafayette as scheduling allows.
                  </p>
                </div>
                <a
                  href={mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden rounded-full border border-[var(--green-border)] bg-[var(--green-light)] px-4 py-2 font-[family-name:var(--font-inter)] text-[12px] font-semibold uppercase tracking-[0.08em] text-[var(--green)] transition-colors hover:bg-[var(--green-border)] sm:inline-flex"
                >
                  Open map
                </a>
              </div>

              <ul className="flex flex-wrap gap-2" aria-label="Additional service areas">
                {surroundingAreas.map((area) => (
                  <li key={area} className="list-none">
                    <span className="inline-flex rounded-full bg-[var(--surface-2)] px-4 py-2 font-[family-name:var(--font-inter)] text-[13px] font-medium text-[var(--text)]">
                      {area}
                    </span>
                  </li>
                ))}
                <li className="list-none">
                  <span className="inline-flex rounded-full border border-dashed border-[var(--green-border)] bg-[var(--green-light)]/60 px-4 py-2 font-[family-name:var(--font-inter)] text-[13px] font-medium text-[var(--green)]">
                    Nearby areas by request
                  </span>
                </li>
              </ul>
            </div>

            <Callout />
          </div>

          <aside className="overflow-hidden rounded-[28px] border border-[var(--green-border)] bg-white shadow-[0_18px_40px_rgba(56,142,60,0.12)]">
            <div className="border-b border-[var(--green-border)] bg-[linear-gradient(135deg,#eef8ef_0%,#ffffff_100%)] px-6 py-5">
              <p className="mb-2 font-[family-name:var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--green)]">
                Coverage snapshot
              </p>
              <h3 className="font-[family-name:var(--font-barlow-condensed)] text-[30px] font-extrabold uppercase leading-none text-[var(--text)]">
                Local delivery, clearly defined
              </h3>
              <p className="mt-3 max-w-[34ch] font-[family-name:var(--font-barlow)] text-[15px] leading-6 text-[var(--text-dim)]">
                Our included delivery zone is centered around {BUSINESS.city}, with easy mileage pricing when your project is farther out.
              </p>
            </div>

            <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-[var(--green-border)] bg-[var(--surface)]">
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="HIDA Dumpster service area map"
                className="absolute inset-0 h-full w-full"
              />
            </div>

            <div className="px-6 py-5">
              <ul className="space-y-3" aria-label="Delivery area notes">
                {deliveryNotes.map((note) => (
                  <li key={note} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--green)] shadow-[0_0_0_4px_rgba(56,142,60,0.12)]"
                    />
                    <span className="font-[family-name:var(--font-barlow)] text-[15px] leading-6 text-[var(--text-dim)]">
                      {note}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <a
                  href={BUSINESS.phoneHref}
                  className="inline-flex items-center justify-center rounded-[12px] bg-[var(--green)] px-5 py-3 font-[family-name:var(--font-inter)] text-[14px] font-bold text-white transition-colors hover:bg-[var(--green-dark)]"
                >
                  Call {BUSINESS.phone}
                </a>
                <a
                  href={BUSINESS.sms}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-[12px] border border-[var(--green-border)] bg-white px-5 py-3 font-[family-name:var(--font-inter)] text-[14px] font-bold text-[var(--green)] transition-colors hover:bg-[var(--green-light)]"
                >
                  Send us a Text
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

function Callout() {
  return (
    <div className="rounded-[20px] border border-[var(--green-border)] bg-[var(--green-light)]/70 p-5 shadow-[0_8px_24px_rgba(56,142,60,0.08)]">
      <p className="mb-2 font-[family-name:var(--font-inter)] text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--green)]">
        Need a quick coverage check?
      </p>
      <p className="font-[family-name:var(--font-barlow)] text-[15px] leading-6 text-[var(--text-dim)]">
        If your address is close to Lafayette but not on the list, call <a href={BUSINESS.phoneHref} className="font-semibold text-[var(--green)]">{BUSINESS.phone}</a> and we will confirm availability right away.
      </p>
    </div>
  )
}