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

  // Get session
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

  // Fetch project
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

  /* ---------------- UI ---------------- */

  // Login screen
  if (!session) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f5f7fa",
        }}
      >
        <div
          style={{
            width: 360,
            padding: 32,
            background: "#fff",
            borderRadius: 12,
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            textAlign: "center",
          }}
        >
          <h2 style={{ marginBottom: 8 }}>FineGlaze Portal</h2>
          <p style={{ color: "#666", marginBottom: 24 }}>
            Login to view your project details
          </p>

          <button
            onClick={signIn}
            style={{
              width: "100%",
              padding: 12,
              borderRadius: 8,
              border: "1px solid #ddd",
              background: "#fff",
              cursor: "pointer",
              fontSize: 14,
            }}
          >
            Continue with Google
          </button>
        </div>
      </div>
    );
  }

  // Loading
  if (loading) {
    return (
      <div style={{ padding: 40 }}>
        <p>Loading your project…</p>
      </div>
    );
  }

  // No project
  if (!project) {
    return (
      <div
        style={{
          padding: 40,
          minHeight: "100vh",
          background: "#f5f7fa",
        }}
      >
        <div
          style={{
            maxWidth: 500,
            margin: "0 auto",
            background: "#fff",
            padding: 24,
            borderRadius: 12,
          }}
        >
          <h3>No project assigned yet</h3>
          <p style={{ color: "#666" }}>
            Please contact FineGlaze for project details.
          </p>
        </div>
      </div>
    );
  }

  // Project view
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f7fa",
        padding: 32,
      }}
    >
      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        <h2 style={{ marginBottom: 16 }}>{project.project_name}</h2>

        {/* Project Card */}
        <div
          style={{
            background: "#fff",
            borderRadius: 12,
            padding: 24,
            boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
            marginBottom: 20,
          }}
        >
          <p>
            <b>Status:</b> {project.status}
          </p>

          <p style={{ marginTop: 12 }}>
            <b>Progress:</b> {project.progress}%
          </p>

          {/* Progress Bar */}
          <div
            style={{
              marginTop: 8,
              height: 10,
              background: "#eee",
              borderRadius: 6,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${project.progress}%`,
                height: "100%",
                background: "#111",
              }}
            />
          </div>
        </div>

        {/* Files placeholder */}
        <div
          style={{
            background: "#fff",
            borderRadius: 12,
            padding: 24,
          }}
        >
          <h3>Project Files</h3>
          <p style={{ color: "#666" }}>
            Files will appear here once uploaded.
          </p>
        </div>
      </div>
    </div>
  );
        }
