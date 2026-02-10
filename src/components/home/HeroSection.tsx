import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">

      {/* Background video */}
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

      {/* Depth layers (THIS creates 3D feel) */}
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6">

          {/* Left-aligned = more premium */}
          <div className="max-w-3xl space-y-8">

            {/* Badge */}
            <div className="inline-flex items-center gap-3 text-sm tracking-wide text-white/70">
              <span className="w-2 h-2 bg-amber-500 rounded-full" />
              TRUSTED FACADE ENGINEERS
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight">
              Engineering Facades
              <br />
              For Modern Skylines
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-white/75 leading-relaxed">
              High-performance glass and aluminium facade systems designed,
              fabricated, and installed with precision for large-scale
              commercial and infrastructure projects.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="px-8 py-6 text-base bg-amber-500 text-black hover:bg-amber-400 transition"
                >
                  Request Project Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>

              <Link to="/portfolio">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-6 text-base border-white/40 text-white hover:bg-white/10"
                >
                  <Play className="mr-2 h-4 w-4" />
                  View Projects
                </Button>
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* Subtle foreground shadow (depth) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};
