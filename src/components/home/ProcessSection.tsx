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
  },
  {
    step: "02",
    icon: Ruler,
    title: "Precision Engineering",
    description:
      "Our in-house team produces detailed shop drawings and structural calculations — every component engineered to IS standards, wind-load requirements, and site-specific constraints.",
    color: "bg-orange-600",
  },
  {
    step: "03",
    icon: HardHat,
    title: "Fabrication & Installation",
    description:
      "Premium aluminium and glass systems are fabricated at our Pune facility and installed by certified teams following stringent safety protocols and quality checkpoints.",
    color: "bg-yellow-700",
  },
  {
    step: "04",
    icon: CheckCircle2,
    title: "Handover & AMC Support",
    description:
      "We conduct a thorough quality inspection before handover. Ongoing AMC contracts ensure your facade stays pristine, weatherproof, and structurally sound for years to come.",
    color: "bg-stone-700",
  },
];

export const ProcessSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      className="py-24 relative overflow-hidden bg-stone-50"
      ref={ref}
    >
      {/* Decorative line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

      <div className="container mx-auto px-4 md:px-16">
        {/* Header */}
        <div
          className={cn(
            "space-y-3 mb-14 slide-up",
            isVisible && "visible"
          )}
        >
          <span className="text-amber-700 text-xs font-bold tracking-[0.3em] uppercase">
            How We Work
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-stone-900">
            Our 4-Step Process
          </h2>
          <p className="text-stone-500 max-w-2xl text-sm md:text-base leading-relaxed">
            From your first inquiry to final handover — a proven methodology that
            delivers on time, on budget, and to the highest quality standards.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-stone-200 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className={cn(
                  "relative z-10 group bg-white p-7 hover:bg-stone-50 transition-all duration-300 slide-up",
                  isVisible && "visible"
                )}
                style={{ transitionDelay: `${index * 0.12}s` }}
              >
                {/* Step number */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className={`w-12 h-12 ${step.color} flex items-center justify-center`}
                  >
                    <Icon size={22} className="text-white" />
                  </div>
                  <span className="text-5xl font-black text-stone-100 group-hover:text-stone-200 transition-colors leading-none select-none">
                    {step.step}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-stone-900 mb-3 group-hover:text-amber-700 transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-stone-500 leading-relaxed">
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
