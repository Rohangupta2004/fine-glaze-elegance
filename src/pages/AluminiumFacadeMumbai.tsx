import Illustration from "@/components/common/Illustration";
import SEO from "@/components/SEO";
import PageHero from "@/components/common/PageHero";
import { RelatedProjects } from "@/components/RelatedProjects";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import FaqList from "@/components/common/FaqList";
import { DeliveryProcess, LinkTable, Prose, Sec, SpecList, SchematicFig } from "@/components/common/Sheet";

export default function AluminiumFacadeMumbai() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Aluminium Facade Contractor in Mumbai",
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
    "description": "Aluminium facade contractor in Mumbai: aluminium windows, doors, louvers and ACP cladding for BKC, Andheri, Powai and Vikhroli, with in-house shop drawings."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What aluminium coating is best for Mumbai coastal environment?", "acceptedAnswer": { "@type": "Answer", "text": "For coastal Mumbai, designers usually choose anodising or a high-performance coating such as PVDF, because salty air and moisture wear ordinary finishes faster. The class and thickness should come from the project specification and supplier data." } },
      { "@type": "Question", "name": "What is thermal break aluminium and why is it important in Mumbai?", "acceptedAnswer": { "@type": "Answer", "text": "Thermal break aluminium has a polyamide barrier between the inner and outer sections of the frame, which slows heat transfer through the frame. It can help comfort and cooling load, with the benefit depending on the full window and glass." } },
      { "@type": "Question", "name": "Does Fine Glaze supply and install aluminium windows in Mumbai?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Fine Glaze takes supply and installation of aluminium windows, doors and louvers in Mumbai, covering glass, hardware and weather sealing as part of one scope. Our Mumbai records include Leela Hotel and Leela Business Park." } },
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Aluminium Facade Contractor in Mumbai", "item": "https://fineglaze.com/aluminium-facade-mumbai" }
    ]
  };

  return (
    <Layout darkHero>
      <SEO
        title="Aluminium Facade Contractor in Mumbai | Fine Glaze"
        description="Aluminium facade contractor in Mumbai: aluminium windows, doors, louvers and ACP cladding for BKC, Andheri, Powai and Vikhroli, with in-house shop drawings."
        canonical="https://fineglaze.com/aluminium-facade-mumbai"
        keywords="aluminium facade contractor Mumbai, aluminium windows Mumbai, thermal break windows Mumbai, aluminium cladding BKC, aluminium doors Mumbai, facade contractor Andheri, aluminium facade Worli"
        ogImage="https://fineglaze.com/projects/samundra-tarang-51-1.webp"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      <PageHero
        crumbs={[{ label: "Aluminium Facade Contractor in Mumbai" }]}
        title={<>Aluminium Facade <span className="text-gradient-gold">Contractor in Mumbai</span></>}
        intro="Fine Glaze supplies and installs aluminium facade elements in Mumbai: windows and doors, sun louvers and ACP cladding. Drawings are prepared in-house before fabrication."
        secondary={{ label: "View Projects", to: "/portfolio" }}
        image={{ src: "/projects/samundra-tarang-51-1.webp", alt: "Aluminium sliding windows and fixed glazing, terrace enclosure at Samundra Tarang, Dadar, Mumbai — completed by Fine Glaze", width: 600, height: 420 }}
      />

      <Sec no="01" label="Overview" title={<>Aluminium Facades for Mumbai</>} sheetLabel="Overview">
          <div className="sx-split">
            <Prose>
<p>
            Aluminium is widely used on coastal facades because it is light and resists corrosion better than many metals. In salty coastal air, finish matters: as general guidance, designers there specify anodised or high-performance powder or PVDF-coated extrusions and corrosion-resistant hardware, with the coating class set by the project specification.
          </p>
          <p>
            Our aluminium facade services in Mumbai include <strong>casement and sliding windows</strong> for residential and commercial buildings, <strong>aluminium louver systems</strong> for ventilation and solar shading, <strong>aluminium cladding and ACP</strong> for elevations, and <strong>canopies and fascia</strong> for retail and hospitality entrances.
          </p>
          <p>
            Our documented Mumbai aluminium work includes aluminium louvers across all floors at Leela Business Park, Andheri East, fixed glass and openable windows at Leela Hotel, Andheri East, and multi-track sliding windows at the Samundra Tarang terrace enclosure, Dadar West.
          </p>
          <p>
            For residential developers and owners, we quote aluminium windows and doors on a supply-and-install basis against the project specification. Extrusions come from major Indian mills, finished to spec, and hardware comes from major approved brands.
          </p>
          <p>
            Material movement on tight Mumbai sites is planned per project, covering access, hoisting and delivery windows agreed with the site team.
          </p>
            </Prose>
            <div className="sx-side">
              <SchematicFig kind="windows" fig="02" />
              <Illustration name="city-mumbai" flush sizes="(max-width: 960px) 100vw, 480px" />
            </div>
          </div>
      </Sec>

      <Sec no="02" label="Scope" title={<>What We Offer</>} sheetLabel="Scope of work">
        <SpecList items={[<>Anodised or Coated Extrusions</>, <>Thermal Break Options</>, <>Finish to Project Spec</>, <>System Options to Specification</>, <>Weatherseals and Drainage Detailing</>, <>Leela Hotel and Leela Business Park Records</>]} />
      </Sec>

      <Sec no="03" label="Process" title="From survey to handover." sheetLabel="Process">
        <DeliveryProcess />
      </Sec>

      <RelatedProjects no="04" heading="Our aluminium & glazing work in Mumbai" locations={["Mumbai"]} excludeLocations={["Navi Mumbai"]} keywords={["window", "louver", "glass", "ACP"]} />

      <Sec no="05" label="FAQ" title={<>Frequently Asked Questions</>} sheetLabel="FAQ">
        <div className="sx-faq">
          <FaqList
            items={[
              { q: <>What aluminium coating is best for Mumbai coastal environment?</>, a: <>For coastal Mumbai, designers usually choose anodising or a high-performance coating such as PVDF, because salty air and moisture wear ordinary finishes faster. The class and thickness should come from the project specification and supplier data.</> },
              { q: <>What is thermal break aluminium and why is it important in Mumbai?</>, a: <>Thermal break aluminium has a polyamide barrier between the inner and outer sections of the frame, which slows heat transfer through the frame. It can help comfort and cooling load, with the benefit depending on the full window and glass.</> },
              { q: <>Does Fine Glaze supply and install aluminium windows in Mumbai?</>, a: <>Yes. Fine Glaze takes supply and installation of aluminium windows, doors and louvers in Mumbai, covering glass, hardware and weather sealing as part of one scope. Our Mumbai records include Leela Hotel and Leela Business Park.</> },
            ]}
          />
        </div>
      </Sec>

      <Sec no="06" label="Related" title={<>Explore Related Services</>} sheetLabel="Related services">
        <LinkTable
          items={[
            { to: "/aluminium-windows-doors", title: "Aluminium Facade", desc: "Full aluminium facade service" },
            { to: "/facade-contractor-mumbai", title: "Facade Contractor Mumbai", desc: "Complete facade services" },
            { to: "/curtain-wall-mumbai", title: "Curtain Wall Mumbai", desc: "Curtain wall glazing Mumbai" },
            { to: "/acp-aluminium-cladding", title: "ACP Cladding", desc: "ACP composite panels" },
            { to: "/structural-glazing-mumbai", title: "Structural Glazing Mumbai", desc: "Structural glazing" },
            { to: "/maintenance-services", title: "Facade Maintenance", desc: "AMC & maintenance" },
          ]}
        />
      </Sec>

      <CTASection />
    </Layout>
  );
}
