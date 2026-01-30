import { motion } from "framer-motion";

export default function FineGlazePro() { return ( <div className="min-h-screen bg-black text-white overflow-hidden"> {/* HERO */} <section className="relative h-screen flex items-center justify-center"> <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-zinc-800" /> <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="relative z-10 text-center px-6" > <h1 className="text-5xl md:text-7xl font-bold tracking-tight"> Engineering the Face of Buildings </h1> <p className="mt-6 text-zinc-300 max-w-2xl mx-auto"> Premium facade, aluminium & glass systems crafted with precision. </p> <div className="mt-10 flex gap-4 justify-center"> <button className="px-8 py-4 rounded-full bg-white text-black font-medium hover:scale-105 transition"> Get a Quote </button> <button className="px-8 py-4 rounded-full border border-white/30 hover:bg-white/10 transition"> View Systems </button> </div> </motion.div> </section>

{/* SIGNATURE SPLIT */}
  <section className="grid md:grid-cols-2 gap-12 px-8 py-24 max-w-7xl mx-auto">
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-semibold">
        Designed like architecture.
        <br />
        Built like engineering.
      </h2>
      <p className="mt-6 text-zinc-400">
        FineGlaze delivers high-performance facade solutions that balance aesthetics, safety and longevity.
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="rounded-3xl bg-white/5 backdrop-blur-xl p-10"
    >
      <div className="h-64 rounded-2xl bg-gradient-to-tr from-zinc-700 to-zinc-900" />
      <p className="mt-4 text-sm text-zinc-400">
        Conceptual facade visualization (replace with project renders)
      </p>
    </motion.div>
  </section>

  {/* SYSTEMS */}
  <section className="px-8 py-24">
    <h3 className="text-center text-3xl font-semibold mb-12">Facade Systems</h3>
    <div className="flex gap-6 overflow-x-auto pb-6">
      {["Unitized", "Spider", "Curtain Wall", "ACP", "Louvers"].map((s) => (
        <div
          key={s}
          className="min-w-[260px] rounded-2xl bg-white/5 p-6 hover:bg-white/10 transition"
        >
          <h4 className="text-xl font-medium">{s}</h4>
          <p className="mt-3 text-sm text-zinc-400">
            Precision-engineered {s.toLowerCase()} facade solutions.
          </p>
        </div>
      ))}
    </div>
  </section>

  {/* TRUST */}
  <section className="grid md:grid-cols-3 gap-8 px-8 py-24 max-w-6xl mx-auto text-center">
    {["50+ Projects", "5L+ Sq.ft", "Pan India"].map((t) => (
      <motion.div
        key={t}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-2xl bg-white/5 p-10"
      >
        <h4 className="text-3xl font-bold">{t}</h4>
      </motion.div>
    ))}
  </section>

  {/* CTA */}
  <section className="px-8 py-24 text-center bg-gradient-to-t from-black to-zinc-900">
    <h2 className="text-4xl font-semibold">Let’s build something iconic</h2>
    <p className="mt-4 text-zinc-400">Talk to FineGlaze today</p>
    <button className="mt-8 px-10 py-4 rounded-full bg-white text-black font-medium hover:scale-105 transition">
      Contact Now
    </button>
  </section>
</div>

); }
