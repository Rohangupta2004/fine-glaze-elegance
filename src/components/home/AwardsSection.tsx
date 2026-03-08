import { Award, Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

export const AwardsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="bg-transparent" ref={ref}>
      <div className={cn("max-w-4xl mx-auto text-center space-y-8 slide-up", isVisible && "visible")}>
        <div className="flex justify-center">
          <div className="glass-card p-4 w-44 md:w-52 shadow-2xl">
            <img
              src="/Awards.webp"
              alt="Best Performance Vendor Award 2024 – Embassy REIT"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        <div className="space-y-5">
          <div className="flex items-center justify-center gap-2 text-white/85">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} size={20} className="fill-white/70 text-white/70" />
            ))}
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-white uppercase tracking-[0.16em]">
            Best Performance Vendor – 2024
          </h2>

          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 bg-white/5 text-white/85">
            <Award size={18} />
            <span className="font-semibold uppercase tracking-[0.12em] text-xs">Embassy REIT Ltd.</span>
          </div>
        </div>

        <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
          Recognized for seamless facade glass replacement at Embassy 247,
          Vikhroli, delivered with exceptional quality and execution.
        </p>
      </div>
    </section>
  );
};
