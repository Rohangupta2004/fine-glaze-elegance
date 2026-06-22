import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

const BUCKET = "project-images";
const MANIFEST_PATH = "blog/manifest.json";

export interface BlogImageMap {
  [slug: string]: string; // slug → public URL
}

let cachedMap: BlogImageMap | null = null;

export function useBlogImages() {
  const [imageMap, setImageMap] = useState<BlogImageMap>(cachedMap ?? {});
  const [loading, setLoading] = useState(!cachedMap);

  useEffect(() => {
    if (cachedMap) return;
    (async () => {
      try {
        const { data, error } = await supabase.storage
          .from(BUCKET)
          .download(MANIFEST_PATH);
        if (error || !data) {
          cachedMap = {};
        } else {
          const text = await data.text();
          const parsed = JSON.parse(text);
          // manifest is { slug: filename }
          const map: BlogImageMap = {};
          for (const [slug, filename] of Object.entries(parsed)) {
            const { data: urlData } = supabase.storage
              .from(BUCKET)
              .getPublicUrl(`blog/${filename}`);
            map[slug] = urlData.publicUrl;
          }
          cachedMap = map;
        }
      } catch {
        cachedMap = {};
      }
      setImageMap(cachedMap!);
      setLoading(false);
    })();
  }, []);

  const getHeroImage = (slug: string, fallback: string): string => {
    return imageMap[slug] || fallback;
  };

  return { imageMap, loading, getHeroImage };
}
