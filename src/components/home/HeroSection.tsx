import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { useSiteMedia } from "@/hooks/useSiteMedia";

/**
 * Home Hero — split panel layout (mirrors ServiceHero style).
 *
 * Desktop:  LEFT dark text panel  |  RIGHT full-bleed image / video
 * Mobile:   Image band (50 vh) above ➜ dark text panel below
 *
 * No rounded corners anywhere. Stone / amber palette.
 */
export const HeroSection = () => {
  const { getMedia } = useSiteMedia();
  const poster = getMedia("home_hero_poster", "/Unitized.webp");
  const videoSrc = getMedia(
    "home_hero_video",
    "https://www.pexels.com/download/video/26737896/"
  );

  return (
    <section className="relative grid lg:grid-cols-2 min-h-[auto] lg:min-h-screen">
      {/* ── RIGHT — image / video (appears first on mobile) ── */}
      <div className="relative order-1 lg:order-2 h-[50vh] lg:h-auto lg:min-h-screen">
        {/* Poster fallback */}
        <img
          src={poster}
          alt="Fine Glaze facade project"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        {/* Video overlay */}
        <video
          key={videoSrc}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={poster}
          src={videoSrc}
        />

        {/* Light top gradient for navbar legibility */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-slate-900/50 to-transparent" />
        {/* Seam — blends image into the dark panel on lg */}
        <div className="hidden lg:block absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-900 to-transparent" />
        {/* Bottom gradient on mobile so text panel blends */}
        <div className="lg:hidden absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-900 to-transparent" />

        {/* Mobile overlay badge — location */}
        <div className="lg:hidden absolute top-5 left-5 z-10">
          <span className="text-amber-400 text-[10px] font-bold tracking-[0.35em] uppercase bg-black/40 backdrop-blur-sm px-3 py-1.5">
            Pune · Mumbai · Maharashtra
          </span>
        </div>
      </div>

      {/* ── LEFT — dark text panel ── */}
      <div className="relative order-2 lg:order-1 bg-gradient-to-br from-slate-900 to-slate-800 text-white flex items-center">
        <div className="w-full px-6 md:px-12 lg:px-14 xl:px-20 py-12 lg:pt-32 lg:pb-14">
          {/* Tagline — hidden on mobile (shown as overlay on image instead) */}
          <p className="hidden lg:block text-amber-400 text-xs font-bold tracking-[0.4em] uppercase mb-5 animate-fade-in">
            Fine Glaze · Pune · Mumbai · Maharashtra
          </p>

          {/* Headline */}
          <h1
            className="font-extrabold leading-[0.92] tracking-tight animate-fade-in-up"
            style={{
              fontSize: "clamp(2.6rem, 6vw, 5.5rem)",
              animationDelay: "0.1s",
            }}
          >
            Crafting{" "}
            <span className="text-gradient-gold">Iconic</span>
            <br />
            <span className="text-gradient-gold">Facades</span>
          </h1>

          <p
            className="mt-2 text-white/70 font-semibold animate-fade-in-up"
            style={{
              fontSize: "clamp(1.1rem, 2.5vw, 1.8rem)",
              animationDelay: "0.15s",
            }}
          >
            That Define Skylines.
          </p>

          {/* Sub-headline */}
          <p
            className="mt-5 text-white/60 text-sm md:text-base max-w-md leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Premium glass &amp; aluminium facade fabrication, installation,
            and maintenance — delivered with{" "}
            <span className="text-amber-400 font-medium">
              award-winning precision
            </span>
            .
          </p>

          {/* CTA Links */}
          <div
            className="mt-8 flex items-center gap-8 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Link
              to="/contact"
              className="text-white font-semibold text-base border-b border-amber-400 pb-0.5 hover:text-amber-400 transition-colors tracking-wide"
            >
              Get Free Quote
            </Link>
            <Link
              to="/portfolio"
              className="text-white/60 font-medium text-base hover:text-white transition-colors tracking-wide"
            >
              View Projects
            </Link>
          </div>

          {/* Feature highlights — grid (like ServiceHero) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-5 gap-y-5 border-t border-white/15 pt-7 mt-10">
            {[
              { val: "10+", label: "Landmark Projects" },
              { val: "5+", label: "Years Experience" },
              { val: "0", label: "Safety Incidents" },
              { val: "5.0", label: "Google Rating" },
              { val: "24/7", label: "AMC Support" },
              { val: "A+", label: "Quality Score" },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-xl md:text-2xl font-bold text-amber-400">
                  {item.val}
                </p>
                <p className="text-[11px] text-white/50 uppercase tracking-widest mt-0.5">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* Trust signal */}
          <div
            className="flex items-center gap-1.5 mt-6 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={12}
                  className="text-amber-400 fill-amber-400"
                />
              ))}
            </div>
            <span className="text-white/50 text-xs font-medium ml-0.5">
              Embassy REIT Awarded · Best Performance Vendor 2024
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
