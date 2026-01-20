import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

export const CTASection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="relative py-28 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, hsl(220 70% 35%) 0%, hsl(215 75% 25%) 50%, hsl(210 80% 20%) 100%)",
      }}
    >
      {/* Glow blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-[30rem] h-[30rem] bg-white/10 rounded-full blur-3xl" />

      {/* Pattern */}
      <div className="absolute inset-0 opacity-[0.07]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='2' cy='2' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={cn(
            "max-w-3xl mx-auto text-center space-y-8 transition-all duration-700",
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          )}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
            Transform Your Building Into a <br className="hidden sm:block" />
            <span className="text-white/90">Modern Architectural Landmark</span>
          </h2>

          <p className="text-white/80 text-lg max-w-xl mx-auto leading-relaxed">
            Premium facade solutions engineered for performance, aesthetics,
            and long-term value.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-6">
            {/* WhatsApp Primary */}
            <a
              href="https://wa.me/918369233566?text=Hello%20Fine%20Glaze%2C%20I%20would%20like%20to%20discuss%20a%20facade%20project."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 px-10 py-6 text-base font-semibold shadow-xl group"
              >
                Get Instant Quote
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>

            {/* Call Secondary */}
            <a href="tel:+918369233566">
              <Button
                size="lg"
                variant="outline"
                className="border-white/40 text-white hover:bg-white/10 px-10 py-6 text-base backdrop-blur-sm"
              >
                <Phone className="mr-2 h-4 w-4" />
                Call Expert
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
