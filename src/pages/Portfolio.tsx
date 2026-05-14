import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { useProjects } from "@/hooks/useProjects";
import { projectsData } from "@/data/projects";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight, Trophy, Calendar } from "lucide-react";
import SEO from "@/components/SEO";
import { Helmet } from "react-helmet-async";

// Static projects for SSR/SSG schema (always available at build time)
const staticProjects = Object.entries(projectsData).map(([slug, p]) => ({
  slug,
  ...p,
}));

const tabs = [
  { id: "all", label: "All Projects" },
  { id: "corporate", label: "Corporate" },
  { id: "residential", label: "Residential" },
  { id: "award", label: "Award Winning" },
];

const portfolioSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Fine Glaze Project Portfolio",
  "description":
    "Landmark facade projects delivered across Maharashtra — curtain walls, structural glazing, ACP cladding, and glass railings.",
  "url": "https://fineglaze.com/portfolio",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Fine Glaze",
    "url": "https://fineglaze.com",
    "telephone": "+91-8369233566",
    "address": {
      "@type": "PostalAddress",
      "streetAddress":
        "Shop No. 1 & 2, Ghule Premises, Jagdamb Bhavan Road, Undri",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "postalCode": "411060",
      "addressCountry": "IN",
    },
  },
  "hasPart": staticProjects.map((p) => ({
    "@type": "CreativeWork",
    "name": p.title,
    "description": p.scope,
    "locationCreated": { "@type": "Place", "name": p.location },
    "dateCreated": p.year,
    "creator": { "@type": "Organization", "name": "Fine Glaze" },
    "url": `https://fineglaze.com/project/${p.slug}`,
    "image": `https://fineglaze.com${p.image}`,
    "genre":
      p.category === "corporate"
        ? "Commercial Facade"
        : p.category === "residential"
        ? "Residential Facade"
        : "Award-Winning Facade",
  })),
};

const Portfolio = () => {
  const { projects } = useProjects();
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
    <Layout darkHero>
      <SEO
        title="Facade Projects Portfolio – LTIMindtree, Embassy, Pune Airport | Fine Glaze"
        description="Explore Fine Glaze's portfolio of landmark facade projects including LTIMindtree Mensa Campus, Embassy 247, Pune Airport Terminal, Salsette-27 & more. Trusted across Mumbai & Pune."
        canonical="https://fineglaze.com/portfolio"
        keywords="facade projects India, aluminium facade portfolio, curtain wall projects Mumbai, glass facade Pune, building facade case studies, embassy facade work"
        schema={portfolioSchema}
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(portfolioSchema)}
        </script>
      </Helmet>

      {/* HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/Unitized.webp"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/85 via-slate-900/75 to-slate-900/90" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-5">
              <Trophy size={14} />
              Award-Winning Execution
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white mb-5">
              Built at{" "}
              <span className="text-gradient-gold">Landmark Scale</span>
            </h1>
            <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
              From international airports to corporate campuses and luxury
              residences — every project reflects precision execution, safety-first
              methodology, and uncompromising architectural clarity.
            </p>
          </div>
        </div>
      </section>

      {/* FILTER TABS */}
      <section className="sticky top-16 lg:top-20 z-30 border-y bg-white/95 backdrop-blur-md">
        <div className="container mx-auto px-4 flex items-center gap-2 py-3 flex-wrap">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-200 ${
                active === t.id
                  ? "bg-primary text-white shadow-sm"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
              }`}
            >
              {t.label}
            </button>
          ))}
          <span className="ml-auto text-xs text-muted-foreground font-medium">
            {filtered.length} {filtered.length === 1 ? "project" : "projects"}
          </span>
        </div>
      </section>

      {/* PROJECT GRID */}
      <section className="container mx-auto px-4 py-16">
        {filtered.length === 0 ? (
          <p className="text-center text-muted-foreground py-20">
            No projects in this category yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filtered.map((p) => (
              <Link
                key={p.id}
                to={`/project/${p.slug}`}
                className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {p.isAwardWinner && (
                    <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 bg-amber-500 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wide">
                      <Trophy size={12} />
                      Award
                    </span>
                  )}
                  <span className="absolute top-3 right-3 inline-flex items-center gap-1 bg-black/70 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1 rounded-full">
                    <Calendar size={11} />
                    {p.year}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-bold leading-tight text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
                    {p.title}
                  </h3>

                  <div className="flex items-center text-muted-foreground text-sm mb-3">
                    <MapPin size={14} className="mr-1.5 shrink-0" />
                    <span className="truncate">{p.location}</span>
                  </div>

                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">
                    {p.scope}
                  </p>

                  <div className="flex items-center justify-between pt-3 border-t border-border/60">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">
                      {p.category === "award"
                        ? "Award Winner"
                        : p.category === "corporate"
                        ? "Corporate"
                        : p.category === "residential"
                        ? "Residential"
                        : "Project"}
                    </span>
                    <span className="inline-flex items-center text-primary font-semibold text-sm group-hover:gap-2 gap-1 transition-all">
                      View
                      <ArrowRight
                        size={14}
                        className="group-hover:translate-x-0.5 transition-transform"
                      />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="bg-muted/40 border-t border-border py-16">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Have a project in mind?
          </h2>
          <p className="text-muted-foreground mb-6">
            Tell us about your building. Free site visit, transparent scope, and
            a proper proposal within 48 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-7 py-3.5 rounded-lg transition-colors"
          >
            Start a Conversation
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
