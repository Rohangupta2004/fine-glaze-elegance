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
    title: "Atrium Skylight System",
    desc: "Large-span glazed roof structures for atriums, malls, and commercial lobbies. Aluminium-framed with integrated drainage gutters, thermal expansion joints, and motorised ventilation options.",
    glass: "Laminated DGU / Low-E",
    wind: "Aluminium ridge-&-rafter",
    bestFor: "Atriums, malls, hotels",
    price: "Quoted on drawings",
    img: "atrium",
  },
  {
    num: "02",
    title: "Frameless Glass Canopy",
    desc: "Minimal overhead glass structures supported by stainless steel spider fittings or glass fins. Creates a floating-glass effect at building entrances and walkways. Designed with concealed drainage.",
    glass: "17.52–21.52mm laminated",
    wind: "SS spider / glass fins",
    bestFor: "Entrances, walkways",
    price: "Quoted on drawings",
    img: "frameless",
  },
  {
    num: "03",
    title: "Spider-Fitting Canopy",
    desc: "Point-fixed glass canopy using stainless steel spider arms connected to steel or cable structures. Maximum transparency, with the structure sized to the project wind load.",
    glass: "12–19mm laminated",
    wind: "SS 316 spider arms",
    bestFor: "Commercial entries, bridges",
    price: "Quoted on drawings",
    img: "spider",
  },
  {
    num: "04",
    title: "Polycarbonate Roofing",
    desc: "Lightweight multiwall polycarbonate sheets on aluminium frames. Excellent light transmission with UV protection and impact resistance, an alternative to glass for car parks and warehouses.",
    glass: "10–25mm multiwall PC",
    wind: "Aluminium frame",
    bestFor: "Car parks, factories",
    price: "Quoted on drawings",
    img: "poly",
  },
];

const STEPS = [
  { num: "01", title: "Site Survey", desc: "Assess opening size, structural support & drainage requirements" },
  { num: "02", title: "Engineering", desc: "In-house shop drawings and an engineering check against project wind load" },
  { num: "03", title: "Fabrication", desc: "Frame fabrication, glass ordering & waterproofing prep" },
  { num: "04", title: "Installation", desc: "Frame erection, glazing, sealing & drainage testing" },
];

