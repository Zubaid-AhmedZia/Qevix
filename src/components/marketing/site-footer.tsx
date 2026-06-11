import Link from "next/link";
import { footerNav } from "@/content/navigation";
import { siteConfig } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const groups = [
    { title: "Product", links: footerNav.slice(0, 5) },
    { title: "Company", links: footerNav.slice(5, 7) },
    { title: "Legal", links: footerNav.slice(7) }
  ];

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link className="brand" href="/" aria-label="QevixAi home">
              <span className="brand-mark">Q</span>
              <span>{siteConfig.name}</span>
            </Link>
            <p className="footer-copy">
              QevixAi helps businesses answer every call, book more appointments and stay
              responsive around the clock.
            </p>
          </div>

          {groups.map((group) => (
            <nav className="footer-links" aria-label={group.title} key={group.title}>
              <h3>{group.title}</h3>
              {group.links.map((item) => (
                <Link href={item.href} key={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
          ))}
        </div>

        <div className="footer-bottom">
          <span>Copyright {year} QevixAi. All rights reserved.</span>
          <span>Built for practical call coverage, lead capture, and booking workflows.</span>
        </div>
      </div>
    </footer>
  );
}
