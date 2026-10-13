import { cn } from "@/lib/utils";

export function Section({ id, className, children, labelledBy, tone = "white" }: { id?: string; className?: string; children: React.ReactNode; labelledBy?: string; tone?: "white" | "canvas" }) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={cn("py-20 lg:py-24", tone === "canvas" && "bg-canvas", className)}>
      <div className="container">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">{children}</p>;
}

export function SectionHeader({ id, title, description, align = "left", children }: { id: string; title: string; description?: string; align?: "left" | "center"; children?: React.ReactNode }) {
  return (
    <div className={cn("mb-12 flex flex-col gap-4 lg:mb-14", align === "center" && "mx-auto max-w-2xl items-center text-center")}>
      {children}
      <h2 id={id} className="max-w-[18ch] text-balance text-4xl font-extrabold leading-[1.05] tracking-tightest sm:text-5xl">{title}</h2>
      {description && <p className="max-w-[54ch] text-pretty text-base leading-relaxed text-muted-foreground">{description}</p>}
    </div>
  );
}
