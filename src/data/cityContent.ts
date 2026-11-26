/**
 * Copy for the Pan-India location pages (see locations.ts for the places).
 *
 * Each page is assembled from parts that genuinely differ by place and by
 * service: the place's own context line, its climate, the engineering notes
 * for that climate *for that service*, how we actually deliver there, real
 * nearby projects and its own FAQs. Keep every statement checkable — no
 * invented offices, projects, timelines or performance figures.
 */
import { company } from "./company";
import { projectsData } from "./projects";
import {
  FABRICATION_UNIT_GEO,
  LOCATIONS,
  distanceKm,
  nearestProjects,
  roughKm,
  type BuildingType,
  type ClimateKey,
  type Coverage,
  type Flag,
  type ServiceSlug,
  type CityLocation,
} from "./locations";

type GuidanceKey = Exclude<ServiceSlug, "commercial-construction" | "facade-contractor"> | "envelope";
const guidanceKey = (s: ServiceSlug): GuidanceKey =>
  s === "commercial-construction" || s === "facade-contractor" ? "envelope" : s;

// ── Climate ──────────────────────────────────────────────────────────────
export const CLIMATE: Record<ClimateKey, string> = {
  national:
    "India runs from cyclone-prone coasts and humid monsoon belts to hot, dry plains and Himalayan foothills, so no single facade specification works everywhere. Every outstation project starts from the city's design wind speed under IS 875 (Part 3), its seismic zone, rainfall and exposure.",
  "deccan-west":
    "A moderate Deccan-plateau climate: hot, dry summers around 38–40°C, a June–September monsoon that drives rain onto exposed elevations, and cool, dry winters with wide day–night swings.",
  mumbai:
    "Coastal and humid all year: more than 2,000 mm of rain in the June–September monsoon, salt-laden sea air, and noticeably stronger wind on the upper floors of tall buildings.",
  "north-plains":
    "A composite climate: summers that cross 45°C, cold and often foggy winters, dust and pollution for much of the year, and a July–September monsoon.",
  bengaluru:
    "Mild through the year at roughly 900 m above sea level, with rain from both the south-west and north-east monsoons — often as short, intense storms — and strong daytime sun.",
  "deccan-hot":
    "Deccan-plateau climate: hot, dry summers that regularly cross 40°C, a June–September monsoon with heavy downpours, and short, mild winters.",
  "east-coast":
    "Hot and humid on a cyclone-prone stretch of the Bay of Bengal coast. Storms such as Hudhud (Visakhapatnam, 2014), Vardah (Chennai, 2016) and Fani (Odisha, 2019) caused widespread damage to buildings.",
  coimbatore:
    "Warm but moderated by an altitude of about 400 m, with strong seasonal winds funnelling through the Palakkad Gap and moderate rainfall.",
  "hot-dry":
    "Hot and semi-arid: intense sun, summer highs around 45°C, dust storms before the monsoon, and a short rainy season.",
  "gujarat-coast":
    "Humid and coastal: hot summers, a heavy June–September monsoon and salt in the air. Arabian Sea cyclones such as Tauktae (2021) have hit the Gujarat coast.",
  gangetic:
    "Hot and humid Gangetic-delta climate: a heavy June–September monsoon, violent pre-monsoon nor'westers (Kalbaishakhi) and Bay of Bengal cyclones such as Amphan (2020).",
  doon:
    "Doon Valley climate in the Himalayan foothills: around 2,000 mm of rain a year, mostly July–September, cool winters, warm pre-monsoon summers and a higher seismic zone.",
  "hot-inland":
    "Hot inland climate: dry summers that often cross 40°C, a June–September monsoon and mild winters.",
  kerala:
    "Warm and humid all year, with both the south-west and north-east monsoons bringing heavy rain, and salt-laden sea air along the coast.",
};

