import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import FloatingCTA from "@/components/FloatingCTA";
import ScrollToTop from "@/components/ScrollToTop";

interface LayoutProps {
  children: ReactNode;
  /** Kept for existing callers. The header is a solid white bar on every page, so it no longer changes anything. */
  darkHero?: boolean;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};
