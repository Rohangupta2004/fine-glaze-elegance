import { ReactNode, useRef } from "react";
import { Link } from "react-router-dom";
import { useBookCall } from "@/components/booking/BookCallProvider";
import { useWipe } from "./useWipe";
import GlassLightBg from "./GlassLightBg";
import "./pagehero.css";

export interface Crumb {
  label: string;
  to?: string;
}

export interface PageHeroProps {
  /** Breadcrumb trail after "Home"; the last item is the current page. */
  crumbs?: Crumb[];
  /** The page's h1 content (the only h1 on the page). */
  title: ReactNode;
  /** One line of intro. */
  intro?: ReactNode;
  /** Optional hero photograph, shown in a square frame revealed with a panel wipe. */
  image?: { src: string; alt: string; width?: number; height?: number; position?: string; srcSet?: string; sizes?: string };
  /** Secondary text link next to the primary button. */
  secondary?: { label: string; to?: string; href?: string };
  /** Source tag passed to the booking dialog. */
  source?: string;
  /** Extra quiet line under the buttons. */
  extra?: ReactNode;
  /** Hide the Book a call button (legal pages). */
  hideAction?: boolean;
  /** Smaller headline for long titles such as article names. */
  compact?: boolean;
}

/** Shared hero for service, city, industry, guide and static pages. Use inside <Layout darkHero>. */
/** Plain-string titles get the bronze gradient on their last word, as the JSX titles do. */
const accentLast = (t: string) => {
  const i = t.trimEnd().lastIndexOf(" ");
  if (i < 0) return <span className="text-gradient">{t}</span>;
  return (
    <>
      {t.slice(0, i + 1)}
      <span className="text-gradient">{t.slice(i + 1)}</span>
    </>
  );
};

export const PageHero = ({ crumbs = [], title, intro, image, secondary, source = "page_hero", extra, hideAction, compact }: PageHeroProps) => {
  const { open } = useBookCall();
  const fig = useRef<HTMLElement>(null);
  const [armed, seen] = useWipe(fig);
  const trail: Crumb[] = [{ label: "Home", to: "/" }, ...crumbs];

  return (
    <section className={`ph glb-host${compact ? " compact" : ""}`}>
      <GlassLightBg />
      <div className="fg-wrap" style={{ width: "100%" }}>
        <div className={`ph-g${image ? "" : " solo"}`}>
          <div className="ph-copy">
            <nav className="ph-crumbs" aria-label="Breadcrumb">
              <ol>
                {trail.map((c, i) => {
                  const last = i === trail.length - 1;
                  return (
                    <li key={c.label + i}>
                      {last || !c.to ? (
                        <span aria-current={last ? "page" : undefined}>{c.label}</span>
                      ) : (
                        <Link to={c.to}>{c.label}</Link>
                      )}
                    </li>
                  );
                })}
              </ol>
            </nav>
            <h1>{typeof title === "string" ? accentLast(title) : title}</h1>
            {intro && <p className="ph-intro">{intro}</p>}
            <div className="ph-act" hidden={hideAction && !secondary ? true : undefined}>
              {!hideAction && (
                <button type="button" className="fg-btn" onClick={() => open({ source })}>
                  Book a call
                </button>
              )}
              {secondary &&
                (secondary.href ? (
                  <a className="fg-lnk" href={secondary.href}>
                    {secondary.label}
                  </a>
                ) : (
                  <Link className="fg-lnk" to={secondary.to || "/portfolio"}>
                    {secondary.label}
                  </Link>
                ))}
            </div>
            {extra && <div className="ph-extra">{extra}</div>}
          </div>
          {image && (
            <figure ref={fig} className={`ph-fig${armed ? " armed" : ""}${seen ? " seen" : ""}`}>
              <img decoding="async"
                src={image.src}
                srcSet={image.srcSet}
                sizes={image.sizes}
                alt={image.alt}
                width={image.width}
                height={image.height}
                loading="eager"
                {...({ fetchpriority: "high" } as Record<string, string>)}
                style={image.position ? { objectPosition: image.position } : undefined}
              />
            </figure>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
