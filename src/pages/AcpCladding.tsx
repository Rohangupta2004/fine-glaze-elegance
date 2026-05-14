import SEO from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle2, Building2, ShieldCheck, Paintbrush, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AcpCladding = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "ACP & Aluminium Composite Panel Cladding",
    "serviceType": "ACP Cladding Installation",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Fine Glaze",
      "@id": "https://fineglaze.com",
      "url": "https://fineglaze.com",
      "telephone": "+91-8369233566",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "addressCountry": "IN"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "27",
        "bestRating": "5"
      }
    },
    "description": "Premium ACP cladding contractor for commercial & residential buildings. ACP tray system, PVDF panels, FR-grade composite panels. Mumbai, Pune & Maharashtra.",
    "areaServed": [
      { "@type": "City", "name": "Mumbai" },
      { "@type": "City", "name": "Pune" },
      { "@type": "City", "name": "Navi Mumbai" },
      { "@type": "State", "name": "Maharashtra" }
    ],
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "minPrice": "80",
        "maxPrice": "220",
        "priceCurrency": "INR",
        "unitText": "per sq ft"
      }
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the cost of ACP cladding per sq ft in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ACP cladding costs in India typically range from ₹80–₹130/sq ft for standard PE-core panels to ₹120–₹220/sq ft for premium PVDF-coated FR-grade panels, including installation. Prices vary based on panel brand (Aludecor, Viva, Eurobond), panel thickness, finish type, height, and complexity of the substructure."
        }
      },
      {
        "@type": "Question",
        "name": "What is FR grade ACP cladding and why is it important?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "FR (Fire Retardant) grade ACP panels have a mineral-filled core instead of a polyethylene core, making them significantly more fire resistant. They meet NBC (National Building Code) and IS 2553 fire safety norms for buildings above 15 metres. FR grade is mandatory for commercial buildings, hospitals, malls, and multi-storey residential buildings in India."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between PVDF and PE coating in ACP panels?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "PVDF (Polyvinylidene Fluoride, Kynar 500) coating provides 20+ year colour warranty, superior UV resistance, and self-cleaning properties. PE (Polyester) coating is more economical but fades faster in harsh UV and coastal conditions. For exterior cladding in India, PVDF coating is strongly recommended for long-term durability."
        }
      },
      {
        "@type": "Question",
        "name": "What brands of ACP panels does Fine Glaze use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Fine Glaze works with leading ACP panel manufacturers including Aludecor, Viva, Eurobond, and Alstrong — all offering ISI-marked panels with PVDF KYNAR 500 coating and 15–20 year warranty. We recommend brands based on project requirements, budget, and building type."
        }
      },
      {
        "@type": "Question",
        "name": "How long does ACP cladding installation take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ACP cladding installation for a typical commercial building facade (5,000–10,000 sq ft) takes 3–6 weeks including fabrication and on-site installation. Substructure (aluminium tube framework) is fabricated off-site, panels are cut and routed at factory, and assembled on-site. Fine Glaze provides shop drawings and 3D renders for approval before fabrication."
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
      { "@type": "ListItem", "position": 3, "name": "ACP & Metal Cladding", "item": "https://fineglaze.com/acp-aluminium-cladding" }
    ]
  };

  return (
    <Layout darkHero>
      <SEO
        title="ACP Cladding Contractor in Mumbai & Pune | PVDF & FR Grade ACP Panels – Fine Glaze"
        description="Expert ACP cladding contractor for commercial & residential buildings. PVDF-coated & FR-grade ACP tray system installation. ₹80–₹220/sq ft. Brands: Aludecor, Viva, Eurobond. Free site visit in Mumbai, Pune & Maharashtra."
        canonical="https://fineglaze.com/acp-aluminium-cladding"
        keywords="ACP cladding contractor Mumbai, ACP cladding Pune, aluminium composite panel cladding India, PVDF ACP panels, FR grade ACP cladding, ACP tray system installation, ACP cladding cost per sq ft India, Aludecor cladding contractor, metal cladding Maharashtra"
        ogImage="https://fineglaze.com/Panel.webp"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* HERO */}
      <section className="relative h-[75vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/Panel.webp" alt="Modern ACP Cladding Facade Design - Fine Glaze" className="w-full h-full object-cover brightness-50" loading="eager" fetchPriority="high" width="800" height="559" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        </div>
        <div className="relative z-10 container text-center text-white px-4 max-w-4xl">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="inline-block px-4 py-1.5 border border-white/30 rounded-full bg-white/10 backdrop-blur-md text-sm font-medium tracking-wide">
              ARCHITECTURAL FACADE SOLUTIONS
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-5 tracking-tight">
            Advanced <span className="text-gradient-gold">ACP Cladding</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 max-w-2xl mx-auto mb-3 font-light leading-relaxed">
            Redefining skylines with lightweight, weather-resistant, and fire-rated Aluminium Composite Panels.
          </p>
          <p className="text-slate-400 text-sm mb-8">
            Brands: <strong className="text-white">Aludecor · Viva · Eurobond · Alstrong</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-base px-8 gap-2">
                Get Free Quote <ArrowRight size={15} />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="outline" size="lg" className="text-base px-8">View Projects</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="py-6 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            {[
              { value: "PVDF", label: "20-yr Colour Warranty" },
              { value: "FR Grade", label: "Fire Retardant Panels" },
              { value: "ISI Marked", label: "Certified Panels" },
              { value: "500+", label: "Colour Options" },
            ].map((s) => (
              <div key={s.label} className="text-white">
                <p className="text-lg font-extrabold text-amber-400">{s.value}</p>
                <p className="text-xs text-slate-400 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 bg-white">
        <div className="container px-4 max-w-5xl mx-auto space-y-5">
          <h2 className="text-3xl font-bold text-slate-900">What is ACP Cladding?</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            <strong>ACP (Aluminium Composite Panel) cladding</strong> is a facade system where lightweight aluminium composite panels
            are fixed to a building's exterior over an aluminium substructure. ACP panels consist of two thin aluminium skins
            bonded to a core — PE (polyester) or FR (fire retardant mineral-filled) — offering an exceptional strength-to-weight ratio.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Fine Glaze is a leading <strong>ACP cladding contractor in Pune and Mumbai</strong>, delivering PVDF-coated, FR-grade,
            and custom-finish panels for <strong>commercial buildings, IT parks, hospitals, malls, showrooms, and residential facades</strong>
            across Maharashtra.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-20 bg-slate-50">
        <div className="container px-4 max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-slate-900">Why Architects Choose ACP Cladding</h2>
          <p className="text-center text-slate-500 mb-12">The perfect balance of design freedom, durability, and cost-efficiency</p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-8 text-center">
                <div className="mb-5 w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto text-blue-600">
                  <ShieldCheck size={30} />
                </div>
                <h3 className="text-xl font-bold mb-3">Weather & Fire Resistant</h3>
                <p className="text-slate-600 leading-relaxed text-sm">PVDF-coated panels withstand harsh UV rays, monsoon rains, and coastal salt air for 20+ years. FR-grade cores meet NBC fire safety norms for buildings above 15m.</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-amber-200">
              <CardContent className="pt-8 text-center">
                <div className="mb-5 w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto text-amber-600">
                  <Paintbrush size={30} />
                </div>
                <h3 className="text-xl font-bold mb-3">Unlimited Design Freedom</h3>
                <p className="text-slate-600 leading-relaxed text-sm">Available in 500+ colours, metallic finishes, wood-grain, stone, and mirror textures. ACP can be bent, curved, and routed into complex 3D shapes for unique facades.</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-8 text-center">
                <div className="mb-5 w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto text-emerald-600">
                  <Building2 size={30} />
                </div>
                <h3 className="text-xl font-bold mb-3">Lightweight & Structural</h3>
                <p className="text-slate-600 leading-relaxed text-sm">At 3–6mm, ACP panels weigh significantly less than stone or brick, reducing structural dead load while providing excellent flatness and rigidity.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>



      {/* SPECS + PARTNERS */}
      <section className="py-20 bg-slate-50">
        <div className="container px-4 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Technical Specifications</h2>
              <Card>
                <Table>
                  <TableHeader>
                    <TableRow className="bg-slate-100">
                      <TableHead className="w-[180px] font-bold">Feature</TableHead>
                      <TableHead className="font-bold">Specification</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { f: "Panel Thickness", v: "3mm, 4mm (Standard), 6mm" },
                      { f: "Aluminium Skin", v: "0.25mm – 0.50mm" },
                      { f: "Coating Type", v: "PVDF (Kynar 500) / FEVE / PE" },
                      { f: "Core Type", v: "PE (Standard) / FR (Fire Retardant)" },
                      { f: "Fire Rating", v: "Class B1 (PE) / A2 (FR Non-Combustible)" },
                      { f: "Colour Options", v: "500+ RAL / NCS colours" },
                      { f: "Installation Method", v: "Tray / Rivet on Aluminium Tube Sub-frame" },
                      { f: "Warranty", v: "15–20 years (PVDF coating)" },
                    ].map((row) => (
                      <TableRow key={row.f}>
                        <TableCell className="font-medium text-sm">{row.f}</TableCell>
                        <TableCell className="text-slate-700 text-sm">{row.v}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {["FR Grade (NBC Compliant)", "PVDF 20-yr Warranty", "Sound Insulation", "Fully Recyclable", "Rapid Installation", "Custom Shapes & Curves"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-slate-700 text-sm">
                    <CheckCircle2 className="text-amber-600 w-4 h-4 shrink-0" /> {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-3">Our ACP Panel Brands</h2>
                <p className="text-slate-600 text-sm mb-5">We only work with certified, ISI-marked panel manufacturers offering verifiable warranties.</p>
              </div>
              {[
                { brand: "Aludecor", detail: "India's #1 ACP brand. PVDF & FEVE coatings, FR & PE core. 20-yr warranty." },
                { brand: "Viva Composite Panels", detail: "Premium PVDF Kynar 500 coated panels. Wide colour range, ISI marked." },
                { brand: "Eurobond (HIL)", detail: "European-grade quality, FR A2 non-combustible core available." },
                { brand: "Alstrong", detail: "High-gloss mirror & brushed metallic finishes. Premium architectural facades." },
              ].map((b) => (
                <div key={b.brand} className="flex gap-4 p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center shrink-0">
                    <Building2 size={18} className="text-amber-700" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">{b.brand}</p>
                    <p className="text-xs text-slate-500 leading-relaxed">{b.detail}</p>
                  </div>
                </div>
              ))}

              <div className="bg-slate-900 text-white p-5 rounded-xl">
                <h3 className="font-bold mb-2">ACP Application Areas</h3>
                <div className="grid grid-cols-2 gap-2 text-sm text-slate-300">
                  {["Commercial Exteriors", "IT Parks & Offices", "Retail Showrooms", "Signage & Fascia", "Column & Soffit Cladding", "Canopy & Entrance"].map(a => (
                    <span key={a} className="flex items-center gap-1.5">
                      <CheckCircle2 size={13} className="text-amber-500 shrink-0" />{a}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL SEO */}
      <section className="py-14 bg-slate-900 text-white">
        <div className="container px-4 text-center">
          <h2 className="text-2xl font-bold mb-2">ACP Cladding Across Maharashtra</h2>
          <p className="text-slate-400 text-sm mb-7">Serving commercial, retail, residential & institutional projects</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Mumbai – Andheri / Thane / BKC", "Pune – Hinjewadi / Viman Nagar", "Navi Mumbai", "Nashik", "Nagpur", "Aurangabad"].map((city) => (
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
          <p className="text-center text-slate-500 mb-10">Everything about ACP cladding for your building</p>
          <div className="space-y-4">
            {[
              {
                q: "What is the cost of ACP cladding per sq ft in India?",
                a: "ACP cladding costs ₹80–₹130/sq ft for standard PE-core panels and ₹120–₹220/sq ft for premium PVDF FR-grade panels including installation. Final price depends on panel brand, finish type, height, and substructure complexity.",
              },
              {
                q: "What is FR grade ACP and why is it important?",
                a: "FR (Fire Retardant) ACP has a mineral-filled core instead of PE core, making it significantly more fire-resistant. It is mandatory for buildings above 15m, malls, hospitals, and commercial towers under NBC fire safety norms in India.",
              },
              {
                q: "What is the difference between PVDF and PE coating?",
                a: "PVDF (Kynar 500) coating offers 20+ year colour warranty, superior UV resistance, and self-cleaning properties. PE coating is cheaper but fades faster. For exterior cladding in Indian climate, PVDF is strongly recommended.",
              },
              {
                q: "Which ACP panel brands does Fine Glaze use?",
                a: "Fine Glaze works with Aludecor, Viva, Eurobond, and Alstrong — all ISI-marked with PVDF KYNAR 500 coating and 15–20 year warranty. We recommend brands based on project type and budget.",
              },
              {
                q: "How long does ACP cladding installation take?",
                a: "A typical 5,000–10,000 sq ft commercial facade takes 3–6 weeks including fabrication and installation. Fine Glaze provides shop drawings and 3D renders for approval before any fabrication begins.",
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
          <h2 className="text-xl font-bold text-slate-800 mb-5">Explore Our Other Facade Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { title: "Curtain Wall Systems", href: "/curtain-wall-systems", desc: "Unitized & stick system glazing" },
              { title: "Structural Glazing", href: "/structural-glazing", desc: "Frameless glass facade systems" },
              { title: "Aluminium Facade", href: "/aluminium-facade", desc: "Aluminium facade systems" },
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
};

export default AcpCladding;
