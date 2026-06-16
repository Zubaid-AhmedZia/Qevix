export const siteConfig = {
  name: "QevixAi",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://qevixai.com",
  contact: {
    email: "info@qevixai.com",
    emailHref: "mailto:info@qevixai.com",
    phone: "+1 (469) 674-4576",
    phoneHref: "tel:+14696744576",
    telephone: "+14696744576"
  },
  description:
    "QevixAi helps businesses answer leads, automate follow-ups, qualify prospects, and book more appointments 24/7 with an AI receptionist built around their workflow.",
  brandPromise:
    "QevixAi answers leads, follows up automatically, qualifies prospects, and books appointments 24/7."
};

export const heroContent = {
  eyebrow: "AI Receptionist & Follow-Up Automation",
  titlePrefix: "Automate Follow-Ups, Book More Appointments,",
  titleAccent: "and Save 20+ Hours Per Week",
  body:
    "QevixAi answers leads, follows up automatically, qualifies prospects, and books appointments 24/7 so your team can focus on closing more business.",
  proof: ["Instant lead response", "Appointment booking", "Automatic follow-ups", "24/7 availability"],
  primaryCta: "Book a Free AI Audit",
  secondaryCta: "See a Live Demo"
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
    title: "Instant Lead Response",
    eyebrow: "Answer",
    body: "Respond to calls, forms, and messages before prospects move on.",
    bullets: ["Missed-call recovery", "Intake questions", "Urgent routing"]
  },
  {
    title: "Automatic Follow-Ups",
    eyebrow: "Follow up",
    body: "Keep conversations alive without your team chasing every lead manually.",
    bullets: ["SMS follow-up", "WhatsApp prompts", "Reminder flows"]
  },
  {
    title: "Lead Qualification",
    eyebrow: "Qualify",
    body: "Ask the right questions and send cleaner opportunities to your team.",
    bullets: ["Intent capture", "Job details", "Lead summaries"]
  },
  {
    title: "Appointment Booking",
    eyebrow: "Book",
    body: "Turn qualified enquiries into calendar bookings automatically.",
    bullets: ["Booking rules", "Calendar path", "Confirmations"]
  },
  {
    title: "Human Handoff",
    eyebrow: "Route",
    body: "Send urgent or high-value conversations to the right person fast.",
    bullets: ["Escalation rules", "Team alerts", "Callback routing"]
  },
  {
    title: "Call Summaries",
    eyebrow: "Summarize",
    body: "Give your team clean notes so they know exactly what happened.",
    bullets: ["Captured fields", "Next step", "CRM-ready notes"]
  }
];

export const voiceAgentFeatures = [
  {
    title: "Answers missed calls instantly",
    body: "QevixAi responds when your team is busy, closed, or already on another call."
  },
  {
    title: "Books the next step",
    body: "Qualified enquiries move toward an appointment, callback, or human handoff."
  },
  {
    title: "Keeps your team in control",
    body: "You decide what gets answered, routed, summarized, or escalated."
  }
];

export const workflowOutcomes = [
  {
    value: 24,
    suffix: "/7",
    label: "lead response without another shift"
  },
  {
    value: 20,
    suffix: "+",
    label: "hours saved per week target"
  },
  {
    value: 30,
    suffix: "s",
    label: "target response time"
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
    title: "Map Your Workflow",
    body: "We learn how your business handles calls, leads, bookings, follow-ups, and handoffs."
  },
  {
    title: "Build Your AI Receptionist",
    body: "QevixAi is configured around your services, rules, calendar, and escalation process."
  },
  {
    title: "Save Time & Book More",
    body: "Your team gets faster responses, cleaner leads, fewer repetitive calls, and more booked appointments."
  }
];

export const controlFeatures = [
  "Business hours, service areas, and location rules",
  "Escalation paths for urgent calls",
  "Caller summaries and captured fields",
  "CRM stages and team notifications",
  "Follow-up timing for SMS and WhatsApp"
];

export const caseStudies = [
  {
    industry: "Roofing Company",
    metrics: [
      { label: "Response time", value: "3 hours -> 30 seconds" },
      { label: "Appointments booked", value: "+42%" },
      { label: "Manual calls reduced", value: "70%" }
    ],
    body:
      "QevixAi responded to quote requests instantly, qualified job details, and helped book more inspection calls without manual chasing."
  },
  {
    industry: "Medical Clinic",
    metrics: [
      { label: "Patient enquiry response", value: "Faster" },
      { label: "Front-desk interruptions", value: "Reduced" },
      { label: "After-hours requests", value: "Captured" }
    ],
    body:
      "QevixAi handled routine patient enquiries, captured appointment requests, and routed urgent calls based on clinic rules."
  },
  {
    industry: "Real Estate Team",
    metrics: [
      { label: "Lead qualification", value: "Faster" },
      { label: "Buyer/seller follow-ups", value: "Automatic" },
      { label: "Agent summaries", value: "Cleaner" }
    ],
    body:
      "QevixAi qualified new property enquiries, scheduled calls, and helped agents focus on serious leads."
  }
];
