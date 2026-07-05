import { Phone } from "lucide-react";

/**
 * Sticky bottom bar visible only on mobile — Call button only.
 * Floating WhatsApp button (FloatingCTA) handles WhatsApp separately.
 * Hidden on desktop (lg:hidden) so it doesn't clash with the nav "Call Now".
 */
export default function MobileBottomCTA() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-stone-900/95 backdrop-blur-sm border-t border-stone-700 safe-bottom">
      <a
        href="tel:+918369233566"
        className="flex items-center justify-center gap-2 py-3 text-white text-sm font-semibold hover:bg-amber-700 transition-colors"
      >
        <Phone size={16} />
        Call Now
      </a>
    </div>
  );
}
