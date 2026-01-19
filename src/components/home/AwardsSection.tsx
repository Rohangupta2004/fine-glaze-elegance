import { Trophy, Award, Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const clients = [
  "ICICI Prudential",
  "Decathlon",
  "Edelweiss",
  "Johnson Matthey",
  "HDFC Bank",
  "Schindler",
];

export const AwardsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Award Highlight */}
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
                <Star key={i} size={20} className="fill-accent text-accent" />
              ))}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              BEST PERFORMANCE VENDOR – 2024
            </h2>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent">
              <Award size={18} />
              <span className="font-medium">Embassy REIT Ltd.</span>
            </div>
          </div>

          {/* Award Description */}
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Awarded for the seamless Facade Glass Replacement of Embassy 247 
            Vikhroli Project, demonstrating exceptional quality and precision 
            in execution.
          </p>
        </div>

        {/* Client Marquee */}
        <div className="mt-16 pt-12 border-t border-border">
          <p className="text-center text-sm text-muted-foreground uppercase tracking-wider mb-8">
            Trusted by Industry Leaders
          </p>
          
          <div className="relative overflow-hidden">
            {/* Gradient Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
            
            {/* Marquee */}
            <div className="flex animate-marquee">
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-8 px-6 py-3 glass-card metallic-border"
                >
                  <span className="text-foreground font-medium whitespace-nowrap">
                    {client}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};