// src/pages/Portal.tsx
// FULL PORTAL – FINAL, WORKING
// ✅ Email + Password SIGN UP
// ✅ Email CONFIRMATION + RESEND
// ✅ Email + Password SIGN IN
// ✅ Google SIGN IN
// ✅ DASHBOARD RENDERS AFTER LOGIN (FIXED)
// ❌ NO OTP
// ❌ NO ADMIN

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Session } from "@supabase/supabase-js";
import { toast } from "sonner";
import {
  Mail,
  Lock,
  LogIn,
  UserPlus,
  MapPin,
  Building,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";

/* ================= TYPES ================= */
type Project = {
  id: string;
  project_name: string;
  status: string;
  progress: number;
  site_address: string;
  architect_name: string;
  client_phone: string;
};

/* ================= COMPONENT ================= */
export default function Portal() {
  const [session, setSession] = useState<Session | null>(null);
  const [checked, setChecked] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [loading, setLoading] = useState(false);
  const [awaitingConfirm, setAwaitingConfirm] = useState(false);

  const [project, setProject] = useState<Project | null>(null);
  const [dashboardLoading, setDashboardLoading] = useState(true);

  /* ---------- SESSION ---------- */
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setChecked(true);
    });

    const { data } = supabase.auth.onAuthStateChange((_e, s) => {
      setSession(s);
    });

    return () => data.subscription.unsubscribe();
  }, []);

  /* ---------- FETCH PROJECT AFTER LOGIN ---------- */
  useEffect(() => {
    if (session?.user?.email) fetchProject();
  }, [session]);

  const fetchProject = async () => {
    setDashboardLoading(true);

    const { data } = await supabase
      .from("Clientproject")
      .select("*")
      .eq("client_email", session!.user.email)
      .maybeSingle();

    setProject(data || null);
    setDashboardLoading(false);
  };

  /* ---------- AUTH ---------- */
  const signInWithPassword = async () => {
    if (!email || !password) return toast.error("Enter email & password");
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      if (error.message.toLowerCase().includes("confirm")) {
        setAwaitingConfirm(true);
        toast.error("Please confirm your email");
      } else {
        toast.error(error.message);
      }
    }
  };

  const signUpWithPassword = async () => {
    if (!email || !password) return toast.error("Enter email & password");
    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/portal`,
      },
    });

    setLoading(false);

    if (error) {
      toast.error(error.message);
    } else {
      setAwaitingConfirm(true);
      toast.success("Confirmation email sent");
    }
  };

  const resendConfirmation = async () => {
    if (!email) return toast.error("Enter email");

    const { error } = await supabase.auth.resend({
      type: "signup",
      email,
    });

    if (error) toast.error(error.message);
    else toast.success("Confirmation email resent");
  };

  const signInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${window.location.origin}/portal` },
    });
  };

  /* ================= AUTH UI ================= */
  if (!session && checked) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
        <Card className="w-full max-w-md shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Client Portal</CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            <Button
              variant="outline"
              className="w-full gap-2"
              onClick={signInWithGoogle}
            >
              <img
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                className="h-4 w-4"
              />
              Continue with Google
            </Button>

            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                className="pl-9"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                className="pl-9"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {mode === "login" ? (
              <Button
                className="w-full gap-2"
                onClick={signInWithPassword}
                disabled={loading}
              >
                <LogIn size={16} /> Sign In
              </Button>
            ) : (
              <Button
                className="w-full gap-2"
                onClick={signUpWithPassword}
                disabled={loading}
              >
                <UserPlus size={16} /> Sign Up
              </Button>
            )}

            {awaitingConfirm && (
              <Button
                variant="secondary"
                className="w-full"
                onClick={resendConfirmation}
              >
                Resend confirmation email
              </Button>
            )}

            <Button
              variant="ghost"
              className="w-full text-sm"
              onClick={() =>
                setMode(mode === "login" ? "signup" : "login")
              }
            >
              {mode === "login"
                ? "Create new account"
                : "Already have an account? Sign in"}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  /* ================= DASHBOARD ================= */
  if (session && checked) {
    if (dashboardLoading) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <Skeleton className="h-40 w-96" />
        </div>
      );
    }

    if (!project) {
      return (
        <div className="min-h-screen flex items-center justify-center text-center space-y-4">
          <p>No project assigned</p>
          <Button onClick={() => supabase.auth.signOut()}>
            Sign Out
          </Button>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-slate-50 p-6">
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">
              {project.project_name}
            </h1>
            <Button
              variant="outline"
              onClick={() => supabase.auth.signOut()}
            >
              Sign Out
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>{project.status}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Progress value={project.progress} />

              <div className="flex items-center gap-2 text-sm">
                <MapPin size={14} /> {project.site_address}
              </div>

              <div className="flex items-center gap-2 text-sm">
                <Building size={14} /> {project.architect_name}
              </div>

              <div className="flex items-center gap-2 text-sm">
                <User size={14} /> {project.client_phone}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return null;
        }
