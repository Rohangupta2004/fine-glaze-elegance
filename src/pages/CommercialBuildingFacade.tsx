import SEO from "@/components/SEO";
import PageHero from "@/components/common/PageHero";
import { RelatedProjects } from "@/components/RelatedProjects";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function CommercialBuildingFacade() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Commercial Building Facade Systems India",
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
    "description": "Commercial building facade contractor in Pune and Mumbai: curtain walls, structural glazing and ACP cladding for offices, with in-house shop drawings."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What facade system is best for an IT park in India?", "acceptedAnswer": { "@type": "Answer", "text": "Unitized curtain wall with double glazed low-E glass is commonly chosen for large IT campuses because panels are made in a factory and installed quickly. The final choice depends on height, programme, access and budget." } },
      { "@type": "Question", "name": "How much should I budget for a commercial building facade in India?", "acceptedAnswer": { "@type": "Answer", "text": "Facade budget depends on the system, glass or panel specification, height, access and testing scope, so a reliable figure needs drawings and a brief. Ask contractors for a BOQ-based quotation, including Fine Glaze." } },
      { "@type": "Question", "name": "How long does commercial facade installation take in India?", "acceptedAnswer": { "@type": "Answer", "text": "Programme depends on building size, system, glass lead time and site access, so contractors confirm it after survey and design approval. Fabrication is normally done first, with installation following floor by floor." } },
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Commercial Building Facade Systems India", "item": "https://fineglaze.com/commercial-building-facade" }
    ]
  };

  return (
    <Layout darkHero>
      <SEO
        title="Commercial Building Facade Contractor | Fine Glaze"
        description="Commercial building facade contractor in Pune and Mumbai: curtain walls, structural glazing and ACP cladding for offices, with in-house shop drawings."
        canonical="https://fineglaze.com/commercial-building-facade"
        keywords="commercial building facade contractor, commercial facade company, office building facade, glass facade commercial building, facade engineering"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* HERO */}
      <PageHero
        crumbs={[{ label: "Commercial Building Facade Systems India" }]}
        title={<>Commercial Building <span className="text-gradient-gold">Facade Systems India</span></>}
        intro="The facade is the most visible and often the most technically complex part of a commercial building. This guide covers the main commercial facade systems, design considerations and regulatory points for India, from Fine Glaze, a facade contractor in Pune and Mumbai."
        secondary={{ label: "View Projects", to: "/portfolio" }}
        image={{ src: "/projects/embassy-techzone-40-1.webp", alt: "Embassy Techzone, Hinjewadi, Pune — spider glazing and ACP cladding by Fine Glaze for Embassy REIT", width: 600, height: 420 }}
      />

      {/* RICH CONTENT */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl space-y-6">
          
          <h2 className="text-3xl font-bold">Facade Systems for Commercial Buildings in India</h2>
          <p className="text-muted-foreground">
            A commercial building facade handles weather protection, thermal and acoustic control, fire safety and architectural expression at once. Choosing a system means balancing performance, budget, programme and long-term upkeep.
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-3 mt-6">
            <li><strong>Unitized curtain wall:</strong> factory-assembled glass and aluminium panels, often used on taller buildings and tight programmes.</li>
            <li><strong>Stick system curtain wall:</strong> a site-assembled aluminium frame with glass infill, suited to low and mid-rise buildings and irregular geometry.</li>
            <li><strong>Structural glazing (SSG):</strong> frameless-looking glass bonded with structural silicone, used on showrooms, lobbies and feature elevations.</li>
            <li><strong>ACP composite cladding:</strong> lightweight aluminium sandwich panels for opaque zones and large elevations.</li>
            <li><strong>Aluminium louvers and brise-soleils:</strong> solar shading elements that cut direct sun on the glass line.</li>
          </ul>
          <h2 className="text-3xl font-bold mt-10">Regulatory Requirements for Commercial Facades in India</h2>
          <p className="text-muted-foreground mt-4">
            Commercial facades in India are normally designed against the National Building Code, IS 875 (loads), IS 2553 (glass safety) and state fire regulations. Fire-retardant cladding cores, structural calculations for wind and seismic loads and fire stopping at floor levels are typical concerns. Green-building rating schemes add thermal targets, which the project brief should state. Confirm requirements with your consultant.
          </p>
          <h2 className="text-3xl font-bold mt-10">Facade Design Best Practices for Indian Climate</h2>
          <p className="text-muted-foreground mt-4">
            Climate drives glass and shading choices. As general guidance, hot-humid and hot-dry sites benefit from solar-control glass and external shading, while cooler or composite climates allow more latitude. Orientation and glass-to-wall ratio matter as much as glass type, and an energy modeller can test options against the project brief.
          </p>
    
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-10 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-4">
              <div key="All Commercial Facade Systems" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">All Commercial Facade Systems</span></div>
              <div key="Code and Standards Guide" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Code and Standards Guide</span></div>
              <div key="Green Building Considerations" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Green Building Considerations</span></div>
              <div key="Climate-Aware Design" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Climate-Aware Design</span></div>
              <div key="IT Park and Office Facades" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">IT Park and Office Facades</span></div>
              <div key="Hotel and Retail Facades" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Hotel and Retail Facades</span></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-background p-6">
              <h3 className="text-lg font-bold mb-2">What facade system is best for an IT park in India?</h3>
              <p className="text-muted-foreground">Unitized curtain wall with double glazed low-E glass is commonly chosen for large IT campuses because panels are made in a factory and installed quickly. The final choice depends on height, programme, access and budget.</p>
            </div>
            <div className="bg-background p-6">
              <h3 className="text-lg font-bold mb-2">How much should I budget for a commercial building facade in India?</h3>
              <p className="text-muted-foreground">Facade budget depends on the system, glass or panel specification, height, access and testing scope, so a reliable figure needs drawings and a brief. Ask contractors for a BOQ-based quotation, including Fine Glaze.</p>
            </div>
            <div className="bg-background p-6">
              <h3 className="text-lg font-bold mb-2">How long does commercial facade installation take in India?</h3>
              <p className="text-muted-foreground">Programme depends on building size, system, glass lead time and site access, so contractors confirm it after survey and design approval. Fabrication is normally done first, with installation following floor by floor.</p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-12 bg-night-2 border-t border-line">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-xl font-bold text-paper mb-5">Explore Related Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link key="/curtain-wall-systems" to="/curtain-wall-systems" className="group flex items-start gap-3 p-4 border border-line hover:border-lamp/40 hover:bg-lamp/10 transition-all bg-night"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Curtain Wall Systems</p><p className="text-xs text-mute">Curtain wall service</p></div></Link>
            <Link key="/structural-glazing" to="/structural-glazing" className="group flex items-start gap-3 p-4 border border-line hover:border-lamp/40 hover:bg-lamp/10 transition-all bg-night"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Structural Glazing</p><p className="text-xs text-mute">Structural glazing</p></div></Link>
            <Link key="/acp-aluminium-cladding" to="/acp-aluminium-cladding" className="group flex items-start gap-3 p-4 border border-line hover:border-lamp/40 hover:bg-lamp/10 transition-all bg-night"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">ACP Cladding</p><p className="text-xs text-mute">ACP cladding</p></div></Link>
            <Link key="/it-park-facade" to="/it-park-facade" className="group flex items-start gap-3 p-4 border border-line hover:border-lamp/40 hover:bg-lamp/10 transition-all bg-night"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">IT Park Facade</p><p className="text-xs text-mute">IT campus facade guide</p></div></Link>
            <Link key="/facade-contractor-pune" to="/facade-contractor-pune" className="group flex items-start gap-3 p-4 border border-line hover:border-lamp/40 hover:bg-lamp/10 transition-all bg-night"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Facade Contractor Pune</p><p className="text-xs text-mute">Facade contractor Pune</p></div></Link>
            <Link key="/curtain-wall-cost-guide" to="/curtain-wall-cost-guide" className="group flex items-start gap-3 p-4 border border-line hover:border-lamp/40 hover:bg-lamp/10 transition-all bg-night"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Curtain Wall Cost Guide</p><p className="text-xs text-mute">Detailed cost analysis</p></div></Link>
          </div>
        </div>
      </section>

      <RelatedProjects heading="Commercial building projects" keywords={["Embassy", "Naman", "FIFC", "LTIMindtree"]} />
      <CTASection />
    </Layout>
  );
}
