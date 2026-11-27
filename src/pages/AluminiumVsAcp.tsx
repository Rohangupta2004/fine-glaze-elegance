import SEO from "@/components/SEO";
import PageHero from "@/components/common/PageHero";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import FaqList from "@/components/common/FaqList";
import { DeliveryProcess, LinkTable, Prose, Sec, SpecList, SchematicFig } from "@/components/common/Sheet";

export default function AluminiumVsAcp() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Aluminium Facade vs ACP Cladding: Which is Better for India? – Fine Glaze",
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
    "description": "ACP vs aluminium cladding compared on weight, finish, durability, fire behaviour and maintenance for Indian buildings. A general guide by Fine Glaze, Pune."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Is ACP cladding banned in India?", "acceptedAnswer": { "@type": "Answer", "text": "ACP cladding is not banned in India, but combustible polyethylene-core panels are restricted on taller buildings under the National Building Code and state fire rules. Fire-retardant mineral-core panels are the usual choice. Confirm limits with your consultant." } },
      { "@type": "Question", "name": "Can ACP cladding be combined with glass on a building?", "acceptedAnswer": { "@type": "Answer", "text": "ACP cladding can be combined with glass on the same building, most often as spandrel panels or opaque infill beside windows or curtain wall glazing, which mixes solid and glazed areas. The cladding and glazing details must be coordinated." } },
      { "@type": "Question", "name": "Which lasts longer — aluminium facade or ACP?", "acceptedAnswer": { "@type": "Answer", "text": "Aluminium framing and extrusions generally outlast ACP panels over the long term, because coated ACP depends on its coating and panel bond. Actual life depends on finish, exposure, detailing and upkeep, so check the manufacturer's warranty terms." } },
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Aluminium Facade vs ACP Cladding: Which is Better for India? – Fine Glaze", "item": "https://fineglaze.com/aluminium-vs-acp-cladding" }
    ]
  };

  return (
    <Layout darkHero>
      <SEO
        title="ACP vs Aluminium Cladding: Which to Choose | Fine Glaze"
        description="ACP vs aluminium cladding compared on weight, finish, durability, fire behaviour and maintenance for Indian buildings. A general guide by Fine Glaze, Pune."
        canonical="https://fineglaze.com/aluminium-vs-acp-cladding"
        keywords="aluminium facade vs ACP cladding, ACP vs aluminium comparison India, which is better ACP or aluminium, ACP cladding vs glass facade, facade selection guide India"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      <PageHero
        crumbs={[{ label: "Aluminium Facade vs ACP Cladding" }]}
        title={<>Aluminium Facade vs <span className="text-gradient-gold">ACP Cladding</span></>}
        intro="Choosing between an aluminium facade system and ACP (Aluminium Composite Panel) cladding is one of the most common decisions architects and developers face. Both offer excellent aesthetics and weather protection — but they differ significantly in cost, weight, fire safety, flexibility, and long-term performance."
        secondary={{ label: "View Projects", to: "/portfolio" }}
        image={{ src: "/projects/salsette-27-35-1.webp", alt: "ACP canopy at ground floor of Salsette-27, Byculla, Mumbai — designed and installed by Fine Glaze", width: 600, height: 420 }}
      />

      <Sec no="01" label="Overview" title={<>Head-to-Head: Aluminium Facade vs ACP Cladding</>} sheetLabel="Overview">
          <Prose>
<div className="overflow-x-auto mt-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-3 text-left font-semibold">Parameter</th>
                  <th className="border border-border p-3 text-left font-semibold">Aluminium Facade</th>
                  <th className="border border-border p-3 text-left font-semibold">ACP Cladding</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-border p-3 font-medium">Cost</td><td className="border border-border p-3">Usually higher: more material, glass and labour</td><td className="border border-border p-3">Usually lower for opaque areas</td></tr>
                <tr className="bg-muted/30"><td className="border border-border p-3 font-medium">Fire Safety</td><td className="border border-border p-3">Non-combustible (Class A)</td><td className="border border-border p-3">PE core is combustible; fire-retardant core is usually required on taller buildings</td></tr>
                <tr><td className="border border-border p-3 font-medium">Weight</td><td className="border border-border p-3">Higher (extrusions + glass)</td><td className="border border-border p-3">Very lightweight</td></tr>
                <tr className="bg-muted/30"><td className="border border-border p-3 font-medium">Durability</td><td className="border border-border p-3">Long, with suitable finish and upkeep</td><td className="border border-border p-3">Depends on coating and exposure; see maker warranty</td></tr>
                <tr><td className="border border-border p-3 font-medium">Design Flexibility</td><td className="border border-border p-3">Moderate</td><td className="border border-border p-3">Very high (CNC routing, 3D)</td></tr>
                <tr className="bg-muted/30"><td className="border border-border p-3 font-medium">Glass Integration</td><td className="border border-border p-3">Yes (windows, curtain walls)</td><td className="border border-border p-3">Opaque panels only</td></tr>
                <tr><td className="border border-border p-3 font-medium">Maintenance</td><td className="border border-border p-3">Low</td><td className="border border-border p-3">Low</td></tr>
              </tbody>
            </table>
          </div>
          <h2>When to Choose ACP Cladding</h2>
          <p>
            ACP cladding suits projects where: (1) budget is a primary constraint; (2) the building is low-rise or a fire-retardant core is specified for mid-rise; (3) complex 3D forms or curved cladding are needed; (4) fast installation matters; (5) large opaque areas need covering without glass.
          </p>
          <h2>When to Choose Aluminium Facade</h2>
          <p>
            Aluminium facade systems suit projects where: (1) glass integration (curtain wall, windows) is required; (2) the building is tall and needs structural performance; (3) long-term durability is a priority; (4) the site is coastal and corrosion-resistant systems are needed; (5) thermal performance and energy efficiency are targets.
          </p>
          <h2>Fire Safety in India: The Critical Difference</h2>
          <p>
            Fire safety rules for external cladding in India are strict, and the National Building Code and state regulations set limits on combustible cladding on taller buildings. Fire-retardant mineral-core ACP is the usual choice for external use. Aluminium extrusions are non-combustible. Always confirm the core type and test documents with your consultant and the fire authority.
          </p>
            </Prose>
      </Sec>

      <Sec no="02" label="Scope" title={<>What We Offer</>} sheetLabel="Scope of work">
        <SpecList items={[<>Cost Comparison Factors</>, <>Fire Safety Analysis India</>, <>Durability Factors</>, <>Design Flexibility Guide</>, <>Building Code Pointers</>, <>Selection Checklist</>]} />
      </Sec>

      <Sec no="03" label="Process" title="From survey to handover." sheetLabel="Process">
        <DeliveryProcess />
      </Sec>

      

      <Sec no="04" label="FAQ" title={<>Frequently Asked Questions</>} sheetLabel="FAQ">
        <div className="sx-faq">
          <FaqList
            items={[
              { q: <>Is ACP cladding banned in India?</>, a: <>ACP cladding is not banned in India, but combustible polyethylene-core panels are restricted on taller buildings under the National Building Code and state fire rules. Fire-retardant mineral-core panels are the usual choice. Confirm limits with your consultant.</> },
              { q: <>Can ACP cladding be combined with glass on a building?</>, a: <>ACP cladding can be combined with glass on the same building, most often as spandrel panels or opaque infill beside windows or curtain wall glazing, which mixes solid and glazed areas. The cladding and glazing details must be coordinated.</> },
              { q: <>Which lasts longer — aluminium facade or ACP?</>, a: <>Aluminium framing and extrusions generally outlast ACP panels over the long term, because coated ACP depends on its coating and panel bond. Actual life depends on finish, exposure, detailing and upkeep, so check the manufacturer's warranty terms.</> },
            ]}
          />
        </div>
      </Sec>

      <Sec no="05" label="Related" title={<>Explore Related Services</>} sheetLabel="Related services">
        <LinkTable
          items={[
            { to: "/aluminium-windows-doors", title: "Aluminium Facade", desc: "Aluminium facade systems" },
            { to: "/acp-aluminium-cladding", title: "ACP Cladding", desc: "ACP cladding systems" },
            { to: "/curtain-wall-cost-guide", title: "Curtain Wall Cost Guide", desc: "Curtain wall pricing India" },
            { to: "/facade-contractor-pune", title: "Facade Contractor Pune", desc: "Facade services Pune" },
            { to: "/commercial-building-facade", title: "Commercial Facade Guide", desc: "Commercial facade overview" },
          ]}
        />
      </Sec>

      <CTASection />
    </Layout>
  );
}
