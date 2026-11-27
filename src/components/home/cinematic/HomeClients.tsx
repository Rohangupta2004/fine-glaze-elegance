import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { company } from "@/data/company";

interface LogoEntry {
  name: string;
  filename: string;
}

const BUCKET = "project-images";
const LOGOS_FOLDER = "client-logos";
const MANIFEST_PATH = `${LOGOS_FOLDER}/manifest.json`;

function getPublicUrl(filename: string): string {
  const { data } = supabase.storage.from(BUCKET).getPublicUrl(`${LOGOS_FOLDER}/${filename}`);
  return data.publicUrl;
}

const firstWord = (s: string) => s.trim().split(/[\s&]+/)[0].toLowerCase();

const HomeClients = () => {
  const [logos, setLogos] = useState<LogoEntry[]>([]);
  const [bad, setBad] = useState<Set<string>>(new Set());

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const { data, error } = await supabase.storage.from(BUCKET).download(MANIFEST_PATH);
        if (!error && data) {
          const parsed = JSON.parse(await data.text());
          if (alive && Array.isArray(parsed)) setLogos(parsed);
        }
      } catch {
        // Silently show names only
      }
    })();
    return () => {
      alive = false;
    };
  }, []);

  const logoFor = (name: string) => {
    const w = firstWord(name);
    return logos.find((l) => l && typeof l.name === "string" && l.filename && firstWord(l.name) === w);
  };

  // A logo that fails to load falls back to the client's name, so there is never a broken image.
  const cells = (hidden: boolean, tag: string, rep = false) =>
    company.clients.map((c) => {
      const logo = logoFor(c.name);
      const ok = logo && !bad.has(logo.filename);
      return (
        <li key={`${tag}-${c.name}`} className={rep ? "mq-rep" : undefined}>
          {ok ? (
            <img
              src={getPublicUrl(logo.filename)}
              alt={hidden ? "" : c.name}
              height={40}
              decoding="async"
              onError={() => setBad((s) => new Set(s).add(logo.filename))}
            />
          ) : (
            <b>{c.name}</b>
          )}
        </li>
      );
    });

  // Each half of the loop holds two copies of the list, so one half is always wider than a screen
  // and the -50% shift lands exactly on the start of the second half: no gap and no jump at the seam.
  return (
    <section className="cli rv" aria-label="Clients">
      <div className="wrap">
        <h2 className="wipe">Who we have <span className="text-gradient">built for.</span></h2>
      </div>
      <div className="mq">
        <div className="mq-t">
          <ul>
            {cells(false, "a")}
            {cells(true, "b", true)}
          </ul>
          <ul aria-hidden="true">
            {cells(true, "c", true)}
            {cells(true, "d", true)}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HomeClients;
