import { useParams, Link, Navigate } from "react-router-dom";
import CallNow from "@/components/common/CallNow";
import { Layout } from "@/components/layout/Layout";
import { blogPosts, blogPostsList } from "@/data/blog";
import { useBlogImages } from "@/hooks/useBlogImages";
import SEO from "@/components/SEO";
import PageHero from "@/components/common/PageHero";
import { CTASection } from "@/components/home/CTASection";
import { LinkTable } from "@/components/common/Sheet";
import { formatArticleDate, articleKeywords, articleSectionId, buildArticleSchemas, getArticleEnhancement, normalizeArticleSections, normalizeArticleTable, relatedArticles } from "@/lib/articleSeo";
import { getArticleVisual } from "@/data/articleVisuals";

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
  const formatDate = formatArticleDate;

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
      href: '/facade-contractor-pune'
    }
  ];

  const serviceLinks = enhancement?.serviceLinks ?? seoLinks.map((link) => ({ label: link.title, href: link.href }));

  return (
    <Layout darkHero>
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

      <PageHero
        crumbs={[{ label: "Articles", to: "/blog" }, { label: title }]}
        title={title}
        image={{ src: heroImg, alt: visual?.alt ?? post.title, width: visual?.width, height: visual?.height }}
        hideAction
        compact
        source="article_hero"
        extra={
          <>
            <span>{post.category}, {post.readTime}. </span>
            <Link to="/about" rel="author">By Fine Glaze</Link>
            <span>. Published <time dateTime={post.date}>{formatDate(post.date)}</time></span>
            {enhancement && <span>. Updated <time dateTime={enhancement.updated}>{formatDate(enhancement.updated)}</time></span>}
          </>
        }
      />

      <article className="sx-sec sx-art">
        <div className="fg-wrap fg-art">
          {visual && <p className="sx-cap" style={{ marginBottom: 32 }}>{visual.caption}</p>}
          {!enhancement && JSON.stringify(post).includes("₹") && (
            <p className="sx-cap" style={{ marginBottom: 32 }}>Rupee figures are general market ranges, not a Fine Glaze quotation.</p>
          )}

          {enhancement && (
            <section aria-labelledby="quick-answer" className="sx-qa">
              <h2 id="quick-answer">{enhancement.question}</h2>
              <p>{enhancement.answer}</p>
              <ul>
                {enhancement.takeaways.map((takeaway) => <li key={takeaway}>{takeaway}</li>)}
              </ul>
            </section>
          )}

          <nav aria-label="On this page" className="sx-toc">
            <details>
              <summary>On this page</summary>
              <ul className="mt-4 space-y-2 text-sm">
                {sections.map((section, i) => <li key={articleSectionId(section.heading, i)}><a href={`#${articleSectionId(section.heading, i)}`} className="text-muted-foreground hover:text-primary underline-offset-4 hover:underline">{section.heading}</a></li>)}
                {enhancement && <><li><a href="#quote-checklist" className="text-muted-foreground hover:text-primary">Before you request a quote</a></li><li><a href="#article-questions" className="text-muted-foreground hover:text-primary">Common questions</a></li><li><a href="#references" className="text-muted-foreground hover:text-primary">Technical references</a></li></>}
              </ul>
            </details>
          </nav>

          <div className="space-y-10">
            {sections.map((section, i) => (
              <section key={i} id={articleSectionId(section.heading, i)} className="scroll-mt-28">
                <h2 className="sx-art-h">
                  {section.heading}
                </h2>

                {(Array.isArray(section.body) ? section.body : section.body ? [section.body] : []).map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex} className="sx-p">{paragraph.replace(/\\n/g, " ")}</p>
                ))}

                {(() => {
                  const table = normalizeArticleTable(section.table);
                  if (!table) return null;
                  return <div className="my-6">
                    <div className="overflow-x-auto sx-at" role="region" aria-label={`${section.heading} table`} tabIndex={0}>
                      <table className="sx-atbl">
                        <caption className="sr-only">{section.heading}</caption>
                        <thead className="bg-muted"><tr>{table.headers.map((header, cell) => <th key={cell} scope="col" className="p-4 font-semibold align-top">{header}</th>)}</tr></thead>
                        <tbody>{table.rows.map((row, rowIndex) => <tr key={rowIndex} className="border-t border-border even:bg-muted/30">{row.map((cell, cellIndex) => cellIndex === 0 ? <th key={cellIndex} scope="row" className="p-4 align-top font-medium">{cell}</th> : <td key={cellIndex} className="p-4 align-top text-muted-foreground">{cell}</td>)}</tr>)}</tbody>
                      </table>
                    </div>
                  </div>;
                })()}

                {section.list && (
                  <ol className="sx-art-ol">
                    {section.list.map((item, li) => (
                      <li key={li}>
                        <span className="sx-n">{String(li + 1).padStart(2, "0")}</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ol>
                )}
                {visual && i === visual.inline.afterSection && (
                  <figure className="sx-photo" style={{ marginTop: 32 }}>
                    <img
                      src={visual.inline.src}
                      alt={visual.inline.alt}
                      width={1280}
                      height={720}
                      loading="lazy"
                      decoding="async"
                    />
                    <figcaption className="sx-cap">{visual.inline.caption}</figcaption>
                  </figure>
                )}
              </section>
            ))}
          </div>

          {enhancement && (
            <>
              <section id="quote-checklist" className="scroll-mt-28 sx-qa sx-mt">
                <h2>Before you ask for a quote</h2>
                <ol className="sx-art-ol">{enhancement.quoteChecklist.map((item, n) => <li key={item}><span className="sx-n">{String(n + 1).padStart(2, "0")}</span><span>{item}</span></li>)}</ol>
                <div className="mt-5"><CallNow className="fg-btn" number /></div>
              </section>

              {enhancement.project && <aside className="sx-pull sx-mt" aria-label="Fine Glaze project reference">
                <p>Fine Glaze project reference</p>
                <Link to={`/project/${enhancement.project.slug}`} className="sx-pr">{enhancement.project.title}</Link>
                <p style={{ textTransform: "none", letterSpacing: 0, fontFamily: "inherit", fontSize: 15, marginTop: 6 }}>{enhancement.project.scope}</p>
              </aside>}

              <section id="article-questions" className="scroll-mt-28 sx-mt">
                <h2 className="sx-art-h">Common questions</h2>
                <div className="fg-faq">{enhancement.faqs.map((faq) => <details key={faq.question}>
                  <summary>{faq.question}</summary>
                  <div className="fg-a">{faq.answer}</div>
                </details>)}</div>
              </section>

              <section id="references" className="scroll-mt-28 sx-mt">
                <h2 className="sx-art-h">Technical references</h2>
                <ul className="sx-refs">{enhancement.sources.map((source) => <li key={source.url}>
                  <a href={source.url} target="_blank" rel="noopener noreferrer" >{source.title}</a>
                  <p>{source.note}</p>
                </li>)}</ul>
              </section>
            </>
          )}

          <div className="sx-mt">
            <h2 className="sx-art-h">Explore more facade solutions</h2>
            <LinkTable items={serviceLinks.map((l) => ({ to: l.href, title: l.label }))} />
          </div>

          {related.length > 0 && (
            <div className="sx-mt">
              <h2 className="sx-art-h">Related articles</h2>
              <ol className="sx-al sx-al-s">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link to={`/blog/${r.slug}`}>
                      <time className="sx-al-d" dateTime={r.date}>{formatDate(r.date)}</time>
                      <span className="sx-al-c">{r.category}</span>
                      <span className="sx-al-t">
                        <b>{getArticleEnhancement(r.slug)?.title ?? r.title}</b>
                      </span>
                      <span className="sx-al-r">{r.readTime}</span>
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>
      </article>
      <CTASection />
    </Layout>
  );
}
