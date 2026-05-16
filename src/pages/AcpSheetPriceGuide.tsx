import SEO from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle2, ArrowRight, ShieldCheck, Star, AlertTriangle, TrendingUp, Layers } from "lucide-react";
import { Link } from "react-router-dom";

const AcpSheetPriceGuide = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "ACP Sheet Price Guide 2025: All Types, Brands & Costs in India",
    "description": "Complete 2025 price guide for ACP (Aluminium Composite Panels) in India — all types, brands, fire ratings, and sq ft costs. Updated market rates for Aludecor, Viva ACP, Alucobond, and more.",
    "datePublished": "2025-01-01",
    "dateModified": "2025-05-01",
    "author": { "@type": "Organization", "name": "Fine Glaze" },
    "publisher": {
      "@type": "Organization",
      "name": "Fine Glaze",
      "logo": { "@type": "ImageObject", "url": "https://fineglaze.com/Logofg.webp" }
    },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://fineglaze.com/acp-sheet-price-guide-2025" }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the price of ACP sheet per sq ft in India in 2025?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ACP sheet prices in India in 2025 range from ₹55–₹120/sq ft for basic PE core (interior grade) up to ₹200–₹500/sq ft for premium 6mm heavy duty or A2 non-combustible panels. Standard 4mm PE exterior panels cost ₹70–₹130/sq ft while FR B1 fire-rated panels cost ₹140–₹220/sq ft. Branded panels like Aludecor range from ₹72–₹220/sq ft and Alucobond from ₹120–₹300+/sq ft."
        }
      },
      {
        "@type": "Question",
        "name": "Which ACP sheet is best for external facades above 15 metres?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For buildings above 15 metres, FR B1 fire-rated or A2 non-combustible ACP panels are mandatory under NBC 2016 fire safety norms. A2 Non-Combustible panels (₹200–₹320/sq ft) are required for high-rise towers, hospitals, and airports. FR B1 panels (₹140–₹220/sq ft) work for commercial facades under 15m."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between PVDF and PE coated ACP sheets?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "PVDF (Polyvinylidene Fluoride / Kynar 500) coating provides 20+ year colour retention, superior UV and weather resistance, and self-cleaning properties. PE (Polyester) coating is cheaper but fades in 5–10 years outdoors. For external facades in India's climate, PVDF coating is strongly recommended for long-term performance."
        }
      },
      {
        "@type": "Question",
        "name": "Which ACP brand is best in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Aludecor is India's #1 ACP brand with the widest range of PVDF and FR panels (₹72–₹220/sq ft). Viva ACP offers 500+ designs at ₹70–₹320/sq ft. Alucobond (Swiss) is the international premium standard used for landmark facades at ₹120–₹300+/sq ft. Choice depends on budget, fire rating requirement, and finish preference."
        }
      },
      {
        "@type": "Question",
        "name": "Does ACP sheet price include installation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ACP sheet prices listed are typically supply-only rates for the panel material. Full installed cost (including aluminium substructure, fabrication, and installation labour) is typically 1.5–2.5× the material cost depending on project complexity, floor height, and design intricacy. Always get separate quotes for supply-only vs supply+install."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com" },
      { "@type": "ListItem", "position": 2, "name": "ACP Cladding", "item": "https://fineglaze.com/acp-aluminium-cladding" },
      { "@type": "ListItem", "position": 3, "name": "ACP Sheet Price Guide 2025", "item": "https://fineglaze.com/acp-sheet-price-guide-2025" }
    ]
  };

  const acpTypes = [
    {
      n: 1,
      name: "Basic PE Core (Interior)",
      spec: "3mm · Polyethylene core",
      price: "₹55 – ₹120 / sq.ft",
      bestFor: "Interiors, signage, low-rise",
      note: "Not fire-safe for external use above ground floor",
      rec: false,
      warning: true,
      img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    },
    {
      n: 2,
      name: "Standard PE Core (Exterior)",
      spec: "4mm · Polyethylene core",
      price: "₹70 – ₹130 / sq.ft",
      bestFor: "Shopfronts, showrooms, low-rise cladding",
      note: "Polyester coated · 10–12 year outdoor life",
      rec: false,
      warning: false,
      img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
    },
    {
      n: 3,
      name: "Fire Rated FR B1 Core",
      spec: "4mm · Mineral-filled FR core",
      price: "₹140 – ₹220 / sq.ft",
      bestFor: "Buildings under 15m, commercial facades",
      note: "NBC 2016 compliant · PVDF coating · 20+ yr life",
      rec: true,
      warning: false,
      img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&q=80",
    },
    {
      n: 4,
      name: "A2+ Non-Combustible (High Rise)",
      spec: "4mm · A2 mineral core",
      price: "₹200 – ₹320 / sq.ft",
      bestFor: "High-rise above 15m, hospitals, airports",
      note: "Highest fire safety · Mandatory for critical buildings",
      rec: false,
      warning: false,
      img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80",
    },
    {
      n: 5,
      name: "Premium 6mm Heavy Duty",
      spec: "6mm · FR or PE core",
      price: "₹173 – ₹500 / sq.ft",
      bestFor: "High-traffic areas, extra rigidity needed",
      note: "Maximum durability · Premium finish options",
      rec: false,
      warning: false,
      img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    },
  ];

  const brandTypes = [
    {
      n: 6,
      name: "Aludecor (India's #1)",
      spec: "3–4mm · FR & PE range",
      price: "₹72 – ₹220 / sq.ft",
      bestFor: "Corporate IT parks, premium commercial",
      note: "FireWall A2 series · Weather + UV resistant",
      img: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=600&q=80",
    },
    {
      n: 7,
      name: "Viva ACP",
      spec: "3–4mm · 500+ designs",
      price: "₹70 – ₹320 / sq.ft",
      bestFor: "Facades, interiors, feature walls",
      note: "25+ series · Glossy, wood, stone, metallic finishes",
      img: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=600&q=80",
    },
    {
      n: 8,
      name: "Alucobond (International)",
      spec: "4mm · Swiss benchmark brand",
      price: "₹120 – ₹300+ / sq.ft",
      bestFor: "Airports, 5-star hotels, landmark facades",
      note: "Gold standard · Used globally on iconic buildings",
      img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
    },
    {
      n: 9,
      name: "PVDF Coating (Premium)",
      spec: "4mm · Exterior grade",
      price: "₹100 – ₹250 / sq.ft",
      bestFor: "All external facades, high sun exposure",
      note: "PVDF = 20+ yr colour retention vs 10yr polyester",
      img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80",
    },
    {
      n: 10,
      name: "Wooden / Stone Finish (Specialty)",
      spec: "3–4mm · Decorative series",
      price: "₹80 – ₹180 / sq.ft",
      bestFor: "Feature walls, hotel lobbies, retail fronts",
      note: "Natural look · Modern material · Easy to maintain",
      img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80",
    },
  ];

  const comparisonData = [
    { type: "Basic PE",    fire: 1, durability: 2, cost: 5, use: "Interiors" },
    { type: "Standard PE", fire: 2, durability: 3, cost: 4, use: "Low-rise" },
    { type: "FR B1 Core",  fire: 4, durability: 4, cost: 3, use: "Commercial" },
    { type: "A2 Non-Comb", fire: 5, durability: 5, cost: 2, use: "High-rise" },
    { type: "Aludecor",    fire: 4, durability: 5, cost: 3, use: "IT Parks" },
    { type: "Alucobond",   fire: 5, durability: 5, cost: 1, use: "Premium" },
  ];

  const StarRating = ({ count, max = 5 }: { count: number; max?: number }) => (
    <span className="flex gap-0.5">
      {Array.from({ length: max }).map((_, i) => (
        <Star
          key={i}
          size={11}
          className={i < count ? "text-amber-500 fill-amber-500" : "text-slate-300 fill-slate-100"}
        />
      ))}
    </span>
  );

  return (
    <Layout darkHero>
      <SEO
        title="ACP Sheet Price Guide 2025 — All Types, Brands & Cost per Sq Ft in India | Fine Glaze"
        description="Complete ACP sheet price guide for India 2025. All types: PE core, FR B1, A2 non-combustible, PVDF. Brands: Aludecor, Viva, Alucobond. Prices from ₹55 to ₹500/sq ft. Updated market rates."
        canonical="https://fineglaze.com/acp-sheet-price-guide-2025"
        keywords="ACP sheet price 2025 India, ACP sheet rate per sq ft, Aludecor price list, FR grade ACP cost, A2 ACP panel price, PVDF ACP price, Alucobond price India, ACP cladding cost per sq ft 2025, aluminium composite panel price India"
        ogImage="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80"
        schema={[articleSchema, faqSchema, breadcrumbSchema]}
      />

      {/* ── HERO ── */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=80"
            alt="Modern ACP facade building — Fine Glaze ACP Sheet Price Guide 2025"
            className="w-full h-full object-cover brightness-40"
            loading="eager"
            fetchPriority="high"
            width="1400"
            height="933"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        </div>
        <div className="relative z-10 container text-center text-white px-4 max-w-4xl">
          <div className="inline-block px-4 py-1.5 border border-amber-400/40 rounded-full bg-amber-600/20 backdrop-blur-md text-sm font-medium tracking-wide text-amber-300 mb-5">
            UPDATED — MAY 2025
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight leading-tight">
            ACP Sheet <span className="text-gradient-gold">Price Guide</span> 2025
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto mb-3 font-light leading-relaxed">
            The right panel. The right core. The right price.
          </p>
          <p className="text-slate-400 text-sm mb-8">
            All ACP types · All brands · Real 2025 market rates · Fire rating guide
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-base px-8 gap-2">
                Get Free Quote <ArrowRight size={15} />
              </Button>
            </Link>
            <a href="#price-table">
              <Button variant="outline" size="lg" className="text-base px-8 border-white/40 text-white hover:bg-white/10">
                See Price Table
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <section className="py-5 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            {[
              { value: "₹55+",     label: "Starting Price / sq.ft" },
              { value: "10 Types", label: "ACP Variants Covered" },
              { value: "PVDF",     label: "20-yr Coating Warranty" },
              { value: "NBC 2016", label: "Fire Safety Compliant" },
              { value: "500+",     label: "Colour Options" },
            ].map((s) => (
              <div key={s.label} className="text-white">
                <p className="text-lg font-extrabold text-amber-400">{s.value}</p>
                <p className="text-xs text-slate-400 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="py-14 bg-white">
        <div className="container px-4 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-slate-900">What Determines ACP Sheet Price?</h2>
              <p className="text-slate-600 leading-relaxed">
                Aluminium Composite Panel (ACP) prices in India vary widely — from <strong>₹55/sq.ft for basic interior-grade</strong> panels
                to <strong>₹500+/sq.ft for premium 6mm fire-rated</strong> or international branded panels.
              </p>
              <p className="text-slate-600 leading-relaxed">
                The price depends on four key factors: <strong>core type</strong> (PE vs FR vs A2 non-combustible),
                <strong> coating type</strong> (PVDF vs Polyester), <strong>panel thickness</strong> (3mm / 4mm / 6mm),
                and <strong>brand</strong> (Aludecor, Viva, Alucobond, etc.).
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2">
                {["Core type (PE / FR / A2)", "Coating (PVDF / Polyester)", "Thickness (3mm / 4mm / 6mm)", "Brand (Aludecor / Viva / Alucobond)", "Fire rating requirement", "Quantity & project size"].map(item => (
                  <div key={item} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle2 size={14} className="text-amber-600 mt-0.5 shrink-0" />{item}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80"
                alt="ACP panel installation on commercial building facade"
                className="w-full h-72 object-cover"
                loading="lazy"
                width="700"
                height="467"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── KEY ICONS ── */}
      <section className="py-10 bg-slate-50 border-y border-slate-100">
        <div className="container px-4 max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <TrendingUp size={24} />, title: "Cost Guide", desc: "All 10 ACP types with 2025 market prices" },
              { icon: <ShieldCheck size={24} />, title: "Fire Rating", desc: "PE vs FR B1 vs A2 — which law applies to you" },
              { icon: <Layers size={24} />, title: "500+ Finishes", desc: "PVDF, PE, wood, stone, metallic options" },
              { icon: <Star size={24} />, title: "Brand Comparison", desc: "Aludecor, Viva, Alucobond rated side by side" },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 items-start">
                <div className="w-11 h-11 bg-amber-100 rounded-xl flex items-center justify-center text-amber-700 shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">{item.title}</p>
                  <p className="text-xs text-slate-500 mt-0.5 leading-snug">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICE TABLE ── */}
      <section id="price-table" className="py-20 bg-white">
        <div className="container px-4 max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-slate-900">ACP Types & 2025 Prices</h2>
          <p className="text-center text-slate-500 mb-12 max-w-xl mx-auto">
            Supply-only rates. Installed cost is typically 1.5–2.5× higher depending on substructure, height, and complexity.
          </p>

          {/* By Grade */}
          <h3 className="text-xl font-bold text-slate-800 mb-5 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-amber-500 rounded-full inline-block" />
            By Grade / Core Type
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {acpTypes.map((card) => (
              <div
                key={card.n}
                className={`rounded-xl border overflow-hidden shadow-sm hover:shadow-md transition-shadow ${card.rec ? "border-amber-300 ring-1 ring-amber-200" : "border-slate-200"}`}
              >
                <div className="relative h-44 overflow-hidden">
                  <img src={card.img} alt={card.name} className="w-full h-full object-cover" loading="lazy" width="600" height="400" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-2">
                    <span className={`text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center ${card.rec ? "bg-amber-500 text-white" : "bg-white/90 text-slate-800"}`}>
                      {card.n}
                    </span>
                    {card.rec && (
                      <span className="bg-amber-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                        RECOMMENDED
                      </span>
                    )}
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-slate-900 mb-1">{card.name}</h4>
                  <p className="text-xs text-slate-500 mb-3">{card.spec}</p>
                  <p className="text-xl font-extrabold text-amber-600 mb-3">{card.price}</p>
                  <div className="space-y-1.5 text-xs">
                    <p className="text-slate-700"><span className="font-semibold">Best For:</span> {card.bestFor}</p>
                    <div className={`flex items-start gap-1.5 ${card.warning ? "text-orange-600" : "text-slate-500"}`}>
                      {card.warning && <AlertTriangle size={12} className="mt-0.5 shrink-0" />}
                      <span>{card.note}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* By Brand */}
          <h3 className="text-xl font-bold text-slate-800 mb-5 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-amber-500 rounded-full inline-block" />
            By Brand
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {brandTypes.map((card) => (
              <div key={card.n} className="rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-44 overflow-hidden">
                  <img src={card.img} alt={card.name} className="w-full h-full object-cover" loading="lazy" width="600" height="400" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-xs font-bold w-6 h-6 rounded-full bg-white/90 text-slate-800 flex items-center justify-center">
                    {card.n}
                  </span>
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-slate-900 mb-1">{card.name}</h4>
                  <p className="text-xs text-slate-500 mb-3">{card.spec}</p>
                  <p className="text-xl font-extrabold text-amber-600 mb-3">{card.price}</p>
                  <div className="space-y-1.5 text-xs">
                    <p className="text-slate-700"><span className="font-semibold">Best For:</span> {card.bestFor}</p>
                    <p className="text-slate-500">{card.note}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section className="py-20 bg-slate-50">
        <div className="container px-4 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Comparison Table */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">ACP Comparison Guide</h2>
              <Card className="overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-amber-600 hover:bg-amber-600">
                      <TableHead className="text-white font-bold">ACP Type</TableHead>
                      <TableHead className="text-white font-bold text-center">Fire</TableHead>
                      <TableHead className="text-white font-bold text-center">Durability</TableHead>
                      <TableHead className="text-white font-bold text-center">Cost</TableHead>
                      <TableHead className="text-white font-bold">Best Use</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {comparisonData.map((row, i) => (
                      <TableRow key={row.type} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <TableCell className="font-semibold text-sm text-slate-800">{row.type}</TableCell>
                        <TableCell className="text-center"><StarRating count={row.fire} /></TableCell>
                        <TableCell className="text-center"><StarRating count={row.durability} /></TableCell>
                        <TableCell className="text-center"><StarRating count={row.cost} /></TableCell>
                        <TableCell className="text-sm text-slate-600">{row.use}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
              <p className="text-xs text-slate-400 mt-2">★ = Low rating   ★★★★★ = Excellent</p>
            </div>

            {/* How to Choose */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">How to Choose the Right ACP?</h2>
              <div className="space-y-4">
                {[
                  {
                    icon: <ShieldCheck size={18} className="text-amber-600" />,
                    label: "FIRE SAFETY FIRST",
                    detail: "Above 15m? Always use FR B1 or A2 core. It's the law under NBC 2016. Non-compliance can void insurance and result in project stoppage.",
                  },
                  {
                    icon: <TrendingUp size={18} className="text-amber-600" />,
                    label: "OUTDOOR EXPOSURE",
                    detail: "External facades need PVDF coating for 20+ yr colour life. Polyester coating fades in 5–7 years in India's UV and monsoon climate.",
                  },
                  {
                    icon: <Layers size={18} className="text-amber-600" />,
                    label: "BUILDING TYPE",
                    detail: "IT parks → Aludecor or Viva FR · Hospital/Airport → A2 core · Landmark facade → Alucobond international standard.",
                  },
                  {
                    icon: <Star size={18} className="text-amber-600" />,
                    label: "BUDGET",
                    detail: "Balance material cost vs installation + lifecycle cost. Cheap PE panels cost more in re-coating in 10 years. FR PVDF panels pay off over 20 years.",
                  },
                  {
                    icon: <CheckCircle2 size={18} className="text-amber-600" />,
                    label: "AESTHETICS",
                    detail: "500+ shades available — wood, stone, metallic, matte, gloss, mirror. Choose finish after site visit for accurate colour rendering in sunlight.",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex gap-3 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                    <div className="w-9 h-9 bg-amber-50 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-bold text-amber-700 text-xs tracking-wide mb-1">{item.label}</p>
                      <p className="text-slate-700 text-sm leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ACP CONFIGURATIONS ── */}
      <section className="py-16 bg-white">
        <div className="container px-4 max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-2 text-center">Common ACP Configurations</h2>
          <p className="text-center text-slate-500 mb-10 text-sm">Standard build-ups used by Fine Glaze for different project types</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: "Standard Exterior",    detail: "4mm PE Core + Polyester coating",  price: "₹70–130/sq.ft", use: "Shopfronts, showrooms" },
              { title: "Commercial Facade",    detail: "4mm FR B1 + PVDF coating",          price: "₹140–220/sq.ft", use: "IT parks, malls" },
              { title: "High-Rise / Hospital", detail: "4mm A2 Core + PVDF coating",        price: "₹200–320/sq.ft", use: "Towers, hospitals, airports" },
              { title: "Premium Landmark",     detail: "6mm Alucobond + PVDF coating",      price: "₹300–500/sq.ft", use: "5-star hotels, HQ buildings" },
            ].map((cfg) => (
              <div key={cfg.title} className="p-5 bg-slate-50 rounded-xl border-l-4 border-amber-500">
                <h4 className="font-bold text-slate-900 mb-1 text-sm">{cfg.title}</h4>
                <p className="text-slate-600 text-xs mb-2">{cfg.detail}</p>
                <p className="text-amber-600 font-extrabold text-base mb-1">{cfg.price}</p>
                <p className="text-xs text-slate-400">{cfg.use}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRO TIPS ── */}
      <section className="py-14 bg-amber-50 border-y border-amber-100">
        <div className="container px-4 max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
            <span className="text-amber-600">💡</span> Pro Buyer Tips — Before You Order ACP Sheets
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Always use FR core for external facades above 15m — it's the law (NBC 2016). Non-compliance = project halt.",
              "PVDF coating lasts 2× longer than polyester outdoors. The extra ₹20–40/sq.ft pays off in 10 years.",
              "Get BIS/fire test certificates before ordering any FR or A2 panel. Ask for batch test reports.",
              "Always get supply-only AND supply+install quotes separately to benchmark contractor margins.",
              "Proper sub-frame (aluminium sections) and sealant quality is as important as the ACP panel itself.",
              "Request physical colour sample boards — screen colours look different in direct sunlight.",
            ].map((tip, i) => (
              <div key={i} className="flex gap-3 p-4 bg-white rounded-xl border border-amber-100 shadow-sm">
                <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <p className="text-slate-700 text-sm leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY FINE GLAZE ── */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container px-4 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Why Fine Glaze for ACP?</h2>
              <div className="space-y-3">
                {[
                  { label: "In-house Fabrication",    detail: "Own manufacturing facility in Pune — faster delivery, tighter QC" },
                  { label: "Best Vendor 2024",         detail: "Awarded by Embassy REIT for flawless ACP facade work at Embassy 247" },
                  { label: "Zero Safety Incidents",    detail: "Certified installation teams with full safety protocol compliance" },
                  { label: "Trusted by Leaders",       detail: "LTIMindtree · L&T · Leela Group · Peninsula Land" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-3">
                    <CheckCircle2 size={18} className="text-amber-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-white text-sm">{item.label}</p>
                      <p className="text-slate-400 text-xs mt-0.5">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-7">
                <Link to="/contact">
                  <Button className="bg-amber-600 hover:bg-amber-700 gap-2">
                    Get a Free ACP Quote <ArrowRight size={15} />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=700&q=80"
                alt="Fine Glaze ACP cladding project — commercial building facade"
                className="w-full h-72 object-cover"
                loading="lazy"
                width="700"
                height="467"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-white">
        <div className="container px-4 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">Frequently Asked Questions</h2>
          <p className="text-center text-slate-500 mb-10">ACP sheet prices, fire ratings, and buying guide for India 2025</p>
          <div className="space-y-4">
            {[
              {
                q: "What is the price of ACP sheet per sq ft in India in 2025?",
                a: "ACP sheet prices in 2025 range from ₹55–₹120/sq.ft for basic PE core (interior) to ₹200–₹500+/sq.ft for A2 non-combustible or premium 6mm heavy-duty panels. Standard 4mm exterior PE panels cost ₹70–₹130/sq.ft. These are supply-only rates; installed cost including substructure is 1.5–2.5× higher.",
              },
              {
                q: "Which ACP sheet is best for external facades above 15 metres?",
                a: "FR B1 or A2 non-combustible ACP is mandatory under NBC 2016 for buildings above 15m. A2 panels (₹200–₹320/sq.ft) are required for high-rise towers, hospitals, and airports. FR B1 (₹140–₹220/sq.ft) is suitable for commercial facades under 15m height.",
              },
              {
                q: "What is the difference between PVDF and PE coated ACP?",
                a: "PVDF (Kynar 500) coating provides 20+ year colour retention and UV resistance. PE (Polyester) is cheaper but fades in 5–7 years outdoors. For all external Indian facades, PVDF coating is strongly recommended to avoid costly re-painting or panel replacement.",
              },
              {
                q: "Which ACP brand is best in India?",
                a: "Aludecor is India's #1 with the widest range of FR and PE panels at ₹72–₹220/sq.ft. Viva ACP offers 500+ designs at ₹70–₹320/sq.ft. Alucobond (Swiss) is the global premium standard at ₹120–₹300+/sq.ft, typically chosen for landmark or prestigious facades.",
              },
              {
                q: "Does the ACP sheet price include installation?",
                a: "No. Listed ACP prices are supply-only (panel material only). Installed cost includes the aluminium substructure, fabrication, sealant, and labour — typically adding 50–150% to the material cost. Always compare supply-only vs supply+install quotes separately when budgeting a project.",
              },
            ].map((faq, i) => (
              <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                <h3 className="font-bold text-slate-900 mb-2 text-sm">{faq.q}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTERNAL LINKS ── */}
      <section className="py-12 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-xl font-bold text-slate-800 mb-5">Related ACP & Facade Resources</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { title: "ACP Cladding Services",       href: "/acp-aluminium-cladding",    desc: "Full ACP installation service by Fine Glaze" },
              { title: "ACP Cladding in Pune",        href: "/acp-cladding-pune",         desc: "Local ACP contractor for Pune projects" },
              { title: "PVDF vs Powder Coating",      href: "/pvdf-vs-powder-coating-aluminium", desc: "Which coating is better for facades?" },
              { title: "Aluminium vs ACP Cladding",   href: "/aluminium-vs-acp-cladding", desc: "Side-by-side comparison for your project" },
              { title: "Curtain Wall Cost Guide",     href: "/curtain-wall-cost-guide",   desc: "Pricing guide for curtain wall systems" },
              { title: "Facade Maintenance AMC",      href: "/facade-amc-guide",          desc: "Keep your ACP facade in top condition" },
            ].map((link) => (
              <Link key={link.href} to={link.href} className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white">
                <ArrowRight size={15} className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                <div>
                  <p className="font-semibold text-slate-800 text-sm">{link.title}</p>
                  <p className="text-xs text-slate-500">{link.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default AcpSheetPriceGuide;
