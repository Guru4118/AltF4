import { ArrowUpRight, BarChart3, CheckCircle2, Smartphone, Workflow } from "lucide-react";
import { Eyebrow, Section } from "./section";
import { Reveal } from "./reveal";

const projects = [
  { type: "Web application", title: "Business Operations Platform", problem: "Work is spread across spreadsheets, chat threads and email. Nobody has the full picture.", solution: "One connected workspace for shared workflows, role-based access and live status.", points: ["Role-based access", "Approval workflows", "Audit trail"], icon: Workflow, theme: "forest" },
  { type: "Mobile application", title: "Mobile Customer Experience", problem: "Customers phone or message to book, check status and reorder.", solution: "A focused app where customers can help themselves, connected to the systems a team already uses.", points: ["Self-service booking", "Order tracking", "Push notifications"], icon: Smartphone, theme: "sage" },
  { type: "Dashboard", title: "Analytics & Management", problem: "Important numbers sit in five systems and get compiled by hand.", solution: "A live dashboard that brings sources together and highlights what needs attention.", points: ["Live data sources", "Daily attention list", "Shareable reports"], icon: BarChart3, theme: "mist" },
];

function ProjectPreview({ theme, Icon }: { theme: string; Icon: typeof Workflow }) {
  return (
    <div className={`relative mb-6 min-h-[190px] overflow-hidden rounded-xl border border-primary/10 p-4 ${theme === "forest" ? "bg-[#E7EEE8]" : theme === "sage" ? "bg-[#E5EEE8]" : "bg-[#EEF2EC]"}`}>
      <div className="absolute -right-12 -top-20 h-52 w-52 rounded-full border border-primary/10" />
      <div className="absolute -right-2 -top-10 h-36 w-36 rounded-full border border-primary/10" />
      <div className="relative rounded-lg border border-primary/10 bg-white/90 p-3 shadow-lg shadow-primary/5">
        <div className="flex items-center justify-between border-b border-primary/10 pb-2"><div className="flex items-center gap-2"><span className="grid h-6 w-6 place-items-center rounded-md bg-primary text-white"><Icon className="h-3 w-3" /></span><span className="text-[10px] font-bold text-foreground/75">Workspace overview</span></div><span className="h-1.5 w-10 rounded-full bg-[#DFE9DF]" /></div>
        <div className="mt-3 grid grid-cols-3 gap-2">{["Overview", "In progress", "Completed"].map((label, i) => <div key={label} className="rounded-md bg-[#F4F7F2] p-2"><span className="block text-[8px] text-muted-foreground">{label}</span><span className="mt-1 block h-3 w-8 rounded-sm bg-primary/15" /><span className="mt-1 block h-1 w-full rounded-full bg-[#DFE9DF]"><span className="block h-1 rounded-full bg-[#75A48C]" style={{ width: `${[72, 48, 88][i]}%` }} /></span></div>)}</div>
        <div className="mt-3 flex items-end gap-1.5">{[32, 48, 40, 68, 55, 82, 62, 94, 72, 86, 65, 100].map((h, i) => <span key={i} className="flex-1 rounded-t-[3px] bg-primary/20" style={{ height: `${h * .38}px` }} />)}</div>
      </div>
      <span className="absolute bottom-4 right-4 flex items-center gap-1 rounded-full border border-primary/10 bg-white/85 px-2.5 py-1 text-[9px] font-semibold text-primary"><CheckCircle2 className="h-3 w-3" /> Concept preview</span>
    </div>
  );
}

export function Work() {
  return (
    <Section id="work" tone="canvas" labelledBy="work-h">
      <Reveal>
        <div className="mb-12 flex flex-col justify-between gap-5 lg:mb-14 lg:flex-row lg:items-end">
          <div><Eyebrow>Selected concepts</Eyebrow><h2 id="work-h" className="section-title mt-5 max-w-[15ch]">Imagine what <span className="text-primary">we could build.</span></h2></div>
          <p className="max-w-md text-sm leading-[1.85] text-muted-foreground">A look at the kinds of digital products and business challenges we love working on. These are illustrative concepts, not client engagements.</p>
        </div>
      </Reveal>
      <div className="grid gap-4 lg:grid-cols-3">
        {projects.map((p, i) => <Reveal key={p.title} delay={i * 90} className="h-full">
          <article className="flex h-full flex-col rounded-[1.4rem] border border-primary/10 bg-white/80 p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_25px_65px_-42px_rgba(24,57,47,.45)] sm:p-5">
            <ProjectPreview theme={p.theme} Icon={p.icon} />
            <div className="flex items-center justify-between"><span className="text-[10px] font-bold uppercase tracking-[.16em] text-primary">{p.type}</span><span className="text-[10px] font-semibold text-muted-foreground">Concept 0{i + 1}</span></div>
            <h3 className="mt-3 text-xl font-extrabold tracking-tight">{p.title}</h3>
            <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground/75">The challenge</p><p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.problem}</p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground/75">A considered solution</p><p className="mt-1 text-sm leading-relaxed">{p.solution}</p>
            <ul className="mt-5 flex flex-wrap gap-1.5 border-t border-primary/10 pt-4">{p.points.map((point) => <li key={point} className="rounded-full bg-[#F0F4EF] px-2.5 py-1 text-[10px] font-semibold text-primary/80">{point}</li>)}</ul>
          </article>
        </Reveal>)}
      </div>
    </Section>
  );
}
