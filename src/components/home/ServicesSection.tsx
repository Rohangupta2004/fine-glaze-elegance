import { Link } from "react-router-dom";
import {
  Building2,
  Fence,
  DoorOpen,
  Wrench,
  ArrowRight,
  PanelTop,
  Sun,
  LayoutGrid,
  GlassWater,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Building2,
    title: "Curtain Wall Systems",
    desc: "Unitized & stick-built curtain walls for IT parks, offices and high-rises. Wind-load tested up to 4.5 kPa.",
    spec: "Up to 4.5 kPa wind load",
    href: "/curtain-wall-systems",
    iconBg: "bg-amber-600",
  },
  {
    icon: PanelTop,
    title: "Structural Glazing",
    desc: "Frameless silicone-bonded glass facades. Dow Corning / Sika certified. DGU + Low-E ready.",
    spec: "Dow Corning · Sika certified",
    href: "/structural-glazing",
    iconBg: "bg-orange-600",
  },
  {
    icon: LayoutGrid,
    title: "ACP Cladding",
    desc: "Fire-retardant PVDF-coated aluminium composite panels from Aludecor & Alstrong. 20-yr colour warranty.",
    spec: "20-yr PVDF colour warranty",
    href: "/acp-aluminium-cladding",
    iconBg: "bg-yellow-700",
  },
  {
    icon: DoorOpen,
    title: "Aluminium Doors & Windows",
    desc: "Thermal-break sliding, casement & lift-slide systems. 60% heat reduction, 45dB sound rating.",
    spec: "60% heat reduction",
    href: "/aluminium-facade",
    iconBg: "bg-stone-600",
  },
  {
    icon: Fence,
    title: "Glass Railings",
    desc: "Frameless 12–19mm toughened glass railings with marine-grade SS hardware for balconies & staircases.",
    spec: "12–19mm toughened glass",
    href: "/glass-railings",
    iconBg: "bg-amber-700",
  },
  {
    icon: Sun,
    title: "Skylights & Canopies",
    desc: "Engineered glass skylights with heat-reflective coatings. Spider canopies & retractable roof systems.",
    spec: "50% more natural light",
    href: "/structural-glazing",
    iconBg: "bg-orange-700",
  },
  {
    icon: GlassWater,
    title: "Glass Partitions",
    desc: "Frameless office partitions with optional acoustic DGU and switchable smart glass.",
    spec: "Up to 42dB sound insulation",
    href: "/glass-railings",
    iconBg: "bg-yellow-800",
  },
  {
    icon: Wrench,
    title: "Facade AMC & Repairs",
    desc: "Rope-access facade cleaning, silicone resealing, glass replacement & emergency repairs.",
    spec: "Bi-annual inspection cycle",
    href: "/maintenance-services",
    iconBg: "bg-stone-700",
  },
];

export const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-muted" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div
          className={cn(
            "text-center space-y-4 mb-12 slide-up",
            isVisible && "visible"
          )}
        >
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Full-Range{" "}
            <span className="text-gradient-subtle">Facade Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            End-to-end facade solutions — engineered, fabricated and installed
            by one expert team. Click any service for full specs and project gallery.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <Link
              to={service.href}
              key={service.title}
              className={cn(
                "group relative bg-card rounded-xl p-6 border border-border hover:border-primary/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 slide-up flex flex-col",
                isVisible && "visible"
              )}
              style={{ transitionDelay: `${index * 0.05}s` }}
            >
              {/* Icon */}
              <div
                className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
                  service.iconBg
                )}
              >
                <service.icon size={22} className="text-white" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-1">
                {service.desc}
              </p>

              {/* Spec tag + arrow */}
              <div className="flex items-center justify-between pt-3 border-t border-border/60 gap-2">
                <span className="text-xs font-semibold text-primary/90 truncate">
                  {service.spec}
                </span>
                <ArrowRight
                  size={16}
                  className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0"
                />
              </div>
            </Link>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <Link to="/services">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 group"
            >
              View All Services in Detail
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link to="/contact">
            <Button className="btn-glossy text-primary-foreground border-0 group px-8 py-6">
              Get a Free Quote
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
