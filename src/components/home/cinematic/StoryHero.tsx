import { useEffect, useRef } from "react";
import { useBookCall } from "@/components/booking/BookCallProvider";
import { company } from "@/data/company";
import { VS, FS } from "./shaders";

type Pt = number[];
interface Material {
  top: string;
  side: string;
  face?: string;
  ln?: string;
  front?: (a: Pt, b: Pt) => CanvasGradient;
}
type PartBox = [string, number, number, number, number, number, number];

const NAMES = ["Anchor bracket", "Aluminium frame", "Gaskets", "Glass", "Silicone"];
// vertical offsets of the label boxes, so neighbouring labels do not collide
const LDY = [-26, -30, 12, -8, 30];

/**
 * Pinned story: the headline lit on a WebGL tower at dusk, the camera goes to one open bay and a
 * unit is installed into it. The parts are drawn on a 2D canvas with the same camera.
 * State classes (gl, nogl, still) go on the .fg-home wrapper.
 */
const StoryHero = () => {
  const { open } = useBookCall();
  const storyRef = useRef<HTMLElement>(null);
  const viewRef = useRef<HTMLDivElement>(null);
  const noteRef = useRef<HTMLParagraphElement>(null);
  const shadeLRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = storyRef.current;
    const view = viewRef.current;
    const note = noteRef.current;
    const shl = shadeLRef.current;
    const rail = railRef.current;
    if (!stage || !view || !note || !shl) return;
    const root = (stage.closest(".fg-home") as HTMLElement | null) ?? document.documentElement;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Fresh canvases per mount, so a lost context is never reused (StrictMode, route changes).
    const cv = document.createElement("canvas");
    cv.className = "glc";
    cv.setAttribute("aria-hidden", "true");
    const pc = document.createElement("canvas");
    pc.className = "partsc";
    pc.setAttribute("aria-hidden", "true");
    view.insertBefore(pc, view.firstChild);
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
      pc.remove();
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
    ["uRes", "uT", "uP", "uIn", "uSun", "uN", "uAsp", "uNi", "uRo", "uF", "uR", "uU", "uTR", "uTx", "uBay", "uOpen", "uLit", "uSg"].forEach((k) => {
      U[k] = gl.getUniformLocation(pr, k);
    });
    const tex = gl.createTexture();
    const ctx = pc.getContext("2d")!;

    const W = 42, PW = 1.5, FH = 3.6, TV = 0.3839;
    let L = {
      asp: 1,
      port: false,
      n: 3,
      rect: [0, 0, 1, 1] as number[],
      d0: 1,
      bay: [0, 0] as number[],
      X0: 0,
      Y0: 0,
      t0: [0, 0, 0] as number[],
      t1: [0, 0, 0] as number[],
      r1: [0, 0, 0] as number[],
    };
    let VW = 1, VH = 1;
    const ease = (t: number) => {
      t = Math.min(1, Math.max(0, t));
      return t * t * (3 - 2 * t);
    };

    function makeText(lines: string[], fsz: number) {
      const c = document.createElement("canvas");
      const x = c.getContext("2d")!;
      const font = "500 " + fsz + 'px "Lora",Georgia,"Times New Roman",serif';
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
      const lines = ["We build", "the face of", "your building."];
      const c = makeText(lines, port ? 170 : 210);
      gl!.bindTexture(gl!.TEXTURE_2D, tex);
      gl!.pixelStorei(gl!.UNPACK_ALIGNMENT, 1);
      gl!.texImage2D(gl!.TEXTURE_2D, 0, gl!.R8, gl!.RED, gl!.UNSIGNED_BYTE, c);
      gl!.generateMipmap(gl!.TEXTURE_2D);
      gl!.texParameteri(gl!.TEXTURE_2D, gl!.TEXTURE_MIN_FILTER, gl!.LINEAR_MIPMAP_LINEAR);
      gl!.texParameteri(gl!.TEXTURE_2D, gl!.TEXTURE_MAG_FILTER, gl!.LINEAR);
      gl!.texParameteri(gl!.TEXTURE_2D, gl!.TEXTURE_WRAP_S, gl!.CLAMP_TO_EDGE);
      gl!.texParameteri(gl!.TEXTURE_2D, gl!.TEXTURE_WRAP_T, gl!.CLAMP_TO_EDGE);
      const n = lines.length, rh = n * FH, rw = (rh * c.width) / c.height;
      const k = Math.max(1, Math.round((W - rw) / 2 / PW) - (port ? 0 : 2)), rx = k * PW + 0.1, ry = 27 * FH;
      const th = TV * asp, d0 = Math.max((rw * (port ? 0.56 : 0.6)) / th, (rh * 1.05) / TV), hw = d0 * th, hv = d0 * TV;
      // the open bay: beside the sign on a wide screen, under it on a phone
      const bx = port ? Math.floor((rx + rw * 0.5) / PW) : Math.min(26, Math.floor((rx + rw) / PW) + 2), by = port ? 25 : 28;
      L = {
        asp,
        port,
        n,
        rect: [rx, ry, rw, rh],
        d0,
        bay: [bx, by],
        X0: bx * PW - W / 2,
        Y0: by * FH,
        t0: [rx - W / 2 + (port ? rw / 2 : 0.86 * hw), ry + rh / 2 - 0.2 * hv, 0],
        t1: [port ? -2 : -25, port ? 96 : 126, 0],
        r1: [port ? 12 : 17, 50, port ? 30 : 26],
      };
      VW = w;
      VH = h;
    }

    function pose(yaw: number, el: number, d: number, ta: number[]) {
      const ce = Math.cos(el);
      return [ta[0] + d * Math.sin(yaw) * ce, ta[1] + d * Math.sin(el), ta[2] + d * Math.cos(yaw) * ce];
    }
    function cam(p: number, t: number, mx: number, my: number) {
      // A: the opening view of the lit headline.  B: at the open bay.  C: looking up the finished tower.
      const aA = [L.t0[0], L.t0[1] + Math.sin(t * 0.11) * 0.5, L.t0[2]],
        rA = pose(0.2 + Math.sin(t * 0.07) * 0.012 + mx * 0.06, -0.1 + my * 0.03, L.d0, aA);
      const yawB = -0.8 + mx * 0.06 + Math.sin(t * 0.13) * 0.012, elB = 0.16 + my * 0.03, dB = L.port ? 15 : 9.2;
      const cB = [L.X0 + 0.75, L.Y0 + 1.8, 1.7];
      const fB = [-Math.sin(yawB) * Math.cos(elB), -Math.sin(elB), -Math.cos(yawB) * Math.cos(elB)],
        rl = Math.hypot(fB[2], fB[0]),
        rB = [-fB[2] / rl, 0, fB[0] / rl];
      const shx = L.port ? 0 : -(dB * TV * L.asp) * 0.3, shy = L.port ? dB * TV * 0.4 : 0;
      const aB = [cB[0] + rB[0] * shx, cB[1] + shy, cB[2] + rB[2] * shx], rBp = pose(yawB, elB, dB, aB);
      const aC = L.t1, rC = [L.r1[0] + mx * 1.2, L.r1[1] + Math.sin(t * 0.09) * 0.8, L.r1[2] - my * 1.2];
      const e1 = ease((p - 0.07) / 0.12), e2 = ease((p - 0.77) / 0.19);
      const ro: number[] = [], ta: number[] = [];
      for (let i = 0; i < 3; i++) {
        ro[i] = rA[i] + (rBp[i] - rA[i]) * e1;
        ta[i] = aA[i] + (aB[i] - aA[i]) * e1;
        ro[i] += (rC[i] - ro[i]) * e2;
        ta[i] += (aC[i] - ta[i]) * e2;
      }
      let f = [ta[0] - ro[0], ta[1] - ro[1], ta[2] - ro[2]];
      const fl = Math.hypot(f[0], f[1], f[2]);
      f = [f[0] / fl, f[1] / fl, f[2] / fl];
      let r = [-f[2], 0, f[0]];
      const q = Math.hypot(r[0], r[2]);
      r = [r[0] / q, 0, r[2] / q];
      const u = [r[1] * f[2] - r[2] * f[1], r[2] * f[0] - r[0] * f[2], r[0] * f[1] - r[1] * f[0]];
      return { ro, f, r, u, e2 };
    }

    /* ---- the unit, drawn with the same camera as the building ---- */
    let C: ReturnType<typeof cam> | null = null;
    function pj(x: number, y: number, z: number): Pt {
      const c = C!;
      const dx = x - c.ro[0], dy = y - c.ro[1], dz = z - c.ro[2];
      const zc = Math.max(0.3, dx * c.f[0] + dy * c.f[1] + dz * c.f[2]);
      return [
        (((dx * c.r[0] + dz * c.r[2]) / zc / (TV * L.asp)) * 0.5 + 0.5) * VW,
        (0.5 - ((dx * c.u[0] + dy * c.u[1] + dz * c.u[2]) / zc / TV) * 0.5) * VH,
      ];
    }
    function quad(a: Pt, b: Pt, c: Pt, d: Pt, fill: string | CanvasGradient, stroke?: string) {
      ctx.beginPath();
      ctx.moveTo(a[0], a[1]);
      ctx.lineTo(b[0], b[1]);
      ctx.lineTo(c[0], c[1]);
      ctx.lineTo(d[0], d[1]);
      ctx.closePath();
      ctx.fillStyle = fill;
      ctx.fill();
      if (stroke) {
        ctx.strokeStyle = stroke;
        ctx.stroke();
      }
    }
    function grad(a: Pt, b: Pt, st: [number, string][]) {
      const g = ctx.createLinearGradient(a[0], a[1], b[0], b[1]);
      st.forEach((s) => g.addColorStop(s[0], s[1]));
      return g;
    }
    // box in bay coordinates (x across 0..1.5, y up 0..3.6, z out of the building), with a material
    function box(x: number, y: number, z: number, w: number, h: number, d: number, m: Material, ox: number, oy: number, oz: number) {
      const c = C!;
      const x0 = L.X0 + x + ox, y0 = L.Y0 + y + oy, z0 = z + oz, x1 = x0 + w, y1 = y0 + h, z1 = z0 + d;
      const ln = m.ln || "rgba(24,19,15,.8)";
      if (c.ro[1] > y1) quad(pj(x0, y1, z0), pj(x1, y1, z0), pj(x1, y1, z1), pj(x0, y1, z1), m.top, ln);
      else if (c.ro[1] < y0) quad(pj(x0, y0, z0), pj(x1, y0, z0), pj(x1, y0, z1), pj(x0, y0, z1), m.side, ln);
      if (c.ro[0] < x0) quad(pj(x0, y0, z0), pj(x0, y1, z0), pj(x0, y1, z1), pj(x0, y0, z1), m.side, ln);
      else if (c.ro[0] > x1) quad(pj(x1, y0, z0), pj(x1, y1, z0), pj(x1, y1, z1), pj(x1, y0, z1), m.side, ln);
      const a = pj(x0, y1, z1), b = pj(x1, y1, z1), cc = pj(x1, y0, z1), e = pj(x0, y0, z1);
      quad(a, b, cc, e, m.front ? m.front([(a[0] + b[0]) / 2, (a[1] + b[1]) / 2], [(e[0] + cc[0]) / 2, (e[1] + cc[1]) / 2]) : m.face!, ln);
    }
    const M: Record<string, Material> = {
      steel: { top: "#f0ebe4", side: "#7a6d5f", face: "#b3a897" },
      alu: {
        top: "#f3eee7",
        side: "#8a7c6b",
        front: (a, b) => grad(a, b, [[0, "#ddd5c8"], [0.5, "#b8ac99"], [1, "#968976"]]),
      },
      rubber: { top: "#33281f", side: "#0e0a07", face: "#1e1712", ln: "rgba(174,165,151,.45)" },
      glass: {
        top: "#e3cfa6",
        side: "#8a7448",
        front: (a, b) =>
          grad(a, b, [[0, "rgba(96,140,205,.9)"], [0.42, "rgba(150,186,226,.84)"], [0.76, "rgba(226,214,206,.8)"], [1, "rgba(252,226,192,.76)"]]),
      },
      spandrel: { top: "#c9b48a", side: "#6f5b38", face: "rgba(37,29,23,.96)" },
      sil: { top: "#fbf9f2", side: "#bdb8a9", face: "#f5f2ee" },
    };
    const PARTS: PartBox[][] = [
      [["steel", 0.5, 0.3, -0.74, 0.5, 0.06, 0.66], ["steel", 0.5, 0.3, -0.14, 0.5, 0.36, 0.06]],
      [
        ["alu", 0, 0, -0.12, 0.075, 3.6, 0.2],
        ["alu", 1.425, 0, -0.12, 0.075, 3.6, 0.2],
        ["alu", 0.075, 0, -0.12, 1.35, 0.075, 0.2],
        ["alu", 0.075, 0.72, -0.12, 1.35, 0.06, 0.2],
        ["alu", 0.075, 3.525, -0.12, 1.35, 0.075, 0.2],
      ],
      [
        ["rubber", 0.07, 0.78, 0.08, 0.035, 2.75, 0.03],
        ["rubber", 1.395, 0.78, 0.08, 0.035, 2.75, 0.03],
        ["rubber", 0.07, 0.78, 0.08, 1.36, 0.035, 0.03],
        ["rubber", 0.07, 3.495, 0.08, 1.36, 0.035, 0.03],
        ["rubber", 0.07, 0.07, 0.08, 0.035, 0.65, 0.03],
        ["rubber", 1.395, 0.07, 0.08, 0.035, 0.65, 0.03],
        ["rubber", 0.07, 0.07, 0.08, 1.36, 0.035, 0.03],
        ["rubber", 0.07, 0.685, 0.08, 1.36, 0.035, 0.03],
      ],
      [["spandrel", 0.085, 0.085, 0.11, 1.33, 0.62, 0.1], ["glass", 0.085, 0.795, 0.11, 1.33, 2.72, 0.1]],
      [
        ["sil", 0.02, 0, 0.21, 0.07, 3.6, 0.022],
        ["sil", 1.41, 0, 0.21, 0.07, 3.6, 0.022],
        ["sil", 0.09, 0, 0.21, 1.32, 0.07, 0.022],
        ["sil", 0.09, 3.53, 0.21, 1.32, 0.07, 0.022],
        ["sil", 0.09, 0.72, 0.21, 1.32, 0.055, 0.022],
      ],
    ];
    const EX = [0, 1.1, 2.0, 2.95, 3.9], starts = [0.2, 0.3, 0.4, 0.5, 0.6], len = 0.08;
    const DOT = [[0.75, 0.72, -0.1], [-0.02, 2.5, 0.08], [-0.02, 1.9, 0.11], [0.75, 2.1, 0.21], [1.52, 1.2, 0.23]];
    function drawParts(p: number) {
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, pc.width, pc.height);
      const al = ease((p - 0.13) / 0.06) * (1 - ease((p - 0.72) / 0.035));
      if (al <= 0.002) return;
      const s = pc.width / VW;
      ctx.setTransform(s, 0, 0, s, 0, 0);
      ctx.lineWidth = 0.8;
      ctx.lineJoin = "round";
      ctx.globalAlpha = al;
      let act = -1;
      for (let i = 0; i < 5; i++) if (p >= starts[i] - 0.02) act = i;
      for (let i = 0; i < 5; i++) {
        const a = ease((p - starts[i]) / len);
        let oz = EX[i] * (1 - a), oy = 0;
        if (i === 0) {
          oz = (1 - a) * 1.1;
          oy = (1 - a) * 2.0;
        }
        PARTS[i].forEach((b) => {
          box(b[1], b[2], b[3], b[4], b[5], b[6], M[b[0]], 0, oy, oz);
        });
        // light catching the glass
        if (i === 3) {
          const z = 0.21 + oz,
            g1 = pj(L.X0 + 0.3, L.Y0 + 3.4, z),
            g2 = pj(L.X0 + 0.62, L.Y0 + 3.4, z),
            g3 = pj(L.X0 + 0.3, L.Y0 + 0.95, z),
            g4 = pj(L.X0 + 0.14, L.Y0 + 0.95, z);
          quad(g1, g2, g3, g4, "rgba(255,255,255,.14)");
        }
      }
      for (let i = 0; i < 5; i++) {
        const a2 = ease((p - starts[i]) / len);
        let oz2 = EX[i] * (1 - a2), oy2 = 0;
        if (i === 0) {
          oz2 = (1 - a2) * 1.1;
          oy2 = (1 - a2) * 2.0;
        }
        const d = pj(L.X0 + DOT[i][0], L.Y0 + DOT[i][1] + oy2, DOT[i][2] + oz2), on = i === act, rr = on ? 15 : 11;
        ctx.globalAlpha = al * (on ? 1 : 0.75);
        ctx.beginPath();
        ctx.arc(d[0], d[1], rr, 0, 6.283);
        ctx.fillStyle = on ? "#c6803a" : "#251d17";
        ctx.fill();
        ctx.strokeStyle = "#c6803a";
        ctx.lineWidth = 1.4;
        ctx.stroke();
        ctx.lineWidth = 0.8;
        ctx.fillStyle = on ? "#1a1009" : "#c6803a";
        ctx.font = "700 " + (on ? 15 : 12) + 'px "Space Mono",ui-monospace,Menlo,monospace';
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(String(i + 1), d[0], d[1] + 1);
        // the part's name on a small cream label, joined to its dot by a bronze leader line
        const fsz = L.port ? 12 : 13;
        ctx.font = "400 " + fsz + 'px "Space Mono",ui-monospace,Menlo,monospace';
        ctx.textAlign = "left";
        ctx.textBaseline = "middle";
        const tw = ctx.measureText(NAMES[i]).width, bw = tw + 16, bh = fsz + 12, gap = L.port ? 22 : 34;
        let lx = d[0] + rr + gap;
        if (lx + bw > VW - 8) lx = d[0] - rr - gap - bw;
        const ly = d[1] + LDY[i] * (L.port ? 0.7 : 1), by0 = ly - bh / 2;
        const toRight = lx > d[0];
        ctx.globalAlpha = al;
        ctx.strokeStyle = "#9b5520";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(d[0] + (toRight ? rr : -rr) * 0.8, d[1] + (ly > d[1] ? rr * 0.6 : ly < d[1] ? -rr * 0.6 : 0));
        ctx.lineTo(toRight ? lx : lx + bw, ly);
        ctx.stroke();
        ctx.fillStyle = "#f9f7f4";
        ctx.fillRect(lx, by0, bw, bh);
        ctx.strokeStyle = on ? "#9b5520" : "rgba(43,29,18,.35)";
        ctx.lineWidth = on ? 1.5 : 1;
        ctx.strokeRect(lx + 0.5, by0 + 0.5, bw - 1, bh - 1);
        ctx.lineWidth = 0.8;
        ctx.fillStyle = "#2b1d12";
        ctx.fillText(NAMES[i], lx + 8, ly + 1);
      }
      ctx.globalAlpha = 1;
    }

    function size() {
      const small = innerWidth < 820, s = Math.min(devicePixelRatio || 1, small ? 1.25 : 1.5);
      const w = Math.round(cv.clientWidth * s), h = Math.round(cv.clientHeight * s);
      if (cv.width !== w || cv.height !== h) {
        cv.width = w;
        cv.height = h;
        gl!.viewport(0, 0, w, h);
      }
      const s2 = Math.min(devicePixelRatio || 1, 2), w2 = Math.round(pc.clientWidth * s2), h2 = Math.round(pc.clientHeight * s2);
      if (pc.width !== w2 || pc.height !== h2) {
        pc.width = w2;
        pc.height = h2;
      }
      layout();
    }

    const blocks = Array.from(stage.querySelectorAll<HTMLElement>(".blk"));
    const T = [0, 0.1, 0.19, 0.29, 0.39, 0.49, 0.59, 0.72, 0.82, 0.91];
    let cur = -1;
    function ui(p: number) {
      let idx = 0;
      for (let i = 0; i < T.length; i++) if (p >= T[i]) idx = i;
      if (idx !== cur) {
        cur = idx;
        blocks.forEach((b, i) => {
          b.classList.toggle("on", i === idx);
          b.classList.toggle("past", i < idx);
        });
      }
      rail?.style.setProperty("--prog", p.toFixed(4));
      note!.style.opacity = String(Math.max(0, 1 - p / 0.06));
      shl!.style.setProperty("--sl", ease((p - 0.07) / 0.08).toFixed(3));
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
        p += (pT - p) * 0.09;
        mx += (mxT - mx) * 0.05;
        my += (myT - my) * 0.05;
        intro = Math.min(1, t / 2.4);
      } else {
        p = 0;
      }
      if (Math.abs(pT - p) < 0.0004) p = pT;
      const c = (C = cam(p, reduce ? 12 : t, mx, my));
      gl!.uniform2f(U.uRes, cv.width, cv.height);
      gl!.uniform1f(U.uT, reduce ? 12 : t);
      gl!.uniform1f(U.uP, c.e2);
      gl!.uniform1f(U.uIn, intro);
      gl!.uniform1f(U.uSun, 0.42 + mx * 0.5);
      gl!.uniform1f(U.uN, L.n);
      gl!.uniform1f(U.uAsp, L.asp);
      gl!.uniform1f(U.uNi, 0);
      gl!.uniform3fv(U.uRo, c.ro);
      gl!.uniform3fv(U.uF, c.f);
      gl!.uniform3fv(U.uR, c.r);
      gl!.uniform3fv(U.uU, c.u);
      gl!.uniform4fv(U.uTR, L.rect);
      gl!.uniform2f(U.uBay, L.bay[0], L.bay[1]);
      gl!.uniform1f(U.uOpen, 1 - ease((p - 0.715) / 0.04));
      gl!.uniform1f(U.uLit, ease((p - 0.74) / 0.05));
      gl!.uniform1f(U.uSg, 1 - 0.96 * ease((p - 0.08) / 0.08) + 0.96 * ease((p - 0.88) / 0.08));
      gl!.activeTexture(gl!.TEXTURE0);
      gl!.bindTexture(gl!.TEXTURE_2D, tex);
      gl!.uniform1i(U.uTx, 0);
      gl!.drawArrays(gl!.TRIANGLES, 0, 3);
      drawParts(p);
      if (!reduce) {
        ui(p);
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
      if (reduce) {
        root.classList.add("still");
        blocks.forEach((b) => b.classList.add("on"));
      }
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
            document.fonts.load('500 100px "Lora"'),
            new Promise((r) => {
              fontTimer = window.setTimeout(r, 2200);
            }),
          ])
        : Promise.resolve();
    ready.then(start, start);

    // The font stylesheet loads without blocking, so the face can arrive after the first draw.
    // Redraw the lit headline once it is really there.
    const onFonts = () => {
      if (document.fonts.check('500 100px "Lora"')) {
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

  return (
    <section className="story" ref={storyRef} data-header-clear aria-label="How a facade unit goes onto a building">
      <noscript>
        <style>{".fg-home .h1v{display:block}"}</style>
      </noscript>
      <div className="pin">
        <div className="view" ref={viewRef}>
          <div className="shade" />
          <div className="shade-l" ref={shadeLRef} />
          <p className="h1v" aria-hidden="true">
            We build the face of your building
          </p>
        </div>
        <div className="tell">
          <div className="blk hero on">
            <span className="lbl">01 / 10</span>
            <h1 className="sr">We build the face of your building.</h1>
            <p>
              Fine Glaze designs, fabricates, installs and maintains facade systems for developers and asset owners,
              from Pune and Mumbai across India.
            </p>
            <button className="btn" type="button" onClick={() => open({ source: "home_hero" })}>
              Book a call
            </button>
          </div>
          <div className="blk say">
            <span className="lbl">02 / 10</span>
            <h2>
              Facade specialists, <span className="text-gradient">start to finish.</span>
            </h2>
            <p>
              Design, fabrication, installation and maintenance from one accountable team of {company.stats.coreTeam},
              led by Deepak Gupta, B.E. Civil, with 11+ years in facades.
            </p>
          </div>
          <div className="blk fact">
            <span className="lbl">03 / 10</span>
            <h2>
              Every fixing checked against the <span className="text-gradient">wind load.</span>
            </h2>
            <p>Member sizing, fixing and anchorage are verified in-house before anything goes on the slab.</p>
          </div>
          <div className="blk fact">
            <span className="lbl">04 / 10</span>
            <h2>
              Made at our <span className="text-gradient">Pisoli unit.</span>
            </h2>
            <p>Aluminium and mild steel are cut, fabricated and assembled in Pune, batched for each project.</p>
          </div>
          <div className="blk fact">
            <span className="lbl">05 / 10</span>
            <h2>
              Water-tested <span className="text-gradient">on site.</span>
            </h2>
            <p>Installed glazing gets a site water penetration test, and the snag register is closed before handover.</p>
          </div>
          <div className="blk fact">
            <span className="lbl">06 / 10</span>
            <h2>
              Glass checked <span className="text-gradient">on receipt.</span>
            </h2>
            <p>Section, glass and panel are checked against the approved specification when material arrives.</p>
          </div>
          <div className="blk fact">
            <span className="lbl">07 / 10</span>
            <h2>
              Sealed to the <span className="text-gradient">specification.</span>
            </h2>
            <p>DOWSIL structural and weather silicone, or approved equivalents.</p>
          </div>
          <div className="blk say">
            <span className="lbl">08 / 10</span>
            <h2>
              Drawn in-house, <span className="text-gradient">before anything is cut.</span>
            </h2>
            <p>Shop drawings and engineering come from our own design team.</p>
          </div>
          <div className="blk say">
            <span className="lbl">09 / 10</span>
            <h2>
              Best Vendor Performance <span className="text-gradient">2024.</span>
            </h2>
            <figure className="aw">
              <img
                src="/Awards.webp"
                width={692}
                height={360}
                alt="Certificate of appreciation and trophy from Embassy REIT"
                decoding="async"
                {...{ fetchpriority: "low" }}
              />
              <figcaption>
                Awarded by Embassy REIT &ldquo;for successfully completing the Embassy 247, Vikhroli project.&rdquo;
              </figcaption>
            </figure>
          </div>
          <div className="blk say">
            <span className="lbl">10 / 10</span>
            <h2>
              Trusted by Embassy REIT, L&amp;T and <span className="text-gradient">Jindal Stainless.</span>
            </h2>
            <p>Also Nirmaann Encon Developer, Hatchway Windoor and Rockfort Estate Developers.</p>
            <button className="btn" type="button" onClick={() => open({ source: "home_story_end" })}>
              Book a call
            </button>
          </div>
        </div>
        <div className="rail" aria-hidden="true" ref={railRef}>
          <i className="rail-f" />
          {Array.from({ length: 10 }, (_, i) => (
            <b key={i} style={{ ["--t" as string]: i / 9 }} />
          ))}
        </div>
        <p className="note" ref={noteRef}>
          <b>Illustration, drawn live in your browser.</b>
          <span className="scrollhint">Scroll to see a unit go in.</span>
          <i className="cue" aria-hidden="true" />
        </p>
      </div>
    </section>
  );
};

export default StoryHero;
