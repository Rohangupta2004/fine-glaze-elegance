import { useParams, Navigate, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, ArrowRight, Building2, ShieldCheck, Clock, Award, CheckCircle2, Map } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SEO from "@/components/SEO";

// ==========================================
// 1. THE DEEP CITY CONTEXT PROFILES (The SEO Goldmine)
// ==========================================
const cityProfiles: Record<string, { intro: string; challenges: string; trend: string; areas: string[]; faqs: {q: string, a: string}[] }> = {
  "mumbai": {
    intro: "Mumbai’s towering vertical skyline demands precision facade engineering. We specialize in executing structural glazing and cladding for high-rise commercial developments that require rigorous safety standards.",
    challenges: "Coastal environments demand aggressive protection. Our aluminium systems utilize coastal-grade PVDF coatings and 25-micron anodization to resist salt-air corrosion, while our curtain walls are structurally engineered to withstand the extreme wind pressures of Mumbai skyscrapers.",
    trend: "Luxury commercial towers and high-density corporate parks.",
    areas: ["BKC", "Lower Parel", "Andheri", "Worli", "Goregaon"],
    faqs: [
      { q: "How do you prevent salt-water corrosion on aluminium facades in Mumbai?", a: "We utilize specialized coastal-grade PVDF painting and heavy anodization. Furthermore, all exposed hardware is minimum SS-316 grade to prevent rusting in humid, coastal conditions." },
      { q: "Are your curtain walls tested for high-rise wind loads?", a: "Yes, our unitized and stick-built systems are engineered and tested for wind-loads exceeding 4.5kPa, ensuring maximum safety for high-rise towers in Mumbai." }
    ]
  },
  "pune": {
    intro: "Pune’s rapidly expanding IT corridors require high-performance commercial facades. We deliver scalable, energy-efficient glazing solutions designed for sprawling tech campuses and modern corporate parks.",
    challenges: "With wide-spread campuses and heavy monsoon exposure, waterproofing and thermal management are critical. Our DGU (Double Glazed Unit) systems drastically reduce HVAC cooling costs, while integrated EPDM gaskets guarantee zero water ingress during Pune's heavy rains.",
    trend: "Sprawling IT campuses, tech parks, and low-to-mid rise commercial hubs.",
    areas: ["Hinjewadi Phase 1, 2 & 3", "Kharadi IT Park", "Baner", "Viman Nagar", "Magarpatta"],
    faqs: [
      { q: "What is the best facade system for Pune's heavy monsoon season?", a: "Unitized curtain walls are highly recommended. Because they are factory-assembled, their weather seals are mathematically precise, guaranteeing 100% waterproofing even during severe rain." },
      { q: "How do your glass systems help with thermal insulation for IT parks?", a: "We utilize low-E (low-emissivity) glass paired with thermal-break aluminium profiles. This reflects exterior solar heat while keeping the air-conditioned interior cool, massively reducing electricity costs for large IT buildings." }
    ]
  },
  "navi-mumbai": {
    intro: "As Navi Mumbai evolves into a premier corporate and industrial hub, we provide robust, high-performance facade solutions engineered for both modern office towers and large-scale commercial parks.",
    challenges: "Bridging the gap between industrial durability and corporate aesthetics, our systems offer heavy-duty structural integrity while maintaining the sleek, modern glass finishes expected in high-end commercial zones.",
    trend: "Industrial parks transitioning to modern corporate IT hubs.",
    areas: ["Mahape", "Vashi", "Airoli", "CBD Belapur", "Kharghar"],
    faqs: [
      { q: "Do you handle large-scale industrial-to-commercial facade conversions?", a: "Yes, we specialize in retrofitting older industrial structures with modern ACP cladding and structural glazing to elevate them to premium corporate standards." },
      { q: "Can you execute facade projects in Navi Mumbai's MIDC zones?", a: "Absolutely. We have extensive experience managing logistics and execution within Navi Mumbai's industrial and corporate zones, ensuring strict adherence to local development guidelines." }
    ]
  },
  "thane": {
    intro: "Thane is experiencing explosive commercial growth. We partner with developers to execute premium glass and aluminium facades for new corporate centers and high-traffic commercial retail spaces.",
    challenges: "Speed of execution is critical in Thane's fast-paced development sector. Our localized fabrication allows us to deliver factory-finished unitized panels rapidly, cutting on-site installation time significantly.",
    trend: "Mixed-use commercial developments and corporate retail centers.",
    areas: ["Wagle Estate", "Ghodbunder Road", "Majiwada", "Kalwa"],
    faqs: [
      { q: "How fast can you deploy to a commercial site in Thane?", a: "With our streamlined fabrication processes and localized supply chain, we can mobilize our execution teams rapidly to align with aggressive construction timelines in the Thane district." },
      { q: "What maintenance services do you offer post-installation?", a: "We offer comprehensive Annual Maintenance Contracts (AMC) including rope-access glass cleaning, sealant replacement, and structural audits." }
    ]
  }
};

