import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

type Project = {
  project_name: string;
  status: string;
  progress: number;
};

export default function Portal() {
  const [session, setSession] = useState<any>(null);
  const [project, setProject] = useState<Project | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth
      .getSession()
      .then(({ data, error }) => {
        if (error) {
          console.error("Session error:", error);
          setError("Session error");
          return;
        }
        setSession(data.session);
      })
      .catch((err) => {
        console.error("Auth crash:", err);
        setError("Auth crash");
      });
  }, []);

  const signIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: window.location.origin + "/portal",
      },
    });
  };

  useEffect(() => {
    if (!session) return;

    supabase
      .from("Clientproject")
      .select("project_name,status,progress")
      .limit(1)
      .maybeSingle()
      .then(({ data, error }) => {
        if (error) {
          console.error("Project fetch error:", error);
          setError("Project fetch error");
          return;
        }
        setProject(data);
      })
      .catch((err) => {
        console.error("Fetch crash:", err);
        setError("Fetch crash");
      });
  }, [session]);

  return (
    <div style={{ padding: 40 }}>
      <h2>FineGlaze Client Portal</h2>

      {error && (
        <p style={{ color: "red" }}>
          Error: {error} (check console)
        </p>
      )}

      {!session && (
        <button onClick={signIn}>Continue with Google</button>
      )}

      {session && !project && !error && <p>Loading project…</p>}

      {project && (
        <>
          <h3>{project.project_name}</h3>
          <p>Status: {project.status}</p>
          <p>Progress: {project.progress}%</p>
        </>
      )}
    </div>
  );
      }
