import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const stats = [
  { value: "150+", label: "Projects Delivered", suffix: "" },
  { value: "6+", label: "Years of Excellence", suffix: "" },
  { value: "25+", label: "Cities Across India", suffix: "" },
  { value: "₹350", label: "Starting Price / sq ft", suffix: "" },
  { value: "0", label: "Safety Incidents", suffix: "" },
];

export const StatsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="py-14 border-y border-border bg-card relative overflow-hidden"
    >
      {/* Subtle ambient glow */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute -top-10 left-1/4 w-72 h-36 bg-amber-400/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 right-1/4 w-72 h-36 bg-amber-500/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-10">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={cn(
                "text-center group slide-up",
                isVisible && "visible"
              )}
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              <p
                className="text-4xl md:text-5xl font-black text-gradient-gold leading-none mb-2 group-hover:scale-110 transition-transform duration-300"
              >
                {stat.value}
              </p>
              <p className="text-xs md:text-sm text-muted-foreground font-medium uppercase tracking-wider leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