// ==========================================
// 2. THE LOCATION DICTIONARY (Micro-Hubs)
// ==========================================
const microLocations: Record<string, { name: string; parentCity: string; image: string }> = {
  // PUNE
  "pune": { name: "Pune", parentCity: "pune", image: "/Puneairport.webp" },
  "hinjewadi": { name: "Hinjewadi IT Park", parentCity: "pune", image: "/Puneairport.webp" },
  "kharadi": { name: "Kharadi", parentCity: "pune", image: "/Puneairport.webp" },
  "baner": { name: "Baner", parentCity: "pune", image: "/Puneairport.webp" },
  "wakad": { name: "Wakad", parentCity: "pune", image: "/Puneairport.webp" },
  "viman-nagar": { name: "Viman Nagar", parentCity: "pune", image: "/Puneairport.webp" },
  "magarpatta": { name: "Magarpatta City", parentCity: "pune", image: "/Puneairport.webp" },
  "hadapsar": { name: "Hadapsar", parentCity: "pune", image: "/Puneairport.webp" },
  "pimpri": { name: "Pimpri", parentCity: "pune", image: "/Puneairport.webp" },
  "chinchwad": { name: "Chinchwad", parentCity: "pune", image: "/Puneairport.webp" },
  "kalyani-nagar": { name: "Kalyani Nagar", parentCity: "pune", image: "/Puneairport.webp" },
  "koregaon-park": { name: "Koregaon Park", parentCity: "pune", image: "/Puneairport.webp" },
  "aundh": { name: "Aundh", parentCity: "pune", image: "/Puneairport.webp" },
  "balewadi": { name: "Balewadi", parentCity: "pune", image: "/Puneairport.webp" },

  // MUMBAI
  "mumbai": { name: "Mumbai", parentCity: "mumbai", image: "/Embassy.webp" },
  "bkc": { name: "BKC (Bandra Kurla Complex)", parentCity: "mumbai", image: "/Embassy.webp" },
  "andheri": { name: "Andheri", parentCity: "mumbai", image: "/Embassy.webp" },
  "powai": { name: "Powai", parentCity: "mumbai", image: "/Embassy.webp" },
  "lower-parel": { name: "Lower Parel", parentCity: "mumbai", image: "/Embassy.webp" },
  "vikhroli": { name: "Vikhroli", parentCity: "mumbai", image: "/Embassy.webp" },
  "goregaon": { name: "Goregaon", parentCity: "mumbai", image: "/Embassy.webp" },
  "worli": { name: "Worli", parentCity: "mumbai", image: "/Embassy.webp" },
  "byculla": { name: "Byculla", parentCity: "mumbai", image: "/Salsette27.webp" },
  "malad": { name: "Malad", parentCity: "mumbai", image: "/Embassy.webp" },
  "borivali": { name: "Borivali", parentCity: "mumbai", image: "/Embassy.webp" },
  "dadar": { name: "Dadar", parentCity: "mumbai", image: "/Embassy.webp" },
  "nariman-point": { name: "Nariman Point", parentCity: "mumbai", image: "/Embassy.webp" },

  // NAVI MUMBAI & THANE
  "navi-mumbai": { name: "Navi Mumbai", parentCity: "navi-mumbai", image: "/ltimindtree-mensa-campus-mahape-navi-mumbai-1 (1).webp" },
  "vashi": { name: "Vashi", parentCity: "navi-mumbai", image: "/ltimindtree-mensa-campus-mahape-navi-mumbai-1 (1).webp" },
  "mahape": { name: "Mahape", parentCity: "navi-mumbai", image: "/ltimindtree-mensa-campus-mahape-navi-mumbai-1 (1).webp" },
  "airoli": { name: "Airoli", parentCity: "navi-mumbai", image: "/ltimindtree-mensa-campus-mahape-navi-mumbai-1 (1).webp" },
  "belapur": { name: "CBD Belapur", parentCity: "navi-mumbai", image: "/ltimindtree-mensa-campus-mahape-navi-mumbai-1 (1).webp" },
  "kharghar": { name: "Kharghar", parentCity: "navi-mumbai", image: "/ltimindtree-mensa-campus-mahape-navi-mumbai-1 (1).webp" },
  "panvel": { name: "Panvel", parentCity: "navi-mumbai", image: "/ltimindtree-mensa-campus-mahape-navi-mumbai-1 (1).webp" },
  "thane": { name: "Thane", parentCity: "thane", image: "/ltimindtree-mensa-campus-mahape-navi-mumbai-1 (1).webp" },
};

