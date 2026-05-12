import SEO from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function HospitalFacade() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Hospital & Healthcare Building Facade Contractor India – Fine Glaze",
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
    "description": "Specialist facade contractor for hospitals and healthcare buildings in India. Hygienic ACP cladding, anti-bacterial coatings, curtain wall systems. Pune & Mumbai projects."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What facade cladding is best for hospitals in India?", "acceptedAnswer": { "@type": "Answer", "text": "For external hospital facades, Fine Glaze recommends FR-grade ACP with PVDF coating for opaque zones (smooth, cleanable, fire-rated), and curtain wall with acoustic DGU for patient room floors. PVDF-coated surfaces resist biofilm adhesion and can be cleaned with standard hospital-grade disinfectants without surface degradation." } },
      { "@type": "Question", "name": "Does facade work need to happen while a hospital is operational?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, most hospital facade refurbishment projects must be completed with minimal disruption to ongoing operations. Fine Glaze uses section-by-section working strategies, noise and dust isolation, and scheduling critical work in periods of lower clinical activity. Our team has experience managing the logistics of working adjacent to ICUs, OTs, and wards." } },
      { "@type": "Question", "name": "What acoustic glass is used for hospital ward facades?", "acceptedAnswer": { "@type": "Answer", "text": "Fine Glaze specifies DGU with laminated outer pane (6.38mm VSG + 12mm argon + 6mm toughened) for hospital ward facades requiring acoustic performance. This specification achieves Rw 38-42 dB sound reduction, reducing external traffic and mechanical noise to acceptable levels for patient recovery." } },
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Hospital & Healthcare Building Facade Contractor India – Fine Glaze", "item": "https://fineglaze.com/hospital-facade" }
    ]
  };

  return (
    <Layout darkHero>
      <SEO
        title="Hospital & Healthcare Building Facade Contractor India – Fine Glaze"
        description="Specialist facade contractor for hospitals and healthcare buildings in India. Hygienic ACP cladding, anti-bacterial coatings, curtain wall systems. Pune & Mumbai projects."
        canonical="https://fineglaze.com/hospital-facade"
        keywords="hospital facade contractor India, healthcare building cladding India, hospital ACP cladding Pune, hospital curtain wall India, healthcare facade specialist, hospital glass facade Maharashtra"
        ogImage="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* HERO */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Hospital & Healthcare <span className="text-gradient-gold">Facade Specialist India</span>
            </h1>
            <p className="text-lg text-white/80 mb-8">Hospital and healthcare building facades demand performance standards beyond typical commercial projects. Fine Glaze specialises in facade systems for hospitals, diagnostic centres, pharmaceutical facilities, and medical colleges — combining hygienic surface finishes, infection-control cladding materials, and robust weatherproofing with attractive architectural design.</p>
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
            alt="Hospital healthcare building facade cladding India Fine Glaze"
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
          
          <h2 className="text-3xl font-bold">Unique Facade Requirements for Healthcare Buildings</h2>
          <p className="text-muted-foreground">
            Healthcare buildings have distinctive facade requirements driven by hygiene, patient comfort, operational continuity, and infection control. Fine Glaze's hospital facade specifications address: <strong>anti-bacterial and anti-fungal surface coatings</strong> for external wall areas adjacent to sterile zones; <strong>smooth, cleanable cladding surfaces</strong> (ACP with PVDF coating or powder coating) that resist biofilm adhesion; <strong>natural daylighting</strong> through considered glazing design to support patient recovery; and <strong>acoustic performance</strong> to reduce external noise transmission to sensitive clinical areas.
          </p>
          <p className="text-muted-foreground mt-4">
            Indian healthcare facilities increasingly adopt international design standards as the sector upgrades facilities for JCI and NABH accreditation. These standards include requirements for facade materials free from volatile organic compounds (VOC), non-combustible external cladding materials, and passive design features that contribute to patient wellbeing including views of greenery through optimally-sized window openings.
          </p>
          <p className="text-muted-foreground mt-4">
            Fine Glaze has completed facade projects for hospitals in Pune and surrounding areas, including both new build and facade refurbishment contracts. Our hospital facade packages typically include: <strong>ACP cladding</strong> for service zones and car parks; <strong>curtain wall glazing</strong> for patient ward floors (with acoustic DGU); <strong>aluminium windows</strong> for clinical areas requiring natural ventilation; and <strong>feature entrance structural glazing</strong> for welcoming, light-filled reception areas.
          </p>
          <p className="text-muted-foreground mt-4">
            For critical infrastructure considerations, Fine Glaze can provide <strong>blast-resistant or hurricane-rated facade systems</strong> for healthcare buildings requiring continuity of operations in extreme weather events — increasingly relevant for coastal hospitals in Maharashtra and Gujarat.
          </p>
    
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-10 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-4">
              <div key="Anti-Bacterial ACP Coatings" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Anti-Bacterial ACP Coatings</span></div>
              <div key="Acoustic DGU Glass" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Acoustic DGU Glass</span></div>
              <div key="NABH & JCI Compatible Materials" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">NABH & JCI Compatible Materials</span></div>
              <div key="Low-VOC PVDF Finishes" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Low-VOC PVDF Finishes</span></div>
              <div key="Natural Daylighting Design" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Natural Daylighting Design</span></div>
              <div key="Cleanable Smooth Surfaces" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Cleanable Smooth Surfaces</span></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">What facade cladding is best for hospitals in India?</h3>
              <p className="text-muted-foreground">For external hospital facades, Fine Glaze recommends FR-grade ACP with PVDF coating for opaque zones (smooth, cleanable, fire-rated), and curtain wall with acoustic DGU for patient room floors. PVDF-coated surfaces resist biofilm adhesion and can be cleaned with standard hospital-grade disinfectants without surface degradation.</p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">Does facade work need to happen while a hospital is operational?</h3>
              <p className="text-muted-foreground">Yes, most hospital facade refurbishment projects must be completed with minimal disruption to ongoing operations. Fine Glaze uses section-by-section working strategies, noise and dust isolation, and scheduling critical work in periods of lower clinical activity. Our team has experience managing the logistics of working adjacent to ICUs, OTs, and wards.</p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">What acoustic glass is used for hospital ward facades?</h3>
              <p className="text-muted-foreground">Fine Glaze specifies DGU with laminated outer pane (6.38mm VSG + 12mm argon + 6mm toughened) for hospital ward facades requiring acoustic performance. This specification achieves Rw 38-42 dB sound reduction, reducing external traffic and mechanical noise to acceptable levels for patient recovery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-12 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-xl font-bold text-slate-800 mb-5">Explore Related Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link key="/acp-aluminium-cladding" to="/acp-aluminium-cladding" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">ACP Cladding</p><p className="text-xs text-slate-500">ACP cladding systems</p></div></Link>
            <Link key="/curtain-wall-systems" to="/curtain-wall-systems" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Curtain Wall Systems</p><p className="text-xs text-slate-500">Curtain wall glazing</p></div></Link>
            <Link key="/facade-contractor-pune" to="/facade-contractor-pune" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Facade Contractor Pune</p><p className="text-xs text-slate-500">Facade services Pune</p></div></Link>
            <Link key="/commercial-building-facade" to="/commercial-building-facade" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Commercial Facade Guide</p><p className="text-xs text-slate-500">Commercial facade overview</p></div></Link>
            <Link key="/maintenance-services" to="/maintenance-services" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Facade Maintenance</p><p className="text-xs text-slate-500">AMC & maintenance</p></div></Link>
            <Link key="/contact" to="/contact" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Get a Quote</p><p className="text-xs text-slate-500">Free consultation</p></div></Link>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
