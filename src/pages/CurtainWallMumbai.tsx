import SEO from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function CurtainWallMumbai() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Curtain Wall Glazing Contractor in Mumbai",
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
    "description": "Curtain wall contractor in Mumbai. Unitized & stick system glazing for BKC, Andheri, Powai & Lower Parel. Cyclone Zone IV/V engineered. Free site visit."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What wind load standards apply to curtain walls in Mumbai?", "acceptedAnswer": { "@type": "Answer", "text": "Mumbai falls in IS:875 Part 3 Wind Zone IV (basic wind speed 44 m/s). All Fine Glaze curtain wall systems for Mumbai are designed for this wind zone with gust factors for building height. Above 30 storeys, CFD analysis is used for accurate wind pressure coefficients." } },
      { "@type": "Question", "name": "How does Fine Glaze handle curtain wall logistics in Mumbai?", "acceptedAnswer": { "@type": "Answer", "text": "Fine Glaze uses just-in-time delivery, crane coordination with building management, night shifts for road deliveries, and pre-positioned mobile cranes for efficient installation without disrupting building occupants or street traffic." } },
      { "@type": "Question", "name": "Does Fine Glaze provide curtain wall refurbishment in Mumbai?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We offer full curtain wall refurbishment including sealant replacement, glass panel replacement, gasket renewal, and frame recladding for older Mumbai commercial buildings needing facade upgrades." } },
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Curtain Wall Glazing Contractor in Mumbai", "item": "https://fineglaze.com/curtain-wall-mumbai" }
    ]
  };

  return (
    <Layout darkHero>
      <SEO
        title="Curtain Wall Glazing Contractor in Mumbai | Fine Glaze"
        description="Curtain wall contractor in Mumbai. Unitized & stick system glazing for BKC, Andheri, Powai & Lower Parel. Cyclone Zone IV/V engineered. Free site visit."
        canonical="https://fineglaze.com/curtain-wall-mumbai"
        keywords="curtain wall contractor Mumbai, unitized curtain wall Mumbai, glass curtain wall BKC, curtain wall glazing Andheri, facade contractor Lower Parel, curtain wall Powai, high-rise curtain wall Mumbai"
        ogImage="https://images.unsplash.com/photo-1541888946425-d81bb19240f5"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* HERO */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Curtain Wall Glazing <span className="text-gradient-gold">Contractor in Mumbai</span>
            </h1>
            <p className="text-lg text-white/80 mb-8">Fine Glaze delivers engineering-grade curtain wall glazing systems in Mumbai — from complex unitized towers in BKC to stick system installations in Andheri's commercial belt. All Mumbai curtain walls are specifically engineered for coastal wind loads, cyclone zone requirements, and high-salinity environment.</p>
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
            alt="Curtain wall glazing Mumbai high-rise BKC - Fine Glaze contractor"
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
          
          <h2 className="text-3xl font-bold">Mumbai High-Rise Curtain Wall Specialists</h2>
          <p className="text-muted-foreground">
            Mumbai is one of India's most demanding environments for facade systems — combining high-rise density, coastal wind loads (Zone IV/V), monsoon rainfall intensity, and saline air. Fine Glaze's Mumbai curtain wall systems are engineered from the ground up for these conditions, using marine-grade components, heavy-duty EPDM gaskets, and coastal-certified structural sealants.
          </p>
          <p className="text-muted-foreground mt-4">
            Our Mumbai curtain wall portfolio includes prestigious projects in <strong>BKC</strong> (corporate towers), <strong>Lower Parel</strong> (premium residential and commercial high-rises), <strong>Andheri SEEPZ &amp; MIDC</strong> (industrial and tech campus facades), and <strong>Powai</strong> (lakeside corporate parks). Each project undergoes independent third-party water penetration and air infiltration testing per ASTM E331 / IS:11197 standards.
          </p>
          <p className="text-muted-foreground mt-4">
            For Mumbai high-rises above 30 storeys, Fine Glaze recommends <strong>unitized curtain wall systems</strong> with inter-lock pressure equalisation — the industry gold standard for tall buildings in cyclone-prone coastal zones. This system design prevents water ingress even at wind speeds up to 220 km/h, far exceeding Mumbai's design wind speed of 44 m/s.
          </p>
          <p className="text-muted-foreground mt-4">
            Glass selection is critical in Mumbai's coastal environment. Fine Glaze specifies Low-E DGU glass with argon fill for all BKC and CBD towers, delivering LEED EAc1 energy performance credits while maintaining high visible light transmittance. For residential towers near the seafront, we recommend tinted glass with 30-40% solar heat gain coefficient (SHGC) to reduce cooling loads.
          </p>
          <p className="text-muted-foreground mt-4">
            Fine Glaze provides complete Mumbai curtain wall services: structural design coordination, shop drawings, material procurement, factory fabrication, logistics management (including crane and gondola planning for tight urban sites), installation, testing, and post-completion AMC.
          </p>
    
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-10 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-4">
              <div key="Cyclone Zone IV/V Engineering" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Cyclone Zone IV/V Engineering</span></div>
              <div key="ASTM E331 Water Test" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">ASTM E331 Water Test</span></div>
              <div key="Marine Grade Hardware" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Marine Grade Hardware</span></div>
              <div key="Inter-lock Pressure Equalisation" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Inter-lock Pressure Equalisation</span></div>
              <div key="BKC & South Mumbai Projects" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">BKC & South Mumbai Projects</span></div>
              <div key="LEED DGU Low-E Glass" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">LEED DGU Low-E Glass</span></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">What wind load standards apply to curtain walls in Mumbai?</h3>
              <p className="text-muted-foreground">Mumbai falls in IS:875 Part 3 Wind Zone IV (basic wind speed 44 m/s). All Fine Glaze curtain wall systems for Mumbai are designed for this wind zone with gust factors for building height. Above 30 storeys, CFD analysis is used for accurate wind pressure coefficients.</p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">How does Fine Glaze handle curtain wall logistics in Mumbai?</h3>
              <p className="text-muted-foreground">Fine Glaze uses just-in-time delivery, crane coordination with building management, night shifts for road deliveries, and pre-positioned mobile cranes for efficient installation without disrupting building occupants or street traffic.</p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">Does Fine Glaze provide curtain wall refurbishment in Mumbai?</h3>
              <p className="text-muted-foreground">Yes. We offer full curtain wall refurbishment including sealant replacement, glass panel replacement, gasket renewal, and frame recladding for older Mumbai commercial buildings needing facade upgrades.</p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-12 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-xl font-bold text-slate-800 mb-5">Explore Related Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link key="/curtain-wall-systems" to="/curtain-wall-systems" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Curtain Wall Systems</p><p className="text-xs text-slate-500">Curtain wall service overview</p></div></Link>
            <Link key="/curtain-wall-pune" to="/curtain-wall-pune" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Curtain Wall Pune</p><p className="text-xs text-slate-500">Curtain wall Pune</p></div></Link>
            <Link key="/facade-contractor-mumbai" to="/facade-contractor-mumbai" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Facade Contractor Mumbai</p><p className="text-xs text-slate-500">Full facade services Mumbai</p></div></Link>
            <Link key="/structural-glazing-mumbai" to="/structural-glazing-mumbai" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Structural Glazing Mumbai</p><p className="text-xs text-slate-500">Structural glazing Mumbai</p></div></Link>
            <Link key="/acp-aluminium-cladding" to="/acp-aluminium-cladding" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">ACP Cladding</p><p className="text-xs text-slate-500">ACP panel cladding</p></div></Link>
            <Link key="/maintenance-services" to="/maintenance-services" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Facade Maintenance</p><p className="text-xs text-slate-500">Curtain wall AMC</p></div></Link>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
