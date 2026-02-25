import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export const HeroSection = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white text-black">

      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
          scrolled ? "scale-110 brightness-75" : "scale-105 brightness-90"
        }`}
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Light Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white/95" />

      {/* Soft Center Glow */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[35%] bg-white/40 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl space-y-8 animate-fade-in">

        {/* Micro Label */}
        <p className="tracking-[0.4em] text-xs text-black/60 uppercase">
          Global Structural Excellence
        </p>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold leading-[1.05]">
          The Standard
          <br />
          <span className="text-black/80">
            of Modern Facades
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-black/60 max-w-2xl mx-auto leading-relaxed">
          Engineering transparency for the world’s most ambitious architectural
          landmarks. Precision-crafted curtain walls defining tomorrow’s skyline.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">

          <Link to="/portfolio">
            <button className="px-10 py-4 bg-black text-white text-sm tracking-widest uppercase hover:bg-black/90 transition-all duration-300">
              View Projects
            </button>
          </Link>

          <Link to="/contact">
            <button className="px-10 py-4 border border-black/30 text-black text-sm tracking-widest uppercase hover:bg-black/5 transition-all duration-300 flex items-center gap-2 justify-center">
              Get a Quote
              <ArrowRight size={16} />
            </button>
          </Link>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-black/40 text-xs tracking-widest uppercase animate-bounce">
        Scroll to Explore
      </div>

    </section>
  );
};
