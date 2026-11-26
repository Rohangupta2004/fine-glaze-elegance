import SEO from "@/components/SEO";
import PageHero from "@/components/common/PageHero";
import { RelatedProjects } from "@/components/RelatedProjects";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function StructuralGlazingPune() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Structural Glazing Contractor in Pune",
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
    "description": "Structural glazing in Pune: 2-side, 4-side and spider glazing for showrooms and commercial buildings, with in-house shop drawings and a site water test."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is the cost of structural glazing in Pune?", "acceptedAnswer": { "@type": "Answer", "text": "Structural glazing cost in Pune depends on the configuration (2-side, 4-side or spider), glass, sealant, height and access, so a fair figure needs drawings. Fine Glaze prepares BOQ-based quotations after reviewing the project." } },
      { "@type": "Question", "name": "Is structural glazing safe in Pune earthquake zone?", "acceptedAnswer": { "@type": "Answer", "text": "Structural glazing can be designed for Pune's wind and seismic conditions by sizing the frame, fixing and anchorage to the project design basis. Fine Glaze's engineering check covers member sizing, fixing and anchorage." } },
      { "@type": "Question", "name": "What glass thickness is used for structural glazing in Pune?", "acceptedAnswer": { "@type": "Answer", "text": "Glass thickness is set by the structural calculation for wind load, panel size and support. Toughened, heat-soaked or laminated glass may be specified depending on location and fall-protection needs." } },
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Structural Glazing Contractor in Pune", "item": "https://fineglaze.com/structural-glazing-pune" }
    ]
  };

  return (
    <Layout darkHero>
      <SEO
        title="Structural Glazing in Pune: SSG and Spider | Fine Glaze"
        description="Structural glazing in Pune: 2-side, 4-side and spider glazing for showrooms and commercial buildings, with in-house shop drawings and a site water test."
        canonical="https://fineglaze.com/structural-glazing-pune"
        keywords="structural glazing Pune, structural glass facade Pune, frameless glazing Pune, spider glazing Pune"
        ogImage="https://fineglaze.com/projects/embassy-techzone-41-1.webp"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* HERO */}
      <PageHero
        crumbs={[{ label: "Structural Glazing Contractor in Pune" }]}
        title={<>Structural Glazing <span className="text-gradient-gold">Contractor in Pune</span></>}
        intro="Fine Glaze offers 2-side, 4-side and spider structural glazing in Pune for showrooms, offices, campuses and residential buildings, with in-house shop drawings."
        secondary={{ label: "View Projects", to: "/portfolio" }}
        image={{ src: "/projects/embassy-techzone-41-2.webp", alt: "Spider glass entrance at Embassy Techzone, Hinjewadi, Pune — installed by Fine Glaze", width: 600, height: 420 }}
      />

      {/* RICH CONTENT */}
      <section className="fg-sec">
        <div className="fg-wrap fg-prose">
          
          <h2>Structural Glazing in Pune</h2>
          <p className="text-muted-foreground">
            Structural glazing uses high-strength structural silicone to bond glass to aluminium frames, leaving no visible exterior fixings. Fine Glaze procures DOWSIL structural silicone or approved equivalents. Our documented projects include spider glazing at Embassy Techzone in Hinjewadi and structural glazing at SSG Honesty, Panvel.
          </p>
          <p className="text-muted-foreground mt-4">
            Systems are sized against the project wind load, with member sizing, fixing and anchorage checked before approval. Installed glazing is checked with a site water penetration test, and snags are closed before handover.
          </p>
          <p className="text-muted-foreground mt-4">
            Typical applications in Pune include showroom glass facades, office entrance lobbies, residential glass elements and atrium or canopy glazing.
          </p>
          <p className="text-muted-foreground mt-4">
            We offer three configurations: <strong>2-side SSG</strong>, where sealant bonds two sides and mechanical caps hold the others; <strong>4-side SSG</strong>, for a fully frameless appearance; and <strong>spider glazing</strong>, for entries, atriums and canopies where minimal structure is wanted.
          </p>
          <p className="text-muted-foreground mt-4">
            For residential balcony and bay-window glazing, we set glass thickness and joint sizing with the structural check and the architect's brief.
          </p>
    
        </div>
      </section>

      {/* FEATURES */}
      <section className="fg-sec">
        <div className="fg-wrap">
          <h2>What We Offer</h2>
          <div className="fg-grid c2">
              <div key="2-Side SSG Systems" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">2-Side SSG Systems</span></div>
              <div key="4-Side SSG Systems" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">4-Side SSG Systems</span></div>
              <div key="Spider Glazing" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Spider Glazing</span></div>
              <div key="DOWSIL Structural Silicone" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">DOWSIL Structural Silicone</span></div>
              <div key="Site Water Penetration Test" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Site Water Penetration Test</span></div>
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
              <summary><h3>What is the cost of structural glazing in Pune?</h3></summary>
              <div className="fg-a">Structural glazing cost in Pune depends on the configuration (2-side, 4-side or spider), glass, sealant, height and access, so a fair figure needs drawings. Fine Glaze prepares BOQ-based quotations after reviewing the project.</div>
            </details>
            <details>
              <summary><h3>Is structural glazing safe in Pune earthquake zone?</h3></summary>
              <div className="fg-a">Structural glazing can be designed for Pune's wind and seismic conditions by sizing the frame, fixing and anchorage to the project design basis. Fine Glaze's engineering check covers member sizing, fixing and anchorage.</div>
            </details>
            <details>
              <summary><h3>What glass thickness is used for structural glazing in Pune?</h3></summary>
              <div className="fg-a">Glass thickness is set by the structural calculation for wind load, panel size and support. Toughened, heat-soaked or laminated glass may be specified depending on location and fall-protection needs.</div>
            </details>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="fg-sec">
        <div className="fg-wrap">
          <h2>Explore Related Services</h2>
          <div className="fg-grid">
            <Link key="/structural-glazing" to="/structural-glazing" className="group fg-row"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Structural Glazing</p><p className="text-xs text-mute">Full structural glazing service</p></div></Link>
            <Link key="/curtain-wall-pune" to="/curtain-wall-pune" className="group fg-row"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Curtain Wall Pune</p><p className="text-xs text-mute">Curtain wall systems Pune</p></div></Link>
            <Link key="/aluminium-windows-doors" to="/aluminium-windows-doors" className="group fg-row"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Aluminium Facade</p><p className="text-xs text-mute">Aluminium facade systems</p></div></Link>
            <Link key="/glass-railings" to="/glass-railings" className="group fg-row"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Glass Railings</p><p className="text-xs text-mute">Frameless glass railings</p></div></Link>
            <Link key="/acp-cladding-pune" to="/acp-cladding-pune" className="group fg-row"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">ACP Cladding Pune</p><p className="text-xs text-mute">ACP panel facades Pune</p></div></Link>
            <Link key="/facade-contractor-pune" to="/facade-contractor-pune" className="group fg-row"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Facade Contractor Pune</p><p className="text-xs text-mute">Complete facade solutions</p></div></Link>
          </div>
        </div>
      </section>

      <RelatedProjects heading="Our glazing work in Pune" locations={["Pune"]} keywords={["glazing", "spider", "glass"]} />
      <CTASection />
    </Layout>
  );
}
