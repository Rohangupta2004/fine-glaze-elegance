import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  ogType?: string;
  keywords?: string;
  schema?: object | object[];
  noindex?: boolean;
}

/**
 * Reusable SEO component for consistent meta-tagging across all pages.
 * 
 * Usage:
 *   <SEO
 *     title="Curtain Wall Systems | Fine Glaze"
 *     description="..."
 *     canonical="https://fineglaze.com/curtain-wall-systems"
 *     schema={jsonLd}
 *   />
 */
export default function SEO({
  title,
  description,
  canonical,
  ogImage = "https://fineglaze.com/Logofg.webp",
  ogType = "website",
  keywords,
  schema,
  noindex = false,
}: SEOProps) {
  // Normalize schemas to array
  const schemas = schema
    ? Array.isArray(schema)
      ? schema
      : [schema]
    : [];

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonical} />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} />
      <meta name="author" content="Fine Glaze" />

      {/* Geo Tags — Local SEO Boost for Maharashtra */}
      <meta name="geo.region" content="IN-MH" />
      <meta name="geo.placename" content="Pune" />
      <meta name="geo.position" content="18.5204;73.8567" />
      <meta name="ICBM" content="18.5204, 73.8567" />

      {/* Open Graph / Social */}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Fine Glaze" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data */}
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
}
