import { useState } from "react";
import { Link } from "react-router-dom";
import { Info, Phone } from "lucide-react";
import SEO from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { useBookCall } from "@/components/booking/BookCallProvider";
import { COST_SYSTEMS, UNIT_LABEL, type CostSystem } from "@/data/costRanges";
import { company, telHref } from "@/data/company";

const PAGE_URL = "https://fineglaze.com/facade-cost-estimator";
const CITIES = ["Pune", "Mumbai", "Navi Mumbai", "Thane", "Elsewhere in India"];

const services = Array.from(new Set(COST_SYSTEMS.map((s) => s.service)));

const FAQS = [
  {
    q: "Why do you not show a price here?",
    a: "The same system name covers very different specifications. Glass build-up, building height, access, finish and testing requirements all change the cost, so a figure without drawings would mislead. Tell us the inputs below and we call you back with a figure for your building.",
  },
  {
    q: "What do I need to share?",
    a: "The system you are considering, the approximate area, the city and the number of floors. Drawings or photographs help if you have them, but they are not required to start.",
  },
  {
    q: "What decides the cost of a facade?",
    a: "The system type, the glass specification, the height and access conditions, the finish, the quantity and the testing and handover requirements. Our service pages list what moves the cost for each system.",
  },
  {
    q: "What happens after I book a call?",
    a: "We call you back the same business day, Monday to Saturday, 9am to 6pm. We confirm the scope, ask for drawings or a site visit if needed, and then give you a written, itemised figure.",
  },
];

