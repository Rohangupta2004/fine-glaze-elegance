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
  hero: "https://images.unsplash.com/photo-1497366216548-37526070297c?fm=jpg&q=85&w=2400&auto=format&fit=crop",
  office: "/Glass.webp",
  acoustic: "/Railing.webp",
  smart: "/Handle.webp",
  shower: "/Custom railing.webp",
  process: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?fm=jpg&q=85&w=1400&auto=format&fit=crop",
};

/* ── System data ── */
const SYSTEMS = [
  {
    num: "01",
    title: "Frameless Office Partitions",
    desc: "Floor-to-ceiling toughened glass panels with minimal hardware. Creates transparent, open-plan workspaces while providing separation for meeting rooms, cabins, and focus areas.",
    glass: "10–12mm toughened",
    wind: "Frameless patch fittings",
    bestFor: "Offices, co-working spaces",
    price: "₹350 – ₹600 /sq ft",
    img: "office",
  },
  {
    num: "02",
    title: "Acoustic Double-Glazed Walls",
    desc: "Two glass panels with an air gap for superior sound insulation up to 42dB. Ideal for boardrooms, HR offices, and conference rooms where speech privacy is critical.",
    glass: "6+12+6mm DGU",
    wind: "Up to 42dB STC rating",
    bestFor: "Boardrooms, conference rooms",
    price: "₹600 – ₹1,000 /sq ft",
    img: "acoustic",
  },
  {
    num: "03",
    title: "Switchable Smart Glass",
    desc: "PDLC glass that switches from transparent to opaque with an electric current. Instant privacy for glass-walled meeting rooms without blinds or curtains. App and switch control available.",
    glass: "Smart PDLC laminated",
    wind: "Electric privacy switch",
    bestFor: "CEO cabins, meeting rooms",
    price: "₹1,200 – ₹2,500 /sq ft",
    img: "smart",
  },
  {
    num: "04",
    title: "Shower Enclosures",
    desc: "Luxury frameless shower enclosures in sliding, hinged, and walk-in designs. 8–12mm toughened glass with anti-limescale nano-coating that keeps glass sparkling clean with minimal effort.",
    glass: "8–12mm toughened",
    wind: "Nano anti-limescale coat",
    bestFor: "Premium homes, hotels",
    price: "₹15,000 – ₹45,000 /unit",
    img: "shower",
  },
];

const STEPS = [
  { num: "01", title: "Space Planning", desc: "Understand layout, privacy needs & acoustic requirements" },
  { num: "02", title: "Design", desc: "Glass type, hardware finish & door configuration approval" },
  { num: "03", title: "Fabrication", desc: "Glass tempering, hardware sourcing & quality checks" },
  { num: "04", title: "Installation", desc: "Precision fitting with plumb-level alignment & sealing" },
];

