import SEO from "@/components/SEO";
import { RelatedProjects } from "@/components/RelatedProjects";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import FaqList from "@/components/common/FaqList";
import { DeliveryProcess, LinkTable, Prose, Sec, SpecList, SchematicFig } from "@/components/common/Sheet";
import PageHero from "@/components/common/PageHero";

export default function FacadeMaintenanceAMC() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Facade AMC & Annual Maintenance Contract India",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Fine Glaze",
      "@id": "https://fineglaze.com",
      "url": "https://fineglaze.com",
      "telephone": "+91-8369233566",
      "address": { "@type": "PostalAddress", "addressLocality": "Pune", "addressRegion": "Maharashtra", "addressCountry": "IN" }
    },
    "areaServed": [{ "@type": "City", "name": "Pune" }, { "@type": "City", "name": "Mumbai" }, { "@type": "State", "name": "Maharashtra" }],
    "description": "Facade AMC guide for India: what an annual maintenance contract covers, how often to inspect, and what to ask for in scope. A general guide by Fine Glaze."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is included in a facade AMC?", "acceptedAnswer": { "@type": "Answer", "text": "A facade AMC covers scheduled inspection of glass, sealants, cladding and drainage, plus repair work agreed in the contract, such as sealant repair, glass replacement and leakage rectification. Fine Glaze also provides a written condition report after periodic inspection." } },
      { "@type": "Question", "name": "How much does a facade AMC cost in India?", "acceptedAnswer": { "@type": "Answer", "text": "Facade AMC cost depends on facade area and type, building height, access method, visit frequency and the repairs included, so there is no single rate. Fine Glaze prepares a quotation after reviewing the building and scope." } },
      { "@type": "Question", "name": "How often should a building facade be professionally inspected?", "acceptedAnswer": { "@type": "Answer", "text": "A building facade should be professionally inspected at least once a year, and twice a year, before and after the monsoon, for coastal buildings and structural glazing facades. This is general guidance. Fine Glaze reports findings in writing." } },
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Facade AMC Guide", "item": "https://fineglaze.com/facade-amc-guide" }
    ]
  };

  return (
    <Layout darkHero>
      <SEO
        title="Facade AMC Guide India: Scope and Schedule | Fine Glaze"
        description="Facade AMC guide for India: what an annual maintenance contract covers, how often to inspect, and what to ask for in scope. A general guide by Fine Glaze."
        canonical="https://fineglaze.com/facade-amc-guide"
        keywords="facade AMC India, facade annual maintenance contract, building facade inspection India, glass facade AMC"
        ogImage="https://fineglaze.com/projects/embassy-247-37-1.webp"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      <PageHero
        crumbs={[{ label: "Facade AMC Guide India" }]}
        title={<>Facade AMC <span className="text-gradient-gold">Guide India</span></>}
        intro={<>A facade Annual Maintenance Contract (AMC) schedules inspection, cleaning and repair of a building's glass, sealant and cladding systems so problems are found before they cause leaks. Fine Glaze offers facade AMC for buildings in Pune and Mumbai.</>}
        secondary={{ label: "Our Services", to: "/maintenance-services" }}
        image={{ src: "/projects/embassy-247-37-1.webp", alt: "Embassy 247, Vikhroli, Mumbai — facade sealant renewal and glass replacement by Fine Glaze for Embassy REIT", width: 600, height: 420 }}
      />

      <Sec no="01" label="Overview" title={<>Why Every Building Needs a Facade AMC</>} sheetLabel="Overview">
          <div className="sx-split">
            <Prose>
<p>Building facades are engineered systems that age gradually. Without regular inspection, small issues such as a cracked sealant joint, a loose gasket or a blocked drainage path can grow into water ingress that damages interiors and disrupts tenants. A facade AMC schedules inspection and repair so these issues are found early.</p>
          <p>India's climate makes facade upkeep important. Heavy monsoon rain and salty coastal air in Mumbai, and large daily and seasonal temperature swings in Pune, all stress sealants and joints. As general guidance, a pre-monsoon inspection and repair is the most valuable single maintenance activity for most Indian buildings.</p>

          <h2 className="text-3xl font-medium mt-10">Fine Glaze Facade AMC Scope</h2>
          <p>Fine Glaze offers annual maintenance contracts for glazing, glass and cladding. The scope and visit frequency are agreed per building, and typically cover:</p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
            <li><strong>Periodic facade inspection</strong> with a written condition report</li>
            <li><strong>Facade glass cleaning and restoration</strong></li>
            <li><strong>Sealant re-application and joint repair</strong> where joints have cracked or lost adhesion</li>
            <li><strong>Glass replacement and breakage response</strong></li>
            <li><strong>Leakage investigation and rectification</strong></li>
          </ul>

          <h2 className="text-3xl font-medium mt-10">What Affects Facade AMC Cost</h2>
          <p>AMC cost depends on the facade area and type (curtain wall, structural glazing, ACP or aluminium windows), building height, the access method needed, visit frequency and the scope of repairs included. Fine Glaze prepares a quotation after reviewing the building and the scope you want covered.</p>
            </Prose>
            <div className="sx-side">
              <SchematicFig kind="maintenance" fig="02" />
            </div>
          </div>
      </Sec>

      <Sec no="02" label="Scope" title={<>What Our AMC Covers</>} sheetLabel="Scope of work">
        <SpecList items={["Periodic Facade Inspection", "Written Condition Report", "Glass Cleaning and Restoration", "Sealant Re-application and Joint Repair", "Glass Replacement and Breakage Response", "Leakage Investigation and Rectification"]} />
      </Sec>

      <Sec no="03" label="Process" title="From survey to handover." sheetLabel="Process">
        <DeliveryProcess />
      </Sec>

      <RelatedProjects no="04" heading="Maintenance & repair work we run" keywords={["sealant", "maintenance", "leakage", "replacement", "repair"]} />

      <Sec no="05" label="FAQ" title={<>Frequently Asked Questions</>} sheetLabel="FAQ">
        <div className="sx-faq">
          <FaqList
            items={[
              { q: <>What is included in a facade AMC?</>, a: <>A facade AMC covers scheduled inspection of glass, sealants, cladding and drainage, plus repair work agreed in the contract, such as sealant repair, glass replacement and leakage rectification. Fine Glaze also provides a written condition report after periodic inspection.</> },
              { q: <>How much does a facade AMC cost in India?</>, a: <>Facade AMC cost depends on facade area and type, building height, access method, visit frequency and the repairs included, so there is no single rate. Fine Glaze prepares a quotation after reviewing the building and scope.</> },
              { q: <>How often should a building facade be professionally inspected?</>, a: <>A building facade should be professionally inspected at least once a year, and twice a year, before and after the monsoon, for coastal buildings and structural glazing facades. This is general guidance. Fine Glaze reports findings in writing.</> },
            ]}
          />
        </div>
      </Sec>

      <Sec no="06" label="Related" title={<>Related Services</>} sheetLabel="Related services">
        <LinkTable
          items={[
            { to: "/maintenance-services", title: "Facade Maintenance", desc: "Full maintenance service" },
            { to: "/facade-waterproofing", title: "Facade Waterproofing", desc: "Leak diagnosis & repair" },
            { to: "/curtain-wall-systems", title: "Curtain Wall Systems", desc: "Curtain wall service" },
            { to: "/structural-glazing", title: "Structural Glazing", desc: "Structural glazing" },
            { to: "/facade-contractor-pune", title: "Facade Contractor Pune", desc: "Facade services Pune" },
            { to: "/facade-contractor-mumbai", title: "Facade Contractor Mumbai", desc: "Facade services Mumbai" },
          ]}
        />
      </Sec>

      <CTASection />
    </Layout>
  );
}
