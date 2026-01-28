import React, { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/layout/ScrollToTop"; 
import { PageLoader } from "@/components/ui/page-loader"; 

/* --- Eager Load Core Pages (Fixes Blank Screen & Improves SEO) --- */
import Index from "./pages/Index"; // IMPORTED DIRECTLY

/* --- Lazy Load Secondary Pages --- */
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Dev = lazy(() => import("./pages/Dev"));

/* SEO Service Pages */
const AluminiumFacade = lazy(() => import("./pages/AluminiumFacade"));
const StructuralGlazing = lazy(() => import("./pages/StructuralGlazing"));

/* Portals */
const Portal = lazy(() => import("./pages/Portal"));
const Admin = lazy(() => import("./pages/Admin"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        {/* Suspense handles the loading of lazy pages */}
        <Suspense fallback={<PageLoader />}>
          <Routes>
            {/* Index is now eager loaded, so it will show instantly */}
            <Route path="/" element={<Index />} />
            
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/project/:slug" element={<ProjectDetail />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/aluminium-facade" element={<AluminiumFacade />} />
            <Route path="/structural-glazing" element={<StructuralGlazing />} />

            <Route path="/portal" element={<Portal />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/dev" element={<Dev />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
