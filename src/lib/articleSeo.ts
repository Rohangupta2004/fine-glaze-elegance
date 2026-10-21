import type { ArticleBlock, BlogPost, Section } from "@/data/blog";
import editorialData from "@/data/articleEnhancements.json";

export interface ArticleEnhancement {
  title: string;
  metaTitle: string;
  metaDescription: string;
  updated: string;
  terms: string[];
  question: string;
  answer: string;
  takeaways: string[];
  quoteChecklist: string[];
  faqs: { question: string; answer: string }[];
  serviceLinks: { label: string; href: string }[];
  relatedSlugs: string[];
  sources: { title: string; url: string; note: string }[];
  project?: { slug: string; title: string; scope: string };
  sections?: Section[];
}

export const articleEnhancements: Record<string, ArticleEnhancement> = editorialData;
export const getArticleEnhancement = (slug: string): ArticleEnhancement | undefined => articleEnhancements[slug];

export function articleSectionId(heading: string, index: number): string {
  const label = (heading || "overview").toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  return `section-${index + 1}-${label || "overview"}`;
}

export function normalizeArticleSections(content: (Section | ArticleBlock)[]): Section[] {
  const sections: Section[] = [];
  for (const item of content) {
    if (!("type" in item)) { sections.push({ ...item }); continue; }
    if (item.type === "heading") { sections.push({ heading: item.text || "Overview" }); continue; }
    if (!sections.length) sections.push({ heading: "Overview" });
    const current = sections[sections.length - 1];
    if (item.type === "body" && item.text) {
      const paragraphs = Array.isArray(current.body) ? current.body : current.body ? [current.body] : [];
      current.body = [...paragraphs, item.text];
    }
    if (item.type === "table" && item.data) current.table = item.data;
    if (item.type === "list" && item.items) current.list = [...(current.list ?? []), ...item.items];
  }
  return sections;
}

export function normalizeArticleTable(table: Section["table"]) {
  if (!table) return null;
  const value = Array.isArray(table) ? { headers: table[0] ?? [], rows: table.slice(1) } : table;
  if (!value.headers.length) return null;
  return value;
}

export function articleKeywords(post: BlogPost, enhancement?: ArticleEnhancement): string[] {
  const original = Array.isArray(post.keywords) ? post.keywords : post.keywords.split(",");
  const terms = enhancement?.terms ?? original;
  return Array.from(new Set(terms.map((term) => term.trim()).filter(Boolean)));
}

export function relatedArticles(post: BlogPost, all: BlogPost[], enhancement?: ArticleEnhancement): BlogPost[] {
  const preferred = enhancement?.relatedSlugs ?? [];
  const terms = new Set(articleKeywords(post, enhancement).flatMap((term) => term.toLowerCase().split(/\W+/)).filter((term) => term.length > 3));
  return all.filter((candidate) => candidate.slug !== post.slug).map((candidate, index) => {
    const rank = preferred.indexOf(candidate.slug);
    const matchingTerms = articleKeywords(candidate, getArticleEnhancement(candidate.slug)).join(" ").toLowerCase().split(/\W+/).filter((term) => terms.has(term)).length;
    return { candidate, score: rank >= 0 ? 1000 - rank : matchingTerms + (candidate.category === post.category ? 5 : 0), index };
  }).sort((a, b) => b.score - a.score || a.index - b.index).slice(0, 3).map(({ candidate }) => candidate);
}

export function buildArticleSchemas(post: BlogPost, imageUrl: string, enhancement?: ArticleEnhancement, dimensions?: { width: number; height: number }) {
  const url = `https://fineglaze.com/blog/${post.slug}`;
  const title = enhancement?.title ?? post.title;
  const article = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    headline: title,
    description: enhancement?.metaDescription ?? post.metaDescription,
    image: { "@type": "ImageObject", url: imageUrl, ...(dimensions ? { width: dimensions.width, height: dimensions.height } : {}) },
    datePublished: `${post.date}T00:00:00+05:30`,
    dateModified: `${enhancement?.updated ?? post.date}T00:00:00+05:30`,
    inLanguage: "en-IN",
    articleSection: post.category,
    keywords: articleKeywords(post, enhancement),
    isAccessibleForFree: true,
    author: { "@type": "Organization", name: "Fine Glaze", url: "https://fineglaze.com/about" },
    publisher: { "@type": "Organization", "@id": "https://fineglaze.com/#organization", name: "Fine Glaze", url: "https://fineglaze.com", logo: { "@type": "ImageObject", url: "https://fineglaze.com/Logofg.webp" } },
    ...(enhancement ? { abstract: enhancement.answer, citation: enhancement.sources.map((source) => source.url) } : {}),
  };
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fineglaze.com/" },
      { "@type": "ListItem", position: 2, name: "Articles", item: "https://fineglaze.com/blog" },
      { "@type": "ListItem", position: 3, name: title, item: url },
    ],
  };
  return [article, breadcrumbs] as [typeof article, typeof breadcrumbs];
}
