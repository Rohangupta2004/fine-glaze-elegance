import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { projectsData } from "@/data/projects";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";

type Project = (typeof projectsData)[keyof typeof projectsData] & {
  slug: string;
  buildingType?: string;
  area?: string;
  height?: string;
  system?: string;
  glass?: string;
  aluminium?: string;
  duration?: string;
  waterproofing?: string;
};

const projects: Project[] = Object.entries(projectsData).map(([slug, p]) => ({
  slug,
  ...p,
}));

const tabs = [
  { id: "all", label: "All" },
  { id: "corporate", label: "Corporate" },
  { id: "residential", label: "Residential" },
  { id: "award", label: "Awards" },
];

const Portfolio = () => {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? projects
      : projects.filter((p) => p.category === active || (active === "award" && p.isAwardWinner));

  return (
    <Layout>
      {/* INTRO */}
      <section className="pt-28 pb-14">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-end">
          <h1 className="text-6xl font-extrabold leading-tight">
            Built at
            <br />
            Landmark Scale
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl">
            From airports to corporate campuses, our portfolio reflects precision execution, safety-first methodology,
            and architectural clarity.
          </p>
        </div>
      </section>

      {/* TABS */}
      <section className="border-y">
        <div className="container mx-auto px-4 flex gap-8 py-4">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`relative text-sm font-medium tracking-wide ${
                active === t.id ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t.label}
              {active === t.id && <span className="absolute -bottom-3 left-0 w-full h-[2px] bg-primary" />}
            </button>
          ))}
        </div>
      </section>

      {/* SEO + TRUST SIGNAL */}
      <section className="container mx-auto px-4 pt-14">
        <p className="text-sm font-semibold tracking-wide text-primary">{projects.length}+ Facade Projects Completed</p>
        <h2 className="mt-3 text-3xl font-bold">Facade &amp; Structural Glazing Projects Executed Across India</h2>
        <p className="mt-4 max-w-4xl text-muted-foreground leading-relaxed">
          Fine Glaze Elegance delivers end-to-end facade execution for commercial and institutional buildings across
          India. Our teams specialize in curtain wall installation, structural glazing, aluminium systems, and precise
          on-site coordination for complex timelines. From office towers and malls to hospitals and premium showrooms,
          each project is delivered with engineered detailing, compliance-led safety planning, and long-term
          performance focus. We collaborate with consultants, contractors, and developers to ensure reliable execution,
          quality materials, and timely handover at every stage.
        </p>
      </section>

      {/* PROJECT SECTIONS */}
      <section className="container mx-auto px-4 py-20 space-y-28">
        {filtered.map((p, i) => {
          const specs = [
            { label: "Type", value: p.buildingType },
            { label: "Area", value: p.area },
            { label: "Floors/Height", value: p.height },
            { label: "System", value: p.system },
            { label: "Glass", value: p.glass },
            { label: "Completion Time", value: p.duration },
          ].filter((item) => Boolean(item.value));

          return (
            <div
              key={p.id}
              className={`grid lg:grid-cols-2 gap-16 items-center ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
            >
              {/* IMAGE */}
              <div className="relative h-[420px] overflow-hidden rounded-2xl">
                <img
                  src={p.image}
                  loading="lazy"
                  alt={`${p.title} facade project in ${p.location} by Fine Glaze Elegance`}
                  className="w-full h-full object-cover hover:scale-105 transition duration-700"
                />

                {p.isAwardWinner && (
                  <span className="absolute top-6 left-6 bg-black/80 text-white text-xs px-4 py-1.5 rounded-full">
                    🏆 Award Winner
                  </span>
                )}
              </div>

              {/* CONTENT */}
              <div className="space-y-5">
                <h2 className="text-4xl font-bold leading-tight">{p.title}</h2>

                <div className="flex items-center text-muted-foreground">
                  <MapPin size={16} className="mr-2" />
                  {p.location}
                </div>

                {specs.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 rounded-xl bg-muted/40 p-4">
                    {specs.map((spec) => (
                      <div key={spec.label} className="rounded-md bg-background/70 px-3 py-2">
                        <p className="text-xs uppercase tracking-wide text-muted-foreground">{spec.label}</p>
                        <p className="text-sm font-medium text-foreground">{spec.value}</p>
                      </div>
                    ))}
                  </div>
                )}

                <p className="text-lg text-muted-foreground">{p.scope}</p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to={`/project/${p.slug}`}
                    className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground group"
                  >
                    View Case Study
                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition" />
                  </Link>

                  <a
                    href="https://wa.me/91XXXXXXXXXX?text=I%20want%20facade%20quote%20for%20my%20building"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-md border border-primary px-5 py-2.5 text-sm font-semibold text-primary"
                  >
                    WhatsApp Quote
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </Layout>
  );
};

export default Portfolio;
