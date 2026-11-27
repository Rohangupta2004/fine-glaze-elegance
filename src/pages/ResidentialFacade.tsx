import Illustration from "@/components/common/Illustration";
import SEO from "@/components/SEO";
import PageHero from "@/components/common/PageHero";
import { RelatedProjects } from "@/components/RelatedProjects";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import FaqList from "@/components/common/FaqList";
import { DeliveryProcess, LinkTable, Prose, Sec, SpecList, SchematicFig } from "@/components/common/Sheet";

export default function ResidentialFacade() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Residential Building Facade Contractor India",
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
    "description": "Residential facade contractor in Pune and Mumbai: glass railings, ACP cladding, aluminium windows and doors for apartments, with in-house shop drawings."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What glass railing is best for apartment balconies in India?", "acceptedAnswer": { "@type": "Answer", "text": "Toughened laminated glass in a frameless base-channel system is a common choice for apartment balconies, because laminated glass holds in place if broken and the view stays clear. The build-up and anchorage come from the structural check." } },
      { "@type": "Question", "name": "How much does facade renovation cost for an existing residential building in India?", "acceptedAnswer": { "@type": "Answer", "text": "Renovation cost depends on scope: re-cladding area, railing length, number of windows, access method and building height. Fine Glaze prepares BOQ-based quotations after a site survey." } },
      { "@type": "Question", "name": "What building height requires curtain wall for residential in India?", "acceptedAnswer": { "@type": "Answer", "text": "No regulation requires curtain wall on residential buildings at any height. It is a design and performance choice, often used on taller premium towers for floor-to-ceiling glass features." } },
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Residential Building Facade Contractor India", "item": "https://fineglaze.com/residential-facade" }
    ]
  };

  return (
    <Layout darkHero>
      <SEO
        title="Residential Facade Contractor in Pune & Mumbai | Fine Glaze"
        description="Residential facade contractor in Pune and Mumbai: glass railings, ACP cladding, aluminium windows and doors for apartments, with in-house shop drawings."
        canonical="https://fineglaze.com/residential-facade"
        keywords="residential facade contractor, apartment facade, villa facade, residential ACP cladding, residential glass railing, aluminium windows"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      <PageHero
        crumbs={[{ label: "Residential Building Facade Contractor India" }]}
        title={<>Residential Building <span className="text-gradient-gold">Facade Contractor India</span></>}
        intro="Fine Glaze takes residential facade work in Pune and Mumbai for apartment towers, villas and gated communities: glass railings, windows, ACP cladding and structural glazing."
        secondary={{ label: "View Projects", to: "/portfolio" }}
        image={{ src: "/projects/jindal-house-45-1.webp", alt: "SS glass railings at Jindal House, Mumbai — completed by Fine Glaze in 2023", width: 600, height: 420 }}
      />

      <Sec no="01" label="Overview" title={<>Facade Systems for Residential Buildings</>} sheetLabel="Overview">
          <div className="sx-split">
            <Prose>
<p>
            Residential buildings increasingly use premium facade elements for thermal comfort, sound control, low upkeep and appearance. Fine Glaze takes residential facade work for apartment towers, villas and gated communities in Pune and Mumbai.
          </p>
          <p>
            Common residential systems include <strong>frameless glass railings</strong> for balconies and terraces, <strong>aluminium sliding and casement windows</strong>, <strong>ACP cladding</strong> for elevations, <strong>structural glazing</strong> for feature elements such as bay windows and lobbies, and <strong>glass partitions</strong> for common areas.
          </p>
          <p>
            Our documented residential records include Nirmaann Estrellaa in Pune (windows, louvers, aluminium fins and SS glass railings), Salsette-27 in Byculla (railings and canopies), and private residences such as Jindal House and Mittal House in Mumbai.
          </p>
          <p>
            For energy comfort, thermally broken aluminium windows with low-E double glazing are a common choice. Savings depend on the whole building and use, so treat any figure with caution and ask for the specification behind it.
          </p>
            </Prose>
            <div className="sx-side">
              <Illustration name="ind-residential" flush sizes="(max-width: 960px) 100vw, 480px" />
            </div>
          </div>
      </Sec>

      <Sec no="02" label="Scope" title={<>What We Offer</>} sheetLabel="Scope of work">
        <SpecList items={[<>Frameless Glass Balcony Railings</>, <>Thermally Broken Windows</>, <>ACP Building Cladding</>, <>Structural Glazing Features</>, <>Developer Quotations on Drawings</>, <>DGU Glass Options</>]} />
      </Sec>

      <Sec no="03" label="Process" title="From survey to handover." sheetLabel="Process">
        <DeliveryProcess />
      </Sec>

      <RelatedProjects no="04" heading="Residential projects" keywords={["Jindal House", "Mittal", "Samundra", "Salsette", "Nirmaann"]} />

      <Sec no="05" label="FAQ" title={<>Frequently Asked Questions</>} sheetLabel="FAQ">
        <div className="sx-faq">
          <FaqList
            items={[
              { q: <>What glass railing is best for apartment balconies in India?</>, a: <>Toughened laminated glass in a frameless base-channel system is a common choice for apartment balconies, because laminated glass holds in place if broken and the view stays clear. The build-up and anchorage come from the structural check.</> },
              { q: <>How much does facade renovation cost for an existing residential building in India?</>, a: <>Renovation cost depends on scope: re-cladding area, railing length, number of windows, access method and building height. Fine Glaze prepares BOQ-based quotations after a site survey.</> },
              { q: <>What building height requires curtain wall for residential in India?</>, a: <>No regulation requires curtain wall on residential buildings at any height. It is a design and performance choice, often used on taller premium towers for floor-to-ceiling glass features.</> },
            ]}
          />
        </div>
      </Sec>

      <Sec no="06" label="Related" title={<>Explore Related Services</>} sheetLabel="Related services">
        <LinkTable
          items={[
            { to: "/glass-railings", title: "Glass Railings", desc: "Glass railing systems" },
            { to: "/glass-railing-pune", title: "Glass Railing Pune", desc: "Glass railings Pune" },
            { to: "/acp-aluminium-cladding", title: "ACP Cladding", desc: "ACP cladding" },
            { to: "/aluminium-windows-doors", title: "Aluminium Facade", desc: "Aluminium windows & facade" },
            { to: "/structural-glazing-pune", title: "Structural Glazing Pune", desc: "Structural glazing" },
            { to: "/facade-contractor-pune", title: "Facade Contractor Pune", desc: "Facade contractor Pune" },
          ]}
        />
      </Sec>

      <CTASection />
    </Layout>
  );
}
