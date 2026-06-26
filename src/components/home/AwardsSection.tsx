import { Award, Star, Shield, Trophy } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

export const AwardsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="py-24 relative overflow-hidden bg-stone-900"
    >
      <div className="container mx-auto px-4 md:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center max-w-5xl mx-auto">

          {/* Left – Award image + badge */}
          <div
            className={cn(
              "flex flex-col items-center gap-6 slide-up",
              isVisible && "visible"
            )}
          >
            <div className="relative">
              <div className="relative w-56 md:w-64 overflow-hidden border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <img
                  src="/Awards.webp"
                  alt="Best Performance Vendor Award 2024 – Embassy REIT"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  width="256"
                  height="256"
                />
              </div>
            </div>

            {/* Trophy badge */}
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-amber-500/20 border border-amber-500/30 text-amber-400">
              <Trophy size={18} />
              <span className="font-semibold text-sm">Verified Industry Award</span>
            </div>
          </div>

          {/* Right – Content */}
          <div
            className={cn(
              "space-y-6 slide-up",
              isVisible && "visible"
            )}
            style={{ transitionDelay: "0.15s" }}
          >
            {/* Stars */}
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={20} className="fill-amber-500 text-amber-500" />
              ))}
            </div>

            <div className="space-y-2">
              <span className="text-amber-400 font-bold uppercase tracking-[0.3em] text-xs">
                Industry Recognition
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                <span className="text-gradient-gold">Best Performance</span>
                <br />
                <span className="text-white">Vendor – 2024</span>
              </h2>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 text-white/80 text-sm font-medium border border-white/10">
                <Award size={16} className="text-amber-400" />
                Embassy REIT Ltd.
              </div>
            </div>

            <p className="text-white/70 leading-relaxed">
              Recognised for the flawless facade glass replacement of Embassy 247,
              Vikhroli — an award for exceptional craftsmanship, zero safety incidents,
              and on-time delivery under the most demanding project timelines.
            </p>

            {/* Mini stats */}
            <div className="grid grid-cols-3 gap-px bg-white/10">
              {[
                { icon: Shield, label: "Zero Safety Incidents", val: "0" },
                { icon: Trophy, label: "On-Time Delivery", val: "100%" },
                { icon: Award, label: "Quality Score", val: "A+" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="text-center p-4 bg-stone-900"
                >
                  <item.icon size={18} className="text-amber-400 mx-auto mb-1" />
                  <p className="text-white font-bold text-lg">{item.val}</p>
                  <p className="text-white/50 text-xs leading-tight mt-0.5">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
