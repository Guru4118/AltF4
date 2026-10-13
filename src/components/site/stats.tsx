import { Reveal } from "./reveal";

const stats = [
  { n: "2 days", l: "Typical reply time" },
  { n: "4", l: "Steps from brief to launch" },
  { n: "3", l: "Ways to work together" },
  { n: "100%", l: "You own what we build" },
];

export function Stats() {
  return (
    <section aria-label="How we engage" className="py-10">
      <div className="container">
        <Reveal>
          <dl className="grid overflow-hidden rounded-2xl border sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.l} className="border-b px-6 py-7 sm:border-r sm:[&:nth-child(2n)]:border-r-0 lg:border-b-0 lg:[&:nth-child(2n)]:border-r lg:last:border-r-0">
                <dt className="text-3xl font-extrabold tracking-tightest">{s.n}</dt>
                <dd className="mt-1 text-sm text-muted-foreground">{s.l}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
