import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award, Star } from "lucide-react";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Hero Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="https://www.pexels.com/download/video/26737896/" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/40 backdrop-blur-md text-sm text-white/75 animate-fade-in border border-white/10">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
            India's Trusted Facade Experts
          </div>

          {/* Headline */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            Crafting{" "}
            <span className="text-gradient-gold">Iconic Facades</span>
            <br className="hidden md:block" />
            That{" "}
            <span className="text-gradient-light">Define Skylines</span>
          </h1>

          {/* Sub-headline */}
          <p
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto animate-fade-in-up leading-relaxed"
            style={{ animationDelay: "0.2s" }}
          >
            Premium glass & aluminium facade fabrication, installation, and
            maintenance — delivered with{" "}
            <span className="text-amber-400 font-medium">award-winning precision</span>{" "}
            and zero compromise on quality.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href="https://wa.me/918369233566?text=Hello%20Fine%20Glaze%2C%20I%20need%20a%20facade%20quote."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-[#25D366] hover:bg-[#1ebe5d] text-white border-0 px-8 py-6 text-base group shadow-lg font-semibold"
              >
                <WhatsAppIcon />
                <span className="ml-2">WhatsApp for Quote</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>

            <Link to="/portfolio">
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-base group border-white bg-white/15 text-white hover:bg-white hover:text-slate-900 hover:border-white backdrop-blur-sm font-semibold transition-all duration-200 shadow-md"
              >
                View Projects
              </Button>
            </Link>
          </div>

          {/* Trust Badges Row */}
          <div
            className="flex flex-wrap items-center justify-center gap-3 pt-4 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-black/40 backdrop-blur-sm border border-white/15 text-white/80 text-xs font-medium">
              <Award size={13} className="text-amber-400" />
              Embassy REIT Best Vendor 2024
            </div>
            <div className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-black/40 backdrop-blur-sm border border-white/15 text-white/80 text-xs font-medium">
              <Star size={13} className="text-amber-400 fill-amber-400" />
              5.0 Google Rating
            </div>
            <div className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-black/40 backdrop-blur-sm border border-white/15 text-white/80 text-xs font-medium">
              <Shield size={13} className="text-amber-400" />
              150+ Projects Delivered
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 rounded-full bg-amber-500/70 animate-pulse" />
        </div>
      </div>
    </section>
  );
};
