import SEO from "@/components/SEO";
import { RelatedProjects } from "@/components/RelatedProjects";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function ResidentialFacade() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Residential Building Facade Contractor India",
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
    "description": "Residential facade contractor in Pune and Mumbai: glass railings, ACP cladding, aluminium windows and doors for apartments, with in-house shop drawings."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What glass railing is best for apartment balconies in India?", "acceptedAnswer": { "@type": "Answer", "text": "Toughened laminated glass in a frameless base-channel system is a common choice for apartment balconies, because laminated glass holds in place if broken and the view stays clear. The build-up and anchorage come from the structural check." } },
      { "@type": "Question", "name": "How much does facade renovation cost for an existing residential building in India?", "acceptedAnswer": { "@type": "Answer", "text": "Renovation cost depends on scope: re-cladding area, railing length, number of windows, access method and building height. Fine Glaze prepares BOQ-based quotations after a site survey." } },
      { "@type": "Question", "name": "What building height requires curtain wall for residential in India?", "acceptedAnswer": { "@type": "Answer", "text": "No regulation requires curtain wall on residential buildings at any height. It is a design and performance choice, often used on taller premium towers for floor-to-ceiling glass features." } },
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Residential Building Facade Contractor India", "item": "https://fineglaze.com/residential-facade" }
    ]
  };

  return (
    <Layout darkHero>
      <SEO
        title="Residential Facade Contractor in Pune & Mumbai | Fine Glaze"
        description="Residential facade contractor in Pune and Mumbai: glass railings, ACP cladding, aluminium windows and doors for apartments, with in-house shop drawings."
        canonical="https://fineglaze.com/residential-facade"
        keywords="residential facade contractor, apartment facade, villa facade, residential ACP cladding, residential glass railing, aluminium windows"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* HERO */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Residential Building <span className="text-gradient-gold">Facade Contractor India</span>
            </h1>
            <p className="text-lg text-white/80 mb-8">Fine Glaze takes residential facade work in Pune and Mumbai for apartment towers, villas and gated communities: glass railings, windows, ACP cladding and structural glazing.</p>
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
            src="/projects/jindal-house-45-1.webp"
            alt="SS glass railings at Jindal House, Mumbai — completed by Fine Glaze in 2023"
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
          
          <h2 className="text-3xl font-bold">Facade Systems for Residential Buildings</h2>
          <p className="text-muted-foreground">
            Residential buildings increasingly use premium facade elements for thermal comfort, sound control, low upkeep and appearance. Fine Glaze takes residential facade work for apartment towers, villas and gated communities in Pune and Mumbai.
          </p>
          <p className="text-muted-foreground mt-4">
            Common residential systems include <strong>frameless glass railings</strong> for balconies and terraces, <strong>aluminium sliding and casement windows</strong>, <strong>ACP cladding</strong> for elevations, <strong>structural glazing</strong> for feature elements such as bay windows and lobbies, and <strong>glass partitions</strong> for common areas.
          </p>
          <p className="text-muted-foreground mt-4">
            Our documented residential records include Nirmaann Estrellaa in Pune (windows, louvers, aluminium fins and SS glass railings), Salsette-27 in Byculla (railings and canopies), and private residences such as Jindal House and Mittal House in Mumbai.
          </p>
          <p className="text-muted-foreground mt-4">
            For energy comfort, thermally broken aluminium windows with low-E double glazing are a common choice. Savings depend on the whole building and use, so treat any figure with caution and ask for the specification behind it.
          </p>
    
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-10 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-4">
              <div key="Frameless Glass Balcony Railings" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Frameless Glass Balcony Railings</span></div>
              <div key="Thermally Broken Windows" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Thermally Broken Windows</span></div>
              <div key="ACP Building Cladding" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">ACP Building Cladding</span></div>
              <div key="Structural Glazing Features" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Structural Glazing Features</span></div>
              <div key="Developer Quotations on Drawings" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Developer Quotations on Drawings</span></div>
              <div key="DGU Glass Options" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">DGU Glass Options</span></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">What glass railing is best for apartment balconies in India?</h3>
              <p className="text-muted-foreground">Toughened laminated glass in a frameless base-channel system is a common choice for apartment balconies, because laminated glass holds in place if broken and the view stays clear. The build-up and anchorage come from the structural check.</p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">How much does facade renovation cost for an existing residential building in India?</h3>
              <p className="text-muted-foreground">Renovation cost depends on scope: re-cladding area, railing length, number of windows, access method and building height. Fine Glaze prepares BOQ-based quotations after a site survey.</p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">What building height requires curtain wall for residential in India?</h3>
              <p className="text-muted-foreground">No regulation requires curtain wall on residential buildings at any height. It is a design and performance choice, often used on taller premium towers for floor-to-ceiling glass features.</p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-12 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-xl font-bold text-slate-800 mb-5">Explore Related Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link key="/glass-railings" to="/glass-railings" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Glass Railings</p><p className="text-xs text-slate-500">Glass railing systems</p></div></Link>
            <Link key="/glass-railing-pune" to="/glass-railing-pune" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Glass Railing Pune</p><p className="text-xs text-slate-500">Glass railings Pune</p></div></Link>
            <Link key="/acp-aluminium-cladding" to="/acp-aluminium-cladding" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">ACP Cladding</p><p className="text-xs text-slate-500">ACP cladding</p></div></Link>
            <Link key="/aluminium-windows-doors" to="/aluminium-windows-doors" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Aluminium Facade</p><p className="text-xs text-slate-500">Aluminium windows & facade</p></div></Link>
            <Link key="/structural-glazing-pune" to="/structural-glazing-pune" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Structural Glazing Pune</p><p className="text-xs text-slate-500">Structural glazing</p></div></Link>
            <Link key="/facade-contractor-pune" to="/facade-contractor-pune" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Facade Contractor Pune</p><p className="text-xs text-slate-500">Facade contractor Pune</p></div></Link>
          </div>
        </div>
      </section>

      <RelatedProjects heading="Residential projects" keywords={["Jindal House", "Mittal", "Samundra", "Salsette", "Nirmaann"]} />
      <CTASection />
    </Layout>
  );
}
