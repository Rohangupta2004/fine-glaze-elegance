import { useParams, Navigate, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, ArrowRight, Building2, ShieldCheck, Map, CheckCircle2 } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SEO from "@/components/SEO";

// ==========================================
// 1. THE AUTHORITY HUB PRIORITIZATION
// ==========================================
const hubPriority: Record<string, number> = {
  "bkc": 1, "hinjewadi": 1, "lower-parel": 1, "kharadi": 1, "thane": 1,
  "andheri": 2, "baner": 2, "mahape": 2, "vikhroli": 2,
  // Default priority for others is 3
};

// ==========================================
// 2. REGIONAL CONTEXT PROFILES
// ==========================================
const cityProfiles: Record<string, { intro: string; challenges: string; trend: string; areas: string[]; faqs: {q: string, a: string}[] }> = {
  "mumbai": {
    intro: "Mumbai’s vertical skyline demands precision facade engineering. We specialize in executing structural glazing and cladding for high-rise commercial developments requiring rigorous safety standards.",
    challenges: "Coastal environments demand aggressive protection. Our systems utilize coastal-grade PVDF coatings and 25-micron anodization to resist salt-air corrosion, while our curtain walls are engineered for extreme high-rise wind pressures.",
    trend: "Luxury commercial towers and high-density corporate parks.",
    areas: ["BKC", "Lower Parel", "Andheri", "Worli", "Goregaon", "Nariman Point"],
    faqs: [
      { q: "How do you prevent salt-water corrosion in Mumbai?", a: "We utilize specialized coastal-grade PVDF painting and heavy 25-micron anodization, with SS-316 grade hardware to prevent rusting in humid, coastal conditions." },
      { q: "Are your curtain walls tested for high-rise wind loads?", a: "Yes, our systems are engineered and tested for wind-loads exceeding 4.5kPa, ensuring maximum safety for Mumbai skyscrapers." }
    ]
  },
  "pune": {
    intro: "Pune’s expanding IT corridors require high-performance commercial facades. We deliver scalable, energy-efficient glazing solutions for modern tech campuses and corporate parks.",
    challenges: "With heavy monsoon exposure and wide-spread campuses, waterproofing is critical. Our DGU systems reduce HVAC costs, while integrated EPDM gaskets guarantee zero water ingress during Pune's rainy season.",
    trend: "Sprawling IT campuses, tech parks, and mid-rise commercial hubs.",
    areas: ["Hinjewadi", "Kharadi", "Baner", "Viman Nagar", "Magarpatta", "Balewadi"],
    faqs: [
      { q: "What is the best facade for Pune's monsoon season?", a: "Unitized curtain walls are ideal. Factory-assembled seals provide mathematically precise waterproofing, guaranteed for heavy rain regions like Pune." },
      { q: "How do your glass systems help with IT park thermal insulation?", a: "We use low-E glass and thermal-break profiles to reflect solar heat, drastically cutting electricity costs for large-scale office towers." }
    ]
  },
  "navi-mumbai": {
    intro: "As Navi Mumbai evolves into a premier corporate hub, we provide robust facade solutions engineered for modern office towers and large-scale industrial parks.",
    challenges: "Bridging the gap between industrial durability and corporate aesthetics, our systems offer heavy-duty structural integrity for high-growth zones.",
    trend: "Industrial-to-corporate transitions and modern IT hubs.",
    areas: ["Mahape", "Vashi", "Airoli", "CBD Belapur", "Kharghar"],
    faqs: [
      { q: "Do you handle industrial-to-commercial facade conversions?", a: "Yes, we specialize in retrofitting older industrial structures with modern ACP cladding and structural glazing to meet premium corporate standards." }
    ]
  }
};

// ==========================================
// 3. MICRO-LOCATION OVERRIDES
// ==========================================
const microOverrides: Record<string, { focus: string; nearby: string }> = {
  "hinjewadi": { focus: "massive IT SEZs and specialized tech campuses", nearby: "Phase 1, Phase 2, and Rajiv Gandhi Infotech Park" },
  "kharadi": { focus: "EON Free Zone and commercial IT developments", nearby: "EON IT Park, WTC Pune, and Zensar" },
  "bkc": { focus: "premium financial institutions and corporate HQs", nearby: "Diamond Bourse, Jio World Centre, and G-Block" },
  "andheri": { focus: "dense commercial retail and mixed-use office spaces", nearby: "MIDC, SEEPZ, and the Andheri-Kurla Road" },
  "mahape": { focus: "corporate parks and industrial-to-corporate conversions", nearby: "Millennium Business Park and TTC Industrial Area" }
};

// ==========================================
// 4. DATA DICTIONARIES
// ==========================================
const microLocations: Record<string, { name: string; parentCity: string; image: string }> = {
  "pune": { name: "Pune", parentCity: "pune", image: "/Puneairport.webp" },
  "hinjewadi": { name: "Hinjewadi", parentCity: "pune", image: "/Puneairport.webp" },
  "kharadi": { name: "Kharadi", parentCity: "pune", image: "/Puneairport.webp" },
  "baner": { name: "Baner", parentCity: "pune", image: "/Puneairport.webp" },
  "mumbai": { name: "Mumbai", parentCity: "mumbai", image: "/Embassy.webp" },
  "bkc": { name: "BKC", parentCity: "mumbai", image: "/Embassy.webp" },
  "andheri": { name: "Andheri", parentCity: "mumbai", image: "/Embassy.webp" },
  "mahape": { name: "Mahape", parentCity: "navi-mumbai", image: "/ltimindtree-mahape.webp" },
};

