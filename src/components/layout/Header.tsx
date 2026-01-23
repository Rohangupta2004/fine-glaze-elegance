import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, User, LogIn } from "lucide-react"; // Added Icons
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// ✅ UPDATED: All Service Pages Included
const serviceLinks = [
  { href: "/aluminium-facade", label: "Aluminium Facade Systems" },
  { href: "/curtain-wall-systems", label: "Curtain Wall Systems" },
  { href: "/structural-glazing", label: "Structural Glazing" },
  { href: "/acp-aluminium-cladding", label: "ACP Cladding" },
  { href: "/glass-railings", label: "Glass Railings" },       // NEW
  { href: "/maintenance-services", label: "Facade Maintenance" }, // NEW
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

  // Helper for Link Classes
  const getLinkClass = (path: string) => cn(
    "px-3 py-2 rounded-lg text-sm font-medium transition-colors",
    location.pathname === path
      ? "bg-primary text-white shadow-sm"
      : isScrolled
        ? "text-slate-700 hover:bg-slate-100"
        : "text-white hover:bg-white/20"
  );

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md py-3 shadow-sm border-b"
          : "bg-gradient-to-b from-black/50 to-transparent py-5" // Better visibility on Hero
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

        {/* --- DESKTOP NAVIGATION --- */}
        <nav className="hidden lg:flex items-center gap-1">
          <Link to="/" className={getLinkClass("/")}>Home</Link>
          <Link to="/about" className={getLinkClass("/about")}>About</Link>

          {/* Services Dropdown */}
          <div
            className="relative flex items-center group"
            onMouseEnter={() => setIsServiceOpen(true)}
            onMouseLeave={() => setIsServiceOpen(false)}
          >
            <Link to="/services" className={getLinkClass("/services")}>Services</Link>
            <button
              onClick={() => setIsServiceOpen(!isServiceOpen)}
              className={cn("p-1 rounded-md transition-colors", isScrolled ? "text-slate-700" : "text-white")}
            >
              <ChevronDown size={14} />
            </button>

            {/* Dropdown Menu */}
            <div className={cn(
              "absolute left-0 top-full pt-2 w-64 transition-all duration-200 origin-top-left",
              isServiceOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"
            )}>
              <div className="bg-white rounded-xl shadow-xl border overflow-hidden p-2">
                {serviceLinks.map((service) => (
                  <Link
                    key={service.href}
                    to={service.href}
                    className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary rounded-lg transition-colors"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link to="/portfolio" className={getLinkClass("/portfolio")}>Portfolio</Link>
          <Link to="/contact" className={getLinkClass("/contact")}>Contact</Link>
        </nav>

        {/* --- ACTIONS (Quote + Portal) --- */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Client Portal Button */}
          <Link to="/portal">
            <Button variant="ghost" size="sm" className={cn("gap-2", isScrolled ? "text-slate-700" : "text-white hover:bg-white/20")}>
              <User size={16} />
              <span className="hidden xl:inline">Client Login</span>
            </Button>
          </Link>

          {/* Quote Button */}
          <Link to="/contact">
            <Button className="bg-amber-600 hover:bg-amber-700 text-white shadow-lg shadow-amber-600/20">
              Get a Quote
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={cn("lg:hidden p-2 rounded-md", isScrolled ? "text-slate-900" : "text-white")}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* --- MOBILE MENU --- */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] bg-white z-40 overflow-y-auto">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            <Link to="/" className="text-lg font-medium p-2 border-b">Home</Link>
            
            {/* Mobile Services List */}
            <div className="p-2 border-b">
              <div className="text-lg font-medium text-slate-500 mb-2">Services</div>
              <div className="pl-4 flex flex-col gap-3 border-l-2 border-slate-100">
                {serviceLinks.map((service) => (
                  <Link key={service.href} to={service.href} className="text-slate-700 py-1 block">
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/portfolio" className="text-lg font-medium p-2 border-b">Portfolio</Link>
            <Link to="/about" className="text-lg font-medium p-2 border-b">About</Link>
            <Link to="/contact" className="text-lg font-medium p-2 border-b">Contact</Link>
            
            <div className="grid grid-cols-2 gap-4 mt-4">
              <Link to="/portal">
                <Button variant="outline" className="w-full gap-2 border-slate-300">
                  <LogIn size={16} /> Client Portal
                </Button>
              </Link>
              <Link to="/contact">
                <Button className="w-full bg-amber-600">Get Quote</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
