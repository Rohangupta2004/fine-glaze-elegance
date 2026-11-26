import SEO from "@/components/SEO";
import PageHero from "@/components/common/PageHero";
import { RelatedProjects } from "@/components/RelatedProjects";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
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
  hero: "/facade-maintenance.webp",
  sealant: "/Sealent.webp",
  glass: "/Glass.webp",
  cleaning: "/Amc.webp",
  amc: "/Amc1.webp",
  process: "/projects/embassy-247-37-1.webp",
};

/* ── System data ── */
const SYSTEMS = [
  {
    num: "01",
    title: "Sealant Renewal & Waterproofing",
    desc: "Complete removal and replacement of degraded structural silicone and weather sealants. We use approved sealants from major manufacturers. Includes joint preparation, priming, and quality-tested application.",
    glass: "Dow Corning / Sika",
    wind: "Per condition report",
    bestFor: "Leaking facades, old buildings",
    price: "Quoted on drawings",
    img: "sealant",
  },
  {
    num: "02",
    title: "Glass Panel Replacement",
    desc: "Safe removal and replacement of cracked, broken, or hazy glass panels. We stock common DGU and toughened glass specifications for fast turnaround. Includes gasket and sealant renewal.",
    glass: "Rope-access / scaffold",
    wind: "As needed",
    bestFor: "Damaged panels, upgrades",
    price: "Quoted on drawings",
    img: "glass",
  },
  {
    num: "03",
    title: "Facade Cleaning",
    desc: "Professional rope-access or BMU-based facade cleaning using pH-neutral solutions. Removes pollution deposits, hard water stains, and biological growth without damaging glass coatings or sealants.",
    glass: "Rope-access / BMU",
    wind: "2x per year",
    bestFor: "Commercial towers, malls",
    price: "Quoted on drawings",
    img: "cleaning",
  },
  {
    num: "04",
    title: "Annual Maintenance Contract",
    desc: "Comprehensive AMC covering bi-annual inspections, sealant checks, hardware lubrication, drainage clearing, and priority emergency repairs. Includes detailed condition reports with photo documentation.",
    glass: "Scheduled programme",
    wind: "Bi-annual visits",
    bestFor: "All commercial buildings",
    price: "Custom quote",
    img: "amc",
  },
];

const STEPS = [
  { num: "01", title: "Inspection", desc: "Full facade audit with photo documentation of all issues" },
  { num: "02", title: "Report", desc: "Detailed condition report with prioritised repair recommendations" },
  { num: "03", title: "Execution", desc: "Scheduled repairs with safe access for the site" },
  { num: "04", title: "Handover", desc: "Completion report with before and after photos; defect liability support as per contract" },
];

