import SEO from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Phone,
  MapPin,
  ChevronDown,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { useState, useEffect, useRef } from "react";

/* ───────────────────── Custom inline CSS ───────────────────── */
const PAGE_CSS = `
  @keyframes sgZoom {
    from { transform: scale(1.0); }
    to   { transform: scale(1.08); }
  }
  @keyframes sgPan {
    0%   { transform: scale(1.15) translateY(0); }
    100% { transform: scale(1.15) translateY(-8%); }
  }
  @keyframes lineGrow {
    from { transform: scaleY(0); }
    to   { transform: scaleY(1); }
  }
  .ssg-img-hover img {
    transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  .ssg-img-hover:hover img {
    transform: scale(1.06);
  }
  .ssg-parallax {
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
  }
  @media (max-width: 768px) {
    .ssg-parallax { background-attachment: scroll; }
  }
`;

/* ───────────────────── Fade-in wrapper ───────────────────── */
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

/* ───────────────────── Animated counter ───────────────────── */
function Counter({ end, suffix = "", duration = 1800 }: { end: number; suffix?: string; duration?: number }) {
  const { ref, isVisible } = useScrollAnimation(0.3);
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;
    hasAnimated.current = true;
    const startTime = Date.now();
    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isVisible, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* ───────────────────── Accordion FAQ ───────────────────── */
function FAQItem({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-stone-200/80">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="text-base md:text-lg font-semibold text-stone-800 pr-8 group-hover:text-amber-700 transition-colors leading-snug">
          {q}
        </span>
        <ChevronDown
          size={20}
          className={cn(
            "text-stone-400 shrink-0 transition-transform duration-300",
            open && "rotate-180 text-amber-600"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-400",
          open ? "max-h-96 pb-6" : "max-h-0"
        )}
      >
        <p className="text-stone-500 leading-relaxed text-[15px] pl-0 md:pl-1">{a}</p>
      </div>
    </div>
  );
}

/* ───────────────────── Images ───────────────────── */
const IMG = {
  hero: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?fm=jpg&q=85&w=2400&auto=format&fit=crop",
  about: "https://images.unsplash.com/photo-1486718448742-163732cd1544?fm=jpg&q=85&w=1800&auto=format&fit=crop",
  twoSide: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?fm=jpg&q=85&w=1400&auto=format&fit=crop",
  fourSide: "https://images.unsplash.com/photo-1577985043696-8bd54d9c4f89?fm=jpg&q=85&w=1400&auto=format&fit=crop",
  spider: "https://images.unsplash.com/photo-1509024368907-57294758cfc5?fm=jpg&q=85&w=1400&auto=format&fit=crop",
  canopy: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?fm=jpg&q=85&w=1400&auto=format&fit=crop",
  process: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?fm=jpg&q=85&w=1400&auto=format&fit=crop",
  whyUs: "https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?fm=jpg&q=85&w=2000&auto=format&fit=crop",
  midBanner: "https://images.unsplash.com/photo-1462826303086-329426d1aef5?fm=jpg&q=85&w=2400&auto=format&fit=crop",
  proj1: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?fm=jpg&q=85&w=800&auto=format&fit=crop",
  proj2: "https://images.unsplash.com/photo-1464938050520-ef2571e0d6e0?fm=jpg&q=85&w=800&auto=format&fit=crop",
  proj3: "https://images.unsplash.com/photo-1448630360428-65456659c007?fm=jpg&q=85&w=800&auto=format&fit=crop",
};

/* ───────────────────── Systems data ───────────────────── */
const SYSTEMS = [
  {
    num: "01",
    title: "2-Side Structural Glazing",
    img: IMG.twoSide,
    alt: "2-side structural glazing facade — partially frameless",
    desc: "Two edges bonded with structural silicone, remaining two held with aluminium pressure caps. The most cost-effective way to achieve a partially frameless facade — ideal for IT parks, commercial offices, and showroom fronts across India.",
    specs: [
      { label: "Glass", value: "6mm – 12mm toughened" },
      { label: "Wind Load", value: "Up to 3.0 kPa" },
      { label: "Best For", value: "IT parks, offices, showrooms" },
    ],
    price: "₹350 – ₹550",
    priceUnit: "per sq ft",
    reverse: false,
  },
  {
    num: "02",
    title: "4-Side Structural Glazing",
    img: IMG.fourSide,
    alt: "4-side structural glazing — fully flush frameless glass facade",
    desc: "All four edges bonded with structural silicone — no external frame visible anywhere. The premium choice for high-end towers and corporate headquarters where a fully flush, seamless glass envelope is the design intent.",
    specs: [
      { label: "Glass", value: "10mm – 19mm DGU / Low-E" },
      { label: "Wind Load", value: "Up to 4.5 kPa" },
      { label: "Best For", value: "High-rise towers, hotels, airports" },
    ],
    price: "₹500 – ₹800",
    priceUnit: "per sq ft",
    reverse: true,
  },
  {
    num: "03",
    title: "Spider / Point-Fixed Glazing",
    img: IMG.spider,
    alt: "Spider point-fixed glazing system — maximum transparency",
    desc: "Glass panels held by stainless steel spider fittings at precisely drilled points — a near-invisible structural connection that maximises transparency. The definitive system for grand atrium walls and architectural feature facades.",
    specs: [
      { label: "Glass", value: "12mm – 19mm laminated safety" },
      { label: "Fittings", value: "SS 316 marine-grade spiders" },
      { label: "Best For", value: "Atriums, lobbies, feature facades" },
    ],
    price: "₹800 – ₹1,500",
    priceUnit: "per sq ft",
    reverse: false,
  },
  {
    num: "04",
    title: "Frameless Glass Canopies",
    img: IMG.canopy,
    alt: "Frameless glass canopy — dramatic building entrance",
    desc: "Overhead laminated glass supported by structural fins or tensioned steel cables — fully weatherproof with integrated drainage. Creates dramatic, light-filled entrances for commercial buildings, malls, and transit hubs.",
    specs: [
      { label: "Glass", value: "17.52 – 21.52mm laminated" },
      { label: "Support", value: "Aluminium fins or steel cables" },
      { label: "Best For", value: "Entrances, malls, sky bridges" },
    ],
    price: "On Request",
    priceUnit: "",
    reverse: true,
  },
];

/* ───────────────────── Process steps data ───────────────────── */
const PROCESS = [
  {
    step: "01",
    title: "Site Visit & Consultation",
    desc: "Our engineers visit your site, assess the building structure, understand your design vision, and provide a detailed scope with material specifications.",
  },
  {
    step: "02",
    title: "Engineering & Shop Drawings",
    desc: "In-house shop drawings and structural calculations — every component engineered to IS 875 standards, wind-load requirements, and site conditions.",
  },
  {
    step: "03",
    title: "Fabrication & Installation",
    desc: "Aluminium and glass systems fabricated at our Pune facility. Installed by certified teams with safety protocols and quality checkpoints at every stage.",
  },
  {
    step: "04",
    title: "Handover & AMC Support",
    desc: "Thorough quality inspection before handover. Ongoing AMC contracts keep your facade weatherproof and structurally sound for decades.",
  },
];

/* ═══════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════ */
export default function StructuralGlazing() {
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

  return (
    <Layout darkHero>
      <style>{PAGE_CSS}</style>
      <SEO
        title="Structural Glazing & Glazed Facade Systems | Glass Facade Contractors Pune & Mumbai – Fine Glaze"
        description="Top structural glazing company in India. 2-side, 4-side & spider glazed facade systems for showrooms, offices & malls. ₹350-1500/sq ft. 25-year silicone warranty. Free site visit."
        canonical="https://fineglaze.com/structural-glazing"
        keywords="structural glazing, glazed facade, glass facade contractors, structural glazing cost per sq ft, spider glazing, frameless glass facade Pune Mumbai, fasad glass, glass curtain wall manufacturers, silicone glazing system"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* ════════════════════════════════════════════════════
          HERO — full-bleed cinematic
          ════════════════════════════════════════════════════ */}
      <section className="relative h-screen min-h-[600px] overflow-hidden">
        <img
          src={IMG.hero}
          alt="Structural glazing glass facade — Fine Glaze"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ animation: "sgZoom 20s ease-in-out infinite alternate" }}
          loading="eager"
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 35%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.92) 100%)",
          }}
        />

        {/* Left gold accent line */}
        <div
          className="absolute left-6 md:left-14 top-[30%] w-px h-28 bg-gradient-to-b from-amber-400/80 to-transparent origin-top"
          style={{ animation: "lineGrow 1.2s ease-out 0.4s both" }}
        />

        <div className="absolute inset-x-0 bottom-0 px-8 md:px-16 pb-16 md:pb-24 pt-24">
          <p
            className="text-amber-400/90 text-[11px] font-bold tracking-[0.45em] uppercase mb-6 animate-fade-in"
            style={{ animationDelay: "0.05s" }}
          >
            Fine Glaze · Facade Specialists · Pune & Mumbai
          </p>

          <h1
            className="font-extrabold text-white leading-[0.88] tracking-tight animate-fade-in-up"
            style={{ fontSize: "clamp(3.4rem, 8.5vw, 8.5rem)", animationDelay: "0.1s" }}
          >
            Structural<br />
            <span className="text-gradient-gold">Glazing</span>
          </h1>
          <p
            className="mt-2 font-serif italic text-white/60 animate-fade-in-up"
            style={{ fontSize: "clamp(1.1rem, 2.5vw, 2rem)", animationDelay: "0.15s" }}
          >
            Engineered facades. Frameless precision.
          </p>

          <p
            className="mt-6 text-white/55 text-sm md:text-base max-w-md leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.25s" }}
          >
            Silicone-bonded glass facade systems for commercial buildings,
            IT campuses & showrooms — designed, fabricated & installed by Fine Glaze.
          </p>

          <div
            className="mt-10 flex flex-wrap items-center gap-6 md:gap-10 animate-fade-in-up"
            style={{ animationDelay: "0.35s" }}
          >
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-amber-600 hover:bg-amber-700 text-white font-semibold tracking-wide gap-2 px-8 h-12 text-sm"
              >
                Get Free Quote <ArrowRight size={15} />
              </Button>
            </Link>
            <a
              href="tel:+918369233566"
              className="flex items-center gap-2 text-white/50 text-sm hover:text-white transition-colors"
            >
              <Phone size={14} />
              +91 83692 33566
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 right-8 hidden md:flex flex-col items-center gap-2 opacity-30">
          <span className="text-white text-[9px] uppercase tracking-[0.3em] [writing-mode:vertical-lr]">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/60 to-transparent mt-1" />
        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          ABOUT — editorial image band
          ════════════════════════════════════════════════════ */}
      <section className="relative">
        <div className="relative h-[55vh] md:h-[65vh] overflow-hidden">
          <img
            src={IMG.about}
            alt="Modern glass facade building"
            className="w-full h-full object-cover"
            style={{ animation: "sgPan 25s ease-in-out infinite alternate" }}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/55 to-stone-950/20" />

          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-8 md:px-16">
              <FadeIn className="max-w-xl">
                <div className="w-10 h-px bg-amber-500 mb-6" />
                <p className="text-amber-400/80 text-[11px] font-bold tracking-[0.35em] uppercase mb-5">
                  What is Structural Glazing
                </p>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-[3.2rem] text-white leading-[1.15] mb-6">
                  Glass bonded directly to structure.
                  <span className="text-white/50"> No frames. No clamps. No compromise.</span>
                </h2>
                <p className="text-white/55 text-[15px] md:text-base leading-[1.8]">
                  Structural glazing uses high-performance structural silicone sealant to bond
                  glass panels directly to aluminium framing — replacing mechanical fixings with
                  an invisible bond. The result: a completely seamless, frameless glass envelope
                  that defines modern commercial architecture.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>

        {/* ── Stats strip ── */}
        <div className="bg-stone-950 border-t border-white/5">
          <div className="container mx-auto px-8 md:px-16">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
              {[
                { end: 5, suffix: "+", label: "Years in Facade" },
                { end: 10, suffix: "+", label: "Landmark Projects" },
                { end: 0, suffix: "", label: "Safety Incidents" },
                { end: 25, suffix: "yr", label: "Silicone Warranty" },
              ].map((s) => (
                <div key={s.label} className="text-center py-8 md:py-10">
                  <p className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                    <Counter end={s.end} suffix={s.suffix} />
                  </p>
                  <p className="text-stone-500 text-[11px] uppercase tracking-[0.2em] mt-2">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          SYSTEMS — alternating full-width rows
          ════════════════════════════════════════════════════ */}
      <section className="bg-white">
        {/* Section heading */}
        <div className="py-20 md:py-24 text-center px-8">
          <FadeIn>
            <div className="w-10 h-px bg-amber-500 mx-auto mb-6" />
            <p className="text-amber-700/80 text-[11px] font-bold tracking-[0.35em] uppercase mb-4">
              Our Glazing Systems
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.8rem] font-bold text-stone-900 leading-tight">
              Four systems. One standard of excellence.
            </h2>
          </FadeIn>
        </div>

        {/* System rows */}
        {SYSTEMS.map((sys) => (
          <div
            key={sys.num}
            className="grid md:grid-cols-2 gap-0 border-t border-stone-100"
          >
            {/* Image */}
            <FadeIn
              className={cn(
                "relative h-[320px] md:h-[500px] overflow-hidden ssg-img-hover",
                sys.reverse && "md:order-2"
              )}
            >
              <img
                src={sys.img}
                alt={sys.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* System number overlay */}
              <span className="absolute top-6 left-6 md:top-8 md:left-8 text-white/15 text-[5rem] md:text-[7rem] font-black leading-none select-none pointer-events-none">
                {sys.num}
              </span>
            </FadeIn>

            {/* Content */}
            <FadeIn
              delay={120}
              className={cn(
                "p-8 md:p-12 lg:p-16 xl:p-20 flex flex-col justify-center",
                sys.reverse ? "md:order-1 bg-stone-50" : "bg-stone-50"
              )}
            >
              <p className="text-amber-600 text-[11px] font-bold tracking-[0.3em] uppercase mb-4">
                System {sys.num}
              </p>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-stone-900 mb-5 leading-tight">
                {sys.title}
              </h3>
              <p className="text-stone-500 leading-[1.8] mb-7 text-[15px]">
                {sys.desc}
              </p>

              {/* Specs — clean inline layout */}
              <div className="space-y-3 mb-8">
                {sys.specs.map((sp) => (
                  <div key={sp.label} className="flex items-baseline gap-3 text-sm">
                    <span className="text-stone-400 w-20 shrink-0 text-[11px] uppercase tracking-wider font-medium">
                      {sp.label}
                    </span>
                    <span className="text-stone-700">{sp.value}</span>
                  </div>
                ))}
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-bold text-stone-900">{sys.price}</span>
                {sys.priceUnit && (
                  <span className="text-sm text-stone-400 font-normal">{sys.priceUnit}</span>
                )}
              </div>
            </FadeIn>
          </div>
        ))}
      </section>


      {/* ════════════════════════════════════════════════════
          MID-PAGE PARALLAX BANNER — cinematic break
          ════════════════════════════════════════════════════ */}
      <section
        className="ssg-parallax relative h-[50vh] md:h-[60vh] flex items-center justify-center"
        style={{ backgroundImage: `url(${IMG.midBanner})` }}
      >
        <div className="absolute inset-0 bg-stone-950/70" />
        <FadeIn className="relative text-center px-8 max-w-3xl">
          <div className="w-10 h-px bg-amber-400 mx-auto mb-8" />
          <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-white leading-snug italic">
            "We don't just install glass on buildings. We engineer facades that define skylines."
          </blockquote>
          <p className="mt-6 text-amber-400/70 text-sm font-bold tracking-[0.3em] uppercase">
            Fine Glaze — Pune
          </p>
        </FadeIn>
      </section>


      {/* ════════════════════════════════════════════════════
          WHY FINE GLAZE — dark photo section
          ════════════════════════════════════════════════════ */}
      <section className="relative">
        <div className="relative min-h-[55vh] md:min-h-[60vh] overflow-hidden">
          <img
            src={IMG.whyUs}
            alt="Glass facade building — why choose Fine Glaze"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-stone-950/95 via-stone-950/70 to-stone-950/30" />

          <div className="relative flex items-center min-h-[55vh] md:min-h-[60vh]">
            <div className="container mx-auto px-8 md:px-16">
              <FadeIn className="max-w-xl ml-auto py-16 md:py-20">
                <div className="w-10 h-px bg-amber-400 mb-6" />
                <p className="text-amber-400/80 text-[11px] font-bold tracking-[0.35em] uppercase mb-5">
                  Why Fine Glaze
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-white leading-tight mb-8">
                  Built for performance.
                  <span className="text-white/50"> Delivered on schedule.</span>
                </h2>

                <div className="space-y-5">
                  {[
                    {
                      title: "In-house fabrication",
                      desc: "Design, engineering, fabrication & installation — all under one roof in Pune. No subcontracting the critical work.",
                    },
                    {
                      title: "Zero safety incidents",
                      desc: "Certified installation crews follow strict protocols at every height and every project. Zero incidents to date.",
                    },
                    {
                      title: "Proven on landmark projects",
                      desc: "From the LTIMindtree campus in Navi Mumbai to the Embassy 247 facade glass replacement — engineering precision, on-time delivery.",
                    },
                    {
                      title: "25-year silicone warranty",
                      desc: "We use Dow Corning & Sika structural silicone — rated for 25+ years of adhesion strength against weather and wind.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-px bg-amber-500/40 shrink-0 mt-1" style={{ minHeight: "2.5rem" }} />
                      <div>
                        <h3 className="text-white font-semibold text-[15px] mb-1">{item.title}</h3>
                        <p className="text-white/45 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10">
                  <Link to="/contact">
                    <Button
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10 gap-2 tracking-wide h-11 px-6 text-sm"
                    >
                      Talk to Our Engineers <ArrowRight size={14} />
                    </Button>
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          HOW WE WORK — steps + photo
          ════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-8 md:px-16">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            <FadeIn>
              <div className="w-10 h-px bg-amber-500 mb-6" />
              <p className="text-amber-700/80 text-[11px] font-bold tracking-[0.35em] uppercase mb-4">
                How We Work
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 mb-12 leading-tight">
                From first visit to <br className="hidden md:block" />final handover.
              </h2>

              {/* Steps with connecting line */}
              <div className="relative">
                {/* Vertical connecting line */}
                <div className="absolute left-[18px] top-2 bottom-2 w-px bg-stone-200" />

                <div className="space-y-10">
                  {PROCESS.map((item) => (
                    <div key={item.step} className="flex gap-6 relative">
                      {/* Dot on line */}
                      <div className="relative shrink-0 w-[38px] flex justify-center">
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500 mt-2 relative z-10 ring-4 ring-white" />
                      </div>
                      <div className="pb-1">
                        <p className="text-amber-600 text-[11px] font-bold tracking-[0.25em] uppercase mb-1.5">
                          Step {item.step}
                        </p>
                        <h3 className="text-lg font-bold text-stone-900 mb-2">{item.title}</h3>
                        <p className="text-stone-500 text-[15px] leading-[1.75]">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={150} className="hidden md:block sticky top-24">
              <div className="relative h-[600px] overflow-hidden ssg-img-hover">
                <img
                  src={IMG.process}
                  alt="Construction workers installing glass facade"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white to-transparent" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          PROJECT SHOWCASE — 3-photo strip
          ════════════════════════════════════════════════════ */}
      <section className="bg-stone-950 py-16 md:py-20">
        <div className="container mx-auto px-8 md:px-16">
          <FadeIn className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-4">
            <div>
              <p className="text-amber-400/70 text-[11px] font-bold tracking-[0.35em] uppercase mb-3">
                Recent Work
              </p>
              <h2 className="font-serif text-2xl md:text-3xl text-white leading-tight">
                Facades we've built.
              </h2>
            </div>
            <Link
              to="/portfolio"
              className="text-amber-400/70 text-sm hover:text-amber-400 transition-colors flex items-center gap-2 shrink-0"
            >
              View all projects <ArrowRight size={14} />
            </Link>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="grid md:grid-cols-3 gap-1.5">
              {[
                { img: IMG.proj1, label: "Commercial Tower — Hinjewadi" },
                { img: IMG.proj2, label: "Corporate Campus — BKC" },
                { img: IMG.proj3, label: "IT Park — Navi Mumbai" },
              ].map((proj) => (
                <div key={proj.label} className="relative h-[280px] md:h-[350px] overflow-hidden ssg-img-hover group">
                  <img
                    src={proj.img}
                    alt={proj.label}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <p className="absolute bottom-4 left-5 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
                    {proj.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          PRICING TABLE
          ════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-stone-50">
        <div className="container mx-auto px-8 md:px-16 max-w-4xl">
          <FadeIn className="text-center mb-14">
            <div className="w-10 h-px bg-amber-500 mx-auto mb-6" />
            <p className="text-amber-700/80 text-[11px] font-bold tracking-[0.35em] uppercase mb-4">
              Pricing
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 mb-3">
              Structural Glazing Cost — 2026
            </h2>
            <p className="text-stone-500 max-w-lg mx-auto text-[15px]">
              Indicative rates. Final cost depends on building height, glass specification,
              and project complexity. GST extra.
            </p>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="overflow-x-auto">
              <table className="w-full text-left min-w-[500px]">
                <thead>
                  <tr className="border-b-2 border-stone-800">
                    <th className="py-4 text-[11px] font-bold uppercase tracking-[0.15em] text-stone-500">System</th>
                    <th className="py-4 text-[11px] font-bold uppercase tracking-[0.15em] text-stone-500">Glass Specification</th>
                    <th className="py-4 text-[11px] font-bold uppercase tracking-[0.15em] text-stone-500 text-right">Rate / sq ft</th>
                  </tr>
                </thead>
                <tbody className="text-[15px]">
                  {[
                    { system: "2-Side SSG", glass: "6 – 12 mm toughened", price: "₹350 – ₹550" },
                    { system: "4-Side SSG", glass: "10 – 19 mm DGU / Low-E", price: "₹500 – ₹800" },
                    { system: "Spider / Point-Fixed", glass: "12 – 19 mm laminated", price: "₹800 – ₹1,500" },
                    { system: "Frameless Canopy", glass: "17.52 – 21.52 mm laminated", price: "On request" },
                  ].map((row, i) => (
                    <tr
                      key={row.system}
                      className={cn(
                        "border-b border-stone-200 transition-colors hover:bg-stone-100/50",
                        i === 0 && "border-t border-stone-200"
                      )}
                    >
                      <td className="py-5 font-semibold text-stone-800">{row.system}</td>
                      <td className="py-5 text-stone-500">{row.glass}</td>
                      <td className="py-5 text-right font-bold text-stone-900">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-12 text-center">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-stone-900 hover:bg-stone-800 text-white gap-2 px-10 h-12 tracking-wide text-sm"
                >
                  Get Exact Quote — Free Site Visit <ArrowRight size={15} />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          MATERIALS / BRANDS WE USE
          ════════════════════════════════════════════════════ */}
      <section className="py-14 bg-white border-t border-stone-100">
        <div className="container mx-auto px-8 md:px-16 text-center">
          <FadeIn>
            <p className="text-stone-400 text-[11px] font-bold tracking-[0.3em] uppercase mb-6">
              Trusted Material Partners
            </p>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 items-center">
              {["Dow Corning", "Sika", "Saint-Gobain", "AIS Glass", "Fenesta", "Hindalco"].map((brand) => (
                <span
                  key={brand}
                  className="text-stone-300 text-lg md:text-xl font-bold tracking-wide select-none"
                >
                  {brand}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          AREAS SERVED
          ════════════════════════════════════════════════════ */}
      <section className="bg-stone-950 py-16">
        <div className="container mx-auto px-8 md:px-16 text-center">
          <FadeIn>
            <div className="w-10 h-px bg-amber-400 mx-auto mb-6" />
            <p className="text-amber-400/70 text-[11px] font-bold tracking-[0.35em] uppercase mb-4">
              Where We Work
            </p>
            <h2 className="font-serif text-2xl md:text-3xl text-white mb-8">
              Structural Glazing Across Maharashtra
            </h2>
            <p className="text-stone-500 max-w-md mx-auto mb-10 text-[15px]">
              In-house fabrication in Pune. On-site installation teams across the state.
            </p>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
              {["Pune", "Mumbai BKC", "Navi Mumbai", "Nashik", "Hinjewadi", "Thane", "Pimpri-Chinchwad"].map((city) => (
                <div key={city} className="flex items-center gap-2 group">
                  <MapPin size={13} className="text-amber-500/60 group-hover:text-amber-400 transition-colors" />
                  <span className="text-white/60 text-sm tracking-wide group-hover:text-white/90 transition-colors">{city}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          FAQ
          ════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-8 md:px-16 max-w-3xl">
          <FadeIn className="mb-12">
            <div className="w-10 h-px bg-amber-500 mb-6" />
            <p className="text-amber-700/80 text-[11px] font-bold tracking-[0.35em] uppercase mb-4">
              Common Questions
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900">
              Frequently Asked Questions
            </h2>
          </FadeIn>

          <FadeIn delay={100}>
            <div>
              <FAQItem
                q="What is structural glazing and how does it work?"
                a="Structural glazing bonds glass to an aluminium frame using structural silicone sealant instead of mechanical fixings — creating a seamless, frameless glass appearance while maintaining structural integrity against wind loads and weather."
                defaultOpen
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
                q="How long does a structural glazing installation take?"
                a="Typically 2–6 weeks depending on facade area and building height. Fine Glaze works with milestone-based handovers. Embassy 247 was completed on time with zero delays and zero safety incidents."
              />
              <FAQItem
                q="Do you offer maintenance after installation?"
                a="Yes. We provide AMC (Annual Maintenance Contracts) covering sealant inspection, glass replacement, weather seal renewal, and facade cleaning — ensuring long-term performance and weatherproofing."
              />
              <FAQItem
                q="What glass brands and sealants do you use?"
                a="We use Saint-Gobain and AIS toughened/laminated glass, Dow Corning 795 and Sika SG-500 structural silicone sealants, and Hindalco/Fenesta aluminium profiles — all certified and tested for Indian climate conditions."
              />
            </div>
          </FadeIn>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          OTHER SERVICES
          ════════════════════════════════════════════════════ */}
      <section className="py-14 bg-stone-50 border-t border-stone-200">
        <div className="container mx-auto px-8 md:px-16 max-w-4xl">
          <FadeIn>
            <h2 className="text-lg font-bold text-stone-800 mb-6">Explore Our Other Facade Services</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-8">
              {[
                { title: "Curtain Wall Systems", href: "/curtain-wall-systems" },
                { title: "Aluminium Facade", href: "/aluminium-facade" },
                { title: "ACP Cladding", href: "/acp-aluminium-cladding" },
                { title: "Glass Railings", href: "/glass-railings" },
                { title: "Facade Maintenance", href: "/maintenance-services" },
                { title: "All Services →", href: "/services" },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="flex items-center gap-2 py-2 text-stone-500 hover:text-amber-700 transition-colors group"
                >
                  <ArrowRight
                    size={13}
                    className="text-amber-500/60 shrink-0 group-hover:translate-x-1 transition-transform"
                  />
                  <span className="font-medium text-sm">{link.title}</span>
                </Link>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>


      {/* ── CTA ── */}
      <CTASection />
    </Layout>
  );
}
