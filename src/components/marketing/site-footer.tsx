import Link from "next/link";
import { QevixLogo } from "@/components/brand/qevix-logo";
import { ButtonLink } from "@/components/ui/button";
import { footerNav } from "@/content/navigation";
import { automationServices, siteConfig } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const serviceLinks = automationServices.slice(0, 6).map((service) => ({
    label: service.title,
    href: "/#automation-stack"
  }));
  const companyLinks = footerNav.filter((item) =>
    ["Book demo", "Contact"].includes(item.label)
  );
  const legalLinks = footerNav.filter((item) => ["Privacy", "Terms"].includes(item.label));
  const productLinks = footerNav.filter(
    (item) => !["Book demo", "Contact", "Privacy", "Terms"].includes(item.label)
  );

  return (
    <footer className="site-footer">
      <div className="container footer-shell">
        <div className="footer-cta">
          <div>
            <p className="section-kicker">QevixAi</p>
            <h2>Automate the front end of your customer journey.</h2>
          </div>
          <ButtonLink href="/book-demo" eventName="demo_cta_click">
            Book a demo
          </ButtonLink>
        </div>

        <div className="footer-grid">
          <div className="footer-brand">
            <QevixLogo />
            <p className="footer-copy">{siteConfig.brandPromise}</p>
          </div>

          <FooterColumn title="Navigate" links={productLinks} />
          <FooterColumn title="Automation" links={serviceLinks} />
          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn title="Legal" links={legalLinks} />
        </div>

        <div className="footer-bottom">
          <span>Copyright {year} QevixAi. All rights reserved.</span>
          <span>Voice, follow-up, booking, CRM, and workflow automation.</span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links
}: {
  title: string;
  links: Array<{ label: string; href: string }>;
}) {
  return (
    <nav className="footer-links" aria-label={title}>
      <h3>{title}</h3>
      {links.map((item) => (
        <Link href={item.href} key={`${title}-${item.label}`}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
