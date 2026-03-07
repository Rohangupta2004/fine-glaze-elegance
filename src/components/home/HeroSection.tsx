import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, MapPin } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://www.pexels.com/download/video/26737896/"
          type="video/mp4"
        />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/55 backdrop-blur-md text-sm text-amber-100 animate-fade-in border border-amber-500/30">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
            Bronze • Gold • Black Signature Facade Design
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            Elevating Skylines with <span className="text-gradient">Luxury Glazing</span>
            <br className="hidden md:block" />
            Crafted for Landmark Projects
          </h1>

          <p
            className="text-lg md:text-xl text-amber-50/85 max-w-3xl mx-auto animate-fade-in-up leading-relaxed"
            style={{ animationDelay: "0.2s" }}
          >
            FineGlaze delivers premium structural glazing and facade execution with an elite bronze,
            gold and black aesthetic from concept to completion.
          </p>

          <div
            className="mx-auto max-w-2xl rounded-2xl border border-amber-400/30 bg-black/55 backdrop-blur-lg p-5 md:p-6 text-left animate-fade-in-up"
            style={{ animationDelay: "0.25s" }}
          >
            <p className="text-xs uppercase tracking-[0.25em] text-amber-300 mb-2">Featured Project Highlight</p>
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 text-amber-400" />
              <div>
                <h2 className="text-xl font-semibold text-white">Pune Airport – Terminal Facade Works</h2>
                <p className="text-sm md:text-base text-amber-50/80 mt-1">
                  High-performance glazing systems engineered for safety, aesthetics and long-term durability
                  at one of Pune&apos;s most important infrastructure landmarks.
                </p>
              </div>
            </div>
          </div>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Link to="/contact">
              <Button
                size="lg"
                className="btn-glossy text-white border-0 px-8 py-6 text-base group shadow-lg"
              >
                Get Free Quote
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>

            <Link to="/portfolio">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-amber-300/50 text-amber-100 hover:bg-amber-500/10 hover:text-white px-8 py-6 text-base group"
              >
                <Play className="mr-2 h-4 w-4" />
                View Projects
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-amber-300/40 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 rounded-full bg-amber-500/70 animate-pulse" />
        </div>
      </div>
    </section>
  );
};
