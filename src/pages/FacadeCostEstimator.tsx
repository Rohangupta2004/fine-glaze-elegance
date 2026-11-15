import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Calculator, Info, MessageCircle, Phone, RotateCcw } from "lucide-react";
import SEO from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { QuoteModal } from "@/components/QuoteModal";
import { COST_SYSTEMS, PRICING_APPROVED, UNIT_LABEL, formatINR, type CostSystem } from "@/data/costRanges";
import { company, telHref, whatsappHref } from "@/data/company";
import { trackEvent } from "@/lib/analytics";

const PAGE_URL = "https://fineglaze.com/facade-cost-estimator";
const STORAGE_KEY = "fg-last-estimate";
const SQM_TO_SQFT = 10.7639;
const M_TO_FT = 3.28084;

interface SavedEstimate {
  systemId: string;
  qty: number;
  metric: boolean;
  savedAt: string;
}

const services = Array.from(new Set(COST_SYSTEMS.map((s) => s.service)));

const FAQS = [
  {
    q: "How accurate is this estimate?",
    a: "It is a budgeting range, not a quotation. It multiplies your quantity by the indicative installed ranges published on our service pages. A firm price needs drawings or a site survey, because glass build-up, height, access and finish can move the cost a lot.",
  },
  {
    q: "Does the estimate include GST?",
    a: "No. The ranges are indicative installed rates before GST. Scaffolding or access equipment, civil work and statutory charges are confirmed separately in the quotation.",
  },
  {
    q: "Why is the range so wide?",
    a: "Because the same system name covers very different specifications. For example, a sliding window with 5 mm single glass and a basic roller is a different product from one with a DGU and branded hardware. Our service pages list what moves the price for each system.",
  },
  {
    q: "Is my estimate stored anywhere?",
    a: "Only in your own browser, so the page can show your last estimate when you come back. Nothing is sent to us unless you submit the quote form or message us.",
  },
];

function readSaved(): SavedEstimate | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as SavedEstimate) : null;
  } catch {
    return null;
  }
}

