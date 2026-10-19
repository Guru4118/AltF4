import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CONTACT_EMAIL } from "./config";
import { Section, SectionHeader } from "./section";

const hints = ["What you're trying to solve", "Who will use it", "The tools you use today", "Any deadline that matters"];
const types = ["Website", "Web application", "Mobile application", "Business software", "Not sure yet"];

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
    <Section id="contact" tone="canvas" labelledBy="contact-h">
      <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <SectionHeader
          id="contact-h"
          title="Let's work out what to build."
          description="Tell us what you're trying to build, improve or solve. We'll reply within two working days with a sensible next step."
          className="mb-0"
        >
          <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex min-h-10 items-center self-start rounded-md text-sm font-semibold text-accent-foreground underline underline-offset-4 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Or email us directly</a>
          <div className="mt-6 border-t pt-6">
            <h3 className="text-sm font-bold">Helpful to include</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {hints.map((h) => <li key={h} className="flex items-center gap-2"><Check aria-hidden className="h-4 w-4 shrink-0 text-primary" />{h}</li>)}
            </ul>
            <p className="mt-3 text-sm text-muted-foreground">No formal brief needed. A rough idea is enough to start.</p>
          </div>
        </SectionHeader>
        <Card className="bg-background shadow-frame">
          <form onSubmit={onSubmit} className="space-y-5 p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2"><Label htmlFor="name">Name</Label><Input id="name" name="name" required autoComplete="name" placeholder="Your name" /></div>
              <div className="space-y-2"><Label htmlFor="email">Work email</Label><Input id="email" name="email" type="email" required autoComplete="email" placeholder="you@company.com" /></div>
            </div>
            <fieldset>
              <legend className="mb-2 text-[13px] font-medium leading-none">What are you looking to build?</legend>
              <div className="flex flex-wrap gap-2">
                {types.map((t) => (
                  <label key={t} className="cursor-pointer">
                    <input type="radio" name="type" value={t} checked={type === t} onChange={() => setType(t)} className="peer sr-only" />
                    <span className="inline-flex min-h-10 items-center rounded-full border px-4 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground peer-checked:border-primary peer-checked:bg-primary peer-checked:text-primary-foreground peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2">{t}</span>
                  </label>
                ))}
              </div>
            </fieldset>
            <div className="space-y-2"><Label htmlFor="details">Tell us a little more</Label><Textarea id="details" name="details" required placeholder="What problem are you trying to solve?" /></div>
            <Button type="submit" size="lg" className="w-full">Start a project <ArrowRight className="h-4 w-4" /></Button>
            <p role="status" className="min-h-5 text-center text-[13px] leading-5 text-muted-foreground">{sent ? "Opening your email app with the details filled in." : "No spam. We only use this to reply to you."}</p>
          </form>
        </Card>
      </div>
    </Section>
  );
}
