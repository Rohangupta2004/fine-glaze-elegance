import { ViteReactSSG } from "vite-react-ssg";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import * as React from "react";
import { Component, useState, useEffect, lazy, Suspense } from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva } from "class-variance-authority";
import { X, ChevronDown, ChevronUp, Check, Star, Send, CheckCircle2, Menu, Linkedin, MapPin, Phone, Mail, ArrowRight, Play, Trophy, Eye, ExternalLink, PhoneCall, Clock } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { useTheme } from "next-themes";
import { Toaster as Toaster$2, toast as toast$1 } from "sonner";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useLocation, Link, Outlet } from "react-router-dom";
import { Slot } from "@radix-ui/react-slot";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import * as LabelPrimitive from "@radix-ui/react-label";
import * as SelectPrimitive from "@radix-ui/react-select";
import { createClient } from "@supabase/supabase-js";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { injectSpeedInsights } from "@vercel/speed-insights";
const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1e6;
let count = 0;
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}
const toastTimeouts = /* @__PURE__ */ new Map();
const addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId
    });
  }, TOAST_REMOVE_DELAY);
  toastTimeouts.set(toastId, timeout);
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT)
      };
    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) => t.id === action.toast.id ? { ...t, ...action.toast } : t)
      };
    case "DISMISS_TOAST": {
      const { toastId } = action;
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast2) => {
          addToRemoveQueue(toast2.id);
        });
      }
      return {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === toastId || toastId === void 0 ? {
            ...t,
            open: false
          } : t
        )
      };
    }
    case "REMOVE_TOAST":
      if (action.toastId === void 0) {
        return {
          ...state,
          toasts: []
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId)
      };
  }
};
const listeners = [];
let memoryState = { toasts: [] };
function dispatch(action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}
function toast({ ...props }) {
  const id = genId();
  const update = (props2) => dispatch({
    type: "UPDATE_TOAST",
    toast: { ...props2, id }
  });
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });
  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      }
    }
  });
  return {
    id,
    dismiss,
    update
  };
}
function useToast() {
  const [state, setState] = React.useState(memoryState);
  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);
  return {
    ...state,
    toast,
    dismiss: (toastId) => dispatch({ type: "DISMISS_TOAST", toastId })
  };
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const ToastProvider = ToastPrimitives.Provider;
const ToastViewport = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Viewport,
  {
    ref,
    className: cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    ),
    ...props
  }
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;
const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
const Toast = React.forwardRef(({ className, variant, ...props }, ref) => {
  return /* @__PURE__ */ jsx(ToastPrimitives.Root, { ref, className: cn(toastVariants({ variant }), className), ...props });
});
Toast.displayName = ToastPrimitives.Root.displayName;
const ToastAction = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Action,
  {
    ref,
    className: cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",
      className
    ),
    ...props
  }
));
ToastAction.displayName = ToastPrimitives.Action.displayName;
const ToastClose = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Close,
  {
    ref,
    className: cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    ),
    "toast-close": "",
    ...props,
    children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
  }
));
ToastClose.displayName = ToastPrimitives.Close.displayName;
const ToastTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(ToastPrimitives.Title, { ref, className: cn("text-sm font-semibold", className), ...props }));
ToastTitle.displayName = ToastPrimitives.Title.displayName;
const ToastDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(ToastPrimitives.Description, { ref, className: cn("text-sm opacity-90", className), ...props }));
ToastDescription.displayName = ToastPrimitives.Description.displayName;
function Toaster$1() {
  const { toasts } = useToast();
  return /* @__PURE__ */ jsxs(ToastProvider, { children: [
    toasts.map(function({ id, title, description, action, ...props }) {
      return /* @__PURE__ */ jsxs(Toast, { ...props, children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-1", children: [
          title && /* @__PURE__ */ jsx(ToastTitle, { children: title }),
          description && /* @__PURE__ */ jsx(ToastDescription, { children: description })
        ] }),
        action,
        /* @__PURE__ */ jsx(ToastClose, {})
      ] }, id);
    }),
    /* @__PURE__ */ jsx(ToastViewport, {})
  ] });
}
const Toaster = ({ ...props }) => {
  const { theme = "system" } = useTheme();
  return /* @__PURE__ */ jsx(
    Toaster$2,
    {
      theme,
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
const TooltipProvider = TooltipPrimitive.Provider;
const TooltipContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(
  TooltipPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught:", error, info);
  }
  render() {
    if (this.state.hasError) {
      return /* @__PURE__ */ jsx("div", { className: "min-h-screen flex items-center justify-center bg-stone-50", children: /* @__PURE__ */ jsxs("div", { className: "text-center space-y-4 p-8", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-stone-800", children: "Something went wrong" }),
        /* @__PURE__ */ jsx("p", { className: "text-stone-500 max-w-md", children: "We're sorry for the inconvenience. Please try refreshing the page." }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => window.location.reload(),
            className: "px-6 py-3 bg-stone-900 text-white font-medium hover:bg-stone-800 transition-colors",
            children: "Refresh Page"
          }
        )
      ] }) });
    }
    return this.props.children;
  }
}
const PageLoader = () => /* @__PURE__ */ jsx("div", { className: "min-h-screen flex items-center justify-center bg-background", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-4", children: [
  /* @__PURE__ */ jsx("div", { className: "w-10 h-10 border-4 border-stone-200 border-t-amber-600 rounded-full animate-spin" }),
  /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground font-medium", children: "Loading…" })
] }) });
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-white bg-white text-slate-900 hover:bg-white/90",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxs(
    DialogPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxs(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none", children: [
          /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = DialogPrimitive.Content.displayName;
const DialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsx("div", { className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className), ...props });
DialogHeader.displayName = "DialogHeader";
const DialogTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
const DialogDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(DialogPrimitive.Description, { ref, className: cn("text-sm text-muted-foreground", className), ...props }));
DialogDescription.displayName = DialogPrimitive.Description.displayName;
const Input = React.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-10 w-full border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
const labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
const Label = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(LabelPrimitive.Root, { ref, className: cn(labelVariants(), className), ...props }));
Label.displayName = LabelPrimitive.Root.displayName;
const Select = SelectPrimitive.Root;
const SelectValue = SelectPrimitive.Value;
const SelectTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  SelectPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex h-10 w-full items-center justify-between border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
const SelectScrollUpButton = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.ScrollUpButton,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsx(ChevronUp, { className: "h-4 w-4" })
  }
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
const SelectScrollDownButton = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.ScrollDownButton,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4" })
  }
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
const SelectContent = React.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsx(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs(
  SelectPrimitive.Content,
  {
    ref,
    className: cn(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    ),
    position,
    ...props,
    children: [
      /* @__PURE__ */ jsx(SelectScrollUpButton, {}),
      /* @__PURE__ */ jsx(
        SelectPrimitive.Viewport,
        {
          className: cn(
            "p-1",
            position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children
        }
      ),
      /* @__PURE__ */ jsx(SelectScrollDownButton, {})
    ]
  }
) }));
SelectContent.displayName = SelectPrimitive.Content.displayName;
const SelectLabel = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(SelectPrimitive.Label, { ref, className: cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className), ...props }));
SelectLabel.displayName = SelectPrimitive.Label.displayName;
const SelectItem = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  SelectPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ jsx(SelectPrimitive.ItemText, { children })
    ]
  }
));
SelectItem.displayName = SelectPrimitive.Item.displayName;
const SelectSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(SelectPrimitive.Separator, { ref, className: cn("-mx-1 my-1 h-px bg-muted", className), ...props }));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;
const supabaseUrl = "https://gcmrhalbkvoqlclrxjya.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdjbXJoYWxia3ZvcWxjbHJ4anlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg2OTk5MDIsImV4cCI6MjA5NDI3NTkwMn0.XjHjEy-NdW0pCM_xZoA38uwOR4nZC_DnxBSzNPp1HkQ";
const isSupabaseConfigured = true;
const supabase = createClient(supabaseUrl, supabaseAnonKey);
const projectTypes$1 = [
  "Structural Glazing",
  "Curtain Wall Systems",
  "Aluminium Doors & Windows",
  "ACP Cladding",
  "Glass Railings",
  "Facade Maintenance",
  "Skylights & Canopies",
  "Aluminium Louvers",
  "Glass Partitions",
  "Other"
];
function QuoteModal({ open, onOpenChange }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    projectType: ""
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.projectType) {
      toast$1.error("Please select a project type");
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "74dce7dc-85a9-4479-ab00-bd002f23409a",
          name: formData.name,
          phone: formData.phone,
          project_type: formData.projectType,
          subject: "Quick Quote – Fine Glaze Website (Header)",
          from_name: "Fine Glaze Website"
        })
      });
      const data = await res.json();
      if (isSupabaseConfigured) {
        try {
          await supabase.from("contact_leads").insert({
            name: formData.name,
            phone: formData.phone,
            project_type: formData.projectType,
            source: "website_header_quote"
          });
        } catch {
          console.warn("Supabase lead save failed (non-blocking)");
        }
      }
      if (data.success) {
        setIsSubmitted(true);
        toast$1.success("We'll call you back within 30 minutes!");
      } else {
        throw new Error("Submission failed");
      }
    } catch {
      toast$1.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleClose = (open2) => {
    if (!open2) {
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", phone: "", projectType: "" });
      }, 200);
    }
    onOpenChange(open2);
  };
  return /* @__PURE__ */ jsx(Dialog, { open, onOpenChange: handleClose, children: /* @__PURE__ */ jsx(DialogContent, { className: "sm:max-w-[420px] p-0 overflow-hidden", children: !isSubmitted ? /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-stone-900 px-6 pt-6 pb-4", children: [
      /* @__PURE__ */ jsxs(DialogHeader, { children: [
        /* @__PURE__ */ jsx(DialogTitle, { className: "text-white text-lg font-bold", children: "Get a Free Quote" }),
        /* @__PURE__ */ jsx(DialogDescription, { className: "text-stone-400 text-sm", children: "Tell us what you need — we'll call back within 30 minutes." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mt-3", children: [
        /* @__PURE__ */ jsx("div", { className: "flex", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(
          Star,
          {
            size: 12,
            className: "text-amber-400 fill-amber-400"
          },
          i
        )) }),
        /* @__PURE__ */ jsx("span", { className: "text-stone-400 text-xs", children: "5.0 Google · Embassy REIT Vendor" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "px-6 pb-6 pt-2 space-y-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "quote-name", className: "text-sm font-medium", children: "Your Name" }),
        /* @__PURE__ */ jsx(
          Input,
          {
            id: "quote-name",
            name: "name",
            placeholder: "Rajesh Kumar",
            value: formData.name,
            onChange: (e) => setFormData((prev) => ({ ...prev, name: e.target.value })),
            required: true,
            className: "h-10"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx(Label, { htmlFor: "quote-phone", className: "text-sm font-medium", children: "Phone / WhatsApp" }),
        /* @__PURE__ */ jsx(
          Input,
          {
            id: "quote-phone",
            name: "phone",
            type: "tel",
            placeholder: "+91 98765 43210",
            value: formData.phone,
            onChange: (e) => setFormData((prev) => ({ ...prev, phone: e.target.value })),
            required: true,
            className: "h-10"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx(Label, { className: "text-sm font-medium", children: "Project Type" }),
        /* @__PURE__ */ jsxs(
          Select,
          {
            value: formData.projectType,
            onValueChange: (v) => setFormData((prev) => ({ ...prev, projectType: v })),
            children: [
              /* @__PURE__ */ jsx(SelectTrigger, { className: "h-10", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select service..." }) }),
              /* @__PURE__ */ jsx(SelectContent, { children: projectTypes$1.map((type) => /* @__PURE__ */ jsx(SelectItem, { value: type, children: type }, type)) })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        Button,
        {
          type: "submit",
          disabled: isSubmitting,
          className: "w-full bg-amber-600 hover:bg-amber-700 text-white h-11 font-semibold gap-2",
          children: isSubmitting ? "Sending..." : /* @__PURE__ */ jsxs(Fragment, { children: [
            "Get Free Quote ",
            /* @__PURE__ */ jsx(Send, { size: 15 })
          ] })
        }
      ),
      /* @__PURE__ */ jsxs("p", { className: "text-center text-stone-400 text-[11px]", children: [
        "Or WhatsApp us directly at",
        " ",
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://wa.me/918369233566?text=Hi%20Fine%20Glaze%2C%20I%20need%20a%20quote.",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "text-amber-600 font-medium hover:underline",
            children: "+91 83692 33566"
          }
        )
      ] })
    ] })
  ] }) : (
    /* ── Success state ── */
    /* @__PURE__ */ jsxs("div", { className: "px-6 py-12 text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "inline-flex items-center justify-center w-14 h-14 bg-green-100 rounded-full mb-4", children: /* @__PURE__ */ jsx(CheckCircle2, { size: 28, className: "text-green-600" }) }),
      /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-stone-900 mb-2", children: "We've got your details!" }),
      /* @__PURE__ */ jsx("p", { className: "text-stone-500 text-sm mb-6", children: "Our team will call you back within 30 minutes during business hours (Mon–Sat, 9 AM – 7 PM)." }),
      /* @__PURE__ */ jsx(
        Button,
        {
          onClick: () => handleClose(false),
          variant: "outline",
          className: "px-8",
          children: "Close"
        }
      )
    ] })
  ) }) });
}
const serviceLinks = [
  { href: "/aluminium-facade", label: "Aluminium Facade Systems" },
  { href: "/curtain-wall-systems", label: "Curtain Wall Systems" },
  { href: "/structural-glazing", label: "Structural Glazing" },
  { href: "/acp-aluminium-cladding", label: "ACP Cladding" },
  { href: "/glass-railings", label: "Glass Railings" },
  { href: "/skylights-canopies", label: "Skylights & Canopies" },
  { href: "/aluminium-louvers", label: "Aluminium Louvers" },
  { href: "/glass-partitions", label: "Glass Partitions" },
  { href: "/maintenance-services", label: "Facade Maintenance" }
];
const Header = ({ darkHero = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServiceOpen(false);
  }, [location.pathname]);
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);
  const getLinkClass = (path) => cn(
    "px-3 py-2 text-sm font-medium transition-colors",
    location.pathname === path ? "bg-primary text-white" : isScrolled ? "text-slate-700 hover:bg-slate-100" : darkHero ? "text-white hover:bg-white/20" : "text-slate-800 hover:bg-slate-100/80"
  );
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "header",
      {
        className: cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "bg-white/95 backdrop-blur-md py-2 md:py-3 shadow-sm border-b" : "bg-transparent py-3 md:py-5"
        ),
        children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 flex items-center justify-between", children: [
          /* @__PURE__ */ jsx(Link, { to: "/", className: "flex-shrink-0", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "/Logofg.webp",
              alt: "Fine Glaze Logo",
              className: cn(
                "h-10 md:h-12 w-auto object-contain transition-all duration-300",
                darkHero && !isScrolled && "brightness-0 invert"
              )
            }
          ) }),
          /* @__PURE__ */ jsxs("nav", { className: "hidden lg:flex items-center gap-1", children: [
            /* @__PURE__ */ jsx(Link, { to: "/", className: getLinkClass("/"), children: "Home" }),
            /* @__PURE__ */ jsx(Link, { to: "/about", className: getLinkClass("/about"), children: "About" }),
            /* @__PURE__ */ jsxs(
              "div",
              {
                className: "relative flex items-center",
                onMouseEnter: () => setIsServiceOpen(true),
                onMouseLeave: () => setIsServiceOpen(false),
                children: [
                  /* @__PURE__ */ jsx(Link, { to: "/services", className: getLinkClass("/services"), children: "Services" }),
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      onClick: () => setIsServiceOpen(!isServiceOpen),
                      className: cn(
                        "p-1",
                        isScrolled ? "text-slate-700" : darkHero ? "text-white" : "text-slate-800"
                      ),
                      children: /* @__PURE__ */ jsx(ChevronDown, { size: 14 })
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: cn(
                        "absolute left-0 top-full pt-2 w-64 transition-all duration-200",
                        isServiceOpen ? "opacity-100 visible" : "opacity-0 invisible"
                      ),
                      children: /* @__PURE__ */ jsx("div", { className: "bg-white shadow-xl border p-2", children: serviceLinks.map((service) => /* @__PURE__ */ jsx(
                        Link,
                        {
                          to: service.href,
                          className: "block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50",
                          children: service.label
                        },
                        service.href
                      )) })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsx(Link, { to: "/portfolio", className: getLinkClass("/portfolio"), children: "Portfolio" }),
            /* @__PURE__ */ jsx(Link, { to: "/blog", className: getLinkClass("/blog"), children: "Blog" }),
            /* @__PURE__ */ jsx(Link, { to: "/contact", className: getLinkClass("/contact"), children: "Contact" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "hidden lg:flex items-center gap-3", children: /* @__PURE__ */ jsx(
            Button,
            {
              onClick: () => setIsQuoteOpen(true),
              className: "bg-primary hover:bg-primary/90 text-primary-foreground",
              children: "Get a Quote"
            }
          ) }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setIsMobileMenuOpen(true),
              className: cn(
                "lg:hidden p-2",
                isScrolled ? "text-slate-900" : darkHero ? "text-white" : "text-slate-900"
              ),
              children: /* @__PURE__ */ jsx(Menu, { size: 24 })
            }
          )
        ] })
      }
    ),
    isMobileMenuOpen && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "fixed inset-0 z-[55] bg-black/40 backdrop-blur-sm lg:hidden",
          onClick: () => setIsMobileMenuOpen(false)
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "fixed top-0 left-0 right-0 z-[60] bg-white shadow-xl max-h-[80vh] overflow-y-auto lg:hidden animate-in slide-in-from-top duration-200", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between px-4 py-4 border-b sticky top-0 bg-white z-10", children: [
          /* @__PURE__ */ jsx("span", { className: "font-semibold text-lg", children: "Menu" }),
          /* @__PURE__ */ jsx("button", { onClick: () => setIsMobileMenuOpen(false), children: /* @__PURE__ */ jsx(X, { size: 24 }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "px-4 py-4 space-y-3", children: [
          /* @__PURE__ */ jsx(Link, { to: "/", className: "block text-base font-medium py-1", children: "Home" }),
          /* @__PURE__ */ jsx(Link, { to: "/about", className: "block text-base font-medium py-1", children: "About" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs uppercase text-slate-400 mb-1", children: "Services" }),
            serviceLinks.map((s) => /* @__PURE__ */ jsx(
              Link,
              {
                to: s.href,
                className: "block py-1.5 text-sm text-slate-700",
                children: s.label
              },
              s.href
            ))
          ] }),
          /* @__PURE__ */ jsx(Link, { to: "/portfolio", className: "block text-base font-medium py-1", children: "Portfolio" }),
          /* @__PURE__ */ jsx(Link, { to: "/blog", className: "block text-base font-medium py-1", children: "Blog" }),
          /* @__PURE__ */ jsx(Link, { to: "/contact", className: "block text-base font-medium py-1", children: "Contact" }),
          /* @__PURE__ */ jsx("div", { className: "pt-3 pb-2", children: /* @__PURE__ */ jsx(
            Button,
            {
              onClick: () => {
                setIsMobileMenuOpen(false);
                setTimeout(() => setIsQuoteOpen(true), 200);
              },
              className: "w-full bg-primary text-primary-foreground",
              children: "Get a Quote"
            }
          ) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(QuoteModal, { open: isQuoteOpen, onOpenChange: setIsQuoteOpen })
  ] });
};
const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" }
];
const services = [
  { label: "Aluminium Facade", href: "/aluminium-facade" },
  { label: "Curtain Wall Systems", href: "/curtain-wall-systems" },
  { label: "Structural Glazing", href: "/structural-glazing" },
  { label: "ACP Cladding", href: "/acp-aluminium-cladding" },
  { label: "Glass Railings", href: "/glass-railings" },
  { label: "Facade Maintenance", href: "/maintenance-services" }
];
const Footer = () => {
  return /* @__PURE__ */ jsxs(
    "footer",
    {
      className: "text-white",
      style: { background: "linear-gradient(180deg, hsl(25 25% 12%) 0%, hsl(20 20% 8%) 100%)" },
      children: [
        /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 py-16", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-5", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: "Logofg.webp",
                alt: "Fine Glaze Logo",
                className: "h-12 w-auto brightness-0 invert"
              }
            ),
            /* @__PURE__ */ jsx("p", { className: "text-white/70 text-sm leading-relaxed", children: "Precision facade fabrication and installation across India. Transforming architectural visions into iconic glass & aluminium facades — delivered with award-winning quality since establishment." }),
            /* @__PURE__ */ jsx("div", { className: "flex gap-3 pt-2", children: /* @__PURE__ */ jsx(
              "a",
              {
                href: "https://www.linkedin.com/company/fine-glaze",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-amber-600 transition-colors",
                "aria-label": "LinkedIn",
                children: /* @__PURE__ */ jsx(Linkedin, { size: 18 })
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold mb-6", children: "Quick Links" }),
            /* @__PURE__ */ jsxs("ul", { className: "space-y-3", children: [
              quickLinks.map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                Link,
                {
                  to: link.href,
                  className: "text-white/70 hover:text-amber-400 transition-colors text-sm",
                  children: link.label
                }
              ) }, link.href)),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                Link,
                {
                  to: "/faq",
                  className: "text-white/70 hover:text-amber-400 transition-colors text-sm",
                  children: "FAQ"
                }
              ) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold mb-6", children: "Our Services" }),
            /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: services.map((service) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
              Link,
              {
                to: service.href,
                className: "text-white/70 hover:text-amber-400 transition-colors text-sm",
                children: service.label
              }
            ) }, service.href)) })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold mb-6", children: "Contact Us" }),
            /* @__PURE__ */ jsxs("ul", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsx(MapPin, { size: 18, className: "text-amber-500 mt-1 shrink-0" }),
                /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: "https://maps.app.goo.gl/JDF3ESXQGHtwKoAr6",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "text-white/70 hover:text-white text-sm transition-colors",
                    children: [
                      "Shop No. 1 & 2, Jagdamba Bhawan Marg,",
                      /* @__PURE__ */ jsx("br", {}),
                      "Near Sunshine Hills, Shree Siddhivinayak Meera,",
                      /* @__PURE__ */ jsx("br", {}),
                      "Undri, Pune – 411060"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsx(Phone, { size: 18, className: "text-amber-500 shrink-0" }),
                /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: "tel:+918369233566",
                    className: "text-white/70 hover:text-white text-sm transition-colors",
                    children: [
                      "+91 8369233566",
                      /* @__PURE__ */ jsx("br", {}),
                      "+91 02068299428"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsx(Mail, { size: 18, className: "text-amber-500 shrink-0" }),
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "mailto:info@fineglaze.com",
                    className: "text-white/70 hover:text-white text-sm transition-colors",
                    children: "info@fineglaze.com"
                  }
                )
              ] })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "border-t border-white/10", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center gap-3 text-sm text-white/50", children: [
            /* @__PURE__ */ jsxs("p", { children: [
              "© ",
              (/* @__PURE__ */ new Date()).getFullYear(),
              " Fine Glaze. All rights reserved."
            ] }),
            /* @__PURE__ */ jsx("span", { className: "hidden sm:inline text-white/20", children: "|" }),
            /* @__PURE__ */ jsx("p", { children: "GST No: 27BFJPG1853A1ZU" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-6 text-sm", children: [
            /* @__PURE__ */ jsx(Link, { to: "/privacy-policy", className: "text-white/50 hover:text-amber-400 transition-colors", children: "Privacy Policy" }),
            /* @__PURE__ */ jsx(Link, { to: "/terms-of-service", className: "text-white/50 hover:text-amber-400 transition-colors", children: "Terms of Service" })
          ] })
        ] }) })
      ]
    }
  );
};
const WHATSAPP_NUMBER = "918369233566";
const WHATSAPP_MESSAGE = "Hello Fine Glaze, I'm interested in your facade services. Please share details.";
function FloatingCTA() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
  return /* @__PURE__ */ jsxs(
    "a",
    {
      href: whatsappUrl,
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": "Chat on WhatsApp",
      className: "fixed bottom-16 right-6 lg:bottom-6 z-50 flex items-center justify-center group",
      children: [
        /* @__PURE__ */ jsx("span", { className: "absolute w-14 h-14 rounded-full bg-green-400 animate-ping opacity-30" }),
        /* @__PURE__ */ jsx("span", { className: "absolute w-14 h-14 rounded-full bg-green-400 animate-ping opacity-20 animation-delay-300", style: { animationDelay: "0.4s" } }),
        /* @__PURE__ */ jsx("div", { className: "relative w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-colors duration-200", children: /* @__PURE__ */ jsx(
          "svg",
          {
            viewBox: "0 0 32 32",
            fill: "white",
            className: "w-7 h-7 group-hover:scale-110 transition-transform duration-200",
            children: /* @__PURE__ */ jsx("path", { d: "M16.004 3.2C8.924 3.2 3.2 8.924 3.2 16.004c0 2.26.588 4.468 1.708 6.416L3.2 28.8l6.58-1.724A12.73 12.73 0 0 0 16.004 28.8c7.08 0 12.796-5.724 12.796-12.796S23.084 3.2 16.004 3.2Zm0 23.392a10.55 10.55 0 0 1-5.384-1.472l-.384-.228-3.996 1.048 1.068-3.9-.252-.4a10.53 10.53 0 0 1-1.616-5.636c0-5.832 4.744-10.576 10.576-10.576 5.828 0 10.572 4.744 10.572 10.576-.004 5.836-4.748 10.588-10.584 10.588Zm5.8-7.924c-.316-.16-1.876-.928-2.168-1.032-.292-.108-.504-.16-.716.16-.212.316-.824 1.032-1.008 1.244-.188.212-.372.24-.688.08-.316-.16-1.336-.492-2.544-1.572-.94-.84-1.576-1.876-1.76-2.192-.188-.316-.02-.488.14-.644.144-.14.316-.372.476-.556.16-.188.212-.316.316-.532.108-.212.056-.4-.028-.556-.08-.16-.716-1.724-.98-2.36-.256-.62-.52-.536-.716-.544-.188-.008-.4-.012-.612-.012a1.17 1.17 0 0 0-.848.4c-.292.316-1.112 1.084-1.112 2.648 0 1.564 1.14 3.076 1.296 3.288.16.212 2.24 3.42 5.428 4.796.76.328 1.352.524 1.816.668.76.244 1.456.208 2.004.128.612-.092 1.876-.768 2.14-1.508.268-.744.268-1.38.188-1.508-.08-.132-.292-.212-.612-.372Z" })
          }
        ) }),
        /* @__PURE__ */ jsx("span", { className: "absolute right-full mr-3 px-3 py-1.5 bg-slate-900 text-white text-xs font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none", children: "Chat with us" })
      ]
    }
  );
}
function MobileBottomCTA() {
  return /* @__PURE__ */ jsx("div", { className: "fixed bottom-0 inset-x-0 z-40 lg:hidden bg-stone-900/95 backdrop-blur-sm border-t border-stone-700 safe-bottom", children: /* @__PURE__ */ jsxs(
    "a",
    {
      href: "tel:+918369233566",
      className: "flex items-center justify-center gap-2 py-3 text-white text-sm font-semibold hover:bg-amber-700 transition-colors",
      children: [
        /* @__PURE__ */ jsx(Phone, { size: 16 }),
        "Call Now"
      ]
    }
  ) });
}
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}
const Layout = ({ children, darkHero = false }) => {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsx(ScrollToTop, {}),
    /* @__PURE__ */ jsx(Header, { darkHero }),
    !darkHero && /* @__PURE__ */ jsx("div", { className: "h-16 lg:h-20" }),
    /* @__PURE__ */ jsx("main", { className: "flex-1", children }),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(FloatingCTA, {}),
    /* @__PURE__ */ jsx(MobileBottomCTA, {})
  ] });
};
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};
const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};
const slideRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};
const scaleUp = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};
const stagger = (staggerDelay = 0.1) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staggerDelay
    }
  }
});
const viewport = { once: true, amount: 0.15 };
const BUCKET$1 = "project-images";
const SITE_MEDIA_MANIFEST = "site-media/manifest.json";
let cachedMap = null;
async function fetchSiteMediaMap() {
  try {
    const { data, error } = await supabase.storage.from(BUCKET$1).download(`${SITE_MEDIA_MANIFEST}?t=${Date.now()}`);
    if (error || !data) return {};
    const text = await data.text();
    const parsed = JSON.parse(text);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}
function useSiteMedia() {
  const [mediaMap, setMediaMap] = useState(cachedMap ?? {});
  const [loading, setLoading] = useState(!cachedMap);
  useEffect(() => {
    if (cachedMap) return;
    (async () => {
      const map = await fetchSiteMediaMap();
      cachedMap = map;
      setMediaMap(map);
      setLoading(false);
    })();
  }, []);
  const getMedia = (key, fallback) => {
    var _a;
    return ((_a = mediaMap[key]) == null ? void 0 : _a.url) || fallback;
  };
  return { mediaMap, loading, getMedia };
}
const HeroSection = () => {
  const { getMedia } = useSiteMedia();
  const poster = getMedia("home_hero_poster", "/Unitized.webp");
  const videoSrc = getMedia(
    "home_hero_video",
    "https://www.pexels.com/download/video/26737896/"
  );
  return /* @__PURE__ */ jsxs("section", { className: "relative min-h-screen flex items-center justify-center overflow-hidden", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src: poster,
        alt: "Fine Glaze facade installation",
        className: "absolute inset-0 w-full h-full object-cover",
        loading: "eager"
      }
    ),
    /* @__PURE__ */ jsx(
      "video",
      {
        className: "absolute inset-0 w-full h-full object-cover",
        autoPlay: true,
        muted: true,
        loop: true,
        playsInline: true,
        poster,
        src: videoSrc
      },
      videoSrc
    ),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 hero-overlay" }),
    /* @__PURE__ */ jsx("div", { className: "relative z-10 container mx-auto px-4 text-center", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: "max-w-4xl mx-auto space-y-8",
        initial: "hidden",
        animate: "visible",
        variants: {
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } }
        },
        children: [
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              variants: fadeUp,
              className: "inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/40 backdrop-blur-md text-sm text-white/75 border border-white/10",
              children: [
                /* @__PURE__ */ jsx("span", { className: "w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" }),
                "India's Trusted Facade Experts"
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.h1,
            {
              variants: fadeUp,
              className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight",
              children: [
                "Crafting",
                " ",
                /* @__PURE__ */ jsx("span", { className: "text-gradient-gold", children: "Iconic Facades" }),
                /* @__PURE__ */ jsx("br", { className: "hidden md:block" }),
                "That",
                " ",
                /* @__PURE__ */ jsx("span", { className: "text-gradient-light", children: "Define Skylines" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.p,
            {
              variants: fadeUp,
              className: "text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed",
              children: [
                "Premium glass & aluminium facade fabrication, installation, and maintenance — delivered with",
                " ",
                /* @__PURE__ */ jsx("span", { className: "text-amber-400 font-medium", children: "award-winning precision" }),
                " ",
                "and zero compromise on quality."
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              variants: fadeUp,
              className: "flex flex-col sm:flex-row items-center justify-center gap-4 pt-6",
              children: [
                /* @__PURE__ */ jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsxs(
                  Button,
                  {
                    size: "lg",
                    className: "btn-glossy text-white border-0 px-8 py-6 text-base group shadow-lg",
                    children: [
                      "Get Free Quote",
                      /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" })
                    ]
                  }
                ) }),
                /* @__PURE__ */ jsx(Link, { to: "/portfolio", children: /* @__PURE__ */ jsxs(
                  Button,
                  {
                    size: "lg",
                    variant: "outline",
                    className: "px-8 py-6 text-base group border-white bg-white/15 text-white hover:bg-white hover:text-slate-900 hover:border-white backdrop-blur-sm font-semibold transition-all duration-200 shadow-md",
                    children: [
                      /* @__PURE__ */ jsx(Play, { className: "mr-2 h-4 w-4" }),
                      "View Projects"
                    ]
                  }
                ) })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              variants: fadeUp,
              className: "flex items-center justify-center gap-1.5",
              children: [
                /* @__PURE__ */ jsx("div", { className: "flex", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(Star, { size: 13, className: "text-amber-400 fill-amber-400" }, i)) }),
                /* @__PURE__ */ jsx("span", { className: "text-white/50 text-sm font-medium ml-1", children: "5.0 Google · Embassy REIT Vendor · 10+ Landmark Projects" })
              ]
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block", children: /* @__PURE__ */ jsx("div", { className: "w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1", children: /* @__PURE__ */ jsx("div", { className: "w-1.5 h-3 rounded-full bg-amber-500/70 animate-pulse" }) }) })
  ] });
};
const fallbackClients = [
  { name: "Embassy REIT", abbr: "E", color: "#1a3c5e" },
  { name: "LTIMindtree", abbr: "LTI", color: "#0066cc" },
  { name: "Larsen & Toubro", abbr: "L&T", color: "#e63012" },
  { name: "Peninsula Land", abbr: "PL", color: "#2e7d32" },
  { name: "Leela Group", abbr: "L", color: "#8b6914" },
  { name: "Nirmaann", abbr: "N", color: "#6a1b9a" },
  { name: "JSL", abbr: "JSL", color: "#c62828" },
  { name: "Rockfort Estate", abbr: "RE", color: "#37474f" }
];
const BUCKET = "project-images";
const LOGOS_FOLDER = "client-logos";
const MANIFEST_PATH = `${LOGOS_FOLDER}/manifest.json`;
function getPublicUrl(filename) {
  const { data } = supabase.storage.from(BUCKET).getPublicUrl(`${LOGOS_FOLDER}/${filename}`);
  return data.publicUrl;
}
const TrustStrip = () => {
  const [dynamicLogos, setDynamicLogos] = useState([]);
  useEffect(() => {
    const fetchLogos = async () => {
      try {
        const { data, error } = await supabase.storage.from(BUCKET).download(MANIFEST_PATH);
        if (!error && data) {
          const text = await data.text();
          const parsed = JSON.parse(text);
          if (Array.isArray(parsed) && parsed.length > 0) {
            setDynamicLogos(parsed);
          }
        }
      } catch {
      }
    };
    fetchLogos();
  }, []);
  const hasDynamic = dynamicLogos.length > 0;
  const tripled = hasDynamic ? [...dynamicLogos, ...dynamicLogos, ...dynamicLogos] : [...fallbackClients, ...fallbackClients, ...fallbackClients];
  return /* @__PURE__ */ jsx("section", { className: "py-12 bg-secondary/40 border-y border-border", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: "flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-8",
        initial: "hidden",
        whileInView: "visible",
        viewport,
        variants: stagger(0.1),
        children: [
          /* @__PURE__ */ jsxs(motion.div, { variants: fadeUp, className: "inline-flex items-center gap-2.5 px-5 py-2.5 bg-amber-500/10 border border-amber-500/30 text-amber-700", children: [
            /* @__PURE__ */ jsx(Trophy, { size: 18, className: "text-amber-600" }),
            /* @__PURE__ */ jsx("span", { className: "font-semibold text-sm", children: "Best Performance Vendor 2024 — Embassy REIT" })
          ] }),
          /* @__PURE__ */ jsxs(motion.div, { variants: fadeUp, className: "inline-flex items-center gap-2 px-4 py-2 bg-white border border-border", children: [
            /* @__PURE__ */ jsx("div", { className: "flex gap-0.5", children: [1, 2, 3, 4, 5].map((i) => /* @__PURE__ */ jsx(Star, { size: 14, className: "fill-amber-500 text-amber-500" }, i)) }),
            /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-foreground/80", children: "5.0 · Client Reviews" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      motion.p,
      {
        className: "text-center text-xs font-semibold text-foreground/50 uppercase tracking-[0.2em] mb-6",
        initial: "hidden",
        whileInView: "visible",
        viewport,
        variants: fadeUp,
        children: "Trusted by India's most iconic brands & developers"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none",
          style: {
            background: "linear-gradient(to right, hsl(35 20% 92%), transparent)"
          }
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none",
          style: {
            background: "linear-gradient(to left, hsl(35 20% 92%), transparent)"
          }
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "flex animate-marquee gap-10 md:gap-14 items-center", children: hasDynamic ? tripled.map((logo, index) => /* @__PURE__ */ jsx(
        "div",
        {
          className: "flex-shrink-0 group",
          title: logo.name,
          children: /* @__PURE__ */ jsx(
            "img",
            {
              src: getPublicUrl(logo.filename),
              alt: logo.name,
              className: "h-10 md:h-14 w-auto max-w-[140px] md:max-w-[180px] object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300",
              loading: "lazy"
            }
          )
        },
        index
      )) : tripled.map((client, index) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "flex-shrink-0 flex items-center gap-3 px-4 py-2 border border-border bg-card hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 cursor-default shadow-sm group",
          children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "w-7 h-7 flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0",
                style: {
                  backgroundColor: client.color
                },
                children: client.abbr
              }
            ),
            /* @__PURE__ */ jsx("span", { className: "text-foreground/70 group-hover:text-primary font-semibold text-sm tracking-wide whitespace-nowrap transition-colors duration-200", children: client.name })
          ]
        },
        index
      )) })
    ] })
  ] }) });
};
const projectsData = {
  "ltimindtree-campus": {
    id: 1,
    title: "LTIMindtree Mensa Campus",
    location: "Mahape, Navi Mumbai",
    category: "corporate",
    year: "2023",
    client: "LTIMindtree Ltd.",
    scope: "ACP & Silicone Facade Work",
    image: "/ltimindtree-mensa-campus-mahape-navi-mumbai-1%20(1)-elementor-io-optimized.webp",
    gallery: [],
    description: "The LTIMindtree Mensa Campus in Mahape required a large-scale facade solution that could match the client's premium corporate identity while withstanding Navi Mumbai's humid coastal environment. Fine Glaze executed full ACP cladding and structural silicone glazing across multiple building blocks within a tight construction programme. The project demanded precision coordination with the main contractor to maintain the structural timeline, with all facade panels shop-fabricated for quality control before site installation.",
    challenge: "Coordinating facade installation across multiple building wings simultaneously while working within an active construction zone with strict material delivery schedules.",
    outcome: "Delivered on schedule with zero reported defects at handover. The campus has since become a flagship corporate facility for LTIMindtree in the Mumbai region.",
    features: [
      "ACP facade system — FR-grade panels with PVDF coating",
      "Structural silicone glazing to mullion framework",
      "High wind-load design for coastal environment",
      "Premium Dow Corning sealants throughout"
    ],
    isAwardWinner: false
  },
  "embassy-247": {
    id: 2,
    title: "Embassy 247",
    location: "Gandhi Nagar, Vikhroli West, Mumbai",
    category: "award",
    year: "2024",
    client: "Embassy REIT",
    scope: "Facade Glass Replacement (Ongoing)",
    image: "/Embassy.webp",
    gallery: [],
    description: "Embassy 247 at Gandhi Nagar, Vikhroli West is a fully occupied Grade-A commercial building in Mumbai's JVLR corridor. Fine Glaze is currently executing a full facade glass replacement programme for Embassy REIT — one of India's largest REIT operators. The primary challenge is replacing aged facade glass panel by panel without disrupting the building's thousands of daily occupants. Fine Glaze designed and implemented a phased floor-by-floor replacement methodology with internal protective screening and off-hours installation, ensuring continuous occupancy throughout the project duration.",
    challenge: "Replacing facade glass on an occupied multi-floor Grade-A commercial building in central Mumbai without disrupting office operations, tenant access, or building aesthetics — while maintaining Embassy REIT's strict quality standards.",
    outcome: "Work is currently ongoing. Embassy REIT awarded Fine Glaze their 'Best Performance Vendor 2024' award — the first time a facade contractor received this recognition — in acknowledgement of Fine Glaze's execution quality and on-site professionalism.",
    features: [
      "Live operational glass replacement — zero occupant disruption",
      "High-performance solar control glass panels",
      "Phased floor-by-floor execution methodology",
      "Safety-first facade access system",
      "Embassy REIT Best Performance Vendor 2024"
    ],
    isAwardWinner: true,
    award: "Best Performance Vendor – 2024"
  },
  "salsette-27": {
    id: 3,
    title: "Salsette-27",
    location: "Byculla East, Mumbai",
    category: "residential",
    year: "2024",
    client: "Private Developer",
    scope: "Toilet Shaft Railing & Canopy Installation",
    image: "/Salsette27.webp",
    gallery: [],
    description: "Salsette-27 is a landmark super-tall residential development in Mumbai's heritage precinct at Byculla East — one of the tallest residential towers in the city. Fine Glaze executed two distinct scopes at this prestigious project: custom aluminium toilet shaft railing systems across multiple floors, and a full architectural canopy installation. The toilet shaft railings were fabricated from 50mm OD aluminium round pipe with powder coating (RAL 7011) and end base plates — a specification chosen for its long-term durability and clean aesthetic in a high-humidity service environment. The canopy, installed in 2024, was fabricated in ACP panels with precise mitred joinery to achieve a sharp, architectural look at the building entrance.",
    challenge: "Fabricating and installing custom aluminium railing systems within the constrained toilet shaft openings across a high-rise building, while coordinating a separate canopy scope during the active fit-out phase.",
    outcome: "Both scopes completed and handed over within the project schedule. The toilet shaft railing work and canopy installation received sign-off from the site architect and project management team.",
    features: [
      "Aluminium round pipe 50-OD railing — powder coated RAL 7011",
      "End base plate fixing system for shaft openings",
      "Architectural ACP canopy — installed 2024",
      "Mitred panel joinery for sharp canopy finish",
      "High-rise access and safety coordination"
    ],
    isAwardWinner: false
  },
  "leela-business-park": {
    id: 4,
    title: "Leela Business Park",
    location: "Andheri East, Mumbai",
    category: "corporate",
    year: "2022",
    client: "Leela Group",
    scope: "Architectural Aluminium Louvers",
    image: "/Business%20park.webp",
    gallery: [],
    description: "Leela Business Park required architectural aluminium louvre systems that would improve solar shading across the building's west-facing elevations while maintaining the clean aesthetic of the overall facade design. Fine Glaze engineered and installed custom-pitch louvre banks with powder-coated aluminium blades sized to the building's specific sun angle requirements, significantly reducing direct solar gain to the occupied floors.",
    challenge: "Designing louvre blade angles and depths to achieve effective solar shading at west Mumbai latitudes while integrating visually with the existing facade system.",
    outcome: "Post-installation thermal monitoring by the client confirmed a measurable reduction in west-facing office temperatures, reducing HVAC load during peak summer months.",
    features: [
      "Custom-pitch aluminium louvre blades",
      "Powder-coated finish — RAL matched to facade",
      "High wind resistance — tested for Mumbai gust loads"
    ],
    isAwardWinner: false
  },
  "pune-airport-terminal": {
    id: 5,
    title: "Pune International Airport – New Integrated Terminal",
    location: "Pune International Airport, Pune",
    category: "corporate",
    year: "2023",
    client: "Jindal Stainless Limited",
    scope: "SS Column Cladding with MS Framing",
    image: "/Puneairport.webp",
    gallery: [
      "/09fb5354-e9c5-4f43-81b2-ee7989dbf7d2.jpg",
      "/98ad845b-f086-4ad5-8739-57a5d0a8c436.jpg"
    ],
    description: "The new integrated terminal at Pune International Airport is a landmark public infrastructure project in Maharashtra. Fine Glaze was engaged by Jindal Stainless Limited to execute stainless steel column cladding with MS framing across the departures and arrivals zones of the terminal building. The project involved cladding multiple large-diameter structural columns in mirror-polished and brushed SS sheets, mounted over precision-fabricated MS sub-frames. Both the visual quality of the finished columns and the durability of the cladding system were critical requirements given the 24x7 operational nature of the facility and the high passenger footfall.",
    challenge: "Executing SS column cladding within a partially operational airport terminal with strict access controls, security clearance requirements, noise curfews, and rigorous material handling protocols at every shift.",
    outcome: "SS column cladding with MS framing completed to specification and handed over in 2023. The terminal is now operational and the SS columns are a prominent visual feature of the new integrated terminal. The project stands as a key public infrastructure reference for Fine Glaze.",
    features: [
      "Stainless steel column cladding — mirror and brushed finish",
      "MS structural sub-framing for cladding support",
      "Airport-grade surface and joint finish compliance",
      "Executed in partnership with Jindal Stainless Limited",
      "Completed 2023"
    ],
    isAwardWinner: false
  },
  "jindal-house": {
    id: 6,
    title: "Jindal House – Balkeshwar 32",
    location: "Mumbai",
    category: "residential",
    year: "2022",
    client: "Jindal Group",
    scope: "SS Glass Railing Systems",
    image: "/Jindal%20house.webp",
    gallery: [],
    description: "Jindal House at Balkeshwar 32 is a luxury residential bungalow project demanding premium quality railing systems across internal staircases and external terrace areas. Fine Glaze supplied and installed structural glass balustrades with brushed SS handrails, providing the open, uninterrupted sight lines the design architect had specified. Every installation point was independently signed off by the structural consultant for load compliance.",
    challenge: "Achieving the architect's frameless glass aesthetic while meeting structural load requirements for both staircase and elevated terrace railing applications.",
    outcome: "Client handover completed with full architect and structural consultant sign-off. The project has been showcased in the developer's portfolio.",
    features: [
      "Frameless toughened glass balustrades — 12mm clear",
      "Brushed SS-316 top handrail",
      "Laminated safety glass at staircase landings"
    ],
    isAwardWinner: false
  },
  "nirmaann-estrellaa": {
    id: 7,
    title: "Nirmaann Estrellaa",
    location: "Pune",
    category: "residential",
    year: "2023",
    client: "Nirmaann Developers",
    scope: "Aluminium Louvers, Windows & SS Railings",
    image: "/Nirmann.webp",
    gallery: [],
    description: "Nirmaann Estrellaa is a mid-rise residential development in Pune where Fine Glaze executed a full-scope facade package covering aluminium windows, architectural louvre panels, and stainless steel glass railings across all towers. The project was awarded on a single-vendor basis to ensure design consistency across all facade elements — a model that allowed faster coordination between the window, louvre, and railing programmes.",
    challenge: "Coordinating three different facade systems across multiple residential towers under a unified delivery schedule without interface clashes between scopes.",
    outcome: "All three facade scopes completed within the client's master fit-out timeline. Nirmaann Developers have continued to engage Fine Glaze for subsequent projects.",
    features: [
      "Aluminium casement and sliding windows",
      "Architectural aluminium louvre panels",
      "SS-316 glass railing systems"
    ],
    isAwardWinner: false
  },
  "ssg-honesty": {
    id: 8,
    title: "SSG Honesty",
    location: "Panvel, Navi Mumbai",
    category: "residential",
    year: "2022",
    client: "SSG Group",
    scope: "Structural Glazing, Curtain Wall & ACP",
    image: "/Pan.webp",
    gallery: [],
    description: "SSG Honesty is a modern mid-rise residential complex in Panvel that required a complete facade envelope covering structural glazing, stick-system curtain wall, and ACP cladding panels. Fine Glaze designed and executed the integrated facade package to deliver a contemporary glass-dominant look with ACP accent banding. The project was completed during post-pandemic material constraints which required active supply chain management to keep the programme on track.",
    challenge: "Managing material procurement and delivery across three separate facade systems during a period of significant supply chain disruption without delaying handover commitments.",
    outcome: "Full facade handover completed within the agreed programme. The building's glass-dominant elevation has been used in SSG Group's marketing materials since completion.",
    features: [
      "Stick-system curtain wall across main elevation",
      "Structural silicone glazing at feature bays",
      "FR-grade ACP cladding panels"
    ],
    isAwardWinner: false
  },
  "leela-hotel": {
    id: 10,
    title: "Leela Hotel",
    location: "Andheri East, Mumbai",
    category: "corporate",
    year: "2021",
    client: "Leela Group",
    scope: "Openable Windows & Laundry Area Works",
    image: "/Hotel.webp",
    gallery: [],
    description: "Fine Glaze executed the replacement and installation of openable aluminium window systems for the Leela Hotel in Andheri — a project that required working within an operational five-star hotel environment with strict noise restrictions and minimal disruption to guests. All window units were pre-fabricated to precise floor-by-floor dimensions, with a room-by-room installation methodology that kept each room offline for no more than one day at a time.",
    challenge: "Installing new aluminium window systems across an operating luxury hotel without displacing guests or violating the hotel's strict noise and access policies.",
    outcome: "All works completed to hotel management's satisfaction with no guest complaints during the installation phase. The Leela Group continued to engage Fine Glaze for the business park project at the same location.",
    features: [
      "Hotel-grade openable aluminium window systems",
      "Room-by-room phased installation",
      "Acoustic-rated sealed perimeters"
    ],
    isAwardWinner: false
  },
  "embassy-techzone": {
    id: 11,
    title: "Embassy Techzone",
    location: "Hinjewadi, Pune",
    category: "corporate",
    year: "2024",
    client: "Embassy Group",
    scope: "Facade Maintenance & Glass Replacement",
    image: "/Embassyoark.webp",
    gallery: [],
    description: "Embassy Techzone in Hinjewadi is one of Pune's premier IT park destinations. Fine Glaze was engaged for an ongoing facade maintenance scope covering inspection, glass replacement, silicone sealant renewal, and waterproofing of the building envelope across multiple towers. The scope required a systematic inspection methodology with documented findings for each elevation before works commenced — a professional AMC approach that Embassy Group now uses as their standard for other assets.",
    challenge: "Developing a structured, documentable facade inspection and maintenance protocol for a large multi-tower IT campus where different facades had varying ages and defect profiles.",
    outcome: "Completed full inspection and first-phase maintenance works across all towers within the contract period. Embassy Group have extended the maintenance scope for a second year.",
    features: [
      "Systematic facade inspection and defect mapping",
      "Selective glass replacement with matched specification",
      "Full silicone sealant renewal at critical joints",
      "AMC contract with annual scope renewal"
    ],
    isAwardWinner: false
  }
};
function parseJsonArray(value) {
  if (Array.isArray(value)) return value;
  if (typeof value === "string") {
    try {
      const parsed = JSON.parse(value);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }
  return [];
}
function getStaticProjects() {
  return Object.entries(projectsData).map(([slug, p]) => ({
    slug,
    ...p
  }));
}
function mapSupabaseRow(row) {
  return {
    id: row.sort_order ?? 0,
    slug: row.slug,
    title: row.title,
    location: row.location,
    category: row.category,
    year: row.year,
    client: row.client,
    scope: row.scope,
    image: row.image,
    gallery: parseJsonArray(row.gallery),
    description: row.description,
    challenge: row.challenge ?? "",
    outcome: row.outcome ?? "",
    features: parseJsonArray(row.features),
    isAwardWinner: row.is_award_winner ?? false,
    award: row.award
  };
}
function useProjects() {
  const [projects, setProjects] = useState(getStaticProjects());
  const [loading, setLoading] = useState(false);
  const [source, setSource] = useState("static");
  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    (async () => {
      try {
        const { data, error } = await supabase.from("projects").select("*").eq("is_published", true).order("sort_order", { ascending: true });
        if (!cancelled && data && data.length > 0 && !error) {
          setProjects(data.map(mapSupabaseRow));
          setSource("supabase");
        }
      } catch {
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);
  return { projects, loading, source };
}
function useProject(slug) {
  const { projects, loading } = useProjects();
  const project = slug ? projects.find((p) => p.slug === slug) : void 0;
  return { project, loading };
}
const PortfolioSection = () => {
  const { projects } = useProjects();
  const featured = projects.slice(0, 3);
  return /* @__PURE__ */ jsx("section", { className: "py-20 bg-background", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: "flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10",
        initial: "hidden",
        whileInView: "visible",
        viewport,
        variants: stagger(0.1),
        children: [
          /* @__PURE__ */ jsxs(motion.div, { className: "space-y-3", variants: slideLeft, children: [
            /* @__PURE__ */ jsx("span", { className: "text-primary font-medium uppercase tracking-wider text-sm", children: "Featured Work" }),
            /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-bold text-foreground", children: [
              "Recent",
              " ",
              /* @__PURE__ */ jsx("span", { className: "text-gradient-subtle", children: "Projects" })
            ] })
          ] }),
          /* @__PURE__ */ jsx(motion.div, { variants: slideRight, children: /* @__PURE__ */ jsx(Link, { to: "/portfolio", children: /* @__PURE__ */ jsxs(Button, { variant: "outline", className: "group border-primary/30 hover:border-primary hover:bg-primary/5", children: [
            "View All Projects",
            /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" })
          ] }) }) })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "grid grid-cols-1 md:grid-cols-3 gap-6",
        initial: "hidden",
        whileInView: "visible",
        viewport,
        variants: stagger(0.12),
        children: featured.map((project, index) => /* @__PURE__ */ jsx(motion.div, { variants: fadeUp, children: /* @__PURE__ */ jsxs(
          Link,
          {
            to: `/project/${project.slug}`,
            className: "group relative overflow-hidden aspect-[4/3] block",
            children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: project.image,
                  alt: project.title,
                  className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
                  loading: index === 0 ? "eager" : "lazy",
                  width: "800",
                  height: "600"
                }
              ),
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "absolute inset-0 opacity-70 group-hover:opacity-85 transition-opacity duration-300",
                  style: {
                    background: "linear-gradient(to top, hsl(25 40% 12% / 0.95) 0%, hsl(25 30% 20% / 0.4) 50%, transparent 100%)"
                  }
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "absolute top-4 right-4 w-10 h-10 bg-primary/90 text-primary-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0", children: /* @__PURE__ */ jsx(Eye, { size: 18 }) }),
              /* @__PURE__ */ jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-6", children: [
                /* @__PURE__ */ jsx("span", { className: "inline-block px-3 py-1 text-xs font-medium bg-primary/40 text-white mb-3", children: project.category }),
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-2", children: project.title }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 text-white/80 text-sm", children: [
                  /* @__PURE__ */ jsx(MapPin, { size: 14 }),
                  project.location
                ] })
              ] })
            ]
          }
        ) }, project.slug))
      }
    )
  ] }) });
};
const SERVICE_DEFS = [
  {
    tag: "Facade System",
    title: "Curtain Wall Systems",
    desc: "Unitized & stick-built curtain walls for IT parks, offices and high-rises. Wind-load tested up to 4.5 kPa.",
    spec: "Up to 4.5 kPa wind load",
    href: "/curtain-wall-systems",
    mediaKey: "services_card_curtain_wall",
    fallback: "/Unitized.webp"
  },
  {
    tag: "Glazing",
    title: "Structural Glazing",
    desc: "Frameless silicone-bonded glass facades. Dow Corning / Sika certified. DGU + Low-E ready.",
    spec: "Dow Corning · Sika certified",
    href: "/structural-glazing",
    mediaKey: "services_card_structural_glazing",
    fallback: "/Glazing.webp"
  },
  {
    tag: "Cladding",
    title: "ACP Cladding",
    desc: "Fire-retardant PVDF-coated aluminium composite panels from Aludecor & Alstrong. 20-yr colour warranty.",
    spec: "20-yr PVDF colour warranty",
    href: "/acp-aluminium-cladding",
    mediaKey: "services_card_acp_cladding",
    fallback: "/Panel.webp"
  },
  {
    tag: "Aluminium",
    title: "Aluminium Doors & Windows",
    desc: "Thermal-break sliding, casement & lift-slide systems. 60% heat reduction, 45dB sound rating.",
    spec: "60% heat reduction",
    href: "/aluminium-facade",
    mediaKey: "services_card_aluminium_windows",
    fallback: "/Aluminium%20windows.webp"
  },
  {
    tag: "Railings",
    title: "Glass Railings",
    desc: "Frameless 12–19mm toughened glass railings with marine-grade SS hardware for balconies & staircases.",
    spec: "12–19mm toughened glass",
    href: "/glass-railings",
    mediaKey: "services_card_glass_railings",
    fallback: "/Railing.webp"
  },
  {
    tag: "Roofing",
    title: "Skylights & Canopies",
    desc: "Engineered glass skylights with heat-reflective coatings. Spider canopies & retractable roof systems.",
    spec: "50% more natural light",
    href: "/structural-glazing",
    mediaKey: "services_card_skylights",
    fallback: "/Hotel.webp"
  },
  {
    tag: "Interior",
    title: "Glass Partitions",
    desc: "Frameless office partitions with optional acoustic DGU and switchable smart glass.",
    spec: "Up to 42dB sound insulation",
    href: "/glass-railings",
    mediaKey: "services_card_glass_partitions",
    fallback: "/Glass%20installation.webp"
  },
  {
    tag: "Maintenance",
    title: "Facade AMC & Repairs",
    desc: "Rope-access facade cleaning, silicone resealing, glass replacement & emergency repairs.",
    spec: "Bi-annual inspection cycle",
    href: "/maintenance-services",
    mediaKey: "services_card_amc",
    fallback: "/Amc.webp"
  }
];
const ServicesSection = () => {
  const { getMedia } = useSiteMedia();
  const services2 = SERVICE_DEFS.map((s) => ({
    ...s,
    image: getMedia(s.mediaKey, s.fallback)
  }));
  return /* @__PURE__ */ jsx("section", { className: "py-20 bg-muted", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: "text-center space-y-4 mb-12",
        initial: "hidden",
        whileInView: "visible",
        viewport,
        variants: stagger(0.1),
        children: [
          /* @__PURE__ */ jsx(motion.span, { variants: fadeUp, className: "text-primary font-medium uppercase tracking-wider text-sm block", children: "Our Expertise" }),
          /* @__PURE__ */ jsxs(motion.h2, { variants: fadeUp, className: "text-3xl md:text-4xl font-bold text-foreground", children: [
            "Full-Range",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-gradient-subtle", children: "Facade Services" })
          ] }),
          /* @__PURE__ */ jsx(motion.p, { variants: fadeUp, className: "text-muted-foreground max-w-2xl mx-auto", children: "End-to-end facade solutions — engineered, fabricated and installed by one expert team. Click any service for full specs and project gallery." })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5",
        initial: "hidden",
        whileInView: "visible",
        viewport,
        variants: stagger(0.06),
        children: services2.map((service) => /* @__PURE__ */ jsx(motion.div, { variants: fadeUp, children: /* @__PURE__ */ jsxs(
          Link,
          {
            to: service.href,
            className: "group relative bg-card overflow-hidden border border-border hover:border-primary/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "relative aspect-[4/3] overflow-hidden bg-muted", children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: service.image,
                    alt: service.title,
                    className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",
                    loading: "lazy",
                    width: "400",
                    height: "300"
                  }
                ),
                /* @__PURE__ */ jsx("span", { className: "absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider text-primary px-2.5 py-1 shadow-sm", children: service.tag })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "p-5 flex flex-col flex-1", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors leading-snug", children: service.title }),
                /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm mb-4 leading-relaxed flex-1", children: service.desc }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between pt-3 border-t border-border/60 gap-2", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold text-primary/90 truncate", children: service.spec }),
                  /* @__PURE__ */ jsx(
                    ArrowRight,
                    {
                      size: 16,
                      className: "text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0"
                    }
                  )
                ] })
              ] })
            ]
          }
        ) }, service.title))
      }
    ),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: "flex flex-col sm:flex-row items-center justify-center gap-4 mt-12",
        initial: "hidden",
        whileInView: "visible",
        viewport,
        variants: fadeUp,
        children: [
          /* @__PURE__ */ jsx(Link, { to: "/services", children: /* @__PURE__ */ jsxs(
            Button,
            {
              variant: "outline",
              className: "border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 group",
              children: [
                "View All Services in Detail",
                /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" })
              ]
            }
          ) }),
          /* @__PURE__ */ jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsxs(Button, { className: "btn-glossy text-primary-foreground border-0 group px-8 py-6", children: [
            "Get a Free Quote",
            /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" })
          ] }) })
        ]
      }
    )
  ] }) });
};
const GoogleIcon = () => /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 24 24", className: "w-5 h-5", fill: "none", children: [
  /* @__PURE__ */ jsx("path", { d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z", fill: "#4285F4" }),
  /* @__PURE__ */ jsx("path", { d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z", fill: "#34A853" }),
  /* @__PURE__ */ jsx("path", { d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z", fill: "#FBBC05" }),
  /* @__PURE__ */ jsx("path", { d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z", fill: "#EA4335" })
] });
const ReviewsSection = () => {
  return /* @__PURE__ */ jsxs("section", { className: "py-20 bg-card border-y border-border overflow-hidden relative", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-0 opacity-[0.03] pointer-events-none",
        style: {
          backgroundImage: `radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "32px 32px"
        }
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 relative z-10", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          className: "text-center mb-12",
          initial: "hidden",
          whileInView: "visible",
          viewport,
          variants: fadeUp,
          children: [
            /* @__PURE__ */ jsx("span", { className: "text-primary font-semibold uppercase tracking-widest text-xs mb-3 block", children: "Trusted & Verified" }),
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-extrabold mb-3", children: "Rated 5.0 on Google" })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          className: "flex flex-col items-center gap-6",
          initial: "hidden",
          whileInView: "visible",
          viewport,
          variants: stagger(0.1),
          children: /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-center gap-4", children: [
            /* @__PURE__ */ jsxs(
              motion.a,
              {
                variants: scaleUp,
                href: "https://www.google.com/maps/search/Fine+Glaze+Pune",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "flex items-center gap-4 px-6 py-4 border border-amber-500/30 bg-gradient-to-br from-amber-500/10 to-yellow-500/5 hover:scale-105 transition-transform duration-200 shadow-sm",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center w-8 h-8", children: /* @__PURE__ */ jsx(GoogleIcon, {}) }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-0.5", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-2xl font-black text-foreground leading-none", children: "5.0" }),
                      /* @__PURE__ */ jsx("div", { className: "flex gap-0.5", children: [1, 2, 3, 4, 5].map((i) => /* @__PURE__ */ jsx(Star, { size: 12, className: "fill-amber-400 text-amber-400" }, i)) })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Google Reviews" })
                  ] }),
                  /* @__PURE__ */ jsx(ExternalLink, { size: 13, className: "text-muted-foreground ml-1" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.a,
              {
                variants: scaleUp,
                href: "https://www.indiamart.com/fine-glaze/",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "flex items-center gap-4 px-6 py-4 border border-orange-500/30 bg-gradient-to-br from-orange-500/10 to-orange-400/5 hover:scale-105 transition-transform duration-200 shadow-sm",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsxs("span", { className: "text-[#FF6B00] font-black text-base leading-none", children: [
                    "india",
                    /* @__PURE__ */ jsx("span", { className: "text-[#1a56db]", children: "mart" })
                  ] }) }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-0.5", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-2xl font-black text-foreground leading-none", children: "4.8" }),
                      /* @__PURE__ */ jsx("div", { className: "flex gap-0.5", children: [1, 2, 3, 4, 5].map((i) => /* @__PURE__ */ jsx(Star, { size: 12, className: i <= 4 ? "fill-amber-400 text-amber-400" : "fill-amber-400/40 text-amber-400/40" }, i)) })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "IndiaMART" })
                  ] }),
                  /* @__PURE__ */ jsx(ExternalLink, { size: 13, className: "text-muted-foreground ml-1" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.a,
              {
                variants: scaleUp,
                href: "https://www.justdial.com/Pune/Fine-Glaze",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "flex items-center gap-4 px-6 py-4 border border-red-500/30 bg-gradient-to-br from-red-500/10 to-red-400/5 hover:scale-105 transition-transform duration-200 shadow-sm",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsxs("span", { className: "text-[#FF5A00] font-black text-base leading-none", children: [
                    "Just",
                    /* @__PURE__ */ jsx("span", { className: "text-[#1a56db]", children: "Dial" })
                  ] }) }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-0.5", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-2xl font-black text-foreground leading-none", children: "4.7" }),
                      /* @__PURE__ */ jsx("div", { className: "flex gap-0.5", children: [1, 2, 3, 4, 5].map((i) => /* @__PURE__ */ jsx(Star, { size: 12, className: i <= 4 ? "fill-amber-400 text-amber-400" : "fill-amber-400/40 text-amber-400/40" }, i)) })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "JustDial" })
                  ] }),
                  /* @__PURE__ */ jsx(ExternalLink, { size: 13, className: "text-muted-foreground ml-1" })
                ]
              }
            )
          ] })
        }
      )
    ] })
  ] });
};
const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    "textarea",
    {
      className: cn(
        "flex min-h-[80px] w-full border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ref,
      ...props
    }
  );
});
Textarea.displayName = "Textarea";
const projectTypes = [
  "Facade Fabrication",
  "Structural Glazing",
  "Curtain Wall Systems",
  "ACP Cladding",
  "Custom Railings",
  "Doors & Windows",
  "Maintenance Services",
  "Other"
];
const ContactFormSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
    preferCallback: false
  });
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.projectType) {
      toast$1.error("Please select a project type");
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "74dce7dc-85a9-4479-ab00-bd002f23409a",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          project_type: formData.projectType,
          message: formData.message || "(No details provided)",
          prefers_callback: formData.preferCallback ? "Yes" : "No",
          subject: "New Enquiry – Fine Glaze Website (Homepage)",
          from_name: "Fine Glaze Website"
        })
      });
      const data = await res.json();
      if (isSupabaseConfigured) {
        try {
          await supabase.from("contact_leads").insert({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            project_type: formData.projectType,
            message: formData.message || null,
            prefers_callback: formData.preferCallback,
            source: "website_homepage"
          });
        } catch {
          console.warn("Supabase lead save failed (non-blocking)");
        }
      }
      if (data.success) {
        setIsSubmitted(true);
        toast$1.success("Message sent successfully!");
        if (typeof window !== "undefined" && window.gtag) {
          window.gtag("event", "generate_lead", {
            event_category: "Contact",
            event_label: formData.projectType || "General",
            value: 1
          });
        }
        setFormData({
          name: "",
          email: "",
          phone: "",
          projectType: "",
          message: "",
          preferCallback: false
        });
      } else {
        throw new Error("Submission failed");
      }
    } catch {
      toast$1.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return /* @__PURE__ */ jsx(
    "section",
    {
      id: "contact",
      className: "py-16 md:py-24 bg-stone-50",
      children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-5 md:px-16", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            className: "text-center mb-10 md:mb-14",
            initial: "hidden",
            whileInView: "visible",
            viewport,
            variants: fadeUp,
            children: [
              /* @__PURE__ */ jsx("p", { className: "text-amber-700 text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase mb-3", children: "Get In Touch" }),
              /* @__PURE__ */ jsx(
                "h2",
                {
                  className: "font-extrabold text-stone-900 leading-tight tracking-tight",
                  style: { fontSize: "clamp(1.75rem, 4vw, 3rem)" },
                  children: "Start Your Project Today"
                }
              ),
              /* @__PURE__ */ jsx("p", { className: "mt-3 text-stone-500 text-sm md:text-base max-w-lg mx-auto leading-relaxed", children: "Free site consultation. Detailed quote within 24 hours." })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            className: "grid lg:grid-cols-12 gap-8 md:gap-12",
            initial: "hidden",
            whileInView: "visible",
            viewport,
            variants: stagger(0.15),
            children: [
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  className: "lg:col-span-7",
                  variants: slideLeft,
                  children: /* @__PURE__ */ jsxs("div", { className: "bg-white border border-stone-200 shadow-sm", children: [
                    /* @__PURE__ */ jsxs("div", { className: "border-b border-stone-100 px-5 md:px-8 py-5 md:py-6", children: [
                      /* @__PURE__ */ jsx("p", { className: "text-amber-700 text-[10px] font-bold tracking-[0.3em] uppercase mb-1", children: "Start Your Project" }),
                      /* @__PURE__ */ jsx("h3", { className: "text-xl md:text-2xl font-bold text-stone-900", children: "Tell us what you need" })
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "px-5 md:px-8 py-5 md:py-7", children: isSubmitted ? /* @__PURE__ */ jsxs("div", { className: "text-center py-14 space-y-4", children: [
                      /* @__PURE__ */ jsx("div", { className: "w-14 h-14 bg-amber-50 flex items-center justify-center mx-auto", children: /* @__PURE__ */ jsx(CheckCircle2, { size: 28, className: "text-amber-600" }) }),
                      /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-stone-900", children: "Message Sent" }),
                      /* @__PURE__ */ jsx("p", { className: "text-stone-500 text-sm max-w-md mx-auto", children: "Thank you. Our team will review your inquiry and get back to you within 1 business hour during working hours." }),
                      /* @__PURE__ */ jsx(
                        Button,
                        {
                          onClick: () => {
                            setIsSubmitted(false);
                            setFormData({
                              name: "",
                              email: "",
                              phone: "",
                              projectType: "",
                              message: "",
                              preferCallback: false
                            });
                          },
                          variant: "outline",
                          className: "mt-4",
                          children: "Send Another Message"
                        }
                      )
                    ] }) : /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-5", children: [
                      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5", children: [
                        /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
                          /* @__PURE__ */ jsx(
                            Label,
                            {
                              htmlFor: "home-name",
                              className: "text-xs font-semibold text-stone-600 uppercase tracking-wider",
                              children: "Full Name *"
                            }
                          ),
                          /* @__PURE__ */ jsx(
                            Input,
                            {
                              id: "home-name",
                              name: "name",
                              placeholder: "Ramesh Sharma",
                              required: true,
                              value: formData.name,
                              onChange: handleChange,
                              className: "border-stone-200 focus:border-amber-400 focus:ring-amber-400/20 h-11"
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
                          /* @__PURE__ */ jsx(
                            Label,
                            {
                              htmlFor: "home-email",
                              className: "text-xs font-semibold text-stone-600 uppercase tracking-wider",
                              children: "Email *"
                            }
                          ),
                          /* @__PURE__ */ jsx(
                            Input,
                            {
                              id: "home-email",
                              name: "email",
                              type: "email",
                              placeholder: "ramesh@company.com",
                              required: true,
                              value: formData.email,
                              onChange: handleChange,
                              className: "border-stone-200 focus:border-amber-400 focus:ring-amber-400/20 h-11"
                            }
                          )
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5", children: [
                        /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
                          /* @__PURE__ */ jsx(
                            Label,
                            {
                              htmlFor: "home-phone",
                              className: "text-xs font-semibold text-stone-600 uppercase tracking-wider",
                              children: "Phone *"
                            }
                          ),
                          /* @__PURE__ */ jsx(
                            Input,
                            {
                              id: "home-phone",
                              name: "phone",
                              type: "tel",
                              placeholder: "+91 98765 43210",
                              required: true,
                              value: formData.phone,
                              onChange: handleChange,
                              className: "border-stone-200 focus:border-amber-400 focus:ring-amber-400/20 h-11"
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
                          /* @__PURE__ */ jsx(
                            Label,
                            {
                              htmlFor: "home-projectType",
                              className: "text-xs font-semibold text-stone-600 uppercase tracking-wider",
                              children: "Project Type *"
                            }
                          ),
                          /* @__PURE__ */ jsxs(
                            Select,
                            {
                              value: formData.projectType,
                              onValueChange: (value) => setFormData((prev) => ({
                                ...prev,
                                projectType: value
                              })),
                              required: true,
                              children: [
                                /* @__PURE__ */ jsx(SelectTrigger, { className: "border-stone-200 focus:border-amber-400 focus:ring-amber-400/20 h-11", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select a service" }) }),
                                /* @__PURE__ */ jsx(SelectContent, { children: projectTypes.map((type) => /* @__PURE__ */ jsx(SelectItem, { value: type, children: type }, type)) })
                              ]
                            }
                          )
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
                        /* @__PURE__ */ jsxs(
                          Label,
                          {
                            htmlFor: "home-message",
                            className: "text-xs font-semibold text-stone-600 uppercase tracking-wider",
                            children: [
                              "Project Details",
                              " ",
                              /* @__PURE__ */ jsx("span", { className: "text-stone-400 normal-case tracking-normal", children: "(optional)" })
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          Textarea,
                          {
                            id: "home-message",
                            name: "message",
                            placeholder: "E.g. We need structural glazing for a 5-floor commercial building in Hinjewadi, Pune. Looking for site visit and quotation...",
                            rows: 3,
                            value: formData.message,
                            onChange: handleChange,
                            className: "border-stone-200 focus:border-amber-400 focus:ring-amber-400/20 resize-none"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-2 cursor-pointer group", children: [
                        /* @__PURE__ */ jsx(
                          "input",
                          {
                            type: "checkbox",
                            checked: formData.preferCallback,
                            onChange: (e) => setFormData((prev) => ({
                              ...prev,
                              preferCallback: e.target.checked
                            })),
                            className: "w-4 h-4 rounded border-stone-300 text-amber-600 focus:ring-amber-400/20"
                          }
                        ),
                        /* @__PURE__ */ jsx("span", { className: "text-sm text-stone-600 group-hover:text-stone-800 transition-colors", children: "I'd prefer a callback to discuss details" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-3", children: [
                        /* @__PURE__ */ jsx(
                          Button,
                          {
                            type: "submit",
                            disabled: isSubmitting,
                            className: "flex-1 bg-stone-900 hover:bg-amber-700 text-white py-5 text-sm font-semibold tracking-wide transition-colors duration-300",
                            children: isSubmitting ? /* @__PURE__ */ jsxs(Fragment, { children: [
                              /* @__PURE__ */ jsx("div", { className: "w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" }),
                              "Sending..."
                            ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                              /* @__PURE__ */ jsx(Send, { size: 16, className: "mr-2" }),
                              "Send Enquiry"
                            ] })
                          }
                        ),
                        /* @__PURE__ */ jsxs(
                          "a",
                          {
                            href: "tel:+918369233566",
                            className: "flex-1 inline-flex items-center justify-center gap-2 border-2 border-amber-600 text-amber-700 hover:bg-amber-50 py-3 text-sm font-semibold tracking-wide transition-colors duration-200",
                            children: [
                              /* @__PURE__ */ jsx(PhoneCall, { size: 16 }),
                              "Call Now"
                            ]
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 pt-1", children: [
                        /* @__PURE__ */ jsx("div", { className: "flex items-center gap-0.5", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(
                          Star,
                          {
                            size: 12,
                            className: "fill-amber-400 text-amber-400"
                          },
                          i
                        )) }),
                        /* @__PURE__ */ jsx("p", { className: "text-[11px] text-stone-500", children: "5-Star Rated on Google · Trusted by Embassy REIT, LTIMindtree & more" })
                      ] }),
                      /* @__PURE__ */ jsx("p", { className: "text-[11px] text-stone-400 text-center", children: "We'll never share your information. Expect a reply within 1 business hour." })
                    ] }) })
                  ] })
                }
              ),
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  className: "lg:col-span-5 space-y-5 md:space-y-6",
                  variants: slideRight,
                  children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-white border border-stone-200 p-5 md:p-7", children: [
                      /* @__PURE__ */ jsx("p", { className: "text-amber-700 text-[10px] font-bold tracking-[0.3em] uppercase mb-3", children: "Why Reach Out" }),
                      /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-stone-900 mb-4", children: "We respond within 1 business hour." }),
                      /* @__PURE__ */ jsx("p", { className: "text-stone-500 text-sm leading-relaxed mb-5", children: "No automated replies — you'll speak directly with our engineering team." }),
                      /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [
                        {
                          text: "Free site visit & measurement",
                          sub: "Our engineers visit at no cost"
                        },
                        {
                          text: "Written proposal in 48 hours",
                          sub: "Transparent scope, specs & pricing"
                        },
                        {
                          text: "No obligation",
                          sub: "Get the information you need"
                        }
                      ].map((item) => /* @__PURE__ */ jsxs("div", { className: "flex gap-3 group", children: [
                        /* @__PURE__ */ jsx("div", { className: "w-6 h-6 bg-amber-50 flex items-center justify-center shrink-0 mt-0.5", children: /* @__PURE__ */ jsx(ArrowRight, { size: 12, className: "text-amber-600" }) }),
                        /* @__PURE__ */ jsxs("div", { children: [
                          /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-stone-800", children: item.text }),
                          /* @__PURE__ */ jsx("p", { className: "text-xs text-stone-400 mt-0.5", children: item.sub })
                        ] })
                      ] }, item.text)) })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-white border border-stone-200 p-5 md:p-7 space-y-4", children: [
                      /* @__PURE__ */ jsx("p", { className: "text-amber-700 text-[10px] font-bold tracking-[0.3em] uppercase mb-1", children: "Reach Us Directly" }),
                      /* @__PURE__ */ jsxs(
                        "a",
                        {
                          href: "tel:+918369233566",
                          className: "flex items-center gap-3 text-stone-700 hover:text-amber-700 transition-colors group",
                          children: [
                            /* @__PURE__ */ jsx("div", { className: "w-9 h-9 bg-amber-50 group-hover:bg-amber-100 flex items-center justify-center shrink-0 transition-colors", children: /* @__PURE__ */ jsx(Phone, { size: 16, className: "text-amber-600" }) }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold", children: "+91 83692 33566" }),
                              /* @__PURE__ */ jsx("p", { className: "text-[10px] text-stone-400", children: "Call or WhatsApp" })
                            ] })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxs(
                        "a",
                        {
                          href: "mailto:info@fineglaze.com",
                          className: "flex items-center gap-3 text-stone-700 hover:text-amber-700 transition-colors group",
                          children: [
                            /* @__PURE__ */ jsx("div", { className: "w-9 h-9 bg-amber-50 group-hover:bg-amber-100 flex items-center justify-center shrink-0 transition-colors", children: /* @__PURE__ */ jsx(Mail, { size: 16, className: "text-amber-600" }) }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold", children: "info@fineglaze.com" }),
                              /* @__PURE__ */ jsx("p", { className: "text-[10px] text-stone-400", children: "We reply within 1 hour" })
                            ] })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-stone-500", children: [
                        /* @__PURE__ */ jsx("div", { className: "w-9 h-9 bg-amber-50 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx(Clock, { size: 16, className: "text-amber-600" }) }),
                        /* @__PURE__ */ jsxs("div", { children: [
                          /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-stone-700", children: "Mon – Sat, 9 AM – 6 PM" }),
                          /* @__PURE__ */ jsx("p", { className: "text-[10px] text-stone-400", children: "Office hours" })
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-px bg-stone-200", children: [
                      { num: "10+", label: "Projects" },
                      { num: "5+", label: "Years" },
                      { num: "<1hr", label: "Response" }
                    ].map((s) => /* @__PURE__ */ jsxs(
                      "div",
                      {
                        className: "bg-white text-center py-4 md:py-5",
                        children: [
                          /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl font-extrabold text-stone-900", children: s.num }),
                          /* @__PURE__ */ jsx("p", { className: "text-[10px] text-stone-400 font-bold tracking-[0.15em] uppercase mt-1", children: s.label })
                        ]
                      },
                      s.label
                    )) })
                  ]
                }
              )
            ]
          }
        )
      ] })
    }
  );
};
const CTASection = () => {
  return /* @__PURE__ */ jsxs(
    "section",
    {
      className: "relative py-28 overflow-hidden",
      style: {
        background: "linear-gradient(135deg, hsl(25 80% 25%) 0%, hsl(20 75% 18%) 50%, hsl(15 70% 14%) 100%)"
      },
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -top-24 -left-24 w-96 h-96 bg-white/10 blur-3xl" }),
        /* @__PURE__ */ jsx("div", { className: "absolute -bottom-32 -right-32 w-[30rem] h-[30rem] bg-white/10 blur-3xl" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-[0.07]", children: /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute inset-0",
            style: {
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='2' cy='2' r='2'/%3E%3C/g%3E%3C/svg%3E")`
            }
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            className: "max-w-3xl mx-auto text-center space-y-8",
            initial: "hidden",
            whileInView: "visible",
            viewport,
            variants: stagger(0.12),
            children: [
              /* @__PURE__ */ jsxs(
                motion.h2,
                {
                  variants: fadeUp,
                  className: "text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight",
                  children: [
                    "Transform Your Building Into a",
                    " ",
                    /* @__PURE__ */ jsx("br", { className: "hidden sm:block" }),
                    /* @__PURE__ */ jsx("span", { className: "text-gradient-light", children: "Modern Architectural Landmark" })
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                motion.p,
                {
                  variants: fadeUp,
                  className: "text-white/80 text-lg max-w-xl mx-auto leading-relaxed",
                  children: "Award-winning facade solutions engineered for performance, lasting aesthetics, and measurable long-term value."
                }
              ),
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  variants: fadeUp,
                  className: "flex flex-col sm:flex-row items-center justify-center gap-5 pt-6",
                  children: [
                    /* @__PURE__ */ jsx(
                      Button,
                      {
                        asChild: true,
                        size: "lg",
                        className: "bg-white text-primary hover:bg-white/90 px-10 py-6 text-base font-semibold shadow-xl group active:scale-[0.97] transition-transform",
                        children: /* @__PURE__ */ jsxs(
                          "a",
                          {
                            href: "https://wa.me/918369233566?text=Hello%20Fine%20Glaze%2C%20I%20would%20like%20to%20discuss%20a%20facade%20project.",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: [
                              "Get Instant Quote",
                              /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" })
                            ]
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      Button,
                      {
                        asChild: true,
                        size: "lg",
                        variant: "outline",
                        className: "bg-white text-slate-900 hover:bg-white/90 border-white px-10 py-6 text-base font-bold active:scale-[0.97] transition-transform",
                        children: /* @__PURE__ */ jsxs("a", { href: "tel:+918369233566", children: [
                          /* @__PURE__ */ jsx(Phone, { className: "mr-2 h-4 w-4" }),
                          "Call Expert"
                        ] })
                      }
                    )
                  ]
                }
              )
            ]
          }
        ) })
      ]
    }
  );
};
function SEO({
  title,
  description,
  canonical,
  keywords,
  ogImage = "https://fineglaze.com/default-og.webp",
  ogType = "website",
  noindex = false,
  schema,
  schemas
}) {
  const allSchemas = [
    ...schema ? [schema] : [],
    ...schemas ?? []
  ];
  return /* @__PURE__ */ jsxs(Helmet, { children: [
    /* @__PURE__ */ jsx("title", { children: title }),
    /* @__PURE__ */ jsx("meta", { name: "description", content: description }),
    keywords && /* @__PURE__ */ jsx("meta", { name: "keywords", content: keywords }),
    canonical && /* @__PURE__ */ jsx("link", { rel: "canonical", href: canonical }),
    noindex ? /* @__PURE__ */ jsx("meta", { name: "robots", content: "noindex, nofollow" }) : /* @__PURE__ */ jsx("meta", { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" }),
    /* @__PURE__ */ jsx("meta", { property: "og:title", content: title }),
    /* @__PURE__ */ jsx("meta", { property: "og:description", content: description }),
    ogImage && /* @__PURE__ */ jsx("meta", { property: "og:image", content: ogImage }),
    ogImage && /* @__PURE__ */ jsx("meta", { property: "og:image:width", content: "1200" }),
    ogImage && /* @__PURE__ */ jsx("meta", { property: "og:image:height", content: "630" }),
    /* @__PURE__ */ jsx("meta", { property: "og:type", content: ogType }),
    /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: "Fine Glaze" }),
    /* @__PURE__ */ jsx("meta", { property: "og:locale", content: "en_IN" }),
    canonical && /* @__PURE__ */ jsx("meta", { property: "og:url", content: canonical }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:site", content: "@FineGlaze" }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:creator", content: "@FineGlaze" }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: title }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: description }),
    ogImage && /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: ogImage }),
    allSchemas.map((s, i) => /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(s) }, i))
  ] });
}
const Index = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Fine Glaze",
    "url": "https://fineglaze.com",
    "logo": "https://fineglaze.com/Logofg.webp",
    "description": "Leading facade contractor in Pune and Mumbai specialising in structural glazing, curtain wall systems, ACP cladding, aluminium facades, and glass railings for commercial buildings.",
    "telephone": "+918369233566",
    "email": "info@fineglaze.com",
    "foundingDate": "2018",
    "areaServed": ["Pune", "Mumbai", "Navi Mumbai", "Thane", "Maharashtra"],
    "sameAs": [
      "https://maps.app.goo.gl/JDF3ESXQGHtwKoAr6",
      "https://www.linkedin.com/company/fine-glaze"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop No. 1 & 2, Jagdamba Bhawan Marg, near Sunshine Hills, Shree Siddhivinayak Meera",
      "addressLocality": "Undri, Pune",
      "addressRegion": "Maharashtra",
      "postalCode": "411060",
      "addressCountry": "IN"
    }
  };
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Fine Glaze",
    "image": "https://fineglaze.com/Logofg.webp",
    "url": "https://fineglaze.com",
    "telephone": "+918369233566",
    "email": "info@fineglaze.com",
    "priceRange": "₹₹₹",
    "description": "Fine Glaze is a premier facade engineering company in Pune and Mumbai, delivering structural glazing, curtain wall, ACP cladding and aluminium facade solutions for commercial buildings.",
    "sameAs": [
      "https://maps.app.goo.gl/JDF3ESXQGHtwKoAr6",
      "https://www.linkedin.com/company/fine-glaze"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop No. 1 & 2, Jagdamba Bhawan Marg, near Sunshine Hills, Shree Siddhivinayak Meera",
      "addressLocality": "Undri, Pune",
      "addressRegion": "Maharashtra",
      "postalCode": "411060",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 18.4529,
      "longitude": 73.9072
    },
    "areaServed": [
      { "@type": "City", "name": "Pune" },
      { "@type": "City", "name": "Mumbai" },
      { "@type": "City", "name": "Navi Mumbai" },
      { "@type": "City", "name": "Thane" },
      { "@type": "State", "name": "Maharashtra" }
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "19:00"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Facade Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Structural Glazing" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Curtain Wall Systems" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "ACP Cladding" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Aluminium Facade" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Glass Railings" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Facade Maintenance AMC" } }
      ]
    }
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://fineglaze.com/" }
    ]
  };
  return /* @__PURE__ */ jsxs(Layout, { darkHero: true, children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Facade & Glazing Contractor in Pune and Mumbai | Fine Glaze",
        description: "Fine Glaze — top-rated facade contractor in Pune & Mumbai. Structural glazing, unitized curtain walls, ACP cladding & aluminium facades for IT parks, offices & malls. Embassy REIT awarded. ₹350–1200/sq ft. Free site visit.",
        canonical: "https://fineglaze.com/",
        keywords: "facade contractor Pune Mumbai, Fine Glaze, aluminium facade contractor, glazing contractor, building facade company, facade fabrication company",
        schemas: [organizationSchema, localBusinessSchema, breadcrumbSchema]
      }
    ),
    /* @__PURE__ */ jsx(HeroSection, {}),
    /* @__PURE__ */ jsx(TrustStrip, {}),
    /* @__PURE__ */ jsx(ServicesSection, {}),
    /* @__PURE__ */ jsx(PortfolioSection, {}),
    /* @__PURE__ */ jsx(ReviewsSection, {}),
    /* @__PURE__ */ jsx(ContactFormSection, {}),
    /* @__PURE__ */ jsx(CTASection, {})
  ] });
};
const About = lazy(() => import("./assets/About-BLTxHa6o.js"));
const Services = lazy(() => import("./assets/Services-DVNUtpCd.js"));
const Portfolio = lazy(() => import("./assets/Portfolio-BLzbQdY4.js"));
const ProjectDetail = lazy(() => import("./assets/ProjectDetail-C7-QfmLM.js"));
const Contact = lazy(() => import("./assets/Contact-aGsHARYP.js"));
const NotFound = lazy(() => import("./assets/NotFound-B8NgJ_7D.js"));
const Dev = lazy(() => import("./assets/Dev-DV8OlWTa.js"));
const ProjectsQR = lazy(() => import("./assets/ProjectsQR-BxwxGnAO.js"));
const AluminiumFacade = lazy(() => import("./assets/AluminiumFacade-gNlvnf_H.js"));
const StructuralGlazing = lazy(() => import("./assets/StructuralGlazing-DgsYfxDS.js"));
const CurtainWall = lazy(() => import("./assets/CurtainWall-Caa7HG-7.js"));
const AcpCladding = lazy(() => import("./assets/AcpCladding-DumzG4Em.js"));
const GlassRailings = lazy(() => import("./assets/GlassRailings-U9Nli_tf.js"));
const Maintenance = lazy(() => import("./assets/Maintenance-CTH0wmeV.js"));
const Skylights = lazy(() => import("./assets/Skylights-B0ADWFaG.js"));
const Louvers = lazy(() => import("./assets/Louvers-DkvwH1ft.js"));
const GlassPartitions = lazy(() => import("./assets/GlassPartitions-CNQWF9Ab.js"));
const Portal = lazy(() => import("./assets/Portal-IyqqLpqV.js"));
const Admin = lazy(() => import("./assets/Admin-BhUFcs4S.js"));
const AdminImages = lazy(() => import("./assets/AdminImages-Ba_zUUI5.js"));
const AdminLogos = lazy(() => import("./assets/AdminLogos-BxRLsgw9.js"));
const AdminBlogImages = lazy(() => import("./assets/AdminBlogImages-BO_TExqm.js"));
const AdminMedia = lazy(() => import("./assets/AdminMedia-afCrluvo.js"));
const AdminSiteContent = lazy(() => import("./assets/AdminSiteContent-BI8D0HK8.js"));
const FAQ = lazy(() => import("./assets/FAQ-CDsis_qb.js"));
const Blog = lazy(() => import("./assets/Blog-nKiZ1fNm.js"));
const BlogArticle = lazy(() => import("./assets/BlogArticle-qNjazrOc.js"));
const CityLanding = lazy(() => import("./assets/CityLanding-BUou2W3G.js"));
const CurtainWallPune = lazy(() => import("./assets/CurtainWallPune-S5gMqjpA.js"));
const StructuralGlazingPune = lazy(() => import("./assets/StructuralGlazingPune-qXe2zty0.js"));
const AcpCladdingPune = lazy(() => import("./assets/AcpCladdingPune-nBZJNXhx.js"));
const GlassRailingPune = lazy(() => import("./assets/GlassRailingPune-CffKMfhH.js"));
const FacadeContractorPune = lazy(() => import("./assets/FacadeContractorPune-DxEgvcP5.js"));
const FacadeContractorMumbai = lazy(() => import("./assets/FacadeContractorMumbai-Cj9-JGTj.js"));
const FacadeContractorNaviMumbai = lazy(() => import("./assets/FacadeContractorNaviMumbai-C8egiXZA.js"));
const FacadeContractorThane = lazy(() => import("./assets/FacadeContractorThane-CkRpmGIO.js"));
const CurtainWallMumbai = lazy(() => import("./assets/CurtainWallMumbai-b5GLT0tf.js"));
const StructuralGlazingMumbai = lazy(() => import("./assets/StructuralGlazingMumbai-qWKCCN5q.js"));
const AluminiumFacadeMumbai = lazy(() => import("./assets/AluminiumFacadeMumbai-B6ZkDuM6.js"));
const CurtainWallCostGuide = lazy(() => import("./assets/CurtainWallCostGuide-BM4EAguC.js"));
const AluminiumVsAcp = lazy(() => import("./assets/AluminiumVsAcp-Dj7MkKI3.js"));
const CommercialBuildingFacade = lazy(() => import("./assets/CommercialBuildingFacade-eJ2fRWlw.js"));
const FacadeWaterproofing = lazy(() => import("./assets/FacadeWaterproofing-C-HYdt_n.js"));
const PVDFvsPowderCoating = lazy(() => import("./assets/PVDFvsPowderCoating-obNLrYyG.js"));
const FacadeDesignGuide = lazy(() => import("./assets/FacadeDesignGuide-DvHGYTKK.js"));
const CurtainWallVsStructuralGlazing = lazy(() => import("./assets/CurtainWallVsStructuralGlazing-wJ7FQOjG.js"));
const ItParkFacade = lazy(() => import("./assets/ItParkFacade-D5nXhAuQ.js"));
const HospitalFacade = lazy(() => import("./assets/HospitalFacade-JIL0x9sx.js"));
const HotelFacade = lazy(() => import("./assets/HotelFacade-CrEyy-Y9.js"));
const MallFacade = lazy(() => import("./assets/MallFacade-CKCkMeXF.js"));
const ResidentialFacade = lazy(() => import("./assets/ResidentialFacade-gJL2QMxN.js"));
const IndustrialFacade = lazy(() => import("./assets/IndustrialFacade-CyqOwr4p.js"));
const FacadeMaintenanceAMC = lazy(() => import("./assets/FacadeMaintenanceAMC-BoE4PsuC.js"));
const PrivacyPolicy = lazy(() => import("./assets/PrivacyPolicy-BTpanUBH.js"));
const TermsOfService = lazy(() => import("./assets/TermsOfService-CuT8-lZL.js"));
const InspectionDashboard = lazy(() => import("./assets/InspectionDashboard-B66H_8b2.js"));
const InspectionNew = lazy(() => import("./assets/InspectionNew-BXS2NbRe.js"));
const InspectionView = lazy(() => import("./assets/InspectionView-CvEZe_GR.js"));
const queryClient = new QueryClient();
const L = ({ children }) => /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx(PageLoader, {}), children });
const AppWrapper = () => /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(TooltipProvider, { children: /* @__PURE__ */ jsxs(ErrorBoundary, { children: [
  /* @__PURE__ */ jsx(Toaster$1, {}),
  /* @__PURE__ */ jsx(Toaster, {}),
  /* @__PURE__ */ jsx(Outlet, {})
] }) }) });
const routes = [
  {
    path: "/",
    element: /* @__PURE__ */ jsx(AppWrapper, {}),
    children: [
      { index: true, element: /* @__PURE__ */ jsx(Index, {}) },
      { path: "about", element: /* @__PURE__ */ jsx(L, { children: /* @__PURE__ */ jsx(About, {}) }) },
      { path: "services", element: /* @__PURE__ */ jsx(L, { children: /* @__PURE__ */ jsx(Services, {}) }) },
      { path: "portfolio", element: /* @__PURE__ */ jsx(L, { children: /* @__PURE__ */ jsx(Portfolio, {}) }) },
      { path: "projects-qr", element: /* @__PURE__ */ jsx(L, { children: /* @__PURE__ */ jsx(ProjectsQR, {}) }) },
      { path: "project/:slug", element: /* @__PURE__ */ jsx(L, { children: /* @__PURE__ */ jsx(ProjectDetail, {}) }) },
      { path: "contact", element: /* @__PURE__ */ jsx(L, { children: /* @__PURE__ */ jsx(Contact, {}) }) },
      { path: "aluminium-facade", element: /* @__PURE__ */ jsx(L, { children: /* @__PURE__ */ jsx(AluminiumFacade, {}) }) },
      { path: "structural-glazing", element: /* @__PURE__ */ jsx(L, { children: /* @__PURE__ */ jsx(StructuralGlazing, {}) }) },
      { path: "curtain-wall-systems", element: /* @__PURE__ */ jsx(L, { children: /* @__PURE__ */ jsx(CurtainWall, {}) }) },
      { path: "acp-aluminium-cladding", element: /* @__PURE__ */ jsx(L, { children: /* @__PURE__ */ jsx(AcpCladding, {}) }) },
      { path: "glass-railings", element: /* @__PURE__ */ jsx(L, { children: /* @__PURE__ */ jsx(GlassRailings, {}) }) },
      { path: "maintenance-services", element: /* @__PURE__ */ jsx(L, { children: /* @__PURE__ */ jsx(Maintenance, {}) }) },
      { path: "skylights-canopies", element: /* @__PURE__ */ jsx(L, { children: /* @__PURE__ */ jsx(Skylights, {}) }) },
      { path: "aluminium-louvers", element: /* @__PURE__ */ jsx(L, { children: /* @__PURE__ */ jsx(Louvers, {}) }) },
      { path: "louvers", element: /* @__PURE__ */ jsx(L, { children: /* @__PURE__ */ jsx(Louvers, {}) }) },
      { path: "glass-partitions", element: /* @__PURE__ */ jsx(L, { children: /* @__PURE__ */ jsx(GlassPartitions, {}) }) },
      { path: "services/structural-glazing", element: /* @__PURE__ */ jsx(L, { children: /* @__PURE__ */ jsx(StructuralGlazing, {}) }) },
      { path: "services/curtain-wall", element: /* @__PURE__ */ jsx(L, { children: /* @__PURE__ */ jsx(CurtainWall, {}) }) },
      { path: "services/acp-cladding", element: /* @__PURE__ */ jsx(L, { children: /* @__PURE__ */ jsx(AcpCladding, {}) }) },
      { path: "portal", element: /* @__PURE__ */ jsx(L, { children: /* @__PURE__ */ jsx(Portal, {}) }) },
      { path: "admin", element: /* @__PURE__ */ jsx(L, { children: /* @__PURE__ */ jsx(Admin, {}) }) },
      { path: "admin/images", element: /* @__PURE__ */ jsx(L, { children: /* @__PURE__ */ jsx(AdminImages, {}) }) },
      { path: "admin/logos", element: /* @__PURE__ */ jsx(L, { children: /* @__PURE__ */ jsx(AdminLogos, {}) }) },
      { path: "admin/blog-images", element: /* @__PURE__ */ jsx(L, { children: /* @__PURE__ */ jsx(AdminBlogImages, {}) }) },
      { path: "admin/media", element: /* @__PURE__ */ jsx(L, { children: /* @__PURE__ */ jsx(AdminMedia, {}) }) },
      { path: "admin/content", element: /* @__PURE__ */ jsx(L, { children: /* @__PURE__ */ jsx(AdminSiteContent, {}) }) },
      { path: "faq", element: /* @__PURE__ */ jsx(L, { children: /* @__PURE__ */ jsx(FAQ, {}) }) },
      { path: "blog", element: /* @__PURE__ */ jsx(L, { children: /* @__PURE__ */ jsx(Blog, {}) }) },
      { path: "blog/:slug", element: /* @__PURE__ */ jsx(L, { children: /* @__PURE__ */ jsx(BlogArticle, {}) }) },
      { path: "facade-contractor/:city", element: /* @__PURE__ */ jsx(L, { children: /* @__PURE__ */ jsx(CityLanding, {}) }) },
      { path: "dev", element: /* @__PURE__ */ jsx(L, { children: /* @__PURE__ */ jsx(Dev, {}) }) },
      // 25 SEO pages
      { path: "curtain-wall-pune", element: /* @__PURE__ */ jsx(L, { children: /* @__PURE__ */ jsx(CurtainWallPune, {}) }) },
      { path: "structural-glazing-pune", element: /* @__PURE__ */ jsx(L, { children: /* @__PURE__ */ jsx(StructuralGlazingPune, {}) }) },
      { path: "acp-cladding-pune", element: /* @__PURE__ */ jsx(L, { children: /* @__PURE__ */ jsx(AcpCladdingPune, {}) }) },
      { path: "glass-railing-pune", element: /* @__PURE__ */ jsx(L, { children: /* @__PURE__ */ jsx(GlassRailingPune, {}) }) },
      { path: "facade-contractor-pune", element: /* @__PURE__ */ jsx(L, { children: /* @__PURE__ */ jsx(FacadeContractorPune, {}) }) },
      { path: "facade-contractor-mumbai", element: /* @__PURE__ */ jsx(L, { children: /* @__PURE__ */ jsx(FacadeContractorMumbai, {}) }) },
      { path: "facade-contractor-navi-mumbai", element: /* @__PURE__ */ jsx(L, { children: /* @__PURE__ */ jsx(FacadeContractorNaviMumbai, {}) }) },
      { path: "facade-contractor-thane", element: /* @__PURE__ */ jsx(L, { children: /* @__PURE__ */ jsx(FacadeContractorThane, {}) }) },
      { path: "curtain-wall-mumbai", element: /* @__PURE__ */ jsx(L, { children: /* @__PURE__ */ jsx(CurtainWallMumbai, {}) }) },
      { path: "structural-glazing-mumbai", element: /* @__PURE__ */ jsx(L, { children: /* @__PURE__ */ jsx(StructuralGlazingMumbai, {}) }) },
      { path: "aluminium-facade-mumbai", element: /* @__PURE__ */ jsx(L, { children: /* @__PURE__ */ jsx(AluminiumFacadeMumbai, {}) }) },
      { path: "curtain-wall-cost-guide", element: /* @__PURE__ */ jsx(L, { children: /* @__PURE__ */ jsx(CurtainWallCostGuide, {}) }) },
      { path: "aluminium-vs-acp-cladding", element: /* @__PURE__ */ jsx(L, { children: /* @__PURE__ */ jsx(AluminiumVsAcp, {}) }) },
      { path: "commercial-building-facade", element: /* @__PURE__ */ jsx(L, { children: /* @__PURE__ */ jsx(CommercialBuildingFacade, {}) }) },
      { path: "facade-waterproofing", element: /* @__PURE__ */ jsx(L, { children: /* @__PURE__ */ jsx(FacadeWaterproofing, {}) }) },
      { path: "pvdf-vs-powder-coating-aluminium", element: /* @__PURE__ */ jsx(L, { children: /* @__PURE__ */ jsx(PVDFvsPowderCoating, {}) }) },
      { path: "facade-design-guide", element: /* @__PURE__ */ jsx(L, { children: /* @__PURE__ */ jsx(FacadeDesignGuide, {}) }) },
      { path: "curtain-wall-vs-structural-glazing", element: /* @__PURE__ */ jsx(L, { children: /* @__PURE__ */ jsx(CurtainWallVsStructuralGlazing, {}) }) },
      { path: "it-park-facade", element: /* @__PURE__ */ jsx(L, { children: /* @__PURE__ */ jsx(ItParkFacade, {}) }) },
      { path: "hospital-facade", element: /* @__PURE__ */ jsx(L, { children: /* @__PURE__ */ jsx(HospitalFacade, {}) }) },
      { path: "hotel-facade", element: /* @__PURE__ */ jsx(L, { children: /* @__PURE__ */ jsx(HotelFacade, {}) }) },
      { path: "mall-facade", element: /* @__PURE__ */ jsx(L, { children: /* @__PURE__ */ jsx(MallFacade, {}) }) },
      { path: "residential-facade", element: /* @__PURE__ */ jsx(L, { children: /* @__PURE__ */ jsx(ResidentialFacade, {}) }) },
      { path: "industrial-facade", element: /* @__PURE__ */ jsx(L, { children: /* @__PURE__ */ jsx(IndustrialFacade, {}) }) },
      { path: "facade-amc-guide", element: /* @__PURE__ */ jsx(L, { children: /* @__PURE__ */ jsx(FacadeMaintenanceAMC, {}) }) },
      { path: "privacy-policy", element: /* @__PURE__ */ jsx(L, { children: /* @__PURE__ */ jsx(PrivacyPolicy, {}) }) },
      { path: "terms-of-service", element: /* @__PURE__ */ jsx(L, { children: /* @__PURE__ */ jsx(TermsOfService, {}) }) },
      // Site Inspection App
      { path: "inspection", element: /* @__PURE__ */ jsx(L, { children: /* @__PURE__ */ jsx(InspectionDashboard, {}) }) },
      { path: "inspection/new", element: /* @__PURE__ */ jsx(L, { children: /* @__PURE__ */ jsx(InspectionNew, {}) }) },
      { path: "inspection/:id", element: /* @__PURE__ */ jsx(L, { children: /* @__PURE__ */ jsx(InspectionView, {}) }) },
      { path: "*", element: /* @__PURE__ */ jsx(L, { children: /* @__PURE__ */ jsx(NotFound, {}) }) }
    ]
  }
];
injectSpeedInsights();
const createRoot = ViteReactSSG({ routes });
export {
  Button as B,
  CTASection as C,
  Dialog as D,
  Input as I,
  Layout as L,
  SEO as S,
  Textarea as T,
  useProjects as a,
  useProject as b,
  cn as c,
  createRoot,
  Label as d,
  Select as e,
  SelectTrigger as f,
  SelectValue as g,
  SelectContent as h,
  SelectItem as i,
  isSupabaseConfigured as j,
  DialogTrigger as k,
  DialogContent as l,
  DialogHeader as m,
  DialogTitle as n,
  Toaster as o,
  projectsData as p,
  fetchSiteMediaMap as q,
  SITE_MEDIA_MANIFEST as r,
  supabase as s,
  useToast as t,
  useSiteMedia as u
};
