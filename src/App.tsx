import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense } from "react";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { PageLoader } from "@/components/PageLoader";
import { BackToTop } from "@/components/BackToTop";

// Eager-load home page (most visited, LCP critical)
import Index from "./pages/Index";

// Lazy-load everything else — each page becomes its own chunk
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Dev = lazy(() => import("./pages/Dev"));
const ProjectsQR = lazy(() => import("./pages/ProjectsQR"));

const AluminiumFacade = lazy(() => import("./pages/AluminiumFacade"));
const StructuralGlazing = lazy(() => import("./pages/StructuralGlazing"));
const CurtainWall = lazy(() => import("./pages/CurtainWall"));
const AcpCladding = lazy(() => import("./pages/AcpCladding"));
const GlassRailings = lazy(() => import("./pages/GlassRailings"));
const Maintenance = lazy(() => import("./pages/Maintenance"));
const Skylights = lazy(() => import("./pages/Skylights"));
const Louvers = lazy(() => import("./pages/Louvers"));
const GlassPartitions = lazy(() => import("./pages/GlassPartitions"));

const Portal = lazy(() => import("./pages/Portal"));
const Admin = lazy(() => import("./pages/Admin"));
const AdminImages = lazy(() => import("./pages/AdminImages"));
const AdminLogos = lazy(() => import("./pages/AdminLogos"));
const AdminBlogImages = lazy(() => import("./pages/AdminBlogImages"));
const AdminMedia = lazy(() => import("./pages/AdminMedia"));
const AdminSiteContent = lazy(() => import("./pages/AdminSiteContent"));
const FAQ = lazy(() => import("./pages/FAQ"));

const Blog = lazy(() => import("./pages/Blog"));
const BlogArticle = lazy(() => import("./pages/BlogArticle"));
const CityLanding = lazy(() => import("./pages/CityLanding"));

// 25 SEO pages
const CurtainWallPune = lazy(() => import("./pages/CurtainWallPune"));
const StructuralGlazingPune = lazy(() => import("./pages/StructuralGlazingPune"));
const AcpCladdingPune = lazy(() => import("./pages/AcpCladdingPune"));
const GlassRailingPune = lazy(() => import("./pages/GlassRailingPune"));
const FacadeContractorPune = lazy(() => import("./pages/FacadeContractorPune"));
const FacadeContractorMumbai = lazy(() => import("./pages/FacadeContractorMumbai"));
const FacadeContractorNaviMumbai = lazy(() => import("./pages/FacadeContractorNaviMumbai"));
const FacadeContractorThane = lazy(() => import("./pages/FacadeContractorThane"));
const CurtainWallMumbai = lazy(() => import("./pages/CurtainWallMumbai"));
const StructuralGlazingMumbai = lazy(() => import("./pages/StructuralGlazingMumbai"));
const AluminiumFacadeMumbai = lazy(() => import("./pages/AluminiumFacadeMumbai"));
const CurtainWallCostGuide = lazy(() => import("./pages/CurtainWallCostGuide"));
const AluminiumVsAcp = lazy(() => import("./pages/AluminiumVsAcp"));
const CommercialBuildingFacade = lazy(() => import("./pages/CommercialBuildingFacade"));
const FacadeWaterproofing = lazy(() => import("./pages/FacadeWaterproofing"));
const PVDFvsPowderCoating = lazy(() => import("./pages/PVDFvsPowderCoating"));
const FacadeDesignGuide = lazy(() => import("./pages/FacadeDesignGuide"));
const CurtainWallVsStructuralGlazing = lazy(() => import("./pages/CurtainWallVsStructuralGlazing"));
const ItParkFacade = lazy(() => import("./pages/ItParkFacade"));
const HospitalFacade = lazy(() => import("./pages/HospitalFacade"));
const HotelFacade = lazy(() => import("./pages/HotelFacade"));
const MallFacade = lazy(() => import("./pages/MallFacade"));
const ResidentialFacade = lazy(() => import("./pages/ResidentialFacade"));
const IndustrialFacade = lazy(() => import("./pages/IndustrialFacade"));
const FacadeMaintenanceAMC = lazy(() => import("./pages/FacadeMaintenanceAMC"));

const InspectionDashboard = lazy(() => import("./pages/InspectionDashboard"));
const InspectionNew = lazy(() => import("./pages/InspectionNew"));
const InspectionView = lazy(() => import("./pages/InspectionView"));


const queryClient = new QueryClient();

// Wrap lazy components in Suspense
const L = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<PageLoader />}>{children}</Suspense>
);

