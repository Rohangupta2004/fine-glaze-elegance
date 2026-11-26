import { useState } from "react";
import { telHref } from "@/data/company";
import { RelatedProjects } from "@/components/RelatedProjects";
import { Link } from "react-router-dom";
import { ServiceQuickOverview } from "@/components/service/ServiceQuickOverview";
import { ArrowRight, MapPin, CheckCircle2, Phone, Mail, FileText } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { ILLUSTRATIONS, illusSrc, illusSrcSet } from "@/lib/illustrations";
import SEO from "@/components/SEO";
import PageHero from "@/components/common/PageHero";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { Button } from "@/components/ui/button";

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
  hero: illusSrc("svc-curtain-wall"),
  unitized: "/structural-glazing.webp",
  stick: "/curtain-wall.webp",
  semi: "/spider-glazing.webp",
  point: "/Glass installation.webp",
  process: "/projects/embassy-techzone-41-1.webp",
};

/* ── System data ── */
const SYSTEMS = [
  {
    num: "01",
    title: "Unitized Curtain Wall",
    desc: "Factory-assembled panels shipped ready to install. Fastest method — ideal for high-rises. Each panel interlocks with the next for a seamless, watertight envelope.",
    glass: "6063-T6 aluminium",
    wind: "Sized to project wind load",
    bestFor: "High-rises, IT parks",
    price: "Quoted on drawings",
    img: "unitized",
  },
  {
    num: "02",
    title: "Stick System Curtain Wall",
    desc: "Aluminium mullions and transoms assembled piece-by-piece on site. Cost-effective for low-to-mid rise buildings with varying floor heights.",
    glass: "6063-T6 aluminium",
    wind: "Sized to project wind load",
    bestFor: "Offices, showrooms",
    price: "Quoted on drawings",
    img: "stick",
  },
  {
    num: "03",
    title: "Semi-Unitized System",
    desc: "Mullions fixed on-site, pre-glazed panels slotted in. Combines unitized speed with stick-system flexibility — great for renovation projects.",
    glass: "6063-T6 aluminium",
    wind: "Sized to project wind load",
    bestFor: "Renovations, mid-rises",
    price: "Quoted on drawings",
    img: "semi",
  },
  {
    num: "04",
    title: "Point-Supported Glass Wall",
    desc: "Minimal structure with stainless-steel point fixings and structural glass fins. Maximum transparency for atriums, lobbies, and feature facades.",
    glass: "SS 316 fittings",
    wind: "Structural glass fins",
    bestFor: "Lobbies, atriums",
    price: "Quoted on drawings",
    img: "point",
  },
];

const STEPS = [
  { num: "01", title: "Site Survey", desc: "Measurement, access study and scope freeze" },
  { num: "02", title: "Engineering", desc: "In-house shop drawings and wind-load engineering check" },
  { num: "03", title: "Fabrication", desc: "Cutting, assembly and finishing at our Pisoli, Pune unit" },
  { num: "04", title: "Installation", desc: "Sequenced erection with line, level and plumb checks" },
];

