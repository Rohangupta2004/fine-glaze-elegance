import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Session } from "@supabase/supabase-js";
import { toast } from "sonner";
import {
  Mail,
  Lock,
  LogIn,
  UserPlus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Portal() {
  const [session, setSession] = useState<Session | null>(null);
  const [checked, setChecked] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [loading, setLoading] = useState(false);
  const [awaitingConfirm, setAwaitingConfirm] = useState(false);

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

  // ---------- SIGN IN ----------
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

  // ---------- SIGN UP ----------
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

  // ---------- RESEND CONFIRM ----------
  const resendConfirmation = async () => {
    if (!email) return toast.error("Enter email");

    const { error } = await supabase.auth.resend({
      type: "signup",
      email,
    });

    if (error) toast.error(error.message);
    else toast.success("Confirmation email resent");
  };

  // ---------- GOOGLE ----------
  const signInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${window.location.origin}/portal` },
    });
  };

  // ---------- AUTH UI ----------
  if (!session && checked) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
        <Card className="w-full max-w-md shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Client Portal</CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            {/* GOOGLE */}
            <Button
              variant="outline"
              className="w-full gap-2"
              onClick={signInWithGoogle}
            >
              <img
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                alt="Google"
                className="h-4 w-4"
              />
              Continue with Google
            </Button>

            {/* EMAIL */}
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                type="email"
                placeholder="Email"
                className="pl-9"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* PASSWORD */}
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                type="password"
                placeholder="Password"
                className="pl-9"
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
                <LogIn size={16} />
                Sign In
              </Button>
            ) : (
              <Button
                className="w-full gap-2"
                onClick={signUpWithPassword}
                disabled={loading}
              >
                <UserPlus size={16} />
                Sign Up
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

  // ---------- LOGGED IN ----------
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Button onClick={() => supabase.auth.signOut()}>
        Sign Out
      </Button>
    </div>
  );
    }
