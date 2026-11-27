import Illustration from "@/components/common/Illustration";
import SEO from "@/components/SEO";
import PageHero from "@/components/common/PageHero";
import { RelatedProjects } from "@/components/RelatedProjects";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import FaqList from "@/components/common/FaqList";
import { DeliveryProcess, LinkTable, Prose, Sec, SpecList, SchematicFig } from "@/components/common/Sheet";

export default function CommercialBuildingFacade() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Commercial Building Facade Systems India",
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
    "description": "Commercial building facade contractor in Pune and Mumbai: curtain walls, structural glazing and ACP cladding for offices, with in-house shop drawings."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What facade system is best for an IT park in India?", "acceptedAnswer": { "@type": "Answer", "text": "Unitized curtain wall with double glazed low-E glass is commonly chosen for large IT campuses because panels are made in a factory and installed quickly. The final choice depends on height, programme, access and budget." } },
      { "@type": "Question", "name": "How much should I budget for a commercial building facade in India?", "acceptedAnswer": { "@type": "Answer", "text": "Facade budget depends on the system, glass or panel specification, height, access and testing scope, so a reliable figure needs drawings and a brief. Ask contractors for a BOQ-based quotation, including Fine Glaze." } },
      { "@type": "Question", "name": "How long does commercial facade installation take in India?", "acceptedAnswer": { "@type": "Answer", "text": "Programme depends on building size, system, glass lead time and site access, so contractors confirm it after survey and design approval. Fabrication is normally done first, with installation following floor by floor." } },
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Commercial Building Facade Systems India", "item": "https://fineglaze.com/commercial-building-facade" }
    ]
  };

  return (
    <Layout darkHero>
      <SEO
        title="Commercial Building Facade Contractor | Fine Glaze"
        description="Commercial building facade contractor in Pune and Mumbai: curtain walls, structural glazing and ACP cladding for offices, with in-house shop drawings."
        canonical="https://fineglaze.com/commercial-building-facade"
        keywords="commercial building facade contractor, commercial facade company, office building facade, glass facade commercial building, facade engineering"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      <PageHero
        crumbs={[{ label: "Commercial Building Facade Systems India" }]}
        title={<>Commercial Building <span className="text-gradient-gold">Facade Systems India</span></>}
        intro="The facade is the most visible and often the most technically complex part of a commercial building. This guide covers the main commercial facade systems, design considerations and regulatory points for India, from Fine Glaze, a facade contractor in Pune and Mumbai."
        secondary={{ label: "View Projects", to: "/portfolio" }}
        image={{ src: "/projects/embassy-techzone-40-1.webp", alt: "Embassy Techzone, Hinjewadi, Pune — spider glazing and ACP cladding by Fine Glaze for Embassy REIT", width: 600, height: 420 }}
      />

      <Sec no="01" label="Overview" title={<>Facade Systems for Commercial Buildings in India</>} sheetLabel="Overview">
          <div className="sx-split">
            <Prose>
<p>
            A commercial building facade handles weather protection, thermal and acoustic control, fire safety and architectural expression at once. Choosing a system means balancing performance, budget, programme and long-term upkeep.
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-3 mt-6">
            <li><strong>Unitized curtain wall:</strong> factory-assembled glass and aluminium panels, often used on taller buildings and tight programmes.</li>
            <li><strong>Stick system curtain wall:</strong> a site-assembled aluminium frame with glass infill, suited to low and mid-rise buildings and irregular geometry.</li>
            <li><strong>Structural glazing (SSG):</strong> frameless-looking glass bonded with structural silicone, used on showrooms, lobbies and feature elevations.</li>
            <li><strong>ACP composite cladding:</strong> lightweight aluminium sandwich panels for opaque zones and large elevations.</li>
            <li><strong>Aluminium louvers and brise-soleils:</strong> solar shading elements that cut direct sun on the glass line.</li>
          </ul>
          <h2>Regulatory Requirements for Commercial Facades in India</h2>
          <p>
            Commercial facades in India are normally designed against the National Building Code, IS 875 (loads), IS 2553 (glass safety) and state fire regulations. Fire-retardant cladding cores, structural calculations for wind and seismic loads and fire stopping at floor levels are typical concerns. Green-building rating schemes add thermal targets, which the project brief should state. Confirm requirements with your consultant.
          </p>
          <h2>Facade Design Best Practices for Indian Climate</h2>
          <p>
            Climate drives glass and shading choices. As general guidance, hot-humid and hot-dry sites benefit from solar-control glass and external shading, while cooler or composite climates allow more latitude. Orientation and glass-to-wall ratio matter as much as glass type, and an energy modeller can test options against the project brief.
          </p>
            </Prose>
            <div className="sx-side">
              <Illustration name="ind-commercial" flush sizes="(max-width: 960px) 100vw, 480px" />
            </div>
          </div>
      </Sec>

      <Sec no="02" label="Scope" title={<>What We Offer</>} sheetLabel="Scope of work">
        <SpecList items={[<>All Commercial Facade Systems</>, <>Code and Standards Guide</>, <>Green Building Considerations</>, <>Climate-Aware Design</>, <>IT Park and Office Facades</>, <>Hotel and Retail Facades</>]} />
      </Sec>

      <Sec no="03" label="Process" title="From survey to handover." sheetLabel="Process">
        <DeliveryProcess />
      </Sec>

      <RelatedProjects no="04" heading="Commercial building projects" keywords={["Embassy", "Naman", "FIFC", "LTIMindtree"]} />

      <Sec no="05" label="FAQ" title={<>Frequently Asked Questions</>} sheetLabel="FAQ">
        <div className="sx-faq">
          <FaqList
            items={[
              { q: <>What facade system is best for an IT park in India?</>, a: <>Unitized curtain wall with double glazed low-E glass is commonly chosen for large IT campuses because panels are made in a factory and installed quickly. The final choice depends on height, programme, access and budget.</> },
              { q: <>How much should I budget for a commercial building facade in India?</>, a: <>Facade budget depends on the system, glass or panel specification, height, access and testing scope, so a reliable figure needs drawings and a brief. Ask contractors for a BOQ-based quotation, including Fine Glaze.</> },
              { q: <>How long does commercial facade installation take in India?</>, a: <>Programme depends on building size, system, glass lead time and site access, so contractors confirm it after survey and design approval. Fabrication is normally done first, with installation following floor by floor.</> },
            ]}
          />
        </div>
      </Sec>

      <Sec no="06" label="Related" title={<>Explore Related Services</>} sheetLabel="Related services">
        <LinkTable
          items={[
            { to: "/curtain-wall-systems", title: "Curtain Wall Systems", desc: "Curtain wall service" },
            { to: "/structural-glazing", title: "Structural Glazing", desc: "Structural glazing" },
            { to: "/acp-aluminium-cladding", title: "ACP Cladding", desc: "ACP cladding" },
            { to: "/it-park-facade", title: "IT Park Facade", desc: "IT campus facade guide" },
            { to: "/facade-contractor-pune", title: "Facade Contractor Pune", desc: "Facade contractor Pune" },
            { to: "/curtain-wall-cost-guide", title: "Curtain Wall Cost Guide", desc: "Detailed cost analysis" },
          ]}
        />
      </Sec>

      <CTASection />
    </Layout>
  );
}
