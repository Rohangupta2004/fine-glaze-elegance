import SEO from "@/components/SEO";
import PageHero from "@/components/common/PageHero";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import FaqList from "@/components/common/FaqList";
import { DeliveryProcess, LinkTable, Prose, Sec, SpecList, SchematicFig } from "@/components/common/Sheet";

export default function FacadeDesignGuide() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Building Facade Design Guide India 2024",
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
    "description": "Building facade design guide for India: materials, design principles and what architects and owners should settle early. A general guide by Fine Glaze, Pune."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What WWR (Window-to-Wall Ratio) is recommended for Indian commercial buildings?", "acceptedAnswer": { "@type": "Answer", "text": "The recommended window-to-wall ratio for Indian commercial buildings is set by the Energy Conservation Building Code for the climate zone, along with glass performance. Check the current ECBC and your energy modeller's results for the project." } },
      { "@type": "Question", "name": "How do I choose the right glass for a facade in India?", "acceptedAnswer": { "@type": "Answer", "text": "Choose facade glass by balancing solar heat gain, visible light transmittance, thermal performance, glare control and appearance for the building's orientation and climate. Your facade consultant or energy modeller should set the target values." } },
      { "@type": "Question", "name": "What is a facade consultant and do I need one for my project?", "acceptedAnswer": { "@type": "Answer", "text": "A facade consultant is a specialist who designs and specifies the building envelope, including structural analysis, thermal modelling and performance requirements. Large or complex buildings usually benefit from one. Fine Glaze works with consultants on project drawings." } },
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Building Facade Design Guide India 2024", "item": "https://fineglaze.com/facade-design-guide" }
    ]
  };

  return (
    <Layout darkHero>
      <SEO
        title="Building Facade Design Guide India: Materials | Fine Glaze"
        description="Building facade design guide for India: materials, design principles and what architects and owners should settle early. A general guide by Fine Glaze, Pune."
        canonical="https://fineglaze.com/facade-design-guide"
        keywords="facade design guide India, building facade design principles India, commercial facade design India, window wall ratio India, facade design ECBC India, glass facade design India 2024"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      <PageHero
        crumbs={[{ label: "Building Facade Design Guide India" }]}
        title={<>Building Facade <span className="text-gradient-gold">Design Guide India</span></>}
        intro="Designing a building facade in India requires balancing architectural vision, structural engineering, energy performance, fire safety regulations, local climate conditions, and construction budget. This comprehensive guide covers all the key principles and best practices for facade design in the Indian context."
        secondary={{ label: "View Projects", to: "/portfolio" }}
        image={{ src: "/projects/ssg-honesty-30-1.webp", alt: "SSG Honesty Nimkar Building, Panvel — curtain wall and ACP facade design (architect's render)", width: 600, height: 420 }}
      />

      <Sec no="01" label="Overview" title={<>Facade Design Principles for Indian Buildings</>} sheetLabel="Overview">
          <Prose>
<p>
            A well-designed facade is a multi-performance system. In India it must address solar heat gain, monsoon weather resistance (wind-driven rain and humidity), seismic and wind loads, fire safety under the National Building Code, and durability across climates from coastal to semi-arid.
          </p>
          <h3 className="text-xl font-medium mt-8 mb-3">Glass-to-Wall Ratio (Window-to-Wall Ratio)</h3>
          <p>
            The window-to-wall ratio (WWR) is one of the most important facade design parameters. The Energy Conservation Building Code sets limits and performance requirements for commercial buildings by climate zone. Check the current code and your consultant's energy model, since higher WWR calls for glass with better solar control.
          </p>
          <h3 className="text-xl font-medium mt-8 mb-3">Solar Shading — Reducing Cooling Load</h3>
          <p>
            Shading is a major lever. Fixed horizontal shading on sun-facing windows, vertical fins on east and west faces and integrated aluminium louvers all cut direct sun. Fine Glaze fabricates aluminium louvers and can supply shading as part of a facade package.
          </p>
          <h3 className="text-xl font-medium mt-8 mb-3">Facade Modularity and Buildability</h3>
          <p>
            Commercial facades work best when modular, based on a regular structural bay grid. Modular design reduces waste, simplifies installation and eases later panel replacement. Fine Glaze reviews bay dimensions during design development when asked.
          </p>
            </Prose>
      </Sec>

      <Sec no="02" label="Scope" title={<>What We Offer</>} sheetLabel="Scope of work">
        <SpecList items={[<>Window-to-Wall Ratio Guidance</>, <>Solar Shading Design</>, <>ECBC Pointers</>, <>Modular Facade Planning</>, <>Climate Zone Considerations</>, <>Material Selection Checklist</>]} />
      </Sec>

      <Sec no="03" label="Process" title="From survey to handover." sheetLabel="Process">
        <DeliveryProcess />
      </Sec>

      

      <Sec no="04" label="FAQ" title={<>Frequently Asked Questions</>} sheetLabel="FAQ">
        <div className="sx-faq">
          <FaqList
            items={[
              { q: <>What WWR (Window-to-Wall Ratio) is recommended for Indian commercial buildings?</>, a: <>The recommended window-to-wall ratio for Indian commercial buildings is set by the Energy Conservation Building Code for the climate zone, along with glass performance. Check the current ECBC and your energy modeller's results for the project.</> },
              { q: <>How do I choose the right glass for a facade in India?</>, a: <>Choose facade glass by balancing solar heat gain, visible light transmittance, thermal performance, glare control and appearance for the building's orientation and climate. Your facade consultant or energy modeller should set the target values.</> },
              { q: <>What is a facade consultant and do I need one for my project?</>, a: <>A facade consultant is a specialist who designs and specifies the building envelope, including structural analysis, thermal modelling and performance requirements. Large or complex buildings usually benefit from one. Fine Glaze works with consultants on project drawings.</> },
            ]}
          />
        </div>
      </Sec>

      <Sec no="05" label="Related" title={<>Explore Related Services</>} sheetLabel="Related services">
        <LinkTable
          items={[
            { to: "/curtain-wall-systems", title: "Curtain Wall Systems", desc: "Curtain wall service" },
            { to: "/commercial-building-facade", title: "Commercial Facade Guide", desc: "Commercial facade overview" },
            { to: "/aluminium-vs-acp-cladding", title: "Aluminium vs ACP Guide", desc: "Material comparison" },
            { to: "/pvdf-vs-powder-coating-aluminium", title: "PVDF vs Powder Coating", desc: "Coating guide" },
            { to: "/structural-glazing", title: "Structural Glazing", desc: "Structural glazing" },
            { to: "/facade-contractor-pune", title: "Facade Contractor Pune", desc: "Facade contractor" },
          ]}
        />
      </Sec>

      <CTASection />
    </Layout>
  );
}
