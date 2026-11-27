import { ILLUSTRATIONS, illusSrc, illusSrcSet } from "@/lib/illustrations";
import SEO from "@/components/SEO";
import { RelatedProjects } from "@/components/RelatedProjects";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import FaqList from "@/components/common/FaqList";
import { DeliveryProcess, LinkTable, Prose, Sec, SpecList, SchematicFig } from "@/components/common/Sheet";
import PageHero from "@/components/common/PageHero";

export default function FacadeContractorThane() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Facade Contractor in Thane",
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
    "areaServed": [{ "@type": "City", "name": "Thane" }, { "@type": "State", "name": "Maharashtra" }],
    "description": "Facade contractor in Thane: curtain walls, ACP cladding, structural glazing and glass railings. Based in Pune and Mumbai, with in-house shop drawings."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Does Fine Glaze serve Thane for facade work?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Fine Glaze takes facade projects in Thane, including Ghodbunder Road, Majiwada and Wagle Estate. We provide curtain walls, ACP cladding, structural glazing, glass railings, aluminium windows and facade AMC." } },
      { "@type": "Question", "name": "What facade systems are popular in Thane?", "acceptedAnswer": { "@type": "Answer", "text": "Glass balcony railings and ACP cladding are common on residential towers, while offices along Ghodbunder Road often use curtain wall or structural glazing. This is general market guidance rather than a Fine Glaze project claim." } },
      { "@type": "Question", "name": "What is the cost of ACP cladding in Thane?", "acceptedAnswer": { "@type": "Answer", "text": "ACP cladding cost in Thane depends on panel brand, fire-retardant grade, finish, sub-frame complexity and access. Send drawings to Fine Glaze for a BOQ-based quotation." } },
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Facade Contractor in Thane", "item": "https://fineglaze.com/facade-contractor-thane" }
    ]
  };

  return (
    <Layout darkHero>
      <SEO
        title="Facade Contractor in Thane: Glazing and ACP | Fine Glaze"
        description="Facade contractor in Thane: curtain walls, ACP cladding, structural glazing and glass railings. Based in Pune and Mumbai, with in-house shop drawings."
        canonical="https://fineglaze.com/facade-contractor-thane"
        keywords="facade contractor Thane, ACP cladding Thane, glass facade Thane, curtain wall Thane, glass railing Thane, building facade Ghodbunder Road"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      <PageHero
        crumbs={[{ label: "Facade Contractor in Thane" }]}
        title={<>Facade Contractor <span className="text-gradient-gold">in Thane</span></>}
        intro={<>Fine Glaze takes facade projects in Thane: ACP cladding, curtain walls, glass railings, structural glazing and facade AMC. We are based in Pune and Mumbai and fabricate at our own unit in Pisoli, Pune.</>}
        secondary={{ label: "View Projects", to: "/portfolio" }}
        image={{ src: illusSrc("city-thane"), srcSet: illusSrcSet("city-thane"), sizes: "(max-width: 900px) 100vw, 560px", alt: ILLUSTRATIONS["city-thane"], width: 1376, height: 768 }}
      />

      <Sec no="01" label="Overview" title={<>Serving Thane's Fast-Growing Real Estate Market</>} sheetLabel="Overview">
          <Prose>
<p>
            Thane is one of the Mumbai Metropolitan Region's active real estate markets, with residential townships, commercial corridors along Ghodbunder Road and industrial zones. Fine Glaze, based in Pune and Mumbai, takes facade projects in Thane across the full range of our services.
          </p>
          <p>
            For residential towers, we can quote glass railings, ACP cladding for elevations and aluminium window replacement. Send us drawings and quantities and we will prepare a BOQ-based quotation.
          </p>
          <p>
            For commercial buildings such as offices, malls and mixed-use developments, we provide curtain wall systems, structural glazing and ACP cladding, with shop drawings prepared in-house and routed for architect and client approval.
          </p>
          <p>
            Thane projects draw on our own fabrication unit in Pisoli, Pune, and our Mumbai team. Our documented work nearest to Thane includes Mumbai projects such as Embassy 247, Vikhroli and the LTIMindtree Mensa Campus in Mahape.
          </p>
          <p>
            Fine Glaze also provides <strong>facade AMC (Annual Maintenance Contract)</strong> for existing buildings: inspection, cleaning, sealant repair, glass replacement and leakage investigation. As a general point, sealants age with exposure, so older buildings benefit from a periodic inspection.
          </p>
            </Prose>
      </Sec>

      <Sec no="02" label="Scope" title={<>What We Offer in Thane</>} sheetLabel="Scope of work">
        <SpecList items={["ACP Cladding for Residential & Commercial", "Curtain Wall Systems", "Frameless Glass Railings", "Structural Glazing", "Aluminium Windows & Doors", "Facade AMC & Waterproofing"]} />
      </Sec>

      <Sec no="03" label="Process" title="From survey to handover." sheetLabel="Process">
        <DeliveryProcess />
      </Sec>

      <RelatedProjects no="04" heading="Our nearest projects to Thane" intro="We don't have a documented project inside Thane city yet — these are our closest sites, in Vikhroli, Mahape and Panvel." locations={["Navi Mumbai", "Vikhroli", "Panvel"]} />

      <Sec no="05" label="FAQ" title={<>Frequently Asked Questions</>} sheetLabel="FAQ">
        <div className="sx-faq">
          <FaqList
            items={[
              { q: <>Does Fine Glaze serve Thane for facade work?</>, a: <>Yes. Fine Glaze takes facade projects in Thane, including Ghodbunder Road, Majiwada and Wagle Estate. We provide curtain walls, ACP cladding, structural glazing, glass railings, aluminium windows and facade AMC.</> },
              { q: <>What facade systems are popular in Thane?</>, a: <>Glass balcony railings and ACP cladding are common on residential towers, while offices along Ghodbunder Road often use curtain wall or structural glazing. This is general market guidance rather than a Fine Glaze project claim.</> },
              { q: <>What is the cost of ACP cladding in Thane?</>, a: <>ACP cladding cost in Thane depends on panel brand, fire-retardant grade, finish, sub-frame complexity and access. Send drawings to Fine Glaze for a BOQ-based quotation.</> },
            ]}
          />
        </div>
      </Sec>

      <Sec no="06" label="Related" title={<>Explore Related Services</>} sheetLabel="Related services">
        <LinkTable
          items={[
            { to: "/facade-contractor-mumbai", title: "Facade Contractor Mumbai", desc: "Mumbai facade services" },
            { to: "/facade-contractor-navi-mumbai", title: "Facade Contractor Navi Mumbai", desc: "Navi Mumbai facade" },
            { to: "/acp-aluminium-cladding", title: "ACP Cladding", desc: "ACP composite panels" },
            { to: "/glass-railings", title: "Glass Railings", desc: "Frameless glass railings" },
            { to: "/curtain-wall-systems", title: "Curtain Wall Systems", desc: "Curtain wall glazing" },
            { to: "/maintenance-services", title: "Facade Maintenance", desc: "AMC & repair services" },
          ]}
        />
      </Sec>

      <CTASection />
    </Layout>
  );
}
