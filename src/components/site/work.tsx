import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DashMockup, MobileMockup, OpsMockup } from "./mockups";
import { Section, SectionHeader } from "./section";

const projects = [
  { type: "Web application concept", Visual: OpsMockup, title: "Business Operations Platform", problem: "Work is spread across spreadsheets, chat threads and email. Nobody has the full picture.", solution: "One system with shared workflows, role-based access and live status.", points: ["Role-based access", "Approval workflows", "Audit trail"] },
  { type: "Mobile application concept", Visual: MobileMockup, title: "Mobile Customer Experience", problem: "Customers phone or message to book, check status and reorder.", solution: "A focused app where they do it themselves, connected to the systems your team already uses.", points: ["Self-service booking", "Order tracking", "Push notifications"] },
  { type: "Dashboard concept", Visual: DashMockup, title: "Analytics & Management", problem: "The numbers exist, but they sit in five systems and get compiled by hand.", solution: "A live dashboard that pulls the sources together and highlights what needs attention.", points: ["Live data sources", "Daily attention list", "Shareable reports"] },
];

export function Work() {
  return (
    <Section id="work" labelledBy="work-h">
      <SectionHeader
        id="work-h"
        align="center"
        title="The kind of problems we're set up to solve"
        description="AltF4 is a new studio, so these are concept projects, designed and scoped the way we'd approach a real engagement. They are illustrations, not client products."
      />
      <div className="grid gap-4 lg:grid-cols-3">
        {projects.map(({ Visual, ...p }) => (
          <Card key={p.title} className="flex flex-col overflow-hidden">
            <div aria-hidden className="flex h-80 items-center justify-center border-b bg-canvas p-5">
              <Visual />
            </div>
            <CardHeader className="p-7 pb-0">
              <Badge variant="outline" className="self-start">{p.type}</Badge>
              <CardTitle className="mt-2 text-xl font-bold">{p.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col p-7 pt-3">
              <CardDescription>{p.problem}</CardDescription>
              <p className="mt-3 text-sm leading-relaxed">{p.solution}</p>
              <ul className="mt-6 space-y-1.5 border-t pt-5 text-sm text-muted-foreground">
                {p.points.map((point) => <li key={point}>{point}</li>)}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