// ── Site conditions → what to specify, per service ───────────────────────
export const FLAGS: Record<Flag, { title: string; short: string; by: Record<GuidanceKey, string> }> = {
  salt: {
    title: "Salt air & corrosion",
    short: "salt air",
    by: {
      "structural-glazing": "Use anodising of at least 25 microns (AA25) or PVDF-coated aluminium, and SS 316 fixings — grade 304 tends to tea-stain within a few years in sea air.",
      "curtain-wall": "Brackets and anchors in SS 316 or hot-dip galvanised steel, isolation pads wherever aluminium meets another metal to stop galvanic corrosion, and drained mullions so salty water never sits inside the profile.",
      "acp-cladding": "PVDF-coated panels rather than polyester, sealed or capped routed edges, and aluminium or hot-dip galvanised sub-frames with stainless fixings — plain mild steel rusts behind the panel where nobody sees it.",
      "glass-railing": "SS 316 (marine-grade) spigots, clamps and handrails — 304 tea-stains quickly near the sea — and drained aluminium base shoes.",
      "facade-maintenance": "Salt deposits dull glass and attack coatings if left on, so coastal facades need more frequent cleaning than inland ones, plus a yearly check of fixings and sealant joints.",
      envelope: "Coastal-grade finishes (AA25 anodising or PVDF), SS 316 hardware and drained joints across glazing, cladding and railings.",
    },
  },
  cyclone: {
    title: "Cyclone wind loads",
    short: "cyclone winds",
    by: {
      "structural-glazing": "Glass thickness, silicone bite and anchors sized for the city's design wind speed under IS 875 (Part 3), with laminated glass so a broken pane stays in the frame.",
      "curtain-wall": "Mullion depth, bracket spacing and anchor bolts designed for cyclone-zone pressures; on larger towers, a performance mock-up test (air, water and structural) is worth specifying.",
      "acp-cladding": "Closer sub-frame and fixing spacing at corners and roof edges, where wind suction peaks, with panels checked for suction as well as pressure.",
      "glass-railing": "Laminated toughened glass that stays in place if it breaks, sized for wind on exposed balconies as well as the people load on the handrail.",
      "facade-maintenance": "A pre-monsoon check of fixings, gaskets and loose panels, and an inspection after every cyclone warning.",
      envelope: "Glazing, cladding, louvers and railings all checked against IS 875 (Part 3) wind pressures for the site, with laminated glass wherever breakage would be dangerous.",
    },
  },
  rain: {
    title: "Heavy, wind-driven rain",
    short: "heavy monsoon rain",
    by: {
      "structural-glazing": "A two-line seal — weather silicone outside, a drained secondary line inside — and a site water test on installed glazing before handover.",
      "curtain-wall": "Pressure-equalised, drained joints; factory-sealed unitised panels reduce reliance on site sealant in the monsoon. Stack joints and slab-edge interfaces need the most care.",
      "acp-cladding": "Decide early between sealed joints and an open-joint rainscreen — open joints need a waterproof layer behind — and use UV-stable weather silicone on sealed joints.",
      "glass-railing": "Weep holes or drainage in base channels so water doesn't pond around the glass, and waterproofing wherever fixings go through the slab.",
      "facade-maintenance": "Leak investigation in April–May, before the rains: water-test to find the real entry point instead of re-sealing the whole elevation.",
      envelope: "Installation planned so critical elevations are closed before the monsoon, and glazing water-tested on site before handover.",
    },
  },
  heat: {
    title: "Summer heat & solar gain",
    short: "intense summer heat",
    by: {
      "structural-glazing": "Solar-control or low-E double glazed units (DGU) with a low solar heat gain coefficient (SHGC), and heat-soaked toughened glass to cut the risk of spontaneous breakage.",
      "curtain-wall": "Low-E DGUs with a low SHGC and thermally broken profiles, plus a thermal-stress check on tinted glass that is partly shaded by fins or neighbouring buildings.",
      "acp-cladding": "Joints and slotted fixings that allow for expansion — a 4 m aluminium panel can move 3–4 mm between a cool morning and full sun — and lighter colours, which run cooler.",
      "glass-railing": "Toughened, laminated glass, and handrail finishes that don't get too hot to hold in direct sun.",
      "facade-maintenance": "Heat and UV harden sealants and gaskets over time — check them every year and replace them before they crack and open the joint.",
      envelope: "Glass chosen elevation by elevation for SHGC and U-value, with fins, louvers or deeper reveals on west and south faces.",
    },
  },
  dust: {
    title: "Dust & pollution",
    short: "dust",
    by: {
      "structural-glazing": "Flush structural glazing has no caps to trap dirt, so it stays cleaner. Plan the cleaning access — gondola, building maintenance unit or rope access — at design stage.",
      "curtain-wall": "Agree the cleaning access method before the design is frozen, and avoid horizontal ledges where dust collects and later streaks down the glass.",
      "acp-cladding": "Drip details at panel tops and copings so dirty run-off doesn't streak the face, and finishes that don't show streaks.",
      "glass-railing": "Frameless or slim-cap designs that are easy to wipe, without deep channels that collect grit.",
      "facade-maintenance": "Scheduled cleaning cycles — glass left dirty for long builds up hard deposits that need restoration, not just washing.",
      envelope: "Easy-clean details and a cleaning access plan agreed before the facade design is frozen.",
    },
  },
  swing: {
    title: "Hot summers, cold winters",
    short: "wide seasonal temperature swings",
    by: {
      "structural-glazing": "Insulated glass units with warm-edge spacers to reduce winter condensation, and silicone joints sized for the seasonal movement.",
      "curtain-wall": "Thermally broken mullions and insulated spandrel panels for both cooling and heating seasons, with joints sized for the full yearly temperature range.",
      "acp-cladding": "Slotted fixings that let panels expand and contract through the year without buckling or popping rivets.",
      "glass-railing": "Fixings and gaskets that allow for seasonal movement; toughened glass resists thermal shock.",
      "facade-maintenance": "An annual check of sealant joints — seasonal expansion and contraction works them hardest.",
      envelope: "An envelope designed for both the cooling and heating seasons: insulated glazing, thermal breaks and proper movement joints.",
    },
  },
  seismic: {
    title: "Higher seismic zone",
    short: "a higher seismic zone",
    by: {
      "structural-glazing": "Glass edge clearances and silicone joints designed for inter-storey drift, so panes aren't crushed when the frame moves.",
      "curtain-wall": "Stack joints and slotted brackets that absorb inter-storey drift — interlocking unitised panels handle this well.",
      "acp-cladding": "Slotted sub-frame connections so the cladding moves with the structure instead of tearing at its fixings.",
      "glass-railing": "Laminated glass that stays in place if broken, and anchors designed with proper edge distance in the slab.",
      "facade-maintenance": "An inspection of anchors, brackets and glass after any noticeable tremor.",
      envelope: "Facade connections designed to move with the building's drift, checked by our structural engineer.",
    },
  },
  humidity: {
    title: "Year-round humidity",
    short: "year-round humidity",
    by: {
      "structural-glazing": "Factory structural glazing is preferred over site glazing so silicone cures in controlled conditions; DGU edge seals are the first thing humidity attacks.",
      "curtain-wall": "Unitised panels assembled in the factory so structural silicone cures under control, and drainage for condensation inside the frame.",
      "acp-cladding": "A ventilated cavity behind the panels so trapped moisture can dry out, and sealed panel edges.",
      "glass-railing": "Stainless fittings in 316 grade and drained base channels — mild-steel parts rust under the coating.",
      "facade-maintenance": "Watch for fogged double glazing (a failed edge seal) and damp at inside sills — early signs of seal failure.",
      envelope: "Drainage, ventilation and corrosion-resistant fixings throughout, so moisture has nowhere to sit.",
    },
  },
  wind: {
    title: "High wind at height",
    short: "high wind at height",
    by: {
      "structural-glazing": "Glass and silicone bite sized for the pressure at the top floors and corners — design wind pressure rises with height and peaks near building edges.",
      "curtain-wall": "Unitised panels installed floor by floor from inside suit tall towers; brackets and mullions are sized for top-floor and corner pressures.",
      "acp-cladding": "Closer fixings on upper floors and corners, and pull-out checks on the actual substrate.",
      "glass-railing": "Thicker glass or a top rail on exposed upper-floor balconies, where wind adds to the people load.",
      "facade-maintenance": "Rope-access or gondola inspection of the upper floors, where wind works gaskets and loose panels hardest.",
      envelope: "Wind pressures taken floor by floor from IS 875 (Part 3) — top floors and corners get heavier sections and closer fixings.",
    },
  },
  mild: {
    title: "Mild climate, strong sun",
    short: "strong sun and glare",
    by: {
      "structural-glazing": "With mild temperatures, glare and solar gain drive the glass choice — a selective low-E with good daylight suits deep office floor plates.",
      "curtain-wall": "Specify for daylight and glare control rather than heavy insulation, with external shading on west faces.",
      "acp-cladding": "Heat movement is modest here, so ACP decisions are mostly about fire rating, finish and detailing.",
      "glass-railing": "Clear toughened laminated glass with simple stainless or aluminium hardware usually works; drainage for sudden storms still matters.",
      "facade-maintenance": "A gentler climate, but intense short storms test sealant and drainage — an annual pre-monsoon inspection suits most buildings.",
      envelope: "Glass chosen for daylight and glare first, with shading on the west elevations.",
    },
  },
};

