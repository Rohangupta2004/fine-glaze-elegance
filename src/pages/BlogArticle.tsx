import { useParams, Link, Navigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { blogPosts, blogPostsList } from "@/data/blog";
import { ArrowLeft, Clock, Tag, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

export default function BlogArticle() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPosts[slug] : undefined;

  if (!post) return <Navigate to="/blog" replace />;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.metaDescription,
    "image": `https://fineglaze.com${post.heroImage}`,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Organization",
      "name": "Fine Glaze",
      "url": "https://fineglaze.com",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Fine Glaze",
      "logo": {
        "@type": "ImageObject",
        "url": "https://fineglaze.com/Logofg.webp",
      },
    },
  };

  // Related posts (exclude current)
  const related = blogPostsList
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  return (
    <Layout>
      <SEO
        title={post.metaTitle}
        description={post.metaDescription}
        canonical={`https://fineglaze.com/blog/${post.slug}`}
        keywords={post.keywords}
        ogType="article"
        ogImage={`https://fineglaze.com${post.heroImage}`}
        schema={articleSchema}
      />

      {/* HERO IMAGE */}
      <section className="pt-24">
        <div className="w-full h-[300px] md:h-[420px] overflow-hidden relative">
          <img
            src={post.heroImage}
            alt={post.title}
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      </section>

      {/* ARTICLE */}
      <article className="py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Breadcrumb */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft size={14} /> Back to Blog
          </Link>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-4">
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs">
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={14} /> {post.readTime}
            </span>
            <span>
              {new Date(post.date).toLocaleDateString("en-IN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-8">
            {post.title}
          </h1>

          {/* Content Sections */}
          <div className="prose prose-lg max-w-none space-y-10">
            {post.content.map((section, i) => (
              <section key={i}>
                <h2 className="text-xl md:text-2xl font-bold mb-3 text-foreground">
                  {section.heading}
                </h2>

                {section.body && (
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {section.body}
                  </p>
                )}

                {/* Table */}
                {section.table && (
                  <div className="overflow-x-auto mb-4 rounded-xl border">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-muted">
                          {section.table.headers.map((h) => (
                            <th
                              key={h}
                              className="text-left px-4 py-3 font-bold text-foreground"
                            >
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row, ri) => (
                          <tr
                            key={ri}
                            className="border-t hover:bg-muted/50 transition-colors"
                          >
                            {row.map((cell, ci) => (
                              <td
                                key={ci}
                                className={`px-4 py-3 ${ci === 0 ? "font-medium text-foreground" : "text-muted-foreground"}`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* List */}
                {section.list && (
                  <ul className="space-y-3">
                    {section.list.map((item, li) => (
                      <li
                        key={li}
                        className="flex gap-3 text-muted-foreground text-sm leading-relaxed"
                      >
                        <span className="text-amber-600 font-bold mt-0.5 shrink-0">
                          {li + 1}.
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {/* INLINE CTA */}
          <div className="mt-12 p-8 bg-slate-900 rounded-2xl text-white text-center">
            <h3 className="text-xl font-bold mb-2">
              Need Help With Your Facade Project?
            </h3>
            <p className="text-slate-400 mb-5 text-sm">
              Free site visit & quotation — our team responds within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link to="/contact">
                <Button className="bg-amber-600 hover:bg-amber-700 text-white gap-2">
                  Get Free Quote <ArrowRight size={16} />
                </Button>
              </Link>
              <a href="tel:+918369233566">
                <Button
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 hover:text-white gap-2"
                >
                  <Phone size={16} /> Call Now
                </Button>
              </a>
            </div>
          </div>

          {/* RELATED ARTICLES */}
          {related.length > 0 && (
            <div className="mt-16">
              <h3 className="text-xl font-bold mb-6">Related Articles</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    to={`/blog/${r.slug}`}
                    className="group flex gap-4 p-4 rounded-xl border hover:shadow-md transition-all"
                  >
                    <img
                      src={r.heroImage}
                      alt={r.title}
                      className="w-24 h-24 rounded-lg object-cover shrink-0"
                      loading="lazy"
                    />
                    <div className="space-y-1">
                      <span className="text-xs text-primary font-bold">
                        {r.category}
                      </span>
                      <h4 className="text-sm font-bold leading-snug group-hover:text-primary transition-colors">
                        {r.title}
                      </h4>
                      <span className="text-xs text-muted-foreground">
                        {r.readTime}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </Layout>
  );
}
