import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { useState, useEffect } from "react";
import { c as cn, S as SEO, D as Dialog, k as DialogTrigger, B as Button, l as DialogContent, m as DialogHeader, n as DialogTitle, I as Input, e as Select, f as SelectTrigger, g as SelectValue, h as SelectContent, i as SelectItem, d as Label, s as supabase, T as Textarea } from "../main.mjs";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { S as Slider, C as Checkbox } from "./checkbox-C8GxpjUe.js";
import { Plus, Phone, Building, FileCheck, CheckCircle2, XCircle, Trash2, IndianRupee, History } from "lucide-react";
import { B as Badge } from "./badge-DObGNgcP.js";
import "vite-react-ssg";
import "@radix-ui/react-toast";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "next-themes";
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
const Table = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ jsx("table", { ref, className: cn("w-full caption-bottom text-sm", className), ...props }) })
);
Table.displayName = "Table";
const TableHeader = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("thead", { ref, className: cn("[&_tr]:border-b", className), ...props })
);
TableHeader.displayName = "TableHeader";
const TableBody = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("tbody", { ref, className: cn("[&_tr:last-child]:border-0", className), ...props })
);
TableBody.displayName = "TableBody";
const TableFooter = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("tfoot", { ref, className: cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className), ...props })
);
TableFooter.displayName = "TableFooter";
const TableRow = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx(
    "tr",
    {
      ref,
      className: cn("border-b transition-colors data-[state=selected]:bg-muted hover:bg-muted/50", className),
      ...props
    }
  )
);
TableRow.displayName = "TableRow";
const TableHead = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx(
    "th",
    {
      ref,
      className: cn(
        "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
        className
      ),
      ...props
    }
  )
);
TableHead.displayName = "TableHead";
const TableCell = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("td", { ref, className: cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className), ...props })
);
TableCell.displayName = "TableCell";
const TableCaption = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("caption", { ref, className: cn("mt-4 text-sm text-muted-foreground", className), ...props })
);
TableCaption.displayName = "TableCaption";
const ADMIN_EMAIL = "info@fineglaze.com";
function Admin() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [files, setFiles] = useState({});
  const [loading, setLoading] = useState(true);
  const [createOpen, setCreateOpen] = useState(false);
  useState(false);
  const [filesOpen, setFilesOpen] = useState(false);
  const [timelineOpen, setTimelineOpen] = useState(false);
  const [financeOpen, setFinanceOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", address: "", architect: "" });
  const [selectedProject, setSelectedProject] = useState(null);
  const [newEvent, setNewEvent] = useState({ title: "", desc: "" });
  const [financeData, setFinanceData] = useState({ total: 0, paid: 0 });
  const [uploadReqApproval, setUploadReqApproval] = useState(false);
  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session || session.user.email !== ADMIN_EMAIL) {
        navigate("/portal");
        return;
      }
      fetchProjects();
    };
    checkAuth();
  }, []);
  const fetchProjects = async () => {
    setLoading(true);
    const { data } = await supabase.from("Clientproject").select("*").order("created_at", { ascending: false });
    if (data) {
      setProjects(data);
      data.forEach((p) => fetchFiles(p.id));
    }
    setLoading(false);
  };
  const fetchFiles = async (projectId) => {
    const { data } = await supabase.from("ProjectFiles").select("*").eq("project_id", projectId);
    if (data) setFiles((prev) => ({ ...prev, [projectId]: data }));
  };
  const handleCreate = async () => {
    const { error } = await supabase.from("Clientproject").insert({
      project_name: formData.name,
      client_email: formData.email,
      client_phone: formData.phone,
      site_address: formData.address,
      architect_name: formData.architect,
      status: "Initiated",
      progress: 0,
      total_amount: 0,
      paid_amount: 0,
      timeline: []
    });
    if (!error) {
      toast.success("Project created");
      setCreateOpen(false);
      setFormData({ name: "", email: "", phone: "", address: "", architect: "" });
      fetchProjects();
    } else toast.error(error.message);
  };
  const handleUpdate = async (id, updates) => {
    setProjects((prev) => prev.map((p) => p.id === id ? { ...p, ...updates } : p));
    await supabase.from("Clientproject").update(updates).eq("id", id);
    toast.success("Updated");
  };
  const handleFileUpload = async (e, projectId) => {
    var _a;
    if (!((_a = e.target.files) == null ? void 0 : _a.length)) return;
    const file = e.target.files[0];
    const fileName = `${projectId}/${Date.now()}-${file.name}`;
    toast.info("Uploading...");
    const { error: uploadError } = await supabase.storage.from("project-files").upload(fileName, file);
    if (uploadError) return toast.error("Upload failed");
    const { data: urlData } = supabase.storage.from("project-files").getPublicUrl(fileName);
    const { error: dbError } = await supabase.from("ProjectFiles").insert({
      project_id: projectId,
      name: file.name,
      url: urlData.publicUrl,
      requires_approval: uploadReqApproval
    });
    if (!dbError) {
      toast.success("File uploaded");
      fetchFiles(projectId);
      setUploadReqApproval(false);
    }
  };
  const handleAddTimeline = async () => {
    if (!selectedProject || !newEvent.title) return;
    const newEntry = { date: (/* @__PURE__ */ new Date()).toISOString(), title: newEvent.title, desc: newEvent.desc };
    const updatedTimeline = [newEntry, ...selectedProject.timeline || []];
    setProjects((prev) => prev.map((p) => p.id === selectedProject.id ? { ...p, timeline: updatedTimeline } : p));
    await supabase.from("Clientproject").update({ timeline: updatedTimeline }).eq("id", selectedProject.id);
    toast.success("Timeline added");
    setNewEvent({ title: "", desc: "" });
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-slate-50 p-8", children: [
    /* @__PURE__ */ jsx(SEO, { title: "Admin Hub | Fine Glaze", description: "Fine Glaze admin management hub", noindex: true }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto space-y-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold", children: "Admin Hub" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Manage projects, approvals & financials" }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2 mt-3", children: [
            /* @__PURE__ */ jsx("a", { href: "/admin/content", className: "text-xs px-3 py-1.5 bg-amber-100 text-amber-700 rounded-full font-medium hover:bg-amber-200 transition-colors", children: "🖼 Website Images" }),
            /* @__PURE__ */ jsx("a", { href: "/admin/blog-images", className: "text-xs px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full font-medium hover:bg-blue-100 transition-colors", children: "📰 Blog Images" }),
            /* @__PURE__ */ jsx("a", { href: "/admin/images", className: "text-xs px-3 py-1.5 bg-slate-100 text-slate-700 rounded-full font-medium hover:bg-slate-200 transition-colors", children: "🏗 Project Gallery" }),
            /* @__PURE__ */ jsx("a", { href: "/admin/logos", className: "text-xs px-3 py-1.5 bg-slate-100 text-slate-700 rounded-full font-medium hover:bg-slate-200 transition-colors", children: "🏢 Client Logos" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(Dialog, { open: createOpen, onOpenChange: setCreateOpen, children: [
          /* @__PURE__ */ jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(Button, { children: [
            /* @__PURE__ */ jsx(Plus, { className: "mr-2 h-4 w-4" }),
            " New Project"
          ] }) }),
          /* @__PURE__ */ jsxs(DialogContent, { children: [
            /* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsx(DialogTitle, { children: "New Project" }) }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-4 py-4", children: [
              /* @__PURE__ */ jsx(Input, { placeholder: "Project Name", onChange: (e) => setFormData({ ...formData, name: e.target.value }) }),
              /* @__PURE__ */ jsx(Input, { placeholder: "Client Email", onChange: (e) => setFormData({ ...formData, email: e.target.value }) }),
              /* @__PURE__ */ jsx(Input, { placeholder: "Phone", onChange: (e) => setFormData({ ...formData, phone: e.target.value }) }),
              /* @__PURE__ */ jsx(Input, { placeholder: "Address", onChange: (e) => setFormData({ ...formData, address: e.target.value }) }),
              /* @__PURE__ */ jsx(Input, { placeholder: "Architect", onChange: (e) => setFormData({ ...formData, architect: e.target.value }) }),
              /* @__PURE__ */ jsx(Button, { onClick: handleCreate, className: "w-full", children: "Create Project" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "bg-white rounded-md border shadow-sm", children: /* @__PURE__ */ jsxs(Table, { children: [
        /* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
          /* @__PURE__ */ jsx(TableHead, { children: "Project Details" }),
          /* @__PURE__ */ jsx(TableHead, { children: "Status" }),
          /* @__PURE__ */ jsx(TableHead, { children: "Approvals" }),
          /* @__PURE__ */ jsx(TableHead, { className: "text-right", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsx(TableBody, { children: projects.map((p) => /* @__PURE__ */ jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxs(TableCell, { children: [
            /* @__PURE__ */ jsx("div", { className: "font-medium", children: p.project_name }),
            /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: p.client_email }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-2 mt-1", children: [
              p.client_phone && /* @__PURE__ */ jsxs(Badge, { variant: "secondary", className: "text-[10px]", children: [
                /* @__PURE__ */ jsx(Phone, { size: 8, className: "mr-1" }),
                p.client_phone
              ] }),
              p.architect_name && /* @__PURE__ */ jsxs(Badge, { variant: "secondary", className: "text-[10px]", children: [
                /* @__PURE__ */ jsx(Building, { size: 8, className: "mr-1" }),
                p.architect_name
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(TableCell, { children: [
            /* @__PURE__ */ jsxs(Select, { defaultValue: p.status, onValueChange: (val) => handleUpdate(p.id, { status: val }), children: [
              /* @__PURE__ */ jsx(SelectTrigger, { className: "w-[140px] h-8", children: /* @__PURE__ */ jsx(SelectValue, {}) }),
              /* @__PURE__ */ jsx(SelectContent, { children: ["Initiated", "Measurements", "Fabrication", "Installation", "Completed"].map((s) => /* @__PURE__ */ jsx(SelectItem, { value: s, children: s }, s)) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mt-2", children: [
              /* @__PURE__ */ jsx(Slider, { defaultValue: [p.progress], max: 100, step: 5, className: "w-20", onValueCommit: (v) => handleUpdate(p.id, { progress: v[0] }) }),
              /* @__PURE__ */ jsxs("span", { className: "text-xs", children: [
                p.progress,
                "%"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx(TableCell, { children: (files[p.id] || []).filter((f) => f.status === "Pending" && f.requires_approval).length > 0 ? /* @__PURE__ */ jsxs(Badge, { variant: "destructive", children: [
            (files[p.id] || []).filter((f) => f.status === "Pending" && f.requires_approval).length,
            " Pending"
          ] }) : /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "bg-green-100 text-green-800", children: "All Clear" }) }),
          /* @__PURE__ */ jsxs(TableCell, { className: "text-right flex justify-end gap-2", children: [
            /* @__PURE__ */ jsxs(Dialog, { open: filesOpen && (selectedProject == null ? void 0 : selectedProject.id) === p.id, onOpenChange: (o) => {
              setFilesOpen(o);
              if (o) setSelectedProject(p);
            }, children: [
              /* @__PURE__ */ jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "outline", size: "icon", title: "Files", children: /* @__PURE__ */ jsx(FileCheck, { size: 16 }) }) }),
              /* @__PURE__ */ jsxs(DialogContent, { className: "max-w-2xl", children: [
                /* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsx(DialogTitle, { children: "Documents" }) }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-50 p-4 rounded border space-y-3", children: [
                    /* @__PURE__ */ jsx(Label, { children: "Upload New" }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                      /* @__PURE__ */ jsx(Input, { type: "file", onChange: (e) => handleFileUpload(e, p.id) }),
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                        /* @__PURE__ */ jsx(Checkbox, { id: "req", checked: uploadReqApproval, onCheckedChange: (c) => setUploadReqApproval(!!c) }),
                        /* @__PURE__ */ jsx(Label, { htmlFor: "req", children: "Require Approval?" })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "space-y-2", children: (files[p.id] || []).map((f) => /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center border p-2 rounded text-sm", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx("a", { href: f.url, target: "_blank", className: "text-blue-600 hover:underline", children: f.name }),
                      f.status === "Approved" && /* @__PURE__ */ jsx(CheckCircle2, { size: 14, className: "text-green-500" }),
                      f.status === "Rejected" && /* @__PURE__ */ jsx(XCircle, { size: 14, className: "text-red-500" }),
                      f.status === "Pending" && f.requires_approval && /* @__PURE__ */ jsx(Badge, { variant: "outline", children: "Pending" })
                    ] }),
                    /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", onClick: async () => {
                      await supabase.from("ProjectFiles").delete().eq("id", f.id);
                      fetchFiles(p.id);
                    }, children: /* @__PURE__ */ jsx(Trash2, { size: 14, className: "text-red-500" }) })
                  ] }, f.id)) })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs(Dialog, { open: financeOpen && (selectedProject == null ? void 0 : selectedProject.id) === p.id, onOpenChange: (o) => {
              setFinanceOpen(o);
              if (o) {
                setSelectedProject(p);
                setFinanceData({ total: p.total_amount, paid: p.paid_amount });
              }
            }, children: [
              /* @__PURE__ */ jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "outline", size: "icon", title: "Finance", children: /* @__PURE__ */ jsx(IndianRupee, { size: 16, className: "text-green-600" }) }) }),
              /* @__PURE__ */ jsxs(DialogContent, { children: [
                /* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsx(DialogTitle, { children: "Financials" }) }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-4 py-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsx(Label, { children: "Total (₹)" }),
                    /* @__PURE__ */ jsx(Input, { type: "number", value: financeData.total, onChange: (e) => setFinanceData({ ...financeData, total: Number(e.target.value) }) })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsx(Label, { children: "Paid (₹)" }),
                    /* @__PURE__ */ jsx(Input, { type: "number", value: financeData.paid, onChange: (e) => setFinanceData({ ...financeData, paid: Number(e.target.value) }) })
                  ] }),
                  /* @__PURE__ */ jsx(Button, { onClick: () => {
                    handleUpdate(p.id, { total_amount: financeData.total, paid_amount: financeData.paid });
                    setFinanceOpen(false);
                  }, children: "Save" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs(Dialog, { open: timelineOpen && (selectedProject == null ? void 0 : selectedProject.id) === p.id, onOpenChange: (o) => {
              setTimelineOpen(o);
              if (o) setSelectedProject(p);
            }, children: [
              /* @__PURE__ */ jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "outline", size: "icon", title: "Timeline", children: /* @__PURE__ */ jsx(History, { size: 16, className: "text-purple-600" }) }) }),
              /* @__PURE__ */ jsxs(DialogContent, { children: [
                /* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsx(DialogTitle, { children: "Timeline" }) }),
                /* @__PURE__ */ jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxs("div", { className: "bg-slate-50 p-4 rounded border space-y-3", children: [
                  /* @__PURE__ */ jsx(Input, { placeholder: "Title", value: newEvent.title, onChange: (e) => setNewEvent({ ...newEvent, title: e.target.value }) }),
                  /* @__PURE__ */ jsx(Textarea, { placeholder: "Desc", value: newEvent.desc, onChange: (e) => setNewEvent({ ...newEvent, desc: e.target.value }) }),
                  /* @__PURE__ */ jsx(Button, { onClick: handleAddTimeline, size: "sm", className: "w-full", children: "Add Entry" })
                ] }) })
              ] })
            ] })
          ] })
        ] }, p.id)) })
      ] }) })
    ] })
  ] });
}
export {
  Admin as default
};
