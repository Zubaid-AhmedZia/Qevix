import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

export function Section({
  id,
  children,
  muted = false
}: {
  id?: string;
  children: ReactNode;
  muted?: boolean;
}) {
  return (
    <section id={id} className={cn("section", muted && "section-muted")}>
      <div className="container">{children}</div>
    </section>
  );
}
