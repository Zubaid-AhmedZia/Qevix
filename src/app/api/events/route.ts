import { NextResponse } from "next/server";
import {
  trackMarketingEvent,
  type MarketingEventName
} from "@/lib/analytics/events";

const allowedEvents = new Set<MarketingEventName>([
  "hero_cta_click",
  "demo_cta_click",
  "pricing_cta_click",
  "contact_cta_click",
  "demo_form_submit",
  "contact_form_submit"
]);

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  if (
    typeof payload !== "object" ||
    payload === null ||
    !("name" in payload) ||
    typeof payload.name !== "string" ||
    !allowedEvents.has(payload.name as MarketingEventName)
  ) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  await trackMarketingEvent({
    name: payload.name as MarketingEventName,
    properties:
      "properties" in payload && typeof payload.properties === "object" && payload.properties !== null
        ? (payload.properties as Record<string, string>)
        : undefined
  });

  return new NextResponse(null, { status: 204 });
}
