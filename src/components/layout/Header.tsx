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
  const [mobileOpen, setMobileOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const location = useLocation();

  /* Scroll */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Route change close */
  useEffect(() => {
    setMobileOpen(false);
    setServiceOpen(false);
  }, [location.pathname]);

  /* Lock body scroll */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [mobileOpen]);

  const linkClass = (path: string) =>
    cn(
      "px-3 py-2 rounded-lg text-sm font-medium transition-colors",
      location.pathname === path
        ? "bg-primary text-white"
        : isScrolled
        ? "text-slate-800 hover:bg-slate-100"
        : "text-white hover:bg-white/20"
    );

  return (
    <>
      {/* ================= HEADER ================= */}
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3"
            : "bg-black/40 backdrop-blur-sm py-5"
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <img src="/Logofg.webp" alt="Fine Glaze" className="h-10 md:h-12" />
          </Link>

          {/* ===== DESKTOP NAV ===== */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link to="/" className={linkClass("/")}>Home</Link>
            <Link to="/about" className={linkClass("/about")}>About</Link>

            {/* Services */}
            <div
              className="relative"
              onMouseEnter={() => setServiceOpen(true)}
              onMouseLeave={() => setServiceOpen(false)}
            >
              <button
                className={cn(
                  "flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium",
                  isScrolled ? "text-slate-800" : "text-white"
                )}
              >
                Services <ChevronDown size={14} />
              </button>

              <div
                className={cn(
                  "absolute left-0 mt-2 w-64 rounded-xl bg-white shadow-xl border p-2 transition-all",
                  serviceOpen
                    ? "opacity-100 translate-y-0 visible"
                    : "opacity-0 -translate-y-2 invisible"
                )}
              >
                {serviceLinks.map((s) => (
                  <Link
                    key={s.href}
                    to={s.href}
                    className="block px-4 py-3 rounded-lg text-sm text-slate-700 hover:bg-slate-100"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/portfolio" className={linkClass("/portfolio")}>Portfolio</Link>
            <Link to="/contact" className={linkClass("/contact")}>Contact</Link>
          </nav>

          {/* ===== DESKTOP ACTIONS ===== */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/portal">
              <Button
                variant="ghost"
                size="sm"
                className={cn(
                  "btn-ghost gap-2",
                  isScrolled
                    ? "text-slate-800"
                    : "text-white hover:bg-white/20"
                )}
              >
                <User size={16} />
                Client Login
              </Button>
            </Link>

            <Link to="/contact">
              <Button
                className={cn(
                  "btn-primary",
                  isScrolled && "ring-2 ring-amber-500/30"
                )}
              >
                Get a Quote
              </Button>
            </Link>
          </div>

          {/* ===== MOBILE TOGGLE ===== */}
          <button
            onClick={() => setMobileOpen(true)}
            className={cn(
              "lg:hidden p-2",
              isScrolled ? "text-slate-900" : "text-white"
            )}
          >
            <Menu size={26} />
          </button>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-white overflow-y-auto">
          <div className="flex items-center justify-between px-4 py-4 border-b">
            <span className="font-semibold text-lg">Menu</span>
            <button onClick={() => setMobileOpen(false)}>
              <X size={26} />
            </button>
          </div>

          <div className="px-4 py-6 space-y-6">
            <Link to="/" className="block text-lg font-medium active:scale-[0.97]">Home</Link>
            <Link to="/about" className="block text-lg font-medium active:scale-[0.97]">About</Link>

            {/* Services */}
            <div>
              <p className="text-sm uppercase text-slate-400 mb-2">Services</p>
              <div className="space-y-3">
                {serviceLinks.map((s) => (
                  <Link
                    key={s.href}
                    to={s.href}
                    className="block text-slate-700 active:scale-[0.97]"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/portfolio" className="block text-lg font-medium active:scale-[0.97]">
              Portfolio
            </Link>
            <Link to="/contact" className="block text-lg font-medium active:scale-[0.97]">
              Contact
            </Link>

            {/* Mobile CTA */}
            <div className="grid grid-cols-1 gap-4 pt-6">
              <Link to="/portal">
                <Button
                  variant="outline"
                  className="btn-mobile border-slate-300 flex gap-2 justify-center active:scale-[0.97]"
                >
                  <LogIn size={18} />
                  Client Portal
                </Button>
              </Link>

              <Link to="/contact">
                <Button className="btn-primary btn-mobile active:scale-[0.97]">
                  Get Free Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
