import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Section, SectionHeader } from "./section";

const models = [
  { title: "Fixed-scope project", text: "A defined product with a clear scope, timeline and handover. Best when you know what you need.", points: ["Scope agreed up front", "Milestone-based delivery", "Full handover"], cta: "Scope a project" },
  { title: "Ongoing partnership", text: "A steady team that keeps improving your product after launch. Best when the roadmap keeps evolving.", points: ["Flexible monthly capacity", "Shared roadmap", "Maintenance and support"], cta: "Talk about a partnership", featured: true },
  { title: "Improve what you have", text: "Review, stabilise or modernise an existing website, app or internal system without starting over.", points: ["Technical review", "Prioritised fixes", "Gradual modernisation"], cta: "Request a review" },
];

export function Engagement() {
  return (
    <Section id="engagement" labelledBy="eng-h">
      <SectionHeader
        id="eng-h"
        align="center"
        title="Three ways to work with us"
        description="We're a small studio. We'd rather be clear about how we work than make big claims."
      />
      <div className="grid items-stretch gap-4 lg:grid-cols-3">
        {models.map((m) => (
          <Card key={m.title} className={cn("flex flex-col", m.featured && "border-primary/40")}>
            <CardHeader className="p-7 pb-0">
              <CardTitle className="text-lg font-bold">{m.title}</CardTitle>
              <CardDescription className="mt-1.5">{m.text}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col p-7 pt-6">
              <ul className="flex-1 space-y-2.5 border-t pt-5 text-sm">
                {m.points.map((p) => <li key={p} className="flex items-center gap-2"><Check aria-hidden className="h-4 w-4 shrink-0 text-primary" />{p}</li>)}
              </ul>
              <Button asChild variant={m.featured ? "default" : "outline"} className="mt-8 w-full">
                <a href="#contact">{m.cta}{m.featured && <ArrowRight className="h-4 w-4" />}</a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
