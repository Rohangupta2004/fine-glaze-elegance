import { RefObject, useEffect, useState } from "react";

/**
 * Panel-wipe reveal: returns [armed, seen]. Both are false on the server and on first paint, so
 * the markup is fully visible without JS. Once mounted the element is "armed" (hidden behind a
 * clip), and it is "seen" when 25% of it enters the viewport. Reduced motion never arms it.
 */
export function useWipe(ref: RefObject<HTMLElement>): [boolean, boolean] {
  const [armed, setArmed] = useState(false);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    setArmed(true);
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ref]);

  return [armed, seen];
}
