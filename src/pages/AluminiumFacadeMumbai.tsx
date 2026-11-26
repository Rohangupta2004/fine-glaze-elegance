import SEO from "@/components/SEO";
import PageHero from "@/components/common/PageHero";
import { RelatedProjects } from "@/components/RelatedProjects";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function AluminiumFacadeMumbai() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Aluminium Facade Contractor in Mumbai",
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
    "description": "Aluminium facade contractor in Mumbai: aluminium windows, doors, louvers and ACP cladding for BKC, Andheri, Powai and Vikhroli, with in-house shop drawings."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What aluminium coating is best for Mumbai coastal environment?", "acceptedAnswer": { "@type": "Answer", "text": "For coastal Mumbai, designers usually choose anodising or a high-performance coating such as PVDF, because salty air and moisture wear ordinary finishes faster. The class and thickness should come from the project specification and supplier data." } },
      { "@type": "Question", "name": "What is thermal break aluminium and why is it important in Mumbai?", "acceptedAnswer": { "@type": "Answer", "text": "Thermal break aluminium has a polyamide barrier between the inner and outer sections of the frame, which slows heat transfer through the frame. It can help comfort and cooling load, with the benefit depending on the full window and glass." } },
      { "@type": "Question", "name": "Does Fine Glaze supply and install aluminium windows in Mumbai?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Fine Glaze takes supply and installation of aluminium windows, doors and louvers in Mumbai, covering glass, hardware and weather sealing as part of one scope. Our Mumbai records include Leela Hotel and Leela Business Park." } },
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Aluminium Facade Contractor in Mumbai", "item": "https://fineglaze.com/aluminium-facade-mumbai" }
    ]
  };

  return (
    <Layout darkHero>
      <SEO
        title="Aluminium Facade Contractor in Mumbai | Fine Glaze"
        description="Aluminium facade contractor in Mumbai: aluminium windows, doors, louvers and ACP cladding for BKC, Andheri, Powai and Vikhroli, with in-house shop drawings."
        canonical="https://fineglaze.com/aluminium-facade-mumbai"
        keywords="aluminium facade contractor Mumbai, aluminium windows Mumbai, thermal break windows Mumbai, aluminium cladding BKC, aluminium doors Mumbai, facade contractor Andheri, aluminium facade Worli"
        ogImage="https://fineglaze.com/projects/samundra-tarang-51-1.webp"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* HERO */}
      <PageHero
        crumbs={[{ label: "Aluminium Facade Contractor in Mumbai" }]}
        title={<>Aluminium Facade <span className="text-gradient-gold">Contractor in Mumbai</span></>}
        intro="Fine Glaze supplies and installs aluminium facade elements in Mumbai: windows and doors, sun louvers and ACP cladding. Drawings are prepared in-house before fabrication."
        secondary={{ label: "View Projects", to: "/portfolio" }}
        image={{ src: "/projects/samundra-tarang-51-1.webp", alt: "Aluminium sliding windows and fixed glazing, terrace enclosure at Samundra Tarang, Dadar, Mumbai — completed by Fine Glaze", width: 600, height: 420 }}
      />

      {/* RICH CONTENT */}
      <section className="fg-sec">
        <div className="fg-wrap fg-prose">
          
          <h2>Aluminium Facades for Mumbai</h2>
          <p className="text-muted-foreground">
            Aluminium is widely used on coastal facades because it is light and resists corrosion better than many metals. In salty coastal air, finish matters: as general guidance, designers there specify anodised or high-performance powder or PVDF-coated extrusions and corrosion-resistant hardware, with the coating class set by the project specification.
          </p>
          <p className="text-muted-foreground mt-4">
            Our aluminium facade services in Mumbai include <strong>casement and sliding windows</strong> for residential and commercial buildings, <strong>aluminium louver systems</strong> for ventilation and solar shading, <strong>aluminium cladding and ACP</strong> for elevations, and <strong>canopies and fascia</strong> for retail and hospitality entrances.
          </p>
          <p className="text-muted-foreground mt-4">
            Our documented Mumbai aluminium work includes aluminium louvers across all floors at Leela Business Park, Andheri East, fixed glass and openable windows at Leela Hotel, Andheri East, and multi-track sliding windows at the Samundra Tarang terrace enclosure, Dadar West.
          </p>
          <p className="text-muted-foreground mt-4">
            For residential developers and owners, we quote aluminium windows and doors on a supply-and-install basis against the project specification. Extrusions come from major Indian mills, finished to spec, and hardware comes from major approved brands.
          </p>
          <p className="text-muted-foreground mt-4">
            Material movement on tight Mumbai sites is planned per project, covering access, hoisting and delivery windows agreed with the site team.
          </p>
    
        </div>
      </section>

      {/* FEATURES */}
      <section className="fg-sec">
        <div className="fg-wrap">
          <h2>What We Offer</h2>
          <div className="fg-grid c2">
              <div key="Anodised or Coated Extrusions" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Anodised or Coated Extrusions</span></div>
              <div key="Thermal Break Options" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Thermal Break Options</span></div>
              <div key="Finish to Project Spec" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Finish to Project Spec</span></div>
              <div key="System Options to Specification" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">System Options to Specification</span></div>
              <div key="Weatherseals and Drainage Detailing" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Weatherseals and Drainage Detailing</span></div>
              <div key="Leela Hotel and Leela Business Park Records" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Leela Hotel and Leela Business Park Records</span></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="fg-sec">
        <div className="fg-wrap">
          <h2>Frequently Asked Questions</h2>
          <div className="fg-faq">
            <details>
              <summary><h3>What aluminium coating is best for Mumbai coastal environment?</h3></summary>
              <div className="fg-a">For coastal Mumbai, designers usually choose anodising or a high-performance coating such as PVDF, because salty air and moisture wear ordinary finishes faster. The class and thickness should come from the project specification and supplier data.</div>
            </details>
            <details>
              <summary><h3>What is thermal break aluminium and why is it important in Mumbai?</h3></summary>
              <div className="fg-a">Thermal break aluminium has a polyamide barrier between the inner and outer sections of the frame, which slows heat transfer through the frame. It can help comfort and cooling load, with the benefit depending on the full window and glass.</div>
            </details>
            <details>
              <summary><h3>Does Fine Glaze supply and install aluminium windows in Mumbai?</h3></summary>
              <div className="fg-a">Yes. Fine Glaze takes supply and installation of aluminium windows, doors and louvers in Mumbai, covering glass, hardware and weather sealing as part of one scope. Our Mumbai records include Leela Hotel and Leela Business Park.</div>
            </details>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="fg-sec">
        <div className="fg-wrap">
          <h2>Explore Related Services</h2>
          <div className="fg-grid">
            <Link key="/aluminium-windows-doors" to="/aluminium-windows-doors" className="group fg-row"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Aluminium Facade</p><p className="text-xs text-mute">Full aluminium facade service</p></div></Link>
            <Link key="/facade-contractor-mumbai" to="/facade-contractor-mumbai" className="group fg-row"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Facade Contractor Mumbai</p><p className="text-xs text-mute">Complete facade services</p></div></Link>
            <Link key="/curtain-wall-mumbai" to="/curtain-wall-mumbai" className="group fg-row"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Curtain Wall Mumbai</p><p className="text-xs text-mute">Curtain wall glazing Mumbai</p></div></Link>
            <Link key="/acp-aluminium-cladding" to="/acp-aluminium-cladding" className="group fg-row"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">ACP Cladding</p><p className="text-xs text-mute">ACP composite panels</p></div></Link>
            <Link key="/structural-glazing-mumbai" to="/structural-glazing-mumbai" className="group fg-row"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Structural Glazing Mumbai</p><p className="text-xs text-mute">Structural glazing</p></div></Link>
            <Link key="/maintenance-services" to="/maintenance-services" className="group fg-row"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Facade Maintenance</p><p className="text-xs text-mute">AMC & maintenance</p></div></Link>
          </div>
        </div>
      </section>

      <RelatedProjects heading="Our aluminium & glazing work in Mumbai" locations={["Mumbai"]} excludeLocations={["Navi Mumbai"]} keywords={["window", "louver", "glass", "ACP"]} />
      <CTASection />
    </Layout>
  );
}
