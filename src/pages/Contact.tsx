import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
} from "lucide-react";
import { toast } from "sonner";

const projectTypes = [
  "Facade Fabrication",
  "Custom Railings",
  "Doors & Windows",
  "Maintenance Services",
  "Other",
];

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    content: "Pune, Maharashtra, India",
    link: null,
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "+91 98765 43210",
    link: "tel:+919876543210",
  },
  {
    icon: Mail,
    title: "Email Us",
    content: "info@fineglaze.com",
    link: "mailto:info@fineglaze.com",
  },
  {
    icon: Clock,
    title: "Working Hours",
    content: "Mon - Sat: 9:00 AM - 6:00 PM",
    link: null,
  },
];

const Contact = () => {
  const heroRef = useScrollAnimation();
  const formRef = useScrollAnimation();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  // Basic validation
  if (!formData.projectType) {
    toast.error("Please select a project type");
    return;
  }

  setIsSubmitting(true);

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: "YOUR_WEB3FORMS_ACCESS_KEY",
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        project_type: formData.projectType,
        message: formData.message,

        subject: "New Enquiry – Fine Glaze Website",
        from_name: "Fine Glaze Website",
      }),
    });

    const data = await res.json();

    if (data.success) {
      setIsSubmitted(true);
      toast.success("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        message: "",
      });
    } else {
      throw new Error("Submission failed");
    }
  } catch (error) {
    toast.error("Something went wrong. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};
