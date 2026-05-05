import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "918369233566";
const WHATSAPP_MESSAGE = "Hello Fine Glaze, I'm interested in your facade services. Please share details.";

/**
 * Simple floating WhatsApp button — bottom-right on desktop, bottom-right on mobile.
 * No state, no toggle, no flickering. Just a static link.
 */
export default function FloatingCTA() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-colors duration-200 group"
    >
      <MessageCircle size={26} className="text-white group-hover:scale-110 transition-transform duration-200" />

      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-3 py-1.5 bg-slate-900 text-white text-xs font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Chat with us
      </span>
    </a>
  );
}
