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
    title: "PVDF Coated ACP",
    desc: "Premium fluorocarbon (PVDF) coated panels with superior UV resistance and colour retention. A common choice for external cladding, good colour retention outdoors; warranty terms come from the panel maker.",
    glass: "PVDF 70/30",
    wind: "FR mineral core",
    bestFor: "Towers, corporate HQs",
    price: "Quoted on drawings",
    img: "pvdf",
  },
  {
    num: "02",
    title: "PE Coated ACP",
    desc: "Polyester-coated panels offering excellent value for cost-conscious projects. Available in all standard colours and finishes. Best for interior cladding, signage, and canopy soffits.",
    glass: "Polyester (PE)",
    wind: "PE / FR core",
    bestFor: "Interiors, signage, canopies",
    price: "Quoted on drawings",
    img: "pe",
  },
  {
    num: "03",
    title: "Wood-Grain & Stone Finish",
    desc: "Digital printing technology creates realistic wood, stone, and marble textures on ACP surfaces. Natural aesthetics without the weight, maintenance, or cost of real materials.",
    glass: "Digital print + PVDF",
    wind: "FR mineral core",
    bestFor: "Hotels, residences, retail",
    price: "Quoted on drawings",
    img: "wood",
  },
  {
    num: "04",
    title: "Mirror & Metallic ACP",
    desc: "High-reflectivity aluminium panels with mirror-polish or brushed metallic finishes. Creates striking visual impact for feature walls, fascias, and architectural accents.",
    glass: "Anodised / mirror",
    wind: "FR mineral core",
    bestFor: "Feature walls, retail fronts",
    price: "Quoted on drawings",
    img: "mirror",
  },
];

const STEPS = [
  { num: "01", title: "Site Survey", desc: "Measure facade area, assess substrate & plan panel layout" },
  { num: "02", title: "Shop Drawing", desc: "Panel cutting plan, joint layout & colour/finish approval" },
  { num: "03", title: "Fabrication", desc: "CNC routing, folding & sub-frame preparation" },
  { num: "04", title: "Installation", desc: "Sub-frame fixing, panel mounting & joint sealing" },
];

