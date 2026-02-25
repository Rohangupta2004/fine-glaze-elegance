import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

type Mode = "signin" | "signup" | "otp";

export default function AuthPage() {
  const [mode, setMode] = useState<Mode>("signin");
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ================= SIGN IN =================
  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) toast.error(error.message);
    else toast.success("Signed in successfully!");
  };

  // ================= SIGN UP =================
  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    setLoading(false);

    if (error) toast.error(error.message);
    else toast.success("Account created! Check email if verification enabled.");
  };

  // ================= OTP =================
  const handleOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/portal`,
      },
    });

    setLoading(false);

    if (error) toast.error(error.message);
    else toast.success("Magic link sent to your email!");
  };

  return (
    <div className="flex min-h-screen font-sans">

      {/* LEFT PANEL */}
      <div className="w-full lg:w-[45%] flex flex-col justify-center px-8 lg:px-20 bg-white relative">

        {/* Logo */}
        <div className="absolute top-8 left-8 flex items-center gap-2">
          <div className="w-6 h-6 bg-[#16199c] text-white flex items-center justify-center rounded-sm text-xs font-bold">
            FG
          </div>
          <h2 className="font-bold text-[#16199c] uppercase tracking-wide">
            Fine Glaze
          </h2>
        </div>

        <div className="max-w-md mx-auto w-full space-y-8">

          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              Client Portal
            </h1>
            <p className="text-slate-500 mt-2">
              Secure access for project partners.
            </p>
          </div>

          {/* TAB SWITCH */}
          <div className="flex bg-slate-100 p-1 rounded-sm text-sm font-medium">
            {["signin", "signup", "otp"].map((m) => (
              <button
                key={m}
                onClick={() => setMode(m as Mode)}
                className={`flex-1 py-2 rounded-sm transition ${
                  mode === m
                    ? "bg-[#16199c] text-white"
                    : "text-slate-600"
                }`}
              >
                {m === "signin"
                  ? "Sign In"
                  : m === "signup"
                  ? "Sign Up"
                  : "OTP Login"}
              </button>
            ))}
          </div>

          {/* FORM */}
          <form
            onSubmit={
              mode === "signin"
                ? handleSignIn
                : mode === "signup"
                ? handleSignUp
                : handleOTP
            }
            className="space-y-6"
          >
            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">
                Email
              </label>
              <input
                type="email"
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-12 px-4 border border-slate-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#16199c]"
                required
              />
            </div>

            {/* Password (only for sign in & sign up) */}
            {mode !== "otp" && (
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-12 px-4 border border-slate-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#16199c]"
                  required
                />
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full h-12 bg-[#16199c] hover:bg-[#0e116e] text-white font-bold rounded-sm flex items-center justify-center gap-2 transition"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={18} />
                  Processing...
                </>
              ) : mode === "signin" ? (
                "Sign In"
              ) : mode === "signup" ? (
                "Create Account"
              ) : (
                "Send OTP Link"
              )}
            </button>
          </form>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="hidden lg:flex lg:w-[55%] relative bg-slate-900 overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-center opacity-90 transition-transform duration-1000 hover:scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e')",
          }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

        <div className="relative z-10 p-16 text-white flex flex-col justify-end">
          <div className="space-y-6 max-w-lg">
            <div className="text-xs uppercase tracking-widest text-emerald-400">
              System Online
            </div>
            <h2 className="text-4xl font-bold leading-tight">
              Precision Transparency.
            </h2>
            <p className="text-white/70">
              Secure access to your project files, financials,
              and approval workflows.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
    }
