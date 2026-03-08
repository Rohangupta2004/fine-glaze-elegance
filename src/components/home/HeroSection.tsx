import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden py-0">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      >
        <source
          src="https://www.pexels.com/download/video/26737896/"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_40%)]"></div>

      <div className="relative z-10 flex items-center justify-center min-h-screen text-center px-6">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-8 md:p-12 max-w-4xl animate-[fadeIn_1s_ease-out]">
          <h1 className="uppercase tracking-[0.2em] text-4xl md:text-6xl font-extrabold text-white leading-tight">
            ENGINEERING MODERN FACADE SYSTEMS
          </h1>

          <p className="text-white/80 mt-6 max-w-2xl mx-auto">
            Premium glass and aluminium facade fabrication, installation, and
            maintenance delivered with precision and speed.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-gray-200 to-gray-400 text-black px-8 py-3 rounded-lg font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              Get Free Quote
            </Link>

            <Link
              to="/portfolio"
              className="border border-white/40 text-white px-8 py-3 rounded-lg sm:ml-4 hover:bg-white/10 transition-all duration-300"
            >
              View Projects
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/80">
        <ChevronDown className="h-5 w-5" aria-hidden="true" />
      </div>
    </section>
  );
};
