import { useState } from "react";
import { ArrowRight, Eye, EyeOff } from "lucide-react";

export default function Portal() {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Authentication request sent.");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex bg-[#f5f3ef] font-sans">

      {/* LEFT SIDE */}
      <div className="w-full lg:w-[45%] flex flex-col justify-between bg-white px-10 lg:px-20 py-10 shadow-xl">

        

        {/* Form Section */}
        <div className="max-w-md w-full mx-auto space-y-8">

          <div>
            <h1 className="text-4xl font-bold text-[#111111]">
              Client Portal
            </h1>
            <p className="text-gray-500 mt-2">
              Secure access for project partners.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#111111]">
                Work Email
              </label>
              <input
                type="email"
                required
                placeholder="name@company.com"
                className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B8860B] transition"
              />
            </div>

            {/* Password */}
            <div className="space-y-2 relative">
              <label className="text-sm font-semibold text-[#111111]">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                required
                placeholder="••••••••"
                className="w-full h-12 px-4 pr-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B8860B] transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-10 text-gray-500 hover:text-[#B8860B]"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-[#B8860B] to-[#8B6508] text-white font-semibold rounded-md flex items-center justify-center gap-2 hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  Access Dashboard <ArrowRight size={18} />
                </>
              )}
            </button>

            {/* Links */}
            <div className="flex justify-between text-sm pt-4 border-t">
              <a href="#" className="text-gray-500 hover:text-[#B8860B]">
                Forgot password?
              </a>
              <a href="#" className="font-semibold text-[#B8860B] hover:text-[#8B6508]">
                Request credentials
              </a>
            </div>
          </form>
        </div>

        <div className="text-xs text-gray-400">
          © 2024 Fine Glaze. All rights reserved.
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="hidden lg:flex lg:w-[55%] relative overflow-hidden bg-black">

        {/* New Image (Architectural glass - not project specific) */}
        <img
          src="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
          alt="Modern architectural glass building"
          className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-1000 hover:scale-105"
        />

        {/* Gold Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 p-16 flex flex-col justify-end text-white">

          <div className="inline-flex items-center gap-2 bg-[#B8860B]/20 backdrop-blur-md px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 border border-[#B8860B]/40">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Fine Glaze
          </div>

          <h2 className="text-5xl font-bold leading-tight mb-6">
            Precision <br /> Transparency.
          </h2>

          <div className="h-px w-24 bg-[#B8860B] mb-6"></div>

          <div>
            <p className="uppercase text-sm text-gray-300 tracking-wider">
              Engineered Glass Solutions
            </p>
            <p className="text-lg font-semibold">
              Architectural Excellence
            </p>
            <p className="text-sm text-gray-400">
              Premium Curtain Wall Systems
            </p>
          </div>

        </div>
      </div>

    </div>
  );
              }
