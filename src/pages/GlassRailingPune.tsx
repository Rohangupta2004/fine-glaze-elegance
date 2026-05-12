import SEO from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function GlassRailingPune() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Glass Railing Contractor in Pune",
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
    "description": "Frameless toughened glass railing contractor in Pune. Balcony, staircase & terrace railings for residential & commercial buildings. IS:2553 compliant. Free site visit."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is the cost of glass railing in Pune?", "acceptedAnswer": { "@type": "Answer", "text": "Glass railing in Pune costs Rs 800-2500 per running foot depending on system type (frameless vs post system), glass thickness, hardware finish, and site conditions. Frameless systems start from Rs 1200/running ft installed." } },
      { "@type": "Question", "name": "Is toughened glass railing safe for balconies in Pune?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, when properly specified. Fine Glaze uses toughened + laminated glass compliant with IS:2553 Part 1. Even if broken, the PVB interlayer holds glass in place, preventing shard fall risk — critical for elevated balconies." } },
      { "@type": "Question", "name": "Do glass railings need maintenance in Pune?", "acceptedAnswer": { "@type": "Answer", "text": "Glass railings are low-maintenance. Regular cleaning with mild detergent is sufficient. Stainless steel hardware should be checked annually. Sealant joints at the base channel should be re-done every 7-10 years as preventive maintenance." } },
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Glass Railing Contractor in Pune", "item": "https://fineglaze.com/glass-railing-pune" }
    ]
  };

  return (
    <Layout darkHero>
      <SEO
        title="Glass Railing Contractor in Pune | Frameless & Framed Railings – Fine Glaze"
        description="Frameless toughened glass railing contractor in Pune. Balcony, staircase & terrace railings for residential & commercial buildings. IS:2553 compliant. Free site visit."
        canonical="https://fineglaze.com/glass-railing-pune"
        keywords="glass railing contractor Pune, frameless glass railing Pune, balcony glass railing Pune, toughened glass railing Pune, staircase glass railing Pune, glass railing price Pune"
        ogImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* HERO */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Glass Railing <span className="text-gradient-gold">Contractor in Pune</span>
            </h1>
            <p className="text-lg text-white/80 mb-8">Fine Glaze installs premium frameless and semi-frameless glass railing systems across Pune for residential apartments, commercial offices, hotels, shopping centres, and public spaces. Our glass railings combine toughened safety glass with precision-engineered stainless steel fittings.</p>
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
            alt="Frameless glass railing balcony Pune apartment - Fine Glaze"
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
          
          <h2 className="text-3xl font-bold">Premium Glass Railings for Pune's Best Buildings</h2>
          <p className="text-muted-foreground">
            Glass railings are the defining feature of premium apartments, penthouses, and commercial lobbies across Pune's upscale developments. Fine Glaze offers multiple system types: fully frameless glass railings with concealed base channels, handrail-top-fix systems for balconies, stainless steel post systems with glass infill, and structural glass balustrades.
          </p>
          <p className="text-muted-foreground mt-4">
            Safety is paramount. All our glass railing installations use <strong>toughened + laminated glass (10mm toughened + 10mm toughened with PVB interlayer)</strong> or 12mm heat-soaked toughened glass, compliant with IS:2553 and NBC 2016 fall protection requirements. Every installation is load-tested to 0.74 kN/m horizontal thrust.
          </p>
          <p className="text-muted-foreground mt-4">
            We serve <strong>residential projects</strong> in Wakad, Baner, Kharadi, Viman Nagar, Koregaon Park, and Undri, as well as <strong>commercial projects</strong> in Hinjewadi IT Park, Magarpatta Cybercity, and Pune's hospitality sector. Our stainless steel fittings are available in mirror polish, satin finish, and PVD gold/black coating.
          </p>
          <p className="text-muted-foreground mt-4">
            Fine Glaze handles complete glass railing project execution — from site measurement and structural check, glass procurement (toughened/laminated to exact sizes), hardware supply and fabrication, installation, and silicone joint finishing. Our Pune team can typically complete a standard apartment balcony railing installation in 1-2 days per floor.
          </p>
          <p className="text-muted-foreground mt-4">
            For Pune developers and builders, we offer competitive rates for bulk glass railing contracts across multiple floors or multiple buildings in a project. Our team has completed glass railing installations on Pune projects of up to 30 floors with consistent quality and finish standards across all levels.
          </p>
    
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-10 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-4">
              <div key="Frameless Glass Railings" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Frameless Glass Railings</span></div>
              <div key="Toughened + Laminated Glass" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Toughened + Laminated Glass</span></div>
              <div key="SS 316 Marine Grade Fittings" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">SS 316 Marine Grade Fittings</span></div>
              <div key="Balcony & Staircase Systems" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Balcony & Staircase Systems</span></div>
              <div key="IS:2553 Compliant" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">IS:2553 Compliant</span></div>
              <div key="PVD Coated Hardware Options" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">PVD Coated Hardware Options</span></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">What is the cost of glass railing in Pune?</h3>
              <p className="text-muted-foreground">Glass railing in Pune costs Rs 800-2500 per running foot depending on system type (frameless vs post system), glass thickness, hardware finish, and site conditions. Frameless systems start from Rs 1200/running ft installed.</p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">Is toughened glass railing safe for balconies in Pune?</h3>
              <p className="text-muted-foreground">Yes, when properly specified. Fine Glaze uses toughened + laminated glass compliant with IS:2553 Part 1. Even if broken, the PVB interlayer holds glass in place, preventing shard fall risk — critical for elevated balconies.</p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">Do glass railings need maintenance in Pune?</h3>
              <p className="text-muted-foreground">Glass railings are low-maintenance. Regular cleaning with mild detergent is sufficient. Stainless steel hardware should be checked annually. Sealant joints at the base channel should be re-done every 7-10 years as preventive maintenance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-12 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-xl font-bold text-slate-800 mb-5">Explore Related Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link key="/glass-railings" to="/glass-railings" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Glass Railings</p><p className="text-xs text-slate-500">Full glass railing service</p></div></Link>
            <Link key="/structural-glazing-pune" to="/structural-glazing-pune" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Structural Glazing Pune</p><p className="text-xs text-slate-500">Structural glazing systems</p></div></Link>
            <Link key="/facade-contractor-pune" to="/facade-contractor-pune" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Facade Contractor Pune</p><p className="text-xs text-slate-500">Complete facade solutions</p></div></Link>
            <Link key="/acp-cladding-pune" to="/acp-cladding-pune" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">ACP Cladding Pune</p><p className="text-xs text-slate-500">ACP panel facades</p></div></Link>
            <Link key="/curtain-wall-pune" to="/curtain-wall-pune" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Curtain Wall Pune</p><p className="text-xs text-slate-500">Glass curtain walls</p></div></Link>
            <Link key="/maintenance-services" to="/maintenance-services" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Facade Maintenance</p><p className="text-xs text-slate-500">Glass railing maintenance</p></div></Link>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
