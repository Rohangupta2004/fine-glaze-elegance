import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { useProjects, type Project } from "@/hooks/useProjects";
import { projectsData } from "@/data/projects";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight, Calendar, User } from "lucide-react";
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
        "Shop No. 1 & 2, Jagdamba Bhawan Marg, Near Sunshine Hills, Undri",
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


/* ════════════════════════════════════════════════════
   SHOWCASE CARD — full-width alternating layout
   ════════════════════════════════════════════════════ */
function ShowcaseProject({
  p,
  index,
  reversed,
}: {
  p: Project;
  index: number;
  reversed: boolean;
}) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <FadeIn>
      <Link
        to={`/project/${p.slug}`}
        className={cn(
          "group grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white border border-stone-200 hover:border-amber-300 transition-all duration-300 overflow-hidden"
        )}
      >
        {/* Image side */}
        <div
          className={cn(
            "relative h-[240px] sm:h-[300px] lg:h-[400px] overflow-hidden",
            reversed && "lg:order-2"
          )}
        >
          <img
            src={p.image}
            alt={p.title}
            className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

          {p.isAwardWinner && (
            <div className="absolute top-4 left-4 bg-amber-600 text-white text-[9px] font-bold uppercase tracking-widest px-2.5 py-1">
              Award Winner
            </div>
          )}

          {/* Big number overlay */}
          <div className="absolute bottom-4 right-4 lg:bottom-6 lg:right-6">
            <span className="text-white/15 text-6xl lg:text-8xl font-black leading-none">
              {num}
            </span>
          </div>
        </div>

        {/* Details side */}
        <div
          className={cn(
            "p-6 sm:p-8 lg:p-10 flex flex-col justify-center",
            reversed && "lg:order-1"
          )}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-amber-700 text-xs font-bold tracking-[0.2em] uppercase">
              {p.category === "award"
                ? "Award Winner"
                : p.category === "corporate"
                ? "Corporate"
                : "Residential"}
            </span>
            <span className="w-8 h-px bg-stone-300" />
            <span className="text-stone-400 text-xs font-bold">{num}</span>
          </div>

          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-stone-900 leading-tight mb-4 group-hover:text-amber-700 transition-colors">
            {p.title}
          </h3>

          <p className="text-stone-500 text-sm leading-relaxed mb-6 line-clamp-3">
            {p.scope}
          </p>

          {/* Meta grid */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="flex items-center gap-2 text-stone-400 text-xs">
              <MapPin size={13} className="text-amber-600 shrink-0" />
              <span>{p.location}</span>
            </div>
            <div className="flex items-center gap-2 text-stone-400 text-xs">
              <Calendar size={13} className="text-amber-600 shrink-0" />
              <span>{p.year}</span>
            </div>
            <div className="flex items-center gap-2 text-stone-400 text-xs col-span-2">
              <User size={13} className="text-amber-600 shrink-0" />
              <span>{p.client}</span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-stone-800 font-semibold text-sm group-hover:text-amber-700 group-hover:gap-3 transition-all">
            View Project <ArrowRight size={14} />
          </div>
        </div>
      </Link>
    </FadeIn>
  );
}


/* ════════════════════════════════════════════════════
   COMPACT CARD — for grid sections
   ════════════════════════════════════════════════════ */
function CompactCard({ p, index }: { p: Project; index: number }) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <FadeIn delay={(index % 3) * 80}>
      <Link
        to={`/project/${p.slug}`}
        className="group block bg-white border border-stone-200 hover:border-amber-300 transition-all duration-300 overflow-hidden"
      >
        <div className="relative h-[200px] sm:h-[240px] overflow-hidden">
          <img
            src={p.image}
            alt={p.title}
            className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

          {p.isAwardWinner && (
            <div className="absolute top-3 left-3 bg-amber-600 text-white text-[9px] font-bold uppercase tracking-widest px-2 py-0.5">
              Award
            </div>
          )}

          <div className="absolute bottom-3 right-3">
            <span className="text-white/20 text-4xl font-black">{num}</span>
          </div>
        </div>

        <div className="p-4 sm:p-5">
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-amber-700 mb-1.5">
            {p.category === "award"
              ? "Award Winner"
              : p.category === "corporate"
              ? "Corporate"
              : "Residential"}{" "}
            · {p.year}
          </p>

          <h3 className="text-base font-bold text-stone-900 leading-snug mb-2 group-hover:text-amber-700 transition-colors">
            {p.title}
          </h3>

          <div className="flex items-center gap-1.5 text-stone-400 text-xs mb-2">
            <MapPin size={11} />
            <span>{p.location}</span>
          </div>

          <p className="text-stone-500 text-xs leading-relaxed mb-3 line-clamp-2">
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


