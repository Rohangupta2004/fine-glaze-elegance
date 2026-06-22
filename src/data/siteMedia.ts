// ─── Site Media Registry ────────────────────────────────────────────────────
// Central list of every editable image / video slot across the website.
// The admin page (/admin/content) renders these grouped by `page`, and each
// website component reads its slot via useSiteMedia().getMedia(key, fallback).
//
// To add a new editable media slot:
//  1. Add an entry here with a unique `key`.
//  2. In the component, call getMedia("<key>", <existing hardcoded src>).

export type MediaType = "image" | "video";

export interface MediaSlot {
  /** Unique stable key — used in the manifest + component lookups. Never rename. */
  key: string;
  /** Human label shown in the admin UI. */
  label: string;
  /** Page/group heading in the admin UI. */
  page: string;
  /** image = upload to storage or URL; video = URL (Pexels / Vimeo / mp4 link). */
  type: MediaType;
  /** Default media used when nothing has been set in the manifest. */
  fallback: string;
  /** Optional helper note shown under the slot. */
  note?: string;
}

export const MEDIA_SLOTS: MediaSlot[] = [
  // ── Home ──────────────────────────────────────────────────────────────────
  {
    key: "home_hero_video",
    label: "Hero Background Video",
    page: "Home Page",
    type: "video",
    fallback: "https://www.pexels.com/download/video/26737896/",
    note: "Full-screen looping video behind the homepage headline. Paste a direct .mp4 link.",
  },
  {
    key: "home_hero_poster",
    label: "Hero Fallback Image",
    page: "Home Page",
    type: "image",
    fallback: "/Unitized.webp",
    note: "Shown while the video loads. Use a wide landscape image.",
  },

  // ── Homepage — Services Section Cards ─────────────────────────────────────
  {
    key: "services_card_curtain_wall",
    label: "Curtain Wall Systems — Card Image",
    page: "Home Page — Services Cards",
    type: "image",
    fallback: "/Unitized.webp",
  },
  {
    key: "services_card_structural_glazing",
    label: "Structural Glazing — Card Image",
    page: "Home Page — Services Cards",
    type: "image",
    fallback: "/Glazing.webp",
  },
  {
    key: "services_card_acp_cladding",
    label: "ACP Cladding — Card Image",
    page: "Home Page — Services Cards",
    type: "image",
    fallback: "/Panel.webp",
  },
  {
    key: "services_card_aluminium_windows",
    label: "Aluminium Doors & Windows — Card Image",
    page: "Home Page — Services Cards",
    type: "image",
    fallback: "/Aluminium%20windows.webp",
  },
  {
    key: "services_card_glass_railings",
    label: "Glass Railings — Card Image",
    page: "Home Page — Services Cards",
    type: "image",
    fallback: "/Railing.webp",
  },
  {
    key: "services_card_skylights",
    label: "Skylights & Canopies — Card Image",
    page: "Home Page — Services Cards",
    type: "image",
    fallback: "/Hotel.webp",
  },
  {
    key: "services_card_glass_partitions",
    label: "Glass Partitions — Card Image",
    page: "Home Page — Services Cards",
    type: "image",
    fallback: "/Glass%20installation.webp",
  },
  {
    key: "services_card_amc",
    label: "Facade AMC & Repairs — Card Image",
    page: "Home Page — Services Cards",
    type: "image",
    fallback: "/Amc.webp",
  },

  // ── About Page ─────────────────────────────────────────────────────────────
  {
    key: "about_hero",
    label: "About Page Hero Image",
    page: "About Page",
    type: "image",
    fallback: "/Embassy.webp",
    note: "Full-screen background for the About page hero section.",
  },
  {
    key: "about_story_photo",
    label: "Company Story Photo",
    page: "About Page",
    type: "image",
    fallback: "/Embassy.webp",
    note: "Photo shown in the 'Our Story' section beside the text.",
  },

  // ── Service Pages — Hero Images ─────────────────────────────────────────────
  {
    key: "structural_glazing_hero",
    label: "Hero Background Image",
    page: "Structural Glazing Page",
    type: "image",
    fallback: "/Glazing.webp",
  },
  {
    key: "curtain_wall_hero",
    label: "Hero Background Image",
    page: "Curtain Wall Systems Page",
    type: "image",
    fallback: "/Unitized.webp",
  },
  {
    key: "acp_cladding_hero",
    label: "Hero Background Image",
    page: "ACP / Aluminium Cladding Page",
    type: "image",
    fallback: "/Panel.webp",
  },
  {
    key: "aluminium_facade_hero",
    label: "Hero Image",
    page: "Aluminium Facade Page",
    type: "image",
    fallback: "/Aluminium%20windows.webp",
  },
  {
    key: "glass_railings_hero",
    label: "Hero Background Image",
    page: "Glass Railings Page",
    type: "image",
    fallback: "/Railing.webp",
  },
  {
    key: "maintenance_hero",
    label: "Hero Background Image",
    page: "Maintenance / AMC Page",
    type: "image",
    fallback: "/Amc1.webp",
  },
];

/** Group slots by page for display. */
export function groupSlotsByPage(): Record<string, MediaSlot[]> {
  return MEDIA_SLOTS.reduce<Record<string, MediaSlot[]>>((acc, slot) => {
    (acc[slot.page] ||= []).push(slot);
    return acc;
  }, {});
}
