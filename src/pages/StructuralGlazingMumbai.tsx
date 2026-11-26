import SEO from "@/components/SEO";
import PageHero from "@/components/common/PageHero";
import { RelatedProjects } from "@/components/RelatedProjects";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function StructuralGlazingMumbai() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Structural Glazing Contractor in Mumbai",
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
    "description": "Structural glazing in Mumbai: 2-side, 4-side and spider glass facades for commercial buildings, with in-house shop drawings and a site water test."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Is structural glazing safe in Mumbai's coastal wind conditions?", "acceptedAnswer": { "@type": "Answer", "text": "Structural glazing can be used in coastal Mumbai when designed for the project's wind load, with suitable sealant, retention and drainage. Fine Glaze checks sizing, fixing and anchorage against the project wind load before approval." } },
      { "@type": "Question", "name": "How does structural glazing perform during Mumbai monsoon?", "acceptedAnswer": { "@type": "Answer", "text": "Well-designed structural glazing sheds monsoon water through its sealed joints and drainage paths, and installation quality decides the result. Fine Glaze checks installed glazing with a site water penetration test before handover." } },
      { "@type": "Question", "name": "What glass thickness for structural glazing on Mumbai high-rises?", "acceptedAnswer": { "@type": "Answer", "text": "Glass thickness on high-rises is set by the structural calculation for wind load, panel size and support, not by a fixed rule. Toughened, heat-soaked or laminated glass may be specified; our engineering check confirms the build-up." } },
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Structural Glazing Contractor in Mumbai", "item": "https://fineglaze.com/structural-glazing-mumbai" }
    ]
  };

  return (
    <Layout darkHero>
      <SEO
        title="Structural Glazing in Mumbai: SSG and Spider | Fine Glaze"
        description="Structural glazing in Mumbai: 2-side, 4-side and spider glass facades for commercial buildings, with in-house shop drawings and a site water test."
        canonical="https://fineglaze.com/structural-glazing-mumbai"
        keywords="structural glazing Mumbai, structural glass facade Mumbai, frameless glazing Mumbai, spider glazing Mumbai"
        ogImage="https://fineglaze.com/projects/naman-chambers-48-1.webp"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* HERO */}
      <PageHero
        crumbs={[{ label: "Structural Glazing Contractor in Mumbai" }]}
        title={<>Structural Glazing <span className="text-gradient-gold">Contractor in Mumbai</span></>}
        intro="Fine Glaze takes structural glazing projects in Mumbai: corporate towers, hotels, showrooms and residential buildings. Shop drawings are prepared in-house and checked against the project wind load."
        secondary={{ label: "View Projects", to: "/portfolio" }}
        image={{ src: "/projects/naman-chambers-48-1.webp", alt: "Naman Chambers, Bandra Kurla Complex, Mumbai — glazing and ACP works by Fine Glaze (in progress)", width: 600, height: 420 }}
      />

      {/* RICH CONTENT */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl space-y-6">
          
          <h2 className="text-3xl font-bold">Structural Glazing in Mumbai</h2>
          <p className="text-muted-foreground">
            Glass defines much of Mumbai's commercial skyline. Fine Glaze takes structural glazing projects in Mumbai, creating frameless glass facades where sealant bonds the glass to the aluminium frame. Our documented Mumbai work includes structural glazing and ACP cladding at Naman Chambers in BKC.
          </p>
          <p className="text-muted-foreground mt-4">
            Coastal conditions bring high wind, heavy monsoon rain and salty air. As general guidance, designers there pay close attention to wind load, sealant selection, mechanical retention and drainage. Fine Glaze checks member sizing, fixing and anchorage against the project wind load and procures structural silicone such as DOWSIL or approved equivalents.
          </p>
          <p className="text-muted-foreground mt-4">
            We take showroom facades, corporate lobby entrances, hotel and residential glass elements, and spider-glazed statement entries. Drawings are prepared in-house and approved before fabrication.
          </p>
          <p className="text-muted-foreground mt-4">
            Work follows the approved shop drawings and the sealant manufacturer's application guidance. Installed glazing is checked with a site water penetration test, and snags are closed before handover.
          </p>
          <p className="text-muted-foreground mt-4">
            Defect liability support applies as per contract terms. Third-party testing to ASTM can be arranged on request through an accredited laboratory.
          </p>
    
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-10 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-4">
              <div key="Wind Load Engineering Check" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Wind Load Engineering Check</span></div>
              <div key="DOWSIL Structural Silicone" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">DOWSIL Structural Silicone</span></div>
              <div key="Mechanical Retention Where Specified" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Mechanical Retention Where Specified</span></div>
              <div key="Drainage Detailing" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Drainage Detailing</span></div>
              <div key="Spider Glazing Systems" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Spider Glazing Systems</span></div>
              <div key="Defect Liability Support" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Defect Liability Support</span></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-background p-6">
              <h3 className="text-lg font-bold mb-2">Is structural glazing safe in Mumbai's coastal wind conditions?</h3>
              <p className="text-muted-foreground">Structural glazing can be used in coastal Mumbai when designed for the project's wind load, with suitable sealant, retention and drainage. Fine Glaze checks sizing, fixing and anchorage against the project wind load before approval.</p>
            </div>
            <div className="bg-background p-6">
              <h3 className="text-lg font-bold mb-2">How does structural glazing perform during Mumbai monsoon?</h3>
              <p className="text-muted-foreground">Well-designed structural glazing sheds monsoon water through its sealed joints and drainage paths, and installation quality decides the result. Fine Glaze checks installed glazing with a site water penetration test before handover.</p>
            </div>
            <div className="bg-background p-6">
              <h3 className="text-lg font-bold mb-2">What glass thickness for structural glazing on Mumbai high-rises?</h3>
              <p className="text-muted-foreground">Glass thickness on high-rises is set by the structural calculation for wind load, panel size and support, not by a fixed rule. Toughened, heat-soaked or laminated glass may be specified; our engineering check confirms the build-up.</p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-12 bg-night-2 border-t border-line">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-xl font-bold text-paper mb-5">Explore Related Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link key="/structural-glazing" to="/structural-glazing" className="group flex items-start gap-3 p-4 border border-line hover:border-lamp/40 hover:bg-lamp/10 transition-all bg-night"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Structural Glazing</p><p className="text-xs text-mute">Full structural glazing service</p></div></Link>
            <Link key="/structural-glazing-pune" to="/structural-glazing-pune" className="group flex items-start gap-3 p-4 border border-line hover:border-lamp/40 hover:bg-lamp/10 transition-all bg-night"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Structural Glazing Pune</p><p className="text-xs text-mute">Structural glazing Pune</p></div></Link>
            <Link key="/facade-contractor-mumbai" to="/facade-contractor-mumbai" className="group flex items-start gap-3 p-4 border border-line hover:border-lamp/40 hover:bg-lamp/10 transition-all bg-night"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Facade Contractor Mumbai</p><p className="text-xs text-mute">Complete facade solutions</p></div></Link>
            <Link key="/curtain-wall-mumbai" to="/curtain-wall-mumbai" className="group flex items-start gap-3 p-4 border border-line hover:border-lamp/40 hover:bg-lamp/10 transition-all bg-night"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Curtain Wall Mumbai</p><p className="text-xs text-mute">Curtain wall Mumbai</p></div></Link>
            <Link key="/aluminium-facade-mumbai" to="/aluminium-facade-mumbai" className="group flex items-start gap-3 p-4 border border-line hover:border-lamp/40 hover:bg-lamp/10 transition-all bg-night"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Aluminium Facade Mumbai</p><p className="text-xs text-mute">Aluminium facade Mumbai</p></div></Link>
            <Link key="/maintenance-services" to="/maintenance-services" className="group flex items-start gap-3 p-4 border border-line hover:border-lamp/40 hover:bg-lamp/10 transition-all bg-night"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Facade Maintenance</p><p className="text-xs text-mute">Structural glazing maintenance</p></div></Link>
          </div>
        </div>
      </section>

      <RelatedProjects heading="Our glazing work in Mumbai" locations={["Mumbai"]} excludeLocations={["Navi Mumbai"]} keywords={["glazing", "glass", "sealant", "window"]} />
      <CTASection />
    </Layout>
  );
}
