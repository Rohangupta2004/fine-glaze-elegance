import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useSiteMedia } from "@/hooks/useSiteMedia";

/**
 * Home Hero — Architectural grid layout.
 *
 * NO full-bleed background image. Clean, white-space-heavy editorial design.
 *
 * Desktop:  2-column — large featured project image left + text & secondary images right
 * Mobile:   Stacked — headline, featured image, stats, secondary images
 */
export const HeroSection = () => {
  const { getMedia } = useSiteMedia();

  const heroImg = getMedia("home_hero_poster", "/Unitized.webp");
  const img2 = getMedia("home_hero_img2", "/Glazing.webp");
  const img3 = getMedia("home_hero_img3", "/Embassy.webp");

  return (
    <section className="relative bg-stone-950 pt-28 md:pt-32 pb-0 overflow-hidden">
      <div className="container mx-auto px-4 md:px-10 lg:px-16">
        {/* ── Top: Headline + sub ── */}
        <div className="mb-10 md:mb-14 max-w-4xl">
          <p className="text-amber-400 text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase mb-4 animate-fade-in">
            Facade Contractors · Pune · Mumbai
          </p>
          <h1
            className="text-white font-extrabold leading-[0.95] tracking-tight animate-fade-in-up"
            style={{
              fontSize: "clamp(2.4rem, 5.5vw, 5rem)",
              animationDelay: "0.05s",
            }}
          >
            We Engineer{" "}
            <span className="text-gradient-gold">Facades</span>
            <br className="hidden sm:block" />
            {" "}That Define Buildings.
          </h1>
          <p
            className="mt-4 text-white/50 text-sm md:text-base max-w-lg leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.15s" }}
          >
            Premium glass &amp; aluminium facade systems — curtain walls,
            structural glazing, ACP cladding — engineered and installed by one
            expert team.
          </p>

          {/* CTA row */}
          <div
            className="mt-6 flex items-center gap-6 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-stone-950 font-semibold text-sm px-6 py-3 transition-colors"
            >
              Get Free Quote
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/portfolio"
              className="text-white/60 font-medium text-sm hover:text-white transition-colors"
            >
              View Projects →
            </Link>
          </div>
        </div>

        {/* ── Image Grid ── */}
        <div
          className="grid grid-cols-4 md:grid-cols-12 gap-1 animate-fade-in-up"
          style={{ animationDelay: "0.25s" }}
        >
          {/* Main image — spans 8/12 on desktop, full on mobile */}
          <div className="col-span-4 md:col-span-8 relative aspect-[16/9] md:aspect-[16/10] overflow-hidden group">
            <img
              src={heroImg}
              alt="Fine Glaze — curtain wall project"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4">
              <span className="text-[10px] font-bold text-white/70 uppercase tracking-widest">
                Featured Project
              </span>
              <p className="text-white font-semibold text-sm mt-0.5">
                Curtain Wall Systems — Commercial Tower
              </p>
            </div>
          </div>

          {/* Right column — 2 stacked images */}
          <div className="col-span-4 md:col-span-4 grid grid-cols-2 md:grid-cols-1 gap-1">
            <div className="relative aspect-[4/3] md:aspect-auto md:h-1/2 overflow-hidden group">
              <img
                src={img2}
                alt="Structural glazing facade"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/50 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 text-[10px] font-bold text-white/80 uppercase tracking-wider">
                Structural Glazing
              </span>
            </div>
            <div className="relative aspect-[4/3] md:aspect-auto md:h-1/2 overflow-hidden group">
              <img
                src={img3}
                alt="Embassy REIT project"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/50 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 text-[10px] font-bold text-white/80 uppercase tracking-wider">
                Embassy REIT
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar — sits at the very bottom, edge-to-edge */}
      <div className="mt-0 bg-stone-900 border-t border-stone-800">
        <div className="container mx-auto px-4 md:px-10 lg:px-16">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-stone-800">
            {[
              { val: "10+", label: "Landmark Projects" },
              { val: "5+", label: "Years Experience" },
              { val: "0", label: "Safety Incidents" },
              { val: "5.0 ★", label: "Google Rating" },
            ].map((s) => (
              <div key={s.label} className="py-5 md:py-6 text-center">
                <p className="text-lg md:text-xl font-bold text-white">
                  {s.val}
                </p>
                <p className="text-[10px] text-stone-500 uppercase tracking-[0.2em] mt-0.5">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
