import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { B as Button, I as Input, e as Select, f as SelectTrigger, g as SelectValue, h as SelectContent, i as SelectItem } from "../main.mjs";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-B6sFbi3X.js";
import { MapPin, Calendar, User, Clock, AlertTriangle, Eye, Trash2, Plus, ClipboardList, Users, TrendingUp, Search } from "lucide-react";
import { B as Badge } from "./badge-DObGNgcP.js";
import { format } from "date-fns";
import { u as useInspections } from "./useInspections-scLc-NMv.js";
import "vite-react-ssg";
import "@radix-ui/react-toast";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "@tanstack/react-query";
import "@radix-ui/react-slot";
import "@radix-ui/react-dialog";
import "@radix-ui/react-label";
import "@radix-ui/react-select";
import "@supabase/supabase-js";
import "framer-motion";
import "react-helmet-async";
import "@vercel/speed-insights";
const statusColors = {
  draft: "bg-yellow-100 text-yellow-800 border-yellow-300",
  submitted: "bg-blue-100 text-blue-800 border-blue-300",
  reviewed: "bg-green-100 text-green-800 border-green-300"
};
const severityCount = (inspection) => {
  const critical = inspection.issues.filter(
    (i) => i.severity === "critical"
  ).length;
  const high = inspection.issues.filter((i) => i.severity === "high").length;
  return { critical, high, total: inspection.issues.length };
};
function InspectionCard({ inspection, onDelete }) {
  const navigate = useNavigate();
  const issues = severityCount(inspection);
  const dateStr = format(new Date(inspection.inspection_date), "dd MMM yyyy");
  return /* @__PURE__ */ jsxs(Card, { className: "hover:shadow-md transition-shadow", children: [
    /* @__PURE__ */ jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-1 flex-1 min-w-0", children: [
        /* @__PURE__ */ jsx(CardTitle, { className: "text-base font-semibold truncate", children: inspection.project_name }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsx(MapPin, { className: "h-3.5 w-3.5 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "truncate", children: inspection.site_location })
        ] })
      ] }),
      /* @__PURE__ */ jsx(Badge, { variant: "outline", className: statusColors[inspection.status], children: inspection.status })
    ] }) }),
    /* @__PURE__ */ jsxs(CardContent, { className: "space-y-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsx(Calendar, { className: "h-3.5 w-3.5" }),
          dateStr
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsx(User, { className: "h-3.5 w-3.5" }),
          inspection.supervisor_name
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsx(Clock, { className: "h-3.5 w-3.5" }),
          inspection.shift
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-xs mb-1", children: [
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Progress" }),
          /* @__PURE__ */ jsxs("span", { className: "font-medium", children: [
            inspection.overall_progress,
            "%"
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "h-2 bg-muted rounded-full overflow-hidden", children: /* @__PURE__ */ jsx(
          "div",
          {
            className: "h-full bg-primary rounded-full transition-all",
            style: { width: `${inspection.overall_progress}%` }
          }
        ) })
      ] }),
      issues.total > 0 && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
        /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4 text-amber-500" }),
        /* @__PURE__ */ jsxs("span", { children: [
          issues.total,
          " issue",
          issues.total !== 1 ? "s" : "",
          issues.critical > 0 && /* @__PURE__ */ jsxs("span", { className: "text-red-600 font-medium", children: [
            " ",
            "(",
            issues.critical,
            " critical)"
          ] }),
          issues.high > 0 && /* @__PURE__ */ jsxs("span", { className: "text-orange-600 font-medium", children: [
            " ",
            "(",
            issues.high,
            " high)"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-4 text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsxs("span", { children: [
          inspection.workers_present,
          " workers on site"
        ] }),
        /* @__PURE__ */ jsxs("span", { children: [
          inspection.materials_used.length,
          " materials logged"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-2 pt-1", children: [
        /* @__PURE__ */ jsxs(
          Button,
          {
            size: "sm",
            variant: "outline",
            className: "flex-1",
            onClick: () => navigate(`/inspection/${inspection.id}`),
            children: [
              /* @__PURE__ */ jsx(Eye, { className: "h-4 w-4 mr-1" }),
              "View Report"
            ]
          }
        ),
        onDelete && /* @__PURE__ */ jsx(
          Button,
          {
            size: "sm",
            variant: "ghost",
            className: "text-destructive hover:text-destructive",
            onClick: () => onDelete(inspection.id),
            children: /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4" })
          }
        )
      ] })
    ] })
  ] });
}
function InspectionDashboard() {
  const navigate = useNavigate();
  const { inspections, loading, deleteInspection } = useInspections();
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const filtered = inspections.filter((insp) => {
    const matchesSearch = !search || insp.project_name.toLowerCase().includes(search.toLowerCase()) || insp.site_location.toLowerCase().includes(search.toLowerCase()) || insp.supervisor_name.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "all" || insp.status === statusFilter;
    return matchesSearch && matchesStatus;
  });
  const totalInspections = inspections.length;
  const totalIssues = inspections.reduce(
    (sum, i) => sum + i.issues.length,
    0
  );
  const criticalIssues = inspections.reduce(
    (sum, i) => sum + i.issues.filter((iss) => iss.severity === "critical").length,
    0
  );
  const avgWorkers = inspections.length > 0 ? Math.round(
    inspections.reduce((sum, i) => sum + i.workers_present, 0) / inspections.length
  ) : 0;
  const avgProgress = inspections.length > 0 ? Math.round(
    inspections.reduce((sum, i) => sum + i.overall_progress, 0) / inspections.length
  ) : 0;
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gray-50", children: [
    /* @__PURE__ */ jsx("div", { className: "bg-white border-b sticky top-0 z-40", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto px-4 py-3", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx("div", { className: "h-8 w-8 bg-blue-800 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-white font-bold text-xs", children: "FG" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h1", { className: "text-lg font-bold", children: "Site Inspections" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Fine Glaze Daily Reports" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Button, { onClick: () => navigate("/inspection/new"), size: "sm", children: [
        /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4 mr-1" }),
        "New Report"
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 py-4 space-y-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3", children: [
        /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "pt-4 pb-3 px-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(ClipboardList, { className: "h-4 w-4 text-blue-600" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold", children: totalInspections }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Inspections" })
          ] })
        ] }) }) }),
        /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "pt-4 pb-3 px-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4 text-amber-500" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("p", { className: "text-2xl font-bold", children: [
              totalIssues,
              criticalIssues > 0 && /* @__PURE__ */ jsxs("span", { className: "text-sm text-red-500 ml-1", children: [
                "(",
                criticalIssues,
                "🔴)"
              ] })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Issues" })
          ] })
        ] }) }) }),
        /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "pt-4 pb-3 px-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Users, { className: "h-4 w-4 text-green-600" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold", children: avgWorkers }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Avg. Workers" })
          ] })
        ] }) }) }),
        /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "pt-4 pb-3 px-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(TrendingUp, { className: "h-4 w-4 text-purple-600" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("p", { className: "text-2xl font-bold", children: [
              avgProgress,
              "%"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Avg. Progress" })
          ] })
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative flex-1", children: [
          /* @__PURE__ */ jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              placeholder: "Search projects, locations...",
              className: "pl-9",
              value: search,
              onChange: (e) => setSearch(e.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ jsxs(Select, { value: statusFilter, onValueChange: setStatusFilter, children: [
          /* @__PURE__ */ jsx(SelectTrigger, { className: "w-32", children: /* @__PURE__ */ jsx(SelectValue, {}) }),
          /* @__PURE__ */ jsxs(SelectContent, { children: [
            /* @__PURE__ */ jsx(SelectItem, { value: "all", children: "All" }),
            /* @__PURE__ */ jsx(SelectItem, { value: "draft", children: "Drafts" }),
            /* @__PURE__ */ jsx(SelectItem, { value: "submitted", children: "Submitted" }),
            /* @__PURE__ */ jsx(SelectItem, { value: "reviewed", children: "Reviewed" })
          ] })
        ] })
      ] }),
      loading ? /* @__PURE__ */ jsx("div", { className: "text-center py-12 text-muted-foreground", children: "Loading inspections..." }) : filtered.length === 0 ? /* @__PURE__ */ jsxs("div", { className: "text-center py-12", children: [
        /* @__PURE__ */ jsx(ClipboardList, { className: "h-12 w-12 text-muted-foreground mx-auto mb-3" }),
        /* @__PURE__ */ jsx("h3", { className: "font-semibold text-lg", children: "No inspections yet" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm mt-1", children: inspections.length === 0 ? "Start by creating your first site inspection report." : "No inspections match your current filters." }),
        inspections.length === 0 && /* @__PURE__ */ jsxs(
          Button,
          {
            className: "mt-4",
            onClick: () => navigate("/inspection/new"),
            children: [
              /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4 mr-2" }),
              "Create First Report"
            ]
          }
        )
      ] }) : /* @__PURE__ */ jsx("div", { className: "grid gap-4 md:grid-cols-2", children: filtered.map((inspection) => /* @__PURE__ */ jsx(
        InspectionCard,
        {
          inspection,
          onDelete: deleteInspection
        },
        inspection.id
      )) })
    ] })
  ] });
}
export {
  InspectionDashboard as default
};
