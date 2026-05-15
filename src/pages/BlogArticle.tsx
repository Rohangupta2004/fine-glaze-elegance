import { useParams, Link, Navigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { blogPosts, blogPostsList } from "@/data/blog";
import { ArrowLeft, Clock, Phone, ArrowRight } from "lucide-react";
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
    "image": post.heroImage.startsWith("http") ? post.heroImage : `https://fineglaze.com${post.heroImage}`,
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

  const related = blogPostsList
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  const seoLinks = [
    {
      title: 'Structural Glazing Services',
      href: '/structural-glazing'
    },
    {
      title: 'Curtain Wall Systems',
      href: '/curtain-wall-systems'
    },
    {
      title: 'ACP Aluminium Cladding',
      href: '/acp-aluminium-cladding'
    },
    {
      title: 'Facade Contractor in Pune',
      href: '/facade-contractor/structural-glazing-pune'
    }
  ];

  return (
    <Layout>
      <SEO
        title={post.metaTitle}
        description={post.metaDescription}
        canonical={`https://fineglaze.com/blog/${post.slug}`}
        keywords={post.keywords}
        ogType="article"
        ogImage={post.heroImage.startsWith("http") ? post.heroImage : `https://fineglaze.com${post.heroImage}`}
        schema={articleSchema}
      />

      <article className="py-16 pt-28">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft size={14} /> Back to Blog
          </Link>

          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-4">
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs">
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={14} /> {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-6">
            {post.title}
          </h1>

          <img
            src={post.heroImage}
            alt={post.title}
            className="w-full rounded-2xl object-cover max-h-[420px] mb-10"
            loading="eager"
          />

          <div className="space-y-10">
            {post.content.map((section, i) => (
              <section key={i}>
                <h2 className="text-xl md:text-2xl font-bold mb-3 text-foreground border-l-4 border-amber-500 pl-3">
                  {section.heading}
                </h2>

                {section.body && (
                  <p className="text-base md:text-lg text-foreground/80 leading-[1.85] mb-4">
                    {section.body}
                  </p>
                )}

                {section.list && (
                  <ul className="space-y-3 mt-3">
                    {section.list.map((item, li) => (
                      <li
                        key={li}
                        className="flex gap-3 text-base text-foreground/80 leading-relaxed"
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

          <div className="mt-14 rounded-2xl border p-6 bg-muted/30">
            <h3 className="text-2xl font-bold mb-4">
              Explore More Facade Solutions
            </h3>
            <p className="text-muted-foreground mb-6">
              Browse our premium facade, glazing and aluminium cladding solutions across Pune, Mumbai and Maharashtra.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {seoLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="rounded-xl border p-4 hover:border-primary hover:bg-primary/5 transition-all"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-semibold text-sm md:text-base">
                      {link.title}
                    </span>
                    <ArrowRight size={16} />
                  </div>
                </Link>
              ))}
            </div>
          </div>

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
                  className="bg-white text-slate-900 hover:bg-white/90 font-bold gap-2"
                >
                  <Phone size={16} /> Call Now
                </Button>
              </a>
            </div>
          </div>

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
