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
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-base md:text-lg font-semibold text-stone-800 pr-8 group-hover:text-amber-700 transition-colors">
          {q}
        </span>
        <ChevronDown
          size={20}
          className={cn(
            "text-stone-400 shrink-0 transition-transform duration-300",
            open && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          open ? "max-h-96 pb-5" : "max-h-0"
        )}
      >
        <p className="text-stone-500 leading-relaxed text-[15px]">{a}</p>
      </div>
    </div>
  );
}

/* ── High-quality stock images — real facade/glazing photography ── */
const IMG = {
  hero: "https://images.unsplash.com/photo-1430417934865-589b63ad5c00?fm=jpg&q=85&w=2400&auto=format&fit=crop",
  about: "https://images.unsplash.com/photo-1486718448742-163732cd1544?fm=jpg&q=85&w=1400&auto=format&fit=crop",
  twoSide: "https://images.unsplash.com/photo-1469981283837-561b3779462f?fm=jpg&q=80&w=1200&auto=format&fit=crop",
  fourSide: "https://images.unsplash.com/photo-1621831337128-35676ca30868?fm=jpg&q=80&w=1200&auto=format&fit=crop",
  spider: "https://images.unsplash.com/photo-1509024368907-57294758cfc5?fm=jpg&q=80&w=1200&auto=format&fit=crop",
  canopy: "https://images.unsplash.com/photo-1486927181919-3ac1fc3a8082?fm=jpg&q=80&w=1200&auto=format&fit=crop",
  process: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?fm=jpg&q=85&w=1400&auto=format&fit=crop",
  whyUs: "https://images.unsplash.com/photo-1523477593243-78bbf626fd3b?fm=jpg&q=85&w=1400&auto=format&fit=crop",
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
          HERO — full-bleed cinematic photo
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
          ABOUT — full-width image + text overlay band
          ════════════════════════════════════════════════════ */}
      <section className="relative">
        {/* Large photo band */}
        <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <img
            src={IMG.about}
            alt="Modern glass facade building"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/90 via-stone-900/60 to-transparent" />

          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-6 md:px-16">
              <FadeIn className="max-w-xl">
                <p className="text-amber-400 text-xs font-bold tracking-[0.3em] uppercase mb-4">
                  What is Structural Glazing
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                  Glass bonded to structure.<br />
                  <span className="text-white/70">No frames. No clamps.</span>
                </h2>
                <p className="text-white/70 text-base md:text-lg leading-relaxed">
                  Structural glazing bonds glass panels directly to aluminium frames using
                  high-performance structural silicone sealant — replacing traditional mechanical
                  fixings with an invisible bond that creates completely seamless, frameless facades
                  for modern commercial buildings.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>

        {/* Stats band — simple dark strip */}
        <div className="bg-stone-900 py-8">
          <div className="container mx-auto px-6 md:px-16">
            <div className="flex flex-wrap justify-between items-center gap-6 md:gap-8">
              {[
                { number: "5+", label: "Years in Business" },
                { number: "10+", label: "Landmark Projects" },
                { number: "0", label: "Safety Incidents" },
                { number: "🏆", label: "Embassy REIT Award" },
              ].map((s) => (
                <div key={s.label} className="text-center flex-1 min-w-[120px]">
                  <p className="text-2xl md:text-3xl font-bold text-white">{s.number}</p>
                  <p className="text-stone-400 text-xs uppercase tracking-wider mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          SYSTEMS — alternating image + text rows
          ════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6 md:px-16">
          <FadeIn className="text-center mb-16 md:mb-20">
            <p className="text-amber-700 text-xs font-bold tracking-[0.3em] uppercase mb-3">
              Our Systems
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900">
              Structural Glazing Systems We Install
            </h2>
          </FadeIn>

          {/* System 1 — 2-Side SSG */}
          <div className="grid md:grid-cols-2 gap-0 mb-1">
            <FadeIn className="relative h-[350px] md:h-[450px] overflow-hidden">
              <img
                src={IMG.twoSide}
                alt="2-side structural glazing facade"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </FadeIn>
            <FadeIn delay={100} className="bg-stone-50 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <p className="text-amber-700 text-xs font-bold tracking-[0.25em] uppercase mb-3">01</p>
              <h3 className="text-2xl md:text-3xl font-bold text-stone-900 mb-4">
                2-Side Structural Glazing
              </h3>
              <p className="text-stone-500 leading-relaxed mb-6">
                Two edges bonded with structural silicone, remaining two held with aluminium
                pressure caps. The most cost-effective way to get a partially frameless facade
                — ideal for IT parks, commercial offices, and showroom fronts.
              </p>
              <div className="space-y-2 text-sm text-stone-600 mb-6">
                <p><span className="font-semibold text-stone-800">Glass:</span> 6mm – 12mm toughened</p>
                <p><span className="font-semibold text-stone-800">Wind Load:</span> Up to 3.0 kPa</p>
                <p><span className="font-semibold text-stone-800">Best For:</span> IT parks, commercial offices, showrooms</p>
              </div>
              <p className="text-lg font-bold text-stone-900">₹350 – ₹550 <span className="text-sm font-normal text-stone-400">per sq ft</span></p>
            </FadeIn>
          </div>

          {/* System 2 — 4-Side SSG (reversed) */}
          <div className="grid md:grid-cols-2 gap-0 mb-1">
            <FadeIn delay={100} className="bg-stone-50 p-8 md:p-12 lg:p-16 flex flex-col justify-center order-2 md:order-1">
              <p className="text-amber-700 text-xs font-bold tracking-[0.25em] uppercase mb-3">02</p>
              <h3 className="text-2xl md:text-3xl font-bold text-stone-900 mb-4">
                4-Side Structural Glazing
              </h3>
              <p className="text-stone-500 leading-relaxed mb-6">
                All four edges bonded with structural silicone — no external frame visible
                anywhere. The premium choice for high-end towers and corporate headquarters
                where a fully flush glass envelope is the design intent.
              </p>
              <div className="space-y-2 text-sm text-stone-600 mb-6">
                <p><span className="font-semibold text-stone-800">Glass:</span> 10mm – 19mm DGU / Low-E</p>
                <p><span className="font-semibold text-stone-800">Wind Load:</span> Up to 4.5 kPa</p>
                <p><span className="font-semibold text-stone-800">Best For:</span> High-rise towers, luxury hotels, airports</p>
              </div>
              <p className="text-lg font-bold text-stone-900">₹500 – ₹800 <span className="text-sm font-normal text-stone-400">per sq ft</span></p>
            </FadeIn>
            <FadeIn className="relative h-[350px] md:h-[450px] overflow-hidden order-1 md:order-2">
              <img
                src={IMG.fourSide}
                alt="4-side structural glazing — fully flush frameless facade"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </FadeIn>
          </div>

          {/* System 3 — Spider Glazing */}
          <div className="grid md:grid-cols-2 gap-0 mb-1">
            <FadeIn className="relative h-[350px] md:h-[450px] overflow-hidden">
              <img
                src={IMG.spider}
                alt="Spider point-fixed glazing system"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </FadeIn>
            <FadeIn delay={100} className="bg-stone-50 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <p className="text-amber-700 text-xs font-bold tracking-[0.25em] uppercase mb-3">03</p>
              <h3 className="text-2xl md:text-3xl font-bold text-stone-900 mb-4">
                Spider / Point-Fixed Glazing
              </h3>
              <p className="text-stone-500 leading-relaxed mb-6">
                Glass panels held by stainless steel spider fittings at precisely drilled
                points — a near-invisible structural connection that maximises transparency.
                The go-to system for grand atrium walls and feature facades.
              </p>
              <div className="space-y-2 text-sm text-stone-600 mb-6">
                <p><span className="font-semibold text-stone-800">Glass:</span> 12mm – 19mm laminated safety glass</p>
                <p><span className="font-semibold text-stone-800">Fittings:</span> SS 316 marine-grade spider fittings</p>
                <p><span className="font-semibold text-stone-800">Best For:</span> Atrium walls, grand lobbies, feature facades</p>
              </div>
              <p className="text-lg font-bold text-stone-900">₹800 – ₹1,500 <span className="text-sm font-normal text-stone-400">per sq ft</span></p>
            </FadeIn>
          </div>

          {/* System 4 — Glass Canopies (reversed) */}
          <div className="grid md:grid-cols-2 gap-0">
            <FadeIn delay={100} className="bg-stone-50 p-8 md:p-12 lg:p-16 flex flex-col justify-center order-2 md:order-1">
              <p className="text-amber-700 text-xs font-bold tracking-[0.25em] uppercase mb-3">04</p>
              <h3 className="text-2xl md:text-3xl font-bold text-stone-900 mb-4">
                Frameless Glass Canopies
              </h3>
              <p className="text-stone-500 leading-relaxed mb-6">
                Overhead laminated glass supported by structural fins or steel cables —
                fully weatherproof with integrated drainage. Creates dramatic open entrances
                for commercial buildings and malls.
              </p>
              <div className="space-y-2 text-sm text-stone-600 mb-6">
                <p><span className="font-semibold text-stone-800">Glass:</span> 17.52mm or 21.52mm laminated</p>
                <p><span className="font-semibold text-stone-800">Support:</span> Thermally broken aluminium or steel fins</p>
                <p><span className="font-semibold text-stone-800">Best For:</span> Building entrances, malls, sky bridges</p>
              </div>
              <p className="text-lg font-bold text-stone-900">On Request</p>
            </FadeIn>
            <FadeIn className="relative h-[350px] md:h-[450px] overflow-hidden order-1 md:order-2">
              <img
                src={IMG.canopy}
                alt="Frameless glass canopy overhead structure"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </FadeIn>
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          WHY FINE GLAZE — photo + text
          ════════════════════════════════════════════════════ */}
      <section className="relative">
        <div className="relative h-[50vh] md:h-[55vh] overflow-hidden">
          <img
            src={IMG.whyUs}
            alt="Glass facade building — why choose Fine Glaze"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-stone-900/90 via-stone-900/60 to-transparent" />

          <div className="absolute inset-0 flex items-center justify-end">
            <div className="container mx-auto px-6 md:px-16">
              <FadeIn className="max-w-xl ml-auto">
                <p className="text-amber-400 text-xs font-bold tracking-[0.3em] uppercase mb-4">
                  Why Fine Glaze
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
                  Built for performance.<br />
                  <span className="text-white/70">Delivered on schedule.</span>
                </h2>
                <div className="space-y-4 text-white/70 text-[15px] leading-relaxed">
                  <p>
                    We design, fabricate, and install every facade from our own facility in Pune.
                    No subcontracting the critical work. Our certified teams follow strict safety
                    protocols — zero incidents across every project delivered.
                  </p>
                  <p>
                    From the LTIMindtree campus in Navi Mumbai to the Embassy 247 facade glass
                    replacement — we bring engineering precision and on-time delivery to every build.
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-8">
                  <Link
                    to="/contact"
                    className="text-white font-semibold text-sm border-b border-amber-400 pb-0.5 hover:text-amber-400 transition-colors tracking-wide"
                  >
                    Talk to Our Engineers →
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          HOW WE WORK — simple numbered steps
          ════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6 md:px-16">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <FadeIn>
              <p className="text-amber-700 text-xs font-bold tracking-[0.3em] uppercase mb-3">
                How We Work
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-10">
                From first visit to final handover
              </h2>

              <div className="space-y-8">
                {[
                  {
                    step: "01",
                    title: "Site Visit & Consultation",
                    desc: "Our engineers visit your site, assess the building structure, understand your design vision, and provide a detailed scope with material specifications.",
                  },
                  {
                    step: "02",
                    title: "Engineering & Drawings",
                    desc: "In-house shop drawings and structural calculations — every component engineered to IS standards, wind-load requirements, and site conditions.",
                  },
                  {
                    step: "03",
                    title: "Fabrication & Installation",
                    desc: "Aluminium and glass systems fabricated at our Pune facility. Installed by certified teams with safety protocols and quality checkpoints at every stage.",
                  },
                  {
                    step: "04",
                    title: "Handover & Maintenance",
                    desc: "Thorough quality inspection before handover. Ongoing AMC contracts keep your facade weatherproof and structurally sound for years.",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-6">
                    <span className="text-3xl font-bold text-stone-200 shrink-0 w-10">{item.step}</span>
                    <div>
                      <h3 className="text-lg font-bold text-stone-900 mb-1">{item.title}</h3>
                      <p className="text-stone-500 text-[15px] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={150} className="hidden md:block">
              <div className="relative h-[550px] overflow-hidden">
                <img
                  src={IMG.process}
                  alt="Construction workers installing glass facade"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          PRICING TABLE — clean, embedded
          ════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-stone-50">
        <div className="container mx-auto px-6 md:px-16 max-w-4xl">
          <FadeIn className="text-center mb-12">
            <p className="text-amber-700 text-xs font-bold tracking-[0.3em] uppercase mb-3">
              Pricing
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-3">
              Structural Glazing Cost in India — 2026
            </h2>
            <p className="text-stone-500 max-w-xl mx-auto">
              Indicative pricing. Final cost depends on building height, glass specification,
              and project complexity. GST extra.
            </p>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="overflow-hidden">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b-2 border-stone-900">
                    <th className="py-4 text-xs font-bold uppercase tracking-wider text-stone-500">System</th>
                    <th className="py-4 text-xs font-bold uppercase tracking-wider text-stone-500">Glass Spec</th>
                    <th className="py-4 text-xs font-bold uppercase tracking-wider text-stone-500 text-right">Rate / sq ft</th>
                  </tr>
                </thead>
                <tbody className="text-[15px]">
                  {[
                    { system: "2-Side SSG", glass: "6 – 12 mm toughened", price: "₹350 – ₹550" },
                    { system: "4-Side SSG", glass: "10 – 19 mm DGU / Low-E", price: "₹500 – ₹800" },
                    { system: "Spider / Point-Fixed", glass: "12 – 19 mm laminated", price: "₹800 – ₹1,500" },
                    { system: "Frameless Canopy", glass: "17.52 – 21.52 mm laminated", price: "On request" },
                  ].map((row) => (
                    <tr key={row.system} className="border-b border-stone-200">
                      <td className="py-4 font-semibold text-stone-800">{row.system}</td>
                      <td className="py-4 text-stone-500">{row.glass}</td>
                      <td className="py-4 text-right font-bold text-stone-900">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-10 text-center">
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
          AREAS SERVED — dark band with locations
          ════════════════════════════════════════════════════ */}
      <section className="bg-stone-900 py-14">
        <div className="container mx-auto px-6 md:px-16 text-center">
          <FadeIn>
            <p className="text-amber-400 text-xs font-bold tracking-[0.3em] uppercase mb-4">
              Where We Work
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Structural Glazing Across Maharashtra
            </h2>
            <p className="text-stone-400 max-w-lg mx-auto mb-10 text-[15px]">
              In-house fabrication in Pune. On-site installation teams across the state.
            </p>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
              {["Pune", "Mumbai BKC", "Navi Mumbai", "Nashik", "Hinjewadi", "Thane"].map((city) => (
                <div key={city} className="flex items-center gap-2">
                  <MapPin size={14} className="text-amber-500" />
                  <span className="text-white/80 text-sm tracking-wide">{city}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          FAQ — accordion style
          ════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6 md:px-16 max-w-3xl">
          <FadeIn className="mb-12">
            <p className="text-amber-700 text-xs font-bold tracking-[0.3em] uppercase mb-3">
              Common Questions
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900">
              Frequently Asked Questions
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
                q="How long does a structural glazing installation take?"
                a="Typically 2–6 weeks depending on facade area and building height. Fine Glaze works with milestone-based handovers. Embassy 247 was completed on time with zero delays and zero safety incidents."
              />
              <FAQItem
                q="Do you offer maintenance after installation?"
                a="Yes. We provide AMC (Annual Maintenance Contracts) covering sealant inspection, glass replacement, weather seal renewal, and facade cleaning — ensuring long-term performance and weatherproofing."
              />
            </div>
          </FadeIn>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          OTHER SERVICES — simple text links
          ════════════════════════════════════════════════════ */}
      <section className="py-14 bg-stone-50 border-t border-stone-200">
        <div className="container mx-auto px-6 md:px-16 max-w-4xl">
          <FadeIn>
            <h2 className="text-xl font-bold text-stone-800 mb-6">Explore Our Other Facade Services</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-8">
              {[
                { title: "Curtain Wall Systems", href: "/curtain-wall-systems" },
                { title: "Aluminium Facade", href: "/aluminium-facade" },
                { title: "ACP Cladding", href: "/acp-aluminium-cladding" },
                { title: "Glass Railings", href: "/glass-railings" },
                { title: "Facade Maintenance", href: "/maintenance-services" },
                { title: "All Services", href: "/services" },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="flex items-center gap-2 py-2 text-stone-600 hover:text-amber-700 transition-colors group"
                >
                  <ArrowRight
                    size={14}
                    className="text-amber-600 shrink-0 group-hover:translate-x-1 transition-transform"
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
