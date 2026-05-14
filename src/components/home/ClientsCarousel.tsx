import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const clients = [
  { name: "Embassy REIT", image: "/Embassy.webp" },
  { name: "LTIMindtree", image: "/ltimindtree-mensa-campus-mahape-navi-mumbai-1 (1)-elementor-io-optimized.webp" },
  { name: "Leela Group", image: "/Hotel.webp" },
  { name: "Peninsula Land", image: "/Salsette27.webp" },
  { name: "Nirmaann", image: "/Nirmann.webp" },
  { name: "Jindal Stainless", image: "/Puneairport.webp" },
  { name: "SSG Group", image: "/Pan.webp" },
  { name: "Embassy Techzone", image: "/Embassyoark.webp" },
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
          <div className="flex animate-marquee gap-5 items-center">
            {[...clients, ...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center gap-3 pl-1.5 pr-5 py-1.5 rounded-full border border-border bg-card hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 cursor-default shadow-sm group"
              >
                {/* Client project image */}
                <div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0 border border-border/50">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width="36"
                    height="36"
                  />
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
