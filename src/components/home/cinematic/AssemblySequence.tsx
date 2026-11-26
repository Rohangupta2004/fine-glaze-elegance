import { useEffect, useRef } from "react";

interface Step {
  title: string;
  text: string;
  img: string;
  w: number;
  h: number;
  alt: string;
  job: string;
  jobText: string;
}

const STEPS: Step[] = [
  {
    title: "Anchor bracket",
    text: "Fixed to the slab edge. Line, level and plumb are verified floor by floor.",
    img: "/projects/pune-airport-terminal-42-1.webp",
    w: 1024,
    h: 576,
    alt: "Pune International Airport, new terminal",
    job: "Pune International Airport",
    jobText: "Stainless steel column cladding on MS framing. Completed 2023.",
  },
  {
    title: "Aluminium frame",
    text: "Mullions and transoms, cut and assembled at our Pisoli unit.",
    img: "/projects/ssg-honesty-30-1.webp",
    w: 1600,
    h: 900,
    alt: "SSG Honesty Nimkar Building, Panvel",
    job: "SSG Honesty, Panvel",
    jobText: "Structural glazing, curtain wall, ACP and openable windows. Completed.",
  },
  {
    title: "Gaskets",
    text: "The seal between frame and glass. Where leaks start, and where we stop them.",
    img: "/projects/nanavati-max-hospital-38-1.webp",
    w: 1150,
    h: 647,
    alt: "Nanavati Max Hospital, Vile Parle, from the air",
    job: "Nanavati Max Hospital, Vile Parle",
    jobText: "Window leakage rectification, ACP cladding and top coping. Work ongoing.",
  },
  {
    title: "Glass",
    text: "Checked against the approved specification on receipt.",
    img: "/Embassy.webp",
    w: 1024,
    h: 1024,
    alt: "Embassy 247, Vikhroli West, at dusk",
    job: "Embassy 247, Vikhroli West",
    jobText: "200+ foggy or damaged glass panels replaced.",
  },
  {
    title: "Silicone",
    text: "Structural and weather sealant, to the project specification.",
    img: "/projects/embassy-247-37-1.webp",
    w: 775,
    h: 436,
    alt: "Embassy 247, Vikhroli West",
    job: "Embassy 247, Vikhroli West",
    jobText: "Approx. 80,500 running metres of facade sealant.",
  },
];

