import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="container mx-auto grid gap-10 px-4 py-14 md:grid-cols-3">
        <div>
          <img
            src="/Logofg.webp"
            alt="Fine Glaze"
            className="mb-4 h-10 w-auto brightness-0 invert"
          />
          <p className="max-w-sm text-sm text-slate-400">
            End-to-end facade design, fabrication, installation, and maintenance
            for high-performance commercial and residential buildings.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-white">Portfolio</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-white">Contact</h3>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>Pune, Maharashtra, India</li>
            <li>
              <a href="tel:+918369233566" className="hover:text-white">+91 83692 33566</a>
            </li>
            <li>
              <a href="mailto:info@fineglaze.com" className="hover:text-white">info@fineglaze.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 py-5 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Fine Glaze. All rights reserved.
      </div>
    </footer>
  );
};
