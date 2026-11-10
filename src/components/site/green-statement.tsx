import { ArrowDown, ArrowUpRight, Check } from "lucide-react";
import { Reveal } from "./reveal";

const commitments = [
  "A clear plan before the first line of code",
  "Thoughtful design backed by sound engineering",
  "Honest communication from start to handover",
];

export function GreenStatement() {
  return (
    <section aria-labelledby="green-statement-title" className="relative isolate overflow-hidden bg-[#245849] text-white">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute -right-32 -top-44 h-[34rem] w-[34rem] rounded-full border border-white/[0.09]" />
        <div className="absolute -right-12 -top-24 h-[25rem] w-[25rem] rounded-full border border-white/[0.09]" />
        <div className="absolute -bottom-52 -left-32 h-[34rem] w-[34rem] rounded-full bg-[#18392F]/55 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(#fff_0.7px,transparent_0.7px)] [background-size:18px_18px]" />
      </div>

      <div className="container relative py-20 sm:py-24 lg:py-32">
        <div className="grid items-end gap-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-20">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.08] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.2em] text-[#D2E5D7]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#A9D0B4]" /> The AltF4 difference
            </p>
            <h2 id="green-statement-title" className="mt-7 max-w-[13ch] text-balance text-4xl font-extrabold leading-[1.02] tracking-[-.055em] sm:text-6xl lg:text-[4.5rem]">
              Good ideas deserve <span className="text-[#B8D7C0]">great execution.</span>
            </h2>
            <p className="mt-7 max-w-[48ch] text-base leading-[1.9] text-white/70 sm:text-lg">
              We bring product thinking, purposeful design and dependable engineering together—so what you launch is useful today and ready for what's next.
            </p>
            <a href="#contact" className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#F4F7F2] px-6 py-3.5 text-sm font-bold text-[#18392F] shadow-lg shadow-black/10 transition hover:-translate-y-1 hover:bg-white">
              Let's build something <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-[1.75rem] border border-white/15 bg-[#18392F]/35 p-6 backdrop-blur-sm sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[.18em] text-[#B8D7C0]">What you can expect</p>
              <div className="mt-7 space-y-6">
                {commitments.map((item, index) => (
                  <div key={item} className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#B8D7C0]/35 bg-[#B8D7C0]/10 text-[#C7E1CE]"><Check className="h-4 w-4" /></span>
                    <div>
                      <p className="text-sm font-semibold leading-relaxed text-white sm:text-base">{item}</p>
                      <p className="mt-1 text-xs tracking-wide text-white/40">0{index + 1} / OUR COMMITMENT</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex items-center justify-between border-t border-white/15 pt-5">
                <span className="text-[10px] font-bold uppercase tracking-[.2em] text-white/45">BUILD WHAT'S NEXT.</span>
                <a href="#faq" aria-label="Read frequently asked questions" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/80 transition hover:bg-white/10"><ArrowDown className="h-4 w-4" /></a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
