export type DemoTranscript = {
  id: string;
  label: string;
  caller: string;
  ai: string;
  details: {
    label: string;
    value: string;
  }[];
  finalAction: string;
};

export const demoTranscripts: DemoTranscript[] = [
  {
    id: "dental",
    label: "Dental clinic",
    caller:
      "Hi, I chipped a tooth this morning. I am a new patient and need to know if anyone can see me soon.",
    ai:
      "I can help with that. I will collect a few details, check your preferred time window, and mark this as an urgent new-patient request for the clinic.",
    details: [
      { label: "Need", value: "Chipped tooth, new patient" },
      { label: "Priority", value: "Urgent dental appointment" },
      { label: "Captured", value: "Name, phone, preferred time" }
    ],
    finalAction: "Booked available consultation slot and sent summary to front desk."
  },
  {
    id: "home-services",
    label: "Home services",
    caller:
      "My water heater is leaking and I need someone to tell me whether this can be looked at today.",
    ai:
      "I can gather the job details and route this as a same-day service request. What is the property address and is the leak active right now?",
    details: [
      { label: "Need", value: "Water heater leak" },
      { label: "Priority", value: "Same-day service request" },
      { label: "Captured", value: "Address, urgency, access notes" }
    ],
    finalAction: "Created dispatch-ready request and notified service coordinator."
  },
  {
    id: "property",
    label: "Property team",
    caller:
      "I am calling about a two-bedroom listing and want to know if I can tour it after work this week.",
    ai:
      "I can help schedule a tour. I will confirm the listing, your preferred days, and the best contact number before sending this to the leasing team.",
    details: [
      { label: "Need", value: "Two-bedroom tour request" },
      { label: "Priority", value: "Qualified leasing enquiry" },
      { label: "Captured", value: "Listing, schedule, contact details" }
    ],
    finalAction: "Reserved tour window and sent lead details to leasing team."
  }
];
