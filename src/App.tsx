import { Suspense, lazy } from "react"; //
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/layout/ScrollToTop"; // Import the new component
import { PageLoader } from "@/components/ui/page-loader"; // Import the new loader

/* --- Lazy Load Pages for Performance --- */
const Index = lazy(() => import("./pages/Index"));
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
        {/* Handles scrolling to top on route change */}
        <ScrollToTop />
        
        {/* Suspense shows the loader while the chunk is downloading */}
        <Suspense fallback={<PageLoader />}>
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

            {/* --- Application Portals --- */}
            <Route path="/portal" element={<Portal />} />
            <Route path="/admin" element={<Admin />} />

            {/* --- Development Utils --- */}
            <Route path="/dev" element={<Dev />} />
            
            {/* --- Catch All --- */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
