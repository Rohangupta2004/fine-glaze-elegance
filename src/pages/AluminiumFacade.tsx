import { useState } from "react";

export default function AluminiumWindowsDoors() {
  const [type, setType] = useState("Windows");
  const [series, setSeries] = useState("Premium");
  const [area, setArea] = useState("");

  const sendWhatsApp = () => {
    const msg = `Hi FineGlaze,%0A
I am interested in ${type}.%0A
Series: ${series}%0A
Approx Area: ${area} sq.ft.%0A
Please share price and details.`;

    window.open(
      `https://wa.me/91XXXXXXXXXX?text=${msg}`,
      "_blank"
    );
  };

  return (
    <main className="bg-[#fafafa] text-[#1f1f1f]">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
            Aluminium<br />
            <span className="text-[#b07a3f]">Windows & Sliding Doors</span>
          </h1>
          <p className="mt-6 text-lg text-[#555] max-w-lg">
            Premium aluminium systems with slim profiles, smooth sliding
            and long-lasting performance.
          </p>
        </div>

        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          className="rounded-3xl shadow-xl"
          alt="Aluminium doors"
        />
      </section>

      {/* PRODUCTS */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          <div className="rounded-3xl shadow-md overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf"
              className="h-64 w-full object-cover"
            />
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-[#b07a3f]">
                Aluminium Windows
              </h3>
              <p className="mt-3 text-[#555]">
                Sliding, casement & fixed windows with slim aluminium frames.
              </p>
            </div>
          </div>

          <div className="rounded-3xl shadow-md overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf"
              className="h-64 w-full object-cover"
            />
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-[#b07a3f]">
                Sliding Doors
              </h3>
              <p className="mt-3 text-[#555]">
                Balcony & patio sliding doors with smooth rollers.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SERIES */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-semibold text-center">
          Choose Your Series
        </h2>

        <div className="mt-16 grid md:grid-cols-3 gap-10 text-center">
          {[
            ["Essential", "₹350 – ₹450 / sq.ft"],
            ["Premium", "₹500 – ₹650 / sq.ft"],
            ["Luxury", "₹700+ / sq.ft"]
          ].map(([name, price]) => (
            <div
              key={name}
              className="bg-white p-8 rounded-3xl shadow-md"
            >
              <h3 className="text-2xl font-semibold text-[#b07a3f]">
                {name}
              </h3>
              <p className="mt-3 font-medium">{price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* QUICK QUOTE */}
      <section className="bg-[#f2f2ef] py-24">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold">
            Get Instant Quote on WhatsApp
          </h2>

          <div className="mt-10 space-y-4 text-left">
            <select
              className="w-full p-4 rounded-xl border"
              value={type}
              onChange={e => setType(e.target.value)}
            >
              <option>Windows</option>
              <option>Sliding Doors</option>
            </select>

            <select
              className="w-full p-4 rounded-xl border"
              value={series}
              onChange={e => setSeries(e.target.value)}
            >
              <option>Essential</option>
              <option>Premium</option>
              <option>Luxury</option>
            </select>

            <input
              type="number"
              placeholder="Approx area (sq.ft)"
              className="w-full p-4 rounded-xl border"
              value={area}
              onChange={e => setArea(e.target.value)}
            />

            <button
              onClick={sendWhatsApp}
              className="w-full mt-4 px-6 py-4 rounded-full bg-[#b07a3f] text-white font-medium"
            >
              Get Quote on WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-sm text-[#777]">
        © {new Date().getFullYear()} FineGlaze. All rights reserved.
      </footer>

    </main>
  );
              }
