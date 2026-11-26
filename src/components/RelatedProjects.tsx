import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
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
}

const has = (text: string, words: string[]) => words.some((w) => text.toLowerCase().includes(w.toLowerCase()));

export function matchProjects({ locations, excludeLocations, keywords, limit = 4 }: Omit<RelatedProjectsProps, "heading" | "intro">) {
  return Object.entries(projectsData)
    .filter(([, p]) => !locations || has(p.location, locations))
    .filter(([, p]) => !excludeLocations || !has(p.location, excludeLocations))
    .filter(([, p]) => !keywords || has(`${p.title} ${p.scope} ${p.systemUsed} ${p.features.join(" ")}`, keywords))
    .map(([slug, p]) => {
      // relevance: keyword hits in the headline scope count most
      const head = `${p.title} ${p.scope} ${p.systemUsed}`;
      const score = keywords ? keywords.filter((k) => head.toLowerCase().includes(k.toLowerCase())).length : 0;
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
    <section className="py-16 bg-night text-paper" aria-labelledby="related-projects">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div className="max-w-2xl">
            <h2 id="related-projects" className="text-2xl md:text-3xl font-medium">{heading}</h2>
            {intro && <p className="mt-2 text-mute">{intro}</p>}
          </div>
          <Link to="/portfolio" className="inline-flex items-center text-lamp font-semibold hover:text-lamp">
            All projects <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map(([slug, p]) => (
            <li key={slug}>
              <Link
                to={`/project/${slug}`}
                className="group block h-full overflow-hidden border border-line bg-night-2 hover:border-lamp/60 transition-colors"
              >
                <img src={p.image} alt={`${p.title}, ${p.location} — ${p.scope}`} className="h-44 w-full object-cover" loading="lazy" />
                <div className="p-4">
                  <p className="text-[13px] font-semibold text-lamp">
                    {p.status === "Completed" ? `Completed ${p.year}` : "Ongoing"}, {p.client}
                  </p>
                  <h3 className="mt-1 font-medium leading-snug group-hover:text-lamp">{p.title}</h3>
                  <p className="mt-1 flex items-center gap-1 text-xs text-mute">
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
