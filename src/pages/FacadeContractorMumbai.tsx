import SEO from "@/components/SEO";
import PageHero from "@/components/common/PageHero";
import { RelatedProjects } from "@/components/RelatedProjects";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function FacadeContractorMumbai() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Facade Contractor in Mumbai",
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
    "description": "Facade contractor in Mumbai: curtain walls, structural glazing and ACP cladding. Embassy REIT Best Vendor Performance 2024 for Embassy 247, Vikhroli."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Does Fine Glaze serve all of Mumbai for facade work?", "acceptedAnswer": { "@type": "Answer", "text": "Fine Glaze is based in Pune and Mumbai and takes facade projects across Mumbai, Navi Mumbai, Thane and Panvel. Our documented Mumbai projects are in BKC, Andheri, Vikhroli, Vile Parle, Byculla, Juhu and Dadar." } },
      { "@type": "Question", "name": "What makes Mumbai facade work different from Pune?", "acceptedAnswer": { "@type": "Answer", "text": "Mumbai's coastal air, humidity and wind load make material and finish selection more demanding than inland sites. Corrosion-resistant hardware, suitable finishes and sealants, and a wind-load check against the project design basis are standard concerns." } },
      { "@type": "Question", "name": "How much does facade work cost in Mumbai?", "acceptedAnswer": { "@type": "Answer", "text": "Facade cost in Mumbai depends on the system, glass or panel specification, height, access and logistics, so a reliable figure needs drawings. Fine Glaze prepares BOQ-based quotations after reviewing the drawings and the site." } },
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Facade Contractor in Mumbai", "item": "https://fineglaze.com/facade-contractor-mumbai" }
    ]
  };

  return (
    <Layout darkHero>
      <SEO
        title="Facade Contractor in Mumbai: Glazing and ACP | Fine Glaze"
        description="Facade contractor in Mumbai: curtain walls, structural glazing and ACP cladding. Embassy REIT Best Vendor Performance 2024 for Embassy 247, Vikhroli."
        canonical="https://fineglaze.com/facade-contractor-mumbai"
        keywords="facade contractor Mumbai, glass facade Mumbai, curtain wall Mumbai, ACP cladding Mumbai, structural glazing BKC, facade contractor Andheri, facade company Mumbai"
        ogImage="https://fineglaze.com/projects/naman-chambers-48-1.webp"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* HERO */}
      <PageHero
        crumbs={[{ label: "Facade Contractor in Mumbai" }]}
        title={<>Facade Contractor <span className="text-gradient-gold">in Mumbai</span></>}
        intro="Fine Glaze is a facade contractor working in Mumbai on curtain wall, structural glazing, ACP cladding, railings, louvers and maintenance. Embassy REIT gave us the Best Vendor Performance 2024 award for Embassy 247, Vikhroli."
        secondary={{ label: "View Projects", to: "/portfolio" }}
        image={{ src: "/projects/embassy-247-37-1.webp", alt: "Embassy 247, Vikhroli, Mumbai — facade maintenance by Fine Glaze for Embassy REIT; Best Vendor Performance 2024", width: 600, height: 420 }}
      />

      {/* RICH CONTENT */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl space-y-6">
          
          <h2 className="text-3xl font-bold">Facade Work in Mumbai</h2>
          <p className="text-muted-foreground">
            Mumbai's building market needs facade contractors who can manage tight urban sites and timelines. Fine Glaze documents Mumbai work including Embassy 247 in Vikhroli (facade sealant, glass replacement and repairs), Leela Business Park (aluminium louvers) and Salsette-27 in Byculla (railings and canopies).
          </p>
          <p className="text-muted-foreground mt-4">
            Coastal buildings in Mumbai face salt air, humidity and high wind. As general guidance, designers there usually specify corrosion-resistant hardware and finishes, durable gaskets and sealants, and wind loads taken from the project's design basis. Fine Glaze's engineering check verifies member sizing, fixing and anchorage against the project wind load.
          </p>
          <p className="text-muted-foreground mt-4">
            Areas we work in include <strong>BKC</strong>, <strong>Andheri</strong>, <strong>Powai</strong>, <strong>Vikhroli</strong>, <strong>Byculla</strong>, <strong>Vile Parle</strong> and <strong>Juhu</strong>, where our project records are located.
          </p>
          <p className="text-muted-foreground mt-4">
            Mumbai projects are run by our team from Pune and Mumbai, with a site in-charge and supervisor on each site. Drawings are prepared in-house and routed through the architect, PMC and client until GFC release.
          </p>
          <p className="text-muted-foreground mt-4">
            Our documented Mumbai work covers commercial towers in BKC, a hospital (Nanavati Max, Vile Parle), hotel glazing (Leela Hotel, Andheri East), private residences and corporate campuses. Ask us for references that match your project.
          </p>
    
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-10 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-4">
              <div key="Wind Load Engineering Check" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Wind Load Engineering Check</span></div>
              <div key="Corrosion-Resistant Hardware" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Corrosion-Resistant Hardware</span></div>
              <div key="High-Rise Facade Work" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">High-Rise Facade Work</span></div>
              <div key="Finish Selection to Specification" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Finish Selection to Specification</span></div>
              <div key="BKC and Mumbai Projects" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">BKC and Mumbai Projects</span></div>
              <div key="Leela Hotel and Embassy 247 Records" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Leela Hotel and Embassy 247 Records</span></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-background p-6">
              <h3 className="text-lg font-bold mb-2">Does Fine Glaze serve all of Mumbai for facade work?</h3>
              <p className="text-muted-foreground">Fine Glaze is based in Pune and Mumbai and takes facade projects across Mumbai, Navi Mumbai, Thane and Panvel. Our documented Mumbai projects are in BKC, Andheri, Vikhroli, Vile Parle, Byculla, Juhu and Dadar.</p>
            </div>
            <div className="bg-background p-6">
              <h3 className="text-lg font-bold mb-2">What makes Mumbai facade work different from Pune?</h3>
              <p className="text-muted-foreground">Mumbai's coastal air, humidity and wind load make material and finish selection more demanding than inland sites. Corrosion-resistant hardware, suitable finishes and sealants, and a wind-load check against the project design basis are standard concerns.</p>
            </div>
            <div className="bg-background p-6">
              <h3 className="text-lg font-bold mb-2">How much does facade work cost in Mumbai?</h3>
              <p className="text-muted-foreground">Facade cost in Mumbai depends on the system, glass or panel specification, height, access and logistics, so a reliable figure needs drawings. Fine Glaze prepares BOQ-based quotations after reviewing the drawings and the site.</p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-12 bg-night-2 border-t border-line">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-xl font-bold text-paper mb-5">Explore Related Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link key="/facade-contractor-pune" to="/facade-contractor-pune" className="group flex items-start gap-3 p-4 border border-line hover:border-lamp/40 hover:bg-lamp/10 transition-all bg-night"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Facade Contractor Pune</p><p className="text-xs text-mute">Facade services Pune</p></div></Link>
            <Link key="/curtain-wall-systems" to="/curtain-wall-systems" className="group flex items-start gap-3 p-4 border border-line hover:border-lamp/40 hover:bg-lamp/10 transition-all bg-night"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Curtain Wall Systems</p><p className="text-xs text-mute">Full curtain wall service</p></div></Link>
            <Link key="/structural-glazing-mumbai" to="/structural-glazing-mumbai" className="group flex items-start gap-3 p-4 border border-line hover:border-lamp/40 hover:bg-lamp/10 transition-all bg-night"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Structural Glazing Mumbai</p><p className="text-xs text-mute">Structural glazing Mumbai</p></div></Link>
            <Link key="/acp-aluminium-cladding" to="/acp-aluminium-cladding" className="group flex items-start gap-3 p-4 border border-line hover:border-lamp/40 hover:bg-lamp/10 transition-all bg-night"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">ACP Cladding</p><p className="text-xs text-mute">ACP panel cladding</p></div></Link>
            <Link key="/facade-contractor-navi-mumbai" to="/facade-contractor-navi-mumbai" className="group flex items-start gap-3 p-4 border border-line hover:border-lamp/40 hover:bg-lamp/10 transition-all bg-night"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Facade Contractor Navi Mumbai</p><p className="text-xs text-mute">Navi Mumbai facade services</p></div></Link>
            <Link key="/maintenance-services" to="/maintenance-services" className="group flex items-start gap-3 p-4 border border-line hover:border-lamp/40 hover:bg-lamp/10 transition-all bg-night"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Facade Maintenance</p><p className="text-xs text-mute">AMC & facade repair</p></div></Link>
          </div>
        </div>
      </section>

      <RelatedProjects heading="Our projects in Mumbai" locations={["Mumbai"]} excludeLocations={["Navi Mumbai"]} />
      <CTASection />
    </Layout>
  );
}
