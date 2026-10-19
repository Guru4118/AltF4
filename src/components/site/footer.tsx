import { Separator } from "@/components/ui/separator";
import { CONTACT_EMAIL, LEGAL, NAV, SOCIAL } from "./config";
import { Logo } from "./logo";

const linkClass = "rounded-sm transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";
const live = (links: { label: string; href: string }[]) => links.filter((l) => l.href);

export function Footer() {
  const social = live(SOCIAL);
  const legal = live(LEGAL);
  const explore = [...NAV, { label: "Contact", href: "#contact" }];
  return (
    <footer className="border-t bg-background py-16" style={{ paddingBottom: "calc(4rem + env(safe-area-inset-bottom, 0px))" }}>
      <div className="container">
        <div className={social.length ? "grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]" : "grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr]"}>
          <div>
            <Logo />
            <p className="mt-4 max-w-[32ch] text-sm leading-relaxed text-muted-foreground">A software studio building websites, apps and business software around real problems.</p>
          </div>
          <nav aria-label="Explore">
            <h2 className="mb-4 text-sm font-bold">Explore</h2>
            <ul className="space-y-2.5 text-sm text-muted-foreground">{explore.map((l) => <li key={l.href}><a href={l.href} className={linkClass}>{l.label}</a></li>)}</ul>
          </nav>
          <div>
            <h2 className="mb-4 text-sm font-bold">Contact</h2>
            <p className="space-y-2.5 text-sm text-muted-foreground">
              <a href={`mailto:${CONTACT_EMAIL}`} className={linkClass}>{CONTACT_EMAIL}</a>
              <span className="block">We reply within two working days.</span>
            </p>
          </div>
          {social.length > 0 && (
            <nav aria-label="Follow">
              <h2 className="mb-4 text-sm font-bold">Follow</h2>
              <ul className="space-y-2.5 text-sm text-muted-foreground">{social.map((l) => <li key={l.label}><a href={l.href} className={linkClass} rel="noopener noreferrer" target="_blank">{l.label}</a></li>)}</ul>
            </nav>
          )}
        </div>
        <Separator className="mb-6 mt-14" />
        <div className="flex flex-col justify-between gap-3 text-[13px] text-muted-foreground sm:flex-row">
          <p>© 2026 AltF4. All rights reserved.</p>
          {legal.length > 0 && <div className="flex gap-6">{legal.map((l) => <a key={l.label} href={l.href} className={linkClass}>{l.label}</a>)}</div>}
        </div>
      </div>
    </footer>
  );
}
