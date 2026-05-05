import SEO from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export default function AluminiumFacade() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Aluminium Facade Systems",
    "serviceType": "Aluminium Facade Installation",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Fine Glaze",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "addressCountry": "IN"
      },
      "telephone": "+91-8369233566",
      "url": "https://fineglaze.com"
    },
    "areaServed": [
      { "@type": "City", "name": "Pune" },
      { "@type": "City", "name": "Mumbai" },
      { "@type": "City", "name": "Navi Mumbai" },
      { "@type": "City", "name": "Nashik" },
      { "@type": "State", "name": "Maharashtra" }
    ],
    "description": "Premium aluminium facade systems including unitized, stick system, and ACP cladding for commercial and residential buildings across India.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Aluminium Facade Solutions",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Unitized Aluminium Facade Systems" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Stick System Aluminium Facades" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "ACP & Aluminium Composite Panel Cladding" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Architectural Aluminium Facades" } }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does aluminium facade cost per sq ft in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Aluminium facade systems typically range from ₹350 to ₹1,200 per sq ft depending on the type (stick system vs unitized), glass specifications, wind load requirements, and finish quality. Fine Glaze provides custom quotations based on project-specific requirements."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between stick system and unitized aluminium facade?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Stick systems are assembled on-site piece by piece, suitable for low-rise buildings. Unitized systems are factory-assembled into panels and craned into position, ideal for high-rises as they reduce installation time by 40% and ensure factory-controlled quality."
        }
      },
      {
        "@type": "Question",
        "name": "Is aluminium facade good for Indian climate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Aluminium facades offer excellent corrosion resistance, withstand monsoon rains, UV exposure, and high temperatures. When combined with PVDF or anodized finishes, they maintain their appearance for 20+ years in Indian weather conditions."
        }
      }
    ]
  };

  return (
    <Layout>
      <SEO
        title="Aluminium Facade & Glaze Aluminium Systems | Best Facade Contractor Pune & Mumbai – Fine Glaze"
        description="Leading aluminium facade company in India. Glazed facade systems, aluminium cladding & curtain wall installation for commercial buildings. Free site visit & quote."
        canonical="https://fineglaze.com/aluminium-facade"
        keywords="aluminium facade, glaze aluminium, glazed facade, facade contractor Pune, aluminium facade system Mumbai, aluminium cladding, glass facade contractors, facade company India"
        schema={[serviceSchema, faqSchema]}
      />

      {/* HERO */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Aluminium Facade Systems in India
            </h1>
            <p className="text-lg text-white/80 mb-8">
              Premium aluminium facade solutions engineered for modern
              commercial and residential architecture by Fine Glaze – Pune's leading facade contractor.
            </p>
            <div className="flex gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                  Get Instant Quote
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-slate-900">
                  View Projects
                </Button>
              </Link>
            </div>
          </div>

          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt="Modern aluminium facade building in India - Fine Glaze"
            className="rounded-xl shadow-2xl object-cover h-[420px] w-full"
            loading="eager"
            width="600"
            height="420"
          />
        </div>
      </section>

      {/* INTRO WITH KEYWORD-RICH CONTENT */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl space-y-6">
          <h2 className="text-3xl font-bold text-foreground">Why Choose Fine Glaze for Aluminium Facade?</h2>
          <p className="text-lg text-muted-foreground">
            Fine Glaze is a trusted <strong>aluminium facade contractor in India</strong>,
            delivering durable, aesthetic, and high-performance facade systems
            for <strong>high-rise buildings, corporate offices, malls, hotels, and residential projects</strong> across
            Pune, Mumbai, Navi Mumbai, and Maharashtra.
          </p>
          <p className="text-muted-foreground">
            With over <strong>5 years of experience</strong> and <strong>10+ landmark projects</strong> including
            LTIMindtree Mensa Campus, Embassy 247, and Pune International Airport, our team combines
            precision engineering with on-time delivery. We work closely with architects, structural
            consultants, and developers to bring their vision to life.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Aluminium Facade Advantages
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background rounded-xl shadow overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1529429617124-95b109e86bb8"
                alt="Lightweight aluminium and glass facade system"
                className="h-48 w-full object-cover"
                loading="lazy"
                width="400"
                height="192"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Lightweight & Strong</h3>
                <p className="text-muted-foreground">
                  High strength-to-weight ratio ideal for modern high-rise structures. Reduces dead load on the building while maintaining structural integrity.
                </p>
              </div>
            </div>

            <div className="bg-background rounded-xl shadow overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5"
                alt="Weather resistant aluminium facade exterior"
                className="h-48 w-full object-cover"
                loading="lazy"
                width="400"
                height="192"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Weather Resistant</h3>
                <p className="text-muted-foreground">
                  Excellent resistance to corrosion, monsoon rains, UV exposure, and extreme temperatures. PVDF-coated finishes ensure 20+ year durability.
                </p>
              </div>
            </div>

            <div className="bg-background rounded-xl shadow overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
                alt="Architectural aluminium facade design freedom"
                className="h-48 w-full object-cover"
                loading="lazy"
                width="400"
                height="192"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Architectural Freedom</h3>
                <p className="text-muted-foreground">
                  Supports complex curved designs, custom colours, and premium finishes including anodized, powder-coated, and wood-grain textures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold mb-10">
            Our Aluminium Facade Solutions
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <img
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
              alt="Commercial aluminium facade installation by Fine Glaze"
              className="rounded-xl shadow object-cover h-80 w-full"
              loading="lazy"
              width="600"
              height="320"
            />

            <div className="space-y-4">
              {[
                "Unitized Aluminium Facade Systems",
                "Stick System Aluminium Facades",
                "ACP & Aluminium Composite Panel Cladding",
                "Custom Architectural Aluminium Facades",
                "High-rise & Commercial Building Facades",
                "Energy-Efficient Facade Designs with DGU Glass",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-amber-600 shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION — Matches the schema above for Google Featured Snippets */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">How much does aluminium facade cost per sq ft in India?</h3>
              <p className="text-muted-foreground">
                Aluminium facade systems typically range from ₹350 to ₹1,200 per sq ft depending on the type (stick system vs unitized), glass specifications, wind load requirements, and finish quality. Fine Glaze provides custom quotations based on project-specific requirements.
              </p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">What is the difference between stick system and unitized aluminium facade?</h3>
              <p className="text-muted-foreground">
                Stick systems are assembled on-site piece by piece, suitable for low-rise buildings. Unitized systems are factory-assembled into panels and craned into position, ideal for high-rises as they reduce installation time by 40% and ensure factory-controlled quality.
              </p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">Is aluminium facade good for Indian climate?</h3>
              <p className="text-muted-foreground">
                Yes. Aluminium facades offer excellent corrosion resistance, withstand monsoon rains, UV exposure, and high temperatures. When combined with PVDF or anodized finishes, they maintain their appearance for 20+ years in Indian weather conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
