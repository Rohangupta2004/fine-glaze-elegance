import { useState, useEffect } from "react";
import { Phone, X, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "918369233566";
const PHONE_NUMBER = "+918369233566";
const WHATSAPP_MESSAGE = "Hello Fine Glaze, I'm interested in your facade services. Please share details.";

/**
 * Floating WhatsApp + Call buttons (bottom-right corner).
 * Appears after 2 seconds. Pulse animation draws attention.
 * On mobile: sticky bottom CTA bar with Call + WhatsApp.
 */
export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <>
      {/* ========== DESKTOP: Floating Buttons (bottom-right) ========== */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-50 flex-col items-end gap-3">
        {/* Expanded options */}
        {expanded && (
          <div className="flex flex-col gap-3 animate-in slide-in-from-bottom-4 duration-300">
            {/* Call Button */}
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center gap-3 bg-white shadow-xl rounded-full pl-5 pr-4 py-3 hover:shadow-2xl transition-all group border border-slate-200"
            >
              <span className="text-sm font-semibold text-slate-700 group-hover:text-slate-900">
                Call Now
              </span>
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                <Phone size={18} className="text-white" />
              </div>
            </a>

            {/* WhatsApp Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white shadow-xl rounded-full pl-5 pr-4 py-3 hover:shadow-2xl transition-all group border border-slate-200"
            >
              <span className="text-sm font-semibold text-slate-700 group-hover:text-slate-900">
                WhatsApp
              </span>
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                <MessageCircle size={18} className="text-white" />
              </div>
            </a>
          </div>
        )}

        {/* Main Toggle Button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 ${
            expanded
              ? "bg-slate-800 rotate-0"
              : "bg-green-500 hover:bg-green-600 animate-pulse"
          }`}
          aria-label={expanded ? "Close contact options" : "Contact us"}
        >
          {expanded ? (
            <X size={22} className="text-white" />
          ) : (
            <MessageCircle size={24} className="text-white" />
          )}
        </button>
      </div>

      {/* ========== MOBILE: Sticky Bottom Bar ========== */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-[0_-4px_20px_rgba(0,0,0,0.1)] safe-area-bottom">
        <div className="grid grid-cols-2 divide-x">
          {/* Call Button */}
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="flex items-center justify-center gap-2 py-3.5 text-blue-600 font-semibold text-sm active:bg-blue-50 transition-colors"
          >
            <Phone size={18} />
            Call Now
          </a>

          {/* WhatsApp Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3.5 text-green-600 font-semibold text-sm active:bg-green-50 transition-colors"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
