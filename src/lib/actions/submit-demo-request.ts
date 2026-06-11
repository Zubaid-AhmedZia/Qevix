"use server";

import { redirect } from "next/navigation";
import { trackMarketingEvent } from "@/lib/analytics/events";
import {
  getDemoRequestValues,
  validateDemoRequest,
  type DemoRequestErrors,
  type DemoRequestValues
} from "@/lib/validation/demo-request-schema";

export type DemoRequestState = {
  values?: DemoRequestValues;
  errors?: DemoRequestErrors;
  message?: string;
};

export async function submitDemoRequest(
  _previousState: DemoRequestState,
  formData: FormData
): Promise<DemoRequestState> {
  const values = getDemoRequestValues(formData);
  const result = validateDemoRequest(values);

  if (!result.valid) {
    return {
      values,
      errors: result.errors,
      message: "Please fix the highlighted fields."
    };
  }

  await trackMarketingEvent({
    name: "demo_form_submit",
    properties: {
      plan: values.plan || "not-selected",
      industry: values.industry,
      callVolume: values.callVolume
    }
  });

  redirect("/book-demo/success");
}
