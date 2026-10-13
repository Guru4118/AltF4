import type { LucideIcon } from "lucide-react";
import { BarChart3, Bell, Boxes, Home, Search, Settings, Users } from "lucide-react";
import { cn } from "@/lib/utils";

export function WindowChrome({ title, className, children }: { title: string; className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("overflow-hidden rounded-2xl border bg-background shadow-frame", className)} aria-hidden>
      <div className="flex h-9 items-center gap-1.5 border-b px-3">
        <span className="h-2 w-2 rounded-full bg-border" />
        <span className="h-2 w-2 rounded-full bg-border" />
        <span className="h-2 w-2 rounded-full bg-border" />
        <span className="ml-2 truncate text-[11px] text-muted-foreground">{title}</span>
      </div>
      {children}
    </div>
  );
}

function Spark({ id, d }: { id: string; d: string }) {
  return (
    <svg viewBox="0 0 240 80" preserveAspectRatio="none" className="h-full w-full" aria-hidden>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="hsl(14 80% 54%)" stopOpacity="0.22" />
          <stop offset="1" stopColor="hsl(14 80% 54%)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`${d} L240 80 L0 80 Z`} fill={`url(#${id})`} />
      <path d={d} fill="none" stroke="hsl(14 80% 54%)" strokeWidth="1.75" vectorEffect="non-scaling-stroke" strokeLinejoin="round" />
    </svg>
  );
}

const LINE = "M0 62 L30 52 L60 56 L90 38 L120 44 L150 26 L180 32 L210 12 L240 18";

const nav: { label: string; icon: LucideIcon }[] = [
  { label: "Overview", icon: Home },
  { label: "Orders", icon: Boxes },
  { label: "Customers", icon: Users },
  { label: "Reports", icon: BarChart3 },
  { label: "Settings", icon: Settings },
];

const orders = [
  { id: "4821", name: "Wholesale order", state: "Packed" },
  { id: "4820", name: "Subscription renewal", state: "Shipped" },
  { id: "4819", name: "Custom quote", state: "Review" },
  { id: "4818", name: "Repeat order", state: "Packed" },
];

const metrics: [string, string][] = [
  ["Open orders", "128"],
  ["On-time", "96%"],
  ["Review", "7"],
];

export function HeroMockup() {
  return (
    <WindowChrome title="Operations">
      <div className="grid grid-cols-1 sm:grid-cols-[132px_1fr]">
        <aside className="hidden flex-col gap-0.5 border-r p-2.5 sm:flex">
          {nav.map(({ label, icon: Icon }, i) => (
            <div key={label} className={cn("flex items-center gap-2 rounded-md px-2 py-1.5 text-[12px]", i === 0 ? "font-medium text-foreground" : "text-muted-foreground")}>
              <Icon className="h-3.5 w-3.5" />
              {label}
            </div>
          ))}
        </aside>
        <div className="min-w-0 p-4">
          <div className="flex items-center justify-between">
            <p className="text-[13px] font-medium leading-5">Today</p>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Search className="h-3.5 w-3.5" />
              <Bell className="h-3.5 w-3.5" />
            </div>
          </div>
          <div className="mt-3 grid grid-cols-3 border-y">
            {metrics.map(([label, value]) => (
              <div key={label} className="px-2 py-3 first:pl-0">
                <p className="text-[11px] text-muted-foreground">{label}</p>
                <p className="mt-1 text-lg font-semibold tracking-tight">{value}</p>
              </div>
            ))}
          </div>
          <div className="mt-3 h-20">
            <Spark id="hero-chart" d={LINE} />
          </div>
          <ul className="mt-1 divide-y border-t">
            {orders.map((order) => (
              <li key={order.id} className="flex items-center justify-between gap-3 py-2 text-[12px]">
                <span className="truncate">{order.name}</span>
                <span className={cn("shrink-0", order.state === "Review" ? "font-medium text-foreground" : "text-muted-foreground")}>{order.state}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </WindowChrome>
  );
}

const columns: { title: string; cards: string[] }[] = [
  { title: "New", cards: ["Wholesale reorder", "Quote request", "New account"] },
  { title: "In progress", cards: ["Packing run", "Invoice check"] },
  { title: "Done", cards: ["Monday dispatch", "Stock count"] },
];

export function OpsMockup() {
  return (
    <WindowChrome title="Operations · Board">
      <div className="grid grid-cols-3 gap-3 p-4">
        {columns.map((column) => (
          <div key={column.title} className="min-w-0">
            <p className="flex items-center justify-between text-[11px] text-muted-foreground">
              {column.title}
              <span>{column.cards.length}</span>
            </p>
            <ul className="mt-2 space-y-2">
              {column.cards.map((card) => (
                <li key={card} className="rounded-lg border px-2.5 py-2">
                  <p className="text-[12px] font-medium leading-4">{card}</p>
                  <p className="mt-1 flex items-center gap-1.5 text-[11px] text-muted-foreground">
                    {card === "Packing run" && <span className="h-1.5 w-1.5 rounded-full bg-brand" />}
                    Ops
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </WindowChrome>
  );
}

const days = ["8", "9", "10", "11", "12", "13", "14", "15", "16"];

export function MobileMockup() {
  return (
    <div className="flex justify-center rounded-xl border bg-secondary/40 py-10" aria-hidden>
      <div className="w-[168px] rounded-[28px] border border-foreground bg-background p-3.5 shadow-frame">
        <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-foreground/80" />
        <p className="text-[13px] font-medium leading-5">Book a visit</p>
        <p className="mt-0.5 text-[11px] text-muted-foreground">Choose a day</p>
        <div className="mt-3 grid grid-cols-3 gap-1.5">
          {days.map((day) => (
            <div key={day} className={cn("grid h-7 place-items-center rounded-md border text-[11px]", day === "12" ? "border-foreground bg-foreground font-medium text-background" : "text-muted-foreground")}>{day}</div>
          ))}
        </div>
        <div className="mt-3 flex items-center justify-between text-[11px]">
          <span className="text-muted-foreground">10:30</span>
          <span className="inline-flex items-center gap-1 font-medium text-foreground"><span className="h-1.5 w-1.5 rounded-full bg-brand" />Open</span>
        </div>
        <div className="mt-3 grid h-8 place-items-center rounded-lg bg-foreground text-[11px] font-medium text-background">Confirm</div>
      </div>
    </div>
  );
}

const dashMetrics: [string, string][] = [
  ["Revenue", "+12%"],
  ["Returns", "2.1%"],
  ["Backlog", "−18"],
];

export function DashMockup() {
  return (
    <WindowChrome title="Insights · Weekly">
      <div className="space-y-4 p-4">
        <div className="grid grid-cols-3 gap-3">
          {dashMetrics.map(([label, value]) => (
            <div key={label} className="border-l pl-3 first:border-l-0 first:pl-0">
              <p className="text-[11px] text-muted-foreground">{label}</p>
              <p className="mt-1 text-lg font-semibold tracking-tight">{value}</p>
            </div>
          ))}
        </div>
        <div className="h-24 border-t pt-3">
          <Spark id="dash-chart" d={LINE} />
        </div>
        <p className="border-t pt-3 text-[12px] text-muted-foreground">3 items need attention today</p>
      </div>
    </WindowChrome>
  );
}
