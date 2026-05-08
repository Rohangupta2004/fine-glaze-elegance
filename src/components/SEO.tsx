import { Helmet } from "react-helmet-async"; // (or "react-helmet" depending on your setup)

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string;
  ogImage?: string;
  schemas?: object[]; // <-- This is the new upgrade!
}

export default function SEO({
  title,
  description,
  canonical,
  keywords,
  ogImage = "https://fineglaze.com/default-og.webp", // Fallback image if none provided
  schemas,
}: SEOProps) {
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
      <meta property="og:type" content="website" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {/* ========================================== */}
      {/* DYNAMIC JSON-LD SCHEMA INJECTION */}
      {/* ========================================== */}
      {schemas && schemas.map((schema, index) => (
        <script type="application/ld+json" key={index}>
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
