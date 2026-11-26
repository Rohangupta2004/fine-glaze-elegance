import SEO from "@/components/SEO";
import { RelatedProjects } from "@/components/RelatedProjects";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function FacadeMaintenanceAMC() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Facade AMC & Annual Maintenance Contract India",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Fine Glaze",
      "@id": "https://fineglaze.com",
      "url": "https://fineglaze.com",
      "telephone": "+91-8369233566",
      "address": { "@type": "PostalAddress", "addressLocality": "Pune", "addressRegion": "Maharashtra", "addressCountry": "IN" }
    },
    "areaServed": [{ "@type": "City", "name": "Pune" }, { "@type": "City", "name": "Mumbai" }, { "@type": "State", "name": "Maharashtra" }],
    "description": "Facade AMC guide for India: what an annual maintenance contract covers, how often to inspect, and what to ask for in scope. A general guide by Fine Glaze."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is included in a facade AMC?", "acceptedAnswer": { "@type": "Answer", "text": "A facade AMC covers scheduled inspection of glass, sealants, cladding and drainage, plus repair work agreed in the contract, such as sealant repair, glass replacement and leakage rectification. Fine Glaze also provides a written condition report after periodic inspection." } },
      { "@type": "Question", "name": "How much does a facade AMC cost in India?", "acceptedAnswer": { "@type": "Answer", "text": "Facade AMC cost depends on facade area and type, building height, access method, visit frequency and the repairs included, so there is no single rate. Fine Glaze prepares a quotation after reviewing the building and scope." } },
      { "@type": "Question", "name": "How often should a building facade be professionally inspected?", "acceptedAnswer": { "@type": "Answer", "text": "A building facade should be professionally inspected at least once a year, and twice a year, before and after the monsoon, for coastal buildings and structural glazing facades. This is general guidance. Fine Glaze reports findings in writing." } },
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Facade AMC Guide", "item": "https://fineglaze.com/facade-amc-guide" }
    ]
  };

  return (
    <Layout darkHero>
      <SEO
        title="Facade AMC Guide India: Scope and Schedule | Fine Glaze"
        description="Facade AMC guide for India: what an annual maintenance contract covers, how often to inspect, and what to ask for in scope. A general guide by Fine Glaze."
        canonical="https://fineglaze.com/facade-amc-guide"
        keywords="facade AMC India, facade annual maintenance contract, building facade inspection India, glass facade AMC"
        ogImage="https://fineglaze.com/projects/embassy-247-37-1.webp"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      <section className="relative py-24 bg-night-2 text-paper">
        <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Facade AMC <span className="text-gradient-gold">Guide India</span>
            </h1>
            <p className="text-lg text-paper/80 mb-8">
              A facade Annual Maintenance Contract (AMC) schedules inspection, cleaning and repair of a building's glass, sealant and cladding systems so problems are found before they cause leaks. Fine Glaze offers facade AMC for buildings in Pune and Mumbai.
            </p>
            <div className="flex gap-4">
              <Link to="/contact"><Button size="lg" className="bg-lamp hover:bg-lamp/90">Book a call</Button></Link>
              <Link to="/maintenance-services"><Button size="lg" variant="outline">Our Services</Button></Link>
            </div>
          </div>
          <img src="/projects/embassy-247-37-1.webp" alt="Embassy 247, Vikhroli, Mumbai — facade sealant renewal and glass replacement by Fine Glaze for Embassy REIT" className="object-cover h-[420px] w-full" loading="eager" width="600" height="420" />
        </div>
      </section>

      <section className="fg-sec">
        <div className="container mx-auto px-4 max-w-5xl space-y-6">
          <h2 className="text-3xl font-bold">Why Every Building Needs a Facade AMC</h2>
          <p className="text-muted-foreground">Building facades are engineered systems that age gradually. Without regular inspection, small issues such as a cracked sealant joint, a loose gasket or a blocked drainage path can grow into water ingress that damages interiors and disrupts tenants. A facade AMC schedules inspection and repair so these issues are found early.</p>
          <p className="text-muted-foreground mt-4">India's climate makes facade upkeep important. Heavy monsoon rain and salty coastal air in Mumbai, and large daily and seasonal temperature swings in Pune, all stress sealants and joints. As general guidance, a pre-monsoon inspection and repair is the most valuable single maintenance activity for most Indian buildings.</p>

          <h2 className="text-3xl font-bold mt-10">Fine Glaze Facade AMC Scope</h2>
          <p className="text-muted-foreground">Fine Glaze offers annual maintenance contracts for glazing, glass and cladding. The scope and visit frequency are agreed per building, and typically cover:</p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
            <li><strong>Periodic facade inspection</strong> with a written condition report</li>
            <li><strong>Facade glass cleaning and restoration</strong></li>
            <li><strong>Sealant re-application and joint repair</strong> where joints have cracked or lost adhesion</li>
            <li><strong>Glass replacement and breakage response</strong></li>
            <li><strong>Leakage investigation and rectification</strong></li>
          </ul>

          <h2 className="text-3xl font-bold mt-10">What Affects Facade AMC Cost</h2>
          <p className="text-muted-foreground">AMC cost depends on the facade area and type (curtain wall, structural glazing, ACP or aluminium windows), building height, the access method needed, visit frequency and the scope of repairs included. Fine Glaze prepares a quotation after reviewing the building and the scope you want covered.</p>
        </div>
      </section>

      <section className="fg-sec">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-10">What Our AMC Covers</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {["Periodic Facade Inspection", "Written Condition Report", "Glass Cleaning and Restoration", "Sealant Re-application and Joint Repair", "Glass Replacement and Breakage Response", "Leakage Investigation and Rectification"].map(f => (
              <div key={f} className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">{f}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="fg-sec">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-background p-6"><h3 className="text-lg font-bold mb-2">What is included in a facade AMC?</h3><p className="text-muted-foreground">A facade AMC covers scheduled inspection of glass, sealants, cladding and drainage, plus repair work agreed in the contract, such as sealant repair, glass replacement and leakage rectification. Fine Glaze also provides a written condition report after periodic inspection.</p></div>
            <div className="bg-background p-6"><h3 className="text-lg font-bold mb-2">How much does a facade AMC cost in India?</h3><p className="text-muted-foreground">Facade AMC cost depends on facade area and type, building height, access method, visit frequency and the repairs included, so there is no single rate. Fine Glaze prepares a quotation after reviewing the building and scope.</p></div>
            <div className="bg-background p-6"><h3 className="text-lg font-bold mb-2">How often should a building facade be professionally inspected?</h3><p className="text-muted-foreground">A building facade should be professionally inspected at least once a year, and twice a year, before and after the monsoon, for coastal buildings and structural glazing facades. This is general guidance. Fine Glaze reports findings in writing.</p></div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-night-2 border-t border-line">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-xl font-bold text-paper mb-5">Related Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { title: "Facade Maintenance", href: "/maintenance-services", desc: "Full maintenance service" },
              { title: "Facade Waterproofing", href: "/facade-waterproofing", desc: "Leak diagnosis & repair" },
              { title: "Curtain Wall Systems", href: "/curtain-wall-systems", desc: "Curtain wall service" },
              { title: "Structural Glazing", href: "/structural-glazing", desc: "Structural glazing" },
              { title: "Facade Contractor Pune", href: "/facade-contractor-pune", desc: "Facade services Pune" },
              { title: "Facade Contractor Mumbai", href: "/facade-contractor-mumbai", desc: "Facade services Mumbai" },
            ].map(r => (
              <Link key={r.href} to={r.href} className="group flex items-start gap-3 p-4 border border-line hover:border-lamp/40 hover:bg-lamp/10 transition-all bg-night">
                <ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                <div><p className="font-semibold text-paper text-sm">{r.title}</p><p className="text-xs text-mute">{r.desc}</p></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <RelatedProjects heading="Maintenance & repair work we run" keywords={["sealant", "maintenance", "leakage", "replacement", "repair"]} />
      <CTASection />
    </Layout>
  );
}
