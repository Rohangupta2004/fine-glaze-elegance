import { Link } from "react-router-dom";
import { Building2, Fence, DoorOpen, Wrench, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Building2,
    title: "Facade Systems",
    description: "Curtain walls, structural glazing, and unitized facades for commercial developments.",
    highlights: ["Curtain Walls", "Spider Glazing", "ACP Cladding"],
    color: "from-amber-600/20 to-amber-700/20",
  },
  {
    icon: Fence,
    title: "Glass Railings",
    description: "Frameless and semi-frameless systems balancing clean architecture with safety.",
    highlights: ["Frameless Glass", "Balustrades", "Handrails"],
    color: "from-orange-500/20 to-orange-600/20",
  },
  {
    icon: DoorOpen,
    title: "Doors & Windows",
    description: "Thermally efficient aluminium systems with robust operational performance.",
    highlights: ["Sliding Systems", "Casement", "Auto Doors"],
    color: "from-yellow-600/20 to-yellow-700/20",
  },
  {
    icon: Wrench,
    title: "AMC Services",
    description: "Preventive and corrective maintenance programs for long-term facade integrity.",
    highlights: ["Facade Cleaning", "Glass Repair", "Sealant Work"],
    color: "from-stone-500/20 to-stone-600/20",
  },
];

export const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="bg-muted py-24" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div className={cn("space-y-6 slide-up lg:sticky lg:top-24 lg:self-start", isVisible && "visible")}>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">Capability stack</p>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">End-to-end facade delivery under one execution partner</h2>
            <p className="max-w-md text-muted-foreground">
              We integrate design coordination, fabrication support, installation, and lifecycle maintenance into one accountable workflow.
            </p>
            <Link to="/services">
              <Button className="btn-glossy group border-0 px-8 py-6 text-primary-foreground">
                Explore All Services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={cn(
                  "group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg slide-up",
                  isVisible && "visible"
                )}
                style={{ transitionDelay: `${index * 0.08}s` }}
              >
                <div className={cn("mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br", service.color)}>
                  <service.icon size={24} className="text-primary" />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="mb-5 text-sm leading-relaxed text-muted-foreground">{service.description}</p>

                <ul className="space-y-2.5">
                  {service.highlights.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-foreground/85">
                      <CheckCircle size={14} className="shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
