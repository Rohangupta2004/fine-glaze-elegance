import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

/**
 * Floating back-to-top button.
 * Appears after scrolling down 400px. Positioned above the WhatsApp FAB.
 */
export const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-28 right-5 z-40 w-11 h-11 flex items-center justify-center bg-stone-900/80 hover:bg-stone-900 text-white backdrop-blur-sm shadow-lg transition-all duration-300 hover:scale-110"
    >
      <ArrowUp size={20} />
    </button>
  );
};
