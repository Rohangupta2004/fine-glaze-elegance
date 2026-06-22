import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { useProjects, type Project } from "@/hooks/useProjects";
import { projectsData } from "@/data/projects";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import { Helmet } from "react-helmet-async";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

/* ─── Reusable fade-in wrapper ─── */
function FadeIn({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// Static projects for schema
const staticProjects = Object.entries(projectsData).map(([slug, p]) => ({
  slug,
  ...p,
}));

const TABS = [
  { id: "all", label: "All" },
  { id: "corporate", label: "Corporate" },
  { id: "residential", label: "Residential" },
  { id: "award", label: "Award Winning" },
];

const portfolioSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Fine Glaze Project Portfolio",
  description:
    "Landmark facade projects delivered across Maharashtra — curtain walls, structural glazing, ACP cladding, and glass railings.",
  url: "https://fineglaze.com/portfolio",
  provider: {
    "@type": "LocalBusiness",
    name: "Fine Glaze",
    url: "https://fineglaze.com",
    telephone: "+91-8369233566",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Shop No. 1 & 2, Ghule Premises, Jagdamb Bhavan Road, Undri",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      postalCode: "411060",
      addressCountry: "IN",
    },
  },
  hasPart: staticProjects.map((p) => ({
    "@type": "CreativeWork",
    name: p.title,
    description: p.scope,
    locationCreated: { "@type": "Place", name: p.location },
    dateCreated: p.year,
    creator: { "@type": "Organization", name: "Fine Glaze" },
    url: `https://fineglaze.com/project/${p.slug}`,
    image: `https://fineglaze.com${p.image}`,
    genre:
      p.category === "corporate"
        ? "Commercial Facade"
        : p.category === "residential"
        ? "Residential Facade"
        : "Award-Winning Facade",
  })),
};

