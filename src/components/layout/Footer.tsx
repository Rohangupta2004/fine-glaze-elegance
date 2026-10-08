import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Linkedin } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const services = [
  { label: "Aluminium Facade", href: "/aluminium-facade" },
  { label: "Curtain Wall Systems", href: "/curtain-wall-systems" },
  { label: "Structural Glazing", href: "/structural-glazing" },
  { label: "ACP Cladding", href: "/acp-aluminium-cladding" },
  { label: "Glass Railings", href: "/glass-railings" },
  { label: "Facade Maintenance", href: "/maintenance-services" },
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
              src="Logofg.webp"
             alt="Fine Glaze Logo"
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="text-white/70 text-sm leading-relaxed">
              Precision facade fabrication and installation across India.
              Transforming architectural visions into iconic glass & aluminium
              facades — delivered with award-winning quality since establishment.
            </p>
            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://www.linkedin.com/company/fine-glaze"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-amber-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
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
              <li>
                <Link
                  to="/faq"
                  className="text-white/70 hover:text-amber-400 transition-colors text-sm"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Services — Now with internal links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    to={service.href}
                    className="text-white/70 hover:text-amber-400 transition-colors text-sm"
                  >
                    {service.label}
                  </Link>
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
                <a
                  href="https://maps.app.goo.gl/JDF3ESXQGHtwKoAr6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  Shop No. 1 & 2, Jagdamba Bhawan Marg,
                  <br />
                  Near Sunshine Hills, Shree Siddhivinayak Meera,
                  <br />
                  Undri, Pune – 411060
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-amber-500 shrink-0" />
                <a
                  href="tel:+918369233566"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  +91 8369233566
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

      {/* Pan-India Execution Hubs (Dynamic Routing) */}
      <div className="border-t border-white/10 py-5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-white/60">
            <span className="font-semibold text-amber-400 uppercase tracking-wider shrink-0">
              Pan-India Execution Hubs:
            </span>
            <div className="flex flex-wrap gap-x-3 gap-y-1 text-white/70">
              {[
                { name: "Delhi NCR", slug: "delhi-ncr" },
                { name: "Bengaluru", slug: "bengaluru" },
                { name: "Hyderabad", slug: "hyderabad" },
                { name: "Mumbai", slug: "mumbai" },
                { name: "Pune", slug: "pune" },
                { name: "Chennai", slug: "chennai" },
                { name: "Ahmedabad", slug: "ahmedabad" },
                { name: "GIFT City", slug: "gift-city" },
                { name: "Kolkata", slug: "kolkata" },
                { name: "Chandigarh", slug: "chandigarh" },
                { name: "Jaipur", slug: "jaipur" },
                { name: "Lucknow", slug: "lucknow" },
                { name: "Indore", slug: "indore" },
                { name: "Kochi", slug: "kochi" },
              ].map((loc) => (
                <Link
                  key={loc.slug}
                  to={`/facade-contractor/${loc.slug}`}
                  className="hover:text-amber-400 transition-colors"
                >
                  {loc.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-3 text-sm text-white/50">
            <p>© {new Date().getFullYear()} Fine Glaze. All rights reserved.</p>
            <span className="hidden sm:inline text-white/20">|</span>
            <p>GST No: 27BFJPG1853A1ZU</p>
          </div>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy-policy" className="text-white/50 hover:text-amber-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-white/50 hover:text-amber-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
