import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden [perspective:1400px]">
      
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-110"
      >
        <source
          src="https://www.pexels.com/download/video/26737896/"
          type="video/mp4"
        />
      </video>

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div
          className="
            max-w-5xl w-full text-center space-y-8
            bg-white/5 backdrop-blur-xl
            border border-white/10
            rounded-3xl
            px-10 py-14
            shadow-[0_40px_120px_rgba(0,0,0,0.6)]
            transform-gpu
            transition-all duration-700
            hover:rotate-x-2 hover:-rotate-y-2 hover:scale-[1.02]
          "
        >

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/50 backdrop-blur-md text-sm text-white/80 border border-white/10 shadow-lg mx-auto">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
            Trusted Facade Experts
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight tracking-tight">
            Engineering{" "}
            <span className="text-gradient drop-shadow-[0_10px_30px_rgba(255,255,255,0.25)]">
              Landmark Facades
            </span>
            <br className="hidden md:block" />
            For Modern Architecture
          </h1>

          {/* Sub headline */}
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Premium glass & aluminium facade fabrication, installation,
            and maintenance — delivered with precision and reliability.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Link to="/contact">
              <Button
                size="lg"
                className="
                  px-8 py-6 text-base text-white
                  bg-gradient-to-br from-amber-500 to-orange-600
                  shadow-[0_20px_60px_rgba(255,165,0,0.45)]
                  hover:shadow-[0_30px_90px_rgba(255,165,0,0.65)]
                  transition-all duration-500
                "
              >
                Get Free Project Estimate
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>

            <Link to="/portfolio">
              <Button
                size="lg"
                variant="outline"
                className="
                  bg-transparent border-white/30 text-white
                  hover:bg-white/10 hover:text-white
                  px-8 py-6 text-base
                "
              >
                <Play className="mr-2 h-4 w-4" />
                View Projects
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 rounded-full bg-amber-500/70 animate-pulse" />
        </div>
      </div>
    </section>
  );
};
