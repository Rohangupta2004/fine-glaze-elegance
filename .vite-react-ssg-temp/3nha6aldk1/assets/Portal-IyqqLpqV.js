import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { useState, useEffect } from "react";
import { c as cn, s as supabase, B as Button, I as Input, S as SEO } from "../main.mjs";
import { Mail, MapPin, Building, User, IndianRupee, FileText, CheckCircle2, XCircle, Download, Calendar } from "lucide-react";
import { toast } from "sonner";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-B6sFbi3X.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import "vite-react-ssg";
import "@radix-ui/react-toast";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "next-themes";
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
const Progress = React.forwardRef(({ className, value, ...props }, ref) => /* @__PURE__ */ jsx(
  ProgressPrimitive.Root,
  {
    ref,
    className: cn("relative h-4 w-full overflow-hidden rounded-full bg-secondary", className),
    ...props,
    children: /* @__PURE__ */ jsx(
      ProgressPrimitive.Indicator,
      {
        className: "h-full w-full flex-1 bg-primary transition-all",
        style: { transform: `translateX(-${100 - (value || 0)}%)` }
      }
    )
  }
));
Progress.displayName = ProgressPrimitive.Root.displayName;
function Skeleton({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { className: cn("animate-pulse rounded-md bg-muted", className), ...props });
}
function Portal() {
  var _a, _b;
  const [session, setSession] = useState(null);
  const [project, setProject] = useState(null);
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [isAuthLoading, setIsAuthLoading] = useState(false);
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session: session2 } }) => setSession(session2));
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, session2) => setSession(session2));
    return () => subscription.unsubscribe();
  }, []);
  useEffect(() => {
    var _a2;
    if ((_a2 = session == null ? void 0 : session.user) == null ? void 0 : _a2.email) fetchData();
  }, [session]);
  const fetchData = async () => {
    setLoading(true);
    const { data: proj } = await supabase.from("Clientproject").select("*").eq("client_email", session == null ? void 0 : session.user.email).maybeSingle();
    if (proj) {
      setProject(proj);
      const { data: fileData } = await supabase.from("ProjectFiles").select("*").eq("project_id", proj.id).order("created_at", { ascending: false });
      setFiles(fileData || []);
    }
    setLoading(false);
  };
  const handleApproval = async (fileId, status) => {
    const { error } = await supabase.from("ProjectFiles").update({ status }).eq("id", fileId);
    if (!error) {
      toast.success(`Document ${status}`);
      fetchData();
    } else toast.error("Action failed");
  };
  const signInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({ provider: "google", options: { redirectTo: `${window.location.origin}/portal` } });
  };
  const signInWithEmail = async () => {
    if (!email) return toast.error("Enter email");
    setIsAuthLoading(true);
    const { error } = await supabase.auth.signInWithOtp({ email });
    setIsAuthLoading(false);
    if (error) toast.error(error.message);
    else toast.success("Login link sent to your email!");
  };
  if (!session) {
    return /* @__PURE__ */ jsx("div", { className: "min-h-screen flex items-center justify-center bg-slate-50 p-4", children: /* @__PURE__ */ jsxs(Card, { className: "w-full max-w-md shadow-xl border-t-4 border-t-primary", children: [
      /* @__PURE__ */ jsx(CardHeader, { className: "text-center", children: /* @__PURE__ */ jsx(CardTitle, { className: "text-2xl font-bold", children: "Client Portal" }) }),
      /* @__PURE__ */ jsxs(CardContent, { className: "space-y-6", children: [
        /* @__PURE__ */ jsx(Button, { variant: "outline", className: "w-full h-12 gap-2", onClick: signInWithGoogle, children: "Continue with Google" }),
        /* @__PURE__ */ jsxs("div", { className: "relative text-center text-xs uppercase text-muted-foreground", children: [
          /* @__PURE__ */ jsx("span", { className: "bg-white px-2 relative z-10", children: "Or use email" }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 top-1/2 border-t -z-0" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsx(Input, { type: "email", placeholder: "client@gmail.com", value: email, onChange: (e) => setEmail(e.target.value) }),
          /* @__PURE__ */ jsx(Button, { onClick: signInWithEmail, disabled: isAuthLoading, children: /* @__PURE__ */ jsx(Mail, { size: 18 }) })
        ] })
      ] })
    ] }) });
  }
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-slate-50 p-4 md:p-10", children: [
    /* @__PURE__ */ jsx(SEO, { title: "Client Portal | Fine Glaze", description: "Fine Glaze client project status portal", noindex: true }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto space-y-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-slate-900", children: "Project Dashboard" }),
          /* @__PURE__ */ jsxs("p", { className: "text-slate-500", children: [
            "Welcome, ",
            session.user.email
          ] })
        ] }),
        /* @__PURE__ */ jsx(Button, { variant: "outline", onClick: () => supabase.auth.signOut(), children: "Sign Out" })
      ] }),
      loading ? /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsx(Skeleton, { className: "h-48 w-full rounded-xl" }),
        /* @__PURE__ */ jsx(Skeleton, { className: "h-32 w-full rounded-xl" })
      ] }) : !project ? /* @__PURE__ */ jsxs(Card, { className: "border-dashed border-2 p-10 text-center", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl", children: "No Active Project" }),
        /* @__PURE__ */ jsx("p", { children: "Contact support if this is an error." })
      ] }) : /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs(Card, { className: "shadow-md border-t-4 border-t-primary", children: [
            /* @__PURE__ */ jsxs(CardHeader, { className: "pb-2", children: [
              /* @__PURE__ */ jsx(CardTitle, { children: project.project_name }),
              /* @__PURE__ */ jsx(Badge, { className: "w-fit", children: project.status })
            ] }),
            /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4 pt-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-slate-600", children: [
                  /* @__PURE__ */ jsx(MapPin, { size: 14, className: "text-primary" }),
                  " ",
                  project.site_address || "Address pending"
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-slate-600", children: [
                  /* @__PURE__ */ jsx(Building, { size: 14, className: "text-primary" }),
                  " Arch: ",
                  project.architect_name || "N/A"
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-slate-600", children: [
                  /* @__PURE__ */ jsx(User, { size: 14, className: "text-primary" }),
                  " ",
                  project.client_phone || "No phone"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-xs font-medium", children: [
                  /* @__PURE__ */ jsx("span", { children: "Progress" }),
                  /* @__PURE__ */ jsxs("span", { children: [
                    project.progress,
                    "%"
                  ] })
                ] }),
                /* @__PURE__ */ jsx(Progress, { value: project.progress, className: "h-2" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(Card, { className: "shadow-md", children: [
            /* @__PURE__ */ jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2 text-base", children: [
              /* @__PURE__ */ jsx(IndianRupee, { size: 18 }),
              " Financials"
            ] }) }),
            /* @__PURE__ */ jsxs(CardContent, { className: "space-y-3 pt-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center p-3 bg-slate-100 rounded-lg", children: [
                /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-600", children: "Total" }),
                /* @__PURE__ */ jsxs("span", { className: "font-bold", children: [
                  "₹",
                  (_a = project.total_amount) == null ? void 0 : _a.toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center p-3 bg-green-50 text-green-700 rounded-lg border border-green-100", children: [
                /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Paid" }),
                /* @__PURE__ */ jsxs("span", { className: "font-bold", children: [
                  "₹",
                  (_b = project.paid_amount) == null ? void 0 : _b.toLocaleString()
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "text-xs text-center text-slate-400", children: [
                "Pending: ₹",
                ((project.total_amount || 0) - (project.paid_amount || 0)).toLocaleString()
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(Card, { className: "md:col-span-2 shadow-md h-fit", children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(FileText, { className: "text-blue-600" }),
            " Documents & Approvals"
          ] }) }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
            files.length === 0 && /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm text-center py-4", children: "No documents shared yet." }),
            files.map((file) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-center justify-between p-4 rounded-lg border bg-white hover:shadow-sm transition-all gap-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 overflow-hidden", children: [
                /* @__PURE__ */ jsx("div", { className: `p-2 rounded-full ${file.status === "Approved" ? "bg-green-100 text-green-600" : "bg-slate-100 text-slate-500"}`, children: file.status === "Approved" ? /* @__PURE__ */ jsx(CheckCircle2, { size: 20 }) : file.status === "Rejected" ? /* @__PURE__ */ jsx(XCircle, { size: 20 }) : /* @__PURE__ */ jsx(FileText, { size: 20 }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("a", { href: file.url, target: "_blank", className: "font-medium hover:underline text-blue-700 block truncate max-w-[180px]", children: file.name }),
                  /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: new Date(file.created_at).toLocaleDateString() })
                ] })
              ] }),
              file.requires_approval && file.status === "Pending" ? /* @__PURE__ */ jsxs("div", { className: "flex gap-2 shrink-0", children: [
                /* @__PURE__ */ jsx(Button, { size: "sm", variant: "outline", className: "text-red-600 hover:bg-red-50", onClick: () => handleApproval(file.id, "Rejected"), children: "Reject" }),
                /* @__PURE__ */ jsx(Button, { size: "sm", className: "bg-green-600 hover:bg-green-700", onClick: () => handleApproval(file.id, "Approved"), children: "Approve" })
              ] }) : file.requires_approval ? /* @__PURE__ */ jsx(Badge, { variant: file.status === "Approved" ? "default" : "destructive", className: file.status === "Approved" ? "bg-green-600" : "", children: file.status }) : /* @__PURE__ */ jsx(Button, { size: "sm", variant: "ghost", asChild: true, children: /* @__PURE__ */ jsx("a", { href: file.url, target: "_blank", children: /* @__PURE__ */ jsx(Download, { size: 16 }) }) })
            ] }, file.id))
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs(Card, { className: "md:col-span-3 shadow-md flex flex-col max-h-[500px]", children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Calendar, { className: "text-purple-600", size: 20 }),
            " Project Timeline"
          ] }) }),
          /* @__PURE__ */ jsx(CardContent, { className: "overflow-y-auto", children: !project.timeline || project.timeline.length === 0 ? /* @__PURE__ */ jsx("div", { className: "text-center py-6 text-sm text-muted-foreground", children: "No updates yet." }) : /* @__PURE__ */ jsxs("div", { className: "space-y-6 relative pl-2 pt-2", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute left-[7px] top-2 bottom-2 w-[2px] bg-slate-100" }),
            project.timeline.map((event, i) => /* @__PURE__ */ jsxs("div", { className: "relative flex gap-4", children: [
              /* @__PURE__ */ jsx("div", { className: `w-4 h-4 rounded-full border-2 border-white shadow-sm z-10 mt-1 shrink-0 ${i === 0 ? "bg-purple-600 ring-2 ring-purple-100" : "bg-slate-300"}` }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-1 pb-2", children: [
                /* @__PURE__ */ jsx("p", { className: "text-xs font-medium text-slate-500 uppercase", children: new Date(event.date).toLocaleDateString() }),
                /* @__PURE__ */ jsx("h4", { className: `font-semibold ${i === 0 ? "text-slate-900" : "text-slate-600"}`, children: event.title }),
                event.desc && /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: event.desc })
              ] })
            ] }, i))
          ] }) })
        ] })
      ] })
    ] })
  ] });
}
export {
  Portal as default
};
