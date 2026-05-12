import SEO from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function AluminiumFacadeMumbai() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Aluminium Facade Contractor in Mumbai",
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
    "description": "Aluminium facade contractor in Mumbai. Thermal break doors, windows, louvers & ACP cladding for BKC, Andheri, Powai & Vikhroli. Marine-grade quality. Free site visit."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What aluminium coating is best for Mumbai coastal environment?", "acceptedAnswer": { "@type": "Answer", "text": "PVDF coating at 25+ microns is the standard for coastal Mumbai. For buildings within 1 km of the seafront, Fine Glaze additionally recommends marine-grade anodising (AA25 class) as a base treatment before PVDF coating." } },
      { "@type": "Question", "name": "What is thermal break aluminium and why is it important in Mumbai?", "acceptedAnswer": { "@type": "Answer", "text": "Thermal break aluminium uses a polyamide barrier between inner and outer sections, reducing heat transfer by up to 75%. In Mumbai, thermally broken windows reduce AC load by 20-30%, yielding significant long-term energy savings." } },
      { "@type": "Question", "name": "Does Fine Glaze supply and install aluminium windows in Mumbai?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Fine Glaze provides full supply and installation for aluminium windows, doors, and louvres in Mumbai. We handle glass supply, hardware, and weather sealing as part of a complete package." } },
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Aluminium Facade Contractor in Mumbai", "item": "https://fineglaze.com/aluminium-facade-mumbai" }
    ]
  };

  return (
    <Layout darkHero>
      <SEO
        title="Aluminium Facade Contractor in Mumbai | Doors, Windows & Cladding – Fine Glaze"
        description="Aluminium facade contractor in Mumbai. Thermal break doors, windows, louvers & ACP cladding for BKC, Andheri, Powai & Vikhroli. Marine-grade quality. Free site visit."
        canonical="https://fineglaze.com/aluminium-facade-mumbai"
        keywords="aluminium facade contractor Mumbai, aluminium windows Mumbai, thermal break windows Mumbai, aluminium cladding BKC, aluminium doors Mumbai, facade contractor Andheri, aluminium facade Worli"
        ogImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* HERO */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Aluminium Facade <span className="text-gradient-gold">Contractor in Mumbai</span>
            </h1>
            <p className="text-lg text-white/80 mb-8">Fine Glaze provides marine-grade aluminium facade systems in Mumbai, including thermally broken aluminium windows and doors, sun louvres, spandrel cladding, and aluminium composite panel systems. Every Mumbai aluminium facade installation is engineered for high humidity, saline air, and extreme monsoon rainfall.</p>
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
            alt="Aluminium facade contractor Mumbai commercial building - Fine Glaze"
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
          
          <h2 className="text-3xl font-bold">Marine-Grade Aluminium Facades for Mumbai</h2>
          <p className="text-muted-foreground">
            Aluminium is the material of choice for Mumbai's coastal facade environment — lightweight, naturally corrosion-resistant, and highly recyclable. However, standard aluminium systems are not sufficient for Mumbai's saline coastal air. Fine Glaze uses <strong>anodized or PVDF-coated aluminium extrusions</strong> with minimum 25-micron coating thickness for all Mumbai coastal projects, providing 25+ year service life even 100 metres from the seafront.
          </p>
          <p className="text-muted-foreground mt-4">
            Our Mumbai aluminium facade services include: <strong>thermally broken casement and sliding windows</strong> for energy-efficient residential and commercial buildings; <strong>aluminium louvre systems</strong> for natural ventilation and solar shading; <strong>aluminium spandrel panels</strong> for seamless curtain wall integration; and <strong>aluminium soffit and fascia systems</strong> for retail and hospitality interiors.
          </p>
          <p className="text-muted-foreground mt-4">
            Notable Mumbai aluminium facade projects by Fine Glaze include the Leela Hotel facade programme, Embassy 247 curtain wall with aluminium spandrel panels, and multiple premium residential towers in Worli and Lower Parel. We work with systems from YKK AP, Schuco, Aluprof, and Technal for international brand specifications.
          </p>
          <p className="text-muted-foreground mt-4">
            For Mumbai residential developers, Fine Glaze offers competitive aluminium window and door packages with full supply and installation. Our standard Mumbai residential specification uses aluminium sliding windows with EPDM pile seals and stainless steel hardware, sized to resist Mumbai's monsoon-driven wind-driven rain at 50 mm/hour rainfall intensity.
          </p>
          <p className="text-muted-foreground mt-4">
            Fine Glaze's aluminium facade team is experienced in working within Mumbai's challenging logistics environment — managing material movements in narrow streets, crane restrictions, and tight site access in the central business districts of Andheri, BKC, Lower Parel, and Nariman Point.
          </p>
    
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-10 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-4">
              <div key="PVDF-Coated Extrusions 25+ micron" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">PVDF-Coated Extrusions 25+ micron</span></div>
              <div key="Thermal Break Technology" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Thermal Break Technology</span></div>
              <div key="Marine Grade Anodising" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Marine Grade Anodising</span></div>
              <div key="Schuco & YKK AP Systems" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Schuco & YKK AP Systems</span></div>
              <div key="Monsoon-Tested Weatherseals" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Monsoon-Tested Weatherseals</span></div>
              <div key="Leela Hotel Reference" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Leela Hotel Reference</span></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">What aluminium coating is best for Mumbai coastal environment?</h3>
              <p className="text-muted-foreground">PVDF coating at 25+ microns is the standard for coastal Mumbai. For buildings within 1 km of the seafront, Fine Glaze additionally recommends marine-grade anodising (AA25 class) as a base treatment before PVDF coating.</p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">What is thermal break aluminium and why is it important in Mumbai?</h3>
              <p className="text-muted-foreground">Thermal break aluminium uses a polyamide barrier between inner and outer sections, reducing heat transfer by up to 75%. In Mumbai, thermally broken windows reduce AC load by 20-30%, yielding significant long-term energy savings.</p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">Does Fine Glaze supply and install aluminium windows in Mumbai?</h3>
              <p className="text-muted-foreground">Yes. Fine Glaze provides full supply and installation for aluminium windows, doors, and louvres in Mumbai. We handle glass supply, hardware, and weather sealing as part of a complete package.</p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-12 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-xl font-bold text-slate-800 mb-5">Explore Related Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link key="/aluminium-facade" to="/aluminium-facade" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Aluminium Facade</p><p className="text-xs text-slate-500">Full aluminium facade service</p></div></Link>
            <Link key="/facade-contractor-mumbai" to="/facade-contractor-mumbai" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Facade Contractor Mumbai</p><p className="text-xs text-slate-500">Complete facade services</p></div></Link>
            <Link key="/curtain-wall-mumbai" to="/curtain-wall-mumbai" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Curtain Wall Mumbai</p><p className="text-xs text-slate-500">Curtain wall glazing Mumbai</p></div></Link>
            <Link key="/acp-aluminium-cladding" to="/acp-aluminium-cladding" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">ACP Cladding</p><p className="text-xs text-slate-500">ACP composite panels</p></div></Link>
            <Link key="/structural-glazing-mumbai" to="/structural-glazing-mumbai" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Structural Glazing Mumbai</p><p className="text-xs text-slate-500">Structural glazing</p></div></Link>
            <Link key="/maintenance-services" to="/maintenance-services" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Facade Maintenance</p><p className="text-xs text-slate-500">AMC & maintenance</p></div></Link>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
