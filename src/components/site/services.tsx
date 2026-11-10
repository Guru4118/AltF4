import { AppWindow, BarChart3, Check, Code2, Globe2, Lightbulb, PlugZap, Smartphone, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow, Section } from "./section";
import { Reveal } from "./reveal";

const services = [
  { icon: Globe2, n: "01", title: "Websites & digital experiences", text: "Fast, thoughtful websites that explain what you do, earn trust and turn the right visitors into customers.", tags: ["Marketing sites", "Landing pages", "E-commerce"] },
  { icon: AppWindow, n: "02", title: "Web applications", text: "Purpose-built platforms, portals and products shaped around the people who use them every day.", tags: ["Customer portals", "SaaS products", "Admin systems"] },
  { icon: Smartphone, n: "03", title: "Mobile applications", text: "Useful mobile experiences for customers and teams, designed to work naturally on the move.", tags: ["iOS & Android", "Cross-platform", "Field apps"] },
  { icon: Workflow, n: "04", title: "Business software & automation", text: "Replace repetitive manual work with connected workflows, internal tools and systems that fit your operation.", tags: ["Workflow tools", "Operations", "Automation"] },
  { icon: BarChart3, n: "05", title: "Dashboards & analytics", text: "Bring scattered information together so your team can see what matters and make better decisions.", tags: ["Live dashboards", "Reporting", "Data views"] },
  { icon: PlugZap, n: "06", title: "Integrations & modernisation", text: "Connect the tools you already use, improve legacy software and make your technology work as one.", tags: ["API integrations", "Cloud systems", "Modernisation"] },
];

const points = ["We start with the problem", "We build for real people", "We communicate clearly", "We choose technology with purpose"];

export function Services() {
  return (
    <Section id="services" labelledBy="services-h" className="relative">
      <div className="grid items-start gap-12 lg:grid-cols-[.78fr_1.22fr] lg:gap-20">
        <Reveal className="lg:sticky lg:top-28">
          <Eyebrow>What we do</Eyebrow>
          <h2 id="services-h" className="section-title mt-5">Thoughtful software. <span className="text-primary">Built around you.</span></h2>
          <p className="mt-5 max-w-[39ch] text-base leading-[1.85] text-muted-foreground">From the first conversation to the final detail, we bring design and engineering together to solve the right problem.</p>
          <ul className="mt-7 space-y-3 text-sm font-medium">{points.map((p) => <li key={p} className="flex items-center gap-3"><span className="grid h-5 w-5 place-items-center rounded-full bg-[#DFE9DF] text-primary"><Check className="h-3 w-3" /></span>{p}</li>)}</ul>
          <Button asChild className="mt-9 rounded-full px-6"><a href="#contact">Let's talk about your project <Code2 className="ml-2 h-4 w-4" /></a></Button>
        </Reveal>
        <div className="grid gap-3 sm:grid-cols-2">
          {services.map((s, i) => <Reveal key={s.title} delay={i * 55} className="h-full">
            <article className="group flex h-full min-h-[245px] flex-col rounded-2xl border border-primary/10 bg-white/75 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:bg-white hover:shadow-[0_22px_55px_-38px_rgba(24,57,47,.45)]">
              <div className="flex items-center justify-between"><span className="grid h-11 w-11 place-items-center rounded-xl bg-[#DFE9DF] text-primary transition-colors group-hover:bg-primary group-hover:text-white"><s.icon className="h-5 w-5" /></span><span className="text-xs font-bold tracking-widest text-primary/35">{s.n}</span></div>
              <h3 className="mt-6 text-lg font-extrabold leading-snug tracking-tight">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              <div className="mt-auto flex flex-wrap gap-1.5 pt-5">{s.tags.map((tag) => <span key={tag} className="rounded-full bg-[#F0F4EF] px-2.5 py-1 text-[10px] font-semibold text-primary/75">{tag}</span>)}</div>
            </article>
          </Reveal>)}
        </div>
      </div>
    </Section>
  );
}
