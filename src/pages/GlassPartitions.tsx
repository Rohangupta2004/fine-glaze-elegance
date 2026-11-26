import { ILLUSTRATIONS, illusSrc, illusSrcSet } from "@/lib/illustrations";
import { telHref } from "@/data/company";
import SEO from "@/components/SEO";
import PageHero from "@/components/common/PageHero";
import { RelatedProjects } from "@/components/RelatedProjects";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Phone } from "lucide-react";
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
  hero: illusSrc("svc-glass-partitions"),
  office: "/office-partition.webp",
  acoustic: "/smart-glass.webp",
  smart: "/smart-glass.webp",
  shower: "/shower-enclosure.webp",
  process: "/projects/mittal-house-49-1.webp",
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
    price: "Quoted on drawings",
    img: "office",
  },
  {
    num: "02",
    title: "Acoustic Double-Glazed Walls",
    desc: "Two glass panels with an air gap for better sound insulation than single glass. Ideal for boardrooms, HR offices, and conference rooms where speech privacy is critical.",
    glass: "6+12+6mm DGU",
    wind: "Better sound insulation than single glass",
    bestFor: "Boardrooms, conference rooms",
    price: "Quoted on drawings",
    img: "acoustic",
  },
  {
    num: "03",
    title: "Switchable Smart Glass",
    desc: "PDLC glass that switches from transparent to opaque with an electric current. Instant privacy for glass-walled meeting rooms without blinds or curtains. App and switch control available.",
    glass: "Smart PDLC laminated",
    wind: "Electric privacy switch",
    bestFor: "CEO cabins, meeting rooms",
    price: "Quoted on drawings",
    img: "smart",
  },
  {
    num: "04",
    title: "Shower Enclosures",
    desc: "Luxury frameless shower enclosures in sliding, hinged, and walk-in designs. 8–12mm toughened glass with anti-limescale nano-coating that keeps glass sparkling clean with minimal effort.",
    glass: "8–12mm toughened",
    wind: "Nano anti-limescale coat",
    bestFor: "Premium homes, hotels",
    price: "Quoted on drawings",
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
          text: "Glass partitions are not soundproof, but double glazed or laminated glass reduces noise far more than single glass. Door gaps and perimeter seals decide the result, so state your privacy need at design stage.",
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
          text: "Glass partition cost depends on glass type (single, double glazed or smart glass), hardware, doors and floor-to-ceiling height, so it is priced against drawings. Fine Glaze prepares BOQ-based quotations.",
        },
      },
      {
        "@type": "Question",
        name: "Can glass partitions have doors?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We install frameless glass swing doors, sliding doors, and even automatic sensor doors within glass partition systems. All doors come with floor springs or patch fittings and soft-close mechanisms.",
        },
      },
      {
        "@type": "Question",
        name: "Is the nano-coating on shower glass worth it?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Nano-coating creates a hydrophobic surface that repels water and prevents limescale build-up. Shower glass stays cleaner for longer and requires significantly less scrubbing — especially valuable in hard-water areas across India.",
        },
      },
    ],
  };

  const current = SYSTEMS[activeSystem];

  return (
    <Layout darkHero>
      <SEO
        title="Glass Partition Contractor in Pune & Mumbai | Fine Glaze"
        description="Glass partition contractor in Pune, Mumbai and across India. Frameless office partitions, DGU and smart glass, with in-house shop drawings for approval."
        canonical="https://fineglaze.com/glass-partitions"
        keywords="glass partition contractor, office glass partitions, frameless glass partition, DGU glass partition, acoustic glass partition"
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* HERO */}
      <PageHero
        crumbs={[{ label: "Glass Partitions & Enclosures Pune & Mumbai" }]}
        title={<>Glass Partitions<br /> <span className="text-gradient-gold">& Enclosures</span><span className="ph-sub">Pune &amp; Mumbai.</span></>}
        intro="Office glass partitions, acoustic meeting-room walls and toughened-glass shower enclosures designed and installed in Pune and Mumbai."
        secondary={{ label: "+91 83692 33566", href: "tel:+918369233566" }}
        image={{ src: IMG.hero, srcSet: illusSrcSet("svc-glass-partitions"), sizes: "(max-width: 1024px) 100vw, 640px", alt: ILLUSTRATIONS["svc-glass-partitions"], width: 1376, height: 768 }}
        extra=""
      />


      {/* ════════════ INTRO ════════════ */}
      <section className="fg-sec">
        <div className="fg-wrap">
          <FadeIn>
            <h2 className="fg-h2 wide">
              Open, light-filled spaces without losing privacy,{" "}
              <span className="text-mute">toughened glass that divides space without blocking it.</span>
            </h2>
            <p className="text-mute text-[15px] md:text-base leading-relaxed">
              Glass partitions create visually open workspaces while providing acoustic separation. Available in single-glazed, double-glazed (for better sound insulation), and switchable smart glass that turns opaque at the touch of a button. Our shower enclosures use 8–12mm toughened glass with anti-limescale nano-coating.
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
                  <p className="text-2xl md:text-3xl font-bold text-gradient">{s.number}</p>
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
                    <p className="text-[13px] text-mute mb-1">Feature</p>
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
                  title: "Safety Glass",
                  desc: "Toughened glass specified to IS 2553. Laminated options are available where the specification needs them.",
                },
                {
                  title: "Measured and Made to Size",
                  desc: "Glass is measured, toughened to size and installed to the approved drawings. Programme is confirmed per project.",
                },
                {
                  title: "Hardware Options",
                  desc: "Patch fittings and door closers in finishes chosen to the specification.",
                },
                {
                  title: "Easy Maintenance",
                  desc: "Nano-coated shower glass repels water and limescale. Office partitions need just regular glass cleaner.",
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
        <div className="relative h-[35vh] md:h-[40vh] overflow-hidden" style={{ maxWidth: 906 }}>
          <img
            src={IMG.process}
            sizes="(max-width: 1280px) 100vw, 1152px"
            decoding="async"
            alt="Sliding glass shower cubicle installed by Fine Glaze at Mittal House, Juhu, Mumbai"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-[rgba(24,19,15,0.55)]" />
          <div className="absolute inset-0 flex items-center">
            <div className="px-6 md:px-10">
              <p className="text-mute text-sm mb-2">Our Promise</p>
              <p className="text-paper text-xl md:text-3xl font-bold max-w-xl">
                Shop drawings prepared in-house. Glass measured and made to size for each space.
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
              Glass Partition & Enclosure Cost: How We Quote
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
                    <th className="py-3 text-xs font-bold text-mute">Glass Type</th>
                    <th className="py-3 text-xs font-bold text-mute text-right">Pricing</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[
                    { system: "Frameless Partition", glass: "10–12mm toughened", price: "Quoted on drawings" },
                    { system: "Acoustic DGU Partition", glass: "6+12+6mm DGU", price: "Quoted on drawings" },
                    { system: "Smart Glass Wall", glass: "PDLC laminated", price: "Quoted on drawings" },
                    { system: "Shower Enclosure", glass: "8–12mm toughened", price: "Quoted on drawings" },
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
              <Button asChild size="lg" className="bg-night-2 hover:bg-night-2 text-paper gap-2 px-8"><a href={telHref} data-call-now><Phone size={16} aria-hidden="true" /> Call now</a></Button>
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
                q="Are glass partitions soundproof?"
                a="Glass partitions are not soundproof, but double glazed or laminated glass reduces noise far more than single glass. Door gaps and perimeter seals decide the result, so state your privacy need at design stage."
              />
              <FAQItem
                q="What is switchable smart glass?"
                a="Smart glass uses PDLC (Polymer Dispersed Liquid Crystal) technology. When electric current is applied, the glass turns transparent. When switched off, it becomes frosted/opaque — providing instant privacy without blinds. Controlled via wall switch or smartphone app."
              />
              <FAQItem
                q="How much do glass partitions cost per sq ft?"
                a="Glass partition cost depends on glass type (single, double glazed or smart glass), hardware, doors and floor-to-ceiling height, so it is priced against drawings. Fine Glaze prepares BOQ-based quotations."
              />
              <FAQItem
                q="Can glass partitions have doors?"
                a="Yes. We install frameless glass swing doors, sliding doors, and even automatic sensor doors within glass partition systems. All doors come with floor springs or patch fittings and soft-close mechanisms."
              />
              <FAQItem
                q="Is the nano-coating on shower glass worth it?"
                a="Yes. Nano-coating creates a hydrophobic surface that repels water and prevents limescale build-up. Shower glass stays cleaner for longer and requires significantly less scrubbing — especially valuable in hard-water areas across India."
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
                    { title: "Glass Railings", href: "/glass-railings" },
                    { title: "Structural Glazing", href: "/structural-glazing" },
                    { title: "Curtain Wall Systems", href: "/curtain-wall-systems" },
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
      <RelatedProjects heading="Interior glass work" keywords={["shower", "Mittal"]} />
      <CTASection />
    </Layout>
  );
}
