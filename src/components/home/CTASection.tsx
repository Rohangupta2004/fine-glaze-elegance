import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

export const CTASection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-16 md:py-24">
      <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen px-4 sm:px-6 lg:px-10">
        <div className="max-w-[1440px] mx-auto">
          <div className="metallic-border rounded-3xl p-10 md:p-14 text-center">
            <div
              className={cn(
                "max-w-3xl mx-auto space-y-6 transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
              )}
            >
              <h2 className="text-3xl md:text-5xl font-extrabold text-white uppercase tracking-[0.14em] leading-tight">
                Ready To Build Your Next Facade Landmark?
              </h2>

              <p className="text-white/75 text-base md:text-lg max-w-2xl mx-auto">
                Collaborate with a specialist team for engineered facade
                execution, controlled quality and on-time delivery.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <Button asChild size="lg" className="px-10">
                  <a
                    href="https://wa.me/918369233566?text=Hello%20Fine%20Glaze%2C%20I%20would%20like%20to%20discuss%20a%20facade%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Instant Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>

                <Button asChild size="lg" variant="outline" className="px-10">
                  <a href="tel:+918369233566">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Expert
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
