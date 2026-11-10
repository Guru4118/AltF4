import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <a href="#top" aria-label="AltF4 Studios home" className={cn("group inline-flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", className)}>
      <span aria-hidden className="grid h-9 w-9 grid-cols-2 grid-rows-2 gap-[3px] rounded-[10px] bg-primary p-[7px] shadow-sm transition-transform duration-300 group-hover:-rotate-6">
        <i className="rounded-[2px] bg-white" /><i className="rounded-[2px] bg-white/55" />
        <i className="rounded-[2px] bg-white/55" /><i className="rounded-[2px] bg-white" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-[16px] font-extrabold tracking-[-.055em] text-foreground">NG<span className="text-primary">.</span></span>
        <span className="mt-1 text-[9px] font-bold uppercase tracking-[.22em] text-muted-foreground">Studios</span>
      </span>
    </a>
  );
}
