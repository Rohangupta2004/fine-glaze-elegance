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
  /** 4–6 feature highlights overlaid on the hero image */
  features: HeroFeature[];
  primaryCta?: { label: string; to: string };
  secondaryCta?: { label: string; to: string };
}

/**
 * Full-bleed service hero: background image runs behind the transparent navbar,
 * with a slate overlay (current color scheme) and glassmorphic feature icons
 * overlaid directly on the image — matching the marketing-banner look.
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
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden text-white">
      {/* Background image — bleeds to the top edge, behind the navbar */}
      <img
        src={image}
        alt={`${titleLead}${titleAccent}${titleTail}`}
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      {/* Slate overlays keep the existing color scheme + text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/85 to-slate-900/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/30 to-transparent" />

      <div className="relative z-10 container mx-auto px-4 max-w-6xl pt-36 pb-12">
        {/* Headline */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-[0.15em] mb-5">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            Fine Glaze
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05] mb-5">
            {titleLead}
            <span className="text-gradient-gold">{titleAccent}</span>
            {titleTail}
          </h1>
          <p className="text-lg text-white/75 mb-8 max-w-xl">{subtitle}</p>
          <div className="flex flex-wrap gap-4">
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
        </div>

        {/* Feature icons overlaid on the hero image */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-8 border-t border-white/15 pt-8">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className="group flex flex-col gap-3">
                <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-200">
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-sm uppercase tracking-wide mb-1 leading-tight">
                    {f.title}
                  </h3>
                  <p className="text-xs text-white/65 leading-snug">
                    {f.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
