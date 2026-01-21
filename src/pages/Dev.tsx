import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

type Project = {
  id: string;
  project_name: string;
  status: string;
  progress: number;
};

const ADMIN_EMAIL = "grohan24102004@gmail.com";

export default function Admin(): JSX.Element {
  const [session, setSession] = useState<any>(null);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
    });
  }, []);

  // Load all projects (admin only)
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

  // Update project
  const updateProject = async (
    id: string,
    status: string,
    progress: number
  ) => {
    await supabase
      .from("Clientproject")
      .update({ status, progress })
      .eq("id", id);

    alert("Project updated");
  };

  if (!session) {
    return <p style={{ padding: 40 }}>Please login first.</p>;
  }

  if (session.user.email !== ADMIN_EMAIL) {
    return (
      <p style={{ padding: 40, color: "red" }}>
        Access denied
      </p>
    );
  }

  return (