// ── Building types → what suits them, per service ────────────────────────
export const BUILDINGS: Record<BuildingType, { label: string; guide: { path: string; label: string }; by: Record<GuidanceKey, string> }> = {
  "it-park": {
    label: "IT parks & offices",
    guide: { path: "/it-park-facade", label: "IT park facades" },
    by: {
      "structural-glazing": "Structural glazing on podiums, lobbies and feature elevations, often paired with a unitised curtain wall on the tower floors.",
      "curtain-wall": "Unitised curtain wall with low-E DGUs suits large floor plates and lets each floor be closed quickly for interior fit-out.",
      "acp-cladding": "ACP for spandrels, fins, canopies and services blocks, alongside the glazed elevations.",
      "glass-railing": "Laminated glass railings for atriums, mezzanines, staircases and terrace cafeterias.",
      "facade-maintenance": "AMCs that schedule glass cleaning, sealant checks and gasket replacement around occupied floors.",
      envelope: "Unitised curtain wall on the tower, structural glazing at the lobby and ACP on services blocks — one package, one site in-charge.",
    },
  },
  "highrise-residential": {
    label: "High-rise residential",
    guide: { path: "/residential-facade", label: "Residential facades" },
    by: {
      "structural-glazing": "Structural glazing on feature elevations and lobbies; most flats are better served by aluminium windows than full glazing.",
      "curtain-wall": "Semi-unitised or window-wall systems that keep balconies and openable windows workable for residents.",
      "acp-cladding": "FR-grade ACP for feature bands, crowns and podium cladding.",
      "glass-railing": "Toughened laminated balcony and terrace railings, sized for the wind on upper floors.",
      "facade-maintenance": "Society AMCs for window leaks, balcony railing checks and sealant renewal before each monsoon.",
      envelope: "Aluminium windows, balcony glass railings and feature cladding coordinated floor by floor with the civil contractor.",
    },
  },
  hotel: {
    label: "Hotels & hospitality",
    guide: { path: "/hotel-facade", label: "Hotel facades" },
    by: {
      "structural-glazing": "Clear, low-reflectance structural glazing for lobbies, restaurants and double-height spaces.",
      "curtain-wall": "Curtain walls with acoustic laminated DGUs where rooms face busy roads or flight paths.",
      "acp-cladding": "ACP and aluminium cladding for porte-cochères, canopies and signage bands.",
      "glass-railing": "Frameless glass railings for atriums, pool decks and rooftop restaurants.",
      "facade-maintenance": "Maintenance scheduled around occupancy, with quick glass replacement so rooms don't stay out of service.",
      envelope: "Acoustic glazing for rooms, clear glass for public areas and an entrance canopy, delivered around the opening date.",
    },
  },
  hospital: {
    label: "Hospitals & healthcare",
    guide: { path: "/hospital-facade", label: "Hospital facades" },
    by: {
      "structural-glazing": "Structural glazing at entrances and atriums, with laminated glass for safety.",
      "curtain-wall": "Curtain walls with acoustic and solar-control glass; on extensions, installation is sequenced so wards keep running.",
      "acp-cladding": "FR-core ACP is a must — hospital fire NOCs are strict.",
      "glass-railing": "Laminated glass railings with handrails for corridors, ramps and atriums.",
      "facade-maintenance": "Repairs planned around patient areas, with dust and noise controls.",
      envelope: "Fire-rated cladding, safety glass and work planned around patient areas — the approach we followed on Nanavati Max Hospital with L&T.",
    },
  },
  industrial: {
    label: "Factories & industrial",
    guide: { path: "/industrial-facade", label: "Industrial facades" },
    by: {
      "structural-glazing": "Structural glazing is usually limited to the admin block and entrance.",
      "curtain-wall": "Stick or semi-unitised glazing on the admin block; the plant itself usually needs cladding and louvers instead.",
      "acp-cladding": "ACP or aluminium cladding for admin blocks and frontage, with louvers for plant ventilation.",
      "glass-railing": "Glass railings for admin-block staircases and mezzanines; plant areas usually need steel railings.",
      "facade-maintenance": "Leak repairs and glass replacement scheduled around production shifts.",
      envelope: "A durable admin-block facade with cladding and louvers on the plant, built around production.",
    },
  },
  retail: {
    label: "Malls, showrooms & high-street retail",
    guide: { path: "/mall-facade", label: "Mall & retail facades" },
    by: {
      "structural-glazing": "Large structural glazing panes for frontage and display, often with point-fixed glass at the entrance.",
      "curtain-wall": "Curtain wall on the frontage and atrium, with skylights over circulation areas.",
      "acp-cladding": "ACP for signage bands, frontage and brand colours — finish and colour consistency matter most.",
      "glass-railing": "Frameless glass railings for atrium voids and escalator wells.",
      "facade-maintenance": "Night-time maintenance so storefronts stay open.",
      envelope: "Glazed frontage, signage-ready ACP and atrium railings delivered around the opening date.",
    },
  },
  refurb: {
    label: "Older buildings & redevelopment",
    guide: { path: "/maintenance-services", label: "Facade repair & upgrades" },
    by: {
      "structural-glazing": "Re-glazing in structural glazing can modernise an elevation without touching the structure, once the anchors are checked.",
      "curtain-wall": "Semi-unitised systems adapt better to irregular slab edges; anchors are tested on site before the design is frozen.",
      "acp-cladding": "ACP re-cladding on a new sub-frame over the existing wall, after checking the wall's condition.",
      "glass-railing": "Replacing old MS railings with glass needs the slab edge checked for anchor strength first.",
      "facade-maintenance": "A condition survey first, then a prioritised plan — leaks, cracked glass and failed sealant before cosmetic work.",
      envelope: "Survey, anchor tests and a phased re-cladding plan so the building can stay occupied.",
    },
  },
  institutional: {
    label: "Institutional & government",
    guide: { path: "/commercial-building-facade", label: "Commercial & institutional facades" },
    by: {
      "structural-glazing": "Structural glazing for entrances and atriums, specified to the department's approved makes.",
      "curtain-wall": "Curtain walls built to the tender specification and approved-make list, with documentation at every stage.",
      "acp-cladding": "FR-core ACP from approved makes, with test certificates for the file.",
      "glass-railing": "Glass railings with handrails for public staircases and atriums.",
      "facade-maintenance": "AMCs with documented inspections and written condition reports.",
      envelope: "Work to the tender specification and approved-make list, with documentation at every stage.",
    },
  },
};

