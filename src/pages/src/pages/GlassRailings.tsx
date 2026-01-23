import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { Check } from "lucide-react";

export default function GlassRailings() {
  return (
    <Layout>
      <section className="pt-32 pb-20 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
            Luxury <span className="text-amber-600">Glass Railing</span> Systems
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Seamless visibility meets structural safety. Our toughened glass railings are designed for balconies, staircases, and terraces.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Frameless Glass Railings",
              desc: "Minimalist design with concealed aluminium base shoes. Perfect for uninterrupted views.",
              img: "bg-[url('/Railing.webp')]"
            },
            {
              title: "SS & Glass Railings",
              desc: "Robust stainless steel posts combined with toughened glass for high-traffic areas.",
              img: "bg-[url('/Railing2.webp')]"
            },
            {
              title: "Balcony Handrails",
              desc: "Custom height and glass thickness options to meet safety compliances.",
              img: "bg-[url('/Custom railing.webp')]"
            }
          ].map((item, i) => (
            <div key={i} className="group overflow-hidden rounded-xl border">
              <div className={`h-48 ${item.img} bg-cover bg-center group-hover:scale-105 transition-transform duration-500`} />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{item.desc}</p>
                <ul className="space-y-1 text-sm text-slate-500">
                  <li className="flex gap-2"><Check size={14} className="text-green-500" /> 12mm/15mm Toughened</li>
                  <li className="flex gap-2"><Check size={14} className="text-green-500" /> Sentry/PVB Lamination</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </Layout>
  );
      }
