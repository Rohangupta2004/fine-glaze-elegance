import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Award } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp } from "@/hooks/useMotion";
import { useSiteMedia } from "@/hooks/useSiteMedia";
import { QuoteModal } from "@/components/QuoteModal";
import { company } from "@/data/company";

/** First frame of the hero film — shown instantly, and as the LCP image. */
export const HERO_POSTER = "/hero/fine-glaze-facade-poster.webp";
const HERO_VIDEO = "/hero/fine-glaze-facade.mp4";
const HERO_VIDEO_SD = "/hero/fine-glaze-facade-sd.mp4";

export const HeroSection = () => {
  const { getMedia } = useSiteMedia();
  const poster = getMedia("home_hero_poster", HERO_POSTER);
  const adminVideo = getMedia("home_hero_video", "");
  const [videoSrc, setVideoSrc] = useState<string>("");
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  // Pick the video on the client: lighter file for phones, none for data-saver
  // or reduced-motion visitors (they keep the poster frame).
  useEffect(() => {
    if (adminVideo) {
      setVideoSrc(adminVideo);
      return;
    }
    const conn = (navigator as unknown as { connection?: { saveData?: boolean } }).connection;
    if (conn?.saveData || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setVideoSrc(window.matchMedia("(max-width: 767px)").matches ? HERO_VIDEO_SD : HERO_VIDEO);
  }, [adminVideo]);

  return (
    <>
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-stone-950">
        {/* Poster frame */}
        <img
          src={poster}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          {...{ fetchpriority: "high" }}
        />

        {/* Hero film: plays once, then rests on the finished glass tower */}
        {videoSrc && (
          <video
            key={videoSrc}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            playsInline
            preload="auto"
            poster={poster}
            src={videoSrc}
            aria-hidden="true"
          />
        )}

        {/* Dark Contrast Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/70 via-stone-950/50 to-stone-950/90" />

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
            {/* Award badge */}
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-900/60 backdrop-blur-md text-xs sm:text-sm font-semibold text-amber-300 border border-amber-500/40 shadow-lg"
            >
              <Award className="w-4 h-4 text-amber-400 shrink-0" />
              <span>
                {company.award.by} · {company.award.title}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight drop-shadow-md"
            >
              Complete Facade Solutions &amp; <br className="hidden sm:block" />
              Fenestration Expert <span className="text-amber-400">Pan India</span>
            </motion.h1>

            {/* Subhead */}
            <motion.p
              variants={fadeUp}
              className="text-base sm:text-xl text-stone-200 max-w-2xl mx-auto leading-relaxed max-w-prose drop-shadow"
            >
              Turnkey architectural envelope engineering — unitized curtain walls, structural glazing, aluminium doors &amp; windows, ACP cladding, and glass railings for commercial landmarks, IT parks, and high-rise developments.
            </motion.p>

            {/* CTA Buttons */}
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

            {/* Project proof */}
            <motion.div variants={fadeUp} className="pt-2 text-stone-400 text-xs sm:text-sm font-medium">
              <p className="tracking-wide">
                Key Landmarks: <strong className="text-stone-200 font-semibold">Embassy 247</strong> · <strong className="text-stone-200 font-semibold">Pune Airport Terminal</strong> · <strong className="text-stone-200 font-semibold">Nanavati Max Hospital (L&amp;T)</strong> · <strong className="text-stone-200 font-semibold">LTIMindtree Mensa Campus</strong> · <strong className="text-stone-200 font-semibold">Salsette-27</strong> · <strong className="text-stone-200 font-semibold">Naman Chambers BKC</strong>
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Honest label: the film is an illustration, not a project record */}
        <p className="absolute bottom-3 left-4 z-10 text-[10px] sm:text-xs text-white/50">
          Illustration · AI-generated video
        </p>

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
