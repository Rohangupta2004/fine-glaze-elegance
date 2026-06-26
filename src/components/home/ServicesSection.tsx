import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { useSiteMedia } from "@/hooks/useSiteMedia";

const SERVICES = [
  {
    num: "01",
    title: "Curtain Wall Systems",
    desc: "Unitized & stick-built curtain walls for IT parks, offices and high-rises.",
    spec: "Up to 4.5 kPa wind load",
    href: "/curtain-wall-systems",
    mediaKey: "services_card_curtain_wall",
    fallback: "/Unitized.webp",
  },
  {
    num: "02",
    title: "Structural Glazing",
    desc: "Frameless silicone-bonded glass facades. Dow Corning / Sika certified.",
    spec: "DGU + Low-E ready",
    href: "/structural-glazing",
    mediaKey: "services_card_structural_glazing",
    fallback: "/Glazing.webp",
  },
  {
    num: "03",
    title: "ACP Cladding",
    desc: "Fire-retardant PVDF-coated aluminium composite panels. 20-year colour warranty.",
    spec: "Aludecor · Alstrong panels",
    href: "/acp-aluminium-cladding",
    mediaKey: "services_card_acp_cladding",
    fallback: "/Panel.webp",
  },
  {
    num: "04",
    title: "Aluminium Doors & Windows",
    desc: "Thermal-break sliding, casement & lift-slide systems. 60% heat reduction.",
    spec: "45dB sound insulation",
    href: "/aluminium-facade",
    mediaKey: "services_card_aluminium_windows",
    fallback: "/Aluminium%20windows.webp",
  },
  {
    num: "05",
    title: "Glass Railings",
    desc: "Frameless 12–19mm toughened glass railings with marine-grade SS hardware.",
    spec: "SS 316 marine-grade",
    href: "/glass-railings",
    mediaKey: "services_card_glass_railings",
    fallback: "/Railing.webp",
  },
  {
    num: "06",
    title: "Facade AMC & Repairs",
    desc: "Rope-access cleaning, silicone resealing, glass replacement & emergency repairs.",
    spec: "Bi-annual inspections",
    href: "/maintenance-services",
    mediaKey: "services_card_amc",
    fallback: "/Amc.webp",
  },
];

export const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { getMedia } = useSiteMedia();

  const services = SERVICES.map((s) => ({
    ...s,
    image: getMedia(s.mediaKey, s.fallback),
  }));

  return (
    <section className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="container mx-auto px-4 md:px-10 lg:px-16">
        {/* Header */}
        <div
          className={cn(
            "flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14 slide-up",
            isVisible && "visible"
          )}
        >
          <div>
            <span className="text-amber-700 text-[10px] font-bold tracking-[0.35em] uppercase">
              Services
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-stone-900 mt-2">
              What We Build
            </h2>
          </div>
          <Link
            to="/services"
            className="text-stone-500 hover:text-stone-900 text-sm font-medium flex items-center gap-1 transition-colors"
          >
            All Services <ArrowRight size={14} />
          </Link>
        </div>

        {/* Services — alternating rows */}
        <div className="space-y-px bg-stone-200">
          {services.map((service, index) => (
            <Link
              to={service.href}
              key={service.title}
              className={cn(
                "group grid grid-cols-1 md:grid-cols-12 bg-white hover:bg-stone-50 transition-colors duration-300 slide-up",
                isVisible && "visible"
              )}
              style={{ transitionDelay: `${index * 0.05}s` }}
            >
              {/* Image — alternates left/right on desktop */}
              <div
                className={cn(
                  "relative aspect-[16/9] md:aspect-auto overflow-hidden md:col-span-5",
                  index % 2 === 0 ? "md:order-1" : "md:order-2"
                )}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  width="600"
                  height="400"
                />
              </div>

              {/* Content */}
              <div
                className={cn(
                  "flex flex-col justify-center p-6 md:p-10 lg:p-14 md:col-span-7",
                  index % 2 === 0 ? "md:order-2" : "md:order-1"
                )}
              >
                <span className="text-stone-300 font-bold text-3xl md:text-5xl mb-3">
                  {service.num}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-stone-900 group-hover:text-amber-700 transition-colors mb-3">
                  {service.title}
                </h3>
                <p className="text-stone-500 text-sm md:text-base leading-relaxed mb-4 max-w-md">
                  {service.desc}
                </p>
                <div className="flex items-center justify-between max-w-md">
                  <span className="text-xs font-semibold text-amber-700 uppercase tracking-wider">
                    {service.spec}
                  </span>
                  <ArrowRight
                    size={18}
                    className="text-stone-300 group-hover:text-amber-700 group-hover:translate-x-1 transition-all"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-stone-900 hover:bg-amber-700 text-white font-semibold text-sm px-8 py-4 transition-colors"
          >
            Get a Free Quote
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};
