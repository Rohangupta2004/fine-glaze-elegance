import { useEffect, useRef } from "react";
import { useBookCall } from "@/components/booking/BookCallProvider";
import { company } from "@/data/company";
import { VS, FS } from "./shaders";


/**
 * Pinned hero: a live WebGL2 curtain wall at dusk with the headline lit behind the glass.
 * Ported from the approved reference. State classes (gl, nogl, still) go on the .fg-home wrapper.
 */
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

const StoryHero = () => {
  const { open } = useBookCall();
  const storyRef = useRef<HTMLElement>(null);
  const viewRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const noteRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const stage = storyRef.current;
    const view = viewRef.current;
    if (!stage || !view) return;
    const root = (stage.closest(".fg-home") as HTMLElement | null) ?? document.documentElement;

    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

    // A fresh canvas per mount, so a lost context is never reused (StrictMode, route changes).
    const cv = document.createElement("canvas");
    cv.className = "glc";
    cv.setAttribute("aria-hidden", "true");
    view.insertBefore(cv, view.firstChild);

    let cancelled = false;
    let raf = 0;
    let fontTimer = 0;
    let started = false;
    const cleanups: Array<() => void> = [];

    const gl = cv.getContext("webgl2", {
      antialias: false,
      alpha: false,
      powerPreference: "high-performance",
    }) as WebGL2RenderingContext | null;

    const teardown = () => {
      cancelled = true;
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
      clearTimeout(fontTimer);
      cleanups.forEach((fn) => fn());
      cleanups.length = 0;
      root.classList.remove("gl", "nogl", "still");
      if (gl) {
        try {
          gl.getExtension("WEBGL_lose_context")?.loseContext();
        } catch {
          /* context already gone */
        }
      }
      cv.remove();
    };

    if (!gl) {
      root.classList.add("nogl");
      return teardown;
    }

    const sh = (t: number, s: string) => {
      const x = gl.createShader(t)!;
      gl.shaderSource(x, s);
      gl.compileShader(x);
      if (!gl.getShaderParameter(x, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(x));
        return null;
      }
      return x;
    };
    const vs = sh(gl.VERTEX_SHADER, VS);
    const fs = sh(gl.FRAGMENT_SHADER, FS);
    if (!vs || !fs) {
      root.classList.add("nogl");
      return teardown;
    }
    const pr = gl.createProgram()!;
    gl.attachShader(pr, vs);
    gl.attachShader(pr, fs);
    gl.linkProgram(pr);
    if (!gl.getProgramParameter(pr, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(pr));
      root.classList.add("nogl");
      return teardown;
    }
    gl.useProgram(pr);
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const la = gl.getAttribLocation(pr, "a");
    gl.enableVertexAttribArray(la);
    gl.vertexAttribPointer(la, 2, gl.FLOAT, false, 0, 0);
    const U: Record<string, WebGLUniformLocation | null> = {};
    ["uRes", "uT", "uP", "uIn", "uSun", "uN", "uAsp", "uNi", "uRo", "uF", "uR", "uU", "uTR", "uTx"].forEach((k) => {
      U[k] = gl.getUniformLocation(pr, k);
    });
    const tex = gl.createTexture();

    const W = 42, H = 162, PW = 1.5, FH = 3.6, TV = 0.3839;
    let L = {
      asp: 1,
      n: 3,
      rect: [0, 0, 1, 1] as number[],
      d0: 1,
      t0: [0, 0, 0] as number[],
      t1: [0, 0, 0] as number[],
      r1: [0, 0, 0] as number[],
    };

    function makeText(lines: string[], fsz: number) {
      const c = document.createElement("canvas");
      const x = c.getContext("2d")!;
      const font = "800 " + fsz + 'px "Big Shoulders Display","Arial Narrow",Impact,sans-serif';
      x.font = font;
      const cap = x.measureText("H").actualBoundingBoxAscent || fsz * 0.7;
      const lh = Math.round(cap / 0.58);
      let wm = 0;
      lines.forEach((l) => {
        wm = Math.max(wm, x.measureText(l).width);
      });
      const pad = Math.round(lh * 0.05);
      c.width = Math.ceil(wm + pad * 2);
      c.height = lh * lines.length;
      x.font = font;
      x.fillStyle = "#000";
      x.fillRect(0, 0, c.width, c.height);
      x.fillStyle = "#fff";
      x.textBaseline = "alphabetic";
      lines.forEach((l, i) => {
        x.fillText(l, pad, i * lh + lh * 0.7);
      });
      return c;
    }

    function layout() {
      const w = cv.clientWidth, h = cv.clientHeight, asp = w / h, port = asp < 0.85;
      const lines = port ? ["FACADE", "SYSTEMS", "FOR INDIA"] : ["FACADE SYSTEMS", "FOR INDIA"];
      const c = makeText(lines, port ? 220 : 300);
      gl!.bindTexture(gl!.TEXTURE_2D, tex);
      gl!.pixelStorei(gl!.UNPACK_ALIGNMENT, 1);
      gl!.texImage2D(gl!.TEXTURE_2D, 0, gl!.R8, gl!.RED, gl!.UNSIGNED_BYTE, c);
      gl!.generateMipmap(gl!.TEXTURE_2D);
      gl!.texParameteri(gl!.TEXTURE_2D, gl!.TEXTURE_MIN_FILTER, gl!.LINEAR_MIPMAP_LINEAR);
      gl!.texParameteri(gl!.TEXTURE_2D, gl!.TEXTURE_MAG_FILTER, gl!.LINEAR);
      gl!.texParameteri(gl!.TEXTURE_2D, gl!.TEXTURE_WRAP_S, gl!.CLAMP_TO_EDGE);
      gl!.texParameteri(gl!.TEXTURE_2D, gl!.TEXTURE_WRAP_T, gl!.CLAMP_TO_EDGE);
      const n = lines.length, rh = n * FH, rw = (rh * c.width) / c.height;
      const k = Math.max(1, Math.round((W - rw) / 2 / PW) - (port ? 0 : 2)), rx = k * PW + 0.1, ry = (port ? 27 : 27) * FH;
      const th = TV * asp, d0 = Math.max((rw * (port ? 0.56 : 0.6)) / th, (rh * 1.05) / TV), hw = d0 * th, hv = d0 * TV;
      L = {
        asp,
        n,
        rect: [rx, ry, rw, rh],
        d0,
        t0: [rx - W / 2 + (port ? rw / 2 : 0.86 * hw), ry + rh / 2 - (port ? 0.2 : 0.2) * hv, 0],
        t1: [port ? -2 : -25, port ? 96 : 126, 0],
        r1: [port ? 12 : 17, 50, port ? 30 : 26],
      };
    }

    // e: 0 while the unit is being built (the camera looks at open sky), 1 looking up the finished tower
    function cam(e: number, t: number, mx: number, my: number) {
      const ro = [L.r1[0] + mx * 1.2, L.r1[1] + Math.sin(t * 0.09) * 0.8, L.r1[2] - my * 1.2];
      const a0 = [ro[0] + 150 + mx * 10, ro[1] + 34 - my * 8 + Math.sin(t * 0.07) * 2, ro[2] + 62], a1 = L.t1;
      const ta: number[] = [];
      for (let i = 0; i < 3; i++) ta[i] = a0[i] + (a1[i] - a0[i]) * e;
      let f = [ta[0] - ro[0], ta[1] - ro[1], ta[2] - ro[2]];
      const fl = Math.hypot(f[0], f[1], f[2]);
      f = [f[0] / fl, f[1] / fl, f[2] / fl];
      let r = [-f[2], 0, f[0]];
      const rl = Math.hypot(r[0], r[2]);
      r = [r[0] / rl, 0, r[2] / rl];
      const u = [r[1] * f[2] - r[2] * f[1], r[2] * f[0] - r[0] * f[2], r[0] * f[1] - r[1] * f[0]];
      return { ro, f, r, u };
    }

    function size() {
      const small = innerWidth < 820, s = Math.min(devicePixelRatio || 1, small ? 1.25 : 1.5);
      const w = Math.round(cv.clientWidth * s), h = Math.round(cv.clientHeight * s);
      if (cv.width !== w || cv.height !== h) {
        cv.width = w;
        cv.height = h;
        gl!.viewport(0, 0, w, h);
      }
      layout();
    }

    let pT = 0, p = 0, mx = 0, my = 0, mxT = 0, myT = 0, t0 = performance.now(), intro = reduce ? 1 : 0, vis = true;

    function scrollP() {
      const r = stage!.getBoundingClientRect(), span = r.height - innerHeight;
      pT = span > 0 ? Math.min(1, Math.max(0, -r.top / span)) : 0;
    }

    function frame(now: number) {
      raf = 0;
      const t = (now - t0) / 1000;
      if (!reduce) {
        p += (pT - p) * 0.085;
        mx += (mxT - mx) * 0.05;
        my += (myT - my) * 0.05;
        intro = Math.min(1, t / 2.4);
      } else {
        p = 0;
      }
      if (Math.abs(pT - p) < 0.0004) p = pT;
      const q = Math.min(1, Math.max(0, (p - 0.7) / 0.24)), e = q * q * (3 - 2 * q), c = cam(e, t, mx, my);
      gl!.uniform2f(U.uRes, cv.width, cv.height);
      gl!.uniform1f(U.uT, reduce ? 12 : t);
      gl!.uniform1f(U.uP, e);
      gl!.uniform1f(U.uIn, intro);
      gl!.uniform1f(U.uSun, 0.42 + mx * 0.5);
      gl!.uniform1f(U.uN, L.n);
      gl!.uniform1f(U.uAsp, L.asp);
      gl!.uniform1f(U.uNi, e * 0.72);
      gl!.uniform3fv(U.uRo, c.ro);
      gl!.uniform3fv(U.uF, c.f);
      gl!.uniform3fv(U.uR, c.r);
      gl!.uniform3fv(U.uU, c.u);
      gl!.uniform4fv(U.uTR, L.rect);
      gl!.activeTexture(gl!.TEXTURE0);
      gl!.bindTexture(gl!.TEXTURE_2D, tex);
      gl!.uniform1i(U.uTx, 0);
      gl!.drawArrays(gl!.TRIANGLES, 0, 3);
      if (!reduce) {
        if (vis && !document.hidden) raf = requestAnimationFrame(frame);
      }
    }
    const kick = () => {
      if (!cancelled && !raf) raf = requestAnimationFrame(frame);
    };

    function start() {
      if (cancelled || started) return;
      started = true;
      t0 = performance.now();
      root.classList.add("gl");
      if (reduce) root.classList.add("still");
      size();
      scrollP();
      kick();
      const onResize = () => {
        size();
        scrollP();
        kick();
      };
      addEventListener("resize", onResize);
      cleanups.push(() => removeEventListener("resize", onResize));
      if (reduce) return;
      const onScroll = () => {
        scrollP();
        kick();
      };
      addEventListener("scroll", onScroll, { passive: true });
      cleanups.push(() => removeEventListener("scroll", onScroll));
      const onMove = (ev: PointerEvent) => {
        if (ev.pointerType === "touch") return;
        mxT = (ev.clientX / innerWidth) * 2 - 1;
        myT = (ev.clientY / innerHeight) * 2 - 1;
      };
      addEventListener("pointermove", onMove, { passive: true });
      cleanups.push(() => removeEventListener("pointermove", onMove));
      const io = new IntersectionObserver((en) => {
        vis = en[0].isIntersecting;
        if (vis) kick();
      });
      io.observe(stage!);
      cleanups.push(() => io.disconnect());
      document.addEventListener("visibilitychange", kick);
      cleanups.push(() => document.removeEventListener("visibilitychange", kick));
    }

    // Wait for the display font before drawing the text texture (capped, as in the reference).
    const ready =
      document.fonts && document.fonts.load
        ? Promise.race([
            document.fonts.load('800 100px "Big Shoulders Display"'),
            new Promise((r) => {
              fontTimer = window.setTimeout(r, 2200);
            }),
          ])
        : Promise.resolve();
    ready.then(start, start);

    // The font stylesheet loads without blocking, so the face can arrive after the
    // first draw. Redraw the lit headline once it is really there.
    const onFonts = () => {
      if (document.fonts.check('800 100px "Big Shoulders Display"')) {
        size();
        kick();
      }
    };
    if (document.fonts && document.fonts.addEventListener) {
      document.fonts.addEventListener("loadingdone", onFonts);
      cleanups.push(() => document.fonts.removeEventListener("loadingdone", onFonts));
    }

    return teardown;
  }, []);

  useEffect(() => {
    const seq = storyRef.current;
    const svg = svgRef.current;
    if (!seq || !svg) return;
    const root = (seq.closest(".fg-home") as HTMLElement | null) ?? document.documentElement;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

    const NS = "http://www.w3.org/2000/svg";
    const C = 0.866, S = 0.5, sc = 104, OX = 500, OY = 585, LN = "rgba(8,12,22,.85)";
    type Pt = number[];
    const P = (x: number, y: number, z: number): Pt => [OX + (x - z) * C * sc, OY - y * sc + (x + z) * S * sc];
    const el = (n: string, a: Record<string, string | number>, p?: Element) => {
      const e = document.createElementNS(NS, n);
      for (const k in a) e.setAttribute(k, String(a[k]));
      (p || svg).appendChild(e);
      return e;
    };
    const pts = (a: Pt[]) => a.map((p) => p[0].toFixed(1) + "," + p[1].toFixed(1)).join(" ");
    const defs = el("defs", {});
    const grad = (id: string, x1: number, y1: number, x2: number, y2: number, st: (string | number)[][]) => {
      const g = el("linearGradient", { id, x1, y1, x2, y2 }, defs);
      st.forEach((q) => {
        el("stop", { offset: q[0], "stop-color": q[1], "stop-opacity": q[2] == null ? 1 : q[2] }, g);
      });
    };
    grad("aT", 0, 0, 1, 1, [[0, "#f6f8fb"], [1, "#c7ced9"]]);
    grad("aR", 0, 0, 0, 1, [[0, "#8a94a6"], [1, "#566072"]]);
    grad("aF", 0, 0, 0, 1, [[0, "#d3d9e3"], [0.5, "#aab3c1"], [1, "#8792a4"]]);
    grad("gG", 0, 0, 0, 1, [[0, "#182c5c", 0.86], [0.42, "#5d5488", 0.74], [0.74, "#d98758", 0.7], [1, "#f8bd6e", 0.66]]);
    grad("gS", 0, 0, 0, 1, [[0, "#152036", 0.96], [1, "#0c1322", 0.96]]);
    grad("cT", 0, 0, 1, 1, [[0, "#737b8b"], [1, "#4c5464"]]);
    grad("cR", 0, 0, 0, 1, [[0, "#30384a"], [1, "#1c2331"]]);
    grad("cF", 0, 0, 0, 1, [[0, "#454d5e"], [1, "#2a3140"]]);
    grad("sT", 0, 0, 1, 1, [[0, "#eef1f6"], [1, "#b9c1cf"]]);
    grad("lit", 0, 0, 0, 1, [[0, "#ffe2ad"], [1, "#ffb866"]]);
    const poly = (g: Element, a: Pt[], fill: string, stroke?: string, sw?: number) =>
      el("polygon", { points: pts(a), fill, stroke: stroke || LN, "stroke-width": sw || 0.9, "stroke-linejoin": "round" }, g);
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
    const alu = ["url(#aT)", "url(#aR)", "url(#aF)"],
      blk = ["#2a3345", "#070b14", "#121826", "rgba(120,132,152,.5)"],
      sil = ["#f6f3ea", "#bdb8a9", "#e6e2d8"],
      stl = ["url(#sT)", "#5f697b", "#99a2b2"];
    const gS = el("g", {});
    box(gS, -0.25, 3.02, -1.5, 2, 0.34, 1.5, ["url(#cT)", "url(#cR)", "url(#cF)"]);
    const g0 = el("g", {}), g1 = el("g", {}), g2 = el("g", {}), g3 = el("g", {}), g4 = el("g", {});
    box(g0, 0.5, 3.36, -0.62, 0.5, 0.07, 0.74, stl);
    box(g0, 0.5, 3.1, 0.05, 0.5, 0.33, 0.07, stl);
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
    box(g3, 0.085, 0.09, lz, 1.33, 0.63, 0.1, ["#86c2ae", "#4f8f7b", "url(#gS)"]);
    box(g3, 0.085, 0.8, lz, 1.33, 2.71, 0.1, ["#9fd6c2", "#4f8f7b", "url(#gG)"]);
    poly(g3, [P(0.28, 3.36, lz + 0.1), P(0.66, 3.36, lz + 0.1), P(0.3, 0.95, lz + 0.1), P(0.12, 0.95, lz + 0.1)], "rgba(255,255,255,.16)", "none");
    poly(g3, [P(0.86, 3.36, lz + 0.1), P(0.98, 3.36, lz + 0.1), P(0.62, 0.95, lz + 0.1), P(0.56, 0.95, lz + 0.1)], "rgba(255,255,255,.09)", "none");
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
        el("polygon", { points: pts([P2(x, y, 0), P2(x + 1.5, y, 0), P2(x + 1.5, y + 0.74, 0), P2(x, y + 0.74, 0)]), fill: "url(#gS)", stroke: "#aab3c2", "stroke-width": 1.3 }, g);
        el("polygon", {
          points: pts([P2(x, y + 0.74, 0), P2(x + 1.5, y + 0.74, 0), P2(x + 1.5, y + 3.6, 0), P2(x, y + 3.6, 0)]),
          fill: lit ? "url(#lit)" : "url(#gG)",
          stroke: "#aab3c2",
          "stroke-width": 1.3,
        }, g);
        cells.push({ g, r });
      }
    const hc = 2, hr = 1, HO = P2(hc * 1.5, hr * 3.6, 0), k = s2 / sc;
    const unit = el("g", {});
    [gS as Element].concat(layers).concat(dots).forEach((g) => unit.appendChild(g));
    svg.insertBefore(unit, wall);

    const noteEl = noteRef.current;
    const blocks = Array.from(seq.querySelectorAll<HTMLElement>(".blk")); // hero, 5 steps, repeats, delivered, award
    const ease = (t: number) => {
      t = Math.min(1, Math.max(0, t));
      return t * t * (3 - 2 * t);
    };
    const starts = [0.06, 0.16, 0.26, 0.36, 0.46], len = 0.085, WALL = 0.58, TOWER = 0.72, B2 = 0.74, B3 = 0.87;
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
      for (let i = 0; i < 5; i++) if (p >= starts[i] - 0.025) idx = i + 1;
      if (p >= WALL - 0.02) idx = 6;
      if (p >= B2) idx = 7;
      if (p >= B3) idx = 8;
      if (idx !== cur) {
        cur = idx;
        blocks.forEach((b, i) => b.classList.toggle("on", i === idx));
      }
      const qv = ease((p - (WALL - 0.02)) / 0.1), kk = 1 + (k - 1) * qv, O = P(0, 0, 0);
      unit.setAttribute(
        "transform",
        "translate(" + ((HO[0] - O[0]) * qv + O[0] * (1 - kk)).toFixed(1) + "," + ((HO[1] - O[1]) * qv + O[1] * (1 - kk)).toFixed(1) + ") scale(" + kk.toFixed(4) + ")",
      );
      unit.setAttribute("opacity", (1 - ease((qv - 0.82) / 0.18)).toFixed(3));
      const out = 1 - ease((p - TOWER) / 0.07); // the drawing gives way to the tower
      wall.setAttribute("opacity", (ease(qv * 1.6) * out).toFixed(3));
      wall.setAttribute("transform", "translate(0," + ((1 - out) * -60).toFixed(1) + ")");
      cells.forEach((c) => c.g.setAttribute("opacity", ease(qv * 5 - c.r * 0.8).toFixed(3)));
      if (noteEl) noteEl.style.opacity = String(Math.max(0, 1 - p / 0.05));
    }
    function scrollP() {
      const r = seq!.getBoundingClientRect(), span = r.height - innerHeight;
      pT = span > 0 ? Math.min(1, Math.max(0, -r.top / span)) : 0;
    }
    function tick() {
      raf = 0;
      p += (pT - p) * 0.1;
      if (Math.abs(pT - p) < 0.0004) p = pT;
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
    <section className="story" ref={storyRef} data-header-clear aria-label="How a facade goes together">
      <div className="pin">
        <div className="view" ref={viewRef}>
          <div className="shade" />
        </div>
        <div className="unitbox">
          <svg
            ref={svgRef}
            viewBox="0 0 800 900"
            preserveAspectRatio="xMidYMid meet"
            role="img"
            aria-label="A curtain wall unit taken apart: slab bracket, aluminium frame, gaskets, glass and silicone"
          />
        </div>
        <div className="tell">
          <div className="blk hero on">
            <h1>Facade systems for India, built unit by unit.</h1>
            <p>
              Fine Glaze designs, fabricates, installs and maintains facade systems across India, from Pune and
              Mumbai.
            </p>
            <button className="btn" type="button" onClick={() => open({ source: "home_hero" })}>
              Book a call
            </button>
          </div>
          {STEPS.map((st, i) => (
            <div className="blk step" key={st.title}>
              <p className="n">{i + 1}</p>
              <h3>{st.title}</h3>
              <p>{st.text}</p>
              <figure className="job">
                <img src={st.img} width={st.w} height={st.h} alt={st.alt} decoding="async" {...{ fetchpriority: "low" }} />
                <figcaption>
                  <b>{st.job}</b>
                  <span>{st.jobText}</span>
                </figcaption>
              </figure>
            </div>
          ))}
          <div className="blk say">
            <h2>Then it repeats, floor by floor.</h2>
            <p>Drawings and engineering are produced in-house, before anything is cut.</p>
          </div>
          <div className="blk say">
            <h2>
              {company.stats.sqmDelivered} sqm of facade delivered.
            </h2>
            <p>
              Across Pune and Mumbai so far, by a core team of {company.stats.coreTeam} in engineering, supervision and
              site work.
            </p>
          </div>
          <div className="blk say">
            <h2>Best Vendor Performance 2024.</h2>
            <figure className="job award">
              <img
                src="/Awards.webp"
                width={692}
                height={360}
                alt="Certificate of appreciation and trophy from Embassy REIT"
                decoding="async"
                {...{ fetchpriority: "low" }}
              />
              <figcaption>
                <b>Awarded by Embassy REIT</b>
                <span>&ldquo;For successfully completing the Embassy 247, Vikhroli project.&rdquo;</span>
              </figcaption>
            </figure>
            <button className="btn" type="button" onClick={() => open({ source: "home_story_end" })}>
              Book a call
            </button>
          </div>
        </div>
        <p className="note" ref={noteRef}>
          <b>Illustration, drawn live in your browser.</b>
          <span className="scrollhint">Scroll to build it.</span>
        </p>
      </div>
    </section>
  );
};

export default StoryHero;
