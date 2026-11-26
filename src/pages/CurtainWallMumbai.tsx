import SEO from "@/components/SEO";
import { RelatedProjects } from "@/components/RelatedProjects";
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
    "description": "Curtain wall contractor in Mumbai: unitized and stick glass curtain walls for commercial towers, in-house shop drawings. Embassy REIT Best Vendor 2024."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What wind load standards apply to curtain walls in Mumbai?", "acceptedAnswer": { "@type": "Answer", "text": "Curtain wall wind loads in India are normally taken from IS 875 Part 3, using the project's basic wind speed, height and terrain. Fine Glaze checks member sizing, fixing and anchorage against the wind load in the project design basis." } },
      { "@type": "Question", "name": "How does Fine Glaze handle curtain wall logistics in Mumbai?", "acceptedAnswer": { "@type": "Answer", "text": "Logistics on tight Mumbai sites are planned per project, covering material access, hoisting and delivery windows agreed with the main contractor or building management. Fine Glaze fabricates in batches and despatches directly to site." } },
      { "@type": "Question", "name": "Does Fine Glaze provide curtain wall refurbishment in Mumbai?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Fine Glaze handles sealant re-application, glass replacement, joint repair and leakage rectification on existing facades, with a written condition report from periodic inspection where required." } },
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
        title="Curtain Wall Contractor in Mumbai, Maharashtra | Fine Glaze"
        description="Curtain wall contractor in Mumbai: unitized and stick glass curtain walls for commercial towers, in-house shop drawings. Embassy REIT Best Vendor 2024."
        canonical="https://fineglaze.com/curtain-wall-mumbai"
        keywords="curtain wall contractor Mumbai, curtain wall systems Mumbai, glass curtain wall Mumbai, commercial facade Mumbai"
        ogImage="https://fineglaze.com/projects/naman-chambers-48-1.webp"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* HERO */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Curtain Wall Glazing <span className="text-gradient-gold">Contractor in Mumbai</span>
            </h1>
            <p className="text-lg text-white/80 mb-8">Fine Glaze takes curtain wall projects in Mumbai, from unitized towers to stick-system installations. Shop drawings are prepared in-house and engineered against the project wind load before approval.</p>
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
            src="/projects/naman-chambers-48-1.webp"
            alt="Naman Chambers, Bandra Kurla Complex, Mumbai — glazing and ACP works by Fine Glaze (in progress)"
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
          
          <h2 className="text-3xl font-bold">Curtain Wall Work in Mumbai</h2>
          <p className="text-muted-foreground">
            Mumbai combines high-rise density, coastal wind, heavy monsoon rainfall and salty air, so curtain wall design there needs careful attention to wind load, drainage and material durability. Fine Glaze prepares shop drawings in-house and checks member sizing, fixing and anchorage against the project wind load.
          </p>
          <p className="text-muted-foreground mt-4">
            Our documented Mumbai work includes structural glazing and ACP cladding at Naman Chambers in BKC and facade maintenance at Embassy 247, Vikhroli. For curtain wall projects we can share relevant references on request.
          </p>
          <p className="text-muted-foreground mt-4">
            As general guidance, unitized curtain walls suit tall buildings and tight programmes because panels are assembled in a factory, while stick systems suit lower and mid-rise buildings with easier access. The right choice depends on height, access, programme and budget.
          </p>
          <p className="text-muted-foreground mt-4">
            Glass choice affects cooling load and daylight. Low-E double glazed units are commonly specified on commercial towers, and the exact build-up should follow the project's energy and daylight brief.
          </p>
          <p className="text-muted-foreground mt-4">
            Fine Glaze handles curtain wall scope from survey and shop drawings through fabrication, installation, site water penetration testing, snagging and handover, with AMC available afterwards.
          </p>
    
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-10 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-4">
              <div key="Wind Load Engineering Check" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Wind Load Engineering Check</span></div>
              <div key="Site Water Penetration Test" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Site Water Penetration Test</span></div>
              <div key="Corrosion-Resistant Hardware" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Corrosion-Resistant Hardware</span></div>
              <div key="Pressure-Equalised Joint Design" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Pressure-Equalised Joint Design</span></div>
              <div key="BKC and Mumbai Projects" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">BKC and Mumbai Projects</span></div>
              <div key="DGU Low-E Glass Options" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">DGU Low-E Glass Options</span></div>
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
              <p className="text-muted-foreground">Curtain wall wind loads in India are normally taken from IS 875 Part 3, using the project's basic wind speed, height and terrain. Fine Glaze checks member sizing, fixing and anchorage against the wind load in the project design basis.</p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">How does Fine Glaze handle curtain wall logistics in Mumbai?</h3>
              <p className="text-muted-foreground">Logistics on tight Mumbai sites are planned per project, covering material access, hoisting and delivery windows agreed with the main contractor or building management. Fine Glaze fabricates in batches and despatches directly to site.</p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">Does Fine Glaze provide curtain wall refurbishment in Mumbai?</h3>
              <p className="text-muted-foreground">Yes. Fine Glaze handles sealant re-application, glass replacement, joint repair and leakage rectification on existing facades, with a written condition report from periodic inspection where required.</p>
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

      <RelatedProjects heading="Our glazing work in Mumbai" locations={["Mumbai"]} excludeLocations={["Navi Mumbai"]} keywords={["glazing", "glass", "sealant", "window"]} />
      <CTASection />
    </Layout>
  );
}
