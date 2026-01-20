import { Trophy, Award, Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

export const AwardsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div
          className={cn(
            "max-w-4xl mx-auto text-center space-y-8 slide-up",
            isVisible && "visible"
          )}
        >
          {/* Trophy Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-4">
            <Trophy size={40} />
          </div>

          {/* Award Title */}
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  size={20}
                  className="fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
              BEST PERFORMANCE VENDOR – 2024
            </h2>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <Award size={18} />
              <span className="font-medium">Embassy REIT Ltd.</span>
            </div>
          </div>

          {/* Award Description */}
          <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto">
            Awarded for the seamless Facade Glass Replacement of Embassy 247
            Vikhroli Project, demonstrating exceptional quality and precision
            in execution.
          </p>
        </div>
      </div>
    </section>
  );
};
