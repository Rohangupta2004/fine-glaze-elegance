import { useState } from "react";
import { Phone, MessageSquare, FileText } from "lucide-react";
import { QuoteModal } from "@/components/QuoteModal";

export default function MobileBottomCTA() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <>
      <aside
        aria-label="Mobile Quick Conversion Bar"
        className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-stone-950/95 backdrop-blur-md border-t border-stone-800 p-2 safe-bottom shadow-2xl"
      >
        <div className="grid grid-cols-3 gap-2 max-w-md mx-auto text-center">
          <a
            href="tel:+918369233566"
            className="flex flex-col items-center justify-center py-2 px-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-white text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            aria-label="Call Fine Glaze"
          >
            <Phone className="h-4 w-4 text-amber-400 mb-0.5" />
            <span>Call</span>
          </a>

          <a
            href="https://wa.me/918369233566?text=Hi%20Fine%20Glaze,%20I'd%20like%20to%20enquire%20about%20a%20facade%20project"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-2 px-2 rounded-lg bg-emerald-800/80 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            aria-label="Contact Fine Glaze on WhatsApp"
          >
            <MessageSquare className="h-4 w-4 text-emerald-300 mb-0.5" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={() => setIsQuoteOpen(true)}
            className="flex flex-col items-center justify-center py-2 px-2 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition-colors shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            aria-label="Get a Project Quote"
          >
            <FileText className="h-4 w-4 text-white mb-0.5" />
            <span>Get Quote</span>
          </button>
        </div>
      </aside>

      <QuoteModal open={isQuoteOpen} onOpenChange={setIsQuoteOpen} />
    </>
  );
}
