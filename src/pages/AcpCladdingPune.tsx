import SEO from "@/components/SEO";
import { RelatedProjects } from "@/components/RelatedProjects";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function AcpCladdingPune() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "ACP Cladding Contractor in Pune",
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
    "description": "ACP cladding contractor in Pune for commercial facades, with panel routing and preparation at our own fabrication unit in Pisoli and in-house shop drawings."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is the cost of ACP cladding in Pune?", "acceptedAnswer": { "@type": "Answer", "text": "ACP cladding cost in Pune depends on panel brand, core type (PE or fire-retardant), finish, sub-frame complexity and access. Fine Glaze prepares BOQ-based quotations with brand specifications after reviewing drawings." } },
      { "@type": "Question", "name": "Is FR-grade ACP mandatory in Pune buildings?", "acceptedAnswer": { "@type": "Answer", "text": "Fire-retardant ACP is commonly required for external cladding on taller buildings, but the rule depends on building height, use and local fire regulations. Confirm the requirement with your consultant and fire authority before specifying the core." } },
      { "@type": "Question", "name": "How long does ACP cladding installation take in Pune?", "acceptedAnswer": { "@type": "Answer", "text": "ACP installation time depends on the elevation area, sub-frame complexity, access and weather, so we confirm the programme per project after survey. Panel preparation at our Pisoli unit runs alongside site preparation." } },
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "ACP Cladding Contractor in Pune", "item": "https://fineglaze.com/acp-cladding-pune" }
    ]
  };

  return (
    <Layout darkHero>
      <SEO
        title="ACP Cladding Contractor in Pune, Maharashtra | Fine Glaze"
        description="ACP cladding contractor in Pune for commercial facades, with panel routing and preparation at our own fabrication unit in Pisoli and in-house shop drawings."
        canonical="https://fineglaze.com/acp-cladding-pune"
        keywords="ACP cladding contractor Pune, ACP facade Pune, aluminium composite panel Pune, ACP sheet installation Pune"
        ogImage="https://fineglaze.com/projects/embassy-techzone-40-1.webp"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* HERO */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              ACP Cladding <span className="text-gradient-gold">Contractor in Pune</span>
            </h1>
            <p className="text-lg text-white/80 mb-8">Fine Glaze is an ACP cladding contractor based in Pune, offering aluminium composite panel cladding for commercial buildings, hospitals, offices and residential exteriors. We work with Alubond and other approved panel brands.</p>
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
            src="/projects/embassy-techzone-41-3.webp"
            alt="ACP cladding on the dead wall of Block 2, Embassy Techzone, Hinjewadi, Pune — completed by Fine Glaze"
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
          
          <h2 className="text-3xl font-bold">ACP Cladding in Pune</h2>
          <p className="text-muted-foreground">
            ACP (aluminium composite panel) is a sandwich panel with two thin aluminium sheets bonded to a polyethylene or fire-retardant mineral core. For external cladding, the core type and the fire requirements of the building should be confirmed against the National Building Code, local fire rules and the consultant's specification.
          </p>
          <p className="text-muted-foreground mt-4">
            Our documented ACP work includes ACP cladding at the Nanavati Max Hospital and FIFC Tower in Mumbai, ACP and silicone work at the LTIMindtree Mensa Campus, and spider glazing with ACP cladding at Embassy Techzone, Hinjewadi. In Pune we handle surface preparation, sub-frame fabrication, panel routing and folding, and weather-sealed installation.
          </p>
          <p className="text-muted-foreground mt-4">
            PVDF-coated panels are commonly chosen for external use because the coating resists UV fading and weathering better than polyester finishes. Colour and warranty terms come from the panel manufacturer, so we confirm them from the brand's documents for your project.
          </p>
          <p className="text-muted-foreground mt-4">
            Our scope includes full elevation cladding, canopy and entrance feature cladding, parapet and sunshade cladding, and ACP infill within curtain wall systems. Panel routing and grooving are prepared at our own unit in Pisoli, Pune.
          </p>
          <p className="text-muted-foreground mt-4">
            We take ACP cladding across Pune and PCMC, including Hinjewadi, Kharadi, Undri and Pimpri-Chinchwad. Contact Fine Glaze with drawings for a BOQ-based quotation and brand comparison.
          </p>
    
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-10 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-4">
              <div key="FR-Grade Panel Options" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">FR-Grade Panel Options</span></div>
              <div key="PVDF Coating" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">PVDF Coating</span></div>
              <div key="CNC Routed Designs" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">CNC Routed Designs</span></div>
              <div key="Alubond and Approved Brands" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Alubond and Approved Brands</span></div>
              <div key="Lightweight Sub-Frame System" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Lightweight Sub-Frame System</span></div>
              <div key="Finish and Colour Options" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Finish and Colour Options</span></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">What is the cost of ACP cladding in Pune?</h3>
              <p className="text-muted-foreground">ACP cladding cost in Pune depends on panel brand, core type (PE or fire-retardant), finish, sub-frame complexity and access. Fine Glaze prepares BOQ-based quotations with brand specifications after reviewing drawings.</p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">Is FR-grade ACP mandatory in Pune buildings?</h3>
              <p className="text-muted-foreground">Fire-retardant ACP is commonly required for external cladding on taller buildings, but the rule depends on building height, use and local fire regulations. Confirm the requirement with your consultant and fire authority before specifying the core.</p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">How long does ACP cladding installation take in Pune?</h3>
              <p className="text-muted-foreground">ACP installation time depends on the elevation area, sub-frame complexity, access and weather, so we confirm the programme per project after survey. Panel preparation at our Pisoli unit runs alongside site preparation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-12 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-xl font-bold text-slate-800 mb-5">Explore Related Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link key="/acp-aluminium-cladding" to="/acp-aluminium-cladding" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">ACP Cladding</p><p className="text-xs text-slate-500">Full ACP cladding service</p></div></Link>
            <Link key="/curtain-wall-pune" to="/curtain-wall-pune" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Curtain Wall Pune</p><p className="text-xs text-slate-500">Glass curtain wall Pune</p></div></Link>
            <Link key="/aluminium-windows-doors" to="/aluminium-windows-doors" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Aluminium Facade</p><p className="text-xs text-slate-500">Aluminium facade systems</p></div></Link>
            <Link key="/structural-glazing-pune" to="/structural-glazing-pune" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Structural Glazing Pune</p><p className="text-xs text-slate-500">Structural glazing Pune</p></div></Link>
            <Link key="/facade-contractor-pune" to="/facade-contractor-pune" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Facade Contractor Pune</p><p className="text-xs text-slate-500">Complete facade services</p></div></Link>
            <Link key="/maintenance-services" to="/maintenance-services" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Facade Maintenance</p><p className="text-xs text-slate-500">Cladding maintenance</p></div></Link>
          </div>
        </div>
      </section>

      <RelatedProjects heading="Our cladding work in Pune" locations={["Pune"]} keywords={["ACP", "cladding"]} />
      <CTASection />
    </Layout>
  );
}
