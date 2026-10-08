import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { 
  ClipboardList, 
  Ruler, 
  Calculator, 
  FileCheck2, 
  Factory, 
  HardHat, 
  Droplets, 
  ShieldCheck 
} from "lucide-react";

const steps = [
  {
    step: "01",
    icon: ClipboardList,
    title: "Enquiry & Site Survey",
    description:
      "Comprehensive site measurement, access study, elevation scaffolding assessment, and scope freeze in coordination with client and facade consultant.",
  },
  {
    step: "02",
    icon: Ruler,
    title: "Design & Shop Drawings",
    description:
      "In-house drafting of detailed shop drawings, fabrication cut-lists, and installation details prepared by our dedicated design studio.",
  },
  {
    step: "03",
    icon: Calculator,
    title: "Engineering Check",
    description:
      "Structural member sizing, bracket anchor calculations, and deflection verification tested against project-specific IS 875 wind-load zones.",
  },
  {
    step: "04",
    icon: FileCheck2,
    title: "Approval & GFC",
    description:
      "Drawings routed through architect, PMC, and client structural consultants for coordinated review until final GFC (Good For Construction) release.",
  },
  {
    step: "05",
    icon: Factory,
    title: "In-House Fabrication",
    description:
      "Precision cutting, grooving, routing, and sub-assembly at our dedicated 2,500 sq ft Pisoli unit, project-batched with stage inspection at source.",
  },
  {
    step: "06",
    icon: HardHat,
    title: "Sequenced Installation",
    description:
      "Floor-by-floor erection under a nominated site incharge, qualified supervisor, and safety officer following strict work-at-height safety protocols.",
  },
  {
    step: "07",
    icon: Droplets,
    title: "Testing & Snagging",
    description:
      "Site dynamic water penetration testing on installed glazing, snag register raised and systematically closed prior to consultant walkthrough.",
  },
  {
    step: "08",
    icon: ShieldCheck,
    title: "Handover & DLP",
    description:
      "As-built documentation handover, maintenance manual delivery, and continuous Defect Liability Period (DLP) warranty support as per contract.",
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
            How We Deliver · Enterprise Methodology
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            From Enquiry to Handover —{" "}
            <span className="text-gradient-subtle">8 Controlled Stages</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Every facade package at Fine Glaze is executed through an eight-stage engineering lifecycle, ensuring zero interface clashes, certified wind-load compliance, and defect-free delivery.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className={cn(
                  "relative z-10 group bg-card p-6 border border-border/70 hover:border-amber-500/50 hover:shadow-xl transition-all duration-300 rounded-lg flex flex-col justify-between slide-up",
                  isVisible && "visible"
                )}
                style={{ transitionDelay: `${index * 0.08}s` }}
              >
                <div>
                  {/* Step number and Icon */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-amber-600/10 text-amber-600 border border-amber-500/20 rounded-lg flex items-center justify-center group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
                      <Icon size={22} />
                    </div>
                    <span className="text-4xl font-black text-foreground/10 group-hover:text-amber-600/20 transition-colors leading-none select-none">
                      {step.step}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-border/50 text-[10px] font-semibold text-amber-700/80 uppercase tracking-widest">
                  Stage {step.step} of 08
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
