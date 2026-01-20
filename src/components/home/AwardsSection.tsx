import { Award, Star } from "lucide-react";
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
          {/* ACTUAL AWARD IMAGE */}
          <div className="flex justify-center">
            <div className="w-40 md:w-48 rounded-xl overflow-hidden shadow-lg border bg-white p-3">
              <img
                src="/Awards.webp"
                alt="Best Performance Vendor Award 2024 – Embassy REIT"
                className="w-full h-auto object-contain"
              />
            </div>
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

          {/* Description */}
          <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto">
            Awarded for the seamless Facade Glass Replacement of Embassy 247,
            Vikhroli project, recognizing exceptional quality, safety, and
            execution excellence.
          </p>
        </div>
      </div>
    </section>
  );
};
