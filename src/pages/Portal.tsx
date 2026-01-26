// 🔴 IMPORTANT: make sure this file is rendered at /portal route

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Session } from "@supabase/supabase-js";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

/* ================= TYPES ================= */
type Project = {
  id: string;
  project_name: string;
};

/* ================= COMPONENT ================= */
export default function Portal() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"login" | "activate">("login");
  const [authLoading, setAuthLoading] = useState(false);

  /* ================= SESSION HANDLING ================= */
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoading(false);
    });

    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => data.subscription.unsubscribe();
  }, []);

  /* ================= AUTH ================= */

  const signInWithPassword = async () => {
    if (!email || !password) return toast.error("Missing credentials");

    setAuthLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setAuthLoading(false);

    if (error) toast.error(error.message);
  };

  const activateAccount = async () => {
    if (!email || !password) return toast.error("Missing credentials");

    const { data } = await supabase
      .from("Clientproject")
      .select("id")
      .eq("client_email", email)
      .single();

    if (!data) return toast.error("No project linked");

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
    else toast.success("Confirm email to activate account");
  };

  const signInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/portal`,
      },
    });
  };

  const resetPassword = async () => {
    if (!email) return toast.error("Enter email first");
    await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/portal`,
    });
    toast.success("Password reset email sent");
  };

  /* ================= LOGIN SCREEN ================= */
  if (!session && !loading) {
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
                onClick={signInWithPassword}
                disabled={authLoading}
              >
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
                className="text-xs underline w-full"
                onClick={resetPassword}
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
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Project Dashboard</h1>
          <Button
            variant="outline"
            onClick={() => supabase.auth.signOut()}
          >
            Sign Out
          </Button>
        </div>
      </div>
    </div>
  );
}
