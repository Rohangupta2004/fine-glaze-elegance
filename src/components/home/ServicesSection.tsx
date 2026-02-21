import { Link } from "react-router-dom";
import { Building2, Fence, DoorOpen, Wrench, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";


const seoLinks = [
  { label: "Mumbai Facade Contractor", href: "/mumbai-facade-contractor" },
  { label: "Pune Structural Glazing Company", href: "/pune-structural-glazing-company" },
  { label: "Mumbai Glass Railings", href: "/mumbai-glass-railings" },
  { label: "Pune ACP Cladding", href: "/pune-acp-cladding" },
];

const services = [
  {
    icon: Building2,
    title: "Facade Systems",
    description: "Curtain walls, structural glazing & unitized facades for commercial buildings.",
    highlights: ["Curtain Walls", "Spider Glazing", "ACP Cladding"],
    color: "from-amber-600/20 to-amber-700/20",
  },
  {
    icon: Fence,
    title: "Glass Railings",
    description: "Premium frameless & semi-frameless railing systems for safety and elegance.",
    highlights: ["Frameless Glass", "Balustrades", "Handrails"],
    color: "from-orange-500/20 to-orange-600/20",
  },
  {
    icon: DoorOpen,
    title: "Doors & Windows",
    description: "High-performance aluminium systems with thermal break technology.",
    highlights: ["Sliding Systems", "Casement", "Auto Doors"],
    color: "from-yellow-600/20 to-yellow-700/20",
  },
  {
    icon: Wrench,
    title: "AMC Services",
    description: "Comprehensive maintenance, cleaning, and repair services for facades.",
    highlights: ["Facade Cleaning", "Glass Repair", "Sealant Work"],
    color: "from-stone-500/20 to-stone-600/20",
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
            What We Deliver
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive facade solutions crafted with precision and excellence
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={cn(
                "group relative bg-card rounded-xl p-6 border border-border hover:border-primary/40 hover:shadow-xl transition-all duration-300 slide-up",
                isVisible && "visible"
              )}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={cn(
                "w-14 h-14 rounded-xl bg-gradient-to-br flex items-center justify-center mb-5",
                service.color
              )}>
                <service.icon size={26} className="text-primary" />
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


        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground mb-3">Popular city pages:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {seoLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm px-3 py-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
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