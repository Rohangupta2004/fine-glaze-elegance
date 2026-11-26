import { RefObject, useEffect } from "react";

/**
 * Page-level reveal for the home page. Adds the "js" flag to the .fg-home wrapper, marks .pl and
 * .rv elements "in" when 25% visible, runs the number counters, and tilts the gallery plates
 * under a fine hover pointer. Without JS everything stays visible.
 */
export function useReveal(ref: RefObject<HTMLElement>) {
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanups: Array<() => void> = [];
    const counters = Array.from(root.querySelectorAll<HTMLElement>("[data-count]"));
    const frames = new Set<number>();

    root.classList.add("js");
    cleanups.push(() => root.classList.remove("js"));

    // Counters show their starting value until their section is seen (server HTML has the final value).
    if (!reduce) counters.forEach((el) => (el.textContent = el.dataset.from || "0"));

    const count = (el: HTMLElement) => {
      const to = +(el.dataset.count || 0), from = +(el.dataset.from || 0), dur = 1400;
      if (reduce) {
        el.textContent = String(to);
        return;
      }
      let t0 = 0;
      const step = (ts: number) => {
        if (!t0) t0 = ts;
        const k = Math.min(1, (ts - t0) / dur), e = 1 - Math.pow(1 - k, 3);
        el.textContent = String(Math.round(from + (to - from) * e));
        if (k < 1) frames.add(requestAnimationFrame(step));
      };
      el.textContent = String(from);
      frames.add(requestAnimationFrame(step));
    };

    const targets = Array.from(root.querySelectorAll<HTMLElement>(".pl, .rv"));
    if ("IntersectionObserver" in window) {
      const po = new IntersectionObserver(
        (es) => {
          es.forEach((e) => {
            if (e.isIntersecting) {
              const t = e.target as HTMLElement;
              t.classList.add("in");
              t.querySelectorAll<HTMLElement>("[data-count]").forEach(count);
              po.unobserve(t);
            }
          });
        },
        { threshold: 0.25 },
      );
      targets.forEach((n) => po.observe(n));
      cleanups.push(() => po.disconnect());
    } else {
      targets.forEach((n) => n.classList.add("in"));
      counters.forEach((el) => (el.textContent = el.dataset.count || ""));
    }

    if (!reduce && matchMedia("(hover:hover) and (pointer:fine)").matches) {
      root.querySelectorAll<HTMLElement>(".pl").forEach((pl) => {
        const move = (e: PointerEvent) => {
          const r = pl.getBoundingClientRect();
          pl.style.setProperty("--ry", ((e.clientX - r.left) / r.width - 0.5) * 3 + "deg");
          pl.style.setProperty("--rx", (0.5 - (e.clientY - r.top) / r.height) * 2.4 + "deg");
        };
        const leave = () => {
          pl.style.setProperty("--ry", "0deg");
          pl.style.setProperty("--rx", "0deg");
        };
        pl.addEventListener("pointermove", move);
        pl.addEventListener("pointerleave", leave);
        cleanups.push(() => {
          pl.removeEventListener("pointermove", move);
          pl.removeEventListener("pointerleave", leave);
        });
      });
    }

    return () => {
      frames.forEach((f) => cancelAnimationFrame(f));
      cleanups.forEach((fn) => fn());
    };
  }, [ref]);
}
