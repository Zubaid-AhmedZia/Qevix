import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  analyticsAttributes,
  type MarketingEventName
} from "@/lib/analytics/events";
import { cn } from "@/lib/utils/cn";

type ButtonVariant = "primary" | "secondary" | "quiet";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  eventName?: MarketingEventName;
  eventProperties?: Record<string, string>;
  className?: string;
  showArrow?: boolean;
};

export function buttonClassName(variant: ButtonVariant = "primary", className?: string) {
  return cn(
    "btn",
    variant === "primary" && "btn-primary",
    variant === "secondary" && "btn-secondary",
    variant === "quiet" && "btn-quiet",
    className
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  eventName,
  eventProperties,
  className,
  showArrow = true
}: ButtonLinkProps) {
  const analytics = eventName
    ? analyticsAttributes(eventName, eventProperties)
    : {};

  return (
    <Link href={href} className={buttonClassName(variant, className)} {...analytics}>
      {children}
      {showArrow ? <ArrowRight aria-hidden="true" size={18} /> : null}
    </Link>
  );
}
