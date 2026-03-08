import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Linkedin, Facebook, Instagram } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

const services = [
  "Facade Fabrication",
  "Curtain Walls",
  "Structural Glazing",
  "Custom Railings",
  "Doors & Windows",
  "Maintenance Services",
];

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#0f0f0f] text-white mt-6">
      <div className="site-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-5">
            <img
              src="Logofg.webp"
              alt="Fine Glaze Logo"
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="text-white/65 text-sm leading-relaxed max-w-xs">
              Precision facade fabrication and installation engineered for modern
              architectural projects across India.
            </p>
            <div className="flex gap-3 pt-1">
              {[Linkedin, Facebook, Instagram].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] mb-5 text-white/80">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-white/65 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] mb-5 text-white/80">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-white/65 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] mb-5 text-white/80">Contact</h4>
            <ul className="space-y-4 text-sm text-white/65">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-white/60 mt-1 shrink-0" />
                <span>Pune, Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-white/60 shrink-0" />
                <a href="tel:+918369233566" className="hover:text-white transition-colors">
                  +91 8369233566
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-white/60 shrink-0" />
                <a href="mailto:info@fineglaze.com" className="hover:text-white transition-colors">
                  info@fineglaze.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="site-container py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-white/45">
          <p>© {new Date().getFullYear()} Fine Glaze. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
