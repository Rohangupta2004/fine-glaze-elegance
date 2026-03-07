import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, User, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/* ================= SERVICES ================= */
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

  /* Scroll detect */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Close menus on route change */
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServiceOpen(false);
  }, [location.pathname]);

  /* 🔒 Lock body scroll on mobile menu */
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const getLinkClass = (path: string) =>
    cn(
      "px-3 py-2 rounded-lg text-sm font-medium transition-colors",
      location.pathname === path
        ? "bg-primary text-white"
        : isScrolled
        ? "text-slate-700 hover:bg-slate-100"
        : "text-white hover:bg-white/20"
    );

  return (
    <>
      {/* HEADER */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-md py-3 shadow-sm border-b"
            : "bg-transparent py-5"
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="/Logofg.webp"
              alt="Fine Glaze Logo"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link to="/" className={getLinkClass("/")}>Home</Link>
            <Link to="/about" className={getLinkClass("/about")}>About</Link>

            {/* Services Dropdown */}
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
                className={cn(
                  "p-1 rounded-md",
                  isScrolled ? "text-slate-700" : "text-white"
                )}
              >
                <ChevronDown size={14} />
              </button>

              <div
                className={cn(
                  "absolute left-0 top-full pt-2 w-64 transition-all duration-200",
                  isServiceOpen
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                )}
              >
                <div className="bg-white rounded-xl shadow-xl border p-2">
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.href}
                      to={service.href}
                      className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 rounded-lg"
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/portfolio" className={getLinkClass("/portfolio")}>Portfolio</Link>
            <Link to="/quotation-estimator" className={getLinkClass("/quotation-estimator")}>Estimator</Link>
            <Link to="/contact" className={getLinkClass("/contact")}>Contact</Link>
          </nav>

          {/* DESKTOP ACTIONS */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/portal">
              <Button
                variant="ghost"
                size="sm"
                className={cn(
                  "gap-2",
                  isScrolled
                    ? "text-slate-700"
                    : "text-white hover:bg-white/20"
                )}
              >
                <User size={16} />
                Client Login
              </Button>
            </Link>

            <Link to="/quotation-estimator">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                Get a Quote
              </Button>
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className={cn(
              "lg:hidden p-2 rounded-md",
              isScrolled ? "text-slate-900" : "text-white"
            )}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* MOBILE MENU (FIXED) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-white overflow-y-auto">
          <div className="flex items-center justify-between px-4 py-4 border-b">
            <span className="font-semibold text-lg">Menu</span>
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <X size={24} />
            </button>
          </div>

          <div className="px-4 py-6 space-y-4">
            <Link to="/" className="block text-lg font-medium">Home</Link>
            <Link to="/about" className="block text-lg font-medium">About</Link>

            <div>
              <p className="text-sm uppercase text-slate-400 mb-2">Services</p>
              {serviceLinks.map((s) => (
                <Link
                  key={s.href}
                  to={s.href}
                  className="block py-1 text-slate-700"
                >
                  {s.label}
                </Link>
              ))}
            </div>

            <Link to="/portfolio" className="block text-lg font-medium">Portfolio</Link>
            <Link to="/quotation-estimator" className="block text-lg font-medium">Estimator</Link>
            <Link to="/contact" className="block text-lg font-medium">Contact</Link>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <Link to="/portal">
                <Button variant="outline" className="w-full gap-2">
                  <LogIn size={16} /> Portal
                </Button>
              </Link>
              <Link to="/quotation-estimator">
                <Button className="w-full bg-amber-600 text-white">
                  Get Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
