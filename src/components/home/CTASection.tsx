import { ArrowRight, Phone, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const points = ["Dedicated project manager", "Detailed execution schedule", "Transparent cost breakups"];

export const CTASection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-24"
      style={{
        background: "linear-gradient(135deg, hsl(220 70% 35%) 0%, hsl(215 75% 25%) 50%, hsl(210 80% 20%) 100%)",
      }}
    >
      <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-white/10 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        <div
          className={cn(
            "mx-auto grid max-w-5xl gap-8 rounded-3xl border border-white/15 bg-white/10 p-8 backdrop-blur-md transition-all duration-700 md:p-10 lg:grid-cols-[1.2fr_0.8fr]",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          )}
        >
          <div className="space-y-5 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">Start your next facade program</p>
            <h2 className="text-3xl font-bold leading-tight md:text-4xl">Let’s design a facade package that improves both performance and perception.</h2>
            <p className="max-w-xl text-white/80">
              Share your drawings or project brief and our team will propose a practical system strategy with timeline and budget clarity.
            </p>

            <div className="grid gap-2.5 pt-2 sm:grid-cols-2">
              {points.map((point) => (
                <div key={point} className="flex items-center gap-2 text-sm text-white/90">
                  <CheckCircle2 size={16} className="text-amber-300" />
                  {point}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center gap-4">
            <Button asChild size="lg" className="bg-white px-8 py-6 text-base font-semibold text-primary hover:bg-white/90">
              <a
                href="https://wa.me/918369233566?text=Hello%20Fine%20Glaze%2C%20I%20would%20like%20to%20discuss%20a%20facade%20project."
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Instant Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/60 bg-transparent px-8 py-6 text-base text-white hover:bg-white/15 hover:text-white"
            >
              <a href="tel:+918369233566">
                <Phone className="mr-2 h-4 w-4" />
                Talk to an Expert
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
