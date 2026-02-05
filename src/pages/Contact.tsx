import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <Layout>
      <section className="bg-slate-900 py-16 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="mt-4 max-w-xl text-slate-300">The contact experience has been simplified in this remake for faster client enquiries.</p>
        </div>
      </section>

      <section className="container mx-auto grid gap-10 px-4 py-16 lg:grid-cols-2">
        <div className="rounded-xl border bg-white p-6">
          <h2 className="text-2xl font-semibold">Send an enquiry</h2>
          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <Input required placeholder="Your name" />
            <Input required type="email" placeholder="Email address" />
            <Input placeholder="Phone number" />
            <Textarea required placeholder="Tell us about your project" rows={6} />
            <Button type="submit">Submit</Button>
          </form>
          {sent && <p className="mt-4 text-sm text-emerald-700">Thanks! We have received your request.</p>}
        </div>

        <div className="rounded-xl border bg-slate-50 p-6">
          <h2 className="text-2xl font-semibold text-slate-900">Visit or call</h2>
          <ul className="mt-6 space-y-3 text-slate-600">
            <li>Pune, Maharashtra, India</li>
            <li>+91 83692 33566</li>
            <li>info@fineglaze.com</li>
            <li>Mon-Sat: 9:00 AM - 6:00 PM</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
