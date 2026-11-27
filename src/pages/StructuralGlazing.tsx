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
    title: "2-Side Structural Glazing",
    desc: "Two edges bonded with structural silicone, remaining two held with aluminium pressure caps. A partially frameless facade option.",
    glass: "6–12mm toughened",
    wind: "Sized to project wind load",
    bestFor: "IT parks, offices, showrooms",
    price: "Quoted on drawings",
    img: "twoSide" as const,
  },
  {
    num: "02",
    title: "4-Side Structural Glazing",
    desc: "All four edges bonded — no external frame visible. The premium choice for high-end towers and corporate headquarters.",
    glass: "10–19mm DGU / Low-E",
    wind: "Sized to project wind load",
    bestFor: "Towers, hotels, airports",
    price: "Quoted on drawings",
    img: "fourSide" as const,
  },
  {
    num: "03",
    title: "Spider / Point-Fixed Glazing",
    desc: "Glass panels held by stainless steel spider fittings at drilled points — near-invisible structure for maximum transparency.",
    glass: "12–19mm laminated",
    wind: "Stainless steel fittings",
    bestFor: "Atriums, lobbies, feature walls",
    price: "Quoted on drawings",
    img: "spider" as const,
  },
  {
    num: "04",
    title: "Frameless Glass Canopies",
    desc: "Overhead laminated glass supported by structural fins or steel cables — fully weatherproof with integrated drainage.",
    glass: "17.52–21.52mm laminated",
    wind: "Aluminium fins / steel",
    bestFor: "Entrances, malls, bridges",
    price: "On Request",
    img: "canopy" as const,
  },
];

const STEPS = [
  { num: "01", title: "Site Survey", desc: "Measurement, access study and scope freeze" },
  { num: "02", title: "Engineering", desc: "In-house shop drawings and wind-load engineering check" },
  { num: "03", title: "Fabrication", desc: "Fabrication at our Pisoli, Pune unit, batched per project" },
  { num: "04", title: "Installation", desc: "Sequenced erection with line, level and plumb checks" },
];

