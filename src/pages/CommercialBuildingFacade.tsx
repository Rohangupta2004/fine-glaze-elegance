import SEO from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function CommercialBuildingFacade() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Commercial Building Facade Systems India",
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
    "description": "Complete guide to commercial building facade systems in India. Curtain walls, structural glazing, ACP cladding, costs, and regulatory requirements. Expert advice by Fine Glaze."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What facade system is best for an IT park in India?", "acceptedAnswer": { "@type": "Answer", "text": "Unitized curtain wall with DGU Low-E glass is the industry standard for large IT campuses. It delivers LEED energy performance, fast installation, factory quality, and the premium glass aesthetic MNC occupiers expect." } },
      { "@type": "Question", "name": "How much should I budget for a commercial building facade in India?", "acceptedAnswer": { "@type": "Answer", "text": "Facade cost is typically 8-15% of total building construction cost. For a premium Grade-A commercial tower, facade represents 12-18% of construction cost. Budget Rs 500-1200/sq ft for curtain wall and structural glazing, plus 10-15% for coordination and testing." } },
      { "@type": "Question", "name": "How long does commercial facade installation take in India?", "acceptedAnswer": { "@type": "Answer", "text": "A 15-storey commercial building facade typically takes 5-7 months from order to practical completion: 8-14 weeks fabrication, then 1-2 weeks installation per storey." } },
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Commercial Building Facade Systems India", "item": "https://fineglaze.com/commercial-building-facade" }
    ]
  };

  return (
    <Layout darkHero>
      <SEO
        title="Commercial Building Facade Systems India | Design & Installation – Fine Glaze"
        description="Complete guide to commercial building facade systems in India. Curtain walls, structural glazing, ACP cladding, costs, and regulatory requirements. Expert advice by Fine Glaze."
        canonical="https://fineglaze.com/commercial-building-facade"
        keywords="commercial building facade India, glass facade commercial building, office building facade systems, IT park facade India, commercial facade contractor, facade design commercial India"
        ogImage="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* HERO */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Commercial Building <span className="text-gradient-gold">Facade Systems India</span>
            </h1>
            <p className="text-lg text-white/80 mb-8">The facade is the most visible — and often the most technically complex — element of any commercial building. This comprehensive guide covers all major commercial facade types, cost benchmarks, design considerations, and regulatory requirements for India, drawn from Fine Glaze's 50+ commercial projects.</p>
            <div className="flex gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700">Get Free Quote</Button>
              </Link>
              <Link to="/portfolio">
                <Button size="lg" variant="outline">View Projects</Button>
              </Link>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
            alt="Commercial building glass facade curtain wall India Fine Glaze"
            className="rounded-xl shadow-2xl object-cover h-[420px] w-full"
            loading="eager"
            width="600"
            height="420"
          />
        </div>
      </section>

      {/* RICH CONTENT */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl space-y-6">
          
          <h2 className="text-3xl font-bold">Facade Systems for Commercial Buildings in India</h2>
          <p className="text-muted-foreground">
            A commercial building facade serves multiple critical functions simultaneously: structural support, weather protection, thermal regulation, acoustic attenuation, fire safety, and architectural expression. Modern commercial facades are engineered systems — selecting the right system requires balancing technical performance, budget, timeline, and long-term operating costs.
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-3 mt-6">
            <li><strong>Unitized Curtain Wall:</strong> Factory-assembled glass and aluminium panels. Industry standard for high-rise commercial towers. Fast installation, guaranteed quality. Rs 700–1,200/sq ft.</li>
            <li><strong>Stick System Curtain Wall:</strong> Site-assembled aluminium frame with glass infill. Suitable for low-to-mid-rise. More flexible for irregular geometries. Rs 350–650/sq ft.</li>
            <li><strong>Structural Glazing (SSG):</strong> Frameless glass bonded with structural silicone. Premium aesthetic for showrooms, lobbies, and statement buildings. Rs 300–900/sq ft.</li>
            <li><strong>ACP Composite Cladding:</strong> Lightweight aluminium sandwich panels for opaque cladding zones. Cost-effective solution for large facade areas. Rs 180–450/sq ft.</li>
            <li><strong>Aluminium Louvres & Brise-Soleils:</strong> Solar shading elements that reduce cooling load by 20–35%. Increasingly specified in India's hot climate. Rs 250–600/sq ft.</li>
          </ul>
          <h2 className="text-3xl font-bold mt-10">Regulatory Requirements for Commercial Facades in India</h2>
          <p className="text-muted-foreground mt-4">
            Commercial building facades in India must comply with NBC 2016 (National Building Code), IS:875 Parts 1–5 (structural loads), IS:2553 (glass safety), and state-specific fire safety regulations. Key mandatory requirements include FR-grade panels above 15m height, structural calculations for wind and seismic zones, and fire compartmentation at each floor level. For LEED or GRIHA rated buildings, additional thermal performance standards (SHGC and U-value targets) apply.
          </p>
          <h2 className="text-3xl font-bold mt-10">Facade Design Best Practices for Indian Climate</h2>
          <p className="text-muted-foreground mt-4">
            India's diverse climate zones demand thoughtful facade design. In Pune's mild climate, large glazed areas with DGU Low-E glass are feasible without excessive cooling loads. In Mumbai's hot-humid coastal climate, solar control glass (SHGC below 0.35) is essential. In Delhi's composite climate, high thermal mass cladding with good insulation performs best. Fine Glaze's design team works with energy modellers to optimise facade glass ratios for each location and building orientation.
          </p>
    
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-10 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-4">
              <div key="All Commercial Facade Systems" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">All Commercial Facade Systems</span></div>
              <div key="NBC 2016 Compliance Guide" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">NBC 2016 Compliance Guide</span></div>
              <div key="LEED & Green Building Tips" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">LEED & Green Building Tips</span></div>
              <div key="Climate-Optimised Design" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Climate-Optimised Design</span></div>
              <div key="IT Park & Office Expertise" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">IT Park & Office Expertise</span></div>
              <div key="Hotel & Retail Facade Guidance" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Hotel & Retail Facade Guidance</span></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">What facade system is best for an IT park in India?</h3>
              <p className="text-muted-foreground">Unitized curtain wall with DGU Low-E glass is the industry standard for large IT campuses. It delivers LEED energy performance, fast installation, factory quality, and the premium glass aesthetic MNC occupiers expect.</p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">How much should I budget for a commercial building facade in India?</h3>
              <p className="text-muted-foreground">Facade cost is typically 8-15% of total building construction cost. For a premium Grade-A commercial tower, facade represents 12-18% of construction cost. Budget Rs 500-1200/sq ft for curtain wall and structural glazing, plus 10-15% for coordination and testing.</p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">How long does commercial facade installation take in India?</h3>
              <p className="text-muted-foreground">A 15-storey commercial building facade typically takes 5-7 months from order to practical completion: 8-14 weeks fabrication, then 1-2 weeks installation per storey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-12 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-xl font-bold text-slate-800 mb-5">Explore Related Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link key="/curtain-wall-systems" to="/curtain-wall-systems" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Curtain Wall Systems</p><p className="text-xs text-slate-500">Curtain wall service</p></div></Link>
            <Link key="/structural-glazing" to="/structural-glazing" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Structural Glazing</p><p className="text-xs text-slate-500">Structural glazing</p></div></Link>
            <Link key="/acp-aluminium-cladding" to="/acp-aluminium-cladding" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">ACP Cladding</p><p className="text-xs text-slate-500">ACP cladding</p></div></Link>
            <Link key="/it-park-facade" to="/it-park-facade" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">IT Park Facade</p><p className="text-xs text-slate-500">IT campus facade guide</p></div></Link>
            <Link key="/facade-contractor-pune" to="/facade-contractor-pune" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Facade Contractor Pune</p><p className="text-xs text-slate-500">Facade contractor Pune</p></div></Link>
            <Link key="/curtain-wall-cost-guide" to="/curtain-wall-cost-guide" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Curtain Wall Cost Guide</p><p className="text-xs text-slate-500">Detailed cost analysis</p></div></Link>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
