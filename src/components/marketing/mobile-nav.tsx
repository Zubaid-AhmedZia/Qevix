"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { NavItem } from "@/content/navigation";

export function MobileNav({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="mobile-menu-button"
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-controls="mobile-navigation"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        {open ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
      </button>
      {open ? (
        <nav className="mobile-drawer" id="mobile-navigation" aria-label="Mobile navigation">
          {items.map((item) => (
            <a href={item.href} key={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href="/#demo" onClick={() => setOpen(false)}>
            See live demo
          </a>
          <a href="/book-demo" onClick={() => setOpen(false)}>
            Book a demo
          </a>
        </nav>
      ) : null}
    </>
  );
}
