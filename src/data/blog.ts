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
    date: "2026-05-05",
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
    date: "2026-05-04",
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
    date: "2026-05-03",
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
    date: "2026-05-02",
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

  "acp-vs-hpl-cladding-comparison": {
    slug: "acp-vs-hpl-cladding-comparison",
    title: "ACP vs HPL Cladding: Which is Better for Your Building?",
    metaTitle: "ACP vs HPL Cladding Comparison India | Pros, Cons & Cost – Fine Glaze",
    metaDescription: "Detailed comparison of ACP (Aluminium Composite Panel) vs HPL (High Pressure Laminate) cladding. Cost, fire rating, durability, and which to choose for your building in India.",
    keywords: "ACP vs HPL cladding, aluminium composite panel vs HPL, ACP cladding India, HPL facade, building cladding comparison, fire rated cladding, ACP fire safety",
    date: "2026-05-01",
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
