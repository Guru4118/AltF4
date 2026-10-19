import { useRef, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { NAV } from "./config";
import { Logo } from "./logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const pendingHref = useRef<string | null>(null);

  // Radix locks page scroll while the sheet is open, which swallows the browser's anchor jump.
  // So: remember the target on tap, let the sheet close, then scroll once the lock is released.
  // (No preventDefault here: Radix skips its own close handler when the click is default-prevented.)
  const queueJump = (href: string) => () => {
    pendingHref.current = href;
  };
  const jumpAfterClose = (e: Event) => {
    const href = pendingHref.current;
    if (!href) return;
    pendingHref.current = null;
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView();
  };

  return (
    <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur-xl" style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}>
      <div className="container relative flex h-16 items-center justify-between gap-3">
        <Logo />
        <nav aria-label="Primary" className="absolute left-1/2 hidden -translate-x-1/2 lg:block">
          <ul className="flex items-center gap-1">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="rounded-full px-3.5 py-1.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild size="sm"><a href="#contact">Start a project</a></Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="h-10 w-10 lg:hidden" aria-label="Open menu"><Menu className="h-4 w-4" /></Button>
            </SheetTrigger>
            <SheetContent onCloseAutoFocus={jumpAfterClose}>
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <SheetDescription className="sr-only">Site navigation</SheetDescription>
              <Logo className="mb-8" />
              <nav aria-label="Mobile" className="flex flex-col">
                {NAV.map((n) => (
                  <SheetClose asChild key={n.href}>
                    <a href={n.href} onClick={queueJump(n.href)} className="border-b py-4 text-base font-semibold transition-colors hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">{n.label}</a>
                  </SheetClose>
                ))}
              </nav>
              <SheetClose asChild>
                <Button asChild className="mt-8"><a href="#contact" onClick={queueJump("#contact")}>Start a project</a></Button>
              </SheetClose>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
