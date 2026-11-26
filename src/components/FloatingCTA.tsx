import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useBookCall } from "@/components/booking/BookCallProvider";
import { company, telHref } from "@/data/company";

/**
 * Quiet bottom bar on phones only. On the home page it waits until the visitor
 * has scrolled past the first screen.
 */
export default function FloatingCTA() {
  const { open } = useBookCall();
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const [pastHero, setPastHero] = useState(!isHome);

  useEffect(() => {
    if (!isHome) {
      setPastHero(true);
      return;
    }
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  if (!pastHero) return null;

  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 flex items-center gap-3 bg-night-2 border-t border-line px-4 pt-3"
      style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
    >
      <button
        type="button"
        onClick={() => open({ source: "mobile_bar" })}
        className="flex-1 h-12 bg-lamp text-lamp-ink font-semibold text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glass"
      >
        Book a call
      </button>
      <a
        href={telHref}
        aria-label={`Call ${company.phone.mobileDisplay}`}
        className="h-12 px-5 inline-flex items-center text-paper font-medium text-base shadow-[inset_0_0_0_1px_rgba(245,242,238,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-glass"
      >
        Call
      </a>
    </div>
  );
}
