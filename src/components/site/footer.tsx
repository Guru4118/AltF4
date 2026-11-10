import { ArrowUpRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./logo";

const cols = [
  { title: "Explore", links: [["Services", "#services"], ["Selected concepts", "#work"], ["Technology", "#technology"], ["Our process", "#process"], ["About", "#about"]] },
  { title: "Get started", links: [["Start a project", "#contact"], ["Common questions", "#faq"]] },
];

export function Footer() {
  return (
    <footer className="border-t border-primary/10 bg-[#DFE9DF]/65 py-14" style={{ paddingBottom: "calc(3.5rem + env(safe-area-inset-bottom, 0px))" }}>
      <div className="container">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.1fr]">
          <div><Logo /><p className="mt-5 max-w-[34ch] text-sm leading-[1.85] text-muted-foreground">A digital studio building thoughtful websites, applications and business software around real problems.</p><p className="mt-5 text-[10px] font-bold uppercase tracking-[.2em] text-primary">BUILD WHAT'S NEXT.</p></div>
          {cols.map((c) => <nav key={c.title} aria-label={c.title}><h2 className="mb-5 text-xs font-extrabold uppercase tracking-[.16em]">{c.title}</h2><ul className="space-y-3 text-sm text-muted-foreground">{c.links.map(([label, href]) => <li key={label}><a href={href} className="inline-flex items-center gap-1 transition-colors hover:text-primary">{label}<ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity hover:opacity-100" /></a></li>)}</ul></nav>)}
          <div><h2 className="mb-5 text-xs font-extrabold uppercase tracking-[.16em]">Have a good problem?</h2><p className="text-sm leading-relaxed text-muted-foreground">Tell us what you're working on. We'll help you find a sensible way forward.</p><Button asChild size="sm" className="mt-5 rounded-full"><a href="#contact">Start a conversation <ArrowUpRight className="ml-1 h-3.5 w-3.5" /></a></Button><a href="mailto:hello@altf4studios.in" className="mt-4 flex items-center gap-2 text-xs font-semibold text-primary"><Mail className="h-3.5 w-3.5" />hello@altf4studios.in</a></div>
        </div>
        <div className="mt-14 flex flex-col justify-between gap-3 border-t border-primary/10 pt-6 text-[11px] text-muted-foreground sm:flex-row"><p>© {new Date().getFullYear()} AltF4 Studios. All rights reserved.</p><a href="#top" className="font-semibold text-primary hover:underline">Back to top ↑</a></div>
      </div>
    </footer>
  );
}
