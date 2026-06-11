export type DemoRequestValues = {
  name: string;
  email: string;
  phone: string;
  company: string;
  website: string;
  industry: string;
  callVolume: string;
  plan: string;
  currentChallenge: string;
};

export type DemoRequestErrors = Partial<Record<keyof DemoRequestValues, string>>;

const validPlans = new Set(["", "starter", "growth", "multi-location"]);

function valueFrom(formData: FormData, key: keyof DemoRequestValues) {
  return String(formData.get(key) ?? "").trim();
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function getDemoRequestValues(formData: FormData): DemoRequestValues {
  return {
    name: valueFrom(formData, "name"),
    email: valueFrom(formData, "email"),
    phone: valueFrom(formData, "phone"),
    company: valueFrom(formData, "company"),
    website: valueFrom(formData, "website"),
    industry: valueFrom(formData, "industry"),
    callVolume: valueFrom(formData, "callVolume"),
    plan: valueFrom(formData, "plan"),
    currentChallenge: valueFrom(formData, "currentChallenge")
  };
}

export function validateDemoRequest(values: DemoRequestValues) {
  const errors: DemoRequestErrors = {};

  if (values.name.length < 2) errors.name = "Enter your name.";
  if (!isEmail(values.email)) errors.email = "Enter a valid email address.";
  if (values.company.length < 2) errors.company = "Enter your company name.";
  if (!values.industry) errors.industry = "Select your industry.";
  if (!values.callVolume) errors.callVolume = "Select your approximate call volume.";
  if (!validPlans.has(values.plan)) errors.plan = "Choose a valid plan option.";
  if (values.currentChallenge.length < 12) {
    errors.currentChallenge = "Share a little more about your current call workflow.";
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors
  };
}
