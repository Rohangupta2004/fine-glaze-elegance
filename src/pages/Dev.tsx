import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

type Project = {
  id: string;
  project_name: string;
  status: string;
  progress: number;
};

const ADMIN_EMAIL = "grohan24102004@gmail.com";
export default function Dev(): JSX.Element {
  const [session, setSession] = useState<any>(null);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
    });
  }, []);

  useEffect(() => {
    if (!session) return;
    if (session.user.email !== ADMIN_EMAIL) return;

    supabase
      .from("Clientproject")
      .select("id, project_name, status, progress")
      .then(({ data }) => {
        if (data) setProjects(data);
      });
  }, [session]);

  const updateProject = async (
    id: string,
    status: string,
    progress: number
  ) => {
    await supabase
      .from("Clientproject")
      .update({ status, progress })
      .eq("id", id);

    alert("Updated");
  };

  if (!session) {
    return <p style={{ padding: 40 }}>Login required</p>;
  }

  if (session.user.email !== ADMIN_EMAIL) {
    return <p style={{ padding: 40, color: "red" }}>Access denied</p>;
  }

  return (
    <div style={{ padding: 40 }}>
      <h2>FineGlaze Dev Panel</h2>

      {projects.map((p) => (
        <div
          key={p.id}
          style={{ border: "1px solid #ccc", padding: 16, marginBottom: 16 }}
        >
          <h4>{p.project_name}</h4>

          <input
            defaultValue={p.status}
            onBlur={(e) =>
              updateProject(p.id, e.target.value, p.progress)
            }
          />

          <br />

          <input
            type="number"
            defaultValue={p.progress}
            min={0}
            max={100}
            onBlur={(e) =>
              updateProject(
                p.id,
                p.status,
                Number(e.target.value)
              )
            }
          />
        </div>
      ))}
    </div>
  );
}
