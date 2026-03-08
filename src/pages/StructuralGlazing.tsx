export default function StructuralGlazing() {
  return (
    <main className="bg-background">
      {/* HERO */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Structural Glazing Systems in India
            </h1>
            <p className="text-lg text-white/80 mb-8">
              Frameless structural glazing solutions delivering maximum
              transparency, elegance, and performance for modern buildings.
            </p>

            <a
              href="https://wa.me/918369233566?text=Hello%20Fine%20Glaze%2C%20I%20need%20structural%20glazing%20solutions."
              className="inline-block px-8 py-4 bg-primary rounded-lg font-semibold shadow-lg"
            >
              Get Quote
            </a>
          </div>

          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5"
            alt="Structural glazing glass facade"
            className="rounded-xl shadow-2xl object-cover h-[420px] w-full"
          />
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-lg text-muted-foreground">
            Fine Glaze offers advanced structural glazing systems that create
            seamless glass facades without visible frames. These systems are
            ideal for commercial buildings, showrooms, malls, and premium
            architecture.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Structural Glazing Advantages
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
                title: "Frameless Appearance",
                desc: "Clean glass surfaces with no visible external frames.",
              },
              {
                img: "https://images.unsplash.com/photo-1529429617124-95b109e86bb8",
                title: "Maximum Daylight",
                desc: "Improves natural lighting and energy efficiency.",
              },
              {
                img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
                title: "High Structural Strength",
                desc: "Engineered to withstand wind loads and weather.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-background rounded-xl shadow overflow-hidden"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold mb-10">
            Our Structural Glazing Solutions
          </h2>

          <ul className="list-disc pl-6 space-y-4 text-muted-foreground">
            <li>2-Side Structural Glazing</li>
            <li>4-Side Structural Glazing</li>
            <li>Spider Glazing Systems</li>
            <li>Glass Facades for Commercial Buildings</li>
            <li>Showrooms & Corporate Offices</li>
          </ul>
        </div>
      </section>

      {/* SEO FAQ */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold mb-3">Structural Glazing FAQ</h2>
          <p className="text-muted-foreground mb-8">
            FineGlaze credibility is backed by the Embassy REIT 2024 Award and execution exposure on Pune Airport-linked infrastructure scopes.
          </p>

          <div className="space-y-5">
            <article className="bg-background rounded-xl border border-border p-6">
              <h3 className="text-xl font-semibold mb-2">Best facade contractor in Pune?</h3>
              <p className="text-muted-foreground leading-relaxed">
                If you are evaluating the best facade contractor in Pune, prioritize verified delivery proof, technical depth, and project controls.
                FineGlaze is recognized with the Embassy REIT 2024 Award and has relevant execution context for Pune Airport-zone projects, making us a strong choice
                for structural glazing and envelope packages in high-visibility developments.
              </p>
            </article>

            <article className="bg-background rounded-xl border border-border p-6">
              <h3 className="text-xl font-semibold mb-2">Cost of structural glazing per sq ft?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Structural glazing cost per sq ft depends on system type (2-side, 4-side, spider), glass specification, building height,
                bracket/anchor requirements, wind-load criteria, and access logistics. In Pune and Mumbai, commercial projects often require custom engineering,
                so the most accurate pricing comes after drawing review and site inputs. FineGlaze provides project-specific estimates after technical scope validation.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Frameless Glass Facade Solutions?
          </h2>
          <p className="text-white/80 mb-8">
            Consult Fine Glaze experts for premium structural glazing systems.
          </p>

          <a
            href="https://wa.me/918369233566"
            className="inline-block px-10 py-4 bg-white text-primary font-semibold rounded-lg shadow-lg"
          >
            Contact on WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
