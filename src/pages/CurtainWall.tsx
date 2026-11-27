import SEO from "@/components/SEO";
import PageHero from "@/components/common/PageHero";
import CallNow from "@/components/common/CallNow";
import { Link } from "react-router-dom";
import { RelatedProjects } from "@/components/RelatedProjects";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { ServiceBody } from "@/components/service/ServiceBody";
import { ServiceQuickOverview } from "@/components/service/ServiceQuickOverview";
import { Prose, Sec, SpecList } from "@/components/common/Sheet";
import { company } from "@/data/company";

/* ── System data ── */
const SYSTEMS = [
  {
    num: "01",
    title: "Unitized Curtain Wall",
    desc: "Factory-assembled panels shipped ready to install. Fastest method — ideal for high-rises. Each panel interlocks with the next for a seamless, watertight envelope.",
    glass: "6063-T6 aluminium",
    wind: "Sized to project wind load",
    bestFor: "High-rises, IT parks",
    price: "Quoted on drawings",
    img: "unitized",
  },
  {
    num: "02",
    title: "Stick System Curtain Wall",
    desc: "Aluminium mullions and transoms assembled piece-by-piece on site. Cost-effective for low-to-mid rise buildings with varying floor heights.",
    glass: "6063-T6 aluminium",
    wind: "Sized to project wind load",
    bestFor: "Offices, showrooms",
    price: "Quoted on drawings",
    img: "stick",
  },
  {
    num: "03",
    title: "Semi-Unitized System",
    desc: "Mullions fixed on-site, pre-glazed panels slotted in. Combines unitized speed with stick-system flexibility — great for renovation projects.",
    glass: "6063-T6 aluminium",
    wind: "Sized to project wind load",
    bestFor: "Renovations, mid-rises",
    price: "Quoted on drawings",
    img: "semi",
  },
  {
    num: "04",
    title: "Point-Supported Glass Wall",
    desc: "Minimal structure with stainless-steel point fixings and structural glass fins. Maximum transparency for atriums, lobbies, and feature facades.",
    glass: "SS 316 fittings",
    wind: "Structural glass fins",
    bestFor: "Lobbies, atriums",
    price: "Quoted on drawings",
    img: "point",
  },
];

const STEPS = [
  { num: "01", title: "Site Survey", desc: "Measurement, access study and scope freeze" },
  { num: "02", title: "Engineering", desc: "In-house shop drawings and wind-load engineering check" },
  { num: "03", title: "Fabrication", desc: "Cutting, assembly and finishing at our Pisoli, Pune unit" },
  { num: "04", title: "Installation", desc: "Sequenced erection with line, level and plumb checks" },
];

