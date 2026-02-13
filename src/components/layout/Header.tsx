import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, User, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const serviceLinks = [
  { href: "/aluminium-facade", label: "Aluminium Facade Systems" },
  { href: "/curtain-wall-systems", label: "Curtain Wall Systems" },
  { href: "/structural-glazing", label: "Structural Glazing" },
  { href: "/acp-aluminium-cladding", label: "ACP Cladding" },
  { href: "/glass-railings", label: "Glass Railings" },
  { href: "/maintenance-services", label: "Facade Maintenance" },
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
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const getLinkClass = (path: string) =>
    cn(
      "px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-300",
      location.pathname === path
        ? "bg-white/15 text-white"
        : "text-white/75 hover:text-white hover:bg-white/10",
    );

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 py-4">
        <div className="site-container">
          <div
            className={cn(
              "glass-card-dark flex items-center justify-between px-4 md:px-6 py-3 transition-all duration-300",
              isScrolled && "shadow-2xl",
            )}
          >
            <Link to="/" className="flex-shrink-0">
              <img
                src="/Logofg.webp"
                alt="Fine Glaze Logo"
                className="h-10 md:h-12 w-auto object-contain"
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              <Link to="/" className={getLinkClass("/")}>
                Home
              </Link>
              <Link to="/about" className={getLinkClass("/about")}>
                About
              </Link>

              <div
                className="relative flex items-center"
                onMouseEnter={() => setIsServiceOpen(true)}
                onMouseLeave={() => setIsServiceOpen(false)}
              >
                <Link to="/services" className={getLinkClass("/services")}>
                  Services
                </Link>
                <button
                  onClick={() => setIsServiceOpen(!isServiceOpen)}
                  className="p-1 rounded-md text-white/70 hover:text-white"
                >
                  <ChevronDown size={14} />
                </button>

                <div
                  className={cn(
                    "absolute left-0 top-full pt-2 w-72 transition-all duration-200",
                    isServiceOpen ? "opacity-100 visible" : "opacity-0 invisible",
                  )}
                >
                  <div className="glass-card-dark p-2">
                    {serviceLinks.map((service) => (
                      <Link
                        key={service.href}
                        to={service.href}
                        className="block px-4 py-3 text-sm text-white/80 hover:bg-white/10 rounded-lg transition-colors"
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link to="/portfolio" className={getLinkClass("/portfolio")}>
                Portfolio
              </Link>
              <Link to="/contact" className={getLinkClass("/contact")}>
                Contact
              </Link>
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <Link to="/portal">
                <Button variant="ghost" size="sm" className="gap-2 text-white/80">
                  <User size={16} />
                  Client Login
                </Button>
              </Link>

              <Link to="/contact">
                <Button>Get a Quote</Button>
              </Link>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-md text-white"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-[#111111]/95 backdrop-blur-sm overflow-y-auto">
          <div className="site-container py-6">
            <div className="glass-card-dark p-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-semibold uppercase tracking-[0.2em] text-sm">Menu</span>
                <button onClick={() => setIsMobileMenuOpen(false)}>
                  <X size={24} />
                </button>
              </div>

              <div className="pt-6 space-y-4 text-white">
                <Link to="/" className="block text-sm uppercase tracking-[0.14em]">Home</Link>
                <Link to="/about" className="block text-sm uppercase tracking-[0.14em]">About</Link>

                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-white/50 mb-2">Services</p>
                  {serviceLinks.map((s) => (
                    <Link key={s.href} to={s.href} className="block py-1 text-white/75 text-sm">
                      {s.label}
                    </Link>
                  ))}
                </div>

                <Link to="/portfolio" className="block text-sm uppercase tracking-[0.14em]">Portfolio</Link>
                <Link to="/contact" className="block text-sm uppercase tracking-[0.14em]">Contact</Link>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <Link to="/portal">
                    <Button variant="outline" className="w-full gap-2">
                      <LogIn size={16} /> Portal
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button className="w-full">Get Quote</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
