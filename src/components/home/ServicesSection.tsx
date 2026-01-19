import { Link } from "react-router-dom";
import { Building2, Fence, DoorOpen, Wrench, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Building2,
    title: "Facade Systems",
    description: "Curtain walls, structural glazing & unitized facades for commercial buildings.",
    highlights: ["Curtain Walls", "Spider Glazing", "ACP Cladding"],
    color: "from-blue-500/20 to-blue-600/20",
  },
  {
    icon: Fence,
    title: "Glass Railings",
    description: "Premium frameless & semi-frameless railing systems for safety and elegance.",
    highlights: ["Frameless Glass", "Balustrades", "Handrails"],
    color: "from-cyan-500/20 to-cyan-600/20",
  },
  {
    icon: DoorOpen,
    title: "Doors & Windows",
    description: "High-performance aluminium systems with thermal break technology.",
    highlights: ["Sliding Systems", "Casement", "Auto Doors"],
    color: "from-indigo-500/20 to-indigo-600/20",
  },
  {
    icon: Wrench,
    title: "AMC Services",
    description: "Comprehensive maintenance, cleaning, and repair services for facades.",
    highlights: ["Facade Cleaning", "Glass Repair", "Sealant Work"],
    color: "from-violet-500/20 to-violet-600/20",
  },
];

export const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 bg-muted" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div
          className={cn(
            "text-center space-y-3 mb-10 slide-up",
            isVisible && "visible"
          )}
        >
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            What We Deliver
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={cn(
                "group relative bg-card rounded-xl p-5 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 slide-up",
                isVisible && "visible"
              )}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={cn(
                "w-12 h-12 rounded-lg bg-gradient-to-br flex items-center justify-center mb-4",
                service.color
              )}>
                <service.icon size={24} className="text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-1.5">
                {service.highlights.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-foreground/70">
                    <CheckCircle size={14} className="text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
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