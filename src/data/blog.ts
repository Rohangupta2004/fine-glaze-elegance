export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  date: string;
  readTime: string;
  category: string;
  heroImage: string;
  excerpt: string;
  content: Section[];
}

interface Section {
  heading: string;
  body: string;
  list?: string[];
  table?: { headers: string[]; rows: string[][] };
}

export const blogPosts: Record<string, BlogPost> = {
  "structural-glazing-cost-india-2026": {
    slug: "structural-glazing-cost-india-2026",
    title: "Structural Glazing Cost Per Sq Ft in India (2026 Price Guide)",
    metaTitle: "Structural Glazing Cost Per Sq Ft in India 2026 | Price Guide – Fine Glaze",
    metaDescription: "Complete pricing guide for structural glazing in India. 2-side glazing: ₹350-550/sq ft, 4-side: ₹500-800/sq ft, Spider glazing: ₹800-1500/sq ft. Factors that affect cost explained.",
    keywords: "structural glazing cost per sq ft, structural glazing price India, glass facade cost, glazing rate 2026, spider glazing cost, curtain wall price",
    date: "2026-04-14",
    readTime: "8 min read",
    category: "Pricing Guide",
    heroImage: "/Glazing.webp",
    excerpt: "A detailed breakdown of structural glazing costs in India for 2026 — covering 2-side, 4-side, spider glazing, and what factors drive the price up or down.",
    content: [
      {
        heading: "How Much Does Structural Glazing Cost in India?",
        body: "Structural glazing is one of the most sought-after facade solutions in India for commercial buildings, showrooms, and premium residences. The cost varies significantly based on the type of system, glass specification, and project complexity. Here's a comprehensive breakdown for 2026.",
      },
      {
        heading: "Price Range by System Type",
        body: "The following table provides the current market rates for different structural glazing systems in India:",
        table: {
          headers: ["System Type", "Price Range (₹/sq ft)", "Best For"],
          rows: [
            ["2-Side Structural Glazing", "₹350 – ₹550", "Low-rise commercial, showrooms"],
            ["4-Side Structural Glazing", "₹500 – ₹800", "Mid-rise offices, IT parks"],
            ["Spider Glazing", "₹800 – ₹1,500", "Lobbies, atriums, feature walls"],
            ["Unitized Curtain Wall", "₹650 – ₹1,200", "High-rise towers (20+ floors)"],
            ["Point-Fixed Glazing", "₹900 – ₹1,800", "Architectural statement facades"],
          ],
        },
      },
      {
        heading: "7 Factors That Affect Structural Glazing Cost",
        body: "Understanding what drives cost helps you make better budgeting decisions:",
        list: [
          "Glass Type & Thickness — DGU (Double Glazed Unit) costs 40-60% more than single glazing. Low-E coated glass adds ₹80-150/sq ft.",
          "Wind Load Requirements — High-rise buildings (above 50m) need thicker mullions and structural silicone, adding 15-25% to cost.",
          "Aluminium Profile Grade — 6063-T6 alloy is standard. Marine-grade or powder-coated profiles cost more.",
          "Silicone Brand — Dow Corning/Sika structural silicone costs more but carries 25-year warranty.",
          "Building Height — Every 10 floors increases logistics, scaffolding, and safety costs by ~10%.",
          "Project Location — Mumbai projects cost 10-15% more than Pune due to labour and logistics.",
          "Quantity & Scale — Projects above 10,000 sq ft get 8-12% volume discounts.",
        ],
      },
      {
        heading: "How to Reduce Structural Glazing Cost Without Compromising Quality",
        body: "Here are practical strategies we recommend to our clients:",
        list: [
          "Use value-engineered glass — 6mm toughened + 6mm toughened DGU instead of 8+8mm where wind loads permit.",
          "Opt for stick system over unitized for buildings under 8 floors — saves 20-30%.",
          "Choose standard aluminium finishes (natural anodised) over custom PVDF colours.",
          "Order all glass from a single manufacturer to get bulk pricing.",
          "Plan facade work during non-monsoon months to avoid weather delays and premium labour rates.",
        ],
      },
      {
        heading: "Get an Accurate Quote for Your Project",
        body: "Every project is unique. The rates above are market estimates — your actual cost depends on your building's specific requirements. At Fine Glaze, we provide free site visits, detailed BOQ (Bill of Quantities), and transparent pricing with no hidden costs. Call us at +91 8369233566 or visit our contact page to get a customised quotation within 48 hours.",
      },
    ],
  },

  "unitized-vs-stick-system-curtain-wall": {
    slug: "unitized-vs-stick-system-curtain-wall",
    title: "Unitized vs Stick System Curtain Wall: Which is Better?",
    metaTitle: "Unitized vs Stick System Curtain Wall – Complete Comparison | Fine Glaze",
    metaDescription: "Detailed comparison of unitized and stick system curtain walls. Learn which system suits your building height, budget, and timeline. Expert guide by Fine Glaze.",
    keywords: "unitized vs stick system, curtain wall comparison, unitized curtain wall advantages, stick system facade, which curtain wall system, facade system types",
    date: "2026-03-08",
    readTime: "6 min read",
    category: "Technical Guide",
    heroImage: "/Unitized.webp",
    excerpt: "Should you choose unitized or stick system for your building? A detailed comparison covering cost, speed, quality, weather resistance, and suitability.",
    content: [
      {
        heading: "Understanding Curtain Wall Systems",
        body: "A curtain wall is a non-structural exterior wall system that hangs from the building's structural frame like a 'curtain'. It protects the interior from weather while allowing natural light. The two primary systems are Stick System (assembled on-site) and Unitized System (factory-assembled panels).",
      },
      {
        heading: "Head-to-Head Comparison",
        body: "Here's how the two systems compare across key parameters:",
        table: {
          headers: ["Parameter", "Stick System", "Unitized System"],
          rows: [
            ["Assembly", "On-site, piece by piece", "Factory-assembled panels"],
            ["Best For", "Buildings up to 8 floors", "High-rises 10+ floors"],
            ["Installation Speed", "Slower (sequential)", "40% faster (parallel)"],
            ["Quality Control", "Depends on site conditions", "Factory-controlled precision"],
            ["Weather Dependency", "High — rain stops work", "Low — install in any weather"],
            ["Cost (₹/sq ft)", "₹350 – ₹550", "₹650 – ₹1,200"],
            ["Waterproofing", "Site-applied sealant", "Factory-sealed EPDM gaskets"],
            ["Labour Required", "More skilled labour on-site", "Less on-site, more in factory"],
          ],
        },
      },
      {
        heading: "When to Choose Stick System",
        body: "Stick system is the right choice when:",
        list: [
          "Building height is under 8 floors",
          "Budget is the primary constraint",
          "The facade design has many non-standard shapes",
          "Site access allows for scaffolding and material staging",
          "The project timeline is flexible",
        ],
      },
      {
        heading: "When to Choose Unitized System",
        body: "Unitized is the better choice when:",
        list: [
          "Building exceeds 10 floors",
          "Construction timeline is aggressive",
          "Quality consistency is critical (corporate/premium projects)",
          "Weather-independent installation is needed (monsoon regions)",
          "The building has a repetitive floor plate design",
        ],
      },
      {
        heading: "Fine Glaze's Recommendation",
        body: "At Fine Glaze, we've installed both systems across 10+ landmark projects. Our recommendation: for buildings under 8 floors in Maharashtra, stick system offers the best value. For high-rises and premium corporate projects, unitized is worth the investment — the speed advantage alone saves 4-6 weeks on a 20-story building. Contact us for a system recommendation specific to your project.",
      },
    ],
  },

  "types-of-glass-for-building-facades": {
    slug: "types-of-glass-for-building-facades",
    title: "7 Types of Glass Used in Building Facades in India",
    metaTitle: "7 Types of Glass for Building Facades India | Complete Guide – Fine Glaze",
    metaDescription: "Learn about the 7 types of glass used in Indian building facades: toughened, laminated, DGU, Low-E, reflective, frosted & smart glass. Pros, cons, and costs explained.",
    keywords: "types of glass for facades, toughened glass building, DGU glass facade, Low-E glass India, laminated glass facade, reflective glass building, smart glass",
    date: "2026-02-19",
    readTime: "7 min read",
    category: "Knowledge Base",
    heroImage: "/Glass.webp",
    excerpt: "From toughened glass to smart switchable glass — a complete guide to the 7 types of glass used in modern Indian building facades.",
    content: [
      {
        heading: "Why Glass Selection Matters",
        body: "The glass you choose for your building facade affects energy efficiency, safety, aesthetics, sound insulation, and maintenance costs for the next 20-30 years. In India's diverse climate — from humid Mumbai to hot Pune summers — the right glass can reduce AC costs by 35% and prevent UV damage to interiors.",
      },
      {
        heading: "1. Toughened (Tempered) Glass",
        body: "Toughened glass is 4-5x stronger than regular annealed glass. When it breaks, it shatters into small, dull cubes instead of sharp shards — making it a safety requirement for facades. Available in 6mm to 19mm thickness. Cost: ₹120-280/sq ft.",
      },
      {
        heading: "2. Laminated Safety Glass",
        body: "Two or more glass layers bonded with PVB or SGP interlayer. Even if broken, the glass stays in place — critical for overhead glazing, skylights, and hurricane-prone areas. Also provides UV filtration (blocks 99% UV rays) and sound dampening. Cost: ₹200-450/sq ft.",
      },
      {
        heading: "3. Double Glazed Unit (DGU) Glass",
        body: "Two glass panes separated by an air or argon gas gap (typically 12mm). DGU reduces heat transfer by 50-60% compared to single glazing, dramatically cutting AC power consumption. Essential for LEED/IGBC green building certification. Cost: ₹350-600/sq ft.",
      },
      {
        heading: "4. Low-E (Low Emissivity) Glass",
        body: "A microscopically thin metallic coating on the glass surface that reflects heat while allowing visible light to pass through. Reduces Solar Heat Gain Coefficient (SHGC) by 40-60%. Best for west-facing facades in Indian cities. Cost: ₹280-500/sq ft.",
      },
      {
        heading: "5. Reflective Glass",
        body: "Glass with a metallic oxide coating that gives a mirror-like appearance from outside while maintaining visibility from inside. Popular for corporate buildings for its iconic look. Reduces glare by 60-70%. Cost: ₹180-350/sq ft.",
      },
      {
        heading: "6. Frosted / Acid-Etched Glass",
        body: "Glass with one surface treated for a translucent, matte finish. Provides privacy while allowing diffused natural light. Used for bathroom facades, conference rooms, and stairwell enclosures. Cost: ₹150-300/sq ft.",
      },
      {
        heading: "7. Smart Switchable Glass (PDLC)",
        body: "Electronically switchable glass that goes from transparent to opaque at the flip of a switch. Uses PDLC (Polymer Dispersed Liquid Crystal) technology. Premium solution for boardrooms, hospitals, and luxury residences. Cost: ₹1,500-3,500/sq ft.",
      },
      {
        heading: "Which Glass Should You Choose?",
        body: "For most commercial buildings in Pune and Mumbai, we recommend DGU with Low-E coating — it offers the best balance of energy efficiency, comfort, and cost. For residential balconies, toughened laminated glass is the safety-first choice. Contact Fine Glaze for a glass specification consultation tailored to your building's orientation and budget.",
      },
    ],
  },

  "how-to-choose-facade-contractor-india": {
    slug: "how-to-choose-facade-contractor-india",
    title: "How to Choose the Best Facade Contractor in India (2026 Checklist)",
    metaTitle: "How to Choose Best Facade Contractor India | 10-Point Checklist – Fine Glaze",
    metaDescription: "10 things to check before hiring a facade contractor in India. From verifying past projects to understanding warranty terms — a complete checklist for architects and developers.",
    keywords: "how to choose facade contractor, best facade contractor India, facade company selection, glazing contractor checklist, facade vendor evaluation, facade contractor Pune Mumbai",
    date: "2026-01-27",
    readTime: "5 min read",
    category: "Industry Guide",
    heroImage: "/Glass installation.webp",
    excerpt: "Hiring the wrong facade contractor can cost you lakhs in rework. Here's a 10-point checklist to evaluate any facade company before signing the contract.",
    content: [
      {
        heading: "Why Choosing the Right Contractor Matters",
        body: "A building facade is one of the most expensive and visible components of any construction project. The wrong contractor can lead to water leakage, glass breakage, delayed handover, and costly rework. In India's competitive facade market, here's how to separate the experts from the amateurs.",
      },
      {
        heading: "10-Point Evaluation Checklist",
        body: "Use this checklist to evaluate any facade contractor:",
        list: [
          "Portfolio of Completed Projects — Ask for 5+ completed projects with photographs and client references. Visit at least one site in person.",
          "In-House Engineering Team — The contractor should have structural engineers who can produce shop drawings and wind load calculations, not just installers.",
          "Factory Visit — A serious facade company will have a fabrication workshop. Visit it to check machine quality, panel storage, and QC processes.",
          "Material Sourcing — Ask specifically which brands of aluminium, silicone, and glass they use. Premium brands like Hindalco, Dow Corning, and Saint-Gobain indicate quality commitment.",
          "Insurance & Safety — Verify if workers have insurance cover and if the company follows safety norms (harnesses, helmets, ground barricading).",
          "Warranty Terms — Get the warranty in writing. A good contractor offers 5 years on installation workmanship and 10+ years on structural silicone.",
          "AMC Capability — Check if they offer post-installation maintenance services. A contractor who maintains their own work has more accountability.",
          "Financial Stability — Check GST registration, company incorporation date, and bank solvency. Avoid contractors who demand 80%+ advance.",
          "Timeline Commitment — Get a detailed Gantt chart with milestones. Include penalty clauses for delays in the contract.",
          "Communication & Reporting — The contractor should provide weekly progress reports with photos. Lack of communication during execution is a major red flag.",
        ],
      },
      {
        heading: "Why Fine Glaze Passes This Checklist",
        body: "Fine Glaze scores on every parameter: 10+ landmark projects (Embassy, LTIMindtree, Pune Airport), in-house engineering team, dedicated fabrication facility, premium material partnerships (Dow Corning, Hindalco), full safety compliance, comprehensive warranties, and a dedicated AMC division. We welcome factory visits and provide weekly progress reports on every project. Call +91 8369233566 to schedule a consultation.",
      },
    ],
  },

  "glass-railing-cost-india-2026": {
    slug: "glass-railing-cost-india-2026",
    title: "Glass Railing Cost Per Running Foot in India (2026 Price Guide)",
    metaTitle: "Glass Railing Cost Per Running Foot India 2026 | Complete Price Guide – Fine Glaze",
    metaDescription: "Complete pricing guide for glass railings in India. Frameless glass railings: ₹450–₹1,200/rft. SS post, spigot & channel systems compared. Balcony, staircase & pool fencing costs explained.",
    keywords: "glass railing cost per running foot India, frameless glass railing price, glass balustrade cost, balcony glass railing cost, staircase glass railing India, glass railing 2026 price",
    date: "2026-05-10",
    readTime: "7 min read",
    category: "Pricing Guide",
    heroImage: "/Railing.webp",
    excerpt: "A complete 2026 price breakdown for glass railings in India — frameless, SS post-mounted, and spigot systems for balconies, staircases, and pool fencing.",
    content: [
      {
        heading: "How Much Does a Glass Railing Cost in India?",
        body: "Glass railings are fast becoming the go-to choice for balconies, staircases, terraces, and pool fencing in premium residential and commercial projects. The cost depends on the type of system (frameless, semi-frameless, post-mounted), glass thickness, and hardware grade. Here is the complete 2026 price guide.",
      },
      {
        heading: "Price Range by System Type",
        body: "The following table shows current market rates for different glass railing systems in India:",
        table: {
          headers: ["System Type", "Price Range (₹/rft)", "Best Application"],
          rows: [
            ["SS Post-Mounted Railing", "₹450 – ₹700", "Balconies, terraces, staircases"],
            ["Spigot Frameless Railing", "₹600 – ₹900", "Pool fencing, decks, premium balconies"],
            ["Channel (U-Channel) Frameless", "₹700 – ₹1,000", "Staircases, floor-fixed balconies"],
            ["Structural Point-Fixed (Spider)", "₹900 – ₹1,200", "Feature staircases, luxury homes"],
            ["Aluminium Channel + Glass", "₹400 – ₹600", "Budget balconies, commercial spaces"],
          ],
        },
      },
      {
        heading: "Key Factors That Affect Glass Railing Cost",
        body: "Understanding cost drivers helps you budget accurately:",
        list: [
          "Glass Thickness — 12mm toughened is standard for balconies. Staircases often require 15mm–19mm laminated glass, adding 30–50% to cost.",
          "Hardware Grade — SS 304 is standard; SS 316 (marine grade) costs 20–30% more and is essential near coastal areas or pools.",
          "Handrail Type — Square hollow section (SHS) SS handrail adds ₹80–₹150/rft. Top-cap or no-handrail designs save cost.",
          "Glass Finish — Clear toughened is cheapest. Frosted, acid-etched, or tinted glass adds ₹60–₹120/rft.",
          "Height of Railing — Standard 900mm–1100mm is base price. Heights above 1200mm increase glass area and cost proportionally.",
          "Floor Type — Glass on concrete (anchor bolts) is straightforward. Hollow or tiled surfaces need special fixings, adding ₹50–₹100/rft.",
          "Project Size — Orders above 100 running feet typically get 10–15% volume discount.",
        ],
      },
      {
        heading: "Glass Railing Cost by Application",
        body: "Here is a practical breakdown by use case for a typical home or commercial project:",
        table: {
          headers: ["Application", "Typical Length", "Estimated Total Cost"],
          rows: [
            ["3BHK Balcony Railing", "15–25 rft", "₹9,000 – ₹25,000"],
            ["Villa Staircase (2 floors)", "30–50 rft", "₹18,000 – ₹60,000"],
            ["Terrace Parapet", "40–80 rft", "₹22,000 – ₹80,000"],
            ["Pool Fencing (outdoor)", "50–100 rft", "₹35,000 – ₹1,20,000"],
            ["Office Glass Partition-Railing", "20–40 rft", "₹12,000 – ₹40,000"],
          ],
        },
      },
      {
        heading: "IS Code Compliance for Glass Railings",
        body: "All glass railings must comply with IS 3548 (safety glazing) and NBC 2016 (National Building Code) guidelines:",
        list: [
          "Minimum glass thickness: 12mm toughened or 10.38mm laminated for railings up to 1100mm height.",
          "Structural load: railings must withstand 0.74 kN/m horizontal load (NBC 2016 requirement).",
          "Laminated glass is mandatory for overhead or staircase applications where glass breakage risk is critical.",
          "SS 316 hardware is recommended within 5km of coastline to prevent salt corrosion.",
          "Fine Glaze provides structural load calculations and material certifications with every installation.",
        ],
      },
      {
        heading: "Get a Free Glass Railing Quote",
        body: "Glass railing costs vary by site conditions, design, and quantity. At Fine Glaze, we provide free site visits and detailed quotations for residential and commercial projects across Mumbai and Pune. Call +91 8369233566 or email info@fineglaze.com for a quote within 48 hours.",
      },
    ],
  },

  "aluminium-facade-vs-upvc-windows": {
    slug: "aluminium-facade-vs-upvc-windows",
    title: "Aluminium Facade vs UPVC Windows: Which is Better for Your Building?",
    metaTitle: "Aluminium Facade vs UPVC Windows India | Complete Comparison 2026 – Fine Glaze",
    metaDescription: "Detailed comparison of aluminium facade systems vs UPVC windows for Indian buildings. Cost, durability, thermal performance, and which to choose in 2026.",
    keywords: "aluminium facade vs UPVC windows, aluminium vs UPVC India, best window system India, aluminium window cost, UPVC window comparison, facade system selection",
    date: "2026-04-28",
    readTime: "6 min read",
    category: "Comparison Guide",
    heroImage: "/Aluminium windows.webp",
    excerpt: "Aluminium or UPVC — which window and facade system suits your building in India? A detailed 2026 comparison covering cost, durability, thermal performance and maintenance.",
    content: [
      {
        heading: "The Aluminium vs UPVC Debate",
        body: "Two materials dominate India's window and facade market: aluminium and UPVC (Unplasticised Polyvinyl Chloride). Both offer good weatherproofing and aesthetics, but they differ significantly in structural strength, design flexibility, lifespan, and cost. This guide helps architects, developers, and homeowners make the right choice.",
      },
      {
        heading: "Head-to-Head Comparison",
        body: "Here is how aluminium and UPVC compare across all key parameters:",
        table: {
          headers: ["Parameter", "Aluminium", "UPVC"],
          rows: [
            ["Structural Strength", "Excellent — spans up to 3m", "Good — limited to 1.5m spans"],
            ["Lifespan", "40–50 years", "20–30 years"],
            ["Thermal Insulation", "Good with thermal break profile", "Excellent — inherently low conductivity"],
            ["Cost (₹/sq ft)", "₹350 – ₹1,200", "₹200 – ₹600"],
            ["Recyclability", "100% recyclable", "Partially recyclable"],
            ["Colour Options", "Unlimited (powder coat/PVDF)", "Limited (typically white/wood grain)"],
            ["Section Thickness", "Very slim — 40–65mm", "Bulkier — 60–90mm"],
            ["Suitability", "Commercial, high-rise, curtain wall", "Residential, low-rise"],
            ["Maintenance", "Minimal — anodised finish", "Occasional cleaning, no painting"],
            ["Fire Resistance", "Does not burn", "Softens above 60°C"],
          ],
        },
      },
      {
        heading: "When to Choose Aluminium",
        body: "Aluminium is the clear winner for:",
        list: [
          "Commercial buildings, offices, IT parks, and hotels — it supports larger glass spans and curtain wall systems",
          "High-rise buildings (above 5 floors) where structural loads and wind pressures exceed UPVC's capability",
          "Buildings where slim sightlines and large glass areas are architecturally important",
          "Projects requiring custom colours, anodised finishes, or PVDF powder coating",
          "Coastal locations — marine-grade aluminium outperforms UPVC in salt air environments",
          "LEED/IGBC certified projects — aluminium's recyclability earns green credits",
        ],
      },
      {
        heading: "When to Choose UPVC",
        body: "UPVC makes sense when:",
        list: [
          "The project is a standard residential apartment or villa with typical window sizes",
          "Thermal insulation is the top priority and budget is moderate",
          "The building is low-rise (1–4 floors) where structural demands are modest",
          "Noise reduction is a priority — UPVC with DGU offers excellent sound insulation",
          "Budget is the primary constraint and commercial-grade aluminium is overkill",
        ],
      },
      {
        heading: "Fine Glaze's Verdict",
        body: "For commercial and mixed-use buildings in Mumbai and Pune, aluminium is non-negotiable — the structural requirements, design flexibility, and facade integration simply cannot be met by UPVC. For residential villas and apartments, UPVC is a practical choice for standard windows, while aluminium still wins for sliding doors, large picture windows, and any opening exceeding 1.5m in width. Contact Fine Glaze for a free system recommendation based on your specific building type and budget.",
      },
    ],
  },

  "facade-maintenance-guide-india": {
    slug: "facade-maintenance-guide-india",
    title: "Building Facade Maintenance Guide for India (2026): Costs, Schedule & Tips",
    metaTitle: "Building Facade Maintenance India 2026 | AMC Cost, Schedule & Tips – Fine Glaze",
    metaDescription: "Complete facade maintenance guide for Indian buildings. Learn AMC costs, maintenance schedules, glass cleaning, sealant replacement, and how to extend your facade's life by 15+ years.",
    keywords: "facade maintenance India, building facade AMC cost, glass facade cleaning, sealant replacement cost India, facade maintenance schedule, facade repair Mumbai Pune",
    date: "2026-04-05",
    readTime: "8 min read",
    category: "Maintenance Guide",
    heroImage: "/Amc1.webp",
    excerpt: "A complete guide to maintaining your building facade in India — covering AMC packages, cleaning schedules, common failure points, and cost benchmarks for 2026.",
    content: [
      {
        heading: "Why Facade Maintenance Is Non-Negotiable",
        body: "India's climate is harsh on building facades. Mumbai's monsoon and salt air, Pune's dust and UV, and the summer heat across Maharashtra accelerate deterioration. A poorly maintained facade can fail within 8–10 years instead of its designed 25–30 year lifespan. Proactive maintenance costs 10x less than emergency repairs or full facade replacement.",
      },
      {
        heading: "Recommended Facade Maintenance Schedule",
        body: "This is the standard maintenance schedule we follow for glass and aluminium facades in India:",
        table: {
          headers: ["Frequency", "Activity", "Purpose"],
          rows: [
            ["Monthly", "Visual inspection of glass panels & joints", "Detect early cracks, water ingress"],
            ["Quarterly", "Check drain holes, pressure-test seals", "Prevent water accumulation"],
            ["Bi-Annual", "Full glass cleaning (exterior + interior)", "Maintain appearance, spot damage"],
            ["Annual", "Sealant inspection + re-caulking if needed", "Prevent water ingress"],
            ["Every 3–5 Years", "Full structural silicone audit", "Identify bond failure before leakage"],
            ["Every 5–7 Years", "Aluminium re-coating / touch-up", "Prevent corrosion, restore finish"],
            ["Every 10 Years", "Comprehensive structural audit by engineer", "Full safety assessment"],
          ],
        },
      },
      {
        heading: "Facade AMC (Annual Maintenance Contract) Costs in India 2026",
        body: "Here are typical AMC costs for glass and aluminium facades based on building size:",
        table: {
          headers: ["Building Size", "Facade Area", "AMC Cost / Year"],
          rows: [
            ["Small commercial (G+2)", "500–1,500 sq ft", "₹15,000 – ₹35,000"],
            ["Mid-size office (G+5)", "2,000–5,000 sq ft", "₹35,000 – ₹80,000"],
            ["IT park / Large office", "5,000–20,000 sq ft", "₹80,000 – ₹3,00,000"],
            ["High-rise residential (20+ floors)", "20,000–50,000 sq ft", "₹3,00,000 – ₹8,00,000"],
          ],
        },
      },
      {
        heading: "5 Most Common Facade Failures and How to Prevent Them",
        body: "These are the failures we encounter most frequently on Indian buildings:",
        list: [
          "Sealant Failure — Silicone sealant hardens and cracks after 7–10 years in Indian conditions. Signs: white chalking, visible gaps, water stains inside the building. Fix: re-caulking with Dow Corning or Sika silicone costs ₹15–₹35/rft.",
          "Glass Panel Cracks — Caused by thermal stress, anchor bolt overtightening, or impact. Single cracked panel replacement: ₹1,500–₹8,000 depending on glass type.",
          "Aluminium Corrosion — Coastal buildings without PVDF coating develop pitting within 5 years. Prevention: marine-grade anodising and PVDF coating from day one.",
          "Drain Hole Blockage — Blocked drains cause water to pool inside mullions, leading to interior leakage and aluminium corrosion. Clean drain holes every 6 months.",
          "Anchor Bolt Loosening — Vibration from traffic and wind can loosen anchor bolts over time. Annual torque check prevents catastrophic panel failure.",
        ],
      },
      {
        heading: "DIY vs Professional Facade Maintenance",
        body: "Some maintenance tasks can be done in-house; others require professionals:",
        list: [
          "DIY safe: Visual inspection from inside, cleaning accessible ground-floor glass, drain hole clearing at accessible levels.",
          "Professional required: Any work above 2nd floor, structural sealant inspection, glass replacement, re-coating, and rope access cleaning for high-rises.",
          "Legal requirement: All rope access work must be done by IRATA-certified personnel with proper safety equipment (IS 15141).",
        ],
      },
      {
        heading: "Fine Glaze AMC Services",
        body: "Fine Glaze offers comprehensive facade AMC packages across Mumbai and Pune, covering 2 full cleaning cycles per year, bi-annual sealant inspection, minor repairs included, and a dedicated project manager. We work on both our own installations and third-party facades. Call +91 8369233566 for a free facade inspection and AMC quote.",
      },
    ],
  },

  "curtain-wall-installation-process-india": {
    slug: "curtain-wall-installation-process-india",
    title: "Curtain Wall Installation Process in India: Step-by-Step Guide",
    metaTitle: "Curtain Wall Installation Process India | Step-by-Step Guide – Fine Glaze",
    metaDescription: "Complete step-by-step guide to curtain wall installation in India. From anchor design to final inspection — timelines, quality checks, and what to expect during your project.",
    keywords: "curtain wall installation process, curtain wall installation steps India, how curtain wall is installed, glass facade installation guide, curtain wall construction sequence",
    date: "2026-03-22",
    readTime: "9 min read",
    category: "Technical Guide",
    heroImage: "/Glass installation.webp",
    excerpt: "A complete step-by-step breakdown of how curtain walls are designed, fabricated, and installed in India — with timelines, quality checks, and what every developer should know.",
    content: [
      {
        heading: "The Curtain Wall Installation Journey",
        body: "Installing a curtain wall is a precision engineering process that begins weeks before a single panel reaches site. Understanding the full workflow helps developers, architects, and project managers set realistic timelines, anticipate approvals, and ensure quality at every stage.",
      },
      {
        heading: "Stage 1: Engineering & Shop Drawings (Weeks 1–4)",
        body: "Before any fabrication begins, the engineering team completes:",
        list: [
          "Structural Analysis — Wind load calculations per IS 875 (Part 3), dead load assessment, and thermal movement analysis.",
          "Shop Drawings — Detailed CAD drawings showing every mullion, transom, anchor bracket, drainage path, and glass bite.",
          "Anchor Layout Drawing — Critical document showing anchor positions relative to the structural slab. Must be approved before casting anchors.",
          "Mock-Up Panel — For projects above ₹50 lakh, we build a 2m × 3m mock-up panel and conduct water penetration, air infiltration, and structural deflection tests.",
          "Client/Architect Approval — All shop drawings require architect approval before fabrication begins.",
        ],
      },
      {
        heading: "Stage 2: Fabrication (Weeks 3–8, overlapping with approvals)",
        body: "Once drawings are approved, factory fabrication begins:",
        list: [
          "Aluminium extrusions are cut to length using CNC saws — accuracy within ±0.5mm.",
          "All profiles are thermally broken (if specified) and pre-drilled for anchors, drainage, and glass bite.",
          "Powder coating or PVDF painting is applied in a controlled spray booth environment.",
          "For unitized systems: panels are fully assembled in the factory including glass, EPDM gaskets, and hardware.",
          "Every panel undergoes a factory quality check for dimensional accuracy, coating adhesion, and glazing bite depth.",
        ],
      },
      {
        heading: "Stage 3: Anchor Installation (Weeks 4–6, parallel with fabrication)",
        body: "Anchors connect the facade to the building structure — the most critical structural step:",
        list: [
          "Surveying team marks all anchor positions from the approved anchor layout drawing.",
          "Anchor bolts (M16 or M20 SS316) are cast into the slab edge or fixed to slab soffit using chemical anchors.",
          "Pull-out tests are conducted on 10% of anchors to verify load capacity (minimum 5kN pull-out per IS 1367).",
          "All anchor positions are surveyed with total station to verify they are within ±3mm of design — critical for panel alignment.",
        ],
      },
      {
        heading: "Stage 4: Mullion & Transom Installation (Weeks 6–10)",
        body: "The aluminium grid is the backbone of the curtain wall:",
        list: [
          "Vertical mullions are hung from anchor brackets — each mullion spans one or two floors.",
          "Horizontal transoms are connected to mullions using mechanical fasteners or press-fit connectors.",
          "All joints include EPDM thermal break pads to prevent cold bridging.",
          "Running lines (plumb and level strings) are set up to ensure the entire grid is within ±2mm plumb over the full building height.",
          "Drainage channels are verified to ensure all horizontal transoms drain correctly to the exterior.",
        ],
      },
      {
        heading: "Stage 5: Glass Installation (Weeks 8–12)",
        body: "Glass installation requires precision and safety protocols:",
        list: [
          "Glass panels are lifted to each floor using a tower crane or glass vacuum lifter.",
          "Each panel is set in the aluminium frame using EPDM setting blocks at quarter points.",
          "Structural silicone (Dow Corning 795 or equivalent) is applied to create the weatherproof bond for structural glazing systems.",
          "Pressure plates and snap-in covers are installed for stick system facades.",
          "Every panel is inspected for scratches, chips, and correct seating before the next panel is installed.",
        ],
      },
      {
        heading: "Stage 6: Sealant & Finishing (Weeks 11–13)",
        body: "The final stage that determines weathertightness:",
        list: [
          "All perimeter joints between facade and building structure are sealed with weatherproof silicone.",
          "Top-of-building parapet flashing is installed to prevent water entry at the roof line.",
          "Weep holes are cleared and drainage is tested by flooding each bay with a hose for 15 minutes.",
          "Temporary protection film is removed from glass surfaces.",
          "Final snag list inspection with architect and client.",
        ],
      },
      {
        heading: "Quality Benchmarks for Curtain Wall Installation",
        body: "Fine Glaze follows these quality benchmarks on every project:",
        table: {
          headers: ["Parameter", "Acceptable Tolerance", "Test Method"],
          rows: [
            ["Mullion plumb", "±2mm per floor, ±5mm total height", "Total station survey"],
            ["Joint width variation", "±1mm from design", "Feeler gauge"],
            ["Glass bite depth", "Minimum 20mm (IS: 15827)", "Physical measurement"],
            ["Water penetration", "Zero leakage at 600Pa", "ASTM E1105 hose test"],
            ["Pull-out strength", "Minimum 5kN per anchor", "Load test"],
          ],
        },
      },
      {
        heading: "Typical Curtain Wall Project Timeline",
        body: "For a medium-sized commercial building with 3,000–8,000 sq ft of curtain wall in India, expect: Engineering & approvals: 3–5 weeks. Fabrication: 4–6 weeks (parallel with approvals). Site installation: 6–10 weeks. Sealant & punch list: 2–3 weeks. Total: 12–18 weeks from contract to completion. Fine Glaze provides a detailed Gantt chart with all milestones at the start of every project. Contact us at +91 8369233566 to discuss your project timeline.",
      },
    ],
  },

  "acp-vs-hpl-cladding-comparison": {
    slug: "acp-vs-hpl-cladding-comparison",
    title: "ACP vs HPL Cladding: Which is Better for Your Building?",
    metaTitle: "ACP vs HPL Cladding Comparison India | Pros, Cons & Cost – Fine Glaze",
    metaDescription: "Detailed comparison of ACP (Aluminium Composite Panel) vs HPL (High Pressure Laminate) cladding. Cost, fire rating, durability, and which to choose for your building in India.",
    keywords: "ACP vs HPL cladding, aluminium composite panel vs HPL, ACP cladding India, HPL facade, building cladding comparison, fire rated cladding, ACP fire safety",
    date: "2025-12-11",
    readTime: "6 min read",
    category: "Comparison Guide",
    heroImage: "/Panel.webp",
    excerpt: "ACP and HPL are the two most popular cladding materials in India. Here's a detailed comparison to help you decide which one suits your project.",
    content: [
      {
        heading: "ACP vs HPL: The Cladding Decision",
        body: "When it comes to external building cladding in India, architects and developers typically choose between ACP (Aluminium Composite Panels) and HPL (High Pressure Laminate). Both have distinct advantages, and the right choice depends on your project's priorities — budget, fire safety, aesthetics, or durability.",
      },
      {
        heading: "Side-by-Side Comparison",
        body: "",
        table: {
          headers: ["Parameter", "ACP (Aluminium Composite)", "HPL (High Pressure Laminate)"],
          rows: [
            ["Material", "Two aluminium sheets + PE/FR core", "Compressed paper + phenolic resin"],
            ["Fire Rating", "FR grade: Class B1", "Class B-s1-d0 (better fire rating)"],
            ["Weight", "3.5-5.5 kg/sqm (lighter)", "8-14 kg/sqm (heavier)"],
            ["Cost (₹/sq ft)", "₹80-180", "₹150-350"],
            ["Durability", "15-20 years", "20-30 years"],
            ["Colour Options", "Unlimited (PVDF coating)", "Limited to manufacturer range"],
            ["Bending/Shaping", "Excellent — curves easily", "Limited — rigid panels only"],
            ["UV Resistance", "Good with PVDF coating", "Excellent — inherent UV stability"],
            ["Maintenance", "Easy to clean", "Very easy — stain resistant"],
            ["Best For", "Budget projects, signage, curved surfaces", "Premium projects, fire-sensitive buildings"],
          ],
        },
      },
      {
        heading: "When to Choose ACP",
        body: "ACP is the right choice when:",
        list: [
          "Budget is a primary concern — ACP is 40-50% cheaper than HPL",
          "The design requires curved or complex shapes",
          "You need unlimited colour and finish options",
          "The building is not in a high fire-risk category",
          "Quick installation is needed — ACP is lighter and faster to install",
        ],
      },
      {
        heading: "When to Choose HPL",
        body: "HPL is better when:",
        list: [
          "Fire safety is a top priority (hospitals, schools, public buildings)",
          "Long-term durability matters more than initial cost",
          "The facade is exposed to extreme UV and weather conditions",
          "You want a completely maintenance-free exterior",
          "Regulatory compliance requires Class B fire rating",
        ],
      },
      {
        heading: "Our Recommendation",
        body: "For most commercial buildings in Pune and Mumbai, FR-grade ACP offers the best value proposition — it meets fire safety norms while being significantly more affordable and design-flexible than HPL. For hospitals, government buildings, and high-rise residential towers where fire safety is paramount, HPL is the safer investment. Fine Glaze installs both materials — contact us for a material recommendation specific to your project.",
      },
    ],
  },
};

export const blogPostsList = Object.values(blogPosts).sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);
