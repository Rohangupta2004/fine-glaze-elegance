import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export const HeroSection = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* BASE COLOR LAYER (shows immediately) */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-zinc-900 to-black" />

      {/* SOFT ACCENT GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.25),transparent_55%)]" />

      {/* VIDEO BACKGROUND (same file as yours) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        onCanPlay={() => setVideoLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
          videoLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <source
          src="https://www.pexels.com/download/video/26737896/"
          type="video/mp4"
        />
      </video>

      {/* DARK OVERLAY (for text readability) */}
      <div className="absolute inset-0 bg-black/45 hero-overlay" />

      {/* CONTENT */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">

          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/40 backdrop-blur-md text-sm text-white/75 border border-white/10">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
            Trusted Facade Experts
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Building <span className="text-gradient">Iconic Facades</span>
            <br className="hidden md:block" />
            That Define Skylines
          </h1>

          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Premium glass & aluminium facade fabrication, installation, and maintenance.
            Award-winning quality delivered on time.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Link to="/contact">
              <Button size="lg" className="btn-glossy text-white px-8 py-6">
                Get Free Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>

            <Link to="/portfolio">
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-6"
              >
                <Play className="mr-2 h-4 w-4" />
                View Projects
              </Button>
            </Link>
          </div>

        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 rounded-full bg-amber-500/70 animate-pulse" />
        </div>
      </div>

    </section>
  );
};