// ── Services ─────────────────────────────────────────────────────────────
export interface ServiceInfo {
  label: string;
  /** H1 / title pattern. `place` is "in Pune" or "Pan India". */
  heading: (place: string) => string;
  /** Short noun for sentences: "a curtain wall". */
  noun: string;
  /** Noun used before "work" / "projects": "curtain wall". */
  work: string;
  /** Opening words of the meta description. */
  lead: string;
  hub: { path: string; label: string };
  image: string;
  intro: string;
  scope: readonly string[];
  faq: { q: string; a: string };
  costDrivers: string;
  /** Words used to rank our real projects by relevance to this service. */
  rank: string[];
}

export const SERVICE_INFO: Record<ServiceSlug, ServiceInfo> = {
  "facade-contractor": {
    label: "Facade Contractor",
    heading: (p) => `Facade Contractor ${p}`,
    noun: "a facade",
    work: "facade",
    lead: "Facade design, fabrication and installation",
    hub: { path: "/services", label: "All facade services" },
    image: "/Glass installation.webp",
    intro: "Fine Glaze is a facade and fenestration contractor: we design, fabricate and install curtain walls, structural glazing, ACP cladding, louvers, aluminium windows and glass railings, and maintain facades after handover.",
    scope: [
      "Curtain walls — unitised, semi-unitised and stick",
      "Structural glazing and spider / point-fixed glass",
      "ACP and aluminium cladding, louvers and fins",
      "Aluminium windows and doors, skylights and canopies",
      "Glass railings and partitions",
      "Facade maintenance, leak repair and AMCs",
    ],
    faq: {
      q: "What facade work does Fine Glaze do?",
      a: "Curtain walls (unitised and semi-unitised), structural glazing, ACP and aluminium cladding, louvers, skylights and canopies, aluminium windows and doors, glass railings and partitions — plus facade maintenance and AMCs after handover.",
    },
    costDrivers: "the systems involved, glass and aluminium specifications, building height and access, and site logistics",
    rank: ["facade", "curtain wall", "glazing", "acp"],
  },
  "commercial-construction": {
    label: "Commercial Building Facades",
    heading: (p) => `Commercial Building Facades ${p}`,
    noun: "a commercial building facade",
    work: "commercial facade",
    lead: "Complete facade packages for commercial buildings",
    hub: { path: "/commercial-building-facade", label: "Commercial building facades" },
    image: "/Business park.webp",
    intro: "The full facade package for commercial buildings — offices, IT parks, hospitals, hotels and malls — handled by one team: curtain wall, structural glazing, ACP, louvers, windows and railings, coordinated with the architect, PMC and main contractor.",
    scope: [
      "One point of responsibility for the whole facade package",
      "Design coordination with the architect, PMC and structural consultant",
      "In-house shop drawings, engineering checks and GFC approval",
      "Fabrication, installation and site safety under one site in-charge",
      "Testing, snagging, documentation and DLP support as per contract",
    ],
    faq: {
      q: "Can you take the whole facade package?",
      a: "Yes — curtain wall, structural glazing, ACP, louvers, aluminium windows and glass railings under one contract and one site in-charge, so the interfaces between systems are our responsibility rather than a gap between vendors.",
    },
    costDrivers: "the mix of systems, glass and aluminium specifications, building height, site logistics and the programme",
    rank: ["campus", "office", "commercial", "hospital", "hotel"],
  },
  "structural-glazing": {
    label: "Structural Glazing",
    heading: (p) => `Structural Glazing Contractor ${p}`,
    noun: "structural glazing",
    work: "structural glazing",
    lead: "Structural glazing design and installation",
    hub: { path: "/structural-glazing", label: "Structural glazing" },
    image: "/Glazing.webp",
    intro: "Structural glazing bonds glass to an aluminium frame with structural silicone, giving a flush, frameless-looking facade. We design, fabricate and install it — from shop drawings and the wind-load check to the site water test.",
    scope: [
      "Shop drawings and a structural check against the project wind load",
      "Aluminium sub-frames fabricated and finished to specification",
      "Glass from Saint-Gobain or the project's approved list — DGU, laminated, low-E",
      "DOWSIL structural and weather silicone or approved equivalents",
      "Installation, then a site water penetration test before handover",
    ],
    faq: {
      q: "Which glass and silicone do you use?",
      a: "Glass from Saint-Gobain or other brands on the project's approved list — single, laminated or double glazed (DGU), with low-E or solar-control coatings as the design needs — and DOWSIL structural and weather silicone or approved equivalents. Mill and test certificates come with the material.",
    },
    costDrivers: "glass type (single, laminated or DGU, and coatings), aluminium section and finish, panel size, building height and access, and the testing the specification asks for",
    rank: ["structural glazing", "glazing", "glass"],
  },
  "curtain-wall": {
    label: "Curtain Wall Systems",
    heading: (p) => `Curtain Wall Contractor ${p}`,
    noun: "a curtain wall",
    work: "curtain wall",
    lead: "Curtain wall design, fabrication and installation",
    hub: { path: "/curtain-wall-systems", label: "Curtain wall systems" },
    image: "/Unitized.webp",
    intro: "A curtain wall is a non-load-bearing aluminium-and-glass skin hung from the building's slabs. We work with unitised systems (panels assembled in the factory) and semi-unitised or stick systems (assembled on site), and choose with you based on height, schedule and access.",
    scope: [
      "System selection — unitised, semi-unitised or stick",
      "Shop drawings, bracket and anchor design, and engineering check",
      "Fabrication batched per floor at our Pisoli unit or approved vendors",
      "Installation sequenced floor by floor under a dedicated site in-charge",
      "Site water test, snag closure and DLP support as per contract",
    ],
    faq: {
      q: "Unitised or semi-unitised — which suits my building?",
      a: "Unitised panels are assembled and sealed in the factory and installed from inside the floor plate, so they suit taller buildings and tight schedules. Semi-unitised and stick systems need less set-up and suit low- to mid-rise buildings or irregular geometry. We recommend one after seeing the drawings and the site.",
    },
    costDrivers: "system type (unitised, semi-unitised or stick), glass specification, aluminium weight and finish, building height, and the testing required",
    rank: ["curtain wall", "unitized", "unitised"],
  },
  "acp-cladding": {
    label: "ACP Cladding",
    heading: (p) => `ACP Cladding Contractor ${p}`,
    noun: "ACP cladding",
    work: "ACP cladding",
    lead: "FR-grade ACP cladding supply and installation",
    hub: { path: "/acp-aluminium-cladding", label: "ACP & aluminium cladding" },
    image: "/Panel.webp",
    intro: "Aluminium composite panel (ACP) cladding gives a building a clean, weather-proof skin. We prepare panels in our own unit — routing, grooving and folding — and install them on a sub-frame designed for the building's wind load.",
    scope: [
      "Panel layout and sub-frame design",
      "FR (fire-retardant) core panels from Alubond or other approved brands",
      "Routing, grooving and panel preparation at our Pisoli unit",
      "Sub-frame and panel installation with sealed or open joints",
      "Final alignment, protective-film removal and handover",
    ],
    faq: {
      q: "Do I need FR-grade ACP?",
      a: "For most commercial and taller buildings, yes. The National Building Code (NBC 2016) sets fire-safety requirements for external cladding, and fire NOCs for taller buildings commonly require fire-retardant (FR) core panels instead of polyethylene core. We supply FR-core panels from approved brands with their test certificates.",
    },
    costDrivers: "panel brand, thickness and core (FR), coating (PVDF or polyester), sub-frame material, panel sizes and folds, and building height and access",
    rank: ["acp", "cladding", "panel"],
  },
  "glass-railing": {
    label: "Glass Railings",
    heading: (p) => `Glass Railing Installation ${p}`,
    noun: "a glass railing",
    work: "glass railing",
    lead: "Toughened laminated glass railings",
    hub: { path: "/glass-railings", label: "Glass railings" },
    image: "/Custom railing.webp",
    intro: "Glass railings for balconies, staircases, terraces and atriums — frameless on spigots or base channels, or with a top handrail. We size the glass for the height and load and detail the fixings into the slab.",
    scope: [
      "Railing design: spigot, base channel, standoff or framed",
      "Toughened laminated glass sized for height and load",
      "SS 304 / 316 or aluminium hardware chosen for the exposure",
      "Anchoring and waterproofing at the slab edge",
      "Installation, alignment and handover",
    ],
    faq: {
      q: "What glass is safe for railings?",
      a: "Toughened laminated glass, so the panel stays in place even if one ply breaks. Thickness depends on railing height, span and the people load; IS 16231 (Part 4) covers glass safety where people can fall or impact it. A top handrail adds safety on exposed or high balconies.",
    },
    costDrivers: "glass thickness and interlayer, fixing type (spigot, channel or standoff), stainless grade, handrail, running length and access",
    rank: ["railing", "balcony", "terrace"],
  },
  "facade-maintenance": {
    label: "Facade Maintenance",
    heading: (p) => `Facade Maintenance & Repair ${p}`,
    noun: "facade maintenance",
    work: "facade maintenance",
    lead: "Facade maintenance, leak repair and AMC",
    hub: { path: "/maintenance-services", label: "Facade maintenance & AMC" },
    image: "/Amc.webp",
    intro: "Maintenance and repair for glazing, ACP and windows — including facades we did not install. We trace the cause of leaks, replace broken or fogged glass, redo failed sealant and run annual maintenance contracts (AMC).",
    scope: company.maintenanceScope,
    faq: {
      q: "Can you maintain a facade another contractor installed?",
      a: "Yes. We start with an inspection and a written condition report, then quote the repair or an AMC. Leak investigation, glass replacement and sealant work don't depend on who installed the facade.",
    },
    costDrivers: "building height and access (rope access, gondola or scaffold), facade area, the number of panes or joints involved, and visit frequency for an AMC",
    rank: ["maintenance", "sealant", "repair", "glass"],
  },
};

