import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { projectsData } from "@/data/projects";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";

type ProjectTechSpecs = {
  buildingType?: string;
  area?: string;
  height?: string;
  system?: string;
  glass?: string;
  aluminium?: string;
  duration?: string;
  waterproofing?: string;
};

type Project = (typeof projectsData)[keyof typeof projectsData] &
  ProjectTechSpecs & {
    slug: string;
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
      : projects.filter(
          (p) => p.category === active || (active === "award" && p.isAwardWinner)
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
            From airports to corporate campuses, our portfolio reflects precision
            execution, safety-first methodology, and architectural clarity.
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

      {/* TRUST + SEO */}
      <section className="container mx-auto px-4 pt-14">
        <p className="text-2xl font-bold">{projects.length}+ Facade Projects Completed</p>
        <div className="mt-6 max-w-4xl">
          <h2 className="text-2xl font-semibold">
            Facade &amp; Structural Glazing Projects Executed Across India
          </h2>
          <p className="mt-3 text-muted-foreground leading-7">
            Fine Glaze Elegance delivers engineered facade solutions for commercial
            developments with a focus on performance, safety, and long-term value.
            Our teams execute curtain wall installation, structural glazing, ACP
            cladding, and aluminium systems across offices, malls, hospitals, and
            showroom developments. Every project is managed with detailed planning,
            compliant installation practices, and quality-controlled execution to
            meet architecture, timelines, and durability goals for developers,
            consultants, and EPC stakeholders.
          </p>
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
                alt={`${p.title} facade project in ${p.location} by Fine Glaze Elegance`}
                loading="lazy"
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-muted/50 rounded-xl p-4 text-sm">
                {p.buildingType && (
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">Type</p>
                    <p className="font-medium">{p.buildingType}</p>
                  </div>
                )}
                {p.area && (
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">Area</p>
                    <p className="font-medium">{p.area}</p>
                  </div>
                )}
                {p.height && (
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">Floors/Height</p>
                    <p className="font-medium">{p.height}</p>
                  </div>
                )}
                {p.system && (
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">System</p>
                    <p className="font-medium">{p.system}</p>
                  </div>
                )}
                {p.glass && (
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">Glass</p>
                    <p className="font-medium">{p.glass}</p>
                  </div>
                )}
                {p.duration && (
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">Completion Time</p>
                    <p className="font-medium">{p.duration}</p>
                  </div>
                )}
              </div>

              <p className="text-lg text-muted-foreground">{p.scope}</p>

              <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                <Link
                  to={`/project/${p.slug}`}
                  className="inline-flex justify-center items-center rounded-lg bg-primary text-primary-foreground px-5 py-2.5 font-semibold group"
                >
                  View Case Study
                  <ArrowRight
                    size={18}
                    className="ml-2 group-hover:translate-x-1 transition"
                  />
                </Link>
                <a
                  href="https://wa.me/91XXXXXXXXXX?text=I%20want%20facade%20quote%20for%20my%20building"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center rounded-lg border border-primary text-primary px-5 py-2.5 font-semibold"
                >
                  WhatsApp Quote
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>
    </Layout>
  );
};

export default Portfolio;
