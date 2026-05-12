import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const clients = [
  { name: "Embassy REIT" },
  { name: "LTIMindtree" },
  { name: "Larsen & Toubro" },
  { name: "Peninsula Land" },
  { name: "Leela Group" },
  { name: "Nirmaann" },
  { name: "JSL" },
];

export const ClientsCarousel = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-14 bg-secondary/50 border-y border-border" ref={ref}>
      <div className="container mx-auto px-4">
        <p
          className={cn(
            "text-center text-sm font-semibold text-foreground/50 uppercase tracking-[0.2em] mb-10 slide-up",
            isVisible && "visible"
          )}
        >
          Trusted by India's Most Iconic Brands & Developers
        </p>

        <div className="relative overflow-hidden">
          {/* Gradient fade masks */}
          <div
            className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, hsl(35 20% 92%), transparent)" }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, hsl(35 20% 92%), transparent)" }}
          />

          {/* Marquee row */}
          <div className="flex animate-marquee gap-4">
            {[...clients, ...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-5 py-2.5 rounded-full border border-border bg-card text-foreground/70 hover:text-primary hover:border-primary/40 hover:bg-primary/5 font-semibold text-sm tracking-wide whitespace-nowrap transition-all duration-200 cursor-default shadow-sm"
              >
                {client.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
