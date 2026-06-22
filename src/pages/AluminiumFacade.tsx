import SEO from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useSiteMedia } from "@/hooks/useSiteMedia";

export default function AluminiumFacade() {
  const { getMedia } = useSiteMedia();
  const heroImage = getMedia("aluminium_facade_hero", "/Aluminium%20windows.webp");
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Aluminium Facade Systems",
    "serviceType": "Aluminium Facade Installation",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Fine Glaze",
      "@id": "https://fineglaze.com",
      "url": "https://fineglaze.com",
      "telephone": "+91-8369233566",
      "priceRange": "₹₹₹",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "addressCountry": "IN"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "35",
        "bestRating": "5"
      }
    },
    "areaServed": [
      { "@type": "City", "name": "Pune" },
      { "@type": "City", "name": "Mumbai" },
      { "@type": "City", "name": "Navi Mumbai" },
      { "@type": "City", "name": "Nashik" },
      { "@type": "State", "name": "Maharashtra" }
    ],
    "description": "Premium aluminium facade systems including unitized, stick system, doors, windows & louvers for commercial and residential buildings across India. ₹350–₹1,200/sq ft.",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "minPrice": "350",
        "maxPrice": "1200",
        "priceCurrency": "INR",
        "unitText": "per sq ft"
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Aluminium Facade Solutions",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Unitized Aluminium Facade Systems" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Stick System Aluminium Facades" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Aluminium Doors & Windows" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Aluminium Louvers & Sun Shading" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "ACP & Aluminium Composite Panel Cladding" } }
      ]
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://fineglaze.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Aluminium Facade Systems", "item": "https://fineglaze.com/aluminium-facade" }
    ]
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
    <Layout darkHero>
      <SEO
        title="Aluminium Facade Systems in Pune & Mumbai | Doors, Windows, Louvers & Cladding – Fine Glaze"
        description="Leading aluminium facade contractor in India. Unitized & stick system facades, thermal break doors & windows, aluminium louvers, ACP cladding. ₹350–₹1,200/sq ft. Trusted by Embassy REIT & LTIMindtree. Free site visit."
        canonical="https://fineglaze.com/aluminium-facade"
        keywords="aluminium facade systems India, aluminium facade contractor Pune, aluminium facade Mumbai, aluminium doors windows contractor, thermal break windows India, aluminium louvers sun shading, stick system curtain wall, unitized aluminium facade, aluminium cladding contractor Maharashtra"
        ogImage="https://fineglaze.com/Aluminium windows.webp"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* HERO */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Aluminium <span className="text-gradient-gold">Facade Systems</span> in India
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
                <Button size="lg" variant="outline">
                  View Projects
                </Button>
              </Link>
            </div>
          </div>

          <img
            src={heroImage}
            alt="Modern aluminium windows and facade by Fine Glaze India"
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
                src="/Unitized.webp"
                alt="Lightweight unitized aluminium facade system"
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
                src="/Thermal.webp"
                alt="Weather-resistant thermal-break aluminium windows"
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
                src="/Tilt.webp"
                alt="Architectural tilt-turn aluminium window with custom finish"
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
              src="/Glazing.webp"
              alt="Commercial aluminium facade and glazing installation by Fine Glaze"
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

      {/* TYPES & VARIANTS */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold mb-4 text-center">Types & Variants</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Different aluminium facade systems engineered to match your building&apos;s aesthetic, performance, and budget.
          </p>
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              {
                name: "Unitized Aluminium Facade",
                tagline: "Pre-assembled panels for fast installation",
                description:
                  "Factory-assembled aluminium frame + glass units shipped to site and craned into place. Ideal for high-rise projects where speed and quality control matter most.",
                specs: ["Factory QC-controlled assembly", "20%–30% faster on-site install", "Mullion + transom unit design", "Wind load up to 4.0 kPa"],
                bestFor: "High-rise towers, IT parks, corporate HQs",
                image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
              },
              {
                name: "Stick System Facade",
                tagline: "Site-assembled mullions and transoms",
                description:
                  "Aluminium mullions and transoms erected stick-by-stick on site, then in-filled with glass or panels. Most flexible and cost-effective for low-to-mid rise projects.",
                specs: ["6063-T6 aluminium extrusions", "On-site weatherproofing", "Easy customisation per floor", "Wind load up to 2.5 kPa"],
                bestFor: "Showrooms, mid-rise offices, retail facades",
                image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
              },
              {
                name: "ACP / Composite Panel Facade",
                tagline: "Aluminium composite cladding with PVDF finish",
                description:
                  "4mm aluminium composite panels (ACP) fixed to a sub-frame for vibrant colours, sharp edges, and weatherproof cladding. Great for accent walls and signage facades.",
                specs: ["4mm ACP — 0.3/0.5mm skin", "PVDF / FEVE coating", "20-year colour warranty", "Fire-rated FR-grade available"],
                bestFor: "Brand facades, podium cladding, signage walls",
                image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80",
              },
              {
                name: "Solid Aluminium Panel Facade",
                tagline: "3mm–5mm solid aluminium sheets",
                description:
                  "Premium solid aluminium panels with bent edges, cassette fixings, and PVDF coating. Higher rigidity and longer life than ACP — favoured for luxury and government projects.",
                specs: ["3mm–5mm solid aluminium", "Cassette / hook-on fixing", "30+ year service life", "Class A2 fire rating"],
                bestFor: "Luxury hotels, government buildings, premium HQs",
                image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
              },
            ].map((type) => (
              <div key={type.name} className="bg-background rounded-xl shadow-sm overflow-hidden border border-border">
                <img src={type.image} alt={`${type.name} - Fine Glaze`} className="h-52 w-full object-cover" loading="lazy" width="600" height="208" />
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-amber-600 mb-1">{type.tagline}</p>
                  <h3 className="text-xl font-bold mb-2">{type.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{type.description}</p>
                  <ul className="space-y-1 mb-4">
                    {type.specs.map((s) => (
                      <li key={s} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 size={14} className="text-amber-600 shrink-0" />{s}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-slate-500"><span className="font-semibold text-slate-700">Best for:</span> {type.bestFor}</p>
                </div>
              </div>
            ))}
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

      {/* INTERNAL LINKS */}
      <section className="py-12 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-xl font-bold text-slate-800 mb-5">Explore Our Other Facade Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { title: "Curtain Wall Systems", href: "/curtain-wall-systems", desc: "Unitized & stick system glazing" },
              { title: "Structural Glazing", href: "/structural-glazing", desc: "2-side, 4-side & spider glazing" },
              { title: "ACP Cladding", href: "/acp-aluminium-cladding", desc: "Composite panel facades" },
              { title: "Glass Railings", href: "/glass-railings", desc: "Balcony & staircase railings" },
              { title: "Facade Maintenance", href: "/maintenance-services", desc: "AMC, repair & waterproofing" },
              { title: "All Services", href: "/services", desc: "Browse our full service range" },
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
}
