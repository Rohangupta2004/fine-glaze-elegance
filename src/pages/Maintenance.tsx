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
    title: "Sealant Renewal & Waterproofing",
    desc: "Complete removal and replacement of degraded structural silicone and weather sealants. We use approved sealants from major manufacturers. Includes joint preparation, priming, and quality-tested application.",
    glass: "DOWSIL or approved equivalents",
    wind: "Per condition report",
    bestFor: "Leaking facades, old buildings",
    price: "Quoted on drawings",
    img: "sealant",
  },
  {
    num: "02",
    title: "Glass Panel Replacement",
    desc: "Safe removal and replacement of cracked, broken, or hazy glass panels. Includes gasket and sealant renewal.",
    glass: "Safe site access",
    wind: "As needed",
    bestFor: "Damaged panels, upgrades",
    price: "Quoted on drawings",
    img: "glass",
  },
  {
    num: "03",
    title: "Facade Cleaning",
    desc: "Specialist facade glass cleaning and restoration using pH-neutral solutions. Removes pollution deposits, hard water stains, and biological growth without damaging glass coatings or sealants.",
    glass: "As per site access",
    wind: "As scheduled",
    bestFor: "Commercial towers, malls",
    price: "Quoted on drawings",
    img: "cleaning",
  },
  {
    num: "04",
    title: "Annual Maintenance Contract",
    desc: "Comprehensive AMC covering bi-annual inspections, sealant checks, hardware lubrication, drainage clearing, and glass breakage response. Includes detailed condition reports with photo documentation.",
    glass: "Scheduled programme",
    wind: "Bi-annual visits",
    bestFor: "All commercial buildings",
    price: "Custom quote",
    img: "amc",
  },
];

const STEPS = [
  { num: "01", title: "Inspection", desc: "Full facade audit with photo documentation of all issues" },
  { num: "02", title: "Report", desc: "Detailed condition report with prioritised repair recommendations" },
  { num: "03", title: "Execution", desc: "Scheduled repairs with safe access for the site" },
  { num: "04", title: "Handover", desc: "Completion report with before and after photos; defect liability support as per contract" },
];

