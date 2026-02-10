import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

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

      {/* Contrast layers */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6">

          <div className="max-w-3xl">

            {/* Micro label */}
            <div className="mb-6 text-sm tracking-[0.25em] text-amber-400">
              FACADE ENGINEERING
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white leading-[1.05]">
              Engineering
              <br />
              Modern Facades
            </h1>

            {/* Divider = structure */}
            <div className="mt-6 h-px w-24 bg-amber-500" />

            {/* Description */}
            <p className="mt-6 text-lg md:text-xl text-white/75 max-w-xl leading-relaxed">
              High-performance glass and aluminium facade systems for
              commercial and infrastructure projects — from design to execution.
            </p>

            {/* Actions */}
            <div className="mt-10 flex items-center gap-8">

              {/* PRIMARY BUTTON */}
              <Link
                to="/contact"
                className="
                  inline-flex items-center gap-3
                  bg-amber-500 text-black
                  px-8 py-4
                  text-sm font-medium tracking-wide
                  hover:bg-amber-400 transition
                "
              >
                Request Project Quote
                <ArrowRight className="h-4 w-4" />
              </Link>

              {/* SECONDARY ACTION (TEXT, NOT BUTTON) */}
              <Link
                to="/portfolio"
                className="text-sm tracking-wide text-white/70 hover:text-white transition"
              >
                View Selected Projects →
              </Link>

            </div>

          </div>
        </div>
      </div>

      {/* Foreground depth */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};
