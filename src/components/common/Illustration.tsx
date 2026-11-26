import { ILLUSTRATIONS, illusSrc, illusSrcSet, type IllustrationName } from "@/lib/illustrations";

/** A general illustration in a ruled frame. Not a project photo, so there is no caption. */
export const Illustration = ({ name, className = "" }: { name: IllustrationName; className?: string }) => (
  <figure className={`fg-illus ${className}`} style={{ margin: "40px 0 0", border: "1px solid #ddd5ca" }}>
    <img
      src={illusSrc(name)}
      srcSet={illusSrcSet(name)}
      sizes="(max-width: 768px) 100vw, 720px"
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
