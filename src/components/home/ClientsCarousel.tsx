import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const clients = [
  { name: "Embassy REIT", abbr: "E", color: "#1a3c5e", logo: null },
  { name: "LTIMindtree", abbr: "LTI", color: "#0066cc", logo: null },
  { name: "Larsen & Toubro", abbr: "L&T", color: "#e63012", logo: null },
  { name: "Peninsula Land", abbr: "PL", color: "#2e7d32", logo: null },
  { name: "Leela Group", abbr: "L", color: "#8b6914", logo: "/Logofg.webp" },
  { name: "Nirmaann", abbr: "N", color: "#6a1b9a", logo: null },
  { name: "JSL", abbr: "JSL", color: "#c62828", logo: null },
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
          <div className="flex animate-marquee gap-4 items-center">
            {[...clients, ...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center gap-3 px-5 py-3 rounded-full border border-border bg-card hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 cursor-default shadow-sm group"
              >
                {/* Logo badge */}
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                  style={{ backgroundColor: client.color }}
                >
                  {client.abbr}
                </div>
                {/* Client name */}
                <span className="text-foreground/70 group-hover:text-primary font-semibold text-sm tracking-wide whitespace-nowrap transition-colors duration-200">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
