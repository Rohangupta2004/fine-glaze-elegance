import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { blogPostsList } from "@/data/blog";
import SEO from "@/components/SEO";

export default function Blog() {
  return (
    <Layout>
      <SEO
        title="Facade & Glazing Blog – Pricing Guides, Tips & Industry Insights | Fine Glaze"
        description="Expert articles on facade engineering, structural glazing costs, curtain wall comparisons, glass types, and how to choose the right contractor in India. Free knowledge by Fine Glaze."
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
      <section className="pt-32 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 text-amber-400 text-sm font-bold uppercase tracking-wider border border-amber-500/30 mb-6">
            <Tag size={14} /> Knowledge Hub
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Facade & Glazing <span className="text-gradient">Insights</span>
          </h1>
          <p className="text-slate-300 text-lg">
            Pricing guides, technical comparisons, and expert tips to help you
            make smarter facade decisions.
          </p>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPostsList.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group bg-background rounded-2xl overflow-hidden shadow-sm border hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Image */}
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={post.heroImage}
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
                    <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary font-bold">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold leading-snug group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {post.excerpt}
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
      <section className="py-16 bg-slate-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-3">Have a Facade Question?</h2>
          <p className="text-slate-400 mb-6">
            Our engineering team is happy to help — free consultation, no
            commitment.
          </p>
          <Link to="/contact">
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Ask Our Experts
            </button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
