import { describe, expect, it } from "vitest";
import { blogPosts, blogPostsList } from "@/data/blog";
import { projectsData } from "@/data/projects";
import { articleEnhancements, articleKeywords, articleSectionId, buildArticleSchemas, normalizeArticleSections, normalizeArticleTable, relatedArticles } from "./articleSeo";
import { buildArticleSitemap } from "./articleSitemap";

describe("article search data", () => {
  it("enhances the same 15 articles as the image update with valid references", () => {
    expect(Object.keys(articleEnhancements).sort()).toEqual(blogPostsList.slice(0, 15).map((post) => post.slug).sort());
    for (const [slug, content] of Object.entries(articleEnhancements)) {
      expect(blogPosts[slug]).toBeDefined();
      expect(content.metaTitle.length).toBeLessThanOrEqual(85);
      expect(content.metaDescription.length).toBeLessThanOrEqual(190);
      expect(content.faqs).toHaveLength(3);
      expect(content.quoteChecklist).toHaveLength(3);
      expect(content.updated >= blogPosts[slug].date).toBe(true);
      expect(content.sources.length).toBeGreaterThan(0);
      content.sources.forEach((source) => expect(new URL(source.url).protocol).toBe("https:"));
      content.relatedSlugs.forEach((related) => { expect(blogPosts[related]).toBeDefined(); expect(related).not.toBe(slug); });
      if (content.project) expect(projectsData[content.project.slug]).toBeDefined();
    }
  });

  it("creates unique stable section IDs even for repeated headings", () => {
    expect(articleSectionId("Glass, ACP & costs?", 0)).toBe("section-1-glass-acp-costs");
    expect(articleSectionId("Glass, ACP & costs?", 1)).not.toBe(articleSectionId("Glass, ACP & costs?", 0));
  });

  it("handles both article table formats and empty tables", () => {
    expect(normalizeArticleTable([["System", "Scope"], ["Glass", "Frame"]])).toEqual({ headers: ["System", "Scope"], rows: [["Glass", "Frame"]] });
    const modern = { headers: ["System"], rows: [["Glass"]] };
    expect(normalizeArticleTable(modern)).toBe(modern);
    expect(normalizeArticleTable([])).toBeNull();
    expect(normalizeArticleTable(undefined)).toBeNull();
  });

  it("retains paragraphs, lists and tables in legacy block-based articles", () => {
    const sections = normalizeArticleSections([{ type: "heading", text: "Glass" }, { type: "body", text: "First paragraph" }, { type: "body", text: "Second paragraph" }, { type: "list", items: ["Safety"] }, { type: "table", data: [["Type"], ["Laminated"]] }]);
    expect(sections).toEqual([{ heading: "Glass", body: ["First paragraph", "Second paragraph"], list: ["Safety"], table: [["Type"], ["Laminated"]] }]);
  });

  it("supports legacy keyword arrays without mixing in irrelevant city lists", () => {
    const post = blogPostsList.find((item) => Array.isArray(item.keywords))!;
    expect(articleKeywords(post)).toEqual(Array.from(new Set((post.keywords as string[]).map((term) => term.trim()))));
    const enhanced = articleEnhancements[blogPostsList[0].slug];
    expect(articleKeywords(blogPostsList[0], enhanced)).toEqual(enhanced.terms);
  });

  it("ranks explicitly relevant articles before generic recent posts", () => {
    const post = blogPostsList[4];
    const content = articleEnhancements[post.slug];
    expect(relatedArticles(post, blogPostsList, content).map((item) => item.slug)).toEqual(content.relatedSlugs);
  });

  it("uses real publication and update dates, canonical IDs and visible source citations", () => {
    const post = blogPostsList[0], content = articleEnhancements[post.slug];
    const [article, breadcrumbs] = buildArticleSchemas(post, "https://fineglaze.com/example.webp", content, { width: 1600, height: 900 });
    expect(article["@type"]).toBe("BlogPosting");
    expect(article.datePublished).toBe(`${post.date}T00:00:00+05:30`);
    expect(article.dateModified).toBe("2026-10-21T00:00:00+05:30");
    expect(article.citation).toEqual(content.sources.map((source) => source.url));
    expect(article.mainEntityOfPage["@id"]).toBe(`https://fineglaze.com/blog/${post.slug}`);
    expect(breadcrumbs.itemListElement[2].name).toBe(content.title);
    expect(JSON.parse(JSON.stringify(article)).image).toEqual({ "@type": "ImageObject", url: "https://fineglaze.com/example.webp", width: 1600, height: 900 });
  });
});

describe("article sitemap", () => {
  it("replaces stale blog entries, deduplicates URLs and preserves other pages", () => {
    const base = '<urlset><url><loc>https://fineglaze.com/about</loc><lastmod>2020-01-01</lastmod></url><url><loc>https://fineglaze.com/about</loc></url><url><loc>https://fineglaze.com/blog/old-slug</loc></url><url><loc>https://fineglaze.com/blog</loc><lastmod>2020-01-01</lastmod></url></urlset>';
    const xml = buildArticleSitemap(base, [{ slug: "new-slug", date: "2026-01-01" }], { "new-slug": { updated: "2026-10-21" } }, { "new-slug": { cover: "/cover.webp" } });
    const document = new DOMParser().parseFromString(xml, "application/xml");
    expect(document.querySelector("parsererror")).toBeNull();
    const locations = Array.from(document.getElementsByTagName("loc")).map((element) => element.textContent);
    expect(locations).toEqual(["https://fineglaze.com/about", "https://fineglaze.com/blog", "https://fineglaze.com/blog/new-slug"]);
    expect(xml).not.toContain("old-slug");
    expect(xml).toContain("<image:loc>https://fineglaze.com/cover.webp</image:loc>");
    expect(xml).toContain("<lastmod>2026-10-21</lastmod>");
  });
});
