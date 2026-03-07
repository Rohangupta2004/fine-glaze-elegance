import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, PhoneCall, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = ["Design-to-install delivery", "350+ completed facades", "ISO-led quality process"];

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 pt-40 pb-24 text-white md:pt-48 md:pb-32">
      <div className="absolute inset-0">
        <img
          src="/ltimindtree-mensa-campus-mahape-navi-mumbai-1 (1).webp"
          alt="Modern facade project"
          className="h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.25),transparent_45%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-950/80 to-slate-950" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em]">
              <ShieldCheck className="h-4 w-4 text-amber-300" />
              Trusted Facade Engineering Partner
            </div>

            <div className="space-y-5">
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
                Make Your Next Building
                <span className="text-gradient"> Impossible to Ignore</span>
              </h1>
              <p className="max-w-2xl text-base text-white/80 sm:text-lg">
                We design, fabricate, and install premium facade systems for landmark buildings — combining speed, safety,
                and precision at every stage.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="btn-glossy border-0 px-8 py-6 text-base text-white">
                <Link to="/contact">
                  Book Design Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/5 px-8 py-6 text-base text-white hover:bg-white/15">
                <a href="tel:+918369233566">
                  <PhoneCall className="mr-2 h-4 w-4" />
                  Talk to an Expert
                </a>
              </Button>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-white/90">
                  <CheckCircle2 className="h-4 w-4 text-amber-300" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card-dark rounded-2xl p-7 md:p-8">
            <p className="text-xs uppercase tracking-[0.18em] text-white/70">Performance Snapshot</p>
            <div className="mt-6 grid grid-cols-2 gap-5">
              {[
                ["18+", "Years in facade delivery"],
                ["3.2M+", "Sq. ft. installed"],
                ["95%", "On-time completion"],
                ["24/7", "Project support"],
              ].map(([value, label]) => (
                <div key={label} className="space-y-1">
                  <p className="text-3xl font-semibold text-amber-300">{value}</p>
                  <p className="text-sm text-white/70">{label}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-xl border border-white/15 bg-black/25 p-4 text-sm text-white/80">
              "Fine Glaze helped us close a complex facade replacement with zero downtime and excellent quality control."
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
