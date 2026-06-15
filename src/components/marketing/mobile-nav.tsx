"use client";

import { useState } from "react";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import type { NavItem } from "@/content/navigation";

export function MobileNav({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className={open ? "mobile-menu-button is-open" : "mobile-menu-button"}
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-controls="mobile-navigation"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        <span className="mobile-menu-icon" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>
      <nav
        className={open ? "mobile-drawer is-open" : "mobile-drawer"}
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!open}
        inert={!open}
      >
        {items.map((item) => (
          <a href={item.href} key={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
        <a href="/#demo" onClick={() => setOpen(false)}>
          See a Live Demo
        </a>
        <a href="/book-demo" onClick={() => setOpen(false)}>
          Book a Free AI Audit
        </a>
        <div className="mobile-drawer-actions">
          <span>Theme</span>
          <ThemeToggle />
        </div>
      </nav>
    </>
  );
}
