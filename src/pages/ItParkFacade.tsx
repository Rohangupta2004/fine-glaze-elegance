import SEO from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function ItParkFacade() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "IT Park Facade Contractor India",
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
    "description": "Specialist facade contractor for IT parks and tech campuses in India. LEED-compliant curtain walls, DGU Low-E glass, fast installation for Hinjewadi, Kharadi & Mahape. Free site visit."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What facade system is standard for IT parks in India?", "acceptedAnswer": { "@type": "Answer", "text": "Unitized curtain wall with DGU Low-E glass (SHGC 0.25-0.35) is the industry standard for IT parks in India. It delivers LEED energy performance credits, fast installation to meet tight occupier timelines, factory-controlled quality, and the premium glass aesthetic that MNC occupiers expect." } },
      { "@type": "Question", "name": "Does Fine Glaze have experience with LEED facade compliance?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Fine Glaze has completed multiple LEED-targeted IT park projects, providing glass with certified SHGC and U-value test reports, aluminium with low-VOC PVDF coating certification, and facade performance documentation required for LEED EAc1 and IEQc8.1 credits." } },
      { "@type": "Question", "name": "How does Fine Glaze handle large multi-building IT campus projects?", "acceptedAnswer": { "@type": "Answer", "text": "Fine Glaze assigns a dedicated project director for campus projects, runs parallel fabrication for multiple blocks, maintains a dedicated on-site quality team, and provides weekly progress reporting with Gantt chart tracking. Our largest single project is the LTIMindtree campus in Navi Mumbai covering multiple buildings." } },
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "IT Park Facade Contractor India", "item": "https://fineglaze.com/it-park-facade" }
    ]
  };

  return (
    <Layout darkHero>
      <SEO
        title="IT Park Facade Contractor India | Curtain Wall for Tech Campuses – Fine Glaze"
        description="Specialist facade contractor for IT parks and tech campuses in India. LEED-compliant curtain walls, DGU Low-E glass, fast installation for Hinjewadi, Kharadi & Mahape. Free site visit."
        canonical="https://fineglaze.com/it-park-facade"
        keywords="IT park facade contractor India, curtain wall IT campus India, LEED facade IT park, tech campus facade Pune, IT park glass facade Hinjewadi, Mahape IT campus facade, facade contractor IT park"
        ogImage="https://images.unsplash.com/photo-1486325212027-8081e485255e"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* HERO */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              IT Park Facade <span className="text-gradient-gold">Contractor India</span>
            </h1>
            <p className="text-lg text-white/80 mb-8">Fine Glaze is a specialist facade contractor for IT parks, technology campuses, and corporate office complexes across India. Our LEED-compatible curtain wall systems, energy-efficient glazing specifications, and track record of large-scale campus projects make us the preferred choice for India's top IT real estate developers.</p>
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
            alt="IT park campus curtain wall facade India LEED Fine Glaze"
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
          
          <h2 className="text-3xl font-bold">What IT Parks Demand from Facade Contractors</h2>
          <p className="text-muted-foreground">
            IT parks and technology campuses have unique facade requirements that distinguish them from standard commercial buildings. Key requirements include: <strong>LEED certification compliance</strong> — most MNC occupiers mandate LEED Gold or Platinum; <strong>tight construction schedules</strong> — IT park developers frequently work to aggressive timelines driven by occupier pre-commitments; <strong>large-scale simultaneous multi-block execution</strong>; and <strong>long-term performance guarantees</strong> to satisfy institutional building owners.
          </p>
          <p className="text-muted-foreground mt-4">
            Fine Glaze has directly addressed these requirements through our landmark IT park projects. The <strong>LTIMindtree Mensa Campus in Mahape, Navi Mumbai</strong> — one of our flagship projects — required coordinated facade execution across multiple buildings with unitized curtain wall systems, DGU Low-E glazing for LEED energy compliance, and strict quality control to satisfy the building owner's international standards.
          </p>
          <p className="text-muted-foreground mt-4">
            For IT park facades, Fine Glaze consistently specifies: <strong>unitized curtain wall</strong> for buildings above 6 storeys; <strong>DGU with Low-E glass</strong> (SHGC 0.25–0.35, U-value below 2.0 W/m2K); <strong>6063-T6 aluminium extrusions</strong> with PVDF coating for 20+ year performance; and <strong>stainless steel anchors and EPDM gaskets</strong> for long-term weather resistance.
          </p>
          <p className="text-muted-foreground mt-4">
            We serve all major IT park corridors in India: Hinjewadi IT Park Phases 1-3 (Pune), Kharadi EON IT Park (Pune), Mahape MIDC (Navi Mumbai), Airoli (Navi Mumbai), Whitefield (Bangalore), HITEC City (Hyderabad), and Rajiv Gandhi IT Corridor (Chennai). Fine Glaze's experience in each of these locations translates into faster mobilisation, better local supplier relationships, and more competitive pricing.
          </p>
    
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-10 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-4">
              <div key="LEED Gold/Platinum Compliance" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">LEED Gold/Platinum Compliance</span></div>
              <div key="DGU Low-E Glass Specification" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">DGU Low-E Glass Specification</span></div>
              <div key="Unitized Curtain Wall Systems" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Unitized Curtain Wall Systems</span></div>
              <div key="Multi-Block Campus Projects" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Multi-Block Campus Projects</span></div>
              <div key="LTIMindtree Campus Reference" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">LTIMindtree Campus Reference</span></div>
              <div key="Fast-Track Installation Programs" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Fast-Track Installation Programs</span></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">What facade system is standard for IT parks in India?</h3>
              <p className="text-muted-foreground">Unitized curtain wall with DGU Low-E glass (SHGC 0.25-0.35) is the industry standard for IT parks in India. It delivers LEED energy performance credits, fast installation to meet tight occupier timelines, factory-controlled quality, and the premium glass aesthetic that MNC occupiers expect.</p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">Does Fine Glaze have experience with LEED facade compliance?</h3>
              <p className="text-muted-foreground">Yes. Fine Glaze has completed multiple LEED-targeted IT park projects, providing glass with certified SHGC and U-value test reports, aluminium with low-VOC PVDF coating certification, and facade performance documentation required for LEED EAc1 and IEQc8.1 credits.</p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">How does Fine Glaze handle large multi-building IT campus projects?</h3>
              <p className="text-muted-foreground">Fine Glaze assigns a dedicated project director for campus projects, runs parallel fabrication for multiple blocks, maintains a dedicated on-site quality team, and provides weekly progress reporting with Gantt chart tracking. Our largest single project is the LTIMindtree campus in Navi Mumbai covering multiple buildings.</p>
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
            <Link key="/facade-contractor-pune" to="/facade-contractor-pune" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Facade Contractor Pune</p><p className="text-xs text-slate-500">Facade services Pune</p></div></Link>
            <Link key="/facade-contractor-navi-mumbai" to="/facade-contractor-navi-mumbai" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Facade Contractor Navi Mumbai</p><p className="text-xs text-slate-500">Navi Mumbai facade</p></div></Link>
            <Link key="/commercial-building-facade" to="/commercial-building-facade" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Commercial Facade Guide</p><p className="text-xs text-slate-500">Commercial facade overview</p></div></Link>
            <Link key="/curtain-wall-cost-guide" to="/curtain-wall-cost-guide" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Curtain Wall Cost Guide</p><p className="text-xs text-slate-500">Curtain wall cost guide</p></div></Link>
            <Link key="/contact" to="/contact" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Get a Quote</p><p className="text-xs text-slate-500">Free consultation</p></div></Link>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
