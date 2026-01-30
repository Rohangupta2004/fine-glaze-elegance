import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, ShieldCheck, Zap, Maximize2 } from "lucide-react";
import { Link } from "react-router-dom";

const GlassRailings = () => {
  // SEO Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Glass Railing Installation",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Fine Glaze",
      "areaServed": ["Mumbai", "Pune", "Lonavala"]
    },
    "description": "Frameless toughened glass railings for balconies, staircases, and terraces. Safety-rated installation with SS 304/316 fittings."
  };

  return (
    <Layout>
      <Helmet>
        <title>Frameless Glass Railings Mumbai | Balcony & Staircase Designs</title>
        <meta name="description" content="Premium glass railing systems for modern homes and offices. We use 12mm/15mm Toughened Glass and Sentry Lamination for maximum safety and clear views." />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* --- HERO SECTION --- */}
      <section className="relative h-[75vh] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img src="/Railing.webp" alt="Luxury Glass Railing Balcony" className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 container text-center px-4">
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Invisible <span className="text-amber-500">Strength</span>
          </h1>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto mb-10 font-light">
            Enjoy unobstructed views with our seamless Frameless Glass Railing systems. 
            Engineered for safety, designed for luxury.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-lg px-10 py-6 h-auto">Get Quote</Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-slate-900 text-lg px-10 py-6 h-auto">View Gallery</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* --- FEATURES GRID --- */}
      <section className="py-24 bg-white">
        <div className="container px-4">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <Maximize2 size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Zero Obstruction</h3>
              <p className="text-slate-600">No vertical metal posts. We use bottom-mounted Aluminium U-Channels or SS Spigots to keep your view 100% clear.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 mb-6">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Impact Tested</h3>
              <p className="text-slate-600">We use 12mm to 19mm Toughened Glass that is 5x stronger than regular glass. Optional Sentry lamination keeps glass intact even if broken.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-6">
                <Zap size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Rust-Proof Fittings</h3>
              <p className="text-slate-600">All our hardware is Marine Grade Stainless Steel (SS 304/316), ensuring no corrosion even in Mumbai's humid coastal air.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- VISUAL SHOWCASE --- */}
      <section className="py-20 bg-slate-50">
        <div className="container px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Design Applications</h2>
            <p className="text-slate-600">Versatile solutions for every part of your property.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Large Feature Card */}
            <Card className="overflow-hidden border-0 shadow-lg group cursor-pointer">
              <div className="relative h-80 overflow-hidden">
                <img src="/Railing2.webp" alt="Balcony Glass" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold">External Balconies</h3>
                  <p className="opacity-90">Continuous U-Channel Profile</p>
                </div>
              </div>
            </Card>

            <div className="grid gap-8">
              {/* Small Feature Card 1 */}
              <Card className="overflow-hidden border-0 shadow-lg flex flex-col md:flex-row h-full group">
                <div className="w-full md:w-2/5 h-48 md:h-auto overflow-hidden relative">
                   <img src="/Custom railing.webp" alt="Staircase Glass" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-bold mb-2">Staircases</h3>
                  <p className="text-slate-600 text-sm mb-4">Modern aesthetics with side-mounted buttons (point fixings) or spigots.</p>
                  <div className="flex items-center gap-2 text-amber-600 text-sm font-medium">
                    <Check size={16} /> Wooden Handrail Compatible
                  </div>
                </div>
              </Card>

              {/* Small Feature Card 2 */}
              <Card className="overflow-hidden border-0 shadow-lg flex flex-col md:flex-row h-full group">
                 <div className="w-full md:w-2/5 h-48 md:h-auto overflow-hidden relative">
                   <img src="/Glass.webp" alt="Pool Fencing" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-bold mb-2">Pool Fencing</h3>
                  <p className="text-slate-600 text-sm mb-4">Safety barriers that don't block visibility. Child-safe locking gates available.</p>
                   <div className="flex items-center gap-2 text-amber-600 text-sm font-medium">
                    <Check size={16} /> 15mm Toughened Glass
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* --- TECH SPECS TABLE (SEO GOLD) --- */}
      <section className="py-24 bg-white">
        <div className="container px-4 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Glass Specification Guide</h2>
          <Card>
            <Table>
              <TableHeader>
                <TableRow className="bg-slate-50">
                  <TableHead className="w-[200px] font-bold">Specification</TableHead>
                  <TableHead className="font-bold">Standard Grade</TableHead>
                  <TableHead className="font-bold text-amber-600">Premium Grade (Recommended)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Glass Type</TableCell>
                  <TableCell>Toughened Glass</TableCell>
                  <TableCell>Laminated Toughened (Sentry)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Thickness</TableCell>
                  <TableCell>10mm - 12mm</TableCell>
                  <TableCell>13.52mm - 17.52mm</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Safety Feature</TableCell>
                  <TableCell>Shatters into small, dull cubes</TableCell>
                  <TableCell>Stays in place even if broken</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Fittings</TableCell>
                  <TableCell>SS 202 Grade</TableCell>
                  <TableCell>SS 304 / 316 Grade (Rust Free)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Profile Finish</TableCell>
                  <TableCell>Silver Anodized</TableCell>
                  <TableCell>Champagne / Black / Wood Finish</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Card>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-20 bg-slate-900 text-white text-center">
        <div className="container px-4">
          <h2 className="text-3xl font-bold mb-6">Upgrade Your Space Today</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Get a free site measurement and consultation. We provide 3D renders before installation.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-200">
              Schedule Free Visit
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default GlassRailings;