export default function CurtainWall() {

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Curtain Wall Systems",
    serviceType: "Curtain Wall Manufacturing & Installation",
    provider: {
      "@type": "LocalBusiness",
      name: "Fine Glaze",
      "@id": "https://fineglaze.com",
      url: "https://fineglaze.com",
      telephone: "+91-8369233566",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pune",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
    },
    areaServed: [
      { "@type": "City", name: "Pune" },
      { "@type": "City", name: "Mumbai" },
      { "@type": "City", name: "Navi Mumbai" },
    ],
    description: "Curtain wall contractor in Pune, Mumbai and across India. Unitized, stick and semi-unitized glass curtain wall systems.",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fineglaze.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://fineglaze.com/services" },
      { "@type": "ListItem", position: 3, name: "Curtain Wall Systems", item: "https://fineglaze.com/curtain-wall-systems" },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who is Fine Glaze as a curtain wall contractor?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Fine Glaze is a curtain wall contractor based in Pune and Mumbai, taking projects across India. We prepare shop drawings in-house, fabricate at our own Pisoli unit and install curtain walls for commercial and residential buildings.",
        },
      },
      {
        "@type": "Question",
        name: "What is the advantage of a unitized curtain wall system?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Unitized curtain walls are factory-assembled and pre-glazed in controlled conditions, which shortens on-site erection and improves quality control. They suit tall buildings and tight programmes, subject to design and access.",
        },
      },
      {
        "@type": "Question",
        name: "What is the typical curtain wall cost per sq ft in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Curtain wall cost depends on the system (stick, semi-unitized, unitized or spider), glass, height, wind load and access, so a reliable figure needs drawings. Fine Glaze prepares BOQ-based quotations.",
        },
      },
      {
        "@type": "Question",
        name: "How do I request a quotation for a commercial curtain wall project?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can request a quotation by uploading your project drawings or BOQ on our contact page, calling +91 8369233566, or emailing info@fineglaze.com. Our office hours are Monday to Saturday, 09:00 to 18:00.",
        },
      },
      {
        "@type": "Question",
        name: "Do you install structural glazing and ACP cladding alongside curtain walls?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Fine Glaze offers complete building envelope solutions including structural glazing, ACP aluminium cladding, glass railings, and glass skylights.",
        },
      },
    ],
  };


  return (
    <Layout darkHero>
      <SEO
        title="Curtain Wall Contractor in Pune & Mumbai | Fine Glaze"
        description="Curtain wall contractor in Pune, Mumbai and across India. Unitized, stick and semi-unitized systems, in-house shop drawings, own Pune fabrication unit."
        canonical="https://fineglaze.com/curtain-wall-systems"
        keywords="Curtain wall manufacturers, curtain wall manufacturers Pune, curtain wall manufacturers Mumbai, unitized curtain wall, curtain wall cost, curtain wall systems"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      <PageHero
        schematic="curtain"
        crumbs={[{ label: "Curtain Wall Manufacturers Pune & Mumbai" }]}
        title={<>Curtain Wall<br /> <span className="text-gradient-gold">Manufacturers</span><span className="ph-sub">Pune &amp; Mumbai.</span></>}
        intro="As curtain wall contractors based in Pune and Mumbai, Fine Glaze delivers engineered unitized, stick, and semi-unitized glass curtain wall systems for commercial towers, IT parks, and high-rise office developments."
        secondary={{ label: "+91 83692 33566", href: "tel:+918369233566" }}
        extra=""
      />

      <ServiceBody
        schematic="curtain"
        intro={{
          lead: <>Curtain Wall Systems for Modern Architecture,</>,
          tail: <>engineered for wind load, thermal performance & longevity.</>,
          body: <>Fine Glaze designs, fabricates and installs curtain wall building envelopes. We use aluminium extrusions from major Indian mills, DOWSIL structural silicone or approved equivalents, and double-glazed units (DGU) with Low-E coatings where the specification calls for them, in Pune, Mumbai and across India.</>,
          extra: (
            <SpecList
              items={["Own Fabrication Unit, Pune", "Wind Load Engineering Check", "DOWSIL Structural Silicone", "Safety Glass Where Required"]}
            />
          ),
        }}
        overview={(no) => <ServiceQuickOverview no={no}
        serviceTitle="Curtain Wall Glazing Systems"
        whatWeProvide="Unitized panelized facades, semi-unitized & stick curtain walls. Includes in-house shop drawings, an engineering check against project wind load, fabrication, DGU Low-E glass integration, weather-seal installation and a site water penetration test."
        locationsServed={["Pune (Hinjewadi, Baner, Kharadi)", "Mumbai (BKC, Nariman Point, Lower Parel)", "Thane", "Navi Mumbai"]}
        bestProjectTypes={[
          "High-Rise Commercial Towers (10+ Storeys)",
          "Corporate IT Parks & Tech Campuses",
          "Mixed-Use Retail & Commercial Podiums",
          "Hospitality & Luxury Hotel Towers"
        ]}
        relevantProjects={[
          "Embassy 247 (Vikhroli, Mumbai)",
          "SSG Honesty (Panvel)",
          "LTIMindtree Mensa Campus (Navi Mumbai)"
        ]}
      />}
        systemsTitle={<>Curtain Wall Systems We Manufacture &amp; Install</>}
        systems={SYSTEMS}
        systemCols={["Frame", "Wind load"]}
        extra={(no) => (
          <Sec no={no()} label="Unitized" title={<>Unitized Curtain Wall Systems</>} sheetLabel="System detail">
            <div className="sx-split">
              <Prose>
                <p>Unitized curtain wall systems consist of large pre-assembled, factory-glazed panels that are transported to the construction site and anchored directly to the building floor slab. This system is commonly chosen for tall commercial towers and IT parks.</p>
              </Prose>
              <dl className="sx-kv">
                <div><dt>Faster On-Site Erection</dt><dd>Pre-fabricated modules reduce the work done at height.</dd></div>
                <div><dt>Controlled Factory Quality</dt><dd>Structural silicone application and EPDM gasket sealing are executed in controlled indoor environments.</dd></div>
                <div><dt>Superior Weather Tightness</dt><dd>Interlocking stack joints accommodate building movement and thermal expansion naturally.</dd></div>
                <div><dt>Specification</dt><dd className="m">6063-T6 Extrusions, 6mm + 12mm Argon + 6mm Low-E DGU, EPDM Gasket Seal</dd></div>
              </dl>
            </div>
          </Sec>
        )}
        featuresTitle={<>Delivered by one accountable team.</>}
        features={[
          { title: "In-house shop drawings", desc: "Fabrication and installation drawings are prepared in-house for approval." },
          { title: "Engineering check", desc: "Member sizing, fixing and anchorage verified against the project wind load." },
          { title: "Own fabrication unit", desc: "Cutting, assembly and finishing at the Pisoli, Pune unit, batched per project." },
          { title: "Site testing", desc: "Site water penetration test; snag register raised and closed before handover." },
        ]}
        stepsTitle={<>From first visit to final handover</>}
        steps={STEPS}
        promise={<>Shop drawings prepared in-house. Installation run by a dedicated site in-charge and supervisor.</>}
        pricing={{
          title: <>Curtain Wall Cost Per Sq Ft in India (2026 Guide)</>,
          intro: <>Transparent rate comparison based on project complexity, glass specifications, and installation methods across Maharashtra. <span className="sx-mono">Note: Cost depends on system, glass, height and access. Read our guide on <Link to="/blog/curtain-wall-cost-per-sq-ft-india-2026">what drives curtain wall cost</Link>.</span></>,
          colLabel: "Specifications",
          rows: [
            { system: "Unitized Curtain Wall", glass: "Factory pre-assembled aluminium, DGU Low-E, EPDM", price: "Quoted on drawings" },
            { system: "Stick Curtain Wall System", glass: "On-site assembled mullions, 6mm / DGU glass", price: "Quoted on drawings" },
            { system: "Semi-Unitized System", glass: "Pre-glazed shop units with site-fixed frames", price: "Quoted on drawings" },
            { system: "Spider Point-Fixed System", glass: "Stainless steel fittings with laminated toughened glass", price: "Quoted on drawings" },
          ],
        }}
        faq={[
          { q: <>Who is Fine Glaze as a curtain wall contractor?</>, a: <>Fine Glaze is a curtain wall contractor based in Pune and Mumbai, taking projects across India. We prepare shop drawings in-house, fabricate at our own Pisoli unit and install curtain walls for commercial and residential buildings.</> },
          { q: <>What is the advantage of a unitized curtain wall system?</>, a: <>Unitized curtain walls are factory-assembled and pre-glazed in controlled conditions, which shortens on-site erection and improves quality control. They suit tall buildings and tight programmes, subject to design and access.</> },
          { q: <>What is the typical curtain wall cost per sq ft in India?</>, a: <>Curtain wall cost depends on the system (stick, semi-unitized, unitized or spider), glass, height, wind load and access, so a reliable figure needs drawings. Fine Glaze prepares BOQ-based quotations.</> },
          { q: <>How do I request a quotation for a commercial curtain wall project?</>, a: <>You can request a quotation by uploading your project drawings or BOQ on our contact page, calling +91 8369233566, or emailing info@fineglaze.com. Our office hours are Monday to Saturday, 09:00 to 18:00.</> },
          { q: <>Do you install structural glazing and ACP cladding alongside curtain walls?</>, a: <>Yes, Fine Glaze offers complete building envelope solutions including structural glazing, ACP aluminium cladding, glass railings, and glass skylights.</> },
        ]}
        areas={["Pune", "Mumbai BKC", "Navi Mumbai", "Thane", "Hinjewadi", "Kharadi"]}
        others={[
          { title: "Structural Glazing", href: "/structural-glazing" },
          { title: "ACP Aluminium Cladding", href: "/acp-aluminium-cladding" },
          { title: "Glass Railings", href: "/glass-railings" },
          { title: "Glass Partitions", href: "/glass-partitions" },
          { title: "Facade Maintenance AMC", href: "/maintenance-services" },
          { title: "All Facade Services →", href: "/services" },
        ]}
        related={(no) => <RelatedProjects no={no} heading="Curtain wall & glazing projects" keywords={["curtain", "glazing"]} />}
      />
      <CTASection />
    </Layout>
  );
}
