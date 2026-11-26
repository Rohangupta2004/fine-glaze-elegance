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
  hero: "/skylight-atrium.webp",
  atrium: "/canopy-spider.webp",
  frameless: "/skylight-atrium.webp",
  spider: "/canopy-detail.webp",
  poly: "/canopy-spider.webp",
  process: "/projects/salsette-27-32-2.webp",
};

/* ── System data ── */
const SYSTEMS = [
  {
    num: "01",
    title: "Atrium Skylight System",
    desc: "Large-span glazed roof structures for atriums, malls, and commercial lobbies. Aluminium-framed with integrated drainage gutters, thermal expansion joints, and motorised ventilation options.",
    glass: "Laminated DGU / Low-E",
    wind: "Aluminium ridge-&-rafter",
    bestFor: "Atriums, malls, hotels",
    price: "Quoted on drawings",
    img: "atrium",
  },
  {
    num: "02",
    title: "Frameless Glass Canopy",
    desc: "Minimal overhead glass structures supported by stainless steel spider fittings or glass fins. Creates a floating-glass effect at building entrances and walkways. Designed with concealed drainage.",
    glass: "17.52–21.52mm laminated",
    wind: "SS spider / glass fins",
    bestFor: "Entrances, walkways",
    price: "Quoted on drawings",
    img: "frameless",
  },
  {
    num: "03",
    title: "Spider-Fitting Canopy",
    desc: "Point-fixed glass canopy using stainless steel spider arms connected to steel or cable structures. Maximum transparency, with the structure sized to the project wind load.",
    glass: "12–19mm laminated",
    wind: "SS 316 spider arms",
    bestFor: "Commercial entries, bridges",
    price: "Quoted on drawings",
    img: "spider",
  },
  {
    num: "04",
    title: "Polycarbonate Roofing",
    desc: "Lightweight multiwall polycarbonate sheets on aluminium frames. Excellent light transmission with UV protection and impact resistance, an alternative to glass for car parks and warehouses.",
    glass: "10–25mm multiwall PC",
    wind: "Aluminium frame",
    bestFor: "Car parks, factories",
    price: "Quoted on drawings",
    img: "poly",
  },
];

const STEPS = [
  { num: "01", title: "Site Survey", desc: "Assess opening size, structural support & drainage requirements" },
  { num: "02", title: "Engineering", desc: "In-house shop drawings and an engineering check against project wind load" },
  { num: "03", title: "Fabrication", desc: "Frame fabrication, glass ordering & waterproofing prep" },
  { num: "04", title: "Installation", desc: "Frame erection, glazing, sealing & drainage testing" },
];

