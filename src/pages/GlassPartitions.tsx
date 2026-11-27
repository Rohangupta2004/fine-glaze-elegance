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
    title: "Frameless Office Partitions",
    desc: "Floor-to-ceiling toughened glass panels with minimal hardware. Creates transparent, open-plan workspaces while providing separation for meeting rooms, cabins, and focus areas.",
    glass: "10–12mm toughened",
    wind: "Frameless patch fittings",
    bestFor: "Offices, co-working spaces",
    price: "Quoted on drawings",
    img: "office",
  },
  {
    num: "02",
    title: "Acoustic Double-Glazed Walls",
    desc: "Two glass panels with an air gap for better sound insulation than single glass. Ideal for boardrooms, HR offices, and conference rooms where speech privacy is critical.",
    glass: "6+12+6mm DGU",
    wind: "Better sound insulation than single glass",
    bestFor: "Boardrooms, conference rooms",
    price: "Quoted on drawings",
    img: "acoustic",
  },
  {
    num: "03",
    title: "Switchable Smart Glass",
    desc: "PDLC glass that switches from transparent to opaque with an electric current. Instant privacy for glass-walled meeting rooms without blinds or curtains. App and switch control available.",
    glass: "Smart PDLC laminated",
    wind: "Electric privacy switch",
    bestFor: "CEO cabins, meeting rooms",
    price: "Quoted on drawings",
    img: "smart",
  },
  {
    num: "04",
    title: "Shower Enclosures",
    desc: "Luxury frameless shower enclosures in sliding, hinged, and walk-in designs. 8–12mm toughened glass with anti-limescale nano-coating that keeps glass sparkling clean with minimal effort.",
    glass: "8–12mm toughened",
    wind: "Nano anti-limescale coat",
    bestFor: "Premium homes, hotels",
    price: "Quoted on drawings",
    img: "shower",
  },
];

const STEPS = [
  { num: "01", title: "Space Planning", desc: "Understand layout, privacy needs & acoustic requirements" },
  { num: "02", title: "Design", desc: "Glass type, hardware finish & door configuration approval" },
  { num: "03", title: "Fabrication", desc: "Glass tempering, hardware sourcing & quality checks" },
  { num: "04", title: "Installation", desc: "Precision fitting with plumb-level alignment & sealing" },
];

