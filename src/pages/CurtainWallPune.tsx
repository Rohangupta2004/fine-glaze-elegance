import SEO from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function CurtainWallPune() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Curtain Wall Glazing Contractor in Pune",
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
    "description": "Expert curtain wall glazing contractor in Pune. Unitized & stick system curtain walls for IT parks, offices & malls. Projects in Hinjewadi, Kharadi, Baner. Free site visit."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is the cost of curtain wall glazing in Pune?", "acceptedAnswer": { "@type": "Answer", "text": "Curtain wall glazing in Pune costs Rs 350-1200 per sq ft. Stick system curtain walls range from Rs 350-600/sq ft, while unitized systems are Rs 700-1200/sq ft. Pricing depends on glass type, aluminium profile grade, building height, and wind zone." } },
      { "@type": "Question", "name": "Which areas in Pune does Fine Glaze serve for curtain walls?", "acceptedAnswer": { "@type": "Answer", "text": "Fine Glaze serves all of Pune including Hinjewadi, Kharadi, Baner, Wakad, Viman Nagar, Magarpatta, Hadapsar, Pimpri-Chinchwad, Undri, Kalyani Nagar, Koregaon Park, Aundh, and Balewadi." } },
      { "@type": "Question", "name": "How long does curtain wall installation take in Pune?", "acceptedAnswer": { "@type": "Answer", "text": "For a typical 10-storey building, fabrication takes 6-10 weeks and on-site installation 4-8 weeks. Fine Glaze runs parallel fabrication and site prep to compress overall timelines." } },
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Curtain Wall Glazing Contractor in Pune", "item": "https://fineglaze.com/curtain-wall-pune" }
    ]
  };

  return (
    <Layout darkHero>
      <SEO
        title="Curtain Wall Glazing Contractor in Pune | Fine Glaze"
        description="Expert curtain wall glazing contractor in Pune. Unitized & stick system curtain walls for IT parks, offices & malls. Projects in Hinjewadi, Kharadi, Baner. Free site visit."
        canonical="https://fineglaze.com/curtain-wall-pune"
        keywords="curtain wall contractor Pune, curtain wall glazing Pune, unitized curtain wall Pune, glass curtain wall Hinjewadi, curtain wall Kharadi, facade contractor Pune"
        ogImage="https://images.unsplash.com/photo-1486325212027-8081e485255e"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* HERO */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Curtain Wall Glazing <span className="text-gradient-gold">Contractor in Pune</span>
            </h1>
            <p className="text-lg text-white/80 mb-8">Fine Glaze is Pune's most trusted curtain wall glazing contractor, specialising in unitized, semi-unitized, and stick system installations for IT parks, corporate towers, hospitals, shopping malls, and residential high-rises.</p>
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
            src="https://images.unsplash.com/photo-1486325212027-8081e485255e"
            alt="Curtain wall glazing project Pune - Fine Glaze contractor"
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
          
          <h2 className="text-3xl font-bold">Pune's Leading Curtain Wall Specialist</h2>
          <p className="text-muted-foreground">
            Fine Glaze has been at the centre of Pune's commercial real estate growth, installing curtain wall systems on projects ranging from 5-storey tech parks to 30-storey residential towers. Every project begins with a detailed site survey, wind load analysis, and shop drawing submission — ensuring structural compliance with IS:875 and BIS standards.
          </p>
          <p className="text-muted-foreground mt-4">
            Our Pune fabrication team works with premium aluminium extrusions sourced from Hindalco and Jindal Aluminium, combined with Dow Corning structural sealants and Pilkington / Saint-Gobain glass. This translates into curtain walls certified for seismic zone III requirements applicable to the Pune region.
          </p>
          <p className="text-muted-foreground mt-4">
            We serve all major Pune micro-markets: <strong>Hinjewadi IT Park (Phase 1, 2 &amp; 3), Kharadi EON IT Park, Baner–Balewadi corporate corridor, Magarpatta Cybercity, Viman Nagar, Kalyani Nagar, Koregaon Park, Undri–Pisoli residential zone,</strong> and the Pimpri-Chinchwad industrial belt.
          </p>
          <p className="text-muted-foreground mt-4">
            Fine Glaze's Pune curtain wall installations include stick system glazing for 4–8 storey office buildings, semi-unitized systems for mid-rise commercial projects, and fully unitized panel systems for high-rise residential and commercial towers. Each project is delivered with complete as-built documentation, water penetration test certificates, and a structured AMC offer for long-term maintenance.
          </p>
          <p className="text-muted-foreground mt-4">
            We understand that Pune's construction market runs on tight schedules — particularly in Hinjewadi and Kharadi where IT park handovers drive hard deadlines. Fine Glaze's dedicated Pune project team runs parallel fabrication and site preparation workflows to ensure we hit critical milestones without compromising quality or safety standards.
          </p>
    
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-10 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-4">
              <div key="Unitized Curtain Walls" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Unitized Curtain Walls</span></div>
              <div key="Stick System Glazing" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Stick System Glazing</span></div>
              <div key="Structural Silicone Bonding" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Structural Silicone Bonding</span></div>
              <div key="DGU & Low-E Glass" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">DGU & Low-E Glass</span></div>
              <div key="IS:875 Wind Load Compliance" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">IS:875 Wind Load Compliance</span></div>
              <div key="Seismic Zone III Ready" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Seismic Zone III Ready</span></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">What is the cost of curtain wall glazing in Pune?</h3>
              <p className="text-muted-foreground">Curtain wall glazing in Pune costs Rs 350-1200 per sq ft. Stick system curtain walls range from Rs 350-600/sq ft, while unitized systems are Rs 700-1200/sq ft. Pricing depends on glass type, aluminium profile grade, building height, and wind zone.</p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">Which areas in Pune does Fine Glaze serve for curtain walls?</h3>
              <p className="text-muted-foreground">Fine Glaze serves all of Pune including Hinjewadi, Kharadi, Baner, Wakad, Viman Nagar, Magarpatta, Hadapsar, Pimpri-Chinchwad, Undri, Kalyani Nagar, Koregaon Park, Aundh, and Balewadi.</p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">How long does curtain wall installation take in Pune?</h3>
              <p className="text-muted-foreground">For a typical 10-storey building, fabrication takes 6-10 weeks and on-site installation 4-8 weeks. Fine Glaze runs parallel fabrication and site prep to compress overall timelines.</p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-12 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-xl font-bold text-slate-800 mb-5">Explore Related Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link key="/curtain-wall-systems" to="/curtain-wall-systems" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Curtain Wall Systems</p><p className="text-xs text-slate-500">Full curtain wall overview</p></div></Link>
            <Link key="/structural-glazing-pune" to="/structural-glazing-pune" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Structural Glazing Pune</p><p className="text-xs text-slate-500">Frameless glass facades Pune</p></div></Link>
            <Link key="/aluminium-facade" to="/aluminium-facade" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Aluminium Facade</p><p className="text-xs text-slate-500">Aluminium cladding systems</p></div></Link>
            <Link key="/acp-cladding-pune" to="/acp-cladding-pune" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">ACP Cladding Pune</p><p className="text-xs text-slate-500">Composite panel facades Pune</p></div></Link>
            <Link key="/facade-contractor-pune" to="/facade-contractor-pune" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Facade Contractor Pune</p><p className="text-xs text-slate-500">Complete facade services</p></div></Link>
            <Link key="/glass-railings" to="/glass-railings" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Glass Railings</p><p className="text-xs text-slate-500">Balcony glass railings Pune</p></div></Link>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
