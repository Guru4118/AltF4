import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroMockup } from "./mockups";

const checks = ["Free intro conversation", "Clear scope before we start", "You own what we build"];

// The hero is the page's one entrance moment: copy rises in sequence, the product view slides in.
export function Hero() {
  return (
    <section aria-labelledby="hero-h" className="overflow-hidden pb-16 pt-12 lg:pb-24 lg:pt-20">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
          <div>
            <h1 id="hero-h" className="animate-fade-up text-balance text-5xl font-extrabold leading-[0.98] tracking-tightest sm:text-6xl">
              Software built around <span className="text-primary">how your business works.</span>
            </h1>
            <p className="animate-fade-up mt-6 max-w-[52ch] text-pretty text-base leading-relaxed text-muted-foreground [animation-delay:100ms] sm:text-lg">
              AltF4 is a software studio. Bring us an idea, a business problem, or a workflow held together by spreadsheets, and we'll design and build the website, app or internal tool that replaces it.
            </p>
            <div className="animate-fade-up mt-8 flex flex-wrap items-center gap-3 [animation-delay:200ms]">
              <Button asChild size="lg"><a href="#contact">Start a project <ArrowRight className="h-4 w-4" /></a></Button>
              <Button asChild size="lg" variant="outline"><a href="#work">View our work</a></Button>
            </div>
            <ul className="animate-fade-up mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground [animation-delay:300ms]">
              {checks.map((item) => (
                <li key={item} className="flex items-center gap-1.5"><Check className="h-4 w-4 text-primary" />{item}</li>
              ))}
            </ul>
          </div>
          <div className="animate-slide-right [animation-delay:150ms]" role="img" aria-label="Concept operations dashboard">
            <HeroMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
