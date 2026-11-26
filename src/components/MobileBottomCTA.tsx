import { useState } from "react";
import { Phone, MessageSquare, FileText } from "lucide-react";
import { QuoteModal } from "@/components/QuoteModal";

export default function MobileBottomCTA() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <>
      <aside
        aria-label="Mobile Quick Conversion Bar"
        className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-night/95 border-t border-line p-2 safe-bottom"
      >
        <div className="grid grid-cols-3 gap-2 max-w-md mx-auto text-center">
          <a
            href="tel:+918369233566"
            className="flex flex-col items-center justify-center py-2 px-2 bg-night-2 hover:bg-line text-paper text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lamp"
            aria-label="Call Fine Glaze"
          >
            <Phone className="h-4 w-4 text-lamp mb-0.5" />
            <span>Call</span>
          </a>

          <a
            href="https://wa.me/918369233566?text=Hi%20Fine%20Glaze,%20I'd%20like%20to%20enquire%20about%20a%20facade%20project"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-2 px-2 bg-emerald-800/80 hover:bg-emerald-700 text-paper text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lamp"
            aria-label="Contact Fine Glaze on WhatsApp"
          >
            <MessageSquare className="h-4 w-4 text-emerald-300 mb-0.5" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={() => setIsQuoteOpen(true)}
            className="flex flex-col items-center justify-center py-2 px-2 bg-night-2 text-paper text-xs font-bold tracking-wide transition-all active:scale-95 cursor-pointer"
            aria-label="Book a call"
          >
            <FileText className="h-4 w-4 text-paper mb-0.5" />
            <span>Book a call</span>
          </button>
        </div>
      </aside>

      <QuoteModal open={isQuoteOpen} onOpenChange={setIsQuoteOpen} />
    </>
  );
}
