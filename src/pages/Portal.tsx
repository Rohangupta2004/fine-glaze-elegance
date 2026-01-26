// src/pages/Portal.tsx
// FULL FILE — EMAIL + PASSWORD + GOOGLE
// ❌ NO OTP
// ❌ NO MAGIC LINK UI
// ✅ EMAIL CONFIRMATION HANDLED BY SUPABASE
<h1 className="text-red-600 text-4xl">NEW PORTAL FILE</h1>

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { Session } from "@supabase/supabase-js";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Portal() {
  const navigate = useNavigate();

  const [session, setSession] = useState<Session | null>(null);
  const [checked, setChecked] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"login" | "activate">("login");
  const [loading, setLoading] = useState(false);

  // SESSION
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

  // LOGIN
  const loginWithPassword = async () => {
    if (!email || !password) return toast.error("Enter email & password");
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setLoading(false);
    if (error) toast.error(error.message);
  };

  // ACTIVATE (SIGN UP)
  const activateAccount = async () => {
    if (!email || !password) return toast.error("Enter email & password");

    const { data } = await supabase
      .from("Clientproject")
      .select("id")
      .eq("client_email", email)
      .single();

    if (!data) return toast.error("No project linked to this email");

    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/portal`,
      },
    });
    setLoading(false);

    if (error) toast.error(error.message);
    else toast.success("Check email to confirm account");
  };

  // GOOGLE
  const signInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${window.location.origin}/portal` },
    });
  };

  // LOGIN SCREEN
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
                disabled={loading}
              >
                Sign In
              </Button>
            ) : (
              <Button
                className="w-full"
                onClick={activateAccount}
                disabled={loading}
              >
                Activate Account
              </Button>
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

  // PORTAL HOME
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Button onClick={() => supabase.auth.signOut()}>Sign Out</Button>
    </div>
  );
}
