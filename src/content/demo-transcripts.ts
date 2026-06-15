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
    label: "Medical clinic",
    caller: "I am a new patient and need an appointment today.",
    ai: "I can help. I will collect the key details, mark the request, and send the clinic a summary.",
    details: [
      { label: "Lead comes in", value: "New patient request captured" },
      { label: "Qualify", value: "Urgency and preference collected" },
      { label: "Book or route", value: "Front desk receives summary" }
    ],
    finalAction: "Appointment request created, SMS follow-up queued, and the team gets clean notes."
  },
  {
    id: "home-services",
    label: "Home services",
    caller: "My water heater is leaking. I need someone today.",
    ai: "I will gather the address, urgency, and job details so dispatch can respond fast.",
    details: [
      { label: "Lead comes in", value: "Emergency request captured" },
      { label: "Qualify", value: "Address and urgency collected" },
      { label: "Book or route", value: "Same-day task created" }
    ],
    finalAction: "Lead moves to urgent dispatch and the customer receives a photo-request text."
  },
  {
    id: "medspa",
    label: "Medspa",
    caller: "I want to know if I am a good fit before booking a consultation.",
    ai: "I can ask a few intake questions, collect preferred times, and prepare the care team.",
    details: [
      { label: "Lead comes in", value: "Treatment interest captured" },
      { label: "Qualify", value: "Consult questions answered" },
      { label: "Book or route", value: "Follow-up prepared" }
    ],
    finalAction: "Consult request is routed, source is tagged, and follow-up is ready."
  }
];
