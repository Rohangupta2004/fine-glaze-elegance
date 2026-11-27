import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { projectsData, type ProjectData } from "@/data/projects";

/**
 * Real Fine Glaze projects matching a city or a service — local proof and
 * internal links on city and service pages. Data comes from
 * src/data/projects.ts (the company-profile project records).
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
}

const has = (text: string, words: string[]) => words.some((w) => text.toLowerCase().includes(w.toLowerCase()));

export function matchProjects({ locations, excludeLocations, keywords, limit = 4, excludeSlugs, preferCategory }: Omit<RelatedProjectsProps, "heading" | "intro">) {
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

export function RelatedProjects({ heading, intro, ...filter }: RelatedProjectsProps) {
  const items = matchProjects(filter);
  if (items.length === 0) return null;
  return (
    <section className="fg-sec" aria-labelledby="related-projects">
      <div className="fg-wrap">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 md:mb-12">
          <div className="max-w-2xl">
            <h2 id="related-projects" className="fg-h2 !mb-0">{heading}</h2>
            {intro && <p className="mt-3 text-mute">{intro}</p>}
          </div>
          <Link to="/portfolio" className="fg-lnk self-start md:self-auto">
            See all projects
          </Link>
        </div>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map(([slug, p]) => (
            <li key={slug}>
              <Link
                to={`/project/${slug}`}
                className="group block h-full overflow-hidden border border-line bg-night-2 hover:border-lamp/60 transition-colors"
              >
                <img decoding="async" src={p.image} alt={`${p.title}, ${p.location} — ${p.scope}`} className="h-44 w-full object-cover" loading="lazy" />
                <div className="p-4">
                  <p className="font-mono text-[12px] tracking-[0.02em] text-lamp">
                    {p.status === "Completed" ? `Completed${p.year ? ` ${p.year}` : ""}` : "Ongoing"}{p.client ? `, ${p.client}` : ""}
                  </p>
                  <h3 className="mt-1.5 text-lg font-medium leading-snug group-hover:text-lamp">{p.title}</h3>
                  <p className="mt-1 flex items-center gap-1 text-sm text-mute">
                    <MapPin className="h-3 w-3" aria-hidden="true" /> {p.location}
                  </p>
                  <p className="mt-2 text-sm text-paper/80">{p.scope}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
