import SEO from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function FacadeContractorThane() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Facade Contractor in Thane",
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
    "areaServed": [{ "@type": "City", "name": "Thane" }, { "@type": "State", "name": "Maharashtra" }],
    "description": "Facade contractor in Thane. Curtain walls, ACP cladding, structural glazing & glass railings for Thane's residential and commercial buildings. Free site visit."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Does Fine Glaze serve Thane for facade work?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Fine Glaze serves all of Thane city including Majiwada, Wagle Estate, Ghodbunder Road, Kolshet, Manpada, and Thane West. We provide curtain walls, ACP cladding, structural glazing, glass railings, aluminium windows, and facade AMC services." } },
      { "@type": "Question", "name": "What facade systems are popular in Thane?", "acceptedAnswer": { "@type": "Answer", "text": "Thane's fast-growing residential market drives demand for glass balcony railings and ACP cladding for apartment elevations. Commercial buildings along Ghodbunder Road increasingly specify curtain wall systems and structural glazing for modern office park aesthetics." } },
      { "@type": "Question", "name": "What is the cost of ACP cladding in Thane?", "acceptedAnswer": { "@type": "Answer", "text": "ACP cladding in Thane costs Rs 190-450 per sq ft installed, comparable to Navi Mumbai rates. Costs depend on panel brand, FR-grade specification, finish quality, and sub-frame complexity. Contact Fine Glaze for a free site assessment and BOQ." } },
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Facade Contractor in Thane", "item": "https://fineglaze.com/facade-contractor-thane" }
    ]
  };

  return (
    <Layout darkHero>
      <SEO
        title="Facade Contractor in Thane | Glass, ACP & Curtain Wall – Fine Glaze"
        description="Facade contractor in Thane. Curtain walls, ACP cladding, structural glazing & glass railings for Thane's growing commercial and residential market. Free site visit."
        canonical="https://fineglaze.com/facade-contractor-thane"
        keywords="facade contractor Thane, ACP cladding Thane, glass facade Thane, curtain wall Thane, glass railing Thane, building facade Ghodbunder Road"
        ogImage="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      <section className="relative py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Facade Contractor <span className="text-gradient-gold">in Thane</span>
            </h1>
            <p className="text-lg text-white/80 mb-8">
              Fine Glaze serves Thane's booming residential and commercial real estate market with complete facade solutions — ACP cladding, curtain walls, glass railings, structural glazing, and facade AMC — all engineered for Maharashtra's coastal-proximate environment.
            </p>
            <div className="flex gap-4">
              <Link to="/contact"><Button size="lg" className="bg-amber-600 hover:bg-amber-700">Get Free Quote</Button></Link>
              <Link to="/portfolio"><Button size="lg" variant="outline">View Projects</Button></Link>
            </div>
          </div>
          <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e" alt="Facade contractor Thane commercial building Fine Glaze" className="rounded-xl shadow-2xl object-cover h-[420px] w-full" loading="eager" width="600" height="420" />
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl space-y-6">
          <h2 className="text-3xl font-bold">Serving Thane's Fast-Growing Real Estate Market</h2>
          <p className="text-muted-foreground">
            Thane has emerged as one of Mumbai Metropolitan Region's most dynamic real estate markets — with large-scale residential townships, growing commercial corridors along Ghodbunder Road, and expanding industrial zones in Wagle Estate and Thane MIDC. Fine Glaze brings its full range of facade capabilities to Thane, serving both the premium residential segment and the growing commercial office market.
          </p>
          <p className="text-muted-foreground mt-4">
            For Thane's residential apartment towers — particularly the large-scale developments along Ghodbunder Road, Manpada, and Kolshet — Fine Glaze offers competitive glass railing packages, ACP cladding for building elevations, and aluminium window replacement programmes. Our bulk developer pricing is structured for projects of 100+ apartments, delivering consistent quality across all floors and blocks.
          </p>
          <p className="text-muted-foreground mt-4">
            For Thane's commercial sector — corporate offices, malls, and mixed-use developments — Fine Glaze provides curtain wall systems, structural glazing, and ACP cladding that meet the standards expected by Grade-A commercial tenants. We are experienced in working within Thane Municipal Corporation (TMC) regulatory requirements and obtaining necessary approvals for facade work.
          </p>
          <p className="text-muted-foreground mt-4">
            Thane's proximity to Mumbai means our coastal-engineering standards — marine-grade hardware, PVDF coatings, and cyclone zone wind load design — are applied as standard to all Thane projects. Fine Glaze's Thane projects benefit from our established supply chain connecting Pune and Mumbai, ensuring competitive material pricing and reliable delivery schedules.
          </p>
          <p className="text-muted-foreground mt-4">
            Fine Glaze also provides <strong>facade AMC (Annual Maintenance Contract)</strong> services for Thane's existing building stock — an increasingly important service as the buildings constructed during Thane's construction boom of 2005-2015 reach the end of their original sealant warranty period and require professional maintenance programmes.
          </p>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-10 text-center">What We Offer in Thane</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {["ACP Cladding for Residential & Commercial", "Curtain Wall Systems", "Frameless Glass Railings", "Structural Glazing", "Aluminium Windows & Doors", "Facade AMC & Waterproofing"].map(f => (
              <div key={f} className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">{f}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-background rounded-xl p-6 shadow-sm"><h3 className="text-lg font-bold mb-2">Does Fine Glaze serve Thane for facade work?</h3><p className="text-muted-foreground">Yes. Fine Glaze serves all of Thane city including Majiwada, Wagle Estate, Ghodbunder Road, Kolshet, Manpada, and Thane West. We provide curtain walls, ACP cladding, structural glazing, glass railings, aluminium windows, and facade AMC services.</p></div>
            <div className="bg-background rounded-xl p-6 shadow-sm"><h3 className="text-lg font-bold mb-2">What facade systems are popular in Thane?</h3><p className="text-muted-foreground">Thane's fast-growing residential market drives demand for glass balcony railings and ACP cladding for apartment elevations. Commercial buildings along Ghodbunder Road increasingly specify curtain wall systems and structural glazing for modern office park aesthetics.</p></div>
            <div className="bg-background rounded-xl p-6 shadow-sm"><h3 className="text-lg font-bold mb-2">What is the cost of ACP cladding in Thane?</h3><p className="text-muted-foreground">ACP cladding in Thane costs Rs 190-450 per sq ft installed. Costs depend on panel brand, FR-grade specification, finish quality, and sub-frame complexity. Contact Fine Glaze for a free site assessment and BOQ.</p></div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-xl font-bold text-slate-800 mb-5">Explore Related Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { title: "Facade Contractor Mumbai", href: "/facade-contractor-mumbai", desc: "Mumbai facade services" },
              { title: "Facade Contractor Navi Mumbai", href: "/facade-contractor-navi-mumbai", desc: "Navi Mumbai facade" },
              { title: "ACP Cladding", href: "/acp-aluminium-cladding", desc: "ACP composite panels" },
              { title: "Glass Railings", href: "/glass-railings", desc: "Frameless glass railings" },
              { title: "Curtain Wall Systems", href: "/curtain-wall-systems", desc: "Curtain wall glazing" },
              { title: "Facade Maintenance", href: "/maintenance-services", desc: "AMC & repair services" },
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
