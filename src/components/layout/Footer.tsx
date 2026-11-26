import "./header.css";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Linkedin } from "lucide-react";
import { company, telHref, officeTelHref } from "@/data/company";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/quality-safety", label: "Quality & Safety" },
  { href: "/service-request", label: "Service Request" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const services = [
  { label: "Aluminium Windows & Doors", href: "/aluminium-windows-doors" },
  { label: "Curtain Wall Systems", href: "/curtain-wall-systems" },
  { label: "Structural Glazing", href: "/structural-glazing" },
  { label: "ACP Cladding", href: "/acp-aluminium-cladding" },
  { label: "Glass Railings", href: "/glass-railings" },
  { label: "Facade Maintenance", href: "/maintenance-services" },
];

export const Footer = () => {
  return (
    <footer className="bg-night text-paper border-t border-line pb-[calc(4.5rem+env(safe-area-inset-bottom))] md:pb-0">
      {/* Main Footer */}
      <div className="fg-wrap py-16">
        <div className="fg-foot-g">
          {/* Brand */}
          <div className="space-y-5 fg-foot-c">
            <img decoding="async" src="/Logofg.webp" alt="Fine Glaze" width={1920} height={603} className="fg-logo-img" />
            <p className="text-mute text-[15px] leading-relaxed">
              Facade design, fabrication, installation and maintenance from Pune and Mumbai.
              Our own fabrication unit is at {company.fabricationUnit.location}. Embassy REIT Best Vendor Performance 2024.
            </p>
            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://www.linkedin.com/company/fine-glaze"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-paper/10 flex items-center justify-center hover:bg-lamp hover:text-lamp-ink transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="fg-foot-c">
            <h4 className="font-semibold text-lg tracking-tight mb-5 text-paper">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-mute hover:text-lamp transition-colors text-[15px]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/faq"
                  className="text-mute hover:text-lamp transition-colors text-[15px]"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="fg-foot-c">
            <h4 className="font-semibold text-lg tracking-tight mb-5 text-paper">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    to={service.href}
                    className="text-mute hover:text-lamp transition-colors text-[15px]"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="fg-foot-c">
            <h4 className="font-semibold text-lg tracking-tight mb-5 text-paper">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-lamp mt-1 shrink-0" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Fine+Glaze+A3+LW-13+Pragati+Serene+Mohammed+Wadi+Pune+411060"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mute hover:text-paper text-[15px] transition-colors"
                >
                  A3 LW-13, Pragati Serene Building, Sr.No.2, HDFC Bank Chowk, Plot B, Autadwadi Handewadi, Mahadev Wadi, Mohammed Wadi,
                  <br />
                  Pune 411060
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-lamp shrink-0" />
                <span className="text-[15px]">
                  <a href={telHref} className="text-mute hover:text-paper transition-colors">
                    {company.phone.mobileDisplay}
                  </a>
                  <br />
                  <a href={officeTelHref} className="text-mute hover:text-paper transition-colors">
                    {company.phone.officeDisplay}
                  </a>
                  <br />
                  <a
                    href={`https://wa.me/${company.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-mute hover:text-paper transition-colors"
                  >
                    WhatsApp
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-lamp shrink-0" />
                <a
                  href={`mailto:${company.email}`}
                  className="text-mute hover:text-paper text-[15px] transition-colors"
                >
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Where we work: only places we actually operate */}
      <div className="border-t border-line py-5">
        <div className="fg-wrap">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[15px] text-mute">
            <span className="font-medium text-lamp shrink-0">
              Where we work
            </span>
            <nav aria-label="Service areas" className="flex flex-wrap gap-x-3 gap-y-1 text-mute">
              {[
                { name: "Facade contractor in Pune", href: "/facade-contractor-pune" },
                { name: "Mumbai", href: "/facade-contractor-mumbai" },
                { name: "Navi Mumbai", href: "/facade-contractor-navi-mumbai" },
                { name: "Thane", href: "/facade-contractor-thane" },
              ].map((loc) => (
                <Link key={loc.href} to={loc.href} className="hover:text-lamp transition-colors">
                  {loc.name}
                </Link>
              ))}
              <span className="text-mute">Projects taken across India</span>
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-line">
        <div className="fg-wrap py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-3 text-[15px] text-mute">
            <p>© {new Date().getFullYear()} Fine Glaze. All rights reserved.</p>
            <span className="hidden sm:inline text-mute" aria-hidden="true">|</span>
            <p>GST No: 27BFJPG1853A1ZU</p>
          </div>
          <div className="flex gap-6 text-[15px]">
            <Link to="/privacy-policy" className="text-mute hover:text-lamp transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-mute hover:text-lamp transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
