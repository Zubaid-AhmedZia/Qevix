export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    question: "How quickly can QevixAi be set up?",
    answer:
      "Setup depends on the complexity of your call flow. Most businesses can review a working configuration and begin testing once business details, hours, call rules, and booking workflows are provided."
  },
  {
    question: "Do I need technical staff to use it?",
    answer:
      "No. QevixAi is built as a business tool. Your team provides business information, routing rules, and booking preferences; the product handles the repetitive call workflow."
  },
  {
    question: "What happens when the AI cannot handle a call?",
    answer:
      "It follows the escalation rules you set. That can mean transferring the call, creating a callback task, or sending the conversation summary to the right person."
  },
  {
    question: "Can it answer questions as well as book appointments?",
    answer:
      "Yes, when the answers are based on your approved business information, such as hours, services, locations, policies, availability, and intake requirements."
  },
  {
    question: "Will it sound natural to callers?",
    answer:
      "QevixAi is designed to sound conversational and professional while prioritizing clarity, speed, and accurate routing over gimmicky human-imitation claims."
  },
  {
    question: "Can it work outside office hours?",
    answer:
      "Yes. After-hours coverage is a core use case, so callers can still get answers, share details, request appointments, or be routed for follow-up."
  },
  {
    question: "Can it work for my industry?",
    answer:
      "It is a strong fit when your business handles repeat call patterns like enquiries, bookings, intake, routing, service questions, or status updates."
  },
  {
    question: "How do I get a quote?",
    answer:
      "Use the demo form with your industry, call volume, and workflow details. QevixAi can then recommend the right setup instead of showing invented public prices."
  }
];
