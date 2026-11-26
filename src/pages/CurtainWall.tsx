import { useState } from "react";
import { RelatedProjects } from "@/components/RelatedProjects";
import { Link } from "react-router-dom";
import { ServiceQuickOverview } from "@/components/service/ServiceQuickOverview";
import {
  ArrowRight,
  MapPin,
  ChevronDown,
  Shield,
  Clock,
  Award,
  Wrench,
  CheckCircle2,
  Phone,
  Mail,
  FileText,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import SEO from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { Button } from "@/components/ui/button";

/* ─── Reusable fade-in wrapper ─── */
function FadeIn({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ── Accordion FAQ item ── */
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-stone-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left group"
      >
        <span className="text-[15px] font-semibold text-stone-800 pr-8 group-hover:text-amber-700 transition-colors">
          {q}
        </span>
        <ChevronDown
          size={18}
          className={cn(
            "text-stone-400 shrink-0 transition-transform duration-300",
            open && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          open ? "max-h-96 pb-4" : "max-h-0"
        )}
      >
        <p className="text-stone-500 leading-relaxed text-sm">{a}</p>
      </div>
    </div>
  );
}

/* ── Images ── */
const IMG: Record<string, string> = {
  hero: "/curtain-wall.webp",
  unitized: "/structural-glazing.webp",
  stick: "/curtain-wall.webp",
  semi: "/spider-glazing.webp",
  point: "/Glass installation.webp",
  process: "/projects/embassy-techzone-41-1.webp",
};

/* ── System data ── */
const SYSTEMS = [
  {
    num: "01",
    title: "Unitized Curtain Wall",
    desc: "Factory-assembled panels shipped ready to install. Fastest method — ideal for high-rises. Each panel interlocks with the next for a seamless, watertight envelope.",
    glass: "6063-T6 aluminium",
    wind: "Sized to project wind load",
    bestFor: "High-rises, IT parks",
    price: "Quoted on drawings",
    img: "unitized",
  },
  {
    num: "02",
    title: "Stick System Curtain Wall",
    desc: "Aluminium mullions and transoms assembled piece-by-piece on site. Cost-effective for low-to-mid rise buildings with varying floor heights.",
    glass: "6063-T6 aluminium",
    wind: "Sized to project wind load",
    bestFor: "Offices, showrooms",
    price: "Quoted on drawings",
    img: "stick",
  },
  {
    num: "03",
    title: "Semi-Unitized System",
    desc: "Mullions fixed on-site, pre-glazed panels slotted in. Combines unitized speed with stick-system flexibility — great for renovation projects.",
    glass: "6063-T6 aluminium",
    wind: "Sized to project wind load",
    bestFor: "Renovations, mid-rises",
    price: "Quoted on drawings",
    img: "semi",
  },
  {
    num: "04",
    title: "Point-Supported Glass Wall",
    desc: "Minimal structure with stainless-steel point fixings and structural glass fins. Maximum transparency for atriums, lobbies, and feature facades.",
    glass: "SS 316 fittings",
    wind: "Structural glass fins",
    bestFor: "Lobbies, atriums",
    price: "Quoted on drawings",
    img: "point",
  },
];

const STEPS = [
  { num: "01", title: "Site Survey", desc: "Measurement, access study and scope freeze" },
  { num: "02", title: "Engineering", desc: "In-house shop drawings and wind-load engineering check" },
  { num: "03", title: "Fabrication", desc: "Cutting, assembly and finishing at our Pisoli, Pune unit" },
  { num: "04", title: "Installation", desc: "Sequenced erection with line, level and plumb checks" },
];

export default function CurtainWall() {
  const [activeSystem, setActiveSystem] = useState(0);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Curtain Wall Systems",
    serviceType: "Curtain Wall Manufacturing & Installation",
    provider: {
      "@type": "LocalBusiness",
      name: "Fine Glaze",
      "@id": "https://fineglaze.com",
      url: "https://fineglaze.com",
      telephone: "+91-8369233566",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pune",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
    },
    areaServed: [
      { "@type": "City", name: "Pune" },
      { "@type": "City", name: "Mumbai" },
      { "@type": "City", name: "Navi Mumbai" },
    ],
    description: "Curtain wall contractor in Pune, Mumbai and across India. Unitized, stick and semi-unitized glass curtain wall systems.",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fineglaze.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://fineglaze.com/services" },
      { "@type": "ListItem", position: 3, name: "Curtain Wall Systems", item: "https://fineglaze.com/curtain-wall-systems" },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who is Fine Glaze as a curtain wall contractor?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Fine Glaze is a curtain wall contractor based in Pune and Mumbai, taking projects across India. We prepare shop drawings in-house, fabricate at our own Pisoli unit and install curtain walls for commercial and residential buildings.",
        },
      },
      {
        "@type": "Question",
        name: "What is the advantage of a unitized curtain wall system?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Unitized curtain walls are factory-assembled and pre-glazed in controlled conditions, which shortens on-site erection and improves quality control. They suit tall buildings and tight programmes, subject to design and access.",
        },
      },
      {
        "@type": "Question",
        name: "What is the typical curtain wall cost per sq ft in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Curtain wall cost depends on the system (stick, semi-unitized, unitized or spider), glass, height, wind load and access, so a reliable figure needs drawings. Fine Glaze prepares BOQ-based quotations.",
        },
      },
      {
        "@type": "Question",
        name: "How do I request a quotation for a commercial curtain wall project?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can request a quotation by uploading your project drawings or BOQ on our contact page, calling +91 8369233566, or emailing info@fineglaze.com. Our office hours are Monday to Saturday, 09:00 to 18:00.",
        },
      },
      {
        "@type": "Question",
        name: "Do you install structural glazing and ACP cladding alongside curtain walls?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Fine Glaze offers complete building envelope solutions including structural glazing, ACP aluminium cladding, glass railings, and glass skylights.",
        },
      },
    ],
  };

  const current = SYSTEMS[activeSystem];

  return (
    <Layout darkHero>
      <SEO
        title="Curtain Wall Contractor in Pune & Mumbai | Fine Glaze"
        description="Curtain wall contractor in Pune, Mumbai and across India. Unitized, stick and semi-unitized systems, in-house shop drawings, own Pune fabrication unit."
        canonical="https://fineglaze.com/curtain-wall-systems"
        keywords="Curtain wall manufacturers, curtain wall manufacturers Pune, curtain wall manufacturers Mumbai, unitized curtain wall, curtain wall cost, curtain wall systems"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* ════════════ HERO ════════════ */}
      <section className="relative h-screen overflow-hidden">
        <img
          src={IMG.hero}
          alt="Curtain wall manufacturers glass facade — Fine Glaze"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ animation: "sgZoom 20s ease-in-out infinite alternate" }}
          loading="eager"
        />
        <style>{`@keyframes sgZoom { from { transform: scale(1.0); } to { transform: scale(1.08); } }`}</style>

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.60) 0%, rgba(0,0,0,0.25) 30%, rgba(0,0,0,0.55) 65%, rgba(0,0,0,0.92) 100%)",
          }}
        />

        <div className="absolute inset-x-0 bottom-0 px-5 md:px-16 pb-10 md:pb-20 pt-24">
          <p
            className="text-amber-400 text-xs font-bold tracking-[0.4em] uppercase mb-5 animate-fade-in"
            style={{ animationDelay: "0.05s" }}
          >
            Fine Glaze · Pune & Mumbai
          </p>

          <h1
            className="font-extrabold text-white leading-tight tracking-tight animate-fade-in-up"
            style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)", animationDelay: "0.1s" }}
          >
            Curtain Wall<br />
            <span className="text-gradient-gold">Manufacturers</span><br />
            <span style={{ fontSize: "clamp(1.25rem, 2.5vw, 2rem)", fontWeight: 600, color: "rgba(255,255,255,0.85)" }}>
              Pune &amp; Mumbai.
            </span>
          </h1>

          <p
            className="mt-6 text-white/70 text-base md:text-lg max-w-xl leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            As curtain wall contractors based in Pune and Mumbai, Fine Glaze delivers engineered unitized, stick, and semi-unitized glass curtain wall systems for commercial towers, IT parks, and high-rise office developments.
          </p>

          <div
            className="mt-8 flex items-center gap-8 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Link
              to="/contact"
              className="text-white font-semibold text-base border-b border-amber-400 pb-0.5 hover:text-amber-400 transition-colors tracking-wide"
            >
              Request a Quotation
            </Link>
            <a
              href="tel:+918369233566"
              className="text-white/60 font-medium text-base hover:text-white transition-colors tracking-wide"
            >
              +91 83692 33566
            </a>
          </div>

          <div
            className="flex items-center gap-1.5 mt-4 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <span className="text-white/50 text-xs font-medium ml-0.5">
              Embassy REIT Best Vendor Performance 2024. 16 project records.
            </span>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 flex flex-col items-center gap-2 opacity-40">
          <span className="text-white text-[10px] uppercase tracking-[0.25em] rotate-90 mb-3">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
        </div>
      </section>

      {/* ════════════ MANUFACTURERS OVERVIEW ════════════ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6 md:px-16 max-w-4xl text-center">
          <FadeIn>
            <p className="text-amber-700 text-xs font-bold tracking-[0.3em] uppercase mb-4">
              Curtain Wall Fabrication &amp; Installation
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-stone-900 leading-snug mb-5">
              Curtain Wall Systems for Modern Architecture —{" "}
              <span className="text-stone-500">engineered for wind load, thermal performance & longevity.</span>
            </h2>
            <p className="text-stone-600 text-[15px] md:text-base leading-relaxed mb-6">
              Fine Glaze designs, fabricates and installs curtain wall building envelopes. We use aluminium extrusions from major Indian mills, DOWSIL structural silicone or approved equivalents, and double-glazed units (DGU) with Low-E coatings where the specification calls for them, in Pune, Mumbai and across India.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs font-medium text-stone-500">
              <span className="bg-stone-100 px-3 py-1.5 rounded-full">Own Fabrication Unit, Pune</span>
              <span className="bg-stone-100 px-3 py-1.5 rounded-full">Wind Load Engineering Check</span>
              <span className="bg-stone-100 px-3 py-1.5 rounded-full">DOWSIL Structural Silicone</span>
              <span className="bg-stone-100 px-3 py-1.5 rounded-full">Safety Glass Where Required</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ════════════ CONVERSION QUICK OVERVIEW ════════════ */}
      <ServiceQuickOverview
        serviceTitle="Curtain Wall Glazing Systems"
        whatWeProvide="Unitized panelized facades, semi-unitized & stick curtain walls. Includes in-house shop drawings, an engineering check against project wind load, fabrication, DGU Low-E glass integration, weather-seal installation and a site water penetration test."
        locationsServed={["Pune (Hinjewadi, Baner, Kharadi)", "Mumbai (BKC, Nariman Point, Lower Parel)", "Thane", "Navi Mumbai"]}
        bestProjectTypes={[
          "High-Rise Commercial Towers (10+ Storeys)",
          "Corporate IT Parks & Tech Campuses",
          "Mixed-Use Retail & Commercial Podiums",
          "Hospitality & Luxury Hotel Towers"
        ]}
        relevantProjects={[
          "Embassy 247 (Vikhroli, Mumbai)",
          "SSG Honesty (Panvel)",
          "LTIMindtree Mensa Campus (Navi Mumbai)"
        ]}
      />

      {/* ════════════ STATS ════════════ */}
      <section className="bg-stone-900 py-10">
        <div className="container mx-auto px-6 md:px-16">
          <FadeIn>
            <div className="grid grid-cols-3 gap-6 md:gap-0 md:divide-x md:divide-stone-700">
              {[
                { number: "16", label: "Project Records Documented" },
                { number: "40+", label: "Core Team" },
                { number: "2024", label: "Embassy REIT Best Vendor Performance" },
              ].map((s) => (
                <div key={s.label} className="text-center px-4">
                  <p className="text-2xl md:text-3xl font-bold text-white">{s.number}</p>
                  <p className="text-stone-500 text-[11px] uppercase tracking-widest mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ════════════ UNITIZED CURTAIN WALL DEEP-DIVE ════════════ */}
      <section className="py-16 md:py-20 bg-stone-900 text-white">
        <div className="container mx-auto px-6 md:px-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <p className="text-amber-400 text-xs font-bold tracking-[0.3em] uppercase mb-3">
                High-Rise Technology
              </p>
              <h2 className="text-2xl md:text-4xl font-bold mb-6 leading-tight">
                Unitized Curtain Wall Systems
              </h2>
              <p className="text-stone-300 text-sm md:text-base leading-relaxed mb-6">
                Unitized curtain wall systems consist of large pre-assembled, factory-glazed panels that are transported to the construction site and anchored directly to the building floor slab. This system is commonly chosen for tall commercial towers and IT parks.
              </p>
              <ul className="space-y-3 text-sm text-stone-300 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Faster On-Site Erection</strong> — Pre-fabricated modules reduce the work done at height.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Controlled Factory Quality</strong> — Structural silicone application and EPDM gasket sealing are executed in controlled indoor environments.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Superior Weather Tightness</strong> — Interlocking stack joints accommodate building movement and thermal expansion naturally.</span>
                </li>
              </ul>
              <Link to="/contact">
                <Button className="bg-amber-400 hover:bg-amber-500 text-stone-950 font-bold gap-2">
                  Request Unitized Quotation <ArrowRight size={16} />
                </Button>
              </Link>
            </FadeIn>

            <FadeIn delay={150}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-stone-800">
                <img
                  src={IMG.hero}
                  alt="Unitized curtain wall manufacturers — Fine Glaze"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-stone-900/90 backdrop-blur-md rounded-xl border border-stone-800">
                  <p className="text-amber-400 text-xs font-bold uppercase tracking-wider">Unitized Curtain Wall Specs</p>
                  <p className="text-white text-sm mt-1">6063-T6 Extrusions · 6mm + 12mm Argon + 6mm Low-E DGU · EPDM Gasket Seal</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ════════════ SYSTEMS TABBED ════════════ */}
      <section className="py-16 md:py-20 bg-stone-50">
        <div className="container mx-auto px-6 md:px-16">
          <FadeIn className="mb-10">
            <p className="text-amber-700 text-xs font-bold tracking-[0.3em] uppercase mb-3">
              Our Product Range
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              Curtain Wall Systems We Manufacture & Install
            </h2>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="flex flex-wrap gap-2 mb-8">
              {SYSTEMS.map((sys, i) => (
                <button
                  key={sys.num}
                  onClick={() => setActiveSystem(i)}
                  className={cn(
                    "px-4 py-2 text-sm font-medium transition-all duration-200",
                    activeSystem === i
                      ? "bg-stone-900 text-white"
                      : "bg-white text-stone-600 hover:bg-stone-100 border border-stone-200"
                  )}
                >
                  {sys.title}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-0 bg-white overflow-hidden" key={current.num}>
              <div className="relative h-[280px] md:h-[360px] overflow-hidden">
                <img
                  src={IMG[current.img]}
                  alt={`${current.title} — Curtain wall manufacturers Fine Glaze`}
                  className="w-full h-full object-cover transition-opacity duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-stone-900/80 text-white text-xs font-bold px-3 py-1.5 tracking-wider">
                  {current.num}
                </div>
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl font-bold text-stone-900 mb-3">{current.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-6">{current.desc}</p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-stone-50 p-3">
                    <p className="text-[10px] uppercase tracking-wider text-stone-400 mb-1">Frame</p>
                    <p className="text-sm font-semibold text-stone-800">{current.glass}</p>
                  </div>
                  <div className="bg-stone-50 p-3">
                    <p className="text-[10px] uppercase tracking-wider text-stone-400 mb-1">Wind Load</p>
                    <p className="text-sm font-semibold text-stone-800">{current.wind}</p>
                  </div>
                  <div className="bg-stone-50 p-3">
                    <p className="text-[10px] uppercase tracking-wider text-stone-400 mb-1">Best For</p>
                    <p className="text-sm font-semibold text-stone-800">{current.bestFor}</p>
                  </div>
                  <div className="bg-amber-50 p-3 border border-amber-200">
                    <p className="text-[10px] uppercase tracking-wider text-amber-600 mb-1">Pricing</p>
                    <p className="text-sm font-bold text-stone-900">{current.price}</p>
                  </div>
                </div>

                <Link to="/contact">
                  <Button size="sm" className="bg-stone-900 hover:bg-stone-800 text-white gap-2">
                    Book a call <ArrowRight size={14} />
                  </Button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>



      {/* ════════════ CURTAIN WALL COST SECTION ════════════ */}
      <section className="py-16 md:py-20 bg-stone-50">
        <div className="container mx-auto px-6 md:px-16 max-w-4xl">
          <FadeIn className="text-center mb-10">
            <p className="text-amber-700 text-xs font-bold tracking-[0.3em] uppercase mb-3">
              Cost & Rate Breakdown
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-2">
              Curtain Wall Cost Per Sq Ft in India (2026 Guide)
            </h2>
            <p className="text-stone-500 text-sm max-w-xl mx-auto">
              Transparent rate comparison based on project complexity, glass specifications, and installation methods across Maharashtra.
            </p>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden mb-8">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-stone-900 text-white">
                      <th className="py-3.5 px-6 text-xs font-bold uppercase tracking-wider">System Type</th>
                      <th className="py-3.5 px-6 text-xs font-bold uppercase tracking-wider">Specifications</th>
                      <th className="py-3.5 px-6 text-xs font-bold uppercase tracking-wider text-right">Pricing</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 text-sm">
                    {[
                      { system: "Unitized Curtain Wall", glass: "Factory pre-assembled aluminium, DGU Low-E, EPDM", price: "Quoted on drawings" },
                      { system: "Stick Curtain Wall System", glass: "On-site assembled mullions, 6mm / DGU glass", price: "Quoted on drawings" },
                      { system: "Semi-Unitized System", glass: "Pre-glazed shop units with site-fixed frames", price: "Quoted on drawings" },
                      { system: "Spider Point-Fixed System", glass: "Stainless steel fittings with laminated toughened glass", price: "Quoted on drawings" },
                    ].map((row) => (
                      <tr key={row.system} className="hover:bg-stone-50 transition-colors">
                        <td className="py-4 px-6 font-bold text-stone-900">{row.system}</td>
                        <td className="py-4 px-6 text-stone-500 text-xs">{row.glass}</td>
                        <td className="py-4 px-6 text-right font-bold text-amber-700">{row.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-center text-xs text-stone-400">
              Note: Cost depends on system, glass, height and access. Read our guide on <Link to="/blog/curtain-wall-cost-per-sq-ft-india-2026" className="text-amber-700 underline font-medium">what drives curtain wall cost</Link>.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ════════════ REQUEST A QUOTATION CTA ════════════ */}
      <section className="py-16 md:py-24 bg-stone-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-16 relative z-10 max-w-4xl text-center">
          <FadeIn>
            <span className="inline-block bg-amber-400/20 text-amber-400 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              Request a BOQ-Based Quotation
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
              Request a Curtain Wall Quotation
            </h2>
            <p className="text-stone-300 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Planning a commercial facade, office tower, or IT park in Pune, Mumbai, or Navi Mumbai? Send drawings and we will prepare a BOQ-based quotation with glass specification options. Our office hours are Monday to Saturday, 09:00 to 18:00.
            </p>

            <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-10">
              <a href="tel:+918369233566" className="flex items-center justify-center gap-3 p-4 bg-stone-800/80 hover:bg-stone-800 rounded-xl border border-stone-700 transition-colors">
                <Phone size={18} className="text-amber-400" />
                <span className="text-sm font-semibold">+91 83692 33566</span>
              </a>
              <a href="mailto:info@fineglaze.com" className="flex items-center justify-center gap-3 p-4 bg-stone-800/80 hover:bg-stone-800 rounded-xl border border-stone-700 transition-colors">
                <Mail size={18} className="text-amber-400" />
                <span className="text-sm font-semibold">info@fineglaze.com</span>
              </a>
              <Link to="/contact" className="flex items-center justify-center gap-3 p-4 bg-amber-400 hover:bg-amber-500 text-stone-950 font-bold rounded-xl transition-colors">
                <FileText size={18} />
                <span className="text-sm">Submit Project BOQ</span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ════════════ FAQ SECTION ════════════ */}
      <section className="py-16 md:py-20 bg-stone-50">
        <div className="container mx-auto px-6 md:px-16 max-w-3xl">
          <FadeIn className="mb-8">
            <p className="text-amber-700 text-xs font-bold tracking-[0.3em] uppercase mb-3">
              Frequently Asked Questions
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              Curtain Wall Manufacturers FAQ
            </h2>
          </FadeIn>

          <FadeIn delay={100}>
            <div>
              <FAQItem
                q="Who is Fine Glaze as a curtain wall contractor?"
                a="Fine Glaze is a curtain wall contractor based in Pune and Mumbai, taking projects across India. We prepare shop drawings in-house, fabricate at our own Pisoli unit and install curtain walls for commercial and residential buildings."
              />
              <FAQItem
                q="What is the advantage of a unitized curtain wall system?"
                a="Unitized curtain walls are factory-assembled and pre-glazed in controlled conditions, which shortens on-site erection and improves quality control. They suit tall buildings and tight programmes, subject to design and access."
              />
              <FAQItem
                q="What is the typical curtain wall cost per sq ft in India?"
                a="Curtain wall cost depends on the system (stick, semi-unitized, unitized or spider), glass, height, wind load and access, so a reliable figure needs drawings. Fine Glaze prepares BOQ-based quotations."
              />
              <FAQItem
                q="How do I request a quotation for a commercial curtain wall project?"
                a="You can request a quotation by uploading your project drawings or BOQ on our contact page, calling +91 8369233566, or emailing info@fineglaze.com. Our office hours are Monday to Saturday, 09:00 to 18:00."
              />
              <FAQItem
                q="Do you install structural glazing and ACP cladding alongside curtain walls?"
                a="Yes, Fine Glaze offers complete building envelope solutions including structural glazing, ACP aluminium cladding, glass railings, and glass skylights."
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ════════════ INTERNAL LINKS / SERVICE MESH ════════════ */}
      <section className="bg-stone-900 py-12">
        <div className="container mx-auto px-6 md:px-16">
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-10 md:gap-16">
              <div>
                <p className="text-amber-400 text-xs font-bold tracking-[0.3em] uppercase mb-4">
                  Key Service Areas
                </p>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {["Pune", "Mumbai BKC", "Navi Mumbai", "Thane", "Hinjewadi", "Kharadi"].map((city) => (
                    <div key={city} className="flex items-center gap-1.5">
                      <MapPin size={11} className="text-amber-500" />
                      <span className="text-white/60 text-sm">{city}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-amber-400 text-xs font-bold tracking-[0.3em] uppercase mb-4">
                  Explore Related Facade Services
                </p>
                <div className="grid grid-cols-2 gap-x-6 gap-y-1.5">
                  {[
                    { title: "Structural Glazing", href: "/structural-glazing" },
                    { title: "ACP Aluminium Cladding", href: "/acp-aluminium-cladding" },
                    { title: "Glass Railings", href: "/glass-railings" },
                    { title: "Glass Partitions", href: "/glass-partitions" },
                    { title: "Facade Maintenance AMC", href: "/maintenance-services" },
                    { title: "All Facade Services →", href: "/services" },
                  ].map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="text-white/50 text-sm hover:text-amber-400 transition-colors"
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ════════════ CTA ════════════ */}
      <RelatedProjects heading="Curtain wall & glazing projects" keywords={["curtain", "glazing"]} />
      <CTASection />
    </Layout>
  );
}
