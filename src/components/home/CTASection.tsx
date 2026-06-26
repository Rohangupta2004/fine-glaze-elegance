import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

export const CTASection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="relative py-28 overflow-hidden bg-stone-900"
    >
      {/* Pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='2' cy='2' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-16 relative z-10">
        <div
          className={cn(
            "max-w-3xl mx-auto text-center space-y-8 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
        >
          <p className="text-amber-400 text-xs font-bold tracking-[0.4em] uppercase">
            Start Your Project
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
            Transform Your Building Into a{" "}
            <br className="hidden sm:block" />
            <span className="text-gradient-gold">
              Modern Landmark
            </span>
          </h2>

          <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Award-winning facade solutions engineered for performance, lasting
            aesthetics, and measurable long-term value.
          </p>

          {/* CTA links */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
            <Button
              asChild
              size="lg"
              className="bg-white text-stone-900 hover:bg-amber-400 hover:text-stone-900 px-10 py-6 text-base font-semibold group transition-colors"
            >
              <a
                href="https://wa.me/918369233566?text=Hello%20Fine%20Glaze%2C%20I%20would%20like%20to%20discuss%20a%20facade%20project."
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Instant Quote
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>

            <a
              href="tel:+918369233566"
              className="inline-flex items-center gap-2 text-white/60 font-medium text-base hover:text-white transition-colors tracking-wide"
            >
              <Phone className="h-4 w-4" />
              +91 83692 33566
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
