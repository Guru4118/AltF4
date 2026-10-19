import { cn } from "@/lib/utils";

export function Section({ id, className, children, labelledBy, tone = "white" }: { id?: string; className?: string; children: React.ReactNode; labelledBy?: string; tone?: "white" | "canvas" | "dark" }) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={cn("py-20 lg:py-24", tone === "canvas" && "bg-canvas", tone === "dark" && "bg-foreground text-background", className)}>
      <div className="container">{children}</div>
    </section>
  );
}

export function SectionHeader({ id, title, description, align = "left", className, children }: { id: string; title: string; description?: string; align?: "left" | "center"; className?: string; children?: React.ReactNode }) {
  const centered = align === "center";
  return (
    <div className={cn("mb-12 flex flex-col gap-4 lg:mb-14", centered && "mx-auto max-w-2xl items-center text-center", className)}>
      <h2 id={id} className={cn("text-balance text-4xl font-extrabold leading-[1.05] tracking-tightest sm:text-5xl", centered ? "max-w-[22ch]" : "max-w-[16ch]")}>{title}</h2>
      {description && <p className="max-w-[54ch] text-pretty text-base leading-relaxed text-muted-foreground">{description}</p>}
      {children}
    </div>
  );
}

// Top rule with a short brand segment; shared by sequence and principle lists.
export const ruledItem = "relative border-t pt-6 before:absolute before:-top-px before:left-0 before:h-0.5 before:w-12 before:bg-primary";
