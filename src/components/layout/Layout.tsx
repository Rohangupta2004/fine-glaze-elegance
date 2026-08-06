import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import FloatingCTA from "@/components/FloatingCTA";
import MobileBottomCTA from "@/components/MobileBottomCTA";
import ScrollToTop from "@/components/ScrollToTop";

interface LayoutProps {
  children: ReactNode;
  darkHero?: boolean;
}

export const Layout = ({ children, darkHero = false }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header darkHero={darkHero} />
      {/* Spacer for fixed navbar on non-hero pages */}
      {!darkHero && <div className="h-16 lg:h-20" />}
      <main className="flex-1 pb-16 lg:pb-0">{children}</main>
      <Footer />
      <FloatingCTA />
      <MobileBottomCTA />
    </div>
  );
};