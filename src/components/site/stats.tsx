import { ArrowUpRight, CheckCircle2, Compass, HeartHandshake } from "lucide-react";
import { Reveal } from "./reveal";

const principles = [
  { icon: Compass, title: "Problem first", text: "Understand what needs to change before deciding what to build." },
  { icon: CheckCircle2, title: "Clarity always", text: "Straightforward scope, honest communication and visible progress." },
  { icon: HeartHandshake, title: "Built together", text: "Your knowledge and feedback shape the product at every step." },
  { icon: ArrowUpRight, title: "Ready for what's next", text: "Practical foundations that can evolve as your business grows." },
];

export function Stats() {
  return (
    <section aria-label="Our principles" className="py-8 lg:py-12">
      <div className="container">
        <Reveal>
          <div className="grid overflow-hidden rounded-2xl border border-primary/10 bg-white/75 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((item, i) => (
              <div key={item.title} className="flex gap-4 border-b border-primary/10 p-5 last:border-b-0 sm:p-6 lg:border-b-0 lg:border-r lg:last:border-r-0">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#DFE9DF] text-primary"><item.icon className="h-4 w-4" /></span>
                <div><h3 className="text-sm font-extrabold">{item.title}</h3><p className="mt-1 text-xs leading-relaxed text-muted-foreground">{item.text}</p></div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