/** Pinned SVG sequence: one curtain wall unit, put together by scrolling. */
const AssemblySequence = () => {
  const seqRef = useRef<HTMLElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const seq = seqRef.current;
    const svg = svgRef.current;
    if (!seq || !svg) return;
    const root = (seq.closest(".fg-home") as HTMLElement | null) ?? document.documentElement;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

    const NS = "http://www.w3.org/2000/svg";
    const C = 0.866, S = 0.5, sc = 104, OX = 500, OY = 585, LN = "#cfd6e2";
    type Pt = number[];
    const P = (x: number, y: number, z: number): Pt => [OX + (x - z) * C * sc, OY - y * sc + (x + z) * S * sc];
    const el = (n: string, a: Record<string, string | number>, p?: Element) => {
      const e = document.createElementNS(NS, n);
      for (const k in a) e.setAttribute(k, String(a[k]));
      (p || svg).appendChild(e);
      return e;
    };
    const pts = (a: Pt[]) => a.map((p) => p[0].toFixed(1) + "," + p[1].toFixed(1)).join(" ");
    const poly = (g: Element, a: Pt[], fill: string, stroke?: string, sw?: number) =>
      el("polygon", { points: pts(a), fill, stroke: stroke || LN, "stroke-width": sw || 1, "stroke-linejoin": "round" }, g);
    const box = (g: Element, x: number, y: number, z: number, w: number, h: number, d: number, f: string[]) => {
      const x1 = x + w, y1 = y + h, z1 = z + d;
      poly(g, [P(x, y1, z), P(x1, y1, z), P(x1, y1, z1), P(x, y1, z1)], f[0], f[3]);
      poly(g, [P(x1, y, z), P(x1, y1, z), P(x1, y1, z1), P(x1, y, z1)], f[1], f[3]);
      poly(g, [P(x, y, z1), P(x1, y, z1), P(x1, y1, z1), P(x, y1, z1)], f[2], f[3]);
    };
    const dots: Element[] = [];
    const dot = (x: number, y: number, z: number, n: number) => {
      const d = document.createElementNS(NS, "g"), p = P(x, y, z);
      el("circle", { cx: p[0], cy: p[1], r: 15, fill: "#ffb866" }, d);
      const t = el("text", { x: p[0], y: p[1] + 6, "text-anchor": "middle", "font-size": 17, fill: "#1b1206" }, d);
      t.textContent = String(n);
      dots.push(d);
    };
    const alu = ["#e6eaf1", "#aeb7c7", "#c9d0dc", "#1a2233"],
      blk = ["#2a3345", "#0a0f1a", "#151c2b", "#5a667d"],
      sil = ["#f6f3ea", "#cfcabb", "#ece8df", "#1a2233"],
      brz = ["#ffd9a0", "#c98a3c", "#ffb866", "#1b1206"];
    const gS = el("g", {});
    box(gS, -0.25, 3.02, -1.5, 2, 0.34, 1.5, ["#22304d", "#111a2d", "#1a2740", "#5b6a85"]);
    const g0 = el("g", {}), g1 = el("g", {}), g2 = el("g", {}), g3 = el("g", {}), g4 = el("g", {});
    box(g0, 0.5, 3.36, -0.62, 0.5, 0.07, 0.74, brz);
    box(g0, 0.5, 3.1, 0.05, 0.5, 0.33, 0.07, brz);
    dot(0.75, 3.75, -0.2, 1);
    const fd = 0.2;
    box(g1, 0, 0, 0, 0.075, 3.6, fd, alu);
    box(g1, 0.075, 0, 0, 1.35, 0.075, fd, alu);
    box(g1, 0.075, 0.74, 0, 1.35, 0.06, fd, alu);
    box(g1, 0.075, 3.525, 0, 1.35, 0.075, fd, alu);
    box(g1, 1.425, 0, 0, 0.075, 3.6, fd, alu);
    dot(-0.2, 2.2, fd, 2);
    const gz = fd;
    box(g2, 0.07, 0.8, gz, 0.035, 2.73, 0.03, blk);
    box(g2, 0.07, 0.8, gz, 1.36, 0.035, 0.03, blk);
    box(g2, 0.07, 3.495, gz, 1.36, 0.035, 0.03, blk);
    box(g2, 1.395, 0.8, gz, 0.035, 2.73, 0.03, blk);
    box(g2, 0.07, 0.07, gz, 0.035, 0.67, 0.03, blk);
    box(g2, 0.07, 0.07, gz, 1.36, 0.035, 0.03, blk);
    box(g2, 1.395, 0.07, gz, 0.035, 0.67, 0.03, blk);
    dot(-0.2, 1.6, gz, 3);
    const lz = fd + 0.03;
    box(g3, 0.085, 0.09, lz, 1.33, 0.63, 0.1, ["#86c2ae", "#4f8f7b", "rgba(17,26,43,.92)"]);
    box(g3, 0.085, 0.8, lz, 1.33, 2.71, 0.1, ["#86c2ae", "#4f8f7b", "rgba(134,194,174,.3)"]);
    poly(g3, [P(0.3, 3.2, lz + 0.1), P(0.62, 3.2, lz + 0.1), P(0.2, 1.3, lz + 0.1), P(0.12, 1.3, lz + 0.1)], "rgba(255,255,255,.2)", "none");
    dot(-0.2, 1.0, lz + 0.1, 4);
    const bz = lz + 0.1;
    box(g4, 0.02, 0, bz, 0.07, 3.6, 0.025, sil);
    box(g4, 0.09, 0, bz, 1.32, 0.07, 0.025, sil);
    box(g4, 0.09, 3.53, bz, 1.32, 0.07, 0.025, sil);
    box(g4, 1.41, 0, bz, 0.07, 3.6, 0.025, sil);
    box(g4, 0.09, 0.74, bz, 1.32, 0.055, 0.025, sil);
    dot(-0.2, 0.4, bz, 5);
    const layers = [g0, g1, g2, g3, g4], E = [0, 0.85, 1.6, 2.4, 3.2];
    const s2 = 46, W2 = [215, 676];
    const P2 = (x: number, y: number, z: number): Pt => [W2[0] + (x - z) * C * s2, W2[1] - y * s2 + (x + z) * S * s2];
    const wall = el("g", { opacity: 0 });
    const cells: { g: Element; r: number }[] = [];
    for (let r = 0; r < 4; r++)
      for (let c = 0; c < 6; c++) {
        const g = el("g", { opacity: 0 }, wall), x = c * 1.5, y = r * 3.6, lit = (c * 7 + r * 13) % 5 === 0;
        el("polygon", { points: pts([P2(x, y, 0), P2(x + 1.5, y, 0), P2(x + 1.5, y + 0.74, 0), P2(x, y + 0.74, 0)]), fill: "#111a2b", stroke: "#8f9bb0", "stroke-width": 1.2 }, g);
        el("polygon", {
          points: pts([P2(x, y + 0.74, 0), P2(x + 1.5, y + 0.74, 0), P2(x + 1.5, y + 3.6, 0), P2(x, y + 3.6, 0)]),
          fill: lit ? "#ffb866" : (c + r) % 2 ? "rgba(134,194,174,.26)" : "rgba(134,194,174,.17)",
          stroke: "#8f9bb0",
          "stroke-width": 1.2,
        }, g);
        cells.push({ g, r });
      }
    const hc = 2, hr = 1, HO = P2(hc * 1.5, hr * 3.6, 0), k = s2 / sc;
    el("polygon", {
      points: pts([P2(hc * 1.5, hr * 3.6, 0), P2(hc * 1.5 + 1.5, hr * 3.6, 0), P2(hc * 1.5 + 1.5, hr * 3.6 + 3.6, 0), P2(hc * 1.5, hr * 3.6 + 3.6, 0)]),
      fill: "none",
      stroke: "#ffb866",
      "stroke-width": 3,
    }, wall);
    const unit = el("g", {});
    [gS as Element].concat(layers).concat(dots).forEach((g) => unit.appendChild(g));
    svg.insertBefore(unit, wall);

    const blocks = Array.from(seq.querySelectorAll<HTMLElement>(".blk")); // intro, 5 steps, fin
    const ease = (t: number) => {
      t = Math.min(1, Math.max(0, t));
      return t * t * (3 - 2 * t);
    };
    const starts = [0.08, 0.23, 0.38, 0.53, 0.68], len = 0.11, FIN = 0.84;
    let pT = 0, p = 0, raf = 0, cur = -1, cancelled = false;
    function draw() {
      layers.forEach((g, i) => {
        const a = ease((p - starts[i]) / len);
        let tr: string;
        if (i === 0) tr = "translate(0," + (-(1 - a) * 120).toFixed(1) + ")";
        else {
          const dz = E[i] * (1 - a);
          tr = "translate(" + (-dz * C * sc).toFixed(1) + "," + (dz * S * sc).toFixed(1) + ")";
        }
        g.setAttribute("transform", tr);
        dots[i].setAttribute("transform", tr);
      });
      let idx = 0;
      for (let i = 0; i < 5; i++) if (p >= starts[i] - 0.03) idx = i + 1;
      if (p >= FIN) idx = 6;
      if (idx !== cur) {
        cur = idx;
        blocks.forEach((b, i) => b.classList.toggle("on", i === idx));
      }
      const qv = ease((p - (FIN - 0.02)) / 0.16), kk = 1 + (k - 1) * qv, O = P(0, 0, 0);
      unit.setAttribute(
        "transform",
        "translate(" + ((HO[0] - O[0]) * qv + O[0] * (1 - kk)).toFixed(1) + "," + ((HO[1] - O[1]) * qv + O[1] * (1 - kk)).toFixed(1) + ") scale(" + kk.toFixed(4) + ")",
      );
      unit.setAttribute("opacity", (1 - ease((qv - 0.82) / 0.18)).toFixed(3));
      wall.setAttribute("opacity", ease(qv * 1.6).toFixed(3));
      cells.forEach((c) => c.g.setAttribute("opacity", ease(qv * 5 - c.r * 0.8).toFixed(3)));
    }
    function scrollP() {
      const r = seq!.getBoundingClientRect(), span = r.height - innerHeight;
      pT = span > 0 ? Math.min(1, Math.max(0, -r.top / span)) : 0;
    }
    function tick() {
      raf = 0;
      p += (pT - p) * 0.12;
      if (Math.abs(pT - p) < 0.0005) p = pT;
      draw();
      if (p !== pT && !cancelled) raf = requestAnimationFrame(tick);
    }
    const kick = () => {
      if (!raf && !cancelled) raf = requestAnimationFrame(tick);
    };
    const onScroll = () => {
      scrollP();
      kick();
    };
    if (reduce) {
      root.classList.add("still");
      p = 0;
      draw();
      blocks.forEach((b) => b.classList.add("on"));
    } else {
      scrollP();
      p = pT;
      draw();
      addEventListener("scroll", onScroll, { passive: true });
      addEventListener("resize", onScroll);
    }

    return () => {
      cancelled = true;
      if (raf) cancelAnimationFrame(raf);
      removeEventListener("scroll", onScroll);
      removeEventListener("resize", onScroll);
      if (reduce) root.classList.remove("still");
      blocks.forEach((b, i) => b.classList.toggle("on", i === 0 && !reduce));
      while (svg.firstChild) svg.removeChild(svg.firstChild);
    };
  }, []);

  return (
    <section
      className="asm"
      ref={seqRef}
      aria-label="A curtain wall unit, part by part, with the jobs where each part was the work"
    >
      <div className="asm-pin">
        <div className="asm-copy">
          <div className="blk intro on">
            <h2>One unit, taken apart.</h2>
            <p>Scroll to put it together. Each part arrives with a job where that part was the work.</p>
          </div>
          {STEPS.map((s, i) => (
            <div className="blk step" key={s.title}>
              <p className="n">{i + 1}</p>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <figure className="job">
                <img src={s.img} width={s.w} height={s.h} alt={s.alt} loading="lazy" />
                <figcaption>
                  <b>{s.job}</b>
                  <span>{s.jobText}</span>
                </figcaption>
              </figure>
            </div>
          ))}
          <div className="blk fin">
            <h2>Then it repeats, floor by floor.</h2>
            <figure className="job award">
              <img
                src="/Awards.webp"
                width={692}
                height={360}
                alt="Certificate of appreciation and trophy from Embassy REIT"
                loading="lazy"
              />
              <figcaption>
                <b>Best Vendor Performance 2024</b>
                <span>Awarded by Embassy REIT &ldquo;for successfully completing the Embassy 247, Vikhroli project.&rdquo;</span>
              </figcaption>
            </figure>
          </div>
        </div>
        <div className="asm-draw">
          <svg
            ref={svgRef}
            viewBox="0 0 800 900"
            preserveAspectRatio="xMidYMid meet"
            role="img"
            aria-label="Drawing of a curtain wall unit taken apart: slab bracket, aluminium frame, gaskets, glass and silicone"
          />
        </div>
        <p className="asm-tag">Illustrative unit, not a project drawing.</p>
      </div>
    </section>
  );
};

export default AssemblySequence;
