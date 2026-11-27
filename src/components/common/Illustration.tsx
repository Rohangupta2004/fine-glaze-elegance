import { ILLUSTRATIONS, illusSrc, illusSrcSet, type IllustrationName } from "@/lib/illustrations";

interface IllustrationProps {
  name: IllustrationName;
  className?: string;
  /** No top margin and no frame: the caller places and rules the image itself. */
  flush?: boolean;
  /** Responsive sizes hint; defaults to the narrow article column. */
  sizes?: string;
}

/** A general illustration in a ruled frame. Not a project photo, so there is no caption. */
export const Illustration = ({ name, className = "", flush = false, sizes = "(max-width: 768px) 100vw, 720px" }: IllustrationProps) => (
  <figure className={`fg-illus ${className}`} style={flush ? { margin: 0 } : { margin: "40px 0 0", border: "1px solid #cfd2cd" }}>
    <img
      src={illusSrc(name)}
      srcSet={illusSrcSet(name)}
      sizes={sizes}
      alt={ILLUSTRATIONS[name]}
      width={1376}
      height={768}
      loading="lazy"
      decoding="async"
      style={{ display: "block", width: "100%", height: "auto" }}
    />
  </figure>
);

export default Illustration;
