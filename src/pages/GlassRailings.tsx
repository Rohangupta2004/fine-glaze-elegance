import SEO from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, ShieldCheck, Zap, Maximize2, ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { CTASection } from "@/components/home/CTASection";

const GlassRailings = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Frameless Glass Railing Systems",
    "serviceType": "Glass Railing Installation",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Fine Glaze",
      "@id": "https://fineglaze.com",
      "url": "https://fineglaze.com",
      "telephone": "+91-8369233566",
      "image": "https://fineglaze.com/Railing.webp",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "addressCountry": "IN"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "42",
        "bestRating": "5"
      }
    },
    "description": "Frameless toughened glass railings for balconies, staircases, pool fencing & terraces. 12mm–19mm glass with SS 304/316 fittings. Mumbai, Pune, Lonavala.",
    "areaServed": [
      { "@type": "City", "name": "Mumbai" },
      { "@type": "City", "name": "Pune" },
      { "@type": "City", "name": "Lonavala" },
      { "@type": "City", "name": "Navi Mumbai" },
      { "@type": "State", "name": "Maharashtra" }
    ],
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "minPrice": "450",
        "maxPrice": "1200",
        "priceCurrency": "INR",
        "unitText": "per running foot"
      }
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the cost of frameless glass railing per running foot in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Frameless glass railing systems in India typically cost ₹450–₹1,200 per running foot. U-channel systems start at ₹450–₹700/rft, SS spigot systems range from ₹650–₹950/rft, and premium point-fixed systems with SS 316 hardware cost ₹900–₹1,200/rft. Pricing varies based on glass thickness, hardware grade, and site complexity."
        }
      },
      {
        "@type": "Question",
        "name": "What thickness of glass is used for balcony railings?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For standard residential balconies, 12mm toughened glass is commonly used. For higher-traffic or commercial applications, 15mm or 19mm toughened laminated glass (Sentry PVB laminate) is recommended. Laminated glass stays intact even if broken, which is critical for elevated installations."
        }
      },
      {
        "@type": "Question",
        "name": "Is frameless glass railing safe for balconies and staircases?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Fine Glaze uses toughened glass that is 5x stronger than regular glass. For maximum safety, we recommend laminated toughened glass (Sentry lamination) — it holds together even if the glass panel cracks. All hardware is marine-grade SS 304/316 tested for structural load bearing."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between U-channel and SS spigot glass railing systems?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "U-channel railings use a continuous aluminium or SS channel at the base to hold the glass — cleaner, economical, and ideal for straight runs. SS spigot systems clamp the glass panel at the bottom using individual stainless steel spigots — offers more flexibility for varied floor finishes and premium aesthetics. Both are structurally rated for safety."
        }
      },
      {
        "@type": "Question",
        "name": "How long does glass railing installation take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A typical residential project (balcony + staircase) takes 2–4 days for installation after a 1–2 week fabrication period. Commercial projects take longer based on scope. Fine Glaze provides 3D renders before fabrication to ensure design approval."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://fineglaze.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Glass Railings", "item": "https://fineglaze.com/glass-railings" }
    ]
  };

  return (
    <Layout darkHero>
      <SEO
        title="Frameless Glass Railings in Mumbai & Pune | Balcony, Staircase & Pool Fencing – Fine Glaze"
        description="Premium frameless glass railing systems for balconies, staircases & pool fencing. 12mm–19mm toughened glass, SS 304/316 fittings. ₹450–₹1,200/rft. Free site visit in Mumbai, Pune & Maharashtra."
        canonical="https://fineglaze.com/glass-railings"
        keywords="frameless glass railing Mumbai, glass railing Pune, balcony glass railing, staircase glass railing, toughened glass railing India, SS spigot railing, glass balustrade, glass railing cost per running foot India, frameless glass balcony Mumbai"
        ogImage="https://fineglaze.com/Railing.webp"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* HERO */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img src="/Railing.webp" alt="Luxury Frameless Glass Railing Balcony - Fine Glaze" className="w-full h-full object-cover opacity-55" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 to-transparent" />
        </div>

        <div className="relative z-10 container px-4 max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-amber-400 font-bold text-sm uppercase tracking-wider">Glass Railing Specialists</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-5 leading-tight">
            Invisible <span className="text-gradient-gold">Strength</span>
          </h1>
          <p className="text-xl text-slate-200 max-w-2xl mb-3 font-light leading-relaxed">
            Frameless glass railing systems engineered for safety, designed for luxury. Unobstructed views from your balcony, staircase, or terrace.
          </p>
          <p className="text-slate-400 text-sm mb-8">
            Trusted across <strong className="text-white">Mumbai · Pune · Lonavala · Navi Mumbai · Maharashtra</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-base px-8 gap-2">
                Get Free Quote <ArrowRight size={16} />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="outline" size="lg" className="text-base px-8">View Gallery</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="py-6 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            {[
              { value: "12–19mm", label: "Toughened Glass" },
              { value: "SS 304/316", label: "Marine Grade Hardware" },
              { value: "2–4 Days", label: "Installation Time" },
              { value: "Sentry PVB", label: "Laminated Safety Glass" },
            ].map((s) => (
              <div key={s.label} className="text-white">
                <p className="text-lg font-extrabold text-amber-400">{s.value}</p>
                <p className="text-xs text-slate-400 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-white">
        <div className="container px-4 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-3 text-slate-900">Why Choose Fine Glaze Glass Railings?</h2>
          <p className="text-center text-slate-500 mb-12">Safety, aesthetics and durability — engineered into every panel</p>
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-5">
                <Maximize2 size={30} />
              </div>
              <h3 className="text-xl font-bold mb-3">Zero Obstruction Views</h3>
              <p className="text-slate-600 text-sm leading-relaxed">No vertical metal posts. Bottom-mounted aluminium U-Channels or SS Spigots keep your view 100% unobstructed — perfect for sea-facing or valley-view properties.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 mb-5">
                <ShieldCheck size={30} />
              </div>
              <h3 className="text-xl font-bold mb-3">Impact-Tested Safety</h3>
              <p className="text-slate-600 text-sm leading-relaxed">12mm–19mm Toughened Glass, 5× stronger than ordinary glass. Optional Sentry PVB lamination keeps the panel intact even if cracked — essential for high-rise balconies.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-5">
                <Zap size={30} />
              </div>
              <h3 className="text-xl font-bold mb-3">Corrosion-Free Hardware</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Marine Grade SS 304/316 hardware — no rust, no staining, even in Mumbai's coastal humid climate. AISI 316 recommended for sea-facing properties.</p>
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="py-20 bg-slate-50">
        <div className="container px-4">
          <h2 className="text-3xl font-bold mb-2 text-slate-900">Glass Railing Applications</h2>
          <p className="text-slate-500 mb-10">Versatile solutions for every residential and commercial space</p>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="overflow-hidden border-0 shadow-lg group cursor-pointer">
              <div className="relative h-80 overflow-hidden">
                <img src="/Railing2.webp" alt="Frameless balcony glass railing Mumbai Pune" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold">External Balconies</h3>
                  <p className="opacity-80 text-sm">Continuous U-Channel or Spigot Profile</p>
                </div>
              </div>
            </Card>

            <div className="grid gap-6">
              <Card className="overflow-hidden border-0 shadow-lg flex flex-col sm:flex-row group">
                <div className="w-full sm:w-2/5 h-44 sm:h-auto overflow-hidden relative shrink-0">
                  <img src="/Custom railing.webp" alt="Staircase glass railing installation" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <CardContent className="p-5 flex flex-col justify-center">
                  <h3 className="text-lg font-bold mb-2">Staircases & Mezzanines</h3>
                  <p className="text-slate-600 text-sm mb-3">Side-mounted point fixings or spigots for open-tread staircases and mezzanine floors.</p>
                  <div className="flex items-center gap-2 text-amber-600 text-sm font-medium">
                    <Check size={15} /> Compatible with Wooden & SS Handrails
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-0 shadow-lg flex flex-col sm:flex-row group">
                <div className="w-full sm:w-2/5 h-44 sm:h-auto overflow-hidden relative shrink-0">
                  <img src="/Glass.webp" alt="Pool fencing glass railing" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <CardContent className="p-5 flex flex-col justify-center">
                  <h3 className="text-lg font-bold mb-2">Pool Fencing & Terraces</h3>
                  <p className="text-slate-600 text-sm mb-3">Safety barriers with unobstructed views. Child-safe locking gates available. Ideal for villa and hotel pool areas.</p>
                  <div className="flex items-center gap-2 text-amber-600 text-sm font-medium">
                    <Check size={15} /> 15mm Toughened / Laminated Glass
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>



      {/* SPECS TABLE */}
      <section className="py-20 bg-slate-50">
        <div className="container px-4 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-2 text-center">Glass Specification Guide</h2>
          <p className="text-center text-slate-500 mb-8">Choose the right glass grade for your project</p>
          <Card>
            <Table>
              <TableHeader>
                <TableRow className="bg-slate-100">
                  <TableHead className="w-[180px] font-bold">Specification</TableHead>
                  <TableHead className="font-bold">Standard Grade</TableHead>
                  <TableHead className="font-bold text-amber-600">Premium Grade (Recommended)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { spec: "Glass Type", standard: "Toughened (Heat Strengthened)", premium: "Laminated Toughened (Sentry PVB)" },
                  { spec: "Thickness", standard: "10mm – 12mm", premium: "13.52mm – 17.52mm" },
                  { spec: "Safety Behaviour", standard: "Shatters into small, dull cubes", premium: "Stays in place even when broken" },
                  { spec: "Hardware Grade", standard: "SS 202 Grade (Budget)", premium: "SS 304 / 316 Grade (Rust-Proof)" },
                  { spec: "Profile Finish", standard: "Silver Anodized", premium: "Champagne / Black / Wood Grain" },
                  { spec: "Ideal For", standard: "Ground floor, interior spaces", premium: "High-rise balconies, coastal & pool" },
                ].map((row) => (
                  <TableRow key={row.spec}>
                    <TableCell className="font-medium">{row.spec}</TableCell>
                    <TableCell className="text-slate-600 text-sm">{row.standard}</TableCell>
                    <TableCell className="text-slate-800 text-sm font-medium">{row.premium}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>
      </section>

      {/* LOCAL SEO */}
      <section className="py-14 bg-slate-900 text-white">
        <div className="container px-4 text-center">
          <h2 className="text-2xl font-bold mb-2">Glass Railing Installation Across Maharashtra</h2>
          <p className="text-slate-400 text-sm mb-7">Serving residential societies, villas, hotels & commercial projects</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Mumbai – Andheri / Bandra / BKC", "Pune – Wakad / Kharadi / Koregaon", "Lonavala & Hill Stations", "Navi Mumbai", "Thane", "Nashik"].map((city) => (
              <div key={city} className="flex items-center gap-2 bg-white/10 px-5 py-2 rounded-full hover:bg-amber-600 transition-colors cursor-default text-sm">
                <MapPin size={13} /><span>{city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container px-4 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-3">Frequently Asked Questions</h2>
          <p className="text-center text-slate-500 mb-10">Everything about frameless glass railing systems</p>
          <div className="space-y-4">
            {[
              {
                q: "What is the cost of frameless glass railing per running foot in India?",
                a: "Glass railing costs ₹450–₹700/rft for U-channel systems, ₹650–₹950 for SS spigot systems, and ₹900–₹1,200 for premium point-fixed systems with SS 316 hardware. Pricing depends on glass thickness, hardware grade, and site complexity.",
              },
              {
                q: "What glass thickness is used for balcony railings?",
                a: "Standard residential balconies use 12mm toughened glass. For higher-traffic or commercial spaces, 15mm or 19mm laminated toughened glass (Sentry laminate) is recommended — it holds together even if cracked.",
              },
              {
                q: "Is frameless glass railing safe for high-rise buildings?",
                a: "Yes. Fine Glaze uses toughened glass rated 5× stronger than ordinary glass. Laminated glass options stay intact on breakage — critical for elevated installations. All hardware is marine-grade SS 304/316 load-tested for safety.",
              },
              {
                q: "What is the difference between U-channel and SS spigot railing systems?",
                a: "U-channel uses a continuous base channel — cleaner look, economical, ideal for straight runs. SS spigots clamp glass individually — more flexibility for varied floor finishes and a premium architectural appearance.",
              },
              {
                q: "How long does glass railing installation take?",
                a: "A typical residential project takes 2–4 days on-site after 1–2 weeks of fabrication. Fine Glaze provides 3D renders before fabrication to ensure design approval and zero rework.",
              },
            ].map((faq, i) => (
              <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                <h3 className="font-bold text-slate-900 mb-2 text-sm">{faq.q}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-12 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-xl font-bold text-slate-800 mb-5">Explore Our Other Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { title: "Curtain Wall Systems", href: "/curtain-wall-systems", desc: "Unitized & stick system facades" },
              { title: "Glass Partitions & Shower", href: "/services#partitions", desc: "Office partitions & enclosures" },
              { title: "Facade AMC & Maintenance", href: "/maintenance-services", desc: "Repair & waterproofing services" },
              { title: "Structural Glazing", href: "/structural-glazing", desc: "Frameless glass facade systems" },
              { title: "ACP Cladding", href: "/acp-aluminium-cladding", desc: "Composite panel cladding" },
              { title: "All Services", href: "/services", desc: "View all 8 service categories" },
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
};

export default GlassRailings;
