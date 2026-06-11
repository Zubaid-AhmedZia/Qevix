"use client";

import { useActionState } from "react";
import { SubmitButton } from "@/components/forms/submit-button";
import {
  submitDemoRequest,
  type DemoRequestState
} from "@/lib/actions/submit-demo-request";

const industries = [
  "Dental clinic",
  "Medspa",
  "Salon",
  "Home services",
  "Property team",
  "Legal office",
  "Restaurant",
  "Multi-location business",
  "Other"
];

const callVolumes = [
  "Under 100 calls per month",
  "100-500 calls per month",
  "500-1,500 calls per month",
  "1,500+ calls per month",
  "Not sure yet"
];

const plans = [
  { value: "", label: "Recommend the right setup" },
  { value: "starter", label: "Starter" },
  { value: "growth", label: "Growth" },
  { value: "multi-location", label: "Multi-location" }
];

function errorId(name: string) {
  return `${name}-error`;
}

export function DemoRequestForm({ defaultPlan = "" }: { defaultPlan?: string }) {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    industry: "",
    callVolume: "",
    plan: defaultPlan,
    currentChallenge: ""
  };
  const initialState: DemoRequestState = {
    values: initialValues
  };
  const [state, formAction] = useActionState(submitDemoRequest, initialState);
  const values = state.values ?? initialValues;

  return (
    <form action={formAction} className="form-grid" noValidate>
      {state.message ? (
        <p className="form-message" role="alert">
          {state.message}
        </p>
      ) : null}

      <div className="field">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          autoComplete="name"
          defaultValue={values.name}
          required
          aria-describedby={state.errors?.name ? errorId("name") : undefined}
        />
        {state.errors?.name ? (
          <span className="field-error" id={errorId("name")}>
            {state.errors.name}
          </span>
        ) : null}
      </div>

      <div className="field">
        <label htmlFor="email">Work email</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          defaultValue={values.email}
          required
          aria-describedby={state.errors?.email ? errorId("email") : undefined}
        />
        {state.errors?.email ? (
          <span className="field-error" id={errorId("email")}>
            {state.errors.email}
          </span>
        ) : null}
      </div>

      <div className="field">
        <label htmlFor="phone">Phone number</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          defaultValue={values.phone}
        />
      </div>

      <div className="field">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          autoComplete="organization"
          defaultValue={values.company}
          required
          aria-describedby={state.errors?.company ? errorId("company") : undefined}
        />
        {state.errors?.company ? (
          <span className="field-error" id={errorId("company")}>
            {state.errors.company}
          </span>
        ) : null}
      </div>

      <div className="field">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="url"
          autoComplete="url"
          defaultValue={values.website}
          placeholder="https://"
        />
      </div>

      <div className="field">
        <label htmlFor="industry">Industry</label>
        <select
          id="industry"
          name="industry"
          defaultValue={values.industry}
          required
          aria-describedby={state.errors?.industry ? errorId("industry") : undefined}
        >
          <option value="">Select an industry</option>
          {industries.map((industry) => (
            <option value={industry} key={industry}>
              {industry}
            </option>
          ))}
        </select>
        {state.errors?.industry ? (
          <span className="field-error" id={errorId("industry")}>
            {state.errors.industry}
          </span>
        ) : null}
      </div>

      <div className="field">
        <label htmlFor="callVolume">Approximate call volume</label>
        <select
          id="callVolume"
          name="callVolume"
          defaultValue={values.callVolume}
          required
          aria-describedby={state.errors?.callVolume ? errorId("callVolume") : undefined}
        >
          <option value="">Select call volume</option>
          {callVolumes.map((volume) => (
            <option value={volume} key={volume}>
              {volume}
            </option>
          ))}
        </select>
        {state.errors?.callVolume ? (
          <span className="field-error" id={errorId("callVolume")}>
            {state.errors.callVolume}
          </span>
        ) : null}
      </div>

      <div className="field">
        <label htmlFor="plan">Plan interest</label>
        <select
          id="plan"
          name="plan"
          defaultValue={values.plan}
          aria-describedby={state.errors?.plan ? errorId("plan") : undefined}
        >
          {plans.map((plan) => (
            <option value={plan.value} key={plan.value}>
              {plan.label}
            </option>
          ))}
        </select>
        {state.errors?.plan ? (
          <span className="field-error" id={errorId("plan")}>
            {state.errors.plan}
          </span>
        ) : null}
      </div>

      <div className="field">
        <label htmlFor="currentChallenge">Current call workflow</label>
        <textarea
          id="currentChallenge"
          name="currentChallenge"
          defaultValue={values.currentChallenge}
          required
          aria-describedby={
            state.errors?.currentChallenge ? errorId("currentChallenge") : undefined
          }
          placeholder="Tell us what happens today when calls are missed, busy, or after hours."
        />
        {state.errors?.currentChallenge ? (
          <span className="field-error" id={errorId("currentChallenge")}>
            {state.errors.currentChallenge}
          </span>
        ) : null}
      </div>

      <SubmitButton pendingLabel="Sending request...">Request demo</SubmitButton>
    </form>
  );
}
