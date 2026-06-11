import type { ReactNode } from "react";
import { MarketingAnalytics } from "@/components/marketing/marketing-analytics";
import { SiteFooter } from "@/components/marketing/site-footer";
import { SiteHeader } from "@/components/marketing/site-header";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="page-shell">
      <SiteHeader />
      {children}
      <SiteFooter />
      <MarketingAnalytics />
    </div>
  );
}
