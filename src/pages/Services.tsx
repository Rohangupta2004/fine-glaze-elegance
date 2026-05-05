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
      "From unitized curtain walls for IT parks to structural glazing for showrooms, we engineer building envelopes that withstand wind loads up to 4.5 kPa while delivering stunning visual clarity. Our systems use 6063-T6 aluminium alloy, structural silicone by Dow Corning/Sika, and DGU/Low-E glass options for energy efficiency.",
    features: [
      "Unitized Curtain Walls",
      "Structural & Spider Glazing",
      "Double Skin Facades",
      "ACP & Aluminium Cladding",
      "Stick System Facades",
      "Point-Fixed Glass Systems",
    ],
    stats: { value: "40%", label: "Faster Installation with Unitized" },
    images: [
      "/Glass installation.webp",
      "/Glazing.webp",
      "/Panel.webp",
      "/Unitized.webp",
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
      "We install frameless toughened glass railings using 12mm to 19mm glass with Sentry lamination for maximum safety. All hardware is marine-grade SS 304/316 — rust-proof even in Mumbai's coastal climate. Available with aluminium U-channels, SS spigots, or standoff fittings.",
    features: [
      "Frameless Glass Railings",
      "Balcony & Terrace Railings",
      "Stainless Steel Handrails",
      "Custom Railing Designs",
      "Pool Fencing Systems",
      "Staircase Glass Panels",
    ],
    stats: { value: "19mm", label: "Max Glass Thickness" },
    images: [
      "/Custom railing.webp",
      "/Railing.webp",
      "/Railing2.webp",
      "/Handle.webp",
    ],
  },
  {
    id: "doors-windows",
    icon: DoorOpen,
    title: "Aluminium Doors & Windows",
    subtitle: "Premium Aluminium Systems",
    href: "/aluminium-facade",
    description:
      "Precision-engineered aluminium doors and windows offering excellent thermal performance, security, and sleek architectural appeal.",
    longDescription:
      "Our aluminium door and window systems feature thermal break profiles that reduce heat transfer by up to 60%. Available in sliding, casement, tilt-turn, and lift-slide configurations. Powder-coated in any RAL colour with 20+ year finish warranty.",
    features: [
      "Sliding & Lift-Slide Systems",
      "Casement & Tilt-Turn Windows",
      "Thermal Break Profiles",
      "Automatic & Entry Doors",
      "Sound Insulation Up to 45dB",
      "Multi-Point Locking Systems",
    ],
    stats: { value: "60%", label: "Heat Reduction with Thermal Break" },
    images: [
      "/Aluminium windows.webp",
      "/Window.webp",
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
      "Don't let leaking silicone or broken glass panels degrade your building's value. Our trained technicians perform rope-access facade cleaning, silicon sealant replacement, glass panel replacement, and structural audits. We offer Annual Maintenance Contracts (AMC) with scheduled bi-annual inspections.",
    features: [
      "Facade & Glass Cleaning",
      "Sealant Renewal & Waterproofing",
      "Glass Panel Replacement",
      "Preventive Maintenance AMC",
      "Structural Facade Audits",
      "Emergency Repair Services",
    ],
    stats: { value: "2x/yr", label: "Recommended Cleaning Cycle" },
    images: ["/Amc.webp", "/Sealent.webp", "/Glass.webp", "/Amc1.webp"],
  },
];

/* ================= PROCESS STEPS ================= */
const processSteps = [
  {
    icon: Phone,
    title: "Consultation",
    desc: "Free site visit & requirement discussion with our engineering team.",
  },
  {
    icon: Ruler,
    title: "Survey & Design",
    desc: "Precise measurements, 3D modelling & shop drawing approvals.",
  },
  {
    icon: Layers,
    title: "Fabrication",
    desc: "Precision cutting, assembly & quality checks at our factory.",
  },
  {
    icon: Sparkles,
    title: "Installation",
    desc: "Professional on-site execution with safety-first methodology.",
  },
];

/* ================= WHY CHOOSE US ================= */
const whyUs = [
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    desc: "Premium materials from trusted brands — Dow Corning, Sika, Aludecor. Every project passes rigorous water & structural load tests.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    desc: "We understand project timelines. Our unitized systems and parallel workflows ensure we meet your construction schedule.",
  },
  {
    icon: Users,
    title: "Expert Team",
    desc: "25+ skilled professionals including engineers, fabricators, and certified installation technicians with years of experience.",
  },
  {
    icon: Building2,
    title: "Landmark Projects",
    desc: "Trusted by Embassy REIT, LTIMindtree, Leela Group, and AAI. Award-winning execution across 10+ projects.",
  },
];

