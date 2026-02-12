import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

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

      {/* Ambient depth glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,hsl(35_85%_65%_/_0.25),transparent_52%)]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center perspective-wrap">
        <div className="max-w-4xl mx-auto space-y-8 glass-card-dark p-8 md:p-12 ui-3d-card">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/40 backdrop-blur-md text-sm text-white/75 animate-fade-in border border-white/10 ui-3d-layer">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
            Trusted Facade Experts
          </div>

          {/* Headline */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight animate-fade-in-up ui-3d-layer"
            style={{ animationDelay: "0.1s" }}
          >
            Building <span className="text-gradient">Iconic Facades</span>
            <br className="hidden md:block" />
            That Define Skylines
          </h1>

          {/* Sub-headline */}
          <p
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto animate-fade-in-up leading-relaxed ui-3d-layer"
            style={{ animationDelay: "0.2s" }}
          >
            Premium glass & aluminium facade fabrication, installation, and maintenance.
            Award-winning quality delivered on time.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 animate-fade-in-up ui-3d-layer"
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
                className="bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white px-8 py-6 text-base group"
              >
                <Play className="mr-2 h-4 w-4" />
                View Projects
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 rounded-full bg-amber-500/70 animate-pulse" />
        </div>
      </div>
    </section>
  );
};
