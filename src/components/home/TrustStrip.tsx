import { useEffect, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { supabase } from "@/lib/supabase";

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

/* Fallback client list */
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

/**
 * Trust strip — clean client logos marquee with a subtle tagline.
 * No award badges or star ratings (those live in AwardsSection).
 * Sharp, architectural styling.
 */
export const TrustStrip = () => {
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
        // Silently fall back
      }
    };
    fetchLogos();
  }, []);

  const hasDynamic = dynamicLogos.length > 0;
  const tripled = hasDynamic
    ? [...dynamicLogos, ...dynamicLogos, ...dynamicLogos]
    : [...fallbackClients, ...fallbackClients, ...fallbackClients];

  return (
    <section
      ref={ref}
      className="py-8 bg-stone-100 border-y border-stone-200"
    >
      <div className="container mx-auto px-4">
        {/* Tagline */}
        <p
          className={cn(
            "text-center text-[10px] font-semibold text-stone-400 uppercase tracking-[0.25em] mb-6 slide-up",
            isVisible && "visible"
          )}
        >
          Trusted by India's leading developers & corporations
        </p>

        {/* Logo Marquee */}
        <div className="relative overflow-hidden">
          {/* Gradient fade masks */}
          <div
            className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, rgb(245 245 244), transparent)",
            }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(to left, rgb(245 245 244), transparent)",
            }}
          />

          {/* Marquee row */}
          <div className="flex animate-marquee gap-10 md:gap-14 items-center">
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
                      className="h-8 md:h-11 w-auto max-w-[120px] md:max-w-[160px] object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                ))
              : tripled.map((client, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 flex items-center gap-2.5 px-4 py-2 border border-stone-200 bg-white hover:border-amber-300 transition-all duration-200 cursor-default group"
                  >
                    <div
                      className="w-6 h-6 flex items-center justify-center text-white text-[9px] font-bold flex-shrink-0"
                      style={{
                        backgroundColor: (
                          client as (typeof fallbackClients)[0]
                        ).color,
                      }}
                    >
                      {(client as (typeof fallbackClients)[0]).abbr}
                    </div>
                    <span className="text-stone-500 group-hover:text-stone-800 font-medium text-xs tracking-wide whitespace-nowrap transition-colors duration-200">
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
