import { useState, useEffect } from "react";
import { s as supabase } from "../main.mjs";
const BUCKET = "project-images";
const MANIFEST_PATH = "blog/manifest.json";
let cachedMap = null;
function useBlogImages() {
  const [imageMap, setImageMap] = useState(cachedMap ?? {});
  const [loading, setLoading] = useState(!cachedMap);
  useEffect(() => {
    if (cachedMap) return;
    (async () => {
      try {
        const { data, error } = await supabase.storage.from(BUCKET).download(MANIFEST_PATH);
        if (error || !data) {
          cachedMap = {};
        } else {
          const text = await data.text();
          const parsed = JSON.parse(text);
          const map = {};
          for (const [slug, filename] of Object.entries(parsed)) {
            const { data: urlData } = supabase.storage.from(BUCKET).getPublicUrl(`blog/${filename}`);
            map[slug] = urlData.publicUrl;
          }
          cachedMap = map;
        }
      } catch {
        cachedMap = {};
      }
      setImageMap(cachedMap);
      setLoading(false);
    })();
  }, []);
  const getHeroImage = (slug, fallback) => {
    return imageMap[slug] || fallback;
  };
  return { imageMap, loading, getHeroImage };
}
export {
  useBlogImages as u
};