// ==========================================
// 3. THE SERVICE DICTIONARY 
// ==========================================
const serviceKeywords: Record<string, { label: string; desc: string; uniqueParagraph: string; features: string[]; image: string }> = {
  "commercial-construction": { 
    label: "Commercial Construction Facades", 
    desc: "high-performance facade engineering for new commercial construction and high-rise developments",
    uniqueParagraph: "By eliminating exterior aluminium caps, our systems provide a seamless, flush glass aesthetic that defines premium corporate architecture.",
    features: ["High-Performance DGU Glass", "Dow Corning Structural Silicone", "Frameless Exterior Aesthetics", "Wind-Load Tested up to 4.5kPa"],
    image: "/Business park.webp" 
  },
  "structural-glazing": { 
    label: "Structural Glazing", 
    desc: "premium 2-side and 4-side structural glazing solutions for modern corporate towers",
    uniqueParagraph: "We use advanced structural silicone to bond glass directly to the aluminium framing, ensuring a seamless, uninterrupted glass facade that meets strict commercial safety codes.",
    features: ["High-Performance DGU Glass", "Dow Corning Structural Silicone", "Seamless Flush Aesthetics", "Wind-Load Tested up to 4.5kPa"],
    image: "/Glazing.webp" 
  },
  "curtain-wall": { 
    label: "Curtain Wall Systems", 
    desc: "unitized and semi-unitized glass curtain walls engineered for aggressive wind loads",
    uniqueParagraph: "For developments where speed is critical, our factory-assembled unitized panels reduce on-site installation time by up to 40% while guaranteeing waterproof integrity.",
    features: ["Factory-Assembled Unitized Panels", "Thermal Break Technology", "Integrated EPDM Gaskets", "Rapid Crane Installation"],
    image: "/Unitized.webp" 
  },
  "acp-cladding": { 
    label: "ACP Cladding", 
    desc: "fire-retardant Aluminium Composite Panel (ACP) cladding for exterior building elevations",
    uniqueParagraph: "Our ACP installations strictly utilize Fire Retardant (FR) grade cores and PVDF coatings to ensure your building's exterior remains vibrant, weather-proof, and fully compliant with fire safety codes.",
    features: ["Class B1 Fire Retardant Core", "Anti-Fading PVDF Coating", "Precision CNC Routing & Grooving", "Seamless Weather Sealing"],
    image: "/Panel.webp" 
  },
  "glass-railing": { 
    label: "Frameless Glass Railings", 
    desc: "heavy-duty toughened glass balustrades and railings for commercial spaces",
    uniqueParagraph: "We provide premium frameless railing systems that combine unobstructed views with maximum safety standards utilizing heavy-duty base shoe systems.",
    features: ["Toughened Laminated Glass", "Heavy-Duty Base Shoes", "SS 304/316 Handrails", "Impact Tested for Commercial Use"],
    image: "/Railing.webp" 
  },
  "facade-maintenance": { 
    label: "Facade Maintenance & Repair", 
    desc: "expert glass replacement, silicone sealant repair, and facade AMC services",
    uniqueParagraph: "Our rope-access technicians can swiftly replace broken DGU glass and reseal weather joints without disrupting your building's daily operations.",
    features: ["Rope Access Glass Replacement", "Weather Sealant Restoration", "Water Leakage Fixing", "Annual Maintenance Contracts (AMC)"],
    image: "/Amc.webp" 
  },
  "facade-contractor": { 
    label: "Commercial Facade Contractor", 
    desc: "comprehensive, end-to-end commercial facade contracting and execution",
    uniqueParagraph: "From initial shop drawings and 3D modeling to final site handover, our in-house engineering and fabrication teams ensure your architectural vision is realized without compromise.",
    features: ["In-House Engineering Team", "Dedicated Local Fabrication", "Safety-First Site Execution", "Strict Timeline Handover"],
    image: "/Glass installation.webp" 
  }
};

