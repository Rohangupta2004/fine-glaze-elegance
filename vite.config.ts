import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// 1. All Locations (Pan India, National Metros, and Regional Hubs)
const locations = [
  "pan-india", "all-india", "india", "delhi-ncr", "bengaluru", "hyderabad", "chennai", "ahmedabad", "kolkata",
  "pune", "hinjewadi", "kharadi", "baner", "wakad", "viman-nagar", "magarpatta",
  "hadapsar", "pimpri", "chinchwad", "kalyani-nagar", "koregaon-park", "aundh",
  "balewadi", "mumbai", "bkc", "andheri", "powai", "lower-parel", "vikhroli",
  "goregaon", "worli", "byculla", "malad", "borivali", "dadar", "nariman-point",
  "navi-mumbai", "vashi", "mahape", "airoli", "belapur", "kharghar", "panvel", "thane"
];

// 2. All 7 Services from your Sitemap
const services = [
  "commercial-construction",
  "structural-glazing",
  "curtain-wall",
  "acp-cladding",
  "glass-railing",
  "facade-maintenance",
  "facade-contractor"
];

// Generate all dynamic facade URLs
const dynamicUrls: string[] = [];
// Direct city/region URLs
locations.forEach(location => {
  dynamicUrls.push(`/facade-contractor/${location}`);
});
// Service-location combination URLs
services.forEach(service => {
  locations.forEach(location => {
    dynamicUrls.push(`/facade-contractor/${service}-${location}`);
  });
});

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
];

// 4. Project Slugs (From src/data/projects.ts)
const projectUrls = [
  "/project/ltimindtree-campus",
  "/project/embassy-247",
  "/project/salsette-27",
  "/project/leela-business-park",
  "/project/pune-airport-terminal",
  "/project/jindal-house",
  "/project/nirmaann-estrellaa",
  "/project/ssg-honesty",
  "/project/leela-hotel",
  "/project/embassy-techzone"
];

export default defineConfig(({ mode }) => ({
  server: {
    host: "0.0.0.0",
    port: 8080,
    hmr: { overlay: false },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
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
        // Legacy Service Pages
        '/aluminium-facade', '/structural-glazing', '/curtain-wall-systems',
        '/acp-aluminium-cladding', '/glass-railings', '/maintenance-services',
        // Dynamic Arrays Generated Above
        ...dynamicUrls,
        ...blogUrls,
        ...projectUrls,
        ...staticSeoUrls
      ];
    },
  },
}));
