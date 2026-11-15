import { defineConfig, type Plugin } from "vite";
import { readFileSync } from "node:fs";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { buildArticleSitemap } from "./src/lib/articleSitemap";
import articleEnhancements from "./src/data/articleEnhancements.json";
import articleVisuals from "./src/data/articleVisuals.json";

const articleSitemapPlugin = (): Plugin => {
  let isServerBuild = false;
  return {
    name: "article-sitemap",
    apply: "build",
    configResolved(config) { isServerBuild = Boolean(config.build.ssr); },
    generateBundle() {
      if (isServerBuild) return;
      this.emitFile({
        type: "asset",
        fileName: "sitemap.xml",
        source: buildArticleSitemap(readFileSync(path.resolve(__dirname, "public/sitemap.xml"), "utf8"), Object.values(blogPosts), articleEnhancements, articleVisuals),
      });
    },
  };
};

// Retired: the ~600 auto-generated /facade-contractor/:city pages are no longer
// pre-rendered. vercel.json 301-redirects every old URL to a genuine page
// (see src/lib/legacyLocationRedirects.ts).

// 3. Blog Slugs — auto-generated from blog data keys
import { blogPosts } from "./src/data/blog";
const blogUrls = Object.keys(blogPosts).map(slug => `/blog/${slug}`);

// 4b. Static SEO Pages (service×city, building-type, guides)
const staticSeoUrls = [
  "/curtain-wall-pune",
  "/structural-glazing-pune",
  "/acp-cladding-pune",
  "/glass-railing-pune",
  "/facade-contractor-pune",
  "/facade-contractor-mumbai",
  "/facade-contractor-navi-mumbai",
  "/facade-contractor-thane",
  "/curtain-wall-mumbai",
  "/structural-glazing-mumbai",
  "/aluminium-facade-mumbai",
  "/curtain-wall-cost-guide",
  "/aluminium-vs-acp-cladding",
  "/commercial-building-facade",
  "/facade-waterproofing",
  "/pvdf-vs-powder-coating-aluminium",
  "/facade-design-guide",
  "/curtain-wall-vs-structural-glazing",
  "/it-park-facade",
  "/hospital-facade",
  "/hotel-facade",
  "/mall-facade",
  "/residential-facade",
  "/industrial-facade",
  "/facade-amc-guide",
  // Trust, conversion and fenestration pages (Nov 2026)
  "/aluminium-windows-doors",
  "/quality-safety",
  "/facade-cost-estimator",
];

// 4. Project Slugs — derived from src/data/projects.ts so new projects are always pre-rendered.
import { projectsData } from "./src/data/projects";
const projectUrls = Object.keys(projectsData).map((slug) => `/project/${slug}`);

export default defineConfig(({ mode }) => ({
  server: {
    host: "0.0.0.0",
    port: 8080,
    hmr: { overlay: false },
  },
  plugins: [react(), articleSitemapPlugin(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    dirStyle: 'nested',
    includedRoutes(paths) {
      return [
        // Standard Core Pages
        '/', '/about', '/services', '/portfolio', '/contact', '/faq', '/blog',
        // Profile links must also work on direct visits, refreshes and shared slides.
        '/company-profile', '/brochure', '/profile',
        // Legacy Service Pages
        '/structural-glazing', '/curtain-wall-systems',
        '/acp-aluminium-cladding', '/glass-railings', '/maintenance-services',
        '/skylights-canopies', '/aluminium-louvers', '/glass-partitions',
        '/privacy-policy', '/terms-of-service',
        // Generated lists
        ...blogUrls,
        ...projectUrls,
        ...staticSeoUrls
      ];
    },
  },
}));
