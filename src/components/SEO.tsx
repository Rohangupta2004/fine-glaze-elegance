import { Helmet } from "react-helmet-async"; // (or "react-helmet" depending on your setup)

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  schema?: object;     // singular — most pages
  schemas?: object[];  // array — city pages with multiple schemas
}

export default function SEO({
  title,
  description,
  canonical,
  keywords,
  ogImage = "https://fineglaze.com/default-og.webp",
  ogType = "website",
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
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph / Social Media Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Fine Glaze" />
      {canonical && <meta property="og:url" content={canonical} />}
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {allSchemas.map((s, i) => (
        <script type="application/ld+json" key={i}>
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
}
