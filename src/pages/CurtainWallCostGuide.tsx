import SEO from "@/components/SEO";
import PageHero from "@/components/common/PageHero";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import FaqList from "@/components/common/FaqList";
import { DeliveryProcess, LinkTable, Prose, Sec, SpecList, SchematicFig } from "@/components/common/Sheet";

export default function CurtainWallCostGuide() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Curtain Wall Cost in India 2024",
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
    "description": "What drives curtain wall cost in India: stick vs unitized systems, glass, height and access. A general guide by Fine Glaze. Ask us for a quotation."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is the cheapest curtain wall system in India?", "acceptedAnswer": { "@type": "Answer", "text": "A basic stick system with single clear glass is usually the lowest-cost curtain wall, but it may not meet thermal, safety or height requirements. Double glazed or laminated glass adds cost. Compare quotations on the same specification." } },
      { "@type": "Question", "name": "Should I choose unitized or stick system for my building in India?", "acceptedAnswer": { "@type": "Answer", "text": "Stick systems suit lower buildings, irregular bay sizes and refurbishment, while unitized systems suit tall buildings, tight programmes and high wind exposure. Height, access, programme and budget decide the final choice." } },
      { "@type": "Question", "name": "How much does curtain wall cost for a typical 10-storey office building?", "acceptedAnswer": { "@type": "Answer", "text": "Cost for a 10-storey office depends on facade area, system, glass, wind load and access, so no single figure applies. Send drawings to Fine Glaze for a BOQ-based quotation." } },
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Curtain Wall Cost in India 2024", "item": "https://fineglaze.com/curtain-wall-cost-guide" }
    ]
  };

  return (
    <Layout darkHero>
      <SEO
        title="Curtain Wall Cost in India: What Decides It | Fine Glaze"
        description="What drives curtain wall cost in India: stick vs unitized systems, glass, height and access. A general guide by Fine Glaze. Ask us for a quotation."
        canonical="https://fineglaze.com/curtain-wall-cost-guide"
        keywords="curtain wall cost India, curtain wall price per sq ft, unitized curtain wall cost, stick system curtain wall price, glass facade cost India, curtain wall budget India 2024"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      <PageHero
        crumbs={[{ label: "Curtain Wall Cost Guide India" }]}
        title={<>Curtain Wall Cost <span className="text-gradient-gold">Guide India</span></>}
        intro="Planning a curtain wall for a commercial building? This guide explains what drives curtain wall cost in India: system type, glass specification, building height and site conditions. It is general guidance from Fine Glaze, a facade contractor in Pune and Mumbai."
        secondary={{ label: "View Projects", to: "/portfolio" }}
        image={{ src: "/projects/naman-chambers-48-1.webp", alt: "Naman Chambers, Bandra Kurla Complex, Mumbai — glazing and ACP works by Fine Glaze (in progress)", width: 600, height: 420 }}
      />

      <Sec no="01" label="Overview" title={<>What Curtain Wall Cost Depends On</>} sheetLabel="Overview">
          <Prose>
<p>
            Curtain wall cost in India varies with the system type, glass specification, building height, site complexity and scope. Fine Glaze does not publish price ranges on this page, because a reliable figure needs drawings, a glass and finish specification and an access plan. The table below shows how the main system types compare in use, not in price.
          </p>
          <div className="overflow-x-auto mt-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-3 text-left font-semibold">System Type</th>
                  <th className="border border-border p-3 text-left font-semibold">Assembly</th>
                  <th className="border border-border p-3 text-left font-semibold">Often Used For</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-border p-3">Stick system</td><td className="border border-border p-3">Frame and glass assembled on site</td><td className="border border-border p-3">Low and mid-rise, irregular bays, refurbishment</td></tr>
                <tr className="bg-muted/30"><td className="border border-border p-3">Semi-unitized system</td><td className="border border-border p-3">Part factory, part site assembly</td><td className="border border-border p-3">Mid-rise buildings with repeating floors</td></tr>
                <tr><td className="border border-border p-3">Unitized system</td><td className="border border-border p-3">Factory-assembled panels hung on site</td><td className="border border-border p-3">Taller buildings and tight programmes</td></tr>
              </tbody>
            </table>
          </div>
          <h2>Key Factors That Affect Curtain Wall Cost</h2>
          <ul className="list-disc list-inside text-muted-foreground space-y-3 mt-4">
            <li><strong>Building height:</strong> taller buildings need more access equipment, such as gondolas and cranes, and more rigorous anchorage design.</li>
            <li><strong>Wind load:</strong> higher wind loads need heavier sections and more fixings.</li>
            <li><strong>Glass specification:</strong> double glazed low-E, laminated and acoustic glass cost more than single clear glass.</li>
            <li><strong>Panel size:</strong> large panels need special handling equipment and stricter glass specifications.</li>
            <li><strong>Geometry:</strong> corners, sloped glazing and curved sections add fabrication and installation effort.</li>
            <li><strong>Spandrel treatment:</strong> insulated opaque panels between floors add to the scope.</li>
          </ul>
          <h2>Curtain Wall Budget Planning Tips</h2>
          <p>
            For early budgeting, ask two or three contractors to price the same drawings and the same glass and finish specification so the quotations compare like for like. Always get a BOQ-based quotation before fixing the facade budget, and keep a contingency for interfaces with the structure. Fine Glaze prepares quotations after reviewing drawings.
          </p>
            </Prose>
      </Sec>

      <Sec no="02" label="Scope" title={<>What We Offer</>} sheetLabel="Scope of work">
        <SpecList items={[<>Cost Drivers Explained</>, <>All System Types Covered</>, <>Glass Specification Effects</>, <>Site and Wind Load Effects</>, <>Glass and Energy Brief</>, <>Quotation on Drawings</>]} />
      </Sec>

      <Sec no="03" label="Process" title="From survey to handover." sheetLabel="Process">
        <DeliveryProcess />
      </Sec>

      

      <Sec no="04" label="FAQ" title={<>Frequently Asked Questions</>} sheetLabel="FAQ">
        <div className="sx-faq">
          <FaqList
            items={[
              { q: <>What is the cheapest curtain wall system in India?</>, a: <>A basic stick system with single clear glass is usually the lowest-cost curtain wall, but it may not meet thermal, safety or height requirements. Double glazed or laminated glass adds cost. Compare quotations on the same specification.</> },
              { q: <>Should I choose unitized or stick system for my building in India?</>, a: <>Stick systems suit lower buildings, irregular bay sizes and refurbishment, while unitized systems suit tall buildings, tight programmes and high wind exposure. Height, access, programme and budget decide the final choice.</> },
              { q: <>How much does curtain wall cost for a typical 10-storey office building?</>, a: <>Cost for a 10-storey office depends on facade area, system, glass, wind load and access, so no single figure applies. Send drawings to Fine Glaze for a BOQ-based quotation.</> },
            ]}
          />
        </div>
      </Sec>

      <Sec no="05" label="Related" title={<>Explore Related Services</>} sheetLabel="Related services">
        <LinkTable
          items={[
            { to: "/curtain-wall-systems", title: "Curtain Wall Systems", desc: "Our curtain wall services" },
            { to: "/curtain-wall-pune", title: "Curtain Wall Pune", desc: "Curtain wall contractor Pune" },
            { to: "/curtain-wall-mumbai", title: "Curtain Wall Mumbai", desc: "Curtain wall contractor Mumbai" },
            { to: "/aluminium-vs-acp-cladding", title: "Aluminium vs ACP Guide", desc: "System comparison guide" },
            { to: "/commercial-building-facade", title: "Commercial Facade Guide", desc: "Commercial facade overview" },
          ]}
        />
      </Sec>

      <CTASection />
    </Layout>
  );
}
