import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { Mail, LogIn } from "lucide-react";

type Project = {
  project_name: string;
  status: string;
  progress: number;
};

export default function Portal(): JSX.Element {
  const [session, setSession] = useState<any>(null);
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");

  // Get session
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
    });
  }, []);

  // Google login
  const signInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "https://www.fineglaze.com/portal",
      },
    });
  };

  // Email login (magic link)
  const signInWithEmail = async () => {
    if (!email) return alert("Enter email");
    await supabase.auth.signInWithOtp({ email });
    alert("Login link sent to email");
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

  /* ---------------- LOGIN UI ---------------- */

  if (!session) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #f5f7fa, #e4e7eb)",
        }}
      >
        <div
          style={{
            width: 380,
            padding: 32,
            background: "#fff",
            borderRadius: 14,
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
          }}
        >
          <h2 style={{ marginBottom: 6 }}>FineGlaze Client Portal</h2>
          <p style={{ color: "#666", marginBottom: 24 }}>
            Secure access to your project
          </p>

          {/* Google */}
          <button
            onClick={signInWithGoogle}
            style={{
              width: "100%",
              padding: 12,
              borderRadius: 8,
              border: "1px solid #ddd",
              background: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              cursor: "pointer",
              marginBottom: 16,
            }}
          >
            <LogIn size={18} />
            Continue with Google
          </button>

          {/* Divider */}
          <div
            style={{
              textAlign: "center",
              color: "#999",
              fontSize: 12,
              margin: "12px 0",
            }}
          >
            OR
          </div>

          {/* Email */}
          <div style={{ display: "flex", gap: 8 }}>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                flex: 1,
                padding: 10,
                borderRadius: 8,
                border: "1px solid #ddd",
              }}
            />
            <button
              onClick={signInWithEmail}
              style={{
                padding: "10px 14px",
                borderRadius: 8,
                border: "none",
                background: "#111",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              <Mail size={16} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* ---------------- DASHBOARD ---------------- */

  if (loading) {
    return <p style={{ padding: 40 }}>Loading your project…</p>;
  }

  if (!project) {
    return (
      <div style={{ padding: 40 }}>
        <h3>No project assigned</h3>
        <p>Please contact FineGlaze.</p>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f7fa",
        padding: 32,
      }}
    >
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <h2 style={{ marginBottom: 20 }}>{project.project_name}</h2>

        {/* Project Card */}
        <div
          style={{
            background: "#fff",
            padding: 24,
            borderRadius: 14,
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            marginBottom: 24,
          }}
        >
          <p>
            <b>Status:</b> {project.status}
          </p>

          <p style={{ marginTop: 12 }}>
            <b>Progress:</b> {project.progress}%
          </p>

          <div
            style={{
              marginTop: 10,
              height: 10,
              background: "#eee",
              borderRadius: 6,
            }}
          >
            <div
              style={{
                width: `${project.progress}%`,
                height: "100%",
                background: "#111",
                borderRadius: 6,
              }}
            />
          </div>
        </div>

        {/* Files placeholder */}
        <div
          style={{
            background: "#fff",
            padding: 24,
            borderRadius: 14,
          }}
        >
          <h3>Project Files</h3>
          <p style={{ color: "#666" }}>
            Drawings, documents, and updates will appear here.
          </p>
        </div>
      </div>
    </div>
  );
}
