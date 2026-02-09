import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { projectsData } from "@/data/projects";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";

const projects = Object.entries(projectsData).map(([slug, p]) => ({
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
      : projects.filter(
          (p) =>
            p.category === active ||
            (active === "award" && p.isAwardWinner)
        );

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
            From airports to corporate campuses, our portfolio reflects
            precision execution, safety-first methodology, and architectural
            clarity.
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
                active === t.id
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t.label}
              {active === t.id && (
                <span className="absolute -bottom-3 left-0 w-full h-[2px] bg-primary" />
              )}
            </button>
          ))}
        </div>
      </section>

      {/* PROJECT SECTIONS */}
      <section className="container mx-auto px-4 py-20 space-y-28">
        {filtered.map((p, i) => (
          <div
            key={p.id}
            className={`grid lg:grid-cols-2 gap-16 items-center ${
              i % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* IMAGE */}
            <div className="relative h-[420px] overflow-hidden rounded-2xl">
              <img
                src={p.image}
                alt={p.title}
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
              <h2 className="text-4xl font-bold leading-tight">
                {p.title}
              </h2>

              <div className="flex items-center text-muted-foreground">
                <MapPin size={16} className="mr-2" />
                {p.location}
              </div>

              <p className="text-lg text-muted-foreground">
                {p.scope}
              </p>

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
          </div>
        ))}
      </section>
    </Layout>
  );
};

export default Portfolio;
