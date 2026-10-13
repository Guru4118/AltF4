import { Compass, Rocket, Ruler, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";
import { Eyebrow, Section } from "./section";
import { Reveal } from "./reveal";

const steps = [
  { n: "01", icon: Compass, tint: "bg-orange-50 text-primary", title: "Understand", text: "We learn your business, your users and the problem underneath the request.", out: "Discovery brief" },
  { n: "02", icon: Ruler, tint: "bg-emerald-50 text-emerald-600", title: "Plan", text: "We agree on scope, the experience and the technical approach, with trade-offs explained.", out: "Scope & roadmap" },
  { n: "03", icon: Wrench, tint: "bg-violet-50 text-violet-600", title: "Build", text: "We design, develop and refine in short cycles, and you see working software throughout.", out: "Working releases" },
  { n: "04", icon: Rocket, tint: "bg-amber-50 text-amber-600", title: "Launch", text: "We test, deliver and help your team move the product into real daily use.", out: "Live product" },
];

export function Process() {
  return (
    <Section id="process" tone="canvas" labelledBy="process-h">
      <Reveal>
        <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-14">
          <Eyebrow>How we work</Eyebrow>
          <h2 id="process-h" className="mt-4 text-balance text-4xl font-extrabold leading-[1.05] tracking-tightest sm:text-5xl">From first conversation to software people use</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">A simple process, in the open. The problem picks the technology — we recommend what fits, and we tell you why.</p>
        </div>
      </Reveal>
      <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <li key={s.n}>
            <Reveal delay={i * 80} className="h-full">
            <article className="relative h-full overflow-hidden rounded-2xl border bg-background p-6 transition duration-300 hover:-translate-y-1 hover:shadow-frame">
              <span aria-hidden className="absolute right-4 top-3 text-5xl font-extrabold text-foreground/[0.05]">{s.n}</span>
              <span className={cn("grid h-11 w-11 place-items-center rounded-xl", s.tint)}><s.icon className="h-5 w-5" /></span>
              <h3 className="mt-6 text-lg font-bold tracking-tight">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              <p className="mt-5 text-[13px] font-medium text-foreground/70">{s.out}</p>
            </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