// ── Coverage (how we actually work in a place) ───────────────────────────
export function coverageText(c: Coverage, name: string, km?: number, nearest?: { title: string; km: number }): { title: string; body: string; points: string[] } {
  const far = km === undefined ? "" : ` It is ${roughKm(km)} from our Pisoli fabrication unit as the crow flies.`;
  const near = nearest ? ` Our nearest documented project, ${nearest.title}, is ${roughKm(nearest.km)} away.` : "";
  const survey = `Site survey and measurement at your ${name} site before we quote.`;
  const common = [
    "Shop drawings and engineering checks done in-house by our design and structural team.",
    `Material procured to the project's approved vendor list, with mill and test certificates.`,
    "A dedicated site in-charge and supervisor, with our safety officer's work-at-height controls.",
  ];
  switch (c) {
    case "base":
      return {
        title: "Close to our Pune base",
        body: `${name} is served directly from our office at Mohammed Wadi and our fabrication unit at Pisoli, so site visits, supervision and material despatch don't involve long-distance travel.${far}`,
        points: [survey, ...common],
      };
    case "mumbai":
      return {
        title: "Our second operating city",
        body: `Mumbai is where most of our documented projects are. For ${name}, material is fabricated at our Pisoli unit in Pune and despatched by road (Pune to Mumbai is about 150 km), with the site run by our own team.${far}`,
        points: [survey, ...common],
      };
    case "maharashtra":
      return {
        title: "Within road reach of our Pune unit",
        body: `${name} is within a day's road despatch from our fabrication unit in Pune. We take up projects here after a site visit, with design and fabrication in Pune and a site team mobilised for installation.${far}`,
        points: [`A site visit in ${name} first — measurement, access study and scope freeze.`, ...common],
      };
    case "national":
      return {
        title: "How we take up projects across India",
        body: `Fine Glaze is based in Pune, with Mumbai as our second operating city. Outside Maharashtra we take up projects after a site visit: design, engineering and fabrication run from Pune, and a site in-charge and installation team are mobilised for the installation period.`,
        points: ["A site visit first — measurement, access study and scope freeze.", ...common],
      };
    default:
      return {
        title: `How we work in ${name}`,
        body: `We don't have an office in ${name} — Fine Glaze is based in Pune, with Mumbai as our second operating city — and we say so upfront. We take up projects here after a site visit: design, engineering and fabrication run from Pune, and a site in-charge and installation team are mobilised to ${name} for the installation period.${far}`,
        points: ["A site visit first — measurement, access study and scope freeze.", ...common],
      };
  }
}

