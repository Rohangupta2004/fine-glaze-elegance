import SEO from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function AluminiumVsAcp() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Aluminium Facade vs ACP Cladding: Which is Better for India? – Fine Glaze",
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
    "description": "Aluminium facade vs ACP cladding — detailed comparison of cost, durability, fire safety, aesthetics & maintenance for Indian buildings. Expert guide by Fine Glaze."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Is ACP cladding banned in India?", "acceptedAnswer": { "@type": "Answer", "text": "PE-core ACP is not banned but is restricted to buildings below 15m height under NBC 2016 and state fire regulations. For buildings above 15m, only FR-grade ACP with A2 or B1 mineral core is permitted. Fine Glaze exclusively uses FR-grade ACP for external facades." } },
      { "@type": "Question", "name": "Can ACP cladding be combined with glass on a building?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. The most common combination is ACP spandrel panels combined with glass windows or curtain wall glazing. This creates a cost-effective facade with mixed opacity. Fine Glaze regularly designs and installs combination systems." } },
      { "@type": "Question", "name": "Which lasts longer — aluminium facade or ACP?", "acceptedAnswer": { "@type": "Answer", "text": "Pure aluminium facade systems can last 30-40+ years with minimal maintenance. PVDF-coated ACP panels last 20-25 years before colour degradation. In coastal environments, aluminium extrusions typically outperform ACP in the very long term." } },
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Aluminium Facade vs ACP Cladding: Which is Better for India? – Fine Glaze", "item": "https://fineglaze.com/aluminium-vs-acp-cladding" }
    ]
  };

  return (
    <Layout darkHero>
      <SEO
        title="Aluminium Facade vs ACP Cladding: Which is Better for India? – Fine Glaze"
        description="Aluminium facade vs ACP cladding — detailed comparison of cost, durability, fire safety, aesthetics & maintenance for Indian buildings. Expert guide by Fine Glaze."
        canonical="https://fineglaze.com/aluminium-vs-acp-cladding"
        keywords="aluminium facade vs ACP cladding, ACP vs aluminium comparison India, which is better ACP or aluminium, ACP cladding vs glass facade, facade selection guide India"
        ogImage="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* HERO */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Aluminium Facade vs <span className="text-gradient-gold">ACP Cladding</span>
            </h1>
            <p className="text-lg text-white/80 mb-8">Choosing between an aluminium facade system and ACP (Aluminium Composite Panel) cladding is one of the most common decisions architects and developers face. Both offer excellent aesthetics and weather protection — but they differ significantly in cost, weight, fire safety, flexibility, and long-term performance.</p>
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
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00"
            alt="Aluminium facade vs ACP cladding comparison India buildings Fine Glaze"
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
          
          <h2 className="text-3xl font-bold">Head-to-Head: Aluminium Facade vs ACP Cladding</h2>
          <div className="overflow-x-auto mt-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-3 text-left font-semibold">Parameter</th>
                  <th className="border border-border p-3 text-left font-semibold">Aluminium Facade</th>
                  <th className="border border-border p-3 text-left font-semibold">ACP Cladding</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-border p-3 font-medium">Cost</td><td className="border border-border p-3">Rs 350–1,200/sq ft</td><td className="border border-border p-3">Rs 180–450/sq ft</td></tr>
                <tr className="bg-muted/30"><td className="border border-border p-3 font-medium">Fire Safety</td><td className="border border-border p-3">Non-combustible (Class A)</td><td className="border border-border p-3">PE core combustible; FR-core required above G+2</td></tr>
                <tr><td className="border border-border p-3 font-medium">Weight</td><td className="border border-border p-3">Higher (extrusions + glass)</td><td className="border border-border p-3">Very lightweight (3–4 kg/sq m)</td></tr>
                <tr className="bg-muted/30"><td className="border border-border p-3 font-medium">Durability</td><td className="border border-border p-3">25–40 years</td><td className="border border-border p-3">15–25 years (PVDF)</td></tr>
                <tr><td className="border border-border p-3 font-medium">Design Flexibility</td><td className="border border-border p-3">Moderate</td><td className="border border-border p-3">Very high (CNC routing, 3D)</td></tr>
                <tr className="bg-muted/30"><td className="border border-border p-3 font-medium">Glass Integration</td><td className="border border-border p-3">Yes (windows, curtain walls)</td><td className="border border-border p-3">Opaque panels only</td></tr>
                <tr><td className="border border-border p-3 font-medium">Maintenance</td><td className="border border-border p-3">Low</td><td className="border border-border p-3">Low</td></tr>
              </tbody>
            </table>
          </div>
          <h2 className="text-3xl font-bold mt-10">When to Choose ACP Cladding</h2>
          <p className="text-muted-foreground mt-4">
            ACP cladding is ideal when: (1) Budget is a primary constraint; (2) The project is low-rise (below 15m) or requires FR panels for mid-rise; (3) Complex 3D forms or curved cladding are required; (4) Fast installation is critical; (5) Large opaque facade areas need coverage without glass elements.
          </p>
          <h2 className="text-3xl font-bold mt-10">When to Choose Aluminium Facade</h2>
          <p className="text-muted-foreground mt-4">
            Aluminium facade systems are the right choice when: (1) Glass integration (curtain wall, windows) is required; (2) Building is high-rise (10+ storeys) requiring structural performance; (3) Long-term durability (30+ years) is prioritised; (4) The building is in a coastal zone requiring marine-grade performance; (5) Thermal performance and energy efficiency (LEED) are targets.
          </p>
          <h2 className="text-3xl font-bold mt-10">Fire Safety in India — The Critical Difference</h2>
          <p className="text-muted-foreground mt-4">
            Fire safety regulations in India are increasingly strict following incidents with combustible ACP cladding globally. NBC 2016 mandates FR-grade ACP (A2 or B1 mineral core) for all buildings above 15 metres. PE-core ACP, which is combustible, must not be used on buildings above 3 floors. Aluminium extrusions, by contrast, are inherently non-combustible (Class A) and have no height restriction. Fine Glaze always uses FR-grade ACP for external applications and provides material certification on request.
          </p>
    
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-10 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-4">
              <div key="Detailed Cost Comparison" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Detailed Cost Comparison</span></div>
              <div key="Fire Safety Analysis India" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Fire Safety Analysis India</span></div>
              <div key="Durability Benchmarking" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Durability Benchmarking</span></div>
              <div key="Design Flexibility Guide" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Design Flexibility Guide</span></div>
              <div key="NBC 2016 Compliance" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">NBC 2016 Compliance</span></div>
              <div key="Expert Selection Framework" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Expert Selection Framework</span></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">Is ACP cladding banned in India?</h3>
              <p className="text-muted-foreground">PE-core ACP is not banned but is restricted to buildings below 15m height under NBC 2016 and state fire regulations. For buildings above 15m, only FR-grade ACP with A2 or B1 mineral core is permitted. Fine Glaze exclusively uses FR-grade ACP for external facades.</p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">Can ACP cladding be combined with glass on a building?</h3>
              <p className="text-muted-foreground">Yes. The most common combination is ACP spandrel panels combined with glass windows or curtain wall glazing. This creates a cost-effective facade with mixed opacity. Fine Glaze regularly designs and installs combination systems.</p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">Which lasts longer — aluminium facade or ACP?</h3>
              <p className="text-muted-foreground">Pure aluminium facade systems can last 30-40+ years with minimal maintenance. PVDF-coated ACP panels last 20-25 years before colour degradation. In coastal environments, aluminium extrusions typically outperform ACP in the very long term.</p>
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
            <Link key="/curtain-wall-cost-guide" to="/curtain-wall-cost-guide" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Curtain Wall Cost Guide</p><p className="text-xs text-slate-500">Curtain wall pricing India</p></div></Link>
            <Link key="/facade-contractor-pune" to="/facade-contractor-pune" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Facade Contractor Pune</p><p className="text-xs text-slate-500">Facade services Pune</p></div></Link>
            <Link key="/commercial-building-facade" to="/commercial-building-facade" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Commercial Facade Guide</p><p className="text-xs text-slate-500">Commercial facade overview</p></div></Link>
            <Link key="/contact" to="/contact" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Get a Quote</p><p className="text-xs text-slate-500">Free site assessment</p></div></Link>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
