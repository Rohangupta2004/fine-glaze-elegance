/**
 * Pan-India location pages — /facade-contractor/<location> and
 * /facade-contractor/<service>-<location>.
 *
 * This file is routing + per-place facts only and has no imports, so
 * vite.config.ts can read it to pre-render every page and build the sitemap.
 * Page copy (climate guidance, service details, FAQs) lives in cityContent.ts.
 *
 * Every `context` line is a plain, checkable fact about the place. Never claim
 * an office or a project in a city unless it is in src/data/company.ts or
 * src/data/projects.ts.
 */

export const SERVICE_SLUGS = [
  "commercial-construction",
  "structural-glazing",
  "curtain-wall",
  "acp-cladding",
  "glass-railing",
  "facade-maintenance",
  "facade-contractor",
] as const;
export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

/** How we actually deliver in a place — drives the honest "how we work here" copy. */
export type Coverage = "base" | "mumbai" | "maharashtra" | "india" | "national";

/** Site conditions that change how a facade should be specified. */
export type Flag = "salt" | "cyclone" | "rain" | "heat" | "dust" | "swing" | "seismic" | "humidity" | "wind" | "mild";

/** Building types common in a place — drives the "buildings we see here" section. */
export type BuildingType = "it-park" | "highrise-residential" | "hotel" | "hospital" | "industrial" | "retail" | "refurb" | "institutional";

export type ClimateKey =
  | "national"
  | "deccan-west"
  | "mumbai"
  | "north-plains"
  | "bengaluru"
  | "deccan-hot"
  | "east-coast"
  | "coimbatore"
  | "hot-dry"
  | "gujarat-coast"
  | "gangetic"
  | "doon"
  | "hot-inland"
  | "kerala";

export interface CityLocation {
  /** Short name used in sentences: "Hinjewadi". */
  name: string;
  /** Name for titles and headings when the short name is ambiguous: "Hinjewadi, Pune". */
  full?: string;
  state: string;
  /** Cluster used for "nearby areas" links. */
  group: string;
  coverage: Coverage;
  climate: ClimateKey;
  /** Most relevant first; the page shows up to four. */
  flags: Flag[];
  /** One or two factual sentences about what gets built here. Unique per location. */
  context: string;
  /** Typical buildings here, most common first. */
  buildings: BuildingType[];
  /** Approximate centre [lat, lng] — for distances and "nearest" ordering. */
  geo?: [number, number];
  /** Real Fine Glaze projects in or next to this place (matched on project location). */
  projects?: { match: string[]; exclude?: string[]; label: string };
  /** Duplicate spelling of another location — its pages point canonically there. */
  sameAs?: string;
}

const PUNE_LOCAL = { match: ["Pune"], label: "elsewhere in Pune" };
const MUMBAI_LOCAL = { match: ["Mumbai"], exclude: ["Navi Mumbai"], label: "elsewhere in Mumbai" };
const NAVI_LOCAL = { match: ["Navi Mumbai", "Panvel"], label: "in Navi Mumbai" };

const PUNE_FLAGS: Flag[] = ["rain", "heat", "swing"];
const MUMBAI_SEA: Flag[] = ["salt", "wind", "rain", "humidity"];
const MUMBAI_INLAND: Flag[] = ["rain", "humidity", "wind", "salt"];

