import { Section, SectionHeader, ruledItem } from "./section";

const principles = [
  { title: "Start with the problem", text: "We work out what's worth building before deciding how to build it, then aim for the simplest version that's genuinely useful." },
  { title: "Right technology, not trendy", text: "We choose tools for your requirements and long-term needs, and explain the reasoning in plain language." },
  { title: "Clear scope and estimates", text: "You get a defined scope and an estimate with the assumptions behind it, before any work begins." },
  { title: "Built to be handed over", text: "You own what we build. We document it so your team, or another team, can maintain it." },
];

export function About() {
  return (
    <Section id="about" labelledBy="about-h">
      <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <SectionHeader
          id="about-h"
          title="A small studio that starts with your problem"
          description="AltF4 is a new studio, and we'd rather say so than claim a track record we haven't earned yet. What we can show you is how we work."
          className="mb-0 lg:sticky lg:top-24"
        />
        <ul className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
          {principles.map((p) => (
            <li key={p.title} className={ruledItem}>
              <h3 className="text-lg font-bold tracking-tight">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
