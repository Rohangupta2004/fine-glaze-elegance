import { Link } from "react-router-dom";
import { Building2, Fence, DoorOpen, Wrench, ArrowRight, CheckCircle, IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const services = [
  {
    icon: Building2,
    title: "Facade Systems",
    description: "Engineering-grade curtain walls, structural glazing & unitized facades that define skylines and withstand decades of weather.",
    highlights: ["Curtain Walls", "Spider Glazing", "ACP Cladding"],
    pricing: "₹350–1,200/sq ft",
    waMsg: "Hello Fine Glaze, I need a quote for Facade Systems.",
    href: "/structural-glazing",
    iconBg: "bg-amber-600",
    accent: "hover:border-amber-600/40",
    pricingColor: "text-amber-700 bg-amber-50 border-amber-200",
  },
  {
    icon: Fence,
    title: "Glass Railings",
    description: "Sleek frameless & semi-frameless railing systems — balancing architectural beauty with rigorous structural safety standards.",
    highlights: ["Frameless Glass", "Balustrades", "Handrails"],
    pricing: "₹1,200–2,500/rft",
    waMsg: "Hello Fine Glaze, I need a quote for Glass Railings.",
    href: "/glass-railings",
    iconBg: "bg-orange-600",
    accent: "hover:border-orange-500/40",
    pricingColor: "text-orange-700 bg-orange-50 border-orange-200",
  },
  {
    icon: DoorOpen,
    title: "Doors & Windows",
    description: "High-performance aluminium fenestration with thermal break technology — reducing energy costs while elevating aesthetics.",
    highlights: ["Sliding Systems", "Casement", "Auto Doors"],
    pricing: "₹800–2,200/sq ft",
    waMsg: "Hello Fine Glaze, I need a quote for Aluminium Doors & Windows.",
    href: "/aluminium-facade",
    iconBg: "bg-yellow-700",
    accent: "hover:border-yellow-600/40",
    pricingColor: "text-yellow-700 bg-yellow-50 border-yellow-200",
  },
  {
    icon: Wrench,
    title: "AMC Services",
    description: "Proactive facade maintenance, sealant renewal, and glass repair — protecting your investment and preserving curb appeal.",
    highlights: ["Facade Cleaning", "Glass Repair", "Sealant Work"],
    pricing: "Custom AMC plans",
    waMsg: "Hello Fine Glaze, I need an AMC / Maintenance quote.",
    href: "/maintenance-services",
    iconBg: "bg-stone-600",
    accent: "hover:border-stone-500/40",
    pricingColor: "text-stone-700 bg-stone-50 border-stone-200",
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
                `group relative bg-card rounded-xl p-6 border border-border ${service.accent} hover:shadow-xl transition-all duration-300 slide-up flex flex-col`,
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
              <h3 className="text-xl font-semibold mb-3 text-gradient">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-2 mb-5">
                {service.highlights.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-foreground/80">
                    <CheckCircle size={14} className="text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Pricing Tag */}
              <div className={cn("flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold w-fit mb-5", service.pricingColor)}>
                <IndianRupee size={11} />
                {service.pricing}
              </div>

              {/* Spacer to push CTA to bottom */}
              <div className="flex-1" />

              {/* WhatsApp CTA */}
              <a
                href={`https://wa.me/918369233566?text=${encodeURIComponent(service.waMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#128C45] border border-[#25D366]/30 text-sm font-semibold transition-all duration-200 mt-auto"
              >
                <WhatsAppIcon />
                Get Quote
              </a>
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
