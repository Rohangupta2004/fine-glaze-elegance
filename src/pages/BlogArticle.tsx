import { useParams, Link, Navigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { blogPosts, blogPostsList } from "@/data/blog";
import { useBlogImages } from "@/hooks/useBlogImages";
import { Clock, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { articleKeywords, articleSectionId, buildArticleSchemas, getArticleEnhancement, normalizeArticleSections, normalizeArticleTable, relatedArticles } from "@/lib/articleSeo";
import { getArticleVisual, getArticleImageSrcSet } from "@/data/articleVisuals";

export default function BlogArticle() {
  const { slug } = useParams<{ slug: string }>();
  const { getHeroImage } = useBlogImages();
  const post = slug ? blogPosts[slug] : undefined;

  if (!post) return <Navigate to="/blog" replace />;

  const heroImg = getHeroImage(post.slug, post.heroImage);
  const visual = getArticleVisual(post.slug);

  const enhancement = getArticleEnhancement(post.slug);
  const title = enhancement?.title ?? post.title;
  const sections = normalizeArticleSections(enhancement?.sections ?? post.content ?? []);
  const absoluteImage = heroImg.startsWith("http") ? heroImg : `https://fineglaze.com${heroImg}`;
  const schemas = buildArticleSchemas(post, absoluteImage, enhancement, visual);
  const related = relatedArticles(post, blogPostsList, enhancement);
  const formatDate = (date: string) => new Date(`${date}T00:00:00+05:30`).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric", timeZone: "Asia/Kolkata" });

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

  const serviceLinks = enhancement?.serviceLinks ?? seoLinks.map((link) => ({ label: link.title, href: link.href }));

  return (
    <Layout>
      <SEO
        title={enhancement?.metaTitle ?? post.metaTitle}
        description={enhancement?.metaDescription ?? post.metaDescription}
        canonical={`https://fineglaze.com/blog/${post.slug}`}
        keywords={articleKeywords(post, enhancement).join(", ")}
        ogType="article"
        ogImage={heroImg.startsWith("http") ? heroImg : `https://fineglaze.com${heroImg}`}
        schemas={schemas}
        ogImageWidth={visual?.width}
        ogImageHeight={visual?.height}
      />

      <article className="py-16 pt-28">
        <div className="container mx-auto px-4 max-w-3xl">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link to="/" className="hover:text-primary">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link to="/blog" className="hover:text-primary">Articles</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-medium text-foreground">{title}</li>
            </ol>
          </nav>

          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-4">
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs">
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={14} /> {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-6">
            {title}
          </h1>

          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground mb-6">
            <Link to="/about" rel="author" className="font-medium text-foreground hover:text-primary">By Fine Glaze</Link>
            <span>Published <time dateTime={post.date}>{formatDate(post.date)}</time></span>
            {enhancement && <span>Updated <time dateTime={enhancement.updated}>{formatDate(enhancement.updated)}</time></span>}
          </div>

          {enhancement && (
            <section aria-labelledby="quick-answer" className="mb-8 rounded-2xl border border-primary/20 bg-primary/5 p-5 sm:p-6">
              <h2 id="quick-answer" className="text-lg font-bold leading-snug mb-3">{enhancement.question}</h2>
              <p className="leading-relaxed text-foreground/85">{enhancement.answer}</p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground list-disc pl-5">
                {enhancement.takeaways.map((takeaway) => <li key={takeaway}>{takeaway}</li>)}
              </ul>
            </section>
          )}

          <figure className="mb-10">
            <img
              src={heroImg}
              srcSet={getArticleImageSrcSet(post.slug)}
              sizes="(max-width: 768px) calc(100vw - 2rem), 736px"
              alt={visual?.alt ?? post.title}
              width={visual?.width}
              height={visual?.height}
              className="w-full aspect-video rounded-2xl object-cover bg-muted"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
            {visual && <figcaption className="mt-3 text-xs text-muted-foreground leading-relaxed">{visual.caption}</figcaption>}
          </figure>

          <nav aria-label="On this page" className="mb-10 rounded-xl border border-border p-5">
            <details>
              <summary className="cursor-pointer font-semibold">On this page</summary>
              <ul className="mt-4 space-y-2 text-sm">
                {sections.map((section, i) => <li key={articleSectionId(section.heading, i)}><a href={`#${articleSectionId(section.heading, i)}`} className="text-muted-foreground hover:text-primary underline-offset-4 hover:underline">{section.heading}</a></li>)}
                {enhancement && <><li><a href="#quote-checklist" className="text-muted-foreground hover:text-primary">Before you request a quote</a></li><li><a href="#article-questions" className="text-muted-foreground hover:text-primary">Common questions</a></li><li><a href="#references" className="text-muted-foreground hover:text-primary">Technical references</a></li></>}
              </ul>
            </details>
          </nav>

          <div className="space-y-10">
            {sections.map((section, i) => (
              <section key={i} id={articleSectionId(section.heading, i)} className="scroll-mt-28">
                <h2 className="text-xl md:text-2xl font-bold mb-3 text-foreground border-l-4 border-amber-500 pl-3">
                  {section.heading}
                </h2>

                {(Array.isArray(section.body) ? section.body : section.body ? [section.body] : []).map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex} className="text-base md:text-lg text-foreground/80 leading-[1.85] mb-4">{paragraph.replace(/\\n/g, " ")}</p>
                ))}

                {(() => {
                  const table = normalizeArticleTable(section.table);
                  if (!table) return null;
                  const isEstimate = /cost|pric|rate|₹/i.test(section.heading + JSON.stringify(table));
                  return <div className="my-6">
                    <div className="overflow-x-auto rounded-xl border border-border focus-visible:outline-primary" role="region" aria-label={`${section.heading} table`} tabIndex={0}>
                      <table className="w-full min-w-[560px] text-sm text-left">
                        <caption className="sr-only">{section.heading}</caption>
                        <thead className="bg-muted"><tr>{table.headers.map((header, cell) => <th key={cell} scope="col" className="p-4 font-semibold align-top">{header}</th>)}</tr></thead>
                        <tbody>{table.rows.map((row, rowIndex) => <tr key={rowIndex} className="border-t border-border even:bg-muted/30">{row.map((cell, cellIndex) => cellIndex === 0 ? <th key={cellIndex} scope="row" className="p-4 align-top font-medium">{cell}</th> : <td key={cellIndex} className="p-4 align-top text-muted-foreground">{cell}</td>)}</tr>)}</tbody>
                      </table>
                    </div>
                    {isEstimate && <p className="mt-3 text-xs leading-relaxed text-muted-foreground">Price figures are indicative article estimates, not a current quotation. Compare the same specification, units, access, taxes and installation scope with an itemised project quote.</p>}
                  </div>;
                })()}

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
                {visual && i === visual.inline.afterSection && (
                  <figure className="mt-8 overflow-hidden rounded-2xl border border-border bg-stone-50">
                    <img
                      src={visual.inline.src}
                      alt={visual.inline.alt}
                      width={1280}
                      height={720}
                      className="w-full h-auto"
                      loading="lazy"
                      decoding="async"
                    />
                    <figcaption className="px-5 py-4 text-sm text-muted-foreground border-t border-border">{visual.inline.caption}</figcaption>
                  </figure>
                )}
              </section>
            ))}
          </div>

          {enhancement && (
            <>
              <section id="quote-checklist" className="scroll-mt-28 mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-6">
                <h2 className="text-xl font-bold mb-4">Before You Request a Quote</h2>
                <ol className="list-decimal pl-5 space-y-3 text-foreground/80 leading-relaxed">{enhancement.quoteChecklist.map((item) => <li key={item}>{item}</li>)}</ol>
                <Link to="/contact" className="mt-5 inline-flex items-center gap-2 font-semibold text-primary">Discuss your project scope <ArrowRight size={16} /></Link>
              </section>

              {enhancement.project && <aside className="mt-8 border-l-2 border-primary pl-5 py-2" aria-label="Fine Glaze project reference">
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Fine Glaze Project Reference</p>
                <Link to={`/project/${enhancement.project.slug}`} className="text-lg font-semibold hover:text-primary">{enhancement.project.title}</Link>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{enhancement.project.scope}</p>
              </aside>}

              <section id="article-questions" className="scroll-mt-28 mt-12">
                <h2 className="text-2xl font-bold mb-5">Common Questions</h2>
                <div className="divide-y divide-border border-y border-border">{enhancement.faqs.map((faq) => <details key={faq.question} className="py-5 group">
                  <summary className="cursor-pointer font-semibold leading-snug pr-4">{faq.question}</summary>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{faq.answer}</p>
                </details>)}</div>
              </section>

              <section id="references" className="scroll-mt-28 mt-12">
                <h2 className="text-xl font-bold mb-4">Technical References</h2>
                <ul className="space-y-4">{enhancement.sources.map((source) => <li key={source.url}>
                  <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4 text-sm font-medium">{source.title}</a>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-1">{source.note}</p>
                </li>)}</ul>
              </section>
            </>
          )}

          <div className="mt-14 rounded-2xl border p-6 bg-muted/30">
            <h3 className="text-2xl font-bold mb-4">
              Explore More Facade Solutions
            </h3>
            <p className="text-muted-foreground mb-6">
              Explore the services most relevant to this guide.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="rounded-xl border p-4 hover:border-primary hover:bg-primary/5 transition-all"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-semibold text-sm md:text-base">
                      {link.label}
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
                      src={getHeroImage(r.slug, r.heroImage)}
                      srcSet={getArticleImageSrcSet(r.slug)}
                      sizes="96px"
                      alt={r.title}
                      className="w-24 h-24 rounded-lg object-cover shrink-0"
                      loading="lazy"
                    />
                    <div className="space-y-1">
                      <span className="text-xs text-primary font-bold">
                        {r.category}
                      </span>
                      <h4 className="text-sm font-bold leading-snug group-hover:text-primary transition-colors">
                        {getArticleEnhancement(r.slug)?.title ?? r.title}
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
