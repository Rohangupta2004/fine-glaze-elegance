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
const IMG: Record<string, string> = {
  hero: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?fm=jpg&q=85&w=2400&auto=format&fit=crop",
  sliding: "/Aluminium windows.webp",
  casement: "/Window.webp",
  tilt: "/Tilt.webp",
  lift: "/Thermal.webp",
  process: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?fm=jpg&q=85&w=1400&auto=format&fit=crop",
};

/* ── System data ── */
const SYSTEMS = [
  {
    num: "01",
    title: "Sliding Doors & Windows",
    desc: "Smooth-gliding aluminium sliding systems with multi-track options for wide openings. Available in 2-track, 3-track, and lift-slide configurations for seamless indoor-outdoor transitions.",
    glass: "Thermal break profile",
    wind: "Up to 45dB insulation",
    bestFor: "Living rooms, balconies",
    price: "₹450 – ₹800 /sq ft",
    img: "sliding",
  },
  {
    num: "02",
    title: "Casement Windows",
    desc: "Outward or inward opening windows with concealed multi-point locking. Excellent weather sealing with double EPDM gaskets. Best for bedrooms and offices requiring ventilation control.",
    glass: "Thermal break profile",
    wind: "Multi-point locking",
    bestFor: "Bedrooms, offices",
    price: "₹500 – ₹900 /sq ft",
    img: "casement",
  },
  {
    num: "03",
    title: "Tilt-Turn Windows",
    desc: "European-style dual-function windows — tilt inward for ventilation, turn fully for cleaning access. The most versatile window system for high-rise residential and commercial projects.",
    glass: "European hardware",
    wind: "Dual-function open",
    bestFor: "High-rises, premium homes",
    price: "₹700 – ₹1,200 /sq ft",
    img: "tilt",
  },
  {
    num: "04",
    title: "Lift-Slide Doors",
    desc: "Large-format sliding doors that lift off the track for effortless movement. Handles panels up to 400 kg. Creates expansive openings up to 6 metres wide for luxury villas and penthouses.",
    glass: "Heavy-duty track",
    wind: "Up to 400 kg / panel",
    bestFor: "Villas, penthouses",
    price: "₹900 – ₹1,500 /sq ft",
    img: "lift",
  },
];

const STEPS = [
  { num: "01", title: "Consultation", desc: "Understand your space, usage & design preferences" },
  { num: "02", title: "Measurement", desc: "Precise on-site survey with laser measurement tools" },
  { num: "03", title: "Fabrication", desc: "CNC cutting, assembly & powder coating at our facility" },
  { num: "04", title: "Installation", desc: "Professional fitting with weather seal & alignment check" },
];

