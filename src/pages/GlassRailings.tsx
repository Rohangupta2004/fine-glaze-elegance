import SEO from "@/components/SEO";
import PageHero from "@/components/common/PageHero";
import { RelatedProjects } from "@/components/RelatedProjects";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { ServiceQuickOverview } from "@/components/service/ServiceQuickOverview";
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
  return (
    <div className="fg-faq">
      <details>
        <summary>
          <h3>{q}</h3>
        </summary>
        <div className="fg-a">{a}</div>
      </details>
    </div>
  );
}

/* ── Images ── */
const IMG: Record<string, string> = {
  hero: "/railing-spigot.webp",
  frameless: "/Railing.webp",
  semi: "/railing-semi.webp",
  spigot: "/railing-spigot.webp",
  standoff: "/railing-standoff.webp",
  process: "/projects/jindal-house-46-4.webp",
};

/* ── System data ── */
const SYSTEMS = [
  {
    num: "01",
    title: "Frameless Glass Railing",
    desc: "Glass panels with no visible posts or frames — maximum transparency. Fixed with aluminium U-channels embedded in the floor or side-mounted. The premium choice for modern balconies and terraces.",
    glass: "12–19mm toughened",
    wind: "Aluminium U-channel",
    bestFor: "Balconies, terraces, decks",
    price: "Quoted on drawings",
    img: "frameless",
  },
  {
    num: "02",
    title: "Semi-Frameless Railing",
    desc: "Glass panels held by minimal stainless steel posts at intervals — a balance of transparency and structure. Ideal for longer runs where frameless isn't structurally feasible.",
    glass: "12–15mm toughened",
    wind: "SS 304 mini-posts",
    bestFor: "Corridors, malls, offices",
    price: "Quoted on drawings",
    img: "semi",
  },
  {
    num: "03",
    title: "Spigot Glass Railing",
    desc: "Glass panels held by stainless steel spigots (point clamps) at the base. Clean architectural look with easy glass replacement. Popular for commercial and hospitality projects.",
    glass: "12–15mm toughened",
    wind: "SS 316 spigots",
    bestFor: "Hotels, lobbies, restaurants",
    price: "Quoted on drawings",
    img: "spigot",
  },
  {
    num: "04",
    title: "Standoff Glass Railing",
    desc: "Glass panels mounted to posts using decorative standoff fittings. Versatile system that works with existing structures and offers multiple design finishes.",
    glass: "10–12mm toughened",
    wind: "SS standoff fittings",
    bestFor: "Staircases, residential",
    price: "Quoted on drawings",
    img: "standoff",
  },
];

const STEPS = [
  { num: "01", title: "Site Measure", desc: "Precise measurement of railing lengths, heights & conditions" },
  { num: "02", title: "Design", desc: "System selection, glass spec & hardware finish approvals" },
  { num: "03", title: "Fabrication", desc: "Glass cutting, tempering & hardware preparation" },
  { num: "04", title: "Installation", desc: "Professional mounting with plumb-level accuracy" },
];

