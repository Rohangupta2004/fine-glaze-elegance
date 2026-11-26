import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { blogPostsList } from "@/data/blog";
import { useBlogImages } from "@/hooks/useBlogImages";
import { illusSrcSetFor } from "@/lib/illustrations";
import SEO from "@/components/SEO";
import { CTASection } from "@/components/home/CTASection";
import PageHero from "@/components/common/PageHero";
import { getArticleImageSrcSet } from "@/data/articleVisuals";
import { getArticleEnhancement } from "@/lib/articleSeo";

export default function Blog() {
  const { getHeroImage } = useBlogImages();
  return (
    <Layout darkHero>
      <SEO
        title="Facade & Glazing Guides, Costs & Tips | Fine Glaze"
        description="Expert articles on facade engineering, structural glazing costs, curtain wall comparisons, glass types, and how to choose the right contractor in India. A knowledge base by Fine Glaze."
        canonical="https://fineglaze.com/blog"
        keywords="facade blog India, structural glazing cost guide, curtain wall article, glass facade tips, ACP vs HPL, facade contractor guide"
        schema={{
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Fine Glaze Blog",
          "url": "https://fineglaze.com/blog",
          "publisher": {
            "@type": "Organization",
            "name": "Fine Glaze",
            "logo": "https://fineglaze.com/Logofg.webp",
          },
        }}
      />

      <PageHero
        crumbs={[{ label: "Articles" }]}
        title={<>Facade &amp; Glazing <span className="text-gradient">Insights</span></>}
        intro="Pricing guides, technical comparisons, and expert tips to help you make smarter facade decisions."
        image={{ src: "/Glazing.webp", alt: "Glazing work by Fine Glaze" }}
        source="blog_hero"
      />

      <section className="fg-sec">
        <div className="fg-wrap">
          <ul className="fg-grid">
            {blogPostsList.map((post) => (
              <li key={post.slug}>
                <Link to={`/blog/${post.slug}`} className="group">
                  <div className="aspect-[16/10] overflow-hidden bg-night-2">
                    <img decoding="async"
                      src={getHeroImage(post.slug, post.heroImage)}
                      srcSet={getArticleImageSrcSet(post.slug) ?? illusSrcSetFor(getHeroImage(post.slug, post.heroImage))}
                      sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1023px) 50vw, 33vw"
                      alt={post.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      width="600"
                      height="338"
                    />
                  </div>
                  <p className="text-[15px] text-mute">
                    {post.category}, {post.readTime}
                  </p>
                  <h2 className="font-medium text-[clamp(18px,1.5vw,22px)] leading-snug tracking-[-0.015em] text-paper">
                    {getArticleEnhancement(post.slug)?.title ?? post.title}
                  </h2>
                  <p className="text-[15.5px] text-mute line-clamp-4">
                    {(() => {
                      const t = getArticleEnhancement(post.slug)?.metaDescription ?? post.excerpt;
                      return t.includes("₹") ? `${t} Market range, not a Fine Glaze quotation.` : t;
                    })()}
                  </p>
                  <span className="mt-auto pt-2 text-[15px] text-lamp group-hover:underline underline-offset-4">Read article</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
