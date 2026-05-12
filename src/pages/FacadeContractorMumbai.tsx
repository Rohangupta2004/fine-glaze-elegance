import SEO from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function FacadeContractorMumbai() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Facade Contractor in Mumbai",
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
    "description": "Expert facade contractor in Mumbai. Curtain walls, structural glazing, ACP cladding for BKC, Andheri, Powai & Lower Parel. Cyclone-rated systems. Free site visit."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Does Fine Glaze serve all of Mumbai for facade work?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Fine Glaze serves all Mumbai zones including South Mumbai, Central Mumbai (Worli, Lower Parel, Dadar), Western suburbs (Bandra, Andheri, Goregaon, Borivali), Eastern suburbs (Vikhroli, Powai), and BKC. We also cover Navi Mumbai and Thane." } },
      { "@type": "Question", "name": "What makes Mumbai facade work different from Pune?", "acceptedAnswer": { "@type": "Answer", "text": "Mumbai requires anti-corrosion engineering throughout: marine-grade SS hardware, PVDF-coated aluminium extrusions, high-build sealants for saline environments, and design for higher wind loads (Zone IV/V). Fine Glaze engineers all Mumbai facades specifically for these conditions." } },
      { "@type": "Question", "name": "How much does facade work cost in Mumbai?", "acceptedAnswer": { "@type": "Answer", "text": "Mumbai facade costs are typically 10-15% higher than Pune due to higher logistics costs, coastal engineering requirements, and higher labour rates. ACP cladding: Rs 200-500/sq ft; structural glazing: Rs 350-1000/sq ft; curtain walls: Rs 400-1300/sq ft installed." } },
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Facade Contractor in Mumbai", "item": "https://fineglaze.com/facade-contractor-mumbai" }
    ]
  };

  return (
    <Layout darkHero>
      <SEO
        title="Facade Contractor in Mumbai | Glass, ACP & Curtain Wall – Fine Glaze"
        description="Expert facade contractor in Mumbai. Curtain walls, structural glazing, ACP cladding for BKC, Andheri, Powai & Lower Parel. Cyclone-rated systems. Free site visit."
        canonical="https://fineglaze.com/facade-contractor-mumbai"
        keywords="facade contractor Mumbai, glass facade Mumbai, curtain wall Mumbai, ACP cladding Mumbai, structural glazing BKC, facade contractor Andheri, facade company Mumbai"
        ogImage="https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* HERO */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Facade Contractor <span className="text-gradient-gold">in Mumbai</span>
            </h1>
            <p className="text-lg text-white/80 mb-8">Fine Glaze brings award-winning facade expertise to Mumbai's demanding commercial and residential landscape. As an established facade contractor in Mumbai, we have delivered curtain wall systems, structural glazing, ACP cladding, and glass railings across BKC, Andheri, Powai, Lower Parel, Worli, Vikhroli, and beyond.</p>
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
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
            alt="Mumbai facade contractor curtain wall BKC high-rise Fine Glaze"
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
          
          <h2 className="text-3xl font-bold">Mumbai's Trusted Facade Partner</h2>
          <p className="text-muted-foreground">
            Mumbai's real estate market — one of Asia's most dynamic — requires facade contractors with deep technical expertise, reliable supply chains, and the project management muscle to execute on tight urban timelines. Fine Glaze has built a strong Mumbai presence, delivering precision-engineered facade systems on landmark projects including the Leela Hotel facade, Leela Business Park, and Embassy 247 curtain wall installations.
          </p>
          <p className="text-muted-foreground mt-4">
            Our Mumbai projects are engineered for cyclone-zone wind loads (IS:875 Zone IV/V coastal requirements), high humidity, and saline air conditions. We use marine-grade SS 316 hardware, high-build PVDF coatings, and heavy-duty EPDM gaskets to ensure longevity in Mumbai's aggressive climate.
          </p>
          <p className="text-muted-foreground mt-4">
            Key service areas in Mumbai include <strong>BKC</strong> for corporate tower facades, <strong>Lower Parel &amp; Worli</strong> for premium residential high-rises, <strong>Andheri MIDC &amp; Powai</strong> for tech park campuses, <strong>Vikhroli</strong> for industrial and commercial cladding, and <strong>Nariman Point</strong> for heritage-zone compliant facade refurbishment.
          </p>
          <p className="text-muted-foreground mt-4">
            Fine Glaze's Mumbai projects are coordinated from our Pune headquarters with a dedicated Mumbai site team and local procurement links. We maintain strong relationships with Mumbai-based structural engineers, architects, and project managers, enabling fast response to RFIs and change orders that are inevitable in Mumbai's complex construction environment.
          </p>
          <p className="text-muted-foreground mt-4">
            Our Mumbai facade portfolio spans diverse building types: Grade-A commercial towers in BKC, 5-star hotel facades, premium residential towers in South Mumbai and the western suburbs, IT park campuses in Powai and Thane, healthcare facilities, and shopping centres. This breadth of experience means we bring relevant reference projects to every new Mumbai tender.
          </p>
    
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-10 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-4">
              <div key="Cyclone Zone Wind Load Design" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Cyclone Zone Wind Load Design</span></div>
              <div key="Marine Grade SS 316 Hardware" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Marine Grade SS 316 Hardware</span></div>
              <div key="High-Rise Facade Expertise" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">High-Rise Facade Expertise</span></div>
              <div key="PVDF Anti-Corrosion Coatings" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">PVDF Anti-Corrosion Coatings</span></div>
              <div key="BKC & South Mumbai Projects" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">BKC & South Mumbai Projects</span></div>
              <div key="Leela Hotel & Embassy Reference" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Leela Hotel & Embassy Reference</span></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">Does Fine Glaze serve all of Mumbai for facade work?</h3>
              <p className="text-muted-foreground">Yes. Fine Glaze serves all Mumbai zones including South Mumbai, Central Mumbai (Worli, Lower Parel, Dadar), Western suburbs (Bandra, Andheri, Goregaon, Borivali), Eastern suburbs (Vikhroli, Powai), and BKC. We also cover Navi Mumbai and Thane.</p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">What makes Mumbai facade work different from Pune?</h3>
              <p className="text-muted-foreground">Mumbai requires anti-corrosion engineering throughout: marine-grade SS hardware, PVDF-coated aluminium extrusions, high-build sealants for saline environments, and design for higher wind loads (Zone IV/V). Fine Glaze engineers all Mumbai facades specifically for these conditions.</p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">How much does facade work cost in Mumbai?</h3>
              <p className="text-muted-foreground">Mumbai facade costs are typically 10-15% higher than Pune due to higher logistics costs, coastal engineering requirements, and higher labour rates. ACP cladding: Rs 200-500/sq ft; structural glazing: Rs 350-1000/sq ft; curtain walls: Rs 400-1300/sq ft installed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-12 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-xl font-bold text-slate-800 mb-5">Explore Related Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link key="/facade-contractor-pune" to="/facade-contractor-pune" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Facade Contractor Pune</p><p className="text-xs text-slate-500">Facade services Pune</p></div></Link>
            <Link key="/curtain-wall-systems" to="/curtain-wall-systems" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Curtain Wall Systems</p><p className="text-xs text-slate-500">Full curtain wall service</p></div></Link>
            <Link key="/structural-glazing-mumbai" to="/structural-glazing-mumbai" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Structural Glazing Mumbai</p><p className="text-xs text-slate-500">Structural glazing Mumbai</p></div></Link>
            <Link key="/acp-aluminium-cladding" to="/acp-aluminium-cladding" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">ACP Cladding</p><p className="text-xs text-slate-500">ACP panel cladding</p></div></Link>
            <Link key="/facade-contractor-navi-mumbai" to="/facade-contractor-navi-mumbai" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Facade Contractor Navi Mumbai</p><p className="text-xs text-slate-500">Navi Mumbai facade services</p></div></Link>
            <Link key="/maintenance-services" to="/maintenance-services" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Facade Maintenance</p><p className="text-xs text-slate-500">AMC & facade repair</p></div></Link>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
