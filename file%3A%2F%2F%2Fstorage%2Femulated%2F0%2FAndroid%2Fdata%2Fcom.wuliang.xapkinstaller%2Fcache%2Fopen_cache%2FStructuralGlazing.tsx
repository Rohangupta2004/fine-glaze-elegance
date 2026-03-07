import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { CheckCircle2, Building2, ShieldCheck, Sun, MapPin, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function StructuralGlazing() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Structural Glazing Systems",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Fine Glaze",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "addressCountry": "IN"
      }
    },
    "description": "Frameless structural glazing solutions delivering maximum transparency, elegance, and performance for commercial buildings across India.",
    "areaServed": ["Pune", "Mumbai", "Navi Mumbai", "Nashik", "Nagpur"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Structural Glazing Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "2-Side Structural Glazing" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "4-Side Structural Glazing" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Spider Glazing Systems" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Glass Facades for Commercial Buildings" } }
      ]
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Structural Glazing Systems in India | Frameless Glass Facade | Fine Glaze</title>
        <meta name="description" content="Fine Glaze provides advanced 2-side and 4-side structural glazing, spider glazing and frameless glass facade systems for commercial buildings across India. Get expert consultation." />
        <meta name="keywords" content="structural glazing India, structural glazing Pune, frameless glass facade, spider glazing system, 2 side structural glazing, 4 side structural glazing, glass facade contractor India, structural silicone glazing" />
        <link rel="canonical" href="https://www.fineglaze.com/structural-glazing" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      {/* HERO */}
      <section className="relative pt-32 pb-20 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/Glazing.webp')] bg-cover bg-center opacity-25" />
        <div className="container mx-auto px-4 relative z-10 max-w-6xl">
          <span className="text-amber-500 font-bold tracking-widest uppercase text-sm mb-2 block">Glazing Specialists</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Structural Glazing <span className="text-amber-500">Systems in India</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mb-8">
            Frameless structural glazing solutions delivering maximum transparency, elegance, and performance for modern buildings — engineered by Fine Glaze.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/918369233566?text=Hello%20Fine%20Glaze%2C%20I%20need%20structural%20glazing%20solutions."
              className="inline-block px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-semibold shadow-lg transition-colors"
            >
              Get Instant Quote
            </a>
            <Link to="/portfolio">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-slate-900">View Projects</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl space-y-6">
          <h2 className="text-3xl font-bold text-slate-900">Expert Structural Glazing Contractor in India</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            <strong>Fine Glaze</strong> offers advanced structural glazing systems that create seamless glass facades without visible frames. Using structural silicone bonding and high-performance DGU glass units, our systems are engineered to withstand high wind loads, seismic forces, and extreme weather — while maintaining a clean, minimalist aesthetic.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            Ideal for corporate offices, showrooms, malls, hotels, and premium residential towers, our structural glazing transforms buildings into architectural landmarks.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">Why Choose Structural Glazing?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Building2 className="text-amber-600" size={28} />, title: "Frameless Appearance", desc: "Clean glass surfaces with no visible external frames — creating a sleek, contemporary facade." },
              { icon: <Sun className="text-amber-600" size={28} />, title: "Maximum Daylight", desc: "Maximises natural lighting penetration, reducing artificial lighting loads and improving energy efficiency." },
              { icon: <ShieldCheck className="text-amber-600" size={28} />, title: "High Structural Strength", desc: "Engineered to withstand 1.5 to 4.5 kPa wind loads with structural silicone and mechanical fixings." },
            ].map((f) => (
              <div key={f.title} className="bg-white rounded-xl shadow p-6 flex flex-col gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">{f.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900">{f.title}</h3>
                <p className="text-slate-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNICAL SPECS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-start">
          <img src="/Glass.webp" alt="Structural glazing glass facade by Fine Glaze" className="rounded-xl shadow-2xl object-cover h-80 w-full" />
          <div>
            <h2 className="text-3xl font-bold mb-8 text-slate-900">Technical Specifications</h2>
            <ul className="space-y-4">
              {[
                { label: "Glass Type", val: "DGU / SGU / Laminated Safety Glass" },
                { label: "Sealant", val: "Dow Corning / Sika Structural Silicone" },
                { label: "Wind Load", val: "1.5 kPa to 4.5 kPa" },
                { label: "Aluminium Grade", val: "6063 T6 Alloy" },
                { label: "Finish", val: "PVDF / Anodized / Powder Coated" },
                { label: "Compliance", val: "ASTM C1184 / IS Standards" },
              ].map((spec) => (
                <li key={spec.label} className="flex justify-between items-center border-b border-slate-200 pb-2">
                  <span className="font-medium text-slate-700">{spec.label}</span>
                  <span className="text-slate-900 font-bold">{spec.val}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold mb-10 text-slate-900">Our Structural Glazing Solutions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {["2-Side Structural Glazing", "4-Side Structural Glazing", "Spider Glazing Systems", "Glass Facades for Commercial Buildings", "Showrooms & Corporate Offices", "Frameless Glass Canopies"].map((item) => (
              <div key={item} className="flex items-center gap-3 text-slate-700 font-medium bg-white p-4 rounded-xl shadow-sm">
                <CheckCircle2 className="text-amber-600 w-5 h-5 shrink-0" />{item}
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-slate-600 mb-4">Looking for curtain wall systems instead?</p>
            <Link to="/curtain-wall-systems" className="text-amber-600 font-bold hover:underline flex items-center justify-center gap-2">
              <Building2 size={16} /> View Curtain Wall Systems
            </Link>
          </div>
        </div>
      </section>

      {/* LOCAL SEO */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Structural Glazing Across Maharashtra</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Pune", "Mumbai", "Navi Mumbai", "Nashik", "Nagpur", "Aurangabad"].map((city) => (
              <div key={city} className="flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full hover:bg-amber-600 transition-colors">
                <MapPin size={16} /><span>{city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
