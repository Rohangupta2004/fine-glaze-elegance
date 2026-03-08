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
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
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

      {/* SEO CONTENT */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl space-y-6">
          <h2 className="text-3xl font-bold">Why Fine Glaze for Structural Glazing in Mumbai</h2>
          <p className="text-muted-foreground leading-relaxed">
            Businesses looking for structural glazing in Mumbai usually want a facade that looks premium while still delivering measurable performance. Fine Glaze operates as a structural glazing company and execution contractor for projects where visual continuity, weather resistance, and program certainty all matter. We support consultants, architects, and developers across commercial towers, office parks, hospitality assets, and high-rise residential developments. Our team works from design intent to site completion, which helps clients avoid the disconnect that often appears when one vendor supplies material and another handles installation.
          </p>
          <h3 className="text-2xl font-semibold">Process</h3>
          <p className="text-muted-foreground leading-relaxed">
            Every structural glazing package starts with design coordination, wind-load validation, and interface planning with civil and MEP teams. We then finalize shop drawings, mock-up approvals, and installation sequence for safe execution at height. This structured process is designed for fast-moving commercial and high-rise projects in Mumbai where delays impact multiple trades.
          </p>
          <h3 className="text-2xl font-semibold">Materials and specifications</h3>
          <p className="text-muted-foreground leading-relaxed">
            We specify system-compatible silicone, high-grade framing components, and tested glass combinations based on use case and elevation exposure. When projects need a full envelope strategy, we coordinate structural glazing with <a href="/curtain-wall-systems" className="text-primary underline">curtain wall systems</a>, <a href="/acp-aluminium-cladding" className="text-primary underline">ACP cladding</a>, and <a href="/aluminium-facade" className="text-primary underline">aluminium facade packages</a>. For podiums and amenity decks, we also integrate with <a href="/glass-railings" className="text-primary underline">glass railing solutions</a>.
          </p>
          <h3 className="text-2xl font-semibold">Industries and FAQ</h3>
          <p className="text-muted-foreground leading-relaxed">
            Fine Glaze executes structural glazing for IT campuses, corporate headquarters, healthcare blocks, retail facades, and upscale residential communities. Clients often ask if frameless systems are practical for coastal and humid environments like Mumbai. They are, when the right sealant grade, drainage detailing, and maintenance planning are built into the project from day one. Another frequent question is whether a single contractor can handle design assist plus installation; our team covers both for better accountability.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            If you need a structural glazing contractor in Mumbai for a commercial or residential project, <a href="/contact" className="text-primary underline font-medium">contact Fine Glaze</a> for a specification-driven quote and site consultation.
          </p>
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
