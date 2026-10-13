import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { Section } from "./section";
import { Reveal } from "./reveal";

const CONTACT_EMAIL = "hello@your-domain.com"; // TODO: replace with your real address
const types = ["Website", "Web app", "Mobile app", "Business software", "Not sure yet"];

export function Contact() {
  const [type, setType] = useState("Not sure yet");
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = `Name: ${f.get("name")}\nEmail: ${f.get("email")}\nType: ${type}\n\n${f.get("details")}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("New project enquiry")}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <Section id="contact" labelledBy="contact-h">
      <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <h2 id="contact-h" className="max-w-[14ch] text-balance text-4xl font-extrabold leading-[1.05] tracking-tightest sm:text-5xl">Your next product just got easier to start.</h2>
          <p className="mt-4 max-w-[42ch] text-base leading-relaxed text-muted-foreground">Tell us what you're trying to build, improve or solve. We'll help you figure out the right way forward.</p>
          <a href={`mailto:${CONTACT_EMAIL}`} className="mt-6 inline-flex text-sm font-semibold text-primary underline-offset-4 hover:underline">Talk to us</a>
          <p className="mt-3 text-[13px] text-muted-foreground">We reply within two working days.</p>
        </Reveal>
        <Reveal delay={120}>
          <form onSubmit={onSubmit} className="space-y-5 rounded-2xl border bg-background p-6 shadow-frame sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2"><Label htmlFor="name">Name</Label><Input id="name" name="name" required autoComplete="name" placeholder="Your name" /></div>
              <div className="space-y-2"><Label htmlFor="email">Work email</Label><Input id="email" name="email" type="email" required autoComplete="email" placeholder="you@company.com" /></div>
            </div>
            <fieldset className="space-y-2">
              <legend className="mb-2 text-[13px] font-medium leading-none">What are you looking to build?</legend>
              <div className="flex flex-wrap gap-2">
                {types.map((t) => (
                  <button key={t} type="button" aria-pressed={type === t} onClick={() => setType(t)}
                    className={cn("rounded-full border px-3 py-1 text-[13px] leading-5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", type === t ? "border-primary bg-primary font-semibold text-primary-foreground" : "text-muted-foreground hover:bg-accent hover:text-foreground")}>{t}</button>
                ))}
              </div>
            </fieldset>
            <div className="space-y-2"><Label htmlFor="details">Tell us a little more</Label><Textarea id="details" name="details" required placeholder="What problem are you trying to solve?" /></div>
            <Button type="submit" size="lg" className="w-full">Start a project <ArrowRight className="h-4 w-4" /></Button>
            <p role="status" className="min-h-5 text-center text-[13px] leading-5 text-muted-foreground">{sent ? "Opening your email app with the details filled in." : "No spam. We only use this to reply to you."}</p>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
