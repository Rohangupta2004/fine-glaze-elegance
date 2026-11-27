import { ReactNode } from "react";
import { Link } from "react-router-dom";
import CallNow from "./CallNow";
import { TitleBlock, GridBg, CornerTicks } from "./Drawing";
import { SchematicFig, type SchematicKey } from "./Sheet";
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
  /** Optional hero photograph, shown right of the text in a framed viewport with corner ticks and a mono caption. */
  image?: { src: string; alt: string; width?: number; height?: number; position?: string; srcSet?: string; sizes?: string };
  /** Inline line schematic in place of a photo (service pages). */
  schematic?: SchematicKey;
  /** Secondary text link next to the primary button. */
  secondary?: { label: string; to?: string; href?: string };
  /** Kept for existing callers; no longer used now that the primary action is a phone call. */
  source?: string;
  /** Extra quiet line under the buttons. */
  extra?: ReactNode;
  /** Hide the Call now button (legal pages). */
  hideAction?: boolean;
  /** Smaller headline for long titles such as article names. */
  compact?: boolean;
}

/** Shared hero for service, city, industry, guide and static pages. Engineering style: split layout with a framed viewport when there is a photo, a text hero over a faint grid when there is not. */
export const PageHero = ({ crumbs = [], title, intro, image, schematic, secondary, extra, hideAction, compact }: PageHeroProps) => {
  const trail: Crumb[] = [{ label: "Home", to: "/" }, ...crumbs];
  const current = trail[trail.length - 1].label;

  return (
    <section className={`ph${image || schematic ? " ph-img" : " ph-txt"}${compact ? " compact" : ""}`}>
      {!image && !schematic && <GridBg />}
      <div className="fg-wrap ph-wrap">
        <div className="ph-g">
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
            <h1>{title}</h1>
            {intro && <p className="ph-intro">{intro}</p>}
            <div className="ph-act" hidden={hideAction && !secondary ? true : undefined}>
              {!hideAction && <CallNow className="fg-btn" number={!secondary?.href?.startsWith("tel:")} />}
              {secondary &&
                (secondary.href ? (
                  <a className="fg-btn2" href={secondary.href}>
                    {secondary.label}
                  </a>
                ) : (
                  <Link className="fg-btn2" to={secondary.to || "/portfolio"}>
                    {secondary.label}
                  </Link>
                ))}
            </div>
            {extra && <div className="ph-extra">{extra}</div>}
          </div>

          {schematic ? (
            <SchematicFig kind={schematic} className="ph-view ph-sch" />
          ) : image ? (
            <figure className="ph-view">
              <div className="ph-frame">
                <img
                  decoding="async"
                  src={image.src}
                  srcSet={image.srcSet}
                  sizes={image.srcSet ? image.sizes || "(max-width: 900px) 100vw, 560px" : image.sizes}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  loading="eager"
                  {...({ fetchpriority: "high" } as Record<string, string>)}
                  style={image.position ? { objectPosition: image.position } : undefined}
                />
                <CornerTicks />
              </div>
              <figcaption aria-hidden="true">
                <span>FIG. 01</span> {image.alt}
              </figcaption>
            </figure>
          ) : (
            <TitleBlock
              className="ph-tb"
              rows={[
                ["SHEET", current],
                ["FIRM", "Fine Glaze"],
                ["BASED", "Pune / Mumbai"],
              ]}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
