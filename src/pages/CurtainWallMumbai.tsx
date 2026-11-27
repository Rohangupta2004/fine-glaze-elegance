import Illustration from "@/components/common/Illustration";
import SEO from "@/components/SEO";
import PageHero from "@/components/common/PageHero";
import { RelatedProjects } from "@/components/RelatedProjects";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import FaqList from "@/components/common/FaqList";
import { DeliveryProcess, LinkTable, Prose, Sec, SpecList, SchematicFig } from "@/components/common/Sheet";

export default function CurtainWallMumbai() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Curtain Wall Glazing Contractor in Mumbai",
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
    "description": "Curtain wall contractor in Mumbai: unitized and stick glass curtain walls for commercial towers, in-house shop drawings. Embassy REIT Best Vendor 2024."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What wind load standards apply to curtain walls in Mumbai?", "acceptedAnswer": { "@type": "Answer", "text": "Curtain wall wind loads in India are normally taken from IS 875 Part 3, using the project's basic wind speed, height and terrain. Fine Glaze checks member sizing, fixing and anchorage against the wind load in the project design basis." } },
      { "@type": "Question", "name": "How does Fine Glaze handle curtain wall logistics in Mumbai?", "acceptedAnswer": { "@type": "Answer", "text": "Logistics on tight Mumbai sites are planned per project, covering material access, hoisting and delivery windows agreed with the main contractor or building management. Fine Glaze fabricates in batches and despatches directly to site." } },
      { "@type": "Question", "name": "Does Fine Glaze provide curtain wall refurbishment in Mumbai?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Fine Glaze handles sealant re-application, glass replacement, joint repair and leakage rectification on existing facades, with a written condition report from periodic inspection where required." } },
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Curtain Wall Glazing Contractor in Mumbai", "item": "https://fineglaze.com/curtain-wall-mumbai" }
    ]
  };

  return (
    <Layout darkHero>
      <SEO
        title="Curtain Wall Contractor in Mumbai, Maharashtra | Fine Glaze"
        description="Curtain wall contractor in Mumbai: unitized and stick glass curtain walls for commercial towers, in-house shop drawings. Embassy REIT Best Vendor 2024."
        canonical="https://fineglaze.com/curtain-wall-mumbai"
        keywords="curtain wall contractor Mumbai, curtain wall systems Mumbai, glass curtain wall Mumbai, commercial facade Mumbai"
        ogImage="https://fineglaze.com/projects/naman-chambers-48-1.webp"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      <PageHero
        crumbs={[{ label: "Curtain Wall Glazing Contractor in Mumbai" }]}
        title={<>Curtain Wall Glazing <span className="text-gradient-gold">Contractor in Mumbai</span></>}
        intro="Fine Glaze takes curtain wall projects in Mumbai, from unitized towers to stick-system installations. Shop drawings are prepared in-house and engineered against the project wind load before approval."
        secondary={{ label: "View Projects", to: "/portfolio" }}
        image={{ src: "/projects/naman-chambers-48-1.webp", alt: "Naman Chambers, Bandra Kurla Complex, Mumbai — glazing and ACP works by Fine Glaze (in progress)", width: 600, height: 420 }}
      />

      <Sec no="01" label="Overview" title={<>Curtain Wall Work in Mumbai</>} sheetLabel="Overview">
          <div className="sx-split">
            <Prose>
<p>
            Mumbai combines high-rise density, coastal wind, heavy monsoon rainfall and salty air, so curtain wall design there needs careful attention to wind load, drainage and material durability. Fine Glaze prepares shop drawings in-house and checks member sizing, fixing and anchorage against the project wind load.
          </p>
          <p>
            Our documented Mumbai work includes structural glazing and ACP cladding at Naman Chambers in BKC and facade maintenance at Embassy 247, Vikhroli. For curtain wall projects we can share relevant references on request.
          </p>
          <p>
            As general guidance, unitized curtain walls suit tall buildings and tight programmes because panels are assembled in a factory, while stick systems suit lower and mid-rise buildings with easier access. The right choice depends on height, access, programme and budget.
          </p>
          <p>
            Glass choice affects cooling load and daylight. Low-E double glazed units are commonly specified on commercial towers, and the exact build-up should follow the project's energy and daylight brief.
          </p>
          <p>
            Fine Glaze handles curtain wall scope from survey and shop drawings through fabrication, installation, site water penetration testing, snagging and handover, with AMC available afterwards.
          </p>
            </Prose>
            <div className="sx-side">
              <SchematicFig kind="curtain" fig="02" />
              <Illustration name="city-mumbai" flush sizes="(max-width: 960px) 100vw, 480px" />
            </div>
          </div>
      </Sec>

      <Sec no="02" label="Scope" title={<>What We Offer</>} sheetLabel="Scope of work">
        <SpecList items={[<>Wind Load Engineering Check</>, <>Site Water Penetration Test</>, <>Corrosion-Resistant Hardware</>, <>Pressure-Equalised Joint Design</>, <>BKC and Mumbai Projects</>, <>DGU Low-E Glass Options</>]} />
      </Sec>

      <Sec no="03" label="Process" title="From survey to handover." sheetLabel="Process">
        <DeliveryProcess />
      </Sec>

      <RelatedProjects no="04" heading="Our glazing work in Mumbai" locations={["Mumbai"]} excludeLocations={["Navi Mumbai"]} keywords={["glazing", "glass", "sealant", "window"]} />

      <Sec no="05" label="FAQ" title={<>Frequently Asked Questions</>} sheetLabel="FAQ">
        <div className="sx-faq">
          <FaqList
            items={[
              { q: <>What wind load standards apply to curtain walls in Mumbai?</>, a: <>Curtain wall wind loads in India are normally taken from IS 875 Part 3, using the project's basic wind speed, height and terrain. Fine Glaze checks member sizing, fixing and anchorage against the wind load in the project design basis.</> },
              { q: <>How does Fine Glaze handle curtain wall logistics in Mumbai?</>, a: <>Logistics on tight Mumbai sites are planned per project, covering material access, hoisting and delivery windows agreed with the main contractor or building management. Fine Glaze fabricates in batches and despatches directly to site.</> },
              { q: <>Does Fine Glaze provide curtain wall refurbishment in Mumbai?</>, a: <>Yes. Fine Glaze handles sealant re-application, glass replacement, joint repair and leakage rectification on existing facades, with a written condition report from periodic inspection where required.</> },
            ]}
          />
        </div>
      </Sec>

      <Sec no="06" label="Related" title={<>Explore Related Services</>} sheetLabel="Related services">
        <LinkTable
          items={[
            { to: "/curtain-wall-systems", title: "Curtain Wall Systems", desc: "Curtain wall service overview" },
            { to: "/curtain-wall-pune", title: "Curtain Wall Pune", desc: "Curtain wall Pune" },
            { to: "/facade-contractor-mumbai", title: "Facade Contractor Mumbai", desc: "Full facade services Mumbai" },
            { to: "/structural-glazing-mumbai", title: "Structural Glazing Mumbai", desc: "Structural glazing Mumbai" },
            { to: "/acp-aluminium-cladding", title: "ACP Cladding", desc: "ACP panel cladding" },
            { to: "/maintenance-services", title: "Facade Maintenance", desc: "Curtain wall AMC" },
          ]}
        />
      </Sec>

      <CTASection />
    </Layout>
  );
}
