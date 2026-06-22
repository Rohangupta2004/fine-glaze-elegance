import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

export interface HeroFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ServiceHeroProps {
  image: string;
  /** Headline split so the middle part gets the gold gradient */
  titleLead: string;
  titleAccent: string;
  titleTail?: string;
  subtitle: string;
  /** 4–6 feature highlights shown beside the image */
  features: HeroFeature[];
  primaryCta?: { label: string; to: string };
  secondaryCta?: { label: string; to: string };
}

/**
 * Split service hero (banner layout):
 *  - Left: dark slate text panel with headline, CTAs and feature icons
 *  - Right: the project image, clearly visible, bleeding to the top edge
 *    behind the transparent navbar.
 * Keeps the existing slate/amber color scheme.
 */
export const ServiceHero = ({
  image,
  titleLead,
  titleAccent,
  titleTail = "",
  subtitle,
  features,
  primaryCta = { label: "Get Quote", to: "/contact" },
  secondaryCta = { label: "View Projects", to: "/portfolio" },
}: ServiceHeroProps) => {
  return (
    <section className="relative grid lg:grid-cols-2 min-h-screen">
      {/* RIGHT — image (first on mobile so it shows under the navbar) */}
      <div className="relative order-1 lg:order-2 min-h-[42vh] lg:min-h-screen">
        <img
          src={image}
          alt={`${titleLead}${titleAccent}${titleTail}`}
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        {/* Light top gradient just for navbar legibility */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-slate-900/50 to-transparent" />
        {/* Seam that blends the image into the dark panel on large screens */}
        <div className="hidden lg:block absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-900 to-transparent" />
      </div>

      {/* LEFT — dark text panel */}
      <div className="relative order-2 lg:order-1 bg-gradient-to-br from-slate-900 to-slate-800 text-white flex items-center">
        <div className="w-full px-6 md:px-12 lg:px-14 xl:px-20 pt-12 lg:pt-32 pb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-[0.15em] mb-5">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            Fine Glaze
          </div>
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-[1.05] mb-5">
            {titleLead}
            <span className="text-gradient-gold">{titleAccent}</span>
            {titleTail}
          </h1>
          <p className="text-lg text-white/75 mb-8 max-w-xl">{subtitle}</p>
          <div className="flex flex-wrap gap-4 mb-10">
            <Link to={primaryCta.to}>
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                {primaryCta.label}
              </Button>
            </Link>
            <Link to={secondaryCta.to}>
              <Button
                size="lg"
                variant="outline"
                className="border-white/40 text-white bg-white/5 hover:bg-white hover:text-slate-900"
              >
                {secondaryCta.label}
              </Button>
            </Link>
          </div>

          {/* Feature icons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-5 gap-y-6 border-t border-white/15 pt-7">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} className="group flex flex-col gap-2.5">
                  <div className="w-11 h-11 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-200">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xs uppercase tracking-wide mb-0.5 leading-tight">
                      {f.title}
                    </h3>
                    <p className="text-xs text-white/60 leading-snug">
                      {f.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
