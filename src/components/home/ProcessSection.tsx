import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { ClipboardList, Ruler, HardHat, CheckCircle2 } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: ClipboardList,
    title: "Consultation & Design",
    description:
      "We begin with a complimentary site visit. Our engineers assess your building, align on design vision, and prepare a detailed scope with material specifications and budget guidance.",
    color: "bg-amber-600",
    border: "border-amber-600/20",
    glow: "hover:border-amber-600/40",
  },
  {
    step: "02",
    icon: Ruler,
    title: "Precision Engineering",
    description:
      "Our in-house team produces detailed shop drawings and structural calculations — every component engineered to IS standards, wind-load requirements, and site-specific constraints.",
    color: "bg-orange-600",
    border: "border-orange-600/20",
    glow: "hover:border-orange-600/40",
  },
  {
    step: "03",
    icon: HardHat,
    title: "Fabrication & Installation",
    description:
      "Premium aluminium and glass systems are fabricated at our Pune facility and installed by certified teams following stringent safety protocols and quality checkpoints.",
    color: "bg-yellow-700",
    border: "border-yellow-700/20",
    glow: "hover:border-yellow-700/40",
  },
  {
    step: "04",
    icon: CheckCircle2,
    title: "Handover & AMC Support",
    description:
      "We conduct a thorough quality inspection before handover. Ongoing AMC contracts ensure your facade stays pristine, weatherproof, and structurally sound for years to come.",
    color: "bg-stone-700",
    border: "border-stone-700/20",
    glow: "hover:border-stone-700/40",
  },
];

export const ProcessSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      className="py-24 relative overflow-hidden"
      ref={ref}
      style={{
        background:
          "linear-gradient(160deg, hsl(35 25% 96%) 0%, hsl(30 20% 93%) 100%)",
      }}
    >
      {/* Decorative line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          className={cn(
            "text-center space-y-4 mb-16 slide-up",
            isVisible && "visible"
          )}
        >
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            How We Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Our{" "}
            <span className="text-gradient-subtle">4-Step</span>{" "}
            Process
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From your first inquiry to final handover — a proven methodology that
            delivers on time, on budget, and to the highest quality standards.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-amber-600/30 via-orange-500/30 to-stone-600/30 z-0" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className={cn(
                  `relative z-10 group bg-card rounded-2xl p-7 border ${step.border} ${step.glow} hover:shadow-xl transition-all duration-300 slide-up`,
                  isVisible && "visible"
                )}
                style={{ transitionDelay: `${index * 0.12}s` }}
              >
                {/* Step number */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className={`w-12 h-12 rounded-xl ${step.color} flex items-center justify-center`}
                  >
                    <Icon size={22} className="text-white" />
                  </div>
                  <span className="text-5xl font-black text-foreground/5 group-hover:text-foreground/8 transition-colors leading-none select-none">
                    {step.step}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
