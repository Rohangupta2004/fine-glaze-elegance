import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { CheckCircle2, Building2, ShieldCheck, Maximize2, MapPin, Wrench, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

export default function CurtainWall() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Curtain Wall Glazing Systems",
    "serviceType": "Curtain Wall Installation",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Fine Glaze",
      "@id": "https://fineglaze.com",
      "url": "https://fineglaze.com",
      "telephone": "+91-8369233566",
      "image": "https://fineglaze.com/default-og.webp",
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
        "reviewCount": "38",
        "bestRating": "5"
      }
    },
    "description": "Premium unitized and semi-unitized curtain wall glazing systems for commercial buildings in Pune and Maharashtra. ₹350–₹1,200/sq ft.",
    "areaServed": [
      { "@type": "City", "name": "Pune" },
      { "@type": "City", "name": "Mumbai" },
      { "@type": "City", "name": "Navi Mumbai" },
      { "@type": "City", "name": "Nashik" },
      { "@type": "State", "name": "Maharashtra" }
    ],
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
      "name": "Curtain Wall Systems",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Unitized Curtain Wall System" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Semi-Unitized Curtain Wall System" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Stick System Curtain Wall" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Spider Glazing Curtain Wall" } }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the cost of curtain wall glazing per sq ft in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Curtain wall glazing systems in India typically range from ₹350 to ₹1,200 per sq ft. Stick system curtain walls cost ₹350–₹600/sq ft, while unitized systems range from ₹700–₹1,200/sq ft depending on glass specifications, wind load requirements, aluminium profile grade, and installation complexity. Fine Glaze provides custom project quotations with free site visits."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between unitized and stick system curtain walls?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Stick system curtain walls are assembled piece by piece on-site, making them suitable for low-to-mid-rise buildings and smaller projects. Unitized curtain wall systems are factory-assembled into full-storey panels and craned into position floor by floor. Unitized systems reduce on-site installation time by up to 40%, ensure factory-quality control, and are preferred for large commercial towers and IT campuses."
        }
      },
      {
        "@type": "Question",
        "name": "How long does curtain wall installation take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Installation time depends on the building size and system type. For a typical 10-storey commercial building with unitized curtain walls, installation takes approximately 4–8 weeks after fabrication. Fabrication lead time is usually 6–10 weeks from shop drawing approval. Fine Glaze uses parallel workflows to compress timelines without compromising quality."
        }
      },
      {
        "@type": "Question",
        "name": "What glass types are used in curtain wall systems?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Fine Glaze curtain wall systems support Single Glazed Units (SGU), Double Glazed Units (DGU), Low-E glass for thermal efficiency, laminated safety glass, and reflective glass. For LEED-certified green buildings, we recommend DGU with Low-E coating and argon gas fill which reduces heat gain by up to 70%."
        }
      },
      {
        "@type": "Question",
        "name": "Which buildings is curtain wall glazing suitable for?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Curtain wall glazing is ideal for commercial office towers, IT parks, hotels, hospitals, shopping malls, airports, and corporate campuses. Fine Glaze has successfully delivered curtain wall projects for Embassy REIT, LTIMindtree, and Pune International Airport across Maharashtra."
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
      { "@type": "ListItem", "position": 3, "name": "Curtain Wall Systems", "item": "https://fineglaze.com/curtain-wall-systems" }
    ]
  };

  return (
    <Layout darkHero>
      <SEO
        title="Curtain Wall Manufacturers in Pune & Mumbai | Unitized & Stick System Glass Facade – Fine Glaze"
        description="Top curtain wall manufacturers in India. Unitized & stick system glass curtain walls for commercial towers & IT parks. ₹350–₹1,200/sq ft. 5+ yrs experience. Trusted by Embassy REIT & LTIMindtree. Free site visit."
        canonical="https://fineglaze.com/curtain-wall-systems"
        keywords="curtain wall manufacturers India, glass curtain wall manufacturers Pune, unitized curtain wall system, stick system curtain wall, glazed facade Mumbai, curtain wall cost per sq ft India, curtain wall contractors Maharashtra, semi unitized curtain wall, spider glazing facade"
        ogImage="https://fineglaze.com/Unitized.webp"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* HERO */}
      <section className="relative pt-32 pb-24 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/Unitized.webp')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-transparent" />
        <div className="container mx-auto px-4 relative z-10 max-w-6xl">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-amber-400 font-bold tracking-widest uppercase text-sm">Structural Glazing Experts</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              High-Performance <span className="text-gradient-gold">Curtain Wall Systems</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mb-4 leading-relaxed">
              Precision-engineered unitized and semi-unitized glazing solutions for modern commercial towers and IT campuses.
              Factory-assembled quality that cuts installation time by <strong className="text-white">40%</strong>.
            </p>
            <p className="text-slate-400 text-sm mb-8">
              Trusted by <strong className="text-white">Embassy REIT · LTIMindtree · Pune International Airport</strong>
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 gap-2">
                  Get Free Quote <ArrowRight size={16} />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button size="lg" variant="outline">View Projects</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="py-8 bg-slate-800 border-b border-slate-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            {[
              { value: "10+", label: "Curtain Wall Projects" },
              { value: "5+ yrs", label: "Facade Experience" },
              { value: "IS 875", label: "Wind Load Certified" },
              { value: "25 yr", label: "Silicone Warranty" },
            ].map((s) => (
              <div key={s.label} className="text-white">
                <p className="text-xl font-extrabold text-amber-400">{s.value}</p>
                <p className="text-xs text-slate-400 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT & WHY */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">Advanced Curtain Wall Engineering</h2>
            <p className="text-slate-600 leading-relaxed">
              At <strong>Fine Glaze</strong>, we engineer building envelopes — not just install glass. Our <strong>curtain wall systems</strong> are
              designed to withstand wind loads up to 4.5 kPa, prevent water infiltration, and deliver superior thermal insulation
              for <strong>commercial office towers, IT parks, hotels, malls, and airports</strong> across India.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Whether you are developing a corporate campus in <strong>Hinjewadi, Pune</strong> or a luxury hotel in <strong>Mumbai BKC</strong>,
              our systems are engineered to last decades with minimal maintenance. We use <strong>6063-T6 aluminium alloy</strong>,
              <strong> Dow Corning / Sika structural silicone</strong>, and <strong>DGU / Low-E glass</strong> for energy efficiency.
            </p>

            <div className="grid grid-cols-1 gap-4 mt-6">
              <div className="flex items-start gap-4 p-4 border rounded-lg bg-slate-50">
                <Building2 className="text-amber-600 shrink-0 mt-1" size={22} />
                <div>
                  <h3 className="font-bold text-slate-900">Unitized Curtain Wall Systems</h3>
                  <p className="text-sm text-slate-600 mt-1">
                    Panels fully assembled at factory, craned and hooked floor-by-floor. 40% faster installation. Ideal for
                    high-rise commercial towers requiring rapid building envelope closure. Best quality control.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 border rounded-lg bg-slate-50">
                <Maximize2 className="text-amber-600 shrink-0 mt-1" size={22} />
                <div>
                  <h3 className="font-bold text-slate-900">Semi-Unitized / Stick System</h3>
                  <p className="text-sm text-slate-600 mt-1">
                    Vertical mullions installed first, glazing panels fitted on-site. Flexible for complex geometries and
                    lower-rise projects. Cost-effective for buildings under 10 floors.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 border rounded-lg bg-slate-50">
                <ShieldCheck className="text-amber-600 shrink-0 mt-1" size={22} />
                <div>
                  <h3 className="font-bold text-slate-900">Spider Glazing Systems</h3>
                  <p className="text-sm text-slate-600 mt-1">
                    Structural point-fixed glass with minimal hardware. Creates ultra-transparent facades with stainless steel
                    spider fittings for showrooms, lobbies, and feature facades.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-slate-900">Technical Specifications</h3>
              <ul className="space-y-3">
                {[
                  { label: "Glass Type", val: "DGU / SGU / Low-E / Laminated" },
                  { label: "Aluminium Grade", val: "6063 T6 Alloy" },
                  { label: "Wind Load Capacity", val: "1.5 kPa to 4.5 kPa" },
                  { label: "Weather Seal", val: "EPDM Gaskets + Structural Silicone" },
                  { label: "Finish Options", val: "PVDF / Anodized / Powder Coated" },
                  { label: "Standards", val: "IS 875 / ASTM / BS EN Compliant" },
                  { label: "Silicone Brand", val: "Dow Corning / Sika" },
                  { label: "Warranty", val: "10-year structural, 25-year silicone" },
                ].map((spec, i) => (
                  <li key={i} className="flex justify-between items-center border-b border-slate-200 pb-2 text-sm">
                    <span className="font-medium text-slate-700">{spec.label}</span>
                    <span className="text-slate-900 font-bold text-right max-w-[55%]">{spec.val}</span>
                  </li>
                ))}
              </ul>
            </div>


          </div>
        </div>
      </section>

      {/* WHAT WE DELIVER */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-3 text-slate-900">Our Curtain Wall Solutions</h2>
          <p className="text-center text-slate-500 mb-10">End-to-end design, fabrication & installation across Maharashtra</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Unitized Curtain Wall Systems",
              "Stick System Curtain Walls",
              "Semi-Unitized Glazing",
              "Spider Point-Fixed Glazing",
              "Double Skin Facade Systems",
              "ACP & Aluminium Cladding",
              "DGU Low-E Glass Facades",
              "LEED Green Building Facades",
              "Structural Silicone Glazing",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-white rounded-lg p-3 shadow-sm border border-slate-100">
                <CheckCircle2 size={18} className="text-amber-600 shrink-0" />
                <span className="text-sm font-medium text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL SEO */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-2">Curtain Wall Installation Across Maharashtra</h2>
          <p className="text-slate-400 text-sm mb-8">Serving developers, architects, and PMC firms across all major cities</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Pune – Hinjewadi IT Park", "Mumbai – BKC & Andheri", "Navi Mumbai – CBD Belapur", "Nashik", "Nagpur", "Aurangabad", "Thane", "Lonavala"].map((city) => (
              <div key={city} className="flex items-center gap-2 bg-white/10 px-5 py-2.5 rounded-full hover:bg-amber-600 transition-colors cursor-default text-sm">
                <MapPin size={14} />
                <span>{city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-3">Our Curtain Wall Installation Process</h2>
          <p className="text-center text-slate-500 mb-12">From survey to handover — transparent, on-time delivery</p>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { title: "Site Survey", desc: "Wind pressure calculation & facade measurements." },
              { title: "Design & Drawing", desc: "3D modelling & shop drawings signed off by structural engineer." },
              { title: "Fabrication", desc: "Precision cutting & factory assembly with quality checks." },
              { title: "Installation", desc: "Crane-assisted panel lifting & fixing with safety protocols." },
              { title: "Testing & Handover", desc: "Water penetration test, structural audit & final handover." },
            ].map((step, i) => (
              <div key={i} className="text-center p-5 bg-slate-50 shadow-sm rounded-xl border border-slate-100 relative">
                <div className="w-10 h-10 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                  {i + 1}
                </div>
                <h3 className="font-bold text-slate-900 mb-1 text-sm">{step.title}</h3>
                <p className="text-xs text-slate-500">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-slate-500 mb-3 text-sm">Need maintenance for an existing curtain wall?</p>
            <Link to="/maintenance-services" className="text-amber-600 font-bold hover:underline inline-flex items-center gap-2 text-sm">
              <Wrench size={15} /> View our Facade AMC Services
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-3">Frequently Asked Questions</h2>
          <p className="text-center text-slate-500 mb-10">Everything you need to know about curtain wall glazing</p>
          <div className="space-y-5">
            {[
              {
                q: "What is the cost of curtain wall glazing per sq ft in India?",
                a: "Curtain wall glazing costs ₹350–₹600/sq ft for stick systems, ₹550–₹850 for semi-unitized, and ₹700–₹1,200 for unitized systems. Spider glazing starts at ₹800/sq ft. Pricing depends on glass specs, wind load, aluminium grade, and project scale. Fine Glaze provides free site visits and custom quotations.",
              },
              {
                q: "What is the difference between unitized and stick system curtain walls?",
                a: "Stick systems are built on-site piece by piece — economical for low-rise projects. Unitized systems are factory-assembled floor-height panels craned into position — 40% faster, better quality, ideal for high-rises. Semi-unitized offers a middle ground with factory mullions and on-site glazing.",
              },
              {
                q: "How long does curtain wall installation take?",
                a: "For a 10-storey building, installation typically takes 4–8 weeks on-site after a 6–10 week fabrication period. Fine Glaze uses parallel workflows (concurrent drawing + fabrication + site prep) to minimise total project time.",
              },
              {
                q: "What glass types are used in curtain wall systems?",
                a: "We offer SGU (Single Glazed Unit), DGU (Double Glazed Unit), Low-E reflective glass, laminated safety glass, and tinted glass. For LEED-certified green buildings, DGU with Low-E coating + argon fill reduces heat gain by 70%.",
              },
              {
                q: "Is curtain wall glazing suitable for Indian climate conditions?",
                a: "Yes. Our systems use EPDM gaskets and Dow Corning / Sika structural silicone rated for 25+ years of weathering, UV exposure, and monsoon resistance. All systems are tested against IS 875 Part 3 wind load standards applicable to Indian geography.",
              },
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                <h3 className="text-base font-bold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-14 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-xl font-bold text-slate-800 mb-6">Explore Our Other Facade Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { title: "Structural Glazing", href: "/structural-glazing", desc: "2-side, 4-side & spider glazed facades" },
              { title: "ACP & Metal Cladding", href: "/acp-aluminium-cladding", desc: "PVDF & FR-grade composite panels" },
              { title: "Aluminium Facade", href: "/aluminium-facade", desc: "Stick & unitized aluminium systems" },
              { title: "Glass Railings", href: "/glass-railings", desc: "Frameless & semi-frameless systems" },
              { title: "Facade AMC & Maintenance", href: "/maintenance-services", desc: "Waterproofing, glass repair & cleaning" },
              { title: "All Services", href: "/services", desc: "View all 8 facade service categories" },
            ].map((link) => (
              <Link key={link.href} to={link.href} className="group flex items-start gap-3 p-4 rounded-xl border border-slate-100 hover:border-amber-300 hover:bg-amber-50 transition-all">
                <ArrowRight size={16} className="text-amber-600 shrink-0 mt-1 group-hover:translate-x-1 transition-transform" />
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
