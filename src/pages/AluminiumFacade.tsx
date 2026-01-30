export default function AluminiumFacade() {
  return (
    <main className="bg-background">
      {/* HERO */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Aluminium Facade Systems in India
            </h1>
            <p className="text-lg text-white/80 mb-8">
              Premium aluminium facade solutions engineered for modern
              commercial and residential architecture by Fine Glaze.
            </p>

            <a
              href="https://wa.me/918369233566?text=Hello%20Fine%20Glaze%2C%20I%20want%20an%20aluminium%20facade%20solution."
              className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-semibold shadow-lg"
            >
              Get Instant Quote
            </a>
          </div>

          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt="Modern aluminium facade building"
            className="rounded-xl shadow-2xl object-cover h-[420px] w-full"
          />
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-lg text-muted-foreground">
            Fine Glaze is a trusted aluminium facade contractor in India,
            delivering durable, aesthetic, and high-performance facade systems
            for high-rise buildings, offices, malls, and residential projects.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Aluminium Facade Advantages
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background rounded-xl shadow overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1529429617124-95b109e86bb8"
                alt="Glass and aluminium facade"
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Lightweight & Strong
                </h3>
                <p className="text-muted-foreground">
                  High strength-to-weight ratio ideal for modern structures.
                </p>
              </div>
            </div>

            <div className="bg-background rounded-xl shadow overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5"
                alt="High-rise facade exterior"
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Weather Resistant
                </h3>
                <p className="text-muted-foreground">
                  Excellent resistance to corrosion, heat, and moisture.
                </p>
              </div>
            </div>

            <div className="bg-background rounded-xl shadow overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
                alt="Architectural aluminium facade design"
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Architectural Freedom
                </h3>
                <p className="text-muted-foreground">
                  Supports custom designs and premium finishes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold mb-10">
            Our Aluminium Facade Solutions
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <img
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
              alt="Commercial aluminium facade"
              className="rounded-xl shadow object-cover h-80 w-full"
            />

            <ul className="list-disc pl-6 space-y-4 text-muted-foreground">
              <li>Unitized Aluminium Facade Systems</li>
              <li>Stick System Aluminium Facades</li>
              <li>ACP & Aluminium Composite Panel Cladding</li>
              <li>Custom Architectural Aluminium Facades</li>
              <li>High-rise & Commercial Building Facades</li>
              <li>Energy-Efficient Facade Designs</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Looking for a Reliable Aluminium Facade Contractor?
          </h2>
          <p className="text-white/80 mb-8">
            Talk to Fine Glaze experts and get a tailored aluminium facade
            solution for your project.
          </p>

          <a
            href="https://wa.me/918369233566?text=Hello%20Fine%20Glaze%2C%20Please%20share%20details%20about%20aluminium%20facade%20systems."
            className="inline-block px-10 py-4 bg-white text-primary font-semibold rounded-lg shadow-lg"
          >
            Contact on WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
      }
