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
    title: "Fixed Aluminium Louvers",
    desc: "Permanently angled aluminium blades mounted on a frame. The simplest and most cost-effective sun shading solution. Blade angle is optimised for building orientation and sun path at your location.",
    glass: "Flat / elliptical blade",
    wind: "Fixed angle",
    bestFor: "Parking, facades, utilities",
    price: "Quoted on drawings",
    img: "fixed",
  },
  {
    num: "02",
    title: "Operable Louvers",
    desc: "Manually adjustable blades that can be angled to control light and airflow. Linked rod mechanism allows all blades to move together. Ideal for spaces needing variable sun control throughout the day.",
    glass: "Aerofoil blade",
    wind: "Manual rod-operated",
    bestFor: "Offices, residential",
    price: "Quoted on drawings",
    img: "operable",
  },
  {
    num: "03",
    title: "Motorised Sun Control",
    desc: "Automated louver systems with sensor-driven or timer-controlled motors. Blades adjust automatically based on sun position, time, or interior temperature — maximum energy savings with zero manual effort.",
    glass: "Aerofoil blade",
    wind: "Motorised + sensor",
    bestFor: "Green buildings, IT parks",
    price: "Quoted on drawings",
    img: "motorised",
  },
  {
    num: "04",
    title: "Vertical Fins & Screens",
    desc: "Vertical aluminium blades or perforated screens that provide sun shading, privacy, and architectural rhythm. Available in twisted, angled, and perforated profiles for unique facade expression.",
    glass: "Custom profiles",
    wind: "Fixed / operable",
    bestFor: "Feature facades, screens",
    price: "Quoted on drawings",
    img: "fins",
  },
];

const STEPS = [
  { num: "01", title: "Sun Study", desc: "Analyse building orientation, sun path & shading needs" },
  { num: "02", title: "Design", desc: "Blade profile selection, spacing calculations & 3D preview" },
  { num: "03", title: "Fabrication", desc: "Cutting, sub-assembly and finishing preparation at our Pisoli, Pune unit" },
  { num: "04", title: "Installation", desc: "Bracket fixing, blade mounting & mechanism testing" },
];

