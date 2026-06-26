import { useEffect, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { supabase } from "@/lib/supabase";

// ─── Fallback (hardcoded) clients ──────────────────────────────────────────
const fallbackClients = [
  { name: "Embassy REIT", abbr: "E", color: "#1a3c5e" },
  { name: "LTIMindtree", abbr: "LTI", color: "#0066cc" },
  { name: "Larsen & Toubro", abbr: "L&T", color: "#e63012" },
  { name: "Peninsula Land", abbr: "PL", color: "#2e7d32" },
  { name: "Leela Group", abbr: "L", color: "#8b6914" },
  { name: "Nirmaann", abbr: "N", color: "#6a1b9a" },
  { name: "JSL", abbr: "JSL", color: "#c62828" },
  { name: "Rockfort Estate", abbr: "RE", color: "#37474f" },
];

interface LogoEntry {
  name: string;
  filename: string;
}

const BUCKET = "project-images";
const LOGOS_FOLDER = "client-logos";
const MANIFEST_PATH = `${LOGOS_FOLDER}/manifest.json`;

function getPublicUrl(filename: string): string {
  const { data } = supabase.storage
    .from(BUCKET)
    .getPublicUrl(`${LOGOS_FOLDER}/${filename}`);
  return data.publicUrl;
}

export const ClientsCarousel = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [dynamicLogos, setDynamicLogos] = useState<LogoEntry[]>([]);

  useEffect(() => {
    const fetchLogos = async () => {
      try {
        const { data, error } = await supabase.storage
          .from(BUCKET)
          .download(MANIFEST_PATH);

        if (!error && data) {
          const text = await data.text();
          const parsed = JSON.parse(text);
          if (Array.isArray(parsed) && parsed.length > 0) {
            setDynamicLogos(parsed);
          }
        }
      } catch {
        // Silently fall back to hardcoded
      }
    };
    fetchLogos();
  }, []);

  const hasDynamic = dynamicLogos.length > 0;

  // Triple the items for seamless loop
  const tripled = hasDynamic
    ? [...dynamicLogos, ...dynamicLogos, ...dynamicLogos]
    : [...fallbackClients, ...fallbackClients, ...fallbackClients];

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
            style={{
              background:
                "linear-gradient(to right, hsl(35 20% 92%), transparent)",
            }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(to left, hsl(35 20% 92%), transparent)",
            }}
          />

          {/* Marquee row */}
          <div className="flex animate-marquee gap-12 md:gap-16 items-center">
            {hasDynamic
              ? tripled.map((logo, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 group"
                    title={(logo as LogoEntry).name}
                  >
                    <img
                      src={getPublicUrl((logo as LogoEntry).filename)}
                      alt={(logo as LogoEntry).name}
                      className="h-12 md:h-16 w-auto max-w-[160px] md:max-w-[200px] object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                ))
              : tripled.map((client, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 flex items-center gap-3 px-5 py-3 border border-border bg-card hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 cursor-default shadow-sm group"
                  >
                    <div
                      className="w-8 h-8 flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                      style={{
                        backgroundColor: (client as (typeof fallbackClients)[0]).color,
                      }}
                    >
                      {(client as (typeof fallbackClients)[0]).abbr}
                    </div>
                    <span className="text-foreground/70 group-hover:text-primary font-semibold text-sm tracking-wide whitespace-nowrap transition-colors duration-200">
                      {(client as (typeof fallbackClients)[0]).name}
                    </span>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </section>
  );
};
