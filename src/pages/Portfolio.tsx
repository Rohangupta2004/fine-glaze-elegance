import { landmarkProjectOrder } from "@/data/projectPresentation";
import { useRef, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { useProjects, type Project } from "@/hooks/useProjects";
import { projectsData } from "@/data/projects";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import PageHero from "@/components/common/PageHero";
import StatBand from "@/components/common/StatBand";
import { useWipe } from "@/components/common/useWipe";
import "./portfolio.css";

// Static projects for schema
const staticProjects = Object.entries(projectsData).map(([slug, p]) => ({
  slug,
  ...p,
}));

const portfolioSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Fine Glaze Project Portfolio",
  description:
    "Documented Fine Glaze facade projects in Pune and Mumbai: curtain walls, structural glazing, ACP cladding, railings, louvers and maintenance.",
  url: "https://fineglaze.com/portfolio",
  provider: {
    "@type": "LocalBusiness",
    name: "Fine Glaze",
    url: "https://fineglaze.com",
    telephone: "+91-8369233566",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "A3 LW-13, Pragati Serene Building, Sr.No.2, HDFC Bank Chowk, Plot B, Autadwadi Handewadi, Mahadev Wadi, Mohammed Wadi",
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
        : "Facade Project",
  })),
};



const TYPES = [
  { id: "corporate", label: "Corporate" },
  { id: "residential", label: "Residential" },
  { id: "award", label: "Award winning" },
];

/** City is the last part of the stored location, e.g. "Hinjewadi, Pune" gives "Pune". */
function cityOf(location: string): string {
  const last = location.split(",").pop()?.trim() || location;
  return last === "Raigad" ? "Panvel" : last;
}

/** Up to three short scope tags from the stored scope line. */
function scopeTags(scope: string): string[] {
  return scope
    .split(/,|&| and | - |\u2014/)
    .map((t) => t.trim())
    .filter(Boolean)
    .slice(0, 3);
}

function ProjectCard({ p }: { p: Project }) {
  const fig = useRef<HTMLDivElement>(null);
  const [armed, seen] = useWipe(fig);
  const tags = scopeTags(p.scope);
  return (
    <li>
      <Link to={`/project/${p.slug}`} className="pf-card">
        <div ref={fig} className={`pf-fig${armed ? " armed" : ""}${seen ? " seen" : ""}`}>
          <img decoding="async"
            src={p.image}
            alt={`Fine Glaze project: ${p.title} (${p.scope}) in ${p.location}`}
            loading="lazy"
            width={600}
            height={450}
          />
          <span className="pf-m" aria-hidden="true" />
        </div>
        <h2 className="pf-t">{p.title}</h2>
        <p className="pf-p">{p.location}</p>
        <dl className="pf-d">
          <div>
            <dt>Client</dt>
            <dd>{p.client}</dd>
          </div>
          <div>
            <dt>Status</dt>
            <dd>{p.status === "Completed" ? `Completed ${p.year}` : p.status || p.year}</dd>
          </div>
        </dl>
        {tags.length > 0 && (
          <ul className="pf-tags">
            {tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        )}
      </Link>
    </li>
  );
}

function Toggle({ on, onClick, children }: { on: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button type="button" className="pf-tg" aria-pressed={on} onClick={onClick}>
      {children}
    </button>
  );
}

const Portfolio = () => {
  const { projects: allProjects } = useProjects();
  const projects = [...allProjects].sort((a, b) => {
    const rank = (slug: string) => {
      const index = landmarkProjectOrder.indexOf(slug);
      return index < 0 ? landmarkProjectOrder.length : index;
    };
    return rank(a.slug) - rank(b.slug);
  });
  const [type, setType] = useState("all");
  const [city, setCity] = useState("all");

  const cities = Array.from(new Set(projects.map((p) => cityOf(p.location))));
  const filtered = projects.filter(
    (p) =>
      (type === "all" || p.category === type || (type === "award" && p.isAwardWinner)) &&
      (city === "all" || cityOf(p.location) === city),
  );

  return (
    <Layout darkHero>
      <SEO
        title="Facade Projects in Pune and Mumbai | Fine Glaze"
        description="Fine Glaze facade projects in Pune and Mumbai with client, scope and status: Embassy 247, Pune Airport, LTIMindtree Mahape and Nanavati Max Hospital."
        canonical="https://fineglaze.com/portfolio"
        keywords="facade projects Pune, facade projects Mumbai, Fine Glaze projects, glass facade projects, ACP cladding projects"
        schema={portfolioSchema}
      />

      <PageHero
        crumbs={[{ label: "Projects" }]}
        title={<>Facade Projects in <span className="text-gradient-gold">Pune &amp; Mumbai</span></>}
        intro="Every project below lists the client, our actual scope and its current status, completed or ongoing."
        image={{ src: "/Unitized.webp", alt: "Fine Glaze facade portfolio" }}
        source="portfolio_hero"
      />

      <section className="fg-sec">
        <div className="fg-wrap">
          <div className="pf-bar" role="group" aria-label="Filter projects">
            <div className="pf-grp" role="group" aria-label="Type">
              <Toggle on={type === "all"} onClick={() => setType("all")}>All types</Toggle>
              {TYPES.map((t) => (
                <Toggle key={t.id} on={type === t.id} onClick={() => setType(t.id)}>{t.label}</Toggle>
              ))}
            </div>
            <div className="pf-grp" role="group" aria-label="City">
              <Toggle on={city === "all"} onClick={() => setCity("all")}>All cities</Toggle>
              {cities.map((c) => (
                <Toggle key={c} on={city === c} onClick={() => setCity(c)}>{c}</Toggle>
              ))}
            </div>
            <p className="pf-n" aria-live="polite">
              {filtered.length} {filtered.length === 1 ? "project" : "projects"}
            </p>
          </div>

          {filtered.length === 0 ? (
            <p className="text-mute py-16">No projects match these filters yet.</p>
          ) : (
            <ul className="fg-grid pf-grid">
              {filtered.map((p) => (
                <ProjectCard key={p.id} p={p} />
              ))}
            </ul>
          )}
        </div>
      </section>

      <section className="fg-sec">
        <div className="fg-wrap">
          <StatBand
            stats={[
              { value: "16", name: "Project records", line: "documented in our company profile" },
              { value: "2", name: "Cities", line: "Pune and Mumbai" },
              { value: "40+", name: "Core team", line: "engineering, supervision and site work" },
              { value: "2024", name: "Best Vendor Performance", line: "awarded by Embassy REIT" },
            ]}
          />
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Portfolio;
