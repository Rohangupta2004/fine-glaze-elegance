import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import {
  Building2,
  Fence,
  DoorOpen,
  Wrench,
  ArrowRight,
  CheckCircle2,
  Layers,
  ShieldCheck,
  Clock,
  Users,
  Phone,
  Ruler,
  Sparkles,
  Sun,
  GlassWater,
  LayoutGrid,
  PanelTop,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import SEO from "@/components/SEO";
import PageHero from "@/components/common/PageHero";
import { CTASection } from "@/components/home/CTASection";
import { useBookCall } from "@/components/booking/BookCallProvider";

/* ================= SERVICES DATA ================= */
const services = [
  {
    id: "facade",
    icon: Building2,
    title: "Facade Systems",
    subtitle: "Curtain Walls & Structural Glazing",
    href: "/curtain-wall-systems",
    description:
      "Advanced facade engineering solutions designed for performance, durability, and architectural elegance in commercial and high-rise buildings.",
    longDescription:
      "From unitized curtain walls for IT parks to structural glazing for showrooms, we prepare shop drawings in-house and check member sizing, fixing and anchorage against the project wind load. Systems use aluminium extrusions from major Indian mills, DOWSIL structural silicone or approved equivalents, and DGU or Low-E glass where the specification calls for it.",
    features: [
      "Unitized Curtain Walls",
      "Structural & Spider Glazing",
      "Double Skin Facades",
      "ACP & Aluminium Cladding",
      "Stick System Facades",
      "Point-Fixed Glass Systems",
    ],
    stats: { value: "16", label: "Project Records Documented" },
    images: [
      "/structural-glazing.webp",
      "/spider-glazing.webp",
      "/curtain-wall.webp",
      "/Glass installation.webp",
    ],
  },
  {
    id: "railings",
    icon: Fence,
    title: "Glass Railings",
    subtitle: "Frameless & Semi-Frameless Systems",
    href: "/glass-railings",
    description:
      "High-quality glass railing solutions that ensure safety while maintaining unobstructed views and modern aesthetics.",
    longDescription:
      "We install frameless toughened glass railings using toughened or laminated glass with thickness set by the structural check. Stainless steel hardware is graded to the site, with extra care at coastal locations. Available with aluminium U-channels, SS spigots, or standoff fittings.",
    features: [
      "Frameless Glass Railings",
      "Balcony & Terrace Railings",
      "Stainless Steel Handrails",
      "Custom Railing Designs",
      "Pool Fencing Systems",
      "Staircase Glass Panels",
    ],
    stats: { value: "Frameless", label: "Spigot, Standoff and Semi-Frameless Systems" },
    images: [
      "/railing-spigot.webp",
      "/railing-standoff.webp",
      "/railing-semi.webp",
      "/Railing.webp",
    ],
  },
  {
    id: "doors-windows",
    icon: DoorOpen,
    title: "Aluminium Doors & Windows",
    subtitle: "Premium Aluminium Systems",
    href: "/aluminium-windows-doors",
    description:
      "Precision-engineered aluminium doors and windows offering excellent thermal performance, security, and sleek architectural appeal.",
    longDescription:
      "Our aluminium door and window systems are available with thermal break profiles that slow heat transfer through the frame. Available in sliding, casement, tilt-turn, and lift-slide configurations, powder-coated or anodised to specification.",
    features: [
      "Sliding & Lift-Slide Systems",
      "Casement & Tilt-Turn Windows",
      "Thermal Break Profiles",
      "Automatic & Entry Doors",
      "Acoustic Glass Options",
      "Multi-Point Locking Systems",
    ],
    stats: { value: "40+", label: "Core Engineering and Site Team" },
    images: [
      "/sliding-door.webp",
      "/Aluminium windows.webp",
      "/Tilt.webp",
      "/Thermal.webp",
    ],
  },
  {
    id: "maintenance",
    icon: Wrench,
    title: "Facade AMC & Maintenance",
    subtitle: "Facade Care & Repair Services",
    href: "/maintenance-services",
    description:
      "Comprehensive facade maintenance services to preserve aesthetics, safety, and performance throughout the building lifecycle.",
    longDescription:
      "Don't let leaking silicone or broken glass panels degrade your building's value. We handle facade glass cleaning, sealant replacement, glass panel replacement and leakage investigation, and we offer Annual Maintenance Contracts (AMC) with periodic inspection and a written condition report.",
    features: [
      "Facade & Glass Cleaning",
      "Sealant Renewal & Waterproofing",
      "Glass Panel Replacement",
      "Preventive Maintenance AMC",
      "Periodic Facade Inspection",
      "Emergency Repair Services",
    ],
    stats: { value: "AMC", label: "With Written Condition Report" },
    images: ["/facade-maintenance.webp", "/Sealent.webp", "/Amc.webp", "/Amc1.webp"],
  },
  {
    id: "acp-cladding",
    icon: PanelTop,
    title: "ACP & Metal Cladding",
    subtitle: "Aluminium Composite Panels",
    href: "/acp-aluminium-cladding",
    description:
      "Transform building exteriors with fire-retardant, PVDF-coated Aluminium Composite Panels for a sleek modern look.",
    longDescription:
      "Our ACP cladding uses panels from approved brands such as Alubond, or strictly from the project's approved vendor list. We offer fire-retardant (FR) core panels, with the core confirmed against your project's fire requirements. Available in solid colours, metallic finishes, wood-grain, stone, and mirror finishes; colour warranty terms come from the panel maker.",
    features: [
      "PVDF & PE Coated Panels",
      "Fire Retardant (FR) Grade ACP",
      "Wood-Grain & Stone Finishes",
      "Column & Soffit Cladding",
      "Signage & Fascia Panels",
      "Canopy Cladding",
    ],
    stats: { value: "Pisoli", label: "Panel Routing at Our Own Unit" },
    images: ["/acp-building.webp", "/acp-panels.webp", "/acp-finishes.webp", "/acp-cladding.webp"],
  },
  {
    id: "skylights",
    icon: Sun,
    title: "Skylights & Glass Canopies",
    subtitle: "Overhead Glazing Solutions",
    href: "/skylights-canopies",
    description:
      "Bring natural light indoors with engineered glass skylight systems and canopy structures for atriums, lobbies, and entrances.",
    longDescription:
      "We design and install structural skylight systems using laminated safety glass with heat-reflective coatings. Our canopy solutions include frameless glass canopies with SS spider fittings, aluminium-framed pergola canopies, and retractable roof systems. Each system is detailed for drainage and checked against the project wind load.",
    features: [
      "Atrium Skylight Systems",
      "Frameless Glass Canopies",
      "Spider Fitting Canopies",
      "Polycarbonate Roofing",
      "Retractable Roof Systems",
      "Heat-Reflective Glass Options",
    ],
    stats: { value: "Site Test", label: "Water Penetration Test on Installed Glazing" },
    images: ["/canopy-spider.webp", "/canopy-detail.webp", "/skylight-atrium.webp"],
  },
  {
    id: "louvers",
    icon: LayoutGrid,
    title: "Aluminium Louvers & Sun Shading",
    subtitle: "Solar Control Systems",
    href: "/aluminium-louvers",
    description:
      "Reduce solar heat gain and glare with architecturally designed aluminium louver and fin systems for commercial buildings.",
    longDescription:
      "Our aluminium louver systems are available in fixed, operable, and motorised configurations. They cut direct sun on the glass while maintaining airflow and visibility. Available in elliptical, aerofoil, and flat blade profiles with powder-coated or anodised finishes in any custom colour.",
    features: [
      "Fixed & Operable Louvers",
      "Motorised Sun Control",
      "Vertical & Horizontal Fins",
      "Aerofoil Blade Profiles",
      "Parking Ventilation Louvers",
      "Acoustic Louver Systems",
    ],
    stats: { value: "Pisoli", label: "Louver Sub-Assembly at Our Own Unit" },
    images: ["/louvers-closeup.webp", "/louvers-motorized.webp", "/louvers-vertical.webp"],
  },
  {
    id: "partitions",
    icon: GlassWater,
    title: "Glass Partitions & Shower Enclosures",
    subtitle: "Interior Glass Solutions",
    href: "/glass-partitions",
    description:
      "Modern frameless glass partitions for offices and luxury shower enclosures for residential projects.",
    longDescription:
      "Create open, light-filled workspaces with our frameless glass partition systems. Available in single-glazed, double-glazed (for sound insulation), and switchable smart glass options. Our shower enclosure range includes sliding, hinged, and walk-in designs using 8mm-12mm toughened glass with anti-limescale nano-coating.",
    features: [
      "Frameless Office Partitions",
      "Acoustic Double-Glazed Walls",
      "Switchable Smart Glass",
      "Sliding Shower Enclosures",
      "Walk-In Shower Panels",
      "Anti-Limescale Nano Coating",
    ],
    stats: { value: "DGU", label: "Acoustic Glass Option" },
    images: ["/smart-glass.webp", "/office-partition.webp", "/shower-enclosure.webp"],
  },
];

/* ================= PROCESS STEPS ================= */
const processSteps = [
  {
    icon: Phone,
    title: "Consultation",
    desc: "Site survey and requirement discussion with our team.",
  },
  {
    icon: Ruler,
    title: "Survey & Design",
    desc: "Measurements and in-house shop drawings for approval.",
  },
  {
    icon: Layers,
    title: "Fabrication",
    desc: "Cutting, assembly and quality checks at our Pisoli, Pune unit.",
  },
  {
    icon: Sparkles,
    title: "Installation",
    desc: "Sequenced on-site erection with a dedicated site in-charge, supervisor and safety officer.",
  },
];

/* ================= WHY CHOOSE US ================= */
const whyUs = [
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    desc: "Materials from approved brands — Saint-Gobain glass, Alubond ACP, DOWSIL sealants — with a site water test on installed glazing and third-party ASTM testing arranged on request.",
  },
  {
    icon: Clock,
    title: "Programme Planning",
    desc: "We plan fabrication in project batches and sequence erection to the main contractor's programme. Programmes are confirmed per project.",
  },
  {
    icon: Users,
    title: "Expert Team",
    desc: "A core engineering, supervision and site team of 40+, led by a founder with 11+ years in the facade industry.",
  },
  {
    icon: Building2,
    title: "Landmark Projects",
    desc: "Work for Embassy REIT, L&T Construction, Jindal Stainless and Nirmaann. Embassy REIT Best Vendor 2024.",
  },
];

