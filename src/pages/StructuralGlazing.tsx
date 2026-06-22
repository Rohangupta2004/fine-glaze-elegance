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
  Building2,
  Sun,
  ShieldCheck,
  Wrench,
  Leaf,
  Phone,
  Star,
  Trophy,
  IndianRupee,
  Clock,
  Layers,
} from "lucide-react";
import { ServiceHero } from "@/components/ServiceHero";
import { useSiteMedia } from "@/hooks/useSiteMedia";
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

export default function StructuralGlazing() {
  const { getMedia } = useSiteMedia();

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
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "29",
        bestRating: "5",
      },
    },
    areaServed: [
      { "@type": "City", name: "Pune" },
      { "@type": "City", name: "Mumbai" },
      { "@type": "City", name: "Navi Mumbai" },
      { "@type": "City", name: "Nashik" },
      { "@type": "State", name: "Maharashtra" },
    ],
    description:
      "Frameless structural glazing systems — 2-side, 4-side & spider glazing for commercial buildings, showrooms, and premium architecture across India. ₹350–₹1,500/sq ft.",
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: "350",
        maxPrice: "1500",
        priceCurrency: "INR",
        unitText: "per sq ft",
      },
    },
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
          text: "Structural glazing is a method of bonding glass to an aluminium frame using structural silicone sealant instead of mechanical fixings. This creates a seamless, frameless glass appearance on the building exterior while maintaining structural integrity against wind loads and weather.",
        },
      },
      {
        "@type": "Question",
        name: "How much does structural glazing cost per sq ft in India in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Standard 2-side structural glazing ranges from ₹350–₹550 per sq ft. Premium 4-side structural glazing starts at ₹500–₹800 per sq ft. Spider glazing systems range from ₹800–₹1,500 per sq ft depending on glass type and fittings.",
        },
      },
      {
        "@type": "Question",
        name: "Is structural glazing safe for high-rise buildings?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Structural glazing systems are engineered to IS 875 standards and can withstand wind loads of 1.5 to 4.5 kPa. Fine Glaze uses high-performance structural silicone (Dow Corning / Sika) rated for 25+ years of adhesion strength.",
        },
      },
      {
        "@type": "Question",
        name: "How long does a structural glazing installation take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Typically 2–6 weeks depending on facade area and building height. Fine Glaze works with detailed installation schedules and milestone-based handovers, with a track record of on-time delivery.",
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

      {/* ── HERO ── */}
      <ServiceHero
        image={getMedia("structural_glazing_hero", "/Embassy.webp")}
        titleLead="Structural "
        titleAccent="Glazing Systems"
        titleTail=" in India"
        subtitle="Frameless structural glazing delivering maximum transparency, elegance, and performance for modern buildings by Fine Glaze."
        features={[
          { icon: Building2, title: "Aesthetic Appeal", description: "Sleek, frameless look with unobstructed views." },
          { icon: Sun, title: "Natural Light", description: "Maximizes daylight, cuts artificial lighting." },
          { icon: ShieldCheck, title: "Durability", description: "High-grade silicone & fittings that last 25+ years." },
          { icon: Wrench, title: "Low Maintenance", description: "Easy to clean with minimal hardware." },
          { icon: Leaf, title: "Energy Efficient", description: "Reduces heat gain, improves insulation." },
        ]}
      />

      {/* ── STATS BAR ── */}
      <section className="bg-amber-600 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "10+", label: "Years Experience" },
              { value: "50+", label: "Projects Delivered" },
              { value: "25yr", label: "Silicone Warranty" },
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

      {/* ── ADVANTAGES — 3 real project photos ── */}
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
                img: "/Embassyoark.webp",
                alt: "Frameless glazed facade - Fine Glaze project",
                title: "Frameless Appearance",
                desc: "Clean glass surfaces with no visible external frames — a stunning modern aesthetic, as seen on our award-winning Embassy 247 project.",
                delay: 0,
              },
              {
                img: "/Glass installation.webp",
                alt: "Structural glazing installation by Fine Glaze team",
                title: "Expert Installation",
                desc: "Certified glazing crews use vacuum lifters and suspended platforms for precision panel placement. Zero safety incidents across all projects.",
                delay: 100,
              },
              {
                img: "/ltimindtree-mensa-campus-mahape-navi-mumbai-1 (1).webp",
                alt: "LTIMindtree campus - structural glazing Navi Mumbai",
                title: "25-Year Structural Strength",
                desc: "Engineered to IS 875 standards using Dow Corning / Sika silicone rated for 25+ years — proven on high-rise campuses like LTIMindtree.",
                delay: 200,
              },
            ].map((item) => (
              <FadeIn key={item.title} delay={item.delay}>
                <div className="bg-background rounded-2xl shadow-sm overflow-hidden border border-border hover:shadow-md transition-shadow duration-300 h-full">
                  <div className="relative overflow-hidden h-52">
                    <img
                      src={item.img}
                      alt={item.alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
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
              <div className="relative rounded-2xl overflow-hidden shadow-xl h-[420px]">
                <img
                  src="/Glass installation.webp"
                  alt="Fine Glaze team installing structural glazing panels on high-rise"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width="600"
                  height="420"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-600 text-xs font-bold uppercase tracking-wide mb-2">
                    <Trophy size={12} /> Award-Winning Team
                  </div>
                  <p className="text-sm text-white/90 font-medium">
                    Certified glazing installation — zero safety incidents, every project.
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
                image: "/Business park.webp",
                imageAlt: "2-side SSG office building facade — Fine Glaze",
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
                image: "/Embassy.webp",
                imageAlt: "4-side SSG premium corporate campus — Fine Glaze",
                delay: 100,
              },
              {
                name: "Spider / Point-Fixed Glazing",
                tagline: "Glass suspended by SS316 spider fittings",
                description:
                  "Glass panels held by stainless steel spiders at precise drilled points — a near-invisible structural connection maximising transparency, popular for atrium walls.",
                specs: [
                  "12mm – 19mm laminated safety glass",
                  "SS 316 marine-grade spider fittings",
                  "Countersunk bolt fixings",
                  "Expansion joints every 6m",
                ],
                bestFor: "Atrium walls, grand lobbies, feature facades",
                price: "₹800 – ₹1,500 / sq ft",
                image: "/Glazing.webp",
                imageAlt: "Spider point-fixed glazing with SS316 fittings — Fine Glaze",
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
                image: "/Embassyoark.webp",
                imageAlt: "Frameless glass canopy entrance — Fine Glaze structural glazing",
                delay: 100,
              },
            ].map((type) => (
              <FadeIn key={type.name} delay={type.delay}>
                <div className="bg-background rounded-2xl shadow-sm overflow-hidden border border-border hover:border-amber-300 hover:shadow-md transition-all duration-300 flex flex-col h-full">
                  <div className="relative overflow-hidden h-52">
                    <img
                      src={type.image}
                      alt={type.imageAlt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      width="600"
                      height="208"
                    />
                    {/* Price badge */}
                    <div className="absolute top-4 right-4 bg-amber-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                      <IndianRupee size={11} />
                      {type.price.replace("₹", "")}
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
                    <div className="mt-auto pt-4 border-t border-border flex items-center justify-between">
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
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <FadeIn>
            <div className="flex items-end justify-between mb-10">
              <div>
                <h2 className="text-3xl font-bold mb-2">Our Structural Glazing Projects</h2>
                <p className="text-muted-foreground max-w-xl">
                  From corporate campuses to commercial towers — precision structural glazing across Maharashtra's most prominent buildings.
                </p>
              </div>
              <Link to="/portfolio" className="hidden md:flex items-center gap-2 text-amber-600 hover:text-amber-700 font-semibold text-sm transition-colors">
                All Projects <ArrowRight size={15} />
              </Link>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                img: "/ltimindtree-mensa-campus-mahape-navi-mumbai-1 (1).webp",
                alt: "LTIMindtree Campus Navi Mumbai — structural glazing by Fine Glaze",
                location: "Navi Mumbai",
                name: "LTIMindtree Campus",
                desc: "Full-height structural glazing facade",
                badge: null,
                delay: 0,
              },
              {
                img: "/Embassyoark.webp",
                alt: "Embassy 247 facade glass replacement — Fine Glaze award project",
                location: "Mumbai · Vikhroli",
                name: "Embassy 247",
                desc: "Best Performance Vendor 2024 — Embassy REIT",
                badge: "🏆 Award",
                delay: 100,
              },
              {
                img: "/Embassy.webp",
                alt: "Premium glass facade corporate campus — Fine Glaze structural glazing",
                location: "Pune",
                name: "Leela Business Park",
                desc: "4-side SSG with DGU Low-E glass",
                badge: null,
                delay: 200,
              },
            ].map((project) => (
              <FadeIn key={project.name} delay={project.delay}>
                <div className="group relative rounded-2xl overflow-hidden shadow-md h-72 cursor-pointer">
                  <img
                    src={project.img}
                    alt={project.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width="600"
                    height="288"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                  {project.badge && (
                    <div className="absolute top-4 left-4 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {project.badge}
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 p-5 text-white">
                    <p className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-1">
                      {project.location}
                    </p>
                    <h3 className="text-lg font-bold">{project.name}</h3>
                    <p className="text-xs text-white/70">{project.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link to="/portfolio">
              <Button variant="outline" size="lg" className="gap-2">
                View All Projects <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROCESS SECTION ── */}
      <ProcessSection />

      {/* ── PRICING TABLE ── */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-3 text-center">Structural Glazing Cost in India 2026</h2>
            <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
              Indicative pricing ranges — final cost depends on building height, glass specification, and project complexity. Get an exact quote with a free site visit.
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
                      <td className="px-6 py-4 font-semibold text-foreground flex items-center gap-2">
                        {row.highlight && <Layers size={14} className="text-amber-600 shrink-0" />}
                        {row.system}
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
              Structural Glazing Services Across Maharashtra
            </h2>
            <p className="text-white/60 mb-10 max-w-xl mx-auto">
              We deliver on-site across Maharashtra with our own fabrication facility in Pune.
            </p>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="flex flex-wrap justify-center gap-4">
              {["Pune", "Mumbai BKC", "Navi Mumbai", "Nashik", "Hinjewadi IT Park", "Thane"].map((city) => (
                <div
                  key={city}
                  className="flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full hover:bg-amber-600 transition-colors cursor-default"
                >
                  <MapPin size={16} />
                  <span className="font-medium">{city}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-3 text-center">What Clients Say</h2>
            <div className="flex items-center justify-center gap-1 mb-10">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={20} className="fill-amber-500 text-amber-500" />
              ))}
              <span className="ml-2 font-bold text-foreground">4.9</span>
              <span className="text-muted-foreground text-sm ml-1">· 29 reviews</span>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                quote:
                  "Fine Glaze delivered a flawless structural glazing facade for our Embassy 247 project in Vikhroli. Zero safety incidents, on time, exceptional quality.",
                name: "Embassy REIT",
                role: "Best Performance Vendor 2024",
                delay: 0,
              },
              {
                quote:
                  "Their team handled a complex 4-side SSG system on a tight deadline. The precision of installation and the quality of silicone work was outstanding.",
                name: "LTIMindtree Campus",
                role: "Navi Mumbai",
                delay: 100,
              },
            ].map((review) => (
              <FadeIn key={review.name} delay={review.delay}>
                <div className="bg-muted rounded-2xl p-8 border border-border h-full">
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} size={16} className="fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 leading-relaxed italic">"{review.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center text-white font-bold text-sm">
                      {review.name[0]}
                    </div>
                    <div>
                      <p className="font-bold text-sm">{review.name}</p>
                      <p className="text-xs text-muted-foreground">{review.role}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

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
                <div className="bg-background rounded-xl p-6 shadow-sm border border-border hover:border-amber-300 transition-colors">
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
                className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-amber-300 hover:bg-amber-50 transition-all bg-white"
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
