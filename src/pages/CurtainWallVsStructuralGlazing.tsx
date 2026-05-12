import SEO from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

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
    "description": "Curtain wall vs structural glazing — detailed comparison for Indian buildings. Cost, aesthetics, performance, installation & which to choose. Expert guide by Fine Glaze."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Which is cheaper — curtain wall or structural glazing?", "acceptedAnswer": { "@type": "Answer", "text": "Structural glazing (2-side SSG) can be slightly cheaper than curtain wall for simple, low-rise facades (Rs 300-500/sq ft vs Rs 350-650/sq ft for stick system). However, 4-side SSG is comparable in cost to mid-range curtain wall. For high-rise buildings, unitized curtain wall is typically the more practical and cost-competitive solution." } },
      { "@type": "Question", "name": "Can curtain wall and structural glazing be combined on one building?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — this is very common. Many buildings use structural glazing for the ground floor showroom or lobby entrance, transitioning to curtain wall for upper floors. Fine Glaze regularly designs and installs hybrid facade systems that combine both approaches within a unified aesthetic language." } },
      { "@type": "Question", "name": "Which is better for a showroom facade in India?", "acceptedAnswer": { "@type": "Answer", "text": "For showroom facades where maximum glass visibility and a premium frameless appearance is the priority, structural glazing (4-side SSG or spider glazing) is the preferred choice. The frameless glass look is a signature aesthetic for automotive showrooms, retail flagships, and luxury hotel entries." } },
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
        title="Curtain Wall vs Structural Glazing: Key Differences India – Fine Glaze"
        description="Curtain wall vs structural glazing — detailed comparison for Indian buildings. Cost, aesthetics, performance, installation & which to choose. Expert guide by Fine Glaze."
        canonical="https://fineglaze.com/curtain-wall-vs-structural-glazing"
        keywords="curtain wall vs structural glazing India, SSG vs curtain wall, structural glazing or curtain wall, glass facade types India, curtain wall vs SSG comparison, facade system selection India"
        ogImage="https://images.unsplash.com/photo-1529429617124-95b109e86bb8"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* HERO */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Curtain Wall vs <span className="text-gradient-gold">Structural Glazing</span>
            </h1>
            <p className="text-lg text-white/80 mb-8">Curtain wall systems and structural glazing are both popular glass facade solutions for commercial buildings in India — but they are fundamentally different systems with different aesthetics, costs, and performance profiles. This guide explains the key differences to help architects and developers make the right choice.</p>
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
            src="https://images.unsplash.com/photo-1529429617124-95b109e86bb8"
            alt="Curtain wall vs structural glazing comparison India commercial building Fine Glaze"
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
          
          <h2 className="text-3xl font-bold">What is a Curtain Wall System?</h2>
          <p className="text-muted-foreground">
            A curtain wall is a non-load-bearing facade system comprising aluminium framing members (mullions and transoms) with glass or opaque panel infill. The aluminium frame is visible from the exterior as a grid pattern. Curtain walls can be stick systems (assembled on-site) or unitized (factory-assembled panels).
          </p>
          <p className="text-muted-foreground mt-4">
            Curtain walls excel in: high-rise applications where structural rigidity is critical; large areas requiring efficient weather-tight installation; projects requiring opaque spandrel panels integrated with glazed vision panels; and buildings where future glass replacement accessibility is important. The visible aluminium grid provides positive visual framing and can be used as an architectural design element.
          </p>
          <h2 className="text-3xl font-bold mt-10">What is Structural Glazing?</h2>
          <p className="text-muted-foreground mt-4">
            Structural glazing (SSG — Structural Silicone Glazing) bonds glass panels directly to an aluminium frame using high-strength structural silicone sealant, eliminating visible exterior fixings. The result is a clean, flush glass surface with no protruding frames or caps.
          </p>
          <p className="text-muted-foreground mt-4">
            Structural glazing excels in: showrooms, retail facades, and hospitality buildings where maximum glass transparency and premium aesthetics are priorities; lower-rise buildings and landmark entries; projects where minimal visual interruption of the glass plane is desired; and situations where the facade must appear as a continuous reflective surface.
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
                <tr className="bg-muted/30"><td className="border border-border p-3">Typical Height</td><td className="border border-border p-3">Any — 2 to 60+ storeys</td><td className="border border-border p-3">Ideal up to 20 storeys</td></tr>
                <tr><td className="border border-border p-3">Cost</td><td className="border border-border p-3">Rs 350–1,200/sq ft</td><td className="border border-border p-3">Rs 300–900/sq ft</td></tr>
                <tr className="bg-muted/30"><td className="border border-border p-3">Glass Replacement</td><td className="border border-border p-3">Easier (mechanical fix)</td><td className="border border-border p-3">Requires sealant cutting</td></tr>
                <tr><td className="border border-border p-3">Opaque Panels</td><td className="border border-border p-3">Yes (spandrels)</td><td className="border border-border p-3">Opaque backing only</td></tr>
                <tr className="bg-muted/30"><td className="border border-border p-3">Aesthetic</td><td className="border border-border p-3">Classic framed look</td><td className="border border-border p-3">Seamless glass plane</td></tr>
              </tbody>
            </table>
          </div>
    
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-10 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-4">
              <div key="Side-by-Side System Comparison" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Side-by-Side System Comparison</span></div>
              <div key="Cost Analysis Both Systems" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Cost Analysis Both Systems</span></div>
              <div key="Height Suitability Guide" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Height Suitability Guide</span></div>
              <div key="Maintenance Considerations" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Maintenance Considerations</span></div>
              <div key="Aesthetic Difference Explained" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Aesthetic Difference Explained</span></div>
              <div key="Fine Glaze Expert Recommendation" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Fine Glaze Expert Recommendation</span></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">Which is cheaper — curtain wall or structural glazing?</h3>
              <p className="text-muted-foreground">Structural glazing (2-side SSG) can be slightly cheaper than curtain wall for simple, low-rise facades (Rs 300-500/sq ft vs Rs 350-650/sq ft for stick system). However, 4-side SSG is comparable in cost to mid-range curtain wall. For high-rise buildings, unitized curtain wall is typically the more practical and cost-competitive solution.</p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">Can curtain wall and structural glazing be combined on one building?</h3>
              <p className="text-muted-foreground">Yes — this is very common. Many buildings use structural glazing for the ground floor showroom or lobby entrance, transitioning to curtain wall for upper floors. Fine Glaze regularly designs and installs hybrid facade systems that combine both approaches within a unified aesthetic language.</p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">Which is better for a showroom facade in India?</h3>
              <p className="text-muted-foreground">For showroom facades where maximum glass visibility and a premium frameless appearance is the priority, structural glazing (4-side SSG or spider glazing) is the preferred choice. The frameless glass look is a signature aesthetic for automotive showrooms, retail flagships, and luxury hotel entries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-12 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-xl font-bold text-slate-800 mb-5">Explore Related Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link key="/curtain-wall-systems" to="/curtain-wall-systems" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Curtain Wall Systems</p><p className="text-xs text-slate-500">Curtain wall systems</p></div></Link>
            <Link key="/structural-glazing" to="/structural-glazing" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Structural Glazing</p><p className="text-xs text-slate-500">Structural glazing</p></div></Link>
            <Link key="/curtain-wall-cost-guide" to="/curtain-wall-cost-guide" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Curtain Wall Cost Guide</p><p className="text-xs text-slate-500">Curtain wall cost guide</p></div></Link>
            <Link key="/commercial-building-facade" to="/commercial-building-facade" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Commercial Facade Guide</p><p className="text-xs text-slate-500">Commercial facade overview</p></div></Link>
            <Link key="/facade-contractor-pune" to="/facade-contractor-pune" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Facade Contractor Pune</p><p className="text-xs text-slate-500">Facade contractor Pune</p></div></Link>
            <Link key="/contact" to="/contact" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Get a Quote</p><p className="text-xs text-slate-500">Free consultation</p></div></Link>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