/* ================= PAGE ================= */
export default function Services() {
  const { open: openBooking } = useBookCall();
  return (
    <Layout darkHero>
      <SEO
        title="Facade Services in Pune, Mumbai & India | Fine Glaze"
        description="Facade services in Pune, Mumbai and across India: curtain wall, structural glazing, ACP, windows, railings, louvers, skylights and AMC. In-house drawings."
        canonical="https://fineglaze.com/services"
        keywords="facade services in Pune and Mumbai, facade systems, glass facade services, curtain wall, structural glazing, ACP cladding, glass railings, skylights"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Facade & Glazing Services",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Fine Glaze",
            "areaServed": ["Pune", "Mumbai", "India"],
          },
          "description":
            "Facade and glazing services including curtain walls, structural glazing, ACP cladding, glass railings, skylights, louvers, partitions and AMC maintenance in Pune, Mumbai and across India.",
        }}
      />

      <PageHero
        crumbs={[{ label: "Services" }]}
        title={<>Facade, Glazing &amp; <span className="text-gradient-gold">Aluminium Solutions</span></>}
        intro="Full-range facade solutions, from engineering-grade curtain walls and skylights to frameless glass partitions and shower enclosures. One expert team for every glass and aluminium need."
        secondary={{ label: "View Our Projects", to: "/portfolio" }}
        image={{ src: "/Unitized.webp", alt: "Unitized curtain wall facade by Fine Glaze" }}
        extra="Best Performance Vendor, Embassy REIT 2024. Clients include Embassy REIT, L&T Construction and Jindal Stainless."
        source="services_hero"
      />

      {services.map((service, index) => {
        const isEven = index % 2 === 0;
        return (
          <section key={service.id} id={service.id} aria-labelledby={`${service.id}-heading`} className="fg-sec">
            <div className="fg-wrap">
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                <div className={cn("grid grid-cols-2 gap-px bg-line border border-line", !isEven && "lg:order-2")}>
                  {service.images.map((img, i) => (
                    <div key={i} className={cn("overflow-hidden bg-night", i === 0 ? "aspect-[4/3] col-span-2" : "aspect-square")}>
                      <img
                        src={img}
                        loading="lazy"
                        decoding="async"
                        width="800"
                        height="600"
                        alt={`${service.title} - ${service.features[i] || service.subtitle} by Fine Glaze`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                <div className="space-y-6">
                  <div>
                    <p className="text-mute text-[15px] mb-3">{service.subtitle}</p>
                    <h2 id={`${service.id}-heading`} className="font-display font-semibold text-3xl md:text-5xl leading-[1.05] tracking-[-0.032em] text-paper">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-paper/90 text-lg leading-relaxed">{service.description}</p>
                  <p className="text-mute leading-relaxed">{service.longDescription}</p>

                  <ul className="fg-grid c2">
                    {service.features.map((f) => (
                      <li key={f}>
                        <div className="fg-cell" style={{ padding: "14px 18px" }}>
                          <span className="text-[15px] text-paper">{f}</span>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="border-l border-line pl-6">
                    <div className="font-light text-5xl tracking-[-0.04em] text-paper">{service.stats.value}</div>
                    <div className="text-[15px] text-mute mt-1">{service.stats.label}</div>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-2">
                    <button type="button" className="fg-btn" onClick={() => openBooking({ source: `services_${service.id}` })}>
                      Book a call
                    </button>
                    <Link className="fg-lnk" to={service.href}>
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <section className="fg-sec">
        <div className="fg-wrap">
          <h2>Our execution process</h2>
          <ol className="fg-grid c4" style={{ listStyle: "none" }}>
            {processSteps.map((step, i) => (
              <li key={step.title}>
                <div className="fg-cell">
                  <span className="text-mute text-sm tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="text-xl font-semibold tracking-tight text-paper">{step.title}</h3>
                  <p className="text-[15.5px] text-mute leading-relaxed">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="fg-sec">
        <div className="fg-wrap">
          <h2>What sets us apart</h2>
          <ul className="fg-grid c4">
            {whyUs.map((item) => (
              <li key={item.title}>
                <div className="fg-cell">
                  <h3 className="text-xl font-semibold tracking-tight text-paper">{item.title}</h3>
                  <p className="text-[15.5px] text-mute leading-relaxed">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
