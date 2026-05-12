import { Link } from "react-router-dom";
import { Building2, Fence, DoorOpen, Wrench, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Building2,
    title: "Facade Systems",
    description: "Engineering-grade curtain walls, structural glazing & unitized facades that define skylines and withstand decades of weather.",
    highlights: ["Curtain Walls", "Spider Glazing", "ACP Cladding"],
    iconBg: "bg-amber-600",
    accent: "hover:border-amber-600/40",
  },
  {
    icon: Fence,
    title: "Glass Railings",
    description: "Sleek frameless & semi-frameless railing systems — balancing architectural beauty with rigorous structural safety standards.",
    highlights: ["Frameless Glass", "Balustrades", "Handrails"],
    iconBg: "bg-orange-600",
    accent: "hover:border-orange-500/40",
  },
  {
    icon: DoorOpen,
    title: "Doors & Windows",
    description: "High-performance aluminium fenestration with thermal break technology — reducing energy costs while elevating aesthetics.",
    highlights: ["Sliding Systems", "Casement", "Auto Doors"],
    iconBg: "bg-yellow-700",
    accent: "hover:border-yellow-600/40",
  },
  {
    icon: Wrench,
    title: "AMC Services",
    description: "Proactive facade maintenance, sealant renewal, and glass repair — protecting your investment and preserving curb appeal.",
    highlights: ["Facade Cleaning", "Glass Repair", "Sealant Work"],
    iconBg: "bg-stone-600",
    accent: "hover:border-stone-500/40",
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
            What We{" "}
            <span className="text-gradient-subtle">Deliver</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            End-to-end facade solutions — from engineering drawings to final handover — crafted with precision and built to last.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={cn(
                `group relative bg-card rounded-xl p-6 border border-border ${service.accent} hover:shadow-xl transition-all duration-300 slide-up`,
                isVisible && "visible"
              )}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={cn(
                "w-14 h-14 rounded-xl flex items-center justify-center mb-5",
                service.iconBg
              )}>
                <service.icon size={26} className="text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                {service.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-2">
                {service.highlights.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-foreground/80">
                    <CheckCircle size={14} className="text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/services">
            <Button className="btn-glossy text-primary-foreground border-0 group px-8 py-6">
              Explore All Services
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};