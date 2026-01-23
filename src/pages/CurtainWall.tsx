import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { CheckCircle2, Building2, ShieldCheck, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function CurtainWall() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/Unitized.webp')] bg-cover bg-center opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            High-Performance <span className="text-amber-500">Curtain Wall Systems</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mb-8">
            Precision-engineered unitized and semi-unitized glazing systems for modern skyscrapers and commercial complexes.
          </p>
          <Link to="/contact"><Button size="lg" className="bg-amber-600 hover:bg-amber-700">Request Technical Spec</Button></Link>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Choose Our Curtain Walls?</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Fine Glaze delivers state-of-the-art curtain wall solutions that define the skyline. Our systems offer superior thermal performance, weather resistance, and architectural flexibility.
            </p>
            <ul className="space-y-4">
              {[
                "Unitized Systems for Fast Installation",
                "High Wind Load Resistance",
                "Thermal Break Technology",
                "Seamless Glass Aesthetics"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-amber-500" />
                  <span className="font-medium text-slate-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-50 p-6 rounded-xl border hover:border-amber-500 transition-colors">
              <Building2 className="w-10 h-10 text-amber-600 mb-4" />
              <h3 className="font-bold mb-2">Unitized</h3>
              <p className="text-sm text-slate-600">Factory-assembled panels for rapid on-site installation.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border hover:border-amber-500 transition-colors">
              <Maximize2 className="w-10 h-10 text-amber-600 mb-4" />
              <h3 className="font-bold mb-2">Semi-Unitized</h3>
              <p className="text-sm text-slate-600">Flexible hybrid systems ideal for complex architectural forms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2">What is the difference between unitized and stick curtain walls?</h3>
              <p className="text-slate-600">Unitized systems are assembled in the factory and hung on the building, offering speed and quality control. Stick systems are assembled piece-by-piece on-site, offering more adjustability for irregular structures.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2">Do you provide structural calculations?</h3>
              <p className="text-slate-600">Yes, our engineering team provides full wind-load analysis and structural stability reports for all curtain wall projects.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
