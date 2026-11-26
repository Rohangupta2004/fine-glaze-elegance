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
  hero: "/acp-building.webp",
  pvdf: "/acp-cladding.webp",
  pe: "/acp-panels.webp",
  wood: "/acp-finishes.webp",
  mirror: "/acp-panels.webp",
  process: "/projects/salsette-27-33-2.webp",
};

/* ── System data ── */
const SYSTEMS = [
  {
    num: "01",
    title: "PVDF Coated ACP",
    desc: "Premium fluorocarbon (PVDF) coated panels with superior UV resistance and colour retention. A common choice for external cladding, good colour retention outdoors; warranty terms come from the panel maker.",
    glass: "PVDF 70/30",
    wind: "FR mineral core",
    bestFor: "Towers, corporate HQs",
    price: "Quoted on drawings",
    img: "pvdf",
  },
  {
    num: "02",
    title: "PE Coated ACP",
    desc: "Polyester-coated panels offering excellent value for cost-conscious projects. Available in all standard colours and finishes. Best for interior cladding, signage, and canopy soffits.",
    glass: "Polyester (PE)",
    wind: "PE / FR core",
    bestFor: "Interiors, signage, canopies",
    price: "Quoted on drawings",
    img: "pe",
  },
  {
    num: "03",
    title: "Wood-Grain & Stone Finish",
    desc: "Digital printing technology creates realistic wood, stone, and marble textures on ACP surfaces. Natural aesthetics without the weight, maintenance, or cost of real materials.",
    glass: "Digital print + PVDF",
    wind: "FR mineral core",
    bestFor: "Hotels, residences, retail",
    price: "Quoted on drawings",
    img: "wood",
  },
  {
    num: "04",
    title: "Mirror & Metallic ACP",
    desc: "High-reflectivity aluminium panels with mirror-polish or brushed metallic finishes. Creates striking visual impact for feature walls, fascias, and architectural accents.",
    glass: "Anodised / mirror",
    wind: "FR mineral core",
    bestFor: "Feature walls, retail fronts",
    price: "Quoted on drawings",
    img: "mirror",
  },
];

const STEPS = [
  { num: "01", title: "Site Survey", desc: "Measure facade area, assess substrate & plan panel layout" },
  { num: "02", title: "Shop Drawing", desc: "Panel cutting plan, joint layout & colour/finish approval" },
  { num: "03", title: "Fabrication", desc: "CNC routing, folding & sub-frame preparation" },
  { num: "04", title: "Installation", desc: "Sub-frame fixing, panel mounting & joint sealing" },
];

