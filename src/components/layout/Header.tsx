import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import { useBookCall } from "@/components/booking/BookCallProvider";
import { useCompanyProfile } from "@/context/CompanyProfileContext";
import "./header.css";

/* ================= SERVICES & INDUSTRIES ================= */
const serviceLinks = [
  { href: "/aluminium-windows-doors", label: "Aluminium Windows & Doors" },
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
  const { openProfile } = useCompanyProfile();
  const { open: openBooking } = useBookCall();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [isIndustryOpen, setIsIndustryOpen] = useState(false);
  const industryRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  /* Scroll detect */
  useEffect(() => {
    // A page can mark a tall dark hero with data-header-clear: the bar stays
    // transparent until that section has scrolled past, so it never sits over the scene.
    const handleScroll = () => {
      const hero = document.querySelector<HTMLElement>("[data-header-clear]");
      setIsScrolled(hero ? hero.getBoundingClientRect().bottom < 96 : window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
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

  /* Escape and outside click close the desktop dropdowns */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsServiceOpen(false);
        setIsIndustryOpen(false);
      }
    };
    const onDown = (e: MouseEvent) => {
      if (industryRef.current && !industryRef.current.contains(e.target as Node)) setIsIndustryOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDown);
    };
  }, []);

  const isPathActive = (path: string) => {
    if (path === "/services") {
      return (
        location.pathname === "/services" ||
        serviceLinks.some((s) => location.pathname === s.href)
      );
    }
    if (path === "/industries") {
      return industryLinks.some((ind) => location.pathname === ind.href);
    }
    if (path === "/portfolio") {
      return (
        location.pathname === "/portfolio" ||
        location.pathname.startsWith("/project/")
      );
    }
    if (path === "/blog") {
      return location.pathname.startsWith("/blog");
    }
    return location.pathname === path;
  };

  const getLinkClass = (path: string) =>
    cn(
      "px-3 py-2 text-[15px] font-medium text-paper transition-colors duration-200 hover:text-lamp focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glass",
      isPathActive(path) && "text-lamp"
    );

  const transparent = darkHero && !isScrolled;
  const book = () => openBooking({ source: "header" });

  return (
    <>
      {/* HEADER */}
      <header
        data-clear={transparent ? "true" : "false"}
        className="fg-hdr fixed top-0 left-0 right-0 z-50 text-paper"
      >
        <div className="container mx-auto px-4 h-16 lg:h-20 flex items-center justify-between">
          {/* Wordmark */}
          <Link
            to="/"
            aria-label="Fine Glaze, home"
            className="flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glass"
          >
            <img
              src="/Logofg.webp"
              alt="Fine Glaze"
              width={1920}
              height={603}
              className="h-10 lg:h-12 w-auto brightness-0 invert"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
            {/* Services Dropdown */}
            <div
              className="relative group"
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
                  "absolute left-0 top-full pt-2 w-64 transition-opacity duration-200 group-focus-within:opacity-100 group-focus-within:visible",
                  isServiceOpen ? "opacity-100 visible" : "opacity-0 invisible"
                )}
              >
                <div className="fg-menu p-2">
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.href}
                      to={service.href}
                      className={cn(
                        "block px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glass",
                        location.pathname === service.href ? "text-lamp" : "text-paper hover:text-lamp"
                      )}
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Industries Dropdown */}
            <div
              ref={industryRef}
              className="relative group"
              onMouseEnter={() => setIsIndustryOpen(true)}
              onMouseLeave={() => setIsIndustryOpen(false)}
            >
              <button
                type="button"
                aria-expanded={isIndustryOpen}
                aria-controls="industries-menu"
                onClick={() => setIsIndustryOpen((v) => !v)}
                className={cn(getLinkClass("/industries"), "inline-flex items-center gap-1")}
              >
                Industries
                <ChevronDown size={14} className="opacity-75" />
              </button>

              <div
                id="industries-menu"
                className={cn(
                  "absolute left-0 top-full pt-2 w-64 transition-opacity duration-200 group-focus-within:opacity-100 group-focus-within:visible",
                  isIndustryOpen ? "opacity-100 visible" : "opacity-0 invisible"
                )}
              >
                <div className="fg-menu p-2">
                  {industryLinks.map((ind) => (
                    <Link
                      key={ind.href}
                      to={ind.href}
                      className={cn(
                        "block px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glass",
                        location.pathname === ind.href ? "text-lamp" : "text-paper hover:text-lamp"
                      )}
                    >
                      {ind.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/portfolio" className={getLinkClass("/portfolio")}>Projects</Link>
            <Link to="/blog" className={getLinkClass("/blog")}>Articles</Link>
            <Link to="/about" className={getLinkClass("/about")}>About</Link>
            <Link to="/contact" className={getLinkClass("/contact")}>Contact</Link>

            <Link
              to="/company-profile"
              onClick={() => openProfile(1, "slides")}
              className={cn(getLinkClass("/company-profile"), "inline-flex items-center gap-1.5")}
            >
              <FileText size={14} className="text-lamp shrink-0" />
              <span>Company Profile</span>
              <span className="text-[11px] font-semibold px-1.5 py-0.5 bg-lamp text-lamp-ink">PDF</span>
            </Link>
          </nav>

          {/* ACTIONS */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={book}
              className="h-11 px-[18px] text-[15px] font-medium text-paper bg-transparent shadow-[inset_0_0_0_1px_rgba(236,232,223,0.45)] transition-[filter,box-shadow] hover:shadow-[inset_0_0_0_1px_#dd9a5b] hover:text-lamp focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glass"
            >
              Book a call
            </button>

            {/* MOBILE TOGGLE */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open Mobile Menu"
              className="lg:hidden p-2 text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glass"
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
            className="fixed inset-0 z-[55] bg-night/70 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed top-0 left-0 right-0 z-[60] fg-menu-m text-paper max-h-[90vh] overflow-y-auto lg:hidden animate-in slide-in-from-top duration-200">
            <div className="flex items-center justify-between px-5 h-16 border-b border-line sticky top-0 z-10">
              <img src="/Logofg.webp" alt="Fine Glaze" width={1920} height={603} className="h-10 w-auto brightness-0 invert" />
              <button type="button" onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu" className="p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glass">
                <X size={24} />
              </button>
            </div>

            <div className="px-5 py-4 space-y-4">
              <div>
                <p className="text-sm font-semibold text-mute mb-2">Services</p>
                <div className="grid grid-cols-1 gap-1 pl-2 border-l border-line">
                  {serviceLinks.map((s) => (
                    <Link
                      key={s.href}
                      to={s.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="py-1.5 text-sm text-paper hover:text-lamp"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-mute mb-2">Industries</p>
                <div className="grid grid-cols-1 gap-1 pl-2 border-l border-line">
                  {industryLinks.map((ind) => (
                    <Link
                      key={ind.href}
                      to={ind.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="py-1.5 text-sm text-paper hover:text-lamp"
                    >
                      {ind.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-line space-y-2">
                <Link to="/portfolio" onClick={() => setIsMobileMenuOpen(false)} className="block text-base font-medium py-1">Projects</Link>
                <Link
                  to="/company-profile"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    openProfile(1, "slides");
                  }}
                  className="flex items-center justify-between text-base font-medium py-1.5 hover:text-lamp"
                >
                  <span className="flex items-center gap-2">
                    <FileText size={18} className="text-lamp shrink-0" />
                    <span>Company Profile</span>
                  </span>
                  <span className="text-[11px] font-semibold px-2 py-0.5 bg-lamp text-lamp-ink">PDF</span>
                </Link>
                <Link to="/blog" onClick={() => setIsMobileMenuOpen(false)} className="block text-base font-medium py-1">Articles</Link>
                <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="block text-base font-medium py-1">About</Link>
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block text-base font-medium py-1">Contact</Link>
              </div>

              <div className="pt-2 pb-4">
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setTimeout(book, 200);
                  }}
                  className="w-full h-12 bg-lamp text-lamp-ink font-semibold text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glass"
                >
                  Book a call
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
