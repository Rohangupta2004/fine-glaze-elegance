import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, ShieldCheck, TimerReset, Trophy } from "lucide-react";

const quickStats = [
  { label: "Completed projects", value: "250+", icon: Trophy },
  { label: "On-time delivery", value: "97%", icon: TimerReset },
  { label: "Safety compliance", value: "100%", icon: ShieldCheck },
];

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-24 md:py-28 lg:py-32">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="https://www.pexels.com/download/video/26737896/" type="video/mp4" />
      </video>

      <div className="hero-overlay absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/55 to-black/40" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-5 py-2.5 text-sm text-white/80 backdrop-blur-md">
              <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
              Enterprise Facade Partner for Landmark Projects
            </div>

            <div className="space-y-6">
              <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Premium facade systems for
                <span className="text-gradient"> high-performance buildings</span>
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
                Design-led execution across structural glazing, curtain wall systems, and facade lifecycle services for corporate, residential, and mixed-use developments.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button asChild size="lg" className="btn-glossy border-0 px-8 py-6 text-base text-white">
                <Link to="/contact">
                  Book Design Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/35 bg-white/5 px-8 py-6 text-base text-white hover:bg-white/10 hover:text-white"
              >
                <Link to="/portfolio">
                  <Play className="mr-2 h-4 w-4" />
                  Explore Case Studies
                </Link>
              </Button>
            </div>
          </div>

          <div className="glass-card-dark p-6 md:p-7">
            <div className="space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/65">Performance Snapshot</p>
              <div className="space-y-4">
                {quickStats.map((item) => (
                  <div key={item.label} className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/30 text-primary-foreground">
                      <item.icon size={18} />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white">{item.value}</p>
                      <p className="text-sm text-white/70">{item.label}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="border-t border-white/10 pt-4 text-sm leading-relaxed text-white/75">
                Trusted by leading developers and EPC contractors for precision detailing, rapid coordination, and reliable delivery at scale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
