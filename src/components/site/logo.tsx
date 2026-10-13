import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <a href="#top" aria-label="AltF4 home" className={cn("inline-flex items-center gap-2 rounded-md text-[15px] font-bold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", className)}>
      <span aria-hidden className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-[11px] font-bold text-white">F4</span>
      AltF4
      <span className="hidden rounded-full bg-accent px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary sm:inline">Studio</span>
    </a>
  );
}
