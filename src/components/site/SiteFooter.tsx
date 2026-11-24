import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Send, Twitter, Youtube } from "lucide-react";
import { type FormEvent } from "react";
import { toast } from "sonner";

import { SERVICES, SITE } from "@/lib/site-data";
import { Logo } from "./Logo";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/pricing", label: "Pricing" },
  { to: "/contact", label: "Contact" },
] as const;

const socials = [
  // { icon: Facebook, label: "Facebook" },
  { icon: Linkedin, label: "LinkedIn" },
  // { icon: Twitter, label: "Twitter" },
  { icon: Instagram, label: "Instagram" },
  // { icon: Youtube, label: "YouTube" },
];

export function SiteFooter() {
  function subscribe(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = new FormData(form).get("email");
    if (typeof email !== "string" || !/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    toast.success("Thanks for subscribing!");
    form.reset();
  }

  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="container-site grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1fr_1.4fr]">
        <div>
          <Logo inverted />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-navy-muted">
            Your trusted IT partner for web development, digital marketing and business growth.
          </p>
          <div className="mt-6 flex gap-2.5">
            {socials.map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="grid size-9 place-items-center rounded-lg border border-navy-border text-navy-foreground transition-colors hover:border-primary hover:bg-primary"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <FooterCol title="Quick Links">
          {quickLinks.map((l) => (
            <li key={l.to}>
              <Link to={l.to} className="hover:text-primary-glow">
                {l.label}
              </Link>
            </li>
          ))}
        </FooterCol>

        <FooterCol title="Our Services">
          {SERVICES.map((s) => (
            <li key={s.title}>
              <Link to="/services" className="hover:text-primary-glow">
                {s.title}
              </Link>
            </li>
          ))}
        </FooterCol>

        <FooterCol title="Support">
          {[
            {
              title: "Help Center",
              to: "/contact",
            },
            {
              title: "FAQs",
              to: "/contact#FAQs",
            },
            {
              title: "Terms & Conditions",
              to: "/terms-conditions",
            },
            {
              title: "Privacy Policy",
              to: "/privacy-policy",
            },
          ].map((t) => (
            <li key={t.title}>
              <Link to={t.to} className="hover:text-primary-glow">
                {t.title}
              </Link>
            </li>
          ))}
        </FooterCol>

        <div>
          <h3 className="text-base font-bold">Newsletter</h3>
          <p className="mt-4 text-sm text-navy-muted">
            Subscribe to get updates and latest insights.
          </p>
          <form
            onSubmit={subscribe}
            className="mt-4 flex overflow-hidden rounded-lg border border-navy-border"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              placeholder="Your email address"
              className="min-w-0 flex-1 bg-transparent px-3.5 py-2.5 text-sm text-navy-foreground placeholder:text-navy-muted focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="grid w-11 place-items-center bg-primary text-primary-foreground transition hover:brightness-110"
            >
              <Send className="size-4" />
            </button>
          </form>
          <p className="mt-5 text-sm text-navy-muted">{SITE.email}</p>
        </div>
      </div>
      <div className="border-t border-navy-border">
        <div className="container-site flex flex-col items-center justify-between gap-2 py-5 text-sm text-navy-muted sm:flex-row">
          <p>© {new Date().getFullYear()} Vantriqsolutions. All Rights Reserved.</p>
          <p>{SITE.domain}</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-base font-bold">{title}</h3>
      <ul className="mt-4 space-y-2.5 text-sm text-navy-muted">{children}</ul>
    </div>
  );
}
