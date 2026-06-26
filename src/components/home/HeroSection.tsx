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
    <section className="relative min-h-[75vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      
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
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-16 md:pt-0">
        <div className="max-w-4xl mx-auto space-y-4 md:space-y-8">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 bg-black/40 backdrop-blur-md text-xs md:text-sm text-white/75 animate-fade-in border border-white/10">
            <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-amber-500 animate-pulse" />
            India's Trusted Facade Experts
          </div>

          {/* Headline */}
          <h1
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            Crafting{" "}
            <span className="text-gradient-gold">Iconic Facades</span>
            <br className="hidden md:block" />
            {" "}That{" "}
            <span className="text-gradient-light">Define Skylines</span>
          </h1>

          {/* Sub-headline — shorter on mobile */}
          <p
            className="text-sm md:text-xl text-white/80 max-w-2xl mx-auto animate-fade-in-up leading-relaxed"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="hidden md:inline">
              Premium glass & aluminium facade fabrication, installation, and
              maintenance — delivered with{" "}
              <span className="text-amber-400 font-medium">award-winning precision</span>{" "}
              and zero compromise on quality.
            </span>
            <span className="md:hidden">
              Glass & aluminium facade fabrication and installation with{" "}
              <span className="text-amber-400 font-medium">award-winning precision</span>.
            </span>
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-row items-center justify-center gap-3 md:gap-4 pt-2 md:pt-6 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Link to="/contact">
              <Button
                size="lg"
                className="btn-glossy text-white border-0 px-5 py-4 md:px-8 md:py-6 text-sm md:text-base group shadow-lg"
              >
                Get Free Quote
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>

            <Link to="/portfolio">
              <Button
                size="lg"
                variant="outline"
                className="px-5 py-4 md:px-8 md:py-6 text-sm md:text-base group border-white bg-white/15 text-white hover:bg-white hover:text-slate-900 hover:border-white backdrop-blur-sm font-semibold transition-all duration-200 shadow-md"
              >
                <Play className="mr-2 h-4 w-4" />
                View Projects
              </Button>
            </Link>
          </div>

          {/* Trust signal */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1.5 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} className="text-amber-400 fill-amber-400" />
              ))}
            </div>
            <span className="text-white/50 text-[11px] md:text-sm font-medium">
              5.0 Google · Embassy REIT Vendor · 10+ Projects
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator — desktop only */}
      <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 rounded-full bg-amber-500/70 animate-pulse" />
        </div>
      </div>
    </section>
  );
};
