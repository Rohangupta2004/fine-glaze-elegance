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
    }, 1600);
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-[#f4f6ff] to-[#e9ecff] font-sans">
      
      {/* LEFT PANEL */}
      <div className="w-full lg:w-[45%] flex flex-col justify-between bg-white/90 backdrop-blur-xl border-r border-gray-200 px-10 lg:px-20 py-10">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-gradient-to-br from-[#16199c] to-[#0e116e] text-white flex items-center justify-center rounded-md shadow-lg">
            F
          </div>
          <h2 className="text-[#16199c] font-bold uppercase tracking-wider text-sm">
            Fine Glaze
          </h2>
        </div>

        {/* Form Section */}
        <div className="max-w-md w-full mx-auto space-y-8">
          
          <div>
            <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
              Client Portal
            </h1>
            <p className="text-gray-500 mt-2">
              Secure access for project partners.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">
                Work Email
              </label>
              <input
                type="email"
                required
                placeholder="name@company.com"
                className="w-full h-12 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#16199c] transition-all duration-200"
              />
            </div>

            {/* Password */}
            <div className="space-y-2 relative">
              <label className="text-sm font-semibold text-gray-700">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                required
                placeholder="••••••••"
                className="w-full h-12 px-4 pr-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#16199c] transition-all duration-200"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-10 text-gray-500 hover:text-[#16199c]"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-[#16199c] to-[#0e116e] text-white font-semibold rounded-md flex items-center justify-center gap-2 hover:shadow-lg hover:scale-[1.01] transition-all duration-300"
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
              <a href="#" className="text-gray-500 hover:text-[#16199c]">
                Forgot password?
              </a>
              <a href="#" className="font-semibold text-[#16199c] hover:text-[#0e116e]">
                Request credentials
              </a>
            </div>
          </form>
        </div>

        <div className="text-xs text-gray-400">
          © 2024 Fine Glaze. All rights reserved.
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="hidden lg:flex lg:w-[55%] relative overflow-hidden">
        
        {/* Image */}
        <img
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
          alt="Modern glass architecture"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 p-16 flex flex-col justify-end text-white">
          
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            System V4.2 Online
          </div>

          <h2 className="text-5xl font-bold leading-tight mb-6">
            Precision <br /> Transparency.
          </h2>

          <div className="h-px w-24 bg-white/40 mb-6"></div>

          <div>
            <p className="uppercase text-sm text-gray-300 tracking-wider">
              Featured Project
            </p>
            <p className="text-lg font-semibold">
              The Shard, London
            </p>
            <p className="text-sm text-gray-400">
              Unitized Curtain Wall System
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
