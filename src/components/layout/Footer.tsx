import "./header.css";
import { Link } from "react-router-dom";
import { Phone, Mail, Linkedin } from "lucide-react";
import { company, telHref, officeTelHref } from "@/data/company";
import { TitleBlock } from "@/components/common/Drawing";

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Projects" },
  { href: "/blog", label: "Articles" },
  { href: "/quality-safety", label: "Quality & Safety" },
  { href: "/faq", label: "FAQ" },
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

const linkCls = "text-[#c9ced3] hover:text-lamp-soft transition-colors text-[14.5px]";

export const Footer = () => {
  return (
    <footer className="fg-footer pb-[calc(4.5rem+env(safe-area-inset-bottom))] md:pb-0">
      <div className="fg-wrap pt-10 md:pt-14">
        <div className="fg-foot-top">
          <div className="space-y-4">
            <span className="fg-logo-plate">
              <img decoding="async" src="/Logofg.webp" alt="Fine Glaze" width={1920} height={603} className="fg-logo-img fg-logo-foot" />
            </span>
            <p className="text-[#c9ced3] text-[14.5px] leading-relaxed max-w-sm">
              Facade design, fabrication, installation and maintenance from Pune and Mumbai.
            </p>
            <a
              href="https://www.linkedin.com/company/fine-glaze"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 min-h-[44px] text-[14.5px] text-[#c9ced3] hover:text-lamp-soft transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
          <TitleBlock
            dark
            className="fg-foot-tb"
            rows={[
              ["SHEET", "FG-00 / FOOTER"],
              ["FIRM", company.name],
              ["OFFICE", "Undri, Pune"],
              ["GSTIN", company.gstin],
            ]}
          />
        </div>

        <div className="fg-foot-g">
          <div className="fg-foot-c">
            <h4 className="fg-foot-h">Services</h4>
            <ul className="fg-foot-l">
              {services.map((service) => (
                <li key={service.href}>
                  <Link to={service.href} className={`${linkCls} inline-block py-0.5`}>{service.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="fg-foot-c">
            <h4 className="fg-foot-h">Company</h4>
            <ul className="fg-foot-l">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className={`${linkCls} inline-block py-0.5`}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="fg-foot-c fg-foot-ct">
            <h4 className="fg-foot-h">Contact</h4>
            <ul className="space-y-2.5">
              <li>
                <a href={telHref} className="inline-flex items-center gap-2 font-mono text-[20px] leading-none text-white hover:text-lamp-soft transition-colors">
                  <Phone size={16} className="text-lamp-soft shrink-0" aria-hidden="true" />
                  {company.phone.mobileDisplay}
                </a>
                <span className="block text-[13px] text-[#aab0b6] mt-1">Mobile and WhatsApp</span>
              </li>
              <li>
                <a href={officeTelHref} className={`${linkCls} font-mono`}>{company.phone.officeDisplay}</a>
                <span className="text-[13px] text-[#aab0b6]"> office</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={15} className="text-lamp-soft shrink-0" aria-hidden="true" />
                <a href={`mailto:${company.email}`} className={`${linkCls} break-all`}>{company.email}</a>
              </li>
              <li className="text-[14.5px] text-[#c9ced3] leading-snug">
                Mohammed Wadi (Undri),<br />Pune 411060{" "}
                <Link to="/contact" className="block mt-1 text-white underline underline-offset-4 decoration-lamp-soft hover:text-lamp-soft">Full address</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="fg-foot-rule py-4">
        <div className="fg-wrap">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-x-5 gap-y-1 text-[14px] text-[#c9ced3]">
            <span className="font-mono text-[12px] uppercase tracking-[0.08em] text-[#aab0b6] shrink-0">Where we work</span>
            <nav aria-label="Service areas" className="flex flex-wrap gap-x-5 gap-y-1">
              {[
                { name: "Pune", href: "/facade-contractor-pune" },
                { name: "Mumbai", href: "/facade-contractor-mumbai" },
                { name: "Navi Mumbai", href: "/facade-contractor-navi-mumbai" },
                { name: "Thane", href: "/facade-contractor-thane" },
              ].map((loc) => (
                <Link key={loc.href} to={loc.href} className="hover:text-lamp-soft transition-colors py-1">{loc.name}</Link>
              ))}
              <span className="py-1">Projects taken across India</span>
            </nav>
          </div>
        </div>
      </div>

      <div className="fg-foot-rule">
        <div className="fg-wrap py-4 flex flex-col md:flex-row md:items-center justify-between gap-2 text-[13.5px] text-[#aab0b6]">
          <p>&copy; {new Date().getFullYear()} Fine Glaze. GST No: <span className="font-mono">27BFJPG1853A1ZU</span></p>
          <div className="flex gap-5">
            <Link to="/privacy-policy" className="hover:text-lamp-soft transition-colors py-1">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-lamp-soft transition-colors py-1">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
