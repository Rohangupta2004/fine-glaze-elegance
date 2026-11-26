import { ArrowUpRight } from "lucide-react";
import { company, whatsappHref } from "@/data/company";

/** References: two plain links, no ratings. */
const HomeReviews = () => (
  <section className="rvw rv" aria-label="Reviews and references">
    <div className="wrap">
      <h2 className="wipe">Don&apos;t take our <span className="text-gradient">word for it.</span></h2>
      <p className="rvw-p">
        Read what clients say on Google, or ask us for a reference contact from a completed project similar to yours.
      </p>
      <div className="rvw-g">
        <a href={company.address.mapsUrl} target="_blank" rel="noopener noreferrer">
          <b>Read our Google reviews</b>
          <ArrowUpRight size={20} aria-hidden="true" />
        </a>
        <a
          href={whatsappHref("Hi Fine Glaze, could you share a client reference for a project similar to mine?")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <b>Ask for a client reference</b>
            <small>We&apos;ll connect you with a past client, with their permission</small>
          </span>
          <ArrowUpRight size={20} aria-hidden="true" />
        </a>
      </div>
    </div>
  </section>
);

export default HomeReviews;
