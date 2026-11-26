/**
 * Fine Glaze — verified company facts.
 *
 * Every number and credential here is taken from the official Company Profile
 * 2026–27 (public/docs/fine-glaze-company-profile.pdf). Pages, schema and
 * llms.txt should read from this file instead of hard-coding their own figures,
 * so the website never says something the profile does not.
 *
 * Before changing a value, update the profile (or confirm it in writing) first.
 */

export const SITE_URL = "https://fineglaze.com";

export const company = {
  name: "Fine Glaze",
  legalStatus: "Proprietorship firm, registered in Pune, Maharashtra",
  gstin: "27BFJPG1853A1ZU",
  trademark: "Fine Glaze — registered word mark",
  /** Certification is NOT yet granted. Always present it as "in process". */
  isoStatus: "ISO 9001, 14001 & 45001 certification in process",
  qualitySystem: "ISO 9001, 14001, 45001, in process",

  phone: {
    mobileDisplay: "+91 83692 33566",
    mobileE164: "+918369233566",
    officeDisplay: "020-68299-428",
    officeE164: "+912068299428",
  },
  whatsapp: "918369233566",
  email: "info@fineglaze.com",

  address: {
    street:
      "A3 LW-13, Pragati Serene Building, Sr.No.2, HDFC Bank Chowk, Plot B, Autadwadi Handewadi, Mahadev Wadi, Mohammed Wadi",
    locality: "Pune",
    region: "Maharashtra",
    postalCode: "411060",
    country: "IN",
    short: "Mohammed Wadi (Undri), Pune 411060",
    geo: { lat: 18.4529, lng: 73.9072 },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Fine+Glaze+A3+LW-13+Pragati+Serene+Mohammed+Wadi+Pune+411060",
  },
  /** Registered office as stated in the profile's compliance section. */
  registeredOffice: "Undri, Pune, Maharashtra 411060",
  hours: { days: "Monday – Saturday", opens: "09:00", closes: "18:00" },

  /** Short company description, from "Who we are". */
  description:
    "Fine Glaze is a specialist facade contractor. Design, fabrication, installation and long-term maintenance are handled by one accountable team.",
  tagline: "Facade specialists, Mumbai and Pune",

  fabricationUnit: {
    location: "Pisoli, Pune",
    summary: "An interim unit at Pisoli, Pune, feeding both Pune and Mumbai sites. About 2,500 sq ft covered area.",
    areaSqft: "~2,500",
    capability: [
      "Aluminium and mild steel cutting, fabrication and assembly",
      "ACP routing, grooving and panel preparation",
      "Railing, louver and framing sub-assembly",
      "Material inward check and stage inspection at source",
      "Project-batched output despatched directly to site",
    ],
    note: "Expansion is planned as the order book grows; heavy processing is outsourced to approved vendors in the interim.",
  },

  /** Where our offices and completed work are. We take projects across India. */
  operatingRegions: ["Pune", "Mumbai"],
  serviceArea: ["Pune & PCMC", "Mumbai", "Navi Mumbai", "Thane", "Panvel"],
  serviceAreaNote:
    "We are based in Pune and Mumbai and take facade projects across India.",

  stats: {
    projectRecords: "16",
    projectRecordsLabel: "project records documented in our company profile",
    coreTeam: "40+",
    coreTeamLabel: "core engineering, supervision and site team",
    cities: "2",
    citiesLabel: "cities, Pune and Mumbai, with expansion planned",
    fabricationSqft: "~2,500",
    fabricationLabel: "sq ft fabrication unit at Pisoli, Pune",
  },

  award: {
    title: "Best Vendor Performance 2024",
    by: "Embassy REIT",
    year: 2024,
    citation: "For successfully completing the Embassy 247, Vikhroli project.",
  },

  founder: {
    name: "Deepak Gupta",
    role: "Founder & Director · QHSE & Design Lead",
    bio: "B.E. Civil with 11+ years in the facade industry, including multinational experience with the Al Ghurair Group before founding Fine Glaze. He leads design direction and overall project delivery.",
  },

  team: [
    { name: "Harishankar Chowdhary", role: "Operation Manager", note: "30+ years of experience in the facade industry; worked with an MNC on multiple projects" },
    { name: "Kavya Gupta", role: "Marketing Head", note: "10+ years in marketing and client relations" },
    { name: "Rohit", role: "Chief Accountant", note: "Accounts and finance management" },
    { name: "Yogesh", role: "Design Head", note: "Design and QHSE lead team" },
    { name: "Swikrut", role: "Structural Engineer", note: "Design and QHSE lead team" },
    { name: "Akash", role: "Safety Officer", note: "Oversees elevation work across active sites" },
  ],
  teamWider: "40+ core team across engineering, supervision and site execution supporting the leadership.",


  mission:
    "Making Fine Glaze a well-established and profitable company in the facade industry, through excellent service for the customer and good practices.",
  vision:
    "Making Fine Glaze a well-renowned company that develops exceptionally innovative facade products, making buildings more energy efficient, sustainable and of high quality. The environment is equally important to us, and we strive towards a more sustainable future.",

  materialPartners: [
    { category: "Glass", detail: "Saint-Gobain, with other major Indian float and processing brands" },
    { category: "ACP & cladding", detail: "Alubond, with other major approved composite panel brands" },
    { category: "Sealants", detail: "DOWSIL structural and weather silicone, and approved equivalents" },
    { category: "Aluminium systems", detail: "Extrusions from major Indian mills, anodised or powder coated to spec" },
    { category: "Stainless & mild steel", detail: "Sections, sheets and hardware against the project specification" },
    { category: "Fittings & accessories", detail: "Major approved brands for tracks, locks, friction stays and gaskets" },
  ],
  materialPartnersNote:
    "Where a project names an approved vendor list, material is procured strictly from that list, supported by mill and test certificates.",

  /** Clients exactly as listed in the company profile. */
  clients: [
    { name: "Embassy REIT", work: "Embassy 247, Vikhroli · Embassy Techzone, Pune" },
    { name: "L&T Construction", work: "LTIMindtree, Mahape · Nanavati Max Hospital" },
    { name: "Jindal Stainless Limited", work: "Pune International Airport" },
    { name: "Nirmaann Encon Developer", work: "Nirmaann Estrellaa, Pune" },
    { name: "Hatchway Windoor Pvt. Ltd.", work: "SSG Honesty, Panvel" },
    { name: "Rockfort Estate Developers", work: "Residential facade works" },
  ],

  services: [
    { name: "Curtain Wall Systems", subs: ["Unitized", "Stick System", "Semi-Unitized", "Point-Supported Glass Wall"] },
    { name: "Structural Glazing", subs: ["2-Side", "4-Side", "Spider / Point-Fixed", "Frameless Glass Canopies"] },
    { name: "Windows & Doors", subs: ["Sliding & Tilt-Turn Windows", "Casement & Awning", "Thermal Break Systems", "Sliding & Folding Doors"] },
    { name: "Louvers & Sun Control", subs: ["Fixed Louvers", "Operable Louvers", "Motorised Sun Control", "Vertical Fins & Screens"] },
    { name: "ACP / Metal Cladding", subs: ["PVDF Coated", "PE Coated", "Wood-Grain & Stone", "Mirror & Metallic Finish"] },
    { name: "Glass Railings", subs: ["Frameless Glass Railings", "Semi-Frameless Systems", "Standoff & Spigot Fittings"] },
    { name: "Skylights & Canopies", subs: ["Engineered Glass Skylights", "Spider Canopies", "Structural Glass Roofs", "Retractable Systems"] },
    { name: "Glass Partitions", subs: ["Frameless Office Partitions", "Acoustic Glass", "Switchable Smart Glass", "Shower Enclosures"] },
    { name: "Perforated Screens", subs: ["Perforated Metal Panels", "Decorative Sun-Shading Screens", "Custom Pattern Jali Work"] },
    { name: "Maintenance & AMC", subs: ["Sealant Renewal & Waterproofing", "Glass Panel Replacement", "Facade Cleaning", "Annual Maintenance Contract"] },
  ],
  designFabrication: [
    { title: "Facade designing", desc: "Our designers create a custom facade to suit your building's style, its surroundings and your budget." },
    { title: "Facade fabrication", desc: "Our fabrication facility is equipped with current technology and equipment, so every facade is made to a high standard of quality and precision." },
    { title: "Facade installation", desc: "Our experienced team installs your facade safely and efficiently, with minimal disruption to your business or daily routine." },
    { title: "Facade maintenance", desc: "Specialist facade glass cleaning and restoration of your building's glass." },
  ],

  deliveryStages: [
    { title: "Enquiry & site survey", desc: "Measurement, access study and scope freeze with client and consultant." },
    { title: "Design & shop drawings", desc: "Fabrication and installation drawings prepared in-house for approval." },
    { title: "Engineering check", desc: "Member sizing, fixing and anchorage verified against project wind load." },
    { title: "Approval & GFC", desc: "Drawings routed through architect, PMC and client until GFC release." },
    { title: "Fabrication", desc: "Cutting, assembly and finishing at the Pisoli unit, batched per project." },
    { title: "Installation", desc: "Sequenced erection under a dedicated site incharge and supervisor." },
    { title: "Testing & snagging", desc: "Site water penetration test; snag register raised and closed." },
    { title: "Handover & DLP", desc: "Documentation handover and defect liability support as per contract." },
  ],

  qualityStages: [
    { title: "Material inward", desc: "Section, glass and panel checked against the approved spec on receipt." },
    { title: "Fabrication", desc: "Dimensional and finish check at the workshop before despatch." },
    { title: "Installation", desc: "Line, level, plumb and fixing verified floor by floor." },
    { title: "Pre-handover", desc: "Full elevation walkthrough with client and consultant." },
  ],
  testing: [
    "Site water penetration test on installed glazing.",
    "Third-party air leakage, water penetration and structural testing to ASTM, arranged on request through an accredited laboratory.",
  ],

  safety: [
    { title: "Dedicated Safety Officer", desc: "A nominated safety officer oversees elevation work across all active sites." },
    { title: "Work-at-height records", desc: "Height-work documentation maintained and available for client and PMC audit." },
    { title: "Personal protection", desc: "Full body harness, lifeline and anchorage on every elevation and terrace activity." },
    { title: "Daily controls", desc: "Toolbox talk before each shift and permit-to-work coordination with the main contractor." },
    { title: "Material handling", desc: "Glass handling, edge protection and debris control protocol on every floor." },
  ],

  maintenanceScope: [
    "Annual maintenance contracts for glazing, glass and cladding",
    "Facade glass cleaning and restoration",
    "Glass replacement and breakage response",
    "Leakage investigation and rectification",
    "Sealant re-application and joint repair",
    "Periodic facade inspection with a written condition report",
  ],

  defectLiability: "Defect liability (DLP) support as per contract terms.",
  runningContract: { name: "Embassy Techzone", place: "Hinjewadi, Pune", client: "Embassy REIT", status: "Ongoing" },

  linkedin: "https://www.linkedin.com/company/fine-glaze",
  profilePdf: "/docs/fine-glaze-company-profile.pdf",
} as const;

export const telHref = `tel:${company.phone.mobileE164}`;
export const officeTelHref = `tel:${company.phone.officeE164}`;
export const whatsappHref = (text = "Hi Fine Glaze, I'd like to discuss a facade project.") =>
  `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(text)}`;
