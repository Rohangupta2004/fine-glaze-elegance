import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp } from "@/hooks/useMotion";
import { useSiteMedia } from "@/hooks/useSiteMedia";
import { QuoteModal } from "@/components/QuoteModal";
import { company, telHref } from "@/data/company";

/** Real project photo (no stock footage). Admins can still override via site media. */
export const HERO_POSTER = "/projects/naman-chambers-48-1.webp";

export const HeroSection = () => {
  const { getMedia } = useSiteMedia();
  const poster = getMedia("home_hero_poster", HERO_POSTER);
  // Only play a video when the team has uploaded their own footage.
  const videoSrc = getMedia("home_hero_video", "");
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-stone-950">
        <img
          src={poster}
          alt="Glazed office towers at Naman Chambers, Bandra Kurla Complex, Mumbai — a Fine Glaze project site"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          loading="eager"
          {...{ fetchpriority: "high" }}
          width={1360}
          height={765}
        />

        {videoSrc && (
          <video
            key={videoSrc}
            className="absolute inset-0 w-full h-full object-cover opacity-50"
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            poster={poster}
            src={videoSrc}
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-950/70 to-stone-950/95" />

        <div className="relative z-10 container mx-auto px-4 pt-24 pb-16 text-center">
          <motion.div
            className="max-w-4xl mx-auto space-y-6"
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-900/60 backdrop-blur-md text-xs sm:text-sm font-semibold text-amber-300 border border-amber-500/40 shadow-lg"
            >
              <Award className="w-4 h-4 text-amber-400 shrink-0" />
              <span>
                {company.award.title} — {company.award.by}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight drop-shadow-md"
            >
              Facade &amp; Glazing Contractor <br className="hidden sm:block" />
              in <span className="text-amber-400">Pune &amp; Mumbai</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-base sm:text-xl text-stone-200 max-w-2xl mx-auto leading-relaxed drop-shadow"
            >
              Curtain walls, structural glazing, aluminium windows &amp; doors, ACP cladding, louvers and
              glass railings — drawn, engineered and fabricated in-house, installed by our own site team,
              and maintained after handover.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2"
            >
              <Button
                size="lg"
                onClick={() => setIsQuoteOpen(true)}
                className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold tracking-wide text-base px-8 py-6 rounded-xl shadow-xl shadow-amber-950/40 transition-colors"
              >
                Request a Site Survey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <a href={telHref} className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto px-8 py-6 text-base font-bold border-white/40 bg-white/10 text-white hover:bg-white hover:text-stone-900 backdrop-blur-md transition-colors"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call {company.phone.mobileDisplay}
                </Button>
              </a>
            </motion.div>

            <motion.ul
              variants={fadeUp}
              className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 pt-2 text-stone-300 text-xs sm:text-sm font-medium"
            >
              <li>
                <strong className="text-white">{company.stats.sqmDelivered} sqm</strong> delivered
              </li>
              <li aria-hidden="true" className="text-stone-500">·</li>
              <li>
                <strong className="text-white">{company.stats.projectRecords}</strong> documented projects
              </li>
              <li aria-hidden="true" className="text-stone-500">·</li>
              <li>
                Own fabrication unit, <strong className="text-white">{company.fabricationUnit.location}</strong>
              </li>
            </motion.ul>

            <motion.p variants={fadeUp} className="text-stone-400 text-xs sm:text-sm">
              Work for Embassy REIT · L&amp;T Construction · Jindal Stainless · Nirmaann ·{" "}
              <Link to="/portfolio" className="text-amber-300 underline underline-offset-4 hover:text-amber-200">
                see the projects
              </Link>
            </motion.p>
          </motion.div>
        </div>

        <p className="absolute bottom-3 left-4 z-10 text-[10px] sm:text-xs text-white/50">
          Pictured: Naman Chambers, BKC Mumbai — glazing &amp; ACP scope
        </p>
      </section>

      <QuoteModal open={isQuoteOpen} onOpenChange={setIsQuoteOpen} />
    </>
  );
};
