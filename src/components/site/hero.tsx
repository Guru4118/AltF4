import { ArrowDownRight, ArrowUpRight, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroMockup } from "./mockups";

const checks = ["Thoughtful from day one", "Built around your business", "Ready to grow with you"];

export function Hero() {
  return (
    <section aria-labelledby="hero-h" className="relative isolate overflow-hidden pb-20 pt-16 lg:pb-28 lg:pt-24">
      <div aria-hidden className="pointer-events-none absolute -right-40 -top-32 -z-10 h-[620px] w-[620px] rounded-full bg-[#DFE9DF]/80 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -left-48 bottom-0 -z-10 h-96 w-96 rounded-full bg-[#75A48C]/10 blur-3xl" />
      <div className="container grid items-center gap-14 lg:grid-cols-[.94fr_1.06fr] lg:gap-10">
        <div className="relative z-10">
          <p className="animate-fade-up section-kicker"><Sparkles className="h-3.5 w-3.5" /> Independent digital studio</p>
          <h1 id="hero-h" className="animate-fade-up mt-7 max-w-[12ch] text-balance text-[clamp(3.15rem,6.3vw,5.6rem)] font-extrabold leading-[.98] tracking-[-.07em] delay-100">
            Build what <span className="relative whitespace-nowrap text-primary">moves you<span aria-hidden className="absolute -bottom-1 left-0 h-[7px] w-full rounded-full bg-[#75A48C]/55" /></span> forward.
          </h1>
          <p className="animate-fade-up mt-7 max-w-[47ch] text-base leading-[1.85] text-muted-foreground delay-200 sm:text-lg">
            We turn ambitious ideas and everyday business challenges into thoughtful websites, applications and software that make work better.
          </p>
          <div className="animate-fade-up mt-9 flex flex-wrap items-center gap-3 delay-300">
            <Button asChild size="lg" className="h-12 rounded-full px-6 shadow-lg shadow-primary/15"><a href="#contact">Start a conversation <ArrowUpRight className="ml-1 h-4 w-4" /></a></Button>
            <Button asChild size="lg" variant="outline" className="h-12 rounded-full border-primary/20 bg-white/65 px-6"><a href="#work">Explore our work <ArrowDownRight className="ml-1 h-4 w-4" /></a></Button>
          </div>
          <ul className="animate-fade-up mt-8 flex flex-wrap gap-x-5 gap-y-2 delay-500">
            {checks.map((item) => <li key={item} className="flex items-center gap-2 text-xs font-medium text-muted-foreground"><span className="grid h-4 w-4 place-items-center rounded-full bg-[#DFE9DF] text-primary"><Check className="h-2.5 w-2.5" /></span>{item}</li>)}
          </ul>
          <div className="mt-14 hidden items-center gap-3 border-t border-primary/10 pt-5 sm:flex">
            <span className="text-[10px] font-bold uppercase tracking-[.2em] text-muted-foreground">Our belief</span>
            <span className="h-px w-8 bg-[#75A48C]" />
            <span className="text-sm font-semibold tracking-tight">Good software should feel inevitable.</span>
          </div>
        </div>
        <div className="animate-slide-right relative delay-200">
          <div aria-hidden className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-primary/[.07] blur-2xl" />
          <div className="relative rotate-[1deg] rounded-[1.8rem] border border-primary/10 bg-white/75 p-2 shadow-[0_35px_100px_-45px_rgba(24,57,47,.5)] backdrop-blur-sm sm:p-3">
            <HeroMockup />
          </div>
          <div className="absolute -left-5 top-[18%] hidden -rotate-3 items-center gap-3 rounded-2xl border border-primary/10 bg-white px-4 py-3 shadow-xl shadow-primary/10 sm:flex">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#DFE9DF] text-primary"><Sparkles className="h-4 w-4" /></span>
            <span><span className="block text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">From idea</span><span className="block text-sm font-bold">To impact</span></span>
          </div>
          <div className="absolute -bottom-6 right-5 rounded-2xl border border-primary/10 bg-[#18392F] px-5 py-3 text-white shadow-xl shadow-primary/20 sm:right-10">
            <p className="text-[10px] font-semibold uppercase tracking-[.18em] text-white/55">AltF4 principle</p>
            <p className="mt-1 text-sm font-semibold">Clarity in every build.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
