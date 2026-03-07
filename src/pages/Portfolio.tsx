import { useMemo, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { projectsData } from "@/data/projects";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight, Calendar, Building2 } from "lucide-react";

const projects = Object.entries(projectsData)
  .map(([slug, p]) => ({
    slug,
    ...p,
  }))
  .sort((a, b) => Number(b.year) - Number(a.year));

const tabs = [
  { id: "all", label: "All" },
  { id: "corporate", label: "Corporate" },
  { id: "residential", label: "Residential" },
  { id: "award", label: "Awards" },
] as const;

const categoryLabels: Record<string, string> = {
  corporate: "Corporate",
  residential: "Residential",
  award: "Award",
};

const Portfolio = () => {
  const [active, setActive] = useState<(typeof tabs)[number]["id"]>("all");

  const filtered = useMemo(
    () =>
      active === "all"
        ? projects
        : projects.filter(
            (p) =>
              p.category === active ||
              (active === "award" && p.isAwardWinner)
          ),
    [active]
  );

  const tabCounts = useMemo(
    () => ({
      all: projects.length,
      corporate: projects.filter((p) => p.category === "corporate").length,
      residential: projects.filter((p) => p.category === "residential").length,
      award: projects.filter((p) => p.isAwardWinner).length,
    }),
    []
  );

  return (
    <Layout>
      <section className="pt-24 pb-12 border-b">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Portfolio
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Built at
              <br />
              Landmark Scale
            </h1>
          </div>

          <div className="space-y-5">
            <p className="text-base md:text-lg text-muted-foreground max-w-xl">
              From airports to corporate campuses, our portfolio reflects
              precision execution, safety-first methodology, and architectural
              clarity.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
              <div className="rounded-lg border p-3">
                <p className="text-muted-foreground">Projects</p>
                <p className="font-semibold text-xl">{projects.length}+</p>
              </div>
              <div className="rounded-lg border p-3">
                <p className="text-muted-foreground">Corporate</p>
                <p className="font-semibold text-xl">{tabCounts.corporate}</p>
              </div>
              <div className="rounded-lg border p-3 col-span-2 sm:col-span-1">
                <p className="text-muted-foreground">Residential</p>
                <p className="font-semibold text-xl">{tabCounts.residential}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b">
        <div className="container mx-auto px-4 py-4 flex flex-wrap gap-3">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition ${
                active === t.id
                  ? "bg-primary text-primary-foreground"
                  : "border text-muted-foreground hover:text-foreground"
              }`}
              aria-pressed={active === t.id}
            >
              {t.label}
              <span
                className={`rounded-full px-2 py-0.5 text-xs ${
                  active === t.id
                    ? "bg-primary-foreground/20 text-primary-foreground"
                    : "bg-muted text-foreground"
                }`}
              >
                {tabCounts[t.id]}
              </span>
            </button>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 md:py-16 space-y-14">
        {filtered.length === 0 ? (
          <div className="rounded-xl border border-dashed p-10 text-center">
            <p className="text-muted-foreground">
              No projects available for this category yet.
            </p>
          </div>
        ) : (
          filtered.map((p, i) => (
            <article
              key={p.id}
              className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center"
            >
              <div className={`${i % 2 !== 0 ? "lg:order-2" : ""}`}>
                <div className="relative h-[260px] sm:h-[340px] lg:h-[420px] overflow-hidden rounded-2xl border">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-700"
                  />

                  {p.isAwardWinner && (
                    <span className="absolute top-4 left-4 bg-black/80 text-white text-xs px-3 py-1.5 rounded-full">
                      🏆 Award Winner
                    </span>
                  )}
                </div>
              </div>

              <div className="space-y-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs uppercase tracking-wide">
                    <Building2 size={13} />
                    {categoryLabels[p.category] ?? p.category}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs">
                    <Calendar size={13} />
                    {p.year}
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  {p.title}
                </h2>

                <div className="flex items-center text-muted-foreground">
                  <MapPin size={16} className="mr-2 shrink-0" />
                  {p.location}
                </div>

                <p className="text-lg text-muted-foreground">{p.scope}</p>

                <Link
                  to={`/project/${p.slug}`}
                  className="inline-flex items-center text-primary font-semibold group"
                >
                  Explore Project
                  <ArrowRight
                    size={18}
                    className="ml-2 group-hover:translate-x-1 transition"
                  />
                </Link>
              </div>
            </article>
          ))
        )}
      </section>
    </Layout>
  );
};

export default Portfolio;
