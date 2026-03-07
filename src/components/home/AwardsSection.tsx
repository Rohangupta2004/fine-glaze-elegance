import { Award, ShieldCheck } from "lucide-react";

const phases = [
  { step: "01", title: "Consult", detail: "Site study, load review, and feasibility mapping." },
  { step: "02", title: "Engineer", detail: "Design intent to coordinated fabrication drawings." },
  { step: "03", title: "Execute", detail: "Controlled fabrication, dispatch, and staged installation." },
  { step: "04", title: "Support", detail: "Post-handover audits, AMC, and rapid-response teams." },
];

export const AwardsSection = () => {
  return (
    <section className="bg-slate-950 py-20 text-white md:py-24">
      <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">Execution Framework</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">A repeatable process built for predictable outcomes</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {phases.map((phase) => (
              <article key={phase.step} className="rounded-xl border border-white/15 bg-white/5 p-5">
                <p className="text-xs text-white/70">Phase {phase.step}</p>
                <h3 className="mt-2 text-xl font-semibold text-amber-300">{phase.title}</h3>
                <p className="mt-2 text-sm text-white/75">{phase.detail}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="space-y-6 rounded-2xl border border-white/15 bg-white/5 p-6 md:p-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-amber-300/10 px-3 py-1.5 text-xs uppercase tracking-[0.12em] text-amber-200">
            <Award className="h-4 w-4" />
            Recognition
          </div>
          <img src="/Awards.webp" alt="Best Performance Vendor Award 2024" className="w-40 rounded-xl bg-white p-2" />
          <h3 className="text-2xl font-semibold">Best Performance Vendor 2024</h3>
          <p className="text-sm text-white/75">Recognized by Embassy REIT for high-precision facade glass replacement at Embassy 247 with strong safety and execution benchmarks.</p>
          <div className="rounded-xl border border-white/15 bg-black/25 p-4 text-sm text-white/80">
            <div className="mb-2 flex items-center gap-2 text-amber-200">
              <ShieldCheck className="h-4 w-4" />
              Quality Promise
            </div>
            Dedicated quality checkpoints at design, fabrication, and installation stages.
          </div>
        </div>
      </div>
    </section>
  );
};
