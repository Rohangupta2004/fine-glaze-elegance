import SEO from "@/components/SEO";
import PageHero from "@/components/common/PageHero";
import { RelatedProjects } from "@/components/RelatedProjects";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { ServiceBody } from "@/components/service/ServiceBody";
import { ServiceQuickOverview } from "@/components/service/ServiceQuickOverview";

/* ── System data ── */
const SYSTEMS = [
  {
    num: "01",
    title: "Frameless Glass Railing",
    desc: "Glass panels with no visible posts or frames — maximum transparency. Fixed with aluminium U-channels embedded in the floor or side-mounted. The premium choice for modern balconies and terraces.",
    glass: "12–19mm toughened",
    wind: "Aluminium U-channel",
    bestFor: "Balconies, terraces, decks",
    price: "Quoted on drawings",
    img: "frameless",
  },
  {
    num: "02",
    title: "Semi-Frameless Railing",
    desc: "Glass panels held by minimal stainless steel posts at intervals — a balance of transparency and structure. Ideal for longer runs where frameless isn't structurally feasible.",
    glass: "12–15mm toughened",
    wind: "SS 304 mini-posts",
    bestFor: "Corridors, malls, offices",
    price: "Quoted on drawings",
    img: "semi",
  },
  {
    num: "03",
    title: "Spigot Glass Railing",
    desc: "Glass panels held by stainless steel spigots (point clamps) at the base. Clean architectural look with easy glass replacement. Popular for commercial and hospitality projects.",
    glass: "12–15mm toughened",
    wind: "SS 316 spigots",
    bestFor: "Hotels, lobbies, restaurants",
    price: "Quoted on drawings",
    img: "spigot",
  },
  {
    num: "04",
    title: "Standoff Glass Railing",
    desc: "Glass panels mounted to posts using decorative standoff fittings. Versatile system that works with existing structures and offers multiple design finishes.",
    glass: "10–12mm toughened",
    wind: "SS standoff fittings",
    bestFor: "Staircases, residential",
    price: "Quoted on drawings",
    img: "standoff",
  },
];

const STEPS = [
  { num: "01", title: "Site Measure", desc: "Precise measurement of railing lengths, heights & conditions" },
  { num: "02", title: "Design", desc: "System selection, glass spec & hardware finish approvals" },
  { num: "03", title: "Fabrication", desc: "Glass cutting, tempering & hardware preparation" },
  { num: "04", title: "Installation", desc: "Professional mounting with plumb-level accuracy" },
];

