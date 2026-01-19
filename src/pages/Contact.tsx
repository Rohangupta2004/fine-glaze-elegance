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
        access_key: "74dce7dc-85a9-4479-ab00-bd002f23409a",
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
  return (
<Layout>
{/* Hero Section */}
<section className="pt-32 pb-20 bg-muted" ref={heroRef.ref}>
<div className="container mx-auto px-4">
<div
className={cn(
"max-w-3xl mx-auto text-center space-y-6 slide-up",
heroRef.isVisible && "visible"
)}
>
<span className="text-primary font-medium uppercase tracking-wider text-sm">
Contact Us
</span>
<h1 className="text-4xl md:text-5xl font-bold text-foreground">
Let's Discuss Your Project
</h1>
<p className="text-muted-foreground text-lg">
Ready to transform your building's facade? Get in touch with our
team for a free consultation and quote.
</p>
</div>
</div>
</section>

{/* Contact Section */}  
  <section className="py-20 bg-background" ref={formRef.ref}>  
    <div className="container mx-auto px-4">  
      <div className="grid lg:grid-cols-3 gap-12">  
        {/* Contact Info */}  
        <div  
          className={cn(  
            "space-y-8 slide-up",  
            formRef.isVisible && "visible"  
          )}  
        >  
          <div>  
            <h2 className="text-2xl font-bold text-foreground mb-4">  
              Get in Touch  
            </h2>  
            <p className="text-muted-foreground">  
              Have a project in mind? Reach out to us through any of the  
              channels below.  
            </p>  
          </div>  

          <div className="space-y-6">  
            {contactInfo.map((item) => {  
              const ItemIcon = item.icon;  
              const Wrapper = item.link ? "a" : "div";  
              return (  
                <Wrapper  
                  key={item.title}  
                  href={item.link || undefined}  
                  className="flex items-start gap-4 group"  
                >  
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">  
                    <ItemIcon size={22} className="text-primary group-hover:text-primary-foreground" />  
                  </div>  
                  <div>  
                    <p className="font-medium text-foreground">  
                      {item.title}  
                    </p>  
                    <p className="text-muted-foreground text-sm">  
                      {item.content}  
                    </p>  
                  </div>  
                </Wrapper>  
              );  
            })}  
          </div>  
        </div>  

        {/* Contact Form */}  
        <div  
          className={cn(  
            "lg:col-span-2 slide-up",  
            formRef.isVisible && "visible"  
          )}  
          style={{ transitionDelay: "0.1s" }}  
        >  
          <div className="glass-card metallic-border p-8">  
            {isSubmitted ? (  
              <div className="text-center py-12 space-y-4">  
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">  
                  <CheckCircle2 size={32} className="text-primary" />  
                </div>  
                <h3 className="text-2xl font-bold text-foreground">  
                  Thank You!  
                </h3>  
                <p className="text-muted-foreground max-w-md mx-auto">  
                  Your message has been received. Our team will review your  
                  inquiry and get back to you within 24 hours.  
                </p>  
                <Button  
                  onClick={() => {  
                    setIsSubmitted(false);  
                    setFormData({  
                      name: "",  
                      email: "",  
                      phone: "",  
                      projectType: "",  
                      message: "",  
                    });  
                  }}  
                  variant="outline"  
                  className="mt-4"  
                >  
                  Send Another Message  
                </Button>  
              </div>  
            ) : (  
              <form onSubmit={handleSubmit} className="space-y-6">  
                <div className="grid md:grid-cols-2 gap-6">  
                  {/* Name */}  
                  <div className="space-y-2">  
                    <Label htmlFor="name">Full Name *</Label>  
                    <Input  
                      id="name"  
                      name="name"  
                      placeholder="John Doe"  
                      required  
                      value={formData.name}  
                      onChange={handleChange}  
                    />  
                  </div>  

                  {/* Email */}  
                  <div className="space-y-2">  
                    <Label htmlFor="email">Email Address *</Label>  
                    <Input  
                      id="email"  
                      name="email"  
                      type="email"  
                      placeholder="john@example.com"  
                      required  
                      value={formData.email}  
                      onChange={handleChange}  
                    />  
                  </div>  
                </div>  

                <div className="grid md:grid-cols-2 gap-6">  
                  {/* Phone */}  
                  <div className="space-y-2">  
                    <Label htmlFor="phone">Phone Number *</Label>  
                    <Input  
                      id="phone"  
                      name="phone"  
                      type="tel"  
                      placeholder="+91 98765 43210"  
                      required  
                      value={formData.phone}  
                      onChange={handleChange}  
                    />  
                  </div>  

                  {/* Project Type */}  
                  <div className="space-y-2">  
                    <Label htmlFor="projectType">Project Type *</Label>  
                    <Select  
                      value={formData.projectType}  
                      onValueChange={(value) =>  
                        setFormData((prev) => ({  
                          ...prev,  
                          projectType: value,  
                        }))  
                      }  
                      required  
                    >  
                      <SelectTrigger>  
                        <SelectValue placeholder="Select a service" />  
                      </SelectTrigger>  
                      <SelectContent>  
                        {projectTypes.map((type) => (  
                          <SelectItem key={type} value={type}>  
                            {type}  
                          </SelectItem>  
                        ))}  
                      </SelectContent>  
                    </Select>  
                  </div>  
                </div>  

                {/* Message */}  
                <div className="space-y-2">  
                  <Label htmlFor="message">Project Details *</Label>  
                  <Textarea  
                    id="message"  
                    name="message"  
                    placeholder="Tell us about your project, requirements, and any specific questions you have..."  
                    rows={5}  
                    required  
                    value={formData.message}  
                    onChange={handleChange}  
                  />  
                </div>  

                {/* Submit */}  
                <Button  
                  type="submit"  
                  disabled={isSubmitting}  
                  className="w-full btn-glossy text-primary-foreground border-0 py-6"  
                >  
                  {isSubmitting ? (  
                    <>  
                      <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />  
                      Sending...  
                    </>  
                  ) : (  
                    <>  
                      <Send size={18} className="mr-2" />  
                      Send Message  
                    </>  
                  )}  
                </Button>  

                <p className="text-xs text-muted-foreground text-center">  
                  By submitting this form, you agree to our privacy policy.  
                  We'll never share your information.  
                </p>  
              </form>  
            )}  
          </div>  
        </div>  
      </div>  
    </div>  
  </section>  
</Layout>

);
};

export default Contact;
