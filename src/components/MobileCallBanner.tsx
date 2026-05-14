import { Phone, MessageCircle } from "lucide-react";

/**
 * Sticky bottom bar on mobile — Call + WhatsApp side by side.
 * Only visible on screens < 768px. Hidden on desktop.
 */
export default function MobileCallBanner() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden flex border-t border-slate-700 shadow-2xl">
      {/* Call Button */}
      <a
        href="tel:+918369233566"
        className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 active:bg-blue-800 transition-colors"
      >
        <Phone size={18} />
        Call Now
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918369233566?text=Hello%20Fine%20Glaze%2C%20I%27m%20interested%20in%20your%20facade%20services.%20Please%20share%20details."
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-green-600 text-white font-semibold text-sm hover:bg-green-700 active:bg-green-800 transition-colors"
      >
        <MessageCircle size={18} />
        WhatsApp
      </a>
    </div>
  );
}
