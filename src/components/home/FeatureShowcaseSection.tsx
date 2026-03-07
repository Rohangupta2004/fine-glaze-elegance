import { ArrowUpRight, BadgeCheck, Building2, FileSpreadsheet, ShieldCheck, Timer, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const featureCards = [
  {
    title: "Facade Design Coordination",
    description:
      "We collaborate with architects and consultants on buildable details, interface zones, movement joints, and practical site sequencing.",
    image: "https://images.unsplash.com/photo-1460472178825-e5240623afd5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Structural Glazing + Curtain Wall",
    description:
      "Engineered glazing systems designed for daylight, thermal performance, and clean elevations across office, hospitality, and airport projects.",
    image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Execution, Handover & Maintenance",
    description:
      "From fabrication and installation to snag closure and AMC planning, we stay accountable through practical completion and beyond.",
    image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80",
  },
];

const quickFeatures = [
  { icon: BadgeCheck, label: "QA/QC Driven Workflow" },
  { icon: FileSpreadsheet, label: "Shop Drawings & BOQ Support" },
  { icon: Building2, label: "Airport & Commercial Expertise" },
  { icon: Wrench, label: "Retrofit & AMC Capability" },
  { icon: ShieldCheck, label: "Warranty-Backed Installations" },
  { icon: Timer, label: "Milestone-Focused Delivery" },
];

export const FeatureShowcaseSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="relative py-24 bg-background">
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[34rem] h-[34rem] rounded-full bg-amber-500/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10 space-y-12">
        <div className={cn("text-center max-w-4xl mx-auto space-y-4 slide-up", isVisible && "visible")}>
          <span className="text-primary font-medium uppercase tracking-[0.15em] text-sm">Why FineGlaze</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">End-to-End Facade Delivery, Built for Real Project Pressures</h2>
          <p className="text-muted-foreground text-base md:text-lg">
            This is where our team stands out: practical design input, fabrication-ready documentation, and coordinated execution that supports consultants,
            PMCs, and principal contractors on complex facade packages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featureCards.map((item, index) => (
            <article
              key={item.title}
              className={cn(
                "group relative overflow-hidden rounded-2xl border border-border/70 bg-card/80 min-h-[24rem] slide-up",
                isVisible && "visible"
              )}
              style={{ transitionDelay: `${index * 0.12}s` }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/10" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-xl font-semibold text-amber-50 mb-2">{item.title}</h3>
                <p className="text-amber-100/80 text-sm leading-relaxed">{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className={cn("glass-card metallic-border rounded-2xl p-6 md:p-8 slide-up", isVisible && "visible")} style={{ transitionDelay: "0.35s" }}>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 lg:items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {quickFeatures.map((feature) => (
                <div key={feature.label} className="flex items-center gap-3 text-foreground/90">
                  <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center">
                    <feature.icon size={18} className="text-primary" />
                  </div>
                  <span className="font-medium">{feature.label}</span>
                </div>
              ))}
            </div>

            <Link to="/services" className="lg:justify-self-end">
              <Button size="lg" className="btn-glossy text-black font-semibold group px-7">
                Explore All Facade Services
                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
