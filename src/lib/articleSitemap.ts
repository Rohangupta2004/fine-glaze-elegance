interface SitemapPost { slug: string; date: string }
interface UpdatedArticle { updated: string }
interface SitemapImage { cover: string }

const escapeXml = (value: string) => value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");

export function buildArticleSitemap(baseXml: string, posts: SitemapPost[], updates: Record<string, UpdatedArticle>, images: Record<string, SitemapImage>) {
  const entries = new Map<string, string>();
  for (const match of baseXml.matchAll(/<url>[\s\S]*?<\/url>/g)) {
    const location = match[0].match(/<loc>(.*?)<\/loc>/)?.[1];
    if (!location || location.startsWith("https://fineglaze.com/blog/")) continue;
    const latestUpdate = Object.values(updates).map((update) => update.updated).sort().slice(-1)[0];
    const entry = location === "https://fineglaze.com/blog" && latestUpdate ? match[0].replace(/<lastmod>.*?<\/lastmod>/, `<lastmod>${latestUpdate}</lastmod>`) : match[0];
    entries.set(location, entry);
  }
  for (const post of posts) {
    const location = `https://fineglaze.com/blog/${post.slug}`;
    const image = images[post.slug];
    entries.set(location, `<url><loc>${escapeXml(location)}</loc><lastmod>${escapeXml(updates[post.slug]?.updated ?? post.date)}</lastmod>${image ? `<image:image><image:loc>${escapeXml(`https://fineglaze.com${image.cover}`)}</image:loc></image:image>` : ""}</url>`);
  }
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${Array.from(entries.values()).join("\n")}\n</urlset>\n`;
}