export default function AluminiumFacade() {
  const [activeSystem, setActiveSystem] = useState(0);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Aluminium Doors & Windows",
    serviceType: "Aluminium Door & Window Installation",
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
    description: "Premium aluminium doors and windows with thermal break profiles. Sliding, casement, tilt-turn & lift-slide systems. Up to 60% heat reduction. 20-year finish warranty.",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fineglaze.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://fineglaze.com/services" },
      { "@type": "ListItem", position: 3, name: "Aluminium Doors & Windows", item: "https://fineglaze.com/aluminium-facade" },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is a thermal break aluminium window?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Thermal break windows have a polyamide insulating strip between the inner and outer aluminium profiles. This breaks the thermal bridge, reducing heat transfer by up to 60% and preventing condensation — ideal for air-conditioned spaces.",
        },
      },
      {
        "@type": "Question",
        name: "How much do aluminium windows cost per sq ft in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Standard sliding windows start at ₹450/sq ft. Casement windows range from ₹500–₹900/sq ft. Premium tilt-turn systems cost ₹700–₹1,200/sq ft. Lift-slide doors range from ₹900–₹1,500/sq ft.",
        },
      },
      {
        "@type": "Question",
        name: "Are aluminium windows better than uPVC?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Aluminium offers superior strength, slimmer profiles (more glass area), and better longevity — especially in Indian climates. With thermal break technology, they match uPVC thermal performance while being 100% recyclable and available in unlimited colour options.",
        },
      },
    ],
  };

  const current = SYSTEMS[activeSystem];

  return (
    <Layout darkHero>
      <SEO
        title="Aluminium Doors & Windows | Thermal Break Window Systems Pune & Mumbai – Fine Glaze"
        description="Premium aluminium doors and windows in Pune & Mumbai. Sliding, casement, tilt-turn & lift-slide systems with thermal break profiles. 20-year powder coat warranty. Free site visit."
        canonical="https://fineglaze.com/aluminium-facade"
        keywords="aluminium doors windows, aluminium windows Pune, thermal break windows, sliding windows Mumbai, casement windows India, aluminium door systems, tilt turn windows, lift slide doors"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* ════════════ HERO ════════════ */}
      <section className="relative h-screen overflow-hidden">
        <img
          src={IMG.hero}
          alt="Aluminium window system — Fine Glaze"
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
            Aluminium<br />
            <span className="text-gradient-gold">Doors &</span><br />
            <span style={{ fontSize: "clamp(2rem, 4.5vw, 4.8rem)", fontWeight: 600, color: "rgba(255,255,255,0.85)" }}>
              Windows.
            </span>
          </h1>

          <p
            className="mt-6 text-white/70 text-base md:text-lg max-w-lg leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Thermal break aluminium systems for homes, offices & commercial buildings across India.
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


      {/* ════════════ INTRO ════════════ */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6 md:px-16 max-w-3xl text-center">
          <FadeIn>
            <p className="text-amber-700 text-xs font-bold tracking-[0.3em] uppercase mb-4">
              Why Aluminium
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-stone-900 leading-snug mb-5">
              Precision-engineered profiles for thermal comfort —{"  "}
              <span className="text-stone-400">sleek design that lasts decades without maintenance.</span>
            </h2>
            <p className="text-stone-500 text-[15px] md:text-base leading-relaxed">
              Our aluminium door and window systems use thermally broken 6063-T6 alloy profiles that reduce heat transfer by up to 60%. Available in sliding, casement, tilt-turn, and lift-slide configurations with multi-point locking, weather sealing, and powder-coated finishes in any RAL colour.
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
                { number: "60%", label: "Heat Reduction" },
                { number: "45dB", label: "Sound Insulation" },
                { number: "20yr", label: "Finish Warranty" },
                { number: "Any RAL", label: "Custom Colours" },
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
              Our Systems
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              Aluminium Systems We Install
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
                    <p className="text-[10px] uppercase tracking-wider text-stone-400 mb-1">Profile</p>
                    <p className="text-sm font-semibold text-stone-800">{current.glass}</p>
                  </div>
                  <div className="bg-stone-50 p-3">
                    <p className="text-[10px] uppercase tracking-wider text-stone-400 mb-1">Performance</p>
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
                  title: "Thermal Break",
                  desc: "Polyamide thermal break strips prevent heat transfer — 60% more efficient than standard aluminium.",
                },
                {
                  icon: Clock,
                  title: "Quick Delivery",
                  desc: "Standard sizes ready in 10–15 days. Custom orders in 20–25 days from measurement.",
                },
                {
                  icon: Award,
                  title: "20-Year Warranty",
                  desc: "Powder-coated finish warranted for 20 years. Hardware backed by European manufacturers.",
                },
                {
                  icon: Wrench,
                  title: "Service Support",
                  desc: "Annual maintenance available. Hardware replacement and gasket renewal for long-term performance.",
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
            alt="Fine Glaze aluminium window installation"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <div>
              <p className="text-white/60 text-sm uppercase tracking-widest mb-2">Our Promise</p>
              <p className="text-white text-xl md:text-3xl font-bold max-w-xl">
                Every window system measured, fabricated & installed by our own teams.
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
              Aluminium Door & Window Cost — 2026
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
                    <th className="py-3 text-xs font-bold uppercase tracking-wider text-stone-500">Profile</th>
                    <th className="py-3 text-xs font-bold uppercase tracking-wider text-stone-500 text-right">Rate / sq ft</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[
                    { system: "Sliding (2/3-Track)", glass: "Thermal break aluminium", price: "₹450 – ₹800" },
                    { system: "Casement Windows", glass: "Thermal break + multi-lock", price: "₹500 – ₹900" },
                    { system: "Tilt-Turn Windows", glass: "European hardware", price: "₹700 – ₹1,200" },
                    { system: "Lift-Slide Doors", glass: "Heavy-duty track", price: "₹900 – ₹1,500" },
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
                q="What is a thermal break aluminium window?"
                a="Thermal break windows have a polyamide insulating strip between the inner and outer aluminium profiles. This breaks the thermal bridge, reducing heat transfer by up to 60% and preventing condensation — ideal for air-conditioned spaces."
              />
              <FAQItem
                q="How much do aluminium windows cost per sq ft in India?"
                a="Standard sliding windows start at ₹450/sq ft. Casement windows range from ₹500–₹900/sq ft. Premium tilt-turn systems cost ₹700–₹1,200/sq ft. Lift-slide doors range from ₹900–₹1,500/sq ft."
              />
              <FAQItem
                q="Are aluminium windows better than uPVC?"
                a="Aluminium offers superior strength, slimmer profiles (more glass area), and better longevity — especially in Indian climates. With thermal break technology, they match uPVC thermal performance while being 100% recyclable and available in unlimited colour options."
              />
              <FAQItem
                q="Can I get custom colours for aluminium windows?"
                a="Yes. We powder-coat in any RAL colour with a 20-year finish warranty. Popular choices include matt black, bronze, champagne, and wood-grain finishes. Anodised finishes are also available."
              />
              <FAQItem
                q="How long does aluminium window installation take?"
                a="Standard residential projects (10–15 windows) are completed in 3–5 days after fabrication. Fabrication takes 10–15 days for standard sizes and 20–25 days for custom orders."
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
                    { title: "ACP Cladding", href: "/acp-aluminium-cladding" },
                    { title: "Aluminium Louvers", href: "/aluminium-louvers" },
                    { title: "Glass Railings", href: "/glass-railings" },
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