/* ════════════════════════════════════════════════════
   MAIN PAGE
   ════════════════════════════════════════════════════ */
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

  /*
    Layout pattern — alternating showcase + grid for visual variety:
    - Projects 1: Showcase (image left)
    - Projects 2-4: 3-col compact grid
    - Project 5: Showcase (image right, reversed)
    - Projects 6-8: 3-col compact grid
    - Repeat...
  */
  const chunks: Array<{ type: "showcase"; project: Project; reversed: boolean; globalIdx: number } | { type: "grid"; projects: Array<{ p: Project; globalIdx: number }> }> = [];

  filtered.forEach((p, i) => {
    const patternPos = i % 4; // 0 = showcase, 1-3 = grid group
    if (patternPos === 0) {
      // Showcase card — alternate direction every other showcase
      const showcaseCount = Math.floor(i / 4);
      chunks.push({ type: "showcase", project: p, reversed: showcaseCount % 2 === 1, globalIdx: i });
    } else {
      // Grid card — add to the last grid chunk, or create new one
      const lastChunk = chunks[chunks.length - 1];
      if (lastChunk && lastChunk.type === "grid") {
        lastChunk.projects.push({ p, globalIdx: i });
      } else {
        chunks.push({ type: "grid", projects: [{ p, globalIdx: i }] });
      }
    }
  });

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
      <section className="relative h-[50vh] md:h-[65vh] min-h-[340px] md:min-h-[480px] overflow-hidden">
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

        <div className="absolute inset-x-0 bottom-0 px-5 md:px-16 pb-8 md:pb-16">
          <p className="text-amber-400 text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase mb-3 md:mb-4">
            Fine Glaze · Portfolio
          </p>
          <h1
            className="font-extrabold text-white leading-[0.90] tracking-tight"
            style={{ fontSize: "clamp(2.2rem, 6vw, 6rem)" }}
          >
            Built at<br />
            <span className="text-gradient-gold">Landmark</span> Scale.
          </h1>
          <p className="mt-3 md:mt-5 text-white/60 text-sm md:text-lg max-w-lg leading-relaxed">
            From international airports to corporate campuses — precision
            execution and architectural clarity.
          </p>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          STATS — dark band
          ════════════════════════════════════════════════════ */}
      <section className="bg-stone-900 py-6 md:py-8">
        <div className="container mx-auto px-5 md:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 md:divide-x md:divide-stone-700">
            {[
              { number: "10+", label: "Projects Completed" },
              { number: "5+", label: "Years in Facade" },
              { number: "3", label: "Cities Covered" },
              { number: "1", label: "Award Won" },
            ].map((s) => (
              <div key={s.label} className="text-center px-4">
                <p className="text-xl md:text-2xl font-bold text-white">{s.number}</p>
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
        <div className="container mx-auto px-5 md:px-16 flex items-center gap-4 md:gap-8 overflow-x-auto">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={cn(
                "py-3 md:py-4 text-xs md:text-sm font-semibold tracking-wide transition-all duration-200 border-b-2 -mb-px whitespace-nowrap",
                active === t.id
                  ? "border-stone-900 text-stone-900"
                  : "border-transparent text-stone-400 hover:text-stone-600"
              )}
            >
              {t.label}
            </button>
          ))}
          <span className="ml-auto text-xs text-stone-400 font-medium hidden sm:block whitespace-nowrap">
            {filtered.length} {filtered.length === 1 ? "project" : "projects"}
          </span>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          PROJECTS — alternating showcase + grid
          ════════════════════════════════════════════════════ */}
      <section className="py-8 md:py-14 bg-stone-100">
        <div className="container mx-auto px-5 md:px-16">
          {filtered.length === 0 ? (
            <p className="text-center text-stone-400 py-20">
              No projects in this category yet.
            </p>
          ) : (
            <div className="space-y-5 md:space-y-6">
              {chunks.map((chunk, ci) => {
                if (chunk.type === "showcase") {
                  return (
                    <ShowcaseProject
                      key={`showcase-${ci}`}
                      p={chunk.project}
                      index={chunk.globalIdx}
                      reversed={chunk.reversed}
                    />
                  );
                }
                // Grid chunk
                return (
                  <div key={`grid-${ci}`} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {chunk.projects.map(({ p, globalIdx }) => (
                      <CompactCard key={p.id} p={p} index={globalIdx} />
                    ))}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>


      {/* ════════════════════════════════════════════════════
          CLIENTS — trust strip
          ════════════════════════════════════════════════════ */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-5 md:px-16 text-center">
          <p className="text-stone-400 text-xs font-bold tracking-[0.3em] uppercase mb-6">
            Trusted By
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 md:gap-x-10 gap-y-3">
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
                className="text-stone-300 text-base md:text-xl font-bold tracking-wide"
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
