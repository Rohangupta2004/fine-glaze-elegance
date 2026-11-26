import SEO from "@/components/SEO";
import PageHero from "@/components/common/PageHero";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { Link } from "react-router-dom";
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
    "description": "Industrial facade contractor in Pune and Mumbai: ACP and metal cladding for factories and warehouses, with in-house shop drawings and own Pune unit."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is the most cost-effective facade for an industrial building in India?", "acceptedAnswer": { "@type": "Answer", "text": "Fire-retardant ACP with a durable coating is often a practical choice for industrial buildings, balancing fire requirements, weather performance and installed cost. Office blocks may justify a higher-grade finish. Confirm with your consultant." } },
      { "@type": "Question", "name": "Does Fine Glaze work in MIDC zones in Maharashtra?", "acceptedAnswer": { "@type": "Answer", "text": "Fine Glaze takes industrial facade work in Maharashtra, and our documented work includes Navi Mumbai (Mahape) and Pune. We coordinate access and logistics with the site contractor in active industrial zones." } },
      { "@type": "Question", "name": "What windows are recommended for factory buildings in India?", "acceptedAnswer": { "@type": "Answer", "text": "Factories commonly use aluminium fixed lights with toughened glass, plus louver windows or top-hung ventilators where natural ventilation is needed. Opening sizes should follow the daylight and ventilation requirements in the project brief and applicable codes." } },
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
        title="Industrial Facade Contractor in Pune & Mumbai | Fine Glaze"
        description="Industrial facade contractor in Pune and Mumbai: ACP and metal cladding for factories and warehouses, with in-house shop drawings and own Pune unit."
        canonical="https://fineglaze.com/industrial-facade"
        keywords="industrial facade contractor, factory facade, warehouse facade, industrial cladding, industrial curtain wall"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* HERO */}
      <PageHero
        crumbs={[{ label: "Industrial Building Facade Contractor India" }]}
        title={<>Industrial Building <span className="text-gradient-gold">Facade Contractor India</span></>}
        intro="Fine Glaze takes industrial facade work in Pune and Mumbai: ACP and metal cladding, windows and sub-frames for factories, warehouses and plants, fabricated at our own unit in Pisoli, Pune."
        secondary={{ label: "View Projects", to: "/portfolio" }}
        image={{ src: "/projects/nanavati-max-hospital-39-2.webp", alt: "ACP cladding installation in progress at Nanavati Max Hospital, Vile Parle, Mumbai — Fine Glaze for L&T", width: 600, height: 420 }}
      />

      {/* RICH CONTENT */}
      <section className="fg-sec">
        <div className="fg-wrap fg-prose">
          
          <h2>Industrial Facade Systems: Durability First</h2>
          <p className="text-muted-foreground">
            Industrial buildings such as factories and warehouses need facades that put durability, weather resistance and easy upkeep ahead of architectural complexity. Exposure to dust, vibration, heat and limited maintenance windows shapes the choice of system.
          </p>
          <p className="text-muted-foreground mt-4">
            Suitable systems include <strong>fire-retardant ACP cladding</strong> on administrative blocks, <strong>metal composite panels</strong> in production and warehouse areas, <strong>aluminium fixed windows</strong> with toughened glass, and <strong>translucent sheeting</strong> for daylight in production halls. Specifications follow the project brief.
          </p>
          <p className="text-muted-foreground mt-4">
            Fine Glaze, based in Pune and Mumbai, takes industrial facade work in Maharashtra and elsewhere in India. Our own fabrication unit in Pisoli, Pune handles aluminium and mild steel cutting, fabrication and assembly, and ACP routing and panel preparation.
          </p>
          <p className="text-muted-foreground mt-4">
            Facilities that follow GMP or similar rules, such as pharmaceutical plants, usually have exterior requirements set by their consultants. Share the specification and we will review scope against it.
          </p>
    
        </div>
      </section>

      {/* FEATURES */}
      <section className="fg-sec">
        <div className="fg-wrap">
          <h2>What We Offer</h2>
          <div className="fg-grid c2">
              <div key="FR-Grade ACP for Industrial" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">FR-Grade ACP for Industrial</span></div>
              <div key="Heavy-Gauge Aluminium Sub-Frames" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Heavy-Gauge Aluminium Sub-Frames</span></div>
              <div key="Industrial Zone Projects" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Industrial Zone Projects</span></div>
              <div key="Cladding to Pharma Specifications" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Cladding to Pharma Specifications</span></div>
              <div key="Metal Composite Panels" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Metal Composite Panels</span></div>
              <div key="Durable Industrial Specs" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Durable Industrial Specs</span></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="fg-sec">
        <div className="fg-wrap">
          <h2>Frequently Asked Questions</h2>
          <div className="fg-faq">
            <details>
              <summary><h3>What is the most cost-effective facade for an industrial building in India?</h3></summary>
              <div className="fg-a">Fire-retardant ACP with a durable coating is often a practical choice for industrial buildings, balancing fire requirements, weather performance and installed cost. Office blocks may justify a higher-grade finish. Confirm with your consultant.</div>
            </details>
            <details>
              <summary><h3>Does Fine Glaze work in MIDC zones in Maharashtra?</h3></summary>
              <div className="fg-a">Fine Glaze takes industrial facade work in Maharashtra, and our documented work includes Navi Mumbai (Mahape) and Pune. We coordinate access and logistics with the site contractor in active industrial zones.</div>
            </details>
            <details>
              <summary><h3>What windows are recommended for factory buildings in India?</h3></summary>
              <div className="fg-a">Factories commonly use aluminium fixed lights with toughened glass, plus louver windows or top-hung ventilators where natural ventilation is needed. Opening sizes should follow the daylight and ventilation requirements in the project brief and applicable codes.</div>
            </details>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="fg-sec">
        <div className="fg-wrap">
          <h2>Explore Related Services</h2>
          <div className="fg-grid">
            <Link key="/acp-aluminium-cladding" to="/acp-aluminium-cladding" className="group fg-row"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">ACP Cladding</p><p className="text-xs text-mute">ACP cladding systems</p></div></Link>
            <Link key="/aluminium-windows-doors" to="/aluminium-windows-doors" className="group fg-row"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Aluminium Facade</p><p className="text-xs text-mute">Aluminium facade</p></div></Link>
            <Link key="/facade-contractor-pune" to="/facade-contractor-pune" className="group fg-row"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Facade Contractor Pune</p><p className="text-xs text-mute">Facade contractor Pune</p></div></Link>
            <Link key="/facade-contractor-navi-mumbai" to="/facade-contractor-navi-mumbai" className="group fg-row"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Facade Contractor Navi Mumbai</p><p className="text-xs text-mute">Navi Mumbai facade</p></div></Link>
            <Link key="/maintenance-services" to="/maintenance-services" className="group fg-row"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Facade Maintenance</p><p className="text-xs text-mute">AMC & maintenance</p></div></Link>
            <Link key="/contact" to="/contact" className="group fg-row"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Book a call</p><p className="text-xs text-mute">Talk to our team</p></div></Link>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
