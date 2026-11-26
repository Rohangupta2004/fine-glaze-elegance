import SEO from "@/components/SEO";
import { RelatedProjects } from "@/components/RelatedProjects";
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
    <div className="border-b border-line">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left group"
      >
        <span className="text-[15px] font-semibold text-paper pr-8 group-hover:text-lamp transition-colors">
          {q}
        </span>
        <ChevronDown
          size={18}
          className={cn(
            "text-mute shrink-0 transition-transform duration-300",
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
        <p className="text-mute leading-relaxed text-sm">{a}</p>
      </div>
    </div>
  );
}

/* ── Images ── */
const IMG: Record<string, string> = {
  hero: "/louvers-closeup.webp",
  fixed: "/louvers-vertical.webp",
  operable: "/louvers-closeup.webp",
  motorised: "/louvers-motorized.webp",
  fins: "/louvers-vertical.webp",
  process: "/projects/nanavati-max-hospital-39-3.webp",
};

/* ── System data ── */
const SYSTEMS = [
  {
    num: "01",
    title: "Fixed Aluminium Louvers",
    desc: "Permanently angled aluminium blades mounted on a frame. The simplest and most cost-effective sun shading solution. Blade angle is optimised for building orientation and sun path at your location.",
    glass: "Flat / elliptical blade",
    wind: "Fixed angle",
    bestFor: "Parking, facades, utilities",
    price: "Quoted on drawings",
    img: "fixed",
  },
  {
    num: "02",
    title: "Operable Louvers",
    desc: "Manually adjustable blades that can be angled to control light and airflow. Linked rod mechanism allows all blades to move together. Ideal for spaces needing variable sun control throughout the day.",
    glass: "Aerofoil blade",
    wind: "Manual rod-operated",
    bestFor: "Offices, residential",
    price: "Quoted on drawings",
    img: "operable",
  },
  {
    num: "03",
    title: "Motorised Sun Control",
    desc: "Automated louver systems with sensor-driven or timer-controlled motors. Blades adjust automatically based on sun position, time, or interior temperature — maximum energy savings with zero manual effort.",
    glass: "Aerofoil blade",
    wind: "Motorised + sensor",
    bestFor: "Green buildings, IT parks",
    price: "Quoted on drawings",
    img: "motorised",
  },
  {
    num: "04",
    title: "Vertical Fins & Screens",
    desc: "Vertical aluminium blades or perforated screens that provide sun shading, privacy, and architectural rhythm. Available in twisted, angled, and perforated profiles for unique facade expression.",
    glass: "Custom profiles",
    wind: "Fixed / operable",
    bestFor: "Feature facades, screens",
    price: "Quoted on drawings",
    img: "fins",
  },
];

const STEPS = [
  { num: "01", title: "Sun Study", desc: "Analyse building orientation, sun path & shading needs" },
  { num: "02", title: "Design", desc: "Blade profile selection, spacing calculations & 3D preview" },
  { num: "03", title: "Fabrication", desc: "Cutting, sub-assembly and finishing preparation at our Pisoli, Pune unit" },
  { num: "04", title: "Installation", desc: "Bracket fixing, blade mounting & mechanism testing" },
];

