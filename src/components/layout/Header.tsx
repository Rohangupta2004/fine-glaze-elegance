import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { QuoteModal } from "@/components/QuoteModal";

/* ================= SERVICES & INDUSTRIES ================= */
const serviceLinks = [
  { href: "/aluminium-facade", label: "Aluminium Facade Systems" },
  { href: "/curtain-wall-systems", label: "Curtain Wall Systems" },
  { href: "/structural-glazing", label: "Structural Glazing" },
  { href: "/acp-aluminium-cladding", label: "ACP Cladding" },
  { href: "/glass-railings", label: "Glass Railings" },
  { href: "/skylights-canopies", label: "Skylights & Canopies" },
  { href: "/aluminium-louvers", label: "Aluminium Louvers" },
  { href: "/glass-partitions", label: "Glass Partitions" },
  { href: "/maintenance-services", label: "Facade Maintenance" },
];

const industryLinks = [
  { href: "/it-park-facade", label: "IT Parks & Tech Campuses" },
  { href: "/commercial-building-facade", label: "Commercial Towers" },
  { href: "/hospital-facade", label: "Hospitals & Healthcare" },
  { href: "/hotel-facade", label: "Hotels & Hospitality" },
  { href: "/mall-facade", label: "Shopping Malls & Retail" },
  { href: "/industrial-facade", label: "Industrial & Warehousing" },
  { href: "/residential-facade", label: "High-Rise Residential" },
];

export const Header = ({ darkHero = false }: { darkHero?: boolean }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [isIndustryOpen, setIsIndustryOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
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
    setIsIndustryOpen(false);
  }, [location.pathname]);

  /* Lock body scroll on mobile menu */
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const getLinkClass = (path: string) =>
    cn(
      "px-3 py-2 text-sm font-semibold rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500",
      location.pathname === path
        ? "bg-primary text-white"
        : isScrolled
        ? "text-slate-800 hover:bg-slate-100"
        : darkHero
        ? "text-white hover:bg-white/20"
        : "text-slate-800 hover:bg-slate-100/80"
    );

  return (
    <>
      {/* HEADER */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-md py-2 md:py-3 shadow-md border-b"
            : "bg-gradient-to-b from-black/60 via-black/20 to-transparent py-3 md:py-4"
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-md">
            <img
              src="/Logofg.webp"
              alt="Fine Glaze - Facade & Glazing Contractor"
              className={cn(
                "h-10 md:h-12 w-auto object-contain transition-all duration-300",
                darkHero && !isScrolled && "brightness-0 invert"
              )}
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServiceOpen(true)}
              onMouseLeave={() => setIsServiceOpen(false)}
            >
              <Link to="/services" className={getLinkClass("/services")}>
                <span className="flex items-center gap-1">
                  Services
                  <ChevronDown size={14} className="opacity-75" />
                </span>
              </Link>

              <div
                className={cn(
                  "absolute left-0 top-full pt-2 w-64 transition-all duration-200",
                  isServiceOpen ? "opacity-100 visible" : "opacity-0 invisible"
                )}
              >
                <div className="bg-white shadow-xl border border-slate-200 rounded-lg p-2">
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.href}
                      to={service.href}
                      className="block px-3 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-900 rounded-md transition-colors"
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Industries Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsIndustryOpen(true)}
              onMouseLeave={() => setIsIndustryOpen(false)}
            >
              <span className={cn(getLinkClass("/industries"), "cursor-pointer flex items-center gap-1")}>
                Industries
                <ChevronDown size={14} className="opacity-75" />
              </span>

              <div
                className={cn(
                  "absolute left-0 top-full pt-2 w-64 transition-all duration-200",
                  isIndustryOpen ? "opacity-100 visible" : "opacity-0 invisible"
                )}
              >
                <div className="bg-white shadow-xl border border-slate-200 rounded-lg p-2">
                  {industryLinks.map((ind) => (
                    <Link
                      key={ind.href}
                      to={ind.href}
                      className="block px-3 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-900 rounded-md transition-colors"
                    >
                      {ind.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/portfolio" className={getLinkClass("/portfolio")}>Projects</Link>
            <Link to="/about" className={getLinkClass("/about")}>About</Link>
            <Link to="/contact" className={getLinkClass("/contact")}>Contact</Link>
          </nav>

          {/* DESKTOP & MOBILE ACTIONS */}
          <div className="flex items-center gap-3">
            {/* Get a Quote — Always visible */}
            <Button
              onClick={() => setIsQuoteOpen(true)}
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold px-4 md:px-5 py-2 text-xs md:text-sm shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              Get a Quote
            </Button>

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open Mobile Menu"
              className={cn(
                "lg:hidden p-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500",
                isScrolled ? "text-slate-900" : darkHero ? "text-white" : "text-slate-900"
              )}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU PANEL */}
      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-[55] bg-black/50 backdrop-blur-sm lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed top-0 left-0 right-0 z-[60] bg-white shadow-2xl max-h-[85vh] overflow-y-auto lg:hidden animate-in slide-in-from-top duration-200 rounded-b-2xl">
            <div className="flex items-center justify-between px-5 py-4 border-b sticky top-0 bg-white z-10">
              <span className="font-bold text-lg text-stone-900">Fine Glaze Menu</span>
              <button onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu" className="p-1">
                <X size={24} />
              </button>
            </div>

            <div className="px-5 py-4 space-y-4">
              <div>
                <p className="text-xs uppercase font-bold text-amber-700 tracking-wider mb-2">Services</p>
                <div className="grid grid-cols-1 gap-1 pl-2 border-l-2 border-amber-200">
                  {serviceLinks.map((s) => (
                    <Link
                      key={s.href}
                      to={s.href}
                      className="py-1 text-sm text-slate-700 hover:text-amber-700 font-medium"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs uppercase font-bold text-amber-700 tracking-wider mb-2">Industries</p>
                <div className="grid grid-cols-1 gap-1 pl-2 border-l-2 border-amber-200">
                  {industryLinks.map((ind) => (
                    <Link
                      key={ind.href}
                      to={ind.href}
                      className="py-1 text-sm text-slate-700 hover:text-amber-700 font-medium"
                    >
                      {ind.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t space-y-2">
                <Link to="/portfolio" className="block text-base font-semibold py-1">Projects</Link>
                <Link to="/about" className="block text-base font-semibold py-1">About</Link>
                <Link to="/contact" className="block text-base font-semibold py-1">Contact</Link>
              </div>

              <div className="pt-2 pb-4">
                <Button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setTimeout(() => setIsQuoteOpen(true), 200);
                  }}
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3"
                >
                  Get a Project Quote
                </Button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* QUOTE MODAL */}
      <QuoteModal open={isQuoteOpen} onOpenChange={setIsQuoteOpen} />
    </>
  );
};
