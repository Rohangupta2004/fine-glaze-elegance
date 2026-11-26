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
    "description": "Mall facade contractor in Pune and Mumbai: glass facades, retail ACP cladding, canopies and curtain wall, with in-house shop drawings and own Pune unit."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What facade system is used for shopping mall entrances in India?", "acceptedAnswer": { "@type": "Answer", "text": "Mall entrances in India commonly use spider glazing or 4-side structural glazing for a frameless glass look, sometimes with a steel frame for long spans. Fine Glaze takes structural glazing entrance systems, including glass, fixings and weather sealing." } },
      { "@type": "Question", "name": "How is ACP cladding used in shopping malls?", "acceptedAnswer": { "@type": "Answer", "text": "In malls, ACP cladding covers elevations above the glazing, parking structures, service entrances and brand feature walls. For external use, coated panels are chosen for durability and easy cleaning, with fire requirements checked by the consultant." } },
      { "@type": "Question", "name": "What glass is best for a mall facade in India?", "acceptedAnswer": { "@type": "Answer", "text": "Solar control glass in a double glazed unit is commonly chosen for malls to limit solar heat gain while keeping daylight. The exact glass depends on orientation and the energy brief, and Fine Glaze procures from Saint-Gobain and other major brands." } },
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
        title="Mall Facade Contractor in Pune & Mumbai | Fine Glaze"
        description="Mall facade contractor in Pune and Mumbai: glass facades, retail ACP cladding, canopies and curtain wall, with in-house shop drawings and own Pune unit."
        canonical="https://fineglaze.com/mall-facade"
        keywords="mall facade contractor, shopping mall glass facade, retail facade, mall ACP cladding, mall entrance canopy"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* HERO */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Shopping Mall <span className="text-gradient-gold">Facade Specialist India</span>
            </h1>
            <p className="text-lg text-white/80 mb-8">Fine Glaze takes mall and retail facade work in Pune and Mumbai: entrance glazing, ACP cladding, aluminium shopfronts, canopies and curtain wall.</p>
            <div className="flex gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700">Book a call</Button>
              </Link>
              <Link to="/portfolio">
                <Button size="lg" variant="outline">View Projects</Button>
              </Link>
            </div>
          </div>
          <img
            src="/projects/ssg-honesty-30-1.webp"
            alt="SSG Honesty Nimkar Building, Panvel — structural glazing, curtain wall and ACP by Fine Glaze (architect's render)"
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
          
          <h2 className="text-3xl font-bold">Mall Facade Design and Construction</h2>
          <p className="text-muted-foreground">
            Malls need high-visibility facades that handle heavy public use with little upkeep. They often combine large-format structural glazing, entrance canopies and cladding to give the building a clear identity.
          </p>
          <p className="text-muted-foreground mt-4">
            Key mall facade elements include <strong>entrance and atrium glazing</strong> in spider-fixed or structural silicone systems, <strong>curtain wall</strong> with solar control glass, <strong>ACP cladding</strong> for service areas and brand zones, <strong>aluminium shopfront systems</strong> and <strong>entrance canopies</strong> in glass and steel.
          </p>
          <p className="text-muted-foreground mt-4">
            Maintenance access deserves early thought. As general guidance, facade designs should plan gondola or BMU provisions with the architect so that cleaning and sealant maintenance do not need fresh scaffolding every time.
          </p>
          <p className="text-muted-foreground mt-4">
            For energy, solar control glass, shading on sun-facing elevations and thermally broken aluminium frames are the usual levers. The right mix depends on the climate, orientation and the project's energy brief.
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
              <div key="Maintenance Access Planning" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Maintenance Access Planning</span></div>
              <div key="Solar Control Glass Options" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Solar Control Glass Options</span></div>
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
              <p className="text-muted-foreground">Mall entrances in India commonly use spider glazing or 4-side structural glazing for a frameless glass look, sometimes with a steel frame for long spans. Fine Glaze takes structural glazing entrance systems, including glass, fixings and weather sealing.</p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">How is ACP cladding used in shopping malls?</h3>
              <p className="text-muted-foreground">In malls, ACP cladding covers elevations above the glazing, parking structures, service entrances and brand feature walls. For external use, coated panels are chosen for durability and easy cleaning, with fire requirements checked by the consultant.</p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">What glass is best for a mall facade in India?</h3>
              <p className="text-muted-foreground">Solar control glass in a double glazed unit is commonly chosen for malls to limit solar heat gain while keeping daylight. The exact glass depends on orientation and the energy brief, and Fine Glaze procures from Saint-Gobain and other major brands.</p>
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
