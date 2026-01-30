import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Check, ShieldCheck, Zap, Maximize2, Star, ArrowRight, Shield } from "lucide-react";
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

  const testimonials = [
    {
      name: "Rajesh Sharma",
      role: "Homeowner, Bandra",
      text: "The installation was flawless. The frameless design makes our balcony feel much larger. Highly recommend!",
      rating: 5
    },
    {
      name: "Priya Desai",
      role: "Architect, Mumbai",
      text: "Perfect for modern designs. The quality and attention to detail exceeded my expectations.",
      rating: 5
    },
    {
      name: "Amit Patel",
      role: "Builder, Powai",
      text: "Reliable service and premium materials. They're our go-to for all glass railing projects.",
      rating: 5
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>Frameless Glass Railings Mumbai | Balcony & Staircase Designs</title>
        <meta name="description" content="Premium glass railing systems for modern homes and offices. We use 12mm/15mm Toughened Glass and Sentry Lamination for maximum safety and clear views." />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* --- HERO SECTION --- */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img src="/Railing.webp" alt="Luxury Glass Railing Balcony" className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent" />
        </div>
        
        <div className="relative z-10 container px-4 md:px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-amber-400 text-sm md:text-base font-semibold uppercase tracking-wide mb-4">Premium Glass Solutions</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Invisible <span className="text-amber-400">Strength</span>, Unobstructed Views
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl font-light leading-relaxed">
              Experience the perfect blend of elegance and safety with our frameless glass railing systems. 
              Crystal-clear views with engineered protection for balconies, staircases, and terraces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold px-8 py-3">
                  Get Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-slate-950 font-semibold px-8 py-3">
                  View Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- HIGHLIGHTS SECTION --- */}
      <section className="py-12 md:py-16 bg-slate-50 border-b border-slate-200">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-slate-900">500+</p>
              <p className="text-slate-600 text-sm md:text-base">Installations Completed</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-amber-600">15+</p>
              <p className="text-slate-600 text-sm md:text-base">Years of Excellence</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-slate-900">100%</p>
              <p className="text-slate-600 text-sm md:text-base">Safety Certified</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-slate-900">4.9★</p>
              <p className="text-slate-600 text-sm md:text-base">Client Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CORE BENEFITS --- */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Why Choose Our Glass Railings</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">Premium quality, uncompromising safety, and timeless design</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="flex flex-col">
              <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600 mb-6">
                <Maximize2 size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Zero Obstruction</h3>
              <p className="text-slate-600 leading-relaxed">No vertical metal posts blocking your view. We use bottom-mounted Aluminium U-Channels or SS Spigots to ensure 100% clear, uninterrupted sightlines.</p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Impact Tested Safety</h3>
              <p className="text-slate-600 leading-relaxed">12mm to 19mm toughened glass rated 5x stronger than regular glass. Optional Sentry lamination keeps glass intact even if broken, protecting your loved ones.</p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col">
              <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mb-6">
                <Zap size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Rust-Proof Marine Grade</h3>
              <p className="text-slate-600 leading-relaxed">All hardware is Marine Grade Stainless Steel (SS 304/316), engineered to resist corrosion in Mumbai's humid coastal environment for decades.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- VISUAL SHOWCASE --- */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="mb-14">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-3">Design Applications</h2>
            <p className="text-slate-600 text-lg">Versatile solutions tailored to every space in your property</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Large Feature Card */}
            <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-shadow group cursor-pointer">
              <div className="relative h-96 overflow-hidden">
                <img src="/Railing2.webp" alt="Balcony Glass Railings" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">External Balconies</h3>
                  <p className="text-slate-200 opacity-90">Continuous U-Channel Profile Design</p>
                </div>
              </div>
            </Card>

            <div className="grid gap-8">
              {/* Small Feature Card 1 */}
              <Card className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow group">
                <div className="flex flex-col md:flex-row h-full">
                  <div className="w-full md:w-2/5 h-48 md:h-auto overflow-hidden relative">
                     <img src="/Custom railing.webp" alt="Staircase Glass Railings" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Staircases</h3>
                    <p className="text-slate-600 text-sm mb-5 leading-relaxed">Modern side-mounted buttons or spigots for contemporary aesthetics. Fully compatible with wooden handrails for hybrid designs.</p>
                    <div className="flex items-center gap-2 text-amber-600 text-sm font-semibold">
                      <Check size={16} /> Wooden Handrail Compatible
                    </div>
                  </div>
                </div>
              </Card>

              {/* Small Feature Card 2 */}
              <Card className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow group">
                <div className="flex flex-col md:flex-row h-full">
                   <div className="w-full md:w-2/5 h-48 md:h-auto overflow-hidden relative">
                     <img src="/Glass.webp" alt="Pool Glass Fencing" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Pool & Deck Fencing</h3>
                    <p className="text-slate-600 text-sm mb-5 leading-relaxed">Safety barriers that never compromise visibility. Child-safe locking gates available with full compliance to safety standards.</p>
                     <div className="flex items-center gap-2 text-amber-600 text-sm font-semibold">
                      <Check size={16} /> 15mm Toughened Glass
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* --- SAFETY & BENEFITS BREAKDOWN --- */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Built for Safety, Designed for Beauty</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">Every component is engineered to meet and exceed safety standards while maintaining pristine aesthetics</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Safety Features */}
            <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="h-8 w-8 text-amber-600" />
                <h3 className="text-2xl font-bold text-slate-900">Safety Certifications</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">IS 6262:2015 Toughened Glass Standard Compliant</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">ASTM C1172 Impact Resistance Tested</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">SS 304/316 Hardware Corrosion Certified</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">10+ Year Structural Warranty</span>
                </li>
              </ul>
            </div>

            {/* Key Benefits */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 border border-amber-200">
              <div className="flex items-center gap-3 mb-6">
                <Star className="h-8 w-8 text-amber-600" />
                <h3 className="text-2xl font-bold text-slate-900">Premium Features</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Custom size and shape fabrication available</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Multiple finish options: Chrome, Champagne, Black</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Professional 3D rendering before installation</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">Expert installation with 5-year maintenance support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- TECH SPECS TABLE --- */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">Technical Specifications</h2>
          <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">Detailed comparison of our standard and premium glass railing systems</p>
          
          <Card className="border-0 shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-slate-900">
                    <TableHead className="font-bold text-white">Specification</TableHead>
                    <TableHead className="font-bold text-white">Standard Grade</TableHead>
                    <TableHead className="font-bold text-amber-400">Premium Grade</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-slate-200">
                    <TableCell className="font-semibold text-slate-900">Glass Type</TableCell>
                    <TableCell className="text-slate-700">Toughened Glass</TableCell>
                    <TableCell className="text-slate-900 font-semibold">Laminated Toughened (Sentry)</TableCell>
                  </TableRow>
                  <TableRow className="bg-slate-50 border-slate-200">
                    <TableCell className="font-semibold text-slate-900">Thickness</TableCell>
                    <TableCell className="text-slate-700">10mm - 12mm</TableCell>
                    <TableCell className="text-slate-900 font-semibold">13.52mm - 17.52mm</TableCell>
                  </TableRow>
                  <TableRow className="border-slate-200">
                    <TableCell className="font-semibold text-slate-900">Safety Rating</TableCell>
                    <TableCell className="text-slate-700">Shatters into safe cubes</TableCell>
                    <TableCell className="text-slate-900 font-semibold">Stays in frame if broken</TableCell>
                  </TableRow>
                  <TableRow className="bg-slate-50 border-slate-200">
                    <TableCell className="font-semibold text-slate-900">Fittings</TableCell>
                    <TableCell className="text-slate-700">SS 202 Grade</TableCell>
                    <TableCell className="text-slate-900 font-semibold">SS 304/316 Marine Grade</TableCell>
                  </TableRow>
                  <TableRow className="border-slate-200">
                    <TableCell className="font-semibold text-slate-900">Finish Options</TableCell>
                    <TableCell className="text-slate-700">Silver Anodized</TableCell>
                    <TableCell className="text-slate-900 font-semibold">Champagne, Black, Wood</TableCell>
                  </TableRow>
                  <TableRow className="bg-slate-50 border-slate-200">
                    <TableCell className="font-semibold text-slate-900">Warranty</TableCell>
                    <TableCell className="text-slate-700">5 Years Structural</TableCell>
                    <TableCell className="text-slate-900 font-semibold">10 Years Structural</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </Card>
        </div>
      </section>

      {/* --- TESTIMONIALS SECTION --- */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Loved by Homeowners & Architects</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">See what our satisfied clients have to say about their glass railing installations</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="border-0 shadow-md hover:shadow-lg transition-shadow p-8 bg-slate-50">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="border-t border-slate-200 pt-4">
                  <p className="font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-slate-600 text-sm">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROCESS SECTION --- */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Our Installation Process</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">From consultation to completion, we ensure a seamless experience</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { step: "01", title: "Free Consultation", desc: "Site visit and detailed measurement with 3D rendering" },
              { step: "02", title: "Custom Design", desc: "Personalized design matching your aesthetic preferences" },
              { step: "03", title: "Premium Installation", desc: "Expert installation with minimal disruption" },
              { step: "04", title: "Lifetime Support", desc: "Maintenance assistance and warranty coverage" }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-12">
            Schedule your free consultation today. We provide detailed 3D renders and transparent pricing before you commit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold px-10 py-3">
                Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-slate-900 font-semibold px-10 py-3">
                View More Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GlassRailings;
