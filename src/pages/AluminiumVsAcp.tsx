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
    "description": "ACP vs aluminium cladding compared on weight, finish, durability, fire behaviour and maintenance for Indian buildings. A general guide by Fine Glaze, Pune."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Is ACP cladding banned in India?", "acceptedAnswer": { "@type": "Answer", "text": "ACP cladding is not banned in India, but combustible polyethylene-core panels are restricted on taller buildings under the National Building Code and state fire rules. Fire-retardant mineral-core panels are the usual choice. Confirm limits with your consultant." } },
      { "@type": "Question", "name": "Can ACP cladding be combined with glass on a building?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. ACP panels are often combined with glass windows or curtain wall, for example as spandrel infill, which gives a facade mixing opaque and glazed areas. The details must be coordinated between the cladding and glazing scopes." } },
      { "@type": "Question", "name": "Which lasts longer — aluminium facade or ACP?", "acceptedAnswer": { "@type": "Answer", "text": "Aluminium framing and extrusions generally outlast ACP panels, because coated ACP depends on its coating and panel bond. Actual life depends on finish, exposure, detailing and upkeep, so check the manufacturer's warranty terms." } },
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
        title="ACP vs Aluminium Cladding: Which to Choose | Fine Glaze"
        description="ACP vs aluminium cladding compared on weight, finish, durability, fire behaviour and maintenance for Indian buildings. A general guide by Fine Glaze, Pune."
        canonical="https://fineglaze.com/aluminium-vs-acp-cladding"
        keywords="aluminium facade vs ACP cladding, ACP vs aluminium comparison India, which is better ACP or aluminium, ACP cladding vs glass facade, facade selection guide India"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* HERO */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Aluminium Facade vs <span className="text-gradient-gold">ACP Cladding</span>
            </h1>
            <p className="text-lg text-white/80 mb-8">Choosing between an aluminium facade system and ACP (Aluminium Composite Panel) cladding is one of the most common decisions architects and developers face. Both offer excellent aesthetics and weather protection — but they differ significantly in cost, weight, fire safety, flexibility, and long-term performance.</p>
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
            src="/projects/salsette-27-35-1.webp"
            alt="ACP canopy at ground floor of Salsette-27, Byculla, Mumbai — designed and installed by Fine Glaze"
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
                <tr><td className="border border-border p-3 font-medium">Cost</td><td className="border border-border p-3">Usually higher: more material, glass and labour</td><td className="border border-border p-3">Usually lower for opaque areas</td></tr>
                <tr className="bg-muted/30"><td className="border border-border p-3 font-medium">Fire Safety</td><td className="border border-border p-3">Non-combustible (Class A)</td><td className="border border-border p-3">PE core is combustible; fire-retardant core is usually required on taller buildings</td></tr>
                <tr><td className="border border-border p-3 font-medium">Weight</td><td className="border border-border p-3">Higher (extrusions + glass)</td><td className="border border-border p-3">Very lightweight</td></tr>
                <tr className="bg-muted/30"><td className="border border-border p-3 font-medium">Durability</td><td className="border border-border p-3">Long, with suitable finish and upkeep</td><td className="border border-border p-3">Depends on coating and exposure; see maker warranty</td></tr>
                <tr><td className="border border-border p-3 font-medium">Design Flexibility</td><td className="border border-border p-3">Moderate</td><td className="border border-border p-3">Very high (CNC routing, 3D)</td></tr>
                <tr className="bg-muted/30"><td className="border border-border p-3 font-medium">Glass Integration</td><td className="border border-border p-3">Yes (windows, curtain walls)</td><td className="border border-border p-3">Opaque panels only</td></tr>
                <tr><td className="border border-border p-3 font-medium">Maintenance</td><td className="border border-border p-3">Low</td><td className="border border-border p-3">Low</td></tr>
              </tbody>
            </table>
          </div>
          <h2 className="text-3xl font-bold mt-10">When to Choose ACP Cladding</h2>
          <p className="text-muted-foreground mt-4">
            ACP cladding suits projects where: (1) budget is a primary constraint; (2) the building is low-rise or a fire-retardant core is specified for mid-rise; (3) complex 3D forms or curved cladding are needed; (4) fast installation matters; (5) large opaque areas need covering without glass.
          </p>
          <h2 className="text-3xl font-bold mt-10">When to Choose Aluminium Facade</h2>
          <p className="text-muted-foreground mt-4">
            Aluminium facade systems suit projects where: (1) glass integration (curtain wall, windows) is required; (2) the building is tall and needs structural performance; (3) long-term durability is a priority; (4) the site is coastal and corrosion-resistant systems are needed; (5) thermal performance and energy efficiency are targets.
          </p>
          <h2 className="text-3xl font-bold mt-10">Fire Safety in India: The Critical Difference</h2>
          <p className="text-muted-foreground mt-4">
            Fire safety rules for external cladding in India are strict, and the National Building Code and state regulations set limits on combustible cladding on taller buildings. Fire-retardant mineral-core ACP is the usual choice for external use. Aluminium extrusions are non-combustible. Always confirm the core type and test documents with your consultant and the fire authority.
          </p>
    
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-10 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-4">
              <div key="Cost Comparison Factors" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Cost Comparison Factors</span></div>
              <div key="Fire Safety Analysis India" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Fire Safety Analysis India</span></div>
              <div key="Durability Factors" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Durability Factors</span></div>
              <div key="Design Flexibility Guide" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Design Flexibility Guide</span></div>
              <div key="Building Code Pointers" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Building Code Pointers</span></div>
              <div key="Selection Checklist" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Selection Checklist</span></div>
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
              <p className="text-muted-foreground">ACP cladding is not banned in India, but combustible polyethylene-core panels are restricted on taller buildings under the National Building Code and state fire rules. Fire-retardant mineral-core panels are the usual choice. Confirm limits with your consultant.</p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">Can ACP cladding be combined with glass on a building?</h3>
              <p className="text-muted-foreground">Yes. ACP panels are often combined with glass windows or curtain wall, for example as spandrel infill, which gives a facade mixing opaque and glazed areas. The details must be coordinated between the cladding and glazing scopes.</p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">Which lasts longer — aluminium facade or ACP?</h3>
              <p className="text-muted-foreground">Aluminium framing and extrusions generally outlast ACP panels, because coated ACP depends on its coating and panel bond. Actual life depends on finish, exposure, detailing and upkeep, so check the manufacturer's warranty terms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-12 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-xl font-bold text-slate-800 mb-5">Explore Related Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link key="/aluminium-windows-doors" to="/aluminium-windows-doors" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Aluminium Facade</p><p className="text-xs text-slate-500">Aluminium facade systems</p></div></Link>
            <Link key="/acp-aluminium-cladding" to="/acp-aluminium-cladding" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">ACP Cladding</p><p className="text-xs text-slate-500">ACP cladding systems</p></div></Link>
            <Link key="/curtain-wall-cost-guide" to="/curtain-wall-cost-guide" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Curtain Wall Cost Guide</p><p className="text-xs text-slate-500">Curtain wall pricing India</p></div></Link>
            <Link key="/facade-contractor-pune" to="/facade-contractor-pune" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Facade Contractor Pune</p><p className="text-xs text-slate-500">Facade services Pune</p></div></Link>
            <Link key="/commercial-building-facade" to="/commercial-building-facade" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Commercial Facade Guide</p><p className="text-xs text-slate-500">Commercial facade overview</p></div></Link>
            <Link key="/contact" to="/contact" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Book a call</p><p className="text-xs text-slate-500">Free site assessment</p></div></Link>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
