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
      className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.6'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Glow Accent */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-500/20 blur-[120px] rounded-full" />

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={cn(
            "max-w-3xl mx-auto text-center space-y-8 slide-up",
            isVisible && "visible"
          )}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Ready to Transform Your Building’s Facade?
          </h2>

          <p className="text-slate-300 text-lg max-w-xl mx-auto">
            Let’s discuss your project requirements and deliver a facade
            solution that reflects quality, precision, and durability.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-emerald-500 text-slate-900 hover:bg-emerald-400 px-8 py-6 text-base font-semibold group shadow-lg shadow-emerald-500/20"
              >
                Get a Free Quote
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>

            <a href="tel:+918369233566">
              <Button
                size="lg"
                variant="outline"
                className="border-slate-500 text-slate-200 hover:bg-white/10 hover:text-white px-8 py-6 text-base bg-transparent"
              >
                <Phone className="mr-2 h-4 w-4" />
                Call Us Now
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
