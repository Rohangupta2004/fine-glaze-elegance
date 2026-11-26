import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import SEO from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { QuoteModal } from "@/components/QuoteModal";
import { company, telHref } from "@/data/company";
import { COST_SYSTEMS } from "@/data/costRanges";

const PAGE_URL = "https://fineglaze.com/aluminium-windows-doors";
const HERO = "/projects/samundra-tarang-51-1.webp";

const windowSystems = COST_SYSTEMS.filter((s) => s.service === "Aluminium windows & doors");

const SYSTEM_NOTES: Record<string, { what: string; bestFor: string }> = {
  sliding: {
    what: "2, 3 or 4-track sliding shutters with optional mesh track. The most common choice for balconies and large openings.",
    bestFor: "Balconies, living rooms, terrace enclosures",
  },
  casement: {
    what: "Side-hung or top-hung (awning) sashes that seal against gaskets when closed, so they usually perform better on air and water than sliders.",
    bestFor: "Bedrooms, offices, high-wind elevations",
  },
  "tilt-turn": {
    what: "Inward-opening sash that tilts for ventilation and turns fully for cleaning from inside — useful on upper floors.",
    bestFor: "High-rise apartments, premium homes",
  },
  "lift-slide": {
    what: "Heavy sliding door panels that lift off the gasket to move and drop down to seal — for very large openings.",
    bestFor: "Villas, penthouses, terrace doors",
  },
};

const GLASS_OPTIONS = [
  { name: "Single toughened (5–12 mm)", use: "Standard choice for most windows; safety glass that breaks into small pieces." },
  { name: "Double-glazed unit (DGU)", use: "Two panes with an air/argon gap — less heat and noise. Pair with a thermal-break frame for the full benefit." },
  { name: "Laminated / acoustic laminated", use: "Holds together if broken and cuts traffic noise — common for road-facing rooms and railings." },
  { name: "Solar-control / Low-E", use: "Reduces heat gain on west and south faces. Performance figures come from the glass maker's data sheet." },
];

const QUOTE_CHECKLIST = [
  "Profile series and wall thickness (e.g. 25 mm vs 30 mm series sliders) — written in the quote, not just “aluminium window”.",
  "Exact glass build-up for each window: thickness, toughened or laminated, DGU spacer and gap.",
  "Hardware brand and model for rollers, locks and friction stays.",
  "Gasket type (EPDM) and how water drains out of the bottom track.",
  "Finish: powder coat or anodising, colour code, and whose warranty covers it.",
  "Installation: fixing method, perimeter sealant brand, and who repairs the surrounding plaster.",
  "Water test on site before handover, and the defect liability period in writing.",
];

const PROJECTS = [
  { title: "Terrace enclosure — Samundra Tarang, Dadar (W)", scope: "Four-track sliding windows, fixed glazing and internal GS structure.", status: "Completed", href: "/project/samundra-tarang", img: "/projects/samundra-tarang-51-1.webp" },
  { title: "Leela Hotel — laundry area, Andheri (E)", scope: "Fixed glass windows and openable aluminium window units.", status: "Completed 2023", href: "/project/leela-hotel", img: "/projects/leela-hotel-50-2.webp" },
  { title: "Nirmaann Estrellaa, Pune", scope: "25 mm Series 3-track sliding windows, fixed glass windows, louvers and fins.", status: "Ongoing", href: "/project/nirmaann-estrellaa", img: "/projects/nirmaann-estrellaa-36-1.webp" },
  { title: "Nanavati Max Hospital, Vile Parle", scope: "Window leakage rectification and consultation for L&T Construction.", status: "Ongoing", href: "/project/nanavati-max-hospital", img: "/projects/nanavati-max-hospital-39-4.webp" },
];

const FAQS = [
  {
    q: "How much do aluminium windows cost in Pune and Mumbai?",
    a: "It depends mainly on the profile series, the glass build-up (single toughened, DGU or laminated) and the hardware brand — the same “sliding window” can vary a lot in price. We measure on site and give a written, itemised quotation so you can compare like for like.",
  },
  {
    q: "Are aluminium windows better than uPVC?",
    a: "Neither is better everywhere. Aluminium allows slimmer frames and larger openings, takes any powder-coat or anodised colour and does not soften in heat; a thermal-break aluminium frame narrows the insulation gap with uPVC. uPVC is often cheaper for small, standard residential windows. Tell us the opening sizes, floor height and budget and we will recommend honestly — including when uPVC is the better fit.",
  },
  {
    q: "What is a thermal break and do I need one?",
    a: "A polyamide strip that separates the inner and outer aluminium so heat does not flow straight through the frame. It matters most in air-conditioned rooms and with double glazing. For a non-AC utility area, a standard profile is usually enough.",
  },
  {
    q: "Do you replace or repair existing leaking windows?",
    a: "Yes. Leakage investigation, sealant renewal, track and gasket repair and glass replacement are part of our maintenance work — for example the window leakage rectification at Nanavati Max Hospital, Mumbai.",
  },
  {
    q: "How long does it take?",
    a: "After drawings and colour are approved, fabrication typically takes 10–15 days for standard sizes and 20–25 days for custom orders, depending on glass lead time. A typical home (10–15 windows) is installed in 3–5 days. We share a written schedule with the quotation.",
  },
];

