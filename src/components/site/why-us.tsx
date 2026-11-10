import { ArrowUpRight, Compass, Handshake, ShieldCheck, WandSparkles } from "lucide-react";
import { Eyebrow, Section } from "./section";
import { Reveal } from "./reveal";

const values = [
  { icon: Compass, title: "Start with the why", text: "We get clear on the problem before recommending a solution or a stack." },
  { icon: Handshake, title: "Work in the open", text: "You stay close to decisions, progress and trade-offs throughout the engagement." },
  { icon: ShieldCheck, title: "Build to last", text: "We care about maintainability, sensible foundations and a handover your team can use." },
  { icon: WandSparkles, title: "Sweat the details", text: "The small things matter: clear flows, thoughtful interactions and a polished finish." },
];

export function WhyUs() {
  return (
    <Section id="approach" labelledBy="approach-h">
      <div className="overflow-hidden rounded-[2rem] bg-[#18392F] text-white">
        <div className="grid gap-12 px-7 py-12 sm:px-10 lg:grid-cols-[.85fr_1.15fr] lg:px-14 lg:py-16">
          <Reveal>
            <Eyebrow>Why AltF4</Eyebrow>
            <h2 id="approach-h" className="mt-5 max-w-[10ch] text-4xl font-extrabold leading-[1.04] tracking-[-.05em] sm:text-5xl">Small studio. <span className="text-[#A7C7B3]">Big care.</span></h2>
            <p className="mt-5 max-w-[38ch] text-sm leading-[1.9] text-white/65">No unnecessary complexity. No mystery process. Just considered design, sound engineering and a team that takes your product seriously.</p>
            <a href="#contact" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#C6DDCC] transition hover:gap-3">Get to know us <ArrowUpRight className="h-4 w-4" /></a>
          </Reveal>
          <div className="grid gap-x-8 gap-y-9 sm:grid-cols-2">
            {values.map((v, i) => <Reveal key={v.title} delay={i * 70}>
              <div className="border-t border-white/15 pt-5"><v.icon className="h-5 w-5 text-[#A7C7B3]" /><h3 className="mt-4 text-base font-bold">{v.title}</h3><p className="mt-2 text-sm leading-relaxed text-white/60">{v.text}</p></div>
            </Reveal>)}
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-white/10 px-7 py-4 sm:px-10 lg:px-14"><span className="text-[10px] font-bold uppercase tracking-[.22em] text-white/45">BUILD WHAT'S NEXT.</span><span className="text-xs text-white/45">Thoughtfully made, together.</span></div>
      </div>
    </Section>
  );
}
