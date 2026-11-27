import SEO from "@/components/SEO";
import PageHero from "@/components/common/PageHero";
import { RelatedProjects } from "@/components/RelatedProjects";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import FaqList from "@/components/common/FaqList";
import { DeliveryProcess, LinkTable, Prose, Sec, SpecList, SchematicFig } from "@/components/common/Sheet";

export default function FacadeWaterproofing() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Facade Waterproofing & Leak Repair in Pune and Mumbai",
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
    "description": "Facade waterproofing contractor in Pune and Mumbai: leakage investigation, sealant replacement and joint repair on glass and curtain wall facades."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "How much does facade leak repair cost in India?", "acceptedAnswer": { "@type": "Answer", "text": "Facade leak repair cost depends on joint length, access method, sealant specification and how much glass or gasket work is needed, so it needs an inspection first. Fine Glaze quotes after investigating the leak." } },
      { "@type": "Question", "name": "How often should facade sealant be replaced in India?", "acceptedAnswer": { "@type": "Answer", "text": "Facade sealant life depends on the product, exposure and workmanship, so there is no single replacement date. Inspect joints at least annually and before each monsoon, and replace sealant that has cracked, hardened or lost adhesion." } },
      { "@type": "Question", "name": "Can Fine Glaze repair leaking curtain wall in an occupied building?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Curtain wall sealant repair can be done in an occupied building by working section by section and agreeing access and timing with the building management. We plan the sequence per site." } },
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Facade Waterproofing & Leak Repair in Pune and Mumbai", "item": "https://fineglaze.com/facade-waterproofing" }
    ]
  };

  return (
    <Layout darkHero>
      <SEO
        title="Facade Waterproofing Contractor, Pune & Mumbai | Fine Glaze"
        description="Facade waterproofing contractor in Pune and Mumbai: leakage investigation, sealant replacement and joint repair on glass and curtain wall facades."
        canonical="https://fineglaze.com/facade-waterproofing"
        keywords="facade waterproofing contractor, glass facade leak repair, curtain wall leakage repair, facade sealant replacement, building facade waterproofing"
        ogImage="https://fineglaze.com/projects/embassy-247-37-1.webp"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      <PageHero
        crumbs={[{ label: "Facade Waterproofing & Leak Repair" }]}
        title={<>Facade Waterproofing <span className="text-gradient-gold">& Leak Repair</span></>}
        intro="Facade leakage is a common complaint from building owners and facility managers. Fine Glaze handles leak investigation, sealant replacement and joint repair on curtain walls, structural glazing, ACP cladding and aluminium window systems."
        secondary={{ label: "View Projects", to: "/portfolio" }}
        image={{ src: "/projects/embassy-247-37-1.webp", alt: "Embassy 247, Vikhroli, Mumbai — water treatment and facade sealant work (approx. 80,500 RMT) by Fine Glaze", width: 600, height: 420 }}
      />

      <Sec no="01" label="Overview" title={<>Why Facade Leakage Happens and How to Fix It</>} sheetLabel="Overview">
          <div className="sx-split">
            <Prose>
<p>
            Water entering through a facade can damage interiors, false ceilings and building services. Heavy monsoon rain in Mumbai and Pune makes sealant, gasket and drainage condition important to check before every rainy season. This is general guidance.
          </p>
          <h3 className="text-xl font-medium mt-8 mb-3">Common Causes of Facade Leakage in India</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li><strong>Failed silicone sealant joints:</strong> Silicone sealant degrades over time with UV exposure, thermal cycling and building movement. Cracked or debonded sealant is a common cause of facade leakage.</li>
            <li><strong>Improper original installation:</strong> Inadequate joint depth, wrong sealant type, or contaminated surfaces at installation lead to premature sealant failure.</li>
            <li><strong>Thermal movement fatigue:</strong> Building facades expand and contract with temperature. Joints that are too narrow or stiff crack over time.</li>
            <li><strong>Missing or failed drainage channels:</strong> Curtain wall systems rely on internal pressure-equalisation drainage. Blocked drainage directs water inward.</li>
            <li><strong>Glass seal failure:</strong> DGU units lose their edge seal allowing inter-pane condensation.</li>
          </ul>
          <h3 className="text-xl font-medium mt-8 mb-3">Fine Glaze Waterproofing Repair Process</h3>
          <p>
            Our approach to a leak is: (1) trace the leak points on site, including a water test where needed; (2) inspect sealant adhesion and joint condition; (3) agree a repair scope; (4) remove failed sealant and prepare the surfaces; (5) apply new sealant from approved manufacturers such as DOWSIL or equivalents; (6) re-test the repaired area before sign-off.
          </p>
          <p>
            Fine Glaze also offers AMC-based programmes with periodic inspection of sealant joints and drainage, repair of deteriorating joints before the monsoon, and a written condition report. We also handle facades we did not install.
          </p>
            </Prose>
            <div className="sx-side">
              <SchematicFig kind="maintenance" fig="02" />
            </div>
          </div>
      </Sec>

      <Sec no="02" label="Scope" title={<>What We Offer</>} sheetLabel="Scope of work">
        <SpecList items={[<>Water Test Leak Tracing</>, <>Sealant Adhesion Check</>, <>Joint-by-Joint Remediation</>, <>Approved Sealant Brands</>, <>Post-Repair Water Testing</>, <>AMC Programmes</>]} />
      </Sec>

      <Sec no="03" label="Process" title="From survey to handover." sheetLabel="Process">
        <DeliveryProcess />
      </Sec>

      <RelatedProjects no="04" heading="Leakage & sealant work we have done" keywords={["sealant", "leakage", "water"]} />

      <Sec no="05" label="FAQ" title={<>Frequently Asked Questions</>} sheetLabel="FAQ">
        <div className="sx-faq">
          <FaqList
            items={[
              { q: <>How much does facade leak repair cost in India?</>, a: <>Facade leak repair cost depends on joint length, access method, sealant specification and how much glass or gasket work is needed, so it needs an inspection first. Fine Glaze quotes after investigating the leak.</> },
              { q: <>How often should facade sealant be replaced in India?</>, a: <>Facade sealant life depends on the product, exposure and workmanship, so there is no single replacement date. Inspect joints at least annually and before each monsoon, and replace sealant that has cracked, hardened or lost adhesion.</> },
              { q: <>Can Fine Glaze repair leaking curtain wall in an occupied building?</>, a: <>Yes. Curtain wall sealant repair can be done in an occupied building by working section by section and agreeing access and timing with the building management. We plan the sequence per site.</> },
            ]}
          />
        </div>
      </Sec>

      <Sec no="06" label="Related" title={<>Explore Related Services</>} sheetLabel="Related services">
        <LinkTable
          items={[
            { to: "/maintenance-services", title: "Facade Maintenance", desc: "Full AMC service" },
            { to: "/curtain-wall-systems", title: "Curtain Wall Systems", desc: "Curtain wall systems" },
            { to: "/structural-glazing", title: "Structural Glazing", desc: "Structural glazing" },
            { to: "/facade-contractor-pune", title: "Facade Contractor Pune", desc: "Facade contractor Pune" },
            { to: "/facade-contractor-mumbai", title: "Facade Contractor Mumbai", desc: "Facade contractor Mumbai" },
          ]}
        />
      </Sec>

      <CTASection />
    </Layout>
  );
}
