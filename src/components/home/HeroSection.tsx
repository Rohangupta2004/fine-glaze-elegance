import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp } from "@/hooks/useMotion";
import { useSiteMedia } from "@/hooks/useSiteMedia";

export const HeroSection = () => {
  const { getMedia } = useSiteMedia();
  const poster = getMedia("home_hero_poster", "/Unitized.webp");
  const videoSrc = getMedia(
    "home_hero_video",
    "https://www.pexels.com/download/video/26737896/"
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Fallback image (loads first, video covers it once ready) */}
      <img
        src={poster}
        alt="Fine Glaze facade installation"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />

      {/* Hero Background Video */}
      <video
        key={videoSrc}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
        src={videoSrc}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          className="max-w-4xl mx-auto space-y-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >

          {/* Badge */}
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/40 backdrop-blur-md text-sm text-white/75 border border-white/10"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
            India's Trusted Facade Experts
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
          >
            Crafting{" "}
            <span className="text-gradient-gold">Iconic Facades</span>
            <br className="hidden md:block" />
            That{" "}
            <span className="text-gradient-light">Define Skylines</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
          >
            Premium glass & aluminium facade fabrication, installation, and
            maintenance — delivered with{" "}
            <span className="text-amber-400 font-medium">award-winning precision</span>{" "}
            and zero compromise on quality.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
          >
            <Link to="/contact">
              <Button
                size="lg"
                className="btn-glossy text-white border-0 px-8 py-6 text-base group shadow-lg"
              >
                Get Free Quote
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>

            <Link to="/portfolio">
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-base group border-white bg-white/15 text-white hover:bg-white hover:text-slate-900 hover:border-white backdrop-blur-sm font-semibold transition-all duration-200 shadow-md"
              >
                <Play className="mr-2 h-4 w-4" />
                View Projects
              </Button>
            </Link>
          </motion.div>

          {/* Trust signal */}
          <motion.div
            variants={fadeUp}
            className="flex items-center justify-center gap-1.5"
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={13} className="text-amber-400 fill-amber-400" />
              ))}
            </div>
            <span className="text-white/50 text-sm font-medium ml-1">
              5.0 Google · Embassy REIT Vendor · 10+ Landmark Projects
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 rounded-full bg-amber-500/70 animate-pulse" />
        </div>
      </div>
    </section>
  );
};
