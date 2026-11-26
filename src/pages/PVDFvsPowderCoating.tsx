import SEO from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function PVDFvsPowderCoating() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "PVDF vs Powder Coating for Aluminium Facades in India – Fine Glaze",
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
    "description": "PVDF vs powder coating for aluminium facades compared on durability, UV and coastal exposure and upkeep. A general guide by Fine Glaze, Pune and Mumbai."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Is PVDF coating worth the extra cost in India?", "acceptedAnswer": { "@type": "Answer", "text": "PVDF often pays off on buildings meant to last many years, especially coastal or hard-to-reach facades, because it holds colour and gloss longer and delays recoating. Compare full life cost, not first cost alone." } },
      { "@type": "Question", "name": "Can I repaint powder-coated aluminium facade in India?", "acceptedAnswer": { "@type": "Answer", "text": "Powder-coated aluminium can be recoated, but only after professional preparation: stripping or abrading the old coating, priming and recoating, which is feasible on accessible low-rise facades. High-rise recoating is costly and disruptive, so choose the finish carefully." } },
      { "@type": "Question", "name": "Is anodising better than PVDF for aluminium facades?", "acceptedAnswer": { "@type": "Answer", "text": "Neither finish is better in every case: anodising forms an integral oxide layer that cannot peel but offers a narrower colour range, while PVDF offers more colour choice and strong UV durability. Choose from the project specification and exposure." } },
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "PVDF vs Powder Coating for Aluminium Facades in India – Fine Glaze", "item": "https://fineglaze.com/pvdf-vs-powder-coating-aluminium" }
    ]
  };

  return (
    <Layout darkHero>
      <SEO
        title="PVDF vs Powder Coating for Aluminium Facades | Fine Glaze"
        description="PVDF vs powder coating for aluminium facades compared on durability, UV and coastal exposure and upkeep. A general guide by Fine Glaze, Pune and Mumbai."
        canonical="https://fineglaze.com/pvdf-vs-powder-coating-aluminium"
        keywords="PVDF vs powder coating aluminium India, PVDF coating facade India, powder coating aluminium facade, aluminium finish guide India, PVDF Kynar aluminium building, facade coating comparison"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* HERO */}
      <section className="relative py-24 bg-night-2 text-paper">
        <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              PVDF vs Powder Coating <span className="text-gradient-gold">for Aluminium Facades</span>
            </h1>
            <p className="text-lg text-paper/80 mb-8">When specifying aluminium facades, curtain walls, or ACP cladding in India, the choice between PVDF (Polyvinylidene Fluoride) and polyester powder coating is one of the most important finish decisions. This guide explains the key differences and helps you make the right choice for your project.</p>
            <div className="flex gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-lamp hover:bg-lamp/90">Book a call</Button>
              </Link>
              <Link to="/portfolio">
                <Button size="lg" variant="outline">View Projects</Button>
              </Link>
            </div>
          </div>
          <img
            src="/projects/salsette-27-32-1.webp"
            alt="ACP panels with protective film ready for installation at Salsette-27, Byculla, Mumbai — Fine Glaze"
            className="object-cover h-[420px] w-full"
            loading="eager"
            width="600"
            height="420"
          />
        </div>
      </section>

      {/* RICH CONTENT */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl space-y-6">
          
          <h2 className="text-3xl font-bold">What is PVDF Coating?</h2>
          <p className="text-muted-foreground">
            PVDF (polyvinylidene fluoride) is a high-performance fluoropolymer coating applied to aluminium extrusions and ACP panels. It is widely specified on premium commercial and coastal projects, and is known for good resistance to UV, pollution and weathering.
          </p>
          <p className="text-muted-foreground mt-4">
            PVDF coatings get their durability from the chemical stability of the fluoropolymer. Coating thickness, the percentage of PVDF resin and the pre-treatment affect performance, and the manufacturer's warranty states what is covered. Confirm these details in writing for your project.
          </p>
          <h2 className="text-3xl font-bold mt-10">What is Powder Coating for Aluminium?</h2>
          <p className="text-muted-foreground mt-4">
            Polyester powder coating is the most widely used architectural coating for aluminium in India. It costs less, comes in a very wide colour range and performs adequately in moderate environments. Dry powder is applied electrostatically to pre-treated aluminium and cured in an oven.
          </p>
          <p className="text-muted-foreground mt-4">
            Powder coating life depends on the grade, colour and exposure. Coastal or high-UV sites usually wear ordinary polyester faster, and super-durable polyester grades improve on this. Ask the applicator for the grade and the warranty terms.
          </p>
          <div className="overflow-x-auto mt-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-3 text-left font-semibold">Parameter</th>
                  <th className="border border-border p-3 text-left font-semibold">PVDF Coating</th>
                  <th className="border border-border p-3 text-left font-semibold">Powder Coating</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-border p-3">Service Life (inland)</td><td className="border border-border p-3">Longer</td><td className="border border-border p-3">Shorter</td></tr>
                <tr className="bg-muted/30"><td className="border border-border p-3">Service Life (coastal)</td><td className="border border-border p-3">Longer; coastal exposure still shortens life</td><td className="border border-border p-3">Shorter; wears faster near the sea</td></tr>
                <tr><td className="border border-border p-3">UV Resistance</td><td className="border border-border p-3">Excellent</td><td className="border border-border p-3">Good to moderate</td></tr>
                <tr className="bg-muted/30"><td className="border border-border p-3">Colour Range</td><td className="border border-border p-3">Limited (standard range)</td><td className="border border-border p-3">Unlimited (RAL, custom)</td></tr>
                <tr><td className="border border-border p-3">Cost Premium</td><td className="border border-border p-3">Higher than powder</td><td className="border border-border p-3">Base price</td></tr>
                <tr className="bg-muted/30"><td className="border border-border p-3">Green building documents</td><td className="border border-border p-3">Ask the applicator for product data</td><td className="border border-border p-3">Ask the applicator for product data</td></tr>
              </tbody>
            </table>
          </div>
          <h2 className="text-3xl font-bold mt-10">Fine Glaze Recommendation</h2>
          <p className="text-muted-foreground mt-4">
            As general guidance, PVDF is often chosen for coastal sites, buildings with long design lives and low maintenance access, and premium or institutional buildings. Powder coating suits inland projects on lower-rise buildings with accessible maintenance and tighter budgets. Fine Glaze applies the finish stated in the project specification.
          </p>
    
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-10 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-4">
              <div key="PVDF vs Powder Comparison" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">PVDF vs Powder Comparison</span></div>
              <div key="Cost and Lifespan Factors" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Cost and Lifespan Factors</span></div>
              <div key="Coastal Climate Guidance" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Coastal Climate Guidance</span></div>
              <div key="Green Building Notes" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Green Building Notes</span></div>
              <div key="Colour Range Assessment" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Colour Range Assessment</span></div>
              <div key="Specification Pointers" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Specification Pointers</span></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-background p-6">
              <h3 className="text-lg font-bold mb-2">Is PVDF coating worth the extra cost in India?</h3>
              <p className="text-muted-foreground">PVDF often pays off on buildings meant to last many years, especially coastal or hard-to-reach facades, because it holds colour and gloss longer and delays recoating. Compare full life cost, not first cost alone.</p>
            </div>
            <div className="bg-background p-6">
              <h3 className="text-lg font-bold mb-2">Can I repaint powder-coated aluminium facade in India?</h3>
              <p className="text-muted-foreground">Powder-coated aluminium can be recoated, but only after professional preparation: stripping or abrading the old coating, priming and recoating, which is feasible on accessible low-rise facades. High-rise recoating is costly and disruptive, so choose the finish carefully.</p>
            </div>
            <div className="bg-background p-6">
              <h3 className="text-lg font-bold mb-2">Is anodising better than PVDF for aluminium facades?</h3>
              <p className="text-muted-foreground">Neither finish is better in every case: anodising forms an integral oxide layer that cannot peel but offers a narrower colour range, while PVDF offers more colour choice and strong UV durability. Choose from the project specification and exposure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="py-12 bg-night-2 border-t border-line">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-xl font-bold text-paper mb-5">Explore Related Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link key="/aluminium-windows-doors" to="/aluminium-windows-doors" className="group flex items-start gap-3 p-4 border border-line hover:border-lamp/40 hover:bg-lamp/10 transition-all bg-night"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Aluminium Facade</p><p className="text-xs text-mute">Aluminium facade systems</p></div></Link>
            <Link key="/acp-aluminium-cladding" to="/acp-aluminium-cladding" className="group flex items-start gap-3 p-4 border border-line hover:border-lamp/40 hover:bg-lamp/10 transition-all bg-night"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">ACP Cladding</p><p className="text-xs text-mute">ACP cladding systems</p></div></Link>
            <Link key="/maintenance-services" to="/maintenance-services" className="group flex items-start gap-3 p-4 border border-line hover:border-lamp/40 hover:bg-lamp/10 transition-all bg-night"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Facade Maintenance</p><p className="text-xs text-mute">Facade AMC</p></div></Link>
            <Link key="/aluminium-vs-acp-cladding" to="/aluminium-vs-acp-cladding" className="group flex items-start gap-3 p-4 border border-line hover:border-lamp/40 hover:bg-lamp/10 transition-all bg-night"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Aluminium vs ACP Guide</p><p className="text-xs text-mute">System comparison</p></div></Link>
            <Link key="/facade-contractor-pune" to="/facade-contractor-pune" className="group flex items-start gap-3 p-4 border border-line hover:border-lamp/40 hover:bg-lamp/10 transition-all bg-night"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Facade Contractor Pune</p><p className="text-xs text-mute">Facade contractor Pune</p></div></Link>
            <Link key="/contact" to="/contact" className="group flex items-start gap-3 p-4 border border-line hover:border-lamp/40 hover:bg-lamp/10 transition-all bg-night"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Book a call</p><p className="text-xs text-mute">Talk to our team</p></div></Link>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
