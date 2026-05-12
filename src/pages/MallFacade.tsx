import SEO from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function MallFacade() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Shopping Mall Facade Contractor India",
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
    "description": "Shopping mall facade contractor in India. Structural glazing, ACP cladding, entrance canopies & curtain wall for retail malls. Maharashtra projects. Free site visit."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What facade system is used for shopping mall entrances in India?", "acceptedAnswer": { "@type": "Answer", "text": "Shopping mall grand entrances in India most commonly use spider glazing or 4-side SSG structural glazing for a dramatic frameless glass effect. These are often combined with a steel space frame or cable-net structure for very large spans. Fine Glaze designs and installs complete structural glazing entrance systems including the glass, fixing hardware, and weatherseal." } },
      { "@type": "Question", "name": "How is ACP cladding used in shopping malls?", "acceptedAnswer": { "@type": "Answer", "text": "ACP cladding in malls is used for: external elevations above curtain wall level; parking structure facades; service entrances and back-of-house areas; signage and brand feature walls; and interior atrium walls where a smooth, colourful surface is required. PVDF-coated ACP is specified for all external applications for longevity and easy cleaning." } },
      { "@type": "Question", "name": "What glass is best for a mall facade in India?", "acceptedAnswer": { "@type": "Answer", "text": "For Indian malls, solar control glass with SHGC 0.25-0.30 is recommended to reduce air conditioning costs. Fine Glaze typically specifies Saint-Gobain Parsol or Pilkington Suncool reflective glass, which provides strong external reflectivity for architectural character while controlling solar heat gain. DGU configuration improves thermal comfort for occupants near the glass." } },
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Shopping Mall Facade Contractor India", "item": "https://fineglaze.com/mall-facade" }
    ]
  };

  return (
    <Layout darkHero>
      <SEO
        title="Shopping Mall Facade Contractor India | Glass & ACP Cladding – Fine Glaze"
        description="Shopping mall facade contractor in India. Structural glazing, ACP cladding, entrance canopies & curtain wall for retail malls. Maharashtra projects. Free site visit."
        canonical="https://fineglaze.com/mall-facade"
        keywords="mall facade contractor India, shopping mall glass facade, retail mall ACP cladding, mall entrance structural glazing, shopping centre facade India, mall curtain wall Maharashtra"
        ogImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* HERO */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Shopping Mall <span className="text-gradient-gold">Facade Specialist India</span>
            </h1>
            <p className="text-lg text-white/80 mb-8">Shopping mall facades are high-impact, high-visibility architectural statements that must attract footfall, withstand heavy public use, and require minimal maintenance. Fine Glaze delivers complete mall facade solutions — from grand entrance structural glazing to ACP cladding and aluminium retail fronts — for shopping centres across Maharashtra.</p>
            <div className="flex gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700">Get Free Quote</Button>
              </Link>
              <Link to="/portfolio">
                <Button size="lg" variant="outline">View Projects</Button>
              </Link>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt="Shopping mall facade glass ACP cladding India Fine Glaze"
            className="rounded-xl shadow-2xl object-cover h-[420px] w-full"
            loading="eager"
            width="600"
            height="420"
          />
        </div>
      </section>

      {/* RICH CONTENT */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl space-y-6">
          
          <h2 className="text-3xl font-bold">Mall Facade Design and Construction Expertise</h2>
          <p className="text-muted-foreground">
            Shopping malls represent some of the most architecturally ambitious facade projects in India's construction sector — requiring large-format structural glazing, dramatic entrance canopies, complex geometric cladding, and the ability to create powerful brand identity through architecture. Fine Glaze brings proven experience in delivering these complex facade systems on time and within budget.
          </p>
          <p className="text-muted-foreground mt-4">
            Key facade elements for shopping malls include: <strong>Grand entrance atrium glazing</strong> — spider-fix or structural silicone for maximum transparency and architectural drama; <strong>Multi-level curtain wall</strong> on all elevations with solar control glass; <strong>ACP cladding</strong> for service areas, parking structures, and brand identification zones; <strong>Aluminium shopfront systems</strong> for ground floor retail frontages; and <strong>Entrance canopies</strong> spanning 10-20+ metres with structural glass and steel.
          </p>
          <p className="text-muted-foreground mt-4">
            Mall facades also require careful consideration of maintenance access. Fine Glaze designs all mall facade systems with gondola and Building Maintenance Unit (BMU) track provisions, ensuring efficient future window cleaning and periodic sealant maintenance without requiring scaffold setup for every access.
          </p>
          <p className="text-muted-foreground mt-4">
            For retailers and mall developers concerned about energy costs, Fine Glaze's mall facade specifications include solar control glass with SHGC below 0.30 for the Pune and Mumbai climate, integrated sun shading systems for south and west facades, and thermally broken aluminium systems to reduce HVAC load on the tenant floors.
          </p>
    
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-10 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-4">
              <div key="Large Atrium Spider Glazing" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Large Atrium Spider Glazing</span></div>
              <div key="Multi-Level Curtain Wall" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Multi-Level Curtain Wall</span></div>
              <div key="ACP Brand Zone Cladding" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">ACP Brand Zone Cladding</span></div>
              <div key="Entrance Canopy Systems" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Entrance Canopy Systems</span></div>
              <div key="BMU Track Integration" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">BMU Track Integration</span></div>
              <div key="Solar Control Glass Specification" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Solar Control Glass Specification</span></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">What facade system is used for shopping mall entrances in India?</h3>
              <p className="text-muted-foreground">Shopping mall grand entrances in India most commonly use spider glazing or 4-side SSG structural glazing for a dramatic frameless glass effect. These are often combined with a steel space frame or cable-net structure for very large spans. Fine Glaze designs and installs complete structural glazing entrance systems including the glass, fixing hardware, and weatherseal.</p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">How is ACP cladding used in shopping malls?</h3>
              <p className="text-muted-foreground">ACP cladding in malls is used for: external elevations above curtain wall level; parking structure facades; service entrances and back-of-house areas; signage and brand feature walls; and interior atrium walls where a smooth, colourful surface is required. PVDF-coated ACP is specified for all external applications for longevity and easy cleaning.</p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">What glass is best for a mall facade in India?</h3>
              <p className="text-muted-foreground">For Indian malls, solar control glass with SHGC 0.25-0.30 is recommended to reduce air conditioning costs. Fine Glaze typically specifies Saint-Gobain Parsol or Pilkington Suncool reflective glass, which provides strong external reflectivity for architectural character while controlling solar heat gain. DGU configuration improves thermal comfort for occupants near the glass.</p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-12 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-xl font-bold text-slate-800 mb-5">Explore Related Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link key="/structural-glazing" to="/structural-glazing" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Structural Glazing</p><p className="text-xs text-slate-500">Structural glazing systems</p></div></Link>
            <Link key="/acp-aluminium-cladding" to="/acp-aluminium-cladding" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">ACP Cladding</p><p className="text-xs text-slate-500">ACP cladding</p></div></Link>
            <Link key="/curtain-wall-systems" to="/curtain-wall-systems" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Curtain Wall Systems</p><p className="text-xs text-slate-500">Curtain wall service</p></div></Link>
            <Link key="/commercial-building-facade" to="/commercial-building-facade" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Commercial Facade Guide</p><p className="text-xs text-slate-500">Commercial facade overview</p></div></Link>
            <Link key="/facade-contractor-pune" to="/facade-contractor-pune" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Facade Contractor Pune</p><p className="text-xs text-slate-500">Facade services Pune</p></div></Link>
            <Link key="/maintenance-services" to="/maintenance-services" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Facade Maintenance</p><p className="text-xs text-slate-500">AMC & cleaning</p></div></Link>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
