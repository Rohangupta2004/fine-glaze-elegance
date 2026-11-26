import { describe, expect, it } from "vitest";
import {
  ALL_CITY_PAGE_PATHS,
  LOCATIONS,
  SERVICE_SLUGS,
  SITEMAP_CITY_PATHS,
  canonicalCityPath,
  nearbyLocations,
  parseCitySlug,
} from "./locations";
import { FLAGS, SERVICE_INFO, buildCityPage } from "./cityContent";

// The location list as it was before Nov 2026 — every one of these URLs must still exist.
const ORIGINAL_LOCATIONS = ["pan-india","all-india","india","delhi-ncr","delhi","gurgaon","noida","greater-noida","faridabad","bengaluru","bangalore","whitefield","electronic-city","hyderabad","hitec-city","gachibowli","chennai","coimbatore","ahmedabad","gift-city","surat","vadodara","rajkot","kolkata","new-town-kolkata","bhubaneswar","chandigarh","mohali","jaipur","lucknow","kanpur","dehradun","indore","bhopal","nagpur","raipur","kochi","thiruvananthapuram","visakhapatnam","vijayawada","pune","hinjewadi","kharadi","baner","wakad","viman-nagar","magarpatta","hadapsar","pimpri","chinchwad","kalyani-nagar","koregaon-park","aundh","balewadi","nashik","aurangabad","mumbai","bkc","andheri","powai","lower-parel","vikhroli","goregaon","worli","byculla","malad","borivali","dadar","nariman-point","navi-mumbai","vashi","mahape","airoli","belapur","kharghar","panvel","thane"];

const canonicalPages = () =>
  SERVICE_SLUGS.flatMap((s) =>
    Object.keys(LOCATIONS)
      .filter((l) => !LOCATIONS[l].sameAs)
      .map((l) => ({ s, l, page: buildCityPage(s, l) })),
  );

describe("location routing", () => {
  it("keeps every original URL", () => {
    const original = [
      ...ORIGINAL_LOCATIONS.map((l) => `/facade-contractor/${l}`),
      ...SERVICE_SLUGS.flatMap((s) => ORIGINAL_LOCATIONS.map((l) => `/facade-contractor/${s}-${l}`)),
    ];
    for (const url of original) expect(ALL_CITY_PAGE_PATHS).toContain(url);
    expect(new Set(ALL_CITY_PAGE_PATHS).size).toBe(ALL_CITY_PAGE_PATHS.length);
  });

  it("parses every pre-rendered URL and rejects unknown ones", () => {
    for (const p of ALL_CITY_PAGE_PATHS) expect(parseCitySlug(p.replace("/facade-contractor/", ""))).not.toBeNull();
    expect(parseCitySlug("curtain-wall-navi-mumbai")).toEqual({ service: "curtain-wall", location: "navi-mumbai" });
    expect(parseCitySlug("facade-maintenance-pune")).toEqual({ service: "facade-maintenance", location: "pune" });
    expect(parseCitySlug("curtain-wall-atlantis")).toBeNull();
    expect(parseCitySlug("")).toBeNull();
  });

  it("points duplicates at one canonical URL", () => {
    expect(canonicalCityPath("facade-contractor", "all-india")).toBe("/facade-contractor/pan-india");
    expect(canonicalCityPath("curtain-wall", "bangalore")).toBe("/facade-contractor/curtain-wall-bengaluru");
    expect(canonicalCityPath("facade-contractor", "pune")).toBe("/facade-contractor-pune");
    expect(canonicalCityPath("curtain-wall", "pune")).toBe("/curtain-wall-pune");
    expect(canonicalCityPath("curtain-wall", "chennai")).toBe("/facade-contractor/curtain-wall-chennai");
  });

  it("lists only self-canonical pages in the sitemap", () => {
    expect(new Set(SITEMAP_CITY_PATHS).size).toBe(SITEMAP_CITY_PATHS.length);
    for (const p of SITEMAP_CITY_PATHS) {
      const hit = parseCitySlug(p.replace("/facade-contractor/", ""))!;
      expect(canonicalCityPath(hit.service, hit.location)).toBe(p);
    }
    expect(SITEMAP_CITY_PATHS).not.toContain("/facade-contractor/bangalore");
    expect(SITEMAP_CITY_PATHS).not.toContain("/facade-contractor/facade-contractor-delhi");
    expect(SITEMAP_CITY_PATHS.length).toBeGreaterThan(500);
  });

  it("links to nearby places, never to itself or a duplicate", () => {
    for (const l of Object.keys(LOCATIONS)) {
      const near = nearbyLocations(l);
      expect(near.length).toBeGreaterThanOrEqual(3);
      expect(near).not.toContain(LOCATIONS[l].sameAs ?? l);
      for (const n of near) expect(LOCATIONS[n].sameAs).toBeUndefined();
    }
  });
});

describe("location page content", () => {
  it("has a distinct context line for every place", () => {
    const own = Object.values(LOCATIONS).filter((l) => !l.sameAs).map((l) => l.context);
    expect(new Set(own).size).toBe(own.length);
  });

  it("has guidance for every condition and service", () => {
    for (const f of Object.values(FLAGS)) for (const text of Object.values(f.by)) expect(text.length).toBeGreaterThan(40);
    for (const s of SERVICE_SLUGS) expect(SERVICE_INFO[s].scope.length).toBeGreaterThanOrEqual(4);
  });

  it("gives every indexable page a unique title, description and intro", () => {
    const pages = canonicalPages();
    for (const key of ["title", "description", "intro"] as const) {
      const values = pages.map(({ page }) => page[key]);
      expect(new Set(values).size, key).toBe(values.length);
    }
  });

  it("keeps descriptions honest and readable", () => {
    for (const { l, page } of canonicalPages()) {
      expect(page.faqs.length).toBe(4);
      expect(page.guidance.length).toBeGreaterThanOrEqual(3);
      expect(page.description).not.toMatch(/undefined|NaN/);
      // Outstation pages must say plainly that there is no local office.
      if (LOCATIONS[l].coverage === "india") expect(page.faqs[0].a).toMatch(/^No\./);
    }
  });
});
