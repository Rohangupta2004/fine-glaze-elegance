import SEO from "@/components/SEO";
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
    "description": "Facade AMC (Annual Maintenance Contract) for curtain walls, structural glazing, ACP cladding and glass railings in Pune and Mumbai. Comprehensive inspection, sealant, glass & hardware services."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is included in a facade AMC?", "acceptedAnswer": { "@type": "Answer", "text": "A Fine Glaze facade AMC typically includes: annual inspection of all glass, sealant joints, hardware, and drainage channels; pre-monsoon sealant repair and touch-up; glass cleaning (exterior); hardware lubrication and adjustment; minor repair of damaged or loose gaskets; and priority emergency callout response (24-48 hours) for monsoon-season leaks." } },
      { "@type": "Question", "name": "How much does a facade AMC cost in India?", "acceptedAnswer": { "@type": "Answer", "text": "Facade AMC costs depend on building size, facade type, and access equipment requirements. Typical rates are Rs 15-40 per sq ft per year for curtain wall and structural glazing facades, and Rs 8-20 per sq ft per year for ACP and aluminium window facades. A detailed scope and pricing is provided after a free site assessment." } },
      { "@type": "Question", "name": "How often should a building facade be professionally inspected?", "acceptedAnswer": { "@type": "Answer", "text": "Minimum annual inspection is recommended for all commercial building facades. For coastal buildings (Mumbai, Navi Mumbai) or buildings with structural glazing, bi-annual inspection (pre-monsoon and post-monsoon) is strongly recommended. Fine Glaze's AMC programme includes a written inspection report with photographic evidence after every visit." } },
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
        title="Facade AMC Guide India | What to Expect from Facade Maintenance – Fine Glaze"
        description="Complete guide to facade AMC (Annual Maintenance Contracts) in India. What's included, costs, inspection frequency, and why it matters for your building. By Fine Glaze."
        canonical="https://fineglaze.com/facade-amc-guide"
        keywords="facade AMC India, facade annual maintenance contract, curtain wall AMC Pune, facade maintenance contract Mumbai, building facade inspection India, glass facade AMC"
        ogImage="https://images.unsplash.com/photo-1505765050516-f72dcac9c60e"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      <section className="relative py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Facade AMC <span className="text-gradient-gold">Guide India</span>
            </h1>
            <p className="text-lg text-white/80 mb-8">
              A facade Annual Maintenance Contract (AMC) is the most cost-effective way to protect your building's glass, sealant, and cladding systems — preventing expensive reactive repairs and maintaining property value. Fine Glaze provides comprehensive facade AMC programmes for buildings of all types across Pune and Mumbai.
            </p>
            <div className="flex gap-4">
              <Link to="/contact"><Button size="lg" className="bg-amber-600 hover:bg-amber-700">Get AMC Quote</Button></Link>
              <Link to="/maintenance-services"><Button size="lg" variant="outline">Our Services</Button></Link>
            </div>
          </div>
          <img src="https://images.unsplash.com/photo-1505765050516-f72dcac9c60e" alt="Facade AMC annual maintenance contract India building inspection Fine Glaze" className="rounded-xl shadow-2xl object-cover h-[420px] w-full" loading="eager" width="600" height="420" />
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl space-y-6">
          <h2 className="text-3xl font-bold">Why Every Building Needs a Facade AMC</h2>
          <p className="text-muted-foreground">Building facades are complex engineered systems that deteriorate gradually over time. Without regular professional inspection and maintenance, minor issues — a hairline sealant crack, a loose gasket, a blocked drainage channel — escalate into major water ingress events that damage interiors, disrupt tenants, and require expensive emergency repairs. A facade AMC prevents this cycle.</p>
          <p className="text-muted-foreground mt-4">India's climate makes facade maintenance particularly critical. Mumbai's 2,400mm annual rainfall and saline coastal air accelerate sealant deterioration. Pune's thermal cycling (from 8°C winter nights to 42°C summer afternoons) stresses facade joints with constant expansion and contraction. Pre-monsoon inspection and repair is the single most important facade maintenance activity for any Indian building.</p>

          <h2 className="text-3xl font-bold mt-10">Fine Glaze Facade AMC Scope</h2>
          <p className="text-muted-foreground">A standard Fine Glaze facade AMC includes two annual visits (pre-monsoon April-May and post-monsoon November) covering:</p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
            <li><strong>Full facade visual inspection</strong> — all glass panels, sealant joints, capping, gaskets, drainage weep holes, anchor fixings, and hardware</li>
            <li><strong>Written inspection report</strong> with photographic evidence, condition ratings, and recommended repairs prioritised by urgency</li>
            <li><strong>Sealant repair</strong> — re-sealing of any deteriorating, cracked, or debonded sealant joints identified during inspection (up to a defined area per visit)</li>
            <li><strong>Hardware inspection and lubrication</strong> — all operable windows, louvres, and doors checked for operation, adjusted, and lubricated</li>
            <li><strong>Gasket and weatherseal check</strong> — replacement of any failed EPDM or TPE gaskets</li>
            <li><strong>Drainage channel clearance</strong> — pressure-flush of all weep holes and drainage slots to maintain free drainage</li>
            <li><strong>Priority emergency response</strong> — 24-48 hour response for active leaks during monsoon season outside scheduled visits</li>
          </ul>

          <h2 className="text-3xl font-bold mt-10">Facade AMC Cost Benchmarks India</h2>
          <div className="overflow-x-auto mt-4">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-3 text-left font-semibold">Facade Type</th>
                  <th className="border border-border p-3 text-left font-semibold">AMC Rate (per sq ft / year)</th>
                  <th className="border border-border p-3 text-left font-semibold">Typical Annual Cost (1000 sq m)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-border p-3">Curtain Wall Glazing</td><td className="border border-border p-3">Rs 20–40</td><td className="border border-border p-3">Rs 2.1–4.3 lakh</td></tr>
                <tr className="bg-muted/30"><td className="border border-border p-3">Structural Glazing (SSG)</td><td className="border border-border p-3">Rs 25–45</td><td className="border border-border p-3">Rs 2.7–4.8 lakh</td></tr>
                <tr><td className="border border-border p-3">ACP Cladding</td><td className="border border-border p-3">Rs 8–18</td><td className="border border-border p-3">Rs 0.9–1.9 lakh</td></tr>
                <tr className="bg-muted/30"><td className="border border-border p-3">Aluminium Windows</td><td className="border border-border p-3">Rs 10–20</td><td className="border border-border p-3">Rs 1.1–2.1 lakh</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-10 text-center">What Our AMC Covers</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {["Bi-Annual Professional Inspection", "Pre-Monsoon Sealant Repair", "Hardware Lubrication & Adjustment", "Drainage Channel Clearance", "Gasket & Weatherseal Replacement", "Priority Monsoon Emergency Response"].map(f => (
              <div key={f} className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">{f}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-background rounded-xl p-6 shadow-sm"><h3 className="text-lg font-bold mb-2">What is included in a facade AMC?</h3><p className="text-muted-foreground">A Fine Glaze facade AMC includes: annual inspection of all glass, sealant joints, hardware, and drainage; pre-monsoon sealant repair; glass cleaning; hardware lubrication and adjustment; minor gasket repairs; and priority emergency callout response (24-48 hours) for monsoon-season leaks.</p></div>
            <div className="bg-background rounded-xl p-6 shadow-sm"><h3 className="text-lg font-bold mb-2">How much does a facade AMC cost in India?</h3><p className="text-muted-foreground">Facade AMC rates are Rs 15-40 per sq ft per year for curtain wall and structural glazing, and Rs 8-20 per sq ft per year for ACP and aluminium window facades. Detailed pricing is provided after a free site assessment.</p></div>
            <div className="bg-background rounded-xl p-6 shadow-sm"><h3 className="text-lg font-bold mb-2">How often should a building facade be professionally inspected?</h3><p className="text-muted-foreground">Minimum annual inspection is recommended. For coastal buildings (Mumbai, Navi Mumbai) or structural glazing facades, bi-annual inspection (pre-monsoon and post-monsoon) is strongly recommended. Fine Glaze's AMC includes a written report with photographic evidence after every visit.</p></div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-xl font-bold text-slate-800 mb-5">Related Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { title: "Facade Maintenance", href: "/maintenance-services", desc: "Full maintenance service" },
              { title: "Facade Waterproofing", href: "/facade-waterproofing", desc: "Leak diagnosis & repair" },
              { title: "Curtain Wall Systems", href: "/curtain-wall-systems", desc: "Curtain wall service" },
              { title: "Structural Glazing", href: "/structural-glazing", desc: "Structural glazing" },
              { title: "Facade Contractor Pune", href: "/facade-contractor-pune", desc: "Facade services Pune" },
              { title: "Facade Contractor Mumbai", href: "/facade-contractor-mumbai", desc: "Facade services Mumbai" },
            ].map(r => (
              <Link key={r.href} to={r.href} className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white">
                <ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                <div><p className="font-semibold text-slate-800 text-sm">{r.title}</p><p className="text-xs text-slate-500">{r.desc}</p></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </Layout>
  );
}
