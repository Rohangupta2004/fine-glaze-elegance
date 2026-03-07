import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-slate-950 text-white">
      <div className="container mx-auto grid gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <img src="/Logofg.webp" alt="Fine Glaze Logo" className="h-12 w-auto brightness-0 invert" />
          <p className="text-sm text-white/70">Premium facade partner for commercial and residential landmarks. Engineering-grade execution with design-led results.</p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-white/80">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/70">
            {quickLinks.map((link) => (
              <li key={link.href}><Link className="hover:text-white" to={link.href}>{link.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-white/80">Service Focus</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li>Facade Engineering</li>
            <li>Curtain Wall Systems</li>
            <li>Structural Glazing</li>
            <li>Retrofit & Maintenance</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-white/80">Contact</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-amber-300" /> Pune, Maharashtra, India</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-amber-300" /> <a href="tel:+918369233566" className="hover:text-white">+91 8369233566</a></li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-amber-300" /> <a href="mailto:info@fineglaze.com" className="hover:text-white">info@fineglaze.com</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-white/50 md:flex-row">
          <p>© {new Date().getFullYear()} Fine Glaze. All rights reserved.</p>
          <p>Built for performance-led facade delivery.</p>
        </div>
      </div>
    </footer>
  );
};
