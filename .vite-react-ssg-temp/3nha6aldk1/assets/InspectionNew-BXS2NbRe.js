import { jsxs, jsx } from "react/jsx-runtime";
import { useNavigate } from "react-router-dom";
import { t as useToast, d as Label, I as Input, e as Select, f as SelectTrigger, g as SelectValue, h as SelectContent, i as SelectItem, T as Textarea, B as Button } from "../main.mjs";
import { Trash2, Plus, Save, Send, ChevronUp, ChevronDown, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { S as Slider, C as Checkbox } from "./checkbox-C8GxpjUe.js";
import { C as Card, a as CardHeader, c as CardContent, b as CardTitle } from "./card-B6sFbi3X.js";
import { B as Badge } from "./badge-DObGNgcP.js";
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
import "@radix-ui/react-slider";
import "@radix-ui/react-checkbox";
const WEATHER_OPTIONS = [
  "Clear / Sunny",
  "Partly Cloudy",
  "Overcast",
  "Light Rain",
  "Heavy Rain",
  "Windy",
  "Hot & Humid",
  "Foggy"
];
const MATERIAL_UNITS = [
  "kg",
  "sqft",
  "sqm",
  "nos",
  "liters",
  "meters",
  "running ft",
  "sets",
  "boxes"
];
const COMMON_MATERIALS = [
  "Glass Panels",
  "Aluminium Sections",
  "Structural Sealant",
  "Weather Sealant",
  "EPDM Gasket",
  "Fasteners / Bolts",
  "Brackets",
  "ACP Sheets",
  "Backup Rod",
  "Cement",
  "Sand",
  "MS Steel",
  "Spider Fittings",
  "Anchor Fasteners"
];
const defaultSafety = {
  ppe_worn: false,
  scaffolding_secure: false,
  fire_extinguisher_available: false,
  first_aid_available: false,
  safety_nets_installed: false,
  housekeeping_ok: false,
  electrical_safety: false,
  signage_displayed: false
};
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
function InspectionForm({ onSubmit }) {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [expandedSections, setExpandedSections] = useState({
    basic: true,
    work: true,
    issues: false,
    materials: false,
    safety: false,
    summary: false
  });
  const toggleSection = (section) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };
  const [projectName, setProjectName] = useState("");
  const [siteLocation, setSiteLocation] = useState("");
  const [inspectionDate, setInspectionDate] = useState(
    (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
  );
  const [weather, setWeather] = useState("");
  const [supervisorName, setSupervisorName] = useState("");
  const [supervisorPhone, setSupervisorPhone] = useState("");
  const [shift, setShift] = useState(
    "morning"
  );
  const [workersPresent, setWorkersPresent] = useState(0);
  const [workCompleted, setWorkCompleted] = useState("");
  const [workPlannedTomorrow, setWorkPlannedTomorrow] = useState("");
  const [issues, setIssues] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [safety, setSafety] = useState(defaultSafety);
  const [overallProgress, setOverallProgress] = useState(0);
  const [notes, setNotes] = useState("");
  const addIssue = () => {
    setIssues([...issues, { description: "", severity: "low" }]);
    if (!expandedSections.issues)
      setExpandedSections((p) => ({ ...p, issues: true }));
  };
  const removeIssue = (index) => {
    setIssues(issues.filter((_, i) => i !== index));
  };
  const updateIssue = (index, field, value) => {
    const updated = [...issues];
    updated[index] = { ...updated[index], [field]: value };
    setIssues(updated);
  };
  const addMaterial = () => {
    setMaterials([...materials, { name: "", quantity: 0, unit: "nos" }]);
    if (!expandedSections.materials)
      setExpandedSections((p) => ({ ...p, materials: true }));
  };
  const removeMaterial = (index) => {
    setMaterials(materials.filter((_, i) => i !== index));
  };
  const updateMaterial = (index, field, value) => {
    const updated = [...materials];
    updated[index] = { ...updated[index], [field]: value };
    setMaterials(updated);
  };
  const toggleSafety = (key) => {
    setSafety((prev) => ({ ...prev, [key]: !prev[key] }));
  };
  const buildFormData = () => ({
    project_name: projectName,
    site_location: siteLocation,
    inspection_date: inspectionDate,
    weather,
    supervisor_name: supervisorName,
    supervisor_phone: supervisorPhone,
    shift,
    workers_present: workersPresent,
    work_completed: workCompleted,
    work_planned_tomorrow: workPlannedTomorrow,
    issues: issues.filter((i) => i.description.trim()),
    materials_used: materials.filter((m) => m.name.trim()),
    safety_checklist: safety,
    overall_progress: overallProgress,
    photos: [],
    notes
  });
  const validate = () => {
    if (!projectName.trim()) {
      toast({
        title: "Missing field",
        description: "Project name is required",
        variant: "destructive"
      });
      return false;
    }
    if (!siteLocation.trim()) {
      toast({
        title: "Missing field",
        description: "Site location is required",
        variant: "destructive"
      });
      return false;
    }
    if (!supervisorName.trim()) {
      toast({
        title: "Missing field",
        description: "Supervisor name is required",
        variant: "destructive"
      });
      return false;
    }
    return true;
  };
  const handleSubmit = (status) => {
    if (status === "submitted" && !validate()) return;
    onSubmit(buildFormData(), status);
    toast({
      title: status === "draft" ? "Draft saved!" : "Report submitted!",
      description: status === "draft" ? "You can continue editing later." : "The daily inspection report has been logged."
    });
    navigate("/inspection");
  };
  const SectionHeader = ({
    title,
    section,
    badge
  }) => /* @__PURE__ */ jsxs(
    "button",
    {
      type: "button",
      onClick: () => toggleSection(section),
      className: "flex items-center justify-between w-full text-left",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(CardTitle, { className: "text-base", children: title }),
          badge && /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "text-xs", children: badge })
        ] }),
        expandedSections[section] ? /* @__PURE__ */ jsx(ChevronUp, { className: "h-4 w-4 text-muted-foreground" }) : /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 text-muted-foreground" })
      ]
    }
  );
  return /* @__PURE__ */ jsxs("div", { className: "space-y-4 pb-24", children: [
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsx(SectionHeader, { title: "📋 Basic Information", section: "basic" }) }),
      expandedSections.basic && /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "project", children: "Project Name *" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              id: "project",
              placeholder: "e.g. Embassy 247 Glass Replacement",
              value: projectName,
              onChange: (e) => setProjectName(e.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "location", children: "Site Location *" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              id: "location",
              placeholder: "e.g. Vikhroli, Mumbai",
              value: siteLocation,
              onChange: (e) => setSiteLocation(e.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "date", children: "Date" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "date",
                type: "date",
                value: inspectionDate,
                onChange: (e) => setInspectionDate(e.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { children: "Weather" }),
            /* @__PURE__ */ jsxs(Select, { value: weather, onValueChange: setWeather, children: [
              /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select" }) }),
              /* @__PURE__ */ jsx(SelectContent, { children: WEATHER_OPTIONS.map((w) => /* @__PURE__ */ jsx(SelectItem, { value: w, children: w }, w)) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "supervisor", children: "Supervisor Name *" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "supervisor",
                placeholder: "Your name",
                value: supervisorName,
                onChange: (e) => setSupervisorName(e.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "phone", children: "Phone" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "phone",
                type: "tel",
                placeholder: "+91-XXXXXXXXXX",
                value: supervisorPhone,
                onChange: (e) => setSupervisorPhone(e.target.value)
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { children: "Shift" }),
            /* @__PURE__ */ jsxs(
              Select,
              {
                value: shift,
                onValueChange: (v) => setShift(v),
                children: [
                  /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, {}) }),
                  /* @__PURE__ */ jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsx(SelectItem, { value: "morning", children: "🌅 Morning" }),
                    /* @__PURE__ */ jsx(SelectItem, { value: "afternoon", children: "☀️ Afternoon" }),
                    /* @__PURE__ */ jsx(SelectItem, { value: "night", children: "🌙 Night" })
                  ] })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "workers", children: "Workers Present" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "workers",
                type: "number",
                min: 0,
                value: workersPresent,
                onChange: (e) => setWorkersPresent(Number(e.target.value))
              }
            )
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsx(SectionHeader, { title: "🔨 Work Details", section: "work" }) }),
      expandedSections.work && /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "completed", children: "Work Completed Today" }),
          /* @__PURE__ */ jsx(
            Textarea,
            {
              id: "completed",
              placeholder: "Describe what work was done today...",
              rows: 4,
              value: workCompleted,
              onChange: (e) => setWorkCompleted(e.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "planned", children: "Work Planned for Tomorrow" }),
          /* @__PURE__ */ jsx(
            Textarea,
            {
              id: "planned",
              placeholder: "What's planned for the next working day...",
              rows: 3,
              value: workPlannedTomorrow,
              onChange: (e) => setWorkPlannedTomorrow(e.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs(Label, { children: [
            "Overall Progress: ",
            overallProgress,
            "%"
          ] }),
          /* @__PURE__ */ jsx(
            Slider,
            {
              value: [overallProgress],
              max: 100,
              step: 5,
              onValueChange: ([v]) => setOverallProgress(v),
              className: "mt-2"
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsx(
        SectionHeader,
        {
          title: "⚠️ Issues & Observations",
          section: "issues",
          badge: issues.length > 0 ? `${issues.length}` : void 0
        }
      ) }),
      expandedSections.issues && /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
        issues.map((issue, idx) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "p-3 border rounded-lg space-y-3 bg-muted/30",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxs("span", { className: "text-sm font-medium", children: [
                  "Issue #",
                  idx + 1
                ] }),
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    type: "button",
                    variant: "ghost",
                    size: "sm",
                    onClick: () => removeIssue(idx),
                    children: /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4 text-destructive" })
                  }
                )
              ] }),
              /* @__PURE__ */ jsx(
                Textarea,
                {
                  placeholder: "Describe the issue...",
                  rows: 2,
                  value: issue.description,
                  onChange: (e) => updateIssue(idx, "description", e.target.value)
                }
              ),
              /* @__PURE__ */ jsxs(
                Select,
                {
                  value: issue.severity,
                  onValueChange: (v) => updateIssue(idx, "severity", v),
                  children: [
                    /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Severity" }) }),
                    /* @__PURE__ */ jsxs(SelectContent, { children: [
                      /* @__PURE__ */ jsx(SelectItem, { value: "low", children: "🟢 Low" }),
                      /* @__PURE__ */ jsx(SelectItem, { value: "medium", children: "🟡 Medium" }),
                      /* @__PURE__ */ jsx(SelectItem, { value: "high", children: "🟠 High" }),
                      /* @__PURE__ */ jsx(SelectItem, { value: "critical", children: "🔴 Critical" })
                    ] })
                  ]
                }
              )
            ]
          },
          idx
        )),
        /* @__PURE__ */ jsxs(
          Button,
          {
            type: "button",
            variant: "outline",
            className: "w-full",
            onClick: addIssue,
            children: [
              /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4 mr-2" }),
              "Add Issue"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsx(
        SectionHeader,
        {
          title: "📦 Materials Used",
          section: "materials",
          badge: materials.length > 0 ? `${materials.length}` : void 0
        }
      ) }),
      expandedSections.materials && /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
        materials.map((mat, idx) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "p-3 border rounded-lg space-y-3 bg-muted/30",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxs("span", { className: "text-sm font-medium", children: [
                  "Material #",
                  idx + 1
                ] }),
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    type: "button",
                    variant: "ghost",
                    size: "sm",
                    onClick: () => removeMaterial(idx),
                    children: /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4 text-destructive" })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs(
                Select,
                {
                  value: mat.name,
                  onValueChange: (v) => updateMaterial(idx, "name", v),
                  children: [
                    /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select material" }) }),
                    /* @__PURE__ */ jsx(SelectContent, { children: COMMON_MATERIALS.map((m) => /* @__PURE__ */ jsx(SelectItem, { value: m, children: m }, m)) })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    type: "number",
                    min: 0,
                    placeholder: "Qty",
                    value: mat.quantity || "",
                    onChange: (e) => updateMaterial(idx, "quantity", Number(e.target.value))
                  }
                ),
                /* @__PURE__ */ jsxs(
                  Select,
                  {
                    value: mat.unit,
                    onValueChange: (v) => updateMaterial(idx, "unit", v),
                    children: [
                      /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, {}) }),
                      /* @__PURE__ */ jsx(SelectContent, { children: MATERIAL_UNITS.map((u) => /* @__PURE__ */ jsx(SelectItem, { value: u, children: u }, u)) })
                    ]
                  }
                )
              ] })
            ]
          },
          idx
        )),
        /* @__PURE__ */ jsxs(
          Button,
          {
            type: "button",
            variant: "outline",
            className: "w-full",
            onClick: addMaterial,
            children: [
              /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4 mr-2" }),
              "Add Material"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsx(
        SectionHeader,
        {
          title: "🦺 Safety Checklist",
          section: "safety",
          badge: `${Object.values(safety).filter(Boolean).length}/${Object.keys(safety).length}`
        }
      ) }),
      expandedSections.safety && /* @__PURE__ */ jsx(CardContent, { className: "space-y-3", children: Object.keys(safety).map((key) => /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
        /* @__PURE__ */ jsx(
          Checkbox,
          {
            id: key,
            checked: safety[key],
            onCheckedChange: () => toggleSafety(key)
          }
        ),
        /* @__PURE__ */ jsx(Label, { htmlFor: key, className: "text-sm cursor-pointer", children: safetyLabels[key] })
      ] }, key)) })
    ] }),
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsx(SectionHeader, { title: "📝 Additional Notes", section: "summary" }) }),
      expandedSections.summary && /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(
        Textarea,
        {
          placeholder: "Any additional observations, comments, or notes...",
          rows: 4,
          value: notes,
          onChange: (e) => setNotes(e.target.value)
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "fixed bottom-0 left-0 right-0 p-4 bg-background border-t shadow-lg z-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mx-auto flex gap-3", children: [
      /* @__PURE__ */ jsxs(
        Button,
        {
          variant: "outline",
          className: "flex-1",
          onClick: () => handleSubmit("draft"),
          children: [
            /* @__PURE__ */ jsx(Save, { className: "h-4 w-4 mr-2" }),
            "Save Draft"
          ]
        }
      ),
      /* @__PURE__ */ jsxs(Button, { className: "flex-1", onClick: () => handleSubmit("submitted"), children: [
        /* @__PURE__ */ jsx(Send, { className: "h-4 w-4 mr-2" }),
        "Submit Report"
      ] })
    ] }) })
  ] });
}
function InspectionNew() {
  const navigate = useNavigate();
  const { addInspection } = useInspections();
  const handleSubmit = (data, status) => {
    addInspection(data, status);
    navigate("/inspection");
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gray-50", children: [
    /* @__PURE__ */ jsx("div", { className: "bg-white border-b sticky top-0 z-40", children: /* @__PURE__ */ jsx("div", { className: "max-w-2xl mx-auto px-4 py-3", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
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
        /* @__PURE__ */ jsx("h1", { className: "text-lg font-bold", children: "New Inspection" }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Fill in the daily site report" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { className: "max-w-2xl mx-auto px-4 py-4", children: /* @__PURE__ */ jsx(InspectionForm, { onSubmit: handleSubmit }) })
  ] });
}
export {
  InspectionNew as default
};
