import SEO from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  MapPin,
  ChevronDown,
  Shield,
  Clock,
  Award,
  Wrench,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { useState } from "react";

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
const IMG = {
  hero: "https://images.unsplash.com/photo-1430417934865-589b63ad5c00?fm=jpg&q=85&w=2400&auto=format&fit=crop",
  twoSide: "https://images.unsplash.com/photo-1469981283837-561b3779462f?fm=jpg&q=80&w=900&auto=format&fit=crop",
  fourSide: "https://images.unsplash.com/photo-1621831337128-35676ca30868?fm=jpg&q=80&w=900&auto=format&fit=crop",
  spider: "https://images.unsplash.com/photo-1509024368907-57294758cfc5?fm=jpg&q=80&w=900&auto=format&fit=crop",
  canopy: "https://images.unsplash.com/photo-1486927181919-3ac1fc3a8082?fm=jpg&q=80&w=900&auto=format&fit=crop",
  process: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?fm=jpg&q=85&w=1400&auto=format&fit=crop",
};

/* ── System data ── */
const SYSTEMS = [
  {
    num: "01",
    title: "2-Side Structural Glazing",
    desc: "Two edges bonded with structural silicone, remaining two held with aluminium pressure caps. The most cost-effective way to get a partially frameless facade.",
    glass: "6–12mm toughened",
    wind: "Up to 3.0 kPa",
    bestFor: "IT parks, offices, showrooms",
    price: "₹350 – ₹550 /sq ft",
    img: "twoSide" as const,
  },
  {
    num: "02",
    title: "4-Side Structural Glazing",
    desc: "All four edges bonded — no external frame visible. The premium choice for high-end towers and corporate headquarters.",
    glass: "10–19mm DGU / Low-E",
    wind: "Up to 4.5 kPa",
    bestFor: "Towers, hotels, airports",
    price: "₹500 – ₹800 /sq ft",
    img: "fourSide" as const,
  },
  {
    num: "03",
    title: "Spider / Point-Fixed Glazing",
    desc: "Glass panels held by stainless steel spider fittings at drilled points — near-invisible structure for maximum transparency.",
    glass: "12–19mm laminated",
    wind: "SS 316 marine-grade",
    bestFor: "Atriums, lobbies, feature walls",
    price: "₹800 – ₹1,500 /sq ft",
    img: "spider" as const,
  },
  {
    num: "04",
    title: "Frameless Glass Canopies",
    desc: "Overhead laminated glass supported by structural fins or steel cables — fully weatherproof with integrated drainage.",
    glass: "17.52–21.52mm laminated",
    wind: "Aluminium fins / steel",
    bestFor: "Entrances, malls, bridges",
    price: "On Request",
    img: "canopy" as const,
  },
];

const STEPS = [
  { num: "01", title: "Site Visit", desc: "Engineers assess your building and design intent" },
  { num: "02", title: "Engineering", desc: "Shop drawings & IS-standard structural calculations" },
  { num: "03", title: "Fabrication", desc: "Aluminium & glass systems built in our Pune facility" },
  { num: "04", title: "Installation", desc: "Certified crews install with quality checkpoints" },
];

