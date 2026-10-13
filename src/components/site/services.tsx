import { AppWindow, BarChart3, Check, Globe, Lightbulb, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Eyebrow, Section } from "./section";
import { Reveal } from "./reveal";

const services = [
  { icon: AppWindow, tint: "bg-orange-50 text-primary", title: "Web applications", text: "Custom apps for workflows, customer portals, platforms and day-to-day operations." },
  { icon: Smartphone, tint: "bg-emerald-50 text-emerald-600", title: "Mobile applications", text: "Native or cross-platform apps for your customers, your staff or your product." },
  { icon: Globe, tint: "bg-violet-50 text-violet-600", title: "Websites", text: "Fast, responsive sites built around your business and the people visiting them." },
  { icon: BarChart3, tint: "bg-amber-50 text-amber-600", title: "Business software", text: "Dashboards, admin systems and internal tools shaped around how your team works." },
  { icon: Lightbulb, tint: "bg-sky-50 text-sky-600", title: "Product development", text: "Turn an idea or an existing workflow into a working product, from first sketch to launch." },
];

const points = ["We start with the problem", "We build for the real world", "We communicate clearly", "Right technology, not trendy"];

export function Services() {
  return (
    <Section id="services" labelledBy="services-h">
      <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal className="lg:sticky lg:top-24">
          <Eyebrow>Services</Eyebrow>
          <h2 id="services-h" className="mt-4 max-w-[14ch] text-balance text-4xl font-extrabold leading-[1.05] tracking-tightest sm:text-5xl">Everything you need to get it built</h2>
          <p className="mt-4 max-w-[42ch] text-base leading-relaxed text-muted-foreground">Five kinds of work, one team. Most projects touch more than one, and we stay with you from the first sketch through launch.</p>
          <ul className="mt-6 space-y-2.5 text-sm">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" />{p}</li>
            ))}
          </ul>
          <Button asChild className="mt-8"><a href="#contact">Start a project</a></Button>
        </Reveal>
        <div className="space-y-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <article className="flex gap-4 rounded-2xl border bg-background p-5 transition duration-300 hover:-translate-y-0.5 hover:shadow-frame">
                <span className={cn("grid h-11 w-11 shrink-0 place-items-center rounded-xl", s.tint)}><s.icon className="h-5 w-5" /></span>
                <div>
                  <h3 className="font-bold tracking-tight">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
