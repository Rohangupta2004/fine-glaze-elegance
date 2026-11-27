import { Link } from "react-router-dom";
import { projectsData, type ProjectData } from "@/data/projects";
import { Sec } from "@/components/common/Sheet";

/**
 * Real Fine Glaze projects matching a city or a service, as a spec table with each project's own photo.
 * Data comes from src/data/projects.ts (the company-profile project records).
 */
interface RelatedProjectsProps {
  heading: string;
  intro?: string;
  /** Keep projects whose location contains any of these (case-insensitive). */
  locations?: string[];
  /** Skip projects whose location contains any of these. */
  excludeLocations?: string[];
  /** Keep projects whose scope / system / title mentions any of these. */
  keywords?: string[];
  limit?: number;
  /** Never list these project slugs (e.g. the page being viewed). */
  excludeSlugs?: string[];
  /** Rank projects of this category first. */
  preferCategory?: string;
  /** Section number in the sheet set; defaults to "05". */
  no?: string;
  alt?: boolean;
}

const has = (text: string, words: string[]) => words.some((w) => text.toLowerCase().includes(w.toLowerCase()));

export function matchProjects({ locations, excludeLocations, keywords, limit = 4, excludeSlugs, preferCategory }: Omit<RelatedProjectsProps, "heading" | "intro" | "no" | "alt">) {
  return Object.entries(projectsData)
    .filter(([slug]) => !excludeSlugs || !excludeSlugs.includes(slug))
    .filter(([, p]) => !locations || has(p.location, locations))
    .filter(([, p]) => !excludeLocations || !has(p.location, excludeLocations))
    .filter(([, p]) => !keywords || has(`${p.title} ${p.scope} ${p.systemUsed} ${p.features.join(" ")}`, keywords))
    .map(([slug, p]) => {
      // relevance: keyword hits in the headline scope count most
      const head = `${p.title} ${p.scope} ${p.systemUsed}`;
      const score = (keywords ? keywords.filter((k) => head.toLowerCase().includes(k.toLowerCase())).length : 0) + (preferCategory && p.category === preferCategory ? 10 : 0);
      return { slug, p, score };
    })
    .sort((a, b) => b.score - a.score || Number(b.p.status === "Completed") - Number(a.p.status === "Completed") || Number(b.p.year) - Number(a.p.year))
    .map(({ slug, p }) => [slug, p] as [string, ProjectData])
    .slice(0, limit) as [string, ProjectData][];
}

/** The table itself, also used on project pages and the portfolio. */
type TableProject = Pick<ProjectData, "title" | "location" | "client" | "scope" | "image" | "year"> & { status?: string };

export const ProjectsTable = ({ items }: { items: [string, TableProject][] }) => (
  <table className="sx-pt">
    <caption className="sr-only">Projects with location, client, scope and status</caption>
    <thead>
      <tr>
        <th scope="col" aria-label="Photo" />
        <th scope="col">Project</th>
        <th scope="col">Client</th>
        <th scope="col">Scope</th>
        <th scope="col">Status</th>
      </tr>
    </thead>
    <tbody>
      {items.map(([slug, p]) => (
        <tr key={slug}>
          <td className="ph">
            <img src={p.image} alt={`${p.title}, ${p.location}`} width={112} height={72} loading="lazy" decoding="async" />
          </td>
          <td className="pn">
            <Link to={`/project/${slug}`}>
              {p.title}
              <small>{p.location}</small>
            </Link>
          </td>
          <td>{p.client || <span aria-label="not listed">{"—"}</span>}</td>
          <td className="pc">{p.scope}</td>
          <td>
            <span className={`sx-st sx-st-${(p.status || "").toLowerCase()}`}>{p.status === "Completed" && p.year ? `Completed ${p.year}` : p.status}</span>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export function RelatedProjects({ heading, intro, no = "05", alt = false, ...filter }: RelatedProjectsProps) {
  const items = matchProjects(filter);
  if (items.length === 0) return null;
  return (
    <Sec no={no} label="Projects" title={heading} sheetLabel="Project record" alt={alt} dim={`${items.length} of ${Object.keys(projectsData).length} project records`}>
      {intro && <p className="sx-note">{intro}</p>}
      <ProjectsTable items={items} />
      <p className="sx-more">
        <Link to="/portfolio" className="fg-btn2">
          All projects
        </Link>
      </p>
    </Sec>
  );
}
