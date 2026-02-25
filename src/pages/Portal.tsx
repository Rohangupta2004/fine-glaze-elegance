import { useState } from "react";
import { ArrowRight, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Portal() {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div className="min-h-screen flex bg-black text-white relative overflow-hidden">

      {/* Background Light Streak */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,rgba(184,134,11,0.4),transparent_40%)] animate-pulse"></div>

      {/* LEFT PANEL */}
      <div className="w-full lg:w-[45%] flex flex-col justify-between bg-[#0f0f0f]/90 backdrop-blur-xl px-10 lg:px-20 py-10 border-r border-[#B8860B]/20 relative z-10">

        {/* Floating Glass Navbar */}
        <div className="flex items-center justify-between">

          {/* Clickable Logo with Shimmer */}
          <button
            onClick={() => navigate("/")}
            className="group relative"
          >
            {/* Shimmer Effect */}
            <span className="absolute inset-0 rounded-md bg-gradient-to-r from-transparent via-[#FFD700]/40 to-transparent bg-[length:200%_100%] opacity-0 group-hover:opacity-100 group-hover:animate-[shimmer_2s_linear_infinite]"></span>

            <img
              src="/Logofg.webp"
              alt="Fine Glaze Logo"
              className="relative h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </button>

        </div>

        {/* Form Section */}
        <div className="max-w-md w-full mx-auto space-y-8">

          <div>
            <h1 className="text-4xl font-bold tracking-tight">
              Client Portal
            </h1>
            <p className="text-gray-400 mt-2">
              Secure access for project partners.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#B8860B]">
                Work Email
              </label>
              <input
                type="email"
                required
                placeholder="name@company.com"
                className="w-full h-12 px-4 bg-black border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B8860B] transition"
              />
            </div>

            {/* Password */}
            <div className="space-y-2 relative">
              <label className="text-sm font-semibold text-[#B8860B]">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                required
                placeholder="••••••••"
                className="w-full h-12 px-4 pr-12 bg-black border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B8860B] transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-10 text-gray-400 hover:text-[#FFD700]"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-[#B8860B] to-[#8B6508] text-black font-bold rounded-md flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(184,134,11,0.6)] transition-all duration-300"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  Access Dashboard <ArrowRight size={18} />
                </>
              )}
            </button>

            {/* Links */}
            <div className="flex justify-between text-sm pt-4 border-t border-gray-800">
              <a href="#" className="text-gray-400 hover:text-[#FFD700]">
                Forgot password?
              </a>
              <a href="#" className="font-semibold text-[#B8860B] hover:text-[#FFD700]">
                Request credentials
              </a>
            </div>
          </form>
        </div>

        <div className="text-xs text-gray-500">
          © 2024 Fine Glaze. All rights reserved.
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="hidden lg:flex lg:w-[55%] relative overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1529429617124-95b109e86bb8"
          alt="Luxury architectural glass"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

        <div className="relative z-10 p-16 flex flex-col justify-end text-white">
          <h2 className="text-5xl font-bold leading-tight mb-6">
            Precision <br /> Transparency.
          </h2>

          <div className="h-px w-24 bg-[#B8860B] mb-6"></div>

          <p className="text-gray-400">
            Premium Architectural Glass Systems
          </p>
        </div>
      </div>
    </div>
  );
}
