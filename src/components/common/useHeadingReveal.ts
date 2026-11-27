import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Left-to-right mask reveal for section headings in <main>, once each, when they scroll into view. */
export function useHeadingReveal() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    const html = document.documentElement;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("hd-in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0, rootMargin: "0px 0px -12% 0px" },
    );
    const t = window.setTimeout(() => {
      document.querySelectorAll<HTMLElement>("main h2").forEach((h) => {
        // headings with their own reveal (home story, .wipe) are left alone
        // accent the last word of plain-text headings in the bronze gradient
        if (h.childNodes.length === 1 && h.firstChild?.nodeType === 3 && !h.closest(".story")) {
          const txt = (h.textContent || "").trimEnd();
          const i = txt.lastIndexOf(" ");
          if (i > 0 && txt.length - i < 18) {
            const sp = document.createElement("span");
            sp.className = "text-gradient";
            sp.textContent = txt.slice(i + 1);
            h.firstChild.textContent = txt.slice(0, i + 1);
            h.appendChild(sp);
          }
        }
        if (h.closest(".story") || h.classList.contains("wipe") || h.closest(".fg-home")) return;
        const r = h.getBoundingClientRect();
        if (r.top < innerHeight * 0.9 && r.bottom > 0) return; // already on screen: no reveal
        h.classList.add("hd-r");
        io.observe(h);
      });
      html.classList.add("hd-js");
    }, 60);
    return () => {
      clearTimeout(t);
      io.disconnect();
      html.classList.remove("hd-js");
      document.querySelectorAll(".hd-r").forEach((h) => h.classList.remove("hd-r", "hd-in"));
    };
  }, [pathname]);
}