export default function GlassPartitions() {

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Glass Partitions & Shower Enclosures",
    serviceType: "Glass Partition & Shower Enclosure Installation",
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
    description: "Frameless glass partitions for offices and luxury shower enclosures for homes. Single-glazed, double-glazed & smart glass options. 8–12mm toughened glass.",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fineglaze.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://fineglaze.com/services" },
      { "@type": "ListItem", position: 3, name: "Glass Partitions & Shower Enclosures", item: "https://fineglaze.com/glass-partitions" },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Are glass partitions soundproof?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Glass partitions are not soundproof, but double glazed or laminated glass reduces noise far more than single glass. Door gaps and perimeter seals decide the result, so state your privacy need at design stage.",
        },
      },
      {
        "@type": "Question",
        name: "What is switchable smart glass?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Smart glass uses PDLC (Polymer Dispersed Liquid Crystal) technology. When electric current is applied, the glass turns transparent. When switched off, it becomes frosted/opaque — providing instant privacy without blinds. Controlled via wall switch or smartphone app.",
        },
      },
      {
        "@type": "Question",
        name: "How much do glass partitions cost per sq ft?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Glass partition cost depends on glass type (single, double glazed or smart glass), hardware, doors and floor-to-ceiling height, so it is priced against drawings. Fine Glaze prepares BOQ-based quotations.",
        },
      },
      {
        "@type": "Question",
        name: "Can glass partitions have doors?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We install frameless glass swing doors, sliding doors, and even automatic sensor doors within glass partition systems. All doors come with floor springs or patch fittings and soft-close mechanisms.",
        },
      },
      {
        "@type": "Question",
        name: "Is the nano-coating on shower glass worth it?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Nano-coating creates a hydrophobic surface that repels water and prevents limescale build-up. Shower glass stays cleaner for longer and requires significantly less scrubbing — especially valuable in hard-water areas across India.",
        },
      },
    ],
  };


  return (
    <Layout darkHero>
      <SEO
        title="Glass Partition Contractor in Pune & Mumbai | Fine Glaze"
        description="Glass partition contractor in Pune, Mumbai and across India. Frameless office partitions, DGU and smart glass, with in-house shop drawings for approval."
        canonical="https://fineglaze.com/glass-partitions"
        keywords="glass partition contractor, office glass partitions, frameless glass partition, DGU glass partition, acoustic glass partition"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      <PageHero
        schematic="partition"
        crumbs={[{ label: "Glass Partitions & Enclosures Pune & Mumbai" }]}
        title={<>Glass Partitions<br /> <span className="text-gradient-gold">& Enclosures</span><span className="ph-sub">Pune &amp; Mumbai.</span></>}
        intro="Office glass partitions, acoustic meeting-room walls and toughened-glass shower enclosures designed and installed in Pune and Mumbai."
        secondary={{ label: "+91 83692 33566", href: "tel:+918369233566" }}
        extra=""
      />

      <ServiceBody
        schematic="partition"
        intro={{ lead: <>Open, light-filled spaces without losing privacy,</>, tail: <>toughened glass that divides space without blocking it.</>, body: <>Glass partitions create visually open workspaces while providing acoustic separation. Available in single-glazed, double-glazed (for better sound insulation), and switchable smart glass that turns opaque at the touch of a button. Our shower enclosures use 8–12mm toughened glass with anti-limescale nano-coating.</> }}
        overview={undefined}
        systemsTitle={<>Glass Partition & Enclosure Systems We Install</>}
        systems={SYSTEMS}
        systemCols={["Glass", "Feature"]}
        featuresTitle={<>Built for performance. Delivered on schedule.</>}
        features={[
          { title: "Safety Glass", desc: "Toughened glass specified to IS 2553. Laminated options are available where the specification needs them." },
          { title: "Measured and Made to Size", desc: "Glass is measured, toughened to size and installed to the approved drawings. Programme is confirmed per project." },
          { title: "Hardware Options", desc: "Patch fittings and door closers in finishes chosen to the specification." },
          { title: "Easy Maintenance", desc: "Nano-coated shower glass repels water and limescale. Office partitions need just regular glass cleaner." },
        ]}
        stepsTitle={<>From first visit to final handover</>}
        steps={STEPS}
        promise={<>Shop drawings prepared in-house. Glass measured and made to size for each space.</>}
        pricing={{
          title: <>Glass Partition & Enclosure Cost: How We Quote</>,
          intro: <>We quote against drawings. Final cost depends on specification and complexity.</>,
          colLabel: "Glass Type",
          rows: [
            { system: "Frameless Partition", glass: "10–12mm toughened", price: "Quoted on drawings" },
            { system: "Acoustic DGU Partition", glass: "6+12+6mm DGU", price: "Quoted on drawings" },
            { system: "Smart Glass Wall", glass: "PDLC laminated", price: "Quoted on drawings" },
            { system: "Shower Enclosure", glass: "8–12mm toughened", price: "Quoted on drawings" },
          ],
        }}
        faq={[
          { q: <>Are glass partitions soundproof?</>, a: <>Glass partitions are not soundproof, but double glazed or laminated glass reduces noise far more than single glass. Door gaps and perimeter seals decide the result, so state your privacy need at design stage.</> },
          { q: <>What is switchable smart glass?</>, a: <>Smart glass uses PDLC (Polymer Dispersed Liquid Crystal) technology. When electric current is applied, the glass turns transparent. When switched off, it becomes frosted/opaque — providing instant privacy without blinds. Controlled via wall switch or smartphone app.</> },
          { q: <>How much do glass partitions cost per sq ft?</>, a: <>Glass partition cost depends on glass type (single, double glazed or smart glass), hardware, doors and floor-to-ceiling height, so it is priced against drawings. Fine Glaze prepares BOQ-based quotations.</> },
          { q: <>Can glass partitions have doors?</>, a: <>Yes. We install frameless glass swing doors, sliding doors, and even automatic sensor doors within glass partition systems. All doors come with floor springs or patch fittings and soft-close mechanisms.</> },
          { q: <>Is the nano-coating on shower glass worth it?</>, a: <>Yes. Nano-coating creates a hydrophobic surface that repels water and prevents limescale build-up. Shower glass stays cleaner for longer and requires significantly less scrubbing — especially valuable in hard-water areas across India.</> },
        ]}
        areas={["Pune", "Mumbai BKC", "Navi Mumbai", "Thane", "Hinjewadi", "Pimpri-Chinchwad"]}
        others={[
          { title: "Glass Railings", href: "/glass-railings" },
          { title: "Structural Glazing", href: "/structural-glazing" },
          { title: "Curtain Wall Systems", href: "/curtain-wall-systems" },
          { title: "Aluminium Facade", href: "/aluminium-windows-doors" },
          { title: "Facade AMC", href: "/maintenance-services" },
          { title: "All Services →", href: "/services" },
        ]}
        related={(no) => <RelatedProjects no={no} heading="Interior glass work" keywords={["shower", "Mittal"]} />}
      />
      <CTASection />
    </Layout>
  );
}
