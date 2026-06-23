import { Phone, MessageCircle } from "lucide-react";

/**
 * Sticky bottom bar visible only on mobile — Call + WhatsApp side by side.
 * Sits above the floating WhatsApp button and below page content.
 * Hidden on desktop (lg:hidden) so it doesn't clash with the nav "Call Now".
 */
export default function MobileBottomCTA() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-stone-900/95 backdrop-blur-sm border-t border-stone-700 safe-bottom">
      <div className="flex">
        <a
          href="tel:+918369233566"
          className="flex-1 flex items-center justify-center gap-2 py-3 text-white text-sm font-semibold hover:bg-amber-700 transition-colors"
        >
          <Phone size={16} />
          Call Now
        </a>
        <div className="w-px bg-stone-700" />
        <a
          href="https://wa.me/918369233566?text=Hello%20Fine%20Glaze%2C%20I%27m%20interested%20in%20your%20facade%20services.%20Please%20share%20details."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 text-white text-sm font-semibold hover:bg-green-700 transition-colors"
        >
          <MessageCircle size={16} />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