/* ── Project card — image + visible details ── */
function ProjectCard({
  p,
  tall = false,
  delay = 0,
}: {
  p: Project;
  tall?: boolean;
  delay?: number;
}) {
  return (
    <FadeIn delay={delay}>
      <Link
        to={`/project/${p.slug}`}
        className="group block overflow-hidden bg-white border border-stone-200 hover:border-amber-300 transition-all duration-300"
      >
        {/* Image */}
        <div className={cn(
          "relative overflow-hidden",
          tall ? "h-[280px] md:h-[320px]" : "h-[220px] md:h-[260px]"
        )}>
          <img
            src={p.image}
            alt={p.title}
            className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

          {p.isAwardWinner && (
            <div className="absolute top-3 left-3 bg-amber-600 text-white text-[9px] font-bold uppercase tracking-widest px-2.5 py-1">
              Award Winner
            </div>
          )}
          <div className="absolute top-3 right-3 text-white/60 text-[10px] font-bold uppercase tracking-widest">
            {p.year}
          </div>
        </div>

        {/* Details — always visible */}
        <div className="p-5">
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-amber-700 mb-2">
            {p.category === "award"
              ? "Award Winner"
              : p.category === "corporate"
              ? "Corporate"
              : "Residential"}{" "}
            · {p.client}
          </p>

          <h3 className="text-base md:text-lg font-bold text-stone-900 leading-snug mb-2 group-hover:text-amber-700 transition-colors">
            {p.title}
          </h3>

          <div className="flex items-center gap-1.5 text-stone-400 text-xs mb-3">
            <MapPin size={11} />
            <span>{p.location}</span>
          </div>

          <p className="text-stone-500 text-xs leading-relaxed mb-4 line-clamp-2">
            {p.scope}
          </p>

          <div className="flex items-center gap-1.5 text-stone-800 font-semibold text-xs group-hover:text-amber-700 group-hover:gap-2.5 transition-all">
            View Project <ArrowRight size={12} />
          </div>
        </div>
      </Link>
    </FadeIn>
  );
}

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

  // Split into rows: first 2 are large (2-col), rest are 3-col grid
  const topRow = filtered.slice(0, 2);
  const restGrid = filtered.slice(2);

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

      {/* ════════════════════════════════════════════════════
          HERO — full-bleed cinematic
          ════════════════════════════════════════════════════ */}
      <section className="relative h-[70vh] min-h-[480px] overflow-hidden">
        <img
          src="/Unitized.webp"
          alt="Fine Glaze facade portfolio"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          style={{ animation: "pfZoom 22s ease-in-out infinite alternate" }}
        />
        <style>{`@keyframes pfZoom { from { transform: scale(1.0); } to { transform: scale(1.06); } }`}</style>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.20) 35%, rgba(0,0,0,0.50) 65%, rgba(0,0,0,0.90) 100%)",
          }}
        />

        <div className="absolute inset-x-0 bottom-0 px-8 md:px-16 pb-14 md:pb-18">
          <p className="text-amber-400 text-xs font-bold tracking-[0.4em] uppercase mb-4">
            Fine Glaze · Portfolio
          </p>
          <h1
            className="font-extrabold text-white leading-[0.90] tracking-tight"
            style={{ fontSize: "clamp(2.8rem, 7vw, 7rem)" }}
          >
            Built at<br />
            <span className="text-gradient-gold">Landmark</span> Scale.
          </h1>
          <p className="mt-5 text-white/65 text-base md:text-lg max-w-lg leading-relaxed">
            From international airports to corporate campuses — every project reflects
            precision execution and architectural clarity.
          </p>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          STATS — dark band
          ════════════════════════════════════════════════════ */}
      <section className="bg-stone-900 py-8">
        <div className="container mx-auto px-6 md:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 md:divide-x md:divide-stone-700">
            {[
              { number: "10+", label: "Projects Completed" },
              { number: "5+", label: "Years in Facade" },
              { number: "3", label: "Cities Covered" },
              { number: "1", label: "Award Won" },
            ].map((s) => (
              <div key={s.label} className="text-center px-4">
                <p className="text-2xl font-bold text-white">{s.number}</p>
                <p className="text-stone-500 text-[10px] uppercase tracking-widest mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          FILTER — underline tabs
          ════════════════════════════════════════════════════ */}
      <section className="sticky top-16 lg:top-20 z-30 bg-white border-b border-stone-200">
        <div className="container mx-auto px-6 md:px-16 flex items-center gap-6 md:gap-8">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={cn(
                "py-4 text-sm font-semibold tracking-wide transition-all duration-200 border-b-2 -mb-px",
                active === t.id
                  ? "border-stone-900 text-stone-900"
                  : "border-transparent text-stone-400 hover:text-stone-600"
              )}
            >
              {t.label}
            </button>
          ))}
          <span className="ml-auto text-xs text-stone-400 font-medium hidden sm:block">
            {filtered.length} {filtered.length === 1 ? "project" : "projects"}
          </span>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          PROJECTS — image-overlay cards, mixed grid
          ════════════════════════════════════════════════════ */}
      <section className="py-10 md:py-14 bg-stone-100">
        <div className="container mx-auto px-6 md:px-16">
          {filtered.length === 0 ? (
            <p className="text-center text-stone-400 py-20">
              No projects in this category yet.
            </p>
          ) : (
            <div className="space-y-4">
              {/* Top row — 2 large cards */}
              {topRow.length > 0 && (
                <div className="grid md:grid-cols-2 gap-4">
                  {topRow.map((p, i) => (
                    <ProjectCard key={p.id} p={p} tall delay={i * 80} />
                  ))}
                </div>
              )}

              {/* Remaining — 3 columns */}
              {restGrid.length > 0 && (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {restGrid.map((p, i) => (
                    <ProjectCard key={p.id} p={p} delay={i * 60} />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          CLIENTS — trust strip
          ════════════════════════════════════════════════════ */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-6 md:px-16 text-center">
          <p className="text-stone-400 text-xs font-bold tracking-[0.3em] uppercase mb-6">
            Trusted By
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {[
              "Embassy REIT",
              "LTIMindtree",
              "Leela Group",
              "Jindal Stainless",
              "SSG Group",
              "Nirmaann Developers",
            ].map((name) => (
              <span
                key={name}
                className="text-stone-300 text-lg md:text-xl font-bold tracking-wide"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          CTA
          ════════════════════════════════════════════════════ */}
      <CTASection />
    </Layout>
  );
};

export default Portfolio;
