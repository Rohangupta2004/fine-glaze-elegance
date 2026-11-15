import { useEffect, useState } from "react";
import { Trophy, Star } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/hooks/useMotion";
import { supabase } from "@/lib/supabase";
import { AnimatedNumber } from "@/components/common/AnimatedNumber";
import { company } from "@/data/company";

/* ─── Fallback client list (used if supabase manifest missing) ─── */
const fallbackClients = [
  // Clients exactly as listed in the Company Profile 2026–27.
  { name: "Embassy REIT", abbr: "E", color: "#1a3c5e" },
  { name: "L&T Construction", abbr: "L&T", color: "#e63012" },
  { name: "Jindal Stainless", abbr: "JSL", color: "#c62828" },
  { name: "Nirmaann Encon", abbr: "N", color: "#6a1b9a" },
  { name: "Hatchway Windoor", abbr: "HW", color: "#2e7d32" },
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

/**
 * Combined trust strip: award badge + client logos marquee.
 * Replaces the separate AwardsSection + ClientsCarousel for a tighter homepage.
 */
export const TrustStrip = () => {
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
    <section className="py-12 bg-secondary/40 border-y border-border">
      <div className="container mx-auto px-4">
        {/* Award + Rating Row */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger(0.1)}
        >
          {/* Award badge */}
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-amber-500/10 border border-amber-500/30 text-amber-700">
            <Trophy size={18} className="text-amber-600" />
            <span className="font-semibold text-sm">
              Best Performance Vendor 2024 — Embassy REIT
            </span>
          </motion.div>

          {/* Google reviews (link out — rating is not hard-coded) */}
          <motion.a
            variants={fadeUp}
            href={company.address.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-border hover:border-amber-500/50 transition-colors"
          >
            <Star size={14} className="fill-amber-500 text-amber-500" />
            <span className="text-sm font-semibold text-foreground/80">Read our Google reviews</span>
          </motion.a>
        </motion.div>

        {/* Capability in Numbers — Numbers in Count-Up Motion */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 my-8 p-4 md:p-6 bg-card border border-border/80 shadow-sm rounded-xl"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger(0.08)}
        >
          {[
            { val: company.stats.sqmDelivered, label: "SQM Facade Delivered", sub: "Pune & Mumbai" },
            { val: company.stats.projectRecords, label: "Documented Projects", sub: "In our company profile" },
            { val: company.stats.coreTeam, label: "Core Team", sub: "Engineering · supervision · site" },
            { val: "~2,500", label: "Sq Ft Fabrication Unit", sub: "Pisoli, Pune" },
            { val: "11+ Yrs", label: "Founder's Facade Experience", sub: "Incl. Al Ghurair Group" },
            { val: "2024", label: "Best Vendor Award", sub: "Embassy REIT" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="text-center px-2 py-3 rounded-lg hover:bg-amber-500/5 transition-colors border border-transparent hover:border-amber-500/20"
            >
              <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-amber-600 tracking-tight">
                <AnimatedNumber value={item.val} />
              </div>
              <div className="text-[11px] font-bold text-foreground/80 mt-1 leading-snug">
                {item.label}
              </div>
              <div className="text-[9px] text-muted-foreground uppercase tracking-wider mt-0.5">
                {item.sub}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="text-center text-xs font-semibold text-foreground/50 uppercase tracking-[0.2em] mb-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
        >
          Clients we have delivered for
        </motion.p>

        {/* Client Logo Marquee */}
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
                      className="h-10 md:h-14 w-auto max-w-[140px] md:max-w-[180px] object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                ))
              : tripled.map((client, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 flex items-center gap-3 px-4 py-2 border border-border bg-card hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 cursor-default shadow-sm group"
                  >
                    <div
                      className="w-7 h-7 flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0"
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
