export default function Home() {
  return (
    <main className="bg-[#f8f8f6] text-[#1f1f1f]">

      {/* NAVBAR */}
      <header className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src="/fineglaze-logo.png" className="h-10" alt="FineGlaze" />
          <span className="font-semibold tracking-wide">FINEGLAZE</span>
        </div>
        <nav className="hidden md:flex gap-10 text-sm">
          {["Systems", "Projects", "About", "Contact"].map(i => (
            <a key={i} className="hover:text-[#b07a3f] transition">{i}</a>
          ))}
        </nav>
      </header>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center py-28">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Premium Facade<br />
            <span className="text-[#b07a3f]">Engineering Solutions</span>
          </h1>
          <p className="mt-6 text-lg text-[#555] max-w-lg">
            We design, engineer and deliver high-performance aluminium
            and glass facades for landmark buildings.
          </p>

          <div className="mt-10 flex gap-4">
            <a className="px-8 py-4 rounded-full bg-[#b07a3f] text-white font-medium hover:opacity-90">
              Get a Quote
            </a>
            <a className="px-8 py-4 rounded-full border border-[#b07a3f] text-[#b07a3f] hover:bg-[#b07a3f]/10">
              View Projects
            </a>
          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5"
          className="rounded-3xl shadow-xl"
          alt="Facade Building"
        />
      </section>

      {/* TRUST STRIP */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          {[
            ["50+", "Projects Delivered"],
            ["5L+ sq.ft", "Facade Installed"],
            ["Pan India", "Operations"]
          ].map(([a, b]) => (
            <div key={a}>
              <h3 className="text-3xl font-bold text-[#b07a3f]">{a}</h3>
              <p className="mt-2 text-[#555]">{b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SYSTEMS */}
      <section className="py-28 max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-semibold text-center">
          Our Facade Systems
        </h2>

        <div className="mt-16 grid md:grid-cols-4 gap-8">
          {[
            "Unitized Facade",
            "Curtain Wall",
            "Spider Glazing",
            "ACP & Louvers"
          ].map(sys => (
            <div
              key={sys}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:-translate-y-2 transition"
            >
              <img
                src="https://images.unsplash.com/photo-1529429611273-7d1a6a77d56b"
                className="h-44 w-full object-cover"
                alt={sys}
              />
              <div className="p-6">
                <h3 className="font-semibold text-lg">{sys}</h3>
                <p className="mt-2 text-sm text-[#666]">
                  Engineered for performance, safety and aesthetics.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECT SHOWCASE */}
      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-semibold mb-12">
            Selected Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[1,2,3].map(i => (
              <img
                key={i}
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
                className="rounded-2xl shadow-lg"
                alt="Project"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-[#1f1f1f] text-white text-center">
        <h2 className="text-4xl font-semibold">
          Let’s Build Something Iconic
        </h2>
        <p className="mt-4 text-[#ccc]">
          Talk to FineGlaze for your next facade project
        </p>
        <a className="inline-block mt-10 px-10 py-4 rounded-full bg-[#b07a3f] hover:opacity-90">
          Contact Us
        </a>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-sm text-[#777]">
        © {new Date().getFullYear()} FineGlaze. All rights reserved.
      </footer>

    </main>
  );
      }
