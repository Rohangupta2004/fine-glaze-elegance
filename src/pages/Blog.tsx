import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { blogPostsList } from "@/data/blog";
import { useBlogImages } from "@/hooks/useBlogImages";
import SEO from "@/components/SEO";
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

      {/* HERO */}
      <section className="relative pt-32 pb-16 text-paper overflow-hidden">
        <div className="absolute inset-0">
          <img src="/Glazing.webp" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-night-2" />
        </div>
        <div className="container mx-auto px-4 text-center max-w-3xl relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-transparent text-lamp text-sm font-bold border border-lamp/40 mb-6">
            <Tag size={14} /> Knowledge Hub
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
            Facade & Glazing <span className="text-gradient">Insights</span>
          </h1>
          <p className="text-paper/80 text-lg">
            Pricing guides, technical comparisons, and expert tips to help you
            make smarter facade decisions.
          </p>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="fg-sec">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPostsList.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group bg-background overflow-hidden border hover:-translate-y-1 transition-all duration-300"
              >
                {/* Image */}
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={getHeroImage(post.slug, post.heroImage)}
                    srcSet={getArticleImageSrcSet(post.slug)}
                    sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1023px) 50vw, 33vw"
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width="600"
                    height="338"
                  />
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="px-2.5 py-1 bg-primary/10 text-primary font-bold">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold leading-snug group-hover:text-primary transition-colors">
                    {getArticleEnhancement(post.slug)?.title ?? post.title}
                  </h2>

                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {getArticleEnhancement(post.slug)?.metaDescription ?? post.excerpt}
                  </p>

                  <div className="flex items-center gap-1 text-sm font-semibold text-primary pt-1">
                    Read Article
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-night-2 text-paper text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-3">Have a Facade Question?</h2>
          <p className="text-mute mb-6">
            Our team is happy to help. Get in touch to discuss your project.
          </p>
          <Link to="/contact">
            <button className="bg-lamp hover:bg-lamp/90 text-lamp-ink px-8 py-3 font-semibold transition-colors">
              Ask Our Experts
            </button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
