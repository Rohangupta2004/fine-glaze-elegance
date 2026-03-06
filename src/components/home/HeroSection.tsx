import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black flex items-center justify-center">

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

      {/* Contrast overlays */}
      <div className="absolute inset-0 bg-black/65" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/80" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">

        {/* Micro label */}
        <div className="mb-6 text-sm tracking-[0.3em] text-amber-400">
          FACADE ENGINEERING
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white leading-[1.05]">
          Engineering
          <br />
          Modern Facades
        </h1>

        {/* Divider */}
        <div className="mx-auto mt-6 h-px w-20 bg-amber-500" />

        {/* Description */}
        <p className="mt-6 text-lg md:text-xl text-white/75 leading-relaxed max-w-2xl mx-auto">
          High-performance glass and aluminium facade systems for commercial
          and infrastructure projects — delivered with precision and reliability.
        </p>

        {/* Actions */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-8">

          {/* Primary CTA */}
          <Link
            to="/contact"
            className="
              inline-flex items-center gap-3
              bg-amber-500 text-black
              px-10 py-4
              text-sm font-medium tracking-wide
              hover:bg-amber-400 transition
            "
          >
            Request Project Quote
            <ArrowRight className="h-4 w-4" />
          </Link>

          {/* Secondary action (text only) */}
          <Link
            to="/portfolio"
            className="text-sm tracking-wide text-white/70 hover:text-white transition"
          >
            View Selected Projects →
          </Link>

        </div>
      </div>

      {/* Bottom depth */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};
