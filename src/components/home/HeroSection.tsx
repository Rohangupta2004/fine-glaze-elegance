import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Ruler } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] w-full flex flex-col justify-center overflow-hidden">
      
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
        
        {/* Using YOUR custom CSS hero-overlay for the perfect dark gradient fade */}
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* 2. Main Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 pt-20">
        <div className="max-w-3xl animate-fade-in-up">
          
          {/* Micro label */}
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-primary" />
            <span className="text-sm font-bold tracking-[0.2em] text-primary uppercase">
              FineGlaze Engineering
            </span>
          </div>

          {/* Headline using YOUR text-gradient class */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-white leading-[1.05] tracking-tight">
            Precision in <br />
            <span className="text-gradient">Every Facade.</span>
          </h1>

          {/* Description utilizing your muted-foreground variable */}
          <p className="mt-8 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl font-light">
            High-performance glass and aluminium systems for commercial and infrastructure projects. Delivered with uncompromising safety and exactitude.
          </p>

          {/* 3. Actions & CTAs */}
          <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            
            {/* Primary Button using YOUR btn-glossy and bronze-glow classes */}
            <Link
              to="/contact"
              className="btn-glossy inline-flex items-center justify-center text-primary-foreground px-8 py-4 rounded-lg text-sm font-semibold tracking-wide transition-transform hover:-translate-y-1 bronze-glow"
            >
              Request Project Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>

            {/* Secondary Button using YOUR glass-card-dark class */}
            <Link
              to="/portfolio"
              className="glass-card-dark inline-flex items-center justify-center text-white px-8 py-4 text-sm font-semibold tracking-wide transition-all hover:bg-white/10"
            >
              View Selected Projects
            </Link>
          </div>

          {/* 4. Trust Signals using YOUR glass-card-dark class */}
          <div className="mt-16 flex flex-wrap items-center gap-4 text-sm font-medium">
            <div className="glass-card-dark flex items-center gap-2 px-4 py-2.5">
              <ShieldCheck className="w-5 h-5 text-primary" />
              <span className="text-white/90">ISO 9001 Certified</span>
            </div>
            <div className="glass-card-dark flex items-center gap-2 px-4 py-2.5">
              <Ruler className="w-5 h-5 text-primary" />
              <span className="text-white/90">Custom Value Engineering</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
