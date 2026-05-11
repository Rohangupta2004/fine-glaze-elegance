import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

const locations = [
  "pune", "mumbai", "navi-mumbai", "thane", "bkc", "hinjewadi", "kharadi", "andheri"
];

const dynamicUrls: string[] = [];
locations.forEach(location => {
  dynamicUrls.push(`/facade-contractor/${location}`);
});

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: { overlay: false },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
  ssr: {
    noExternal: ['react-helmet-async'],
  },
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    includedRoutes(paths) {
      return [
        '/', '/about', '/services', '/portfolio', '/contact', '/faq',
        '/aluminium-facade', '/structural-glazing', '/curtain-wall-systems',
        '/acp-aluminium-cladding', '/glass-railings', '/maintenance-services',
        ...dynamicUrls
      ];
    },
  },
}));
