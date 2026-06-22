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
  about: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?fm=jpg&q=85&w=1800&auto=format&fit=crop",
  twoSide: "https://images.unsplash.com/photo-1469981283837-561b3779462f?fm=jpg&q=80&w=1200&auto=format&fit=crop",
  fourSide: "https://images.unsplash.com/photo-1621831337128-35676ca30868?fm=jpg&q=80&w=1200&auto=format&fit=crop",
  spider: "https://images.unsplash.com/photo-1509024368907-57294758cfc5?fm=jpg&q=80&w=1200&auto=format&fit=crop",
  canopy: "https://images.unsplash.com/photo-1486927181919-3ac1fc3a8082?fm=jpg&q=80&w=1200&auto=format&fit=crop",
  process: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?fm=jpg&q=85&w=1400&auto=format&fit=crop",
  whyUs: "https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?fm=jpg&q=85&w=2000&auto=format&fit=crop",
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
          ABOUT — image + text side-by-side
          ════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-16">
          <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-center">
            {/* Image */}
            <FadeIn className="relative h-[300px] md:h-[420px] overflow-hidden">
              <img
                src={IMG.about}
                alt="Glass facade building — structural glazing closeup"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </FadeIn>

            {/* Text */}
            <FadeIn delay={100}>
              <p className="text-amber-700 text-xs font-bold tracking-[0.3em] uppercase mb-4">
                What is Structural Glazing
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-stone-900 leading-tight mb-5">
                Glass bonded to structure.
                <span className="text-stone-400"> No frames. No clamps.</span>
              </h2>
              <p className="text-stone-500 text-[15px] leading-relaxed mb-8">
                Structural glazing bonds glass panels directly to aluminium frames using
                high-performance structural silicone sealant — replacing traditional mechanical
                fixings with an invisible bond that creates completely seamless, frameless facades
                for modern commercial buildings.
              </p>

              {/* Stats inline */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { number: "5+", label: "Years" },
                  { number: "10+", label: "Projects" },
                  { number: "0", label: "Incidents" },
                  { number: "25yr", label: "Warranty" },
                ].map((s) => (
                  <div key={s.label} className="text-center py-3 border border-stone-200">
                    <p className="text-xl font-bold text-stone-900">{s.number}</p>
                    <p className="text-stone-400 text-[10px] uppercase tracking-wider mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          SYSTEMS — compact alternating rows
          ════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-stone-50">
        <div className="container mx-auto px-6 md:px-16">
          <FadeIn className="text-center mb-12">
            <p className="text-amber-700 text-xs font-bold tracking-[0.3em] uppercase mb-3">
              Our Systems
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900">
              Structural Glazing Systems We Install
            </h2>
          </FadeIn>

          <div className="space-y-6">
            {/* System 1 — 2-Side SSG */}
            <FadeIn>
              <div className="grid md:grid-cols-5 gap-0 bg-white overflow-hidden">
                <div className="relative h-[240px] md:h-auto md:col-span-2 overflow-hidden">
                  <img src={IMG.twoSide} alt="2-side structural glazing facade" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="md:col-span-3 p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                  <p className="text-amber-700 text-xs font-bold tracking-[0.25em] uppercase mb-2">01</p>
                  <h3 className="text-xl md:text-2xl font-bold text-stone-900 mb-3">2-Side Structural Glazing</h3>
                  <p className="text-stone-500 text-sm leading-relaxed mb-4">
                    Two edges bonded with structural silicone, remaining two held with aluminium pressure caps. The most cost-effective way to get a partially frameless facade — ideal for IT parks, offices, and showrooms.
                  </p>
                  <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-stone-600 mb-4">
                    <span><strong className="text-stone-800">Glass:</strong> 6–12mm toughened</span>
                    <span><strong className="text-stone-800">Wind:</strong> Up to 3.0 kPa</span>
                    <span><strong className="text-stone-800">Best For:</strong> IT parks, offices</span>
                  </div>
                  <p className="text-base font-bold text-stone-900">₹350 – ₹550 <span className="text-xs font-normal text-stone-400">per sq ft</span></p>
                </div>
              </div>
            </FadeIn>

            {/* System 2 — 4-Side SSG (reversed) */}
            <FadeIn>
              <div className="grid md:grid-cols-5 gap-0 bg-white overflow-hidden">
                <div className="md:col-span-3 p-6 md:p-8 lg:p-10 flex flex-col justify-center order-2 md:order-1">
                  <p className="text-amber-700 text-xs font-bold tracking-[0.25em] uppercase mb-2">02</p>
                  <h3 className="text-xl md:text-2xl font-bold text-stone-900 mb-3">4-Side Structural Glazing</h3>
                  <p className="text-stone-500 text-sm leading-relaxed mb-4">
                    All four edges bonded with structural silicone — no external frame visible anywhere. The premium choice for high-end towers and corporate headquarters where a fully flush glass envelope is the design intent.
                  </p>
                  <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-stone-600 mb-4">
                    <span><strong className="text-stone-800">Glass:</strong> 10–19mm DGU / Low-E</span>
                    <span><strong className="text-stone-800">Wind:</strong> Up to 4.5 kPa</span>
                    <span><strong className="text-stone-800">Best For:</strong> Towers, hotels, airports</span>
                  </div>
                  <p className="text-base font-bold text-stone-900">₹500 – ₹800 <span className="text-xs font-normal text-stone-400">per sq ft</span></p>
                </div>
                <div className="relative h-[240px] md:h-auto md:col-span-2 overflow-hidden order-1 md:order-2">
                  <img src={IMG.fourSide} alt="4-side structural glazing — fully flush frameless facade" className="w-full h-full object-cover" loading="lazy" />
                </div>
              </div>
            </FadeIn>

            {/* System 3 — Spider Glazing */}
            <FadeIn>
              <div className="grid md:grid-cols-5 gap-0 bg-white overflow-hidden">
                <div className="relative h-[240px] md:h-auto md:col-span-2 overflow-hidden">
                  <img src={IMG.spider} alt="Spider point-fixed glazing system" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="md:col-span-3 p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                  <p className="text-amber-700 text-xs font-bold tracking-[0.25em] uppercase mb-2">03</p>
                  <h3 className="text-xl md:text-2xl font-bold text-stone-900 mb-3">Spider / Point-Fixed Glazing</h3>
                  <p className="text-stone-500 text-sm leading-relaxed mb-4">
                    Glass panels held by stainless steel spider fittings at precisely drilled points — a near-invisible structural connection that maximises transparency. The go-to system for grand atriums and feature facades.
                  </p>
                  <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-stone-600 mb-4">
                    <span><strong className="text-stone-800">Glass:</strong> 12–19mm laminated</span>
                    <span><strong className="text-stone-800">Fittings:</strong> SS 316 marine-grade</span>
                    <span><strong className="text-stone-800">Best For:</strong> Atriums, lobbies</span>
                  </div>
                  <p className="text-base font-bold text-stone-900">₹800 – ₹1,500 <span className="text-xs font-normal text-stone-400">per sq ft</span></p>
                </div>
              </div>
            </FadeIn>

            {/* System 4 — Glass Canopies (reversed) */}
            <FadeIn>
              <div className="grid md:grid-cols-5 gap-0 bg-white overflow-hidden">
                <div className="md:col-span-3 p-6 md:p-8 lg:p-10 flex flex-col justify-center order-2 md:order-1">
                  <p className="text-amber-700 text-xs font-bold tracking-[0.25em] uppercase mb-2">04</p>
                  <h3 className="text-xl md:text-2xl font-bold text-stone-900 mb-3">Frameless Glass Canopies</h3>
                  <p className="text-stone-500 text-sm leading-relaxed mb-4">
                    Overhead laminated glass supported by structural fins or steel cables — fully weatherproof with integrated drainage. Creates dramatic open entrances for commercial buildings and malls.
                  </p>
                  <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-stone-600 mb-4">
                    <span><strong className="text-stone-800">Glass:</strong> 17.52–21.52mm laminated</span>
                    <span><strong className="text-stone-800">Support:</strong> Aluminium fins / steel</span>
                    <span><strong className="text-stone-800">Best For:</strong> Entrances, malls</span>
                  </div>
                  <p className="text-base font-bold text-stone-900">On Request</p>
                </div>
                <div className="relative h-[240px] md:h-auto md:col-span-2 overflow-hidden order-1 md:order-2">
                  <img src={IMG.canopy} alt="Frameless glass canopy overhead structure" className="w-full h-full object-cover" loading="lazy" />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          WHY FINE GLAZE — image left + text right
          ════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6 md:px-16">
          <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-center">
            <FadeIn className="relative h-[280px] md:h-[380px] overflow-hidden">
              <img
                src={IMG.whyUs}
                alt="Glass facade building — why choose Fine Glaze"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </FadeIn>

            <FadeIn delay={100}>
              <p className="text-amber-700 text-xs font-bold tracking-[0.3em] uppercase mb-3">
                Why Fine Glaze
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-stone-900 leading-tight mb-5">
                Built for performance.
                <span className="text-stone-400"> Delivered on schedule.</span>
              </h2>
              <div className="space-y-3 text-stone-500 text-sm leading-relaxed">
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
              <div className="mt-6">
                <Link
                  to="/contact"
                  className="text-amber-700 font-semibold text-sm hover:text-amber-800 transition-colors tracking-wide"
                >
                  Talk to Our Engineers →
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          HOW WE WORK — compact steps + image
          ════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-stone-50">
        <div className="container mx-auto px-6 md:px-16">
          <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-center">
            <FadeIn>
              <p className="text-amber-700 text-xs font-bold tracking-[0.3em] uppercase mb-3">
                How We Work
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-8">
                From first visit to final handover
              </h2>

              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    title: "Site Visit & Consultation",
                    desc: "Our engineers visit your site, assess the building structure, and provide a detailed scope with material specifications.",
                  },
                  {
                    step: "02",
                    title: "Engineering & Drawings",
                    desc: "In-house shop drawings and structural calculations — every component engineered to IS standards and wind-load requirements.",
                  },
                  {
                    step: "03",
                    title: "Fabrication & Installation",
                    desc: "Aluminium and glass systems fabricated at our Pune facility. Installed by certified teams with quality checkpoints at every stage.",
                  },
                  {
                    step: "04",
                    title: "Handover & Maintenance",
                    desc: "Quality inspection before handover. Ongoing AMC contracts keep your facade weatherproof for years.",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <span className="text-2xl font-bold text-stone-200 shrink-0 w-8">{item.step}</span>
                    <div>
                      <h3 className="text-base font-bold text-stone-900 mb-1">{item.title}</h3>
                      <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={100} className="hidden md:block">
              <div className="relative h-[420px] overflow-hidden">
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
          PRICING TABLE
          ════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6 md:px-16 max-w-3xl">
          <FadeIn className="text-center mb-10">
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
                    <th className="py-3 text-xs font-bold uppercase tracking-wider text-stone-500">Glass Spec</th>
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
                    <tr key={row.system} className="border-b border-stone-100">
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
          AREAS SERVED — dark band
          ════════════════════════════════════════════════════ */}
      <section className="bg-stone-900 py-12">
        <div className="container mx-auto px-6 md:px-16 text-center">
          <FadeIn>
            <p className="text-amber-400 text-xs font-bold tracking-[0.3em] uppercase mb-3">
              Where We Work
            </p>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
              Structural Glazing Across Maharashtra
            </h2>
            <p className="text-stone-500 max-w-md mx-auto mb-8 text-sm">
              In-house fabrication in Pune. On-site installation teams across the state.
            </p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
              {["Pune", "Mumbai BKC", "Navi Mumbai", "Nashik", "Hinjewadi", "Thane", "Pimpri-Chinchwad"].map((city) => (
                <div key={city} className="flex items-center gap-2">
                  <MapPin size={12} className="text-amber-500" />
                  <span className="text-white/70 text-sm">{city}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          FAQ — accordion
          ════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6 md:px-16 max-w-3xl">
          <FadeIn className="mb-10">
            <p className="text-amber-700 text-xs font-bold tracking-[0.3em] uppercase mb-3">
              Common Questions
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
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
          OTHER SERVICES
          ════════════════════════════════════════════════════ */}
      <section className="py-10 bg-stone-50 border-t border-stone-200">
        <div className="container mx-auto px-6 md:px-16 max-w-4xl">
          <FadeIn>
            <h2 className="text-lg font-bold text-stone-800 mb-5">Other Facade Services</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2">
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
                  className="flex items-center gap-2 py-1.5 text-stone-500 hover:text-amber-700 transition-colors group"
                >
                  <ArrowRight size={12} className="text-amber-600 shrink-0 group-hover:translate-x-1 transition-transform" />
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
