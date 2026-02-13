import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, LogIn, Menu, User, X } from "lucide-react";
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
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServiceOpen(false);
  }, [location.pathname]);

  const getLinkClass = (path: string) =>
    cn(
      "rounded-md px-3 py-2 text-sm font-medium transition-colors",
      location.pathname === path
        ? "bg-primary text-primary-foreground"
        : isScrolled
          ? "text-foreground hover:bg-muted"
          : "text-white/90 hover:bg-white/10"
    );

  return (
    <>
      <header
        className={cn(
          "fixed left-0 right-0 top-0 z-50 border-b transition-all duration-300",
          isScrolled ? "border-border bg-background/95 py-3 backdrop-blur" : "border-transparent bg-transparent py-5"
        )}
      >
        <div className="container mx-auto flex items-center justify-between px-4">
          <Link to="/" className="flex-shrink-0">
            <img src="/Logofg.webp" alt="Fine Glaze Logo" className="h-10 w-auto md:h-11" />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            <Link to="/" className={getLinkClass("/")}>Home</Link>
            <Link to="/about" className={getLinkClass("/about")}>About</Link>

            <div className="relative" onMouseEnter={() => setIsServiceOpen(true)} onMouseLeave={() => setIsServiceOpen(false)}>
              <div className="flex items-center">
                <Link to="/services" className={getLinkClass("/services")}>Services</Link>
                <button className={cn("rounded-md p-1", isScrolled ? "text-foreground" : "text-white/90")}>
                  <ChevronDown className="h-4 w-4" />
                </button>
              </div>
              <div className={cn("absolute left-0 top-full w-72 pt-2", isServiceOpen ? "block" : "hidden")}>
                <div className="rounded-xl border border-border bg-card p-2 shadow-lg">
                  {serviceLinks.map((service) => (
                    <Link key={service.href} to={service.href} className="block rounded-lg px-3 py-2 text-sm hover:bg-muted">
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/portfolio" className={getLinkClass("/portfolio")}>Portfolio</Link>
            <Link to="/contact" className={getLinkClass("/contact")}>Contact</Link>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button asChild size="sm" variant="ghost" className={cn(isScrolled ? "text-foreground" : "text-white hover:bg-white/10")}>
              <Link to="/portal"><User className="mr-2 h-4 w-4" />Client Login</Link>
            </Button>
            <Button asChild size="sm" className="btn-glossy border-0 text-white">
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>

          <button onClick={() => setIsMobileMenuOpen(true)} className={cn("rounded-md p-2 lg:hidden", isScrolled ? "text-foreground" : "text-white")}>
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-background p-4 lg:hidden">
          <div className="mb-6 flex items-center justify-between border-b pb-4">
            <p className="font-semibold">Navigation</p>
            <button onClick={() => setIsMobileMenuOpen(false)}><X /></button>
          </div>
          <div className="space-y-3 text-lg">
            <Link to="/" className="block">Home</Link>
            <Link to="/about" className="block">About</Link>
            <Link to="/services" className="block">Services</Link>
            <Link to="/portfolio" className="block">Portfolio</Link>
            <Link to="/contact" className="block">Contact</Link>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3">
            <Button asChild variant="outline"><Link to="/portal"><LogIn className="mr-2 h-4 w-4" />Portal</Link></Button>
            <Button asChild className="btn-glossy border-0 text-white"><Link to="/contact">Get Quote</Link></Button>
          </div>
        </div>
      )}
    </>
  );
};
