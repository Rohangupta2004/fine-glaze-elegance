import SEO from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, MapPin } from "lucide-react";

export default function StructuralGlazing() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Structural Glazing Systems",
    "serviceType": "Structural Glazing Installation",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Fine Glaze",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "addressCountry": "IN"
      },
      "telephone": "+91-8369233566"
    },
    "areaServed": ["Pune", "Mumbai", "Navi Mumbai", "Nashik", "Maharashtra"],
    "description": "Frameless structural glazing systems for commercial buildings, showrooms, and premium architecture across India."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is structural glazing and how does it work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Structural glazing is a method of bonding glass to an aluminium frame using structural silicone sealant instead of mechanical fixings. This creates a seamless, frameless glass appearance on the building exterior while maintaining structural integrity against wind loads and weather."
        }
      },
      {
        "@type": "Question",
        "name": "How much does structural glazing cost per sq ft in India in 2026?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Standard 2-side structural glazing ranges from ₹350–₹550 per sq ft. Premium 4-side structural glazing starts at ₹500–₹800 per sq ft. Spider glazing systems range from ₹800–₹1,500 per sq ft depending on glass type and fittings."
        }
      },
      {
        "@type": "Question",
        "name": "Is structural glazing safe for high-rise buildings?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Structural glazing systems are engineered to IS 875 standards and can withstand wind loads of 1.5 to 4.5 kPa. Fine Glaze uses high-performance structural silicone (Dow Corning / Sika) rated for 25+ years of adhesion strength."
        }
      }
    ]
  };

  return (
    <Layout>
      <SEO
        title="Structural Glazing & Glazed Facade Systems | Glass Facade Contractors Pune & Mumbai – Fine Glaze"
        description="Top structural glazing company in India. 2-side, 4-side & spider glazed facade systems for showrooms, offices & malls. ₹350-1500/sq ft. 25-year silicone warranty. Free site visit."
        canonical="https://fineglaze.com/structural-glazing"
        keywords="structural glazing, glazed facade, glass facade contractors, structural glazing cost per sq ft, spider glazing, frameless glass facade Pune Mumbai, fasad glass, glass curtain wall manufacturers, silicone glazing system"
        schema={[serviceSchema, faqSchema]}
      />

      {/* HERO */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Structural Glazing Systems in India
            </h1>
            <p className="text-lg text-white/80 mb-8">
              Frameless structural glazing solutions delivering maximum
              transparency, elegance, and performance for modern buildings by Fine Glaze.
            </p>
            <div className="flex gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700">Get Quote</Button>
              </Link>
              <Link to="/portfolio">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-slate-900">View Projects</Button>
              </Link>
            </div>
          </div>

          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5"
            alt="Structural glazing glass facade building in India"
            className="rounded-xl shadow-2xl object-cover h-[420px] w-full"
            loading="eager"
            width="600"
            height="420"
          />
        </div>
      </section>

      {/* INTRO — KEYWORD-RICH */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl space-y-6">
          <h2 className="text-3xl font-bold">What is Structural Glazing?</h2>
          <p className="text-lg text-muted-foreground">
            <strong>Structural glazing</strong> is a modern facade technology where glass panels are bonded to aluminium frames
            using high-performance <strong>structural silicone sealant</strong> instead of mechanical clamps. This creates
            a <strong>seamless, frameless glass appearance</strong> on the building exterior — ideal for commercial buildings,
            showrooms, malls, and premium residential projects.
          </p>
          <p className="text-muted-foreground">
            Fine Glaze offers advanced structural glazing systems across <strong>Pune, Mumbai, Navi Mumbai, and Maharashtra</strong>.
            Our systems are engineered to withstand high wind loads, prevent water infiltration, and maximize natural daylight.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Structural Glazing Advantages
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
                title: "Frameless Appearance",
                desc: "Clean glass surfaces with no visible external frames. Creates a stunning modern aesthetic that architects love.",
              },
              {
                img: "https://images.unsplash.com/photo-1529429617124-95b109e86bb8",
                title: "Maximum Daylight",
                desc: "Maximizes natural lighting and reduces HVAC costs. High-performance Low-E DGU glass options available for LEED certification.",
              },
              {
                img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
                title: "High Structural Strength",
                desc: "Engineered to withstand wind loads of 1.5–4.5 kPa using Dow Corning / Sika structural silicone rated for 25+ years.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-background rounded-xl shadow overflow-hidden">
                <img src={item.img} alt={`${item.title} - structural glazing by Fine Glaze`} className="h-48 w-full object-cover" loading="lazy" width="400" height="192" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold mb-10">Our Structural Glazing Solutions</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "2-Side Structural Glazing",
              "4-Side Structural Glazing",
              "Spider Glazing Systems",
              "Glass Facades for Commercial Buildings",
              "Showroom & Corporate Office Facades",
              "Double-Glazed Unit (DGU) Glass Systems",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-amber-600 shrink-0" />
                <span className="text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL SEO: Areas Served */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Structural Glazing Services Across Maharashtra</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Pune", "Mumbai BKC", "Navi Mumbai", "Nashik", "Hinjewadi IT Park", "Thane"].map((city) => (
              <div key={city} className="flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full hover:bg-amber-600 transition-colors cursor-default">
                <MapPin size={16} />
                <span>{city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — Matches schema for Featured Snippets */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">What is structural glazing and how does it work?</h3>
              <p className="text-muted-foreground">
                Structural glazing is a method of bonding glass to an aluminium frame using structural silicone sealant instead of mechanical fixings. This creates a seamless, frameless glass appearance on the building exterior while maintaining structural integrity against wind loads and weather.
              </p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">How much does structural glazing cost per sq ft in India in 2026?</h3>
              <p className="text-muted-foreground">
                Standard 2-side structural glazing ranges from ₹350–₹550 per sq ft. Premium 4-side structural glazing starts at ₹500–₹800 per sq ft. Spider glazing systems range from ₹800–₹1,500 per sq ft depending on glass type and fittings.
              </p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">Is structural glazing safe for high-rise buildings?</h3>
              <p className="text-muted-foreground">
                Yes. Structural glazing systems are engineered to IS 875 standards and can withstand wind loads of 1.5 to 4.5 kPa. Fine Glaze uses high-performance structural silicone (Dow Corning / Sika) rated for 25+ years of adhesion strength.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
