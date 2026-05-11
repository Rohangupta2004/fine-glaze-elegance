import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";

/* --- Core Business Pages --- */
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Dev from "./pages/Dev";
import ProjectsQR from "./pages/ProjectsQR";

/* --- SEO & Service Pages --- */
import AluminiumFacade from "./pages/AluminiumFacade";
import StructuralGlazing from "./pages/StructuralGlazing";
import CurtainWall from "./pages/CurtainWall";
import AcpCladding from "./pages/AcpCladding";
import GlassRailings from "./pages/GlassRailings";
import Maintenance from "./pages/Maintenance";
import ServiceDetail from "./pages/ServiceDetail"; // NEW: The Dynamic Pillar Page

/* --- App Portals --- */
import Portal from "./pages/Portal";
import Admin from "./pages/Admin";
import FAQ from './pages/FAQ';

/* --- Content & Local SEO Pages --- */
import Blog from "./pages/Blog";
import BlogArticle from "./pages/BlogArticle";
import CityLanding from "./pages/CityLanding";

const queryClient = new QueryClient();

// AppWrapper handles all your providers so they wrap around every generated page
const AppWrapper = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Outlet />
    </TooltipProvider>
  </QueryClientProvider>
);

// The SSG-Compatible Route Array
export const routes = [
  {
    path: "/",
    element: <AppWrapper />,
    children: [
      /* --- Core Business Pages --- */
      { index: true, element: <Index /> },
      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "projects-qr", element: <ProjectsQR /> },
      { path: "project/:slug", element: <ProjectDetail /> },
      { path: "contact", element: <Contact /> },

      /* --- Legacy Service Pages --- */
      { path: "aluminium-facade", element: <AluminiumFacade /> },
      { path: "structural-glazing", element: <StructuralGlazing /> },
      { path: "curtain-wall-systems", element: <CurtainWall /> },
      { path: "acp-aluminium-cladding", element: <AcpCladding /> },
      { path: "glass-railings", element: <GlassRailings /> },
      { path: "maintenance-services", element: <Maintenance /> },

      /* --- NEW: Dynamic Pillar Pages --- */
      { path: "services/:slug", element: <ServiceDetail /> },

      /* --- App Portals --- */
      { path: "portal", element: <Portal /> },
      { path: "admin", element: <Admin /> },
      { path: "faq", element: <FAQ /> },

      /* --- Blog --- */
      { path: "blog", element: <Blog /> },
      { path: "blog/:slug", element: <BlogArticle /> },

      /* --- Local SEO Traps --- */
      { path: "facade-contractor/:city", element: <CityLanding /> },

      /* --- Dev & 404 --- */
      { path: "dev", element: <Dev /> },
      { path: "*", element: <NotFound /> }
    ]
  }
];

// Standard export for Vite SSG to initialize
export default function App() {
  return <Outlet />;
}