// ── Page assembly ────────────────────────────────────────────────────────
export const placePhrase = (loc: CityLocation) =>
  loc.coverage === "national" ? (loc.name === "India" ? "in India" : loc.name === "All India" ? "across India" : "Pan India") : `in ${loc.full ?? loc.name}`;

export interface CityPage {
  h1: string;
  title: string;
  description: string;
  intro: string;
  climate: string;
  guidance: { title: string; text: string }[];
  buildings: { label: string; text: string; guide: { path: string; label: string } }[];
  /** Distance from the Pisoli fabrication unit, if the place has a centre. */
  km?: number;
  /** Our documented projects, nearest first. */
  nearProjects: { slug: string; km: number }[];
  faqs: { q: string; a: string }[];
}

const listOf = (items: string[]) =>
  items.length <= 1 ? items.join("") : `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;

export function buildCityPage(service: ServiceSlug, location: string): CityPage {
  const loc = LOCATIONS[location];
  const svc = SERVICE_INFO[service];
  const key = guidanceKey(service);
  const flags = loc.flags.slice(0, 4);
  const place = placePhrase(loc);
  const where = loc.coverage === "national" ? "across India" : `in ${loc.name}`;
  const km = loc.geo ? distanceKm(FABRICATION_UNIT_GEO, loc.geo) : undefined;
  const nearProjects = nearestProjects(location, 4);

  const guidance = flags.map((f) => ({ title: FLAGS[f].title, text: FLAGS[f].by[key] }));
  const buildings = loc.buildings.map((b) => ({ label: BUILDINGS[b].label, text: BUILDINGS[b].by[key], guide: BUILDINGS[b].guide }));
  const conditions = flags.slice(0, 2).map((f) => FLAGS[f].short).join(" and ");

  const h1 = svc.heading(place);
  const deliver =
    loc.coverage === "base"
      ? "From our Pune base"
      : loc.coverage === "mumbai"
        ? "Mumbai is our second operating city"
        : "Pune-based, projects across India";
  const verb = service === "facade-maintenance" ? "planned for" : "specified for";
  const description = `${svc.lead} ${place}, ${verb} ${conditions}. ${deliver}. Call ${company.phone.mobileDisplay}.`;

  const coverageFaq = (() => {
    switch (loc.coverage) {
      case "base":
        return { q: `Do you work in ${loc.name}?`, a: `Yes. ${loc.name} is close to our Pune office and Pisoli fabrication unit, so we can survey, quote and supervise ${svc.work} work here directly.` };
      case "mumbai":
        return { q: `Do you take up ${svc.work} work in ${loc.name}?`, a: `Yes. Mumbai is our second operating city and most of our documented projects are in the Mumbai region. Material is fabricated in Pune and the site is run by our own team.` };
      case "national":
        return { q: "Do you take up projects outside Maharashtra?", a: "Yes, after a site visit. Design, engineering and fabrication run from Pune, and a site in-charge and installation team are mobilised for the installation period." };
      default:
        return { q: `Do you have an office in ${loc.name}?`, a: `No. Fine Glaze is based in Pune (office at Mohammed Wadi, fabrication unit at Pisoli), with Mumbai as our second operating city. We take up ${svc.work} projects in ${loc.name} after a site visit and mobilise a site team for installation.` };
    }
  })();

  const title = (slug: string) => projectsData[slug]?.title ?? slug;
  const localSlugs = loc.projects
    ? Object.entries(projectsData)
        .filter(([, p]) => loc.projects!.match.some((m) => p.location.includes(m)) && !(loc.projects!.exclude ?? []).some((x) => p.location.includes(x)))
        .map(([slug]) => slug)
    : [];
  const experienceFaq = (() => {
    if (loc.coverage === "national") {
      return {
        q: "Where are your completed projects?",
        a: `In Pune and the Mumbai region — ${company.stats.sqmDelivered} sqm of facade across ${company.stats.projectRecords} documented project records, including Embassy 247 (Vikhroli), the new terminal at Pune International Airport, the LTIMindtree Mensa campus (Mahape) and Nanavati Max Hospital.`,
      };
    }
    if (localSlugs.length) {
      const nearest = nearProjects[0];
      return {
        q: `Have you done similar work near ${loc.name}?`,
        a: `Yes. Our documented work ${loc.projects!.label} includes ${listOf(localSlugs.slice(0, 4).map(title))}.${nearest ? ` The nearest, ${title(nearest.slug)}, is ${roughKm(nearest.km)} away.` : ""} Each project page lists the client, scope and status.`,
      };
    }
    return {
      q: `Have you done projects in ${loc.name}?`,
      a: `Not yet. Our documented projects are in Pune and the Mumbai region; the nearest to ${loc.name} are ${listOf(nearProjects.slice(0, 3).map((n) => title(n.slug)))}, ${nearProjects[0] ? roughKm(nearProjects[0].km) : "some distance"} away. The same team, process and quality checks go to every site.`,
    };
  })();

  const priceFaq = {
    q: `How is the price for ${svc.noun} ${where} worked out?`,
    a: `We quote from drawings or a site visit, not a flat rate. The main drivers are ${svc.costDrivers}.${loc.coverage === "india" || loc.coverage === "national" || loc.coverage === "maharashtra" ? " For projects away from Pune, transport and the site team's mobilisation are shown as separate lines so you can see them." : ""}`,
  };

  return {
    h1,
    title: `${h1} | Fine Glaze`,
    description,
    intro: `${loc.context} ${svc.intro}`,
    climate: CLIMATE[loc.climate],
    guidance,
    buildings,
    km,
    nearProjects,
    faqs: [coverageFaq, experienceFaq, svc.faq, priceFaq],
  };
}
