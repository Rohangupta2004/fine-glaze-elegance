import React from "react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center text-white">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0">
        <img
          src="/hero.jpg"
          alt="FineGlaze Architectural Glazing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 lg:px-16">
        <div className="max-w-4xl space-y-8">
          <p className="text-sm tracking-[0.3em] uppercase opacity-80">
            Defining Skylines Since 1985
          </p>

          <h1 className="text-5xl lg:text-7xl font-light leading-tight">
            Precision Architectural Glazing
          </h1>

          <div className="flex gap-4 pt-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white border-none">
              View Projects
            </Button>
            <Button size="lg" variant="outline" className="text-slate-900 border-white bg-white/90 hover:bg-white">
              Watch Reel
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
