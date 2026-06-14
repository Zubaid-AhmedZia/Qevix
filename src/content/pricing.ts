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
    name: "Starter AI System",
    fit: "Fix the biggest leak first",
    signal: "One core workflow",
    idealFor:
      "For businesses that need one high-impact automation live fast: call answering, lead capture, booking, or callback routing.",
    capabilities: [
      "One primary voice or follow-up workflow",
      "Approved intake prompts and business rules",
      "Clean team handoff with summaries"
    ],
    support: "Launch review included"
  },
  {
    id: "growth",
    name: "Growth Infrastructure",
    fit: "Connect the full lead journey",
    signal: "Voice + follow-up + CRM",
    idealFor:
      "For teams ready to connect calls, messaging, booking logic, CRM stages, and team notifications into one operating system.",
    capabilities: [
      "AI voice agent plus SMS or WhatsApp flow",
      "Pipeline routing and task automation",
      "Expanded scenario testing before launch"
    ],
    support: "Priority optimization",
    featured: true
  },
  {
    id: "multi-location",
    name: "Full AI Ecosystem",
    fit: "Scale across teams or locations",
    signal: "Multi-flow system",
    idealFor:
      "For organizations that need consistent workflows across locations, service lines, campaign funnels, or larger operating teams.",
    capabilities: [
      "Multiple voice, booking, and follow-up paths",
      "Location-aware routing and ownership rules",
      "Cross-team visibility and system refinement"
    ],
    support: "Systems review included"
  }
];
