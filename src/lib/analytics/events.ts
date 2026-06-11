export type MarketingEventName =
  | "hero_cta_click"
  | "demo_cta_click"
  | "pricing_cta_click"
  | "contact_cta_click"
  | "demo_form_submit"
  | "contact_form_submit";

export type MarketingEventPayload = {
  name: MarketingEventName;
  properties?: Record<string, string>;
};

export function analyticsAttributes(
  name: MarketingEventName,
  properties?: Record<string, string>
) {
  return {
    "data-event": name,
    "data-event-properties": properties ? JSON.stringify(properties) : undefined
  };
}

export async function trackMarketingEvent(event: MarketingEventPayload) {
  if (process.env.NODE_ENV !== "production") {
    console.info("[marketing-event]", event);
  }
}
