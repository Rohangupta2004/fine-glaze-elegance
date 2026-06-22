import SEO from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { TrustStrip } from "@/components/home/TrustStrip";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  MapPin,
  ArrowRight,
  Phone,
  Layers,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

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

/* ── High-quality Unsplash image URLs ── */
const IMG = {
  hero: "https://images.unsplash.com/photo-1430417934865-589b63ad5c00?fm=jpg&q=85&w=2400&auto=format&fit=crop",
  advantages1: "https://images.unsplash.com/photo-1523477593243-78bbf626fd3b?fm=jpg&q=80&w=900&auto=format&fit=crop",
  advantages2: "https://images.unsplash.com/photo-1589282741585-30ab896335cd?fm=jpg&q=80&w=900&auto=format&fit=crop",
  advantages3: "https://images.unsplash.com/photo-1556922340-19e175199d3d?fm=jpg&q=80&w=900&auto=format&fit=crop",
  solutions: "https://images.unsplash.com/photo-1525119488448-d549af0dc221?fm=jpg&q=80&w=900&auto=format&fit=crop",
  type2side: "https://images.unsplash.com/photo-1469981283837-561b3779462f?fm=jpg&q=80&w=900&auto=format&fit=crop",
  type4side: "https://images.unsplash.com/photo-1621831337128-35676ca30868?fm=jpg&q=80&w=900&auto=format&fit=crop",
  typeSpider: "https://images.unsplash.com/photo-1509024368907-57294758cfc5?fm=jpg&q=80&w=900&auto=format&fit=crop",
  typeCanopy: "https://images.unsplash.com/photo-1486927181919-3ac1fc3a8082?fm=jpg&q=80&w=900&auto=format&fit=crop",
};

