import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function AcpCladding() {
  return (
    <Layout>
      <section className="relative pt-32 pb-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <span className="text-amber-500 font-bold tracking-wider uppercase">Modern Facades</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-2 mb-6">
            Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">ACP Cladding</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mb-8">
            Transform your building's exterior with durable, fire-retardant Aluminium Composite Panels available in limitless textures and colors.
          </p>
          <Link to="/contact"><Button size="lg" className="bg-white text-slate-900 hover:bg-slate-200">Get a Quote</Button></Link>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { icon: Shield, title: "Fire Retardant", desc: "Grade A2 & FR standard cores for maximum safety." },
              { icon: Paintbucket, title: "Custom Finishes", desc: "Metallic, solid, wood, and marble textures available." },
              { icon: Zap, title: "Weather Proof", desc: "PVDF coating ensures 15+ years of color retention." }
            ].map((feature, i) => (
              <div key={i} className="p-8 border rounded-2xl hover:shadow-xl transition-all">
                <feature.icon className="w-12 h-12 mx-auto text-amber-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">ACP Installation Services</h2>
            <p className="text-slate-600 mb-4">
              We specialize in the fabrication and installation of Aluminium Composite Panels for:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-700">
              <li>Commercial IT Parks & Offices</li>
              <li>Retail Showrooms & Malls</li>
              <li>Residential Apartment Facades</li>
              <li>Corporate Signage & Canopies</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-amber-500">
            <h3 className="text-xl font-bold mb-4">Why ACP?</h3>
            <p className="text-slate-600 italic">
              "ACP is the most versatile cladding material today. It is lightweight, rigid, and provides excellent flatness, making it the preferred choice for modern architecture."
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
                }
