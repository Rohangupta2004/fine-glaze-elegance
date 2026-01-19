import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

export const CTASection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-primary relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={cn(
            "max-w-3xl mx-auto text-center space-y-8 slide-up",
            isVisible && "visible"
          )}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground">
            Ready to Transform Your Building's Facade?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto">
            Let's discuss your project requirements and create something 
            extraordinary together.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-6 text-base group"
              >
                Get a Free Quote
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <a href="tel:+919876543210">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground px-8 py-6 text-base bg-transparent"
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