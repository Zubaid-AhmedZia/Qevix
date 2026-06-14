export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    question: "Is QevixAi only an AI receptionist?",
    answer:
      "No. Voice agents are the front door, but QevixAi can also connect messaging follow-up, booking rules, CRM routing, team notifications, and workflow reporting."
  },
  {
    question: "How does the automation know what to say?",
    answer:
      "It is configured from your approved business information: services, hours, locations, policies, intake questions, escalation rules, and the actions your team wants after each scenario."
  },
  {
    question: "Can humans stay in control?",
    answer:
      "Yes. You define what the system can handle, what should be transferred, what should become a callback, and which conversations need human review."
  },
  {
    question: "What tools can it connect with?",
    answer:
      "The public site does not claim specific integrations until they are confirmed for your stack. The demo process maps the tools you use and recommends the right connection path."
  },
  {
    question: "Will callers know they are speaking with automation?",
    answer:
      "The goal is a clear, professional experience that gets callers helped quickly. QevixAi should not rely on deceptive human imitation or gimmicks."
  },
  {
    question: "What happens after a missed call?",
    answer:
      "A missed-call workflow can send a follow-up message, collect intent, create a task, route the lead, or guide the person toward booking based on your rules."
  },
  {
    question: "Can it work for multiple locations?",
    answer:
      "Yes. Multi-location workflows can route by location, service line, urgency, team ownership, or campaign source when those rules are defined during setup."
  },
  {
    question: "How do we get a quote?",
    answer:
      "Use the demo form with your industry, call volume, workflows, and tools. QevixAi can then scope the right automation system instead of showing a one-size-fits-all price."
  }
];
