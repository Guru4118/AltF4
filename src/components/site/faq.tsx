import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Eyebrow, Section } from "./section";
import { Reveal } from "./reveal";

const faqs = [
  { q: "What kind of projects do you take on?", a: "Websites, web applications, mobile apps, dashboards, internal tools and new product builds. If it's software that solves a business problem, it's worth a conversation." },
  { q: "Do you only work with specific technologies?", a: "No. We recommend the technology that fits your problem, requirements and long-term needs, and explain the reasoning in plain language." },
  { q: "I only have a rough idea. Is that enough to start?", a: "Yes. Many projects begin as a problem or a messy workflow. The first step is working out what's worth building and what the simplest useful version looks like." },
  { q: "How do you estimate cost and timeline?", a: "After an initial conversation we scope the work and give you an estimate with the assumptions behind it. We'd rather agree a clear scope than quote a number we can't stand behind." },
  { q: "Will I own the code and the product?", a: "Yes. You own what we build for you. We document it so your team, or another team, can maintain it." },
  { q: "What happens after launch?", a: "We help your team get the product into real use, and we can continue with support and improvements through an ongoing partnership if you want it." },
];

export function Faq() {
  return (
    <Section tone="canvas" labelledBy="faq-h">
      <Reveal>
        <div className="mx-auto max-w-2xl">
          <div className="mb-8 text-center">
            <Eyebrow>Questions</Eyebrow>
            <h2 id="faq-h" className="mt-4 text-balance text-4xl font-extrabold tracking-tightest sm:text-5xl">Before you start</h2>
          </div>
          <Accordion type="single" collapsible defaultValue="item-0" className="rounded-2xl border bg-background px-5">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`}>
                <AccordionTrigger>{f.q}</AccordionTrigger>
                <AccordionContent>{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Reveal>
    </Section>
  );
}
