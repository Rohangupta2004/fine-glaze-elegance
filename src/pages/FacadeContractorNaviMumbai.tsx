import Illustration from "@/components/common/Illustration";
import SEO from "@/components/SEO";
import PageHero from "@/components/common/PageHero";
import { RelatedProjects } from "@/components/RelatedProjects";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import FaqList from "@/components/common/FaqList";
import { DeliveryProcess, LinkTable, Prose, Sec, SpecList, SchematicFig } from "@/components/common/Sheet";

export default function FacadeContractorNaviMumbai() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Facade Contractor in Navi Mumbai",
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
    "description": "Facade contractor in Navi Mumbai: curtain walls, structural glazing and ACP cladding for Vashi, Mahape, Airoli and Belapur, with in-house shop drawings."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What projects has Fine Glaze done in Navi Mumbai?", "acceptedAnswer": { "@type": "Answer", "text": "Fine Glaze's documented Navi Mumbai project is the LTIMindtree Mensa Campus in Mahape, where we carry out ACP and silicone facade work for L&T Construction. It is listed as ongoing in our portfolio." } },
      { "@type": "Question", "name": "Does Fine Glaze provide facade AMC in Navi Mumbai?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Fine Glaze offers annual maintenance contracts for glazing, glass and cladding, covering cleaning, sealant repair, glass replacement, leakage investigation and periodic inspection with a written condition report." } },
      { "@type": "Question", "name": "What facade systems are popular in Navi Mumbai IT parks?", "acceptedAnswer": { "@type": "Answer", "text": "Unitized curtain walls suit large campuses because panels are made in a factory and installed quickly. ACP cladding often covers service areas and podiums, and structural glazing is often used at lobbies and atriums. This is general guidance." } },
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Facade Contractor in Navi Mumbai", "item": "https://fineglaze.com/facade-contractor-navi-mumbai" }
    ]
  };

  return (
    <Layout darkHero>
      <SEO
        title="Facade Contractor in Navi Mumbai: Glazing, ACP | Fine Glaze"
        description="Facade contractor in Navi Mumbai: curtain walls, structural glazing and ACP cladding for Vashi, Mahape, Airoli and Belapur, with in-house shop drawings."
        canonical="https://fineglaze.com/facade-contractor-navi-mumbai"
        keywords="facade contractor Navi Mumbai, curtain wall Navi Mumbai, glass facade Mahape, ACP cladding Airoli, structural glazing Vashi, facade company Belapur, IT park facade Navi Mumbai"
        ogImage="https://fineglaze.com/projects/ltimindtree-campus-44-1.webp"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      <PageHero
        crumbs={[{ label: "Facade Contractor in Navi Mumbai" }]}
        title={<>Facade Contractor <span className="text-gradient-gold">in Navi Mumbai</span></>}
        intro="Fine Glaze takes facade projects in Navi Mumbai, including IT campuses, commercial buildings and residential towers. Our documented Navi Mumbai project is the LTIMindtree Mensa Campus in Mahape, with ACP and silicone work for L&T Construction."
        secondary={{ label: "View Projects", to: "/portfolio" }}
        image={{ src: "/projects/ltimindtree-campus-44-1.webp", alt: "LTIMindtree campus, Mahape, Navi Mumbai — ACP and silicone work by Fine Glaze for L&T Construction (ongoing)", width: 600, height: 420 }}
      />

      <Sec no="01" label="Overview" title={<>Facade Work in Navi Mumbai</>} sheetLabel="Overview">
          <div className="sx-split">
            <Prose>
<p>
            Navi Mumbai has major IT and industrial campuses in Mahape, Airoli and Belapur. Fine Glaze documents one project here, the LTIMindtree Mensa Campus in Mahape, where we carry out ACP and silicone facade work for L&T Construction.
          </p>
          <p>
            We take Navi Mumbai facade work across curtain walls, structural glazing, ACP cladding, glass railings and facade AMC. Drawings are prepared in-house and sized against the project wind load before approval.
          </p>
          <p>
            Nodes we cover include <strong>Mahape</strong>, <strong>Airoli</strong>, <strong>Vashi</strong>, <strong>Belapur</strong>, <strong>Kharghar</strong> and <strong>Panvel</strong>. In Panvel we have a documented project record, SSG Honesty (structural glazing, curtain wall, ACP and openable windows).
          </p>
          <p>
            The LTIMindtree Mensa Campus in Mahape is our documented Navi Mumbai project. It is listed as ongoing, with ACP and silicone facade work for L&T Construction.
          </p>
          <p>
            For residential developments in Kharghar and Panvel, we can quote glass railing and ACP cladding scope. Contact us with drawings for a project-specific quotation and programme.
          </p>
            </Prose>
            <div className="sx-side">
              <Illustration name="city-navi-mumbai" flush sizes="(max-width: 960px) 100vw, 480px" />
            </div>
          </div>
      </Sec>

      <Sec no="02" label="Scope" title={<>What We Offer</>} sheetLabel="Scope of work">
        <SpecList items={[<>LTIMindtree Campus Record</>, <>Glass and Panel Systems to Spec</>, <>Mahape Project Record</>, <>Campus-Scale Facade Work</>, <>Multi-Block Coordination</>, <>Glass Specified to Project Brief</>]} />
      </Sec>

      <Sec no="03" label="Process" title="From survey to handover." sheetLabel="Process">
        <DeliveryProcess />
      </Sec>

      <RelatedProjects no="04" heading="Our projects in Navi Mumbai & Panvel" locations={["Navi Mumbai", "Panvel"]} />

      <Sec no="05" label="FAQ" title={<>Frequently Asked Questions</>} sheetLabel="FAQ">
        <div className="sx-faq">
          <FaqList
            items={[
              { q: <>What projects has Fine Glaze done in Navi Mumbai?</>, a: <>Fine Glaze's documented Navi Mumbai project is the LTIMindtree Mensa Campus in Mahape, where we carry out ACP and silicone facade work for L&T Construction. It is listed as ongoing in our portfolio.</> },
              { q: <>Does Fine Glaze provide facade AMC in Navi Mumbai?</>, a: <>Yes. Fine Glaze offers annual maintenance contracts for glazing, glass and cladding, covering cleaning, sealant repair, glass replacement, leakage investigation and periodic inspection with a written condition report.</> },
              { q: <>What facade systems are popular in Navi Mumbai IT parks?</>, a: <>Unitized curtain walls suit large campuses because panels are made in a factory and installed quickly. ACP cladding often covers service areas and podiums, and structural glazing is often used at lobbies and atriums. This is general guidance.</> },
            ]}
          />
        </div>
      </Sec>

      <Sec no="06" label="Related" title={<>Explore Related Services</>} sheetLabel="Related services">
        <LinkTable
          items={[
            { to: "/facade-contractor-mumbai", title: "Facade Contractor Mumbai", desc: "Mumbai facade services" },
            { to: "/facade-contractor-pune", title: "Facade Contractor Pune", desc: "Pune facade services" },
            { to: "/curtain-wall-systems", title: "Curtain Wall Systems", desc: "Unitized curtain walls" },
            { to: "/acp-aluminium-cladding", title: "ACP Cladding", desc: "ACP composite panels" },
            { to: "/maintenance-services", title: "Facade Maintenance", desc: "AMC & repair services" },
            { to: "/structural-glazing", title: "Structural Glazing", desc: "Spider & SSG glazing" },
          ]}
        />
      </Sec>

      <CTASection />
    </Layout>
  );
}