export default function AcpCladding() {

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "ACP & Metal Cladding Systems",
    serviceType: "ACP Cladding Installation",
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
    description: "Aluminium Composite Panel cladding — PVDF, PE, wood-grain & mirror finishes. Fire-retardant FR grade panels from approved brands such as Alubond. PVDF grades carry the panel maker's colour warranty.",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fineglaze.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://fineglaze.com/services" },
      { "@type": "ListItem", position: 3, name: "ACP & Metal Cladding", item: "https://fineglaze.com/acp-aluminium-cladding" },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is ACP cladding?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ACP (Aluminium Composite Panel) cladding uses panels made of two aluminium sheets bonded to a core material. They are fixed to a sub-frame on the building exterior, creating a flat, modern cladding surface available in hundreds of colours and finishes.",
        },
      },
      {
        "@type": "Question",
        name: "Is ACP cladding fire safe?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ACP cladding is fire safe only when the core and assembly suit the building. Fire-retardant mineral-core panels are the usual choice for external cladding, and Fine Glaze procures them from approved brands. Confirm the core and test documents with your consultant.",
        },
      },
      {
        "@type": "Question",
        name: "How much does ACP cladding cost per sq ft in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ACP cladding cost depends on panel brand, core, finish, sub-frame, height and access, so a fair figure needs drawings. Fine Glaze prepares BOQ-based quotations with the brand and finish specification stated.",
        },
      },
      {
        "@type": "Question",
        name: "How long does PVDF ACP last?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PVDF (fluorocarbon) coated ACP panels typically carry a manufacturer colour warranty of up to 20 years (check the brand's warranty document for your project). They resist UV fading, chalking, and chemical exposure far better than PE coated panels — making them the preferred choice for external facades.",
        },
      },
      {
        "@type": "Question",
        name: "Can ACP be used for renovation and existing buildings?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. ACP is ideal for building renovation because it is lightweight, installs over existing facades, and transforms the appearance quickly. The aluminium sub-frame can be adapted to any building surface.",
        },
      },
    ],
  };


  return (
    <Layout darkHero>
      <SEO
        title="ACP Cladding Contractor in Pune & Mumbai | Fine Glaze"
        description="ACP cladding contractor in Pune, Mumbai and across India. ACP and aluminium cladding, with panel routing and preparation at our own fabrication unit in Pune."
        canonical="https://fineglaze.com/acp-aluminium-cladding"
        keywords="ACP cladding contractor, aluminium composite panel cladding, ACP facade, aluminium cladding, PVDF ACP, fire-retardant ACP"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      <PageHero
        schematic="cladding"
        crumbs={[{ label: "ACP & Aluminium Cladding Contractors" }]}
        title={<>ACP & Aluminium<br /> <span className="text-gradient-gold">Cladding</span><span className="ph-sub">Contractors.</span></>}
        intro="Fire-retardant ACP and aluminium cladding for durable, weather-resistant building exteriors in Pune and Mumbai."
        secondary={{ label: "+91 83692 33566", href: "tel:+918369233566" }}
        extra=""
      />

      <ServiceBody
        schematic="cladding"
        intro={{ lead: <>Two aluminium sheets bonded to a mineral core,</>, tail: <>lightweight, fire-safe, and available in unlimited finishes.</>, body: <>Aluminium Composite Panels (ACP) consist of two aluminium sheets bonded to a non-combustible mineral-filled core. They provide a flat, seamless cladding surface that transforms any building exterior. Available in PVDF and PE coatings with solid, metallic, wood-grain, stone, and mirror finishes.</> }}
        overview={(no) => <ServiceQuickOverview no={no}
        serviceTitle="ACP &amp; Metal Cladding Solutions"
        whatWeProvide="ACP panel preparation (routing, grooving) at our Pisoli, Pune unit and erection over MS or aluminium sub-framing, with weather-sealed joints. Fire-retardant core options from approved brands."
        locationsServed={["Pune (Hinjewadi, Undri, Baner)", "Mumbai", "Thane", "Navi Mumbai (Mahape, MIDC)"]}
        bestProjectTypes={[
          "Corporate Campuses & Office Elevations",
          "Commercial Malls & Retail Frontages",
          "High-Rise Residential Facade Accents",
          "Industrial & Warehouse Elevations"
        ]}
        relevantProjects={[
          "LTIMindtree Mensa Campus (Navi Mumbai)",
          "Salsette-27 (Byculla, Mumbai)",
          "SSG Honesty (Panvel)"
        ]}
      />}
        systemsTitle={<>ACP Panel Systems We Install</>}
        systems={SYSTEMS}
        systemCols={["Coating", "Core"]}
        featuresTitle={<>Built for performance. Delivered on schedule.</>}
        features={[
          { title: "Fire-Retardant Options", desc: "FR-core ACP from approved brands for external cladding, confirmed against the project's fire requirements and consultant." },
          { title: "Lightweight Panels", desc: "Lightweight panels mean lighter sub-frames and a shorter installation sequence than heavy cladding." },
          { title: "Approved Brands", desc: "Panels from approved brands such as Alubond — or strictly from your project's approved vendor list, with mill and test certificates." },
          { title: "Clean Finish", desc: "CNC routing for precise folds. Silicone-sealed joints for a seamless, watertight appearance." },
        ]}
        stepsTitle={<>From first visit to final handover</>}
        steps={STEPS}
        promise={<>Panel routing at our own unit in Pisoli, Pune, shop drawings prepared in-house, and silicone-sealed joints on site.</>}
        pricing={{
          title: <>ACP Cladding Cost: How We Quote</>,
          intro: <>We quote against drawings. Final cost depends on specification and complexity.</>,
          colLabel: "Coating / Finish",
          rows: [
            { system: "PVDF Coated ACP", glass: "PVDF 70/30 + FR core", price: "Quoted on drawings" },
            { system: "PE Coated ACP", glass: "Polyester + PE/FR core", price: "Quoted on drawings" },
            { system: "Wood-Grain / Stone", glass: "Digital print + PVDF", price: "Quoted on drawings" },
            { system: "Mirror / Metallic", glass: "Anodised / mirror finish", price: "Quoted on drawings" },
          ],
        }}
        faq={[
          { q: <>What is ACP cladding?</>, a: <>ACP (Aluminium Composite Panel) cladding uses panels made of two aluminium sheets bonded to a core material. They are fixed to a sub-frame on the building exterior, creating a flat, modern cladding surface available in hundreds of colours and finishes.</> },
          { q: <>Is ACP cladding fire safe?</>, a: <>ACP cladding is fire safe only when the core and assembly suit the building. Fire-retardant mineral-core panels are the usual choice for external cladding, and Fine Glaze procures them from approved brands. Confirm the core and test documents with your consultant.</> },
          { q: <>How much does ACP cladding cost per sq ft in India?</>, a: <>ACP cladding cost depends on panel brand, core, finish, sub-frame, height and access, so a fair figure needs drawings. Fine Glaze prepares BOQ-based quotations with the brand and finish specification stated.</> },
          { q: <>How long does PVDF ACP last?</>, a: <>PVDF (fluorocarbon) coated ACP panels typically carry a manufacturer colour warranty of up to 20 years (check the brand's warranty document for your project). They resist UV fading, chalking, and chemical exposure far better than PE coated panels — making them the preferred choice for external facades.</> },
          { q: <>Can ACP be used for renovation and existing buildings?</>, a: <>Yes. ACP is ideal for building renovation because it is lightweight, installs over existing facades, and transforms the appearance quickly. The aluminium sub-frame can be adapted to any building surface.</> },
        ]}
        areas={["Pune", "Mumbai BKC", "Navi Mumbai", "Thane", "Hinjewadi", "Pimpri-Chinchwad"]}
        others={[
          { title: "Curtain Wall Systems", href: "/curtain-wall-systems" },
          { title: "Structural Glazing", href: "/structural-glazing" },
          { title: "Aluminium Facade", href: "/aluminium-windows-doors" },
          { title: "Glass Railings", href: "/glass-railings" },
          { title: "Facade AMC", href: "/maintenance-services" },
          { title: "All Services →", href: "/services" },
        ]}
        related={(no) => <RelatedProjects no={no} heading="ACP cladding projects" keywords={["ACP"]} />}
      />
      <CTASection />
    </Layout>
  );
}
