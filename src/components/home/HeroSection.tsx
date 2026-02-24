import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">

      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Cinematic Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90" />

      {/* Center Subtle Light Focus */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[35%] bg-white/5 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl space-y-8">

        {/* Micro Label */}
        <p className="tracking-[0.4em] text-xs text-white/60 uppercase">
          Global Structural Excellence
        </p>

        {/* Headline (Modern Bold) */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold leading-[1.05]">
          The Standard
          <br />
          <span className="text-white/90">
            of Modern Facades
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
          Engineering transparency for the world’s most ambitious architectural
          landmarks. Precision-crafted curtain walls that define the skyline.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">

          <Link to="/portfolio">
            <button className="px-10 py-4 bg-white text-black text-sm tracking-widest uppercase hover:bg-white/90 transition-all duration-300">
              View Projects
            </button>
          </Link>

          <Link to="/contact">
            <button className="px-10 py-4 border border-white/30 text-white text-sm tracking-widest uppercase hover:bg-white/10 transition-all duration-300 flex items-center gap-2 justify-center">
              Get a Quote
              <ArrowRight size={16} />
            </button>
          </Link>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 text-xs tracking-widest uppercase animate-pulse">
        Scroll to Explore
      </div>

    </section>
  );
};