export default function GlassRailings() {

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Glass Railing Systems",
    serviceType: "Glass Railing Installation",
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
    description: "Premium frameless and semi-frameless glass railing systems for balconies, terraces, staircases & pool areas. 12–19mm toughened glass. SS 304/316 hardware.",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fineglaze.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://fineglaze.com/services" },
      { "@type": "ListItem", position: 3, name: "Glass Railings", item: "https://fineglaze.com/glass-railings" },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is toughened glass safe for railings?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Toughened glass is safe for railings when the glass build-up, supports and anchorage are designed for the load. It is stronger than ordinary glass and breaks into small granules, and laminated glass adds a layer that holds pieces in place.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between frameless and semi-frameless glass railings?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Frameless railings use U-channels or base shoes with no visible posts — giving maximum transparency. Semi-frameless railings use slim stainless steel posts at intervals — slightly more visible structure but often more cost-effective for longer runs.",
        },
      },
      {
        "@type": "Question",
        name: "How much do glass railings cost per running foot in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Glass railing cost depends on the system (frameless, semi-frameless, spigot or standoff), glass thickness, hardware finish and site conditions. It is priced per running foot against drawings. Fine Glaze prepares BOQ-based quotations.",
        },
      },
      {
        "@type": "Question",
        name: "Can glass railings be used outdoors and in coastal areas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Toughened glass is weather-resistant, and outdoor and coastal installations need stainless steel hardware of a suitable grade. Fine Glaze selects the grade per project, and nano-coated glass is an option for easier cleaning.",
        },
      },
      {
        "@type": "Question",
        name: "How long does glass railing installation take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Installation time depends on railing length, number of floors, site access and glass lead time, so we confirm the programme per project after measurement. Glass is cut and toughened to size before installation.",
        },
      },
    ],
  };


  return (
    <Layout darkHero>
      <SEO
        title="Glass Railing Contractor in Pune & Mumbai | Fine Glaze"
        description="Glass railing contractor in Pune, Mumbai and across India. Frameless and spigot glass railings for balconies and staircases, with in-house shop drawings."
        canonical="https://fineglaze.com/glass-railings"
        keywords="glass railing contractor, frameless glass railing, toughened glass railing, glass balustrade, staircase glass railing, balcony glass railing"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      <PageHero
        schematic="railing"
        crumbs={[{ label: "Glass Railing Contractors Pune & Mumbai" }]}
        title={<>Glass Railing<br /> <span className="text-gradient-gold">Contractors</span><span className="ph-sub">Pune &amp; Mumbai.</span></>}
        intro="Frameless and semi-frameless toughened glass railings for balconies, terraces, staircases and commercial spaces in Pune and Mumbai."
        secondary={{ label: "+91 83692 33566", href: "tel:+918369233566" }}
        extra=""
      />

      <ServiceBody
        schematic="railing"
        intro={{ lead: <>Unobstructed views with maximum safety,</>, tail: <>toughened glass that meets every building code.</>, body: <>Glass railings use 12–19mm toughened or laminated safety glass mounted with precision-engineered stainless steel or aluminium hardware. They provide fall protection while preserving views, natural light, and modern architectural aesthetics.</> }}
        overview={(no) => <ServiceQuickOverview no={no}
        serviceTitle="Glass Balustrades &amp; Railing Systems"
        whatWeProvide="Frameless base-channel glass railings, standoff pin balustrades, spigot railings & SS-316 top handrail systems. Toughened and laminated glass specified against IS 2553 and the project load requirements, with a structural check before fabrication."
        locationsServed={["Pune (Koregaon Park, Kalyani Nagar)", "Mumbai (Byculla, Bandra, Worli)", "Thane", "Navi Mumbai"]}
        bestProjectTypes={[
          "High-Rise Residential Balconies & Terraces",
          "Luxury Villa Staircases & Balconies",
          "Commercial Mall Atrium Balustrades",
          "Hotel Pool Decks & Roof Top Bars"
        ]}
        relevantProjects={[
          "Salsette-27 (Byculla, Mumbai)",
          "Jindal House Balkeshwar 32 (Mumbai)",
          "Nirmaann Estrellaa (Pune)"
        ]}
      />}
        systemsTitle={<>Glass Railing Systems We Install</>}
        systems={SYSTEMS}
        systemCols={["Glass", "Hardware"]}
        featuresTitle={<>Built for performance. Delivered on schedule.</>}
        features={[
          { title: "Safety Glass", desc: "Toughened or laminated glass specified to IS 2553 and the project's load requirements. Confirm the build-up with your consultant." },
          { title: "Measured and Fabricated to Order", desc: "Each railing is measured on site, drawn in-house and fabricated to size. Programme is confirmed per project." },
          { title: "Stainless Steel Hardware", desc: "Stainless steel hardware in finishes chosen to the specification. Coastal sites need particular attention to grade." },
          { title: "AMC Support", desc: "Maintenance contracts available for glazing, glass and cladding." },
        ]}
        stepsTitle={<>From first visit to final handover</>}
        steps={STEPS}
        promise={<>Shop drawings prepared in-house. Installation run by a dedicated site in-charge and supervisor.</>}
        pricing={{
          title: <>Glass Railing Cost: How We Quote</>,
          intro: <>We quote against drawings. Final cost depends on specification and complexity.</>,
          colLabel: "Glass",
          rows: [
            { system: "Frameless (U-Channel)", glass: "12–19 mm toughened", price: "Quoted on drawings" },
            { system: "Semi-Frameless (Mini-Post)", glass: "12–15 mm toughened", price: "Quoted on drawings" },
            { system: "Spigot Mount", glass: "12–15 mm toughened", price: "Quoted on drawings" },
            { system: "Standoff Mount", glass: "10–12 mm toughened", price: "Quoted on drawings" },
          ],
        }}
        faq={[
          { q: <>Is toughened glass safe for railings?</>, a: <>Toughened glass is safe for railings when the glass build-up, supports and anchorage are designed for the load. It is stronger than ordinary glass and breaks into small granules, and laminated glass adds a layer that holds pieces in place.</> },
          { q: <>What is the difference between frameless and semi-frameless glass railings?</>, a: <>Frameless railings use U-channels or base shoes with no visible posts — giving maximum transparency. Semi-frameless railings use slim stainless steel posts at intervals — slightly more visible structure but often more cost-effective for longer runs.</> },
          { q: <>How much do glass railings cost per running foot in India?</>, a: <>Glass railing cost depends on the system (frameless, semi-frameless, spigot or standoff), glass thickness, hardware finish and site conditions. It is priced per running foot against drawings. Fine Glaze prepares BOQ-based quotations.</> },
          { q: <>Can glass railings be used outdoors and in coastal areas?</>, a: <>Yes. Toughened glass is weather-resistant, and outdoor and coastal installations need stainless steel hardware of a suitable grade. Fine Glaze selects the grade per project, and nano-coated glass is an option for easier cleaning.</> },
          { q: <>How long does glass railing installation take?</>, a: <>Installation time depends on railing length, number of floors, site access and glass lead time, so we confirm the programme per project after measurement. Glass is cut and toughened to size before installation.</> },
        ]}
        areas={["Pune", "Mumbai BKC", "Navi Mumbai", "Thane", "Hinjewadi", "Pimpri-Chinchwad"]}
        others={[
          { title: "Structural Glazing", href: "/structural-glazing" },
          { title: "Curtain Wall Systems", href: "/curtain-wall-systems" },
          { title: "Glass Partitions", href: "/glass-partitions" },
          { title: "Aluminium Facade", href: "/aluminium-windows-doors" },
          { title: "Facade AMC", href: "/maintenance-services" },
          { title: "All Services →", href: "/services" },
        ]}
        related={(no) => <RelatedProjects no={no} heading="Glass railing projects" keywords={["railing"]} />}
      />
      <CTASection />
    </Layout>
  );
}
