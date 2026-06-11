"use server";

import { redirect } from "next/navigation";
import { trackMarketingEvent } from "@/lib/analytics/events";
import {
  getContactValues,
  validateContact,
  type ContactErrors,
  type ContactValues
} from "@/lib/validation/contact-schema";

export type ContactRequestState = {
  values?: ContactValues;
  errors?: ContactErrors;
  message?: string;
};

export async function submitContactRequest(
  _previousState: ContactRequestState,
  formData: FormData
): Promise<ContactRequestState> {
  const values = getContactValues(formData);
  const result = validateContact(values);

  if (!result.valid) {
    return {
      values,
      errors: result.errors,
      message: "Please fix the highlighted fields."
    };
  }

  await trackMarketingEvent({
    name: "contact_form_submit",
    properties: {
      topic: values.topic
    }
  });

  redirect("/contact/success");
}