export default function Louvers() {
  const [activeSystem, setActiveSystem] = useState(0);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Aluminium Louver & Sun Shading Systems",
    serviceType: "Aluminium Louver Installation",
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
    description: "Architectural aluminium louver and sun shading systems: fixed, operable and motorised, with aerofoil and flat blade profiles.",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fineglaze.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://fineglaze.com/services" },
      { "@type": "ListItem", position: 3, name: "Aluminium Louvers", item: "https://fineglaze.com/aluminium-louvers" },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much do aluminium louvers reduce heat?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Well-designed aluminium louvers cut direct solar heat on the glass line, and the effect depends on orientation, blade angle, glass and building use. We do not quote a fixed percentage; ask for an energy model if you need numbers.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between fixed and operable louvers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Fixed louvers have permanently set blade angles — simple and low maintenance. Operable louvers allow manual or motorised angle adjustment throughout the day for optimal light and heat control based on changing sun position.",
        },
      },
      {
        "@type": "Question",
        name: "How much do aluminium louvers cost per sq ft?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Louver cost depends on blade profile, fixed or operable or motorised type, size, finish and access, so a reliable figure needs drawings. Fine Glaze prepares BOQ-based quotations.",
        },
      },
      {
        "@type": "Question",
        name: "Can motorised louvers be connected to building management systems?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Motorised louvers can often be linked to a building management system with sun sensors, temperature input or timers, depending on the motor and control system chosen. Confirm integration needs at design stage.",
        },
      },
      {
        "@type": "Question",
        name: "What finishes are available for aluminium louvers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Louvers are available in any RAL colour via powder coating, or in natural/bronze/black anodised finishes. Wood-grain effect coatings are also available for architectural projects requiring a natural appearance.",
        },
      },
    ],
  };

  const current = SYSTEMS[activeSystem];

  return (
    <Layout darkHero>
      <SEO
        title="Aluminium Louver Contractor in Pune & Mumbai | Fine Glaze"
        description="Aluminium louver contractor in Pune, Mumbai and across India. Fixed, vertical and motorised sun louvers, sub-assembled at our own unit in Pune."
        canonical="https://fineglaze.com/aluminium-louvers"
        keywords="aluminium louver contractor, aluminium sun louvers, facade louvers, vertical louvers, motorized louvers, architectural louvers"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* ════════════ HERO ════════════ */}
      <section className="relative h-screen overflow-hidden">
        <img
          src={IMG.hero}
          alt="Aluminium louver sun shading — Fine Glaze"
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
            className="text-lamp text-xs font-bold mb-5 animate-fade-in"
            style={{ animationDelay: "0.05s" }}
          >
            Fine Glaze · Pune & Mumbai
          </p>

          <h1
            className="font-extrabold text-paper leading-tight tracking-tight animate-fade-in-up"
            style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)", animationDelay: "0.1s" }}
          >
            Aluminium<br />
            <span className="text-gradient-gold">Louvers</span><br />
            <span style={{ fontSize: "clamp(1.25rem, 2.5vw, 2rem)", fontWeight: 600, color: "rgba(255,255,255,0.85)" }}>
              & Sun Shading.
            </span>
          </h1>

          <p
            className="mt-6 text-paper/70 text-base md:text-lg max-w-lg leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Architectural solar control systems that cut direct sun on the glass line while adding design character.
          </p>

          <div
            className="mt-8 flex items-center gap-8 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Link
              to="/contact"
              className="text-paper font-semibold text-base border-b border-lamp/40 pb-0.5 hover:text-lamp transition-colors tracking-wide"
            >
              Book a call
            </Link>
            <a
              href="tel:+918369233566"
              className="text-mute font-medium text-base hover:text-paper transition-colors tracking-wide"
            >
              +91 83692 33566
            </a>
          </div>

          {/* Trust signal */}
          <div
            className="flex items-center gap-1.5 mt-4 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <span className="text-mute text-xs font-medium ml-0.5">
              Embassy REIT Best Vendor Performance 2024. 16 project records.
            </span>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 flex flex-col items-center gap-2 opacity-40">
          <span className="text-paper text-[10px] rotate-90 mb-3">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-night to-transparent" />
        </div>
      </section>


      {/* ════════════ INTRO ════════════ */}
      <section className="py-16 md:py-20 bg-night">
        <div className="container mx-auto px-6 md:px-16 max-w-3xl text-center">
          <FadeIn>
            <p className="text-lamp text-xs font-bold mb-4">
              Why Louver Systems
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-paper leading-snug mb-5">
              Control direct sunlight —{"  "}
              <span className="text-mute">with louvers that double as architectural features.</span>
            </h2>
            <p className="text-mute text-[15px] md:text-base leading-relaxed">
              Aluminium louver systems block direct solar radiation while maintaining airflow and outward visibility. They cut direct sun on the glass and can lower cooling demand, depending on orientation and design. Available in fixed, operable, and motorised configurations with elliptical, aerofoil, and flat blade profiles.
            </p>
          </FadeIn>
        </div>
      </section>


      {/* ════════════ STATS ════════════ */}
      <section className="bg-night-2 py-10">
        <div className="container mx-auto px-6 md:px-16">
          <FadeIn>
            <div className="grid grid-cols-3 gap-6 md:gap-0 md:divide-x md:divide-line">
              {[
                { number: "16", label: "Project Records Documented" },
                { number: "40+", label: "Core Team" },
                { number: "2024", label: "Embassy REIT Best Vendor Performance" },
              ].map((s) => (
                <div key={s.label} className="text-center px-4">
                  <p className="text-2xl md:text-3xl font-bold text-paper">{s.number}</p>
                  <p className="text-mute text-[11px] mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>


      {/* ════════════ SYSTEMS ════════════ */}
      <section className="py-16 md:py-20 bg-night-2">
        <div className="container mx-auto px-6 md:px-16">
          <FadeIn className="mb-10">
            <p className="text-lamp text-xs font-bold mb-3">
              Our Systems
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-paper">
              Louver Systems We Install
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
                      ? "bg-night-2 text-paper"
                      : "bg-night text-mute hover:bg-night-2 border border-line"
                  )}
                >
                  {sys.title}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-0 bg-night overflow-hidden" key={current.num}>
              <div className="relative h-[280px] md:h-[360px] overflow-hidden">
                <img
                  src={IMG[current.img]}
                  alt={current.title}
                  className="w-full h-full object-cover transition-opacity duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-night-2/80 text-paper text-xs font-bold px-3 py-1.5">
                  {current.num}
                </div>
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl font-bold text-paper mb-3">{current.title}</h3>
                <p className="text-mute text-sm leading-relaxed mb-6">{current.desc}</p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-night-2 p-3">
                    <p className="text-[10px] text-mute mb-1">Blade Profile</p>
                    <p className="text-sm font-semibold text-paper">{current.glass}</p>
                  </div>
                  <div className="bg-night-2 p-3">
                    <p className="text-[10px] text-mute mb-1">Operation</p>
                    <p className="text-sm font-semibold text-paper">{current.wind}</p>
                  </div>
                  <div className="bg-night-2 p-3">
                    <p className="text-[10px] text-mute mb-1">Best For</p>
                    <p className="text-sm font-semibold text-paper">{current.bestFor}</p>
                  </div>
                  <div className="bg-lamp/10 p-3 border border-lamp/40">
                    <p className="text-[10px] text-lamp mb-1">Pricing</p>
                    <p className="text-sm font-bold text-paper">{current.price}</p>
                  </div>
                </div>

                <Link to="/contact">
                  <Button size="sm" className="bg-night-2 hover:bg-night-2 text-paper gap-2">
                    Book a call <ArrowRight size={14} />
                  </Button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>


      {/* ════════════ WHY FINE GLAZE ════════════ */}
      <section className="py-16 md:py-20 bg-night">
        <div className="container mx-auto px-6 md:px-16">
          <FadeIn className="text-center mb-12">
            <p className="text-lamp text-xs font-bold mb-3">
              Why Fine Glaze
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-paper">
              Built for performance. Delivered on schedule.
            </h2>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  icon: Shield,
                  title: "Sun-Path Optimised",
                  desc: "Blade angles calculated for your building's orientation. Orientation and sun path are part of the design brief.",
                },
                {
                  icon: Clock,
                  title: "Own Fabrication Unit",
                  desc: "Sub-assembly and framing at our Pisoli, Pune unit, with shop drawings prepared in-house.",
                },
                {
                  icon: Award,
                  title: "Aluminium Extrusions",
                  desc: "Extrusions from major Indian mills with powder-coat or anodised finishes, as specified.",
                },
                {
                  icon: Wrench,
                  title: "Motorised Options",
                  desc: "Motorised systems can be quoted with controls; BMS integration depends on the project.",
                },
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-lamp/10 text-lamp mb-4">
                    <item.icon size={22} />
                  </div>
                  <h3 className="text-sm font-bold text-paper mb-2">{item.title}</h3>
                  <p className="text-mute text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={200} className="mt-12 text-center">
            <p className="text-mute text-sm">
              Clients include <span className="text-paper font-semibold">Embassy REIT</span> ·{" "}
              <span className="text-paper font-semibold">L&amp;T Construction</span> ·{" "}
              <span className="text-paper font-semibold">Jindal Stainless Limited</span>
            </p>
          </FadeIn>
        </div>
      </section>


      {/* ════════════ HOW WE WORK ════════════ */}
      <section className="py-16 md:py-20 bg-night-2">
        <div className="container mx-auto px-6 md:px-16">
          <FadeIn className="mb-10">
            <p className="text-lamp text-xs font-bold mb-3">
              How We Work
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-paper">
              From first visit to final handover
            </h2>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {STEPS.map((step, i) => (
                <div key={step.num} className="relative">
                  {i < STEPS.length - 1 && (
                    <div className="hidden md:block absolute top-5 left-[60%] right-0 h-px bg-line" />
                  )}
                  <div className="bg-night p-5 relative">
                    <span className="text-3xl font-bold text-paper block mb-3">{step.num}</span>
                    <h3 className="text-sm font-bold text-paper mb-1">{step.title}</h3>
                    <p className="text-mute text-xs leading-relaxed">{step.desc}</p>
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
            alt="Fine Glaze team installing facade louvers at Nanavati Max Hospital, Vile Parle, Mumbai"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-night/40" />
          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <div>
              <p className="text-mute text-sm mb-2">Our Promise</p>
              <p className="text-paper text-xl md:text-3xl font-bold max-w-xl">
                Solar control detailed for your building and orientation.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>


      {/* ════════════ PRICING ════════════ */}
      <section className="py-16 md:py-20 bg-night">
        <div className="container mx-auto px-6 md:px-16 max-w-3xl">
          <FadeIn className="text-center mb-8">
            <p className="text-lamp text-xs font-bold mb-3">
              Pricing
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-paper mb-2">
              Aluminium Louver Cost: How We Quote
            </h2>
            <p className="text-mute text-sm">
              We quote against drawings. Final cost depends on specification and complexity.
            </p>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b-2 border-line">
                    <th className="py-3 text-xs font-bold text-mute">System</th>
                    <th className="py-3 text-xs font-bold text-mute">Blade Type</th>
                    <th className="py-3 text-xs font-bold text-mute text-right">Pricing</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[
                    { system: "Fixed Louvers", glass: "Flat / elliptical blade", price: "Quoted on drawings" },
                    { system: "Operable Louvers", glass: "Aerofoil + rod mechanism", price: "Quoted on drawings" },
                    { system: "Motorised System", glass: "Aerofoil + motor + sensor", price: "Quoted on drawings" },
                    { system: "Vertical Fins / Screens", glass: "Custom profiles", price: "Quoted on drawings" },
                  ].map((row) => (
                    <tr key={row.system} className="border-b border-line hover:bg-night-2 transition-colors">
                      <td className="py-3 font-semibold text-paper">{row.system}</td>
                      <td className="py-3 text-mute">{row.glass}</td>
                      <td className="py-3 text-right font-bold text-paper">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 text-center">
              <Link to="/contact">
                <Button size="lg" className="bg-night-2 hover:bg-night-2 text-paper gap-2 px-8">
                  Book a call <ArrowRight size={16} />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>


      {/* ════════════ FAQ ════════════ */}
      <section className="py-14 md:py-16 bg-night-2">
        <div className="container mx-auto px-6 md:px-16 max-w-3xl">
          <FadeIn className="mb-8">
            <p className="text-lamp text-xs font-bold mb-3">
              Common Questions
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-paper">
              FAQ
            </h2>
          </FadeIn>

          <FadeIn delay={100}>
            <div>
              <FAQItem
                q="How much do aluminium louvers reduce heat?"
                a="Well-designed aluminium louvers cut direct solar heat on the glass line, and the effect depends on orientation, blade angle, glass and building use. We do not quote a fixed percentage; ask for an energy model if you need numbers."
              />
              <FAQItem
                q="What is the difference between fixed and operable louvers?"
                a="Fixed louvers have permanently set blade angles — simple and low maintenance. Operable louvers allow manual or motorised angle adjustment throughout the day for optimal light and heat control based on changing sun position."
              />
              <FAQItem
                q="How much do aluminium louvers cost per sq ft?"
                a="Louver cost depends on blade profile, fixed or operable or motorised type, size, finish and access, so a reliable figure needs drawings. Fine Glaze prepares BOQ-based quotations."
              />
              <FAQItem
                q="Can motorised louvers be connected to building management systems?"
                a="Motorised louvers can often be linked to a building management system with sun sensors, temperature input or timers, depending on the motor and control system chosen. Confirm integration needs at design stage."
              />
              <FAQItem
                q="What finishes are available for aluminium louvers?"
                a="Louvers are available in any RAL colour via powder coating, or in natural/bronze/black anodised finishes. Wood-grain effect coatings are also available for architectural projects requiring a natural appearance."
              />
            </div>
          </FadeIn>
        </div>
      </section>


      {/* ════════════ AREAS + SERVICES ════════════ */}
      <section className="bg-night-2 py-12">
        <div className="container mx-auto px-6 md:px-16">
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-10 md:gap-16">
              <div>
                <p className="text-lamp text-xs font-bold mb-4">
                  Where We Work
                </p>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {["Pune", "Mumbai BKC", "Navi Mumbai", "Thane", "Hinjewadi", "Pimpri-Chinchwad"].map((city) => (
                    <div key={city} className="flex items-center gap-1.5">
                      <MapPin size={11} className="text-lamp" />
                      <span className="text-mute text-sm">{city}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-lamp text-xs font-bold mb-4">
                  Other Services
                </p>
                <div className="grid grid-cols-2 gap-x-6 gap-y-1.5">
                  {[
                    { title: "Aluminium Facade", href: "/aluminium-windows-doors" },
                    { title: "Curtain Wall Systems", href: "/curtain-wall-systems" },
                    { title: "ACP Cladding", href: "/acp-aluminium-cladding" },
                    { title: "Structural Glazing", href: "/structural-glazing" },
                    { title: "Facade AMC", href: "/maintenance-services" },
                    { title: "All Services →", href: "/services" },
                  ].map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="text-mute text-sm hover:text-lamp transition-colors"
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
      <RelatedProjects heading="Louver projects" keywords={["louver", "louvre", "fins"]} />
      <CTASection />
    </Layout>
  );
}
