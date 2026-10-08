import { useParams, Navigate, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { MapPin, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SEO from "@/components/SEO";

// ==========================================
// 1. ALL LOCATIONS (PAN INDIA & REGIONAL HUBS)
// ==========================================
const panIndiaLocations = [
  "pan-india", "all-india", "india",
  "delhi-ncr", "delhi", "gurgaon", "noida", "greater-noida", "faridabad",
  "bengaluru", "bangalore", "whitefield", "electronic-city",
  "hyderabad", "hitec-city", "gachibowli",
  "chennai", "coimbatore",
  "ahmedabad", "gift-city", "surat", "vadodara", "rajkot",
  "kolkata", "new-town-kolkata", "bhubaneswar",
  "chandigarh", "mohali", "jaipur", "lucknow", "kanpur", "dehradun",
  "indore", "bhopal", "nagpur", "raipur",
  "kochi", "thiruvananthapuram", "visakhapatnam", "vijayawada",
  "nashik", "aurangabad"
];
const puneLocations = [
  "pune", "hinjewadi", "kharadi", "baner", "wakad", "viman-nagar",
  "magarpatta", "hadapsar", "pimpri", "chinchwad", "kalyani-nagar",
  "koregaon-park", "aundh", "balewadi"
];
const mumbaiLocations = [
  "mumbai", "bkc", "andheri", "powai", "lower-parel", "vikhroli",
  "goregaon", "worli", "byculla", "malad", "borivali", "dadar", "nariman-point"
];
const naviMumbaiLocations = ["navi-mumbai", "vashi", "mahape", "airoli", "belapur", "kharghar", "panvel"];
const thaneLocations = ["thane"];

const allLocations: Record<string, { name: string; parentCity: string; image: string }> = {};

// Register Pan India and National Hubs
panIndiaLocations.forEach(loc => {
  const getParent = () => {
    if (["pan-india", "all-india", "india"].includes(loc)) return "pan-india";
    if (["delhi-ncr", "delhi", "gurgaon", "noida", "greater-noida", "faridabad"].includes(loc)) return "delhi-ncr";
    if (["bengaluru", "bangalore", "whitefield", "electronic-city"].includes(loc)) return "bengaluru";
    if (["hyderabad", "hitec-city", "gachibowli", "visakhapatnam", "vijayawada"].includes(loc)) return "hyderabad";
    if (["chennai", "coimbatore"].includes(loc)) return "chennai";
    if (["ahmedabad", "gift-city", "surat", "vadodara", "rajkot"].includes(loc)) return "ahmedabad";
    if (["kolkata", "new-town-kolkata", "bhubaneswar"].includes(loc)) return "kolkata";
    if (["chandigarh", "mohali", "dehradun"].includes(loc)) return "chandigarh";
    if (["jaipur"].includes(loc)) return "jaipur";
    if (["lucknow", "kanpur"].includes(loc)) return "lucknow";
    if (["indore", "bhopal", "nagpur", "raipur"].includes(loc)) return "indore";
    if (["kochi", "thiruvananthapuram"].includes(loc)) return "kochi";
    if (["nashik", "aurangabad"].includes(loc)) return "pune";
    return "pan-india";
  };

  const getName = () => {
    if (loc === "pan-india") return "Pan India";
    if (loc === "all-india" || loc === "india") return "All India";
    if (loc === "delhi-ncr") return "Delhi NCR";
    if (loc === "gift-city") return "GIFT City Gujarat";
    if (loc === "hitec-city") return "HITEC City Hyderabad";
    if (loc === "electronic-city") return "Electronic City Bengaluru";
    return loc.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  };

  allLocations[loc] = {
    name: getName(),
    parentCity: getParent(),
    image: ["pan-india", "all-india", "india"].includes(loc) ? "/Unitized.webp"
      : ["delhi-ncr", "delhi", "gurgaon", "noida"].includes(loc) ? "/Business park.webp"
      : ["bengaluru", "bangalore", "whitefield"].includes(loc) ? "/Business park.webp"
      : ["hyderabad", "hitec-city"].includes(loc) ? "/Glazing.webp"
      : ["ahmedabad", "gift-city"].includes(loc) ? "/Unitized.webp"
      : "/Panel.webp"
  };
});

[...puneLocations, ...mumbaiLocations, ...naviMumbaiLocations, ...thaneLocations].forEach(loc => {
  allLocations[loc] = {
    name: loc.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    parentCity: puneLocations.includes(loc) ? "pune"
      : mumbaiLocations.includes(loc) ? "mumbai"
      : naviMumbaiLocations.includes(loc) ? "navi-mumbai"
      : "thane",
    image: puneLocations.includes(loc) ? "/Puneairport.webp"
      : mumbaiLocations.includes(loc) ? "/Embassy.webp"
      : "/ltimindtree-mensa-campus-mahape-navi-mumbai-1 (1)-elementor-io-optimized.webp"
  };
});

// ==========================================
// 2. ALL 7 SERVICE PROFILES
// ==========================================
const serviceKeywords: Record<string, {
  label: string;
  uniqueParagraph: string;
  features: string[];
  image: string;
}> = {
  "structural-glazing": {
    label: "Structural Glazing",
    uniqueParagraph: "Precision-engineered flush glass facades using high-performance structural silicone bonding. Our systems eliminate visible frames for a seamless, contemporary appearance.",
    features: ["Flush Glass Aesthetics", "Wind-Load Tested", "Dow Corning Silicone", "Superior Insulation"],
    image: "/Glazing.webp"
  },
  "curtain-wall": {
    label: "Curtain Wall Systems",
    uniqueParagraph: "Advanced unitized and semi-unitized curtain wall systems for high-rise commercial towers. Factory-assembled panels reduce installation time by 40% while guaranteeing waterproof integrity.",
    features: ["Factory Assembled", "Thermal Break Tech", "EPDM Gaskets", "Rapid Installation"],
    image: "/Unitized.webp"
  },
  "acp-cladding": {
    label: "ACP Cladding",
    uniqueParagraph: "Durable and fire-retardant aluminium composite paneling for modern building elevations. FR-grade cores and PVDF coatings ensure weather-proof, safety-compliant exteriors.",
    features: ["FR-Grade Core", "PVDF Coating", "CNC Routing", "Weather Sealing"],
    image: "/Panel.webp"
  },
  "glass-railing": {
    label: "Glass Railing Systems",
    uniqueParagraph: "Modern, frameless glass railings for commercial balconies, staircases, and public spaces. Toughened safety glass with concealed hardware for a sleek, uninterrupted finish.",
    features: ["Toughened Safety Glass", "Hidden Mounting", "Corrosion Resistant", "Custom Profiles"],
    image: "/Custom railing.webp"
  },
  "facade-maintenance": {
    label: "Facade Maintenance",
    uniqueParagraph: "Comprehensive AMC services including glass replacement, sealant repair, and high-rise facade cleaning. Preventive contracts to protect your building's envelope long-term.",
    features: ["AMC Contracts", "Leakage Repair", "Glass Replacement", "High-Rise Cleaning"],
    image: "/Amc.webp"
  },
  "commercial-construction": {
    label: "Commercial Facade Construction",
    uniqueParagraph: "End-to-end facade execution for corporate offices, malls, and tech parks. Turnkey project management from design coordination to final handover.",
    features: ["Turnkey Execution", "Project Management", "Safety Compliant", "On-Time Delivery"],
    image: "/Business park.webp"
  },
  "facade-contractor": {
    label: "Facade Contracting",
    uniqueParagraph: "Leading architectural glazing and facade engineering specialists serving clients Pan India. Trusted by developers, architects, and PMCs for complex commercial and residential projects nationwide.",
    features: ["Expert Engineering", "On-Time Delivery", "Premium Quality", "Full Warranty"],
    image: "/Glass installation.webp"
  }
};

// ==========================================
// 3. REGIONAL PROFILES (PAN INDIA & CITIES)
// ==========================================
const cityProfiles: Record<string, {
  intro: string;
  challenges: string;
  faqs: { q: string; a: string }[];
}> = {
  "pan-india": {
    intro: "Fine Glaze provides turnkey facade engineering, curtain wall systems, structural glazing, and ACP cladding Pan India. We execute landmark commercial towers, tech parks, industrial facilities, and luxury high-rises across all Indian states and metro corridors.",
    challenges: "Pan India execution requires adaptive facade engineering tailored to diverse Indian climates — from extreme coastal salt air and cyclone wind loads to high-temperature arid heat and seismic zones. Our engineering conforms rigorously to NBC 2016, IS 875 Part 3, and IS 2553 standards.",
    faqs: [
      { q: "Does Fine Glaze execute facade and glazing projects Pan India?", a: "Yes. Fine Glaze operates Pan India with dedicated project execution teams, central CNC fabrication facilities, and nationwide supply chains to deliver facade systems on time across all states." },
      { q: "How do you handle site surveys and mobilization outside Maharashtra?", a: "Our engineering team deploys for on-site 3D laser scanning, structural assessments, and wind-load calculations anywhere in India, followed by full turnkey mobilization with certified site engineers." },
      { q: "What national and international standards do your facades comply with?", a: "All systems strictly comply with NBC 2016 (National Building Code of India), IS 875 Part 3 (Wind Loads), IS 2553 (Safety Glass), ASTM, and AAMA standards for structural safety and weather tightness." }
    ]
  },
  "delhi-ncr": {
    intro: "Delhi NCR's booming commercial corridors in Gurgaon, Noida, and New Delhi demand energy-efficient, high-performance facade systems engineered for extreme thermal swings.",
    challenges: "Extreme temperature variations (-2°C winter to 48°C summer) and severe dust require high thermal-mass profiles, double/triple glazed Low-E units, and precision weather-sealed joints.",
    faqs: [
      { q: "Do you supply and install facades in Delhi NCR?", a: "Yes, Fine Glaze executes full-scope curtain walls, structural glazing, and ACP cladding for commercial buildings, tech parks, and luxury villas across Delhi, Gurgaon, and Noida." },
      { q: "What glass is best for Delhi NCR's severe climate?", a: "High-performance DGU (Double Glazed Units) with soft-coat Low-E on surface #2, providing low U-value (< 1.6 W/m²K) and low SHGC (< 0.25) to drastically reduce cooling costs." }
    ]
  },
  "bengaluru": {
    intro: "Bengaluru's premier tech campuses, IT corridors, and Grade-A office towers require modern, LEED-compliant architectural facades with maximum daylight and acoustic control.",
    challenges: "Large-span glass openings and high acoustic requirements in tech hubs demand precision structural silicone glazing, insulated glass, and concealed hardware.",
    faqs: [
      { q: "Can Fine Glaze deliver LEED-compliant facades in Bengaluru?", a: "Yes, our DGU and unitized curtain wall systems achieve LEED and IGBC green building compliance with certified thermal and acoustic performance." },
      { q: "Do you execute projects in Electronic City, Whitefield, and Outer Ring Road?", a: "Yes, we handle complete turnkey execution across all tech zones and commercial centers in Bengaluru." }
    ]
  },
  "hyderabad": {
    intro: "Hyderabad's rapidly rising IT corridors in HITEC City, Financial District, and Gachibowli require grand, high-performance curtain walls and architectural structural glazing.",
    challenges: "High solar radiation and tall commercial elevations require solar control glass with SHGC below 0.28 and engineered unitized systems capable of rapid crane erection.",
    faqs: [
      { q: "Do you execute facade projects in Hyderabad Financial District & HITEC City?", a: "Yes, we provide turnkey facade engineering, factory fabrication, and certified high-rise installation for commercial towers in Hyderabad." },
      { q: "What is your project turnaround for commercial buildings in Hyderabad?", a: "Depending on scale, our unitized factory-assembled systems reduce on-site installation time by 40%, delivering typical 15-20 storey towers in record time." }
    ]
  },
  "pune": {
    intro: "Pune's expanding IT corridors and corporate parks demand high-performance, energy-efficient facade systems built to handle extreme monsoon conditions.",
    challenges: "Heavy monsoon exposure across sprawling campuses makes waterproofing critical. Our DGU systems reduce HVAC costs, while integrated EPDM gaskets provide engineered water resistance during Pune's rainy season.",
    faqs: [
      { q: "What facade system is best for Pune's monsoon season?", a: "Unitized curtain walls are ideal. Factory-assembled seals provide mathematically precise weather-tight performance for heavy rain regions like Pune." },
      { q: "How do your glass systems help with IT park thermal insulation?", a: "We use low-E glass and thermal-break profiles to reflect solar heat, drastically cutting electricity costs for large-scale office towers." }
    ]
  },
  "mumbai": {
    intro: "Mumbai's vertical skyline demands precision facade engineering with coastal-grade materials rated for high-rise wind loads and salt-air environments.",
    challenges: "Coastal humidity demands aggressive protection. Our systems use coastal-grade PVDF coatings, 25-micron anodization, and SS-316 grade hardware to resist salt-air corrosion at extreme heights.",
    faqs: [
      { q: "How do you prevent salt-water corrosion in Mumbai?", a: "We use specialized coastal-grade PVDF painting and heavy 25-micron anodization, with SS-316 grade hardware to prevent rusting in humid, coastal conditions." },
      { q: "Are your curtain walls tested for high-rise wind loads?", a: "Yes, our systems are engineered and tested for wind-loads exceeding 4.5kPa, ensuring maximum safety for Mumbai skyscrapers." }
    ]
  },
  "navi-mumbai": {
    intro: "As Navi Mumbai evolves into a premier corporate destination, we deliver robust facade solutions for modern office towers and large-scale industrial-to-commercial transitions.",
    challenges: "Bridging industrial durability with corporate aesthetics, our systems offer heavy-duty structural integrity for the high-growth zones of Mahape, Airoli, and Belapur.",
    faqs: [
      { q: "Do you handle industrial-to-commercial facade conversions in Navi Mumbai?", a: "Yes, we specialize in retrofitting older industrial structures with modern ACP cladding and structural glazing to meet premium corporate standards." },
      { q: "Do you work in CBD Belapur and Kharghar?", a: "Yes, we have active projects across all major Navi Mumbai nodes including Mahape, Belapur, Kharghar, and Airoli." }
    ]
  },
  "thane": {
    intro: "Thane's rapidly developing commercial corridors demand modern, durable facade systems for its growing base of office complexes and mixed-use developments.",
    challenges: "High humidity and proximity to water bodies require corrosion-resistant aluminium profiles and sealed glazing systems to protect long-term facade integrity.",
    faqs: [
      { q: "Do you execute facade projects in Thane?", a: "Yes, we handle full-scope facade projects across Thane including structural glazing, curtain walls, and ACP cladding for commercial developments." },
      { q: "What is your project turnaround for Thane commercial projects?", a: "Depending on scale, most Thane commercial facade projects are completed within 8–16 weeks with dedicated on-site supervision." }
    ]
  },
  "chennai": {
    intro: "Chennai's thriving IT corridors, automotive belts, and port precincts demand coastal-engineered curtain walls and structural glazing resilient to cyclonic storms and heavy maritime humidity.",
    challenges: "Severe coastal marine exposure and high cyclonic wind pressure require 25-micron anodized extrusions, marine-grade SS-316 hardware, and dynamic water penetration tested seals to withstand Bay of Bengal typhoons.",
    faqs: [
      { q: "Do you provide cyclone-resistant curtain wall facades in Chennai?", a: "Yes. Our systems are wind-load engineered up to 4.5 kPa in strict compliance with IS 875 Part 3 cyclone zone requirements, utilizing laminated DGU safety glass." },
      { q: "Can you deliver turnkey facade execution in OMR and Guindy tech hubs?", a: "Yes, Fine Glaze delivers complete design, factory fabrication, and on-site crane erection across Chennai's commercial hubs." }
    ]
  },
  "ahmedabad": {
    intro: "Ahmedabad and GIFT City represent India's fastest-growing financial and corporate elevations, demanding futuristic unitized curtain walls and IGBC-certified energy-efficient building envelopes.",
    challenges: "Arid summer heat exceeding 46°C demands superior thermal-break systems and low-SHGC solar control glass to minimize cooling energy and achieve international green building ratings.",
    faqs: [
      { q: "Do you execute high-rise facade projects in GIFT City and Ahmedabad?", a: "Yes, Fine Glaze executes precision unitized curtain walls, ACP cladding, and architectural louvers conforming to GIFT City's high-rise building codes." },
      { q: "What glass specifications do you recommend for Ahmedabad's climate?", a: "We specify Double Glazed Units with soft-coat Low-E on surface #2, maintaining SHGC below 0.22 and U-value under 1.6 W/m²K to optimize HVAC load." }
    ]
  },
  "kolkata": {
    intro: "Kolkata's IT parks in Salt Lake Sector V and New Town demand modern corporate architectural glazing engineered for high monsoon rainfall and humid tropical conditions.",
    challenges: "Prolonged monsoon deluges and seasonal nor'westers require continuous pressure-equalized rain-screen curtain walls and engineered EPDM perimeter gaskets to prevent water ingress.",
    faqs: [
      { q: "Do you undertake commercial glazing in New Town and Sector V, Kolkata?", a: "Yes, we provide turnkey facade contracting, unitized curtain wall installation, and ACP cladding across Kolkata's commercial parks." },
      { q: "How do your facades prevent water leakage during eastern monsoons?", a: "We utilize pressure-equalized rain-screen principles with factory-vulcanized EPDM corner gaskets and Dow Corning weatherproofing sealants." }
    ]
  },
  "chandigarh": {
    intro: "Chandigarh and Mohali's premier corporate offices, institutional campuses, and healthcare centres require clean architectural lines, thermal insulation, and strict acoustic dampening.",
    challenges: "Extreme seasonal variations from chilly northern winters to scorching summers demand high-performance thermal break fenestration and acoustic laminated glass.",
    faqs: [
      { q: "Do you execute architectural facades in Chandigarh and Mohali?", a: "Yes, Fine Glaze executes structural glazing, system aluminium windows, and composite cladding across the Tricity region." },
      { q: "Can your system windows cut highway and city noise in Chandigarh?", a: "Yes, our acoustic DGU systems deliver sound insulation up to 42 dB, creating calm, productive office and healthcare interiors." }
    ]
  },
  "jaipur": {
    intro: "Jaipur's rising commercial hubs, luxury hotels, and IT parks require modern glass envelopes harmonized with desert climate solar protection and architectural screens.",
    challenges: "High solar radiation and airborne dust require heavy-duty solar control coatings, architectural aerofoil louvers, and dust-impervious multi-point window seals.",
    faqs: [
      { q: "Do you execute hotel and commercial facades in Jaipur?", a: "Yes, we deliver structural glazing, spider glass atriums, and CNC perforated sun-shading jali envelopes across Rajasthan." },
      { q: "How do your facades cut solar heat in Rajasthan?", a: "We integrate external aluminium aerofoil fins and low-E insulated glass units that block over 75% of infrared solar radiation." }
    ]
  },
  "lucknow": {
    intro: "Lucknow and Kanpur's expanding institutional, healthcare, and IT corridors require energy-efficient facade systems that blend modern corporate grandeur with durable weather protection.",
    challenges: "Dense seasonal fog, winter temperature drops, and intense summer heat demand balanced thermal-transmittance glass envelopes and weather-tight joinery.",
    faqs: [
      { q: "Do you supply and install facades in Lucknow and Kanpur?", a: "Yes, Fine Glaze delivers turnkey facade and fenestration contracts for commercial towers and hospitals across Uttar Pradesh." },
      { q: "What warranties do you offer on facade installations?", a: "We provide comprehensive Defect Liability Period (DLP) warranties along with 10–20 year manufacturer warranties on glass coatings and PVDF panels." }
    ]
  },
  "indore": {
    intro: "Indore and Bhopal's commercial centers and Super Corridor IT parks demand high-speed unitized curtain walls and fire-rated ACP cladding for Grade-A corporate offices.",
    challenges: "High commercial growth demands fast-track construction schedules with zero compromise on structural safety, wind load resistance, and fire-safety standards.",
    faqs: [
      { q: "Do you execute projects in Indore Super Corridor and Vijay Nagar?", a: "Yes, we provide end-to-end design, factory prefabrication, and certified on-site erection across Madhya Pradesh." },
      { q: "Are your ACP cladding systems fire-rated for commercial buildings?", a: "Yes, all composite panels comply with NBC 2016 Part 4 using Class A2/B1 non-combustible mineral cores and certified perimeter cavity barriers." }
    ]
  },
  "kochi": {
    intro: "Kochi and Thiruvananthapuram's waterfront IT parks and luxury hospitality developments require marine-engineered structural glazing and salt-spray-resistant aluminium envelopes.",
    challenges: "Intense coastal monsoon rainfall and maritime salt spray demand marine-grade SS-316 fittings, heavy 25-micron anodized aluminium, and multi-barrier waterproofing.",
    faqs: [
      { q: "Do you execute coastal facades in Kochi and Kerala?", a: "Yes, Fine Glaze executes specialized marine-grade facade packages for waterfront corporate parks and luxury resorts across Kerala." },
      { q: "How do your facades resist coastal corrosion in Kerala?", a: "We employ architectural virgin 6063-T6 extrusions with certified marine PVDF coatings, EPDM dry-glazing gaskets, and SS-316 stainless steel fixings." }
    ]
  }
};

// ==========================================
// 4. COMPONENT
// ==========================================
export default function CityLanding() {
  const { city, service } = useParams<{ city?: string; service?: string }>();
  const slug = service && city ? `${service}-${city}` : (city || service);
  if (!slug) return <Navigate to="/services" replace />;

  const lowerSlug = slug.toLowerCase();

  // Sort by length DESC to prevent "mumbai" matching before "navi-mumbai"
  const sortedLocationKeys = Object.keys(allLocations).sort((a, b) => b.length - a.length);
  const sortedServiceKeys = Object.keys(serviceKeywords).sort((a, b) => b.length - a.length);

  const matchedLocationKey = sortedLocationKeys.find(key => lowerSlug.endsWith(key)) || "";
  const matchedServiceKey = sortedServiceKeys.find(key => lowerSlug.startsWith(key)) || "facade-contractor";

  const matchedLocation = allLocations[matchedLocationKey] || allLocations["pan-india"];
  const serviceData = serviceKeywords[matchedServiceKey] || serviceKeywords["facade-contractor"];

  if (!matchedLocation) return <Navigate to="/services" replace />;

  const profile = cityProfiles[matchedLocation.parentCity] || cityProfiles["pan-india"];

  const getRegionName = () => {
    if (matchedLocation.parentCity === "pan-india") return "India";
    if (["delhi-ncr", "delhi", "gurgaon", "noida", "greater-noida", "faridabad"].includes(matchedLocationKey)) return "Delhi NCR";
    if (["bengaluru", "bangalore", "whitefield", "electronic-city"].includes(matchedLocationKey)) return "Karnataka";
    if (["hyderabad", "hitec-city", "gachibowli"].includes(matchedLocationKey)) return "Telangana";
    if (["visakhapatnam", "vijayawada"].includes(matchedLocationKey)) return "Andhra Pradesh";
    if (["chennai", "coimbatore"].includes(matchedLocationKey)) return "Tamil Nadu";
    if (["ahmedabad", "gift-city", "surat", "vadodara", "rajkot"].includes(matchedLocationKey)) return "Gujarat";
    if (["kolkata", "new-town-kolkata"].includes(matchedLocationKey)) return "West Bengal";
    if (["bhubaneswar"].includes(matchedLocationKey)) return "Odisha";
    if (["chandigarh", "mohali"].includes(matchedLocationKey)) return "Punjab / Chandigarh";
    if (["jaipur"].includes(matchedLocationKey)) return "Rajasthan";
    if (["lucknow", "kanpur"].includes(matchedLocationKey)) return "Uttar Pradesh";
    if (["dehradun"].includes(matchedLocationKey)) return "Uttarakhand";
    if (["indore", "bhopal"].includes(matchedLocationKey)) return "Madhya Pradesh";
    if (["raipur"].includes(matchedLocationKey)) return "Chhattisgarh";
    if (["kochi", "thiruvananthapuram"].includes(matchedLocationKey)) return "Kerala";
    return "Maharashtra";
  };

  // JSON-LD Schemas
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": profile.faqs.map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a }
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://fineglaze.com/services" },
        { "@type": "ListItem", "position": 3, "name": `${serviceData.label} in ${matchedLocation.name}`, "item": `https://fineglaze.com/facade-contractor/${slug}` }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Fine Glaze",
      "description": `${serviceData.label} specialists serving ${matchedLocation.name} Pan India`,
      "url": `https://fineglaze.com/facade-contractor/${slug}`,
      "telephone": "+918369233566",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": matchedLocation.name,
        "addressRegion": getRegionName(),
        "addressCountry": "IN"
      }
    }
  ];

  // Related locations
  const candidateRelated = Object.keys(allLocations)
    .filter(k => allLocations[k].parentCity === matchedLocation.parentCity && k !== matchedLocationKey);
  const relatedLocations = candidateRelated.length >= 3
    ? candidateRelated.slice(0, 10)
    : ["pan-india", "delhi-ncr", "bengaluru", "hyderabad", "chennai", "ahmedabad", "kolkata", "chandigarh", "jaipur", "indore", "kochi", "pune", "mumbai"].filter(k => k !== matchedLocationKey).slice(0, 10);

  return (
    <Layout darkHero>
      <SEO
        title={`${serviceData.label} in ${matchedLocation.name} | Pan India Facade Contractor – Fine Glaze`}
        description={`Expert ${serviceData.label} services in ${matchedLocation.name}. ${profile.intro}`}
        canonical={`https://fineglaze.com/facade-contractor/${slug}`}
        keywords={`${serviceData.label} in ${matchedLocation.name}, ${serviceData.label} Pan India, ${serviceData.label} all India, facade contractor Pan India, architectural glazing all India, commercial facade India`}
        schemas={schemas}
      />

      {/* HERO */}
      <section className="relative pt-28 pb-20 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-cover bg-center" style={{ backgroundImage: `url('${matchedLocation.image}')` }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-2 text-amber-400 text-sm font-bold mb-4 uppercase">
            <MapPin size={16} /> {matchedLocation.name}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            {serviceData.label} in <span className="text-amber-500">{matchedLocation.name}</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl border-l-4 border-amber-500 pl-4 leading-relaxed">
            {profile.intro}
          </p>
          <div className="flex gap-4 mt-8">
            <Link to="/contact">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700">Get Quote</Button>
            </Link>
            <a href="tel:+918369233566">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-white/90 font-bold">Call Expert</Button>
            </a>
          </div>
        </div>
      </section>

      {/* SERVICE + REGIONAL DETAIL */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Expert {serviceData.label} in {matchedLocation.name}
            </h2>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 mb-6">
              <h3 className="flex items-center gap-2 font-bold mb-2">
                <ShieldCheck className="text-amber-600" /> Regional Challenges & Standards
              </h3>
              <p className="text-slate-600 text-sm">{profile.challenges}</p>
            </div>
            <p className="text-slate-600 mb-8">{serviceData.uniqueParagraph}</p>
            <div className="grid grid-cols-2 gap-4">
              {serviceData.features.map(f => (
                <div key={f} className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg text-xs font-bold">
                  <CheckCircle2 size={16} className="text-amber-600" /> {f}
                </div>
              ))}
            </div>
          </div>
          <img
            src={serviceData.image}
            alt={`${serviceData.label} in ${matchedLocation.name} - Fine Glaze`}
            className="rounded-2xl shadow-xl object-cover h-96 w-full"
          />
        </div>
      </section>

      {/* INTERNAL LINKS */}
      {relatedLocations.length > 0 && (
        <section className="py-16 bg-slate-50 border-t">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl font-bold mb-8">
              {serviceData.label} — Other Locations {matchedLocation.parentCity === "pan-india" ? "Across India" : `in ${allLocations[matchedLocationKey]?.parentCity ? allLocations[matchedLocationKey].parentCity.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') : 'India'}`}
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {relatedLocations.map(key => (
                <Link
                  key={key}
                  to={`/facade-contractor/${matchedServiceKey}-${key}`}
                  className="px-4 py-2 bg-white border rounded-full text-xs font-bold hover:border-amber-500 transition-colors"
                >
                  {allLocations[key]?.name || key}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-10 text-center">
            {serviceData.label} in {matchedLocation.name} — FAQs
          </h2>
          <Accordion type="single" collapsible className="border rounded-xl p-2">
            {profile.faqs.map((f, i) => (
              <AccordionItem value={`item-${i}`} key={i}>
                <AccordionTrigger className="text-left font-bold">{f.q}</AccordionTrigger>
                <AccordionContent>{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </Layout>
  );
                                     }