const AppWrapper = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <HelmetProvider>
        <ErrorBoundary>
          <Toaster />
          <Sonner />
          <Outlet />
          <BackToTop />
        </ErrorBoundary>
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
      { path: "about", element: <L><About /></L> },
      { path: "services", element: <L><Services /></L> },
      { path: "portfolio", element: <L><Portfolio /></L> },
      { path: "projects-qr", element: <L><ProjectsQR /></L> },
      { path: "project/:slug", element: <L><ProjectDetail /></L> },
      { path: "contact", element: <L><Contact /></L> },
      { path: "aluminium-facade", element: <L><AluminiumFacade /></L> },
      { path: "structural-glazing", element: <L><StructuralGlazing /></L> },
      { path: "curtain-wall-systems", element: <L><CurtainWall /></L> },
      { path: "acp-aluminium-cladding", element: <L><AcpCladding /></L> },
      { path: "glass-railings", element: <L><GlassRailings /></L> },
      { path: "maintenance-services", element: <L><Maintenance /></L> },
      { path: "skylights-canopies", element: <L><Skylights /></L> },
      { path: "aluminium-louvers", element: <L><Louvers /></L> },
      { path: "glass-partitions", element: <L><GlassPartitions /></L> },
      { path: "portal", element: <L><Portal /></L> },
      { path: "admin", element: <L><Admin /></L> },
      { path: "admin/images", element: <L><AdminImages /></L> },
      { path: "admin/logos", element: <L><AdminLogos /></L> },
      { path: "admin/blog-images", element: <L><AdminBlogImages /></L> },
      { path: "admin/media", element: <L><AdminMedia /></L> },
      { path: "admin/content", element: <L><AdminSiteContent /></L> },
      { path: "faq", element: <L><FAQ /></L> },
      { path: "blog", element: <L><Blog /></L> },
      { path: "blog/:slug", element: <L><BlogArticle /></L> },
      { path: "facade-contractor/:city", element: <L><CityLanding /></L> },
      { path: "dev", element: <L><Dev /></L> },
      // 25 SEO pages
      { path: "curtain-wall-pune", element: <L><CurtainWallPune /></L> },
      { path: "structural-glazing-pune", element: <L><StructuralGlazingPune /></L> },
      { path: "acp-cladding-pune", element: <L><AcpCladdingPune /></L> },
      { path: "glass-railing-pune", element: <L><GlassRailingPune /></L> },
      { path: "facade-contractor-pune", element: <L><FacadeContractorPune /></L> },
      { path: "facade-contractor-mumbai", element: <L><FacadeContractorMumbai /></L> },
      { path: "facade-contractor-navi-mumbai", element: <L><FacadeContractorNaviMumbai /></L> },
      { path: "facade-contractor-thane", element: <L><FacadeContractorThane /></L> },
      { path: "curtain-wall-mumbai", element: <L><CurtainWallMumbai /></L> },
      { path: "structural-glazing-mumbai", element: <L><StructuralGlazingMumbai /></L> },
      { path: "aluminium-facade-mumbai", element: <L><AluminiumFacadeMumbai /></L> },
      { path: "curtain-wall-cost-guide", element: <L><CurtainWallCostGuide /></L> },
      { path: "aluminium-vs-acp-cladding", element: <L><AluminiumVsAcp /></L> },
      { path: "commercial-building-facade", element: <L><CommercialBuildingFacade /></L> },
      { path: "facade-waterproofing", element: <L><FacadeWaterproofing /></L> },
      { path: "pvdf-vs-powder-coating-aluminium", element: <L><PVDFvsPowderCoating /></L> },
      { path: "facade-design-guide", element: <L><FacadeDesignGuide /></L> },
      { path: "curtain-wall-vs-structural-glazing", element: <L><CurtainWallVsStructuralGlazing /></L> },
      { path: "it-park-facade", element: <L><ItParkFacade /></L> },
      { path: "hospital-facade", element: <L><HospitalFacade /></L> },
      { path: "hotel-facade", element: <L><HotelFacade /></L> },
      { path: "mall-facade", element: <L><MallFacade /></L> },
      { path: "residential-facade", element: <L><ResidentialFacade /></L> },
      { path: "industrial-facade", element: <L><IndustrialFacade /></L> },
      { path: "facade-amc-guide", element: <L><FacadeMaintenanceAMC /></L> },
      // Site Inspection App
      { path: "inspection", element: <L><InspectionDashboard /></L> },
      { path: "inspection/new", element: <L><InspectionNew /></L> },
      { path: "inspection/:id", element: <L><InspectionView /></L> },
      { path: "*", element: <L><NotFound /></L> }
    ]
  }
];

export default function App() {
  return <Outlet />;
}
