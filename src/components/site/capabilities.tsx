const items = ["Websites", "Web applications", "Mobile apps", "Internal tools", "Dashboards", "Integrations"];

export function Capabilities() {
  const loop = [...items, ...items];
  return (
    <section aria-label="What we build" className="border-y bg-canvas py-6">
      <p className="text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">What we build</p>
      <div className="mt-4 overflow-hidden">
        <ul className="flex w-max animate-marquee gap-12 hover:[animation-play-state:paused]">
          {loop.map((label, i) => (
            <li key={`${label}-${i}`} className="text-sm font-semibold tracking-wide text-muted-foreground" aria-hidden={i >= items.length}>
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
