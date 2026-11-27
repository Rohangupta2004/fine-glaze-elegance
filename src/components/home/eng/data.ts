import { projectsData } from "@/data/projects";
import {
  CurtainWallDrawing, StructuralGlazingDrawing, CladdingDrawing, WindowDoorDrawing, RailingDrawing,
  SkylightDrawing, LouverDrawing, PartitionDrawing, MaintenanceDrawing,
} from "./Schematics";

/** Nine service lines. Hrefs match the services menu in Header.tsx; lines are the existing home copy. */
export const CAPABILITIES = [
  { href: "/curtain-wall-systems", name: "Curtain Wall Systems", line: "Unitized, stick system, semi-unitized and point-supported glass wall.", Drawing: CurtainWallDrawing },
  { href: "/structural-glazing", name: "Structural Glazing", line: "2-side, 4-side, spider / point-fixed and frameless glass canopies.", Drawing: StructuralGlazingDrawing },
  { href: "/acp-aluminium-cladding", name: "ACP / Metal Cladding", line: "PVDF and PE coated panels, wood-grain, stone, mirror and metallic finishes.", Drawing: CladdingDrawing },
  { href: "/aluminium-windows-doors", name: "Windows & Doors", line: "Sliding and tilt-turn windows, casement and awning, thermal break, sliding and folding doors.", Drawing: WindowDoorDrawing },
  { href: "/glass-railings", name: "Glass Railings", line: "Frameless and semi-frameless systems with standoff and spigot fittings.", Drawing: RailingDrawing },
  { href: "/skylights-canopies", name: "Skylights & Canopies", line: "Engineered glass skylights, spider canopies, structural glass roofs and retractable systems.", Drawing: SkylightDrawing },
  { href: "/aluminium-louvers", name: "Louvers & Sun Control", line: "Fixed and operable louvers, motorised sun control, vertical fins and screens.", Drawing: LouverDrawing },
  { href: "/glass-partitions", name: "Glass Partitions", line: "Frameless office partitions, acoustic glass, switchable smart glass and shower enclosures.", Drawing: PartitionDrawing },
  { href: "/maintenance-services", name: "Maintenance & AMC", line: "Sealant renewal and waterproofing, glass panel replacement, facade cleaning and annual maintenance contracts.", Drawing: MaintenanceDrawing },
] as const;

/** Hero photograph: the highest-resolution real project photo that reads well as a full-width image. */
export const HERO = {
  slug: "naman-chambers",
  src: "/projects/naman-chambers-48-1.webp",
  width: 1360,
  height: 765,
  alt: "Naman Chambers, Bandra Kurla Complex, Mumbai: glazed office towers seen from street level",
  project: projectsData["naman-chambers"],
};

/** Six projects for the spec table. Photos come from the project data, except Embassy 247 which has a larger photo on file. */
const PICKS: Array<{ slug: string; img?: { src: string; alt: string } }> = [
  { slug: "embassy-247", img: { src: "/Embassy.webp", alt: "Embassy 247, Vikhroli West, Mumbai, at dusk" } },
  { slug: "embassy-techzone" },
  { slug: "pune-airport-terminal" },
  { slug: "nanavati-max-hospital" },
  { slug: "ssg-honesty" },
  { slug: "naman-chambers" },
];

export const SELECTED = PICKS.map(({ slug, img }) => {
  const p = projectsData[slug];
  return {
    slug,
    title: p.title,
    location: p.location,
    client: p.client,
    scope: p.scope,
    status: p.status,
    img: img?.src ?? p.image,
    alt: img?.alt ?? `${p.title}, ${p.location}`,
  };
});
