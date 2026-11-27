import Illustration from "@/components/common/Illustration";
import SEO from "@/components/SEO";
import PageHero from "@/components/common/PageHero";
import { RelatedProjects } from "@/components/RelatedProjects";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import FaqList from "@/components/common/FaqList";
import { DeliveryProcess, LinkTable, Prose, Sec, SpecList, SchematicFig } from "@/components/common/Sheet";

export default function StructuralGlazingMumbai() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Structural Glazing Contractor in Mumbai",
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
    "description": "Structural glazing in Mumbai: 2-side, 4-side and spider glass facades for commercial buildings, with in-house shop drawings and a site water test."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Is structural glazing safe in Mumbai's coastal wind conditions?", "acceptedAnswer": { "@type": "Answer", "text": "Structural glazing can be used in coastal Mumbai when designed for the project's wind load, with suitable sealant, retention and drainage. Fine Glaze checks sizing, fixing and anchorage against the project wind load before approval." } },
      { "@type": "Question", "name": "How does structural glazing perform during Mumbai monsoon?", "acceptedAnswer": { "@type": "Answer", "text": "Well-designed structural glazing sheds monsoon water through its sealed joints and drainage paths, and installation quality decides the result. Fine Glaze checks installed glazing with a site water penetration test before handover." } },
      { "@type": "Question", "name": "What glass thickness for structural glazing on Mumbai high-rises?", "acceptedAnswer": { "@type": "Answer", "text": "Glass thickness on high-rises is set by the structural calculation for wind load, panel size and support, not by a fixed rule. Toughened, heat-soaked or laminated glass may be specified; our engineering check confirms the build-up." } },
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Structural Glazing Contractor in Mumbai", "item": "https://fineglaze.com/structural-glazing-mumbai" }
    ]
  };

  return (
    <Layout darkHero>
      <SEO
        title="Structural Glazing in Mumbai: SSG and Spider | Fine Glaze"
        description="Structural glazing in Mumbai: 2-side, 4-side and spider glass facades for commercial buildings, with in-house shop drawings and a site water test."
        canonical="https://fineglaze.com/structural-glazing-mumbai"
        keywords="structural glazing Mumbai, structural glass facade Mumbai, frameless glazing Mumbai, spider glazing Mumbai"
        ogImage="https://fineglaze.com/projects/naman-chambers-48-1.webp"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      <PageHero
        crumbs={[{ label: "Structural Glazing Contractor in Mumbai" }]}
        title={<>Structural Glazing <span className="text-gradient-gold">Contractor in Mumbai</span></>}
        intro="Fine Glaze takes structural glazing projects in Mumbai: corporate towers, hotels, showrooms and residential buildings. Shop drawings are prepared in-house and checked against the project wind load."
        secondary={{ label: "View Projects", to: "/portfolio" }}
        image={{ src: "/projects/naman-chambers-48-1.webp", alt: "Naman Chambers, Bandra Kurla Complex, Mumbai — glazing and ACP works by Fine Glaze (in progress)", width: 600, height: 420 }}
      />

      <Sec no="01" label="Overview" title={<>Structural Glazing in Mumbai</>} sheetLabel="Overview">
          <div className="sx-split">
            <Prose>
<p>
            Glass defines much of Mumbai's commercial skyline. Fine Glaze takes structural glazing projects in Mumbai, creating frameless glass facades where sealant bonds the glass to the aluminium frame. Our documented Mumbai work includes structural glazing and ACP cladding at Naman Chambers in BKC.
          </p>
          <p>
            Coastal conditions bring high wind, heavy monsoon rain and salty air. As general guidance, designers there pay close attention to wind load, sealant selection, mechanical retention and drainage. Fine Glaze checks member sizing, fixing and anchorage against the project wind load and procures structural silicone such as DOWSIL or approved equivalents.
          </p>
          <p>
            We take showroom facades, corporate lobby entrances, hotel and residential glass elements, and spider-glazed statement entries. Drawings are prepared in-house and approved before fabrication.
          </p>
          <p>
            Work follows the approved shop drawings and the sealant manufacturer's application guidance. Installed glazing is checked with a site water penetration test, and snags are closed before handover.
          </p>
          <p>
            Defect liability support applies as per contract terms. Third-party testing to ASTM can be arranged on request through an accredited laboratory.
          </p>
            </Prose>
            <div className="sx-side">
              <SchematicFig kind="structural" fig="02" />
              <Illustration name="city-mumbai" flush sizes="(max-width: 960px) 100vw, 480px" />
            </div>
          </div>
      </Sec>

      <Sec no="02" label="Scope" title={<>What We Offer</>} sheetLabel="Scope of work">
        <SpecList items={[<>Wind Load Engineering Check</>, <>DOWSIL Structural Silicone</>, <>Mechanical Retention Where Specified</>, <>Drainage Detailing</>, <>Spider Glazing Systems</>, <>Defect Liability Support</>]} />
      </Sec>

      <Sec no="03" label="Process" title="From survey to handover." sheetLabel="Process">
        <DeliveryProcess />
      </Sec>

      <RelatedProjects no="04" heading="Our glazing work in Mumbai" locations={["Mumbai"]} excludeLocations={["Navi Mumbai"]} keywords={["glazing", "glass", "sealant", "window"]} />

      <Sec no="05" label="FAQ" title={<>Frequently Asked Questions</>} sheetLabel="FAQ">
        <div className="sx-faq">
          <FaqList
            items={[
              { q: <>Is structural glazing safe in Mumbai's coastal wind conditions?</>, a: <>Structural glazing can be used in coastal Mumbai when designed for the project's wind load, with suitable sealant, retention and drainage. Fine Glaze checks sizing, fixing and anchorage against the project wind load before approval.</> },
              { q: <>How does structural glazing perform during Mumbai monsoon?</>, a: <>Well-designed structural glazing sheds monsoon water through its sealed joints and drainage paths, and installation quality decides the result. Fine Glaze checks installed glazing with a site water penetration test before handover.</> },
              { q: <>What glass thickness for structural glazing on Mumbai high-rises?</>, a: <>Glass thickness on high-rises is set by the structural calculation for wind load, panel size and support, not by a fixed rule. Toughened, heat-soaked or laminated glass may be specified; our engineering check confirms the build-up.</> },
            ]}
          />
        </div>
      </Sec>

      <Sec no="06" label="Related" title={<>Explore Related Services</>} sheetLabel="Related services">
        <LinkTable
          items={[
            { to: "/structural-glazing", title: "Structural Glazing", desc: "Full structural glazing service" },
            { to: "/structural-glazing-pune", title: "Structural Glazing Pune", desc: "Structural glazing Pune" },
            { to: "/facade-contractor-mumbai", title: "Facade Contractor Mumbai", desc: "Complete facade solutions" },
            { to: "/curtain-wall-mumbai", title: "Curtain Wall Mumbai", desc: "Curtain wall Mumbai" },
            { to: "/aluminium-facade-mumbai", title: "Aluminium Facade Mumbai", desc: "Aluminium facade Mumbai" },
            { to: "/maintenance-services", title: "Facade Maintenance", desc: "Structural glazing maintenance" },
          ]}
        />
      </Sec>

      <CTASection />
    </Layout>
  );
}
