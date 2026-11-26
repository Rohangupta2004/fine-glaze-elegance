import { useEffect, useRef } from "react";

/** 1px bronze reading-progress line at the top of the viewport; also arms the heading mask reveal. */
export const ScrollProgress = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const upd = () => {
      raf = 0;
      const h = document.documentElement.scrollHeight - innerHeight;
      el.style.setProperty("--sp", h > 0 ? Math.min(1, Math.max(0, scrollY / h)).toFixed(4) : "0");
    };
    const on = () => {
      if (!raf) raf = requestAnimationFrame(upd);
    };
    upd();
    addEventListener("scroll", on, { passive: true });
    addEventListener("resize", on);
    return () => {
      removeEventListener("scroll", on);
      removeEventListener("resize", on);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <div className="scrollbar-top" ref={ref} aria-hidden="true">
      <i />
    </div>
  );
};

export default ScrollProgress;
