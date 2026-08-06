import { jsxs, jsx } from "react/jsx-runtime";
import { useParams, useNavigate } from "react-router-dom";
import { forwardRef, useRef } from "react";
import { t as useToast, B as Button } from "../main.mjs";
import { B as Badge } from "./badge-DObGNgcP.js";
import { ArrowLeft, CheckCircle, Download } from "lucide-react";
import { u as useInspections } from "./useInspections-scLc-NMv.js";
import { format } from "date-fns";
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
const safetyLabels = {
  ppe_worn: "PPE worn by all workers",
  scaffolding_secure: "Scaffolding secure & inspected",
  fire_extinguisher_available: "Fire extinguisher available",
  first_aid_available: "First aid kit available",
  safety_nets_installed: "Safety nets installed",
  housekeeping_ok: "Good housekeeping maintained",
  electrical_safety: "Electrical safety checked",
  signage_displayed: "Safety signage displayed"
};
const severityEmoji = {
  low: "🟢",
  medium: "🟡",
  high: "🟠",
  critical: "🔴"
};
const InspectionReport = forwardRef(
  ({ inspection }, ref) => {
    const dateStr = format(new Date(inspection.inspection_date), "dd MMMM yyyy");
    const safetyPassed = Object.values(inspection.safety_checklist).filter(
      Boolean
    ).length;
    const safetyTotal = Object.keys(inspection.safety_checklist).length;
    return /* @__PURE__ */ jsxs(
      "div",
      {
        ref,
        className: "bg-white text-black p-8 max-w-[800px] mx-auto",
        style: { fontFamily: "Arial, sans-serif" },
        children: [
          /* @__PURE__ */ jsx("div", { className: "border-b-4 border-blue-800 pb-4 mb-6", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold text-blue-900", children: "FINE GLAZE" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: "Facade & Glazing Solutions" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
              /* @__PURE__ */ jsx("h2", { className: "text-lg font-bold text-blue-800", children: "DAILY SITE INSPECTION REPORT" }),
              /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-500", children: [
                "Report ID: ",
                inspection.id.slice(0, 8).toUpperCase()
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4 mb-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-500 uppercase", children: "Project" }),
                /* @__PURE__ */ jsx("p", { className: "font-semibold", children: inspection.project_name })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-500 uppercase", children: "Location" }),
                /* @__PURE__ */ jsx("p", { children: inspection.site_location })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-500 uppercase", children: "Supervisor" }),
                /* @__PURE__ */ jsxs("p", { children: [
                  inspection.supervisor_name,
                  inspection.supervisor_phone && ` | ${inspection.supervisor_phone}`
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-500 uppercase", children: "Date" }),
                /* @__PURE__ */ jsx("p", { className: "font-semibold", children: dateStr })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-500 uppercase", children: "Shift / Weather" }),
                /* @__PURE__ */ jsxs("p", { className: "capitalize", children: [
                  inspection.shift,
                  " | ",
                  inspection.weather || "Not recorded"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-500 uppercase", children: "Workers on Site" }),
                /* @__PURE__ */ jsx("p", { children: inspection.workers_present })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold text-blue-800 uppercase border-b mb-2 pb-1", children: "Overall Progress" }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ jsx("div", { className: "flex-1 h-4 bg-gray-200 rounded-full overflow-hidden", children: /* @__PURE__ */ jsx(
                "div",
                {
                  className: "h-full bg-blue-600 rounded-full",
                  style: { width: `${inspection.overall_progress}%` }
                }
              ) }),
              /* @__PURE__ */ jsxs("span", { className: "font-bold text-lg", children: [
                inspection.overall_progress,
                "%"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold text-blue-800 uppercase border-b mb-2 pb-1", children: "Work Completed Today" }),
            /* @__PURE__ */ jsx("p", { className: "whitespace-pre-wrap text-sm", children: inspection.work_completed || "No details provided." })
          ] }),
          inspection.work_planned_tomorrow && /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold text-blue-800 uppercase border-b mb-2 pb-1", children: "Work Planned for Tomorrow" }),
            /* @__PURE__ */ jsx("p", { className: "whitespace-pre-wrap text-sm", children: inspection.work_planned_tomorrow })
          ] }),
          inspection.issues.length > 0 && /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
            /* @__PURE__ */ jsxs("h3", { className: "text-sm font-bold text-blue-800 uppercase border-b mb-2 pb-1", children: [
              "Issues & Observations (",
              inspection.issues.length,
              ")"
            ] }),
            /* @__PURE__ */ jsxs("table", { className: "w-full text-sm", children: [
              /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-gray-100", children: [
                /* @__PURE__ */ jsx("th", { className: "text-left p-2 font-medium", children: "#" }),
                /* @__PURE__ */ jsx("th", { className: "text-left p-2 font-medium", children: "Description" }),
                /* @__PURE__ */ jsx("th", { className: "text-left p-2 font-medium", children: "Severity" })
              ] }) }),
              /* @__PURE__ */ jsx("tbody", { children: inspection.issues.map((issue, idx) => /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
                /* @__PURE__ */ jsx("td", { className: "p-2", children: idx + 1 }),
                /* @__PURE__ */ jsx("td", { className: "p-2", children: issue.description }),
                /* @__PURE__ */ jsxs("td", { className: "p-2 capitalize", children: [
                  severityEmoji[issue.severity],
                  " ",
                  issue.severity
                ] })
              ] }, idx)) })
            ] })
          ] }),
          inspection.materials_used.length > 0 && /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
            /* @__PURE__ */ jsxs("h3", { className: "text-sm font-bold text-blue-800 uppercase border-b mb-2 pb-1", children: [
              "Materials Used (",
              inspection.materials_used.length,
              ")"
            ] }),
            /* @__PURE__ */ jsxs("table", { className: "w-full text-sm", children: [
              /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-gray-100", children: [
                /* @__PURE__ */ jsx("th", { className: "text-left p-2 font-medium", children: "#" }),
                /* @__PURE__ */ jsx("th", { className: "text-left p-2 font-medium", children: "Material" }),
                /* @__PURE__ */ jsx("th", { className: "text-left p-2 font-medium", children: "Quantity" }),
                /* @__PURE__ */ jsx("th", { className: "text-left p-2 font-medium", children: "Unit" })
              ] }) }),
              /* @__PURE__ */ jsx("tbody", { children: inspection.materials_used.map((mat, idx) => /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
                /* @__PURE__ */ jsx("td", { className: "p-2", children: idx + 1 }),
                /* @__PURE__ */ jsx("td", { className: "p-2", children: mat.name }),
                /* @__PURE__ */ jsx("td", { className: "p-2", children: mat.quantity }),
                /* @__PURE__ */ jsx("td", { className: "p-2", children: mat.unit })
              ] }, idx)) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
            /* @__PURE__ */ jsxs("h3", { className: "text-sm font-bold text-blue-800 uppercase border-b mb-2 pb-1", children: [
              "Safety Checklist (",
              safetyPassed,
              "/",
              safetyTotal,
              ")"
            ] }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-2 text-sm", children: Object.keys(inspection.safety_checklist).map((key) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("span", { children: inspection.safety_checklist[key] ? "✅" : "❌" }),
              /* @__PURE__ */ jsx("span", { children: safetyLabels[key] })
            ] }, key)) })
          ] }),
          inspection.notes && /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold text-blue-800 uppercase border-b mb-2 pb-1", children: "Additional Notes" }),
            /* @__PURE__ */ jsx("p", { className: "whitespace-pre-wrap text-sm", children: inspection.notes })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border-t-2 border-gray-300 pt-4 mt-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-xs text-gray-500", children: [
              /* @__PURE__ */ jsxs("span", { children: [
                "Generated on",
                " ",
                format(new Date(inspection.created_at), "dd MMM yyyy, hh:mm a")
              ] }),
              /* @__PURE__ */ jsx("span", { children: "Fine Glaze — Facade & Glazing Solutions, Pune" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-400 mt-1", children: "info@fineglaze.com | +91-8369233566" })
          ] })
        ]
      }
    );
  }
);
InspectionReport.displayName = "InspectionReport";
function InspectionView() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getInspection, updateInspection } = useInspections();
  const reportRef = useRef(null);
  const { toast } = useToast();
  const inspection = id ? getInspection(id) : void 0;
  if (!inspection) {
    return /* @__PURE__ */ jsx("div", { className: "min-h-screen flex items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold", children: "Inspection not found" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm mt-1", children: "This report may have been deleted." }),
      /* @__PURE__ */ jsx(
        Button,
        {
          className: "mt-4",
          onClick: () => navigate("/inspection"),
          children: "Back to Dashboard"
        }
      )
    ] }) });
  }
  const handlePrint = () => {
    window.print();
  };
  const handleMarkReviewed = () => {
    if (id) {
      updateInspection(id, { status: "reviewed" });
      toast({
        title: "Marked as reviewed ✅",
        description: "This inspection has been marked as reviewed."
      });
    }
  };
  const statusColors = {
    draft: "bg-yellow-100 text-yellow-800",
    submitted: "bg-blue-100 text-blue-800",
    reviewed: "bg-green-100 text-green-800"
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gray-100", children: [
    /* @__PURE__ */ jsx("div", { className: "bg-white border-b sticky top-0 z-40 print:hidden", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto px-4 py-3", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(
          Button,
          {
            variant: "ghost",
            size: "icon",
            onClick: () => navigate("/inspection"),
            children: /* @__PURE__ */ jsx(ArrowLeft, { className: "h-5 w-5" })
          }
        ),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("h1", { className: "text-lg font-bold", children: "Inspection Report" }),
            /* @__PURE__ */ jsx(
              Badge,
              {
                variant: "outline",
                className: statusColors[inspection.status],
                children: inspection.status
              }
            )
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: inspection.project_name })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
        inspection.status !== "reviewed" && /* @__PURE__ */ jsxs(
          Button,
          {
            variant: "outline",
            size: "sm",
            onClick: handleMarkReviewed,
            children: [
              /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 mr-1" }),
              "Mark Reviewed"
            ]
          }
        ),
        /* @__PURE__ */ jsxs(Button, { size: "sm", onClick: handlePrint, children: [
          /* @__PURE__ */ jsx(Download, { className: "h-4 w-4 mr-1" }),
          "Print / PDF"
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto px-4 py-6 print:p-0 print:max-w-none", children: /* @__PURE__ */ jsx("div", { className: "bg-white rounded-lg shadow-sm print:shadow-none print:rounded-none", children: /* @__PURE__ */ jsx(InspectionReport, { ref: reportRef, inspection }) }) }),
    /* @__PURE__ */ jsx("style", { children: `
        @media print {
          body * { visibility: hidden; }
          .print\\:hidden { display: none !important; }
          [class*="InspectionReport"], [class*="InspectionReport"] * {
            visibility: visible;
          }
          @page { margin: 1cm; }
        }
      ` })
  ] });
}
export {
  InspectionView as default
};