export default function FacadeCostEstimator() {
  const book = useBookCall();
  const [service, setService] = useState(services[0]);
  const [systemId, setSystemId] = useState(COST_SYSTEMS[0].id);
  const [areaText, setAreaText] = useState("");
  const [metric, setMetric] = useState(false);
  const [city, setCity] = useState(CITIES[0]);
  const [floors, setFloors] = useState("");

  const systemsForService = COST_SYSTEMS.filter((s) => s.service === service);
  const system: CostSystem = COST_SYSTEMS.find((s) => s.id === systemId) ?? systemsForService[0];
  const unitLabel = metric ? (system.unit === "sqft" ? "sqm" : "running m") : UNIT_LABEL[system.unit];

  const summary = [
    `${system.name}`,
    areaText.trim() ? `${areaText.trim()} ${unitLabel}` : "",
    city,
    floors.trim() ? `${floors.trim()} floors` : "",
  ]
    .filter(Boolean)
    .join(", ");

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://fineglaze.com/" },
        { "@type": "ListItem", position: 2, name: "Facade Cost Estimator", item: PAGE_URL },
      ],
    },
  ];

  return (
    <Layout>
      <SEO
        title="Facade Project Cost Request | Fine Glaze"
        description="Tell us the system, area, city and floors for your facade, windows or glazing project and book a call. We come back with a figure for your building."
        canonical={PAGE_URL}
        keywords="facade cost, curtain wall cost, aluminium window cost, ACP cladding cost, structural glazing cost, glass railing cost"
        schemas={schemas}
      />

      <section className="bg-night text-paper">
        <div className="container mx-auto px-4 py-14 md:py-20 max-w-4xl">
          <p className="text-lamp text-xs font-bold mb-4">Facade and window cost</p>
          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight">Get a figure for your building</h1>
          <p className="mt-4 text-paper/80 text-lg">
            Pick a system and tell us the area, city and floors. The cost depends on these inputs and on the
            specification, so we call you back with a figure for your building.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-6">
            <form className="border border-border bg-card p-6 space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="est-service" className="block text-sm font-semibold text-foreground mb-2">1. What are you planning?</label>
                <select
                  id="est-service"
                  value={service}
                  onChange={(e) => {
                    setService(e.target.value);
                    setSystemId(COST_SYSTEMS.find((s) => s.service === e.target.value)!.id);
                  }}
                  className="w-full border border-input bg-background px-3 py-3 text-base"
                >
                  {services.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <fieldset>
                <legend className="block text-sm font-semibold text-foreground mb-2">2. Which system?</legend>
                <div className="grid gap-2">
                  {systemsForService.map((s) => (
                    <label
                      key={s.id}
                      className={`flex items-center gap-2 border px-3 py-3 cursor-pointer ${s.id === system.id ? "border-lamp/40 bg-lamp/5" : "border-border"}`}
                    >
                      <input type="radio" name="system" value={s.id} checked={s.id === system.id} onChange={() => setSystemId(s.id)} />
                      <span className="text-sm text-foreground">{s.name}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="est-qty" className="block text-sm font-semibold text-foreground">
                    3. Approximate area ({unitLabel})
                  </label>
                  <div className="inline-flex border border-border p-0.5 text-xs" role="group" aria-label="Units">
                    <button type="button" onClick={() => setMetric(false)} className={`px-2 py-1 ${!metric ? "bg-night-2 text-paper" : ""}`} aria-pressed={!metric}>
                      {system.unit === "sqft" ? "sq ft" : "ft"}
                    </button>
                    <button type="button" onClick={() => setMetric(true)} className={`px-2 py-1 ${metric ? "bg-night-2 text-paper" : ""}`} aria-pressed={metric}>
                      {system.unit === "sqft" ? "sqm" : "m"}
                    </button>
                  </div>
                </div>
                <input
                  id="est-qty"
                  inputMode="decimal"
                  autoComplete="off"
                  placeholder="If you know it"
                  value={areaText}
                  onChange={(e) => setAreaText(e.target.value)}
                  className="w-full border border-input bg-background px-3 py-3 text-base"
                />
                <p className="mt-2 text-xs text-muted-foreground">
                  {system.unit === "sqft"
                    ? "Use the glazed or clad area (width by height of each opening or elevation)."
                    : "Use the total running length of railing."}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="est-city" className="block text-sm font-semibold text-foreground mb-2">4. City</label>
                  <select
                    id="est-city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full border border-input bg-background px-3 py-3 text-base"
                  >
                    {CITIES.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="est-floors" className="block text-sm font-semibold text-foreground mb-2">5. Floors</label>
                  <input
                    id="est-floors"
                    inputMode="numeric"
                    autoComplete="off"
                    placeholder="If you know it"
                    value={floors}
                    onChange={(e) => setFloors(e.target.value.replace(/[^0-9]/g, ""))}
                    className="w-full border border-input bg-background px-3 py-3 text-base"
                  />
                </div>
              </div>
            </form>

            <div className="border border-border bg-night text-paper p-6 flex flex-col" aria-live="polite">
              <p className="text-lamp text-sm font-semibold">Your project</p>
              <p className="mt-3 text-xl font-bold">{summary}</p>
              <p className="mt-3 text-sm text-paper/80">
                The cost depends on these inputs, the glass specification and the access conditions. Book a call and we
                call you back with a figure for your building.
              </p>
              <div className="mt-5 bg-night-2 border border-line p-4">
                <p className="text-xs font-semibold text-mute">What moves the cost</p>
                <ul className="mt-2 space-y-1 text-sm text-paper/80 list-disc pl-5">
                  {system.drivers.map((d) => <li key={d}>{d}</li>)}
                </ul>
              </div>
              <div className="mt-auto pt-6 grid gap-2">
                <button
                  type="button"
                  onClick={() => book.open({ work: summary, source: "estimator" })}
                  className="bg-lamp hover:bg-lamp/90 text-paper font-bold px-5 py-3"
                >
                  Book a call
                </button>
                <p className="text-xs text-mute text-center">We call you back the same business day, Monday to Saturday, 9am to 6pm.</p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex gap-3 border border-border bg-muted p-4 text-sm text-muted-foreground">
            <Info className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
            <p>
              Read how the{" "}
              <Link to={system.source} className="text-primary underline underline-offset-4">{system.service.toLowerCase()} page</Link>{" "}
              explains this system. Glass specification, height, access and finish are confirmed before a figure is given.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 bg-muted">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Common questions</h2>
          <div className="space-y-3">
            {FAQS.map((f) => (
              <details key={f.q} className="group border border-border bg-card p-5">
                <summary className="cursor-pointer font-semibold text-foreground list-none flex justify-between gap-4">
                  {f.q}
                  <span className="text-primary group-open:rotate-45 transition-transform" aria-hidden="true">+</span>
                </summary>
                <p className="mt-3 text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Prefer to talk it through?{" "}
            <a href={telHref} className="font-semibold text-primary inline-flex items-center">
              <Phone className="mr-1 h-3.5 w-3.5" /> {company.phone.mobileDisplay}
            </a>
          </p>
        </div>
      </section>
    </Layout>
  );
}
