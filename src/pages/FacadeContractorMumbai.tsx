import Illustration from "@/components/common/Illustration";
import SEO from "@/components/SEO";
import PageHero from "@/components/common/PageHero";
import { RelatedProjects } from "@/components/RelatedProjects";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import FaqList from "@/components/common/FaqList";
import { DeliveryProcess, LinkTable, Prose, Sec, SpecList, SchematicFig } from "@/components/common/Sheet";

export default function FacadeContractorMumbai() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Facade Contractor in Mumbai",
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
    "description": "Facade contractor in Mumbai: curtain walls, structural glazing and ACP cladding. Embassy REIT Best Vendor Performance 2024 for Embassy 247, Vikhroli."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Does Fine Glaze serve all of Mumbai for facade work?", "acceptedAnswer": { "@type": "Answer", "text": "Fine Glaze is based in Pune and Mumbai and takes facade projects across Mumbai, Navi Mumbai, Thane and Panvel. Our documented Mumbai projects are in BKC, Andheri, Vikhroli, Vile Parle, Byculla, Juhu and Dadar." } },
      { "@type": "Question", "name": "What makes Mumbai facade work different from Pune?", "acceptedAnswer": { "@type": "Answer", "text": "Mumbai's coastal air, humidity and wind load make material and finish selection more demanding than inland sites. Corrosion-resistant hardware, suitable finishes and sealants, and a wind-load check against the project design basis are standard concerns." } },
      { "@type": "Question", "name": "How much does facade work cost in Mumbai?", "acceptedAnswer": { "@type": "Answer", "text": "Facade cost in Mumbai depends on the system, glass or panel specification, height, access and logistics, so a reliable figure needs drawings. Fine Glaze prepares BOQ-based quotations after reviewing the drawings and the site." } },
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Facade Contractor in Mumbai", "item": "https://fineglaze.com/facade-contractor-mumbai" }
    ]
  };

  return (
    <Layout darkHero>
      <SEO
        title="Facade Contractor in Mumbai: Glazing and ACP | Fine Glaze"
        description="Facade contractor in Mumbai: curtain walls, structural glazing and ACP cladding. Embassy REIT Best Vendor Performance 2024 for Embassy 247, Vikhroli."
        canonical="https://fineglaze.com/facade-contractor-mumbai"
        keywords="facade contractor Mumbai, glass facade Mumbai, curtain wall Mumbai, ACP cladding Mumbai, structural glazing BKC, facade contractor Andheri, facade company Mumbai"
        ogImage="https://fineglaze.com/projects/naman-chambers-48-1.webp"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      <PageHero
        crumbs={[{ label: "Facade Contractor in Mumbai" }]}
        title={<>Facade Contractor <span className="text-gradient-gold">in Mumbai</span></>}
        intro="Fine Glaze is a facade contractor working in Mumbai on curtain wall, structural glazing, ACP cladding, railings, louvers and maintenance. Embassy REIT gave us the Best Vendor Performance 2024 award for Embassy 247, Vikhroli."
        secondary={{ label: "View Projects", to: "/portfolio" }}
        image={{ src: "/projects/embassy-247-37-1.webp", alt: "Embassy 247, Vikhroli, Mumbai — facade maintenance by Fine Glaze for Embassy REIT; Best Vendor Performance 2024", width: 600, height: 420 }}
      />

      <Sec no="01" label="Overview" title={<>Facade Work in Mumbai</>} sheetLabel="Overview">
          <div className="sx-split">
            <Prose>
<p>
            Mumbai's building market needs facade contractors who can manage tight urban sites and timelines. Fine Glaze documents Mumbai work including Embassy 247 in Vikhroli (facade sealant, glass replacement and repairs), Leela Business Park (aluminium louvers) and Salsette-27 in Byculla (railings and canopies).
          </p>
          <p>
            Coastal buildings in Mumbai face salt air, humidity and high wind. As general guidance, designers there usually specify corrosion-resistant hardware and finishes, durable gaskets and sealants, and wind loads taken from the project's design basis. Fine Glaze's engineering check verifies member sizing, fixing and anchorage against the project wind load.
          </p>
          <p>
            Areas we work in include <strong>BKC</strong>, <strong>Andheri</strong>, <strong>Powai</strong>, <strong>Vikhroli</strong>, <strong>Byculla</strong>, <strong>Vile Parle</strong> and <strong>Juhu</strong>, where our project records are located.
          </p>
          <p>
            Mumbai projects are run by our team from Pune and Mumbai, with a site in-charge and supervisor on each site. Drawings are prepared in-house and routed through the architect, PMC and client until GFC release.
          </p>
          <p>
            Our documented Mumbai work covers commercial towers in BKC, a hospital (Nanavati Max, Vile Parle), hotel glazing (Leela Hotel, Andheri East), private residences and corporate campuses. Ask us for references that match your project.
          </p>
            </Prose>
            <div className="sx-side">
              <Illustration name="city-mumbai" flush sizes="(max-width: 960px) 100vw, 480px" />
            </div>
          </div>
      </Sec>

      <Sec no="02" label="Scope" title={<>What We Offer</>} sheetLabel="Scope of work">
        <SpecList items={[<>Wind Load Engineering Check</>, <>Corrosion-Resistant Hardware</>, <>High-Rise Facade Work</>, <>Finish Selection to Specification</>, <>BKC and Mumbai Projects</>, <>Leela Hotel and Embassy 247 Records</>]} />
      </Sec>

      <Sec no="03" label="Process" title="From survey to handover." sheetLabel="Process">
        <DeliveryProcess />
      </Sec>

      <RelatedProjects no="04" heading="Our projects in Mumbai" locations={["Mumbai"]} excludeLocations={["Navi Mumbai"]} />

      <Sec no="05" label="FAQ" title={<>Frequently Asked Questions</>} sheetLabel="FAQ">
        <div className="sx-faq">
          <FaqList
            items={[
              { q: <>Does Fine Glaze serve all of Mumbai for facade work?</>, a: <>Fine Glaze is based in Pune and Mumbai and takes facade projects across Mumbai, Navi Mumbai, Thane and Panvel. Our documented Mumbai projects are in BKC, Andheri, Vikhroli, Vile Parle, Byculla, Juhu and Dadar.</> },
              { q: <>What makes Mumbai facade work different from Pune?</>, a: <>Mumbai's coastal air, humidity and wind load make material and finish selection more demanding than inland sites. Corrosion-resistant hardware, suitable finishes and sealants, and a wind-load check against the project design basis are standard concerns.</> },
              { q: <>How much does facade work cost in Mumbai?</>, a: <>Facade cost in Mumbai depends on the system, glass or panel specification, height, access and logistics, so a reliable figure needs drawings. Fine Glaze prepares BOQ-based quotations after reviewing the drawings and the site.</> },
            ]}
          />
        </div>
      </Sec>

      <Sec no="06" label="Related" title={<>Explore Related Services</>} sheetLabel="Related services">
        <LinkTable
          items={[
            { to: "/facade-contractor-pune", title: "Facade Contractor Pune", desc: "Facade services Pune" },
            { to: "/curtain-wall-systems", title: "Curtain Wall Systems", desc: "Full curtain wall service" },
            { to: "/structural-glazing-mumbai", title: "Structural Glazing Mumbai", desc: "Structural glazing Mumbai" },
            { to: "/acp-aluminium-cladding", title: "ACP Cladding", desc: "ACP panel cladding" },
            { to: "/facade-contractor-navi-mumbai", title: "Facade Contractor Navi Mumbai", desc: "Navi Mumbai facade services" },
            { to: "/maintenance-services", title: "Facade Maintenance", desc: "AMC & facade repair" },
          ]}
        />
      </Sec>

      <CTASection />
    </Layout>
  );
}
