import { useEffect, useRef } from "react";
import { useBookCall } from "@/components/booking/BookCallProvider";
import { company } from "@/data/company";
import { VS, FS } from "./shaders";

const HEADLINE = "Facade systems for Pune and Mumbai";

/**
 * Pinned hero: a live WebGL2 curtain wall at dusk with the headline lit behind the glass.
 * Ported from the approved reference. State classes (gl, nogl, still) go on the .fg-home wrapper.
 */
const FacadeScene = () => {
  const { open } = useBookCall();
  const stageRef = useRef<HTMLElement>(null);
  const viewRef = useRef<HTMLDivElement>(null);
  const leadRef = useRef<HTMLDivElement>(null);
  const noteRef = useRef<HTMLParagraphElement>(null);
  const cap1Ref = useRef<HTMLParagraphElement>(null);
  const cap2Ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const view = viewRef.current;
    const lead = leadRef.current;
    const note = noteRef.current;
    const c1 = cap1Ref.current;
    const c2 = cap2Ref.current;
    if (!stage || !view || !lead || !note || !c1 || !c2) return;
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
      const lines = port ? ["FACADE", "SYSTEMS FOR", "PUNE AND", "MUMBAI"] : ["FACADE SYSTEMS", "FOR PUNE", "AND MUMBAI"];
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
        t1: [port ? -4 : -7, 132, 0],
        r1: [port ? 12 : 17, 50, port ? 30 : 26],
      };
    }

    function cam(e: number, t: number, mx: number, my: number) {
      const yaw = 0.2 + Math.sin(t * 0.07) * 0.012 + mx * 0.06, el = -0.1 + my * 0.03, ce = Math.cos(el);
      const a0 = [L.t0[0], L.t0[1] + Math.sin(t * 0.11) * 0.5, L.t0[2]];
      const r0 = [
        a0[0] + L.d0 * Math.sin(yaw) * ce,
        a0[1] + L.d0 * Math.sin(el),
        a0[2] + L.d0 * Math.cos(yaw) * ce,
      ];
      const r1 = [L.r1[0] + mx * 1.2, L.r1[1] + Math.sin(t * 0.09) * 0.8, L.r1[2] - my * 1.2], a1 = L.t1;
      const ro: number[] = [], ta: number[] = [];
      for (let i = 0; i < 3; i++) {
        ro[i] = r0[i] + (r1[i] - r0[i]) * e;
        ta[i] = a0[i] + (a1[i] - a0[i]) * e;
      }
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

    const trap = (x: number, a: number, b: number, c: number, d: number) =>
      x < a || x > d ? 0 : x < b ? (x - a) / (b - a) : x > c ? (d - x) / (d - c) : 1;

    function ui() {
      const a = 1 - Math.min(1, p / 0.14);
      lead!.style.opacity = String(a);
      lead!.style.pointerEvents = a < 0.3 ? "none" : "";
      lead!.style.transform = "translateY(" + -(1 - a) * 18 + "px)";
      note!.style.opacity = String(Math.max(0, 1 - p / 0.2));
      const o1 = trap(p, 0.26, 0.36, 0.52, 0.6), o2 = trap(p, 0.66, 0.76, 0.93, 1.01);
      c1!.style.opacity = String(o1);
      c1!.style.transform = "translateY(" + (1 - o1) * 14 + "px)";
      c2!.style.opacity = String(o2);
      c2!.style.transform = "translateY(" + (1 - o2) * 14 + "px)";
    }

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
      const e = p * p * (3 - 2 * p), c = cam(e, t, mx, my);
      gl!.uniform2f(U.uRes, cv.width, cv.height);
      gl!.uniform1f(U.uT, reduce ? 12 : t);
      gl!.uniform1f(U.uP, p);
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
        ui();
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

  return (
    <section className="stage" ref={stageRef} aria-label="Introduction">
      <noscript>
        <style>{".fg-home .h1v{display:block}"}</style>
      </noscript>
      <div className="pin">
        <div className="view" ref={viewRef}>
          <div className="shade" />
          <h1 className="sr">{HEADLINE}</h1>
          <p className="h1v" aria-hidden="true">
            {HEADLINE}
          </p>
          <div className="lead" ref={leadRef}>
            <p>We design, fabricate, install and maintain them.</p>
            <button className="btn" type="button" onClick={() => open({ source: "home_hero" })}>
              Book a call
            </button>
          </div>
          <p className="note" ref={noteRef}>
            <b>Illustration, drawn live in your browser.</b>
            <span className="scrollhint">Scroll to look up the tower.</span>
          </p>
        </div>
        <div className="caps">
          <p className="cap" ref={cap1Ref}>
            {company.stats.sqmDelivered} {company.stats.sqmDeliveredLabel}.
          </p>
          <p className="cap" ref={cap2Ref}>
            A core team of {company.stats.coreTeam} in engineering, supervision and site work.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FacadeScene;