/* ================= PAGE ================= */
export default function Services() {
  const hero = useScrollAnimation();
  const processRef = useScrollAnimation();
  const whyRef = useScrollAnimation();

  return (
    <Layout>
      <SEO
        title="Facade Systems, Glass Railings & Aluminium Doors | Fine Glaze India"
        description="Fine Glaze provides end-to-end facade solutions: curtain wall glazing, structural glazing, ACP cladding, frameless glass railings, aluminium doors & windows, and AMC maintenance services across Pune & Mumbai."
        canonical="https://fineglaze.com/services"
        keywords="facade services India, curtain wall glazing Pune, structural glazing Mumbai, ACP cladding, glass railings contractor, aluminium doors windows, facade maintenance AMC"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Facade & Glazing Services",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Fine Glaze",
            "areaServed": ["Pune", "Mumbai", "Maharashtra"],
          },
          "description":
            "End-to-end facade solutions including curtain walls, structural glazing, ACP cladding, glass railings, and AMC maintenance.",
        }}
      />

      {/* ==================== HERO ==================== */}
      <section className="relative pt-32 pb-24 overflow-hidden" ref={hero.ref}>
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div
          className="absolute inset-0 opacity-15 bg-cover bg-center"
          style={{ backgroundImage: "url('/Unitized.webp')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

        <div className="container mx-auto px-4 relative z-10">
          <div
            className={cn(
              "max-w-4xl mx-auto text-center space-y-6 slide-up",
              hero.isVisible && "visible"
            )}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 text-amber-400 text-sm font-bold uppercase tracking-wider border border-amber-500/30">
              <Building2 size={16} />
              End-to-End Facade Solutions
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
              Facade, Glazing &{" "}
              <span className="text-gradient">Aluminium Services</span>
            </h1>

            <p className="max-w-2xl mx-auto text-slate-300 text-lg leading-relaxed">
              From concept to completion — we design, fabricate, install, and
              maintain premium facade systems for commercial, residential, and
              institutional buildings across India.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-8 pt-6">
              {[
                { value: "10+", label: "Projects Delivered" },
                { value: "50+", label: "Happy Clients" },
                { value: "6", label: "Service Categories" },
                { value: "5+", label: "Years Experience" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl md:text-3xl font-extrabold text-white">
                    {stat.value}
                  </p>
                  <p className="text-xs text-slate-400 uppercase tracking-wider mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-base"
                >
                  Get Free Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 hover:text-white px-8 py-6 text-base"
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
            <div className="container mx-auto px-4">
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
                        "rounded-xl overflow-hidden shadow-lg",
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
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="text-primary" size={28} />
                    </div>
                    <div>
                      <h3 className="text-primary uppercase text-xs font-bold tracking-widest">
                        {service.subtitle}
                      </h3>
                      <h2
                        id={`${service.id}-heading`}
                        className="text-3xl md:text-4xl font-bold"
                      >
                        {service.title}
                      </h2>
                    </div>
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
                          className="text-amber-600 shrink-0"
                        />
                        <span className="text-sm font-medium">{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stat Highlight */}
                  <div className="flex items-center gap-4 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                    <span className="text-3xl font-black text-amber-600">
                      {service.stats.value}
                    </span>
                    <span className="text-sm text-amber-800 font-medium">
                      {service.stats.label}
                    </span>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-wrap gap-3 pt-2">
                    <Link to="/contact">
                      <Button className="btn-glossy group">
                        Get {service.title} Quote
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <Link to={service.href}>
                      <Button variant="outline">Learn More</Button>
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
        className="py-24 bg-slate-900 text-white"
        ref={processRef.ref}
      >
        <div className="container mx-auto px-4">
          <div
            className={cn(
              "text-center max-w-2xl mx-auto mb-16 slide-up",
              processRef.isVisible && "visible"
            )}
          >
            <span className="text-amber-500 font-bold uppercase tracking-widest text-sm">
              How We Work
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Our Execution Process
            </h2>
            <p className="text-slate-400 mt-4">
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
                    "text-center p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm slide-up relative",
                    processRef.isVisible && "visible"
                  )}
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center text-sm font-bold">
                    {i + 1}
                  </div>

                  <div className="w-14 h-14 bg-amber-500/20 rounded-xl flex items-center justify-center mx-auto mb-5 mt-2">
                    <StepIcon size={26} className="text-amber-400" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
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
        <div className="container mx-auto px-4">
          <div
            className={cn(
              "text-center max-w-2xl mx-auto mb-16 slide-up",
              whyRef.isVisible && "visible"
            )}
          >
            <span className="text-primary font-bold uppercase tracking-widest text-sm">
              Why Fine Glaze
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              What Sets Us Apart
            </h2>
            <p className="text-muted-foreground mt-4">
              We don't just install facades — we engineer building envelopes
              that stand the test of time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.map((item, i) => {
              const ItemIcon = item.icon;
              return (
                <div
                  key={item.title}
                  className={cn(
                    "p-6 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300 slide-up",
                    whyRef.isVisible && "visible"
                  )}
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
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
        className="py-24 text-white text-center"
        style={{
          background:
            "linear-gradient(135deg, hsl(25 55% 35%) 0%, hsl(20 50% 25%) 100%)",
        }}
      >
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Building?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Get a free consultation and customised quote for your facade
            project. Our team responds within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-slate-900 hover:bg-slate-100 px-10 py-6 text-base font-bold"
              >
                Get Free Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a href="tel:+918369233566">
              <Button
                size="lg"
                variant="outline"
                className="border-white/40 text-white hover:bg-white/10 hover:text-white px-10 py-6 text-base gap-2"
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