export default function GlassPartitions() {
  const [activeSystem, setActiveSystem] = useState(0);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Glass Partitions & Shower Enclosures",
    serviceType: "Glass Partition & Shower Enclosure Installation",
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
    description: "Frameless glass partitions for offices and luxury shower enclosures for homes. Single-glazed, double-glazed & smart glass options. 8–12mm toughened glass.",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fineglaze.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://fineglaze.com/services" },
      { "@type": "ListItem", position: 3, name: "Glass Partitions & Shower Enclosures", item: "https://fineglaze.com/glass-partitions" },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Are glass partitions soundproof?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Single-glazed glass partitions provide basic visual separation but limited sound insulation (~28dB). For speech privacy, we recommend double-glazed (DGU) glass walls that achieve up to 42dB STC rating — sufficient for boardrooms and HR offices.",
        },
      },
      {
        "@type": "Question",
        name: "What is switchable smart glass?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Smart glass uses PDLC (Polymer Dispersed Liquid Crystal) technology. When electric current is applied, the glass turns transparent. When switched off, it becomes frosted/opaque — providing instant privacy without blinds. Controlled via wall switch or smartphone app.",
        },
      },
      {
        "@type": "Question",
        name: "How much do glass partitions cost per sq ft?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Frameless single-glazed partitions start at ₹350/sq ft. Double-glazed acoustic walls range from ₹600–₹1,000/sq ft. Switchable smart glass costs ₹1,200–₹2,500/sq ft. Shower enclosures are priced per unit at ₹15,000–₹45,000.",
        },
      },
    ],
  };

  const current = SYSTEMS[activeSystem];

  return (
    <Layout darkHero>
      <SEO
        title="Glass Partitions & Shower Enclosures | Office & Residential Glass Solutions – Fine Glaze"
        description="Frameless glass partitions for offices and luxury shower enclosures. Single-glazed, DGU & switchable smart glass. 8-12mm toughened glass. Pune & Mumbai. Free site visit."
        canonical="https://fineglaze.com/glass-partitions"
        keywords="glass partitions, frameless glass partition office, shower enclosure glass, glass cabin, smart glass partition, office glass wall, bathroom glass door, toughened glass partition Pune Mumbai"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* ════════════ HERO ════════════ */}
      <section className="relative h-screen overflow-hidden">
        <img
          src={IMG.hero}
          alt="Frameless glass partition — Fine Glaze"
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
            Glass<br />
            <span className="text-gradient-gold">Partitions</span><br />
            <span style={{ fontSize: "clamp(2rem, 4.5vw, 4.8rem)", fontWeight: 600, color: "rgba(255,255,255,0.85)" }}>
              & Enclosures.
            </span>
          </h1>

          <p
            className="mt-6 text-white/70 text-base md:text-lg max-w-lg leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Frameless glass walls for modern offices and luxury shower enclosures for premium homes.
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
              Why Glass Interiors
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-stone-900 leading-snug mb-5">
              Open, light-filled spaces without losing privacy —{"  "}
              <span className="text-stone-400">toughened glass that divides space without blocking it.</span>
            </h2>
            <p className="text-stone-500 text-[15px] md:text-base leading-relaxed">
              Glass partitions create visually open workspaces while providing acoustic separation. Available in single-glazed, double-glazed (for sound insulation up to 42dB), and switchable smart glass that turns opaque at the touch of a button. Our shower enclosures use 8–12mm toughened glass with anti-limescale nano-coating.
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
                { number: "42dB", label: "Sound Insulation (DGU)" },
                { number: "5+", label: "Years Experience" },
                { number: "12mm", label: "Max Glass Thickness" },
                { number: "0", label: "Safety Incidents" },
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
              Glass Partition & Enclosure Systems We Install
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
                    <p className="text-[10px] uppercase tracking-wider text-stone-400 mb-1">Glass</p>
                    <p className="text-sm font-semibold text-stone-800">{current.glass}</p>
                  </div>
                  <div className="bg-stone-50 p-3">
                    <p className="text-[10px] uppercase tracking-wider text-stone-400 mb-1">Feature</p>
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
                  title: "Safety Glass",
                  desc: "All panels are IS 2553 certified toughened glass. Shower glass has anti-shatter lamination options.",
                },
                {
                  icon: Clock,
                  title: "Quick Install",
                  desc: "Most office partition projects completed in 5–10 days. Shower enclosures installed in 1–2 days.",
                },
                {
                  icon: Award,
                  title: "Premium Hardware",
                  desc: "European patch fittings and door closers. Brushed SS, matt black & champagne gold finishes.",
                },
                {
                  icon: Wrench,
                  title: "Easy Maintenance",
                  desc: "Nano-coated shower glass repels water and limescale. Office partitions need just regular glass cleaner.",
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
            alt="Fine Glaze glass partition installation"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <div>
              <p className="text-white/60 text-sm uppercase tracking-widest mb-2">Our Promise</p>
              <p className="text-white text-xl md:text-3xl font-bold max-w-xl">
                Modern workspaces and luxury bathrooms — built with precision glass craftsmanship.
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
              Glass Partition & Enclosure Cost — 2026
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
                    <th className="py-3 text-xs font-bold uppercase tracking-wider text-stone-500">Glass Type</th>
                    <th className="py-3 text-xs font-bold uppercase tracking-wider text-stone-500 text-right">Rate / sq ft</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[
                    { system: "Frameless Partition", glass: "10–12mm toughened", price: "₹350 – ₹600 /sq ft" },
                    { system: "Acoustic DGU Partition", glass: "6+12+6mm DGU", price: "₹600 – ₹1,000 /sq ft" },
                    { system: "Smart Glass Wall", glass: "PDLC laminated", price: "₹1,200 – ₹2,500 /sq ft" },
                    { system: "Shower Enclosure", glass: "8–12mm toughened", price: "₹15,000 – ₹45,000 /unit" },
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
                q="Are glass partitions soundproof?"
                a="Single-glazed glass partitions provide basic visual separation but limited sound insulation (~28dB). For speech privacy, we recommend double-glazed (DGU) glass walls that achieve up to 42dB STC rating — sufficient for boardrooms and HR offices."
              />
              <FAQItem
                q="What is switchable smart glass?"
                a="Smart glass uses PDLC (Polymer Dispersed Liquid Crystal) technology. When electric current is applied, the glass turns transparent. When switched off, it becomes frosted/opaque — providing instant privacy without blinds. Controlled via wall switch or smartphone app."
              />
              <FAQItem
                q="How much do glass partitions cost per sq ft?"
                a="Frameless single-glazed partitions start at ₹350/sq ft. Double-glazed acoustic walls range from ₹600–₹1,000/sq ft. Switchable smart glass costs ₹1,200–₹2,500/sq ft. Shower enclosures are priced per unit at ₹15,000–₹45,000."
              />
              <FAQItem
                q="Can glass partitions have doors?"
                a="Yes. We install frameless glass swing doors, sliding doors, and even automatic sensor doors within glass partition systems. All doors come with floor springs or patch fittings and soft-close mechanisms."
              />
              <FAQItem
                q="Is the nano-coating on shower glass worth it?"
                a="Yes. Nano-coating creates a hydrophobic surface that repels water and prevents limescale build-up. Shower glass stays cleaner for longer and requires significantly less scrubbing — especially valuable in hard-water areas like Pune and Mumbai."
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
                    { title: "Glass Railings", href: "/glass-railings" },
                    { title: "Structural Glazing", href: "/structural-glazing" },
                    { title: "Curtain Wall Systems", href: "/curtain-wall-systems" },
                    { title: "Aluminium Facade", href: "/aluminium-facade" },
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
