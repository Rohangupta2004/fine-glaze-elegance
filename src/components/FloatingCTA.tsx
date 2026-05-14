import { MessageCircle, Phone } from "lucide-react";

const WHATSAPP_NUMBER = "918369233566";
const PHONE_NUMBER = "+918369233566";
const WHATSAPP_MESSAGE = "Hello Fine Glaze, I need a facade quotation and site visit.";

const trackLeadClick = (label: string) => {
  const win = window as typeof window & {
    gtag?: (event: string, action: string, params?: Record<string, string>) => void;
  };

  win.gtag?.("event", "lead_click", {
    event_category: "conversion",
    event_label: label,
  });
};

export default function FloatingCTA() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <>
      {/* Mobile bottom conversion bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 grid grid-cols-2 gap-2 bg-white/95 p-3 shadow-[0_-8px_30px_rgba(15,23,42,0.18)] backdrop-blur-md border-t border-slate-200 md:hidden">
        <a
          href={`tel:${PHONE_NUMBER}`}
          onClick={() => trackLeadClick("mobile_sticky_call")}
          className="flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-4 py-3 text-sm font-extrabold text-slate-950 shadow-lg active:scale-[0.98]"
          aria-label="Call Fine Glaze now"
        >
          <Phone size={18} /> Call Now
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackLeadClick("mobile_sticky_whatsapp")}
          className="flex items-center justify-center gap-2 rounded-xl bg-green-500 px-4 py-3 text-sm font-extrabold text-white shadow-lg active:scale-[0.98]"
          aria-label="WhatsApp Fine Glaze"
        >
          <MessageCircle size={18} /> WhatsApp
        </a>
      </div>

      {/* Desktop quick action buttons */}
      <div className="fixed bottom-6 right-6 z-50 hidden md:flex flex-col gap-3">
        <a
          href={`tel:${PHONE_NUMBER}`}
          onClick={() => trackLeadClick("desktop_floating_call")}
          aria-label="Call Fine Glaze now"
          className="group flex items-center justify-center gap-3 rounded-full bg-amber-500 px-5 py-4 text-sm font-extrabold text-slate-950 shadow-xl transition-transform hover:-translate-y-0.5 hover:bg-amber-600"
        >
          <Phone size={20} className="group-hover:scale-110 transition-transform" />
          <span>Call +91 83692 33566</span>
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackLeadClick("desktop_floating_whatsapp")}
          aria-label="Chat on WhatsApp"
          className="group flex items-center justify-center gap-3 rounded-full bg-green-500 px-5 py-4 text-sm font-extrabold text-white shadow-xl transition-transform hover:-translate-y-0.5 hover:bg-green-600"
        >
          <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
          <span>WhatsApp Quote</span>
        </a>
      </div>
    </>
  );
}
