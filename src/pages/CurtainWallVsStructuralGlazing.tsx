import SEO from "@/components/SEO";
import PageHero from "@/components/common/PageHero";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import FaqList from "@/components/common/FaqList";
import { DeliveryProcess, LinkTable, Prose, Sec, SpecList, SchematicFig } from "@/components/common/Sheet";

export default function CurtainWallVsStructuralGlazing() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Curtain Wall vs Structural Glazing: Key Differences India – Fine Glaze",
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
    "description": "Curtain wall vs structural glazing explained: how each is built, where each suits a building, and what to compare in quotes. A general guide by Fine Glaze."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Which is cheaper — curtain wall or structural glazing?", "acceptedAnswer": { "@type": "Answer", "text": "Neither system is always cheaper, because cost depends on height, glass, configuration and access. 2-side structural glazing can suit simple low-rise facades, while unitized curtain wall is often more practical on tall buildings. Compare quotations on the same scope." } },
      { "@type": "Question", "name": "Can curtain wall and structural glazing be combined on one building?", "acceptedAnswer": { "@type": "Answer", "text": "Curtain wall and structural glazing can be combined on one building, and this is common: structural glazing at a ground-floor lobby or showroom, with curtain wall above. The two systems need coordinated drawings so joints, drainage and movement line up." } },
      { "@type": "Question", "name": "Which is better for a showroom facade in India?", "acceptedAnswer": { "@type": "Answer", "text": "For showrooms, structural glazing such as 4-side SSG or spider glazing is usually preferred, because it gives the frameless, transparent look that retail frontages want. Curtain wall remains an option where framing is acceptable." } },
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Curtain Wall vs Structural Glazing: Key Differences India – Fine Glaze", "item": "https://fineglaze.com/curtain-wall-vs-structural-glazing" }
    ]
  };

  return (
    <Layout darkHero>
      <SEO
        title="Curtain Wall vs Structural Glazing: Differences | Fine Glaze"
        description="Curtain wall vs structural glazing explained: how each is built, where each suits a building, and what to compare in quotes. A general guide by Fine Glaze."
        canonical="https://fineglaze.com/curtain-wall-vs-structural-glazing"
        keywords="curtain wall vs structural glazing India, SSG vs curtain wall, structural glazing or curtain wall, glass facade types India, curtain wall vs SSG comparison, facade system selection India"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      <PageHero
        crumbs={[{ label: "Curtain Wall vs Structural Glazing" }]}
        title={<>Curtain Wall vs <span className="text-gradient-gold">Structural Glazing</span></>}
        intro="Curtain wall systems and structural glazing are both popular glass facade solutions for commercial buildings in India — but they are fundamentally different systems with different aesthetics, costs, and performance profiles. This guide explains the key differences to help architects and developers make the right choice."
        secondary={{ label: "View Projects", to: "/portfolio" }}
        image={{ src: "/projects/naman-chambers-48-1.webp", alt: "Naman Chambers, Bandra Kurla Complex, Mumbai — glazed office towers where Fine Glaze is carrying out glazing and ACP works", width: 600, height: 420 }}
      />

      <Sec no="01" label="Overview" title={<>What is a Curtain Wall System?</>} sheetLabel="Overview">
          <Prose>
<p>
            A curtain wall is a non-load-bearing facade system comprising aluminium framing members (mullions and transoms) with glass or opaque panel infill. The aluminium frame is visible from the exterior as a grid pattern. Curtain walls can be stick systems (assembled on-site) or unitized (factory-assembled panels).
          </p>
          <p>
            Curtain walls suit: tall buildings; large areas needing efficient weather-tight installation; projects with opaque spandrel panels beside vision glass; and buildings where future glass replacement access matters. The visible aluminium grid can also be used as a design element.
          </p>
          <h2>What is Structural Glazing?</h2>
          <p>
            Structural glazing (SSG — Structural Silicone Glazing) bonds glass panels directly to an aluminium frame using high-strength structural silicone sealant, eliminating visible exterior fixings. The result is a clean, flush glass surface with no protruding frames or caps.
          </p>
          <p>
            Structural glazing suits: showrooms, retail frontages and hospitality buildings where transparency is the priority; lower-rise buildings and landmark entries; and facades meant to read as a continuous glass plane.
          </p>
          <div className="overflow-x-auto mt-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-3 text-left font-semibold">Factor</th>
                  <th className="border border-border p-3 text-left font-semibold">Curtain Wall</th>
                  <th className="border border-border p-3 text-left font-semibold">Structural Glazing</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-border p-3">Visible Frame</td><td className="border border-border p-3">Yes (aluminium grid)</td><td className="border border-border p-3">No (flush glass)</td></tr>
                <tr className="bg-muted/30"><td className="border border-border p-3">Typical Height</td><td className="border border-border p-3">Low-rise to high-rise</td><td className="border border-border p-3">Often low and mid-rise; taller needs engineering review</td></tr>
                <tr><td className="border border-border p-3">Cost</td><td className="border border-border p-3">Depends on system, glass and height</td><td className="border border-border p-3">Depends on configuration, glass and sealant</td></tr>
                <tr className="bg-muted/30"><td className="border border-border p-3">Glass Replacement</td><td className="border border-border p-3">Easier (mechanical fix)</td><td className="border border-border p-3">Requires sealant cutting</td></tr>
                <tr><td className="border border-border p-3">Opaque Panels</td><td className="border border-border p-3">Yes (spandrels)</td><td className="border border-border p-3">Opaque backing only</td></tr>
                <tr className="bg-muted/30"><td className="border border-border p-3">Aesthetic</td><td className="border border-border p-3">Classic framed look</td><td className="border border-border p-3">Seamless glass plane</td></tr>
              </tbody>
            </table>
          </div>
            </Prose>
      </Sec>

      <Sec no="02" label="Scope" title={<>What We Offer</>} sheetLabel="Scope of work">
        <SpecList items={[<>Side-by-Side System Comparison</>, <>Cost Factors for Both Systems</>, <>Height Suitability Guide</>, <>Maintenance Considerations</>, <>Aesthetic Difference Explained</>, <>Choosing With Fine Glaze</>]} />
      </Sec>

      <Sec no="03" label="Process" title="From survey to handover." sheetLabel="Process">
        <DeliveryProcess />
      </Sec>

      

      <Sec no="04" label="FAQ" title={<>Frequently Asked Questions</>} sheetLabel="FAQ">
        <div className="sx-faq">
          <FaqList
            items={[
              { q: <>Which is cheaper — curtain wall or structural glazing?</>, a: <>Neither system is always cheaper, because cost depends on height, glass, configuration and access. 2-side structural glazing can suit simple low-rise facades, while unitized curtain wall is often more practical on tall buildings. Compare quotations on the same scope.</> },
              { q: <>Can curtain wall and structural glazing be combined on one building?</>, a: <>Curtain wall and structural glazing can be combined on one building, and this is common: structural glazing at a ground-floor lobby or showroom, with curtain wall above. The two systems need coordinated drawings so joints, drainage and movement line up.</> },
              { q: <>Which is better for a showroom facade in India?</>, a: <>For showrooms, structural glazing such as 4-side SSG or spider glazing is usually preferred, because it gives the frameless, transparent look that retail frontages want. Curtain wall remains an option where framing is acceptable.</> },
            ]}
          />
        </div>
      </Sec>

      <Sec no="05" label="Related" title={<>Explore Related Services</>} sheetLabel="Related services">
        <LinkTable
          items={[
            { to: "/curtain-wall-systems", title: "Curtain Wall Systems", desc: "Curtain wall systems" },
            { to: "/structural-glazing", title: "Structural Glazing", desc: "Structural glazing" },
            { to: "/curtain-wall-cost-guide", title: "Curtain Wall Cost Guide", desc: "Curtain wall cost guide" },
            { to: "/commercial-building-facade", title: "Commercial Facade Guide", desc: "Commercial facade overview" },
            { to: "/facade-contractor-pune", title: "Facade Contractor Pune", desc: "Facade contractor Pune" },
          ]}
        />
      </Sec>

      <CTASection />
    </Layout>
  );
}
