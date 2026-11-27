import Illustration from "@/components/common/Illustration";
import SEO from "@/components/SEO";
import PageHero from "@/components/common/PageHero";
import { RelatedProjects } from "@/components/RelatedProjects";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import FaqList from "@/components/common/FaqList";
import { DeliveryProcess, LinkTable, Prose, Sec, SpecList, SchematicFig } from "@/components/common/Sheet";

export default function StructuralGlazingPune() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Structural Glazing Contractor in Pune",
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
    "description": "Structural glazing in Pune: 2-side, 4-side and spider glazing for showrooms and commercial buildings, with in-house shop drawings and a site water test."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is the cost of structural glazing in Pune?", "acceptedAnswer": { "@type": "Answer", "text": "Structural glazing cost in Pune depends on the configuration (2-side, 4-side or spider), glass, sealant, height and access, so a fair figure needs drawings. Fine Glaze prepares BOQ-based quotations after reviewing the project." } },
      { "@type": "Question", "name": "Is structural glazing safe in Pune earthquake zone?", "acceptedAnswer": { "@type": "Answer", "text": "Structural glazing can be designed for Pune's wind and seismic conditions by sizing the frame, fixing and anchorage to the project design basis. Fine Glaze's engineering check covers member sizing, fixing and anchorage." } },
      { "@type": "Question", "name": "What glass thickness is used for structural glazing in Pune?", "acceptedAnswer": { "@type": "Answer", "text": "Glass thickness is set by the structural calculation for wind load, panel size and support. Toughened, heat-soaked or laminated glass may be specified depending on location and fall-protection needs." } },
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Structural Glazing Contractor in Pune", "item": "https://fineglaze.com/structural-glazing-pune" }
    ]
  };

  return (
    <Layout darkHero>
      <SEO
        title="Structural Glazing in Pune: SSG and Spider | Fine Glaze"
        description="Structural glazing in Pune: 2-side, 4-side and spider glazing for showrooms and commercial buildings, with in-house shop drawings and a site water test."
        canonical="https://fineglaze.com/structural-glazing-pune"
        keywords="structural glazing Pune, structural glass facade Pune, frameless glazing Pune, spider glazing Pune"
        ogImage="https://fineglaze.com/projects/embassy-techzone-41-1.webp"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      <PageHero
        crumbs={[{ label: "Structural Glazing Contractor in Pune" }]}
        title={<>Structural Glazing <span className="text-gradient-gold">Contractor in Pune</span></>}
        intro="Fine Glaze offers 2-side, 4-side and spider structural glazing in Pune for showrooms, offices, campuses and residential buildings, with in-house shop drawings."
        secondary={{ label: "View Projects", to: "/portfolio" }}
        image={{ src: "/projects/embassy-techzone-41-2.webp", alt: "Spider glass entrance at Embassy Techzone, Hinjewadi, Pune — installed by Fine Glaze", width: 600, height: 420 }}
      />

      <Sec no="01" label="Overview" title={<>Structural Glazing in Pune</>} sheetLabel="Overview">
          <div className="sx-split">
            <Prose>
<p>
            Structural glazing uses high-strength structural silicone to bond glass to aluminium frames, leaving no visible exterior fixings. Fine Glaze procures DOWSIL structural silicone or approved equivalents. Our documented projects include spider glazing at Embassy Techzone in Hinjewadi and structural glazing at SSG Honesty, Panvel.
          </p>
          <p>
            Systems are sized against the project wind load, with member sizing, fixing and anchorage checked before approval. Installed glazing is checked with a site water penetration test, and snags are closed before handover.
          </p>
          <p>
            Typical applications in Pune include showroom glass facades, office entrance lobbies, residential glass elements and atrium or canopy glazing.
          </p>
          <p>
            We offer three configurations: <strong>2-side SSG</strong>, where sealant bonds two sides and mechanical caps hold the others; <strong>4-side SSG</strong>, for a fully frameless appearance; and <strong>spider glazing</strong>, for entries, atriums and canopies where minimal structure is wanted.
          </p>
          <p>
            For residential balcony and bay-window glazing, we set glass thickness and joint sizing with the structural check and the architect's brief.
          </p>
            </Prose>
            <div className="sx-side">
              <SchematicFig kind="structural" fig="02" />
              <Illustration name="city-pune" flush sizes="(max-width: 960px) 100vw, 480px" />
            </div>
          </div>
      </Sec>

      <Sec no="02" label="Scope" title={<>What We Offer</>} sheetLabel="Scope of work">
        <SpecList items={[<>2-Side SSG Systems</>, <>4-Side SSG Systems</>, <>Spider Glazing</>, <>DOWSIL Structural Silicone</>, <>Site Water Penetration Test</>, <>DGU Glass Options</>]} />
      </Sec>

      <Sec no="03" label="Process" title="From survey to handover." sheetLabel="Process">
        <DeliveryProcess />
      </Sec>

      <RelatedProjects no="04" heading="Our glazing work in Pune" locations={["Pune"]} keywords={["glazing", "spider", "glass"]} />

      <Sec no="05" label="FAQ" title={<>Frequently Asked Questions</>} sheetLabel="FAQ">
        <div className="sx-faq">
          <FaqList
            items={[
              { q: <>What is the cost of structural glazing in Pune?</>, a: <>Structural glazing cost in Pune depends on the configuration (2-side, 4-side or spider), glass, sealant, height and access, so a fair figure needs drawings. Fine Glaze prepares BOQ-based quotations after reviewing the project.</> },
              { q: <>Is structural glazing safe in Pune earthquake zone?</>, a: <>Structural glazing can be designed for Pune's wind and seismic conditions by sizing the frame, fixing and anchorage to the project design basis. Fine Glaze's engineering check covers member sizing, fixing and anchorage.</> },
              { q: <>What glass thickness is used for structural glazing in Pune?</>, a: <>Glass thickness is set by the structural calculation for wind load, panel size and support. Toughened, heat-soaked or laminated glass may be specified depending on location and fall-protection needs.</> },
            ]}
          />
        </div>
      </Sec>

      <Sec no="06" label="Related" title={<>Explore Related Services</>} sheetLabel="Related services">
        <LinkTable
          items={[
            { to: "/structural-glazing", title: "Structural Glazing", desc: "Full structural glazing service" },
            { to: "/curtain-wall-pune", title: "Curtain Wall Pune", desc: "Curtain wall systems Pune" },
            { to: "/aluminium-windows-doors", title: "Aluminium Facade", desc: "Aluminium facade systems" },
            { to: "/glass-railings", title: "Glass Railings", desc: "Frameless glass railings" },
            { to: "/acp-cladding-pune", title: "ACP Cladding Pune", desc: "ACP panel facades Pune" },
            { to: "/facade-contractor-pune", title: "Facade Contractor Pune", desc: "Complete facade solutions" },
          ]}
        />
      </Sec>

      <CTASection />
    </Layout>
  );
}