export default function Louvers() {

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Aluminium Louver & Sun Shading Systems",
    serviceType: "Aluminium Louver Installation",
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
    description: "Architectural aluminium louver and sun shading systems: fixed, operable and motorised, with aerofoil and flat blade profiles.",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fineglaze.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://fineglaze.com/services" },
      { "@type": "ListItem", position: 3, name: "Aluminium Louvers", item: "https://fineglaze.com/aluminium-louvers" },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much do aluminium louvers reduce heat?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Well-designed aluminium louvers cut direct solar heat on the glass line, and the effect depends on orientation, blade angle, glass and building use. We do not quote a fixed percentage; ask for an energy model if you need numbers.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between fixed and operable louvers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Fixed louvers have permanently set blade angles — simple and low maintenance. Operable louvers allow manual or motorised angle adjustment throughout the day for optimal light and heat control based on changing sun position.",
        },
      },
      {
        "@type": "Question",
        name: "How much do aluminium louvers cost per sq ft?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Louver cost depends on blade profile, fixed or operable or motorised type, size, finish and access, so a reliable figure needs drawings. Fine Glaze prepares BOQ-based quotations.",
        },
      },
      {
        "@type": "Question",
        name: "Can motorised louvers be connected to building management systems?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Motorised louvers can often be linked to a building management system with sun sensors, temperature input or timers, depending on the motor and control system chosen. Confirm integration needs at design stage.",
        },
      },
      {
        "@type": "Question",
        name: "What finishes are available for aluminium louvers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Louvers are available in any RAL colour via powder coating, or in natural/bronze/black anodised finishes. Wood-grain effect coatings are also available for architectural projects requiring a natural appearance.",
        },
      },
    ],
  };


  return (
    <Layout darkHero>
      <SEO
        title="Aluminium Louver Contractor in Pune & Mumbai | Fine Glaze"
        description="Aluminium louver contractor in Pune, Mumbai and across India. Fixed, vertical and motorised sun louvers, sub-assembled at our own unit in Pune."
        canonical="https://fineglaze.com/aluminium-louvers"
        keywords="aluminium louver contractor, aluminium sun louvers, facade louvers, vertical louvers, motorized louvers, architectural louvers"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      <PageHero
        schematic="louver"
        crumbs={[{ label: "Aluminium Louvers & Sun Shading" }]}
        title={<>Aluminium<br /> <span className="text-gradient-gold">Louvers</span><span className="ph-sub">& Sun Shading.</span></>}
        intro="Architectural solar control systems that cut direct sun on the glass line while adding design character."
        secondary={{ label: "+91 83692 33566", href: "tel:+918369233566" }}
        extra=""
      />

      <ServiceBody
        schematic="louver"
        intro={{ lead: <>Control direct sunlight,</>, tail: <>with louvers that double as architectural features.</>, body: <>Aluminium louver systems block direct solar radiation while maintaining airflow and outward visibility. They cut direct sun on the glass and can lower cooling demand, depending on orientation and design. Available in fixed, operable, and motorised configurations with elliptical, aerofoil, and flat blade profiles.</> }}
        overview={undefined}
        systemsTitle={<>Louver Systems We Install</>}
        systems={SYSTEMS}
        systemCols={["Blade Profile", "Operation"]}
        featuresTitle={<>Built for performance. Delivered on schedule.</>}
        features={[
          { title: "Sun-Path Optimised", desc: "Blade angles calculated for your building's orientation. Orientation and sun path are part of the design brief." },
          { title: "Own Fabrication Unit", desc: "Sub-assembly and framing at our Pisoli, Pune unit, with shop drawings prepared in-house." },
          { title: "Aluminium Extrusions", desc: "Extrusions from major Indian mills with powder-coat or anodised finishes, as specified." },
          { title: "Motorised Options", desc: "Motorised systems can be quoted with controls; BMS integration depends on the project." },
        ]}
        stepsTitle={<>From first visit to final handover</>}
        steps={STEPS}
        promise={<>Solar control detailed for your building and orientation.</>}
        pricing={{
          title: <>Aluminium Louver Cost: How We Quote</>,
          intro: <>We quote against drawings. Final cost depends on specification and complexity.</>,
          colLabel: "Blade Type",
          rows: [
            { system: "Fixed Louvers", glass: "Flat / elliptical blade", price: "Quoted on drawings" },
            { system: "Operable Louvers", glass: "Aerofoil + rod mechanism", price: "Quoted on drawings" },
            { system: "Motorised System", glass: "Aerofoil + motor + sensor", price: "Quoted on drawings" },
            { system: "Vertical Fins / Screens", glass: "Custom profiles", price: "Quoted on drawings" },
          ],
        }}
        faq={[
          { q: <>How much do aluminium louvers reduce heat?</>, a: <>Well-designed aluminium louvers cut direct solar heat on the glass line, and the effect depends on orientation, blade angle, glass and building use. We do not quote a fixed percentage; ask for an energy model if you need numbers.</> },
          { q: <>What is the difference between fixed and operable louvers?</>, a: <>Fixed louvers have permanently set blade angles — simple and low maintenance. Operable louvers allow manual or motorised angle adjustment throughout the day for optimal light and heat control based on changing sun position.</> },
          { q: <>How much do aluminium louvers cost per sq ft?</>, a: <>Louver cost depends on blade profile, fixed or operable or motorised type, size, finish and access, so a reliable figure needs drawings. Fine Glaze prepares BOQ-based quotations.</> },
          { q: <>Can motorised louvers be connected to building management systems?</>, a: <>Motorised louvers can often be linked to a building management system with sun sensors, temperature input or timers, depending on the motor and control system chosen. Confirm integration needs at design stage.</> },
          { q: <>What finishes are available for aluminium louvers?</>, a: <>Louvers are available in any RAL colour via powder coating, or in natural/bronze/black anodised finishes. Wood-grain effect coatings are also available for architectural projects requiring a natural appearance.</> },
        ]}
        areas={["Pune", "Mumbai BKC", "Navi Mumbai", "Thane", "Hinjewadi", "Pimpri-Chinchwad"]}
        others={[
          { title: "Aluminium Facade", href: "/aluminium-windows-doors" },
          { title: "Curtain Wall Systems", href: "/curtain-wall-systems" },
          { title: "ACP Cladding", href: "/acp-aluminium-cladding" },
          { title: "Structural Glazing", href: "/structural-glazing" },
          { title: "Facade AMC", href: "/maintenance-services" },
          { title: "All Services →", href: "/services" },
        ]}
        related={(no) => <RelatedProjects no={no} heading="Louver projects" keywords={["louver", "louvre", "fins"]} />}
      />
      <CTASection />
    </Layout>
  );
}
