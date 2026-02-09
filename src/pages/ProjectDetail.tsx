import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { projectsData } from "@/data/projects";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { MapPin } from "lucide-react";

const categories = [
  { id: "all", label: "All" },
  { id: "corporate", label: "Corporate" },
  { id: "residential", label: "Residential" },
  { id: "award", label: "Awards" },
];

const projects = Object.entries(projectsData).map(([slug, p]) => ({
  slug,
  ...p,
}));

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
      {/* HERO */}
      <section className="pt-32 pb-16 text-center">
        <h1 className="text-5xl font-bold tracking-tight">
          Our Landmark Projects
        </h1>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Precision-engineered facade solutions across iconic corporate and
          residential developments.
        </p>
      </section>

      {/* FILTERS */}
      <div className="flex justify-center gap-3 mb-14 flex-wrap">
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => setActive(c.id)}
            className={cn(
              "px-6 py-2 rounded-full border text-sm transition-all",
              active === c.id
                ? "bg-primary text-white"
                : "hover:bg-muted"
            )}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* GRID */}
      <section className="container mx-auto px-4 pb-24">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <Link
              key={p.id}
              to={`/project/${p.slug}`}
              className="group relative rounded-2xl overflow-hidden"
            >
              {/* IMAGE */}
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

              {/* CONTENT */}
              <div className="absolute bottom-0 p-6 text-white space-y-2">
                {p.isAwardWinner && (
                  <span className="inline-block text-xs px-3 py-1 rounded-full bg-yellow-400 text-black font-medium">
                    🏆 Award Winner
                  </span>
                )}

                <h3 className="text-2xl font-semibold leading-tight">
                  {p.title}
                </h3>

                <div className="flex items-center text-sm text-white/80">
                  <MapPin size={14} className="mr-1" />
                  {p.location}
                </div>

                <p className="text-sm text-white/70 line-clamp-2">
                  {p.scope}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
