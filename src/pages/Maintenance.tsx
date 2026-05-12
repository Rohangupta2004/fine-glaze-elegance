import SEO from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Droplets, Hammer, FileCheck, Phone, ArrowRight, ShieldCheck, MapPin, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import { CTASection } from "@/components/home/CTASection";

const Maintenance = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Facade AMC & Maintenance Services",
    "serviceType": "Facade Maintenance & Repair",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Fine Glaze",
      "@id": "https://fineglaze.com",
      "url": "https://fineglaze.com",
      "telephone": "+91-8369233566",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "addressCountry": "IN"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "31",
        "bestRating": "5"
      }
    },
    "description": "Expert facade cleaning, silicon sealant replacement, glass repair, and waterproofing AMC services. Serving Mumbai, Pune & Maharashtra.",
    "areaServed": [
      { "@type": "City", "name": "Mumbai" },
      { "@type": "City", "name": "Pune" },
      { "@type": "City", "name": "Navi Mumbai" },
      { "@type": "State", "name": "Maharashtra" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Facade Maintenance Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Annual Maintenance Contract (AMC)" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Silicon Sealant Replacement" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Glass Panel Replacement" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Facade Waterproofing" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Rope Access Facade Cleaning" } }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why is water leaking through my building facade?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Facade water leakage typically occurs due to degraded EPDM gaskets, aged or shrunk silicon sealant, cracked glass panels, or failed expansion joints. In Pune and Mumbai, silicone typically lasts 8–12 years before requiring replacement. Fine Glaze identifies leak sources and applies fresh industrial-grade Dow Corning weather silicone to permanently seal the facade."
        }
      },
      {
        "@type": "Question",
        "name": "How often should building facade glass be cleaned?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In Mumbai and Pune, professional facade cleaning is recommended twice a year — once before monsoon (April–May) and once after (October–November). Skipping cleaning allows hard water mineral deposits and pollution to permanently stain the glass, which is expensive to remediate."
        }
      },
      {
        "@type": "Question",
        "name": "What is included in a Facade AMC (Annual Maintenance Contract)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Fine Glaze's Facade AMC includes 2 professional cleaning cycles per year, structural facade audit, sealant inspection & minor reapplication, glass crack detection, hardware tightening, and priority emergency repair service. AMC pricing is custom based on building area and facade type."
        }
      },
      {
        "@type": "Question",
        "name": "Is rope access facade cleaning safe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Fine Glaze technicians follow strict safety norms including full-body harnesses, double-anchor rope access systems, safety helmets, and ground barricading during cleaning. All technicians are insured. For buildings above 10 floors, we use industrial rope access equipment rated to 25kN tensile strength."
        }
      },
      {
        "@type": "Question",
        "name": "How much does facade waterproofing and silicon sealant replacement cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Silicon sealant replacement costs approximately ₹120–₹280 per running metre depending on joint width and accessibility. Facade waterproofing audits start at ₹5,000 for inspection + quotation. Full projects are priced based on area, height, and scope. Fine Glaze provides free inspection visits for AMC enquiries."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://fineglaze.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Facade Maintenance & AMC", "item": "https://fineglaze.com/maintenance-services" }
    ]
  };

  return (
    <Layout darkHero>
      <SEO
        title="Facade AMC & Maintenance Services Mumbai & Pune | Glass Repair, Waterproofing & Cleaning – Fine Glaze"
        description="Expert facade maintenance, glass repair, silicon sealant replacement & building waterproofing. Annual Maintenance Contracts (AMC) with 2 cleaning cycles/year. Serving Mumbai, Pune & Maharashtra. Free inspection."
        canonical="https://fineglaze.com/maintenance-services"
        keywords="facade maintenance Mumbai, AMC services Pune, building facade waterproofing, glass facade repair, silicon sealant replacement, facade cleaning high rise, building maintenance contract Maharashtra, rope access cleaning Mumbai, glass panel replacement"
        ogImage="https://fineglaze.com/Amc1.webp"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* HERO */}
      <section className="relative h-[70vh] flex items-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/Amc1.webp"
            alt="Rope Access Facade Cleaning and Maintenance - Fine Glaze"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent" />
        </div>

        <div className="container relative z-10 px-4 max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-sm font-medium border border-emerald-500/30">
              <ShieldCheck size={13} /> 100% Safety Compliant
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-5 leading-tight">
            Restore Your Building's <span className="text-gradient-gold">Shine</span>
          </h1>
          <p className="text-lg text-slate-300 mb-4 leading-relaxed">
            Water leakage? Stained glass? Degraded sealant? Our expert team diagnoses and repairs facade issues fast — protecting your property value.
          </p>
          <p className="text-slate-400 text-sm mb-8">
            Trusted by <strong className="text-white">Embassy REIT · LTIMindtree · CHS Societies</strong> across Maharashtra
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 gap-2 w-full sm:w-auto">
                Request Free Inspection <ArrowRight size={15} />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                View Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="py-6 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            {[
              { value: "2×/yr", label: "AMC Cleaning Cycles" },
              { value: "24 hrs", label: "Emergency Response" },
              { value: "Insured", label: "All Technicians" },
              { value: "10+", label: "Years Experience" },
            ].map((s) => (
              <div key={s.label} className="text-white">
                <p className="text-lg font-extrabold text-amber-400">{s.value}</p>
                <p className="text-xs text-slate-400 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section className="py-24 bg-slate-50">
        <div className="container px-4 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-3 text-slate-900">Our Facade Maintenance Services</h2>
          <p className="text-center text-slate-500 mb-12">Comprehensive care for every type of building facade</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-7 shadow-lg border-b-4 border-blue-500 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-13 h-13 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-5 w-14 h-14">
                <Droplets size={26} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Waterproofing & Sealant</h3>
              <p className="text-slate-600 mb-5 text-sm leading-relaxed">
                We identify and permanently seal facade leak points using industrial-grade Dow Corning / Sika weather silicone. Ideal before every monsoon season.
              </p>
              <ul className="space-y-2 text-sm">
                {["Silicon joint replacement", "EPDM gasket renewal", "Expansion joint sealing", "Water leak audit"].map(i => (
                  <li key={i} className="flex items-center gap-2 text-slate-600">
                    <CheckCircle2 size={14} className="text-blue-500 shrink-0" />{i}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl p-7 shadow-lg border-b-4 border-amber-500 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 mb-5">
                <FileCheck size={26} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Facade AMC Contracts</h3>
              <p className="text-slate-600 mb-5 text-sm leading-relaxed">
                Annual Maintenance Contract for total peace of mind. We handle everything — twice-yearly cleaning, audits, and priority emergency repairs.
              </p>
              <ul className="space-y-2 text-sm">
                {["2 cleaning cycles per year", "Structural facade audit", "Hardware tightening", "Priority emergency support"].map(i => (
                  <li key={i} className="flex items-center gap-2 text-slate-600">
                    <CheckCircle2 size={14} className="text-amber-500 shrink-0" />{i}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl p-7 shadow-lg border-b-4 border-emerald-500 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-5">
                <Hammer size={26} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Glass & Facade Repair</h3>
              <p className="text-slate-600 mb-5 text-sm leading-relaxed">
                Shattered glass, cracked panels, loose hardware? Our team safely replaces broken components at any height using rope access and scaffolding.
              </p>
              <ul className="space-y-2 text-sm">
                {["Glass panel replacement", "Rope access installation", "Hardware replacement", "Structural damage repair"].map(i => (
                  <li key={i} className="flex items-center gap-2 text-slate-600">
                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />{i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHY MAINTAIN */}
      <section className="py-20 bg-white">
        <div className="container px-4 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-3 text-slate-900">Why Regular Facade Maintenance Matters</h2>
          <p className="text-center text-slate-500 mb-10">Prevention is 5× cheaper than repair</p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: "💧", title: "Prevent Costly Water Damage", desc: "A single degraded sealant joint can lead to ₹5–20 lakh in interior damage from water ingress. Annual inspection costs a fraction of this." },
              { icon: "✨", title: "Preserve Property Value", desc: "Stained, dirty facades reduce commercial property valuation by 10–15%. Regular cleaning maintains curb appeal and tenant satisfaction." },
              { icon: "🔒", title: "Ensure Occupant Safety", desc: "Loose glass panels and compromised structural fixings are safety hazards. Our audits catch issues before they become emergencies." },
              { icon: "⏱", title: "Extend Facade Life", desc: "Regular sealant maintenance extends facade lifespan from 15 to 25+ years. Protecting your original capital investment." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 p-5 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-3xl shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL SEO */}
      <section className="py-14 bg-slate-900 text-white">
        <div className="container px-4 text-center">
          <h2 className="text-2xl font-bold mb-2">Facade Maintenance Across Maharashtra</h2>
          <p className="text-slate-400 text-sm mb-7">Serving commercial complexes, IT parks, hotels, malls & residential societies</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Mumbai – All Suburbs", "Pune – All Areas", "Navi Mumbai", "Thane", "Nashik", "Lonavala"].map((city) => (
              <div key={city} className="flex items-center gap-2 bg-white/10 px-5 py-2 rounded-full hover:bg-amber-600 transition-colors cursor-default text-sm">
                <MapPin size={13} /><span>{city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container px-4 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-3">Frequently Asked Questions</h2>
          <p className="text-center text-slate-500 mb-10">Common questions about facade maintenance and AMC services</p>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                q: "Why is water leaking through my building facade?",
                a: "Leakage occurs due to degraded EPDM gaskets, aged silicon sealant, cracked glass, or failed expansion joints. Silicone typically lasts 8–12 years. Fine Glaze diagnoses leak sources and applies fresh Dow Corning weather silicone.",
              },
              {
                q: "How often should building facade glass be cleaned?",
                a: "In Mumbai and Pune, twice a year — before monsoon (April–May) and after (Oct–Nov). Skipping allows hard water staining to permanently etch the glass surface, which is very expensive to fix.",
              },
              {
                q: "What is included in a Facade AMC?",
                a: "Fine Glaze AMC includes 2 cleaning cycles/year, structural audit, sealant inspection, minor reapplication, glass crack detection, hardware tightening, and priority emergency repairs.",
              },
              {
                q: "Is rope access facade cleaning safe?",
                a: "Yes. Our technicians use full-body harnesses, double-anchor rope access systems, helmets, and ground barricading. All staff are insured and trained in safe rope access techniques.",
              },
              {
                q: "How much does silicon sealant replacement cost?",
                a: "Silicon sealant replacement costs ₹120–₹280 per running metre depending on joint width and height. Free inspection visit available for AMC enquiries.",
              },
              {
                q: "Do you work with Residential Housing Societies?",
                a: "Absolutely. We work with Cooperative Housing Societies (CHS) for balcony repairs, terrace waterproofing, glass replacement, and facade cleaning across Mumbai and Pune.",
              },
            ].map((faq, i) => (
              <div key={i} className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                <h3 className="text-sm font-bold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 bg-amber-600 text-white">
        <div className="container px-4 text-center max-w-3xl mx-auto">
          <Wrench size={36} className="mx-auto mb-5 opacity-80" />
          <h2 className="text-3xl font-bold mb-4">Is Your Building Monsoon Ready?</h2>
          <p className="text-amber-100 text-lg mb-8">
            Book a free facade inspection today. We check for loose silicone, cracked glass, water entry points, and structural risks.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="text-amber-700 hover:text-amber-800 font-bold px-10 gap-2">
                Book Free Inspection <ArrowRight size={16} />
              </Button>
            </Link>
            <a href="tel:+918369233566">
              <Button size="lg" className="bg-white/20 hover:bg-white/30 text-white border border-white/30 gap-2 px-8">
                <Phone size={16} /> Call Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-12 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-xl font-bold text-slate-800 mb-5">Our Other Facade Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { title: "Curtain Wall Systems", href: "/curtain-wall-systems", desc: "New facade installation" },
              { title: "Structural Glazing", href: "/structural-glazing", desc: "Glass facade systems" },
              { title: "ACP Cladding", href: "/acp-aluminium-cladding", desc: "Composite panel facades" },
              { title: "Glass Railings", href: "/glass-railings", desc: "Balcony & staircase railings" },
              { title: "Aluminium Facade", href: "/aluminium-facade", desc: "Aluminium systems" },
              { title: "All Services", href: "/services", desc: "View all 8 categories" },
            ].map((link) => (
              <Link key={link.href} to={link.href} className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white">
                <ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                <div>
                  <p className="font-semibold text-slate-800 text-sm">{link.title}</p>
                  <p className="text-xs text-slate-500">{link.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Maintenance;