export const LOCATIONS: Record<string, CityLocation> = {
  // ── National ───────────────────────────────────────────────────────────
  "pan-india": {
    name: "Pan India", buildings: ["it-park", "hospital", "industrial"], state: "India", group: "national", coverage: "national", climate: "national",
    flags: ["cyclone", "heat", "rain", "seismic"],
    context: "Facade projects outside our home markets — commercial towers, IT campuses, hospitals, hotels and industrial buildings — taken up across India after a site visit.",
  },
  "all-india": {
    name: "All India", buildings: ["it-park", "hospital", "industrial"], state: "India", group: "national", coverage: "national", climate: "national",
    flags: ["cyclone", "heat", "rain", "seismic"], sameAs: "pan-india",
    context: "Facade, glazing and cladding projects taken up across India after a site visit.",
  },
  india: {
    name: "India", buildings: ["it-park", "hospital", "industrial"], state: "India", group: "national", coverage: "national", climate: "national",
    flags: ["cyclone", "heat", "rain", "seismic"], sameAs: "pan-india",
    context: "Facade, glazing and cladding projects taken up across India after a site visit.",
  },

  // ── Delhi NCR ──────────────────────────────────────────────────────────
  "delhi-ncr": {
    name: "Delhi NCR", buildings: ["it-park", "highrise-residential", "hospital"], geo: [28.61, 77.21], state: "Delhi NCR", group: "delhi-ncr", coverage: "india", climate: "north-plains",
    flags: ["heat", "swing", "dust", "seismic"],
    context: "Delhi NCR — Delhi, Gurgaon, Noida, Greater Noida and Faridabad — is one of India's largest office markets, with Grade-A towers, corporate campuses, hospitals and data centres.",
  },
  delhi: {
    name: "Delhi", buildings: ["refurb", "hotel", "institutional"], geo: [28.61, 77.21], state: "Delhi", group: "delhi-ncr", coverage: "india", climate: "north-plains",
    flags: ["heat", "dust", "swing", "seismic"],
    context: "Delhi's facade work ranges from Aerocity hotels and Nehru Place offices to hospitals and institutional campuses, with a good share of upgrades to older buildings alongside new construction.",
  },
  gurgaon: {
    name: "Gurgaon", buildings: ["it-park", "highrise-residential", "retail"], geo: [28.46, 77.03], state: "Haryana", group: "delhi-ncr", coverage: "india", climate: "north-plains",
    flags: ["heat", "dust", "seismic", "swing"],
    context: "Gurugram (Gurgaon) — Cyber City, Golf Course Road and Golf Course Extension Road — is dominated by glass-clad office towers and high-rise residential projects.",
  },
  noida: {
    name: "Noida", buildings: ["it-park", "industrial", "highrise-residential"], geo: [28.54, 77.39], state: "Uttar Pradesh", group: "delhi-ncr", coverage: "india", climate: "north-plains",
    flags: ["heat", "swing", "dust", "seismic"],
    context: "Noida's office corridors along the Noida–Greater Noida Expressway and IT sectors such as 62 and 125–135 host tech campuses, data centres and high-rise housing.",
  },
  "greater-noida": {
    name: "Greater Noida", buildings: ["industrial", "institutional", "highrise-residential"], geo: [28.47, 77.5], state: "Uttar Pradesh", group: "delhi-ncr", coverage: "india", climate: "north-plains",
    flags: ["swing", "heat", "dust", "seismic"],
    context: "Greater Noida is a planned city of industrial sectors, institutional campuses, data centres and large residential projects, with Noida International Airport at Jewar to the south.",
  },
  faridabad: {
    name: "Faridabad", buildings: ["industrial", "hospital", "retail"], geo: [28.41, 77.32], state: "Haryana", group: "delhi-ncr", coverage: "india", climate: "north-plains",
    flags: ["dust", "heat", "swing", "seismic"],
    context: "Faridabad, one of Haryana's main industrial cities, needs facades for factories, offices and hospitals — robust cladding and windows as often as high-end glazing.",
  },

  // ── Bengaluru ──────────────────────────────────────────────────────────
  bengaluru: {
    name: "Bengaluru", buildings: ["it-park", "highrise-residential", "retail"], geo: [12.97, 77.59], state: "Karnataka", group: "bengaluru", coverage: "india", climate: "bengaluru",
    flags: ["mild", "rain", "dust"],
    context: "Bengaluru is one of India's largest technology office markets, with campuses along the Outer Ring Road, Whitefield, Electronic City and North Bengaluru.",
  },
  bangalore: {
    name: "Bangalore", buildings: ["it-park", "highrise-residential", "retail"], geo: [12.97, 77.59], state: "Karnataka", group: "bengaluru", coverage: "india", climate: "bengaluru",
    flags: ["mild", "rain", "dust"], sameAs: "bengaluru",
    context: "Bangalore (Bengaluru) is one of India's largest technology office markets.",
  },
  whitefield: {
    name: "Whitefield", buildings: ["it-park", "highrise-residential", "retail"], geo: [12.97, 77.75], full: "Whitefield, Bengaluru", state: "Karnataka", group: "bengaluru", coverage: "india", climate: "bengaluru",
    flags: ["mild", "dust", "rain"],
    context: "Whitefield in East Bengaluru grew around ITPL into a dense cluster of tech parks, combining large-floor-plate offices with new residential towers.",
  },
  "electronic-city": {
    name: "Electronic City", buildings: ["it-park", "refurb", "industrial"], geo: [12.84, 77.66], full: "Electronic City, Bengaluru", state: "Karnataka", group: "bengaluru", coverage: "india", climate: "bengaluru",
    flags: ["rain", "mild", "dust"],
    context: "Electronic City on Hosur Road is one of India's oldest IT hubs; many of its campuses are older buildings where facade refurbishment and maintenance are common needs.",
  },

  // ── Hyderabad ──────────────────────────────────────────────────────────
  hyderabad: {
    name: "Hyderabad", buildings: ["it-park", "highrise-residential", "hospital"], geo: [17.39, 78.49], state: "Telangana", group: "hyderabad", coverage: "india", climate: "deccan-hot",
    flags: ["heat", "rain", "dust"],
    context: "Hyderabad's west — HITEC City, Gachibowli, the Financial District and Kokapet — has some of the country's fastest-growing clusters of glass office towers.",
  },
  "hitec-city": {
    name: "HITEC City", buildings: ["it-park", "hotel", "retail"], geo: [17.45, 78.38], full: "HITEC City, Hyderabad", state: "Telangana", group: "hyderabad", coverage: "india", climate: "deccan-hot",
    flags: ["heat", "wind", "rain"],
    context: "HITEC City (Madhapur) is Hyderabad's original IT district — dense tech parks and towers where large curtain walls are the standard envelope.",
  },
  gachibowli: {
    name: "Gachibowli", buildings: ["it-park", "institutional", "highrise-residential"], geo: [17.44, 78.35], full: "Gachibowli, Hyderabad", state: "Telangana", group: "hyderabad", coverage: "india", climate: "deccan-hot",
    flags: ["heat", "dust", "rain"],
    context: "Gachibowli and the adjoining Financial District host large corporate campuses, institutional buildings and a stadium, with new high-rise offices still coming up.",
  },

  // ── Tamil Nadu ─────────────────────────────────────────────────────────
  chennai: {
    name: "Chennai", buildings: ["it-park", "industrial", "hospital"], geo: [13.08, 80.27], state: "Tamil Nadu", group: "tamil-nadu", coverage: "india", climate: "east-coast",
    flags: ["cyclone", "salt", "humidity", "heat"],
    context: "Chennai's IT corridor along OMR (Rajiv Gandhi Salai), Guindy and Ambattur, plus the automotive belt around Sriperumbudur and Oragadam, drive most of its commercial facade work. Unlike most of India, Chennai gets most of its rain from the north-east monsoon, October to December.",
  },
  coimbatore: {
    name: "Coimbatore", buildings: ["industrial", "hospital", "institutional"], geo: [11.02, 76.96], state: "Tamil Nadu", group: "tamil-nadu", coverage: "india", climate: "coimbatore",
    flags: ["wind", "mild", "dust"],
    context: "Coimbatore, Tamil Nadu's industrial and textile hub, builds factories, hospitals, colleges and a growing number of IT parks.",
  },

  // ── Gujarat ────────────────────────────────────────────────────────────
  ahmedabad: {
    name: "Ahmedabad", buildings: ["it-park", "hospital", "institutional"], geo: [23.02, 72.57], state: "Gujarat", group: "gujarat", coverage: "india", climate: "hot-dry",
    flags: ["heat", "dust", "swing"],
    context: "Ahmedabad's commercial growth runs along SG Highway and Sindhu Bhavan Road, with office towers, hospitals and institutional buildings.",
  },
  "gift-city": {
    name: "GIFT City", buildings: ["it-park", "hotel", "highrise-residential"], geo: [23.16, 72.68], full: "GIFT City, Gujarat", state: "Gujarat", group: "gujarat", coverage: "india", climate: "hot-dry",
    flags: ["heat", "wind", "dust"],
    context: "GIFT City near Gandhinagar is home to India's first International Financial Services Centre (IFSC), planned around high-rise office towers.",
  },
  surat: {
    name: "Surat", buildings: ["it-park", "highrise-residential", "retail"], geo: [21.17, 72.83], state: "Gujarat", group: "gujarat", coverage: "india", climate: "gujarat-coast",
    flags: ["humidity", "salt", "heat", "rain"],
    context: "Surat, India's diamond and textile city, is building office complexes — the Surat Diamond Bourse at Khajod is among the world's largest office buildings — along with high-rise housing.",
  },
  vadodara: {
    name: "Vadodara", buildings: ["industrial", "hospital", "institutional"], geo: [22.31, 73.18], state: "Gujarat", group: "gujarat", coverage: "india", climate: "hot-dry",
    flags: ["heat", "dust", "rain"],
    context: "Vadodara mixes engineering and chemical plants with offices, hospitals and educational campuses.",
  },
  rajkot: {
    name: "Rajkot", buildings: ["industrial", "retail", "institutional"], geo: [22.3, 70.8], state: "Gujarat", group: "gujarat", coverage: "india", climate: "hot-dry",
    flags: ["heat", "dust", "wind"],
    context: "Rajkot is a manufacturing hub for engineering goods and auto parts, with factories, showrooms and commercial complexes, and a new international airport at Hirasar.",
  },

  // ── East ───────────────────────────────────────────────────────────────
  kolkata: {
    name: "Kolkata", buildings: ["it-park", "refurb", "retail"], geo: [22.57, 88.36], state: "West Bengal", group: "east", coverage: "india", climate: "gangetic",
    flags: ["rain", "humidity", "cyclone", "heat"],
    context: "Kolkata's office market centres on Salt Lake Sector V and New Town, while the older city has many heritage-zone and refurbishment jobs.",
  },
  "new-town-kolkata": {
    name: "New Town", buildings: ["it-park", "institutional", "highrise-residential"], geo: [22.58, 88.46], full: "New Town, Kolkata", state: "West Bengal", group: "east", coverage: "india", climate: "gangetic",
    flags: ["humidity", "rain", "cyclone", "heat"],
    context: "New Town (Rajarhat) is a planned township east of Kolkata with IT parks, the Biswa Bangla Convention Centre and new residential towers.",
  },
  bhubaneswar: {
    name: "Bhubaneswar", buildings: ["it-park", "hospital", "institutional"], geo: [20.3, 85.82], state: "Odisha", group: "east", coverage: "india", climate: "east-coast",
    flags: ["cyclone", "heat", "humidity"],
    context: "Bhubaneswar, Odisha's planned capital, is adding IT parks around Infocity, hospitals and institutional campuses.",
  },

  // ── North ──────────────────────────────────────────────────────────────
  chandigarh: {
    name: "Chandigarh", buildings: ["institutional", "hospital", "retail"], geo: [30.73, 76.78], state: "Chandigarh", group: "north", coverage: "india", climate: "north-plains",
    flags: ["swing", "seismic", "heat", "dust"],
    context: "Chandigarh's planned sectors carry Le Corbusier's legacy of exposed concrete and sun-breakers, and building controls are strict — most projects are institutional, healthcare and commercial blocks.",
  },
  mohali: {
    name: "Mohali", buildings: ["it-park", "hospital", "industrial"], geo: [30.7, 76.72], state: "Punjab", group: "north", coverage: "india", climate: "north-plains",
    flags: ["swing", "seismic", "dust", "heat"],
    context: "Mohali (SAS Nagar) is the Tricity's growth area, with IT City, industrial areas, hospitals and commercial development along Airport Road.",
  },
  jaipur: {
    name: "Jaipur", buildings: ["hotel", "hospital", "industrial"], geo: [26.91, 75.79], state: "Rajasthan", group: "north", coverage: "india", climate: "hot-dry",
    flags: ["heat", "dust", "swing"],
    context: "Jaipur combines heritage-sensitive design with a growing commercial base — hotels, hospitals, offices and the Mahindra World City SEZ.",
  },
  lucknow: {
    name: "Lucknow", buildings: ["institutional", "hospital", "retail"], geo: [26.85, 80.95], state: "Uttar Pradesh", group: "north", coverage: "india", climate: "north-plains",
    flags: ["heat", "swing", "dust"],
    context: "Lucknow's new commercial and institutional buildings cluster around Gomti Nagar and Shaheed Path, alongside large government and healthcare projects.",
  },
  kanpur: {
    name: "Kanpur", buildings: ["industrial", "refurb", "hospital"], geo: [26.45, 80.33], state: "Uttar Pradesh", group: "north", coverage: "india", climate: "north-plains",
    flags: ["dust", "heat", "swing"],
    context: "Kanpur, an old industrial city, needs facades for factories, hospitals, educational campuses and commercial complexes — often refurbishment of existing buildings.",
  },
  dehradun: {
    name: "Dehradun", buildings: ["institutional", "hospital", "hotel"], geo: [30.32, 78.03], state: "Uttarakhand", group: "north", coverage: "india", climate: "doon",
    flags: ["rain", "seismic", "swing"],
    context: "Dehradun, Uttarakhand's capital in the Doon Valley, builds institutional campuses, hospitals and hotels on hilly, high-rainfall sites.",
  },

  // ── Central ────────────────────────────────────────────────────────────
  indore: {
    name: "Indore", buildings: ["it-park", "hospital", "retail"], geo: [22.72, 75.86], state: "Madhya Pradesh", group: "central", coverage: "india", climate: "hot-inland",
    flags: ["heat", "dust", "rain"],
    context: "Indore, Madhya Pradesh's commercial capital, is growing along the Super Corridor and AB Road with IT parks, hospitals and commercial complexes.",
  },
  bhopal: {
    name: "Bhopal", buildings: ["institutional", "hospital", "retail"], geo: [23.26, 77.41], state: "Madhya Pradesh", group: "central", coverage: "india", climate: "hot-inland",
    flags: ["heat", "rain", "dust"],
    context: "Bhopal, the state capital, builds mainly government, institutional, healthcare and education projects alongside commercial development.",
  },
  nagpur: {
    name: "Nagpur", buildings: ["industrial", "it-park", "hospital"], geo: [21.15, 79.09], state: "Maharashtra", group: "central", coverage: "india", climate: "hot-inland",
    flags: ["heat", "dust", "swing"],
    context: "Nagpur, near the geographic centre of India, is adding logistics parks, the MIHAN SEZ and commercial projects — and has some of the hottest summers of any large Indian city.",
  },
  raipur: {
    name: "Raipur", buildings: ["institutional", "industrial", "hospital"], geo: [21.25, 81.63], state: "Chhattisgarh", group: "central", coverage: "india", climate: "hot-inland",
    flags: ["heat", "dust", "rain"],
    context: "Raipur and the planned capital Nava Raipur (Atal Nagar) are building government, institutional and commercial projects on large open sites.",
  },

  // ── Kerala & Andhra Pradesh ────────────────────────────────────────────
  kochi: {
    name: "Kochi", buildings: ["it-park", "hotel", "industrial"], geo: [9.93, 76.27], state: "Kerala", group: "kerala", coverage: "india", climate: "kerala",
    flags: ["rain", "salt", "humidity"],
    context: "Kochi, Kerala's commercial capital, combines port and logistics facilities, the Infopark IT campus at Kakkanad and waterfront hotels.",
  },
  thiruvananthapuram: {
    name: "Thiruvananthapuram", buildings: ["it-park", "institutional", "hotel"], geo: [8.52, 76.94], state: "Kerala", group: "kerala", coverage: "india", climate: "kerala",
    flags: ["humidity", "rain", "salt"],
    context: "Thiruvananthapuram's Technopark — one of India's earliest IT parks — and the Vizhinjam port anchor its commercial construction.",
  },
  visakhapatnam: {
    name: "Visakhapatnam", buildings: ["industrial", "it-park", "hotel"], geo: [17.69, 83.22], state: "Andhra Pradesh", group: "andhra", coverage: "india", climate: "east-coast",
    flags: ["cyclone", "salt", "humidity", "heat"],
    context: "Visakhapatnam (Vizag), a port and industrial city on the Bay of Bengal, builds port, pharma, IT and hospitality projects. Cyclone Hudhud in 2014 showed how hard wind can hit glazing here.",
  },
  vijayawada: {
    name: "Vijayawada", buildings: ["hospital", "institutional", "retail"], geo: [16.51, 80.65], state: "Andhra Pradesh", group: "andhra", coverage: "india", climate: "hot-inland",
    flags: ["heat", "humidity", "rain"],
    context: "Vijayawada, on the Krishna river next to the Andhra Pradesh capital region, builds commercial, healthcare and institutional projects; its summers are among the hottest in South India.",
  },

  // ── Maharashtra (outside Pune & Mumbai) ────────────────────────────────
  nashik: {
    name: "Nashik", buildings: ["industrial", "hotel", "highrise-residential"], geo: [20.0, 73.79], state: "Maharashtra", group: "maharashtra", coverage: "maharashtra", climate: "deccan-west",
    flags: ["rain", "heat", "swing"],
    context: "Nashik's MIDC areas at Satpur and Ambad host engineering and auto-component plants, with growing commercial, hospitality and residential projects.",
  },
  aurangabad: {
    name: "Aurangabad", buildings: ["industrial", "hotel", "institutional"], geo: [19.88, 75.34], state: "Maharashtra", group: "maharashtra", coverage: "maharashtra", climate: "hot-inland",
    flags: ["heat", "dust", "swing"],
    context: "Aurangabad (Chhatrapati Sambhajinagar) is an automotive and industrial hub at Waluj, Chikalthana and the AURIC (Shendra–Bidkin) industrial city.",
  },

  // ── Pune & PCMC (home base) ────────────────────────────────────────────
  pune: {
    name: "Pune", buildings: ["it-park", "institutional", "highrise-residential"], geo: [18.52, 73.86], state: "Maharashtra", group: "pune", coverage: "base", climate: "deccan-west", flags: PUNE_FLAGS,
    projects: { match: ["Pune"], label: "in Pune" },
    context: "Pune is our home base — office at Mohammed Wadi, fabrication unit at Pisoli. Our Pune work includes the new integrated terminal at Pune International Airport, Embassy Techzone at Hinjewadi and Nirmaann Estrellaa.",
  },
  hinjewadi: {
    name: "Hinjewadi", buildings: ["it-park", "highrise-residential", "hotel"], geo: [18.59, 73.74], full: "Hinjewadi, Pune", state: "Maharashtra", group: "pune", coverage: "base", climate: "deccan-west",
    flags: ["rain", "heat", "dust"],
    projects: { match: ["Hinjewadi"], label: "in Hinjewadi" },
    context: "Hinjewadi's Rajiv Gandhi Infotech Park (Phases 1–3) is Pune's largest IT cluster. Fine Glaze has worked at Embassy Techzone here.",
  },
  kharadi: {
    name: "Kharadi", buildings: ["it-park", "highrise-residential", "retail"], geo: [18.55, 73.94], full: "Kharadi, Pune", state: "Maharashtra", group: "pune", coverage: "base", climate: "deccan-west",
    flags: ["heat", "rain", "swing"], projects: PUNE_LOCAL,
    context: "Kharadi in east Pune grew around EON IT Park and World Trade Center Pune, with offices and high-rise housing off the Pune–Nagar road.",
  },
  baner: {
    name: "Baner", buildings: ["retail", "highrise-residential", "it-park"], geo: [18.56, 73.79], full: "Baner, Pune", state: "Maharashtra", group: "pune", coverage: "base", climate: "deccan-west",
    flags: ["rain", "heat", "swing"], projects: PUNE_LOCAL,
    context: "Baner in west Pune mixes high-street commercial buildings, offices and premium residential towers along Baner Road and the Mumbai–Bengaluru highway.",
  },
  wakad: {
    name: "Wakad", buildings: ["highrise-residential", "retail", "hospital"], geo: [18.6, 73.76], full: "Wakad, Pune", state: "Maharashtra", group: "pune", coverage: "base", climate: "deccan-west",
    flags: ["rain", "dust", "heat"], projects: PUNE_LOCAL,
    context: "Wakad, next to Hinjewadi, is mostly high-rise residential with commercial frontage along the highway — aluminium windows, glass railings and ACP shopfronts are typical needs.",
  },
  "viman-nagar": {
    name: "Viman Nagar", buildings: ["institutional", "hotel", "retail"], geo: [18.57, 73.91], full: "Viman Nagar, Pune", state: "Maharashtra", group: "pune", coverage: "base", climate: "deccan-west",
    flags: ["heat", "rain", "swing"],
    projects: { match: ["Pune International Airport"], label: "next door at Pune Airport" },
    context: "Viman Nagar sits beside Pune International Airport at Lohegaon, where Fine Glaze worked on the new integrated terminal; the area has offices, malls and hotels.",
  },
  magarpatta: {
    name: "Magarpatta", buildings: ["it-park", "highrise-residential", "retail"], geo: [18.515, 73.927], full: "Magarpatta, Pune", state: "Maharashtra", group: "pune", coverage: "base", climate: "deccan-west",
    flags: ["heat", "rain", "dust"], projects: PUNE_LOCAL,
    context: "Magarpatta City in Hadapsar is a master-planned township that puts Cybercity offices, housing and retail on one campus.",
  },
  hadapsar: {
    name: "Hadapsar", buildings: ["it-park", "industrial", "highrise-residential"], geo: [18.503, 73.935], full: "Hadapsar, Pune", state: "Maharashtra", group: "pune", coverage: "base", climate: "deccan-west",
    flags: ["dust", "heat", "rain"], projects: PUNE_LOCAL,
    context: "Hadapsar, on the Pune–Solapur road, includes Magarpatta, SP Infocity and industrial estates, with heavy residential growth around them — and it's a short drive from our Pisoli unit.",
  },
  pimpri: {
    name: "Pimpri", buildings: ["industrial", "hospital", "highrise-residential"], geo: [18.63, 73.8], full: "Pimpri, PCMC", state: "Maharashtra", group: "pune", coverage: "base", climate: "deccan-west",
    flags: ["dust", "rain", "heat"], projects: PUNE_LOCAL,
    context: "Pimpri, in Pimpri-Chinchwad's industrial belt near Bhosari MIDC, has factories, hospitals, commercial complexes and fast-growing housing.",
  },
  chinchwad: {
    name: "Chinchwad", buildings: ["industrial", "retail", "highrise-residential"], geo: [18.645, 73.785], full: "Chinchwad, PCMC", state: "Maharashtra", group: "pune", coverage: "base", climate: "deccan-west",
    flags: ["dust", "heat", "swing"], projects: PUNE_LOCAL,
    context: "Chinchwad sits in Pimpri-Chinchwad's automotive manufacturing belt and needs facades for plants, offices and commercial buildings.",
  },
  "kalyani-nagar": {
    name: "Kalyani Nagar", buildings: ["hotel", "it-park", "retail"], geo: [18.548, 73.902], full: "Kalyani Nagar, Pune", state: "Maharashtra", group: "pune", coverage: "base", climate: "deccan-west",
    flags: ["heat", "rain", "swing"], projects: PUNE_LOCAL,
    context: "Kalyani Nagar, between the airport and Koregaon Park, is a premium pocket of offices, hotels, restaurants and apartments.",
  },
  "koregaon-park": {
    name: "Koregaon Park", buildings: ["hotel", "highrise-residential", "retail"], geo: [18.537, 73.893], full: "Koregaon Park, Pune", state: "Maharashtra", group: "pune", coverage: "base", climate: "deccan-west",
    flags: ["rain", "heat", "swing"], projects: PUNE_LOCAL,
    context: "Koregaon Park and its annexe host hotels, boutique offices and premium homes — design-led projects where clean glazing and railing details matter.",
  },
  aundh: {
    name: "Aundh", buildings: ["retail", "highrise-residential", "hospital"], geo: [18.56, 73.81], full: "Aundh, Pune", state: "Maharashtra", group: "pune", coverage: "base", climate: "deccan-west",
    flags: ["rain", "swing", "heat"], projects: PUNE_LOCAL,
    context: "Aundh in north-west Pune is an established residential and retail neighbourhood, with commercial frontage along ITI Road and DP Road.",
  },
  balewadi: {
    name: "Balewadi", buildings: ["retail", "it-park", "highrise-residential"], geo: [18.58, 73.77], full: "Balewadi, Pune", state: "Maharashtra", group: "pune", coverage: "base", climate: "deccan-west",
    flags: ["rain", "heat", "dust"], projects: PUNE_LOCAL,
    context: "Balewadi, next to Baner, has the Balewadi High Street strip, new office buildings and high-rise housing around the sports complex.",
  },

  // ── Mumbai (second operating city) ─────────────────────────────────────
  mumbai: {
    name: "Mumbai", buildings: ["it-park", "highrise-residential", "hospital"], geo: [19.08, 72.88], state: "Maharashtra", group: "mumbai", coverage: "mumbai", climate: "mumbai", flags: MUMBAI_SEA,
    projects: { match: ["Mumbai"], exclude: ["Navi Mumbai"], label: "in Mumbai" },
    context: "Mumbai is our second operating city and where most of our documented projects are — Embassy 247 at Vikhroli, Naman Chambers and FIFC Tower at BKC, Leela Business Park at Andheri, Salsette-27 at Byculla and more.",
  },
  bkc: {
    name: "BKC", buildings: ["it-park", "hotel", "institutional"], geo: [19.065, 72.865], full: "Bandra Kurla Complex (BKC), Mumbai", state: "Maharashtra", group: "mumbai", coverage: "mumbai", climate: "mumbai",
    flags: ["wind", "salt", "rain", "humidity"],
    projects: { match: ["Bandra Kurla"], label: "in BKC" },
    context: "Bandra Kurla Complex is Mumbai's main business district. Fine Glaze has worked on Naman Chambers and FIFC Tower here.",
  },
  andheri: {
    name: "Andheri", buildings: ["hotel", "it-park", "refurb"], geo: [19.115, 72.855], full: "Andheri, Mumbai", state: "Maharashtra", group: "mumbai", coverage: "mumbai", climate: "mumbai", flags: MUMBAI_INLAND,
    projects: { match: ["Andheri"], label: "in Andheri" },
    context: "Andheri East, around the airport, MIDC and SEEPZ, is dense with offices and hotels. Fine Glaze projects here include Leela Business Park and the Leela Hotel.",
  },
  powai: {
    name: "Powai", buildings: ["it-park", "hotel", "highrise-residential"], geo: [19.12, 72.91], full: "Powai, Mumbai", state: "Maharashtra", group: "mumbai", coverage: "mumbai", climate: "mumbai",
    flags: ["rain", "wind", "humidity", "salt"], projects: MUMBAI_LOCAL,
    context: "Powai, around Hiranandani Gardens and the lake, mixes commercial towers, hotels and residential high-rises.",
  },
  "lower-parel": {
    name: "Lower Parel", buildings: ["it-park", "highrise-residential", "retail"], geo: [18.995, 72.83], full: "Lower Parel, Mumbai", state: "Maharashtra", group: "mumbai", coverage: "mumbai", climate: "mumbai",
    flags: ["wind", "rain", "salt", "humidity"], projects: MUMBAI_LOCAL,
    context: "Lower Parel's former mill lands have become one of Mumbai's densest clusters of glass office towers and high-rise residences.",
  },
  vikhroli: {
    name: "Vikhroli", buildings: ["it-park", "highrise-residential", "industrial"], geo: [19.11, 72.93], full: "Vikhroli, Mumbai", state: "Maharashtra", group: "mumbai", coverage: "mumbai", climate: "mumbai", flags: MUMBAI_INLAND,
    projects: { match: ["Vikhroli"], label: "in Vikhroli" },
    context: "Vikhroli, on the Eastern Express Highway, is where Fine Glaze delivered Embassy 247 — the project behind our Embassy REIT Best Vendor Performance 2024 award.",
  },
  goregaon: {
    name: "Goregaon", buildings: ["it-park", "hotel", "highrise-residential"], geo: [19.165, 72.85], full: "Goregaon, Mumbai", state: "Maharashtra", group: "mumbai", coverage: "mumbai", climate: "mumbai",
    flags: ["rain", "humidity", "salt", "wind"], projects: MUMBAI_LOCAL,
    context: "Goregaon, with NESCO, Oberoi Garden City and the Western Express Highway office belt, is a large commercial and residential hub in the western suburbs.",
  },
  worli: {
    name: "Worli", buildings: ["highrise-residential", "it-park", "hotel"], geo: [19.01, 72.817], full: "Worli, Mumbai", state: "Maharashtra", group: "mumbai", coverage: "mumbai", climate: "mumbai",
    flags: ["wind", "salt", "rain", "humidity"], projects: MUMBAI_LOCAL,
    context: "Worli's sea-facing towers are among Mumbai's tallest, so every elevation has to handle high wind and salt air.",
  },
  byculla: {
    name: "Byculla", buildings: ["highrise-residential", "refurb", "hospital"], geo: [18.98, 72.835], full: "Byculla, Mumbai", state: "Maharashtra", group: "mumbai", coverage: "mumbai", climate: "mumbai", flags: MUMBAI_INLAND,
    projects: { match: ["Byculla"], label: "in Byculla" },
    context: "Byculla in south-central Mumbai is seeing mill-land and old-building redevelopment. Fine Glaze worked on the Salsette-27 towers here.",
  },
  malad: {
    name: "Malad", buildings: ["it-park", "retail", "highrise-residential"], geo: [19.187, 72.848], full: "Malad, Mumbai", state: "Maharashtra", group: "mumbai", coverage: "mumbai", climate: "mumbai",
    flags: ["humidity", "rain", "salt", "wind"], projects: MUMBAI_LOCAL,
    context: "Malad's Mindspace and Inorbit area combine IT parks, malls and high-rise housing in the western suburbs.",
  },
  borivali: {
    name: "Borivali", buildings: ["highrise-residential", "refurb", "retail"], geo: [19.23, 72.857], full: "Borivali, Mumbai", state: "Maharashtra", group: "mumbai", coverage: "mumbai", climate: "mumbai",
    flags: ["rain", "humidity", "salt"], projects: MUMBAI_LOCAL,
    context: "Borivali, at the northern end of the western suburbs, is mostly residential redevelopment with commercial frontage — windows, railings and terrace enclosures are frequent needs.",
  },
  dadar: {
    name: "Dadar", buildings: ["refurb", "highrise-residential", "retail"], geo: [19.02, 72.843], full: "Dadar, Mumbai", state: "Maharashtra", group: "mumbai", coverage: "mumbai", climate: "mumbai", flags: MUMBAI_SEA,
    projects: { match: ["Dadar"], label: "in Dadar" },
    context: "Dadar in central Mumbai is largely redevelopment of older buildings. Fine Glaze completed a terrace enclosure at Samundra Tarang near Shivaji Park.",
  },
  "nariman-point": {
    name: "Nariman Point", buildings: ["refurb", "it-park", "hotel"], geo: [18.926, 72.823], full: "Nariman Point, Mumbai", state: "Maharashtra", group: "mumbai", coverage: "mumbai", climate: "mumbai",
    flags: ["salt", "wind", "humidity", "rain"], projects: MUMBAI_LOCAL,
    context: "Nariman Point, Mumbai's original sea-front business district, has older office towers where re-glazing, re-cladding and facade maintenance are common.",
  },

  // ── Navi Mumbai ────────────────────────────────────────────────────────
  "navi-mumbai": {
    name: "Navi Mumbai", buildings: ["it-park", "highrise-residential", "institutional"], geo: [19.03, 73.03], state: "Maharashtra", group: "navi-mumbai", coverage: "mumbai", climate: "mumbai",
    flags: ["rain", "humidity", "salt"], projects: NAVI_LOCAL,
    context: "Navi Mumbai — Vashi to Panvel — has IT parks at Airoli and Mahape, CBD Belapur offices and fast growth around Navi Mumbai International Airport. Fine Glaze worked on the LTIMindtree Mensa campus at Mahape.",
  },
  vashi: {
    name: "Vashi", buildings: ["refurb", "retail", "hospital"], geo: [19.077, 72.999], full: "Vashi, Navi Mumbai", state: "Maharashtra", group: "navi-mumbai", coverage: "mumbai", climate: "mumbai",
    flags: ["humidity", "rain", "salt"], projects: NAVI_LOCAL,
    context: "Vashi, Navi Mumbai's oldest node, has commercial complexes, hospitals, malls and the APMC market area, with many older buildings being upgraded.",
  },
  mahape: {
    name: "Mahape", buildings: ["it-park", "industrial", "institutional"], geo: [19.11, 73.03], full: "Mahape, Navi Mumbai", state: "Maharashtra", group: "navi-mumbai", coverage: "mumbai", climate: "mumbai",
    flags: ["rain", "humidity", "wind"],
    projects: { match: ["Mahape"], label: "in Mahape" },
    context: "Mahape's MIDC area is now a belt of tech campuses. Fine Glaze worked on the LTIMindtree Mensa campus here with L&T Construction.",
  },
  airoli: {
    name: "Airoli", buildings: ["it-park", "highrise-residential", "hospital"], geo: [19.157, 72.993], full: "Airoli, Navi Mumbai", state: "Maharashtra", group: "navi-mumbai", coverage: "mumbai", climate: "mumbai",
    flags: ["rain", "humidity", "salt"], projects: NAVI_LOCAL,
    context: "Airoli hosts Mindspace and other IT parks along the Thane–Belapur road, plus new residential towers.",
  },
  belapur: {
    name: "Belapur", buildings: ["institutional", "it-park", "highrise-residential"], geo: [19.02, 73.04], full: "CBD Belapur, Navi Mumbai", state: "Maharashtra", group: "navi-mumbai", coverage: "mumbai", climate: "mumbai",
    flags: ["salt", "rain", "humidity"], projects: NAVI_LOCAL,
    context: "CBD Belapur is Navi Mumbai's planned business district, with government and corporate offices and residential sectors.",
  },
  kharghar: {
    name: "Kharghar", buildings: ["highrise-residential", "institutional", "hospital"], geo: [19.047, 73.07], full: "Kharghar, Navi Mumbai", state: "Maharashtra", group: "navi-mumbai", coverage: "mumbai", climate: "mumbai",
    flags: ["rain", "wind", "humidity"], projects: NAVI_LOCAL,
    context: "Kharghar is a large residential node below the Kharghar hills, with institutional campuses and Central Park, close to the new airport region.",
  },
  panvel: {
    name: "Panvel", buildings: ["highrise-residential", "retail", "industrial"], geo: [18.99, 73.117], full: "Panvel, Navi Mumbai", state: "Maharashtra", group: "navi-mumbai", coverage: "mumbai", climate: "mumbai",
    flags: ["rain", "humidity", "heat"],
    projects: { match: ["Panvel"], label: "in Panvel" },
    context: "Panvel, next to Navi Mumbai International Airport, is seeing fast commercial and residential growth. Fine Glaze worked on the SSG Honesty building here.",
  },

  // ── Thane ──────────────────────────────────────────────────────────────
  thane: {
    name: "Thane", buildings: ["highrise-residential", "it-park", "retail"], geo: [19.218, 72.978], state: "Maharashtra", group: "thane", coverage: "mumbai", climate: "mumbai",
    flags: ["rain", "humidity", "wind"], projects: MUMBAI_LOCAL,
    context: "Thane's Ghodbunder Road and Wagle Estate have grown into a major residential and office corridor, with high-rise towers between the Yeoor hills and the creek.",
  },
};

