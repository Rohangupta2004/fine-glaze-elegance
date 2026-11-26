import SEO from "@/components/SEO";
import { telHref } from "@/data/company";
import PageHero from "@/components/common/PageHero";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight, Phone } from "lucide-react";

export default function CurtainWallVsStructuralGlazing() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Curtain Wall vs Structural Glazing: Key Differences India – Fine Glaze",
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
    "description": "Curtain wall vs structural glazing explained: how each is built, where each suits a building, and what to compare in quotes. A general guide by Fine Glaze."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Which is cheaper — curtain wall or structural glazing?", "acceptedAnswer": { "@type": "Answer", "text": "Neither system is always cheaper, because cost depends on height, glass, configuration and access. 2-side structural glazing can suit simple low-rise facades, while unitized curtain wall is often more practical on tall buildings. Compare quotations on the same scope." } },
      { "@type": "Question", "name": "Can curtain wall and structural glazing be combined on one building?", "acceptedAnswer": { "@type": "Answer", "text": "Curtain wall and structural glazing can be combined on one building, and this is common: structural glazing at a ground-floor lobby or showroom, with curtain wall above. The two systems need coordinated drawings so joints, drainage and movement line up." } },
      { "@type": "Question", "name": "Which is better for a showroom facade in India?", "acceptedAnswer": { "@type": "Answer", "text": "For showrooms, structural glazing such as 4-side SSG or spider glazing is usually preferred, because it gives the frameless, transparent look that retail frontages want. Curtain wall remains an option where framing is acceptable." } },
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "Curtain Wall vs Structural Glazing: Key Differences India – Fine Glaze", "item": "https://fineglaze.com/curtain-wall-vs-structural-glazing" }
    ]
  };

  return (
    <Layout darkHero>
      <SEO
        title="Curtain Wall vs Structural Glazing: Differences | Fine Glaze"
        description="Curtain wall vs structural glazing explained: how each is built, where each suits a building, and what to compare in quotes. A general guide by Fine Glaze."
        canonical="https://fineglaze.com/curtain-wall-vs-structural-glazing"
        keywords="curtain wall vs structural glazing India, SSG vs curtain wall, structural glazing or curtain wall, glass facade types India, curtain wall vs SSG comparison, facade system selection India"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* HERO */}
      <PageHero
        crumbs={[{ label: "Curtain Wall vs Structural Glazing" }]}
        title={<>Curtain Wall vs <span className="text-gradient-gold">Structural Glazing</span></>}
        intro="Curtain wall systems and structural glazing are both popular glass facade solutions for commercial buildings in India — but they are fundamentally different systems with different aesthetics, costs, and performance profiles. This guide explains the key differences to help architects and developers make the right choice."
        secondary={{ label: "View Projects", to: "/portfolio" }}
        image={{ src: "/projects/naman-chambers-48-1.webp", alt: "Naman Chambers, Bandra Kurla Complex, Mumbai — glazed office towers where Fine Glaze is carrying out glazing and ACP works", width: 600, height: 420 }}
      />

      {/* RICH CONTENT */}
      <section className="fg-sec">
        <div className="fg-wrap fg-prose">
          
          <h2>What is a Curtain Wall System?</h2>
          <p className="text-muted-foreground">
            A curtain wall is a non-load-bearing facade system comprising aluminium framing members (mullions and transoms) with glass or opaque panel infill. The aluminium frame is visible from the exterior as a grid pattern. Curtain walls can be stick systems (assembled on-site) or unitized (factory-assembled panels).
          </p>
          <p className="text-muted-foreground mt-4">
            Curtain walls suit: tall buildings; large areas needing efficient weather-tight installation; projects with opaque spandrel panels beside vision glass; and buildings where future glass replacement access matters. The visible aluminium grid can also be used as a design element.
          </p>
          <h2>What is Structural Glazing?</h2>
          <p className="text-muted-foreground mt-4">
            Structural glazing (SSG — Structural Silicone Glazing) bonds glass panels directly to an aluminium frame using high-strength structural silicone sealant, eliminating visible exterior fixings. The result is a clean, flush glass surface with no protruding frames or caps.
          </p>
          <p className="text-muted-foreground mt-4">
            Structural glazing suits: showrooms, retail frontages and hospitality buildings where transparency is the priority; lower-rise buildings and landmark entries; and facades meant to read as a continuous glass plane.
          </p>
          <div className="overflow-x-auto mt-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-3 text-left font-semibold">Factor</th>
                  <th className="border border-border p-3 text-left font-semibold">Curtain Wall</th>
                  <th className="border border-border p-3 text-left font-semibold">Structural Glazing</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-border p-3">Visible Frame</td><td className="border border-border p-3">Yes (aluminium grid)</td><td className="border border-border p-3">No (flush glass)</td></tr>
                <tr className="bg-muted/30"><td className="border border-border p-3">Typical Height</td><td className="border border-border p-3">Low-rise to high-rise</td><td className="border border-border p-3">Often low and mid-rise; taller needs engineering review</td></tr>
                <tr><td className="border border-border p-3">Cost</td><td className="border border-border p-3">Depends on system, glass and height</td><td className="border border-border p-3">Depends on configuration, glass and sealant</td></tr>
                <tr className="bg-muted/30"><td className="border border-border p-3">Glass Replacement</td><td className="border border-border p-3">Easier (mechanical fix)</td><td className="border border-border p-3">Requires sealant cutting</td></tr>
                <tr><td className="border border-border p-3">Opaque Panels</td><td className="border border-border p-3">Yes (spandrels)</td><td className="border border-border p-3">Opaque backing only</td></tr>
                <tr className="bg-muted/30"><td className="border border-border p-3">Aesthetic</td><td className="border border-border p-3">Classic framed look</td><td className="border border-border p-3">Seamless glass plane</td></tr>
              </tbody>
            </table>
          </div>
    
        </div>
      </section>

      {/* FEATURES */}
      <section className="fg-sec">
        <div className="fg-wrap">
          <h2>What We Offer</h2>
          <div className="fg-grid c2">
              <div key="Side-by-Side System Comparison" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Side-by-Side System Comparison</span></div>
              <div key="Cost Factors for Both Systems" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Cost Factors for Both Systems</span></div>
              <div key="Height Suitability Guide" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Height Suitability Guide</span></div>
              <div key="Maintenance Considerations" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Maintenance Considerations</span></div>
              <div key="Aesthetic Difference Explained" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Aesthetic Difference Explained</span></div>
              <div key="Choosing With Fine Glaze" className="flex items-center gap-3"><CheckCircle2 size={20} className="text-lamp shrink-0" /><span className="text-muted-foreground">Choosing With Fine Glaze</span></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="fg-sec">
        <div className="fg-wrap">
          <h2>Frequently Asked Questions</h2>
          <div className="fg-faq">
            <details>
              <summary><h3>Which is cheaper — curtain wall or structural glazing?</h3></summary>
              <div className="fg-a">Neither system is always cheaper, because cost depends on height, glass, configuration and access. 2-side structural glazing can suit simple low-rise facades, while unitized curtain wall is often more practical on tall buildings. Compare quotations on the same scope.</div>
            </details>
            <details>
              <summary><h3>Can curtain wall and structural glazing be combined on one building?</h3></summary>
              <div className="fg-a">Curtain wall and structural glazing can be combined on one building, and this is common: structural glazing at a ground-floor lobby or showroom, with curtain wall above. The two systems need coordinated drawings so joints, drainage and movement line up.</div>
            </details>
            <details>
              <summary><h3>Which is better for a showroom facade in India?</h3></summary>
              <div className="fg-a">For showrooms, structural glazing such as 4-side SSG or spider glazing is usually preferred, because it gives the frameless, transparent look that retail frontages want. Curtain wall remains an option where framing is acceptable.</div>
            </details>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="fg-sec">
        <div className="fg-wrap">
          <h2>Explore Related Services</h2>
          <div className="fg-grid">
            <Link key="/curtain-wall-systems" to="/curtain-wall-systems" className="group fg-row"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Curtain Wall Systems</p><p className="text-xs text-mute">Curtain wall systems</p></div></Link>
            <Link key="/structural-glazing" to="/structural-glazing" className="group fg-row"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Structural Glazing</p><p className="text-xs text-mute">Structural glazing</p></div></Link>
            <Link key="/curtain-wall-cost-guide" to="/curtain-wall-cost-guide" className="group fg-row"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Curtain Wall Cost Guide</p><p className="text-xs text-mute">Curtain wall cost guide</p></div></Link>
            <Link key="/commercial-building-facade" to="/commercial-building-facade" className="group fg-row"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Commercial Facade Guide</p><p className="text-xs text-mute">Commercial facade overview</p></div></Link>
            <Link key="/facade-contractor-pune" to="/facade-contractor-pune" className="group fg-row"><ArrowRight size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Facade Contractor Pune</p><p className="text-xs text-mute">Facade contractor Pune</p></div></Link>
            <a key="tel" href={telHref} className="group fg-row"><Phone size={15} className="text-lamp shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" /><div><p className="font-semibold text-paper text-sm">Call now</p><p className="text-xs text-mute">Talk to our team</p></div></a>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
