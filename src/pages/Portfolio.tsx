import { landmarkProjectOrder } from "@/data/projectPresentation";
import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { useProjects, type Project } from "@/hooks/useProjects";
import { projectsData } from "@/data/projects";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import PageHero from "@/components/common/PageHero";
import { DataStrip, Sec } from "@/components/common/Sheet";
import { ProjectsTable } from "@/components/RelatedProjects";
import { company } from "@/data/company";

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
  return /raigad/i.test(last) ? "Panvel" : last;
}

function Tab({ on, onClick, n, children }: { on: boolean; onClick: () => void; n: number; children: React.ReactNode }) {
  return (
    <button type="button" aria-pressed={on} onClick={onClick}>
      {children}
      <span>{n}</span>
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
  const [view, setView] = useState<"table" | "grid">("table");

  const cities = Array.from(new Set(projects.map((p) => cityOf(p.location))));
  const matches = (p: Project, t: string, c: string) =>
    (t === "all" || p.category === t || (t === "award" && p.isAwardWinner)) && (c === "all" || cityOf(p.location) === c);
  const filtered = projects.filter((p) => matches(p, type, city));
  const countFor = (t: string, c: string) => projects.filter((p) => matches(p, t, c)).length;

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
      />

      <Sec no="01" label="Project register" title="Work on record." sheetLabel="Project register" dim={`${projects.length} project records`}>
        <div className="sx-bar">
          <div>
            <div className="sx-tabs" role="group" aria-label="Type">
              <Tab on={type === "all"} onClick={() => setType("all")} n={countFor("all", city)}>All types</Tab>
              {TYPES.map((t) => (
                <Tab key={t.id} on={type === t.id} onClick={() => setType(t.id)} n={countFor(t.id, city)}>{t.label}</Tab>
              ))}
            </div>
            <div className="sx-tabs" role="group" aria-label="City">
              <Tab on={city === "all"} onClick={() => setCity("all")} n={countFor(type, "all")}>All cities</Tab>
              {cities.map((c) => (
                <Tab key={c} on={city === c} onClick={() => setCity(c)} n={countFor(type, c)}>{c}</Tab>
              ))}
            </div>
          </div>
          <div className="sx-tabs" role="group" aria-label="View">
            <button type="button" aria-pressed={view === "table"} onClick={() => setView("table")}>Table</button>
            <button type="button" aria-pressed={view === "grid"} onClick={() => setView("grid")}>Photos</button>
          </div>
        </div>
        <p className="sx-note" aria-live="polite">
          {filtered.length} {filtered.length === 1 ? "project" : "projects"} shown.
        </p>

        {filtered.length === 0 ? (
          <p className="sx-note">No projects match these filters yet.</p>
        ) : view === "table" ? (
          <ProjectsTable items={filtered.map((p) => [p.slug, p] as [string, Project])} />
        ) : (
          <ul className="sx-pg">
            {filtered.map((p) => (
              <li key={p.slug}>
                <Link to={`/project/${p.slug}`}>
                  <img decoding="async" src={p.image} alt={`Fine Glaze project: ${p.title} (${p.scope}) in ${p.location}`} loading="lazy" width={600} height={450} />
                  <span className="c">
                    <small>{p.location}</small>
                    <b>{p.title}</b>
                    <p>{p.scope}</p>
                    <small>{p.client ? `${p.client} / ` : ""}{p.status === "Completed" && p.year ? `Completed ${p.year}` : p.status}</small>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </Sec>

      <Sec no="02" label="Record" title="The firm in figures." sheetLabel="Company facts">
        <DataStrip
          items={[
            { value: company.stats.projectRecords, label: "Project records" },
            { value: company.stats.cities, label: "Cities, Pune and Mumbai" },
            { value: company.stats.coreTeam, label: "Core team" },
            { value: String(company.award.year), label: `${company.award.by}, ${company.award.title}` },
          ]}
        />
      </Sec>

      <CTASection />
    </Layout>
  );
};

export default Portfolio;
