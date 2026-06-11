import Link from "next/link";
import { CalendarCheck, PlayCircle } from "lucide-react";
import { MobileNav } from "@/components/marketing/mobile-nav";
import { ButtonLink } from "@/components/ui/button";
import { primaryNav } from "@/content/navigation";
import { siteConfig } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label="QevixAi home">
          <span className="brand-mark">Q</span>
          <span>{siteConfig.name}</span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {primaryNav.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-ctas">
          <ButtonLink
            href="/#demo"
            variant="secondary"
            eventName="demo_cta_click"
            showArrow={false}
          >
            <PlayCircle aria-hidden="true" size={17} />
            See live demo
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
