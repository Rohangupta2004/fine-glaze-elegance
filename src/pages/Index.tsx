import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  Calculator,
  CheckCircle2,
  FileBarChart,
  Gauge,
  Layers,
  MessageSquare,
  Upload,
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const selectorRules = [
  {
    buildingType: "Corporate",
    budget: "High",
    wind: "High",
    suggestion: "Unitized System",
    note: "Fast-track towers with precision off-site fabrication and better quality control.",
  },
  {
    buildingType: "Mall",
    budget: "Medium",
    wind: "Medium",
    suggestion: "Stick Curtain Wall",
    note: "Balances large visual frontage with phased installation and maintenance flexibility.",
  },
  {
    buildingType: "Hospital",
    budget: "Medium",
    wind: "High",
    suggestion: "ACP Tray System",
    note: "Durable facade package with practical access planning and clean panel replacement.",
  },
  {
    buildingType: "Commercial",
    budget: "Any",
    wind: "Any",
    suggestion: "Spider Glazing",
    note: "Open transparent frontage for lobbies and feature elevations.",
  },
];

const projectItems = [
  { name: "Navi Mumbai Finance Tower", city: "Mumbai", system: "Unitized", year: "2024", area: "92,000", cost: "₹8.2Cr - ₹9.6Cr", timeline: "11 months" },
  { name: "Emerald Meditech Campus", city: "Pune", system: "Stick", year: "2023", area: "64,500", cost: "₹4.8Cr - ₹5.4Cr", timeline: "8 months" },
  { name: "Skyline Retail Atrium", city: "Ahmedabad", system: "Spider", year: "2024", area: "48,000", cost: "₹3.1Cr - ₹3.9Cr", timeline: "6 months" },
];

const reasons = [
  "Wind Load Tested",
  "Structural Calculation Support",
  "Site Supervision",
  "3D Elevation Preview",
  "GST Registered Company",
  "5+ Years Warranty",
];

const journals = [
  "Difference between Unitized & Stick Curtain Wall",
  "How to Calculate Wind Load for High-Rise Facades",
  "ACP vs HPL: Performance, Aesthetics, and Lifecycle",
  "Fire Safety Standards for Aluminium + Glass Envelopes",
];

