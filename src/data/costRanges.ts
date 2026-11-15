/**
 * Indicative installed-cost ranges, copied from the system cards on each
 * service page (Nov 2026). The estimator only multiplies these by the
 * quantity entered — it adds no hidden factors. Update both together.
 */
/**
 * APPROVAL SWITCH — keep false until the business team (founder / estimation)
 * has approved every range below in docs/PRICING_FOR_APPROVAL.md.
 *
 * While false:
 *  - the estimator shows a "coming soon" page (reviewers can open it with
 *    /facade-cost-estimator?preview=1), is noindexed and is not linked,
 *  - new pages show "priced after site survey" instead of ₹ figures,
 *  - no price data is emitted in structured data.
 */
export const PRICING_APPROVED = false;

export type CostUnit = "sqft" | "rft";

export interface CostSystem {
  id: string;
  service: string;
  name: string;
  unit: CostUnit;
  min: number;
  max: number;
  /** Page that publishes this range (and explains the system). */
  source: string;
  /** Matches a QuoteModal project type. */
  projectType: string;
  drivers: string[];
}

export const COST_SYSTEMS: CostSystem[] = [
  // Windows & doors — /aluminium-windows-doors
  { id: "sliding", service: "Aluminium windows & doors", name: "Sliding windows / doors", unit: "sqft", min: 450, max: 800, source: "/aluminium-windows-doors", projectType: "Aluminium Doors & Windows", drivers: ["Profile series and wall thickness", "Glass build-up (single toughened vs DGU)", "Hardware brand and locking", "Number of tracks and mesh shutter"] },
  { id: "casement", service: "Aluminium windows & doors", name: "Casement / awning windows", unit: "sqft", min: 500, max: 900, source: "/aluminium-windows-doors", projectType: "Aluminium Doors & Windows", drivers: ["Thermal break or standard profile", "Multi-point vs single-point locking", "Glass build-up", "Opening size"] },
  { id: "tilt-turn", service: "Aluminium windows & doors", name: "Tilt-turn windows", unit: "sqft", min: 700, max: 1200, source: "/aluminium-windows-doors", projectType: "Aluminium Doors & Windows", drivers: ["System supplier and hardware", "Thermal break", "Glass build-up", "Sash size and weight"] },
  { id: "lift-slide", service: "Aluminium windows & doors", name: "Lift-slide doors", unit: "sqft", min: 900, max: 1500, source: "/aluminium-windows-doors", projectType: "Aluminium Doors & Windows", drivers: ["Panel size and weight", "Hardware set", "Threshold detail", "Glass build-up"] },
  // Curtain wall — /curtain-wall-systems
  { id: "cw-stick", service: "Curtain wall", name: "Stick system curtain wall", unit: "sqft", min: 400, max: 700, source: "/curtain-wall-systems", projectType: "Curtain Wall Systems", drivers: ["Wind load and mullion depth", "Glass (DGU, Low-E, laminated)", "Building height and access", "Spandrel and fire-stop scope"] },
  { id: "cw-semi", service: "Curtain wall", name: "Semi-unitized curtain wall", unit: "sqft", min: 500, max: 900, source: "/curtain-wall-systems", projectType: "Curtain Wall Systems", drivers: ["Wind load and mullion depth", "Glass specification", "Building height and access", "Repetition of panel sizes"] },
  { id: "cw-unitized", service: "Curtain wall", name: "Unitized curtain wall", unit: "sqft", min: 600, max: 1200, source: "/curtain-wall-systems", projectType: "Curtain Wall Systems", drivers: ["Panel repetition and quantity", "Glass specification", "Hoisting and storage on site", "Testing requirements (mock-up, ASTM)"] },
  // Structural glazing — /structural-glazing
  { id: "ssg-2", service: "Structural glazing", name: "2-side structural glazing", unit: "sqft", min: 350, max: 550, source: "/structural-glazing", projectType: "Structural Glazing", drivers: ["Glass type and size", "Silicone brand and joint design", "Height and access", "Sub-frame scope"] },
  { id: "ssg-4", service: "Structural glazing", name: "4-side structural glazing", unit: "sqft", min: 500, max: 800, source: "/structural-glazing", projectType: "Structural Glazing", drivers: ["Glass type and size", "Silicone brand and joint design", "Height and access", "Sub-frame scope"] },
  { id: "spider", service: "Structural glazing", name: "Spider / point-fixed glazing", unit: "sqft", min: 800, max: 1500, source: "/structural-glazing", projectType: "Structural Glazing", drivers: ["Fitting grade (SS 304 / 316)", "Glass thickness and lamination", "Support structure (fins, steel, cables)", "Height"] },
  // ACP — /acp-aluminium-cladding
  { id: "acp-pvdf", service: "ACP cladding", name: "ACP cladding — PVDF finish", unit: "sqft", min: 180, max: 350, source: "/acp-aluminium-cladding", projectType: "ACP Cladding", drivers: ["Core (FR vs standard)", "Brand and sheet thickness", "Sub-frame and insulation", "Routing and folding complexity"] },
  { id: "acp-special", service: "ACP cladding", name: "ACP — wood-grain / stone finish", unit: "sqft", min: 220, max: 400, source: "/acp-aluminium-cladding", projectType: "ACP Cladding", drivers: ["Finish and brand", "Core (FR vs standard)", "Sub-frame", "Detailing"] },
  // Louvers — /aluminium-louvers
  { id: "louver-fixed", service: "Louvers", name: "Fixed aluminium louvers", unit: "sqft", min: 250, max: 500, source: "/aluminium-louvers", projectType: "Aluminium Louvers", drivers: ["Blade profile and pitch", "Finish (powder coat / PVDF)", "Support frame", "Height and access"] },
  { id: "louver-operable", service: "Louvers", name: "Operable louvers", unit: "sqft", min: 400, max: 700, source: "/aluminium-louvers", projectType: "Aluminium Louvers", drivers: ["Manual vs motorised", "Blade size", "Finish", "Controls"] },
  // Railings — /glass-railings (per running foot)
  { id: "rail-frameless", service: "Glass railings", name: "Frameless glass railing", unit: "rft", min: 800, max: 1400, source: "/glass-railings", projectType: "Glass Railings", drivers: ["Glass build-up (toughened vs laminated)", "Base channel and anchoring", "Handrail", "Floor level and access"] },
  { id: "rail-spigot", service: "Glass railings", name: "Spigot glass railing", unit: "rft", min: 700, max: 1200, source: "/glass-railings", projectType: "Glass Railings", drivers: ["Spigot grade (SS 304 / 316)", "Glass build-up", "Handrail", "Slab edge condition"] },
  // Skylights — /skylights-canopies
  { id: "skylight", service: "Skylights & canopies", name: "Atrium skylight", unit: "sqft", min: 600, max: 1200, source: "/skylights-canopies", projectType: "Skylights & Canopies", drivers: ["Glass (laminated, solar control)", "Steel structure scope", "Drainage and slope", "Height and access"] },
  { id: "canopy", service: "Skylights & canopies", name: "Frameless glass canopy", unit: "sqft", min: 800, max: 1500, source: "/skylights-canopies", projectType: "Skylights & Canopies", drivers: ["Projection and support type", "Glass build-up", "Fittings grade", "Structural scope"] },
  // Partitions — /glass-partitions
  { id: "partition", service: "Glass partitions", name: "Frameless office partition", unit: "sqft", min: 350, max: 600, source: "/glass-partitions", projectType: "Glass Partitions", drivers: ["Glass thickness", "Doors and hardware", "Frosting / film", "Acoustic needs"] },
  { id: "partition-acoustic", service: "Glass partitions", name: "Acoustic double-glazed partition", unit: "sqft", min: 600, max: 1000, source: "/glass-partitions", projectType: "Glass Partitions", drivers: ["Glass build-up", "Frame system", "Doors and seals", "Blinds"] },
];

export const UNIT_LABEL: Record<CostUnit, string> = { sqft: "sq ft", rft: "running ft" };

/** ₹ formatted the Indian way, switching to lakh / crore for budgets. */
export function formatINR(value: number): string {
  if (value >= 1_00_00_000) return `₹${(value / 1_00_00_000).toFixed(2)} crore`;
  if (value >= 1_00_000) return `₹${(value / 1_00_000).toFixed(1)} lakh`;
  return `₹${Math.round(value).toLocaleString("en-IN")}`;
}
