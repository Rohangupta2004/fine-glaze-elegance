import { Phone, MessageSquare } from "lucide-react";
import { telHref } from "@/data/company";

export default function MobileBottomCTA() {
  return (
    <>
      <aside
        aria-label="Mobile Quick Conversion Bar"
        className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-night/95 border-t border-line p-2 safe-bottom"
      >
        <div className="grid grid-cols-3 gap-2 max-w-md mx-auto text-center">
          <a
            href={telHref}
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

          <a
            href={telHref}
            data-call-now
            className="flex flex-col items-center justify-center py-2 px-2 bg-lamp text-lamp-ink text-xs font-bold tracking-wide transition-all active:scale-95"
            aria-label="Call now"
          >
            <Phone className="h-4 w-4 mb-0.5" />
            <span>Call now</span>
          </a>
        </div>
      </aside>

    </>
  );
}
