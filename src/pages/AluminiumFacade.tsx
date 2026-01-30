export default function FineGlazePro() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">

      {/* HERO */}
      <section className="h-screen flex items-center justify-center fade-up">
        <div className="text-center px-6 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Engineering the Face of Buildings
          </h1>
          <p className="mt-6 text-zinc-400 text-lg">
            Premium facade, aluminium & glass systems built with precision.
          </p>

          <div className="mt-10 flex gap-4 justify-center">
            <a className="px-8 py-4 rounded-full bg-white text-black font-medium hover:scale-105 transition">
              Get a Quote
            </a>
            <a className="px-8 py-4 rounded-full border border-white/30 hover:bg-white/10 transition">
              View Systems
            </a>
          </div>
        </div>
      </section>

      {/* SPLIT SECTION */}
      <section className="grid md:grid-cols-2 gap-16 px-8 py-24 max-w-7xl mx-auto">
        <div className="fade-left">
          <h2 className="text-4xl font-semibold leading-tight">
            Designed like architecture.<br />Built like engineering.
          </h2>
          <p className="mt-6 text-zinc-400">
            FineGlaze delivers facade systems that balance aesthetics,
            structural safety, and long-term durability.
          </p>
        </div>

        <div className="fade-right glass-card">
          <div className="h-64 rounded-2xl bg-gradient-to-tr from-zinc-700 to-zinc-900" />
          <p className="mt-4 text-sm text-zinc-400">
            Facade visualization placeholder
          </p>
        </div>
      </section>

      {/* SYSTEMS */}
      <section className="px-8 py-24">
        <h3 className="text-center text-3xl font-semibold mb-12">
          Facade Systems
        </h3>

        <div className="flex gap-6 overflow-x-auto pb-6">
          {["Unitized", "Curtain Wall", "Spider", "ACP", "Louvers"].map(item => (
            <div key={item} className="system-card">
              <h4 className="text-xl font-medium">{item}</h4>
              <p className="mt-3 text-sm text-zinc-400">
                Precision engineered {item.toLowerCase()} systems.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TRUST */}
      <section className="grid md:grid-cols-3 gap-8 px-8 py-24 max-w-6xl mx-auto text-center">
        {["50+ Projects", "5L+ Sq.ft", "Pan India"].map(stat => (
          <div key={stat} className="trust-card fade-up">
            <h4 className="text-3xl font-bold">{stat}</h4>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="px-8 py-24 text-center bg-gradient-to-t from-black to-zinc-900">
        <h2 className="text-4xl font-semibold">
          Let’s build something iconic
        </h2>
        <p className="mt-4 text-zinc-400">
          Talk to FineGlaze today
        </p>
        <a className="inline-block mt-8 px-10 py-4 rounded-full bg-white text-black font-medium hover:scale-105 transition">
          Contact Now
        </a>
      </section>

    </div>
  );
}
