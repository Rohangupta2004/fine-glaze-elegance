import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { useSiteMedia } from "@/hooks/useSiteMedia";

const SERVICE_DEFS = [
  {
    tag: "Facade System",
    title: "Curtain Wall Systems",
    desc: "Unitized & stick-built curtain walls for IT parks, offices and high-rises. Wind-load tested up to 4.5 kPa.",
    spec: "Up to 4.5 kPa wind load",
    href: "/curtain-wall-systems",
    mediaKey: "services_card_curtain_wall",
    fallback: "/Unitized.webp",
  },
  {
    tag: "Glazing",
    title: "Structural Glazing",
    desc: "Frameless silicone-bonded glass facades. Dow Corning / Sika certified. DGU + Low-E ready.",
    spec: "Dow Corning · Sika certified",
    href: "/structural-glazing",
    mediaKey: "services_card_structural_glazing",
    fallback: "/Glazing.webp",
  },
  {
    tag: "Cladding",
    title: "ACP Cladding",
    desc: "Fire-retardant PVDF-coated aluminium composite panels from Aludecor & Alstrong. 20-yr colour warranty.",
    spec: "20-yr PVDF colour warranty",
    href: "/acp-aluminium-cladding",
    mediaKey: "services_card_acp_cladding",
    fallback: "/Panel.webp",
  },
  {
    tag: "Aluminium",
    title: "Aluminium Doors & Windows",
    desc: "Thermal-break sliding, casement & lift-slide systems. 60% heat reduction, 45dB sound rating.",
    spec: "60% heat reduction",
    href: "/aluminium-facade",
    mediaKey: "services_card_aluminium_windows",
    fallback: "/Aluminium%20windows.webp",
  },
  {
    tag: "Railings",
    title: "Glass Railings",
    desc: "Frameless 12–19mm toughened glass railings with marine-grade SS hardware for balconies & staircases.",
    spec: "12–19mm toughened glass",
    href: "/glass-railings",
    mediaKey: "services_card_glass_railings",
    fallback: "/Railing.webp",
  },
  {
    tag: "Roofing",
    title: "Skylights & Canopies",
    desc: "Engineered glass skylights with heat-reflective coatings. Spider canopies & retractable roof systems.",
    spec: "50% more natural light",
    href: "/structural-glazing",
    mediaKey: "services_card_skylights",
    fallback: "/Hotel.webp",
  },
  {
    tag: "Interior",
    title: "Glass Partitions",
    desc: "Frameless office partitions with optional acoustic DGU and switchable smart glass.",
    spec: "Up to 42dB sound insulation",
    href: "/glass-railings",
    mediaKey: "services_card_glass_partitions",
    fallback: "/Glass%20installation.webp",
  },
  {
    tag: "Maintenance",
    title: "Facade AMC & Repairs",
    desc: "Rope-access facade cleaning, silicone resealing, glass replacement & emergency repairs.",
    spec: "Bi-annual inspection cycle",
    href: "/maintenance-services",
    mediaKey: "services_card_amc",
    fallback: "/Amc.webp",
  },
];

export const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { getMedia } = useSiteMedia();

  const services = SERVICE_DEFS.map((s) => ({
    ...s,
    image: getMedia(s.mediaKey, s.fallback),
  }));

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
                "group relative bg-card rounded-xl overflow-hidden border border-border hover:border-primary/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 slide-up flex flex-col",
                isVisible && "visible"
              )}
              style={{ transitionDelay: `${index * 0.05}s` }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width="400"
                  height="300"
                />
                <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider text-primary px-2.5 py-1 rounded-full shadow-sm">
                  {service.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors leading-snug">
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
