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
  Star,
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
const IMG: Record<string, string> = {
  hero: "/Salsette27.webp",
  pvdf: "/Panel.webp",
  pe: "/Pan.webp",
  wood: "/Jindal house.webp",
  mirror: "/Embassy.webp",
  process: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?fm=jpg&q=85&w=1400&auto=format&fit=crop",
};

/* ── System data ── */
const SYSTEMS = [
  {
    num: "01",
    title: "PVDF Coated ACP",
    desc: "Premium fluorocarbon (PVDF) coated panels with superior UV resistance and colour retention. The gold standard for external cladding — maintains appearance for 20+ years without fading or chalking.",
    glass: "PVDF 70/30",
    wind: "FR mineral core",
    bestFor: "Towers, corporate HQs",
    price: "₹180 – ₹350 /sq ft",
    img: "pvdf",
  },
  {
    num: "02",
    title: "PE Coated ACP",
    desc: "Polyester-coated panels offering excellent value for cost-conscious projects. Available in all standard colours and finishes. Best for interior cladding, signage, and canopy soffits.",
    glass: "Polyester (PE)",
    wind: "PE / FR core",
    bestFor: "Interiors, signage, canopies",
    price: "₹90 – ₹160 /sq ft",
    img: "pe",
  },
  {
    num: "03",
    title: "Wood-Grain & Stone Finish",
    desc: "Digital printing technology creates realistic wood, stone, and marble textures on ACP surfaces. Natural aesthetics without the weight, maintenance, or cost of real materials.",
    glass: "Digital print + PVDF",
    wind: "FR mineral core",
    bestFor: "Hotels, residences, retail",
    price: "₹220 – ₹400 /sq ft",
    img: "wood",
  },
  {
    num: "04",
    title: "Mirror & Metallic ACP",
    desc: "High-reflectivity aluminium panels with mirror-polish or brushed metallic finishes. Creates striking visual impact for feature walls, fascias, and architectural accents.",
    glass: "Anodised / mirror",
    wind: "FR mineral core",
    bestFor: "Feature walls, retail fronts",
    price: "₹250 – ₹450 /sq ft",
    img: "mirror",
  },
];

const STEPS = [
  { num: "01", title: "Site Survey", desc: "Measure facade area, assess substrate & plan panel layout" },
  { num: "02", title: "Shop Drawing", desc: "Panel cutting plan, joint layout & colour/finish approval" },
  { num: "03", title: "Fabrication", desc: "CNC routing, folding & sub-frame preparation" },
  { num: "04", title: "Installation", desc: "Sub-frame fixing, panel mounting & joint sealing" },
];

