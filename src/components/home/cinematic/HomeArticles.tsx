import { Link } from "react-router-dom";
import { blogPostsList } from "@/data/blog";
import { useBlogImages } from "@/hooks/useBlogImages";
import { getArticleImageSrcSet } from "@/data/articleVisuals";

/** Three latest guides: image, title, link. */
const HomeArticles = () => {
  const { getHeroImage } = useBlogImages();
  const recent = blogPostsList.slice(0, 3);
  return (
    <section className="art full rv" aria-label="Guides">
      <div className="wrap">
        <div className="sec-h">
          <h2 className="wipe">Guides from our team.</h2>
          <Link className="lnk" to="/blog">
            All guides
          </Link>
        </div>
        <ul className="ag">
          {recent.map((a) => (
            <li key={a.slug}>
              <Link to={`/blog/${a.slug}`}>
                <span className="ag-i">
                  <img
                    src={getHeroImage(a.slug, a.heroImage)}
                    srcSet={getArticleImageSrcSet(a.slug)}
                    sizes="(max-width: 767px) 100vw, 33vw"
                    alt=""
                    loading="lazy"
                    width={600}
                    height={375}
                  />
                </span>
                <b>{a.title}</b>
                <span className="ag-go">Read the guide</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HomeArticles;