export default function StructuralGlazing() {
  const [activeSystem, setActiveSystem] = useState(0);

  /* ─── Schema ─── */
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Structural Glazing Systems",
    serviceType: "Structural Glazing Installation",
    provider: {
      "@type": "LocalBusiness",
      name: "Fine Glaze",
      "@id": "https://fineglaze.com",
      url: "https://fineglaze.com",
      telephone: "+91-8369233566",
      priceRange: "₹₹₹",
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
    description:
      "Frameless structural glazing systems — 2-side, 4-side & spider glazing for commercial buildings, showrooms, and premium architecture across India. ₹350–₹1,500/sq ft.",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fineglaze.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://fineglaze.com/services" },
      { "@type": "ListItem", position: 3, name: "Structural Glazing", item: "https://fineglaze.com/structural-glazing" },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is structural glazing and how does it work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Structural glazing bonds glass to an aluminium frame using structural silicone sealant instead of mechanical fixings — creating a seamless, frameless glass appearance while maintaining structural integrity.",
        },
      },
      {
        "@type": "Question",
        name: "How much does structural glazing cost per sq ft in India in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Standard 2-side SSG: ₹350–₹550/sq ft. Premium 4-side SSG: ₹500–₹800/sq ft. Spider glazing: ₹800–₹1,500/sq ft.",
        },
      },
    ],
  };

  const current = SYSTEMS[activeSystem];

  return (
    <Layout darkHero>
      <SEO
        title="Structural Glazing & Glazed Facade Systems | Glass Facade Contractors Pune & Mumbai – Fine Glaze"
        description="Top structural glazing company in India. 2-side, 4-side & spider glazed facade systems for showrooms, offices & malls. ₹350-1500/sq ft. 25-year silicone warranty. Free site visit."
        canonical="https://fineglaze.com/structural-glazing"
        keywords="structural glazing, glazed facade, glass facade contractors, structural glazing cost per sq ft, spider glazing, frameless glass facade Pune Mumbai, fasad glass, glass curtain wall manufacturers, silicone glazing system"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* ════════════════════════════════════════════════════
          HERO — full-bleed cinematic photo (KEPT)
          ════════════════════════════════════════════════════ */}
      <section className="relative h-screen overflow-hidden">
        <img
          src={IMG.hero}
          alt="Structural glazing glass facade — Fine Glaze"
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

        <div className="absolute inset-x-0 bottom-0 px-8 md:px-16 pb-16 md:pb-20 pt-24">
          <p
            className="text-amber-400 text-xs font-bold tracking-[0.4em] uppercase mb-5 animate-fade-in"
            style={{ animationDelay: "0.05s" }}
          >
            Fine Glaze · Pune · Mumbai · Maharashtra
          </p>

          <h1
            className="font-extrabold text-white leading-[0.88] tracking-tight animate-fade-in-up"
            style={{ fontSize: "clamp(3.8rem, 9vw, 9rem)", animationDelay: "0.1s" }}
          >
            Structural<br />
            <span className="text-gradient-gold">Glazing</span><br />
            <span style={{ fontSize: "clamp(2rem, 4.5vw, 4.8rem)", fontWeight: 600, color: "rgba(255,255,255,0.85)" }}>
              Redefined.
            </span>
          </h1>

          <p
            className="mt-6 text-white/70 text-base md:text-lg max-w-lg leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Frameless silicone glazing for commercial buildings, IT campuses &amp; showrooms.
          </p>

          <div
            className="mt-8 flex items-center gap-8 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Link
              to="/contact"
              className="text-white font-semibold text-base border-b border-amber-400 pb-0.5 hover:text-amber-400 transition-colors tracking-wide"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:+918369233566"
              className="text-white/60 font-medium text-base hover:text-white transition-colors tracking-wide"
            >
              +91 83692 33566
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 flex flex-col items-center gap-2 opacity-40">
          <span className="text-white text-[10px] uppercase tracking-[0.25em] rotate-90 mb-3">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          INTRO — centered bold text, no image
          ════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6 md:px-16 max-w-3xl text-center">
          <FadeIn>
            <p className="text-amber-700 text-xs font-bold tracking-[0.3em] uppercase mb-4">
              What is Structural Glazing
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-stone-900 leading-snug mb-5">
              Glass bonded directly to structure —{" "}
              <span className="text-stone-400">no visible frames, no clamps, no compromise.</span>
            </h2>
            <p className="text-stone-500 text-[15px] md:text-base leading-relaxed">
              Structural glazing replaces traditional mechanical fixings with high-performance
              structural silicone sealant, creating completely seamless, frameless facades
              for modern commercial buildings across India.
            </p>
          </FadeIn>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          STATS — dark horizontal band
          ════════════════════════════════════════════════════ */}
      <section className="bg-stone-900 py-10">
        <div className="container mx-auto px-6 md:px-16">
          <FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-stone-700">
              {[
                { number: "5+", label: "Years Experience" },
                { number: "10+", label: "Projects Delivered" },
                { number: "0", label: "Safety Incidents" },
                { number: "25yr", label: "Silicone Warranty" },
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


      {/* ════════════════════════════════════════════════════
          SYSTEMS — tabbed selector with image + details
          ════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-stone-50">
        <div className="container mx-auto px-6 md:px-16">
          <FadeIn className="mb-10">
            <p className="text-amber-700 text-xs font-bold tracking-[0.3em] uppercase mb-3">
              Our Systems
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              Structural Glazing Systems We Install
            </h2>
          </FadeIn>

          <FadeIn delay={100}>
            {/* Tab buttons */}
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

            {/* Active system content */}
            <div className="grid md:grid-cols-2 gap-0 bg-white overflow-hidden" key={current.num}>
              <div className="relative h-[280px] md:h-[360px] overflow-hidden">
                <img
                  src={IMG[current.img]}
                  alt={current.title}
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
                    <p className="text-[10px] uppercase tracking-wider text-stone-400 mb-1">Glass</p>
                    <p className="text-sm font-semibold text-stone-800">{current.glass}</p>
                  </div>
                  <div className="bg-stone-50 p-3">
                    <p className="text-[10px] uppercase tracking-wider text-stone-400 mb-1">Spec</p>
                    <p className="text-sm font-semibold text-stone-800">{current.wind}</p>
                  </div>
                  <div className="bg-stone-50 p-3">
                    <p className="text-[10px] uppercase tracking-wider text-stone-400 mb-1">Best For</p>
                    <p className="text-sm font-semibold text-stone-800">{current.bestFor}</p>
                  </div>
                  <div className="bg-amber-50 p-3 border border-amber-200">
                    <p className="text-[10px] uppercase tracking-wider text-amber-600 mb-1">Rate</p>
                    <p className="text-sm font-bold text-stone-900">{current.price}</p>
                  </div>
                </div>

                <Link to="/contact">
                  <Button size="sm" className="bg-stone-900 hover:bg-stone-800 text-white gap-2">
                    Get Quote for {current.title.split(" ")[0]} <ArrowRight size={14} />
                  </Button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          WHY FINE GLAZE — 4-column feature strip
          ════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6 md:px-16">
          <FadeIn className="text-center mb-12">
            <p className="text-amber-700 text-xs font-bold tracking-[0.3em] uppercase mb-3">
              Why Fine Glaze
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              Built for performance. Delivered on schedule.
            </h2>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  icon: Shield,
                  title: "Zero Incidents",
                  desc: "Strict safety protocols on every project. Certified installation crews only.",
                },
                {
                  icon: Clock,
                  title: "On-Time Delivery",
                  desc: "Milestone-based handovers. Embassy 247 completed with zero delays.",
                },
                {
                  icon: Award,
                  title: "In-House Facility",
                  desc: "We design, fabricate & install from our own Pune facility. No subcontracting.",
                },
                {
                  icon: Wrench,
                  title: "AMC Support",
                  desc: "Ongoing maintenance contracts for sealant, glass replacement & cleaning.",
                },
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-50 text-amber-700 mb-4">
                    <item.icon size={22} />
                  </div>
                  <h3 className="text-sm font-bold text-stone-900 mb-2">{item.title}</h3>
                  <p className="text-stone-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={200} className="mt-12 text-center">
            <p className="text-stone-400 text-sm">
              Trusted by <span className="text-stone-700 font-semibold">Embassy REIT</span> ·{" "}
              <span className="text-stone-700 font-semibold">LTIMindtree</span> ·{" "}
              <span className="text-stone-700 font-semibold">Pune International Airport</span>
            </p>
          </FadeIn>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          HOW WE WORK — horizontal 4-step timeline
          ════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-stone-50">
        <div className="container mx-auto px-6 md:px-16">
          <FadeIn className="mb-10">
            <p className="text-amber-700 text-xs font-bold tracking-[0.3em] uppercase mb-3">
              How We Work
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              From first visit to final handover
            </h2>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {STEPS.map((step, i) => (
                <div key={step.num} className="relative">
                  {/* Connecting line */}
                  {i < STEPS.length - 1 && (
                    <div className="hidden md:block absolute top-5 left-[60%] right-0 h-px bg-stone-300" />
                  )}
                  <div className="bg-white p-5 relative">
                    <span className="text-3xl font-bold text-stone-100 block mb-3">{step.num}</span>
                    <h3 className="text-sm font-bold text-stone-900 mb-1">{step.title}</h3>
                    <p className="text-stone-500 text-xs leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          FULL-WIDTH PHOTO BREAK
          ════════════════════════════════════════════════════ */}
      <FadeIn>
        <div className="relative h-[35vh] md:h-[40vh] overflow-hidden">
          <img
            src={IMG.process}
            alt="Fine Glaze installation crew at work"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <div>
              <p className="text-white/60 text-sm uppercase tracking-widest mb-2">Our Promise</p>
              <p className="text-white text-xl md:text-3xl font-bold max-w-xl">
                Every facade engineered in-house. Every installation by our own teams.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>


      {/* ════════════════════════════════════════════════════
          PRICING — compact table
          ════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6 md:px-16 max-w-3xl">
          <FadeIn className="text-center mb-8">
            <p className="text-amber-700 text-xs font-bold tracking-[0.3em] uppercase mb-3">
              Pricing
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-2">
              Structural Glazing Cost — 2026
            </h2>
            <p className="text-stone-400 text-sm">
              Indicative rates. Final cost depends on height, glass spec & complexity. GST extra.
            </p>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b-2 border-stone-800">
                    <th className="py-3 text-xs font-bold uppercase tracking-wider text-stone-500">System</th>
                    <th className="py-3 text-xs font-bold uppercase tracking-wider text-stone-500">Glass</th>
                    <th className="py-3 text-xs font-bold uppercase tracking-wider text-stone-500 text-right">Rate / sq ft</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[
                    { system: "2-Side SSG", glass: "6 – 12 mm toughened", price: "₹350 – ₹550" },
                    { system: "4-Side SSG", glass: "10 – 19 mm DGU / Low-E", price: "₹500 – ₹800" },
                    { system: "Spider / Point-Fixed", glass: "12 – 19 mm laminated", price: "₹800 – ₹1,500" },
                    { system: "Frameless Canopy", glass: "17.52 – 21.52 mm laminated", price: "On request" },
                  ].map((row) => (
                    <tr key={row.system} className="border-b border-stone-100 hover:bg-stone-50 transition-colors">
                      <td className="py-3 font-semibold text-stone-800">{row.system}</td>
                      <td className="py-3 text-stone-500">{row.glass}</td>
                      <td className="py-3 text-right font-bold text-stone-900">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 text-center">
              <Link to="/contact">
                <Button size="lg" className="bg-stone-900 hover:bg-stone-800 text-white gap-2 px-8">
                  Get Exact Quote — Free Site Visit <ArrowRight size={16} />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          FAQ
          ════════════════════════════════════════════════════ */}
      <section className="py-14 md:py-16 bg-stone-50">
        <div className="container mx-auto px-6 md:px-16 max-w-3xl">
          <FadeIn className="mb-8">
            <p className="text-amber-700 text-xs font-bold tracking-[0.3em] uppercase mb-3">
              Common Questions
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              FAQ
            </h2>
          </FadeIn>

          <FadeIn delay={100}>
            <div>
              <FAQItem
                q="What is structural glazing and how does it work?"
                a="Structural glazing bonds glass to an aluminium frame using structural silicone sealant instead of mechanical fixings — creating a seamless, frameless glass appearance while maintaining structural integrity against wind loads and weather."
              />
              <FAQItem
                q="How much does structural glazing cost per sq ft in India?"
                a="Standard 2-side SSG ranges from ₹350–₹550 per sq ft. Premium 4-side SSG starts at ₹500–₹800 per sq ft. Spider glazing ranges from ₹800–₹1,500 per sq ft depending on glass type and fittings."
              />
              <FAQItem
                q="Is structural glazing safe for high-rise buildings?"
                a="Yes. Systems are engineered to IS 875 standards, withstanding wind loads of 1.5–4.5 kPa. Fine Glaze uses Dow Corning / Sika structural silicone rated for 25+ years of adhesion strength."
              />
              <FAQItem
                q="How long does installation take?"
                a="Typically 2–6 weeks depending on facade area and building height. Fine Glaze works with milestone-based handovers. Embassy 247 was completed on time with zero delays."
              />
              <FAQItem
                q="Do you offer maintenance after installation?"
                a="Yes. We provide AMC (Annual Maintenance Contracts) covering sealant inspection, glass replacement, weather seal renewal, and facade cleaning — ensuring long-term performance."
              />
            </div>
          </FadeIn>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          AREAS + SERVICES — combined dark footer band
          ════════════════════════════════════════════════════ */}
      <section className="bg-stone-900 py-12">
        <div className="container mx-auto px-6 md:px-16">
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-10 md:gap-16">
              {/* Areas */}
              <div>
                <p className="text-amber-400 text-xs font-bold tracking-[0.3em] uppercase mb-4">
                  Where We Work
                </p>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {["Pune", "Mumbai BKC", "Navi Mumbai", "Thane", "Nashik", "Hinjewadi", "Pimpri-Chinchwad"].map((city) => (
                    <div key={city} className="flex items-center gap-1.5">
                      <MapPin size={11} className="text-amber-500" />
                      <span className="text-white/60 text-sm">{city}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Other services */}
              <div>
                <p className="text-amber-400 text-xs font-bold tracking-[0.3em] uppercase mb-4">
                  Other Services
                </p>
                <div className="grid grid-cols-2 gap-x-6 gap-y-1.5">
                  {[
                    { title: "Curtain Wall Systems", href: "/curtain-wall-systems" },
                    { title: "Aluminium Facade", href: "/aluminium-facade" },
                    { title: "ACP Cladding", href: "/acp-aluminium-cladding" },
                    { title: "Glass Railings", href: "/glass-railings" },
                    { title: "Facade AMC", href: "/maintenance-services" },
                    { title: "All Services →", href: "/services" },
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


      {/* ════════════════════════════════════════════════════
          CTA
          ════════════════════════════════════════════════════ */}
      <CTASection />
    </Layout>
  );
}