export default function StructuralGlazing() {
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
          HERO — full-bleed photo + gradient text overlay
          ════════════════════════════════════════════════════ */}
      {/* ── HERO — pure photo, raw editorial ── */}
      <section className="relative h-screen overflow-hidden">
        {/* Background — slow Ken Burns zoom */}
        <img
          src={IMG.hero}
          alt="Structural glazing glass facade — Fine Glaze"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ animation: "sgZoom 20s ease-in-out infinite alternate" }}
          loading="eager"
        />
        <style>{`@keyframes sgZoom { from { transform: scale(1.0); } to { transform: scale(1.08); } }`}</style>

        {/* Overlay — dark at top for navbar readability, deep at bottom for text */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.60) 0%, rgba(0,0,0,0.25) 30%, rgba(0,0,0,0.55) 65%, rgba(0,0,0,0.92) 100%)",
          }}
        />

        {/* Text — pinned to bottom-left, editorial style */}
        <div className="absolute inset-x-0 bottom-0 px-8 md:px-16 pb-16 md:pb-20 pt-24">
          {/* Thin amber overline */}
          <p
            className="text-amber-400 text-xs font-bold tracking-[0.4em] uppercase mb-5 animate-fade-in"
            style={{ animationDelay: "0.05s" }}
          >
            Fine Glaze · Pune · Mumbai · Maharashtra
          </p>

          {/* Massive headline — left-aligned like a magazine cover */}
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

          {/* One clean line of copy */}
          <p
            className="mt-6 text-white/70 text-base md:text-lg max-w-lg leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Frameless silicone glazing for commercial buildings, IT campuses &amp; showrooms.
          </p>

          {/* Two plain text CTAs — no boxes, no icons */}
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

        {/* Subtle scroll indicator — just a line */}
        <div className="absolute bottom-8 right-8 flex flex-col items-center gap-2 opacity-40">
          <span className="text-white text-[10px] uppercase tracking-[0.25em] rotate-90 mb-3">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-amber-600 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "5+", label: "Years Experience" },
              { value: "10+", label: "Landmark Projects" },
              { value: "🏆", label: "Embassy REIT Award" },
              { value: "0", label: "Safety Incidents" },
            ].map((stat) => (
              <div key={stat.label} className="space-y-1">
                <p className="text-3xl md:text-4xl font-extrabold">{stat.value}</p>
                <p className="text-white/80 text-sm font-medium uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <TrustStrip />

      {/* ── INTRO ── */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-5">What is Structural Glazing?</h2>
            <p className="text-lg text-muted-foreground mb-4">
              <strong>Structural glazing</strong> is a modern facade technology where glass panels are bonded to
              aluminium frames using high-performance <strong>structural silicone sealant</strong> instead of
              mechanical clamps — creating a <strong>seamless, frameless glass appearance</strong> ideal for
              commercial buildings, showrooms, malls, and premium residential projects.
            </p>
            <p className="text-muted-foreground mb-8">
              Fine Glaze delivers structural glazing systems across <strong>Pune, Mumbai, Navi Mumbai, and
              Maharashtra</strong>. Our systems are engineered to withstand high wind loads, prevent water
              infiltration, and maximise natural daylight. Projects like <strong>LTIMindtree Campus</strong> and{" "}
              <strong>Embassy 247</strong> stand as proof of our precision.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 gap-2">
                  Get Free Quote <ArrowRight size={16} />
                </Button>
              </Link>
              <a href="tel:+918369233566">
                <Button size="lg" variant="outline" className="gap-2">
                  <Phone size={16} /> Call Expert
                </Button>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── ADVANTAGES — 3 photos ── */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-6xl">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-3 text-center">Why Structural Glazing?</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
              The preferred choice for architects and developers across India's leading commercial projects.
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                img: IMG.advantages1,
                alt: "Architectural glass building facade — structural glazing",
                title: "Frameless Appearance",
                desc: "Clean glass surfaces with no visible external frames — a stunning modern aesthetic for premium office buildings and corporate campuses.",
                delay: 0,
              },
              {
                img: IMG.advantages2,
                alt: "Glass walled high-rise building under blue sky",
                title: "Maximum Transparency",
                desc: "Full floor-to-ceiling glass panels maximise natural daylight penetration while maintaining thermal performance with Low-E coatings.",
                delay: 100,
              },
              {
                img: IMG.advantages3,
                alt: "Grey glass building facade close-up — structural silicone glazing",
                title: "25-Year Structural Strength",
                desc: "Engineered to IS 875 standards with Dow Corning / Sika silicone rated for 25+ years of adhesion and weather resistance.",
                delay: 200,
              },
            ].map((item) => (
              <FadeIn key={item.title} delay={item.delay}>
                <div className="bg-background rounded-lg shadow-sm overflow-hidden border border-border h-full">
                  <div className="relative overflow-hidden h-52">
                    <img
                      src={item.img}
                      alt={item.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      width="400"
                      height="208"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOLUTIONS CHECKLIST ── */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <h2 className="text-3xl font-bold mb-4">Our Structural Glazing Solutions</h2>
              <p className="text-muted-foreground mb-8">
                From single-storey showrooms to 20-floor corporate towers — we engineer every system from first principles.
              </p>
              <div className="space-y-3">
                {[
                  "2-Side Structural Glazing (SSG)",
                  "4-Side Structural Glazing (SSG)",
                  "Spider / Point-Fixed Glazing Systems",
                  "Glass Facades for Commercial Buildings",
                  "Showroom & Corporate Office Facades",
                  "Double-Glazed Unit (DGU) Systems",
                  "Frameless Glass Canopies & Atriums",
                  "Silicone Sealant Replacement & Repair",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 py-2 border-b border-border last:border-0">
                    <CheckCircle2 size={18} className="text-amber-600 shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={150}>
              <div className="relative rounded-lg overflow-hidden shadow-lg h-[420px]">
                <img
                  src={IMG.solutions}
                  alt="Curtain wall glass facade building — Fine Glaze structural glazing"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width="600"
                  height="420"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <p className="text-sm text-white/90 font-medium">
                    Zero safety incidents across every project we've delivered.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── TYPES & VARIANTS ── */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-6xl">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-3 text-center">Types & Variants</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Choose the system that fits your building type, budget, and aesthetic goals.
            </p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              {
                name: "2-Side Structural Glazing (SSG)",
                tagline: "Horizontal or vertical silicone-bonded edges",
                description:
                  "Two sides bonded with structural silicone, remaining two sides use pressure caps. Ideal for cost-sensitive projects that still want a partially frameless look.",
                specs: [
                  "6mm – 12mm toughened glass",
                  "Dow Corning / Sika structural silicone",
                  "Aluminium 6063-T6 extrusions",
                  "Wind load up to 3.0 kPa",
                ],
                bestFor: "IT parks, commercial offices, showroom facades",
                price: "₹350 – ₹550 / sq ft",
                image: IMG.type2side,
                imageAlt: "2-side SSG glass building facade",
                delay: 0,
              },
              {
                name: "4-Side Structural Glazing (SSG)",
                tagline: "Fully flush — no visible frame on exterior",
                description:
                  "All four edges bonded with structural silicone, creating a completely frameless exterior. The most premium SSG variant — favoured for high-end corporate towers.",
                specs: [
                  "10mm – 19mm DGU / Low-E glass",
                  "Dual-component structural silicone",
                  "Concealed hidden-fix aluminium frames",
                  "Wind load up to 4.5 kPa",
                ],
                bestFor: "High-rise towers, luxury hotels, airport terminals",
                price: "₹500 – ₹800 / sq ft",
                image: IMG.type4side,
                imageAlt: "4-side SSG white and blue glass building",
                delay: 100,
              },
              {
                name: "Spider / Point-Fixed Glazing",
                tagline: "Glass suspended by SS316 spider fittings",
                description:
                  "Glass panels held by stainless steel spiders at precisely drilled points — a near-invisible structural connection maximising transparency, popular for atrium walls.",
                specs: [
                  "12mm – 19mm laminated safety glass",
                  "SS 316 marine-grade spider fittings",
                  "Countersunk bolt fixings",
                  "Expansion joints every 6m",
                ],
                bestFor: "Atrium walls, grand lobbies, feature facades",
                price: "₹800 – ₹1,500 / sq ft",
                image: IMG.typeSpider,
                imageAlt: "Spider point-fixed glazing metal structure",
                delay: 0,
              },
              {
                name: "Frameless Glass Canopies",
                tagline: "Overhead structural glass for entrances & atriums",
                description:
                  "Laminated glass canopy systems supported by structural fins or steel cables — fully weatherproof with integrated drainage. A dramatic open entrance.",
                specs: [
                  "17.52mm or 21.52mm laminated glass",
                  "Thermally broken aluminium or steel fins",
                  "Integrated EPDM weather seals",
                  "Live load rated to NBC standards",
                ],
                bestFor: "Building entrances, shopping malls, sky bridges",
                price: "On request",
                image: IMG.typeCanopy,
                imageAlt: "Frameless glass canopy geometric structure",
                delay: 100,
              },
            ].map((type) => (
              <FadeIn key={type.name} delay={type.delay}>
                <div className="bg-background rounded-lg shadow-sm overflow-hidden border border-border flex flex-col h-full">
                  <div className="relative overflow-hidden h-52">
                    <img
                      src={type.image}
                      alt={type.imageAlt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      width="600"
                      height="208"
                    />
                    <div className="absolute top-4 right-4 bg-slate-900/80 text-white text-xs font-semibold px-3 py-1.5 backdrop-blur-sm">
                      {type.price}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-xs font-semibold uppercase tracking-widest text-amber-600 mb-1">
                      {type.tagline}
                    </p>
                    <h3 className="text-xl font-bold mb-3">{type.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{type.description}</p>
                    <ul className="space-y-2 mb-5">
                      {type.specs.map((s) => (
                        <li key={s} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 size={14} className="text-amber-600 shrink-0" />
                          {s}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto pt-4 border-t border-border">
                      <p className="text-xs text-slate-500">
                        <span className="font-semibold text-slate-700">Best for:</span> {type.bestFor}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS SHOWCASE ── */}
      {/* Projects section removed — portfolio available at /portfolio */}

      {/* ── PROCESS SECTION ── */}
      <ProcessSection />

      {/* ── PRICING TABLE ── */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-3 text-center">Structural Glazing Cost in India 2026</h2>
            <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
              Indicative pricing — final cost depends on building height, glass specification, and project complexity.
            </p>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="px-6 py-4 text-left font-semibold">System Type</th>
                    <th className="px-6 py-4 text-left font-semibold">Glass Spec</th>
                    <th className="px-6 py-4 text-right font-semibold">Price Range</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { system: "2-Side SSG", glass: "6–12mm toughened", price: "₹350 – ₹550 / sq ft", highlight: false },
                    { system: "4-Side SSG", glass: "10–19mm DGU / Low-E", price: "₹500 – ₹800 / sq ft", highlight: true },
                    { system: "Spider / Point-Fixed", glass: "12–19mm laminated", price: "₹800 – ₹1,500 / sq ft", highlight: false },
                    { system: "Frameless Canopy", glass: "17.52–21.52mm laminated", price: "On request", highlight: false },
                  ].map((row, i) => (
                    <tr
                      key={row.system}
                      className={cn(
                        "border-t border-border transition-colors",
                        row.highlight ? "bg-amber-50" : i % 2 === 0 ? "bg-background" : "bg-muted/40",
                        "hover:bg-amber-50"
                      )}
                    >
                      <td className="px-6 py-4 font-semibold text-foreground">
                        <span className="flex items-center gap-2">
                          {row.highlight && <Layers size={14} className="text-amber-600 shrink-0" />}
                          {row.system}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">{row.glass}</td>
                      <td className="px-6 py-4 text-right font-bold text-amber-700">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-4 text-center">
              * Prices are indicative and exclude GST. Actual costs vary by project scale, site conditions, and glass type.
            </p>
            <div className="text-center mt-8">
              <Link to="/contact">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 gap-2">
                  Get Exact Quote — Free Site Visit <ArrowRight size={16} />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── LOCAL SEO: Areas Served ── */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-3">
              Structural Glazing Across Maharashtra
            </h2>
            <p className="text-white/60 mb-10 max-w-xl mx-auto">
              We deliver on-site across Maharashtra with our own fabrication facility in Pune.
            </p>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              {["Pune", "Mumbai BKC", "Navi Mumbai", "Nashik", "Hinjewadi IT Park", "Thane"].map((city) => (
                <div
                  key={city}
                  className="flex items-center gap-2 text-white/80"
                >
                  <MapPin size={14} className="text-amber-500" />
                  <span className="font-medium text-sm tracking-wide">{city}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Testimonials section removed */}

      {/* ── FAQ ── */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
          </FadeIn>
          <div className="space-y-4">
            {[
              {
                q: "What is structural glazing and how does it work?",
                a: "Structural glazing bonds glass to an aluminium frame using structural silicone sealant instead of mechanical fixings — creating a seamless, frameless glass appearance while maintaining structural integrity against wind loads and weather.",
                delay: 0,
              },
              {
                q: "How much does structural glazing cost per sq ft in India in 2026?",
                a: "Standard 2-side SSG ranges from ₹350–₹550 per sq ft. Premium 4-side SSG starts at ₹500–₹800 per sq ft. Spider glazing ranges from ₹800–₹1,500 per sq ft depending on glass type and fittings.",
                delay: 50,
              },
              {
                q: "Is structural glazing safe for high-rise buildings?",
                a: "Yes. Systems are engineered to IS 875 standards, withstanding wind loads of 1.5–4.5 kPa. Fine Glaze uses Dow Corning / Sika structural silicone rated for 25+ years of adhesion strength.",
                delay: 100,
              },
              {
                q: "How long does a structural glazing installation take?",
                a: "Typically 2–6 weeks depending on facade area and building height. Fine Glaze works with milestone-based handovers. Embassy 247 was completed on time with zero delays and zero safety incidents.",
                delay: 150,
              },
              {
                q: "Do you offer structural glazing maintenance after installation?",
                a: "Yes. We provide AMC (Annual Maintenance Contracts) covering sealant inspection, glass replacement, weather seal renewal, and facade cleaning — ensuring long-term performance.",
                delay: 200,
              },
            ].map((item) => (
              <FadeIn key={item.q} delay={item.delay}>
                <div className="bg-background rounded-lg p-6 shadow-sm border border-border">
                  <h3 className="text-base font-bold mb-2 flex items-start gap-2">
                    <span className="text-amber-600 mt-0.5 shrink-0">Q.</span>
                    {item.q}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed pl-5">{item.a}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTERNAL LINKS ── */}
      <section className="py-12 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-xl font-bold text-slate-800 mb-5">Explore Our Other Facade Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { title: "Curtain Wall Systems", href: "/curtain-wall-systems", desc: "Unitized & stick system glazing" },
              { title: "Aluminium Facade", href: "/aluminium-facade", desc: "Aluminium facade systems" },
              { title: "ACP Cladding", href: "/acp-aluminium-cladding", desc: "Composite panel facades" },
              { title: "Glass Railings", href: "/glass-railings", desc: "Balcony & staircase railings" },
              { title: "Facade Maintenance", href: "/maintenance-services", desc: "AMC, repair & waterproofing" },
              { title: "All Services", href: "/services", desc: "Browse our full service range" },
            ].map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="group flex items-start gap-3 p-4 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors bg-white"
              >
                <ArrowRight
                  size={15}
                  className="text-amber-600 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform"
                />
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
}
