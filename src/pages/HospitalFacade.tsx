import SEO from "@/components/SEO";
import { RelatedProjects } from "@/components/RelatedProjects";
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
    "description": "Hospital facade contractor in Pune and Mumbai: glazing, ACP cladding and curtain wall, with in-house shop drawings. Nanavati Max Hospital is a project record."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What facade cladding is best for hospitals in India?", "acceptedAnswer": { "@type": "Answer", "text": "Smooth, cleanable cladding such as coated ACP is commonly used on opaque hospital facades, with curtain wall or windows on ward floors. Fire performance and finishes should be confirmed with the consultant and local regulations." } },
      { "@type": "Question", "name": "Does facade work need to happen while a hospital is operational?", "acceptedAnswer": { "@type": "Answer", "text": "Often yes, especially for repairs and refurbishment, which are done section by section with agreed access and timings. Fine Glaze's Nanavati Max Hospital work includes window leakage rectification on a building in use." } },
      { "@type": "Question", "name": "What acoustic glass is used for hospital ward facades?", "acceptedAnswer": { "@type": "Answer", "text": "Ward facades needing noise control commonly use double glazed units with a laminated pane, and the build-up follows an acoustic specification from the consultant. We do not quote performance figures without a tested system." } },
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
        title="Hospital Facade Contractor in Pune & Mumbai | Fine Glaze"
        description="Hospital facade contractor in Pune and Mumbai: glazing, ACP cladding and curtain wall, with in-house shop drawings. Nanavati Max Hospital is a project record."
        canonical="https://fineglaze.com/hospital-facade"
        keywords="hospital facade contractor, hospital glass facade, healthcare building facade, hygienic facade systems, hospital curtain wall"
        ogImage="https://fineglaze.com/projects/nanavati-max-hospital-38-1.webp"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* HERO */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Hospital & Healthcare <span className="text-gradient-gold">Facade Specialist India</span>
            </h1>
            <p className="text-lg text-white/80 mb-8">Fine Glaze takes facade work on hospitals and healthcare buildings in Pune and Mumbai: ACP cladding, glazing, aluminium windows and leakage rectification. Our hospital record is Nanavati Max Hospital, Vile Parle.</p>
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
            src="/projects/nanavati-max-hospital-38-1.webp"
            alt="Nanavati Max Hospital, Vile Parle, Mumbai — ACP cladding and window leakage rectification by Fine Glaze for L&T (ongoing)"
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
          
          <h2 className="text-3xl font-bold">Facade Requirements for Healthcare Buildings</h2>
          <p className="text-muted-foreground">
            Healthcare buildings have distinct facade needs: hygiene, patient comfort, continuity of operations and infection control. Common considerations are smooth, cleanable cladding surfaces, daylight through considered glazing, and acoustic performance against external noise.
          </p>
          <p className="text-muted-foreground mt-4">
            Facade materials for hospitals are usually chosen with the consultant against the hospital's accreditation and fire requirements. Confirm cladding fire performance, finishes and coatings with the project team before specifying.
          </p>
          <p className="text-muted-foreground mt-4">
            Fine Glaze documents hospital work at the <strong>Nanavati Max Super Speciality Hospital in Vile Parle, Mumbai</strong> (ACP cladding, top coping and window leakage rectification, with L&T Building & Construction; listed as ongoing). Hospital facade packages can include <strong>ACP cladding</strong>, <strong>curtain wall glazing</strong>, <strong>aluminium windows</strong> and <strong>entrance structural glazing</strong>.
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
              <div key="Cleanable ACP Cladding" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Cleanable ACP Cladding</span></div>
              <div key="Acoustic DGU Glass" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Acoustic DGU Glass</span></div>
              <div key="Materials Specified to Project Brief" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Materials Specified to Project Brief</span></div>
              <div key="PVDF and Coated Finishes" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">PVDF and Coated Finishes</span></div>
              <div key="Daylighting Through Glazing Design" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Daylighting Through Glazing Design</span></div>
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
              <p className="text-muted-foreground">Smooth, cleanable cladding such as coated ACP is commonly used on opaque hospital facades, with curtain wall or windows on ward floors. Fire performance and finishes should be confirmed with the consultant and local regulations.</p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">Does facade work need to happen while a hospital is operational?</h3>
              <p className="text-muted-foreground">Often yes, especially for repairs and refurbishment, which are done section by section with agreed access and timings. Fine Glaze's Nanavati Max Hospital work includes window leakage rectification on a building in use.</p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">What acoustic glass is used for hospital ward facades?</h3>
              <p className="text-muted-foreground">Ward facades needing noise control commonly use double glazed units with a laminated pane, and the build-up follows an acoustic specification from the consultant. We do not quote performance figures without a tested system.</p>
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
            <Link key="/contact" to="/contact" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Book a call</p><p className="text-xs text-slate-500">Talk to our team</p></div></Link>
          </div>
        </div>
      </section>

      <RelatedProjects heading="Healthcare project" keywords={["hospital"]} />
      <CTASection />
    </Layout>
  );
}
