import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle2, Building2, ShieldCheck, Paintbrush } from "lucide-react";
import { Link } from "react-router-dom";

const AcpCladding = () => {
  // SEO Schema for Local Service
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "ACP Cladding Installation",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Fine Glaze",
      "areaServed": ["Mumbai", "Pune", "Maharashtra"]
    },
    "description": "Premium Aluminium Composite Panel (ACP) cladding for commercial and residential facades."
  };

  return (
    <Layout>
      <Helmet>
        <title>ACP Cladding Installation Mumbai & Pune | Best Facade Contractor</title>
        <meta name="description" content="Specialized ACP Cladding services by Fine Glaze. We use PVDF-coated, fire-retardant Aluminium Composite Panels for durable, modern building exteriors." />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* --- PRO HERO SECTION --- */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/Panel.webp" alt="Modern ACP Facade Design" className="w-full h-full object-cover brightness-50" />
        </div>
        <div className="relative z-10 container text-center text-white px-4">
          <div className="inline-block px-4 py-1.5 mb-6 border border-white/30 rounded-full bg-white/10 backdrop-blur-md text-sm font-medium tracking-wide">
            ARCHITECTURAL FACADE SOLUTIONS
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Advanced <span className="text-amber-500">ACP Cladding</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 max-w-2xl mx-auto mb-8 font-light leading-relaxed">
            Redefining skylines with lightweight, weather-resistant, and fire-rated Aluminium Composite Panels.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-lg px-8 py-6 h-auto">Get a Quote</Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="outline" size="lg" className="border-white text-black hover:bg-white hover:text-black text-lg px-8 py-6 h-auto">View Projects</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE US (CARDS) --- */}
      <section className="py-24 bg-slate-50">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Architects Prefer ACP</h2>
            <p className="text-slate-600 text-lg">Aluminium Composite Panels offer the perfect balance of structural rigidity and design flexibility.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-8 text-center">
                <div className="mb-6 w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto text-blue-600">
                  <ShieldCheck size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Weather & Fire Resistant</h3>
                <p className="text-slate-600 leading-relaxed">Our PVDF-coated panels withstand harsh UV rays and monsoon rains. Available in FR Grade (Fire Retardant) cores for maximum safety.</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-8 text-center">
                <div className="mb-6 w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto text-amber-600">
                  <Paintbrush size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Unlimited Design</h3>
                <p className="text-slate-600 leading-relaxed">From metallic silver to wood and marble textures. ACP allows for complex bending, curving, and routing for 3D facade shapes.</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-8 text-center">
                <div className="mb-6 w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto text-emerald-600">
                  <Building2 size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Structural Efficiency</h3>
                <p className="text-slate-600 leading-relaxed">Extremely lightweight compared to stone or steel, reducing the dead load on the building structure while ensuring flatness.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* --- TECH SPECS (TABLE) --- */}
      <section className="py-24 bg-white">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img src="/Nirmann.webp" alt="ACP Installation Detail" className="rounded-2xl shadow-2xl mb-8" />
              <div className="p-6 bg-slate-900 text-white rounded-xl">
                <h4 className="text-xl font-bold mb-2">Our Material Partners</h4>
                <p className="text-slate-400">We work with industry leaders like Aludecor, Viva, and Eurobond to ensure 15+ years of warranty.</p>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Technical Specifications</h2>
              <Card>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[180px]">Feature</TableHead>
                      <TableHead>Specification Standard</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Panel Thickness</TableCell>
                      <TableCell>3mm, 4mm (Standard), 6mm</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Aluminium Skin</TableCell>
                      <TableCell>0.25mm to 0.50mm thickness</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Coating Type</TableCell>
                      <TableCell>PVDF (Kynar 500) / FEVE</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Fire Rating</TableCell>
                      <TableCell>Class B1 / A2 (Non-Combustible Core)</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Installation Method</TableCell>
                      <TableCell>Tray System / Rivet System on Aluminium Tube Substructure</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Card>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {["10-Year Warranty", "Rapid Installation", "Sound Insulation", "Recyclable"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-slate-700 font-medium">
                    <CheckCircle2 className="text-amber-600 w-5 h-5" /> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AcpCladding;
