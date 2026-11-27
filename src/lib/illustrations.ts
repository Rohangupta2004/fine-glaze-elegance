/** General illustrations (not Fine Glaze projects): alt text describes the subject only. */
export const ILLUSTRATIONS = {
  "svc-curtain-wall": "Glass curtain wall on an office tower",
  "svc-structural-glazing": "Structural glazed glass facade on the corner of a building",
  "svc-acp-cladding": "Light grey ACP cladding panels on a building facade",
  "svc-aluminium-windows": "Large aluminium sliding windows in a living room overlooking a city",
  "svc-glass-railings": "Frameless glass railing on a balcony overlooking the sea",
  "svc-skylights": "Glass roof skylight over a shopping atrium",
  "svc-louvers": "Horizontal aluminium louvers shading a building facade",
  "svc-glass-partitions": "Frameless glass partitions in an office meeting room",
  "svc-maintenance": "Rope-access worker cleaning the glass facade of a tall building",
  "ind-it-park": "Aerial view of an IT park campus with glazed office blocks",
  "ind-commercial": "Glazed commercial office tower beside a busy city road",
  "ind-hospital": "Modern hospital building with a glazed and louvered facade",
  "ind-hotel": "Boutique hotel building with stone cladding and lit balconies",
  "ind-mall": "Shopping mall entrance with a glass and steel canopy",
  "ind-industrial": "Industrial warehouse building with a glazed office front",
  "ind-residential": "High-rise residential towers seen from street level",
  "city-pune": "Pune skyline with glass office buildings and hills behind",
  "city-mumbai": "Mumbai waterfront skyline across the sea",
  "city-navi-mumbai": "Glass office towers along a road in Navi Mumbai",
  "city-thane": "Residential towers beside a lake in Thane",
  "process-survey": "Gloved hand measuring a concrete column with a laser measure on a building site",
  "process-engineering": "Engineering drawings and an aluminium profile sample on a desk beside a laptop",
  "blog-cost": "Glass samples, aluminium profiles and a sealant tube on a worktable",
  "blog-comparison": "Glazed office building with a grid of framed glass panels",
  "blog-glass": "Close-up of a window glass edge and frame",
  "blog-waterproofing": "Gloved hand applying sealant to a glass facade joint with a caulking gun",
  "blog-maintenance": "View through a glass curtain wall with mullions and transoms",
  "blog-design": "Architectural model and drawings on a design desk",
} as const;

export type IllustrationName = keyof typeof ILLUSTRATIONS;

export const illusSrc = (n: IllustrationName) => `/images/illustrations/${n}.webp`;
export const illusSrcSet = (n: IllustrationName) =>
  `/images/illustrations/${n}-800.webp 800w, /images/illustrations/${n}.webp 1376w`;

/** srcset for any /images/illustrations/<name>.webp path (800w and 1376w), otherwise undefined. */
export const illusSrcSetFor = (src: string): string | undefined => {
  const m = src.match(/^\/images\/illustrations\/([a-z0-9-]+)\.webp$/);
  return m ? `/images/illustrations/${m[1]}-800.webp 800w, ${src} 1376w` : undefined;
};
