import { ArrowRight, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroMockup } from "./mockups";

const checks = ["Free intro conversation", "Clear scope before we start", "You own what we build"];

export function Hero() {
  return (
    <section aria-labelledby="hero-h" className="overflow-hidden pb-16 pt-14 lg:pb-24 lg:pt-20">
      <div className="container">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="animate-fade-up inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
              <Sparkles className="h-3.5 w-3.5" /> Software studio
            </p>
            <h1 id="hero-h" className="animate-fade-up mt-5 text-balance text-5xl font-extrabold leading-[0.98] tracking-tightest delay-100 sm:text-6xl">
              Software built around <span className="text-primary">how your business works.</span>
            </h1>
            <p className="animate-fade-up mt-5 max-w-[48ch] text-pretty text-base leading-relaxed text-muted-foreground delay-200 sm:text-lg">
              Bring us an idea, a business problem, or a workflow held together by spreadsheets. We'll design and build the website, app, or internal tool that replaces it.
            </p>
            <div className="animate-fade-up mt-8 flex flex-wrap items-center gap-3 delay-300">
              <Button asChild size="lg"><a href="#contact">Start a project <ArrowRight className="h-4 w-4" /></a></Button>
              <Button asChild size="lg" variant="outline"><a href="#work">View our work</a></Button>
            </div>
            <ul className="animate-fade-up mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground delay-500">
              {checks.map((item) => (
                <li key={item} className="flex items-center gap-1.5"><Check className="h-4 w-4 text-primary" />{item}</li>
              ))}
            </ul>
          </div>
          <div className="animate-slide-right relative delay-200" role="img" aria-label="Concept operations overview">
            <div aria-hidden className="absolute -inset-8 -z-10 rounded-[2rem] bg-primary/10 blur-3xl" />
            <HeroMockup />
            <div className="absolute -right-2 -top-4 hidden animate-float items-center gap-2 rounded-2xl border bg-background px-3.5 py-2.5 text-sm font-semibold shadow-frame lg:flex">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-emerald-500" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              Scoped before we start
            </div>
            <div className="absolute -bottom-5 left-8 hidden animate-float rounded-2xl border bg-background px-3.5 py-2.5 text-sm font-semibold shadow-frame [animation-delay:1.2s] lg:block">
              You own the build
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
