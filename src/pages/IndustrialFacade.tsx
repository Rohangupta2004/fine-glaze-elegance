import Illustration from "@/components/common/Illustration";
import SEO from "@/components/SEO";
import PageHero from "@/components/common/PageHero";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import FaqList from "@/components/common/FaqList";
import { DeliveryProcess, LinkTable, Prose, Sec, SpecList, SchematicFig } from "@/components/common/Sheet";

export default function IndustrialFacade() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Industrial Building Facade Contractor India",
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
    "description": "Industrial facade contractor in Pune and Mumbai: ACP and metal cladding for factories and warehouses, with in-house shop drawings and own Pune unit."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is the most cost-effective facade for an industrial building in India?", "acceptedAnswer": { "@type": "Answer", "text": "Fire-retardant ACP with a durable coating is often a practical choice for industrial buildings, balancing fire requirements, weather performance and installed cost. Office blocks may justify a higher-grade finish. Confirm with your consultant." } },
      { "@type": "Question", "name": "Does Fine Glaze work in MIDC zones in Maharashtra?", "acceptedAnswer": { "@type": "Answer", "text": "Fine Glaze takes industrial facade work in Maharashtra, and our documented work includes Navi Mumbai (Mahape) and Pune. We coordinate access and logistics with the site contractor in active industrial zones." } },
      { "@type": "Question", "name": "What windows are recommended for factory buildings in India?", "acceptedAnswer": { "@type": "Answer", "text": "Factories commonly use aluminium fixed lights with toughened glass, plus louver windows or top-hung ventilators where natural ventilation is needed. Opening sizes should follow the daylight and ventilation requirements in the project brief and applicable codes." } },
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Industrial Building Facade Contractor India", "item": "https://fineglaze.com/industrial-facade" }
    ]
  };

  return (
    <Layout darkHero>
      <SEO
        title="Industrial Facade Contractor in Pune & Mumbai | Fine Glaze"
        description="Industrial facade contractor in Pune and Mumbai: ACP and metal cladding for factories and warehouses, with in-house shop drawings and own Pune unit."
        canonical="https://fineglaze.com/industrial-facade"
        keywords="industrial facade contractor, factory facade, warehouse facade, industrial cladding, industrial curtain wall"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      <PageHero
        crumbs={[{ label: "Industrial Building Facade Contractor India" }]}
        title={<>Industrial Building <span className="text-gradient-gold">Facade Contractor India</span></>}
        intro="Fine Glaze takes industrial facade work in Pune and Mumbai: ACP and metal cladding, windows and sub-frames for factories, warehouses and plants, fabricated at our own unit in Pisoli, Pune."
        secondary={{ label: "View Projects", to: "/portfolio" }}
        image={{ src: "/projects/nanavati-max-hospital-39-2.webp", alt: "ACP cladding installation in progress at Nanavati Max Hospital, Vile Parle, Mumbai — Fine Glaze for L&T", width: 600, height: 420 }}
      />

      <Sec no="01" label="Overview" title={<>Industrial Facade Systems: Durability First</>} sheetLabel="Overview">
          <div className="sx-split">
            <Prose>
<p>
            Industrial buildings such as factories and warehouses need facades that put durability, weather resistance and easy upkeep ahead of architectural complexity. Exposure to dust, vibration, heat and limited maintenance windows shapes the choice of system.
          </p>
          <p>
            Suitable systems include <strong>fire-retardant ACP cladding</strong> on administrative blocks, <strong>metal composite panels</strong> in production and warehouse areas, <strong>aluminium fixed windows</strong> with toughened glass, and <strong>translucent sheeting</strong> for daylight in production halls. Specifications follow the project brief.
          </p>
          <p>
            Fine Glaze, based in Pune and Mumbai, takes industrial facade work in Maharashtra and elsewhere in India. Our own fabrication unit in Pisoli, Pune handles aluminium and mild steel cutting, fabrication and assembly, and ACP routing and panel preparation.
          </p>
          <p>
            Facilities that follow GMP or similar rules, such as pharmaceutical plants, usually have exterior requirements set by their consultants. Share the specification and we will review scope against it.
          </p>
            </Prose>
            <div className="sx-side">
              <Illustration name="ind-industrial" flush sizes="(max-width: 960px) 100vw, 480px" />
            </div>
          </div>
      </Sec>

      <Sec no="02" label="Scope" title={<>What We Offer</>} sheetLabel="Scope of work">
        <SpecList items={[<>FR-Grade ACP for Industrial</>, <>Heavy-Gauge Aluminium Sub-Frames</>, <>Industrial Zone Projects</>, <>Cladding to Pharma Specifications</>, <>Metal Composite Panels</>, <>Durable Industrial Specs</>]} />
      </Sec>

      <Sec no="03" label="Process" title="From survey to handover." sheetLabel="Process">
        <DeliveryProcess />
      </Sec>

      

      <Sec no="04" label="FAQ" title={<>Frequently Asked Questions</>} sheetLabel="FAQ">
        <div className="sx-faq">
          <FaqList
            items={[
              { q: <>What is the most cost-effective facade for an industrial building in India?</>, a: <>Fire-retardant ACP with a durable coating is often a practical choice for industrial buildings, balancing fire requirements, weather performance and installed cost. Office blocks may justify a higher-grade finish. Confirm with your consultant.</> },
              { q: <>Does Fine Glaze work in MIDC zones in Maharashtra?</>, a: <>Fine Glaze takes industrial facade work in Maharashtra, and our documented work includes Navi Mumbai (Mahape) and Pune. We coordinate access and logistics with the site contractor in active industrial zones.</> },
              { q: <>What windows are recommended for factory buildings in India?</>, a: <>Factories commonly use aluminium fixed lights with toughened glass, plus louver windows or top-hung ventilators where natural ventilation is needed. Opening sizes should follow the daylight and ventilation requirements in the project brief and applicable codes.</> },
            ]}
          />
        </div>
      </Sec>

      <Sec no="05" label="Related" title={<>Explore Related Services</>} sheetLabel="Related services">
        <LinkTable
          items={[
            { to: "/acp-aluminium-cladding", title: "ACP Cladding", desc: "ACP cladding systems" },
            { to: "/aluminium-windows-doors", title: "Aluminium Facade", desc: "Aluminium facade" },
            { to: "/facade-contractor-pune", title: "Facade Contractor Pune", desc: "Facade contractor Pune" },
            { to: "/facade-contractor-navi-mumbai", title: "Facade Contractor Navi Mumbai", desc: "Navi Mumbai facade" },
            { to: "/maintenance-services", title: "Facade Maintenance", desc: "AMC & maintenance" },
          ]}
        />
      </Sec>

      <CTASection />
    </Layout>
  );
}