export default function AcpCladding() {
  const [activeSystem, setActiveSystem] = useState(0);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "ACP & Metal Cladding Systems",
    serviceType: "ACP Cladding Installation",
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
    description: "Aluminium Composite Panel cladding — PVDF, PE, wood-grain & mirror finishes. Fire-retardant FR grade panels from Aludecor, Alstrong & Reynobond. 20-year colour warranty.",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fineglaze.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://fineglaze.com/services" },
      { "@type": "ListItem", position: 3, name: "ACP & Metal Cladding", item: "https://fineglaze.com/acp-aluminium-cladding" },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is ACP cladding?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ACP (Aluminium Composite Panel) cladding uses panels made of two aluminium sheets bonded to a core material. They are fixed to a sub-frame on the building exterior, creating a flat, modern cladding surface available in hundreds of colours and finishes.",
        },
      },
      {
        "@type": "Question",
        name: "Is ACP cladding fire safe?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We exclusively use FR (Fire Retardant) grade ACP for external cladding. FR panels have a mineral-filled core that limits flame spread and meets NBC (National Building Code) fire safety requirements. PE core panels are only used for interiors.",
        },
      },
      {
        "@type": "Question",
        name: "How much does ACP cladding cost per sq ft in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PE coated ACP starts at ₹90/sq ft for interiors. PVDF coated panels range from ₹180–₹350/sq ft. Wood-grain and stone finishes cost ₹220–₹400/sq ft. Prices include panel, sub-frame, and installation.",
        },
      },
    ],
  };

  const current = SYSTEMS[activeSystem];

  return (
    <Layout darkHero>
      <SEO
        title="ACP Cladding & Aluminium Composite Panels | ACP Contractors Pune & Mumbai – Fine Glaze"
        description="Top ACP cladding contractors in India. PVDF & PE aluminium composite panels from Aludecor, Alstrong & Reynobond. Fire-retardant grade. 20-year colour warranty. Free site visit."
        canonical="https://fineglaze.com/acp-aluminium-cladding"
        keywords="ACP cladding, aluminium composite panel, ACP contractors Pune Mumbai, PVDF ACP panel, fire retardant ACP, ACP facade, aluminium cladding cost, Aludecor Alstrong Reynobond"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* ════════════ HERO ════════════ */}
      <section className="relative h-screen overflow-hidden">
        <img
          src={IMG.hero}
          alt="ACP aluminium cladding facade — Fine Glaze"
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
            Fine Glaze · Pune · Mumbai · Maharashtra
          </p>

          <h1
            className="font-extrabold text-white leading-[0.88] tracking-tight animate-fade-in-up"
            style={{ fontSize: "clamp(3.8rem, 9vw, 9rem)", animationDelay: "0.1s" }}
          >
            ACP &<br />
            <span className="text-gradient-gold">Metal</span><br />
            <span style={{ fontSize: "clamp(2rem, 4.5vw, 4.8rem)", fontWeight: 600, color: "rgba(255,255,255,0.85)" }}>
              Cladding.
            </span>
          </h1>

          <p
            className="mt-6 text-white/70 text-base md:text-lg max-w-lg leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Fire-retardant aluminium composite panels for modern building exteriors across India.
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

          {/* Trust signal */}
          <div
            className="flex items-center gap-1.5 mt-4 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} className="text-amber-400 fill-amber-400" />
              ))}
            </div>
            <span className="text-white/50 text-xs font-medium ml-0.5">
              5.0 Google · Embassy REIT Vendor · 10+ Landmark Projects
            </span>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 flex flex-col items-center gap-2 opacity-40">
          <span className="text-white text-[10px] uppercase tracking-[0.25em] rotate-90 mb-3">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
        </div>
      </section>


      {/* ════════════ INTRO ════════════ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6 md:px-16 max-w-3xl text-center">
          <FadeIn>
            <p className="text-amber-700 text-xs font-bold tracking-[0.3em] uppercase mb-4">
              What is ACP Cladding
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-stone-900 leading-snug mb-5">
              Two aluminium sheets bonded to a mineral core —{"  "}
              <span className="text-stone-400">lightweight, fire-safe, and available in unlimited finishes.</span>
            </h2>
            <p className="text-stone-500 text-[15px] md:text-base leading-relaxed">
              Aluminium Composite Panels (ACP) consist of two aluminium sheets bonded to a non-combustible mineral-filled core. They provide a flat, seamless cladding surface that transforms any building exterior. Available in PVDF and PE coatings with solid, metallic, wood-grain, stone, and mirror finishes.
            </p>
          </FadeIn>
        </div>
      </section>


      {/* ════════════ STATS ════════════ */}
      <section className="bg-stone-900 py-10">
        <div className="container mx-auto px-6 md:px-16">
          <FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-stone-700">
              {[
                { number: "20yr", label: "Colour Warranty (PVDF)" },
                { number: "FR", label: "Fire Retardant Grade" },
                { number: "5+", label: "Years Experience" },
                { number: "100+", label: "Finish Options" },
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


      {/* ════════════ SYSTEMS ════════════ */}
      <section className="py-16 md:py-20 bg-stone-50">
        <div className="container mx-auto px-6 md:px-16">
          <FadeIn className="mb-10">
            <p className="text-amber-700 text-xs font-bold tracking-[0.3em] uppercase mb-3">
              Our Panels
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              ACP Panel Systems We Install
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
                    <p className="text-[10px] uppercase tracking-wider text-stone-400 mb-1">Coating</p>
                    <p className="text-sm font-semibold text-stone-800">{current.glass}</p>
                  </div>
                  <div className="bg-stone-50 p-3">
                    <p className="text-[10px] uppercase tracking-wider text-stone-400 mb-1">Core</p>
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


      {/* ════════════ WHY FINE GLAZE ════════════ */}
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
                  title: "Fire Safe",
                  desc: "Only FR (Fire Retardant) grade ACP panels used for external cladding. NBC fire safety compliant.",
                },
                {
                  icon: Clock,
                  title: "Fast Install",
                  desc: "Lightweight panels install 3x faster than natural stone. Minimal scaffolding time.",
                },
                {
                  icon: Award,
                  title: "Trusted Brands",
                  desc: "We use panels from Aludecor, Alstrong, and Reynobond — the most trusted ACP manufacturers.",
                },
                {
                  icon: Wrench,
                  title: "Clean Finish",
                  desc: "CNC routing for precise folds. Silicone-sealed joints for a seamless, watertight appearance.",
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


      {/* ════════════ HOW WE WORK ════════════ */}
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


      {/* ════════════ PHOTO BREAK ════════════ */}
      <FadeIn>
        <div className="relative h-[35vh] md:h-[40vh] overflow-hidden">
          <img
            src={IMG.process}
            alt="Fine Glaze ACP cladding installation"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <div>
              <p className="text-white/60 text-sm uppercase tracking-widest mb-2">Our Promise</p>
              <p className="text-white text-xl md:text-3xl font-bold max-w-xl">
                From CNC routing to final sealant — every step done in-house for a flawless finish.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>


      {/* ════════════ PRICING ════════════ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6 md:px-16 max-w-3xl">
          <FadeIn className="text-center mb-8">
            <p className="text-amber-700 text-xs font-bold tracking-[0.3em] uppercase mb-3">
              Pricing
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-2">
              ACP Cladding Cost — 2026
            </h2>
            <p className="text-stone-400 text-sm">
              Indicative rates. Final cost depends on specifications & complexity. GST extra.
            </p>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b-2 border-stone-800">
                    <th className="py-3 text-xs font-bold uppercase tracking-wider text-stone-500">System</th>
                    <th className="py-3 text-xs font-bold uppercase tracking-wider text-stone-500">Coating / Finish</th>
                    <th className="py-3 text-xs font-bold uppercase tracking-wider text-stone-500 text-right">Rate / sq ft</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[
                    { system: "PVDF Coated ACP", glass: "PVDF 70/30 + FR core", price: "₹180 – ₹350" },
                    { system: "PE Coated ACP", glass: "Polyester + PE/FR core", price: "₹90 – ₹160" },
                    { system: "Wood-Grain / Stone", glass: "Digital print + PVDF", price: "₹220 – ₹400" },
                    { system: "Mirror / Metallic", glass: "Anodised / mirror finish", price: "₹250 – ₹450" },
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


      {/* ════════════ FAQ ════════════ */}
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
                q="What is ACP cladding?"
                a="ACP (Aluminium Composite Panel) cladding uses panels made of two aluminium sheets bonded to a core material. They are fixed to a sub-frame on the building exterior, creating a flat, modern cladding surface available in hundreds of colours and finishes."
              />
              <FAQItem
                q="Is ACP cladding fire safe?"
                a="We exclusively use FR (Fire Retardant) grade ACP for external cladding. FR panels have a mineral-filled core that limits flame spread and meets NBC (National Building Code) fire safety requirements. PE core panels are only used for interiors."
              />
              <FAQItem
                q="How much does ACP cladding cost per sq ft in India?"
                a="PE coated ACP starts at ₹90/sq ft for interiors. PVDF coated panels range from ₹180–₹350/sq ft. Wood-grain and stone finishes cost ₹220–₹400/sq ft. Prices include panel, sub-frame, and installation."
              />
              <FAQItem
                q="How long does PVDF ACP last?"
                a="PVDF (fluorocarbon) coated ACP panels come with a 20-year colour warranty. They resist UV fading, chalking, and chemical exposure far better than PE coated panels — making them the preferred choice for external facades."
              />
              <FAQItem
                q="Can ACP be used for renovation and existing buildings?"
                a="Yes. ACP is ideal for building renovation because it is lightweight, installs over existing facades, and transforms the appearance quickly. The aluminium sub-frame can be adapted to any building surface."
              />
            </div>
          </FadeIn>
        </div>
      </section>


      {/* ════════════ AREAS + SERVICES ════════════ */}
      <section className="bg-stone-900 py-12">
        <div className="container mx-auto px-6 md:px-16">
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-10 md:gap-16">
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

              <div>
                <p className="text-amber-400 text-xs font-bold tracking-[0.3em] uppercase mb-4">
                  Other Services
                </p>
                <div className="grid grid-cols-2 gap-x-6 gap-y-1.5">
                  {[
                    { title: "Curtain Wall Systems", href: "/curtain-wall-systems" },
                    { title: "Structural Glazing", href: "/structural-glazing" },
                    { title: "Aluminium Facade", href: "/aluminium-facade" },
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


      {/* ════════════ CTA ════════════ */}
      <CTASection />
    </Layout>
  );
}
