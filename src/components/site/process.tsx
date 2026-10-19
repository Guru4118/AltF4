import { Section, SectionHeader, ruledItem } from "./section";

const steps = [
  { title: "Understand", text: "We learn your business, your users and the problem underneath the request.", out: "Discovery brief" },
  { title: "Plan", text: "We agree on scope, the experience and the technical approach, with trade-offs explained.", out: "Scope and roadmap" },
  { title: "Build", text: "We design, develop and refine in short cycles, and you see working software throughout.", out: "Working releases" },
  { title: "Launch", text: "We test, deliver and help your team move the product into real daily use.", out: "Live product" },
];

export function Process() {
  return (
    <Section id="process" tone="canvas" labelledBy="process-h">
      <SectionHeader
        id="process-h"
        align="center"
        title="From first conversation to software people use"
        description="A simple process, in the open. The problem picks the technology: we recommend what fits and tell you why."
      />
      <ol className="grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <li key={s.title} className={`${ruledItem} flex flex-col`}>
            <p className="text-sm font-semibold text-accent-foreground">Step {i + 1}</p>
            <h3 className="mt-2 text-lg font-bold tracking-tight">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            <p className="mt-auto pt-4 text-sm"><span className="text-muted-foreground">You get: </span><span className="font-medium">{s.out}</span></p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
