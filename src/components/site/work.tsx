import { Eyebrow, Section } from "./section";
import { Reveal } from "./reveal";

const projects = [
  { type: "Web application", title: "Business Operations Platform", problem: "Work is spread across spreadsheets, chat threads and email. Nobody has the full picture.", solution: "One system with shared workflows, role-based access and live status.", points: ["Role-based access", "Approval workflows", "Audit trail"] },
  { type: "Mobile application", title: "Mobile Customer Experience", problem: "Customers phone or message to book, check status and reorder.", solution: "A focused app where they do it themselves, connected to the systems your team already uses.", points: ["Self-service booking", "Order tracking", "Push notifications"] },
  { type: "Dashboard", title: "Analytics & Management", problem: "The numbers exist, but they sit in five systems and get compiled by hand.", solution: "A live dashboard that pulls the sources together and highlights what needs attention.", points: ["Live data sources", "Daily attention list", "Shareable reports"] },
];

export function Work() {
  return (
    <Section id="work" tone="canvas" labelledBy="work-h">
      <Reveal>
        <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-14">
          <Eyebrow>Selected concepts</Eyebrow>
          <h2 id="work-h" className="mt-4 text-balance text-4xl font-extrabold leading-[1.05] tracking-tightest sm:text-5xl">The kind of problems we're set up to solve</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">AltF4 is a new studio, so these are concept projects: designed and scoped the way we'd approach a real engagement.</p>
        </div>
      </Reveal>
      <div className="grid gap-4 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 90} className="h-full">
            <article className="flex h-full flex-col rounded-2xl border bg-background p-7 transition duration-300 hover:-translate-y-1 hover:shadow-frame">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">{p.type}</p>
              <h3 className="mt-4 text-xl font-bold tracking-tight">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.problem}</p>
              <p className="mt-3 text-sm leading-relaxed">{p.solution}</p>
              <ul className="mt-6 space-y-1.5 border-t pt-5 text-sm text-muted-foreground">
                {p.points.map((point) => <li key={point}>{point}</li>)}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
      <p className="mt-8 text-center text-[13px] text-muted-foreground">Concept work for illustration. Not client products.</p>
    </Section>
  );
}
