import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] text-white">
      <Header />
      <main className="flex-1 pt-24">
        <div className="site-container">{children}</div>
      </main>
      <Footer />
    </div>
  );
};
