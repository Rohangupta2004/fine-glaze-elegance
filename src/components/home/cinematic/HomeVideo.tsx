import { useEffect, useRef, useState } from "react";

const SRC = "https://player.vimeo.com/video/1191408845?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479";
const POSTER = "/Embassy.webp";

/** Company film. The player is mounted only once the frame scrolls into view. */
const HomeVideo = () => {
  const frame = useRef<HTMLDivElement>(null);
  const [near, setNear] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const el = frame.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setNear(true);
      return;
    }
    const io = new IntersectionObserver(
      (es) => {
        if (es.some((e) => e.isIntersecting)) {
          setNear(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="vid full rv" aria-label="Company film">
      <div className="wrap vid-g">
        <div>
          <h2 className="wipe">Our work, <span className="text-gradient">on film.</span></h2>
          <p>
            A short film on how we deliver curtain walls, structural glazing and cladding, from drawings to installation on site.
          </p>
        </div>
        <div className="vid-f" ref={frame}>
          {!playing && <img decoding="async" className="vid-po" src={POSTER} alt="" loading="lazy" width={1024} height={1024} />}
          {near && (
            <iframe
              src={playing ? `${SRC}&autoplay=1` : SRC}
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Fine Glaze company film"
            />
          )}
          {!playing && (
            <button type="button" className="vid-p" onClick={() => setPlaying(true)} aria-label="Play the company film">
              <span aria-hidden="true" />
              Play film
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default HomeVideo;
