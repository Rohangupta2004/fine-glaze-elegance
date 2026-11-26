import SEO from "@/components/SEO";
import { RelatedProjects } from "@/components/RelatedProjects";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function FacadeWaterproofing() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Facade Waterproofing & Leak Repair in Pune and Mumbai",
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
    "description": "Facade waterproofing contractor in Pune and Mumbai: leakage investigation, sealant replacement and joint repair on glass and curtain wall facades."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "How much does facade leak repair cost in India?", "acceptedAnswer": { "@type": "Answer", "text": "Facade leak repair cost depends on joint length, access method, sealant specification and how much glass or gasket work is needed, so it needs an inspection first. Fine Glaze quotes after investigating the leak." } },
      { "@type": "Question", "name": "How often should facade sealant be replaced in India?", "acceptedAnswer": { "@type": "Answer", "text": "Facade sealant life depends on the product, exposure and workmanship, so there is no single replacement date. Inspect joints at least annually and before each monsoon, and replace sealant that has cracked, hardened or lost adhesion." } },
      { "@type": "Question", "name": "Can Fine Glaze repair leaking curtain wall in an occupied building?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Curtain wall sealant repair can be done in an occupied building by working section by section and agreeing access and timing with the building management. We plan the sequence per site." } },
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Facade Waterproofing & Leak Repair in Pune and Mumbai", "item": "https://fineglaze.com/facade-waterproofing" }
    ]
  };

  return (
    <Layout darkHero>
      <SEO
        title="Facade Waterproofing Contractor, Pune & Mumbai | Fine Glaze"
        description="Facade waterproofing contractor in Pune and Mumbai: leakage investigation, sealant replacement and joint repair on glass and curtain wall facades."
        canonical="https://fineglaze.com/facade-waterproofing"
        keywords="facade waterproofing contractor, glass facade leak repair, curtain wall leakage repair, facade sealant replacement, building facade waterproofing"
        ogImage="https://fineglaze.com/projects/embassy-247-37-1.webp"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* HERO */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Facade Waterproofing <span className="text-gradient-gold">& Leak Repair</span>
            </h1>
            <p className="text-lg text-white/80 mb-8">Facade leakage is a common complaint from building owners and facility managers. Fine Glaze handles leak investigation, sealant replacement and joint repair on curtain walls, structural glazing, ACP cladding and aluminium window systems.</p>
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
            src="/projects/embassy-247-37-1.webp"
            alt="Embassy 247, Vikhroli, Mumbai — water treatment and facade sealant work (approx. 80,500 RMT) by Fine Glaze"
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
          
          <h2 className="text-3xl font-bold">Why Facade Leakage Happens and How to Fix It</h2>
          <p className="text-muted-foreground">
            Water entering through a facade can damage interiors, false ceilings and building services. Heavy monsoon rain in Mumbai and Pune makes sealant, gasket and drainage condition important to check before every rainy season. This is general guidance.
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
            Our approach to a leak is: (1) trace the leak points on site, including a water test where needed; (2) inspect sealant adhesion and joint condition; (3) agree a repair scope; (4) remove failed sealant and prepare the surfaces; (5) apply new sealant from approved manufacturers such as DOWSIL or equivalents; (6) re-test the repaired area before sign-off.
          </p>
          <p className="text-muted-foreground mt-4">
            Fine Glaze also offers AMC-based programmes with periodic inspection of sealant joints and drainage, repair of deteriorating joints before the monsoon, and a written condition report. We also handle facades we did not install.
          </p>
    
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-10 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-4">
              <div key="Water Test Leak Tracing" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Water Test Leak Tracing</span></div>
              <div key="Sealant Adhesion Check" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Sealant Adhesion Check</span></div>
              <div key="Joint-by-Joint Remediation" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Joint-by-Joint Remediation</span></div>
              <div key="Approved Sealant Brands" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Approved Sealant Brands</span></div>
              <div key="Post-Repair Water Testing" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Post-Repair Water Testing</span></div>
              <div key="AMC Programmes" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">AMC Programmes</span></div>
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
              <p className="text-muted-foreground">Facade leak repair cost depends on joint length, access method, sealant specification and how much glass or gasket work is needed, so it needs an inspection first. Fine Glaze quotes after investigating the leak.</p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">How often should facade sealant be replaced in India?</h3>
              <p className="text-muted-foreground">Facade sealant life depends on the product, exposure and workmanship, so there is no single replacement date. Inspect joints at least annually and before each monsoon, and replace sealant that has cracked, hardened or lost adhesion.</p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">Can Fine Glaze repair leaking curtain wall in an occupied building?</h3>
              <p className="text-muted-foreground">Yes. Curtain wall sealant repair can be done in an occupied building by working section by section and agreeing access and timing with the building management. We plan the sequence per site.</p>
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
            <Link key="/contact" to="/contact" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Book a call</p><p className="text-xs text-slate-500">Free leak inspection</p></div></Link>
          </div>
        </div>
      </section>

      <RelatedProjects heading="Leakage & sealant work we have done" keywords={["sealant", "leakage", "water"]} />
      <CTASection />
    </Layout>
  );
}
