import Illustration from "@/components/common/Illustration";
import CallNow from "@/components/common/CallNow";
import SEO from "@/components/SEO";
import PageHero from "@/components/common/PageHero";
import { RelatedProjects } from "@/components/RelatedProjects";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { ServiceQuickOverview } from "@/components/service/ServiceQuickOverview";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
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
const IMG = {
  hero: "/projects/naman-chambers-48-1.webp",
  twoSide: "/projects/ssg-honesty-30-1.webp",
  fourSide: "/projects/nanavati-max-hospital-39-1.webp",
  spider: "/projects/embassy-techzone-41-2.webp",
  canopy: "/canopy-spider.webp",
  process: "/projects/embassy-techzone-41-2.webp",
};

/* ── System data ── */
const SYSTEMS = [
  {
    num: "01",
    title: "2-Side Structural Glazing",
    desc: "Two edges bonded with structural silicone, remaining two held with aluminium pressure caps. A partially frameless facade option.",
    glass: "6–12mm toughened",
    wind: "Sized to project wind load",
    bestFor: "IT parks, offices, showrooms",
    price: "Quoted on drawings",
    img: "twoSide" as const,
  },
  {
    num: "02",
    title: "4-Side Structural Glazing",
    desc: "All four edges bonded — no external frame visible. The premium choice for high-end towers and corporate headquarters.",
    glass: "10–19mm DGU / Low-E",
    wind: "Sized to project wind load",
    bestFor: "Towers, hotels, airports",
    price: "Quoted on drawings",
    img: "fourSide" as const,
  },
  {
    num: "03",
    title: "Spider / Point-Fixed Glazing",
    desc: "Glass panels held by stainless steel spider fittings at drilled points — near-invisible structure for maximum transparency.",
    glass: "12–19mm laminated",
    wind: "Stainless steel fittings",
    bestFor: "Atriums, lobbies, feature walls",
    price: "Quoted on drawings",
    img: "spider" as const,
  },
  {
    num: "04",
    title: "Frameless Glass Canopies",
    desc: "Overhead laminated glass supported by structural fins or steel cables — fully weatherproof with integrated drainage.",
    glass: "17.52–21.52mm laminated",
    wind: "Aluminium fins / steel",
    bestFor: "Entrances, malls, bridges",
    price: "On Request",
    img: "canopy" as const,
  },
];

const STEPS = [
  { num: "01", title: "Site Survey", desc: "Measurement, access study and scope freeze" },
  { num: "02", title: "Engineering", desc: "In-house shop drawings and wind-load engineering check" },
  { num: "03", title: "Fabrication", desc: "Fabrication at our Pisoli, Pune unit, batched per project" },
  { num: "04", title: "Installation", desc: "Sequenced erection with line, level and plumb checks" },
];

