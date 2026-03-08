import { Link } from "react-router-dom";
import {
  Building2,
  Fence,
  DoorOpen,
  Wrench,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Building2,
    title: "Facade Systems",
    description:
      "Curtain walls, structural glazing and unitized facades for commercial buildings.",
    highlights: ["Curtain Walls", "Spider Glazing", "ACP Cladding"],
  },
  {
    icon: Fence,
    title: "Glass Railings",
    description:
      "Frameless and semi-frameless systems balancing structural safety and visual clarity.",
    highlights: ["Frameless Glass", "Balustrades", "Handrails"],
  },
  {
    icon: DoorOpen,
    title: "Doors & Windows",
    description:
      "High-performance aluminium door and window systems built for longevity.",
    highlights: ["Sliding Systems", "Casement", "Auto Doors"],
  },
  {
    icon: Wrench,
    title: "AMC Services",
    description:
      "Comprehensive maintenance and repair programs for complete facade lifecycle support.",
    highlights: ["Facade Cleaning", "Glass Repair", "Sealant Work"],
  },
];

export const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="bg-transparent" ref={ref}>
      <div className="space-y-12">
        <div className={cn("text-center space-y-4 slide-up", isVisible && "visible")}>
          <span className="section-heading">Our Expertise</span>
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-[0.16em] text-white">
            Premium Engineering Services
          </h2>
          <p className="text-white/70 max-w-3xl mx-auto">
            Comprehensive facade solutions shaped for architectural precision,
            speed and long-term durability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <article
              key={service.title}
              className={cn(
                "glass-card p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-white/25 slide-up",
                isVisible && "visible",
              )}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl border border-white/20 bg-white/5 flex items-center justify-center mb-5">
                <service.icon size={24} className="text-white" />
              </div>

              <h3 className="text-lg font-bold uppercase tracking-[0.1em] text-white mb-3">
                {service.title}
              </h3>
              <p className="text-white/70 text-sm mb-5 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.highlights.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-white/80">
                    <CheckCircle size={14} className="text-white/70 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Link to="/services">
            <Button className="group px-8 py-6">
              Explore All Services
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
