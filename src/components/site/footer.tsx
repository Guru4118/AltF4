import { Button } from "@/components/ui/button";
import { Logo } from "./logo";

const cols = [
  { title: "Explore", links: [["Services", "#services"], ["Work", "#work"], ["Process", "#process"], ["About", "#about"], ["Contact", "#contact"]] },
  { title: "Follow", links: [["LinkedIn", "#"], ["GitHub", "#"], ["Instagram", "#"]] },
];

export function Footer() {
  return (
    <footer className="border-t bg-canvas py-16" style={{ paddingBottom: "calc(4rem + env(safe-area-inset-bottom, 0px))" }}>
      <div className="container">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-[32ch] text-sm leading-relaxed text-muted-foreground">A software studio building websites, apps and business software around real problems.</p>
          </div>
          {cols.map((c) => (
            <nav key={c.title} aria-label={c.title}>
              <h2 className="mb-4 text-sm font-bold">{c.title}</h2>
              <ul className="space-y-2.5 text-sm text-muted-foreground">{c.links.map(([l, h]) => <li key={l}><a href={h} className="transition-colors hover:text-foreground">{l}</a></li>)}</ul>
            </nav>
          ))}
          <div>
            <h2 className="mb-4 text-sm font-bold">Start a project</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">Tell us the problem. We'll help you decide what's worth building.</p>
            <Button asChild size="sm" className="mt-4"><a href="#contact">Start a project</a></Button>
          </div>
        </div>
        <div className="mt-14 flex flex-col justify-between gap-3 border-t pt-6 text-[13px] text-muted-foreground sm:flex-row">
          <p>© 2026 AltF4. All rights reserved.</p>
          <div className="flex gap-6"><a href="#" className="hover:text-foreground">Privacy</a><a href="#" className="hover:text-foreground">Terms</a></div>
        </div>
      </div>
    </footer>
  );
}
