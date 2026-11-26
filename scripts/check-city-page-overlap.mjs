// Compares the <main> text of every /facade-contractor/ page in dist/sitemap.xml (5-word shingles, Jaccard)
// and reports closest-neighbour overlap, to catch near-duplicate (doorway-style) pages.
// Usage: npm run build && npm run check:city-overlap
import fs from "node:fs";
import path from "node:path";
const dist = process.argv[2] ?? "dist";
const sm = fs.readFileSync(path.join(dist, "sitemap.xml"), "utf8");
const urls = [...sm.matchAll(/<loc>https:\/\/fineglaze\.com(\/facade-contractor\/[^<]+)<\/loc>/g)].map(m => m[1]);
const text = (p) => {
  let h = fs.readFileSync(path.join(dist, p, "index.html"), "utf8");
  const s = h.indexOf("<main"), e = h.lastIndexOf("</main>");
  if (s > -1 && e > s) h = h.slice(s, e);
  h = h.replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<style[\s\S]*?<\/style>/g, " ");
  return h.replace(/<[^>]+>/g, " ").replace(/&[a-z#0-9]+;/gi, " ").toLowerCase().split(/[^a-z0-9]+/).filter(Boolean);
};
const shingles = (w, k = 5) => { const s = new Set(); for (let i = 0; i + k <= w.length; i++) s.add(w.slice(i, i + k).join(" ")); return s; };
const docs = urls.map(u => ({ u, w: text(u) })).map(d => ({ ...d, s: shingles(d.w) }));
const jac = (a, b) => { let i = 0; const [x, y] = a.size < b.size ? [a, b] : [b, a]; for (const v of x) if (y.has(v)) i++; return i / (a.size + b.size - i); };
const maxSim = docs.map(() => 0), arg = docs.map(() => "");
for (let i = 0; i < docs.length; i++) for (let j = i + 1; j < docs.length; j++) {
  const v = jac(docs[i].s, docs[j].s);
  if (v > maxSim[i]) { maxSim[i] = v; arg[i] = docs[j].u; }
  if (v > maxSim[j]) { maxSim[j] = v; arg[j] = docs[i].u; }
}
const sorted = [...maxSim].sort((a, b) => a - b);
const q = (p) => (sorted[Math.floor(p * (sorted.length - 1))] * 100).toFixed(0) + "%";
console.log(`pages: ${docs.length}, avg words: ${Math.round(docs.reduce((a, d) => a + d.w.length, 0) / docs.length)}`);
console.log(`closest-neighbour overlap — median ${q(0.5)}, 90th pct ${q(0.9)}, max ${q(1)}`);
const worst = maxSim.map((v, i) => [v, docs[i].u, arg[i]]).sort((a, b) => b[0] - a[0]).slice(0, 5);
for (const [v, a, b] of worst) console.log(`  ${(v * 100).toFixed(0)}%  ${a}  ~  ${b}`);
