import { Link } from "react-router-dom";
import { Building2, Fence, DoorOpen, Wrench, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Building2,
    title: "Facade Fabrication",
    description: "Curtain walls, structural glazing, and unitized facade systems for commercial and residential buildings.",
    features: ["Curtain Walls", "Structural Glazing", "Unitized Systems"],
  },
  {
    icon: Fence,
    title: "Custom Railings",
    description: "Premium glass and MS railings designed for safety, aesthetics, and durability.",
    features: ["Glass Railings", "MS Railings", "Balustrades"],
  },
  {
    icon: DoorOpen,
    title: "Doors & Windows",
    description: "High-performance aluminium sliding systems, casement windows, and entrance solutions.",
    features: ["Sliding Systems", "Casement Windows", "Entrance Doors"],
  },
  {
    icon: Wrench,
    title: "Maintenance Services",
    description: "Comprehensive facade cleaning, repair, and maintenance to preserve your building's appearance.",
    features: ["Facade Cleaning", "Glass Replacement", "Sealant Renewal"],
  },
];

export const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div
          className={cn(
            "text-center space-y-4 mb-12 slide-up",
            isVisible && "visible"
          )}
        >
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive facade solutions from concept to completion
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={cn(
                "group glass-card metallic-border p-6 hover:shadow-glow transition-all duration-300 slide-up",
                isVisible && "visible"
              )}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <service.icon size={28} className="text-primary group-hover:text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-foreground/70"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/services">
            <Button className="btn-glossy text-primary-foreground border-0 group">
              Explore All Services
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};