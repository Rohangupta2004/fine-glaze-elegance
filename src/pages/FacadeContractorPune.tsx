import Illustration from "@/components/common/Illustration";
import SEO from "@/components/SEO";
import PageHero from "@/components/common/PageHero";
import { RelatedProjects } from "@/components/RelatedProjects";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function FacadeContractorPune() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Facade Contractor in Pune",
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
    "description": "Facade contractor in Pune with its own fabrication unit at Pisoli. Curtain walls, structural glazing, ACP cladding, glass railings and maintenance."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "How do I choose a facade contractor in Pune?", "acceptedAnswer": { "@type": "Answer", "text": "Choose a facade contractor by checking completed projects you can verify, an in-house design and engineering team, a documented quality process and maintenance support after handover. Ask any contractor, including Fine Glaze, for these documents." } },
      { "@type": "Question", "name": "What does facade work cost per sq ft in Pune?", "acceptedAnswer": { "@type": "Answer", "text": "Facade cost in Pune depends on the system, glass or panel specification, building height, access and site conditions, so a fair figure needs drawings. Fine Glaze prepares BOQ-based quotations after reviewing the drawings and the site." } },
      { "@type": "Question", "name": "Does Fine Glaze handle facade design as well as installation in Pune?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Fine Glaze prepares fabrication and installation shop drawings in-house and checks member sizing, fixing and anchorage against project wind load. We coordinate with architects and consultants through approval and GFC release." } },
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Facade Contractor in Pune", "item": "https://fineglaze.com/facade-contractor-pune" }
    ]
  };

  return (
    <Layout darkHero>
      <SEO
        title="Facade Contractor in Pune: Glazing and ACP | Fine Glaze"
        description="Facade contractor in Pune with its own fabrication unit at Pisoli. Curtain walls, structural glazing, ACP cladding, glass railings and maintenance."
        canonical="https://fineglaze.com/facade-contractor-pune"
        keywords="facade contractor Pune, building facade Pune, glass facade contractor Pune, curtain wall contractor Pune, ACP cladding Pune, facade company Pune Maharashtra"
        ogImage="https://fineglaze.com/projects/embassy-techzone-41-1.webp"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* HERO */}
      <PageHero
        crumbs={[{ label: "Facade Contractor in Pune" }]}
        title={<>Facade Contractor <span className="text-gradient-gold">in Pune</span></>}
        intro="Fine Glaze is a facade contractor based in Pune, working with developers, architects, builders and corporate clients. From design consultation through fabrication, installation and AMC, we handle the facade lifecycle."
        secondary={{ label: "View Projects", to: "/portfolio" }}
        image={{ src: "/projects/pune-airport-terminal-42-1.webp", alt: "Pune International Airport new terminal — SS column cladding by Fine Glaze for Jindal Stainless (completed 2023)", width: 600, height: 420 }}
      />

      {/* RICH CONTENT */}
      <section className="fg-sec">
        <div className="fg-wrap fg-prose">
          
          <h2>Facade Solutions for Pune's Buildings</h2>
          <p className="text-muted-foreground">
            Fine Glaze is led by a founder with <strong>11+ years in the facade industry</strong>, and our company profile documents <strong>15 projects</strong> across Pune and Mumbai. Our services span curtain walls, structural glazing, ACP cladding, aluminium windows and doors, glass railings, and facade maintenance and AMC.
          </p>
          <p className="text-muted-foreground mt-4">
            Pune's growth in areas such as Hinjewadi, Kharadi, Wakad and Undri creates steady demand for facade work. Fine Glaze prepares shop and fabrication drawings in-house, checks member sizing, fixing and anchorage against project wind load, and runs a dedicated safety officer across active sites.
          </p>
          <p className="text-muted-foreground mt-4">
            Our documented Pune projects include Embassy Techzone in Hinjewadi (spider glazing, ACP cladding, glass doors and facade AMC for Embassy REIT), the Pune International Airport terminal (SS column cladding for Jindal Stainless Limited) and Nirmaann Estrellaa (windows, louvers, aluminium fins and glass railings).
          </p>
          <p className="text-muted-foreground mt-4">
            Fine Glaze fabricates at its own unit in Pisoli, Pune, where cutting, assembly and finishing are batched per project and despatched to site. Our office is in Mohammed Wadi (Undri), Pune, and we also take facade projects elsewhere in India.
          </p>
          <p className="text-muted-foreground mt-4">
            Ask us for project references that match your building type and scope, and we will share what we are able to disclose.
          </p>
    
          <Illustration name="city-pune" />
        </div>
      </section>

      {/* FEATURES */}
      <section className="fg-sec">
        <div className="fg-wrap">
          <h2>What We Offer</h2>
          <div className="fg-grid c2">
              <div key="Curtain Wall Systems" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Curtain Wall Systems</span></div>
              <div key="Structural Glazing" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Structural Glazing</span></div>
              <div key="ACP & Aluminium Cladding" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">ACP & Aluminium Cladding</span></div>
              <div key="Glass Railings" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Glass Railings</span></div>
              <div key="Facade AMC & Maintenance" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Facade AMC & Maintenance</span></div>
              <div key="Turnkey Project Management" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Project Management</span></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="fg-sec">
        <div className="fg-wrap">
          <h2>Frequently Asked Questions</h2>
          <div className="fg-faq">
            <details>
              <summary><h3>How do I choose a facade contractor in Pune?</h3></summary>
              <div className="fg-a">Choose a facade contractor by checking completed projects you can verify, an in-house design and engineering team, a documented quality process and maintenance support after handover. Ask any contractor, including Fine Glaze, for these documents.</div>
            </details>
            <details>
              <summary><h3>What does facade work cost per sq ft in Pune?</h3></summary>
              <div className="fg-a">Facade cost in Pune depends on the system, glass or panel specification, building height, access and site conditions, so a fair figure needs drawings. Fine Glaze prepares BOQ-based quotations after reviewing the drawings and the site.</div>
            </details>
            <details>
              <summary><h3>Does Fine Glaze handle facade design as well as installation in Pune?</h3></summary>
              <div className="fg-a">Yes. Fine Glaze prepares fabrication and installation shop drawings in-house and checks member sizing, fixing and anchorage against project wind load. We coordinate with architects and consultants through approval and GFC release.</div>
            </details>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="fg-sec">
        <div className="fg-wrap">
          <h2>Explore Related Services</h2>
          <div className="fg-grid">
            <Link key="/curtain-wall-pune" to="/curtain-wall-pune" className="group fg-row"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Curtain Wall Pune</p><p className="text-xs text-mute">Unitized curtain walls</p></div></Link>
            <Link key="/structural-glazing-pune" to="/structural-glazing-pune" className="group fg-row"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Structural Glazing Pune</p><p className="text-xs text-mute">Frameless glass facades</p></div></Link>
            <Link key="/acp-cladding-pune" to="/acp-cladding-pune" className="group fg-row"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">ACP Cladding Pune</p><p className="text-xs text-mute">ACP panel cladding</p></div></Link>
            <Link key="/glass-railing-pune" to="/glass-railing-pune" className="group fg-row"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Glass Railing Pune</p><p className="text-xs text-mute">Balcony glass railings</p></div></Link>
            <Link key="/facade-contractor-mumbai" to="/facade-contractor-mumbai" className="group fg-row"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Facade Contractor Mumbai</p><p className="text-xs text-mute">Mumbai facade services</p></div></Link>
            <Link key="/maintenance-services" to="/maintenance-services" className="group fg-row"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Facade Maintenance</p><p className="text-xs text-mute">AMC and maintenance</p></div></Link>
          </div>
        </div>
      </section>

      <RelatedProjects heading="Our projects in Pune" locations={["Pune"]} />
      <CTASection />
    </Layout>
  );
}
