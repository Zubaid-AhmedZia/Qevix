export type ContactValues = {
  name: string;
  email: string;
  company: string;
  topic: string;
  message: string;
};

export type ContactErrors = Partial<Record<keyof ContactValues, string>>;

function valueFrom(formData: FormData, key: keyof ContactValues) {
  return String(formData.get(key) ?? "").trim();
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function getContactValues(formData: FormData): ContactValues {
  return {
    name: valueFrom(formData, "name"),
    email: valueFrom(formData, "email"),
    company: valueFrom(formData, "company"),
    topic: valueFrom(formData, "topic"),
    message: valueFrom(formData, "message")
  };
}

export function validateContact(values: ContactValues) {
  const errors: ContactErrors = {};

  if (values.name.length < 2) errors.name = "Enter your name.";
  if (!isEmail(values.email)) errors.email = "Enter a valid email address.";
  if (values.company.length < 2) errors.company = "Enter your company name.";
  if (!values.topic) errors.topic = "Choose what you want to discuss.";
  if (values.message.length < 12) errors.message = "Write a short message for the team.";

  return {
    valid: Object.keys(errors).length === 0,
    errors
  };
}
