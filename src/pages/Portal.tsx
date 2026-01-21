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

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
    });
  }, []);

  const signIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };

  useEffect(() => {
    if (!session) return;

    supabase
      .from("Clientproject")
      .select("project_name, status, progress")
      .single()
      .then(({ data, error }) => {
        if (!error) setProject(data);
      });
  }, [session]);

  if (!session) {
    return (
      <div style={{ padding: 40 }}>
        <h2>FineGlaze Client Portal</h2>
        <button onClick={signIn}>Continue with Google</button>
      </div>
    );
  }

  if (!project) {
    return <p style={{ padding: 40 }}>Loading project…</p>;
  }

  return (
    <div style={{ padding: 40 }}>
      <h2>{project.project_name}</h2>
      <p>Status: {project.status}</p>
      <p>Progress: {project.progress}%</p>
    </div>
  );
}