export default function Maintenance() {

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Facade AMC & Maintenance Services",
    serviceType: "Facade Maintenance & AMC",
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
    description: "Comprehensive facade maintenance — sealant renewal, glass replacement, cleaning, waterproofing & annual maintenance contracts (AMC) for commercial buildings.",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fineglaze.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://fineglaze.com/services" },
      { "@type": "ListItem", position: 3, name: "Facade AMC & Maintenance", item: "https://fineglaze.com/maintenance-services" },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How often should a facade be maintained?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A facade should be inspected at least once a year, and twice a year (before and after the monsoon) for coastal or structural glazing facades. Cleaning frequency depends on the building. Sealant life depends on product, exposure and workmanship.",
        },
      },
      {
        "@type": "Question",
        name: "What does a facade AMC include?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A facade AMC covers scheduled inspection and repair agreed in the contract. Fine Glaze's scope includes periodic inspection with a written condition report, cleaning, sealant re-application, glass replacement and leakage investigation.",
        },
      },
      {
        "@type": "Question",
        name: "How much does facade cleaning cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Facade cleaning cost depends on building height, access method (rope access, cradle or BMU), glass area and how soiled the glass is. Fine Glaze quotes per project after reviewing the building.",
        },
      },
      {
        "@type": "Question",
        name: "Can you replace glass panels on occupied buildings?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Glass replacement on an occupied building is planned with the building management, with agreed access, timing, edge protection and debris control. Fine Glaze plans the sequence per site.",
        },
      },
      {
        "@type": "Question",
        name: "Do you service facades installed by other companies?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We service all facade types regardless of the original installer. Our engineers assess the system, identify the glass and sealant specifications, and source matching materials for seamless repairs.",
        },
      },
    ],
  };


  return (
    <Layout darkHero>
      <SEO
        title="Facade Maintenance Company in Pune & Mumbai | Fine Glaze"
        description="Facade maintenance company in Pune, Mumbai and across India. AMC, glass cleaning, sealant repair and leakage checks, with a written facade condition report."
        canonical="https://fineglaze.com/maintenance-services"
        keywords="facade maintenance company, facade maintenance AMC, glass facade cleaning, sealant replacement, curtain wall repair, facade inspection"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      <PageHero
        schematic="maintenance"
        crumbs={[{ label: "Facade Maintenance & AMC" }]}
        title={<>Facade<br /> <span className="text-gradient-gold">Maintenance</span><span className="ph-sub">& AMC.</span></>}
        intro="Sealant renewal, glass replacement, cleaning & annual maintenance contracts for commercial buildings."
        secondary={{ label: "+91 83692 33566", href: "tel:+918369233566" }}
        extra=""
      />

      <ServiceBody
        schematic="maintenance"
        intro={{ lead: <>Protect your building investment,</>, tail: <>preventive care that costs less than emergency repairs.</>, body: <>Facade systems need regular maintenance to perform. UV-degraded sealant causes leaks, dirty glass reduces building value, and unchecked corrosion leads to costly structural failures. Our AMC programs catch problems early with scheduled inspections and proactive repairs.</> }}
        overview={undefined}
        systemsTitle={<>Facade Maintenance Services We Offer</>}
        systems={SYSTEMS}
        systemCols={["Method", "Frequency"]}
        featuresTitle={<>Built for performance. Delivered on schedule.</>}
        features={[
          { title: "Safety on Site", desc: "A nominated safety officer oversees work at height across our sites, with harness, lifeline and anchorage on every elevation activity." },
          { title: "Emergency response", desc: "Emergency glass replacement and leak repairs for AMC clients." },
          { title: "Facade Installers", desc: "As a facade contractor, we understand how these systems are built, which helps diagnose and repair them." },
          { title: "Approved Materials", desc: "Sealants from approved manufacturers, with glass and hardware matched to the existing specification where possible." },
        ]}
        stepsTitle={<>From first visit to final handover</>}
        steps={STEPS}
        promise={<>Inspection first, a written condition report next, then repair. We service facades we did not install too.</>}
        pricing={{
          title: <>Facade Maintenance Cost: How We Quote</>,
          intro: <>We quote against drawings. Final cost depends on specification and complexity.</>,
          colLabel: "Method",
          rows: [
            { system: "Sealant Renewal", glass: "DOWSIL or approved equivalents", price: "Quoted on drawings" },
            { system: "Glass Replacement", glass: "DGU / toughened", price: "Quoted on drawings" },
            { system: "Facade Cleaning", glass: "As per site access", price: "Quoted on drawings" },
            { system: "Annual AMC", glass: "Bi-annual programme", price: "Custom quote" },
          ],
        }}
        faq={[
          { q: <>How often should a facade be maintained?</>, a: <>A facade should be inspected at least once a year, and twice a year (before and after the monsoon) for coastal or structural glazing facades. Cleaning frequency depends on the building. Sealant life depends on product, exposure and workmanship.</> },
          { q: <>What does a facade AMC include?</>, a: <>A facade AMC covers scheduled inspection and repair agreed in the contract. Fine Glaze's scope includes periodic inspection with a written condition report, cleaning, sealant re-application, glass replacement and leakage investigation.</> },
          { q: <>How much does facade cleaning cost?</>, a: <>Facade cleaning cost depends on building height, access method (rope access, cradle or BMU), glass area and how soiled the glass is. Fine Glaze quotes per project after reviewing the building.</> },
          { q: <>Can you replace glass panels on occupied buildings?</>, a: <>Yes. Glass replacement on an occupied building is planned with the building management, with agreed access, timing, edge protection and debris control. Fine Glaze plans the sequence per site.</> },
          { q: <>Do you service facades installed by other companies?</>, a: <>Yes. We service all facade types regardless of the original installer. Our engineers assess the system, identify the glass and sealant specifications, and source matching materials for seamless repairs.</> },
        ]}
        areas={["Pune", "Mumbai BKC", "Navi Mumbai", "Thane", "Hinjewadi", "Pimpri-Chinchwad"]}
        others={[
          { title: "Curtain Wall Systems", href: "/curtain-wall-systems" },
          { title: "Structural Glazing", href: "/structural-glazing" },
          { title: "ACP Cladding", href: "/acp-aluminium-cladding" },
          { title: "Aluminium Facade", href: "/aluminium-windows-doors" },
          { title: "Glass Railings", href: "/glass-railings" },
          { title: "All Services →", href: "/services" },
        ]}
        related={(no) => <RelatedProjects no={no} heading="Maintenance & repair work we run" keywords={["sealant", "maintenance", "leakage", "replacement", "repair"]} />}
      />
      <CTASection />
    </Layout>
  );
}
