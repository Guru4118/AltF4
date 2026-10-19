import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "./section";

const signals = [
  "Work is spread across spreadsheets, chat threads and email, and nobody has the full picture.",
  "The numbers exist, but they sit in five systems and get compiled by hand.",
  "Customers have to phone or message you to book, check status or reorder.",
  "You have an idea worth building, but no clear way to get from sketch to launch.",
];

export function Signals() {
  return (
    <Section tone="dark" labelledBy="signals-h" className="lg:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <SectionHeader
          id="signals-h"
          title="Does any of this sound familiar?"
          description="These are the situations we build software for. If one is close to home, it's worth talking through."
          className="mb-0 [&_p]:text-background/70"
        >
          <Button asChild size="lg" className="mt-2 self-start"><a href="#contact">Start a project</a></Button>
        </SectionHeader>
        <ul className="space-y-5">
          {signals.map((s) => (
            <li key={s} className="border-l-2 border-primary pl-5 text-lg font-medium leading-snug text-balance sm:text-xl">{s}</li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
