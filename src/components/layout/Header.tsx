import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-md py-3 shadow-lg border-b border-border"
            : "bg-transparent py-5"
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="relative z-10">
            <img
              src="/Logofg.webp"
              alt="Fine Glaze Logo"
              className="h-10 md:h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                  location.pathname === link.href
                    ? "text-primary-foreground bg-primary"
                    : isScrolled
                    ? "text-foreground/80 hover:text-foreground hover:bg-secondary"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact">
              <Button className="ml-4 btn-glossy text-white border-0 shadow-md">
                Get a Quote
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "md:hidden relative z-10 p-2",
              isScrolled || isMobileMenuOpen ? "text-foreground" : "text-white"
            )}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Navigation */}
          <div
            className={cn(
              "fixed inset-0 bg-background/98 backdrop-blur-lg md:hidden transition-all duration-300",
              isMobileMenuOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            )}
          >
            <nav className="flex flex-col items-center justify-center h-full gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "text-2xl font-medium transition-colors",
                    location.pathname === link.href
                      ? "text-primary"
                      : "text-foreground/70 hover:text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/contact" className="mt-4">
                <Button size="lg" className="btn-glossy text-white border-0">
                  Get a Quote
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* 🔥 Floating WhatsApp Button */}
      <a
        href="https://wa.me/918369233566?text=Hello%20Fine%20Glaze%2C%20I%20am%20interested%20in%20your%20facade%20solutions."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 hover:bg-green-600 shadow-xl transition-all"
        aria-label="WhatsApp Chat"
      >
        <MessageCircle className="h-7 w-7 text-white" />
      </a>
    </>
  );
};