/** Groups shown as "nearby" when a location's own group is small. */
const GROUP_NEIGHBOURS: Record<string, string[]> = {
  national: ["delhi-ncr", "bengaluru", "hyderabad", "tamil-nadu", "gujarat", "east", "pune", "mumbai"],
  "delhi-ncr": ["north"],
  north: ["delhi-ncr"],
  bengaluru: ["tamil-nadu", "hyderabad", "kerala"],
  hyderabad: ["andhra", "bengaluru"],
  "tamil-nadu": ["bengaluru", "kerala", "andhra"],
  kerala: ["tamil-nadu", "bengaluru"],
  andhra: ["hyderabad", "east", "tamil-nadu"],
  gujarat: ["mumbai", "north"],
  east: ["andhra"],
  central: ["maharashtra", "north"],
  maharashtra: ["pune", "mumbai", "central"],
  pune: ["maharashtra"],
  mumbai: ["navi-mumbai", "thane"],
  "navi-mumbai": ["mumbai", "thane"],
  thane: ["mumbai", "navi-mumbai"],
};

/** Hand-written pages that already target a slug — dynamic pages point canonically to them. */
export const PREFERRED_STATIC: Record<string, string> = {
  pune: "/facade-contractor-pune",
  mumbai: "/facade-contractor-mumbai",
  "navi-mumbai": "/facade-contractor-navi-mumbai",
  thane: "/facade-contractor-thane",
  "curtain-wall-pune": "/curtain-wall-pune",
  "structural-glazing-pune": "/structural-glazing-pune",
  "acp-cladding-pune": "/acp-cladding-pune",
  "glass-railing-pune": "/glass-railing-pune",
  "curtain-wall-mumbai": "/curtain-wall-mumbai",
  "structural-glazing-mumbai": "/structural-glazing-mumbai",
};

