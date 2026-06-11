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

      const payload = JSON.stringify({
        name,
        properties: element.dataset.eventProperties
          ? JSON.parse(element.dataset.eventProperties)
          : undefined
      });

      if (navigator.sendBeacon) {
        navigator.sendBeacon("/api/events", payload);
      } else {
        void fetch("/api/events", {
          method: "POST",
          body: payload,
          headers: { "content-type": "application/json" },
          keepalive: true
        });
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