export default function GlassRailings() {
  const [activeSystem, setActiveSystem] = useState(0);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Glass Railing Systems",
    serviceType: "Glass Railing Installation",
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
    description: "Premium frameless and semi-frameless glass railing systems for balconies, terraces, staircases & pool areas. 12–19mm toughened glass. SS 304/316 hardware.",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fineglaze.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://fineglaze.com/services" },
      { "@type": "ListItem", position: 3, name: "Glass Railings", item: "https://fineglaze.com/glass-railings" },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is toughened glass safe for railings?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Toughened glass is safe for railings when the glass build-up, supports and anchorage are designed for the load. It is stronger than ordinary glass and breaks into small granules, and laminated glass adds a layer that holds pieces in place.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between frameless and semi-frameless glass railings?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Frameless railings use U-channels or base shoes with no visible posts — giving maximum transparency. Semi-frameless railings use slim stainless steel posts at intervals — slightly more visible structure but often more cost-effective for longer runs.",
        },
      },
      {
        "@type": "Question",
        name: "How much do glass railings cost per running foot in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Glass railing cost depends on the system (frameless, semi-frameless, spigot or standoff), glass thickness, hardware finish and site conditions. It is priced per running foot against drawings. Fine Glaze prepares BOQ-based quotations.",
        },
      },
      {
        "@type": "Question",
        name: "Can glass railings be used outdoors and in coastal areas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Toughened glass is weather-resistant, and outdoor and coastal installations need stainless steel hardware of a suitable grade. Fine Glaze selects the grade per project, and nano-coated glass is an option for easier cleaning.",
        },
      },
      {
        "@type": "Question",
        name: "How long does glass railing installation take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Installation time depends on railing length, number of floors, site access and glass lead time, so we confirm the programme per project after measurement. Glass is cut and toughened to size before installation.",
        },
      },
    ],
  };

  const current = SYSTEMS[activeSystem];

  return (
    <Layout darkHero>
      <SEO
        title="Glass Railing Contractor in Pune & Mumbai | Fine Glaze"
        description="Glass railing contractor in Pune, Mumbai and across India. Frameless and spigot glass railings for balconies and staircases, with in-house shop drawings."
        canonical="https://fineglaze.com/glass-railings"
        keywords="glass railing contractor, frameless glass railing, toughened glass railing, glass balustrade, staircase glass railing, balcony glass railing"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* HERO */}
      <PageHero
        crumbs={[{ label: "Glass Railing Contractors Pune & Mumbai" }]}
        title={<>Glass Railing<br /> <span className="text-gradient-gold">Contractors</span><span className="ph-sub">Pune &amp; Mumbai.</span></>}
        intro="Frameless and semi-frameless toughened glass railings for balconies, terraces, staircases and commercial spaces in Pune and Mumbai."
        secondary={{ label: "+91 83692 33566", href: "tel:+918369233566" }}
        image={{ src: IMG.hero, alt: "Frameless glass railing — Fine Glaze" }}
        extra=""
      />


      {/* ════════════ INTRO ════════════ */}
      <section className="fg-sec">
        <div className="fg-wrap">
          <FadeIn>
            <p className="text-lamp text-xs font-bold mb-4">
              Why Glass Railings
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-paper leading-snug mb-5">
              Unobstructed views with maximum safety —{"  "}
              <span className="text-mute">toughened glass that meets every building code.</span>
            </h2>
            <p className="text-mute text-[15px] md:text-base leading-relaxed">
              Glass railings use 12–19mm toughened or laminated safety glass mounted with precision-engineered stainless steel or aluminium hardware. They provide fall protection while preserving views, natural light, and modern architectural aesthetics.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ════════════ CONVERSION QUICK OVERVIEW ════════════ */}
      <ServiceQuickOverview
        serviceTitle="Glass Balustrades &amp; Railing Systems"
        whatWeProvide="Frameless base-channel glass railings, standoff pin balustrades, spigot railings & SS-316 top handrail systems. Toughened and laminated glass specified against IS 2553 and the project load requirements, with a structural check before fabrication."
        locationsServed={["Pune (Koregaon Park, Kalyani Nagar)", "Mumbai (Byculla, Bandra, Worli)", "Thane", "Navi Mumbai"]}
        bestProjectTypes={[
          "High-Rise Residential Balconies & Terraces",
          "Luxury Villa Staircases & Balconies",
          "Commercial Mall Atrium Balustrades",
          "Hotel Pool Decks & Roof Top Bars"
        ]}
        relevantProjects={[
          "Salsette-27 (Byculla, Mumbai)",
          "Jindal House Balkeshwar 32 (Mumbai)",
          "Nirmaann Estrellaa (Pune)"
        ]}
      />


      {/* ════════════ STATS ════════════ */}
      <section className="fg-sec">
        <div className="fg-wrap">
          <FadeIn>
            <div className="grid grid-cols-3 gap-6 md:gap-0 md:divide-x md:divide-line">
              {[
                { number: "16", label: "Project Records Documented" },
                { number: "40+", label: "Core Team" },
                { number: "2024", label: "Embassy REIT Best Vendor Performance" },
              ].map((s) => (
                <div key={s.label} className="text-center px-4">
                  <p className="text-2xl md:text-3xl font-bold text-paper">{s.number}</p>
                  <p className="text-mute text-[13px] mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>


      {/* ════════════ SYSTEMS ════════════ */}
      <section className="fg-sec">
        <div className="fg-wrap">
          <FadeIn className="mb-10">
            <p className="text-lamp text-xs font-bold mb-3">
              Our Systems
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-paper">
              Glass Railing Systems We Install
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
                    <p className="text-[13px] text-mute mb-1">Glass</p>
                    <p className="text-sm font-semibold text-paper">{current.glass}</p>
                  </div>
                  <div className="bg-night-2 p-3">
                    <p className="text-[13px] text-mute mb-1">Hardware</p>
                    <p className="text-sm font-semibold text-paper">{current.wind}</p>
                  </div>
                  <div className="bg-night-2 p-3">
                    <p className="text-[13px] text-mute mb-1">Best For</p>
                    <p className="text-sm font-semibold text-paper">{current.bestFor}</p>
                  </div>
                  <div className="bg-lamp/10 p-3 border border-lamp/40">
                    <p className="text-[13px] text-lamp mb-1">Pricing</p>
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
      <section className="fg-sec">
        <div className="fg-wrap">
          <FadeIn className="mb-12">
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
                  title: "Safety Glass",
                  desc: "Toughened or laminated glass specified to IS 2553 and the project's load requirements. Confirm the build-up with your consultant.",
                },
                {
                  icon: Clock,
                  title: "Measured and Fabricated to Order",
                  desc: "Each railing is measured on site, drawn in-house and fabricated to size. Programme is confirmed per project.",
                },
                {
                  icon: Award,
                  title: "Stainless Steel Hardware",
                  desc: "Stainless steel hardware in finishes chosen to the specification. Coastal sites need particular attention to grade.",
                },
                {
                  icon: Wrench,
                  title: "AMC Support",
                  desc: "Maintenance contracts available for glazing, glass and cladding.",
                },
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 border border-line text-lamp mb-4">
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
              Clients include <span className="text-paper font-semibold">Embassy REIT</span>,{" "}
              <span className="text-paper font-semibold">L&amp;T Construction</span>,{" "}
              <span className="text-paper font-semibold">Jindal Stainless Limited</span>
            </p>
          </FadeIn>
        </div>
      </section>


      {/* ════════════ HOW WE WORK ════════════ */}
      <section className="fg-sec">
        <div className="fg-wrap">
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
            alt="Shop drawing of an SS railing for Jindal House, Mumbai — drawn in-house by Fine Glaze"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-night/40" />
          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <div>
              <p className="text-mute text-sm mb-2">Our Promise</p>
              <p className="text-paper text-xl md:text-3xl font-bold max-w-xl">
                Shop drawings prepared in-house. Installation run by a dedicated site in-charge and supervisor.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>


      {/* ════════════ PRICING ════════════ */}
      <section className="fg-sec">
        <div className="fg-wrap">
          <FadeIn className="mb-8">
            <p className="text-lamp text-xs font-bold mb-3">
              Pricing
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-paper mb-2">
              Glass Railing Cost: How We Quote
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
                    <th className="py-3 text-xs font-bold text-mute">Glass</th>
                    <th className="py-3 text-xs font-bold text-mute text-right">Pricing</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[
                    { system: "Frameless (U-Channel)", glass: "12–19 mm toughened", price: "Quoted on drawings" },
                    { system: "Semi-Frameless (Mini-Post)", glass: "12–15 mm toughened", price: "Quoted on drawings" },
                    { system: "Spigot Mount", glass: "12–15 mm toughened", price: "Quoted on drawings" },
                    { system: "Standoff Mount", glass: "10–12 mm toughened", price: "Quoted on drawings" },
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
      <section className="fg-sec">
        <div className="fg-wrap">
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
                q="Is toughened glass safe for railings?"
                a="Toughened glass is safe for railings when the glass build-up, supports and anchorage are designed for the load. It is stronger than ordinary glass and breaks into small granules, and laminated glass adds a layer that holds pieces in place."
              />
              <FAQItem
                q="What is the difference between frameless and semi-frameless glass railings?"
                a="Frameless railings use U-channels or base shoes with no visible posts — giving maximum transparency. Semi-frameless railings use slim stainless steel posts at intervals — slightly more visible structure but often more cost-effective for longer runs."
              />
              <FAQItem
                q="How much do glass railings cost per running foot in India?"
                a="Glass railing cost depends on the system (frameless, semi-frameless, spigot or standoff), glass thickness, hardware finish and site conditions. It is priced per running foot against drawings. Fine Glaze prepares BOQ-based quotations."
              />
              <FAQItem
                q="Can glass railings be used outdoors and in coastal areas?"
                a="Yes. Toughened glass is weather-resistant, and outdoor and coastal installations need stainless steel hardware of a suitable grade. Fine Glaze selects the grade per project, and nano-coated glass is an option for easier cleaning."
              />
              <FAQItem
                q="How long does glass railing installation take?"
                a="Installation time depends on railing length, number of floors, site access and glass lead time, so we confirm the programme per project after measurement. Glass is cut and toughened to size before installation."
              />
            </div>
          </FadeIn>
        </div>
      </section>


      {/* ════════════ AREAS + SERVICES ════════════ */}
      <section className="fg-sec">
        <div className="fg-wrap">
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
                    { title: "Structural Glazing", href: "/structural-glazing" },
                    { title: "Curtain Wall Systems", href: "/curtain-wall-systems" },
                    { title: "Glass Partitions", href: "/glass-partitions" },
                    { title: "Aluminium Facade", href: "/aluminium-windows-doors" },
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
      <RelatedProjects heading="Glass railing projects" keywords={["railing"]} />
      <CTASection />
    </Layout>
  );
}
