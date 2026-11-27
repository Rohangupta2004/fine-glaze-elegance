import Illustration from "@/components/common/Illustration";
import SEO from "@/components/SEO";
import PageHero from "@/components/common/PageHero";
import { RelatedProjects } from "@/components/RelatedProjects";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import FaqList from "@/components/common/FaqList";
import { DeliveryProcess, LinkTable, Prose, Sec, SpecList, SchematicFig } from "@/components/common/Sheet";

export default function FacadeContractorPune() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Facade Contractor in Pune",
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
    "description": "Facade contractor in Pune with its own fabrication unit at Pisoli. Curtain walls, structural glazing, ACP cladding, glass railings and maintenance."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "How do I choose a facade contractor in Pune?", "acceptedAnswer": { "@type": "Answer", "text": "Choose a facade contractor by checking completed projects you can verify, an in-house design and engineering team, a documented quality process and maintenance support after handover. Ask any contractor, including Fine Glaze, for these documents." } },
      { "@type": "Question", "name": "What does facade work cost per sq ft in Pune?", "acceptedAnswer": { "@type": "Answer", "text": "Facade cost in Pune depends on the system, glass or panel specification, building height, access and site conditions, so a fair figure needs drawings. Fine Glaze prepares BOQ-based quotations after reviewing the drawings and the site." } },
      { "@type": "Question", "name": "Does Fine Glaze handle facade design as well as installation in Pune?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Fine Glaze prepares fabrication and installation shop drawings in-house and checks member sizing, fixing and anchorage against project wind load. We coordinate with architects and consultants through approval and GFC release." } },
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Facade Contractor in Pune", "item": "https://fineglaze.com/facade-contractor-pune" }
    ]
  };

  return (
    <Layout darkHero>
      <SEO
        title="Facade Contractor in Pune: Glazing and ACP | Fine Glaze"
        description="Facade contractor in Pune with its own fabrication unit at Pisoli. Curtain walls, structural glazing, ACP cladding, glass railings and maintenance."
        canonical="https://fineglaze.com/facade-contractor-pune"
        keywords="facade contractor Pune, building facade Pune, glass facade contractor Pune, curtain wall contractor Pune, ACP cladding Pune, facade company Pune Maharashtra"
        ogImage="https://fineglaze.com/projects/embassy-techzone-41-1.webp"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      <PageHero
        crumbs={[{ label: "Facade Contractor in Pune" }]}
        title={<>Facade Contractor <span className="text-gradient-gold">in Pune</span></>}
        intro="Fine Glaze is a facade contractor based in Pune, working with developers, architects, builders and corporate clients. From design consultation through fabrication, installation and AMC, we handle the facade lifecycle."
        secondary={{ label: "View Projects", to: "/portfolio" }}
        image={{ src: "/projects/pune-airport-terminal-42-1.webp", alt: "Pune International Airport new terminal — SS column cladding by Fine Glaze for Jindal Stainless (completed 2023)", width: 600, height: 420 }}
      />

      <Sec no="01" label="Overview" title={<>Facade Solutions for Pune's Buildings</>} sheetLabel="Overview">
          <div className="sx-split">
            <Prose>
<p>
            Fine Glaze is led by a founder with <strong>11+ years in the facade industry</strong>, and our company profile documents <strong>15 projects</strong> across Pune and Mumbai. Our services span curtain walls, structural glazing, ACP cladding, aluminium windows and doors, glass railings, and facade maintenance and AMC.
          </p>
          <p>
            Pune's growth in areas such as Hinjewadi, Kharadi, Wakad and Undri creates steady demand for facade work. Fine Glaze prepares shop and fabrication drawings in-house, checks member sizing, fixing and anchorage against project wind load, and runs a dedicated safety officer across active sites.
          </p>
          <p>
            Our documented Pune projects include Embassy Techzone in Hinjewadi (spider glazing, ACP cladding, glass doors and facade AMC for Embassy REIT), the Pune International Airport terminal (SS column cladding for Jindal Stainless Limited) and Nirmaann Estrellaa (windows, louvers, aluminium fins and glass railings).
          </p>
          <p>
            Fine Glaze fabricates at its own unit in Pisoli, Pune, where cutting, assembly and finishing are batched per project and despatched to site. Our office is in Mohammed Wadi (Undri), Pune, and we also take facade projects elsewhere in India.
          </p>
          <p>
            Ask us for project references that match your building type and scope, and we will share what we are able to disclose.
          </p>
            </Prose>
            <div className="sx-side">
              <Illustration name="city-pune" flush sizes="(max-width: 960px) 100vw, 480px" />
            </div>
          </div>
      </Sec>

      <Sec no="02" label="Scope" title={<>What We Offer</>} sheetLabel="Scope of work">
        <SpecList items={[<>Curtain Wall Systems</>, <>Structural Glazing</>, <>ACP & Aluminium Cladding</>, <>Glass Railings</>, <>Facade AMC & Maintenance</>, <>Project Management</>]} />
      </Sec>

      <Sec no="03" label="Process" title="From survey to handover." sheetLabel="Process">
        <DeliveryProcess />
      </Sec>

      <RelatedProjects no="04" heading="Our projects in Pune" locations={["Pune"]} />

      <Sec no="05" label="FAQ" title={<>Frequently Asked Questions</>} sheetLabel="FAQ">
        <div className="sx-faq">
          <FaqList
            items={[
              { q: <>How do I choose a facade contractor in Pune?</>, a: <>Choose a facade contractor by checking completed projects you can verify, an in-house design and engineering team, a documented quality process and maintenance support after handover. Ask any contractor, including Fine Glaze, for these documents.</> },
              { q: <>What does facade work cost per sq ft in Pune?</>, a: <>Facade cost in Pune depends on the system, glass or panel specification, building height, access and site conditions, so a fair figure needs drawings. Fine Glaze prepares BOQ-based quotations after reviewing the drawings and the site.</> },
              { q: <>Does Fine Glaze handle facade design as well as installation in Pune?</>, a: <>Yes. Fine Glaze prepares fabrication and installation shop drawings in-house and checks member sizing, fixing and anchorage against project wind load. We coordinate with architects and consultants through approval and GFC release.</> },
            ]}
          />
        </div>
      </Sec>

      <Sec no="06" label="Related" title={<>Explore Related Services</>} sheetLabel="Related services">
        <LinkTable
          items={[
            { to: "/curtain-wall-pune", title: "Curtain Wall Pune", desc: "Unitized curtain walls" },
            { to: "/structural-glazing-pune", title: "Structural Glazing Pune", desc: "Frameless glass facades" },
            { to: "/acp-cladding-pune", title: "ACP Cladding Pune", desc: "ACP panel cladding" },
            { to: "/glass-railing-pune", title: "Glass Railing Pune", desc: "Balcony glass railings" },
            { to: "/facade-contractor-mumbai", title: "Facade Contractor Mumbai", desc: "Mumbai facade services" },
            { to: "/maintenance-services", title: "Facade Maintenance", desc: "AMC and maintenance" },
          ]}
        />
      </Sec>

      <CTASection />
    </Layout>
  );
}
