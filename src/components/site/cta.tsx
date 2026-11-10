import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { Section } from "./section";
import { Reveal } from "./reveal";

const CONTACT_EMAIL = "hello@altf4studios.in"; // Confirm this mailbox is active before publishing.
const types = ["Website", "Web application", "Mobile app", "Business software", "UI/UX design", "Not sure yet"];

export function Contact() {
  const [type, setType] = useState("Not sure yet");
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = `Name: ${f.get("name")}\nEmail: ${f.get("email")}\nCompany: ${f.get("company") || "Not provided"}\nProject type: ${type}\nBudget: ${f.get("budget") || "Not provided"}\n\n${f.get("details")}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("New project enquiry")}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <Section id="contact" labelledBy="contact-h">
      <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="section-kicker">Have something in mind?</p><h2 id="contact-h" className="mt-5 max-w-[12ch] text-balance text-4xl font-extrabold leading-[1.05] tracking-tightest sm:text-5xl">Let’s make the next move <span className="text-primary">together.</span></h2>
          <p className="mt-4 max-w-[42ch] text-base leading-relaxed text-muted-foreground">Tell us what you're trying to build, improve or solve. We'll help you figure out the right way forward.</p>
          <a href={`mailto:${CONTACT_EMAIL}`} className="mt-6 inline-flex text-sm font-semibold text-primary underline-offset-4 hover:underline">Talk to us</a>
          <p className="mt-3 text-[13px] text-muted-foreground">We reply within two working days.</p>
        </Reveal>
        <Reveal delay={120}>
          <form onSubmit={onSubmit} className="space-y-5 rounded-[1.5rem] border border-primary/10 bg-white p-6 shadow-[0_28px_80px_-48px_rgba(24,57,47,.42)] sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2"><Label htmlFor="name">Name</Label><Input id="name" name="name" required autoComplete="name" placeholder="Your name" /></div>
              <div className="space-y-2"><Label htmlFor="email">Email</Label><Input id="email" name="email" type="email" required autoComplete="email" placeholder="you@company.com" /></div>
              <div className="space-y-2"><Label htmlFor="company">Company <span className="text-muted-foreground">(optional)</span></Label><Input id="company" name="company" autoComplete="organization" placeholder="Your company" /></div>
              <div className="space-y-2"><Label htmlFor="budget">Estimated budget <span className="text-muted-foreground">(optional)</span></Label><select id="budget" name="budget" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><option value="">Select a range</option><option>Under ₹25,000</option><option>₹25,000 – ₹75,000</option><option>₹75,000 – ₹2,00,000</option><option>₹2,00,000+</option><option>Not sure yet</option></select></div>
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
            <p role="status" className="min-h-5 text-center text-[13px] leading-5 text-muted-foreground">{sent ? "Your email app should open with the enquiry details. Review and send the email to complete your enquiry." : "No spam. We only use this to reply to you."}</p>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
