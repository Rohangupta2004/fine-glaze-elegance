import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

/* SEO Service Pages */
import AluminiumFacade from "./pages/AluminiumFacade";
import StructuralGlazing from "./pages/StructuralGlazing";

/* ✅ CLIENT PORTAL */
import Portal from "./pages/Portal";


import Dev from "./pages/Dev";
import Admin from "./pages/Admin";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Core Pages */}
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/project/:slug" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />

          {/* SEO Pages */}
          <Route path="/aluminium-facade" element={<AluminiumFacade />} />
          <Route
            path="/structural-glazing"
            element={<StructuralGlazing />}
          />

          {/* 🔐 Client Portal */}
          <Route path="/portal" element={<Portal />} />

        <Route path="/dev" element={<Dev />} />
          {/* Add this line below the portal route */}
<Route path="/admin" element={<Admin />} />
          </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
            
            
            
