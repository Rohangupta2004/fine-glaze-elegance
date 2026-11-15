import { Helmet } from "react-helmet-async";
import { fitDescription, fitTitle } from "@/lib/seoText";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  ogImageWidth?: number;
  ogImageHeight?: number;
  noindex?: boolean;
  schema?: object;     // singular — most pages
  schemas?: object[];  // array — city pages with multiple schemas
}

export default function SEO({
  title,
  description,
  canonical,
  keywords,
  ogImage = "https://fineglaze.com/og-default.jpg",
  ogType = "website",
  ogImageWidth = 1200,
  ogImageHeight = 630,
  noindex = false,
  schema,
  schemas,
}: SEOProps) {
  const allSchemas = [
    ...(schema ? [schema] : []),
    ...(schemas ?? []),
  ];
  return (
    <Helmet>
      {/* Standard SEO Tags */}
      {/* Search results show ~60 / ~155 characters; social cards below keep the full text. */}
      <title>{fitTitle(title)}</title>
      <meta name="description" content={fitDescription(description)} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Robots Directive */}
      {noindex ? (
        <meta name="robots" content="noindex, follow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}

      {/* Open Graph / Social Media Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      {ogImage && <meta property="og:image:width" content={String(ogImageWidth)} />}
      {ogImage && <meta property="og:image:height" content={String(ogImageHeight)} />}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Fine Glaze" />
      <meta property="og:locale" content="en_IN" />
      {canonical && <meta property="og:url" content={canonical} />}
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {allSchemas.map((s, i) => (
        <script type="application/ld+json" key={i}>
          {JSON.stringify(s).replace(/</g, "\\u003c")}
        </script>
      ))}
    </Helmet>
  );
}
