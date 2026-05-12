import SEO from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function FacadeWaterproofing() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Facade Waterproofing & Leak Repair in Pune & Mumbai",
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
    "description": "Facade waterproofing and glass facade leak repair in Pune & Mumbai. Sealant replacement, curtain wall leakage diagnosis & remediation. Free inspection."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "How much does facade leak repair cost in India?", "acceptedAnswer": { "@type": "Answer", "text": "Facade sealant remediation costs Rs 150-400 per running metre for standard joint re-sealing, depending on joint depth, access difficulty, and sealant specification. A comprehensive waterproofing programme for a 10-storey building typically costs Rs 5-20 lakh." } },
      { "@type": "Question", "name": "How often should facade sealant be replaced in India?", "acceptedAnswer": { "@type": "Answer", "text": "Silicone facade sealants typically last 15-20 years under normal conditions. In coastal Mumbai, 10-12 years is more realistic. For Pune buildings, a full sealant inspection every 7-10 years with replacement as needed is recommended." } },
      { "@type": "Question", "name": "Can Fine Glaze repair leaking curtain wall in an occupied building?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Fine Glaze regularly performs curtain wall sealant repair in occupied buildings. Our team uses low-odour, fast-curing sealants, works in section-by-section sequence to minimise disruption, and can schedule critical work in evenings or weekends to avoid business disruption." } },
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Facade Waterproofing & Leak Repair in Pune & Mumbai", "item": "https://fineglaze.com/facade-waterproofing" }
    ]
  };

  return (
    <Layout darkHero>
      <SEO
        title="Facade Waterproofing & Leak Repair in Pune & Mumbai | Fine Glaze"
        description="Facade waterproofing and glass facade leak repair in Pune & Mumbai. Sealant replacement, curtain wall leakage diagnosis & remediation. Free inspection."
        canonical="https://fineglaze.com/facade-waterproofing"
        keywords="facade waterproofing India, curtain wall leak repair Pune, facade sealant replacement Mumbai, glass facade leak diagnosis, facade waterproofing contractor Maharashtra"
        ogImage="https://images.unsplash.com/photo-1505765050516-f72dcac9c60e"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* HERO */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Facade Waterproofing <span className="text-gradient-gold">& Leak Repair</span>
            </h1>
            <p className="text-lg text-white/80 mb-8">Facade leakage is the most common complaint reported by building owners and facility managers in India. Fine Glaze specialises in facade waterproofing, leak diagnosis, and sealant remediation for curtain walls, structural glazing, ACP cladding, and aluminium window systems.</p>
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
            src="https://images.unsplash.com/photo-1505765050516-f72dcac9c60e"
            alt="Facade waterproofing sealant repair curtain wall India Fine Glaze"
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
          
          <h2 className="text-3xl font-bold">Why Facade Leakage Happens — and How to Fix It</h2>
          <p className="text-muted-foreground">
            Water ingress through building facades causes significant damage to interiors, false ceilings, MEP installations, and even structural steel. In India's high-rainfall climate — particularly in Mumbai (2,400mm/year) and Pune (700mm/year) — facade waterproofing is essential.
          </p>
          <h3 className="text-xl font-bold mt-8 mb-3">Common Causes of Facade Leakage in India</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li><strong>Failed silicone sealant joints:</strong> Silicone degrades after 10-15 years due to UV exposure, thermal cycling, and building movement. Cracked or debonded sealant is the number-one cause of facade leakage.</li>
            <li><strong>Improper original installation:</strong> Inadequate joint depth, wrong sealant type, or contaminated surfaces at installation lead to premature sealant failure.</li>
            <li><strong>Thermal movement fatigue:</strong> Building facades expand and contract with temperature. Joints that are too narrow or stiff crack over time.</li>
            <li><strong>Missing or failed drainage channels:</strong> Curtain wall systems rely on internal pressure-equalisation drainage. Blocked drainage directs water inward.</li>
            <li><strong>Glass seal failure:</strong> DGU units lose their edge seal allowing inter-pane condensation.</li>
          </ul>
          <h3 className="text-xl font-bold mt-8 mb-3">Fine Glaze Waterproofing Repair Process</h3>
          <p className="text-muted-foreground">
            Fine Glaze uses a systematic approach: (1) Hose test diagnosis per AAMA 501.2 to locate all active leak points; (2) Core sampling of sealant joints to assess adhesion; (3) Detailed remediation specification; (4) Sealant removal and surface preparation; (5) New sealant application using Dow Corning, Sika, or Master Builders products; (6) Post-remediation water test to verify 100% water-tightness before sign-off.
          </p>
          <p className="text-muted-foreground mt-4">
            Fine Glaze offers AMC-based facade waterproofing programmes that include annual inspection of all sealant joints, pre-monsoon repair of any deteriorating sealant, and priority callout response for active leaks during the monsoon season. Proactive AMC programmes significantly reduce the risk of interior water damage and extend facade sealant life.
          </p>
    
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-10 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-4">
              <div key="Hose Test Leak Diagnosis" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Hose Test Leak Diagnosis</span></div>
              <div key="Sealant Core Sampling" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Sealant Core Sampling</span></div>
              <div key="Joint-by-Joint Remediation" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Joint-by-Joint Remediation</span></div>
              <div key="Dow Corning & Sika Sealants" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Dow Corning & Sika Sealants</span></div>
              <div key="Post-Repair Water Testing" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Post-Repair Water Testing</span></div>
              <div key="Annual AMC Programmes" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Annual AMC Programmes</span></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">How much does facade leak repair cost in India?</h3>
              <p className="text-muted-foreground">Facade sealant remediation costs Rs 150-400 per running metre for standard joint re-sealing, depending on joint depth, access difficulty, and sealant specification. A comprehensive waterproofing programme for a 10-storey building typically costs Rs 5-20 lakh.</p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">How often should facade sealant be replaced in India?</h3>
              <p className="text-muted-foreground">Silicone facade sealants typically last 15-20 years under normal conditions. In coastal Mumbai, 10-12 years is more realistic. For Pune buildings, a full sealant inspection every 7-10 years with replacement as needed is recommended.</p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">Can Fine Glaze repair leaking curtain wall in an occupied building?</h3>
              <p className="text-muted-foreground">Yes. Fine Glaze regularly performs curtain wall sealant repair in occupied buildings. Our team uses low-odour, fast-curing sealants, works in section-by-section sequence to minimise disruption, and can schedule critical work in evenings or weekends to avoid business disruption.</p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-12 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-xl font-bold text-slate-800 mb-5">Explore Related Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link key="/maintenance-services" to="/maintenance-services" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Facade Maintenance</p><p className="text-xs text-slate-500">Full AMC service</p></div></Link>
            <Link key="/curtain-wall-systems" to="/curtain-wall-systems" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Curtain Wall Systems</p><p className="text-xs text-slate-500">Curtain wall systems</p></div></Link>
            <Link key="/structural-glazing" to="/structural-glazing" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Structural Glazing</p><p className="text-xs text-slate-500">Structural glazing</p></div></Link>
            <Link key="/facade-contractor-pune" to="/facade-contractor-pune" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Facade Contractor Pune</p><p className="text-xs text-slate-500">Facade contractor Pune</p></div></Link>
            <Link key="/facade-contractor-mumbai" to="/facade-contractor-mumbai" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Facade Contractor Mumbai</p><p className="text-xs text-slate-500">Facade contractor Mumbai</p></div></Link>
            <Link key="/contact" to="/contact" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Get a Quote</p><p className="text-xs text-slate-500">Free leak inspection</p></div></Link>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