const serviceKeywords: Record<string, { label: string; uniqueParagraph: string; features: string[]; image: string }> = {
  "structural-glazing": { 
    label: "Structural Glazing", 
    uniqueParagraph: "We use advanced structural silicone to bond glass directly to the aluminium framing, ensuring an uninterrupted glass facade.",
    features: ["High-Performance DGU Glass", "Dow Corning Silicone", "Flush Aesthetics", "Wind-Load Tested"],
    image: "/Glazing.webp" 
  },
  "curtain-wall": { 
    label: "Curtain Wall Systems", 
    uniqueParagraph: "Our factory-assembled unitized panels reduce installation time by 40% while guaranteeing waterproof integrity.",
    features: ["Unitized Panels", "Thermal Break Tech", "EPDM Gaskets", "Rapid Installation"],
    image: "/Unitized.webp" 
  },
  "acp-cladding": { 
    label: "ACP Cladding", 
    uniqueParagraph: "We utilize Fire Retardant (FR) grade cores and PVDF coatings to ensure weather-proof and safety-compliant exteriors.",
    features: ["FR-Grade Core", "PVDF Coating", "CNC Routing", "Weather Sealing"],
    image: "/Panel.webp" 
  }
};

export default function CityLanding() {
  const { city: slug } = useParams<{ city: string }>();
  if (!slug) return <Navigate to="/services" replace />;

  const lowerSlug = slug.toLowerCase();
  let matchedLocation = null;
  let matchedLocationKey = "";
  let matchedServiceKey = "structural-glazing";

  // Match Location
  const sortedLocKeys = Object.keys(microLocations).sort((a, b) => b.length - a.length);
  for (const key of sortedLocKeys) {
    if (lowerSlug.includes(key)) {
      matchedLocation = microLocations[key];
      matchedLocationKey = key;
      break;
    }
  }

  // Match Service
  const sortedSrvKeys = Object.keys(serviceKeywords).sort((a, b) => b.length - a.length);
  for (const key of sortedSrvKeys) {
    if (lowerSlug.includes(key)) {
      matchedServiceKey = key;
      break;
    }
  }

  if (!matchedLocation) return <Navigate to="/services" replace />;

  const serviceData = serviceKeywords[matchedServiceKey];
  const localProfile = cityProfiles[matchedLocation.parentCity] || cityProfiles.pune;
  const microContext = microOverrides[matchedLocationKey];

  // Schema Generation
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": localProfile.faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://fineglaze.com/services" },
        { "@type": "ListItem", "position": 3, "name": matchedLocation.name, "item": `https://fineglaze.com/facade-contractor/${slug}` }
      ]
    }
  ];

  return (
    <Layout>
      <SEO
        title={`${serviceData.label} in ${matchedLocation.name} | Fine Glaze`}
        description={`Expert ${serviceData.label} services in ${matchedLocation.name}. ${localProfile.intro}`}
        canonical={`https://fineglaze.com/facade-contractor/${slug}`}
        schemas={schemas}
      />

      {/* HERO */}
      <section className="relative pt-28 pb-20 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-cover bg-center" style={{ backgroundImage: `url('${matchedLocation.image}')` }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-2 text-amber-400 text-sm font-bold mb-4 uppercase">
            <MapPin size={16} /> {matchedLocation.name}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {serviceData.label} in <span className="text-amber-500">{matchedLocation.name}</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl leading-relaxed border-l-4 border-amber-500 pl-4">
            {localProfile.intro}
            {microContext && <span className="block mt-2 text-amber-400 font-medium italic">Specialized focus on {microContext.focus}.</span>}
          </p>
          <div className="flex gap-4 mt-8">
            <Link to="/contact"><Button size="lg" className="bg-amber-600 hover:bg-amber-700">Get Quote</Button></Link>
            <a href="tel:+918369233566"><Button size="lg" variant="outline" className="text-white border-white/40">Call Expert</Button></a>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Localized Engineering for {matchedLocation.name}</h2>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 mb-6">
              <h3 className="flex items-center gap-2 font-bold mb-2"><ShieldCheck className="text-amber-600" /> Regional Challenges</h3>
              <p className="text-slate-600 text-sm">{localProfile.challenges}</p>
            </div>
            <p className="text-slate-600 mb-8">{serviceData.uniqueParagraph}</p>
            <div className="grid grid-cols-2 gap-4">
              {serviceData.features.map(f => (
                <div key={f} className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg text-xs font-bold"><CheckCircle2 size={16} className="text-amber-600" /> {f}</div>
              ))}
            </div>
          </div>
          <img src={serviceData.image} alt={serviceData.label} className="rounded-2xl shadow-xl object-cover h-96 w-full" />
        </div>
      </section>

      {/* INTERNAL LINKS (The Spiderweb) */}
      <section className="py-16 bg-slate-50 border-t">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-8">Related Hubs in {matchedLocation.parentCity}</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {Object.keys(microLocations)
              .filter(k => microLocations[k].parentCity === matchedLocation.parentCity && k !== matchedLocationKey)
              .sort((a, b) => (hubPriority[a] || 3) - (hubPriority[b] || 3))
              .slice(0, 8)
              .map(key => (
                <Link key={key} to={`/facade-contractor/${matchedServiceKey}-${key}`} className="px-4 py-2 bg-white border rounded-full text-sm hover:border-amber-500 transition-colors">
                  {serviceData.label} in {microLocations[key].name}
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-10 text-center">Localized FAQs</h2>
          <Accordion type="single" collapsible className="border rounded-xl p-2">
            {localProfile.faqs.map((f, i) => (
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
