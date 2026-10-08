import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Award, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp } from "@/hooks/useMotion";
import { useSiteMedia } from "@/hooks/useSiteMedia";
import { QuoteModal } from "@/components/QuoteModal";

export const HeroSection = () => {
  const { getMedia } = useSiteMedia();
  const poster = getMedia("home_hero_poster", "/Unitized.webp");
  const videoSrc = getMedia(
    "home_hero_video",
    "https://www.pexels.com/download/video/26737896/"
  );
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-stone-950">
        {/* Fallback poster image */}
        <img
          src={poster}
          alt="Fine Glaze high-rise commercial curtain wall installation in Mumbai"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          loading="eager"
        />

        {/* Hero Background Video */}
        <video
          key={videoSrc}
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          autoPlay
          muted
          loop
          playsInline
          poster={poster}
          src={videoSrc}
        />

        {/* Dark Contrast Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-950/70 to-stone-950/95" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 pt-24 pb-16 text-center">
          <motion.div
            className="max-w-4xl mx-auto space-y-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            {/* Verified Award Badge */}
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-transparent backdrop-blur-sm text-xs sm:text-sm font-semibold text-amber-300 border border-amber-500/40 shadow-lg"
            >
              <Award className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Embassy REIT Best Performance Vendor Award 2024</span>
            </motion.div>

            {/* Clear Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight drop-shadow-md"
            >
              Facade &amp; Glazing Contractor <br className="hidden sm:block" />
              <span className="text-amber-400">Pan India</span>
            </motion.h1>

            {/* Clear Subhead */}
            <motion.p
              variants={fadeUp}
              className="text-base sm:text-xl text-stone-200 max-w-2xl mx-auto leading-relaxed max-w-prose drop-shadow"
            >
              Curtain walls, structural glazing, ACP cladding and glass railings for commercial buildings, IT parks, and high-rise developments.
            </motion.p>



            {/* Clear CTA Buttons */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <Button
                size="lg"
                onClick={() => setIsQuoteOpen(true)}
                className="w-full sm:w-auto bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 hover:from-amber-400 hover:to-amber-600 text-white font-bold tracking-wide text-base px-8 py-6 rounded-xl shadow-xl shadow-amber-950/40 hover:shadow-amber-500/30 border border-amber-400/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                Get a Project Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Link to="/portfolio" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto px-8 py-6 text-base font-bold border-white/40 bg-white/10 text-white hover:bg-white hover:text-stone-900 backdrop-blur-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                >
                  <Play className="mr-2 h-4 w-4 fill-current" />
                  View Completed Projects
                </Button>
              </Link>
            </motion.div>

            {/* Verified Project Proof */}
            <motion.div
              variants={fadeUp}
              className="pt-2 text-stone-400 text-xs sm:text-sm font-medium"
            >
              <p className="tracking-wide">
                Key Projects: <strong className="text-stone-200 font-semibold">Embassy 247 (Vikhroli)</strong> · <strong className="text-stone-200 font-semibold">Pune Airport Terminal</strong> · <strong className="text-stone-200 font-semibold">LTIMindtree Mensa Campus</strong>
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block opacity-60">
          <div className="w-5 h-9 rounded-full border-2 border-white/40 flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-amber-400 animate-pulse" />
          </div>
        </div>
      </section>

      {/* QUOTE MODAL */}
      <QuoteModal open={isQuoteOpen} onOpenChange={setIsQuoteOpen} />
    </>
  );
};