export default function StructuralGlazing() {
  const [activeSystem, setActiveSystem] = useState(0);

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
      "Frameless structural glazing systems: 2-side, 4-side and spider glazing for commercial buildings and showrooms, in Pune, Mumbai and across India.",
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
          text: "Structural glazing bonds glass to an aluminium frame with structural silicone instead of mechanical fixings, giving a seamless, frameless look while the silicone and frame carry the glass loads. The system is sized to the project wind load.",
        },
      },
      {
        "@type": "Question",
        name: "How much does structural glazing cost per sq ft in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Structural glazing cost depends on the configuration (2-side, 4-side or spider), glass, height and access, so it needs drawings to price. Fine Glaze prepares BOQ-based quotations.",
        },
      },
      {
        "@type": "Question",
        name: "Is structural glazing safe for high-rise buildings?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Structural glazing can be used on tall buildings when it is designed for the project wind load, with proper sealant, retention and drainage. Fine Glaze checks member sizing, fixing and anchorage and procures DOWSIL structural silicone or approved equivalents.",
        },
      },
      {
        "@type": "Question",
        name: "How long does installation take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Installation time depends on facade area, building height, access and glass lead time, so we confirm the programme per project after survey and design approval. Fabrication is batched at our Pisoli unit and despatched to site.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer maintenance after installation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We offer annual maintenance contracts for glazing, glass and cladding, covering inspection, sealant re-application, glass replacement and cleaning, with a written condition report.",
        },
      },
    ],
  };

  const current = SYSTEMS[activeSystem];

  return (
    <Layout darkHero>
      <SEO
        title="Structural Glazing Contractor in Pune & Mumbai | Fine Glaze"
        description="Structural glazing contractor in Pune, Mumbai and across India. 2-side, 4-side and spider glazing, in-house shop drawings, site water penetration test."
        canonical="https://fineglaze.com/structural-glazing"
        keywords="structural glazing contractor, structural glazing systems, glass facade contractor, 2-side structural glazing, 4-side structural glazing, frameless glass facade"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* HERO */}
      <PageHero
        crumbs={[{ label: "Structural Glazing Contractors Pune & Mumbai" }]}
        title={<>Structural Glazing<br /> <span className="text-gradient-gold">Contractors</span><span className="ph-sub">Pune &amp; Mumbai.</span></>}
        intro="Frameless 2-side, 4-side and spider glazing systems for commercial buildings, IT campuses and showrooms in Pune and Mumbai."
        secondary={{ label: "+91 83692 33566", href: "tel:+918369233566" }}
        image={{ src: IMG.hero, alt: "Naman Chambers, Bandra Kurla Complex, Mumbai — glazing and ACP works by Fine Glaze (in progress)" }}
        extra="Embassy REIT Best Vendor Performance 2024. 15 project records."
      />


      {/* ════════════════════════════════════════════════════
          INTRO — centered bold text, no image
          ════════════════════════════════════════════════════ */}
      <section className="fg-sec">
        <div className="fg-wrap">
          <FadeIn>
            <h2 className="fg-h2 wide">
              Glass bonded directly to structure,{" "}
              <span className="text-mute">no visible frames, no clamps, no compromise.</span>
            </h2>
            <p className="text-mute text-[15px] md:text-base leading-relaxed">
              Structural glazing replaces traditional mechanical fixings with high-performance
              structural silicone sealant, creating completely seamless, frameless facades
              for modern commercial buildings across India.
            </p>
            <Illustration name="svc-structural-glazing" />
          </FadeIn>
        </div>
      </section>

      {/* ════════════ CONVERSION QUICK OVERVIEW ════════════ */}
      <ServiceQuickOverview
        serviceTitle="Structural Glazing Systems"
        whatWeProvide="In-house shop drawings and engineering checks, fabrication at our Pisoli (Pune) unit, DOWSIL structural silicone bonding (or the approved equivalent), on-site installation & a site water penetration test."
        locationsServed={["Pune (Hinjewadi, Kharadi)", "Mumbai (BKC, Andheri, Vikhroli)", "Thane", "Navi Mumbai"]}
        bestProjectTypes={[
          "Grade-A Office Towers",
          "IT Park Buildings",
          "Hotel Entrance Canopies",
          "Commercial Automobile Showrooms"
        ]}
        relevantProjects={[
          "Embassy 247 (Vikhroli, Mumbai)",
          "LTIMindtree Mensa Campus (Navi Mumbai)",
          "SSG Honesty (Panvel)",
          "Pune Airport Terminal"
        ]}
      />


      {/* ════════════════════════════════════════════════════
          STATS — dark horizontal band
          ════════════════════════════════════════════════════ */}
      <section className="fg-sec">
        <div className="fg-wrap">
          <FadeIn>
            <dl className="fg-stats" style={{ ["--n" as string]: 3 }}>
              {[
                { number: "16", label: "Project Records Documented" },
                { number: "40+", label: "Core Team" },
                { number: "2024", label: "Embassy REIT Best Vendor Performance" },
              ].map((s) => (
                <div key={s.label}>
                  <dt>{s.number}</dt>
                  <dd className="nm">{s.label}</dd>
                </div>
              ))}
            </dl>
          </FadeIn>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          SYSTEMS — tabbed selector with image + details
          ════════════════════════════════════════════════════ */}
      <section className="fg-sec">
        <div className="fg-wrap">
          <FadeIn className="mb-10">
            <h2 className="fg-h2">
              Structural Glazing Systems We Install
            </h2>
          </FadeIn>

          <FadeIn delay={100}>
            {/* Tab buttons */}
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

            {/* Active system content */}
            <div className="grid md:grid-cols-2 gap-0 bg-night overflow-hidden" key={current.num}>
              <div className="relative h-[280px] md:h-[360px] overflow-hidden">
                <img decoding="async"
                  src={IMG[current.img]}
                  alt={current.title}
                  className="w-full h-full object-cover transition-opacity duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-[rgba(24,19,15,0.78)] text-[#f5f2ee] text-xs font-bold px-3 py-1.5">
                  {current.num}
                </div>
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl font-medium text-paper mb-3">{current.title}</h3>
                <p className="text-mute text-sm leading-relaxed mb-6">{current.desc}</p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-night-2 p-3">
                    <p className="text-[13px] text-mute mb-1">Glass</p>
                    <p className="text-sm font-semibold text-paper">{current.glass}</p>
                  </div>
                  <div className="bg-night-2 p-3">
                    <p className="text-[13px] text-mute mb-1">Spec</p>
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

                <CallNow className="fg-btn self-start" />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          WHY FINE GLAZE — 4-column feature strip
          ════════════════════════════════════════════════════ */}
      <section className="fg-sec">
        <div className="fg-wrap">
          <FadeIn className="mb-12">
            <h2 className="fg-h2">
              Built for performance. Delivered on schedule.
            </h2>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {[
                {
                  title: "Dedicated Safety Officer",
                  desc: "A nominated safety officer oversees elevation work across active sites.",
                },
                {
                  title: "Stage Inspections",
                  desc: "Material, fabrication and installation checks, with the snag register closed before handover.",
                },
                {
                  title: "Own Fabrication Unit",
                  desc: "Shop drawings are prepared in-house and fabrication is at our Pisoli, Pune unit. Heavy processing goes to approved vendors.",
                },
                {
                  title: "AMC Support",
                  desc: "Ongoing maintenance contracts for sealant, glass replacement & cleaning.",
                },
              ].map((item) => (
                <div key={item.title}>
                  <h3 className="text-lg font-medium text-paper mb-2">{item.title}</h3>
                  <p className="text-mute text-[15px] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={200} className="mt-12">
            <p className="text-mute text-sm">
              Clients include <span className="text-paper font-semibold">Embassy REIT</span>,{" "}
              <span className="text-paper font-semibold">L&amp;T Construction</span>,{" "}
              <span className="text-paper font-semibold">Jindal Stainless Limited</span>
            </p>
          </FadeIn>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          HOW WE WORK — horizontal 4-step timeline
          ════════════════════════════════════════════════════ */}
      <section className="fg-sec">
        <div className="fg-wrap">
          <FadeIn className="mb-10">
            <h2 className="fg-h2">
              From first visit to final handover
            </h2>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {STEPS.map((step, i) => (
                <div key={step.num} className="relative">
                  {/* Connecting line */}
                  {i < STEPS.length - 1 && (
                    <div className="hidden md:block absolute top-5 left-[60%] right-0 h-px bg-line" />
                  )}
                  <div className="bg-night p-5 relative">
                    <span className="fg-step-n">{step.num}</span>
                    <h3 className="text-lg font-medium text-paper mb-1">{step.title}</h3>
                    <p className="text-mute text-[15px] leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          FULL-WIDTH PHOTO BREAK
          ════════════════════════════════════════════════════ */}
      <FadeIn>
        <div className="fg-wrap">
        <div className="relative h-[35vh] md:h-[40vh] overflow-hidden">
          <img
            src={IMG.process}
            sizes="(max-width: 1280px) 100vw, 1152px"
            decoding="async"
            alt="Glass entrance, Embassy TechZone, Hinjewadi, Pune"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-[rgba(24,19,15,0.72)]" />
          <div className="absolute inset-0 flex items-center">
            <div className="px-6 md:px-10">
              <p className="fg-kicker fg-kicker-light">Our promise</p>
              <p className="text-[#f5f2ee] font-display font-medium text-2xl md:text-4xl leading-[1.15] tracking-[-0.015em] max-w-2xl">
                Shop drawings prepared in-house. Installation run by a dedicated site in-charge and supervisor.
              </p>
            </div>
          </div>
        </div>
        </div>
      </FadeIn>


      {/* ════════════════════════════════════════════════════
          PRICING — compact table
          ════════════════════════════════════════════════════ */}
      <section className="fg-sec">
        <div className="fg-wrap">
          <FadeIn className="mb-8">
            <h2 className="fg-h2">
              Structural Glazing Cost: How We Quote
            </h2>
            <p className="text-mute text-sm">
              We quote against drawings. Final cost depends on height, glass spec and complexity.
            </p>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b-2 border-line">
                    <th className="py-3 text-[13px] font-medium text-mute">System</th>
                    <th className="py-3 text-[13px] font-medium text-mute">Glass</th>
                    <th className="py-3 text-[13px] font-medium text-mute text-right">Pricing</th>
                  </tr>
                </thead>
                <tbody className="text-[15.5px]">
                  {[
                    { system: "2-Side SSG", glass: "6 – 12 mm toughened", price: "Quoted on drawings" },
                    { system: "4-Side SSG", glass: "10 – 19 mm DGU / Low-E", price: "Quoted on drawings" },
                    { system: "Spider / Point-Fixed", glass: "12 – 19 mm laminated", price: "Quoted on drawings" },
                    { system: "Frameless Canopy", glass: "17.52 – 21.52 mm laminated", price: "On request" },
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

            <div className="mt-8">
              <CallNow className="fg-btn" number />
            </div>
          </FadeIn>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          FAQ
          ════════════════════════════════════════════════════ */}
      <section className="fg-sec">
        <div className="fg-wrap">
          <FadeIn className="mb-8">
            <h2 className="fg-h2">
              FAQ
            </h2>
          </FadeIn>

          <FadeIn delay={100}>
            <div>
              <FAQItem
                q="What is structural glazing and how does it work?"
                a="Structural glazing bonds glass to an aluminium frame with structural silicone instead of mechanical fixings, giving a seamless, frameless look while the silicone and frame carry the glass loads. The system is sized to the project wind load."
              />
              <FAQItem
                q="How much does structural glazing cost per sq ft in India?"
                a="Structural glazing cost depends on the configuration (2-side, 4-side or spider), glass, height and access, so it needs drawings to price. Fine Glaze prepares BOQ-based quotations."
              />
              <FAQItem
                q="Is structural glazing safe for high-rise buildings?"
                a="Structural glazing can be used on tall buildings when it is designed for the project wind load, with proper sealant, retention and drainage. Fine Glaze checks member sizing, fixing and anchorage and procures DOWSIL structural silicone or approved equivalents."
              />
              <FAQItem
                q="How long does installation take?"
                a="Installation time depends on facade area, building height, access and glass lead time, so we confirm the programme per project after survey and design approval. Fabrication is batched at our Pisoli unit and despatched to site."
              />
              <FAQItem
                q="Do you offer maintenance after installation?"
                a="Yes. We offer annual maintenance contracts for glazing, glass and cladding, covering inspection, sealant re-application, glass replacement and cleaning, with a written condition report."
              />
            </div>
          </FadeIn>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          AREAS + SERVICES — combined dark footer band
          ════════════════════════════════════════════════════ */}
      <section className="fg-sec">
        <div className="fg-wrap">
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-10 md:gap-16">
              {/* Areas */}
              <div>
                <h3 className="font-display text-2xl font-medium text-paper mb-5">Where we work</h3>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {["Pune", "Mumbai BKC", "Navi Mumbai", "Thane", "Hinjewadi", "Pimpri-Chinchwad"].map((city) => (
                    <div key={city} className="flex items-center gap-1.5">
                      <MapPin size={11} className="text-lamp" />
                      <span className="text-mute text-sm">{city}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Other services */}
              <div>
                <h3 className="font-display text-2xl font-medium text-paper mb-5">Other services</h3>
                <div className="grid grid-cols-2 gap-x-6 gap-y-1.5">
                  {[
                    { title: "Curtain Wall Systems", href: "/curtain-wall-systems" },
                    { title: "Aluminium Facade", href: "/aluminium-windows-doors" },
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


      {/* ════════════════════════════════════════════════════
          CTA
          ════════════════════════════════════════════════════ */}
      <RelatedProjects heading="Glazing projects we have delivered" keywords={["glazing", "spider", "glass door"]} />
      <CTASection />
    </Layout>
  );
}
