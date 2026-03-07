import { ArrowUpRight, BadgeCheck, Building2, ShieldCheck, Timer } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const featureCards = [
  {
    title: "Airport Grade Engineering",
    description: "Performance-driven facade detailing for large transport terminals and high-footfall infrastructure.",
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Precision Glass Systems",
    description: "Structural glazing with clean sightlines, optimized daylight, and tested long-term weather performance.",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Fast-Track Delivery",
    description: "Integrated fabrication + installation workflows that accelerate project handover without quality compromise.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
  },
];

const quickFeatures = [
  { icon: BadgeCheck, label: "Certified Processes" },
  { icon: ShieldCheck, label: "Warranty-backed Systems" },
  { icon: Building2, label: "Large Commercial Expertise" },
  { icon: Timer, label: "On-time Execution" },
];

export const FeatureShowcaseSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="relative py-24 bg-background">
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[34rem] h-[34rem] rounded-full bg-amber-500/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10 space-y-12">
        <div className={cn("text-center max-w-3xl mx-auto space-y-4 slide-up", isVisible && "visible")}>
          <span className="text-primary font-medium uppercase tracking-[0.15em] text-sm">New Features</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Designed to Win Premium Facade Projects
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            A modern feature stack built for landmark developments such as airport zones, business parks, and high-rise commercial campuses.
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
              <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                View Full Capability Stack
                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
