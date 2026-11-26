import { useEffect, useRef } from "react";
import "./glasslight.css";

/**
 * Soft "light through glass" background: warm blurred blobs, slow diagonal light bands and a fine grain.
 * Pure CSS. The parent needs the `glb-host` class (it creates the stacking context). Animation only
 * runs while the element is on screen and never under prefers-reduced-motion.
 */
export const GlassLightBg = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(([e]) => el.classList.toggle("glb-on", e.isIntersecting), { rootMargin: "80px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div className="glb" ref={ref} aria-hidden="true">
      <span className="glb-b glb-b1" />
      <span className="glb-b glb-b2" />
      <span className="glb-b glb-b3" />
      <span className="glb-bands" />
      <span className="glb-grain" />
    </div>
  );
};

export default GlassLightBg;
