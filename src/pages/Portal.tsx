import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

type Project = {
  project_name: string;
  status: string;
  progress: number;
};

export default function Portal(): JSX.Element {
  const [session, setSession] = useState<any>(null);
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  // Get login session
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
    });
  }, []);

  // Google login
  const signIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "https://www.fineglaze.com/portal",
      },
    });
  };

  // Fetch project after login
  useEffect(() => {
    if (!session) return;

    supabase
      .from("Clientproject")
      .select("project_name, status, progress")
      .maybeSingle()
      .then(({ data }) => {
        setProject(data);
        setLoading(false);
      });
  }, [session]);

  // UI states
  if (!session) {
    return (
      <div style={{ padding: 40 }}>
        <h2>FineGlaze Client Portal</h2>
        <button onClick={signIn}>Continue with Google</button>
      </div>
    );
  }

  if (loading) {
    return <p style={{ padding: 40 }}>Loading project…</p>;
  }

  if (!project) {
    return (
      <div style={{ padding: 40 }}>
        <h3>No project assigned yet</h3>
        <p>Please contact FineGlaze.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: 40 }}>
      <h2>{project.project_name}</h2>
      <p>Status: {project.status}</p>
      <p>Progress: {project.progress}%</p>
    </div>
  );
        }