export default function CityLanding() {
  const { city: slug } = useParams<{ city: string }>();
  
  if (!slug) return <Navigate to="/services" replace />;

  const lowerSlug = slug.toLowerCase();
  let matchedLocation = null;
  let matchedServiceKey = "facade-contractor"; 

  const sortedLocKeys = Object.keys(microLocations).sort((a, b) => b.length - a.length);
  for (const locKey of sortedLocKeys) {
    if (lowerSlug.includes(locKey)) {
      matchedLocation = microLocations[locKey];
      break; 
    }
  }

  const sortedSrvKeys = Object.keys(serviceKeywords).sort((a, b) => b.length - a.length);
  for (const srvKey of sortedSrvKeys) {
    if (lowerSlug.includes(srvKey)) {
      matchedServiceKey = srvKey;
      break;
    }
  }

  if (!matchedLocation) return <Navigate to="/services" replace />;

  const serviceData = serviceKeywords[matchedServiceKey];
  const localProfile = cityProfiles[matchedLocation.parentCity] || cityProfiles.pune;

  const dynamicMetaTitle = `Top ${serviceData.label} in ${matchedLocation.name} | Fine Glaze`;
  const dynamicDescription = `Looking for ${serviceData.label} in ${matchedLocation.name}? ${localProfile.intro} Call +91 8369233566.`;
  const dynamicKeywords = `${serviceData.label} ${matchedLocation.name}, ${serviceData.label} ${matchedLocation.parentCity}, commercial construction ${matchedLocation.name}, glass facade contractors ${matchedLocation.name}`;

  return (
    <Layout darkHero>
      <SEO
        title={dynamicMetaTitle}
        description={dynamicDescription}
        canonical={`https://fineglaze.com/facade-contractor/${slug}`}
        keywords={dynamicKeywords}
        ogImage={`https://fineglaze.com${matchedLocation.image}`}
      />

      {/* HERO SECTION - Injecting Local Intro */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900" />
        <div
          className="absolute inset-0 opacity-30 bg-cover bg-center"
          style={{ backgroundImage: `url('${matchedLocation.image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />

        <div className="container mx-auto px-4 relative z-10 max-w-5xl">
          <div className="flex items-center gap-2 text-amber-400 text-sm font-bold mb-4 uppercase tracking-wider">
            <MapPin size={16} /> {matchedLocation.name}, {matchedLocation.parentCity.replace('-', ' ')}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight capitalize">
            Expert <span className="text-amber-500">{serviceData.label}</span> in {matchedLocation.name}
          </h1>

          <p className="text-lg md:text-xl text-slate-200 max-w-3xl mb-8 leading-relaxed border-l-4 border-amber-500 pl-4">
            {localProfile.intro}
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <Link to="/contact">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg">
                Get a Free Quote <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
            <a href="tel:+918369233566">
              <Button size="lg" variant="outline" className="border-white/40 text-white bg-white/10 hover:bg-white/20 hover:text-white px-8 py-6 gap-2 text-lg font-bold shadow-lg backdrop-blur-sm">
                <Phone size={18} /> Call +91 8369233566
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION WITH CITY-SPECIFIC CHALLENGES */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
              Localized Engineering for <span className="text-amber-600">{matchedLocation.name}</span>
            </h2>
            
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-8 shadow-sm">
              <h3 className="flex items-center gap-2 font-bold text-slate-900 mb-3">
                 <ShieldCheck className="text-amber-600" size={20} />
                 Addressing Regional Challenges
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                {localProfile.challenges}
              </p>
            </div>
            
            <p className="text-slate-600 leading-relaxed mb-8">
              <strong className="text-slate-900 block mb-2">Service Execution:</strong>
              {serviceData.uniqueParagraph}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {serviceData.features.map((feature) => (
                <div key={feature} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-100 shadow-sm hover:border-amber-200 transition-colors">
                  <CheckCircle2 size={20} className="text-amber-600 shrink-0 mt-0.5" />
                  <span className="font-bold text-slate-800 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full min-h-[500px]">
            <img
              src={serviceData.image}
              alt={`${serviceData.label} executed in ${matchedLocation.name}`}
              className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent flex flex-col justify-end p-8">
               <div className="flex items-center gap-3 mb-2">
                 <Building2 className="text-amber-500" size={24} />
                 <h3 className="text-white font-bold text-2xl">{serviceData.label}</h3>
               </div>
               <p className="text-slate-300 font-medium">Engineered for {localProfile.trend}</p>
            </div>
          </div>
        </div>
      </section>

      {/* DYNAMIC AREAS SERVED (Boosts local keyword clusters) */}
      <section className="py-12 bg-amber-600 text-white">
         <div className="container mx-auto px-4 max-w-5xl text-center">
            <h3 className="text-xl font-bold mb-6 flex items-center justify-center gap-2">
               <Map size={24} /> Executing Projects Across the {matchedLocation.parentCity.replace('-', ' ')} Region
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
               {localProfile.areas.map(area => (
                 <span key={area} className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium border border-white/20 backdrop-blur-sm">
                   {area}
                 </span>
               ))}
            </div>
         </div>
      </section>
      { /* DYNAMIC FAQ SECTION */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-2 text-center text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-slate-500 mb-10">Common inquiries regarding {serviceData.label.toLowerCase()} in the {matchedLocation.parentCity.replace('-', ' ')} area.</p>
          
          <Accordion type="single" collapsible className="w-full bg-white rounded-xl shadow-sm border p-2">
            
            {/* City Specific FAQs */}
            {localProfile.faqs.map((faq, index) => (
              <AccordionItem value={`city-faq-${index}`} key={index}>
                <AccordionTrigger className="text-left font-bold text-slate-800 px-4 hover:no-underline hover:bg-slate-50 rounded-lg">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed px-4 pt-2 pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}

            {/* Standard Service FAQ */}
            <AccordionItem value="service-faq">
              <AccordionTrigger className="text-left font-bold text-slate-800 px-4 hover:no-underline hover:bg-slate-50 rounded-lg">
                Do you provide {serviceData.label} services directly in {matchedLocation.name}?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed px-4 pt-2 pb-4">
                Yes, Fine Glaze executes and manages {serviceData.label.toLowerCase()} projects specifically for commercial clients, developers, and architects across {matchedLocation.name}. Our localized logistics ensure rapid material delivery and efficient site management.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 text-white text-center bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/Unitized.webp')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 max-w-3xl relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Discuss Your {matchedLocation.name} Site?
          </h2>
          <p className="text-slate-300 mb-10 text-lg">
            Connect directly with our engineering team for a free site evaluation, wind-load consultation, and detailed Bill of Quantities.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-7 text-lg font-bold w-full sm:w-auto">
                Request a Consultation
              </Button>
            </Link>
            <a href="tel:+918369233566">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-slate-900 px-10 py-7 gap-3 text-lg font-bold w-full sm:w-auto transition-colors">
                <Phone size={20} /> Dial +91 8369233566
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
