import manifest from "./articleVisuals.json";

interface ArticleVisual {
  cover: string;
  thumbnail: string;
  width: number;
  height: number;
  thumbnailWidth: number;
  alt: string;
  caption: string;
  inline: {
    src: string;
    alt: string;
    caption: string;
    afterSection: number;
  };
}

const visuals: Record<string, ArticleVisual> = manifest;

export const getArticleVisual = (slug: string): ArticleVisual | undefined => visuals[slug];

export const getArticleImageSrcSet = (slug: string): string | undefined => {
  const image = getArticleVisual(slug);
  return image ? `${image.thumbnail} ${image.thumbnailWidth}w, ${image.cover} ${image.width}w` : undefined;
};
