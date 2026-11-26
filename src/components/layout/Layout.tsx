import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import FloatingCTA from "@/components/FloatingCTA";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollProgress from "@/components/common/ScrollProgress";
import { useHeadingReveal } from "@/components/common/useHeadingReveal";

interface LayoutProps {
  children: ReactNode;
  darkHero?: boolean;
}

export const Layout = ({ children, darkHero = false }: LayoutProps) => {
  useHeadingReveal();
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <ScrollProgress />
      <Header darkHero={darkHero} />
      {/* Spacer for fixed navbar on non-hero pages */}
      {!darkHero && <div className="h-16 lg:h-20" />}
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};