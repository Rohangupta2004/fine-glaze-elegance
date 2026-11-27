import Illustration from "@/components/common/Illustration";
import SEO from "@/components/SEO";
import PageHero from "@/components/common/PageHero";
import { RelatedProjects } from "@/components/RelatedProjects";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import FaqList from "@/components/common/FaqList";
import { DeliveryProcess, LinkTable, Prose, Sec, SpecList, SchematicFig } from "@/components/common/Sheet";

export default function GlassRailingPune() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Glass Railing Contractor in Pune",
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
    "description": "Glass railing contractor in Pune: frameless balcony, staircase and terrace glass railings for homes and offices, with in-house shop drawings."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is the cost of glass railing in Pune?", "acceptedAnswer": { "@type": "Answer", "text": "Glass railing cost in Pune depends on the system (frameless or post), glass thickness, hardware finish and site conditions, so it is priced per running foot against drawings. Fine Glaze prepares BOQ-based quotations." } },
      { "@type": "Question", "name": "Is toughened glass railing safe for balconies in Pune?", "acceptedAnswer": { "@type": "Answer", "text": "Toughened glass railing is widely used on balconies when the glass build-up, supports and anchorage are designed for the load. Laminated glass adds a layer that helps hold broken pieces in place. We confirm the specification per project." } },
      { "@type": "Question", "name": "Do glass railings need maintenance in Pune?", "acceptedAnswer": { "@type": "Answer", "text": "Glass railings need little upkeep: regular cleaning with mild detergent, plus periodic checks of fittings, anchors and sealant joints at the base channel. Replace worn sealant as part of routine maintenance." } },
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Glass Railing Contractor in Pune", "item": "https://fineglaze.com/glass-railing-pune" }
    ]
  };

  return (
    <Layout darkHero>
      <SEO
        title="Glass Railing Contractor in Pune, Maharashtra | Fine Glaze"
        description="Glass railing contractor in Pune: frameless balcony, staircase and terrace glass railings for homes and offices, with in-house shop drawings."
        canonical="https://fineglaze.com/glass-railing-pune"
        keywords="glass railing contractor Pune, balcony glass railing Pune, staircase glass railing Pune, frameless railing Pune"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      <PageHero
        crumbs={[{ label: "Glass Railing Contractor in Pune" }]}
        title={<>Glass Railing <span className="text-gradient-gold">Contractor in Pune</span></>}
        intro="Fine Glaze installs frameless and semi-frameless glass railing systems in Pune for apartments, offices, hotels and commercial buildings, using toughened glass and stainless steel fittings."
        secondary={{ label: "View Projects", to: "/portfolio" }}
        image={{ src: "/projects/jindal-house-46-2.webp", alt: "Sea-front terrace glass railing at Jindal House, Mumbai — completed by Fine Glaze in 2023", width: 600, height: 420 }}
      />

      <Sec no="01" label="Overview" title={<>Glass Railings in Pune</>} sheetLabel="Overview">
          <div className="sx-split">
            <Prose>
<p>
            Glass railings are common on apartment balconies, staircases, terraces and commercial lobbies. Fine Glaze offers frameless railings with base channels, post systems with glass infill, and handrail-supported systems, and we choose the system with you against the drawings and the load requirements.
          </p>
          <p>
            Railing glass is normally toughened or toughened laminated, and its thickness, supports and anchorage come from the structural check for the project. Confirm the glass specification against IS 2553 and the consultant's requirements before ordering.
          </p>
          <p>
            We take residential and commercial railing projects across Pune and PCMC. Our documented railing work includes SS glass railings at Nirmaann Estrellaa in Pune and shaft railings at Salsette-27 and Jindal House in Mumbai. Stainless steel fittings are available in common finishes.
          </p>
          <p>
            Fine Glaze handles the full railing scope: site measurement and structural check, glass procurement to exact sizes, hardware supply and fabrication, installation and silicone joint finishing.
          </p>
          <p>
            For developers with multiple floors or buildings, we can quote a bulk package. Send drawings and quantities for a BOQ-based quotation.
          </p>
            </Prose>
            <div className="sx-side">
              <SchematicFig kind="railing" fig="02" />
              <Illustration name="city-pune" flush sizes="(max-width: 960px) 100vw, 480px" />
            </div>
          </div>
      </Sec>

      <Sec no="02" label="Scope" title={<>What We Offer</>} sheetLabel="Scope of work">
        <SpecList items={[<>Frameless Glass Railings</>, <>Toughened + Laminated Glass</>, <>Stainless Steel Fittings</>, <>Balcony & Staircase Systems</>, <>Glass Specified to IS 2553</>, <>Hardware Finish Options</>]} />
      </Sec>

      <Sec no="03" label="Process" title="From survey to handover." sheetLabel="Process">
        <DeliveryProcess />
      </Sec>

      <RelatedProjects no="04" heading="Glass railing work we have delivered" keywords={["railing"]} />

      <Sec no="05" label="FAQ" title={<>Frequently Asked Questions</>} sheetLabel="FAQ">
        <div className="sx-faq">
          <FaqList
            items={[
              { q: <>What is the cost of glass railing in Pune?</>, a: <>Glass railing cost in Pune depends on the system (frameless or post), glass thickness, hardware finish and site conditions, so it is priced per running foot against drawings. Fine Glaze prepares BOQ-based quotations.</> },
              { q: <>Is toughened glass railing safe for balconies in Pune?</>, a: <>Toughened glass railing is widely used on balconies when the glass build-up, supports and anchorage are designed for the load. Laminated glass adds a layer that helps hold broken pieces in place. We confirm the specification per project.</> },
              { q: <>Do glass railings need maintenance in Pune?</>, a: <>Glass railings need little upkeep: regular cleaning with mild detergent, plus periodic checks of fittings, anchors and sealant joints at the base channel. Replace worn sealant as part of routine maintenance.</> },
            ]}
          />
        </div>
      </Sec>

      <Sec no="06" label="Related" title={<>Explore Related Services</>} sheetLabel="Related services">
        <LinkTable
          items={[
            { to: "/glass-railings", title: "Glass Railings", desc: "Full glass railing service" },
            { to: "/structural-glazing-pune", title: "Structural Glazing Pune", desc: "Structural glazing systems" },
            { to: "/facade-contractor-pune", title: "Facade Contractor Pune", desc: "Complete facade solutions" },
            { to: "/acp-cladding-pune", title: "ACP Cladding Pune", desc: "ACP panel facades" },
            { to: "/curtain-wall-pune", title: "Curtain Wall Pune", desc: "Glass curtain walls" },
            { to: "/maintenance-services", title: "Facade Maintenance", desc: "Glass railing maintenance" },
          ]}
        />
      </Sec>

      <CTASection />
    </Layout>
  );
}
