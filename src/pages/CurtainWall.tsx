import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { CheckCircle2, Building2, ShieldCheck, Maximize2, MapPin, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function CurtainWall() {
  // SCHEMA MARKUP: Tells Google this is a Service
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Curtain Wall Glazing Systems",
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
    "description": "Premium unitized and semi-unitized curtain wall glazing systems for commercial buildings in Pune and Maharashtra.",
    "areaServed": ["Pune", "Mumbai", "Nashik"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Glazing Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Unitized Curtain Wall" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Semi-Unitized System" } }
      ]
    }
  };

  return (
    <Layout>
      {/* 1. SEO METADATA */}
      <Helmet>
        <title>Unitized Curtain Wall Systems Manufacturer in Pune | Fine Glaze</title>
        <meta name="description" content="Leading manufacturer of Unitized & Semi-Unitized Curtain Wall systems in Pune. High-performance structural glazing for commercial towers. Get a quote today." />
        <meta name="keywords" content="curtain wall system, unitized glazing, structural glazing pune, glass facade manufacturer, commercial facade india" />
        <link rel="canonical" href="https://www.fineglaze.com/curtain-wall-systems" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      {/* 2. H1: PRIMARY KEYWORD */}
      <section className="relative pt-32 pb-20 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/Unitized.webp')] bg-cover bg-center opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <span className="text-amber-500 font-bold tracking-widest uppercase text-sm mb-2 block">Structural Glazing Experts</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            High-Performance <span className="text-amber-500">Curtain Wall Systems</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mb-8">
            Precision-engineered unitized and semi-unitized glazing solutions for modern skyscrapers. 
            Reducing installation time by 40% with factory-assembled quality.
          </p>
          <div className="flex gap-4">
            <Link to="/contact"><Button size="lg" className="bg-amber-600 hover:bg-amber-700">Request Quote</Button></Link>
            <Link to="/portfolio"><Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-slate-900">View Projects</Button></Link>
          </div>
        </div>
      </section>

      {/* 3. DEEP CONTENT: "THE WHAT & WHY" */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">Advanced Facade Engineering</h2>
            <p className="text-slate-600 leading-relaxed">
              At <strong>Fine Glaze</strong>, we don't just install glass; we engineer building envelopes. Our curtain wall systems are designed to withstand high wind loads, prevent water infiltration, and provide superior thermal insulation.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Whether you are building a commercial IT park in <strong>Hinjewadi</strong> or a luxury hotel in <strong>Mumbai</strong>, our systems ensure your facade remains pristine for decades.
            </p>
            
            <div className="grid grid-cols-1 gap-4 mt-6">
              <div className="flex items-start gap-4 p-4 border rounded-lg bg-slate-50">
                <Building2 className="text-amber-600 shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-slate-900">Unitized Systems</h3>
                  <p className="text-sm text-slate-600">
                    Fully assembled in our factory. These panels are lifted and hung on the building brackets. Best for large towers requiring fast closure.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 border rounded-lg bg-slate-50">
                <Maximize2 className="text-amber-600 shrink-0" size={24} />
                <div>
                  <h3 className="font-bold text-slate-900">Semi-Unitized Systems</h3>
                  <p className="text-sm text-slate-600">
                    Vertical mullions are installed first, followed by glass panels. Offers flexibility for complex architectural geometries.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-100 p-8 rounded-2xl relative">
            <h3 className="text-2xl font-bold mb-6">Technical Specifications</h3>
            <ul className="space-y-4">
              {[
                { label: "Glass Type", val: "DGU / SGU / Laminated" },
                { label: "Aluminium Grade", val: "6063 T6 Alloy" },
                { label: "Wind Load", val: "1.5 kPa to 4.5 kPa" },
                { label: "Weather Seal", val: "EPDM Gaskets & Structural Silicone" },
                { label: "Finish", val: "PVDF / Anodized / Powder Coated" },
                { label: "Compliance", val: "ASTM / BS Standards" }
              ].map((spec, i) => (
                <li key={i} className="flex justify-between items-center border-b border-slate-300 pb-2">
                  <span className="font-medium text-slate-700">{spec.label}</span>
                  <span className="text-slate-900 font-bold">{spec.val}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 bg-amber-100 p-4 rounded-lg flex gap-3 items-start">
              <ShieldCheck className="text-amber-700 shrink-0" />
              <p className="text-sm text-amber-900 font-medium">
                All our systems undergo rigorous water penetration and structural load testing before installation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. LOCAL SEO: AREAS WE SERVE */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Serving Major Hubs Across Maharashtra</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Pune IT Parks", "Mumbai BKC", "Navi Mumbai", "Nashik", "Nagpur", "Aurangabad"].map((city) => (
              <div key={city} className="flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full hover:bg-amber-600 transition-colors cursor-default">
                <MapPin size={16} />
                <span>{city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PROCESS SECTION (INTERNAL LINKING) */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Execution Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Survey", desc: "Site survey & wind pressure calculation." },
              { title: "Design", desc: "3D modelling & shop drawings approval." },
              { title: "Fabrication", desc: "Precision cutting & assembly at factory." },
              { title: "Installation", desc: "Crane-assisted panel lifting & fixing." }
            ].map((step, i) => (
              <div key={i} className="text-center p-6 bg-white shadow-sm rounded-xl">
                <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                  {i + 1}
                </div>
                <h3 className="font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-slate-600 mb-4">Need maintenance for an existing facade?</p>
            <Link to="/maintenance-services" className="text-amber-600 font-bold hover:underline flex items-center justify-center gap-2">
              <Wrench size={16} /> Check our AMC Services
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl space-y-6">
          <h2 className="text-3xl font-bold text-slate-900">Why Fine Glaze for Curtain Wall Systems in Pune</h2>
          <p className="text-slate-600 leading-relaxed">
            When developers search for a curtain wall contractor in Pune, they are usually trying to solve two things at once: architectural impact and construction certainty. Fine Glaze works as a curtain wall company in Pune for commercial offices, IT parks, high-rise residential towers, and hospitality projects that need dependable timelines with performance-led facade detailing. Our team supports design intent, shop drawing development, fabrication planning, and site installation so the envelope package stays coordinated with structure, access, and waterproofing interfaces. This is especially important for large projects where multiple contractors are working in parallel and delays in facade closure affect interior fit-out milestones.
          </p>
          <h3 className="text-2xl font-semibold text-slate-900">Process</h3>
          <p className="text-slate-600 leading-relaxed">
            We begin with survey, wind-load checks, and a constructability review for anchors and slab edges. After consultant approvals, we proceed with factory-controlled fabrication and sequenced installation. For office parks and high-rise buildings in Pune, this process helps reduce site-level variation and supports safer, faster elevations closing.
          </p>
          <h3 className="text-2xl font-semibold text-slate-900">Materials and specifications</h3>
          <p className="text-slate-600 leading-relaxed">
            Fine Glaze specifies tested aluminium profiles, compatible gaskets and sealants, and project-suitable glass combinations based on orientation and use case. Projects requiring mixed facade packages often combine curtain wall systems with <Link to="/structural-glazing" className="text-amber-600 underline">structural glazing</Link>, <Link to="/acp-aluminium-cladding" className="text-amber-600 underline">ACP cladding</Link>, and <Link to="/aluminium-facade" className="text-amber-600 underline">aluminium facade solutions</Link>. We also provide lifecycle planning through <Link to="/maintenance-services" className="text-amber-600 underline">facade maintenance services</Link>.
          </p>
          <h3 className="text-2xl font-semibold text-slate-900">Industries and FAQ</h3>
          <p className="text-slate-600 leading-relaxed">
            Our curtain wall work spans corporate campuses, mixed-use developments, malls, and premium residential complexes. A common FAQ is whether unitized systems are always better than semi-unitized systems. The answer depends on building height, logistics, and target schedule; we recommend the right system after evaluating site constraints and project goals. Another frequent question is whether one facade manufacturer can manage design-assist and execution. Fine Glaze handles both, giving clients one accountable partner.
          </p>
          <p className="text-slate-600 leading-relaxed">
            If you need a curtain wall manufacturer and contractor in Pune for a commercial or high-rise project, <Link to="/contact" className="text-amber-600 underline font-semibold">contact Fine Glaze</Link> for a technical proposal and site-specific quote.
          </p>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
      }
