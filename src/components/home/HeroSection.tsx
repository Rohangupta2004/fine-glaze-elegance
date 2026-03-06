import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown, ShieldCheck, Ruler } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-zinc-950 flex flex-col justify-center font-sans">
      
      {/* 1. Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-50 scale-105"
        >
          <source
            src="https://www.pexels.com/download/video/26737896/"
            type="video/mp4"
          />
        </video>
        
        {/* Engineering Blueprint/Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        
        {/* Gradient Masks for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-950/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
      </div>

      {/* 2. Main Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 pt-20">
        <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
          
          {/* Micro label with structural line */}
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-12 bg-blue-600" />
            <span className="text-xs md:text-sm font-bold tracking-[0.25em] text-blue-500 uppercase">
              FineGlaze Engineering
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black text-white leading-[1.05] tracking-tighter">
            Precision in <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
              Every Facade.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 text-lg md:text-xl text-zinc-400 leading-relaxed max-w-xl font-light">
            High-performance glass and aluminium systems for commercial and infrastructure projects. Delivered with uncompromising safety and exactitude.
          </p>

          {/* 3. Actions & CTAs */}
          <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-8">
            
            {/* Primary Button with modern 'fill' hover effect */}
            <Link
              to="/contact"
              className="group relative inline-flex items-center justify-center bg-white text-zinc-950 px-8 py-4 rounded-full text-sm font-bold tracking-wide overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
            >
              <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0" />
              <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                Request Project Quote
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            {/* Secondary Button */}
            <Link
              to="/portfolio"
              className="group flex items-center gap-3 text-sm font-semibold tracking-wide text-zinc-300 hover:text-white transition-colors py-2"
            >
              <span className="relative overflow-hidden pb-1">
                View Selected Projects
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-600 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300" />
              </span>
            </Link>
          </div>

          {/* 4. Trust Signals / Micro-stats */}
          <div className="mt-16 flex flex-wrap items-center gap-6 text-sm text-zinc-500 font-medium">
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <ShieldCheck className="w-4 h-4 text-blue-500" />
              <span className="text-zinc-300">ISO 9001 Certified</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <Ruler className="w-4 h-4 text-blue-500" />
              <span className="text-zinc-300">Custom Value Engineering</span>
            </div>
          </div>

        </div>
      </div>

      {/* 5. Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity animate-bounce">
        <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-bold">Scroll</span>
        <ChevronDown className="w-4 h-4 text-zinc-400" />
      </div>

    </section>
  );
};
