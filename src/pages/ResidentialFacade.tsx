import Illustration from "@/components/common/Illustration";
import SEO from "@/components/SEO";
import PageHero from "@/components/common/PageHero";
import { RelatedProjects } from "@/components/RelatedProjects";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function ResidentialFacade() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Residential Building Facade Contractor India",
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
    "description": "Residential facade contractor in Pune and Mumbai: glass railings, ACP cladding, aluminium windows and doors for apartments, with in-house shop drawings."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What glass railing is best for apartment balconies in India?", "acceptedAnswer": { "@type": "Answer", "text": "Toughened laminated glass in a frameless base-channel system is a common choice for apartment balconies, because laminated glass holds in place if broken and the view stays clear. The build-up and anchorage come from the structural check." } },
      { "@type": "Question", "name": "How much does facade renovation cost for an existing residential building in India?", "acceptedAnswer": { "@type": "Answer", "text": "Renovation cost depends on scope: re-cladding area, railing length, number of windows, access method and building height. Fine Glaze prepares BOQ-based quotations after a site survey." } },
      { "@type": "Question", "name": "What building height requires curtain wall for residential in India?", "acceptedAnswer": { "@type": "Answer", "text": "No regulation requires curtain wall on residential buildings at any height. It is a design and performance choice, often used on taller premium towers for floor-to-ceiling glass features." } },
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Residential Building Facade Contractor India", "item": "https://fineglaze.com/residential-facade" }
    ]
  };

  return (
    <Layout darkHero>
      <SEO
        title="Residential Facade Contractor in Pune & Mumbai | Fine Glaze"
        description="Residential facade contractor in Pune and Mumbai: glass railings, ACP cladding, aluminium windows and doors for apartments, with in-house shop drawings."
        canonical="https://fineglaze.com/residential-facade"
        keywords="residential facade contractor, apartment facade, villa facade, residential ACP cladding, residential glass railing, aluminium windows"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* HERO */}
      <PageHero
        crumbs={[{ label: "Residential Building Facade Contractor India" }]}
        title={<>Residential Building <span className="text-gradient-gold">Facade Contractor India</span></>}
        intro="Fine Glaze takes residential facade work in Pune and Mumbai for apartment towers, villas and gated communities: glass railings, windows, ACP cladding and structural glazing."
        secondary={{ label: "View Projects", to: "/portfolio" }}
        image={{ src: "/projects/jindal-house-45-1.webp", alt: "SS glass railings at Jindal House, Mumbai — completed by Fine Glaze in 2023", width: 600, height: 420 }}
      />

      {/* RICH CONTENT */}
      <section className="fg-sec">
        <div className="fg-wrap fg-prose">
          
          <h2>Facade Systems for Residential Buildings</h2>
          <p className="text-muted-foreground">
            Residential buildings increasingly use premium facade elements for thermal comfort, sound control, low upkeep and appearance. Fine Glaze takes residential facade work for apartment towers, villas and gated communities in Pune and Mumbai.
          </p>
          <p className="text-muted-foreground mt-4">
            Common residential systems include <strong>frameless glass railings</strong> for balconies and terraces, <strong>aluminium sliding and casement windows</strong>, <strong>ACP cladding</strong> for elevations, <strong>structural glazing</strong> for feature elements such as bay windows and lobbies, and <strong>glass partitions</strong> for common areas.
          </p>
          <p className="text-muted-foreground mt-4">
            Our documented residential records include Nirmaann Estrellaa in Pune (windows, louvers, aluminium fins and SS glass railings), Salsette-27 in Byculla (railings and canopies), and private residences such as Jindal House and Mittal House in Mumbai.
          </p>
          <p className="text-muted-foreground mt-4">
            For energy comfort, thermally broken aluminium windows with low-E double glazing are a common choice. Savings depend on the whole building and use, so treat any figure with caution and ask for the specification behind it.
          </p>
    
          <Illustration name="ind-residential" />
        </div>
      </section>

      {/* FEATURES */}
      <section className="fg-sec">
        <div className="fg-wrap">
          <h2>What We Offer</h2>
          <div className="fg-grid c2">
              <div key="Frameless Glass Balcony Railings" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Frameless Glass Balcony Railings</span></div>
              <div key="Thermally Broken Windows" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Thermally Broken Windows</span></div>
              <div key="ACP Building Cladding" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">ACP Building Cladding</span></div>
              <div key="Structural Glazing Features" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Structural Glazing Features</span></div>
              <div key="Developer Quotations on Drawings" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Developer Quotations on Drawings</span></div>
              <div key="DGU Glass Options" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">DGU Glass Options</span></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="fg-sec">
        <div className="fg-wrap">
          <h2>Frequently Asked Questions</h2>
          <div className="fg-faq">
            <details>
              <summary><h3>What glass railing is best for apartment balconies in India?</h3></summary>
              <div className="fg-a">Toughened laminated glass in a frameless base-channel system is a common choice for apartment balconies, because laminated glass holds in place if broken and the view stays clear. The build-up and anchorage come from the structural check.</div>
            </details>
            <details>
              <summary><h3>How much does facade renovation cost for an existing residential building in India?</h3></summary>
              <div className="fg-a">Renovation cost depends on scope: re-cladding area, railing length, number of windows, access method and building height. Fine Glaze prepares BOQ-based quotations after a site survey.</div>
            </details>
            <details>
              <summary><h3>What building height requires curtain wall for residential in India?</h3></summary>
              <div className="fg-a">No regulation requires curtain wall on residential buildings at any height. It is a design and performance choice, often used on taller premium towers for floor-to-ceiling glass features.</div>
            </details>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="fg-sec">
        <div className="fg-wrap">
          <h2>Explore Related Services</h2>
          <div className="fg-grid">
            <Link key="/glass-railings" to="/glass-railings" className="group fg-row"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Glass Railings</p><p className="text-xs text-mute">Glass railing systems</p></div></Link>
            <Link key="/glass-railing-pune" to="/glass-railing-pune" className="group fg-row"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Glass Railing Pune</p><p className="text-xs text-mute">Glass railings Pune</p></div></Link>
            <Link key="/acp-aluminium-cladding" to="/acp-aluminium-cladding" className="group fg-row"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">ACP Cladding</p><p className="text-xs text-mute">ACP cladding</p></div></Link>
            <Link key="/aluminium-windows-doors" to="/aluminium-windows-doors" className="group fg-row"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Aluminium Facade</p><p className="text-xs text-mute">Aluminium windows & facade</p></div></Link>
            <Link key="/structural-glazing-pune" to="/structural-glazing-pune" className="group fg-row"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Structural Glazing Pune</p><p className="text-xs text-mute">Structural glazing</p></div></Link>
            <Link key="/facade-contractor-pune" to="/facade-contractor-pune" className="group fg-row"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Facade Contractor Pune</p><p className="text-xs text-mute">Facade contractor Pune</p></div></Link>
          </div>
        </div>
      </section>

      <RelatedProjects heading="Residential projects" keywords={["Jindal House", "Mittal", "Samundra", "Salsette", "Nirmaann"]} />
      <CTASection />
    </Layout>
  );
}
