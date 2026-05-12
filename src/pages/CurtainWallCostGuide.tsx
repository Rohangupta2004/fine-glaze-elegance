import SEO from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
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
    "description": "Complete curtain wall cost guide India 2024. Stick system vs unitized pricing, glass types, installation factors. All prices explained. Get a custom quote from Fine Glaze."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is the cheapest curtain wall system in India?", "acceptedAnswer": { "@type": "Answer", "text": "The most cost-effective option is a basic stick system with 6mm SGU clear float glass, starting from Rs 350/sq ft supplied and installed. However, for LEED certification, thermal performance, or high-rise safety compliance, DGU or laminated options are necessary and add Rs 100-300/sq ft." } },
      { "@type": "Question", "name": "Should I choose unitized or stick system for my building in India?", "acceptedAnswer": { "@type": "Answer", "text": "Use stick system for: buildings under 8 storeys; irregular bay sizes; refurbishment projects; or budget-constrained projects. Use unitized for: buildings above 10 storeys; tight installation timelines; LEED certification; and coastal or high-wind zones." } },
      { "@type": "Question", "name": "How much does curtain wall cost for a typical 10-storey office building?", "acceptedAnswer": { "@type": "Answer", "text": "For a 10-storey building with 300 sq m of curtain wall per floor (3000 sq m total), at Rs 600/sq ft stick DGU = approximately Rs 1.67 crore total; at Rs 900/sq ft unitized = approximately Rs 2.5 crore total, before interface and contingency." } },
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
        title="Curtain Wall Cost in India 2024 | Complete Price Guide – Fine Glaze"
        description="Complete curtain wall cost guide India 2024. Stick system vs unitized pricing, glass types, installation factors. All prices explained. Get a custom quote from Fine Glaze."
        canonical="https://fineglaze.com/curtain-wall-cost-guide"
        keywords="curtain wall cost India, curtain wall price per sq ft, unitized curtain wall cost, stick system curtain wall price, glass facade cost India, curtain wall budget India 2024"
        ogImage="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* HERO */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Curtain Wall Cost <span className="text-gradient-gold">Guide India 2024</span>
            </h1>
            <p className="text-lg text-white/80 mb-8">Planning a curtain wall for your commercial building? This comprehensive guide breaks down curtain wall costs in India — covering all system types, glass specifications, installation factors, and real pricing ranges based on Fine Glaze's extensive project experience across Pune, Mumbai, and Maharashtra.</p>
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
            alt="Curtain wall cost guide India glass facade pricing Fine Glaze"
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
          
          <h2 className="text-3xl font-bold">Curtain Wall Cost Ranges India 2024</h2>
          <p className="text-muted-foreground">
            Curtain wall costs in India vary widely depending on system type, glass specification, building height, site complexity, and contractor quality. As a specialist facade contractor with 50+ completed projects, Fine Glaze has compiled this transparent pricing guide.
          </p>
          <div className="overflow-x-auto mt-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-3 text-left font-semibold">System Type</th>
                  <th className="border border-border p-3 text-left font-semibold">Price Range (per sq ft)</th>
                  <th className="border border-border p-3 text-left font-semibold">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-border p-3">Stick System (SGU)</td><td className="border border-border p-3">Rs 350–550</td><td className="border border-border p-3">Low-rise, smaller projects</td></tr>
                <tr className="bg-muted/30"><td className="border border-border p-3">Stick System (DGU)</td><td className="border border-border p-3">Rs 450–650</td><td className="border border-border p-3">Energy-efficient low-rise</td></tr>
                <tr><td className="border border-border p-3">Semi-Unitized System</td><td className="border border-border p-3">Rs 550–850</td><td className="border border-border p-3">Mid-rise 8–20 storeys</td></tr>
                <tr className="bg-muted/30"><td className="border border-border p-3">Unitized System (SGU)</td><td className="border border-border p-3">Rs 700–950</td><td className="border border-border p-3">High-rise 20+ storeys</td></tr>
                <tr><td className="border border-border p-3">Unitized System (DGU Low-E)</td><td className="border border-border p-3">Rs 900–1,200</td><td className="border border-border p-3">LEED / premium high-rise</td></tr>
              </tbody>
            </table>
          </div>
          <h2 className="text-3xl font-bold mt-10">Key Factors That Affect Curtain Wall Cost</h2>
          <ul className="list-disc list-inside text-muted-foreground space-y-3 mt-4">
            <li><strong>Building height:</strong> Every additional floor adds scaffold and gondola complexity. Above 15 storeys, installation costs increase by approximately Rs 25-50/sq ft per floor band.</li>
            <li><strong>Wind zone:</strong> Coastal Mumbai (Zone IV/V) requires heavier sections and more sealant, adding Rs 50-100/sq ft compared to inland Pune (Zone II).</li>
            <li><strong>Glass specification:</strong> DGU Low-E adds Rs 100-200/sq ft over SGU. Laminated safety glass adds Rs 80-150/sq ft. Acoustic glass for airport proximity adds Rs 100-200/sq ft.</li>
            <li><strong>Panel size:</strong> Large format panels (2m x 3.5m+) require specialist handling equipment and safety glass specifications, increasing material cost by 15-25%.</li>
            <li><strong>Corner and jamb conditions:</strong> Complex geometry — corner mullions, sloped glazing, curved sections — can add 20-40% to system cost.</li>
            <li><strong>Spandrel treatment:</strong> Insulated spandrel panels with aluminium face add Rs 150-300/sq ft to areas requiring opaque treatment between floors.</li>
          </ul>
          <h2 className="text-3xl font-bold mt-10">Curtain Wall Budget Planning Tips</h2>
          <p className="text-muted-foreground mt-4">
            For early-stage project budgeting, use Rs 600-800/sq ft as a standard DGU stick system curtain wall benchmark for Pune and other inland Maharashtra cities. Add 15% for Mumbai coastal requirements. Add 20% for unitized systems. Add 10-15% contingency for interface work with the structural frame. Always obtain a detailed BOQ-based quotation before finalising your facade budget — preliminary estimates can vary by 30-40% from actual tender prices.
          </p>
    
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-10 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-4">
              <div key="Transparent Price Ranges" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Transparent Price Ranges</span></div>
              <div key="All System Types Covered" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">All System Types Covered</span></div>
              <div key="Glass Spec Cost Impact" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Glass Spec Cost Impact</span></div>
              <div key="Regional Cost Variations" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Regional Cost Variations</span></div>
              <div key="LEED Cost Analysis" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">LEED Cost Analysis</span></div>
              <div key="Free Custom Quotation" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-amber-600 shrink-0" /><span className="text-muted-foreground">Free Custom Quotation</span></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">What is the cheapest curtain wall system in India?</h3>
              <p className="text-muted-foreground">The most cost-effective option is a basic stick system with 6mm SGU clear float glass, starting from Rs 350/sq ft supplied and installed. However, for LEED certification, thermal performance, or high-rise safety compliance, DGU or laminated options are necessary and add Rs 100-300/sq ft.</p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">Should I choose unitized or stick system for my building in India?</h3>
              <p className="text-muted-foreground">Use stick system for: buildings under 8 storeys; irregular bay sizes; refurbishment projects; or budget-constrained projects. Use unitized for: buildings above 10 storeys; tight installation timelines; LEED certification; and coastal or high-wind zones.</p>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">How much does curtain wall cost for a typical 10-storey office building?</h3>
              <p className="text-muted-foreground">For a 10-storey building with 300 sq m of curtain wall per floor (3000 sq m total), at Rs 600/sq ft stick DGU = approximately Rs 1.67 crore total; at Rs 900/sq ft unitized = approximately Rs 2.5 crore total, before interface and contingency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-12 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-xl font-bold text-slate-800 mb-5">Explore Related Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link key="/curtain-wall-systems" to="/curtain-wall-systems" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Curtain Wall Systems</p><p className="text-xs text-slate-500">Our curtain wall services</p></div></Link>
            <Link key="/curtain-wall-pune" to="/curtain-wall-pune" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Curtain Wall Pune</p><p className="text-xs text-slate-500">Curtain wall contractor Pune</p></div></Link>
            <Link key="/curtain-wall-mumbai" to="/curtain-wall-mumbai" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Curtain Wall Mumbai</p><p className="text-xs text-slate-500">Curtain wall contractor Mumbai</p></div></Link>
            <Link key="/aluminium-vs-acp-cladding" to="/aluminium-vs-acp-cladding" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Aluminium vs ACP Guide</p><p className="text-xs text-slate-500">System comparison guide</p></div></Link>
            <Link key="/commercial-building-facade" to="/commercial-building-facade" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Commercial Facade Guide</p><p className="text-xs text-slate-500">Commercial facade overview</p></div></Link>
            <Link key="/contact" to="/contact" className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"><ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-slate-800 text-sm">Get a Quote</p><p className="text-xs text-slate-500">Free custom quotation</p></div></Link>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
