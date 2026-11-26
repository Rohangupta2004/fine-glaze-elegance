import SEO from "@/components/SEO";
import { RelatedProjects } from "@/components/RelatedProjects";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function GlassRailingPune() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Glass Railing Contractor in Pune",
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
    "description": "Glass railing contractor in Pune: frameless balcony, staircase and terrace glass railings for homes and offices, with in-house shop drawings."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is the cost of glass railing in Pune?", "acceptedAnswer": { "@type": "Answer", "text": "Glass railing cost in Pune depends on the system (frameless or post), glass thickness, hardware finish and site conditions, so it is priced per running foot against drawings. Fine Glaze prepares BOQ-based quotations." } },
      { "@type": "Question", "name": "Is toughened glass railing safe for balconies in Pune?", "acceptedAnswer": { "@type": "Answer", "text": "Toughened glass railing is widely used on balconies when the glass build-up, supports and anchorage are designed for the load. Laminated glass adds a layer that helps hold broken pieces in place. We confirm the specification per project." } },
      { "@type": "Question", "name": "Do glass railings need maintenance in Pune?", "acceptedAnswer": { "@type": "Answer", "text": "Glass railings need little upkeep: regular cleaning with mild detergent, plus periodic checks of fittings, anchors and sealant joints at the base channel. Replace worn sealant as part of routine maintenance." } },
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Glass Railing Contractor in Pune", "item": "https://fineglaze.com/glass-railing-pune" }
    ]
  };

  return (
    <Layout darkHero>
      <SEO
        title="Glass Railing Contractor in Pune, Maharashtra | Fine Glaze"
        description="Glass railing contractor in Pune: frameless balcony, staircase and terrace glass railings for homes and offices, with in-house shop drawings."
        canonical="https://fineglaze.com/glass-railing-pune"
        keywords="glass railing contractor Pune, balcony glass railing Pune, staircase glass railing Pune, frameless railing Pune"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* HERO */}
      <section className="relative py-24 bg-night-2 text-paper">
        <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Glass Railing <span className="text-gradient-gold">Contractor in Pune</span>
            </h1>
            <p className="text-lg text-paper/80 mb-8">Fine Glaze installs frameless and semi-frameless glass railing systems in Pune for apartments, offices, hotels and commercial buildings, using toughened glass and stainless steel fittings.</p>
            <div className="flex gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-lamp hover:bg-lamp/90">Book a call</Button>
              </Link>
              <Link to="/portfolio">
                <Button size="lg" variant="outline">View Projects</Button>
              </Link>
            </div>
          </div>
          <img
            src="/projects/jindal-house-46-2.webp"
            alt="Sea-front terrace glass railing at Jindal House, Mumbai — completed by Fine Glaze in 2023"
            className="object-cover h-[420px] w-full"
            loading="eager"
            width="600"
            height="420"
          />
        </div>
      </section>

      {/* RICH CONTENT */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl space-y-6">
          
          <h2 className="text-3xl font-bold">Glass Railings in Pune</h2>
          <p className="text-muted-foreground">
            Glass railings are common on apartment balconies, staircases, terraces and commercial lobbies. Fine Glaze offers frameless railings with base channels, post systems with glass infill, and handrail-supported systems, and we choose the system with you against the drawings and the load requirements.
          </p>
          <p className="text-muted-foreground mt-4">
            Railing glass is normally toughened or toughened laminated, and its thickness, supports and anchorage come from the structural check for the project. Confirm the glass specification against IS 2553 and the consultant's requirements before ordering.
          </p>
          <p className="text-muted-foreground mt-4">
            We take residential and commercial railing projects across Pune and PCMC. Our documented railing work includes SS glass railings at Nirmaann Estrellaa in Pune and shaft railings at Salsette-27 and Jindal House in Mumbai. Stainless steel fittings are available in common finishes.
          </p>
          <p className="text-muted-foreground mt-4">
            Fine Glaze handles the full railing scope: site measurement and structural check, glass procurement to exact sizes, hardware supply and fabrication, installation and silicone joint finishing.
          </p>
          <p className="text-muted-foreground mt-4">
            For developers with multiple floors or buildings, we can quote a bulk package. Send drawings and quantities for a BOQ-based quotation.
          </p>
    
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-10 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-4">
              <div key="Frameless Glass Railings" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Frameless Glass Railings</span></div>
              <div key="Toughened + Laminated Glass" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Toughened + Laminated Glass</span></div>
              <div key="Stainless Steel Fittings" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Stainless Steel Fittings</span></div>
              <div key="Balcony & Staircase Systems" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Balcony & Staircase Systems</span></div>
              <div key="Glass Specified to IS 2553" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Glass Specified to IS 2553</span></div>
              <div key="Hardware Finish Options" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Hardware Finish Options</span></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-background p-6">
              <h3 className="text-lg font-bold mb-2">What is the cost of glass railing in Pune?</h3>
              <p className="text-muted-foreground">Glass railing cost in Pune depends on the system (frameless or post), glass thickness, hardware finish and site conditions, so it is priced per running foot against drawings. Fine Glaze prepares BOQ-based quotations.</p>
            </div>
            <div className="bg-background p-6">
              <h3 className="text-lg font-bold mb-2">Is toughened glass railing safe for balconies in Pune?</h3>
              <p className="text-muted-foreground">Toughened glass railing is widely used on balconies when the glass build-up, supports and anchorage are designed for the load. Laminated glass adds a layer that helps hold broken pieces in place. We confirm the specification per project.</p>
            </div>
            <div className="bg-background p-6">
              <h3 className="text-lg font-bold mb-2">Do glass railings need maintenance in Pune?</h3>
              <p className="text-muted-foreground">Glass railings need little upkeep: regular cleaning with mild detergent, plus periodic checks of fittings, anchors and sealant joints at the base channel. Replace worn sealant as part of routine maintenance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-12 bg-night-2 border-t border-line">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-xl font-bold text-paper mb-5">Explore Related Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link key="/glass-railings" to="/glass-railings" className="group flex items-start gap-3 p-4 border border-line hover:border-lamp/40 hover:bg-lamp/10 transition-all bg-night"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Glass Railings</p><p className="text-xs text-mute">Full glass railing service</p></div></Link>
            <Link key="/structural-glazing-pune" to="/structural-glazing-pune" className="group flex items-start gap-3 p-4 border border-line hover:border-lamp/40 hover:bg-lamp/10 transition-all bg-night"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Structural Glazing Pune</p><p className="text-xs text-mute">Structural glazing systems</p></div></Link>
            <Link key="/facade-contractor-pune" to="/facade-contractor-pune" className="group flex items-start gap-3 p-4 border border-line hover:border-lamp/40 hover:bg-lamp/10 transition-all bg-night"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Facade Contractor Pune</p><p className="text-xs text-mute">Complete facade solutions</p></div></Link>
            <Link key="/acp-cladding-pune" to="/acp-cladding-pune" className="group flex items-start gap-3 p-4 border border-line hover:border-lamp/40 hover:bg-lamp/10 transition-all bg-night"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">ACP Cladding Pune</p><p className="text-xs text-mute">ACP panel facades</p></div></Link>
            <Link key="/curtain-wall-pune" to="/curtain-wall-pune" className="group flex items-start gap-3 p-4 border border-line hover:border-lamp/40 hover:bg-lamp/10 transition-all bg-night"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Curtain Wall Pune</p><p className="text-xs text-mute">Glass curtain walls</p></div></Link>
            <Link key="/maintenance-services" to="/maintenance-services" className="group flex items-start gap-3 p-4 border border-line hover:border-lamp/40 hover:bg-lamp/10 transition-all bg-night"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Facade Maintenance</p><p className="text-xs text-mute">Glass railing maintenance</p></div></Link>
          </div>
        </div>
      </section>

      <RelatedProjects heading="Glass railing work we have delivered" keywords={["railing"]} />
      <CTASection />
    </Layout>
  );
}
