import Illustration from "@/components/common/Illustration";
import SEO from "@/components/SEO";
import PageHero from "@/components/common/PageHero";
import { RelatedProjects } from "@/components/RelatedProjects";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import FaqList from "@/components/common/FaqList";
import { DeliveryProcess, LinkTable, Prose, Sec, SpecList, SchematicFig } from "@/components/common/Sheet";

export default function AcpCladdingPune() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "ACP Cladding Contractor in Pune",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Fine Glaze",
      "@id": "https://fineglaze.com",
      "url": "https://fineglaze.com",
      "telephone": "+91-8369233566",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "addressCountry": "IN"
      }
    },
    "areaServed": [
      { "@type": "City", "name": "Pune" },
      { "@type": "City", "name": "Mumbai" },
      { "@type": "State", "name": "Maharashtra" }
    ],
    "description": "ACP cladding contractor in Pune for commercial facades, with panel routing and preparation at our own fabrication unit in Pisoli and in-house shop drawings."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is the cost of ACP cladding in Pune?", "acceptedAnswer": { "@type": "Answer", "text": "ACP cladding cost in Pune depends on panel brand, core type (PE or fire-retardant), finish, sub-frame complexity and access. Fine Glaze prepares BOQ-based quotations with brand specifications after reviewing drawings." } },
      { "@type": "Question", "name": "Is FR-grade ACP mandatory in Pune buildings?", "acceptedAnswer": { "@type": "Answer", "text": "Fire-retardant ACP is commonly required for external cladding on taller buildings, but the rule depends on building height, use and local fire regulations. Confirm the requirement with your consultant and fire authority before specifying the core." } },
      { "@type": "Question", "name": "How long does ACP cladding installation take in Pune?", "acceptedAnswer": { "@type": "Answer", "text": "ACP installation time depends on the elevation area, sub-frame complexity, access and weather, so we confirm the programme per project after survey. Panel preparation at our Pisoli unit runs alongside site preparation." } },
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "ACP Cladding Contractor in Pune", "item": "https://fineglaze.com/acp-cladding-pune" }
    ]
  };

  return (
    <Layout darkHero>
      <SEO
        title="ACP Cladding Contractor in Pune, Maharashtra | Fine Glaze"
        description="ACP cladding contractor in Pune for commercial facades, with panel routing and preparation at our own fabrication unit in Pisoli and in-house shop drawings."
        canonical="https://fineglaze.com/acp-cladding-pune"
        keywords="ACP cladding contractor Pune, ACP facade Pune, aluminium composite panel Pune, ACP sheet installation Pune"
        ogImage="https://fineglaze.com/projects/embassy-techzone-40-1.webp"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      <PageHero
        crumbs={[{ label: "ACP Cladding Contractor in Pune" }]}
        title={<>ACP Cladding <span className="text-gradient-gold">Contractor in Pune</span></>}
        intro="Fine Glaze is an ACP cladding contractor based in Pune, offering aluminium composite panel cladding for commercial buildings, hospitals, offices and residential exteriors. We work with Alubond and other approved panel brands."
        secondary={{ label: "View Projects", to: "/portfolio" }}
        image={{ src: "/projects/embassy-techzone-41-3.webp", alt: "ACP cladding on the dead wall of Block 2, Embassy Techzone, Hinjewadi, Pune — completed by Fine Glaze", width: 600, height: 420 }}
      />

      <Sec no="01" label="Overview" title={<>ACP Cladding in Pune</>} sheetLabel="Overview">
          <div className="sx-split">
            <Prose>
<p>
            ACP (aluminium composite panel) is a sandwich panel with two thin aluminium sheets bonded to a polyethylene or fire-retardant mineral core. For external cladding, the core type and the fire requirements of the building should be confirmed against the National Building Code, local fire rules and the consultant's specification.
          </p>
          <p>
            Our documented ACP work includes ACP cladding at the Nanavati Max Hospital and FIFC Tower in Mumbai, ACP and silicone work at the LTIMindtree Mensa Campus, and spider glazing with ACP cladding at Embassy Techzone, Hinjewadi. In Pune we handle surface preparation, sub-frame fabrication, panel routing and folding, and weather-sealed installation.
          </p>
          <p>
            PVDF-coated panels are commonly chosen for external use because the coating resists UV fading and weathering better than polyester finishes. Colour and warranty terms come from the panel manufacturer, so we confirm them from the brand's documents for your project.
          </p>
          <p>
            Our scope includes full elevation cladding, canopy and entrance feature cladding, parapet and sunshade cladding, and ACP infill within curtain wall systems. Panel routing and grooving are prepared at our own unit in Pisoli, Pune.
          </p>
          <p>
            We take ACP cladding across Pune and PCMC, including Hinjewadi, Kharadi, Undri and Pimpri-Chinchwad. Contact Fine Glaze with drawings for a BOQ-based quotation and brand comparison.
          </p>
            </Prose>
            <div className="sx-side">
              <SchematicFig kind="cladding" fig="02" />
              <Illustration name="city-pune" flush sizes="(max-width: 960px) 100vw, 480px" />
            </div>
          </div>
      </Sec>

      <Sec no="02" label="Scope" title={<>What We Offer</>} sheetLabel="Scope of work">
        <SpecList items={[<>FR-Grade Panel Options</>, <>PVDF Coating</>, <>CNC Routed Designs</>, <>Alubond and Approved Brands</>, <>Lightweight Sub-Frame System</>, <>Finish and Colour Options</>]} />
      </Sec>

      <Sec no="03" label="Process" title="From survey to handover." sheetLabel="Process">
        <DeliveryProcess />
      </Sec>

      <RelatedProjects no="04" heading="Our cladding work in Pune" locations={["Pune"]} keywords={["ACP", "cladding"]} />

      <Sec no="05" label="FAQ" title={<>Frequently Asked Questions</>} sheetLabel="FAQ">
        <div className="sx-faq">
          <FaqList
            items={[
              { q: <>What is the cost of ACP cladding in Pune?</>, a: <>ACP cladding cost in Pune depends on panel brand, core type (PE or fire-retardant), finish, sub-frame complexity and access. Fine Glaze prepares BOQ-based quotations with brand specifications after reviewing drawings.</> },
              { q: <>Is FR-grade ACP mandatory in Pune buildings?</>, a: <>Fire-retardant ACP is commonly required for external cladding on taller buildings, but the rule depends on building height, use and local fire regulations. Confirm the requirement with your consultant and fire authority before specifying the core.</> },
              { q: <>How long does ACP cladding installation take in Pune?</>, a: <>ACP installation time depends on the elevation area, sub-frame complexity, access and weather, so we confirm the programme per project after survey. Panel preparation at our Pisoli unit runs alongside site preparation.</> },
            ]}
          />
        </div>
      </Sec>

      <Sec no="06" label="Related" title={<>Explore Related Services</>} sheetLabel="Related services">
        <LinkTable
          items={[
            { to: "/acp-aluminium-cladding", title: "ACP Cladding", desc: "Full ACP cladding service" },
            { to: "/curtain-wall-pune", title: "Curtain Wall Pune", desc: "Glass curtain wall Pune" },
            { to: "/aluminium-windows-doors", title: "Aluminium Facade", desc: "Aluminium facade systems" },
            { to: "/structural-glazing-pune", title: "Structural Glazing Pune", desc: "Structural glazing Pune" },
            { to: "/facade-contractor-pune", title: "Facade Contractor Pune", desc: "Complete facade services" },
            { to: "/maintenance-services", title: "Facade Maintenance", desc: "Cladding maintenance" },
          ]}
        />
      </Sec>

      <CTASection />
    </Layout>
  );
}
