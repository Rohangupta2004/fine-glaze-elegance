export default function AluminiumEditorial() {
  return (
    <main className="bg-[#f6f6f4] text-[#1c1c1c]">

      {/* HERO — FULL BLEED */}
      <section className="relative h-[90vh] w-full">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          alt="Aluminium Sliding Doors"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-end pb-24">
          <div className="max-w-2xl">
            <h1 className="text-white text-5xl md:text-6xl font-light leading-tight">
              Aluminium<br />
              Windows & Sliding Doors
            </h1>
            <p className="mt-6 text-white/80 text-lg">
              Minimal frames. Maximum light.
              Designed for modern architecture.
            </p>

            <a
              href="https://wa.me/91XXXXXXXXXX"
              className="inline-block mt-10 px-8 py-4 rounded-full bg-[#9c6b3f] text-white text-sm tracking-wide"
            >
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* INTRO — EDITORIAL */}
      <section className="max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-24">
        <div>
          <h2 className="text-4xl font-light leading-snug">
            Designed to disappear.<br />
            Built to perform.
          </h2>
        </div>

        <div className="text-[#555] text-lg leading-relaxed">
          <p>
            FineGlaze aluminium systems are designed with a singular focus —
            clean lines, smooth operation and long-term reliability.
          </p>
          <p className="mt-6">
            Every window and sliding door is custom-made to suit the
            architecture, not forced into it.
          </p>
        </div>
      </section>

      {/* WINDOWS — FULL WIDTH FEATURE */}
      <section className="w-full py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">
          <img
            src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf"
            className="rounded-2xl"
            alt="Aluminium Windows"
          />

          <div>
            <h3 className="text-3xl font-light">
              Aluminium Windows
            </h3>
            <p className="mt-6 text-[#555] text-lg">
              Slim aluminium profiles that allow more daylight,
              better ventilation and effortless operation.
            </p>

            <p className="mt-4 text-[#777]">
              Sliding • Casement • Fixed
            </p>
          </div>
        </div>
      </section>

      {/* DOORS — FULL WIDTH FEATURE */}
      <section className="w-full py-32">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">
          <div>
            <h3 className="text-3xl font-light">
              Sliding Doors
            </h3>
            <p className="mt-6 text-[#555] text-lg">
              Large glass panels combined with precision rollers
              for smooth, silent sliding.
            </p>

            <p className="mt-4 text-[#777]">
              Balcony • Patio • Living Spaces
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf"
            className="rounded-2xl"
            alt="Aluminium Sliding Door"
          />
        </div>
      </section>

      {/* SERIES — MINIMAL, NOT BOXES */}
      <section className="bg-white py-32">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-light">
            Choose the level of refinement
          </h2>

          <div className="mt-20 grid md:grid-cols-3 gap-16 text-left">
            {[
              ["Essential", "Clean design for everyday spaces"],
              ["Premium", "Slim profiles with enhanced smoothness"],
              ["Luxury", "Ultra-slim frames for large openings"]
            ].map(([title, desc]) => (
              <div key={title}>
                <h4 className="text-xl font-medium text-[#9c6b3f]">
                  {title}
                </h4>
                <p className="mt-3 text-[#555]">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA — QUIET */}
      <section className="py-40 text-center">
        <h2 className="text-4xl font-light">
          Made for spaces that value simplicity
        </h2>
        <p className="mt-6 text-[#666] text-lg">
          Share your requirement. We’ll take care of the rest.
        </p>

        <a
          href="https://wa.me/91XXXXXXXXXX"
          className="inline-block mt-12 px-10 py-4 rounded-full bg-[#9c6b3f] text-white tracking-wide"
        >
          Talk to FineGlaze
        </a>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-sm text-[#777]">
        © {new Date().getFullYear()} FineGlaze
      </footer>

    </main>
  );
}
