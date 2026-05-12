import SEO from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function IndustrialFacade() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Industrial Building Facade Contractor India",
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
    "description": "Industrial building facade contractor in India. ACP cladding, metal composite panels, aluminium windows for factories, warehouses & industrial facilities. Maharashtra projects."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is the most cost-effective facade for an industrial building in India?", "acceptedAnswer": { "@type": "Answer", "text": "For industrial buildings in India, FR-grade ACP with polyester powder coating (not PVDF) is typically the most cost-effective option — balancing fire safety compliance, adequate weather performance, and low installed cost. For office blocks within industrial facilities, PVDF-coated ACP is recommended for better long-term appearance." } },
      { "@type": "Question", "name": "Does Fine Glaze work in MIDC zones in Maharashtra?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Fine Glaze regularly works in Pune's Bhosari, Pimpri, Chakan, and Hadapsar MIDC zones, and Navi Mumbai's Mahape and Turbhe MIDC corridors. We understand MIDC building regulations, local contractor coordination requirements, and the logistics of working in active industrial zones." } },
      { "@type": "Question", "name": "What windows are recommended for factory buildings in India?", "acceptedAnswer": { "@type": "Answer", "text": "For factory and warehouse buildings, aluminium fixed lights with 6mm toughened glass in simple aluminium frames are the most practical and cost-effective solution. Where natural ventilation is required, aluminium louvre windows or top-hung ventilators are recommended. Fine Glaze sizes window openings to meet NBC 2016 minimum daylight factor requirements for industrial buildings." } },
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Industrial Building Facade Contractor India", "item": "https://fineglaze.com/industrial-facade" }
    ]
  };

  return (
    <Layout darkHero>
      <SEO
        title="Industrial Building Facade Contractor India | ACP & Metal Cladding – Fine Glaze"
        description="Industrial building facade contractor in India. ACP cladding, metal composite panels, aluminium windows for factories, warehouses & industrial facilities. Maharashtra projects."
        canonical="https://fineglaze.com/industrial-facade"
        keywords="industrial building facade contractor India, industrial ACP cladding Maharashtra, factory cladding Pune, warehouse facade India, MIDC facade contractor, industrial facade Navi Mumbai"
        ogImage="https://images.unsplash.com/photo-1486325212027-8081e485255e"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* HERO */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Industrial Building <span className="text-gradient-gold">Facade Contractor India</span>
            </h1>
            <p className="text-lg text-white/80 mb-8">Industrial buildings — factories, warehouses, pharmaceutical plants, and logistics facilities — require facade systems that prioritise durability, weather resistance, maintenance efficiency, and structural performance over architectural complexity. Fine Glaze provides cost-effective, high-durability facade solutions for industrial buildings across Maharashtra.</p>
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
            src="https://images.unsplash.com/photo-1486325212027-8081e485255e"
            alt="Industrial building ACP cladding facade contractor India Fine Glaze"
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
          
          <h2 className="text-3xl font-bold">Industrial Facade Systems — Durability First</h2>
          <p className="text-muted-foreground">
            Industrial facilities operate in demanding environments — chemical exposure, heavy vehicle vibration, thermal cycling from process heat, and reduced maintenance access windows. Fine Glaze's industrial facade systems are engineered for these conditions, prioritising service life and weather performance over aesthetic complexity.
          </p>
          <p className="text-muted-foreground mt-4">
            The most suitable facade systems for industrial buildings in India include: <strong>FR-grade ACP cladding</strong> with heavy-gauge aluminium sub-frames for administrative blocks and office areas; <strong>Metal composite panels (MCM)</strong> with aluminium or steel face for extreme durability in production and warehouse areas; <strong>Aluminium fixed windows</strong> with toughened glass for natural light without compromising thermal envelope; and <strong>Polycarbonate or translucent sheeting</strong> for controlled diffused daylighting in production halls without direct glare.
          </p>
          <p className="text-muted-foreground mt-4">
            Fine Glaze regularly works in MIDC (Maharashtra Industrial Development Corporation) zones including Pune's Bhosari, Pimpri, and Chakan MIDC, and Navi Mumbai's Mahape and Turbhe MIDC corridors. Our familiarity with MIDC building regulations, local authorities, and the specific facade needs of industrial clients means we can mobilise quickly and deliver cost-effective results.
          </p>
          <p className="text-muted-foreground mt-4">
            Pharmaceutical manufacturing facilities in India are subject to GMP (Good Manufacturing Practice) requirements that extend to building exteriors. Fine Glaze provides smooth, chemical-resistant ACP cladding and sealed window systems appropriate for pharma exterior walls in containment and controlled environment zones, in compliance with WHO and PICS GMP guidelines.
          </p>
    
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-10 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-4">
              <div key="FR-Grade ACP for Industrial" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">FR-Grade ACP for Industrial</span></div>
              <div key="Heavy-Gauge Aluminium Sub-Frames" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Heavy-Gauge Aluminium Sub-Frames</span></div>
              <div key="MIDC Zone Experience" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">MIDC Zone Experience</span></div>
              <div key="Pharma GMP Compliant Cladding" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Pharma GMP Compliant Cladding</span></div>
              <div key="Metal Composite Panels" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Metal Composite Panels</span></div>
              <div key="Cost-Effective Industrial Specs" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Cost-Effective Industrial Specs</span></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">What is the most cost-effective facade for an industrial building in India?</h3>
              <p className="text-muted-foreground">For industrial buildings in India, FR-grade ACP with polyester powder coating (not PVDF) is typically the most cost-effective option — balancing fire safety compliance, adequate weather performance, and low installed cost. For office blocks within industrial facilities, PVDF-coated ACP is recommended for better long-term appearance.</p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">Does Fine Glaze work in MIDC zones in Maharashtra?</h3>
              <p className="text-muted-foreground">Yes. Fine Glaze regularly works in Pune's Bhosari, Pimpri, Chakan, and Hadapsar MIDC zones, and Navi Mumbai's Mahape and Turbhe MIDC corridors. We understand MIDC building regulations, local contractor coordination requirements, and the logistics of working in active industrial zones.</p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">What windows are recommended for factory buildings in India?</h3>
              <p className="text-muted-foreground">For factory and warehouse buildings, aluminium fixed lights with 6mm toughened glass in simple aluminium frames are the most practical and cost-effective solution. Where natural ventilation is required, aluminium louvre windows or top-hung ventilators are recommended. Fine Glaze sizes window openings to meet NBC 2016 minimum daylight factor requirements for industrial buildings.</p>
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
            <Link key="/aluminium-facade" to="/aluminium-facade" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Aluminium Facade</p><p className="text-xs text-slate-500">Aluminium facade</p></div></Link>
            <Link key="/facade-contractor-pune" to="/facade-contractor-pune" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Facade Contractor Pune</p><p className="text-xs text-slate-500">Facade contractor Pune</p></div></Link>
            <Link key="/facade-contractor-navi-mumbai" to="/facade-contractor-navi-mumbai" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Facade Contractor Navi Mumbai</p><p className="text-xs text-slate-500">Navi Mumbai facade</p></div></Link>
            <Link key="/maintenance-services" to="/maintenance-services" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Facade Maintenance</p><p className="text-xs text-slate-500">AMC & maintenance</p></div></Link>
            <Link key="/contact" to="/contact" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Get a Quote</p><p className="text-xs text-slate-500">Free consultation</p></div></Link>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