/** Date the location page content last changed (sitemap lastmod). */
export const LOCATION_PAGES_UPDATED = "2026-11-15";

/** URL slug as served: "pune", "curtain-wall-pune", "facade-contractor-pune". */
export const pageSlug = (service: ServiceSlug, location: string) =>
  service === "facade-contractor" ? location : `${service}-${location}`;

/** Resolve a /facade-contractor/:slug (or /services/:service/:city) to a known page, or null. */
export function parseCitySlug(slug: string): { service: ServiceSlug; location: string } | null {
  const s = slug.toLowerCase();
  if (LOCATIONS[s]) return { service: "facade-contractor", location: s };
  for (const service of [...SERVICE_SLUGS].sort((a, b) => b.length - a.length)) {
    if (!s.startsWith(`${service}-`)) continue;
    const location = s.slice(service.length + 1);
    if (LOCATIONS[location]) return { service, location };
  }
  return null;
}

/** The one URL search engines should index for this service + place. */
export function canonicalCityPath(service: ServiceSlug, location: string): string {
  const loc = LOCATIONS[location]?.sameAs ?? location;
  const slug = pageSlug(service, loc);
  return PREFERRED_STATIC[slug] ?? `/facade-contractor/${slug}`;
}

/** Every pre-rendered location URL (the full original set — none removed). */
export const ALL_CITY_PAGE_PATHS: string[] = [
  ...Object.keys(LOCATIONS).map((l) => `/facade-contractor/${l}`),
  ...SERVICE_SLUGS.flatMap((s) => Object.keys(LOCATIONS).map((l) => `/facade-contractor/${s}-${l}`)),
];

