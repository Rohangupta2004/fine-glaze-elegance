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

  return (
    <section className="cli full rv" aria-label="Clients">
      <div className="wrap">
        <h2 className="wipe">Who we have built for.</h2>
        <ul className="cg">
          {company.clients.map((c) => {
            const logo = logoFor(c.name);
            return (
              <li key={c.name}>
                {logo && <img src={getPublicUrl(logo.filename)} alt="" loading="lazy" decoding="async" />}
                <b>{c.name}</b>
                <span>{c.work.split(" · ").join(". ")}.</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default HomeClients;
