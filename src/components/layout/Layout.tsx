import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

interface LayoutProps {
  children: ReactNode;
  darkHero?: boolean;
}

export const Layout = ({ children, darkHero = false }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header darkHero={darkHero} />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingCTA />
      <WhatsAppFloat />
    </div>
  );
};