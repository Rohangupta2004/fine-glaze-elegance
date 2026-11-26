import SEO from "@/components/SEO";
import PageHero from "@/components/common/PageHero";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";

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

      {/* HERO */}
      <PageHero
        crumbs={[{ label: "Building Facade Design Guide India" }]}
        title={<>Building Facade <span className="text-gradient-gold">Design Guide India</span></>}
        intro="Designing a building facade in India requires balancing architectural vision, structural engineering, energy performance, fire safety regulations, local climate conditions, and construction budget. This comprehensive guide covers all the key principles and best practices for facade design in the Indian context."
        secondary={{ label: "View Projects", to: "/portfolio" }}
        image={{ src: "/projects/ssg-honesty-30-1.webp", alt: "SSG Honesty Nimkar Building, Panvel — curtain wall and ACP facade design (architect's render)", width: 600, height: 420 }}
      />

      {/* RICH CONTENT */}
      <section className="fg-sec">
        <div className="fg-wrap fg-prose">
          
          <h2>Facade Design Principles for Indian Buildings</h2>
          <p className="text-muted-foreground">
            A well-designed facade is a multi-performance system. In India it must address solar heat gain, monsoon weather resistance (wind-driven rain and humidity), seismic and wind loads, fire safety under the National Building Code, and durability across climates from coastal to semi-arid.
          </p>
          <h3 className="text-xl font-medium mt-8 mb-3">Glass-to-Wall Ratio (Window-to-Wall Ratio)</h3>
          <p className="text-muted-foreground">
            The window-to-wall ratio (WWR) is one of the most important facade design parameters. The Energy Conservation Building Code sets limits and performance requirements for commercial buildings by climate zone. Check the current code and your consultant's energy model, since higher WWR calls for glass with better solar control.
          </p>
          <h3 className="text-xl font-medium mt-8 mb-3">Solar Shading — Reducing Cooling Load</h3>
          <p className="text-muted-foreground mt-4">
            Shading is a major lever. Fixed horizontal shading on sun-facing windows, vertical fins on east and west faces and integrated aluminium louvers all cut direct sun. Fine Glaze fabricates aluminium louvers and can supply shading as part of a facade package.
          </p>
          <h3 className="text-xl font-medium mt-8 mb-3">Facade Modularity and Buildability</h3>
          <p className="text-muted-foreground mt-4">
            Commercial facades work best when modular, based on a regular structural bay grid. Modular design reduces waste, simplifies installation and eases later panel replacement. Fine Glaze reviews bay dimensions during design development when asked.
          </p>
    
        </div>
      </section>

      {/* FEATURES */}
      <section className="fg-sec">
        <div className="fg-wrap">
          <h2>What We Offer</h2>
          <div className="fg-grid c2">
              <div key="Window-to-Wall Ratio Guidance" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Window-to-Wall Ratio Guidance</span></div>
              <div key="Solar Shading Design" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Solar Shading Design</span></div>
              <div key="ECBC Pointers" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">ECBC Pointers</span></div>
              <div key="Modular Facade Planning" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Modular Facade Planning</span></div>
              <div key="Climate Zone Considerations" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Climate Zone Considerations</span></div>
              <div key="Material Selection Checklist" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Material Selection Checklist</span></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="fg-sec">
        <div className="fg-wrap">
          <h2>Frequently Asked Questions</h2>
          <div className="fg-faq">
            <details>
              <summary><h3>What WWR (Window-to-Wall Ratio) is recommended for Indian commercial buildings?</h3></summary>
              <div className="fg-a">The recommended window-to-wall ratio for Indian commercial buildings is set by the Energy Conservation Building Code for the climate zone, along with glass performance. Check the current ECBC and your energy modeller's results for the project.</div>
            </details>
            <details>
              <summary><h3>How do I choose the right glass for a facade in India?</h3></summary>
              <div className="fg-a">Choose facade glass by balancing solar heat gain, visible light transmittance, thermal performance, glare control and appearance for the building's orientation and climate. Your facade consultant or energy modeller should set the target values.</div>
            </details>
            <details>
              <summary><h3>What is a facade consultant and do I need one for my project?</h3></summary>
              <div className="fg-a">A facade consultant is a specialist who designs and specifies the building envelope, including structural analysis, thermal modelling and performance requirements. Large or complex buildings usually benefit from one. Fine Glaze works with consultants on project drawings.</div>
            </details>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="fg-sec">
        <div className="fg-wrap">
          <h2>Explore Related Services</h2>
          <div className="fg-grid">
            <Link key="/curtain-wall-systems" to="/curtain-wall-systems" className="group fg-row"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Curtain Wall Systems</p><p className="text-xs text-mute">Curtain wall service</p></div></Link>
            <Link key="/commercial-building-facade" to="/commercial-building-facade" className="group fg-row"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Commercial Facade Guide</p><p className="text-xs text-mute">Commercial facade overview</p></div></Link>
            <Link key="/aluminium-vs-acp-cladding" to="/aluminium-vs-acp-cladding" className="group fg-row"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Aluminium vs ACP Guide</p><p className="text-xs text-mute">Material comparison</p></div></Link>
            <Link key="/pvdf-vs-powder-coating-aluminium" to="/pvdf-vs-powder-coating-aluminium" className="group fg-row"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">PVDF vs Powder Coating</p><p className="text-xs text-mute">Coating guide</p></div></Link>
            <Link key="/structural-glazing" to="/structural-glazing" className="group fg-row"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Structural Glazing</p><p className="text-xs text-mute">Structural glazing</p></div></Link>
            <Link key="/facade-contractor-pune" to="/facade-contractor-pune" className="group fg-row"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Facade Contractor Pune</p><p className="text-xs text-mute">Facade contractor</p></div></Link>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
