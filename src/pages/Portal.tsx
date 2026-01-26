// src/pages/Portal.tsx
// FULL, CLEAN, WORKING PORTAL WITH EMAIL + PASSWORD + GOOGLE
// ❌ NO OTP ANYWHERE
// ❌ NO MAGIC LINK
// ✅ EMAIL + PASSWORD
// ✅ ONE-TIME EMAIL CONFIRMATION (SUPABASE HANDLES)
// ✅ GOOGLE LOGIN

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { Session } from "@supabase/supabase-js";
import {
  FileText,
  Download,
  Calendar,
  CheckCircle2,
  XCircle,
  MapPin,
  User,
  Building,
  IndianRupee,
  LogIn,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";

/* ================= TYPES ================= */

type ProjectFile = {
  id: string;
  name: string;
  url: string;
  status: "Pending" | "Approved" | "Rejected";
  requires_approval: boolean;
  created_at: string;
};

type Project = {
  id: string;
  project_name: string;
  status: string;
  progress: number;
  client_email: string;
  client_phone: string;
  site_address: string;
  architect_name: string;
  total_amount: number;
  paid_amount: number;
  timeline: { date: string; title: string; desc: string }[];
};

/* ================= COMPONENT ================= */

export default function Portal() {
  const navigate = useNavigate();

  const [session, setSession] = useState<Session | null>(null);
  const [checked, setChecked] = useState(false);

  const [project, setProject] = useState<Project | null>(null);
  const [files, setFiles] = useState<ProjectFile[]>([]);
  const [loading, setLoading] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"login" | "activate">("login");
  const [authLoading, setAuthLoading] = useState(false);

  /* ================= SESSION ================= */

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setChecked(true);
    });

    const { data } = supabase.auth.onAuthStateChange((_e, s) => {
      setSession(s);
      if (s) navigate("/portal", { replace: true });
    });

    return () => data.subscription.unsubscribe();
  }, [navigate]);

  useEffect(() => {
    if (session?.user?.email) fetchData();
  }, [session]);

  /* ================= DATA ================= */

  const fetchData = async () => {
    setLoading(true);

    const { data: proj } = await supabase
      .from("Clientproject")
      .select("*")
      .eq("client_email", session?.user.email)
      .maybeSingle();

    if (proj) {
      setProject(proj);
      const { data: fileData } = await supabase
        .from("ProjectFiles")
        .select("*")
        .eq("project_id", proj.id)
        .order("created_at", { ascending: false });
      setFiles(fileData || []);
    }

    setLoading(false);
  };

  /* ================= AUTH ================= */

  const loginWithPassword = async () => {
    if (!email || !password) return toast.error("Enter email & password");

    setAuthLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setAuthLoading(false);

    if (error) toast.error(error.message);
  };

  const activateAccount = async () => {
    if (!email || !password) return toast.error("Enter email & password");

    const { data } = await supabase
      .from("Clientproject")
      .select("id")
      .eq("client_email", email)
      .single();

    if (!data) return toast.error("No project linked to this email");

    setAuthLoading(true);
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/portal`,
      },
    });
    setAuthLoading(false);

    if (error) toast.error(error.message);
    else toast.success("Check email to confirm account");
  };

  const signInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${window.location.origin}/portal` },
    });
  };

  const resetPassword = async () => {
    if (!email) return toast.error("Enter email first");
    await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/portal`,
    });
    toast.success("Password reset email sent");
  };

  /* ================= LOGIN ================= */

  if (!session && checked) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle>Client Portal</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button
              variant="outline"
              className="w-full"
              onClick={signInWithGoogle}
            >
              Continue with Google
            </Button>

            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {mode === "login" ? (
              <Button
                className="w-full"
                onClick={loginWithPassword}
                disabled={authLoading}
              >
                <LogIn className="mr-2 h-4 w-4" />
                Sign In
              </Button>
            ) : (
              <Button
                className="w-full"
                onClick={activateAccount}
                disabled={authLoading}
              >
                Activate Account
              </Button>
            )}

            {mode === "login" && (
              <button
                onClick={resetPassword}
                className="text-xs underline w-full"
              >
                Forgot password?
              </button>
            )}

            <button
              className="text-xs underline w-full"
              onClick={() =>
                setMode(mode === "login" ? "activate" : "login")
              }
            >
              {mode === "login" ? "Activate access" : "Back to login"}
            </button>
          </CardContent>
        </Card>
      </div>
    );
  }

  /* ================= PORTAL ================= */

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-10">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Project Dashboard</h1>
          <Button variant="outline" onClick={() => supabase.auth.signOut()}>
            Sign Out
          </Button>
        </div>

        {loading ? (
          <Skeleton className="h-48 w-full" />
        ) : !project ? (
          <Card className="p-10 text-center border-dashed border-2">
            No active project
          </Card>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>{project.project_name}</CardTitle>
                <Badge>{project.status}</Badge>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin size={14} /> {project.site_address}
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Building size={14} /> {project.architect_name}
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <User size={14} /> {project.client_phone}
                </div>
                <Progress value={project.progress} />
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Documents</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {files.map((f) => (
                  <div
                    key={f.id}
                    className="flex justify-between items-center border p-3 rounded"
                  >
                    <a href={f.url} target="_blank">
                      {f.name}
                    </a>
                    {f.status === "Approved" && (
                      <CheckCircle2 className="text-green-600" size={16} />
                    )}
                    {f.status === "Rejected" && (
                      <XCircle className="text-red-600" size={16} />
                    )}
                    {!f.requires_approval && (
                      <a href={f.url} target="_blank">
                        <Download size={16} />
                      </a>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="md:col-span-3">
              <CardHeader>
                <CardTitle>
                  <Calendar className="inline mr-2" size={18} />
                  Timeline
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {project.timeline?.map((t, i) => (
                  <div key={i}>
                    <p className="text-xs text-muted-foreground">
                      {new Date(t.date).toDateString()}
                    </p>
                    <p className="font-medium">{t.title}</p>
                    <p className="text-sm text-muted-foreground">{t.desc}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
                }