export default function Maintenance() {
  const [activeSystem, setActiveSystem] = useState(0);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Facade AMC & Maintenance Services",
    serviceType: "Facade Maintenance & AMC",
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
    description: "Comprehensive facade maintenance — sealant renewal, glass replacement, cleaning, waterproofing & annual maintenance contracts (AMC) for commercial buildings.",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fineglaze.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://fineglaze.com/services" },
      { "@type": "ListItem", position: 3, name: "Facade AMC & Maintenance", item: "https://fineglaze.com/maintenance-services" },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How often should a facade be maintained?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A facade should be inspected at least once a year, and twice a year (before and after the monsoon) for coastal or structural glazing facades. Cleaning frequency depends on the building. Sealant life depends on product, exposure and workmanship.",
        },
      },
      {
        "@type": "Question",
        name: "What does a facade AMC include?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A facade AMC covers scheduled inspection and repair agreed in the contract. Fine Glaze's scope includes periodic inspection with a written condition report, cleaning, sealant re-application, glass replacement and leakage investigation.",
        },
      },
      {
        "@type": "Question",
        name: "How much does facade cleaning cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Facade cleaning cost depends on building height, access method (rope access, cradle or BMU), glass area and how soiled the glass is. Fine Glaze quotes per project after reviewing the building.",
        },
      },
      {
        "@type": "Question",
        name: "Can you replace glass panels on occupied buildings?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Glass replacement on an occupied building is planned with the building management, with agreed access, timing, edge protection and debris control. Fine Glaze plans the sequence per site.",
        },
      },
      {
        "@type": "Question",
        name: "Do you service facades installed by other companies?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We service all facade types regardless of the original installer. Our engineers assess the system, identify the glass and sealant specifications, and source matching materials for seamless repairs.",
        },
      },
    ],
  };

  const current = SYSTEMS[activeSystem];

  return (
    <Layout darkHero>
      <SEO
        title="Facade Maintenance Company in Pune & Mumbai | Fine Glaze"
        description="Facade maintenance company in Pune, Mumbai and across India. AMC, glass cleaning, sealant repair and leakage checks, with a written facade condition report."
        canonical="https://fineglaze.com/maintenance-services"
        keywords="facade maintenance company, facade maintenance AMC, glass facade cleaning, sealant replacement, curtain wall repair, facade inspection"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* HERO */}
      <PageHero
        crumbs={[{ label: "Facade Maintenance & AMC" }]}
        title={<>Facade<br /> <span className="text-gradient-gold">Maintenance</span><span className="ph-sub">& AMC.</span></>}
        intro="Sealant renewal, glass replacement, cleaning & annual maintenance contracts for commercial buildings."
        secondary={{ label: "+91 83692 33566", href: "tel:+918369233566" }}
        image={{ src: IMG.hero, alt: "Facade maintenance work — Fine Glaze" }}
        extra=""
      />


      {/* ════════════ INTRO ════════════ */}
      <section className="fg-sec">
        <div className="fg-wrap">
          <FadeIn>
            <h2 className="fg-h2 wide">
              Protect your building investment,{" "}
              <span className="text-mute">preventive care that costs less than emergency repairs.</span>
            </h2>
            <p className="text-mute text-[15px] md:text-base leading-relaxed">
              Facade systems need regular maintenance to perform. UV-degraded sealant causes leaks, dirty glass reduces building value, and unchecked corrosion leads to costly structural failures. Our AMC programs catch problems early with scheduled inspections and proactive repairs.
            </p>
          </FadeIn>
        </div>
      </section>


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
                <div key={s.label} className="px-4 first:pl-0">
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
            <h2 className="fg-h2">
              Facade Maintenance Services We Offer
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
                <img decoding="async"
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
                <h3 className="text-xl md:text-2xl font-medium text-paper mb-3">{current.title}</h3>
                <p className="text-mute text-sm leading-relaxed mb-6">{current.desc}</p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-night-2 p-3">
                    <p className="text-[13px] text-mute mb-1">Method</p>
                    <p className="text-sm font-semibold text-paper">{current.glass}</p>
                  </div>
                  <div className="bg-night-2 p-3">
                    <p className="text-[13px] text-mute mb-1">Frequency</p>
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
            <h2 className="fg-h2">
              Built for performance. Delivered on schedule.
            </h2>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  title: "Safety on Site",
                  desc: "A nominated safety officer oversees work at height across our sites, with harness, lifeline and anchorage on every elevation activity.",
                },
                {
                  title: "Emergency response",
                  desc: "Emergency glass replacement and leak repairs for AMC clients.",
                },
                {
                  title: "Facade Installers",
                  desc: "As a facade contractor, we understand how these systems are built, which helps diagnose and repair them.",
                },
                {
                  title: "Approved Materials",
                  desc: "Sealants from approved manufacturers, with glass and hardware matched to the existing specification where possible.",
                },
              ].map((item) => (
                <div key={item.title}>
                  <h3 className="text-sm font-medium text-paper mb-2">{item.title}</h3>
                  <p className="text-mute text-xs leading-relaxed">{item.desc}</p>
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


      {/* ════════════ HOW WE WORK ════════════ */}
      <section className="fg-sec">
        <div className="fg-wrap">
          <FadeIn className="mb-10">
            <h2 className="fg-h2">
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
                    <h3 className="text-sm font-medium text-paper mb-1">{step.title}</h3>
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
        <div className="fg-wrap">
        <div className="relative h-[35vh] md:h-[40vh] overflow-hidden" style={{ maxWidth: 775 }}>
          <img
            src={IMG.process}
            sizes="(max-width: 1280px) 100vw, 1152px"
            decoding="async"
            alt="Embassy 247, Vikhroli, Mumbai — facade sealant and glass replacement by Fine Glaze for Embassy REIT"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-night/40" />
          <div className="absolute inset-0 flex items-center">
            <div className="px-6 md:px-10">
              <p className="text-mute text-sm mb-2">Our Promise</p>
              <p className="text-paper text-xl md:text-3xl font-bold max-w-xl">
                Inspection first, a written condition report next, then repair. We service facades we did not install too.
              </p>
            </div>
          </div>
        </div>
        </div>
      </FadeIn>


      {/* ════════════ PRICING ════════════ */}
      <section className="fg-sec">
        <div className="fg-wrap">
          <FadeIn className="mb-8">
            <h2 className="fg-h2">
              Facade Maintenance Cost: How We Quote
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
                    <th className="py-3 text-xs font-bold text-mute">Method</th>
                    <th className="py-3 text-xs font-bold text-mute text-right">Pricing</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[
                    { system: "Sealant Renewal", glass: "Dow Corning / Sika", price: "Quoted on drawings" },
                    { system: "Glass Replacement", glass: "DGU / toughened", price: "Quoted on drawings" },
                    { system: "Facade Cleaning", glass: "Rope-access / BMU", price: "Quoted on drawings" },
                    { system: "Annual AMC", glass: "Bi-annual programme", price: "Custom quote" },
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
            <h2 className="fg-h2">
              FAQ
            </h2>
          </FadeIn>

          <FadeIn delay={100}>
            <div>
              <FAQItem
                q="How often should a facade be maintained?"
                a="A facade should be inspected at least once a year, and twice a year (before and after the monsoon) for coastal or structural glazing facades. Cleaning frequency depends on the building. Sealant life depends on product, exposure and workmanship."
              />
              <FAQItem
                q="What does a facade AMC include?"
                a="A facade AMC covers scheduled inspection and repair agreed in the contract. Fine Glaze's scope includes periodic inspection with a written condition report, cleaning, sealant re-application, glass replacement and leakage investigation."
              />
              <FAQItem
                q="How much does facade cleaning cost?"
                a="Facade cleaning cost depends on building height, access method (rope access, cradle or BMU), glass area and how soiled the glass is. Fine Glaze quotes per project after reviewing the building."
              />
              <FAQItem
                q="Can you replace glass panels on occupied buildings?"
                a="Yes. Glass replacement on an occupied building is planned with the building management, with agreed access, timing, edge protection and debris control. Fine Glaze plans the sequence per site."
              />
              <FAQItem
                q="Do you service facades installed by other companies?"
                a="Yes. We service all facade types regardless of the original installer. Our engineers assess the system, identify the glass and sealant specifications, and source matching materials for seamless repairs."
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

              <div>
                <h3 className="font-display text-2xl font-medium text-paper mb-5">Other services</h3>
                <div className="grid grid-cols-2 gap-x-6 gap-y-1.5">
                  {[
                    { title: "Curtain Wall Systems", href: "/curtain-wall-systems" },
                    { title: "Structural Glazing", href: "/structural-glazing" },
                    { title: "ACP Cladding", href: "/acp-aluminium-cladding" },
                    { title: "Aluminium Facade", href: "/aluminium-windows-doors" },
                    { title: "Glass Railings", href: "/glass-railings" },
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
      <RelatedProjects heading="Maintenance & repair work we run" keywords={["sealant", "maintenance", "leakage", "replacement", "repair"]} />
      <CTASection />
    </Layout>
  );
}
