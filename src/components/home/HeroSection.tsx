import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Ruler } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden flex flex-col justify-center bg-slate-50">
      
      {/* 1. Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://www.pexels.com/download/video/26737896/"
            type="video/mp4"
          />
        </video>
        
        {/* Light Frosted Glass Overlay - Fixes the "Dark Logo" issue */}
        <div className="absolute inset-0 bg-white/75 backdrop-blur-[3px]" />
        
        {/* Soft gradient to blend with the next section naturally */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
      </div>

      {/* 2. Main Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 pt-20">
        <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
          
          {/* Micro label */}
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-blue-600" />
            <span className="text-sm font-bold tracking-widest text-blue-700 uppercase">
              FineGlaze Engineering
            </span>
          </div>

          {/* Headline - Using normal text classes to match your global CSS */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-slate-900 leading-tight">
            Precision in <br />
            <span className="text-blue-600">Every Facade.</span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl">
            High-performance glass and aluminium systems for commercial and infrastructure projects. Delivered with uncompromising safety and exactitude.
          </p>

          {/* 3. Actions & CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-xl text-base font-semibold transition-all hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1"
            >
              Request Project Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl text-base font-semibold transition-all hover:bg-slate-50 hover:border-slate-300 hover:-translate-y-1"
            >
              View Selected Projects
            </Link>
          </div>

          {/* 4. Trust Signals / Micro-stats */}
          <div className="mt-12 flex flex-wrap items-center gap-4 text-sm text-slate-700 font-medium">
            <div className="flex items-center gap-2 bg-white/80 border border-white px-4 py-2.5 rounded-lg shadow-sm backdrop-blur-md">
              <ShieldCheck className="w-5 h-5 text-blue-600" />
              <span>ISO 9001 Certified</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 border border-white px-4 py-2.5 rounded-lg shadow-sm backdrop-blur-md">
              <Ruler className="w-5 h-5 text-blue-600" />
              <span>Custom Value Engineering</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
