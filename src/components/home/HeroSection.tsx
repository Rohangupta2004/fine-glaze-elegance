import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ClipboardCheck, MapPin, Plane, Play, Trophy } from "lucide-react";

const heroHighlights = [
  "Structural glazing for airport terminals and high-footfall buildings",
  "ACP cladding, curtain wall, aluminium facade and skylight systems",
  "Active project focus in Pune and Mumbai commercial corridors",
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <img
        src="https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1920&q=80"
        alt="Modern airport facade architecture"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 hero-overlay" />
      <div className="absolute -top-28 right-8 w-72 h-72 rounded-full bg-amber-500/20 blur-3xl" />
      <div className="absolute -bottom-16 left-4 w-72 h-72 rounded-full bg-orange-800/30 blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 pt-20 text-center">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/45 backdrop-blur-md text-sm text-amber-100 border border-amber-500/30 animate-fade-in">
            <Trophy size={14} className="text-amber-300" />
            2024 Embassy Award Winner · FineGlaze Facade Specialists
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            Structural Glazing & ACP Cladding Experts
            <br className="hidden md:block" />
            <span className="text-gradient">for Pune and Mumbai Landmark Projects</span>
          </h1>

          <p
            className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto animate-fade-in-up leading-relaxed"
            style={{ animationDelay: "0.2s" }}
          >
            FineGlaze helps architects, consultants, and developers deliver high-performance building envelopes with engineering-led execution,
            proven site coordination, and quality control built for demanding commercial and infrastructure schedules.
          </p>

          <div className="max-w-3xl mx-auto glass-card-dark metallic-border p-5 md:p-6 text-left animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
            <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-4 items-center text-amber-100 pb-4 border-b border-amber-400/20">
              <div className="flex items-center gap-2">
                <Plane size={18} className="text-amber-300" />
                <span className="font-semibold">Featured Infrastructure Project</span>
              </div>
              <div className="hidden sm:block w-px h-5 bg-amber-500/30 justify-self-center" />
              <div className="flex items-center gap-2 text-sm text-amber-100/90 sm:justify-end">
                <MapPin size={16} className="text-amber-300" />
                Pune International Airport Zone
              </div>
            </div>

            <ul className="mt-4 grid gap-2">
              {heroHighlights.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-amber-50/90">
                  <ClipboardCheck size={16} className="mt-0.5 text-amber-300 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Link to="/contact">
              <Button size="lg" className="btn-glossy text-black border-0 px-8 py-6 text-base group shadow-lg font-semibold">
                Request Project Consultation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>

            <Link to="/portfolio">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-amber-300/40 text-amber-50 hover:bg-amber-400/10 hover:text-white px-8 py-6 text-base group"
              >
                <Play className="mr-2 h-4 w-4" />
                View Facade Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-amber-300/40 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 rounded-full bg-amber-400/80 animate-pulse" />
        </div>
      </div>
    </section>
  );
};
