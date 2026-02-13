import { Link } from "react-router-dom";
import { Building2, Fence, DoorOpen, Wrench, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Building2,
    title: "Facade Systems",
    description: "Curtain walls, structural glazing, and unitized facades engineered for long-term performance.",
    highlights: ["Curtain Walls", "Spider Glazing", "ACP Cladding"],
    iconClass: "bg-primary/15 text-primary",
  },
  {
    icon: Fence,
    title: "Glass Railings",
    description: "Frameless and semi-frameless railing systems designed for safety with unobstructed views.",
    highlights: ["Frameless Glass", "Balustrades", "Handrails"],
    iconClass: "bg-accent/15 text-accent",
  },
  {
    icon: DoorOpen,
    title: "Doors & Windows",
    description: "Thermally efficient aluminium door and window systems built for modern architecture.",
    highlights: ["Sliding Systems", "Casement", "Auto Doors"],
    iconClass: "bg-secondary text-primary",
  },
  {
    icon: Wrench,
    title: "AMC Services",
    description: "Complete maintenance, cleaning, and repair support to keep facade systems performing.",
    highlights: ["Facade Cleaning", "Glass Repair", "Sealant Work"],
    iconClass: "bg-muted text-foreground",
  },
];

export const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-muted/60" ref={ref} aria-labelledby="home-services-heading">
      <div className="container mx-auto px-4">
        <div className={cn("text-center space-y-4 mb-12 slide-up", isVisible && "visible")}>
          <span className="text-primary font-medium uppercase tracking-wider text-sm">Our Expertise</span>
          <h2 id="home-services-heading" className="text-3xl md:text-4xl font-bold text-foreground">
            What We Deliver
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            End-to-end facade, railing, and aluminium system services delivered with precision.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <article
              key={service.title}
              className={cn(
                "group relative rounded-xl p-6 border border-border bg-card/90 backdrop-blur-sm",
                "hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 slide-up",
                isVisible && "visible"
              )}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className={cn("w-14 h-14 rounded-xl flex items-center justify-center mb-5", service.iconClass)}>
                <service.icon size={26} />
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{service.description}</p>

              <ul className="space-y-2">
                {service.highlights.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-foreground/85">
                    <CheckCircle size={14} className="text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

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
