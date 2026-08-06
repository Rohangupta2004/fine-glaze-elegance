import { Phone, MessageSquare, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MobileBottomBarProps {
  onOpenQuote: () => void;
}

export const MobileBottomBar = ({ onOpenQuote }: MobileBottomBarProps) => {
  return (
    <aside
      aria-label="Quick Contact Options"
      className="fixed bottom-0 left-0 right-0 z-40 bg-stone-900/95 backdrop-blur-md border-t border-stone-800 py-2 px-3 lg:hidden shadow-2xl"
    >
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        <a
          href="tel:+918369233566"
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-white text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          aria-label="Call Fine Glaze"
        >
          <Phone className="h-4 w-4 text-amber-400 mb-0.5" />
          <span>Call</span>
        </a>

        <a
          href="https://wa.me/918369233566?text=Hi%20Fine%20Glaze,%20I'd%20like%20to%20enquire%20about%20a%20facade%20project"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-emerald-700/80 hover:bg-emerald-600 text-white text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          aria-label="Contact Fine Glaze on WhatsApp"
        >
          <MessageSquare className="h-4 w-4 text-emerald-300 mb-0.5" />
          <span>WhatsApp</span>
        </a>

        <Button
          onClick={onOpenQuote}
          size="sm"
          className="flex-1 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold py-3 h-auto rounded-lg shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
        >
          <FileText className="h-4 w-4 mr-1" />
          <span>Get Quote</span>
        </Button>
      </div>
    </aside>
  );
};
