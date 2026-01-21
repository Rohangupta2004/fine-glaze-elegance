import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Project = {
  project_name: string;
  status: string;
  progress: number;
};

export default function Portal() {
  const [session, setSession] = useState<any>(null);
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoading(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const signInWithGoogle = async () => {
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
      .then(({ data }) => {
        setProject(data);
      });
  }, [session]);

  if (loading) return <p>Loading…</p>;

  if (!session) {
    return (
      <div style={{ padding: 24 }}>
        <h2>FineGlaze Client Portal</h2>
        <button onClick={signInWithGoogle}>
          Continue with Google
        </button>
      </div>
    );
  }

  if (!project) return <p>Loading project…</p>;

  return (
    <div style={{ padding: 24 }}>
      <h2>{project.project_name}</h2>
      <p>Status: {project.status}</p>
      <p>Progress: {project.progress}%</p>
    </div>
  );
}
