export type PricingPlan = {
  id: "starter" | "growth" | "multi-location";
  name: string;
  fit: string;
  signal: string;
  idealFor: string;
  capabilities: string[];
  support: string;
  featured?: boolean;
};

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    fit: "Answer missed leads",
    signal: "One core workflow",
    idealFor:
      "For businesses ready to fix missed calls, lead capture, or appointment requests.",
    capabilities: [
      "AI receptionist workflow",
      "Approved intake questions",
      "Clean handoff summary"
    ],
    support: "Launch review"
  },
  {
    id: "growth",
    name: "Growth",
    fit: "Book more appointments",
    signal: "Voice + follow-up + CRM",
    idealFor:
      "For teams that want calls, follow-ups, bookings, and pipeline updates connected.",
    capabilities: [
      "AI voice plus follow-up",
      "Booking and routing rules",
      "Pipeline notifications"
    ],
    support: "Priority optimization",
    featured: true
  },
  {
    id: "multi-location",
    name: "Multi-Location",
    fit: "Standardize response",
    signal: "Multi-flow system",
    idealFor:
      "For businesses with multiple locations, teams, campaigns, or service lines.",
    capabilities: [
      "Multiple workflow paths",
      "Location-aware routing",
      "Cross-team visibility"
    ],
    support: "Systems review"
  }
];
