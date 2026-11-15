/**
 * Retired location pages.
 *
 * Until Nov 2026 the site auto-generated ~600 near-identical pages such as
 * /facade-contractor/curtain-wall-delhi or /facade-contractor/acp-cladding-baner.
 * Most covered cities where Fine Glaze has never worked. Google treats this
 * pattern as doorway / scaled content, which can drag down the whole site.
 *
 * Every old URL now 301-redirects to the closest genuine page. The same table
 * produces the Vercel redirects (scripts/generate-legacy-redirects.mjs) and the
 * client-side fallback route, so both always agree.
 */
import data from "@/data/legacyLocations.json";

type CityGroup = "pune" | "mumbai" | "navi-mumbai" | "thane" | "other";

const groups = data.groups as Record<Exclude<CityGroup, "other">, string[]>;
const destinations = data.destinations as Record<string, Record<CityGroup, string>>;

export const legacyServices = Object.keys(destinations).filter((k) => k !== "_bare");

function cityGroupOf(location: string): CityGroup {
  for (const [group, list] of Object.entries(groups)) {
    if (list.includes(location)) return group as CityGroup;
  }
  return "other";
}

/** Destination for an old `/facade-contractor/:slug` URL. */
export function legacyLocationDestination(slug: string): string {
  const clean = slug.toLowerCase().replace(/\/+$/, "");
  // Longest service prefix first, so "facade-contractor-" wins over shorter keys.
  const service = [...legacyServices]
    .sort((a, b) => b.length - a.length)
    .find((s) => clean.startsWith(`${s}-`));
  if (service) {
    return destinations[service][cityGroupOf(clean.slice(service.length + 1))];
  }
  return destinations._bare[cityGroupOf(clean)];
}
