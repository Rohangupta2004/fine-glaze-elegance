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
import AdminImages from "./pages/AdminImages";
import AdminLogos from "./pages/AdminLogos";
import FAQ from './pages/FAQ';

import Blog from "./pages/Blog";
import BlogArticle from "./pages/BlogArticle";
import CityLanding from "./pages/CityLanding";

// 25 SEO pages
import CurtainWallPune from "./pages/CurtainWallPune";
import StructuralGlazingPune from "./pages/StructuralGlazingPune";
import AcpCladdingPune from "./pages/AcpCladdingPune";
import GlassRailingPune from "./pages/GlassRailingPune";
import FacadeContractorPune from "./pages/FacadeContractorPune";
import FacadeContractorMumbai from "./pages/FacadeContractorMumbai";
import FacadeContractorNaviMumbai from "./pages/FacadeContractorNaviMumbai";
import FacadeContractorThane from "./pages/FacadeContractorThane";
import CurtainWallMumbai from "./pages/CurtainWallMumbai";
import StructuralGlazingMumbai from "./pages/StructuralGlazingMumbai";
import AluminiumFacadeMumbai from "./pages/AluminiumFacadeMumbai";
import CurtainWallCostGuide from "./pages/CurtainWallCostGuide";
import AluminiumVsAcp from "./pages/AluminiumVsAcp";
import CommercialBuildingFacade from "./pages/CommercialBuildingFacade";
import FacadeWaterproofing from "./pages/FacadeWaterproofing";
import PVDFvsPowderCoating from "./pages/PVDFvsPowderCoating";
import FacadeDesignGuide from "./pages/FacadeDesignGuide";
import CurtainWallVsStructuralGlazing from "./pages/CurtainWallVsStructuralGlazing";
import ItParkFacade from "./pages/ItParkFacade";
import HospitalFacade from "./pages/HospitalFacade";
import HotelFacade from "./pages/HotelFacade";
import MallFacade from "./pages/MallFacade";
import ResidentialFacade from "./pages/ResidentialFacade";
import IndustrialFacade from "./pages/IndustrialFacade";
import FacadeMaintenanceAMC from "./pages/FacadeMaintenanceAMC";

import InspectionDashboard from "./pages/InspectionDashboard";
import InspectionNew from "./pages/InspectionNew";
import InspectionView from "./pages/InspectionView";

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
      { path: "admin/images", element: <AdminImages /> },
      { path: "admin/logos", element: <AdminLogos /> },
      { path: "faq", element: <FAQ /> },
      { path: "blog", element: <Blog /> },
      { path: "blog/:slug", element: <BlogArticle /> },
      { path: "facade-contractor/:city", element: <CityLanding /> },
      { path: "dev", element: <Dev /> },
      // 25 SEO pages
      { path: "curtain-wall-pune", element: <CurtainWallPune /> },
      { path: "structural-glazing-pune", element: <StructuralGlazingPune /> },
      { path: "acp-cladding-pune", element: <AcpCladdingPune /> },
      { path: "glass-railing-pune", element: <GlassRailingPune /> },
      { path: "facade-contractor-pune", element: <FacadeContractorPune /> },
      { path: "facade-contractor-mumbai", element: <FacadeContractorMumbai /> },
      { path: "facade-contractor-navi-mumbai", element: <FacadeContractorNaviMumbai /> },
      { path: "facade-contractor-thane", element: <FacadeContractorThane /> },
      { path: "curtain-wall-mumbai", element: <CurtainWallMumbai /> },
      { path: "structural-glazing-mumbai", element: <StructuralGlazingMumbai /> },
      { path: "aluminium-facade-mumbai", element: <AluminiumFacadeMumbai /> },
      { path: "curtain-wall-cost-guide", element: <CurtainWallCostGuide /> },
      { path: "aluminium-vs-acp-cladding", element: <AluminiumVsAcp /> },
      { path: "commercial-building-facade", element: <CommercialBuildingFacade /> },
      { path: "facade-waterproofing", element: <FacadeWaterproofing /> },
      { path: "pvdf-vs-powder-coating-aluminium", element: <PVDFvsPowderCoating /> },
      { path: "facade-design-guide", element: <FacadeDesignGuide /> },
      { path: "curtain-wall-vs-structural-glazing", element: <CurtainWallVsStructuralGlazing /> },
      { path: "it-park-facade", element: <ItParkFacade /> },
      { path: "hospital-facade", element: <HospitalFacade /> },
      { path: "hotel-facade", element: <HotelFacade /> },
      { path: "mall-facade", element: <MallFacade /> },
      { path: "residential-facade", element: <ResidentialFacade /> },
      { path: "industrial-facade", element: <IndustrialFacade /> },
      { path: "facade-amc-guide", element: <FacadeMaintenanceAMC /> },
      // Site Inspection App
      { path: "inspection", element: <InspectionDashboard /> },
      { path: "inspection/new", element: <InspectionNew /> },
      { path: "inspection/:id", element: <InspectionView /> },
      { path: "*", element: <NotFound /> }
    ]
  }
];

export default function App() {
  return <Outlet />;
}
