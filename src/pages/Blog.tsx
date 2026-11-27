import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { blogPostsList } from "@/data/blog";
import SEO from "@/components/SEO";
import { CTASection } from "@/components/home/CTASection";
import PageHero from "@/components/common/PageHero";
import { Sec } from "@/components/common/Sheet";
import { formatArticleDate, getArticleEnhancement } from "@/lib/articleSeo";

const formatDate = formatArticleDate;

export default function Blog() {
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
      />

      <Sec no="01" label="Articles" title="Guides, costs and technical notes." sheetLabel="Article index" dim={`${blogPostsList.length} articles`}>
        <ol className="sx-al">
          {blogPostsList.map((post, i) => {
            const t = getArticleEnhancement(post.slug)?.metaDescription ?? post.excerpt;
            const blurb = t.includes("₹") ? `${t} Market range, not a Fine Glaze quotation.` : t;
            return (
              <li key={post.slug}>
                <Link to={`/blog/${post.slug}`}>
                  <span className="sx-al-n" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                  <time className="sx-al-d" dateTime={post.date}>{formatDate(post.date)}</time>
                  <span className="sx-al-c">{post.category}</span>
                  <span className="sx-al-t">
                    <b>{getArticleEnhancement(post.slug)?.title ?? post.title}</b>
                    <span>{blurb}</span>
                  </span>
                  <span className="sx-al-r">{post.readTime}</span>
                </Link>
              </li>
            );
          })}
        </ol>
      </Sec>

      <CTASection />
    </Layout>
  );
}
