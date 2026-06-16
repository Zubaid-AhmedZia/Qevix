"use client";

import { useEffect } from "react";

export function MarketingAnalytics() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const element = target.closest<HTMLElement>("[data-event]");
      if (!element) return;

      const name = element.dataset.event;
      if (!name) return;

      window.dispatchEvent(new CustomEvent("qevix-marketing-event", {
        detail: {
          name,
          properties: element.dataset.eventProperties
            ? JSON.parse(element.dataset.eventProperties)
            : undefined
        }
      }));
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
