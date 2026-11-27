import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import PageHero from "@/components/common/PageHero";
import { Layout } from "@/components/layout/Layout";
import { QuoteModal } from "@/components/QuoteModal";
import { company, telHref } from "@/data/company";
import { COST_SYSTEMS } from "@/data/costRanges";
import FaqList from "@/components/common/FaqList";
import { CTASection } from "@/components/home/CTASection";
import { Process, Prose, Sec, SpecList, SpecTable } from "@/components/common/Sheet";

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
  { title: "Terrace enclosure, Samundra Tarang, Dadar (W)", scope: "Four-track sliding windows, fixed glazing and internal GS structure.", status: "Completed", href: "/project/samundra-tarang", img: "/projects/samundra-tarang-51-1.webp" },
  { title: "Leela Hotel, laundry area, Andheri (E)", scope: "Fixed glass windows and openable aluminium window units.", status: "Completed 2023", href: "/project/leela-hotel", img: "/projects/leela-hotel-50-1.webp" },
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
      <PageHero
        schematic="windows"
        crumbs={[{ label: "Aluminium windows and doors" }]}
        title={<>Aluminium Windows &amp; Doors in <span className="text-gradient-gold">Pune &amp; Mumbai</span></>}
        intro={`Sliding, casement, tilt-turn and lift-slide systems, measured by us, fabricated at our ${company.fabricationUnit.location} unit, installed under a dedicated site in-charge and supervisor, and water-tested before handover.`}
        secondary={{ label: company.phone.mobileDisplay, href: telHref }}
        source="windows_hero"
      />

      <Sec no="01" label="Systems" title={<>Window &amp; door systems we install</>} sheetLabel="System schedule" dim={`${windowSystems.length} systems`}>
        <p className="sx-note">
          Every system is priced after a site measurement, with the profile series, glass and hardware written into an itemised quotation.
        </p>
        <SpecTable
          caption="Window and door systems"
          columns={["No.", "System", "Best for", "Price moves with"]}
          rows={windowSystems.map((s, i) => [
            String(i + 1).padStart(2, "0"),
            <>
              <b>{s.name}</b>
              <small>{SYSTEM_NOTES[s.id]?.what}</small>
            </>,
            SYSTEM_NOTES[s.id]?.bestFor,
            s.drivers.join(", "),
          ])}
        />
        <p className="sx-note" style={{ marginTop: 22, marginBottom: 0 }}>
          We also fabricate fixed glazing, sliding &amp; folding doors, safety gates and mirror glass work. Thermal-break profiles are available on request.
        </p>
      </Sec>

      <Sec no="02" label="Glass" title={<>The glass matters as much as the frame</>} sheetLabel="Glass build-up">
        <div className="sx-split">
          <Prose>
            <p>
              Heat and noise mostly come through the glass, so we specify the glass build-up window by window — not one type for the whole house.
              Heat-gain and acoustic figures depend on the exact glass and frame, and we share the glass maker's data sheet with every quote.
            </p>
            <p>Glass is sourced from Saint-Gobain and other major Indian processors, or strictly from your architect's approved list.</p>
          </Prose>
          <SpecList
            items={GLASS_OPTIONS.map((g) => (
              <>
                <b style={{ fontWeight: 500 }}>{g.name}</b>
                <span className="sx-d">{g.use}</span>
              </>
            ))}
          />
        </div>
      </Sec>

      <Sec no="03" label="Quotes" title={<>Comparing window quotes? Check these 7 lines</>} sheetLabel="Quote checklist">
        <p className="sx-note">
          Two quotes that both say “aluminium sliding window” can differ a lot — often for good reason. Ask every supplier — including us — to put these in writing.
        </p>
        <SpecList items={QUOTE_CHECKLIST} />
      </Sec>

      <Sec no="04" label="Projects" title={<>Window work we have done</>} sheetLabel="Project record">
        <p className="sx-note">Real projects from our company profile, with our actual scope and status.</p>
        <table className="sx-pt">
          <caption className="sr-only">Window projects with scope and status</caption>
          <thead>
            <tr>
              <th scope="col" aria-label="Photo" />
              <th scope="col">Project</th>
              <th scope="col">Scope</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {PROJECTS.map((p) => (
              <tr key={p.href}>
                <td className="ph">
                  <img src={p.img} alt={p.title} width={112} height={72} loading="lazy" decoding="async" />
                </td>
                <td className="pn">
                  <Link to={p.href}>{p.title}</Link>
                </td>
                <td className="pc">{p.scope}</td>
                <td>
                  <span className={`sx-st sx-st-${p.status.startsWith("Completed") ? "completed" : "ongoing"}`}>{p.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Sec>

      <Sec no="05" label="Process" title={<>How a window order runs</>} sheetLabel="Process">
        <Process
          steps={[
            { title: "Site measurement", desc: "Every opening measured and checked for level and plumb." },
            { title: "Drawing & sample", desc: "Window schedule, sections and colour sample for approval." },
            { title: "Fabrication", desc: `Cut and assembled at our ${company.fabricationUnit.location} unit.` },
            { title: "Installation", desc: "Fixed, packed and sealed under a dedicated site in-charge and supervisor." },
            { title: "Water test & handover", desc: "Site water test, snag list closed, defect liability per contract." },
          ]}
        />
        <p className="sx-more">
          <Link to="/quality-safety" className="fg-btn2">
            Our quality &amp; safety checks
          </Link>
        </p>
      </Sec>

      <Sec no="06" label="FAQ" title={<>Aluminium window FAQs</>} sheetLabel="FAQ">
        <div className="sx-faq">
          <FaqList items={FAQS} />
        </div>
      </Sec>

      <CTASection />

      <QuoteModal
        open={quoteOpen}
        onOpenChange={setQuoteOpen}
        defaultProjectType="Aluminium Doors & Windows"
        source="windows_page"
      />
    </Layout>
  );
}
