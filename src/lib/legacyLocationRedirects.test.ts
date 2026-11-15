import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import path from "node:path";
import { legacyLocationDestination } from "./legacyLocationRedirects";

// Every URL the old site generated (copied from the pre-Nov-2026 vite.config).
const oldLocations = [
  "pan-india", "all-india", "india", "delhi-ncr", "delhi", "gurgaon", "noida", "greater-noida", "faridabad",
  "bengaluru", "bangalore", "whitefield", "electronic-city", "hyderabad", "hitec-city", "gachibowli",
  "chennai", "coimbatore", "ahmedabad", "gift-city", "surat", "vadodara", "rajkot", "kolkata", "new-town-kolkata",
  "bhubaneswar", "chandigarh", "mohali", "jaipur", "lucknow", "kanpur", "dehradun", "indore", "bhopal", "nagpur",
  "raipur", "kochi", "thiruvananthapuram", "visakhapatnam", "vijayawada", "pune", "hinjewadi", "kharadi", "baner",
  "wakad", "viman-nagar", "magarpatta", "hadapsar", "pimpri", "chinchwad", "kalyani-nagar", "koregaon-park", "aundh",
  "balewadi", "nashik", "aurangabad", "mumbai", "bkc", "andheri", "powai", "lower-parel", "vikhroli", "goregaon",
  "worli", "byculla", "malad", "borivali", "dadar", "nariman-point", "navi-mumbai", "vashi", "mahape", "airoli",
  "belapur", "kharghar", "panvel", "thane",
];
const oldServices = [
  "commercial-construction", "structural-glazing", "curtain-wall", "acp-cladding",
  "glass-railing", "facade-maintenance", "facade-contractor",
];
const oldUrls = [
  ...oldLocations.map((l) => `/facade-contractor/${l}`),
  ...oldServices.flatMap((s) => oldLocations.map((l) => `/facade-contractor/${s}-${l}`)),
];

type Rule = { source: string; destination: string; permanent?: boolean; has?: unknown };
const vercel = JSON.parse(readFileSync(path.resolve(__dirname, "../../vercel.json"), "utf8")) as { redirects: Rule[] };

/** Minimal path-to-regexp emulation for the simple patterns used in vercel.json. */
const toRegExp = (source: string) =>
  new RegExp(
    "^" +
      source.replace(/:([a-z]+)(\(([^)]+)\)|\*)?/g, (_m, _name, mod, alts) =>
        alts ? `(?:${alts})` : mod === "*" ? ".*" : "[^/]+?",
      ) +
      "$",
  );

const vercelDestination = (url: string) =>
  vercel.redirects.filter((r) => !r.has).find((r) => toRegExp(r.source).test(url))?.destination;

const routesInApp = readFileSync(path.resolve(__dirname, "../App.tsx"), "utf8");

describe("retired location pages", () => {
  it("covers every URL the old site generated", () => {
    expect(oldUrls.length).toBe(616);
  });

  it.each(oldUrls)("%s redirects identically on Vercel and in the app", (url) => {
    const slug = url.replace("/facade-contractor/", "");
    const appDest = legacyLocationDestination(slug);
    expect(vercelDestination(url)).toBe(appDest);
    // Destination must be a real, routed page.
    expect(routesInApp).toContain(`path: "${appDest.slice(1)}"`);
  });

  it("sends local pages to the matching hand-written page", () => {
    expect(legacyLocationDestination("curtain-wall-hinjewadi")).toBe("/curtain-wall-pune");
    expect(legacyLocationDestination("structural-glazing-navi-mumbai")).toBe("/structural-glazing-mumbai");
    expect(legacyLocationDestination("facade-contractor-thane")).toBe("/facade-contractor-thane");
    expect(legacyLocationDestination("vikhroli")).toBe("/facade-contractor-mumbai");
  });

  it("sends cities we do not operate in to the general service page", () => {
    expect(legacyLocationDestination("delhi-ncr")).toBe("/services");
    expect(legacyLocationDestination("curtain-wall-chennai")).toBe("/curtain-wall-systems");
    expect(legacyLocationDestination("glass-railing-kolkata")).toBe("/glass-railings");
  });

  it("all redirects are permanent", () => {
    const legacy = vercel.redirects.filter((r) => r.source.startsWith("/facade-contractor/"));
    expect(legacy.length).toBeGreaterThan(0);
    expect(legacy.every((r) => r.permanent === true)).toBe(true);
  });
});
