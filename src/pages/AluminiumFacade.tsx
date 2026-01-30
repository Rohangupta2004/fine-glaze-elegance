export default function AluminiumWindowsDoors() {
  return (
    <main className="bg-[#fbfbfa] text-[#1e1e1e]">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-20 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
            Premium Aluminium<br />
            <span className="text-[#b07a3f]">Windows & Sliding Doors</span>
          </h1>

          <p className="mt-6 text-lg text-[#555] max-w-lg">
            Slim profiles. Smooth sliding. Long-lasting aluminium systems
            designed for modern homes and commercial spaces.
          </p>

          <div className="mt-10 flex gap-4">
            <a className="px-8 py-4 rounded-full bg-[#b07a3f] text-white font-medium">
              Get Price on WhatsApp
            </a>
            <a className="px-8 py-4 rounded-full border border-[#b07a3f] text-[#b07a3f]">
              View Options
            </a>
          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          className="rounded-3xl shadow-xl"
          alt="Aluminium sliding door"
        />
      </section>

      {/* PRODUCT TYPES */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-semibold text-center">
            Our Aluminium Systems
          </h2>

          <div className="mt-16 grid md:grid-cols-2 gap-12">

            {/* WINDOWS */}
            <div className="rounded-3xl bg-[#fbfbfa] shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf"
                className="h-64 w-full object-cover"
                alt="Aluminium windows"
              />
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-[#b07a3f]">
                  Aluminium Windows
                </h3>
                <ul className="mt-4 space-y-2 text-[#555]">
                  <li>• Sliding, Casement & Fixed Windows</li>
                  <li>• Slim aluminium profiles</li>
                  <li>• Noise & dust reduction</li>
                  <li>• Low maintenance & rust-free</li>
                </ul>
              </div>
            </div>

            {/* SLIDING DOORS */}
            <div className="rounded-3xl bg-[#fbfbfa] shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf"
                className="h-64 w-full object-cover"
                alt="Aluminium sliding doors"
              />
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-[#b07a3f]">
                  Sliding Doors
                </h3>
                <ul className="mt-4 space-y-2 text-[#555]">
                  <li>• Balcony & Patio sliding doors</li>
                  <li>• Smooth roller mechanism</li>
                  <li>• Large glass panels</li>
                  <li>• Secure multi-lock systems</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHY FINEGLAZE */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-semibold text-center">
          Why Choose FineGlaze
        </h2>

        <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
          {[
            "Premium Aluminium Sections",
            "Smooth & Silent Sliding",
            "Custom Sizes & Finishes",
            "Professional Installation"
          ].map(point => (
            <div
              key={point}
              className="p-8 bg-white rounded-2xl shadow-sm"
            >
              <p className="font-medium">{point}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1e1e1e] text-white py-28 text-center">
        <h2 className="text-4xl font-semibold">
          Get Aluminium Windows & Doors for Your Space
        </h2>
        <p className="mt-4 text-[#ccc]">
          Share your requirement and get a quick estimate
        </p>
        <a className="inline-block mt-10 px-10 py-4 rounded-full bg-[#b07a3f]">
          WhatsApp FineGlaze
        </a>
      </section>

    </main>
  );
          }
