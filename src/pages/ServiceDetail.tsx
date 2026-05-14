import { useParams, Navigate, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, CheckCircle2, MapPin, Building2 } from "lucide-react";
import SEO from "@/components/SEO";

// Service Data Dictionary
const serviceKeywords: Record<string, any> = {
  "structural-glazing": { 
    label: "Structural Glazing Systems", 
    desc: "Premium 2-side and 4-side structural glazing solutions for modern corporate towers.",
    extendedDesc: "Structural glazing is the pinnacle of modern architectural design. By utilizing high-tensile structural silicone to bond glass directly to the concealed aluminium framing, we eliminate the need for exterior pressure plates or caps. The result is a seamless, flush glass facade that offers superior thermal performance and a striking, uninterrupted aesthetic.",
    benefits: ["Seamless Flush Exterior", "Superior Wind-Load Resistance", "Enhanced Thermal & Acoustic Insulation", "Maximum Natural Light Transmission"],
    image: "/Glazing.webp" 
  },
  "curtain-wall": { 
    label: "Curtain Wall Engineering", 
    desc: "Unitized and semi-unitized glass curtain walls engineered for aggressive wind loads.",
    extendedDesc: "Our curtain wall systems are designed to protect mid-to-high-rise buildings from the harshest environmental elements. Whether utilizing factory-assembled unitized panels for rapid crane-installation or traditional stick-built systems for complex geometries, our engineering ensures total weatherproofing and structural integrity.",
    benefits: ["Rapid Factory-Assembled Deployment", "Integrated EPDM Weather Sealing", "Thermal-Break Technology", "Accommodates Building Sway & Seismic Shifts"],
    image: "/Unitized.webp" 
  },
  "acp-cladding": { 
    label: "ACP & Aluminium Cladding", 
    desc: "Fire-retardant Aluminium Composite Panel cladding for exterior building elevations.",
    extendedDesc: "Aluminium Composite Panels (ACP) offer the perfect balance of durability, weight, and aesthetic flexibility. We strictly utilize Fire Retardant (FR) grade cores combined with anti-fading PVDF coatings, ensuring your commercial facade not only looks exceptional but complies with all modern fire and safety codes.",
    benefits: ["Class B1/A2 Fire Retardant Cores", "25-Year PVDF Coating Guarantee", "High Strength-to-Weight Ratio", "Precision CNC Routing"],
    image: "/Panel.webp" 
  }
};

// Priority Hubs for Internal Silo Linking
const priorityHubs = [
  { slug: "mumbai", name: "Mumbai" },
  { slug: "pune", name: "Pune" },
  { slug: "navi-mumbai", name: "Navi Mumbai" },
  { slug: "thane", name: "Thane" },
  { slug: "bkc", name: "BKC" },
  { slug: "hinjewadi", name: "Hinjewadi" },
  { slug: "kharadi", name: "Kharadi" },
  { slug: "andheri", name: "Andheri" },
];

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) return <Navigate to="/services" replace />;

  const matchedServiceKey = Object.keys(serviceKeywords).find(key => slug === key);
  
  if (!matchedServiceKey) return <Navigate to="/services" replace />;

  const serviceData = serviceKeywords[matchedServiceKey];

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": serviceData.label,
      "description": serviceData.extendedDesc,
      "provider": { "@type": "Organization", "name": "Fine Glaze" },
      "areaServed": { "@type": "State", "name": "Maharashtra" }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://fineglaze.com/services" },
        { "@type": "ListItem", "position": 3, "name": serviceData.label, "item": `https://fineglaze.com/services/${slug}` }
      ]
    }
  ];

  return (
    <Layout darkHero>
      <SEO
        title={`${serviceData.label} Contractors in India | Fine Glaze`}
        description={serviceData.desc}
        canonical={`https://fineglaze.com/services/${slug}`}
        schemas={schemas}
      />

      <section className="relative pt-32 pb-24 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: `url('${serviceData.image}')` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10 max-w-5xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 text-sm font-bold mb-6">
            <Building2 size={16} /> Commercial Facade Engineering
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Advanced <span className="text-amber-500">{serviceData.label}</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl leading-relaxed mb-10">
            {serviceData.desc}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 px-8 py-6 text-lg border-0 text-white">
                Consult an Engineer <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Precision Engineering & Execution</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              {serviceData.extendedDesc}
            </p>
            
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <ShieldCheck className="text-amber-600" /> Core Advantages
            </h3>
            <div className="space-y-4">
              {serviceData.benefits.map((benefit: string) => (
                <div key={benefit} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <CheckCircle2 size={20} className="text-amber-600 shrink-0" />
                  <span className="font-semibold text-slate-800">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
             <div className="absolute inset-0 bg-amber-500 rounded-2xl transform translate-x-4 translate-y-4 opacity-20" />
             <img src={serviceData.image} alt={serviceData.label} className="relative rounded-2xl shadow-xl w-full h-[600px] object-cover" loading="lazy" width="800" height="600" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Localized Execution Zones
          </h2>
          <p className="text-slate-600 mb-10 max-w-2xl mx-auto">
            We provide dedicated engineering and installation teams for {serviceData.label.toLowerCase()} across major commercial hubs in Maharashtra.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {priorityHubs.map(hub => (
              <Link 
                key={hub.slug}
                to={`/facade-contractor/${slug}-${hub.slug}`} 
                className="flex flex-col items-center justify-center gap-2 p-6 bg-white rounded-xl border border-slate-200 hover:border-amber-500 hover:shadow-md transition-all group"
              >
                <MapPin className="text-slate-400 group-hover:text-amber-500 transition-colors" size={24} />
                <span className="font-bold text-slate-800 group-hover:text-amber-600 transition-colors">
                  {hub.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
              }
