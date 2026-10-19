import { AppWindow, BarChart3, Globe, Lightbulb, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "./section";

const services = [
  { icon: AppWindow, title: "Web applications", text: "Customer portals, platforms and workflow tools, custom-built for the way you operate." },
  { icon: Smartphone, title: "Mobile applications", text: "Native or cross-platform apps for your customers, your staff or your product." },
  { icon: Globe, title: "Websites", text: "Fast, responsive sites built around your business and the people visiting them." },
  { icon: BarChart3, title: "Business software", text: "Dashboards, admin systems and internal tools that replace spreadsheets and manual reporting." },
  { icon: Lightbulb, title: "Product development", text: "Turn an idea or an existing workflow into a working product, from first sketch to launch." },
];

export function Services() {
  return (
    <Section id="services" tone="canvas" labelledBy="services-h">
      <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <SectionHeader
          id="services-h"
          title="What we design and build"
          description="Five kinds of work, one team. Most projects touch more than one, and we stay with you from first sketch to launch."
          className="mb-0 lg:sticky lg:top-24"
        >
          <Button asChild className="mt-2 self-start"><a href="#contact">Start a project</a></Button>
        </SectionHeader>
        <ul className="divide-y border-y">
          {services.map((s) => (
            <li key={s.title} className="flex gap-4 py-6">
              <span aria-hidden className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary"><s.icon className="h-5 w-5" /></span>
              <div>
                <h3 className="font-bold tracking-tight">{s.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
