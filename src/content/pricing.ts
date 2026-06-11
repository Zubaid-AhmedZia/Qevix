export type PricingPlan = {
  id: "starter" | "growth" | "multi-location";
  name: string;
  fit: string;
  idealFor: string;
  capabilities: string[];
  support: string;
  featured?: boolean;
};

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    fit: "Single workflow",
    idealFor: "A focused team that wants missed-call and after-hours coverage for one main process.",
    capabilities: [
      "Call answering and lead capture",
      "Approved FAQ responses",
      "Basic booking or callback rules",
      "Call summaries for your team"
    ],
    support: "Setup guidance and standard support"
  },
  {
    id: "growth",
    name: "Growth",
    fit: "More call volume and richer routing",
    idealFor: "Growing teams that need qualification, booking, and escalations across more caller types.",
    capabilities: [
      "Everything in Starter",
      "Multiple routing paths",
      "Expanded intake questions",
      "Priority refinement reviews"
    ],
    support: "Enhanced support for workflow changes",
    featured: true
  },
  {
    id: "multi-location",
    name: "Multi-location",
    fit: "Multiple teams or locations",
    idealFor: "Organizations that need consistent call handling across locations, teams, or service lines.",
    capabilities: [
      "Everything in Growth",
      "Location-aware routing",
      "Team notification rules",
      "Multi-workflow reporting"
    ],
    support: "Launch planning and ongoing optimization"
  }
];
