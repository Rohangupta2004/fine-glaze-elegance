import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

const BUCKET = "project-images";
export const SITE_MEDIA_MANIFEST = "site-media/manifest.json";

// manifest shape: { [slotKey]: { url: string; type: "image" | "video" } }
export interface SiteMediaEntry {
  url: string;
  type: "image" | "video";
}
export interface SiteMediaMap {
  [key: string]: SiteMediaEntry;
}

let cachedMap: SiteMediaMap | null = null;

export async function fetchSiteMediaMap(): Promise<SiteMediaMap> {
  try {
    const { data, error } = await supabase.storage
      .from(BUCKET)
      .download(`${SITE_MEDIA_MANIFEST}?t=${Date.now()}`);
    if (error || !data) return {};
    const text = await data.text();
    const parsed = JSON.parse(text);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

/**
 * Read editable site media. Returns getMedia(key, fallback) which yields the
 * admin-set URL when present, otherwise the hardcoded fallback.
 */
export function useSiteMedia() {
  const [mediaMap, setMediaMap] = useState<SiteMediaMap>(cachedMap ?? {});
  const [loading, setLoading] = useState(!cachedMap);

  useEffect(() => {
    if (cachedMap) return;
    (async () => {
      const map = await fetchSiteMediaMap();
      cachedMap = map;
      setMediaMap(map);
      setLoading(false);
    })();
  }, []);

  const getMedia = (key: string, fallback: string): string => {
    return mediaMap[key]?.url || fallback;
  };

  return { mediaMap, loading, getMedia };
}
