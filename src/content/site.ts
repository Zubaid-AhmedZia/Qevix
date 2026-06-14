export const siteConfig = {
  name: "QevixAi",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://qevixai.com",
  description:
    "QevixAi builds AI voice, messaging, booking, CRM, and workflow automation systems for businesses that run on calls.",
  brandPromise:
    "QevixAi helps businesses answer every call, follow up faster, book more appointments, and keep every workflow moving."
};

export const heroContent = {
  eyebrow: "AI-powered automation systems",
  titlePrefix: "Every lead answered.",
  titleAccent: "Every next step automated.",
  body:
    "QevixAi connects voice agents, instant follow-up, CRM routing, booking flows, and visibility into one system built around your real customer journey.",
  proof: ["24/7 call coverage", "Lead response in seconds", "Human-ready handoffs"],
  primaryCta: "Book a demo",
  secondaryCta: "Watch the automation"
};

export const tickerItems = [
  "AI voice agents",
  "SMS follow-up",
  "WhatsApp workflows",
  "CRM routing",
  "Appointment booking",
  "Lead qualification",
  "Missed-call recovery",
  "Pipeline alerts",
  "Call summaries",
  "Landing page funnels"
];

export const automationServices = [
  {
    title: "AI Voice Agents",
    eyebrow: "Answer",
    body:
      "Pick up calls, ask the right intake questions, answer routine requests, and route complex conversations to your team with context.",
    bullets: ["24/7 call handling", "Lead qualification", "Warm transfer rules"]
  },
  {
    title: "SMS and WhatsApp Follow-up",
    eyebrow: "Recover",
    body:
      "Turn missed calls, abandoned enquiries, and unconfirmed appointments into structured follow-up sequences.",
    bullets: ["Missed-call text back", "Booking reminders", "Reactivation prompts"]
  },
  {
    title: "CRM and Pipeline Automation",
    eyebrow: "Organize",
    body:
      "Push captured details into the right stage, notify the right person, and keep leads from disappearing between tools.",
    bullets: ["Lead routing", "Task creation", "Pipeline status updates"]
  },
  {
    title: "Appointment Booking",
    eyebrow: "Schedule",
    body:
      "Collect service needs, preferred times, location, and contact details before confirming the next best appointment path.",
    bullets: ["Booking rules", "Availability logic", "Confirmation summaries"]
  },
  {
    title: "Website and Funnel Automation",
    eyebrow: "Convert",
    body:
      "Connect landing page forms, call prompts, and follow-up flows so every campaign has a clean conversion path.",
    bullets: ["Lead forms", "CTA routing", "Scenario-based funnels"]
  },
  {
    title: "Reporting and Workflow Visibility",
    eyebrow: "Improve",
    body:
      "Review call summaries, common questions, missed opportunities, and handoff quality so the system improves over time.",
    bullets: ["Conversation summaries", "Team notifications", "Workflow insights"]
  }
];

export const voiceAgentFeatures = [
  {
    title: "Answers like a trained front desk",
    body:
      "The agent uses your hours, services, locations, policies, and routing rules instead of generic scripts."
  },
  {
    title: "Knows when to stop",
    body:
      "Escalation rules define when to transfer, create a callback, or notify a person for sensitive calls."
  },
  {
    title: "Leaves a clean trail",
    body:
      "Every qualified call can produce a summary, captured fields, and the next action for your team."
  }
];

export const workflowOutcomes = [
  {
    value: 24,
    suffix: "/7",
    label: "call coverage without adding another shift"
  },
  {
    value: 6,
    suffix: "",
    label: "connected automation layers from call to CRM"
  },
  {
    value: 3,
    suffix: "",
    label: "handoff paths: book, route, or callback"
  }
];

export const comparisonRows = [
  {
    label: "First response",
    qevix: "Voice and message automation respond immediately",
    voicemail: "Caller waits for a callback",
    ivr: "Menu routes without understanding intent",
    admin: "Depends on staffing"
  },
  {
    label: "Lead capture",
    qevix: "Structured fields flow into the right workflow",
    voicemail: "Details depend on the caller message",
    ivr: "Captures little context",
    admin: "Works when someone is free"
  },
  {
    label: "Follow-up",
    qevix: "SMS, WhatsApp, and task automation can continue the journey",
    voicemail: "Manual follow-up only",
    ivr: "Usually stops at routing",
    admin: "Manual reminders and callbacks"
  },
  {
    label: "Booking",
    qevix: "Uses rules, preferences, and handoff notes",
    voicemail: "Requires phone tag",
    ivr: "Rarely completes a booking",
    admin: "Effective but hard to scale"
  },
  {
    label: "CRM visibility",
    qevix: "Conversation summaries and status updates stay attached",
    voicemail: "Manual notes after the fact",
    ivr: "No useful qualification record",
    admin: "Depends on process discipline"
  },
  {
    label: "Optimization",
    qevix: "Review call patterns and refine workflows",
    voicemail: "Hard to spot patterns",
    ivr: "Rigid changes",
    admin: "Training and staffing dependent"
  }
];

export const howItWorks = [
  {
    title: "Map the customer journey",
    body:
      "Identify what should happen when someone calls, submits a form, asks a question, or needs a follow-up."
  },
  {
    title: "Build the automation stack",
    body:
      "Configure the voice agent, message flows, booking rules, CRM stages, and team notifications around your process."
  },
  {
    title: "Test real scenarios",
    body:
      "Run through common calls, edge cases, transfer moments, and appointment requests before the system goes live."
  },
  {
    title: "Launch, review, and refine",
    body:
      "Use summaries and workflow insights to improve scripts, routing, handoffs, and follow-up over time."
  }
];

export const controlFeatures = [
  "Business hours, service areas, and location rules",
  "Escalation paths for urgent or sensitive calls",
  "Caller summaries, transcript history, and captured fields",
  "CRM stages, pipeline tasks, and team notifications",
  "Follow-up timing for SMS and WhatsApp workflows"
];
