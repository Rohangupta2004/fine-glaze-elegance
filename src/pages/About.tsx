import { Layout } from "@/components/layout/Layout";

const pillars = [
  {
    title: "Engineering-led design",
    description: "Every facade package starts with practical detailing, shop drawing discipline, and performance checks.",
  },
  {
    title: "Factory-controlled quality",
    description: "Profiles, panels, and glazing are fabricated with process controls that reduce rework at site.",
  },
  {
    title: "Site-safe execution",
    description: "Installation plans prioritize safety, sequencing, and coordination with civil and MEP teams.",
  },
];

export default function About() {
  return (
    <Layout>
      <section className="bg-slate-950 py-20 text-white">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-slate-300">About Fine Glaze</p>
          <h1 className="text-4xl font-bold md:text-5xl">A complete rebuild of how we present our company online.</h1>
          <p className="mt-6 text-slate-300">
            We have remade our web experience to reflect who we are today: a trusted facade delivery partner
            for architects, developers, and contractors.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto grid gap-6 px-4 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="rounded-xl border p-6">
              <h2 className="text-xl font-semibold text-slate-900">{pillar.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{pillar.description}</p>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
