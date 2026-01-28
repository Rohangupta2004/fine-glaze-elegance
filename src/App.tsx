import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

/* Core Pages */
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Dev from "./pages/Dev";

/* SEO Service Pages */
import AluminiumFacade from "./pages/AluminiumFacade";
import StructuralGlazing from "./pages/StructuralGlazing";
import CurtainWall from "./pages/CurtainWall";
import AcpCladding from "./pages/AcpCladding"; // ✅ IMPORTED NEW PAGE
import GlassRailings from "./pages/GlassRailings";
/* App Portals */
import Portal from "./pages/Portal";
import Admin from "./pages/Admin";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <HelmetProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* --- Core Business Pages --- */}
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/project/:slug" element={<ProjectDetail />} />
            <Route path="/contact" element={<Contact />} />

            {/* --- SEO Strategy Pages --- */}
            <Route path="/aluminium-facade" element={<AluminiumFacade />} />
            <Route path="/structural-glazing" element={<StructuralGlazing />} />
            <Route path="/curtain-wall-systems" element={<CurtainWall />} />
            
            {/* ✅ NEW ROUTE (Matches Header Link) */}
            <Route path="/acp-aluminium-cladding" element={<AcpCladding />} />

            {/* --- Application Portals --- */}
            <Route path="/portal" element={<Portal />} />
            <Route path="/admin" element={<Admin />} />

            {/* --- Development Utils --- */}
            <Route path="/dev" element={<Dev />} />
            
            {/* --- Catch All --- */}
            <Route path="*" element={<NotFound />} />
            <Route path="/glass-railings" element={<GlassRailings />} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

