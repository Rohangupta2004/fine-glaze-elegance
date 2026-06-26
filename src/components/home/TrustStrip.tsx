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
 * Trust strip — minimal grayscale client logos on a light bar.
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
          if (Array.isArray(parsed) && parsed.length > 0)
            setDynamicLogos(parsed);
        }
      } catch {
        /* fallback */
      }
    };
    fetchLogos();
  }, []);

  const hasDynamic = dynamicLogos.length > 0;
  const tripled = hasDynamic
    ? [...dynamicLogos, ...dynamicLogos, ...dynamicLogos]
    : [...fallbackClients, ...fallbackClients, ...fallbackClients];

  return (
    <section ref={ref} className="py-7 bg-stone-50 border-b border-stone-200">
      <div className="container mx-auto px-4">
        <p
          className={cn(
            "text-center text-[10px] font-semibold text-stone-400 uppercase tracking-[0.25em] mb-5 slide-up",
            isVisible && "visible"
          )}
        >
          Trusted by India's leading developers
        </p>

        <div className="relative overflow-hidden">
          <div
            className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
            style={{
              background: "linear-gradient(to right, rgb(250 250 249), transparent)",
            }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
            style={{
              background: "linear-gradient(to left, rgb(250 250 249), transparent)",
            }}
          />

          <div className="flex animate-marquee gap-10 md:gap-14 items-center">
            {hasDynamic
              ? tripled.map((logo, i) => (
                  <div key={i} className="flex-shrink-0 group" title={(logo as LogoEntry).name}>
                    <img
                      src={getPublicUrl((logo as LogoEntry).filename)}
                      alt={(logo as LogoEntry).name}
                      className="h-7 md:h-10 w-auto max-w-[120px] md:max-w-[150px] object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                ))
              : tripled.map((client, i) => (
                  <span
                    key={i}
                    className="flex-shrink-0 text-stone-400 font-semibold text-xs tracking-wide whitespace-nowrap hover:text-stone-700 transition-colors cursor-default"
                  >
                    {(client as (typeof fallbackClients)[0]).name}
                  </span>
                ))}
          </div>
        </div>
      </div>
    </section>
  );
};