export default function Skylights() {

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Skylights & Glass Canopy Systems",
    serviceType: "Skylight & Glass Canopy Installation",
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
    description: "Engineered glass skylight and canopy systems for atriums, lobbies & entrances. Laminated safety glass with heat-reflective coatings. Waterproof & wind-load rated.",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fineglaze.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://fineglaze.com/services" },
      { "@type": "ListItem", position: 3, name: "Skylights & Glass Canopies", item: "https://fineglaze.com/skylights-canopies" },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Are glass skylights waterproof?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A well-designed glass skylight is waterproof when sealants, gaskets and drainage are detailed properly and installed well. Fine Glaze checks installed glazing with a site water penetration test before handover and closes any leak on the snag register.",
        },
      },
      {
        "@type": "Question",
        name: "How much does a glass skylight cost per sq ft in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Skylight and canopy cost depends on the span, glass, framing, structure and access, so a reliable figure needs drawings. Fine Glaze prepares BOQ-based quotations.",
        },
      },
      {
        "@type": "Question",
        name: "Can skylights reduce energy costs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Skylights can cut daytime lighting use by bringing in daylight, and low-E or solar-control glass limits heat gain. Net energy effect depends on size, orientation and glass, so check it with the project's energy model.",
        },
      },
      {
        "@type": "Question",
        name: "What type of glass is used in skylights?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Overhead glazing is normally laminated safety glass, where two layers are bonded with an interlayer so broken pieces stay in place. Double glazed and low-E options are available, and the build-up follows the structural check.",
        },
      },
      {
        "@type": "Question",
        name: "How long does skylight installation take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Installation time depends on span, structure, glass lead time and site access, so we confirm the programme per project after survey and design approval. We work around your construction schedule.",
        },
      },
    ],
  };


  return (
    <Layout darkHero>
      <SEO
        title="Glass Skylight Contractor in Pune & Mumbai | Fine Glaze"
        description="Glass skylight and canopy contractor in Pune, Mumbai and across India. Atrium skylights, entrance canopies and overhead glazing, with in-house shop drawings."
        canonical="https://fineglaze.com/skylights-canopies"
        keywords="glass skylight contractor, atrium skylight, glass canopy contractor, frameless glass canopy, spider canopy, overhead glazing"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      <PageHero
        schematic="skylight"
        crumbs={[{ label: "Skylights & Glass Canopies" }]}
        title={<>Skylights &<br /> <span className="text-gradient-gold">Glass</span><span className="ph-sub">Canopies.</span></>}
        intro="Engineered overhead glazing for atriums, lobbies, entrances & commercial spaces."
        secondary={{ label: "+91 83692 33566", href: "tel:+918369233566" }}
        extra=""
      />

      <ServiceBody
        schematic="skylight"
        intro={{ lead: <>Bring natural light indoors,</>, tail: <>designed for weather, wind loads and thermal comfort.</>, body: <>Our skylight and canopy systems use laminated safety glass with heat-reflective coatings, supported by structural aluminium or stainless steel frameworks. Each system is detailed for weatherproofing and drainage and checked against the project wind load.</> }}
        overview={(no) => <ServiceQuickOverview no={no}
        serviceTitle="Glass Skylights &amp; Entrance Canopies"
        whatWeProvide="Laminated safety glass skylights, atrium overhead glazing, spider glass canopies & MS/SS structural support framing. Includes integrated gutters, flashing and structural and weather silicone from approved manufacturers."
        locationsServed={["Pune", "Mumbai (South Mumbai, BKC)", "Thane", "Navi Mumbai"]}
        bestProjectTypes={[
          "Hotel Entrance Canopies",
          "Shopping Mall Atrium Skylights",
          "Corporate HQ Entry Porticos",
          "Luxury Villa Skylights & Courtyards"
        ]}
        relevantProjects={[
          "Salsette-27 Entrance Canopy (Mumbai)",
          "Pune Airport Terminal Column & Canopy Works"
        ]}
      />}
        systemsTitle={<>Skylight & Canopy Systems We Install</>}
        systems={SYSTEMS}
        systemCols={["Glass", "Structure"]}
        featuresTitle={<>Built for performance. Delivered on schedule.</>}
        features={[
          { title: "Water-Tested", desc: "Installed glazing is checked with a site water penetration test before handover, and any leak found is closed out on the snag register." },
          { title: "Stage Inspections", desc: "Material, fabrication and installation checks, with the snag register closed before handover." },
          { title: "In-House Engineering", desc: "Structural calculations and shop drawings done in-house for precise fit and performance." },
          { title: "Maintenance Ready", desc: "Access points and cleaning provisions designed in from day one. AMC available." },
        ]}
        stepsTitle={<>From first visit to final handover</>}
        steps={STEPS}
        promise={<>Installed glazing water-tested before handover. Canopies detailed for drainage and maintenance access.</>}
        pricing={{
          title: <>Skylight & Canopy Cost: How We Quote</>,
          intro: <>We quote against drawings. Final cost depends on specification and complexity.</>,
          colLabel: "Material",
          rows: [
            { system: "Atrium Skylight", glass: "Laminated DGU + aluminium", price: "Quoted on drawings" },
            { system: "Frameless Canopy", glass: "17.52mm laminated + SS", price: "Quoted on drawings" },
            { system: "Spider-Fitting Canopy", glass: "Laminated + SS 316", price: "Quoted on drawings" },
            { system: "Polycarbonate Roof", glass: "Multiwall PC + aluminium", price: "Quoted on drawings" },
          ],
        }}
        faq={[
          { q: <>Are glass skylights waterproof?</>, a: <>A well-designed glass skylight is waterproof when sealants, gaskets and drainage are detailed properly and installed well. Fine Glaze checks installed glazing with a site water penetration test before handover and closes any leak on the snag register.</> },
          { q: <>How much does a glass skylight cost per sq ft in India?</>, a: <>Skylight and canopy cost depends on the span, glass, framing, structure and access, so a reliable figure needs drawings. Fine Glaze prepares BOQ-based quotations.</> },
          { q: <>Can skylights reduce energy costs?</>, a: <>Skylights can cut daytime lighting use by bringing in daylight, and low-E or solar-control glass limits heat gain. Net energy effect depends on size, orientation and glass, so check it with the project's energy model.</> },
          { q: <>What type of glass is used in skylights?</>, a: <>Overhead glazing is normally laminated safety glass, where two layers are bonded with an interlayer so broken pieces stay in place. Double glazed and low-E options are available, and the build-up follows the structural check.</> },
          { q: <>How long does skylight installation take?</>, a: <>Installation time depends on span, structure, glass lead time and site access, so we confirm the programme per project after survey and design approval. We work around your construction schedule.</> },
        ]}
        areas={["Pune", "Mumbai BKC", "Navi Mumbai", "Thane", "Hinjewadi", "Pimpri-Chinchwad"]}
        others={[
          { title: "Structural Glazing", href: "/structural-glazing" },
          { title: "Curtain Wall Systems", href: "/curtain-wall-systems" },
          { title: "ACP Cladding", href: "/acp-aluminium-cladding" },
          { title: "Glass Railings", href: "/glass-railings" },
          { title: "Facade AMC", href: "/maintenance-services" },
          { title: "All Services →", href: "/services" },
        ]}
        related={(no) => <RelatedProjects no={no} heading="Canopy projects" keywords={["canopy", "canopies"]} />}
      />
      <CTASection />
    </Layout>
  );
}
