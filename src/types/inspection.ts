export interface MaterialUsed {
  name: string;
  quantity: number;
  unit: string;
}

export interface IssueObservation {
  description: string;
  severity: "low" | "medium" | "high" | "critical";
  photo_url?: string;
}

export interface SafetyChecklist {
  ppe_worn: boolean;
  scaffolding_secure: boolean;
  fire_extinguisher_available: boolean;
  first_aid_available: boolean;
  safety_nets_installed: boolean;
  housekeeping_ok: boolean;
  electrical_safety: boolean;
  signage_displayed: boolean;
}

export interface Inspection {
  id: string;
  created_at: string;
  project_name: string;
  site_location: string;
  inspection_date: string;
  weather: string;
  supervisor_name: string;
  supervisor_phone: string;
  shift: "morning" | "afternoon" | "night";
  workers_present: number;
  work_completed: string;
  work_planned_tomorrow: string;
  issues: IssueObservation[];
  materials_used: MaterialUsed[];
  safety_checklist: SafetyChecklist;
  overall_progress: number; // 0-100
  photos: string[];
  notes: string;
  status: "draft" | "submitted" | "reviewed";
}

export type InspectionFormData = Omit<Inspection, "id" | "created_at" | "status">;

export const WEATHER_OPTIONS = [
  "Clear / Sunny",
  "Partly Cloudy",
  "Overcast",
  "Light Rain",
  "Heavy Rain",
  "Windy",
  "Hot & Humid",
  "Foggy",
] as const;

export const MATERIAL_UNITS = [
  "kg",
  "sqft",
  "sqm",
  "nos",
  "liters",
  "meters",
  "running ft",
  "sets",
  "boxes",
] as const;

export const COMMON_MATERIALS = [
  "Glass Panels",
  "Aluminium Sections",
  "Structural Sealant",
  "Weather Sealant",
  "EPDM Gasket",
  "Fasteners / Bolts",
  "Brackets",
  "ACP Sheets",
  "Backup Rod",
  "Cement",
  "Sand",
  "MS Steel",
  "Spider Fittings",
  "Anchor Fasteners",
] as const;
