import SEO from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function StructuralGlazingPune() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Structural Glazing Contractor in Pune",
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
    "description": "Structural glazing contractor in Pune. 2-side, 4-side & spider glazing for showrooms, offices & high-rises. IS:875 compliant. Free site visit."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is the cost of structural glazing in Pune?", "acceptedAnswer": { "@type": "Answer", "text": "Structural glazing in Pune costs Rs 300-900 per sq ft. 2-side SSG ranges from Rs 300-550/sq ft, 4-side full structural glazing is Rs 550-900/sq ft, and spider glazing is Rs 800-1400/sq ft for statement entries." } },
      { "@type": "Question", "name": "Is structural glazing safe in Pune earthquake zone?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Fine Glaze designs structural glazing for Pune's seismic zone III using redundant mechanical clamping at corners and certified sealants. Designs comply with IS:1893 and NBC 2016 guidelines." } },
      { "@type": "Question", "name": "What glass thickness is used for structural glazing in Pune?", "acceptedAnswer": { "@type": "Answer", "text": "We use minimum 12mm fully toughened glass, heat-soaked (HST tested) for large panels above 3 sq m to eliminate spontaneous breakage risk. Laminated toughened glass is used where fall protection is required." } },
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Structural Glazing Contractor in Pune", "item": "https://fineglaze.com/structural-glazing-pune" }
    ]
  };

  return (
    <Layout darkHero>
      <SEO
        title="Structural Glazing Contractor in Pune | 2-Side & 4-Side SSG – Fine Glaze"
        description="Structural glazing contractor in Pune. 2-side, 4-side & spider glazing for showrooms, offices & high-rises. IS:875 compliant. Free site visit."
        canonical="https://fineglaze.com/structural-glazing-pune"
        keywords="structural glazing contractor Pune, structural glazing Pune cost, 4-side structural glazing Pune, SSG glazing Pune, spider glazing Pune, glass facade Pune"
        ogImage="https://images.unsplash.com/photo-1529429617124-95b109e86bb8"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* HERO */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Structural Glazing <span className="text-gradient-gold">Contractor in Pune</span>
            </h1>
            <p className="text-lg text-white/80 mb-8">Fine Glaze is Pune's premier structural glazing contractor, offering 2-side, 4-side, and spider glazing systems for commercial showrooms, corporate offices, IT campuses, and residential towers. Structural glazing creates a seamless, frameless glass exterior that maximises natural light and architectural impact.</p>
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
            src="https://images.unsplash.com/photo-1529429617124-95b109e86bb8"
            alt="Structural glazing facade Pune office building - Fine Glaze"
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
          
          <h2 className="text-3xl font-bold">Why Pune Architects Choose Fine Glaze for Structural Glazing</h2>
          <p className="text-muted-foreground">
            Structural glazing uses high-strength silicone sealants (Dow Corning 795/983 series) to bond glass panels directly to aluminium frames, eliminating visible exterior fixings. Fine Glaze has completed structural glazing projects across Hinjewadi IT Park, BKC Mumbai, and Navi Mumbai's MIDC corridor.
          </p>
          <p className="text-muted-foreground mt-4">
            Our structural glazing systems are engineered for Pune's wind zone II/III conditions, meeting IS:875 Part 3 wind load requirements. We use only certified structural sealants with documented shear and tensile test results. Every installation includes a 24-hour water ponding test and pull-off test before final handover.
          </p>
          <p className="text-muted-foreground mt-4">
            Popular applications in Pune include <strong>showroom glass facades</strong> along Nagar Road and FC Road, <strong>IT park entrance lobbies</strong> in Hinjewadi and Kharadi, <strong>high-rise residential towers</strong> in Wakad and Baner, and <strong>hospital building facades</strong> in Koregaon Park and Kalyani Nagar.
          </p>
          <p className="text-muted-foreground mt-4">
            Fine Glaze offers three structural glazing configurations: <strong>2-side SSG</strong> (structural sealant on two sides, mechanical caps on two sides) for a semi-frameless look at lower cost; <strong>4-side SSG</strong> (full frameless appearance) for premium architectural projects; and <strong>spider glazing</strong> for statement entries, atriums, and canopies where minimal structure is desired.
          </p>
          <p className="text-muted-foreground mt-4">
            For Pune's residential sector, structural glazing on balcony parapets and large bay windows is increasingly popular in premium projects in Koregaon Park, Kalyani Nagar, and Undri. Fine Glaze customises glass thickness and sealant joint sizing for these residential applications to balance aesthetics with structural safety at lower floor-to-floor heights.
          </p>
    
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-10 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-4">
              <div key="2-Side SSG Systems" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">2-Side SSG Systems</span></div>
              <div key="4-Side SSG Systems" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">4-Side SSG Systems</span></div>
              <div key="Spider Glazing" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Spider Glazing</span></div>
              <div key="Dow Corning Sealants" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Dow Corning Sealants</span></div>
              <div key="Water Penetration Tested" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Water Penetration Tested</span></div>
              <div key="Thermal Insulated DGU Units" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Thermal Insulated DGU Units</span></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">What is the cost of structural glazing in Pune?</h3>
              <p className="text-muted-foreground">Structural glazing in Pune costs Rs 300-900 per sq ft. 2-side SSG ranges from Rs 300-550/sq ft, 4-side full structural glazing is Rs 550-900/sq ft, and spider glazing is Rs 800-1400/sq ft for statement entries.</p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">Is structural glazing safe in Pune earthquake zone?</h3>
              <p className="text-muted-foreground">Yes. Fine Glaze designs structural glazing for Pune's seismic zone III using redundant mechanical clamping at corners and certified sealants. Designs comply with IS:1893 and NBC 2016 guidelines.</p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">What glass thickness is used for structural glazing in Pune?</h3>
              <p className="text-muted-foreground">We use minimum 12mm fully toughened glass, heat-soaked (HST tested) for large panels above 3 sq m to eliminate spontaneous breakage risk. Laminated toughened glass is used where fall protection is required.</p>
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
            <Link key="/curtain-wall-pune" to="/curtain-wall-pune" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Curtain Wall Pune</p><p className="text-xs text-slate-500">Curtain wall systems Pune</p></div></Link>
            <Link key="/aluminium-facade" to="/aluminium-facade" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Aluminium Facade</p><p className="text-xs text-slate-500">Aluminium facade systems</p></div></Link>
            <Link key="/glass-railings" to="/glass-railings" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Glass Railings</p><p className="text-xs text-slate-500">Frameless glass railings</p></div></Link>
            <Link key="/acp-cladding-pune" to="/acp-cladding-pune" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">ACP Cladding Pune</p><p className="text-xs text-slate-500">ACP panel facades Pune</p></div></Link>
            <Link key="/facade-contractor-pune" to="/facade-contractor-pune" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Facade Contractor Pune</p><p className="text-xs text-slate-500">Complete facade solutions</p></div></Link>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
