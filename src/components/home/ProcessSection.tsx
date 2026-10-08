import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { 
  Layers, 
  Calculator, 
  Factory, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from "lucide-react";

const phases = [
  {
    phase: "01",
    phaseLabel: "Phase 01",
    title: "Pre-Engineering & Architectural Detailing",
    subtitle: "Precision Site Capture & Design Studio Release",
    icon: Layers,
    deliverables: [
      "Total-station site survey, 3D laser elevation scanning, and anchor datum freeze",
      "Drafting detailed 2D/3D shop drawings, fabrication cut-lists, and glass schedules",
      "Elevation access study and architectural joint coordination with lead consultants",
    ],
    milestone: "Shop Drawings Freeze & Consultant Sign-Off",
  },
  {
    phase: "02",
    phaseLabel: "Phase 02",
    title: "Structural Engineering & GFC Approvals",
    subtitle: "Wind-Load Validation & Engineering Sign-Off",
    icon: Calculator,
    deliverables: [
      "Structural member sizing and bracket anchor pull-out calculations per IS 875 (Part 3)",
      "Mullion deflection verification (≤ L/175) and thermal/acoustic barrier compliance",
      "Cross-coordinated approvals through Architect, PMC, and Structural Consultants for GFC",
    ],
    milestone: "GFC Drawing Release & Engineering Certification",
  },
  {
    phase: "03",
    phaseLabel: "Phase 03",
    title: "In-House Precision Fabrication & Factory QC",
    subtitle: "Centralized Pisoli Production Facility",
    icon: Factory,
    deliverables: [
      "Precision CNC cutting, grooving, routing, and corner crimping at our 2,500 sq ft facility",
      "Controlled structural silicone glazing and cassette pre-assembly under strict ambient limits",
      "Inward raw material batch testing (Saint-Gobain / Jindal / Dow Corning) with stage QC",
    ],
    milestone: "Factory Quality Clearance & Batched Site Dispatch",
  },
  {
    phase: "04",
    phaseLabel: "Phase 04",
    title: "High-Rise Erection, Testing & DLP Handover",
    subtitle: "Safety-First Installation & Lifecycle Warranty",
    icon: ShieldCheck,
    deliverables: [
      "Sequenced floor-by-floor mechanical erection under certified site incharge and safety officers",
      "Dynamic AAMA 501.2 field nozzle water testing and systematic snag register clearance",
      "As-built CAD documentation handover, maintenance manuals, and continuous DLP warranty",
    ],
    milestone: "Snag-Free Handover & Active DLP Support",
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
          "linear-gradient(160deg, hsl(35 25% 97%) 0%, hsl(30 20% 93%) 100%)",
      }}
    >
      {/* Decorative top gold gradient accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          className={cn(
            "text-center space-y-4 mb-16 slide-up",
            isVisible && "visible"
          )}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-800 text-xs font-bold uppercase tracking-widest">
            <Sparkles size={14} className="text-amber-600" />
            <span>Turnkey Project Delivery · Engineering Lifecycle</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight">
            Architectural Envelope Execution —{" "}
            <span className="text-gradient-subtle">4 Strategic Phases</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            Fine Glaze governs every building envelope package through four milestone-driven engineering phases — eliminating site interface clashes, ensuring certified wind-load compliance, and guaranteeing zero water ingress.
          </p>
        </div>

        {/* Phase Timeline Connector (Desktop) */}
        <div className="hidden lg:flex items-center justify-between max-w-5xl mx-auto mb-10 px-8">
          {phases.map((p, idx) => (
            <div key={p.phase} className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-amber-600 text-white font-bold text-xs flex items-center justify-center shadow-md shadow-amber-600/30">
                  {p.phase}
                </span>
                <span className="text-xs font-extrabold text-foreground/80 tracking-wide">
                  {p.phaseLabel}
                </span>
              </div>
              {idx < phases.length - 1 && (
                <div className="w-20 xl:w-28 h-0.5 bg-gradient-to-r from-amber-500/60 to-amber-500/20 flex items-center justify-end">
                  <ArrowRight size={12} className="text-amber-600/60 -mr-1" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Phases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {phases.map((phase, index) => {
            const Icon = phase.icon;
            return (
              <div
                key={phase.phase}
                className={cn(
                  "relative z-10 group bg-card p-6 border border-border/80 hover:border-amber-500/60 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 rounded-2xl flex flex-col justify-between slide-up",
                  isVisible && "visible"
                )}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div>
                  {/* Top Phase Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-amber-500/10 text-amber-600 border border-amber-500/30 rounded-xl flex items-center justify-center group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm">
                      <Icon size={24} />
                    </div>
                    <span className="px-2.5 py-1 bg-amber-500/10 text-amber-700 text-xs font-black rounded-md border border-amber-500/20 uppercase tracking-wider">
                      {phase.phaseLabel}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors leading-snug">
                    {phase.title}
                  </h3>
                  <p className="text-xs font-medium text-amber-700/90 mb-4">
                    {phase.subtitle}
                  </p>

                  {/* Structured Deliverables */}
                  <div className="space-y-2.5 pt-3 border-t border-border/60">
                    {phase.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                        <CheckCircle2 size={14} className="text-amber-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Milestone Badge Footer */}
                <div className="mt-6 pt-4 border-t border-border/70">
                  <div className="text-[10px] font-bold text-foreground/50 uppercase tracking-widest mb-1">
                    Key Phase Milestone
                  </div>
                  <div className="text-xs font-bold text-amber-700 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1.5 rounded-lg flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0" />
                    <span className="line-clamp-1">{phase.milestone}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
