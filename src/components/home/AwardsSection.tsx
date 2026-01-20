import { Award, Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

export const AwardsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div
          className={cn(
            "max-w-4xl mx-auto text-center space-y-8 slide-up",
            isVisible && "visible"
          )}
        >
          {/* ACTUAL AWARD IMAGE */}
          <div className="flex justify-center">
            <div className="w-44 md:w-52 rounded-2xl overflow-hidden shadow-xl border-2 border-primary/20 bg-white p-4">
              <img
                src="/Awards.webp"
                alt="Best Performance Vendor Award 2024 – Embassy REIT"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Award Title */}
          <div className="space-y-5">
            <div className="flex items-center justify-center gap-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  size={22}
                  className="fill-amber-500 text-amber-500"
                />
              ))}
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              BEST PERFORMANCE VENDOR – 2024
            </h2>

            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 text-primary">
              <Award size={20} />
              <span className="font-semibold">Embassy REIT Ltd.</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Awarded for the seamless Facade Glass Replacement of Embassy 247,
            Vikhroli project, recognizing exceptional quality, safety, and
            execution excellence.
          </p>
        </div>
      </div>
    </section>
  );
};