const Index = () => {
  const [buildingType, setBuildingType] = useState("Commercial");
  const [budget, setBudget] = useState("Medium");
  const [glass, setGlass] = useState("Double Glazed");
  const [wind, setWind] = useState("Medium");

  const [height, setHeight] = useState(14);
  const [area, setArea] = useState(18000);
  const [systemType, setSystemType] = useState("Stick Curtain Wall");
  const [thickness, setThickness] = useState(24);
  const [beforeAfter, setBeforeAfter] = useState(50);

  const recommendation = useMemo(() => {
    return (
      selectorRules.find(
        (rule) =>
          (rule.buildingType === buildingType || rule.buildingType === "Commercial") &&
          (rule.budget === budget || rule.budget === "Any") &&
          (rule.wind === wind || rule.wind === "Any"),
      ) ?? selectorRules[0]
    );
  }, [buildingType, budget, wind]);

  const costData = useMemo(() => {
    const base = systemType === "Unitized System" ? 4200 : systemType === "Spider Glazing" ? 5200 : systemType === "ACP Tray System" ? 3100 : 3600;
    const thicknessFactor = thickness / 12;
    const heightFactor = 1 + height / 100;
    const minCost = Math.round(area * base * thicknessFactor * heightFactor);
    const maxCost = Math.round(minCost * 1.2);
    const timeline = Math.max(4, Math.round((area / 7000) * (height / 12)));
    const weight = Math.round(area * (thickness / 10) * 4.6);

    return { minCost, maxCost, timeline, weight };
  }, [area, height, systemType, thickness]);

  return (
    <Layout>
      <main className="bg-slate-950 text-white">
        <section className="relative min-h-screen overflow-hidden border-b border-white/10">
          <video autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover opacity-45">
            <source src="https://videos.pexels.com/video-files/3209298/3209298-hd_1920_1080_25fps.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-slate-950/75 to-slate-950" />
          <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

          <div className="relative z-10 container mx-auto flex min-h-screen flex-col items-start justify-center px-4 py-24">
            <span className="rounded-full border border-sky-300/50 bg-sky-300/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-sky-100">Fine Glaze • Facade + Aluminium Solutions</span>
            <h1 className="mt-6 max-w-4xl text-5xl font-extrabold leading-tight md:text-7xl">Engineering the Future of Facades</h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-200">Aluminium • ACP • Curtain Wall • Structural Glazing</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/portfolio"><Button size="lg" className="bg-sky-500 text-slate-950 hover:bg-sky-400">View Projects</Button></Link>
              <Link to="/contact"><Button size="lg" variant="outline" className="border-white/40 bg-white/5 text-white hover:bg-white/10">Get Quote in 60 sec <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
            </div>
          </div>
        </section>

        <section className="container mx-auto grid gap-8 px-4 py-20 lg:grid-cols-2">
          <Card className="border border-white/15 bg-white/5 text-white backdrop-blur">
            <CardContent className="space-y-4 p-6">
              <h2 className="text-3xl font-bold">Interactive Product Selector</h2>
              <p className="text-sm text-slate-300">Select project conditions and get the most suitable facade system.</p>
              <div className="grid gap-3 sm:grid-cols-2">
                <select className="rounded-md border border-white/20 bg-slate-900 p-2" value={buildingType} onChange={(e) => setBuildingType(e.target.value)}><option>Commercial</option><option>Hospital</option><option>Mall</option><option>Corporate</option></select>
                <select className="rounded-md border border-white/20 bg-slate-900 p-2" value={budget} onChange={(e) => setBudget(e.target.value)}><option>Low</option><option>Medium</option><option>High</option></select>
                <select className="rounded-md border border-white/20 bg-slate-900 p-2" value={glass} onChange={(e) => setGlass(e.target.value)}><option>Single Glazed</option><option>Double Glazed</option><option>Laminated</option><option>Low-E</option></select>
                <select className="rounded-md border border-white/20 bg-slate-900 p-2" value={wind} onChange={(e) => setWind(e.target.value)}><option>Low</option><option>Medium</option><option>High</option></select>
              </div>
              <div className="rounded-xl border border-sky-300/30 bg-sky-400/10 p-4">
                <p className="text-xs uppercase tracking-widest text-sky-200">Recommended System</p>
                <p className="mt-1 text-2xl font-semibold">{recommendation.suggestion}</p>
                <p className="mt-2 text-sm text-slate-300">{recommendation.note}</p>
                <p className="mt-2 text-xs text-slate-400">Optimized for: {buildingType} • {glass} • {wind} wind load</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-white/15 bg-white/5 text-white backdrop-blur">
            <CardContent className="space-y-4 p-6">
              <h2 className="text-3xl font-bold">Facade Cost Calculator</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                <label className="text-sm">Building Height (m)<input type="number" value={height} onChange={(e) => setHeight(Number(e.target.value))} className="mt-1 w-full rounded-md border border-white/20 bg-slate-900 p-2" /></label>
                <label className="text-sm">Elevation Area (sq ft)<input type="number" value={area} onChange={(e) => setArea(Number(e.target.value))} className="mt-1 w-full rounded-md border border-white/20 bg-slate-900 p-2" /></label>
                <label className="text-sm">System Type<select value={systemType} onChange={(e) => setSystemType(e.target.value)} className="mt-1 w-full rounded-md border border-white/20 bg-slate-900 p-2"><option>Stick Curtain Wall</option><option>Unitized System</option><option>ACP Tray System</option><option>Spider Glazing</option></select></label>
                <label className="text-sm">Glass Thickness (mm)<input type="number" value={thickness} onChange={(e) => setThickness(Number(e.target.value))} className="mt-1 w-full rounded-md border border-white/20 bg-slate-900 p-2" /></label>
              </div>
              <div className="grid gap-3 rounded-xl border border-white/15 bg-black/20 p-4 text-sm sm:grid-cols-3">
                <div><p className="text-slate-400">Approx Cost</p><p className="text-lg font-bold text-sky-200">₹{costData.minCost.toLocaleString()} - ₹{costData.maxCost.toLocaleString()}</p></div>
                <div><p className="text-slate-400">Estimated Timeline</p><p className="text-lg font-bold">{costData.timeline} months</p></div>
                <div><p className="text-slate-400">Material Weight</p><p className="text-lg font-bold">{costData.weight.toLocaleString()} kg</p></div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="bg-black/40 py-20">
          <div className="container mx-auto px-4">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <h2 className="text-3xl font-bold">Premium Project Showcase</h2>
              <div className="flex gap-2 text-sm">
                <select className="rounded-md border border-white/20 bg-slate-900 p-2"><option>By City</option></select>
                <select className="rounded-md border border-white/20 bg-slate-900 p-2"><option>By System</option></select>
                <select className="rounded-md border border-white/20 bg-slate-900 p-2"><option>By Year</option></select>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {projectItems.map((project) => (
                <Card key={project.name} className="group overflow-hidden border-white/15 bg-slate-900 text-white transition hover:-translate-y-1 hover:border-sky-300/50">
                  <CardContent className="relative p-6">
                    <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition duration-700 group-hover:translate-x-full" />
                    <p className="text-xs uppercase tracking-wider text-slate-400">{project.system} • {project.year}</p>
                    <h3 className="mt-2 text-xl font-semibold">{project.name}</h3>
                    <ul className="mt-4 space-y-1 text-sm text-slate-300">
                      <li>Location: {project.city}</li>
                      <li>Area: {project.area} sq ft</li>
                      <li>Cost: {project.cost}</li>
                      <li>Timeline: {project.timeline}</li>
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold">Why Fine Glaze?</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {reasons.map((item) => (
              <div key={item} className="group relative overflow-hidden rounded-xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 p-5">
                <div className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-white/20 blur-xl transition duration-700 group-hover:left-full" />
                <CheckCircle2 className="mb-3 h-5 w-5 text-sky-300" />
                <p className="font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-black/40 py-20">
          <div className="container mx-auto grid gap-8 px-4 lg:grid-cols-2">
            <Card className="border border-white/15 bg-slate-900 text-white">
              <CardContent className="space-y-4 p-6">
                <h2 className="text-2xl font-bold">Client Dashboard Preview</h2>
                <div className="space-y-4 text-sm">
                  <div><p className="mb-1 flex items-center gap-2"><Gauge className="h-4 w-4" />Project Status</p><div className="h-2 rounded-full bg-white/10"><div className="h-2 w-2/3 rounded-full bg-sky-400" /></div></div>
                  <p className="flex items-center gap-2"><Calculator className="h-4 w-4" />Payment status timeline</p>
                  <p className="flex items-center gap-2"><FileBarChart className="h-4 w-4" />Drawings download center</p>
                  <p className="flex items-center gap-2"><Upload className="h-4 w-4" />Site image upload</p>
                  <p className="flex items-center gap-2"><MessageSquare className="h-4 w-4" />Chat with admin</p>
                </div>
                <Link to="/portal"><Button className="w-full bg-sky-500 text-slate-950 hover:bg-sky-400">Open Client Portal</Button></Link>
              </CardContent>
            </Card>

            <Card className="border border-white/15 bg-slate-900 text-white">
              <CardContent className="space-y-4 p-6">
                <h2 className="text-2xl font-bold">3D Elevation Preview Tool</h2>
                <p className="text-sm text-slate-300">Upload your front elevation and get ACP, glazing, and frame color mock previews.</p>
                <div className="rounded-xl border border-dashed border-sky-300/40 p-8 text-center text-sm text-sky-100">
                  <Building2 className="mx-auto mb-3 h-6 w-6" />
                  Drag & drop front image (JPG/PNG)
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <span className="rounded-md border border-white/20 p-2">ACP Pattern</span>
                  <span className="rounded-md border border-white/20 p-2">Glass Tone</span>
                  <span className="rounded-md border border-white/20 p-2">Frame Color</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold">Before / After Facade Upgrade</h2>
          <div className="mt-6 rounded-xl border border-white/15 bg-slate-900 p-6">
            <div className="relative h-48 overflow-hidden rounded-lg bg-gradient-to-r from-slate-700 to-slate-500">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center grayscale" />
              <div className="absolute inset-y-0 left-0 bg-[url('https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" style={{ width: `${beforeAfter}%` }} />
              <div className="absolute inset-y-0 w-1 bg-sky-300" style={{ left: `${beforeAfter}%` }} />
            </div>
            <input type="range" min={0} max={100} value={beforeAfter} onChange={(e) => setBeforeAfter(Number(e.target.value))} className="mt-4 w-full" />
          </div>
        </section>

        <section className="bg-black py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold">📐 Facade Engineering Journal</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {journals.map((topic) => (
                <article key={topic} className="rounded-xl border border-white/15 bg-white/5 p-5">
                  <p className="mb-2 text-xs uppercase tracking-wider text-sky-300">Technical Note</p>
                  <h3 className="font-semibold">{topic}</h3>
                </article>
              ))}
            </div>
            <div className="mt-8 rounded-xl border border-sky-300/30 bg-sky-300/10 p-5 text-sm text-slate-200">
              <p className="font-semibold">Next-Level Add-ons</p>
              <p className="mt-2 flex flex-wrap gap-4"><span className="inline-flex items-center gap-2"><Layers className="h-4 w-4" />Facade BOQ sample download</span><span className="inline-flex items-center gap-2"><MessageSquare className="h-4 w-4" />Facade-only AI chat assistant</span><span className="inline-flex items-center gap-2"><ArrowRight className="h-4 w-4" />Premium inquiry workflow</span></p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Index;
