import SEO from "@/components/SEO";
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
    "description": "ACP cladding contractor in Pune. Fire-retardant aluminium composite panels, PVDF finishes, CNC routing. NBC 2016 compliant. Free site visit."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is the cost of ACP cladding in Pune?", "acceptedAnswer": { "@type": "Answer", "text": "ACP cladding in Pune costs Rs 180-450 per sq ft installed, depending on panel brand, core type (PE vs FR), finish quality (polyester vs PVDF), and sub-frame complexity. Fine Glaze provides detailed BOQ-based quotations with brand specifications." } },
      { "@type": "Question", "name": "Is FR-grade ACP mandatory in Pune buildings?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. As per NBC 2016 and Maharashtra Fire Safety regulations, buildings above 15 metres or G+2 floors must use FR ACP panels with A2 or B1 core classification for external cladding. Fine Glaze uses only certified FR panels." } },
      { "@type": "Question", "name": "How long does ACP cladding installation take in Pune?", "acceptedAnswer": { "@type": "Answer", "text": "For a typical 3-4 storey commercial building (300-500 sq m), ACP cladding takes 2-3 weeks. Larger projects of 1000+ sq m take 4-6 weeks. Fabrication and site preparation run in parallel for faster completion." } },
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
        title="ACP Cladding Contractor in Pune | FR-Grade Aluminium Composite – Fine Glaze"
        description="ACP cladding contractor in Pune. Fire-retardant aluminium composite panels, PVDF finishes, CNC routing. NBC 2016 compliant. Free site visit."
        canonical="https://fineglaze.com/acp-cladding-pune"
        keywords="ACP cladding contractor Pune, aluminium composite panel Pune, ACP cladding price Pune, FR grade ACP Pune, PVDF ACP cladding Maharashtra, ACP contractor Hinjewadi"
        ogImage="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* HERO */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              ACP Cladding <span className="text-gradient-gold">Contractor in Pune</span>
            </h1>
            <p className="text-lg text-white/80 mb-8">Fine Glaze is a leading ACP cladding contractor in Pune, providing fire-retardant aluminium composite panel cladding for commercial buildings, retail showrooms, hospitals, corporate offices, and residential exteriors. We work with premium brands including Aludecor, Viva, Alstone, and Alubond.</p>
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
            alt="ACP aluminium composite panel cladding Pune - Fine Glaze"
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
          
          <h2 className="text-3xl font-bold">ACP Cladding Expertise Across Pune</h2>
          <p className="text-muted-foreground">
            ACP (Aluminium Composite Panels) are 3-layer sandwich panels — two thin aluminium sheets bonded to a polyethylene or fire-retardant (FR) mineral core. For buildings above 15 metres, NBC 2016 mandates FR-grade cores (A2 or B1 classification). Fine Glaze exclusively uses FR-grade panels for all external cladding on buildings above ground + 2 floors.
          </p>
          <p className="text-muted-foreground mt-4">
            Our Pune ACP projects span brand showrooms on MG Road and Baner Road, corporate office parks in Hinjewadi and Kharadi, hospital exteriors, and residential compound walls. We handle complete turnkey execution from surface preparation, sub-frame fabrication, panel routing, folding, and final weather-sealed installation.
          </p>
          <p className="text-muted-foreground mt-4">
            PVDF (Polyvinylidene Fluoride) coated ACP panels are strongly recommended for Pune's climate — the PVDF coating resists UV fading, acid rain, and humidity, maintaining colour vibrancy for <strong>20+ years without repainting</strong>. We offer 300+ colour options including metallic, brushed, mirror, and wood-grain finishes.
          </p>
          <p className="text-muted-foreground mt-4">
            Fine Glaze's Pune ACP cladding projects include complete building elevation cladding, canopy and entrance feature cladding, signage fascia systems, parapet and sunshade cladding, and ACP spandrel infill panels within curtain wall systems. Our experienced Pune fabrication team ensures precise CNC-routed panel edges and consistent joint widths for a professional finish.
          </p>
          <p className="text-muted-foreground mt-4">
            We serve all Pune zones for ACP cladding — from <strong>Hinjewadi's tech parks</strong> and <strong>Kharadi's commercial corridor</strong> to <strong>Undri's residential developments</strong> and <strong>Pimpri-Chinchwad's industrial sector</strong>. Contact Fine Glaze for a detailed BOQ and brand comparison before making your ACP panel selection.
          </p>
    
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-10 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-4">
              <div key="FR-Grade A2/B1 Panels" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">FR-Grade A2/B1 Panels</span></div>
              <div key="PVDF Coating" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">PVDF Coating</span></div>
              <div key="CNC Routed Designs" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">CNC Routed Designs</span></div>
              <div key="Aludecor / Alubond / Viva" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Aludecor / Alubond / Viva</span></div>
              <div key="Lightweight Sub-Frame System" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Lightweight Sub-Frame System</span></div>
              <div key="300+ Colour Options" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">300+ Colour Options</span></div>
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
              <p className="text-muted-foreground">ACP cladding in Pune costs Rs 180-450 per sq ft installed, depending on panel brand, core type (PE vs FR), finish quality (polyester vs PVDF), and sub-frame complexity. Fine Glaze provides detailed BOQ-based quotations with brand specifications.</p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">Is FR-grade ACP mandatory in Pune buildings?</h3>
              <p className="text-muted-foreground">Yes. As per NBC 2016 and Maharashtra Fire Safety regulations, buildings above 15 metres or G+2 floors must use FR ACP panels with A2 or B1 core classification for external cladding. Fine Glaze uses only certified FR panels.</p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">How long does ACP cladding installation take in Pune?</h3>
              <p className="text-muted-foreground">For a typical 3-4 storey commercial building (300-500 sq m), ACP cladding takes 2-3 weeks. Larger projects of 1000+ sq m take 4-6 weeks. Fabrication and site preparation run in parallel for faster completion.</p>
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
            <Link key="/aluminium-facade" to="/aluminium-facade" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Aluminium Facade</p><p className="text-xs text-slate-500">Aluminium facade systems</p></div></Link>
            <Link key="/structural-glazing-pune" to="/structural-glazing-pune" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Structural Glazing Pune</p><p className="text-xs text-slate-500">Structural glazing Pune</p></div></Link>
            <Link key="/facade-contractor-pune" to="/facade-contractor-pune" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Facade Contractor Pune</p><p className="text-xs text-slate-500">Complete facade services</p></div></Link>
            <Link key="/maintenance-services" to="/maintenance-services" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Facade Maintenance</p><p className="text-xs text-slate-500">Cladding maintenance</p></div></Link>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