/** Location URLs that are their own canonical — these go in the sitemap. */
export const SITEMAP_CITY_PATHS: string[] = Array.from(
  new Set(
    ALL_CITY_PAGE_PATHS.filter((p) => {
      const hit = parseCitySlug(p.replace("/facade-contractor/", ""));
      return hit && canonicalCityPath(hit.service, hit.location) === p;
    }),
  ),
);

/** Pisoli fabrication unit, Pune (approx.). */
export const FABRICATION_UNIT_GEO: [number, number] = [18.445, 73.9];

/** Approximate locations of documented projects (keys match src/data/projects.ts). */
export const PROJECT_GEO: Record<string, [number, number]> = {
  "ltimindtree-campus": [19.11, 73.03],
  "embassy-247": [19.105, 72.93],
  "salsette-27": [18.98, 72.835],
  "leela-business-park": [19.11, 72.87],
  "pune-airport-terminal": [18.58, 73.92],
  "jindal-house": [18.95, 72.8],
  "nirmaann-estrellaa": [18.47, 73.89],
  "ssg-honesty": [18.99, 73.12],
  "leela-hotel": [19.11, 72.87],
  "embassy-techzone": [18.59, 73.72],
  "nanavati-max-hospital": [19.1, 72.84],
  "naman-chambers": [19.065, 72.865],
  "fifc-tower": [19.065, 72.865],
  "mittal-house": [19.1, 72.83],
  "samundra-tarang": [19.025, 72.84],
};

