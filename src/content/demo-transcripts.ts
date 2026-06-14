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
      "I am a new patient with tooth pain. I need to know if you can see me today and whether you take emergency visits.",
    ai:
      "I can help. I will collect your details, mark this as urgent, check the best appointment path, and send the clinic a summary before you arrive.",
    details: [
      { label: "Voice", value: "Urgent new-patient request captured" },
      { label: "Booking", value: "Same-day preference collected" },
      { label: "CRM", value: "New patient lead routed to front desk" }
    ],
    finalAction:
      "Appointment request created, SMS confirmation queued, and the front desk receives the call summary."
  },
  {
    id: "home-services",
    label: "Home services",
    caller:
      "My water heater is leaking. I need someone today, but I am not sure what information you need first.",
    ai:
      "I will gather the property address, leak status, access notes, and urgency so the dispatch team can respond with the right next step.",
    details: [
      { label: "Voice", value: "Emergency service details collected" },
      { label: "Follow-up", value: "Text prompt prepared for photos" },
      { label: "Pipeline", value: "Same-day service task created" }
    ],
    finalAction:
      "Lead moves to urgent dispatch, customer gets a photo-request text, and the coordinator gets the task."
  },
  {
    id: "medspa",
    label: "Medspa",
    caller:
      "I saw your treatment page and want to know if I am a good fit before booking a consultation.",
    ai:
      "I can ask a few consultation questions, collect your preferred times, and send the care team the context they need before they follow up.",
    details: [
      { label: "Voice", value: "Treatment interest qualified" },
      { label: "Funnel", value: "Consultation source captured" },
      { label: "Follow-up", value: "Reminder sequence prepared" }
    ],
    finalAction:
      "Consult request routed to the right team, CRM source tagged, and follow-up reminder prepared."
  }
];