export default function Skylights() {
  const [activeSystem, setActiveSystem] = useState(0);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Skylights & Glass Canopy Systems",
    serviceType: "Skylight & Glass Canopy Installation",
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
    description: "Engineered glass skylight and canopy systems for atriums, lobbies & entrances. Laminated safety glass with heat-reflective coatings. Waterproof & wind-load rated.",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fineglaze.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://fineglaze.com/services" },
      { "@type": "ListItem", position: 3, name: "Skylights & Glass Canopies", item: "https://fineglaze.com/skylights-canopies" },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Are glass skylights waterproof?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A well-designed glass skylight is waterproof when sealants, gaskets and drainage are detailed properly and installed well. Fine Glaze checks installed glazing with a site water penetration test before handover and closes any leak on the snag register.",
        },
      },
      {
        "@type": "Question",
        name: "How much does a glass skylight cost per sq ft in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Skylight and canopy cost depends on the span, glass, framing, structure and access, so a reliable figure needs drawings. Fine Glaze prepares BOQ-based quotations.",
        },
      },
      {
        "@type": "Question",
        name: "Can skylights reduce energy costs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Skylights can cut daytime lighting use by bringing in daylight, and low-E or solar-control glass limits heat gain. Net energy effect depends on size, orientation and glass, so check it with the project's energy model.",
        },
      },
      {
        "@type": "Question",
        name: "What type of glass is used in skylights?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Overhead glazing is normally laminated safety glass, where two layers are bonded with an interlayer so broken pieces stay in place. Double glazed and low-E options are available, and the build-up follows the structural check.",
        },
      },
      {
        "@type": "Question",
        name: "How long does skylight installation take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Installation time depends on span, structure, glass lead time and site access, so we confirm the programme per project after survey and design approval. We work around your construction schedule.",
        },
      },
    ],
  };

  const current = SYSTEMS[activeSystem];

  return (
    <Layout darkHero>
      <SEO
        title="Glass Skylight Contractor in Pune & Mumbai | Fine Glaze"
        description="Glass skylight and canopy contractor in Pune, Mumbai and across India. Atrium skylights, entrance canopies and overhead glazing, with in-house shop drawings."
        canonical="https://fineglaze.com/skylights-canopies"
        keywords="glass skylight contractor, atrium skylight, glass canopy contractor, frameless glass canopy, spider canopy, overhead glazing"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* HERO */}
      <PageHero
        crumbs={[{ label: "Skylights & Glass Canopies" }]}
        title={<>Skylights &<br /> <span className="text-gradient-gold">Glass</span><span className="ph-sub">Canopies.</span></>}
        intro="Engineered overhead glazing for atriums, lobbies, entrances & commercial spaces."
        secondary={{ label: "+91 83692 33566", href: "tel:+918369233566" }}
        image={{ src: IMG.hero, alt: "Glass skylight system — Fine Glaze" }}
        extra=""
      />


      {/* ════════════ INTRO ════════════ */}
      <section className="fg-sec">
        <div className="fg-wrap">
          <FadeIn>
            <p className="text-lamp text-xs font-bold mb-4">
              Why Overhead Glazing
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-paper leading-snug mb-5">
              Bring natural light indoors —{"  "}
              <span className="text-mute">designed for weather, wind loads and thermal comfort.</span>
            </h2>
            <p className="text-mute text-[15px] md:text-base leading-relaxed">
              Our skylight and canopy systems use laminated safety glass with heat-reflective coatings, supported by structural aluminium or stainless steel frameworks. Each system is detailed for weatherproofing and drainage and checked against the project wind load.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ════════════ CONVERSION QUICK OVERVIEW ════════════ */}
      <ServiceQuickOverview
        serviceTitle="Glass Skylights &amp; Entrance Canopies"
        whatWeProvide="Laminated safety glass skylights, atrium overhead glazing, spider glass canopies & MS/SS structural support framing. Includes integrated gutters, flashing and structural and weather silicone from approved manufacturers."
        locationsServed={["Pune", "Mumbai (South Mumbai, BKC)", "Thane", "Navi Mumbai"]}
        bestProjectTypes={[
          "Hotel Entrance Canopies",
          "Shopping Mall Atrium Skylights",
          "Corporate HQ Entry Porticos",
          "Luxury Villa Skylights & Courtyards"
        ]}
        relevantProjects={[
          "Salsette-27 Entrance Canopy (Mumbai)",
          "Pune Airport Terminal Column & Canopy Works"
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
              Skylight & Canopy Systems We Install
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
                    <p className="text-[13px] text-mute mb-1">Structure</p>
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
                  title: "Water-Tested",
                  desc: "Installed glazing is checked with a site water penetration test before handover, and any leak found is closed out on the snag register.",
                },
                {
                  icon: Clock,
                  title: "Stage Inspections",
                  desc: "Material, fabrication and installation checks, with the snag register closed before handover.",
                },
                {
                  icon: Award,
                  title: "In-House Engineering",
                  desc: "Structural calculations and shop drawings done in-house for precise fit and performance.",
                },
                {
                  icon: Wrench,
                  title: "Maintenance Ready",
                  desc: "Access points and cleaning provisions designed in from day one. AMC available.",
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
            alt="Steel framing for the podium canopy at Salsette-27, Byculla, Mumbai — Fine Glaze"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-night/40" />
          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <div>
              <p className="text-mute text-sm mb-2">Our Promise</p>
              <p className="text-paper text-xl md:text-3xl font-bold max-w-xl">
                Installed glazing water-tested before handover. Canopies detailed for drainage and maintenance access.
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
              Skylight & Canopy Cost: How We Quote
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
                    <th className="py-3 text-xs font-bold text-mute">Material</th>
                    <th className="py-3 text-xs font-bold text-mute text-right">Pricing</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[
                    { system: "Atrium Skylight", glass: "Laminated DGU + aluminium", price: "Quoted on drawings" },
                    { system: "Frameless Canopy", glass: "17.52mm laminated + SS", price: "Quoted on drawings" },
                    { system: "Spider-Fitting Canopy", glass: "Laminated + SS 316", price: "Quoted on drawings" },
                    { system: "Polycarbonate Roof", glass: "Multiwall PC + aluminium", price: "Quoted on drawings" },
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
                q="Are glass skylights waterproof?"
                a="A well-designed glass skylight is waterproof when sealants, gaskets and drainage are detailed properly and installed well. Fine Glaze checks installed glazing with a site water penetration test before handover and closes any leak on the snag register."
              />
              <FAQItem
                q="How much does a glass skylight cost per sq ft in India?"
                a="Skylight and canopy cost depends on the span, glass, framing, structure and access, so a reliable figure needs drawings. Fine Glaze prepares BOQ-based quotations."
              />
              <FAQItem
                q="Can skylights reduce energy costs?"
                a="Skylights can cut daytime lighting use by bringing in daylight, and low-E or solar-control glass limits heat gain. Net energy effect depends on size, orientation and glass, so check it with the project's energy model."
              />
              <FAQItem
                q="What type of glass is used in skylights?"
                a="Overhead glazing is normally laminated safety glass, where two layers are bonded with an interlayer so broken pieces stay in place. Double glazed and low-E options are available, and the build-up follows the structural check."
              />
              <FAQItem
                q="How long does skylight installation take?"
                a="Installation time depends on span, structure, glass lead time and site access, so we confirm the programme per project after survey and design approval. We work around your construction schedule."
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
                    { title: "ACP Cladding", href: "/acp-aluminium-cladding" },
                    { title: "Glass Railings", href: "/glass-railings" },
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
      <RelatedProjects heading="Canopy projects" keywords={["canopy", "canopies"]} />
      <CTASection />
    </Layout>
  );
}
