import SEO from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function PVDFvsPowderCoating() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "PVDF vs Powder Coating for Aluminium Facades in India – Fine Glaze",
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
    "description": "PVDF vs powder coating for aluminium facades — complete comparison for Indian buildings. Durability, cost, UV resistance, coastal performance. Expert guide by Fine Glaze."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Is PVDF coating worth the extra cost in India?", "acceptedAnswer": { "@type": "Answer", "text": "For any commercial building intended to last 15+ years, PVDF coating's lower lifecycle cost almost always justifies the premium. A PVDF-coated facade maintained for 25 years costs less in total than a powder-coated facade that needs full recoating or replacement at 10-12 years." } },
      { "@type": "Question", "name": "Can I repaint powder-coated aluminium facade in India?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, but it requires professional preparation — abrasive blasting or chemical stripping of the old coating, primer application, and re-coating. This is feasible for accessible low-rise facades but very expensive and disruptive for high-rise buildings. PVDF coating's longevity avoids this cost entirely." } },
      { "@type": "Question", "name": "Is anodising better than PVDF for aluminium facades?", "acceptedAnswer": { "@type": "Answer", "text": "Both are high-performance finishes for aluminium. Anodising creates an integral oxide layer (not a paint film) that cannot peel and is highly corrosion-resistant. However, anodising has a limited colour range (clear, bronze, gold, champagne, black) and is less resistant to alkaline cleaning agents. PVDF offers more colour options and equivalent or better UV durability." } },
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "PVDF vs Powder Coating for Aluminium Facades in India – Fine Glaze", "item": "https://fineglaze.com/pvdf-vs-powder-coating-aluminium" }
    ]
  };

  return (
    <Layout darkHero>
      <SEO
        title="PVDF vs Powder Coating for Aluminium Facades in India – Fine Glaze"
        description="PVDF vs powder coating for aluminium facades — complete comparison for Indian buildings. Durability, cost, UV resistance, coastal performance. Expert guide by Fine Glaze."
        canonical="https://fineglaze.com/pvdf-vs-powder-coating-aluminium"
        keywords="PVDF vs powder coating aluminium India, PVDF coating facade India, powder coating aluminium facade, aluminium finish guide India, PVDF Kynar aluminium building, facade coating comparison"
        ogImage="https://images.unsplash.com/photo-1541888946425-d81bb19240f5"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* HERO */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              PVDF vs Powder Coating <span className="text-gradient-gold">for Aluminium Facades</span>
            </h1>
            <p className="text-lg text-white/80 mb-8">When specifying aluminium facades, curtain walls, or ACP cladding in India, the choice between PVDF (Polyvinylidene Fluoride) and polyester powder coating is one of the most important finish decisions. This guide explains the key differences and helps you make the right choice for your project.</p>
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
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5"
            alt="PVDF vs powder coating aluminium facade India comparison Fine Glaze"
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
          
          <h2 className="text-3xl font-bold">What is PVDF Coating?</h2>
          <p className="text-muted-foreground">
            PVDF (Polyvinylidene Fluoride), also known as Kynar 500 or Hylar 5000, is a high-performance fluoropolymer coating applied to aluminium extrusions and ACP panels. It is the gold standard for architectural aluminium facade finishes globally, specified by almost all premium commercial projects, LEED-rated buildings, and coastal installations.
          </p>
          <p className="text-muted-foreground mt-4">
            PVDF coatings achieve their superior performance from the chemical inertness of the fluoropolymer molecule — essentially impervious to UV radiation, acid rain, industrial pollution, saline air, and temperature extremes. A proper 70% PVDF coating (minimum film thickness 25 microns) can retain 90%+ of original colour and gloss after 20+ years of outdoor exposure in India.
          </p>
          <h2 className="text-3xl font-bold mt-10">What is Powder Coating for Aluminium?</h2>
          <p className="text-muted-foreground mt-4">
            Polyester powder coating is the most widely used architectural coating for aluminium in India — lower cost, available in thousands of colours, and adequate performance for moderate environments. Powder coating involves electrostatically applying dry powder to pre-treated aluminium and curing in an oven, creating a smooth or textured finish.
          </p>
          <p className="text-muted-foreground mt-4">
            Standard polyester powder coating on aluminium retains acceptable appearance for 7-12 years in inland Indian cities. In coastal environments like Mumbai, this degrades to 5-8 years before fading and chalking become visible. Premium super-durable polyester powder coatings offer better UV resistance, extending life to 12-15 years.
          </p>
          <div className="overflow-x-auto mt-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-3 text-left font-semibold">Parameter</th>
                  <th className="border border-border p-3 text-left font-semibold">PVDF Coating</th>
                  <th className="border border-border p-3 text-left font-semibold">Powder Coating</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-border p-3">Service Life (inland)</td><td className="border border-border p-3">20–25+ years</td><td className="border border-border p-3">8–12 years</td></tr>
                <tr className="bg-muted/30"><td className="border border-border p-3">Service Life (coastal)</td><td className="border border-border p-3">15–20+ years</td><td className="border border-border p-3">5–8 years</td></tr>
                <tr><td className="border border-border p-3">UV Resistance</td><td className="border border-border p-3">Excellent</td><td className="border border-border p-3">Good to moderate</td></tr>
                <tr className="bg-muted/30"><td className="border border-border p-3">Colour Range</td><td className="border border-border p-3">Limited (standard range)</td><td className="border border-border p-3">Unlimited (RAL, custom)</td></tr>
                <tr><td className="border border-border p-3">Cost Premium</td><td className="border border-border p-3">30–60% over powder</td><td className="border border-border p-3">Base price</td></tr>
                <tr className="bg-muted/30"><td className="border border-border p-3">LEED Compliance</td><td className="border border-border p-3">Yes (low-emission)</td><td className="border border-border p-3">Depends on product</td></tr>
              </tbody>
            </table>
          </div>
          <h2 className="text-3xl font-bold mt-10">Fine Glaze Recommendation</h2>
          <p className="text-muted-foreground mt-4">
            Fine Glaze recommends PVDF coating for: all coastal projects (Mumbai, Navi Mumbai, Goa); buildings with 15+ year design life and low maintenance access; LEED certified projects; and premium commercial or institutional buildings where long-term appearance is critical. Powder coating is appropriate for: inland projects on lower-rise buildings with accessible maintenance; projects with strict budget constraints; and temporary or short-term-use structures.
          </p>
    
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-10 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-4">
              <div key="Detailed PVDF vs Powder Analysis" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Detailed PVDF vs Powder Analysis</span></div>
              <div key="Cost vs Lifespan Comparison" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Cost vs Lifespan Comparison</span></div>
              <div key="Coastal Climate Guidance" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Coastal Climate Guidance</span></div>
              <div key="LEED Compliance Info" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">LEED Compliance Info</span></div>
              <div key="Colour Range Assessment" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Colour Range Assessment</span></div>
              <div key="Fine Glaze Specification Advice" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Fine Glaze Specification Advice</span></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">Is PVDF coating worth the extra cost in India?</h3>
              <p className="text-muted-foreground">For any commercial building intended to last 15+ years, PVDF coating's lower lifecycle cost almost always justifies the premium. A PVDF-coated facade maintained for 25 years costs less in total than a powder-coated facade that needs full recoating or replacement at 10-12 years.</p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">Can I repaint powder-coated aluminium facade in India?</h3>
              <p className="text-muted-foreground">Yes, but it requires professional preparation — abrasive blasting or chemical stripping of the old coating, primer application, and re-coating. This is feasible for accessible low-rise facades but very expensive and disruptive for high-rise buildings. PVDF coating's longevity avoids this cost entirely.</p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">Is anodising better than PVDF for aluminium facades?</h3>
              <p className="text-muted-foreground">Both are high-performance finishes for aluminium. Anodising creates an integral oxide layer (not a paint film) that cannot peel and is highly corrosion-resistant. However, anodising has a limited colour range (clear, bronze, gold, champagne, black) and is less resistant to alkaline cleaning agents. PVDF offers more colour options and equivalent or better UV durability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-12 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-xl font-bold text-slate-800 mb-5">Explore Related Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link key="/aluminium-facade" to="/aluminium-facade" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Aluminium Facade</p><p className="text-xs text-slate-500">Aluminium facade systems</p></div></Link>
            <Link key="/acp-aluminium-cladding" to="/acp-aluminium-cladding" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">ACP Cladding</p><p className="text-xs text-slate-500">ACP cladding systems</p></div></Link>
            <Link key="/maintenance-services" to="/maintenance-services" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Facade Maintenance</p><p className="text-xs text-slate-500">Facade AMC</p></div></Link>
            <Link key="/aluminium-vs-acp-cladding" to="/aluminium-vs-acp-cladding" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Aluminium vs ACP Guide</p><p className="text-xs text-slate-500">System comparison</p></div></Link>
            <Link key="/facade-contractor-pune" to="/facade-contractor-pune" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Facade Contractor Pune</p><p className="text-xs text-slate-500">Facade contractor Pune</p></div></Link>
            <Link key="/contact" to="/contact" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Get a Quote</p><p className="text-xs text-slate-500">Free consultation</p></div></Link>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
