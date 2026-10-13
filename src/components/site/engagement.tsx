import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Eyebrow, Section } from "./section";
import { Reveal } from "./reveal";

const models = [
  { title: "Fixed-scope project", text: "A defined product with a clear scope, timeline and handover. Best when you know what you need.", points: ["Scope agreed up front", "Milestone-based delivery", "Full handover"], cta: "Scope a project" },
  { title: "Ongoing partnership", text: "A steady team that keeps improving your product after launch. Best when the roadmap keeps evolving.", points: ["Flexible monthly capacity", "Shared roadmap", "Maintenance & support"], cta: "Talk about a partnership", featured: true },
  { title: "Improve what you have", text: "Review, stabilise or modernise an existing website, app or internal system without starting over.", points: ["Technical review", "Prioritised fixes", "Gradual modernisation"], cta: "Request a review" },
];

export function Engagement() {
  return (
    <Section id="about" labelledBy="eng-h">
      <Reveal>
        <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-14">
          <Eyebrow>Ways to work</Eyebrow>
          <h2 id="eng-h" className="mt-4 text-balance text-4xl font-extrabold leading-[1.05] tracking-tightest sm:text-5xl">Three shapes an engagement can take</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">We're a small studio. We'd rather be clear about how we work than make big claims.</p>
        </div>
      </Reveal>
      <div className="grid items-stretch gap-4 lg:grid-cols-3">
        {models.map((m, i) => (
          <Reveal key={m.title} delay={i * 80} className="h-full">
            <article className={cn("flex h-full flex-col rounded-2xl border bg-background p-7 transition duration-300 hover:-translate-y-1 hover:shadow-frame", m.featured && "border-primary/40")}>
              <h3 className="text-lg font-bold tracking-tight">{m.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.text}</p>
              <ul className="mt-6 flex-1 space-y-2.5 border-t pt-5 text-sm">
                {m.points.map((p) => <li key={p} className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" />{p}</li>)}
              </ul>
              {m.featured ? (
                <Button asChild className="mt-8 w-full"><a href="#contact">{m.cta} <ArrowRight className="h-4 w-4" /></a></Button>
              ) : (
                <Button asChild variant="outline" className="mt-8 w-full"><a href="#contact">{m.cta}</a></Button>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