export default function AcpCladding() {
  const [activeSystem, setActiveSystem] = useState(0);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "ACP & Metal Cladding Systems",
    serviceType: "ACP Cladding Installation",
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
    description: "Aluminium Composite Panel cladding — PVDF, PE, wood-grain & mirror finishes. Fire-retardant FR grade panels from approved brands such as Alubond. PVDF grades carry the panel maker's colour warranty.",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fineglaze.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://fineglaze.com/services" },
      { "@type": "ListItem", position: 3, name: "ACP & Metal Cladding", item: "https://fineglaze.com/acp-aluminium-cladding" },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is ACP cladding?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ACP (Aluminium Composite Panel) cladding uses panels made of two aluminium sheets bonded to a core material. They are fixed to a sub-frame on the building exterior, creating a flat, modern cladding surface available in hundreds of colours and finishes.",
        },
      },
      {
        "@type": "Question",
        name: "Is ACP cladding fire safe?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ACP cladding is fire safe only when the core and assembly suit the building. Fire-retardant mineral-core panels are the usual choice for external cladding, and Fine Glaze procures them from approved brands. Confirm the core and test documents with your consultant.",
        },
      },
      {
        "@type": "Question",
        name: "How much does ACP cladding cost per sq ft in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ACP cladding cost depends on panel brand, core, finish, sub-frame, height and access, so a fair figure needs drawings. Fine Glaze prepares BOQ-based quotations with the brand and finish specification stated.",
        },
      },
      {
        "@type": "Question",
        name: "How long does PVDF ACP last?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PVDF (fluorocarbon) coated ACP panels typically carry a manufacturer colour warranty of up to 20 years (check the brand's warranty document for your project). They resist UV fading, chalking, and chemical exposure far better than PE coated panels — making them the preferred choice for external facades.",
        },
      },
      {
        "@type": "Question",
        name: "Can ACP be used for renovation and existing buildings?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. ACP is ideal for building renovation because it is lightweight, installs over existing facades, and transforms the appearance quickly. The aluminium sub-frame can be adapted to any building surface.",
        },
      },
    ],
  };

  const current = SYSTEMS[activeSystem];

  return (
    <Layout darkHero>
      <SEO
        title="ACP Cladding Contractor in Pune & Mumbai | Fine Glaze"
        description="ACP cladding contractor in Pune, Mumbai and across India. ACP and aluminium cladding, with panel routing and preparation at our own fabrication unit in Pune."
        canonical="https://fineglaze.com/acp-aluminium-cladding"
        keywords="ACP cladding contractor, aluminium composite panel cladding, ACP facade, aluminium cladding, PVDF ACP, fire-retardant ACP"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* HERO */}
      <PageHero
        crumbs={[{ label: "ACP & Aluminium Cladding Contractors" }]}
        title={<>ACP & Aluminium<br /> <span className="text-gradient-gold">Cladding</span><span className="ph-sub">Contractors.</span></>}
        intro="Fire-retardant ACP and aluminium cladding for durable, weather-resistant building exteriors in Pune and Mumbai."
        secondary={{ label: "+91 83692 33566", href: "tel:+918369233566" }}
        image={{ src: IMG.hero, alt: "ACP aluminium cladding facade — Fine Glaze" }}
        extra=""
      />


      {/* ════════════ INTRO ════════════ */}
      <section className="fg-sec">
        <div className="fg-wrap">
          <FadeIn>
            <p className="text-lamp text-xs font-bold mb-4">
              What is ACP Cladding
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-paper leading-snug mb-5">
              Two aluminium sheets bonded to a mineral core —{"  "}
              <span className="text-mute">lightweight, fire-safe, and available in unlimited finishes.</span>
            </h2>
            <p className="text-mute text-[15px] md:text-base leading-relaxed">
              Aluminium Composite Panels (ACP) consist of two aluminium sheets bonded to a non-combustible mineral-filled core. They provide a flat, seamless cladding surface that transforms any building exterior. Available in PVDF and PE coatings with solid, metallic, wood-grain, stone, and mirror finishes.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ════════════ CONVERSION QUICK OVERVIEW ════════════ */}
      <ServiceQuickOverview
        serviceTitle="ACP &amp; Metal Cladding Solutions"
        whatWeProvide="ACP panel preparation (routing, grooving) at our Pisoli, Pune unit and erection over MS or aluminium sub-framing, with weather-sealed joints. Fire-retardant core options from approved brands."
        locationsServed={["Pune (Hinjewadi, Undri, Baner)", "Mumbai", "Thane", "Navi Mumbai (Mahape, MIDC)"]}
        bestProjectTypes={[
          "Corporate Campuses & Office Elevations",
          "Commercial Malls & Retail Frontages",
          "High-Rise Residential Facade Accents",
          "Industrial & Warehouse Elevations"
        ]}
        relevantProjects={[
          "LTIMindtree Mensa Campus (Navi Mumbai)",
          "Salsette-27 (Byculla, Mumbai)",
          "SSG Honesty (Panvel)"
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
              Our Panels
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-paper">
              ACP Panel Systems We Install
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
                    <p className="text-[13px] text-mute mb-1">Coating</p>
                    <p className="text-sm font-semibold text-paper">{current.glass}</p>
                  </div>
                  <div className="bg-night-2 p-3">
                    <p className="text-[13px] text-mute mb-1">Core</p>
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
                  title: "Fire-Retardant Options",
                  desc: "FR-core ACP from approved brands for external cladding, confirmed against the project's fire requirements and consultant.",
                },
                {
                  icon: Clock,
                  title: "Lightweight Panels",
                  desc: "Lightweight panels mean lighter sub-frames and a shorter installation sequence than heavy cladding.",
                },
                {
                  icon: Award,
                  title: "Approved Brands",
                  desc: "Panels from approved brands such as Alubond — or strictly from your project's approved vendor list, with mill and test certificates.",
                },
                {
                  icon: Wrench,
                  title: "Clean Finish",
                  desc: "CNC routing for precise folds. Silicone-sealed joints for a seamless, watertight appearance.",
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
            alt="Curved ACP ramp canopy fabricated and installed by Fine Glaze at Salsette-27, Byculla, Mumbai"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-night/40" />
          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <div>
              <p className="text-mute text-sm mb-2">Our Promise</p>
              <p className="text-paper text-xl md:text-3xl font-bold max-w-xl">
                Panel routing at our own unit in Pisoli, Pune, shop drawings prepared in-house, and silicone-sealed joints on site.
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
              ACP Cladding Cost: How We Quote
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
                    <th className="py-3 text-xs font-bold text-mute">Coating / Finish</th>
                    <th className="py-3 text-xs font-bold text-mute text-right">Pricing</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[
                    { system: "PVDF Coated ACP", glass: "PVDF 70/30 + FR core", price: "Quoted on drawings" },
                    { system: "PE Coated ACP", glass: "Polyester + PE/FR core", price: "Quoted on drawings" },
                    { system: "Wood-Grain / Stone", glass: "Digital print + PVDF", price: "Quoted on drawings" },
                    { system: "Mirror / Metallic", glass: "Anodised / mirror finish", price: "Quoted on drawings" },
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
                q="What is ACP cladding?"
                a="ACP (Aluminium Composite Panel) cladding uses panels made of two aluminium sheets bonded to a core material. They are fixed to a sub-frame on the building exterior, creating a flat, modern cladding surface available in hundreds of colours and finishes."
              />
              <FAQItem
                q="Is ACP cladding fire safe?"
                a="ACP cladding is fire safe only when the core and assembly suit the building. Fire-retardant mineral-core panels are the usual choice for external cladding, and Fine Glaze procures them from approved brands. Confirm the core and test documents with your consultant."
              />
              <FAQItem
                q="How much does ACP cladding cost per sq ft in India?"
                a="ACP cladding cost depends on panel brand, core, finish, sub-frame, height and access, so a fair figure needs drawings. Fine Glaze prepares BOQ-based quotations with the brand and finish specification stated."
              />
              <FAQItem
                q="How long does PVDF ACP last?"
                a="PVDF (fluorocarbon) coated ACP panels typically carry a manufacturer colour warranty of up to 20 years (check the brand's warranty document for your project). They resist UV fading, chalking, and chemical exposure far better than PE coated panels — making them the preferred choice for external facades."
              />
              <FAQItem
                q="Can ACP be used for renovation and existing buildings?"
                a="Yes. ACP is ideal for building renovation because it is lightweight, installs over existing facades, and transforms the appearance quickly. The aluminium sub-frame can be adapted to any building surface."
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
                    { title: "Curtain Wall Systems", href: "/curtain-wall-systems" },
                    { title: "Structural Glazing", href: "/structural-glazing" },
                    { title: "Aluminium Facade", href: "/aluminium-windows-doors" },
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
      <RelatedProjects heading="ACP cladding projects" keywords={["ACP"]} />
      <CTASection />
    </Layout>
  );
}
