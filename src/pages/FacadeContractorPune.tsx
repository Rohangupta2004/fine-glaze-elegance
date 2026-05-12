import SEO from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function FacadeContractorPune() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Facade Contractor in Pune",
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
    "description": "Top-rated facade contractor in Pune. Curtain walls, structural glazing, ACP cladding, glass railings & facade maintenance. Serving Hinjewadi, Kharadi, Baner. Free site visit."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "How do I choose a facade contractor in Pune?", "acceptedAnswer": { "@type": "Answer", "text": "Look for: a portfolio of 20+ completed projects with verifiable references; in-house technical team with structural glazing certification; direct relationships with glass and aluminium suppliers; documented quality assurance process; and post-completion AMC capability. Fine Glaze meets all criteria." } },
      { "@type": "Question", "name": "What does facade work cost per sq ft in Pune?", "acceptedAnswer": { "@type": "Answer", "text": "Facade costs in Pune vary by system: ACP cladding Rs 180-450/sq ft, structural glazing Rs 300-900/sq ft, curtain wall Rs 350-1200/sq ft, aluminium windows Rs 350-800/sq ft. Fine Glaze provides BOQ-based quotations after a free site assessment." } },
      { "@type": "Question", "name": "Does Fine Glaze handle facade design as well as installation in Pune?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our in-house design team prepares facade concepts, shop drawings, structural calculations, and material schedules. We coordinate with architects and structural consultants from concept approval to as-built documentation." } },
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Facade Contractor in Pune", "item": "https://fineglaze.com/facade-contractor-pune" }
    ]
  };

  return (
    <Layout darkHero>
      <SEO
        title="Facade Contractor in Pune | Glass, ACP & Curtain Wall – Fine Glaze"
        description="Top-rated facade contractor in Pune. Curtain walls, structural glazing, ACP cladding, glass railings & facade maintenance. Serving Hinjewadi, Kharadi, Baner. Free site visit."
        canonical="https://fineglaze.com/facade-contractor-pune"
        keywords="facade contractor Pune, building facade Pune, glass facade contractor Pune, curtain wall contractor Pune, ACP cladding Pune, facade company Pune Maharashtra"
        ogImage="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* HERO */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Facade Contractor <span className="text-gradient-gold">in Pune</span>
            </h1>
            <p className="text-lg text-white/80 mb-8">Fine Glaze is Pune's most trusted facade contractor, delivering complete building envelope solutions for developers, architects, builders, and corporate clients. From initial design consultation through fabrication, installation, and long-term AMC — we manage every stage of the facade lifecycle.</p>
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
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
            alt="Facade contractor Pune commercial building Fine Glaze"
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
          
          <h2 className="text-3xl font-bold">Complete Facade Solutions for Pune's Buildings</h2>
          <p className="text-muted-foreground">
            With over <strong>5 years of specialised facade experience</strong> and <strong>50+ completed projects</strong> across Pune and Maharashtra, Fine Glaze brings contractor-grade reliability with consultant-level technical expertise. Our services span curtain walls, structural glazing, ACP cladding, aluminium windows and doors, glass railings, and facade maintenance and AMC.
          </p>
          <p className="text-muted-foreground mt-4">
            Pune's rapid urban expansion — particularly in Hinjewadi (IT), Kharadi (commercial), Wakad (residential), and Undri (mixed-use) — demands facade contractors who can manage complex projects with strict quality, safety, and timeline standards. Fine Glaze operates with an in-house design team, a QHSE-compliant site execution team, and a dedicated procurement desk that sources from certified global suppliers.
          </p>
          <p className="text-muted-foreground mt-4">
            Our notable Pune projects include office towers in Hinjewadi IT Park Phases 1 &amp; 2, luxury residential projects in Koregaon Park and Kalyani Nagar, hospital buildings in Kharadi and Viman Nagar, and mixed-use complexes in Magarpatta and Undri.
          </p>
          <p className="text-muted-foreground mt-4">
            Fine Glaze maintains a strong Pune team with dedicated roles: project managers, site supervisors, quality inspectors, and a local procurement liaison. This structure allows us to run multiple simultaneous projects in Pune without compromising attention on any single project. Our Pune-based team means faster response times, shorter material lead times, and lower mobilisation costs compared to out-of-city contractors.
          </p>
          <p className="text-muted-foreground mt-4">
            We are a preferred vendor for several Tier-1 Pune developers and have established long-term relationships with major architects and PMC firms operating in the Pune market. Our references are available upon request for all project types and budget ranges.
          </p>
    
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-10 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-4">
              <div key="Curtain Wall Systems" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Curtain Wall Systems</span></div>
              <div key="Structural Glazing" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Structural Glazing</span></div>
              <div key="ACP & Aluminium Cladding" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">ACP & Aluminium Cladding</span></div>
              <div key="Glass Railings" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Glass Railings</span></div>
              <div key="Facade AMC & Maintenance" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Facade AMC & Maintenance</span></div>
              <div key="Turnkey Project Management" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Turnkey Project Management</span></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">How do I choose a facade contractor in Pune?</h3>
              <p className="text-muted-foreground">Look for: a portfolio of 20+ completed projects with verifiable references; in-house technical team with structural glazing certification; direct relationships with glass and aluminium suppliers; documented quality assurance process; and post-completion AMC capability. Fine Glaze meets all criteria.</p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">What does facade work cost per sq ft in Pune?</h3>
              <p className="text-muted-foreground">Facade costs in Pune vary by system: ACP cladding Rs 180-450/sq ft, structural glazing Rs 300-900/sq ft, curtain wall Rs 350-1200/sq ft, aluminium windows Rs 350-800/sq ft. Fine Glaze provides BOQ-based quotations after a free site assessment.</p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">Does Fine Glaze handle facade design as well as installation in Pune?</h3>
              <p className="text-muted-foreground">Yes. Our in-house design team prepares facade concepts, shop drawings, structural calculations, and material schedules. We coordinate with architects and structural consultants from concept approval to as-built documentation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-12 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-xl font-bold text-slate-800 mb-5">Explore Related Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link key="/curtain-wall-pune" to="/curtain-wall-pune" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Curtain Wall Pune</p><p className="text-xs text-slate-500">Unitized curtain walls</p></div></Link>
            <Link key="/structural-glazing-pune" to="/structural-glazing-pune" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Structural Glazing Pune</p><p className="text-xs text-slate-500">Frameless glass facades</p></div></Link>
            <Link key="/acp-cladding-pune" to="/acp-cladding-pune" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">ACP Cladding Pune</p><p className="text-xs text-slate-500">ACP panel cladding</p></div></Link>
            <Link key="/glass-railing-pune" to="/glass-railing-pune" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Glass Railing Pune</p><p className="text-xs text-slate-500">Balcony glass railings</p></div></Link>
            <Link key="/facade-contractor-mumbai" to="/facade-contractor-mumbai" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Facade Contractor Mumbai</p><p className="text-xs text-slate-500">Mumbai facade services</p></div></Link>
            <Link key="/maintenance-services" to="/maintenance-services" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Facade Maintenance</p><p className="text-xs text-slate-500">AMC and maintenance</p></div></Link>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
