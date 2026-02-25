import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { Loader2, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

type Mode = "signin" | "signup" | "otp";

export default function Portal() {
  const [mode, setMode] = useState<Mode>("signin");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const getPasswordStrength = () => {
    if (password.length < 6) return 25;
    if (password.length < 8) return 50;
    if (/[A-Z]/.test(password) && /[0-9]/.test(password)) return 100;
    return 75;
  };

  const strength = getPasswordStrength();

  // ================= SIGN IN =================
  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setLoading(false);
    error ? toast.error(error.message) : toast.success("Signed in!");
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
    error ? toast.error(error.message) : toast.success("Account created!");
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
    error ? toast.error(error.message) : toast.success("Magic link sent!");
  };

  // ================= GOOGLE =================
  const handleGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/portal`,
      },
    });
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

          {/* Google Login */}
          <button
            onClick={handleGoogle}
            className="w-full h-12 border flex items-center justify-center gap-2 rounded-sm hover:bg-slate-50 transition"
          >
            Continue with Google
          </button>

          <div className="relative text-center text-xs text-slate-400 uppercase">
            <span className="bg-white px-2 relative z-10">or</span>
            <div className="absolute inset-0 top-1/2 border-t"></div>
          </div>

          {/* Tabs */}
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

          <AnimatePresence mode="wait">
            <motion.form
              key={mode}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
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
                  className="w-full h-12 px-4 border rounded-sm focus:ring-2 focus:ring-[#16199c]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Password */}
              {mode !== "otp" && (
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Password
                  </label>

                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="w-full h-12 px-4 border rounded-sm focus:ring-2 focus:ring-[#16199c]"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword(!showPassword)
                      }
                      className="absolute right-3 top-3 text-slate-500"
                    >
                      {showPassword ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>
                  </div>

                  {mode === "signup" && (
                    <div className="h-2 bg-slate-200 rounded">
                      <div
                        className="h-2 bg-green-500 rounded transition-all"
                        style={{ width: `${strength}%` }}
                      ></div>
                    </div>
                  )}
                </div>
              )}

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full h-12 bg-[#16199c] hover:bg-[#0e116e] text-white font-bold rounded-sm flex items-center justify-center gap-2 transition"
              >
                {loading ? (
                  <>
                    <Loader2
                      className="animate-spin"
                      size={18}
                    />
                    Processing...
                  </>
                ) : mode === "signin" ? (
                  "Sign In"
                ) : mode === "signup" ? (
                  "Create Account"
                ) : (
                  "Send OTP"
                )}
              </button>
            </motion.form>
          </AnimatePresence>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="hidden lg:flex lg:w-[55%] relative overflow-hidden bg-slate-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-90"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e')",
          }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

        <div className="relative z-10 p-16 text-white flex flex-col justify-end">
          <div className="space-y-6 max-w-lg backdrop-blur-sm bg-white/10 p-6 rounded-xl border border-white/20">
            <h2 className="text-4xl font-bold leading-tight">
              Precision Transparency.
            </h2>
            <p className="text-white/70">
              Secure access to project files,
              approvals, and financial tracking.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
