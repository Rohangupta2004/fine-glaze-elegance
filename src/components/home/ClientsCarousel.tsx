import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

// Download these logos to /public/clients/ to replace text display
// e.g. /public/clients/embassy-reit.svg, /public/clients/ltimindtree.svg etc.
const clients = [
  { name: "Embassy REIT", abbr: "Embassy\nREIT" },
  { name: "LTIMindtree", abbr: "LTI\nMindtree" },
  { name: "Larsen & Toubro", abbr: "L&T" },
  { name: "Peninsula Land", abbr: "Peninsula" },
  { name: "Leela Group", abbr: "Leela\nGroup" },
  { name: "Nirmaann", abbr: "Nirmaann" },
  { name: "JSL", abbr: "JSL" },
  { name: "AAI", abbr: "AAI" },
];

export const ClientsCarousel = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-14 bg-secondary/50 border-y border-border" ref={ref}>
      <div className="container mx-auto px-4">
        <p
          className={cn(
            "text-center text-sm text-muted-foreground uppercase tracking-wider mb-10 slide-up",
            isVisible && "visible"
          )}
        >
          Trusted by Leading Brands
        </p>

        <div className="relative overflow-hidden">
          {/* Gradient Masks - Warm tones */}
          <div 
            className="absolute left-0 top-0 bottom-0 w-24 z-10"
            style={{ background: "linear-gradient(to right, hsl(35 20% 92%), transparent)" }}
          />
          <div 
            className="absolute right-0 top-0 bottom-0 w-24 z-10"
            style={{ background: "linear-gradient(to left, hsl(35 20% 92%), transparent)" }}
          />

          {/* Marquee */}
          <div className="flex animate-marquee">
            {[...clients, ...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 flex items-center justify-center h-14 min-w-[120px] opacity-50 hover:opacity-100 transition-all duration-300"
              >
                <span className="text-foreground font-bold text-sm tracking-wide whitespace-pre-line text-center leading-tight">
                  {client.abbr}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};