export default function CurtainWall() {
  const [activeSystem, setActiveSystem] = useState(0);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Curtain Wall Systems",
    serviceType: "Curtain Wall Manufacturing & Installation",
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
    description: "Curtain wall contractor in Pune, Mumbai and across India. Unitized, stick and semi-unitized glass curtain wall systems.",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fineglaze.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://fineglaze.com/services" },
      { "@type": "ListItem", position: 3, name: "Curtain Wall Systems", item: "https://fineglaze.com/curtain-wall-systems" },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who is Fine Glaze as a curtain wall contractor?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Fine Glaze is a curtain wall contractor based in Pune and Mumbai, taking projects across India. We prepare shop drawings in-house, fabricate at our own Pisoli unit and install curtain walls for commercial and residential buildings.",
        },
      },
      {
        "@type": "Question",
        name: "What is the advantage of a unitized curtain wall system?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Unitized curtain walls are factory-assembled and pre-glazed in controlled conditions, which shortens on-site erection and improves quality control. They suit tall buildings and tight programmes, subject to design and access.",
        },
      },
      {
        "@type": "Question",
        name: "What is the typical curtain wall cost per sq ft in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Curtain wall cost depends on the system (stick, semi-unitized, unitized or spider), glass, height, wind load and access, so a reliable figure needs drawings. Fine Glaze prepares BOQ-based quotations.",
        },
      },
      {
        "@type": "Question",
        name: "How do I request a quotation for a commercial curtain wall project?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can request a quotation by uploading your project drawings or BOQ on our contact page, calling +91 8369233566, or emailing info@fineglaze.com. Our office hours are Monday to Saturday, 09:00 to 18:00.",
        },
      },
      {
        "@type": "Question",
        name: "Do you install structural glazing and ACP cladding alongside curtain walls?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Fine Glaze offers complete building envelope solutions including structural glazing, ACP aluminium cladding, glass railings, and glass skylights.",
        },
      },
    ],
  };

  const current = SYSTEMS[activeSystem];

  return (
    <Layout darkHero>
      <SEO
        title="Curtain Wall Contractor in Pune & Mumbai | Fine Glaze"
        description="Curtain wall contractor in Pune, Mumbai and across India. Unitized, stick and semi-unitized systems, in-house shop drawings, own Pune fabrication unit."
        canonical="https://fineglaze.com/curtain-wall-systems"
        keywords="Curtain wall manufacturers, curtain wall manufacturers Pune, curtain wall manufacturers Mumbai, unitized curtain wall, curtain wall cost, curtain wall systems"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* HERO */}
      <PageHero
        crumbs={[{ label: "Curtain Wall Manufacturers Pune & Mumbai" }]}
        title={<>Curtain Wall<br /> <span className="text-gradient-gold">Manufacturers</span><span className="ph-sub">Pune &amp; Mumbai.</span></>}
        intro="As curtain wall contractors based in Pune and Mumbai, Fine Glaze delivers engineered unitized, stick, and semi-unitized glass curtain wall systems for commercial towers, IT parks, and high-rise office developments."
        secondary={{ label: "+91 83692 33566", href: "tel:+918369233566" }}
        image={{ src: IMG.hero, srcSet: illusSrcSet("svc-curtain-wall"), sizes: "(max-width: 1024px) 100vw, 640px", alt: ILLUSTRATIONS["svc-curtain-wall"], width: 1376, height: 768 }}
        extra=""
      />

      {/* ════════════ MANUFACTURERS OVERVIEW ════════════ */}
      <section className="fg-sec">
        <div className="fg-wrap">
          <FadeIn>
            <h2 className="fg-h2 wide">
              Curtain Wall Systems for Modern Architecture,{" "}
              <span className="text-mute">engineered for wind load, thermal performance & longevity.</span>
            </h2>
            <p className="text-mute text-[15px] md:text-base leading-relaxed mb-6">
              Fine Glaze designs, fabricates and installs curtain wall building envelopes. We use aluminium extrusions from major Indian mills, DOWSIL structural silicone or approved equivalents, and double-glazed units (DGU) with Low-E coatings where the specification calls for them, in Pune, Mumbai and across India.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs font-medium text-mute">
              <span className="bg-night-2 px-3 py-1.5">Own Fabrication Unit, Pune</span>
              <span className="bg-night-2 px-3 py-1.5">Wind Load Engineering Check</span>
              <span className="bg-night-2 px-3 py-1.5">DOWSIL Structural Silicone</span>
              <span className="bg-night-2 px-3 py-1.5">Safety Glass Where Required</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ════════════ CONVERSION QUICK OVERVIEW ════════════ */}
      <ServiceQuickOverview
        serviceTitle="Curtain Wall Glazing Systems"
        whatWeProvide="Unitized panelized facades, semi-unitized & stick curtain walls. Includes in-house shop drawings, an engineering check against project wind load, fabrication, DGU Low-E glass integration, weather-seal installation and a site water penetration test."
        locationsServed={["Pune (Hinjewadi, Baner, Kharadi)", "Mumbai (BKC, Nariman Point, Lower Parel)", "Thane", "Navi Mumbai"]}
        bestProjectTypes={[
          "High-Rise Commercial Towers (10+ Storeys)",
          "Corporate IT Parks & Tech Campuses",
          "Mixed-Use Retail & Commercial Podiums",
          "Hospitality & Luxury Hotel Towers"
        ]}
        relevantProjects={[
          "Embassy 247 (Vikhroli, Mumbai)",
          "SSG Honesty (Panvel)",
          "LTIMindtree Mensa Campus (Navi Mumbai)"
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
                <div key={s.label} className="px-4 first:pl-0">
                  <p className="text-2xl md:text-3xl font-bold text-gradient">{s.number}</p>
                  <p className="text-mute text-[13px] mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ════════════ UNITIZED CURTAIN WALL DEEP-DIVE ════════════ */}
      <section className="fg-sec">
        <div className="fg-wrap">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <h2 className="fg-h2">
                Unitized Curtain Wall Systems
              </h2>
              <p className="text-paper/80 text-sm md:text-base leading-relaxed mb-6">
                Unitized curtain wall systems consist of large pre-assembled, factory-glazed panels that are transported to the construction site and anchored directly to the building floor slab. This system is commonly chosen for tall commercial towers and IT parks.
              </p>
              <ul className="space-y-3 text-sm text-paper/80 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-lamp shrink-0 mt-0.5" />
                  <span><strong>Faster On-Site Erection</strong> — Pre-fabricated modules reduce the work done at height.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-lamp shrink-0 mt-0.5" />
                  <span><strong>Controlled Factory Quality</strong> — Structural silicone application and EPDM gasket sealing are executed in controlled indoor environments.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-lamp shrink-0 mt-0.5" />
                  <span><strong>Superior Weather Tightness</strong> — Interlocking stack joints accommodate building movement and thermal expansion naturally.</span>
                </li>
              </ul>
              <Button asChild className="bg-lamp hover:bg-lamp/90 text-lamp-ink font-bold gap-2"><a href={telHref} data-call-now><Phone size={16} aria-hidden="true" /> Call now</a></Button>
            </FadeIn>

            <FadeIn delay={150}>
              <div className="relative overflow-hidden border border-line">
                <img decoding="async"
                  src={IMG.hero}
                  alt={ILLUSTRATIONS["svc-curtain-wall"]}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-night-2/90 border border-line">
                  <p className="text-lamp text-xs font-bold">Unitized Curtain Wall Specs</p>
                  <p className="text-paper text-sm mt-1">6063-T6 Extrusions, 6mm + 12mm Argon + 6mm Low-E DGU, EPDM Gasket Seal</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ════════════ SYSTEMS TABBED ════════════ */}
      <section className="fg-sec">
        <div className="fg-wrap">
          <FadeIn className="mb-10">
            <h2 className="fg-h2">
              Curtain Wall Systems We Manufacture & Install
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
                  alt={`${current.title} — Curtain wall manufacturers Fine Glaze`}
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
                    <p className="text-[13px] text-mute mb-1">Frame</p>
                    <p className="text-sm font-semibold text-paper">{current.glass}</p>
                  </div>
                  <div className="bg-night-2 p-3">
                    <p className="text-[13px] text-mute mb-1">Wind Load</p>
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

                <Button asChild size="sm" className="bg-night-2 hover:bg-night-2 text-paper gap-2"><a href={telHref} data-call-now><Phone size={14} aria-hidden="true" /> Call now</a></Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>



      {/* ════════════ CURTAIN WALL COST SECTION ════════════ */}
      <section className="fg-sec">
        <div className="fg-wrap">
          <FadeIn className="mb-10">
            <h2 className="fg-h2">
              Curtain Wall Cost Per Sq Ft in India (2026 Guide)
            </h2>
            <p className="text-mute text-sm max-w-xl">
              Transparent rate comparison based on project complexity, glass specifications, and installation methods across Maharashtra.
            </p>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="bg-night border border-line overflow-hidden mb-8">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-night-2 text-paper">
                      <th className="py-3.5 px-6 text-xs font-bold">System Type</th>
                      <th className="py-3.5 px-6 text-xs font-bold">Specifications</th>
                      <th className="py-3.5 px-6 text-xs font-bold text-right">Pricing</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-line text-sm">
                    {[
                      { system: "Unitized Curtain Wall", glass: "Factory pre-assembled aluminium, DGU Low-E, EPDM", price: "Quoted on drawings" },
                      { system: "Stick Curtain Wall System", glass: "On-site assembled mullions, 6mm / DGU glass", price: "Quoted on drawings" },
                      { system: "Semi-Unitized System", glass: "Pre-glazed shop units with site-fixed frames", price: "Quoted on drawings" },
                      { system: "Spider Point-Fixed System", glass: "Stainless steel fittings with laminated toughened glass", price: "Quoted on drawings" },
                    ].map((row) => (
                      <tr key={row.system} className="hover:bg-night-2 transition-colors">
                        <td className="py-4 px-6 font-bold text-paper">{row.system}</td>
                        <td className="py-4 px-6 text-mute text-xs">{row.glass}</td>
                        <td className="py-4 px-6 text-right font-bold text-lamp">{row.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-xs text-mute">
              Note: Cost depends on system, glass, height and access. Read our guide on <Link to="/blog/curtain-wall-cost-per-sq-ft-india-2026" className="text-lamp underline font-medium">what drives curtain wall cost</Link>.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ════════════ REQUEST A QUOTATION CTA ════════════ */}
      <section className="fg-sec">
        <div className="fg-wrap">
          <FadeIn>
            <h2 className="fg-h2">
              Call us
            </h2>
            <p className="text-paper/80 text-base md:text-lg max-w-2xl mb-10 leading-relaxed">
              Planning a commercial facade, office tower, or IT park in Pune, Mumbai, or Navi Mumbai? Send drawings and we will prepare a BOQ-based quotation with glass specification options. Our office hours are Monday to Saturday, 09:00 to 18:00.
            </p>

            <div className="grid md:grid-cols-3 gap-4 max-w-2xl mb-10">
              <a href="tel:+918369233566" className="flex items-center justify-center gap-3 p-4 bg-night-2/80 hover:bg-night-2 border border-line transition-colors">
                <Phone size={18} className="text-lamp" />
                <span className="text-sm font-semibold">+91 83692 33566</span>
              </a>
              <a href="mailto:info@fineglaze.com" className="flex items-center justify-center gap-3 p-4 bg-night-2/80 hover:bg-night-2 border border-line transition-colors">
                <Mail size={18} className="text-lamp" />
                <span className="text-sm font-semibold">info@fineglaze.com</span>
              </a>
              <a href={telHref} data-call-now className="flex items-center justify-center gap-3 p-4 bg-lamp hover:bg-lamp/90 text-lamp-ink font-bold transition-colors"><Phone size={18} aria-hidden="true" /><span className="text-sm">Call now</span></a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ════════════ FAQ SECTION ════════════ */}
      <section className="fg-sec">
        <div className="fg-wrap">
          <FadeIn className="mb-8">
            <h2 className="fg-h2">
              Curtain Wall Manufacturers FAQ
            </h2>
          </FadeIn>

          <FadeIn delay={100}>
            <div>
              <FAQItem
                q="Who is Fine Glaze as a curtain wall contractor?"
                a="Fine Glaze is a curtain wall contractor based in Pune and Mumbai, taking projects across India. We prepare shop drawings in-house, fabricate at our own Pisoli unit and install curtain walls for commercial and residential buildings."
              />
              <FAQItem
                q="What is the advantage of a unitized curtain wall system?"
                a="Unitized curtain walls are factory-assembled and pre-glazed in controlled conditions, which shortens on-site erection and improves quality control. They suit tall buildings and tight programmes, subject to design and access."
              />
              <FAQItem
                q="What is the typical curtain wall cost per sq ft in India?"
                a="Curtain wall cost depends on the system (stick, semi-unitized, unitized or spider), glass, height, wind load and access, so a reliable figure needs drawings. Fine Glaze prepares BOQ-based quotations."
              />
              <FAQItem
                q="How do I request a quotation for a commercial curtain wall project?"
                a="You can request a quotation by uploading your project drawings or BOQ on our contact page, calling +91 8369233566, or emailing info@fineglaze.com. Our office hours are Monday to Saturday, 09:00 to 18:00."
              />
              <FAQItem
                q="Do you install structural glazing and ACP cladding alongside curtain walls?"
                a="Yes, Fine Glaze offers complete building envelope solutions including structural glazing, ACP aluminium cladding, glass railings, and glass skylights."
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ════════════ INTERNAL LINKS / SERVICE MESH ════════════ */}
      <section className="fg-sec">
        <div className="fg-wrap">
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-10 md:gap-16">
              <div>
                <h3 className="font-display text-2xl font-medium text-paper mb-5">Key service areas</h3>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {["Pune", "Mumbai BKC", "Navi Mumbai", "Thane", "Hinjewadi", "Kharadi"].map((city) => (
                    <div key={city} className="flex items-center gap-1.5">
                      <MapPin size={11} className="text-lamp" />
                      <span className="text-mute text-sm">{city}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-display text-2xl font-medium text-paper mb-5">Related facade services</h3>
                <div className="grid grid-cols-2 gap-x-6 gap-y-1.5">
                  {[
                    { title: "Structural Glazing", href: "/structural-glazing" },
                    { title: "ACP Aluminium Cladding", href: "/acp-aluminium-cladding" },
                    { title: "Glass Railings", href: "/glass-railings" },
                    { title: "Glass Partitions", href: "/glass-partitions" },
                    { title: "Facade Maintenance AMC", href: "/maintenance-services" },
                    { title: "All Facade Services →", href: "/services" },
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
      <RelatedProjects heading="Curtain wall & glazing projects" keywords={["curtain", "glazing"]} />
      <CTASection />
    </Layout>
  );
}
