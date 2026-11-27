import Illustration from "@/components/common/Illustration";
import SEO from "@/components/SEO";
import PageHero from "@/components/common/PageHero";
import { RelatedProjects } from "@/components/RelatedProjects";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import FaqList from "@/components/common/FaqList";
import { DeliveryProcess, LinkTable, Prose, Sec, SpecList, SchematicFig } from "@/components/common/Sheet";

export default function ItParkFacade() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "IT Park Facade Contractor India",
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
    "description": "IT park facade contractor in Pune and Mumbai: curtain walls and glazing for offices and campuses. Project records include LTIMindtree, Mahape."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What facade system is standard for IT parks in India?", "acceptedAnswer": { "@type": "Answer", "text": "Unitized curtain wall with double glazed low-E glass is a common choice for IT parks because factory-made panels install quickly and suit repeated floors. The final system depends on height, programme, energy brief and budget." } },
      { "@type": "Question", "name": "How does Fine Glaze handle large multi-building IT campus projects?", "acceptedAnswer": { "@type": "Answer", "text": "Fine Glaze runs campus projects with a dedicated site in-charge and supervisor, batches fabrication per project at its Pisoli unit and despatches directly to site. Our campus records include Embassy Techzone, Hinjewadi and the LTIMindtree Mensa Campus, Mahape." } },
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "IT Park Facade Contractor India", "item": "https://fineglaze.com/it-park-facade" }
    ]
  };

  return (
    <Layout darkHero>
      <SEO
        title="IT Park Facade Contractor in Pune & Mumbai | Fine Glaze"
        description="IT park facade contractor in Pune and Mumbai: curtain walls and glazing for offices and campuses. Project records include LTIMindtree, Mahape."
        canonical="https://fineglaze.com/it-park-facade"
        keywords="IT park facade contractor, office facade contractor, corporate building facade, technology park facade, curtain wall IT park"
        ogImage="https://fineglaze.com/projects/embassy-techzone-41-1.webp"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      <PageHero
        crumbs={[{ label: "IT Park Facade Contractor India" }]}
        title={<>IT Park Facade <span className="text-gradient-gold">Contractor India</span></>}
        intro="Fine Glaze is a facade contractor for IT parks, technology campuses and corporate offices in Pune and Mumbai, with records on Embassy REIT and L&T Construction campuses."
        secondary={{ label: "View Projects", to: "/portfolio" }}
        image={{ src: "/projects/embassy-techzone-40-1.webp", alt: "Embassy Techzone IT park, Hinjewadi, Pune — facade works by Fine Glaze for Embassy REIT", width: 600, height: 420 }}
      />

      <Sec no="01" label="Overview" title={<>What IT Parks Need from Facade Contractors</>} sheetLabel="Overview">
          <div className="sx-split">
            <Prose>
<p>
            IT parks and campuses have particular facade needs. Occupiers often ask for energy-efficient glazing, developers work to tight programmes, and campuses involve several blocks built in parallel. Owners also expect clear documentation and defect liability terms.
          </p>
          <p>
            Fine Glaze documents several campus-scale records: the <strong>LTIMindtree Mensa Campus in Mahape, Navi Mumbai</strong> (ACP and silicone facade work for L&T Construction) and <strong>Embassy Techzone in Hinjewadi, Pune</strong> (spider glazing, ACP cladding, glass doors and facade AMC for Embassy REIT).
          </p>
          <p>
            As general guidance, IT park facades often use <strong>unitized curtain wall</strong> on taller blocks, <strong>double glazed low-E glass</strong> chosen to the energy brief, <strong>aluminium extrusions</strong> with a durable finish, and <strong>stainless steel anchors and EPDM gaskets</strong>. We follow the project's specification.
          </p>
          <p>
            We take IT park and campus projects in Pune and Mumbai, and elsewhere in India on request. Our documented IT campus records are in Hinjewadi, Pune and Mahape, Navi Mumbai.
          </p>
            </Prose>
            <div className="sx-side">
              <Illustration name="ind-it-park" flush sizes="(max-width: 960px) 100vw, 480px" />
            </div>
          </div>
      </Sec>

      <Sec no="02" label="Scope" title={<>What We Offer</>} sheetLabel="Scope of work">
        <SpecList items={[<>Glass Specified to Energy Brief</>, <>DGU Low-E Glass Options</>, <>Unitized Curtain Wall Systems</>, <>Multi-Block Campus Projects</>, <>LTIMindtree Campus Record</>, <>Batched Fabrication and Sequenced Erection</>]} />
      </Sec>

      <Sec no="03" label="Process" title="From survey to handover." sheetLabel="Process">
        <DeliveryProcess />
      </Sec>

      <RelatedProjects no="04" heading="IT park & campus projects" keywords={["Embassy", "LTIMindtree"]} />

      <Sec no="05" label="FAQ" title={<>Frequently Asked Questions</>} sheetLabel="FAQ">
        <div className="sx-faq">
          <FaqList
            items={[
              { q: <>What facade system is standard for IT parks in India?</>, a: <>Unitized curtain wall with double glazed low-E glass is a common choice for IT parks because factory-made panels install quickly and suit repeated floors. The final system depends on height, programme, energy brief and budget.</> },
              { q: <>How does Fine Glaze handle large multi-building IT campus projects?</>, a: <>Fine Glaze runs campus projects with a dedicated site in-charge and supervisor, batches fabrication per project at its Pisoli unit and despatches directly to site. Our campus records include Embassy Techzone, Hinjewadi and the LTIMindtree Mensa Campus, Mahape.</> },
            ]}
          />
        </div>
      </Sec>

      <Sec no="06" label="Related" title={<>Explore Related Services</>} sheetLabel="Related services">
        <LinkTable
          items={[
            { to: "/curtain-wall-systems", title: "Curtain Wall Systems", desc: "Curtain wall service" },
            { to: "/facade-contractor-pune", title: "Facade Contractor Pune", desc: "Facade services Pune" },
            { to: "/facade-contractor-navi-mumbai", title: "Facade Contractor Navi Mumbai", desc: "Navi Mumbai facade" },
            { to: "/commercial-building-facade", title: "Commercial Facade Guide", desc: "Commercial facade overview" },
            { to: "/curtain-wall-cost-guide", title: "Curtain Wall Cost Guide", desc: "Curtain wall cost guide" },
          ]}
        />
      </Sec>

      <CTASection />
    </Layout>
  );
}
