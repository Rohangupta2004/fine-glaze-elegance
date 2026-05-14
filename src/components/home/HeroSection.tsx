import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Phone, Play } from "lucide-react";

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
Facade Contractor in Pune & Mumbai
          </div>

          {/* Headline */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            Structural Glazing, Curtain Walls
            <br className="hidden md:block" />
            <span className="text-gradient-gold">& ACP Facades</span> Built to Last
          </h1>

          {/* Sub-headline */}
          <p
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto animate-fade-in-up leading-relaxed"
            style={{ animationDelay: "0.2s" }}
          >
            Talk to Fine Glaze for facade fabrication, installation and maintenance across Pune, Mumbai, Navi Mumbai and Thane — with{" "}
            <span className="text-amber-400 font-medium">free site visit and quotation support</span>{" "}
            for commercial projects.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <a href="tel:+918369233566" aria-label="Call Fine Glaze for a free facade site visit">
              <Button
                size="lg"
                className="bg-amber-500 hover:bg-amber-600 text-slate-950 border-0 px-8 py-6 text-base group shadow-lg font-extrabold"
              >
                <Phone className="mr-2 h-4 w-4" />
                Call for Free Site Visit
              </Button>
            </a>

            <a
              href="https://wa.me/918369233566?text=Hello%20Fine%20Glaze%2C%20I%20need%20a%20facade%20quotation%20and%20site%20visit."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-base group border-white bg-white/15 text-white hover:bg-white hover:text-slate-900 hover:border-white backdrop-blur-sm font-semibold transition-all duration-200 shadow-md"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp Quote
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>

            <Link to="/portfolio" className="hidden sm:inline-flex">
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-base group border-white/60 bg-black/20 text-white hover:bg-white hover:text-slate-900 hover:border-white backdrop-blur-sm font-semibold transition-all duration-200 shadow-md"
              >
                <Play className="mr-2 h-4 w-4" />
                View Projects
              </Button>
            </Link>
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