export default function AluminiumWindowsDoors() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "Aluminium windows & doors — supply and installation",
      serviceType: "Aluminium windows and doors",
      provider: { "@id": "https://fineglaze.com/#localbusiness" },
      areaServed: ["Pune", "Pimpri-Chinchwad", "Mumbai", "Navi Mumbai", "Thane"].map((name) => ({ "@type": "City", name })),
      url: PAGE_URL,
      image: `https://fineglaze.com${HERO}`,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Aluminium window and door systems",
        itemListElement: windowSystems.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.name },
        })),
      },
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
        { "@type": "ListItem", position: 2, name: "Services", item: "https://fineglaze.com/services" },
        { "@type": "ListItem", position: 3, name: "Aluminium Windows & Doors", item: PAGE_URL },
      ],
    },
  ];

  return (
    <Layout darkHero>
      <SEO
        title="Aluminium Windows and Doors in Pune & Mumbai | Fine Glaze"
        description="Aluminium windows and doors in Pune, Mumbai and across India. Sliding, casement, tilt-turn and lift-slide systems, fabricated at our own unit in Pune."
        canonical={PAGE_URL}
        keywords="aluminium windows Pune, aluminium windows Mumbai, aluminium sliding windows, casement windows, tilt and turn windows, thermal break aluminium windows, aluminium doors, window installation Pune"
        ogImage={`https://fineglaze.com${HERO}`}
        ogImageWidth={816}
        ogImageHeight={459}
        schemas={schemas}
      />

      {/* HERO */}
      <section className="relative min-h-[78vh] flex items-end overflow-hidden bg-stone-950">
        <img
          src={HERO}
          alt="Aluminium sliding and fixed glass terrace enclosure by Fine Glaze at Samundra Tarang, Dadar"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          width={816}
          height={459}
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/70 via-stone-950/50 to-stone-950/95" />
        <div className="relative z-10 container mx-auto px-4 pb-14 pt-32">
          <p className="text-amber-400 text-xs font-bold tracking-[0.3em] uppercase mb-4">Fine Glaze · Pune &amp; Mumbai</p>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight max-w-3xl">
            Aluminium Windows &amp; Doors in Pune &amp; Mumbai
          </h1>
          <p className="mt-5 text-stone-200 text-base sm:text-lg max-w-2xl">
            Sliding, casement, tilt-turn and lift-slide systems — measured by us, fabricated at our {company.fabricationUnit.location} unit,
            installed under a dedicated site in-charge and supervisor, and water-tested before handover.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => setQuoteOpen(true)}
              className="inline-flex items-center justify-center rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-7 py-4"
            >
              Request a site measurement <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <a
              href={telHref}
              className="inline-flex items-center justify-center rounded-xl border border-white/40 bg-white/10 text-white font-bold px-7 py-4 hover:bg-white hover:text-stone-900"
            >
              <Phone className="mr-2 h-4 w-4" /> {company.phone.mobileDisplay}
            </a>
          </div>
          <p className="mt-4 text-xs text-white/50">Pictured: terrace enclosure, Samundra Tarang, Dadar (W) — completed by Fine Glaze.</p>
        </div>
      </section>

      {/* SYSTEMS */}
      <section className="py-16 md:py-20 bg-background" aria-labelledby="systems">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mb-10">
            <h2 id="systems" className="text-2xl md:text-4xl font-bold text-foreground">Window &amp; door systems we install</h2>
            <p className="mt-3 text-muted-foreground">
              Every system is priced after a site measurement, with the profile series, glass and hardware written into an itemised quotation.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {windowSystems.map((s) => (
              <article key={s.id} className="rounded-xl border border-border bg-card p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold text-foreground">{s.name}</h3>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{SYSTEM_NOTES[s.id]?.what}</p>
                <p className="mt-3 text-sm"><span className="font-semibold text-foreground">Best for:</span> <span className="text-muted-foreground">{SYSTEM_NOTES[s.id]?.bestFor}</span></p>
                <p className="mt-2 text-xs text-muted-foreground">Price moves with: {s.drivers.join(" · ")}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            We also fabricate fixed glazing, sliding &amp; folding doors, safety gates and mirror glass work. Thermal-break profiles are available on request.
          </p>
        </div>
      </section>

      {/* GLASS */}
      <section className="py-16 md:py-20 bg-muted" aria-labelledby="glass">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 id="glass" className="text-2xl md:text-4xl font-bold text-foreground">The glass matters as much as the frame</h2>
            <p className="mt-4 text-muted-foreground">
              Heat and noise mostly come through the glass, so we specify the glass build-up window by window — not one type for the whole house.
              Heat-gain and acoustic figures depend on the exact glass and frame, and we share the glass maker's data sheet with every quote.
            </p>
            <p className="mt-4 text-muted-foreground">
              Glass is sourced from Saint-Gobain and other major Indian processors, or strictly from your architect's approved list.
            </p>
          </div>
          <ul className="grid gap-3">
            {GLASS_OPTIONS.map((g) => (
              <li key={g.name} className="rounded-xl bg-card border border-border p-5">
                <p className="font-semibold text-foreground">{g.name}</p>
                <p className="text-sm text-muted-foreground mt-1">{g.use}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* QUOTE CHECKLIST */}
      <section className="py-16 md:py-20 bg-background" aria-labelledby="checklist">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 id="checklist" className="text-2xl md:text-4xl font-bold text-foreground">Comparing window quotes? Check these 7 lines</h2>
          <p className="mt-3 text-muted-foreground">
            Two quotes that both say “aluminium sliding window” can differ a lot — often for good reason. Ask every supplier — including us — to put these in writing.
          </p>
          <ol className="mt-8 space-y-3">
            {QUOTE_CHECKLIST.map((item, i) => (
              <li key={item} className="flex gap-4 rounded-xl border border-border bg-card p-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-500/15 text-sm font-bold text-amber-700">{i + 1}</span>
                <span className="text-foreground/90">{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-16 md:py-20 bg-stone-950 text-white" aria-labelledby="projects">
        <div className="container mx-auto px-4">
          <h2 id="projects" className="text-2xl md:text-4xl font-bold">Window work we have done</h2>
          <p className="mt-3 text-stone-300 max-w-2xl">Real projects from our company profile, with our actual scope and status.</p>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROJECTS.map((p) => (
              <Link key={p.href} to={p.href} className="group rounded-xl overflow-hidden border border-stone-800 bg-stone-900 hover:border-amber-500/60">
                <img src={p.img} alt={p.title} className="h-44 w-full object-cover" loading="lazy" />
                <div className="p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-amber-400">{p.status}</p>
                  <h3 className="mt-1 font-semibold leading-snug group-hover:text-amber-300">{p.title}</h3>
                  <p className="mt-2 text-sm text-stone-400">{p.scope}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 md:py-20 bg-background" aria-labelledby="process">
        <div className="container mx-auto px-4">
          <h2 id="process" className="text-2xl md:text-4xl font-bold text-foreground">How a window order runs</h2>
          <ol className="mt-8 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              ["Site measurement", "Every opening measured and checked for level and plumb."],
              ["Drawing & sample", "Window schedule, sections and colour sample for approval."],
              ["Fabrication", `Cut and assembled at our ${company.fabricationUnit.location} unit.`],
              ["Installation", "Fixed, packed and sealed under a dedicated site in-charge and supervisor."],
              ["Water test & handover", "Site water test, snag list closed, defect liability per contract."],
            ].map(([t, d], i) => (
              <li key={t} className="rounded-xl border border-border bg-card p-5">
                <p className="text-xs font-bold text-amber-700">STEP {i + 1}</p>
                <p className="mt-1 font-semibold text-foreground">{t}</p>
                <p className="mt-1 text-sm text-muted-foreground">{d}</p>
              </li>
            ))}
          </ol>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/quality-safety" className="inline-flex items-center rounded-lg border border-border px-5 py-3 font-semibold hover:border-primary">
              <CheckCircle2 className="mr-2 h-4 w-4 text-primary" /> Our quality &amp; safety checks
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-muted" aria-labelledby="faq">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 id="faq" className="text-2xl md:text-4xl font-bold text-foreground mb-8">Aluminium window FAQs</h2>
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
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-amber-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-stone-950">Get your windows measured and quoted</h2>
          <p className="mt-2 text-stone-900/80">Pune, PCMC, Mumbai, Navi Mumbai and Thane.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={() => setQuoteOpen(true)} className="rounded-xl bg-stone-950 text-white font-bold px-7 py-4 hover:bg-stone-800">
              Request a site measurement
            </button>
            <a href={telHref} className="rounded-xl border-2 border-stone-950 text-stone-950 font-bold px-7 py-4 hover:bg-stone-950 hover:text-white">
              Call {company.phone.mobileDisplay}
            </a>
          </div>
        </div>
      </section>

      <QuoteModal
        open={quoteOpen}
        onOpenChange={setQuoteOpen}
        defaultProjectType="Aluminium Doors & Windows"
        source="windows_page"
      />
    </Layout>
  );
}
