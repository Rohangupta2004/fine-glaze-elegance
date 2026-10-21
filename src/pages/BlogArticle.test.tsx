import type { ReactNode } from "react";
import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";
import { renderToString } from "react-dom/server";
import { Route, Routes } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { blogPostsList } from "@/data/blog";
import { getArticleEnhancement, normalizeArticleSections, normalizeArticleTable } from "@/lib/articleSeo";
import BlogArticle from "./BlogArticle";

vi.mock("@/components/layout/Layout", () => ({ Layout: ({ children }: { children: ReactNode }) => <main>{children}</main> }));
vi.mock("@/hooks/useBlogImages", async () => {
  const { getArticleVisual } = await import("@/data/articleVisuals");
  return { useBlogImages: () => ({ getHeroImage: (slug: string, fallback: string) => getArticleVisual(slug)?.cover ?? fallback }) };
});

const originalDomSetting = HelmetProvider.canUseDOM;
beforeAll(() => { HelmetProvider.canUseDOM = false; });
afterAll(() => { HelmetProvider.canUseDOM = originalDomSetting; });

describe("crawlable article output", () => {
  it.each(blogPostsList)("renders $slug with consistent headings, tables, links and schema", (post) => {
    const context = {};
    const markup = renderToString(<HelmetProvider context={context}><StaticRouter location={`/blog/${post.slug}`}><Routes><Route path="/blog/:slug" element={<BlogArticle />} /></Routes></StaticRouter></HelmetProvider>);
    const container = document.createElement("div"); container.innerHTML = markup;
    const content = getArticleEnhancement(post.slug);
    expect(container.querySelectorAll("h1")).toHaveLength(1);
    expect(container.querySelector("h1")?.textContent).toBe(content?.title ?? post.title);
    expect(container.querySelectorAll("table")).toHaveLength(normalizeArticleSections(content?.sections ?? post.content).filter((section) => normalizeArticleTable(section.table)).length);
    container.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => expect(container.querySelector(`[id="${anchor.hash.slice(1)}"]`)).not.toBeNull());
    if (content) {
      expect(container.querySelector("#quick-answer")?.textContent).toBe(content.question);
      expect(container.querySelectorAll("#article-questions details")).toHaveLength(3);
      expect(container.querySelectorAll("#references a")).toHaveLength(content.sources.length);
      expect(container.querySelectorAll('img[src$="-explainer-v1.svg"]')).toHaveLength(1);
    } else {
      expect(container.querySelector("#article-questions")).toBeNull();
    }
    const helmet = (context as { helmet: { script: { toString(): string }; link: { toString(): string } } }).helmet;
    const head = document.createElement("div"); head.innerHTML = helmet.script.toString();
    const schemas = Array.from(head.querySelectorAll('script[type="application/ld+json"]')).map((script) => JSON.parse(script.textContent!));
    expect(schemas.map((schema) => schema["@type"])).toEqual(["BlogPosting", "BreadcrumbList"]);
    expect(schemas[0].headline).toBe(content?.title ?? post.title);
    expect(helmet.link.toString()).toContain(`https://fineglaze.com/blog/${post.slug}`);
  });
});
