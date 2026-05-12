import SEO from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function ResidentialFacade() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Residential Building Facade Contractor India",
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
    "description": "Residential facade contractor in India. Glass railings, ACP cladding, aluminium windows & structural glazing for apartments and villas. Pune & Mumbai projects. Free site visit."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What glass railing is best for apartment balconies in India?", "acceptedAnswer": { "@type": "Answer", "text": "Toughened + laminated glass (10mm + 10mm with PVB interlayer) in a frameless base-channel system is the gold standard for apartment balcony railings. It provides a completely unobstructed view, maximum safety (laminated glass holds in place even if broken), and a premium appearance that enhances property value." } },
      { "@type": "Question", "name": "How much does facade renovation cost for an existing residential building in India?", "acceptedAnswer": { "@type": "Answer", "text": "Residential facade renovation costs depend on scope: ACP re-cladding of an existing building Rs 200-400/sq ft; glass railing replacement Rs 800-1500/running ft; aluminium window replacement Rs 400-800/sq ft. Fine Glaze provides detailed BOQ-based quotations for renovation projects after a site survey." } },
      { "@type": "Question", "name": "What building height requires curtain wall for residential in India?", "acceptedAnswer": { "@type": "Answer", "text": "There is no regulatory height requirement for curtain wall in residential buildings — it is a design and performance choice. For premium residential towers above 15 storeys, curtain wall glazing on the living room bay provides a floor-to-ceiling glass feature that maximises views and natural light. Fine Glaze has installed residential curtain wall elements on towers up to 30 storeys in Pune and Mumbai." } },
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Residential Building Facade Contractor India", "item": "https://fineglaze.com/residential-facade" }
    ]
  };

  return (
    <Layout darkHero>
      <SEO
        title="Residential Building Facade Contractor India | Glass & ACP – Fine Glaze"
        description="Residential facade contractor in India. Glass railings, ACP cladding, aluminium windows & structural glazing for apartments and villas. Pune & Mumbai projects. Free site visit."
        canonical="https://fineglaze.com/residential-facade"
        keywords="residential facade contractor India, apartment facade Pune, glass railing residential India, ACP cladding apartment India, residential building facade Mumbai, aluminium windows residential India"
        ogImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* HERO */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Residential Building <span className="text-gradient-gold">Facade Contractor India</span>
            </h1>
            <p className="text-lg text-white/80 mb-8">Residential buildings are increasingly investing in premium facade systems — not just for aesthetics but for thermal comfort, sound insulation, reduced maintenance, and property value. Fine Glaze provides complete residential facade solutions for apartment towers, villas, gated communities, and row houses across Pune and Mumbai.</p>
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
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt="Residential apartment building facade glass railing ACP India Fine Glaze"
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
          
          <h2 className="text-3xl font-bold">Premium Facade Systems for Indian Residential Buildings</h2>
          <p className="text-muted-foreground">
            India's residential real estate market is experiencing a strong shift towards premium and luxury segments, driving demand for high-quality facade systems that were previously only seen in commercial buildings. Fine Glaze has been at the forefront of this trend, bringing commercial-grade facade engineering to residential projects across Pune's premium corridors in Koregaon Park, Kalyani Nagar, Kharadi, and Wakad.
          </p>
          <p className="text-muted-foreground mt-4">
            The most popular residential facade systems supplied and installed by Fine Glaze include: <strong>Frameless glass railings</strong> for balconies and terraces — the defining luxury feature for premium apartments; <strong>Aluminium sliding and casement windows</strong> with toughened DGU for thermal comfort and noise reduction; <strong>ACP cladding</strong> for building exterior elevations — a cost-effective way to dramatically transform building appearance; <strong>Structural glazing</strong> for feature elements such as bay windows, lobby entries, and common area facades; and <strong>Glass partition and feature walls</strong> for common lobbies and amenity areas.
          </p>
          <p className="text-muted-foreground mt-4">
            For Pune's residential market, Fine Glaze offers competitive bulk rates for developers and builders constructing multi-tower projects. Our residential project packages include standardised specifications that balance quality and cost, enabling consistent delivery across multiple buildings or phases without compromising finish quality.
          </p>
          <p className="text-muted-foreground mt-4">
            Energy efficiency is increasingly important for residential buildings seeking IGBC ratings or targeting lower electricity bills for residents. Fine Glaze's thermally broken aluminium window systems with Low-E DGU can reduce apartment cooling loads by 25-35% compared to standard single-glazed windows, delivering a payback period of 4-7 years through energy savings alone.
          </p>
    
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-10 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-4">
              <div key="Frameless Glass Balcony Railings" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Frameless Glass Balcony Railings</span></div>
              <div key="Thermally Broken Windows" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Thermally Broken Windows</span></div>
              <div key="ACP Building Cladding" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">ACP Building Cladding</span></div>
              <div key="Structural Glazing Features" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Structural Glazing Features</span></div>
              <div key="Bulk Developer Packages" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Bulk Developer Packages</span></div>
              <div key="Energy-Efficient DGU Systems" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Energy-Efficient DGU Systems</span></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">What glass railing is best for apartment balconies in India?</h3>
              <p className="text-muted-foreground">Toughened + laminated glass (10mm + 10mm with PVB interlayer) in a frameless base-channel system is the gold standard for apartment balcony railings. It provides a completely unobstructed view, maximum safety (laminated glass holds in place even if broken), and a premium appearance that enhances property value.</p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">How much does facade renovation cost for an existing residential building in India?</h3>
              <p className="text-muted-foreground">Residential facade renovation costs depend on scope: ACP re-cladding of an existing building Rs 200-400/sq ft; glass railing replacement Rs 800-1500/running ft; aluminium window replacement Rs 400-800/sq ft. Fine Glaze provides detailed BOQ-based quotations for renovation projects after a site survey.</p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">What building height requires curtain wall for residential in India?</h3>
              <p className="text-muted-foreground">There is no regulatory height requirement for curtain wall in residential buildings — it is a design and performance choice. For premium residential towers above 15 storeys, curtain wall glazing on the living room bay provides a floor-to-ceiling glass feature that maximises views and natural light. Fine Glaze has installed residential curtain wall elements on towers up to 30 storeys in Pune and Mumbai.</p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-12 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-xl font-bold text-slate-800 mb-5">Explore Related Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link key="/glass-railings" to="/glass-railings" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Glass Railings</p><p className="text-xs text-slate-500">Glass railing systems</p></div></Link>
            <Link key="/glass-railing-pune" to="/glass-railing-pune" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Glass Railing Pune</p><p className="text-xs text-slate-500">Glass railings Pune</p></div></Link>
            <Link key="/acp-aluminium-cladding" to="/acp-aluminium-cladding" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">ACP Cladding</p><p className="text-xs text-slate-500">ACP cladding</p></div></Link>
            <Link key="/aluminium-facade" to="/aluminium-facade" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Aluminium Facade</p><p className="text-xs text-slate-500">Aluminium windows & facade</p></div></Link>
            <Link key="/structural-glazing-pune" to="/structural-glazing-pune" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Structural Glazing Pune</p><p className="text-xs text-slate-500">Structural glazing</p></div></Link>
            <Link key="/facade-contractor-pune" to="/facade-contractor-pune" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Facade Contractor Pune</p><p className="text-xs text-slate-500">Facade contractor Pune</p></div></Link>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
