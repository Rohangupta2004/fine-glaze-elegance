import Illustration from "@/components/common/Illustration";
import SEO from "@/components/SEO";
import PageHero from "@/components/common/PageHero";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import FaqList from "@/components/common/FaqList";
import { DeliveryProcess, LinkTable, Prose, Sec, SpecList, SchematicFig } from "@/components/common/Sheet";

export default function MallFacade() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Shopping Mall Facade Contractor India",
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
    "description": "Mall facade contractor in Pune and Mumbai: glass facades, retail ACP cladding, canopies and curtain wall, with in-house shop drawings and own Pune unit."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What facade system is used for shopping mall entrances in India?", "acceptedAnswer": { "@type": "Answer", "text": "Mall entrances in India commonly use spider glazing or 4-side structural glazing for a frameless glass look, sometimes with a steel frame for long spans. Fine Glaze takes structural glazing entrance systems, including glass, fixings and weather sealing." } },
      { "@type": "Question", "name": "How is ACP cladding used in shopping malls?", "acceptedAnswer": { "@type": "Answer", "text": "In malls, ACP cladding covers elevations above the glazing, parking structures, service entrances and brand feature walls. For external use, coated panels are chosen for durability and easy cleaning, with fire requirements checked by the consultant." } },
      { "@type": "Question", "name": "What glass is best for a mall facade in India?", "acceptedAnswer": { "@type": "Answer", "text": "Solar control glass in a double glazed unit is commonly chosen for malls to limit solar heat gain while keeping daylight. The exact glass depends on orientation and the energy brief, and Fine Glaze procures from Saint-Gobain and other major brands." } },
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Shopping Mall Facade Contractor India", "item": "https://fineglaze.com/mall-facade" }
    ]
  };

  return (
    <Layout darkHero>
      <SEO
        title="Mall Facade Contractor in Pune & Mumbai | Fine Glaze"
        description="Mall facade contractor in Pune and Mumbai: glass facades, retail ACP cladding, canopies and curtain wall, with in-house shop drawings and own Pune unit."
        canonical="https://fineglaze.com/mall-facade"
        keywords="mall facade contractor, shopping mall glass facade, retail facade, mall ACP cladding, mall entrance canopy"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      <PageHero
        crumbs={[{ label: "Shopping Mall Facade Specialist India" }]}
        title={<>Shopping Mall <span className="text-gradient-gold">Facade Specialist India</span></>}
        intro="Fine Glaze takes mall and retail facade work in Pune and Mumbai: entrance glazing, ACP cladding, aluminium shopfronts, canopies and curtain wall."
        secondary={{ label: "View Projects", to: "/portfolio" }}
        image={{ src: "/projects/ssg-honesty-30-1.webp", alt: "SSG Honesty Nimkar Building, Panvel — structural glazing, curtain wall and ACP by Fine Glaze (architect's render)", width: 600, height: 420 }}
      />

      <Sec no="01" label="Overview" title={<>Mall Facade Design and Construction</>} sheetLabel="Overview">
          <div className="sx-split">
            <Prose>
<p>
            Malls need high-visibility facades that handle heavy public use with little upkeep. They often combine large-format structural glazing, entrance canopies and cladding to give the building a clear identity.
          </p>
          <p>
            Key mall facade elements include <strong>entrance and atrium glazing</strong> in spider-fixed or structural silicone systems, <strong>curtain wall</strong> with solar control glass, <strong>ACP cladding</strong> for service areas and brand zones, <strong>aluminium shopfront systems</strong> and <strong>entrance canopies</strong> in glass and steel.
          </p>
          <p>
            Maintenance access deserves early thought. As general guidance, facade designs should plan gondola or BMU provisions with the architect so that cleaning and sealant maintenance do not need fresh scaffolding every time.
          </p>
          <p>
            For energy, solar control glass, shading on sun-facing elevations and thermally broken aluminium frames are the usual levers. The right mix depends on the climate, orientation and the project's energy brief.
          </p>
            </Prose>
            <div className="sx-side">
              <Illustration name="ind-mall" flush sizes="(max-width: 960px) 100vw, 480px" />
            </div>
          </div>
      </Sec>

      <Sec no="02" label="Scope" title={<>What We Offer</>} sheetLabel="Scope of work">
        <SpecList items={[<>Large Atrium Spider Glazing</>, <>Multi-Level Curtain Wall</>, <>ACP Brand Zone Cladding</>, <>Entrance Canopy Systems</>, <>Maintenance Access Planning</>, <>Solar Control Glass Options</>]} />
      </Sec>

      <Sec no="03" label="Process" title="From survey to handover." sheetLabel="Process">
        <DeliveryProcess />
      </Sec>

      

      <Sec no="04" label="FAQ" title={<>Frequently Asked Questions</>} sheetLabel="FAQ">
        <div className="sx-faq">
          <FaqList
            items={[
              { q: <>What facade system is used for shopping mall entrances in India?</>, a: <>Mall entrances in India commonly use spider glazing or 4-side structural glazing for a frameless glass look, sometimes with a steel frame for long spans. Fine Glaze takes structural glazing entrance systems, including glass, fixings and weather sealing.</> },
              { q: <>How is ACP cladding used in shopping malls?</>, a: <>In malls, ACP cladding covers elevations above the glazing, parking structures, service entrances and brand feature walls. For external use, coated panels are chosen for durability and easy cleaning, with fire requirements checked by the consultant.</> },
              { q: <>What glass is best for a mall facade in India?</>, a: <>Solar control glass in a double glazed unit is commonly chosen for malls to limit solar heat gain while keeping daylight. The exact glass depends on orientation and the energy brief, and Fine Glaze procures from Saint-Gobain and other major brands.</> },
            ]}
          />
        </div>
      </Sec>

      <Sec no="05" label="Related" title={<>Explore Related Services</>} sheetLabel="Related services">
        <LinkTable
          items={[
            { to: "/structural-glazing", title: "Structural Glazing", desc: "Structural glazing systems" },
            { to: "/acp-aluminium-cladding", title: "ACP Cladding", desc: "ACP cladding" },
            { to: "/curtain-wall-systems", title: "Curtain Wall Systems", desc: "Curtain wall service" },
            { to: "/commercial-building-facade", title: "Commercial Facade Guide", desc: "Commercial facade overview" },
            { to: "/facade-contractor-pune", title: "Facade Contractor Pune", desc: "Facade services Pune" },
            { to: "/maintenance-services", title: "Facade Maintenance", desc: "AMC & cleaning" },
          ]}
        />
      </Sec>

      <CTASection />
    </Layout>
  );
}
