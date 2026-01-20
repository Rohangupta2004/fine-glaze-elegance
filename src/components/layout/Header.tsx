import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const serviceLinks = [
  { href: "/aluminium-facade", label: "Aluminium Facade Systems" },
  { href: "/curtain-wall-systems", label: "Curtain Wall Systems" },
  { href: "/structural-glazing", label: "Structural Glazing" },
  { href: "/acp-aluminium-cladding", label: "ACP Aluminium Cladding" },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServiceOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-md py-3 shadow-lg border-b"
            : "bg-transparent py-5"
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <img
              src="/Logofg.webp"
              alt="Fine Glaze Logo"
              className="h-10 md:h-12"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              to="/"
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium",
                location.pathname === "/"
                  ? "bg-primary text-white"
                  : isScrolled
                  ? "text-foreground hover:bg-secondary"
                  : "text-white hover:bg-white/10"
              )}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium",
                location.pathname === "/about"
                  ? "bg-primary text-white"
                  : isScrolled
                  ? "text-foreground hover:bg-secondary"
                  : "text-white hover:bg-white/10"
              )}
            >
              About
            </Link>

            {/* Services (CLICK + DROPDOWN) */}
            <div
              className="relative flex items-center"
              onMouseEnter={() => setIsServiceOpen(true)}
              onMouseLeave={() => setIsServiceOpen(false)}
            >
              <Link
                to="/services"
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium",
                  location.pathname.startsWith("/services")
                    ? "bg-primary text-white"
                    : isScrolled
                    ? "text-foreground hover:bg-secondary"
                    : "text-white hover:bg-white/10"
                )}
              >
                Services
              </Link>

              <button
                onClick={() => setIsServiceOpen(!isServiceOpen)}
                className={cn(
                  "ml-1 p-2 rounded-md",
                  isScrolled
                    ? "text-foreground hover:bg-secondary"
                    : "text-white hover:bg-white/10"
                )}
                aria-label="Toggle services menu"
              >
                <ChevronDown size={16} />
              </button>

              {isServiceOpen && (
                <div className="absolute left-0 top-full mt-2 w-64 bg-white rounded-xl shadow-xl border z-50">
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.href}
                      to={service.href}
                      className="block px-5 py-3 text-sm text-foreground hover:bg-muted"
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/portfolio"
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium",
                location.pathname === "/portfolio"
                  ? "bg-primary text-white"
                  : isScrolled
                  ? "text-foreground hover:bg-secondary"
                  : "text-white hover:bg-white/10"
              )}
            >
              Portfolio
            </Link>

            <Link
              to="/contact"
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium",
                location.pathname === "/contact"
                  ? "bg-primary text-white"
                  : isScrolled
                  ? "text-foreground hover:bg-secondary"
                  : "text-white hover:bg-white/10"
              )}
            >
              Contact
            </Link>

            <Link to="/contact">
              <Button className="ml-4 btn-glossy text-white">
                Get a Quote
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background">
            <nav className="flex flex-col items-center gap-6 py-10">
              <Link to="/" className="text-xl">Home</Link>
              <Link to="/about" className="text-xl">About</Link>
              <Link to="/services" className="text-xl">Services</Link>

              {serviceLinks.map((service) => (
                <Link
                  key={service.href}
                  to={service.href}
                  className="text-base text-foreground/80"
                >
                  {service.label}
                </Link>
              ))}

              <Link to="/portfolio" className="text-xl">Portfolio</Link>
              <Link to="/contact" className="text-xl">Contact</Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
