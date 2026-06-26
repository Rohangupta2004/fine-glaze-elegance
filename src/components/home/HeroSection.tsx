import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star } from "lucide-react";
import { useSiteMedia } from "@/hooks/useSiteMedia";

export const HeroSection = () => {
  const { getMedia } = useSiteMedia();
  const poster = getMedia("home_hero_poster", "/Unitized.webp");
  const videoSrc = getMedia(
    "home_hero_video",
    "https://www.pexels.com/download/video/26737896/"
  );

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      
      {/* Fallback image (loads first, video covers it once ready) */}
      <img
        src={poster}
        alt="Fine Glaze facade installation"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />

      {/* Hero Background Video */}
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

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.60) 0%, rgba(0,0,0,0.25) 30%, rgba(0,0,0,0.55) 65%, rgba(0,0,0,0.92) 100%)",
        }}
      />

      {/* Content — bottom-aligned like structural glazing */}
      <div className="absolute inset-x-0 bottom-0 px-5 md:px-16 pb-10 md:pb-20 pt-24">
        {/* Tagline */}
        <p
          className="text-amber-400 text-xs font-bold tracking-[0.4em] uppercase mb-5 animate-fade-in"
          style={{ animationDelay: "0.05s" }}
        >
          Fine Glaze · Pune · Mumbai · Maharashtra
        </p>

        {/* Headline */}
        <h1
          className="font-extrabold text-white leading-[0.88] tracking-tight animate-fade-in-up"
          style={{ fontSize: "clamp(3.2rem, 8vw, 8rem)", animationDelay: "0.1s" }}
        >
          Crafting{" "}
          <span className="text-gradient-gold">Iconic</span>
          <br />
          <span className="text-gradient-gold">Facades</span>
          <br />
          <span style={{ fontSize: "clamp(1.8rem, 4vw, 4rem)", fontWeight: 600, color: "rgba(255,255,255,0.85)" }}>
            That Define Skylines.
          </span>
        </h1>

        {/* Sub-headline */}
        <p
          className="mt-6 text-white/70 text-base md:text-lg max-w-lg leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Premium glass & aluminium facade fabrication, installation, and
          maintenance — delivered with{" "}
          <span className="text-amber-400 font-medium">award-winning precision</span>.
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

        {/* Trust signal */}
        <div
          className="flex items-center gap-1.5 mt-4 animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={12} className="text-amber-400 fill-amber-400" />
            ))}
          </div>
          <span className="text-white/50 text-xs font-medium ml-0.5">
            5.0 Google · Embassy REIT Vendor · 10+ Landmark Projects
          </span>
        </div>
      </div>

      {/* Scroll Indicator — vertical line */}
      <div className="absolute bottom-8 right-8 flex flex-col items-center gap-2 opacity-40">
        <span className="text-white text-[10px] uppercase tracking-[0.25em] rotate-90 mb-3">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
};
