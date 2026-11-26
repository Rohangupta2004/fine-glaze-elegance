import Illustration from "@/components/common/Illustration";
import SEO from "@/components/SEO";
import PageHero from "@/components/common/PageHero";
import { RelatedProjects } from "@/components/RelatedProjects";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function CurtainWallPune() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Curtain Wall Glazing Contractor in Pune",
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
    "description": "Curtain wall contractor in Pune: unitized and stick glass curtain walls for offices and commercial towers, with in-house shop drawings, own fabrication unit."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is the cost of curtain wall glazing in Pune?", "acceptedAnswer": { "@type": "Answer", "text": "Curtain wall cost in Pune depends on the system, glass type, aluminium profile, building height, wind load and access, so it needs drawings to price. Fine Glaze prepares BOQ-based quotations after reviewing the drawings." } },
      { "@type": "Question", "name": "Which areas in Pune does Fine Glaze serve for curtain walls?", "acceptedAnswer": { "@type": "Answer", "text": "Fine Glaze takes curtain wall projects across Pune and PCMC, including Hinjewadi, Kharadi, Baner, Wakad, Magarpatta, Undri and Pimpri-Chinchwad, and also elsewhere in India. Our fabrication unit is in Pisoli, Pune." } },
      { "@type": "Question", "name": "How long does curtain wall installation take in Pune?", "acceptedAnswer": { "@type": "Answer", "text": "Programme depends on building size, system, glass lead time and site access, so we confirm it per project after survey and design approval. Fabrication is batched per project and despatched directly to site." } },
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Curtain Wall Glazing Contractor in Pune", "item": "https://fineglaze.com/curtain-wall-pune" }
    ]
  };

  return (
    <Layout darkHero>
      <SEO
        title="Curtain Wall Contractor in Pune, Maharashtra | Fine Glaze"
        description="Curtain wall contractor in Pune: unitized and stick glass curtain walls for offices and commercial towers, with in-house shop drawings, own fabrication unit."
        canonical="https://fineglaze.com/curtain-wall-pune"
        keywords="curtain wall contractor Pune, curtain wall systems Pune, glass facade Pune, unitized curtain wall Pune"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* HERO */}
      <PageHero
        crumbs={[{ label: "Curtain Wall Glazing Contractor in Pune" }]}
        title={<>Curtain Wall Glazing <span className="text-gradient-gold">Contractor in Pune</span></>}
        intro="Fine Glaze is a curtain wall contractor in Pune, offering unitized, semi-unitized and stick systems for offices, commercial buildings and residential towers."
        secondary={{ label: "View Projects", to: "/portfolio" }}
        image={{ src: "/projects/embassy-techzone-40-1.webp", alt: "Embassy Techzone, Hinjewadi, Pune — facade works by Fine Glaze for Embassy REIT", width: 600, height: 420 }}
      />

      {/* RICH CONTENT */}
      <section className="fg-sec">
        <div className="fg-wrap fg-prose">
          
          <h2>Curtain Wall Work in Pune</h2>
          <p className="text-muted-foreground">
            Fine Glaze offers curtain wall systems in Pune for offices, commercial buildings and residential towers. Every project starts with a site survey and in-house shop drawings, and member sizing, fixing and anchorage are checked against the project wind load before approval.
          </p>
          <p className="text-muted-foreground mt-4">
            We fabricate at our own unit in Pisoli, Pune, using aluminium extrusions from major Indian mills, glass from Saint-Gobain or other major brands, and DOWSIL structural silicone or approved equivalents, unless the project's approved vendor list says otherwise.
          </p>
          <p className="text-muted-foreground mt-4">
            We work across Pune, including Hinjewadi, Kharadi, Baner, Wakad, Magarpatta, Pimpri-Chinchwad and Undri. Our documented Pune projects include Embassy Techzone in Hinjewadi, the Pune International Airport terminal and Nirmaann Estrellaa.
          </p>
          <p className="text-muted-foreground mt-4">
            As general guidance, stick systems suit lower and mid-rise buildings, semi-unitized systems suit mid-rise buildings with repeating floors, and unitized systems suit taller buildings and tight programmes. We help choose against height, access, programme and budget.
          </p>
          <p className="text-muted-foreground mt-4">
            Installed glazing is checked with a site water penetration test, and snags are logged and closed before handover. Defect liability support follows the contract terms, and an AMC can be quoted separately.
          </p>
    
          <Illustration name="city-pune" />
        </div>
      </section>

      {/* FEATURES */}
      <section className="fg-sec">
        <div className="fg-wrap">
          <h2>What We Offer</h2>
          <div className="fg-grid c2">
              <div key="Unitized Curtain Walls" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Unitized Curtain Walls</span></div>
              <div key="Stick System Glazing" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Stick System Glazing</span></div>
              <div key="DOWSIL Structural Silicone" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">DOWSIL Structural Silicone</span></div>
              <div key="DGU & Low-E Glass" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">DGU & Low-E Glass</span></div>
              <div key="Wind Load Check to Project Basis" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Wind Load Check to Project Basis</span></div>
              <div key="Anchorage Checked to Project Design" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Anchorage Checked to Project Design</span></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="fg-sec">
        <div className="fg-wrap">
          <h2>Frequently Asked Questions</h2>
          <div className="fg-faq">
            <details>
              <summary><h3>What is the cost of curtain wall glazing in Pune?</h3></summary>
              <div className="fg-a">Curtain wall cost in Pune depends on the system, glass type, aluminium profile, building height, wind load and access, so it needs drawings to price. Fine Glaze prepares BOQ-based quotations after reviewing the drawings.</div>
            </details>
            <details>
              <summary><h3>Which areas in Pune does Fine Glaze serve for curtain walls?</h3></summary>
              <div className="fg-a">Fine Glaze takes curtain wall projects across Pune and PCMC, including Hinjewadi, Kharadi, Baner, Wakad, Magarpatta, Undri and Pimpri-Chinchwad, and also elsewhere in India. Our fabrication unit is in Pisoli, Pune.</div>
            </details>
            <details>
              <summary><h3>How long does curtain wall installation take in Pune?</h3></summary>
              <div className="fg-a">Programme depends on building size, system, glass lead time and site access, so we confirm it per project after survey and design approval. Fabrication is batched per project and despatched directly to site.</div>
            </details>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="fg-sec">
        <div className="fg-wrap">
          <h2>Explore Related Services</h2>
          <div className="fg-grid">
            <Link key="/curtain-wall-systems" to="/curtain-wall-systems" className="group fg-row"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Curtain Wall Systems</p><p className="text-xs text-mute">Full curtain wall overview</p></div></Link>
            <Link key="/structural-glazing-pune" to="/structural-glazing-pune" className="group fg-row"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Structural Glazing Pune</p><p className="text-xs text-mute">Frameless glass facades Pune</p></div></Link>
            <Link key="/aluminium-windows-doors" to="/aluminium-windows-doors" className="group fg-row"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Aluminium Facade</p><p className="text-xs text-mute">Aluminium cladding systems</p></div></Link>
            <Link key="/acp-cladding-pune" to="/acp-cladding-pune" className="group fg-row"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">ACP Cladding Pune</p><p className="text-xs text-mute">Composite panel facades Pune</p></div></Link>
            <Link key="/facade-contractor-pune" to="/facade-contractor-pune" className="group fg-row"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Facade Contractor Pune</p><p className="text-xs text-mute">Complete facade services</p></div></Link>
            <Link key="/glass-railings" to="/glass-railings" className="group fg-row"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Glass Railings</p><p className="text-xs text-mute">Balcony glass railings Pune</p></div></Link>
          </div>
        </div>
      </section>

      <RelatedProjects heading="Our glazing work in Pune" locations={["Pune"]} keywords={["glazing", "glass", "window"]} />
      <CTASection />
    </Layout>
  );
}