/** Great-circle distance in km. */
export function distanceKm([lat1, lng1]: [number, number], [lat2, lng2]: [number, number]): number {
  const r = (d: number) => (d * Math.PI) / 180;
  const a = Math.sin(r(lat2 - lat1) / 2) ** 2 + Math.cos(r(lat1)) * Math.cos(r(lat2)) * Math.sin(r(lng2 - lng1) / 2) ** 2;
  return 6371 * 2 * Math.asin(Math.sqrt(a));
}

/** Rounded, honest distance for copy: "about 12 km", "about 1,150 km". */
export function roughKm(km: number): string {
  const step = km < 20 ? 1 : km < 200 ? 5 : km < 500 ? 10 : 50;
  return `about ${(Math.max(step, Math.round(km / step) * step)).toLocaleString("en-IN")} km`;
}

/** Our documented projects, nearest first. */
export function nearestProjects(location: string, limit = 4): { slug: string; km: number }[] {
  const g = LOCATIONS[location]?.geo;
  if (!g) return [];
  return Object.entries(PROJECT_GEO)
    .map(([slug, pg]) => ({ slug, km: distanceKm(g, pg) }))
    .sort((a, b) => a.km - b.km)
    .slice(0, limit);
}

/** Nearby places for internal links — nearest first; cluster-based where a place has no centre. */
export function nearbyLocations(location: string, limit = 10): string[] {
  const self = LOCATIONS[location];
  if (!self) return [];
  const canonicalSelf = self.sameAs ?? location;
  const candidates = Object.entries(LOCATIONS).filter(([slug, l]) => !l.sameAs && slug !== canonicalSelf && l.coverage !== "national");
  if (self.geo) {
    const here = self.geo;
    return candidates
      .filter(([, l]) => l.geo)
      .map(([slug, l]) => ({ slug, km: distanceKm(here, l.geo!) }))
      .sort((a, b) => a.km - b.km)
      .slice(0, limit)
      .map((x) => x.slug);
  }
  const out: string[] = [];
  for (const g of GROUP_NEIGHBOURS[self.group] ?? []) {
    const first = candidates.find(([, l]) => l.group === g);
    if (first && out.length < limit) out.push(first[0]);
  }
  return out;
}
