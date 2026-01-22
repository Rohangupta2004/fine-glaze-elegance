import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, X } from "lucide-react";

export const HeroSection = () => {
  const [openVideo, setOpenVideo] = useState(false);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
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

        <div className="absolute inset-0 hero-overlay" />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card text-sm text-white/90 border border-white/10">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
              Pune's Trusted Facade Experts
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Building <span className="text-gradient">Iconic Facades</span>
              <br className="hidden md:block" />
              That Define Skylines
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Premium glass & aluminium facade fabrication, installation, and maintenance.
              Award-winning quality delivered on time.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
              <Link to="/contact">
                <Button size="lg" className="btn-glossy px-8 py-6">
                  Get Free Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>

              {/* OPEN VIDEO POPUP */}
              <Button
                size="lg"
                variant="outline"
                onClick={() => setOpenVideo(true)}
                className="border-white/30 text-white hover:bg-white/10 px-8 py-6"
              >
                <Play className="mr-2 h-4 w-4" />
                Watch FineGlaze Video
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO MODAL */}
      {openVideo && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4">
          <div className="relative w-full max-w-4xl aspect-video rounded-xl overflow-hidden bg-black">
            
            {/* Close Button */}
            <button
              onClick={() => setOpenVideo(false)}
              className="absolute top-3 right-3 z-10 text-white hover:text-red-400"
            >
              <X size={28} />
            </button>

            {/* Weet Video */}
            <iframe
              src="https://app.weet.co/play/c12a8df1/create-video-tutorials-with-weet"
              title="FineGlaze Video"
              className="w-full h-full"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
};
