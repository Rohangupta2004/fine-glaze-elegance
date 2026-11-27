import Illustration from "@/components/common/Illustration";
import SEO from "@/components/SEO";
import PageHero from "@/components/common/PageHero";
import { RelatedProjects } from "@/components/RelatedProjects";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import FaqList from "@/components/common/FaqList";
import { DeliveryProcess, LinkTable, Prose, Sec, SpecList, SchematicFig } from "@/components/common/Sheet";

export default function HotelFacade() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Hotel & Hospitality Building Facade Contractor India – Fine Glaze",
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
    "description": "Hotel facade contractor in Pune and Mumbai: glazing, curtain wall, canopies and ACP cladding, with in-house shop drawings. Leela Hotel, Andheri is a record."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What facade system is used in hotels in India?", "acceptedAnswer": { "@type": "Answer", "text": "Hotels of all categories commonly use unitized or stick curtain wall with double glazed or specialty glass on guest floors, structural glazing for lobbies and canopies, and aluminium louvers for shading. The system follows the architect's brief." } },
      { "@type": "Question", "name": "How does Fine Glaze ensure facade quality standards for hotel projects?", "acceptedAnswer": { "@type": "Answer", "text": "Fine Glaze checks material on receipt, inspects dimensions and finish at the workshop, and verifies line, level, plumb and fixing floor by floor. Installed glazing gets a site water penetration test, and the snag register is closed before handover." } },
      { "@type": "Question", "name": "What glass is used for hotel guest room facades?", "acceptedAnswer": { "@type": "Answer", "text": "Guest room facades typically use double glazed units with tinted or reflective outer glass for solar control, a low-E coating for comfort, and laminated glass where traffic or aircraft noise is a concern. The exact build-up follows the hotel's brief." } },
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Hotel & Hospitality Building Facade Contractor India – Fine Glaze", "item": "https://fineglaze.com/hotel-facade" }
    ]
  };

  return (
    <Layout darkHero>
      <SEO
        title="Hotel Facade Contractor in Pune & Mumbai | Fine Glaze"
        description="Hotel facade contractor in Pune and Mumbai: glazing, curtain wall, canopies and ACP cladding, with in-house shop drawings. Leela Hotel, Andheri is a record."
        canonical="https://fineglaze.com/hotel-facade"
        keywords="hotel facade contractor, hotel glass facade, hotel ACP cladding, hotel curtain wall, hotel entrance canopy"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      <PageHero
        crumbs={[{ label: "Hotel & Hospitality Facade Specialist India" }]}
        title={<>Hotel & Hospitality <span className="text-gradient-gold">Facade Specialist India</span></>}
        intro="Fine Glaze takes hotel facade work in Pune and Mumbai: glazing, curtain wall, canopies, louvers and ACP cladding. Our hotel record is the Leela Hotel, Andheri East, Mumbai."
        secondary={{ label: "View Projects", to: "/portfolio" }}
        image={{ src: "/projects/leela-hotel-50-1.webp", alt: "Fixed glass windows in the laundry area of Leela Hotel, Andheri, Mumbai — completed by Fine Glaze in 2023", width: 600, height: 420 }}
      />

      <Sec no="01" label="Overview" title={<>What Hotel Facade Projects Need</>} sheetLabel="Overview">
          <div className="sx-split">
            <Prose>
<p>
            Hotel facades carry high expectations for finish and consistency. Fine Glaze documents hotel work at the Leela Hotel, Andheri East, Mumbai, where we completed fixed glass windows and openable window units in the laundry area.
          </p>
          <p>
            Hotel facades depend on consistent glass colour and flatness across many panels, tight tolerances on aluminium finish and straight, evenly tooled sealant lines. Fine Glaze checks sections, glass and panels on receipt, inspects dimensions and finish at the workshop, and verifies line, level and plumb floor by floor during installation. Defect liability support follows the contract terms.
          </p>
          <p>
            As general guidance, hotel facades often combine unitized or stick curtain wall with double glazed or specialty glass on guest floors, structural glazing at entrance canopies and lobbies, and custom aluminium louvers or screens. Lower-rise or business hotels often use ACP cladding with aluminium windows and a glass entrance canopy.
          </p>
          <p>
            We work with hotel architects and consultants, and follow the project specification and any brand design guidelines supplied to us.
          </p>
            </Prose>
            <div className="sx-side">
              <Illustration name="ind-hotel" flush sizes="(max-width: 960px) 100vw, 480px" />
            </div>
          </div>
      </Sec>

      <Sec no="02" label="Scope" title={<>What We Offer</>} sheetLabel="Scope of work">
        <SpecList items={[<>Leela Hotel Project Record</>, <>Stage Quality Inspections</>, <>Unitized Curtain Wall Systems</>, <>Specialty Glass Options</>, <>Built to the Project Specification</>, <>Defect Liability per Contract</>]} />
      </Sec>

      <Sec no="03" label="Process" title="From survey to handover." sheetLabel="Process">
        <DeliveryProcess />
      </Sec>

      <RelatedProjects no="04" heading="Hospitality project" keywords={["hotel"]} />

      <Sec no="05" label="FAQ" title={<>Frequently Asked Questions</>} sheetLabel="FAQ">
        <div className="sx-faq">
          <FaqList
            items={[
              { q: <>What facade system is used in hotels in India?</>, a: <>Hotels of all categories commonly use unitized or stick curtain wall with double glazed or specialty glass on guest floors, structural glazing for lobbies and canopies, and aluminium louvers for shading. The system follows the architect's brief.</> },
              { q: <>How does Fine Glaze ensure facade quality standards for hotel projects?</>, a: <>Fine Glaze checks material on receipt, inspects dimensions and finish at the workshop, and verifies line, level, plumb and fixing floor by floor. Installed glazing gets a site water penetration test, and the snag register is closed before handover.</> },
              { q: <>What glass is used for hotel guest room facades?</>, a: <>Guest room facades typically use double glazed units with tinted or reflective outer glass for solar control, a low-E coating for comfort, and laminated glass where traffic or aircraft noise is a concern. The exact build-up follows the hotel's brief.</> },
            ]}
          />
        </div>
      </Sec>

      <Sec no="06" label="Related" title={<>Explore Related Services</>} sheetLabel="Related services">
        <LinkTable
          items={[
            { to: "/structural-glazing", title: "Structural Glazing", desc: "Structural glazing systems" },
            { to: "/curtain-wall-systems", title: "Curtain Wall Systems", desc: "Curtain wall service" },
            { to: "/facade-contractor-mumbai", title: "Facade Contractor Mumbai", desc: "Mumbai facade services" },
            { to: "/commercial-building-facade", title: "Commercial Facade Guide", desc: "Commercial facade overview" },
            { to: "/maintenance-services", title: "Facade Maintenance", desc: "AMC & maintenance" },
            { to: "/portfolio", title: "Portfolio", desc: "View completed projects" },
          ]}
        />
      </Sec>

      <CTASection />
    </Layout>
  );
}
