import SEO from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export default function AcpSheetPriceGuide() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "ACP Sheet Price Guide 2025",
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
    "description": "Complete ACP sheet price guide India 2025. PVDF, PE, FR-grade, mirror, wood finish pricing per sq ft. Get a custom quote from Fine Glaze, Pune."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the price of ACP sheet in India in 2025?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ACP sheet prices in India in 2025 range from Rs 80–130/sq ft for standard PE grade, Rs 130–180/sq ft for FR/fire-retardant grade, Rs 160–220/sq ft for PVDF grade, and Rs 200–280/sq ft for premium brushed/mirror finishes. Prices vary by brand, thickness, and finish."
        }
      },
      {
        "@type": "Question",
        "name": "Which ACP brand is best in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Top ACP brands in India include Alubond, Viva, Aludecor, Eurobond, and Reynolds. PVDF-coated panels from these brands offer superior weather resistance and colour retention over 20+ years, making them ideal for external facades in Indian climates."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between PE and PVDF ACP?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "PE (Polyester) ACP is suitable for interior applications and low-budget external use. PVDF (Polyvinylidene Fluoride) ACP has superior UV resistance, weather performance, and colour fastness and is recommended for all exterior applications, especially in coastal areas like Mumbai."
        }
      },
      {
        "@type": "Question",
        "name": "What is FR grade ACP?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "FR (Fire-Retardant) grade ACP has a mineral-filled core that resists flame spread. It is mandatory for facades on buildings above 15 metres under NBC 2016 fire safety norms. Fine Glaze supplies and installs only FR or PVDF-FR grade panels for exterior applications."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "ACP Sheet Price Guide 2025", "item": "https://fineglaze.com/acp-sheet-price-guide-2025" }
    ]
  };

  const acpTypes = [
    { type: "PE Grade ACP (3mm)", priceRange: "Rs 80–130/sq ft", core: "Polyester core", bestFor: "Interior partitions, signage" },
    { type: "FR Grade ACP (4mm)", priceRange: "Rs 130–180/sq ft", core: "Mineral-filled FR core", bestFor: "Exterior facade, compliant buildings" },
    { type: "PVDF Grade ACP (4mm)", priceRange: "Rs 160–220/sq ft", core: "PVDF coating, FR core", bestFor: "Premium exteriors, coastal areas" },
    { type: "Mirror / Metallic Finish", priceRange: "Rs 180–250/sq ft", core: "Brushed / mirror aluminium skin", bestFor: "Feature walls, luxury exteriors" },
    { type: "Wood Finish ACP", priceRange: "Rs 160–230/sq ft", core: "Digital print wood grain", bestFor: "Hospitality, residential exteriors" },
    { type: "Carbon / Stone Finish", priceRange: "Rs 170–240/sq ft", core: "Textured print skin", bestFor: "Modern commercial facades" },
    { type: "High-Gloss Solid Colour", priceRange: "Rs 140–200/sq ft", core: "PVDF high-gloss coating", bestFor: "Retail, showrooms, offices" },
    { type: "Nano PVDF / Spectra", priceRange: "Rs 200–280/sq ft", core: "Nano ceramic PVDF coating", bestFor: "Landmark buildings, sea-facing facades" },
    { type: "Alucobond / Premium Import", priceRange: "Rs 250–380/sq ft", core: "Swiss/German PVDF coat", bestFor: "Five-star, institutional projects" },
    { type: "Installed Cost (Labour + Frame)", priceRange: "Rs 120–200/sq ft extra", core: "Subframe + brackets + labour", bestFor: "Turnkey facade supply & install" },
  ];

  const features = [
    "All 10 ACP types covered",
    "FR-grade compliant supply",
    "PVDF & Nano coating options",
    "Transparent price breakdowns",
    "Installed cost estimates",
    "Free site visit & quotation",
  ];

  return (
    <Layout darkHero>
      <SEO
        title="ACP Sheet Price Guide 2025 | All Types & Grades – Fine Glaze"
        description="Complete ACP sheet price guide India 2025. PVDF, PE, FR-grade, mirror, wood finish ACP pricing per sq ft. Supply & install rates. Get a free quote from Fine Glaze, Pune."
        canonical="https://fineglaze.com/acp-sheet-price-guide-2025"
        keywords="ACP sheet price 2025, ACP panel cost India, PVDF ACP price per sq ft, FR grade ACP cost, aluminium composite panel price India, ACP cladding price Pune Mumbai"
        ogImage="https://images.unsplash.com/photo-1486325212027-8081e485255e"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* HERO */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              ACP Sheet Price Guide{" "}
              <span className="text-gradient-gold">2025</span>
            </h1>
            <p className="text-lg text-white/80 mb-8">
              Planning an ACP cladding project? This guide covers all ACP types — PE, FR, PVDF, mirror, wood, and premium imports — with real 2025 pricing ranges based on Fine Glaze's supply and installation experience across Pune, Mumbai, and Maharashtra.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link to="/contact">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                  Get Free Quote
                </Button>
              </Link>
              <Link to="/acp-aluminium-cladding">
                <Button size="lg" variant="outline">
                  ACP Cladding Services
                </Button>
              </Link>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1486325212027-8081e485255e"
            alt="ACP sheet price guide 2025 aluminium composite panel cladding India Fine Glaze"
            className="rounded-xl shadow-2xl object-cover h-[420px] w-full"
            loading="eager"
            width="600"
            height="420"
          />
        </div>
      </section>

      {/* PRICE TABLE */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl space-y-6">
          <h2 className="text-3xl font-bold">ACP Sheet Price List 2025 — All Types</h2>
          <p className="text-muted-foreground">
            Prices are indicative supply-only rates per sq ft (material cost). Installed rates including subframe, brackets, and labour are typically Rs 120–200/sq ft higher depending on design complexity and building height. All prices are exclusive of GST.
          </p>
          <div className="overflow-x-auto mt-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-3 text-left font-semibold">ACP Type</th>
                  <th className="border border-border p-3 text-left font-semibold">Price Range (Supply Only)</th>
                  <th className="border border-border p-3 text-left font-semibold">Core / Coating</th>
                  <th className="border border-border p-3 text-left font-semibold">Best For</th>
                </tr>
              </thead>
              <tbody>
                {acpTypes.map((row, i) => (
                  <tr key={row.type} className={i % 2 === 1 ? "bg-muted/30" : ""}>
                    <td className="border border-border p-3 font-medium">{row.type}</td>
                    <td className="border border-border p-3 text-amber-700 font-semibold">{row.priceRange}</td>
                    <td className="border border-border p-3 text-muted-foreground">{row.core}</td>
                    <td className="border border-border p-3 text-muted-foreground">{row.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* FACTORS */}
          <h2 className="text-3xl font-bold mt-12">What Affects ACP Sheet Price?</h2>
          <ul className="list-disc list-inside text-muted-foreground space-y-3 mt-4">
            <li><strong>Grade & coating:</strong> PVDF costs 40–60% more than PE grade but lasts 3–4× longer outdoors. For any external facade, PVDF-FR is the recommended minimum.</li>
            <li><strong>Thickness:</strong> 3mm PE is cheapest for interiors. 4mm FR and 6mm are required for exterior facades above certain heights under NBC 2016 norms.</li>
            <li><strong>Finish type:</strong> Standard solid colours are cheapest. Digital-print wood, stone, and carbon finishes command a 15–30% premium. Mirror/brushed finishes add 20–40%.</li>
            <li><strong>Brand:</strong> Premium international brands (Alucobond, Reynobond) cost 2–3× more than domestic alternatives (Viva, Aludecor) but carry longer warranties and tighter QC.</li>
            <li><strong>Panel size:</strong> Custom oversized panels (above 1500×4000mm) carry a fabrication surcharge of 10–20%.</li>
            <li><strong>Order quantity:</strong> Large orders (500 sq m+) qualify for bulk pricing that can reduce material cost by 8–15%.</li>
          </ul>

          {/* PE VS PVDF */}
          <h2 className="text-3xl font-bold mt-12">PE vs FR vs PVDF — Which Grade Should You Choose?</h2>
          <div className="overflow-x-auto mt-4">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-3 text-left font-semibold">Parameter</th>
                  <th className="border border-border p-3 text-left font-semibold">PE Grade</th>
                  <th className="border border-border p-3 text-left font-semibold">FR Grade</th>
                  <th className="border border-border p-3 text-left font-semibold">PVDF Grade</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Use", "Interior only", "Exterior facades", "Premium exteriors"],
                  ["Fire Rating", "Non-rated", "Class B / FR core", "Class A / FR core"],
                  ["UV Resistance", "Poor (fades 3–5 yrs)", "Moderate", "Excellent (15–25 yrs)"],
                  ["Weather Resistance", "Low", "Good", "Excellent"],
                  ["Colour Retention", "Moderate", "Good", "Superior"],
                  ["Typical Warranty", "1–2 years", "5–10 years", "10–20 years"],
                  ["NBC 2016 Compliance", "❌ Not for exteriors", "✅ For buildings >15m", "✅ Recommended"],
                ].map(([param, pe, fr, pvdf], i) => (
                  <tr key={param} className={i % 2 === 1 ? "bg-muted/30" : ""}>
                    <td className="border border-border p-3 font-medium">{param}</td>
                    <td className="border border-border p-3 text-muted-foreground">{pe}</td>
                    <td className="border border-border p-3 text-muted-foreground">{fr}</td>
                    <td className="border border-border p-3 text-muted-foreground">{pvdf}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* PRO TIPS */}
          <h2 className="text-3xl font-bold mt-12">Pro Tips for ACP Procurement</h2>
          <ul className="list-disc list-inside text-muted-foreground space-y-3 mt-4">
            <li><strong>Always ask for a test certificate:</strong> Insist on the manufacturer's fire rating certificate and coating test report before finalising any supplier.</li>
            <li><strong>Factor in wastage:</strong> Add 10–15% wastage on cut-to-size orders, especially for complex facades with reveal joints and corner details.</li>
            <li><strong>Don't undersize the subframe:</strong> A quality GI or aluminium subframe is as important as the panel itself. Cutting corners on fixings leads to panel flutter and leakage.</li>
            <li><strong>Get a turnkey quote:</strong> Compare supply + install quotes rather than material-only, as installation quality varies significantly between contractors.</li>
          </ul>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-10 text-center">Why Choose Fine Glaze for ACP Cladding?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((f) => (
              <div key={f} className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-amber-600 shrink-0" />
                <span className="text-muted-foreground">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "What is the price of ACP sheet in India in 2025?",
                a: "ACP sheet prices in India in 2025 range from Rs 80–130/sq ft for PE grade to Rs 160–220/sq ft for PVDF grade and Rs 250–380/sq ft for premium imported brands like Alucobond. Installed rates are Rs 120–200/sq ft higher.",
              },
              {
                q: "Which ACP brand is best in India?",
                a: "Top ACP brands in India include Alubond, Viva, Aludecor, Eurobond, and Reynolds. For premium international quality, Alucobond and Reynobond are unmatched but cost significantly more. Fine Glaze recommends Viva or Aludecor PVDF-FR for most commercial projects.",
              },
              {
                q: "What is the difference between PE and PVDF ACP?",
                a: "PE (Polyester) ACP is suitable for interiors and low-budget external use — it fades and chalks within 3–5 years outdoors. PVDF (Polyvinylidene Fluoride) ACP has superior UV resistance and colour fastness, retaining its finish for 15–25 years. Always use PVDF for external applications.",
              },
              {
                q: "What is FR grade ACP?",
                a: "FR (Fire-Retardant) grade ACP has a mineral-filled core that limits flame spread. NBC 2016 mandates FR or better grade panels for facades on buildings above 15 metres. Fine Glaze supplies only FR or PVDF-FR grade panels for all exterior projects.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="border border-border rounded-lg p-6">
                <h3 className="font-semibold text-base mb-2">{q}</h3>
                <p className="text-muted-foreground text-sm">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
