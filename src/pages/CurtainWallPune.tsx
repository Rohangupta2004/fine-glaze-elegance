import Illustration from "@/components/common/Illustration";
import SEO from "@/components/SEO";
import PageHero from "@/components/common/PageHero";
import { RelatedProjects } from "@/components/RelatedProjects";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import FaqList from "@/components/common/FaqList";
import { DeliveryProcess, LinkTable, Prose, Sec, SpecList, SchematicFig } from "@/components/common/Sheet";

export default function CurtainWallPune() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Curtain Wall Glazing Contractor in Pune",
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
    "description": "Curtain wall contractor in Pune: unitized and stick glass curtain walls for offices and commercial towers, with in-house shop drawings, own fabrication unit."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is the cost of curtain wall glazing in Pune?", "acceptedAnswer": { "@type": "Answer", "text": "Curtain wall cost in Pune depends on the system, glass type, aluminium profile, building height, wind load and access, so it needs drawings to price. Fine Glaze prepares BOQ-based quotations after reviewing the drawings." } },
      { "@type": "Question", "name": "Which areas in Pune does Fine Glaze serve for curtain walls?", "acceptedAnswer": { "@type": "Answer", "text": "Fine Glaze takes curtain wall projects across Pune and PCMC, including Hinjewadi, Kharadi, Baner, Wakad, Magarpatta, Undri and Pimpri-Chinchwad, and also elsewhere in India. Our fabrication unit is in Pisoli, Pune." } },
      { "@type": "Question", "name": "How long does curtain wall installation take in Pune?", "acceptedAnswer": { "@type": "Answer", "text": "Programme depends on building size, system, glass lead time and site access, so we confirm it per project after survey and design approval. Fabrication is batched per project and despatched directly to site." } },
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Curtain Wall Glazing Contractor in Pune", "item": "https://fineglaze.com/curtain-wall-pune" }
    ]
  };

  return (
    <Layout darkHero>
      <SEO
        title="Curtain Wall Contractor in Pune, Maharashtra | Fine Glaze"
        description="Curtain wall contractor in Pune: unitized and stick glass curtain walls for offices and commercial towers, with in-house shop drawings, own fabrication unit."
        canonical="https://fineglaze.com/curtain-wall-pune"
        keywords="curtain wall contractor Pune, curtain wall systems Pune, glass facade Pune, unitized curtain wall Pune"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      <PageHero
        crumbs={[{ label: "Curtain Wall Glazing Contractor in Pune" }]}
        title={<>Curtain Wall Glazing <span className="text-gradient-gold">Contractor in Pune</span></>}
        intro="Fine Glaze is a curtain wall contractor in Pune, offering unitized, semi-unitized and stick systems for offices, commercial buildings and residential towers."
        secondary={{ label: "View Projects", to: "/portfolio" }}
        image={{ src: "/projects/embassy-techzone-40-1.webp", alt: "Embassy Techzone, Hinjewadi, Pune — facade works by Fine Glaze for Embassy REIT", width: 600, height: 420 }}
      />

      <Sec no="01" label="Overview" title={<>Curtain Wall Work in Pune</>} sheetLabel="Overview">
          <div className="sx-split">
            <Prose>
<p>
            Fine Glaze offers curtain wall systems in Pune for offices, commercial buildings and residential towers. Every project starts with a site survey and in-house shop drawings, and member sizing, fixing and anchorage are checked against the project wind load before approval.
          </p>
          <p>
            We fabricate at our own unit in Pisoli, Pune, using aluminium extrusions from major Indian mills, glass from Saint-Gobain or other major brands, and DOWSIL structural silicone or approved equivalents, unless the project's approved vendor list says otherwise.
          </p>
          <p>
            We work across Pune, including Hinjewadi, Kharadi, Baner, Wakad, Magarpatta, Pimpri-Chinchwad and Undri. Our documented Pune projects include Embassy Techzone in Hinjewadi, the Pune International Airport terminal and Nirmaann Estrellaa.
          </p>
          <p>
            As general guidance, stick systems suit lower and mid-rise buildings, semi-unitized systems suit mid-rise buildings with repeating floors, and unitized systems suit taller buildings and tight programmes. We help choose against height, access, programme and budget.
          </p>
          <p>
            Installed glazing is checked with a site water penetration test, and snags are logged and closed before handover. Defect liability support follows the contract terms, and an AMC can be quoted separately.
          </p>
            </Prose>
            <div className="sx-side">
              <SchematicFig kind="curtain" fig="02" />
              <Illustration name="city-pune" flush sizes="(max-width: 960px) 100vw, 480px" />
            </div>
          </div>
      </Sec>

      <Sec no="02" label="Scope" title={<>What We Offer</>} sheetLabel="Scope of work">
        <SpecList items={[<>Unitized Curtain Walls</>, <>Stick System Glazing</>, <>DOWSIL Structural Silicone</>, <>DGU & Low-E Glass</>, <>Wind Load Check to Project Basis</>, <>Anchorage Checked to Project Design</>]} />
      </Sec>

      <Sec no="03" label="Process" title="From survey to handover." sheetLabel="Process">
        <DeliveryProcess />
      </Sec>

      <RelatedProjects no="04" heading="Our glazing work in Pune" locations={["Pune"]} keywords={["glazing", "glass", "window"]} />

      <Sec no="05" label="FAQ" title={<>Frequently Asked Questions</>} sheetLabel="FAQ">
        <div className="sx-faq">
          <FaqList
            items={[
              { q: <>What is the cost of curtain wall glazing in Pune?</>, a: <>Curtain wall cost in Pune depends on the system, glass type, aluminium profile, building height, wind load and access, so it needs drawings to price. Fine Glaze prepares BOQ-based quotations after reviewing the drawings.</> },
              { q: <>Which areas in Pune does Fine Glaze serve for curtain walls?</>, a: <>Fine Glaze takes curtain wall projects across Pune and PCMC, including Hinjewadi, Kharadi, Baner, Wakad, Magarpatta, Undri and Pimpri-Chinchwad, and also elsewhere in India. Our fabrication unit is in Pisoli, Pune.</> },
              { q: <>How long does curtain wall installation take in Pune?</>, a: <>Programme depends on building size, system, glass lead time and site access, so we confirm it per project after survey and design approval. Fabrication is batched per project and despatched directly to site.</> },
            ]}
          />
        </div>
      </Sec>

      <Sec no="06" label="Related" title={<>Explore Related Services</>} sheetLabel="Related services">
        <LinkTable
          items={[
            { to: "/curtain-wall-systems", title: "Curtain Wall Systems", desc: "Full curtain wall overview" },
            { to: "/structural-glazing-pune", title: "Structural Glazing Pune", desc: "Frameless glass facades Pune" },
            { to: "/aluminium-windows-doors", title: "Aluminium Facade", desc: "Aluminium cladding systems" },
            { to: "/acp-cladding-pune", title: "ACP Cladding Pune", desc: "Composite panel facades Pune" },
            { to: "/facade-contractor-pune", title: "Facade Contractor Pune", desc: "Complete facade services" },
            { to: "/glass-railings", title: "Glass Railings", desc: "Balcony glass railings Pune" },
          ]}
        />
      </Sec>

      <CTASection />
    </Layout>
  );
}
