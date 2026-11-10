import { ArrowUpRight, MessageCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Eyebrow, Section } from "./section";
import { Reveal } from "./reveal";

const faqs = [
  { q: "What kind of projects do you take on?", a: "Websites, web applications, mobile apps, dashboards, internal tools and new product builds. If it's software that solves a real business problem, it's worth a conversation." },
  { q: "I only have a rough idea. Is that enough to start?", a: "Absolutely. You don't need a complete brief or a finished product plan. Tell us what isn't working, what you want to achieve, or even just the idea taking shape. We'll help turn it into a clear first step." },
  { q: "How do you decide which technology to use?", a: "We start with your users, goals, constraints and plans for the future. Then we recommend a stack that fits—not the trendiest tools or technology for technology's sake." },
  { q: "How do you estimate cost and timeline?", a: "First, we understand the scope and identify the important milestones. Then we share an estimate with its assumptions, dependencies and trade-offs, so you know what you're agreeing to." },
  { q: "Will I own the code and the product?", a: "Yes. The work we create for your project is yours. We aim for clean, understandable code and a practical handover, so you're not locked into us to keep moving." },
  { q: "Can you work with our existing product or team?", a: "Of course. We can join an existing workflow, collaborate with your in-house team, improve a legacy application or take ownership of a clearly defined workstream." },
  { q: "What happens after launch?", a: "Launch is a milestone, not the finish line. We can help with monitoring, fixes, iteration and new features, or hand things over to your team with the documentation they need." },
];

export function Faq() {
  return (
    <Section id="faq" tone="canvas" labelledBy="faq-h" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -right-28 top-10 h-72 w-72 rounded-full bg-primary/[0.04] blur-3xl" aria-hidden="true" />
      <div className="relative grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
        <Reveal>
          <div className="lg:sticky lg:top-28">
            <Eyebrow>Good to know</Eyebrow>
            <h2 id="faq-h" className="mt-5 max-w-[10ch] text-balance text-4xl font-extrabold leading-[1.04] tracking-tightest sm:text-5xl lg:text-[3.6rem]">Before you start<span className="text-primary">.</span></h2>
            <p className="mt-6 max-w-[35ch] text-base leading-[1.85] text-muted-foreground">A few things you might be wondering about working with us. And if your question isn't here, we're always happy to talk.</p>
            <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground shadow-sm transition hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary">Ask us anything <ArrowUpRight className="h-4 w-4" /></a>
            <div className="mt-12 hidden items-center gap-3 border-t border-border/70 pt-6 text-sm text-muted-foreground sm:flex">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-primary"><MessageCircle className="h-4 w-4" /></span>
              <span>Real people. Straight answers.</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="overflow-hidden rounded-[1.75rem] border border-border/70 bg-background px-5 shadow-[0_24px_70px_-42px_rgba(24,57,47,0.22)] sm:px-8">
            <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`} className="border-border/70 py-1">
                  <AccordionTrigger className="gap-5 py-5 text-left text-sm font-semibold leading-relaxed text-foreground hover:no-underline sm:py-6 sm:text-base [&[data-state=open]>span:first-child]:text-primary">
                    <span className="mr-1 shrink-0 font-mono text-[11px] font-medium tracking-wider text-muted-foreground/60">{String(i + 1).padStart(2, "0")}</span>
                    <span className="flex-1">{f.q}</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 pl-9 pr-4 text-sm leading-[1.85] text-muted-foreground sm:pl-10">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