export default function StructuralGlazing() {

  /* ─── Schema ─── */
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Structural Glazing Systems",
    serviceType: "Structural Glazing Installation",
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
    description:
      "Frameless structural glazing systems: 2-side, 4-side and spider glazing for commercial buildings and showrooms, in Pune, Mumbai and across India.",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fineglaze.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://fineglaze.com/services" },
      { "@type": "ListItem", position: 3, name: "Structural Glazing", item: "https://fineglaze.com/structural-glazing" },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is structural glazing and how does it work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Structural glazing bonds glass to an aluminium frame with structural silicone instead of mechanical fixings, giving a seamless, frameless look while the silicone and frame carry the glass loads. The system is sized to the project wind load.",
        },
      },
      {
        "@type": "Question",
        name: "How much does structural glazing cost per sq ft in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Structural glazing cost depends on the configuration (2-side, 4-side or spider), glass, height and access, so it needs drawings to price. Fine Glaze prepares BOQ-based quotations.",
        },
      },
      {
        "@type": "Question",
        name: "Is structural glazing safe for high-rise buildings?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Structural glazing can be used on tall buildings when it is designed for the project wind load, with proper sealant, retention and drainage. Fine Glaze checks member sizing, fixing and anchorage and procures DOWSIL structural silicone or approved equivalents.",
        },
      },
      {
        "@type": "Question",
        name: "How long does installation take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Installation time depends on facade area, building height, access and glass lead time, so we confirm the programme per project after survey and design approval. Fabrication is batched at our Pisoli unit and despatched to site.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer maintenance after installation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We offer annual maintenance contracts for glazing, glass and cladding, covering inspection, sealant re-application, glass replacement and cleaning, with a written condition report.",
        },
      },
    ],
  };


  return (
    <Layout darkHero>
      <SEO
        title="Structural Glazing Contractor in Pune & Mumbai | Fine Glaze"
        description="Structural glazing contractor in Pune, Mumbai and across India. 2-side, 4-side and spider glazing, in-house shop drawings, site water penetration test."
        canonical="https://fineglaze.com/structural-glazing"
        keywords="structural glazing contractor, structural glazing systems, glass facade contractor, 2-side structural glazing, 4-side structural glazing, frameless glass facade"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      <PageHero
        schematic="structural"
        crumbs={[{ label: "Structural Glazing Contractors Pune & Mumbai" }]}
        title={<>Structural Glazing<br /> <span className="text-gradient-gold">Contractors</span><span className="ph-sub">Pune &amp; Mumbai.</span></>}
        intro="Frameless 2-side, 4-side and spider glazing systems for commercial buildings, IT campuses and showrooms in Pune and Mumbai."
        secondary={{ label: "+91 83692 33566", href: "tel:+918369233566" }}
        extra="Embassy REIT Best Vendor Performance 2024. 15 project records."
      />

      <ServiceBody
        schematic="structural"
        intro={{ lead: <>Glass bonded directly to structure,</>, tail: <>no visible frames, no clamps, no compromise.</>, body: <>Structural glazing replaces traditional mechanical fixings with high-performance
              structural silicone sealant, creating completely seamless, frameless facades
              for modern commercial buildings across India.</> }}
        overview={(no) => <ServiceQuickOverview no={no}
        serviceTitle="Structural Glazing Systems"
        whatWeProvide="In-house shop drawings and engineering checks, fabrication at our Pisoli (Pune) unit, DOWSIL structural silicone bonding (or the approved equivalent), on-site installation & a site water penetration test."
        locationsServed={["Pune (Hinjewadi, Kharadi)", "Mumbai (BKC, Andheri, Vikhroli)", "Thane", "Navi Mumbai"]}
        bestProjectTypes={[
          "Grade-A Office Towers",
          "IT Park Buildings",
          "Hotel Entrance Canopies",
          "Commercial Automobile Showrooms"
        ]}
        relevantProjects={[
          "Embassy 247 (Vikhroli, Mumbai)",
          "LTIMindtree Mensa Campus (Navi Mumbai)",
          "SSG Honesty (Panvel)",
          "Pune Airport Terminal"
        ]}
      />}
        systemsTitle={<>Structural Glazing Systems We Install</>}
        systems={SYSTEMS}
        systemCols={["Glass", "Spec"]}
        featuresTitle={<>Built for performance. Delivered on schedule.</>}
        features={[
          { title: "Dedicated Safety Officer", desc: "A nominated safety officer oversees elevation work across active sites." },
          { title: "Stage Inspections", desc: "Material, fabrication and installation checks, with the snag register closed before handover." },
          { title: "Own Fabrication Unit", desc: "Shop drawings are prepared in-house and fabrication is at our Pisoli, Pune unit. Heavy processing goes to approved vendors." },
          { title: "AMC Support", desc: "Ongoing maintenance contracts for sealant, glass replacement & cleaning." },
        ]}
        stepsTitle={<>From first visit to final handover</>}
        steps={STEPS}
        promise={<>Shop drawings prepared in-house. Installation run by a dedicated site in-charge and supervisor.</>}
        pricing={{
          title: <>Structural Glazing Cost: How We Quote</>,
          intro: <>We quote against drawings. Final cost depends on height, glass spec and complexity.</>,
          colLabel: "Glass",
          rows: [
            { system: "2-Side SSG", glass: "6 – 12 mm toughened", price: "Quoted on drawings" },
            { system: "4-Side SSG", glass: "10 – 19 mm DGU / Low-E", price: "Quoted on drawings" },
            { system: "Spider / Point-Fixed", glass: "12 – 19 mm laminated", price: "Quoted on drawings" },
            { system: "Frameless Canopy", glass: "17.52 – 21.52 mm laminated", price: "On request" },
          ],
        }}
        faq={[
          { q: <>What is structural glazing and how does it work?</>, a: <>Structural glazing bonds glass to an aluminium frame with structural silicone instead of mechanical fixings, giving a seamless, frameless look while the silicone and frame carry the glass loads. The system is sized to the project wind load.</> },
          { q: <>How much does structural glazing cost per sq ft in India?</>, a: <>Structural glazing cost depends on the configuration (2-side, 4-side or spider), glass, height and access, so it needs drawings to price. Fine Glaze prepares BOQ-based quotations.</> },
          { q: <>Is structural glazing safe for high-rise buildings?</>, a: <>Structural glazing can be used on tall buildings when it is designed for the project wind load, with proper sealant, retention and drainage. Fine Glaze checks member sizing, fixing and anchorage and procures DOWSIL structural silicone or approved equivalents.</> },
          { q: <>How long does installation take?</>, a: <>Installation time depends on facade area, building height, access and glass lead time, so we confirm the programme per project after survey and design approval. Fabrication is batched at our Pisoli unit and despatched to site.</> },
          { q: <>Do you offer maintenance after installation?</>, a: <>Yes. We offer annual maintenance contracts for glazing, glass and cladding, covering inspection, sealant re-application, glass replacement and cleaning, with a written condition report.</> },
        ]}
        areas={["Pune", "Mumbai BKC", "Navi Mumbai", "Thane", "Hinjewadi", "Pimpri-Chinchwad"]}
        others={[
          { title: "Curtain Wall Systems", href: "/curtain-wall-systems" },
          { title: "Aluminium Facade", href: "/aluminium-windows-doors" },
          { title: "ACP Cladding", href: "/acp-aluminium-cladding" },
          { title: "Glass Railings", href: "/glass-railings" },
          { title: "Facade AMC", href: "/maintenance-services" },
          { title: "All Services →", href: "/services" },
        ]}
        related={(no) => <RelatedProjects no={no} heading="Glazing projects we have delivered" keywords={["glazing", "spider", "glass door"]} />}
      />
      <CTASection />
    </Layout>
  );
}
