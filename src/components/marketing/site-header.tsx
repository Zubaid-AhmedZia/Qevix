import Link from "next/link";
import { CalendarCheck, PlayCircle } from "lucide-react";
import { QevixLogo } from "@/components/brand/qevix-logo";
import { MobileNav } from "@/components/marketing/mobile-nav";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { ButtonLink } from "@/components/ui/button";
import { primaryNav } from "@/content/navigation";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <QevixLogo />

        <nav className="desktop-nav" aria-label="Primary navigation">
          {primaryNav.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-ctas">
          <ThemeToggle />
          <ButtonLink
            href="/#demo"
            variant="secondary"
            eventName="demo_cta_click"
            showArrow={false}
          >
            <PlayCircle aria-hidden="true" size={17} />
            See automation
          </ButtonLink>
          <ButtonLink
            href="/book-demo"
            eventName="hero_cta_click"
            showArrow={false}
          >
            <CalendarCheck aria-hidden="true" size={17} />
            Book a demo
          </ButtonLink>
        </div>

        <MobileNav items={primaryNav} />
      </div>
    </header>
  );
}
