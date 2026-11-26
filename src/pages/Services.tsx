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
  const hero = useScrollAnimation();
  const processRef = useScrollAnimation();
  const whyRef = useScrollAnimation();

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

      {/* ==================== HERO ==================== */}
      <section className="relative pt-32 pb-24 overflow-hidden" ref={hero.ref}>
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/Unitized.webp')" }}
        />
        {/* Dark bronze gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(26,13,5,0.93) 0%, rgba(37,18,8,0.82) 50%, rgba(26,13,5,0.93) 100%)"
          }}
        />
        {/* Bottom fade */}
        <div
          className="absolute inset-x-0 bottom-0 h-32"
          style={{ background: "linear-gradient(to top, #1a0d05, transparent)" }}
        />

        <div className="fg-wrap">
          <div
            className={cn(
              "max-w-4xl mx-auto text-center space-y-6 slide-up",
              hero.isVisible && "visible"
            )}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary-foreground text-sm font-bold border border-primary/40">
              <Building2 size={16} />
              End-to-End Facade Solutions
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-paper leading-tight">
              Facade, Glazing &{" "}
              <span className="text-gradient-gold">Aluminium Solutions</span>
            </h1>

            <p className="max-w-2xl mx-auto text-paper/80 text-lg leading-relaxed">
              Full-range facade solutions — from engineering-grade curtain walls and
              skylights to frameless glass partitions and shower enclosures.
              One expert team for every glass & aluminium need.
            </p>

            {/* Trust Badge */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <div className="flex items-center gap-2 px-4 py-2 bg-paper/8 border border-line">
                <ShieldCheck size={15} className="text-[#C8782A]" />
                <span className="text-xs text-paper/80 font-semibold">Best Performance Vendor — Embassy REIT 2024</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-paper/8 border border-line">
                <Users size={15} className="text-[#C8782A]" />
                <span className="text-xs text-paper/80 font-semibold">Embassy REIT · L&T Construction · Jindal Stainless</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base"
                >
                  Book a call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-6 text-base"
                >
                  View Our Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SERVICE SECTIONS ==================== */}
      {services.map((service, index) => {
        const Icon = service.icon;
        const section = useScrollAnimation();
        const isEven = index % 2 === 0;

        return (
          <section
            key={service.id}
            id={service.id}
            aria-labelledby={`${service.id}-heading`}
            ref={section.ref}
            className={cn("py-24", isEven ? "bg-background" : "bg-muted")}
          >
            <div className="fg-wrap">
              <div
                className={cn(
                  "grid lg:grid-cols-2 gap-16 items-center",
                  !isEven && "lg:grid-flow-col-dense"
                )}
              >
                {/* IMAGES */}
                <div
                  className={cn(
                    "grid grid-cols-2 gap-4 slide-up",
                    section.isVisible && "visible",
                    !isEven && "lg:col-start-2"
                  )}
                >
                  {service.images.map((img, i) => (
                    <div
                      key={i}
                      className={cn(
                        " overflow-hidden ",
                        i === 0 ? "aspect-[4/3] col-span-2" : "aspect-square"
                      )}
                    >
                      <img
                        src={img}
                        loading="lazy"
                        decoding="async"
                        width="800"
                        height="600"
                        alt={`${service.title} - ${service.features[i] || service.subtitle} by Fine Glaze`}
                        className="w-full h-full object-cover hover:scale-105 transition duration-500"
                      />
                    </div>
                  ))}
                </div>

                {/* CONTENT */}
                <div
                  className={cn(
                    "space-y-6 slide-up",
                    section.isVisible && "visible",
                    !isEven && "lg:col-start-1"
                  )}
                  style={{ transitionDelay: "0.1s" }}
                >
                  {/* Header */}
                  <div>
                    <h3 className="text-primary text-xs font-bold mb-2">
                      {service.subtitle}
                    </h3>
                    <h2
                      id={`${service.id}-heading`}
                      className="text-3xl md:text-4xl font-bold text-gradient"
                    >
                      {service.title}
                    </h2>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.longDescription}
                  </p>

                  {/* Features Grid */}
                  <div className="grid sm:grid-cols-2 gap-3">
                    {service.features.map((f) => (
                      <div key={f} className="flex items-center gap-2">
                        <CheckCircle2
                          size={18}
                          className="text-primary shrink-0"
                        />
                        <span className="text-sm font-medium">{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stat Highlight */}
                  <div className="flex items-center gap-4 p-4 bg-primary/8 border border-primary/25">
                    <span className="text-3xl font-black text-primary">
                      {service.stats.value}
                    </span>
                    <span className="text-sm text-primary/80 font-medium">
                      {service.stats.label}
                    </span>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-wrap gap-3 pt-2">
                    <Link to="/contact">
                      <Button className="btn-glossy group">
                        Book a call
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <Link to={service.href}>
                      <Button variant="outline" className="border-lamp/40 text-lamp bg-transparent hover:bg-lamp/10">Learn More</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ==================== PROCESS ==================== */}
      <section
        className="py-24 text-paper"
        style={{ background: "linear-gradient(160deg, #1a0d05 0%, #251208 60%, #1a0d05 100%)" }}
        ref={processRef.ref}
      >
        <div className="fg-wrap">
          <div
            className={cn(
              "text-center max-w-2xl mx-auto mb-16 slide-up",
              processRef.isVisible && "visible"
            )}
          >
            <span className="text-[#C8782A] font-bold text-sm">
              How We Work
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Our <span className="text-gradient-light">Execution</span> Process
            </h2>
            <p className="text-mute mt-4">
              From your first call to project handover — a streamlined,
              transparent process that keeps you informed at every stage.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, i) => {
              const StepIcon = step.icon;
              return (
                <div
                  key={step.title}
                  className={cn(
                    "text-center p-8  bg-paper/5 border border-line  slide-up relative",
                    processRef.isVisible && "visible"
                  )}
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-primary flex items-center justify-center text-sm font-bold text-primary-foreground">
                    {i + 1}
                  </div>

                  <div className="w-14 h-14 bg-primary/20 flex items-center justify-center mx-auto mb-5 mt-2">
                    <StepIcon size={26} className="text-[#C8782A]" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-mute leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== WHY CHOOSE US ==================== */}
      <section className="py-24 bg-background" ref={whyRef.ref}>
        <div className="fg-wrap">
          <div
            className={cn(
              "text-center max-w-2xl mx-auto mb-16 slide-up",
              whyRef.isVisible && "visible"
            )}
          >
            <span className="text-primary font-bold text-sm">
              Why Fine Glaze
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              What <span className="text-gradient-subtle">Sets Us</span> Apart
            </h2>
            <p className="text-muted-foreground mt-4">
              We don't just install facades — we engineer building envelopes
              that perform, endure, and stand the test of time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.map((item, i) => {
              const ItemIcon = item.icon;
              return (
                <div
                  key={item.title}
                  className={cn(
                    "p-6  border bg-card  transition-all duration-300 slide-up",
                    whyRef.isVisible && "visible"
                  )}
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-4">
                    <ItemIcon size={24} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section
        className="py-24 text-paper text-center"
        style={{
          background:
            "linear-gradient(135deg, hsl(27 65% 32%) 0%, hsl(22 72% 18%) 100%)",
        }}
      >
        <div className="fg-wrap">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to{" "}
            <span className="text-gradient-light">Transform</span>{" "}
            Your Building?
          </h2>
          <p className="text-paper/80 text-lg mb-8">
            Talk to our engineering team about your facade project.
            We call you back the same business day, Monday to Saturday, 9am to 6pm.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-night text-paper hover:bg-night-2 px-10 py-6 text-base font-bold"
              >
                Book a call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a href="tel:+918369233566">
              <Button
                size="lg"
                variant="outline"
                className="bg-night text-paper hover:bg-night/90 border-line font-bold px-10 py-6 text-base gap-2"
              >
                <Phone size={18} />
                Call +91 8369233566
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
