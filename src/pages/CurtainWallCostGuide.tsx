import SEO from "@/components/SEO";
import PageHero from "@/components/common/PageHero";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function CurtainWallCostGuide() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Curtain Wall Cost in India 2024",
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
    "description": "What drives curtain wall cost in India: stick vs unitized systems, glass, height and access. A general guide by Fine Glaze. Ask us for a quotation."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is the cheapest curtain wall system in India?", "acceptedAnswer": { "@type": "Answer", "text": "A basic stick system with single clear glass is usually the lowest-cost curtain wall, but it may not meet thermal, safety or height requirements. Double glazed or laminated glass adds cost. Compare quotations on the same specification." } },
      { "@type": "Question", "name": "Should I choose unitized or stick system for my building in India?", "acceptedAnswer": { "@type": "Answer", "text": "Stick systems suit lower buildings, irregular bay sizes and refurbishment, while unitized systems suit tall buildings, tight programmes and high wind exposure. Height, access, programme and budget decide the final choice." } },
      { "@type": "Question", "name": "How much does curtain wall cost for a typical 10-storey office building?", "acceptedAnswer": { "@type": "Answer", "text": "Cost for a 10-storey office depends on facade area, system, glass, wind load and access, so no single figure applies. Send drawings to Fine Glaze for a BOQ-based quotation." } },
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Curtain Wall Cost in India 2024", "item": "https://fineglaze.com/curtain-wall-cost-guide" }
    ]
  };

  return (
    <Layout darkHero>
      <SEO
        title="Curtain Wall Cost in India: What Decides It | Fine Glaze"
        description="What drives curtain wall cost in India: stick vs unitized systems, glass, height and access. A general guide by Fine Glaze. Ask us for a quotation."
        canonical="https://fineglaze.com/curtain-wall-cost-guide"
        keywords="curtain wall cost India, curtain wall price per sq ft, unitized curtain wall cost, stick system curtain wall price, glass facade cost India, curtain wall budget India 2024"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* HERO */}
      <PageHero
        crumbs={[{ label: "Curtain Wall Cost Guide India" }]}
        title={<>Curtain Wall Cost <span className="text-gradient-gold">Guide India</span></>}
        intro="Planning a curtain wall for a commercial building? This guide explains what drives curtain wall cost in India: system type, glass specification, building height and site conditions. It is general guidance from Fine Glaze, a facade contractor in Pune and Mumbai."
        secondary={{ label: "View Projects", to: "/portfolio" }}
        image={{ src: "/projects/naman-chambers-48-1.webp", alt: "Naman Chambers, Bandra Kurla Complex, Mumbai — glazing and ACP works by Fine Glaze (in progress)", width: 600, height: 420 }}
      />

      {/* RICH CONTENT */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl space-y-6">
          
          <h2 className="text-3xl font-bold">What Curtain Wall Cost Depends On</h2>
          <p className="text-muted-foreground">
            Curtain wall cost in India varies with the system type, glass specification, building height, site complexity and scope. Fine Glaze does not publish price ranges on this page, because a reliable figure needs drawings, a glass and finish specification and an access plan. The table below shows how the main system types compare in use, not in price.
          </p>
          <div className="overflow-x-auto mt-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-3 text-left font-semibold">System Type</th>
                  <th className="border border-border p-3 text-left font-semibold">Assembly</th>
                  <th className="border border-border p-3 text-left font-semibold">Often Used For</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-border p-3">Stick system</td><td className="border border-border p-3">Frame and glass assembled on site</td><td className="border border-border p-3">Low and mid-rise, irregular bays, refurbishment</td></tr>
                <tr className="bg-muted/30"><td className="border border-border p-3">Semi-unitized system</td><td className="border border-border p-3">Part factory, part site assembly</td><td className="border border-border p-3">Mid-rise buildings with repeating floors</td></tr>
                <tr><td className="border border-border p-3">Unitized system</td><td className="border border-border p-3">Factory-assembled panels hung on site</td><td className="border border-border p-3">Taller buildings and tight programmes</td></tr>
              </tbody>
            </table>
          </div>
          <h2 className="text-3xl font-bold mt-10">Key Factors That Affect Curtain Wall Cost</h2>
          <ul className="list-disc list-inside text-muted-foreground space-y-3 mt-4">
            <li><strong>Building height:</strong> taller buildings need more access equipment, such as gondolas and cranes, and more rigorous anchorage design.</li>
            <li><strong>Wind load:</strong> higher wind loads need heavier sections and more fixings.</li>
            <li><strong>Glass specification:</strong> double glazed low-E, laminated and acoustic glass cost more than single clear glass.</li>
            <li><strong>Panel size:</strong> large panels need special handling equipment and stricter glass specifications.</li>
            <li><strong>Geometry:</strong> corners, sloped glazing and curved sections add fabrication and installation effort.</li>
            <li><strong>Spandrel treatment:</strong> insulated opaque panels between floors add to the scope.</li>
          </ul>
          <h2 className="text-3xl font-bold mt-10">Curtain Wall Budget Planning Tips</h2>
          <p className="text-muted-foreground mt-4">
            For early budgeting, ask two or three contractors to price the same drawings and the same glass and finish specification so the quotations compare like for like. Always get a BOQ-based quotation before fixing the facade budget, and keep a contingency for interfaces with the structure. Fine Glaze prepares quotations after reviewing drawings.
          </p>
    
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-10 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-4">
              <div key="Cost Drivers Explained" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Cost Drivers Explained</span></div>
              <div key="All System Types Covered" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">All System Types Covered</span></div>
              <div key="Glass Specification Effects" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Glass Specification Effects</span></div>
              <div key="Site and Wind Load Effects" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Site and Wind Load Effects</span></div>
              <div key="Glass and Energy Brief" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Glass and Energy Brief</span></div>
              <div key="Quotation on Drawings" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Quotation on Drawings</span></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-background p-6">
              <h3 className="text-lg font-bold mb-2">What is the cheapest curtain wall system in India?</h3>
              <p className="text-muted-foreground">A basic stick system with single clear glass is usually the lowest-cost curtain wall, but it may not meet thermal, safety or height requirements. Double glazed or laminated glass adds cost. Compare quotations on the same specification.</p>
            </div>
            <div className="bg-background p-6">
              <h3 className="text-lg font-bold mb-2">Should I choose unitized or stick system for my building in India?</h3>
              <p className="text-muted-foreground">Stick systems suit lower buildings, irregular bay sizes and refurbishment, while unitized systems suit tall buildings, tight programmes and high wind exposure. Height, access, programme and budget decide the final choice.</p>
            </div>
            <div className="bg-background p-6">
              <h3 className="text-lg font-bold mb-2">How much does curtain wall cost for a typical 10-storey office building?</h3>
              <p className="text-muted-foreground">Cost for a 10-storey office depends on facade area, system, glass, wind load and access, so no single figure applies. Send drawings to Fine Glaze for a BOQ-based quotation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-12 bg-night-2 border-t border-line">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-xl font-bold text-paper mb-5">Explore Related Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link key="/curtain-wall-systems" to="/curtain-wall-systems" className="group flex items-start gap-3 p-4 border border-line hover:border-lamp/40 hover:bg-lamp/10 transition-all bg-night"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Curtain Wall Systems</p><p className="text-xs text-mute">Our curtain wall services</p></div></Link>
            <Link key="/curtain-wall-pune" to="/curtain-wall-pune" className="group flex items-start gap-3 p-4 border border-line hover:border-lamp/40 hover:bg-lamp/10 transition-all bg-night"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Curtain Wall Pune</p><p className="text-xs text-mute">Curtain wall contractor Pune</p></div></Link>
            <Link key="/curtain-wall-mumbai" to="/curtain-wall-mumbai" className="group flex items-start gap-3 p-4 border border-line hover:border-lamp/40 hover:bg-lamp/10 transition-all bg-night"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Curtain Wall Mumbai</p><p className="text-xs text-mute">Curtain wall contractor Mumbai</p></div></Link>
            <Link key="/aluminium-vs-acp-cladding" to="/aluminium-vs-acp-cladding" className="group flex items-start gap-3 p-4 border border-line hover:border-lamp/40 hover:bg-lamp/10 transition-all bg-night"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Aluminium vs ACP Guide</p><p className="text-xs text-mute">System comparison guide</p></div></Link>
            <Link key="/commercial-building-facade" to="/commercial-building-facade" className="group flex items-start gap-3 p-4 border border-line hover:border-lamp/40 hover:bg-lamp/10 transition-all bg-night"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Commercial Facade Guide</p><p className="text-xs text-mute">Commercial facade overview</p></div></Link>
            <Link key="/contact" to="/contact" className="group flex items-start gap-3 p-4 border border-line hover:border-lamp/40 hover:bg-lamp/10 transition-all bg-night"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Book a call</p><p className="text-xs text-mute">Free custom quotation</p></div></Link>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
