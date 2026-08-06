import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { s as supabase, S as SEO } from "../main.mjs";
import "vite-react-ssg";
import "@radix-ui/react-toast";
import "class-variance-authority";
import "lucide-react";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "@tanstack/react-query";
import "react-router-dom";
import "@radix-ui/react-slot";
import "@radix-ui/react-dialog";
import "@radix-ui/react-label";
import "@radix-ui/react-select";
import "@supabase/supabase-js";
import "framer-motion";
import "react-helmet-async";
import "@vercel/speed-insights";
const ADMIN_EMAIL = "grohan24102004@gmail.com";
function Dev() {
  const [session, setSession] = useState(null);
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
    });
  }, []);
  useEffect(() => {
    if (!session) return;
    if (session.user.email !== ADMIN_EMAIL) return;
    supabase.from("Clientproject").select("id, project_name, status, progress").then(({ data }) => {
      if (data) setProjects(data);
    });
  }, [session]);
  const updateProject = async (id, status, progress) => {
    await supabase.from("Clientproject").update({ status, progress }).eq("id", id);
    alert("Updated");
  };
  if (!session) {
    return /* @__PURE__ */ jsx("p", { style: { padding: 40 }, children: "Login required" });
  }
  if (session.user.email !== ADMIN_EMAIL) {
    return /* @__PURE__ */ jsx("p", { style: { padding: 40, color: "red" }, children: "Access denied" });
  }
  return /* @__PURE__ */ jsxs("div", { style: { padding: 40 }, children: [
    /* @__PURE__ */ jsx(SEO, { title: "Dev Panel", description: "Dev panel", noindex: true }),
    /* @__PURE__ */ jsx("h2", { children: "FineGlaze Dev Panel" }),
    projects.map((p) => /* @__PURE__ */ jsxs(
      "div",
      {
        style: { border: "1px solid #ccc", padding: 16, marginBottom: 16 },
        children: [
          /* @__PURE__ */ jsx("h4", { children: p.project_name }),
          /* @__PURE__ */ jsx(
            "input",
            {
              defaultValue: p.status,
              onBlur: (e) => updateProject(p.id, e.target.value, p.progress)
            }
          ),
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "number",
              defaultValue: p.progress,
              min: 0,
              max: 100,
              onBlur: (e) => updateProject(
                p.id,
                p.status,
                Number(e.target.value)
              )
            }
          )
        ]
      },
      p.id
    ))
  ] });
}
export {
  Dev as default
};
