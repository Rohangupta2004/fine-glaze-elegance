import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const clients = ["Peninsula", "Larsen & Toubro", "Embassy REIT", "Shapoorji Pallonji", "Godrej", "Kalpataru"];

export const ClientsCarousel = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="border-y border-border bg-background py-8 md:py-10">
      <div className="container mx-auto px-4">
        <div className={cn("slide-up", isVisible && "visible")}>
          <p className="mb-6 text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Trusted by developers, consultants and EPC leaders
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {clients.map((client) => (
              <div
                key={client}
                className="flex h-14 items-center justify-center rounded-xl border border-border/70 bg-card px-3 text-center text-sm font-medium text-foreground/70"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
