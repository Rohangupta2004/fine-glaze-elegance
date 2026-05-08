import { Award, Star, Shield, Clock3 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const trustSignals = [
  { label: "Quality control protocol", value: "ISO-aligned", icon: Shield },
  { label: "Avg. execution cycle", value: "18 weeks", icon: Clock3 },
];

export const AwardsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="bg-muted/45 py-24" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={cn("grid gap-8 lg:grid-cols-[0.85fr_1.15fr] slide-up", isVisible && "visible")}>
          <div className="rounded-2xl border border-primary/15 bg-card p-6 shadow-sm md:p-8">
            <div className="mx-auto w-48 rounded-2xl border border-primary/10 bg-white p-4 shadow-lg">
              <img
                src="/Awards.webp"
                alt="Best Performance Vendor Award 2024 – Embassy REIT"
                className="h-auto w-full object-contain"
              />
            </div>
            <div className="mt-6 flex justify-center gap-1.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={20} className="fill-amber-500 text-amber-500" />
              ))}
            </div>
          </div>

          <div className="space-y-6 rounded-2xl border border-border bg-card p-7 md:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">Recognition & reliability</p>
            <h2 className="text-3xl font-bold leading-tight text-foreground md:text-4xl">Best Performance Vendor — 2024</h2>
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-primary">
              <Award size={18} />
              <span className="font-semibold">Embassy REIT Ltd.</span>
            </div>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Recognized for seamless facade glass replacement at Embassy 247, Vikhroli — delivered with strict safety compliance, rapid turnaround, and precision installation standards.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {trustSignals.map((item) => (
                <div key={item.label} className="rounded-xl border border-border bg-background p-4">
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary">
                    <item.icon size={18} />
                  </div>
                  <p className="text-lg font-semibold text-foreground">{item.value}</p>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
