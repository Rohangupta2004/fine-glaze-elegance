// Regenerates the retired-location 301 rules in vercel.json from
// src/data/legacyLocations.json. Run: node scripts/generate-legacy-redirects.mjs
import { readFileSync, writeFileSync } from "node:fs";

const root = new URL("..", import.meta.url);
const data = JSON.parse(readFileSync(new URL("src/data/legacyLocations.json", root), "utf8"));
const vercelPath = new URL("vercel.json", root);
const vercel = JSON.parse(readFileSync(vercelPath, "utf8"));

const TAG = "/facade-contractor/";
const rules = [];
const services = Object.keys(data.destinations).filter((k) => k !== "_bare").sort((a, b) => b.length - a.length);

for (const service of services) {
  for (const [group, locations] of Object.entries(data.groups)) {
    rules.push({
      source: `${TAG}${service}-:loc(${locations.join("|")})`,
      destination: data.destinations[service][group],
      permanent: true,
    });
  }
  // Any other city for this service (Delhi, Chennai, ...).
  rules.push({ source: `${TAG}${service}-:loc`, destination: data.destinations[service].other, permanent: true });
}
for (const [group, locations] of Object.entries(data.groups)) {
  rules.push({ source: `${TAG}:loc(${locations.join("|")})`, destination: data.destinations._bare[group], permanent: true });
}
rules.push({ source: `${TAG}:path*`, destination: data.destinations._bare.other, permanent: true });
rules.push({ source: "/services/:service/:city", destination: "/services", permanent: true });

const kept = (vercel.redirects ?? []).filter((r) => !r.source.startsWith(TAG) && r.source !== "/services/:service/:city");
vercel.redirects = [...kept, ...rules];
writeFileSync(vercelPath, JSON.stringify(vercel, null, 2) + "\n");
console.log(`vercel.json: ${rules.length} legacy location rules (${kept.length} other redirects kept)`);
