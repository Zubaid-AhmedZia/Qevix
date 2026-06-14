export type NavItem = {
  label: string;
  href: string;
};

export const primaryNav: NavItem[] = [
  { label: "Voice agents", href: "/#voice-agents" },
  { label: "Automation", href: "/#automation-stack" },
  { label: "Industries", href: "/#industries" },
  { label: "Process", href: "/#process" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" }
];

export const footerNav: NavItem[] = [
  ...primaryNav,
  { label: "Book demo", href: "/book-demo" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" }
];
