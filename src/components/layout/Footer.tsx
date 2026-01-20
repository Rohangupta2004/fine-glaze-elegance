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
    <footer 
      className="text-white"
      style={{ background: "linear-gradient(180deg, hsl(25 25% 12%) 0%, hsl(20 20% 8%) 100%)" }}
    >
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-5">
            <img
              src="https://fineglaze.com/wp-content/uploads/2024/09/cropped-output-onlinepngtools.png"
              alt="Fine Glaze Logo"
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="text-white/70 text-sm leading-relaxed">
              Precision facade fabrication and installation services. 
              Transforming architectural visions into stunning glass facades 
              across India since establishment.
            </p>
            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-amber-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-amber-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-amber-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-amber-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-white/70 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-amber-500 mt-1 shrink-0" />
                <span className="text-white/70 text-sm">
                  Pune, Maharashtra, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-amber-500 shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  +91 83699233566 
                  <br />
                  +91 02068299428
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-amber-500 shrink-0" />
                <a
                  href="mailto:info@fineglaze.com"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  info@fineglaze.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Fine Glaze. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-white/50 hover:text-amber-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/50 hover:text-amber-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};