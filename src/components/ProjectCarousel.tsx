import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./project-carousel.css";

interface ProjectCarouselProps {
  title: string;
  location: string;
  images: string[];
}

/**
 * Photographs of one project: a scroll-snap strip (swipe on touch, arrow keys, previous / next
 * buttons) with a counter and a row of thumbnails. Captions only state the project and the photo number.
 */
export function ProjectCarousel({ title, location, images }: ProjectCarouselProps) {
  const track = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);
  // while a button or key press is scrolling the strip, ignore the in-between scroll positions
  const busy = useRef<number | undefined>();
  const n = images.length;

  const sync = useCallback(() => {
    const el = track.current;
    if (!el || !el.clientWidth) return;
    if (busy.current !== undefined) return;
    setActive(Math.min(n - 1, Math.max(0, Math.round(el.scrollLeft / el.clientWidth))));
  }, [n]);

  const go = useCallback(
    (i: number) => {
      const el = track.current;
      if (!el) return;
      const t = Math.min(n - 1, Math.max(0, i));
      const reduce = typeof matchMedia === "function" && matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.clearTimeout(busy.current);
      busy.current = window.setTimeout(() => {
        busy.current = undefined;
        sync();
      }, reduce ? 50 : 750);
      el.scrollTo({ left: t * el.clientWidth, behavior: reduce ? "auto" : "smooth" });
      setActive(t);
    },
    [n, sync],
  );

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    el.addEventListener("scrollend", sync);
    return () => el.removeEventListener("scrollend", sync);
  }, [sync]);

  const onKey = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key === "ArrowRight") { e.preventDefault(); go(active + 1); }
    else if (e.key === "ArrowLeft") { e.preventDefault(); go(active - 1); }
    else if (e.key === "Home") { e.preventDefault(); go(0); }
    else if (e.key === "End") { e.preventDefault(); go(n - 1); }
  };

  if (n < 2) return null;

  return (
    <section className="pc" role="region" aria-roledescription="carousel" aria-label={`${title} photographs`}>
      <div className="pc-head">
        <p className="pc-h">Photographs</p>
        <p className="pc-n" aria-live="polite">
          N&ordm; {String(active + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
        </p>
      </div>
      <div className="pc-stage">
        <ul className="pc-track" ref={track} onScroll={sync} onKeyDown={onKey} tabIndex={0} aria-label={`${title}, photo ${active + 1} of ${n}. Use the left and right arrow keys.`}>
          {images.map((src, i) => (
            <li key={src} role="group" aria-roledescription="slide" aria-label={`Photo ${i + 1} of ${n}`}>
              <img
                src={src}
                alt={`${title}, ${location}: project photograph ${i + 1} of ${n}`}
                loading={Math.abs(i - active) <= 1 ? "eager" : "lazy"}
                decoding="async"
                draggable={false}
              />
            </li>
          ))}
        </ul>
        <button type="button" className="pc-b pc-prev" aria-label="Previous photo" onClick={() => go(active - 1)} disabled={active === 0}>
          <ChevronLeft size={22} aria-hidden="true" />
        </button>
        <button type="button" className="pc-b pc-next" aria-label="Next photo" onClick={() => go(active + 1)} disabled={active === n - 1}>
          <ChevronRight size={22} aria-hidden="true" />
        </button>
      </div>
      <ul className="pc-th" aria-label="Choose a photo">
        {images.map((src, i) => (
          <li key={src}>
            <button type="button" aria-label={`Show photo ${i + 1}`} aria-current={i === active ? "true" : undefined} onClick={() => go(i)}>
              <img src={src} alt="" loading="lazy" decoding="async" width={96} height={72} />
            </button>
          </li>
        ))}
      </ul>
      <p className="pc-cap">{title}, {location}. Photograph {active + 1} of {n}.</p>
    </section>
  );
}

export default ProjectCarousel;
