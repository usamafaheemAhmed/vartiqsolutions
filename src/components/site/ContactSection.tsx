import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SERVICES, SITE } from "@/lib/site-data";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().max(30).optional(),
  service: z.string().min(1, "Please choose a service"),
  message: z.string().trim().min(10, "Tell us a little more (at least 10 characters)").max(2000),
});

type Errors = Partial<Record<keyof z.infer<typeof contactSchema>, string>>;

export function ContactSection() {
  const [errors, setErrors] = useState<Errors>({});

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    toast.success("Thank you! We'll get back to you within 24 hours.");
    form.reset();
  }

  const info = [
    { icon: Mail, label: "Email us", value: SITE.email },
    { icon: Phone, label: "Call us", value: SITE.phone },
    { icon: MapPin, label: "Visit us", value: SITE.address },
  ];

  return (
    <section className="py-20 md:py-24">
      <div className="container-site grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="bg-navy-gradient rounded-3xl p-8 text-navy-foreground md:p-10">
          <h2 className="text-3xl font-extrabold">Let's Work Together</h2>
          <p className="mt-3 text-navy-muted">
            Have a project in mind? Tell us about it and get a free consultation and quote.
          </p>
          <ul className="mt-10 space-y-6">
            {info.map(({ icon: Icon, label, value }) => (
              <li key={label} className="flex items-center gap-4">
                <span className="grid size-12 place-items-center rounded-xl bg-primary text-primary-foreground">
                  <Icon className="size-5" />
                </span>
                <div>
                  <p className="text-sm text-navy-muted">{label}</p>
                  <p className="font-semibold">{value}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <form
          onSubmit={onSubmit}
          noValidate
          className="rounded-3xl border border-border bg-card p-8 shadow-card md:p-10"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field id="name" label="Your Name" error={errors.name}>
              <Input id="name" name="name" placeholder="John Smith" className="h-11" />
            </Field>
            <Field id="email" label="Your Email" error={errors.email}>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@company.com"
                className="h-11"
              />
            </Field>
            <Field id="phone" label="Phone (optional)" error={errors.phone}>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+1 555 000 0000"
                className="h-11"
              />
            </Field>
            <Field id="service" label="Service" error={errors.service}>
              <select
                id="service"
                name="service"
                defaultValue=""
                className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                <option value="" disabled>
                  Choose a service
                </option>
                {SERVICES.map((s) => (
                  <option key={s.title} value={s.title}>
                    {s.title}
                  </option>
                ))}
                <option value="Other">Other</option>
              </select>
            </Field>
            <div className="sm:col-span-2">
              <Field id="message" label="Your Message" error={errors.message}>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us about your project..."
                />
              </Field>
            </div>
          </div>
          <Button type="submit" variant="brand" size="xl" className="mt-6 w-full sm:w-auto">
            Send Message <Send />
          </Button>
        </form>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-sm font-semibold text-foreground">
        {label}
      </Label>
      {children}
      {error ? <p className="text-sm text-destructive">{error}</p> : null}
    </div>
  );
}
