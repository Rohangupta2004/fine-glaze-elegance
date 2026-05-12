import SEO from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function StructuralGlazingMumbai() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Structural Glazing Contractor in Mumbai",
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
    "description": "Structural glazing contractor in Mumbai. 2-side, 4-side & spider glazing for commercial towers, showrooms & hotels. Cyclone-rated design. Free site visit."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Is structural glazing safe in Mumbai cyclone zone?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, when designed to IS:875 Zone IV/V specifications. Fine Glaze uses redundant mechanical clamping at panel corners and Dow Corning 795 sealant, certified for coastal and tropical climates with 30+ year service life." } },
      { "@type": "Question", "name": "How does structural glazing perform during Mumbai monsoon?", "acceptedAnswer": { "@type": "Answer", "text": "Properly designed structural glazing is impermeable to water. Two-stage drainage channels provide secondary protection. Fine Glaze includes a hose test (AAMA 501.2) on all installations before handover to verify monsoon-proof performance." } },
      { "@type": "Question", "name": "What glass thickness for structural glazing on Mumbai high-rises?", "acceptedAnswer": { "@type": "Answer", "text": "Fine Glaze uses minimum 12mm fully toughened heat-soaked glass (HST). For buildings above 30 storeys, 15mm HST toughened or 6+6 laminated toughened glass is used depending on structural engineer specifications." } },
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Structural Glazing Contractor in Mumbai", "item": "https://fineglaze.com/structural-glazing-mumbai" }
    ]
  };

  return (
    <Layout darkHero>
      <SEO
        title="Structural Glazing Contractor in Mumbai | SSG & Spider Glazing – Fine Glaze"
        description="Structural glazing contractor in Mumbai. 2-side, 4-side & spider glazing for commercial towers, showrooms & hotels. Cyclone-rated design. Free site visit."
        canonical="https://fineglaze.com/structural-glazing-mumbai"
        keywords="structural glazing contractor Mumbai, SSG glazing Mumbai, spider glazing Mumbai, 4-side structural glazing BKC, glass facade contractor Mumbai, showroom glazing Mumbai"
        ogImage="https://images.unsplash.com/photo-1486325212027-8081e485255e"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* HERO */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Structural Glazing <span className="text-gradient-gold">Contractor in Mumbai</span>
            </h1>
            <p className="text-lg text-white/80 mb-8">Fine Glaze delivers precision-engineered structural glazing systems in Mumbai for corporate towers, luxury hotels, showroom facades, and high-rise residential buildings. Our systems are cyclone-rated, coastal-engineered, and designed to withstand Mumbai's extreme weather while delivering breathtaking glass exteriors.</p>
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
            alt="Structural glazing Mumbai high-rise glass facade - Fine Glaze"
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
          
          <h2 className="text-3xl font-bold">Coastal-Engineered Structural Glazing for Mumbai</h2>
          <p className="text-muted-foreground">
            Mumbai's skyline is defined by glass — from the iconic towers of BKC to the residential high-rises of Worli Seaface. Fine Glaze has contributed to this vision, installing structural glazing systems that create seamless, frameless glass facades with exceptional wind resistance and visual impact.
          </p>
          <p className="text-muted-foreground mt-4">
            For Mumbai coastal projects, structural glazing presents unique engineering challenges: cyclone-zone wind pressures, high seismic risk, and saline air affecting sealant longevity. Fine Glaze addresses these through structural sealant selection rated for coastal exposure (Dow Corning 795 with extended UV and moisture resistance), redundant mechanical retention at panel corners, and two-stage drainage silicone weather seals designed for Mumbai's 2,400mm+ annual rainfall.
          </p>
          <p className="text-muted-foreground mt-4">
            Our Mumbai structural glazing portfolio includes <strong>showroom facades</strong> along Linking Road, Hill Road, and SV Road in the western suburbs; <strong>corporate lobby entrances</strong> in BKC and Nariman Point; and <strong>high-rise residential glass elements</strong> in Lower Parel and Worli. Spider glazing installations for statement entries complete our Mumbai portfolio.
          </p>
          <p className="text-muted-foreground mt-4">
            Fine Glaze's Mumbai structural glazing projects include installations for 5-star hotel entrance canopies in South Mumbai — where the aesthetic demand is extremely high and the tolerance for any visual defect is near zero. Our installation team includes specialist structural glazing applicators with 10+ years of Mumbai high-rise experience.
          </p>
          <p className="text-muted-foreground mt-4">
            All Fine Glaze structural glazing projects in Mumbai include pre-construction mock-up panel testing, certified sealant application training records, a hose test (AAMA 501.2) after installation, and a 5-year structural sealant warranty backed by Dow Corning certification.
          </p>
    
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-10 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-4">
              <div key="Cyclone Wind Pressure Design" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Cyclone Wind Pressure Design</span></div>
              <div key="Dow Corning 795 Coastal Sealant" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Dow Corning 795 Coastal Sealant</span></div>
              <div key="Redundant Mechanical Retention" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Redundant Mechanical Retention</span></div>
              <div key="Two-Stage Weather Drainage" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Two-Stage Weather Drainage</span></div>
              <div key="Spider Glazing Systems" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Spider Glazing Systems</span></div>
              <div key="5-Year Sealant Warranty" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">5-Year Sealant Warranty</span></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">Is structural glazing safe in Mumbai cyclone zone?</h3>
              <p className="text-muted-foreground">Yes, when designed to IS:875 Zone IV/V specifications. Fine Glaze uses redundant mechanical clamping at panel corners and Dow Corning 795 sealant, certified for coastal and tropical climates with 30+ year service life.</p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">How does structural glazing perform during Mumbai monsoon?</h3>
              <p className="text-muted-foreground">Properly designed structural glazing is impermeable to water. Two-stage drainage channels provide secondary protection. Fine Glaze includes a hose test (AAMA 501.2) on all installations before handover to verify monsoon-proof performance.</p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">What glass thickness for structural glazing on Mumbai high-rises?</h3>
              <p className="text-muted-foreground">Fine Glaze uses minimum 12mm fully toughened heat-soaked glass (HST). For buildings above 30 storeys, 15mm HST toughened or 6+6 laminated toughened glass is used depending on structural engineer specifications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-12 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-xl font-bold text-slate-800 mb-5">Explore Related Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link key="/structural-glazing" to="/structural-glazing" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Structural Glazing</p><p className="text-xs text-slate-500">Full structural glazing service</p></div></Link>
            <Link key="/structural-glazing-pune" to="/structural-glazing-pune" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Structural Glazing Pune</p><p className="text-xs text-slate-500">Structural glazing Pune</p></div></Link>
            <Link key="/facade-contractor-mumbai" to="/facade-contractor-mumbai" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Facade Contractor Mumbai</p><p className="text-xs text-slate-500">Complete facade solutions</p></div></Link>
            <Link key="/curtain-wall-mumbai" to="/curtain-wall-mumbai" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Curtain Wall Mumbai</p><p className="text-xs text-slate-500">Curtain wall Mumbai</p></div></Link>
            <Link key="/aluminium-facade-mumbai" to="/aluminium-facade-mumbai" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Aluminium Facade Mumbai</p><p className="text-xs text-slate-500">Aluminium facade Mumbai</p></div></Link>
            <Link key="/maintenance-services" to="/maintenance-services" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Facade Maintenance</p><p className="text-xs text-slate-500">Structural glazing maintenance</p></div></Link>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