export default function FacadeCostEstimator() {
  const [service, setService] = useState(services[0]);
  const [systemId, setSystemId] = useState(COST_SYSTEMS[0].id);
  const [qtyText, setQtyText] = useState("");
  const [metric, setMetric] = useState(false);
  const [saved, setSaved] = useState<SavedEstimate | null>(null);
  const [quoteOpen, setQuoteOpen] = useState(false);
  // Until prices are approved, only reviewers with ?preview=1 see the tool.
  const [preview, setPreview] = useState(false);
  const live = PRICING_APPROVED || preview;

  // Remember the visitor's last estimate (per browser only).
  useEffect(() => {
    setSaved(readSaved());
    setPreview(new URLSearchParams(window.location.search).get("preview") === "1");
  }, []);

  const systemsForService = COST_SYSTEMS.filter((s) => s.service === service);
  const system: CostSystem = COST_SYSTEMS.find((s) => s.id === systemId) ?? systemsForService[0];
  const qty = Number(qtyText.replace(/,/g, ""));
  const validQty = Number.isFinite(qty) && qty > 0 && qty < 10_000_000;

  const unitLabel = metric ? (system.unit === "sqft" ? "sqm" : "running m") : UNIT_LABEL[system.unit];
  const qtyInBaseUnit = validQty ? qty * (metric ? (system.unit === "sqft" ? SQM_TO_SQFT : M_TO_FT) : 1) : 0;

  const result = useMemo(() => {
    if (!validQty) return null;
    return { low: qtyInBaseUnit * system.min, high: qtyInBaseUnit * system.max };
  }, [validQty, qtyInBaseUnit, system]);

  useEffect(() => {
    if (!result) return;
    const t = window.setTimeout(() => {
      const entry: SavedEstimate = { systemId: system.id, qty, metric, savedAt: new Date().toISOString() };
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(entry));
      } catch {
        /* storage unavailable — the estimate still works */
      }
      trackEvent("estimate_calculated", { system: system.id, quantity: Math.round(qtyInBaseUnit) });
    }, 800);
    return () => window.clearTimeout(t);
  }, [result, system.id, qty, metric, qtyInBaseUnit]);

  const restore = (s: SavedEstimate) => {
    const sys = COST_SYSTEMS.find((x) => x.id === s.systemId);
    if (!sys) return;
    setService(sys.service);
    setSystemId(sys.id);
    setMetric(s.metric);
    setQtyText(String(s.qty));
  };

  const summary = result
    ? `${system.name}: ${qty.toLocaleString("en-IN")} ${unitLabel}. Indicative budget ${formatINR(result.low)} – ${formatINR(result.high)} + GST (Fine Glaze estimator).`
    : "";

  const savedSystem = saved ? COST_SYSTEMS.find((s) => s.id === saved.systemId) : undefined;

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Fine Glaze Facade Cost Estimator",
      url: PAGE_URL,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Any",
      isAccessibleForFree: true,
      publisher: { "@id": "https://fineglaze.com/#organization" },
      description: "Indicative installed-cost ranges for aluminium windows, curtain walls, structural glazing, ACP cladding, louvers, glass railings, skylights and partitions in Pune and Mumbai.",
    },
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

  if (!live) {
    return (
      <Layout>
        <SEO
          title="Facade Cost Estimator — Coming Soon | Fine Glaze"
          description="Our facade and window cost estimator is being finalised. Until then, call or WhatsApp us for a site-specific quotation in Pune and Mumbai."
          canonical={PAGE_URL}
          noindex
        />
        <section className="bg-stone-950 text-white">
          <div className="container mx-auto px-4 py-20 md:py-28 max-w-3xl text-center">
            <p className="text-amber-400 text-xs font-bold tracking-[0.3em] uppercase mb-4">Coming soon</p>
            <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight">Facade &amp; window cost estimator</h1>
            <p className="mt-4 text-stone-300 text-lg">
              We are finalising the price ranges with our estimation team so the numbers are ones we stand behind.
              Until then, we will give you a site-specific figure directly.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <button onClick={() => setQuoteOpen(true)} className="rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-7 py-4">
                Request a quotation
              </button>
              <a href={telHref} className="inline-flex items-center justify-center rounded-xl border border-white/40 px-7 py-4 font-bold hover:bg-white hover:text-stone-900">
                <Phone className="mr-2 h-4 w-4" /> {company.phone.mobileDisplay}
              </a>
            </div>
          </div>
        </section>
        <QuoteModal open={quoteOpen} onOpenChange={setQuoteOpen} source="estimator_coming_soon" />
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO
        title="Facade Cost Estimator: Windows, Curtain Wall, ACP & Glazing | Fine Glaze"
        description="Estimate an indicative budget for aluminium windows, curtain walls, structural glazing, ACP cladding, railings and more — using the price ranges a Pune & Mumbai facade contractor actually quotes."
        canonical={PAGE_URL}
        noindex={!PRICING_APPROVED}
        keywords="facade cost calculator, curtain wall cost per sq ft, aluminium window cost calculator, ACP cladding cost per sq ft, structural glazing cost, glass railing cost per running foot"
        schemas={schemas}
      />

      <section className="bg-stone-950 text-white">
        <div className="container mx-auto px-4 py-14 md:py-20 max-w-4xl">
          {!PRICING_APPROVED && (
            <p className="mb-4 inline-block rounded-md bg-red-500/20 border border-red-400/40 px-3 py-1 text-xs font-semibold text-red-200">
              Internal preview — prices pending approval (see docs/PRICING_FOR_APPROVAL.md)
            </p>
          )}
          <p className="text-amber-400 text-xs font-bold tracking-[0.3em] uppercase mb-4">Free tool</p>
          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight">Facade &amp; window cost estimator</h1>
          <p className="mt-4 text-stone-300 text-lg">
            Pick a system, enter your quantity, and see an indicative budget range in seconds. It uses the same
            per-sq-ft ranges we publish on our service pages — no hidden factors.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          {saved && savedSystem && saved.systemId !== system.id && (
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl border border-amber-500/40 bg-amber-500/5 p-4">
              <p className="text-sm text-foreground">
                <strong>Welcome back.</strong> Your last estimate: {savedSystem.name},{" "}
                {saved.qty.toLocaleString("en-IN")} {saved.metric ? (savedSystem.unit === "sqft" ? "sqm" : "running m") : UNIT_LABEL[savedSystem.unit]}.
              </p>
              <button onClick={() => restore(saved)} className="inline-flex items-center text-sm font-semibold text-primary">
                <RotateCcw className="mr-1 h-4 w-4" /> Load it
              </button>
            </div>
          )}

          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-6">
            {/* INPUTS */}
            <form className="rounded-2xl border border-border bg-card p-6 space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="est-service" className="block text-sm font-semibold text-foreground mb-2">1. What are you planning?</label>
                <select
                  id="est-service"
                  value={service}
                  onChange={(e) => {
                    setService(e.target.value);
                    setSystemId(COST_SYSTEMS.find((s) => s.service === e.target.value)!.id);
                  }}
                  className="w-full rounded-lg border border-input bg-background px-3 py-3 text-base"
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
                      className={`flex items-center justify-between gap-3 rounded-lg border px-3 py-3 cursor-pointer ${s.id === system.id ? "border-amber-500 bg-amber-500/5" : "border-border"}`}
                    >
                      <span className="flex items-center gap-2">
                        <input type="radio" name="system" value={s.id} checked={s.id === system.id} onChange={() => setSystemId(s.id)} />
                        <span className="text-sm text-foreground">{s.name}</span>
                      </span>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">
                        ₹{s.min.toLocaleString("en-IN")}–{s.max.toLocaleString("en-IN")}/{s.unit === "sqft" ? "sq ft" : "rft"}
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="est-qty" className="block text-sm font-semibold text-foreground">
                    3. Quantity ({unitLabel})
                  </label>
                  <div className="inline-flex rounded-lg border border-border p-0.5 text-xs" role="group" aria-label="Units">
                    <button type="button" onClick={() => setMetric(false)} className={`px-2 py-1 rounded-md ${!metric ? "bg-stone-900 text-white" : ""}`} aria-pressed={!metric}>
                      {system.unit === "sqft" ? "sq ft" : "ft"}
                    </button>
                    <button type="button" onClick={() => setMetric(true)} className={`px-2 py-1 rounded-md ${metric ? "bg-stone-900 text-white" : ""}`} aria-pressed={metric}>
                      {system.unit === "sqft" ? "sqm" : "m"}
                    </button>
                  </div>
                </div>
                <input
                  id="est-qty"
                  inputMode="decimal"
                  autoComplete="off"
                  placeholder={system.unit === "sqft" ? "e.g. 1,200" : "e.g. 150"}
                  value={qtyText}
                  onChange={(e) => setQtyText(e.target.value)}
                  className="w-full rounded-lg border border-input bg-background px-3 py-3 text-base"
                />
                <p className="mt-2 text-xs text-muted-foreground">
                  {system.unit === "sqft"
                    ? "Use the glazed / cladded area (width × height of each opening or elevation)."
                    : "Use the total running length of railing."}
                </p>
              </div>
            </form>

            {/* RESULT */}
            <div className="rounded-2xl border border-border bg-stone-950 text-white p-6 flex flex-col" aria-live="polite">
              <div className="flex items-center gap-2 text-amber-400 text-sm font-semibold">
                <Calculator className="h-4 w-4" aria-hidden="true" /> Indicative budget
              </div>
              {result ? (
                <>
                  <p className="mt-3 text-3xl sm:text-4xl font-extrabold">
                    {formatINR(result.low)} – {formatINR(result.high)}
                  </p>
                  <p className="mt-1 text-sm text-stone-400">+ GST · {system.name} · {qty.toLocaleString("en-IN")} {unitLabel}</p>
                  <div className="mt-5 rounded-lg bg-stone-900 border border-stone-800 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-stone-400">What moves this price</p>
                    <ul className="mt-2 space-y-1 text-sm text-stone-300 list-disc pl-5">
                      {system.drivers.map((d) => <li key={d}>{d}</li>)}
                    </ul>
                  </div>
                  <div className="mt-auto pt-6 grid gap-2">
                    <button
                      onClick={() => setQuoteOpen(true)}
                      className="rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-5 py-3"
                    >
                      Get a site-specific quote
                    </button>
                    <a
                      href={whatsappHref(`Hi Fine Glaze, I used your estimator. ${summary} Can you quote for my project?`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-xl border border-stone-700 px-5 py-3 font-semibold hover:border-amber-500"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" /> Send this to us on WhatsApp
                    </a>
                  </div>
                </>
              ) : (
                <p className="mt-4 text-stone-400">Enter a quantity to see the range.</p>
              )}
            </div>
          </div>

          <div className="mt-6 flex gap-3 rounded-xl border border-border bg-muted p-4 text-sm text-muted-foreground">
            <Info className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
            <p>
              Indicative installed ranges for Pune and Mumbai, before GST, as published on our{" "}
              <Link to={system.source} className="text-primary underline underline-offset-4">{system.service.toLowerCase()} page</Link>.
              Not a quotation — glass specification, height, access, finish and quantity are confirmed after a site survey.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 bg-muted">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">About these numbers</h2>
          <div className="space-y-3">
            {FAQS.map((f) => (
              <details key={f.q} className="group rounded-xl border border-border bg-card p-5">
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

      <QuoteModal
        open={quoteOpen}
        onOpenChange={setQuoteOpen}
        defaultProjectType={system.projectType}
        defaultArea={validQty ? `${qty} ${unitLabel}` : undefined}
        defaultMessage={summary || undefined}
        source="cost_estimator"
      />
    </Layout>
  );
}
