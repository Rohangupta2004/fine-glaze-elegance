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
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4 md:px-16">
        {/* Section Header */}
        <div
          className={cn(
            "space-y-3 mb-14 slide-up",
            isVisible && "visible"
          )}
        >
          <span className="text-amber-700 text-xs font-bold tracking-[0.3em] uppercase">
            Our Expertise
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-stone-900">
            Full-Range Facade Services
          </h2>
          <p className="text-stone-500 max-w-2xl text-sm md:text-base leading-relaxed">
            End-to-end facade solutions — engineered, fabricated and installed
            by one expert team.
          </p>
        </div>

        {/* Services Grid — 2 cols on md, 3 on lg */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200">
          {services.map((service, index) => (
            <Link
              to={service.href}
              key={service.title}
              className={cn(
                "group relative bg-white overflow-hidden hover:bg-stone-50 transition-all duration-300 slide-up flex flex-col",
                isVisible && "visible"
              )}
              style={{ transitionDelay: `${index * 0.06}s` }}
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width="600"
                  height="375"
                />
                <span className="absolute top-3 left-3 bg-stone-900/80 text-[10px] font-bold uppercase tracking-wider text-white px-2.5 py-1">
                  {service.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold mb-2 text-stone-900 group-hover:text-amber-700 transition-colors leading-snug">
                  {service.title}
                </h3>
                <p className="text-stone-500 text-sm mb-5 leading-relaxed flex-1">
                  {service.desc}
                </p>

                {/* Spec tag + arrow */}
                <div className="flex items-center justify-between pt-4 border-t border-stone-200 gap-2">
                  <span className="text-xs font-semibold text-amber-700 truncate">
                    {service.spec}
                  </span>
                  <ArrowRight
                    size={16}
                    className="text-stone-400 group-hover:text-amber-700 group-hover:translate-x-1 transition-all shrink-0"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-14">
          <Link to="/services">
            <Button
              variant="outline"
              className="border-stone-300 text-stone-700 hover:bg-stone-900 hover:text-white hover:border-stone-900 px-8 py-6 group transition-all"
            >
              View All Services
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link to="/contact">
            <Button className="bg-stone-900 hover:bg-amber-700 text-white border-0 group px-8 py-6 transition-colors">
              Get a Free Quote
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
