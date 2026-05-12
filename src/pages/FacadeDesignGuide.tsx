import SEO from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function FacadeDesignGuide() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Building Facade Design Guide India 2024",
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
    "description": "Complete facade design guide for India 2024. Principles, materials, energy performance, regulatory requirements & best practices for commercial and residential buildings."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What WWR (Window-to-Wall Ratio) is recommended for Indian commercial buildings?", "acceptedAnswer": { "@type": "Answer", "text": "ECBC 2017 recommends maximum 40% WWR for composite climate zones (Pune, Delhi, Hyderabad) and 35% for hot-humid coastal zones (Mumbai, Chennai, Kochi). Higher WWR requires Low-E glass with SHGC below 0.25 to meet energy compliance targets." } },
      { "@type": "Question", "name": "How do I choose the right glass for a facade in India?", "acceptedAnswer": { "@type": "Answer", "text": "Key parameters: Solar Heat Gain Coefficient (SHGC) — below 0.35 for most Indian climates; Visible Light Transmittance (VLT) — above 40% for daylighting quality; U-value — below 2.0 W/m2K for DGU. Fine Glaze works with facade consultants to select glass that balances energy performance, glare control, and aesthetic requirements." } },
      { "@type": "Question", "name": "What is a facade consultant and do I need one for my project?", "acceptedAnswer": { "@type": "Answer", "text": "A facade consultant (or facade engineer) specialises in the technical design of building envelopes, including structural analysis, thermal modelling, and specification. For buildings above 6 storeys or with complex geometry, engaging a facade consultant is strongly recommended. Fine Glaze regularly collaborates with India's leading facade consultants on large projects." } },
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Building Facade Design Guide India 2024", "item": "https://fineglaze.com/facade-design-guide" }
    ]
  };

  return (
    <Layout darkHero>
      <SEO
        title="Building Facade Design Guide India 2024 | Principles & Materials – Fine Glaze"
        description="Complete facade design guide for India 2024. Principles, materials, energy performance, regulatory requirements & best practices for commercial and residential buildings."
        canonical="https://fineglaze.com/facade-design-guide"
        keywords="facade design guide India, building facade design principles India, commercial facade design India, window wall ratio India, facade design ECBC India, glass facade design India 2024"
        ogImage="https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* HERO */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Building Facade <span className="text-gradient-gold">Design Guide India</span>
            </h1>
            <p className="text-lg text-white/80 mb-8">Designing a building facade in India requires balancing architectural vision, structural engineering, energy performance, fire safety regulations, local climate conditions, and construction budget. This comprehensive guide covers all the key principles and best practices for facade design in the Indian context.</p>
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
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
            alt="Building facade design guide India commercial architecture Fine Glaze"
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
          
          <h2 className="text-3xl font-bold">Facade Design Principles for Indian Buildings</h2>
          <p className="text-muted-foreground">
            A well-designed facade is more than an aesthetic choice — it is a multi-performance system. In the Indian context, facade design must address: solar heat gain (India receives 4–6 kWh/sq m/day of solar radiation); monsoon weather resistance (wind-driven rain, high humidity); seismic resilience (Zones II–V across India); fire safety (NBC 2016); and long-term durability in a range of climate zones from coastal to semi-arid.
          </p>
          <h3 className="text-xl font-bold mt-8 mb-3">Glass-to-Wall Ratio (Window-to-Wall Ratio)</h3>
          <p className="text-muted-foreground">
            The Window-to-Wall Ratio (WWR) is one of the most important facade design parameters. ECBC (Energy Conservation Building Code) 2017 mandates maximum WWR values by climate zone for commercial buildings. For composite climate (Pune, Delhi): maximum 40% WWR. For hot-humid climate (Mumbai, Chennai): maximum 35% WWR. Higher WWR requires compensating Low-E glass with lower SHGC values.
          </p>
          <h3 className="text-xl font-bold mt-8 mb-3">Solar Shading — Reducing Cooling Load</h3>
          <p className="text-muted-foreground mt-4">
            Fixed horizontal shading (chajjas) over south-facing windows can reduce solar heat gain by 30-50%. Vertical fins on east and west facades control low-angle morning and evening sun. Integrated aluminium louvres and brise-soleils combine shading with architectural character. Fine Glaze designs and installs custom aluminium shading systems as part of integrated facade packages.
          </p>
          <h3 className="text-xl font-bold mt-8 mb-3">Facade Modularity and Buildability</h3>
          <p className="text-muted-foreground mt-4">
            Commercial facades should be modular — based on a regular structural bay grid (typically 1.2m or 1.5m module for stick systems; 1.2m x 3.0m to 1.5m x 3.6m for unitized panels). Modular design reduces fabrication waste, simplifies installation, and enables efficient future maintenance and panel replacement. Fine Glaze advises architects on optimising bay dimensions during the design development stage to reduce overall facade cost.
          </p>
    
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-10 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-4">
              <div key="Window-to-Wall Ratio Guidance" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Window-to-Wall Ratio Guidance</span></div>
              <div key="Solar Shading Design" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Solar Shading Design</span></div>
              <div key="ECBC 2017 Compliance" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">ECBC 2017 Compliance</span></div>
              <div key="Modular Facade Planning" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Modular Facade Planning</span></div>
              <div key="Climate Zone Optimisation" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Climate Zone Optimisation</span></div>
              <div key="Material Selection Framework" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Material Selection Framework</span></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">What WWR (Window-to-Wall Ratio) is recommended for Indian commercial buildings?</h3>
              <p className="text-muted-foreground">ECBC 2017 recommends maximum 40% WWR for composite climate zones (Pune, Delhi, Hyderabad) and 35% for hot-humid coastal zones (Mumbai, Chennai, Kochi). Higher WWR requires Low-E glass with SHGC below 0.25 to meet energy compliance targets.</p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">How do I choose the right glass for a facade in India?</h3>
              <p className="text-muted-foreground">Key parameters: Solar Heat Gain Coefficient (SHGC) — below 0.35 for most Indian climates; Visible Light Transmittance (VLT) — above 40% for daylighting quality; U-value — below 2.0 W/m2K for DGU. Fine Glaze works with facade consultants to select glass that balances energy performance, glare control, and aesthetic requirements.</p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">What is a facade consultant and do I need one for my project?</h3>
              <p className="text-muted-foreground">A facade consultant (or facade engineer) specialises in the technical design of building envelopes, including structural analysis, thermal modelling, and specification. For buildings above 6 storeys or with complex geometry, engaging a facade consultant is strongly recommended. Fine Glaze regularly collaborates with India's leading facade consultants on large projects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-12 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-xl font-bold text-slate-800 mb-5">Explore Related Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link key="/curtain-wall-systems" to="/curtain-wall-systems" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Curtain Wall Systems</p><p className="text-xs text-slate-500">Curtain wall service</p></div></Link>
            <Link key="/commercial-building-facade" to="/commercial-building-facade" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Commercial Facade Guide</p><p className="text-xs text-slate-500">Commercial facade overview</p></div></Link>
            <Link key="/aluminium-vs-acp-cladding" to="/aluminium-vs-acp-cladding" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Aluminium vs ACP Guide</p><p className="text-xs text-slate-500">Material comparison</p></div></Link>
            <Link key="/pvdf-vs-powder-coating-aluminium" to="/pvdf-vs-powder-coating-aluminium" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">PVDF vs Powder Coating</p><p className="text-xs text-slate-500">Coating guide</p></div></Link>
            <Link key="/structural-glazing" to="/structural-glazing" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Structural Glazing</p><p className="text-xs text-slate-500">Structural glazing</p></div></Link>
            <Link key="/facade-contractor-pune" to="/facade-contractor-pune" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Facade Contractor Pune</p><p className="text-xs text-slate-500">Facade contractor</p></div></Link>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
