import { ArrowUpRight, Braces, Cloud, Database, Figma, Layers3, Server } from "lucide-react";
import { Eyebrow, Section } from "./section";
import { Reveal } from "./reveal";

const groups = [
  { icon: Braces, title: "Frontend", note: "Interfaces people enjoy using", tools: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"] },
  { icon: Server, title: "Backend", note: "Reliable application foundations", tools: ["Node.js", "Express", "Python", "REST APIs"] },
  { icon: Database, title: "Data", note: "Structured, dependable information", tools: ["PostgreSQL", "MySQL", "MongoDB"] },
  { icon: Cloud, title: "Cloud & delivery", note: "Ship, run and improve with confidence", tools: ["AWS", "Docker", "CI/CD", "Cloud deployment"] },
  { icon: Figma, title: "Product design", note: "Clear journeys and useful interfaces", tools: ["Figma", "UI/UX", "Prototyping"] },
  { icon: Layers3, title: "Connected systems", note: "Make your tools work together", tools: ["Integrations", "Automation", "Webhooks"] },
];

export function Technology() {
  return (
    <Section tone="canvas" id="technology" labelledBy="technology-h">
      <Reveal>
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div><Eyebrow>Our toolkit</Eyebrow><h2 id="technology-h" className="section-title mt-5 max-w-[15ch]">The right tools for <span className="text-primary">the right job.</span></h2></div>
          <p className="max-w-md text-sm leading-[1.85] text-muted-foreground">Technology should serve the outcome, not the other way around. We choose a stack based on your users, constraints and plans for growth.</p>
        </div>
      </Reveal>
      <div className="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((g, i) => <Reveal key={g.title} delay={i * 55}>
          <article className="h-full rounded-2xl border border-primary/10 bg-white/70 p-6 transition-all hover:-translate-y-1 hover:bg-white hover:shadow-frame">
            <div className="flex items-center justify-between"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#DFE9DF] text-primary"><g.icon className="h-5 w-5" /></span><ArrowUpRight className="h-4 w-4 text-primary/35" /></div>
            <h3 className="mt-5 text-lg font-extrabold">{g.title}</h3><p className="mt-1 text-xs text-muted-foreground">{g.note}</p>
            <div className="mt-5 flex flex-wrap gap-2">{g.tools.map((t) => <span key={t} className="rounded-lg border border-primary/10 bg-[#F7F9F6] px-3 py-1.5 text-xs font-semibold text-foreground/75">{t}</span>)}</div>
          </article>
        </Reveal>)}
      </div>
    </Section>
  );
}
