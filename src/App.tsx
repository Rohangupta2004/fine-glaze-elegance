import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Dev from "./pages/Dev";
import ProjectsQR from "./pages/ProjectsQR";

import AluminiumFacade from "./pages/AluminiumFacade";
import StructuralGlazing from "./pages/StructuralGlazing";
import CurtainWall from "./pages/CurtainWall";
import AcpCladding from "./pages/AcpCladding";
import GlassRailings from "./pages/GlassRailings";
import Maintenance from "./pages/Maintenance";

import Portal from "./pages/Portal";
import Admin from "./pages/Admin";
import FAQ from './pages/FAQ';

import Blog from "./pages/Blog";
import BlogArticle from "./pages/BlogArticle";
import CityLanding from "./pages/CityLanding";

const queryClient = new QueryClient();

const AppWrapper = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <HelmetProvider>
        <Toaster />
        <Sonner />
        <Outlet />
      </HelmetProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export const routes = [
  {
    path: "/",
    element: <AppWrapper />,
    children: [
      { index: true, element: <Index /> },
      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "projects-qr", element: <ProjectsQR /> },
      { path: "project/:slug", element: <ProjectDetail /> },
      { path: "contact", element: <Contact /> },
      { path: "aluminium-facade", element: <AluminiumFacade /> },
      { path: "structural-glazing", element: <StructuralGlazing /> },
      { path: "curtain-wall-systems", element: <CurtainWall /> },
      { path: "acp-aluminium-cladding", element: <AcpCladding /> },
      { path: "glass-railings", element: <GlassRailings /> },
      { path: "maintenance-services", element: <Maintenance /> },
      { path: "portal", element: <Portal /> },
      { path: "admin", element: <Admin /> },
      { path: "faq", element: <FAQ /> },
      { path: "blog", element: <Blog /> },
      { path: "blog/:slug", element: <BlogArticle /> },
      { path: "facade-contractor/:city", element: <CityLanding /> },
      { path: "dev", element: <Dev /> },
      { path: "*", element: <NotFound /> }
    ]
  }
];

export default function App() {
  return <Outlet />;
}
