import { Phone, MessageSquare } from "lucide-react";
import { telHref } from "@/data/company";

interface MobileBottomBarProps {
  /** Kept for existing callers; the primary action is now a phone call. */
  onOpenQuote?: () => void;
}

export const MobileBottomBar = (_props: MobileBottomBarProps) => {
  return (
    <aside
      aria-label="Quick Contact Options"
      className="fixed bottom-0 left-0 right-0 z-40 bg-night-2/95 border-t border-line py-2 px-3 lg:hidden"
    >
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        <a
          href={telHref}
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 bg-night-2 hover:bg-line text-paper text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lamp"
          aria-label="Call Fine Glaze"
        >
          <Phone className="h-4 w-4 text-lamp mb-0.5" />
          <span>Call</span>
        </a>

        <a
          href="https://wa.me/918369233566?text=Hi%20Fine%20Glaze,%20I'd%20like%20to%20enquire%20about%20a%20facade%20project"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 bg-emerald-700/80 hover:bg-emerald-600 text-paper text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lamp"
          aria-label="Contact Fine Glaze on WhatsApp"
        >
          <MessageSquare className="h-4 w-4 text-emerald-300 mb-0.5" />
          <span>WhatsApp</span>
        </a>

        <a
          href={telHref}
          data-call-now
          className="flex-1 flex items-center justify-center gap-1 bg-lamp text-lamp-ink text-xs font-bold py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lamp"
        >
          <Phone className="h-4 w-4 mr-1" />
          <span>Call now</span>
        </a>
      </div>
    </aside>
  );
};
