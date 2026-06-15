"use client";

import { useActionState } from "react";
import { SubmitButton } from "@/components/forms/submit-button";
import {
  submitDemoRequest,
  type DemoRequestState
} from "@/lib/actions/submit-demo-request";

const industries = [
  "Medical clinic",
  "Roofing company",
  "Real estate team",
  "Auto dealership",
  "Medspa or salon",
  "Home services",
  "Legal office",
  "Restaurant",
  "Multi-location business",
  "Other"
];

const callVolumes = [
  "Under 100 leads/calls per month",
  "100-500 leads/calls per month",
  "500-1,500 leads/calls per month",
  "1,500+ leads/calls per month",
  "Not sure yet"
];

const mainGoals = [
  "Answer missed calls",
  "Book more appointments",
  "Automate follow-ups",
  "Qualify leads",
  "Reduce admin workload",
  "Other"
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
    mainGoal: "",
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

      <input type="hidden" name="plan" value={values.plan} />

      <div className="field">
        <label htmlFor="name">Full name</label>
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
        <label htmlFor="company">Company name</label>
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
        <label htmlFor="callVolume">Monthly lead/call volume</label>
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
        <label htmlFor="mainGoal">Main goal</label>
        <select
          id="mainGoal"
          name="mainGoal"
          defaultValue={values.mainGoal}
          required
          aria-describedby={state.errors?.mainGoal ? errorId("mainGoal") : undefined}
        >
          <option value="">Select main goal</option>
          {mainGoals.map((goal) => (
            <option value={goal} key={goal}>
              {goal}
            </option>
          ))}
        </select>
        {state.errors?.mainGoal ? (
          <span className="field-error" id={errorId("mainGoal")}>
            {state.errors.mainGoal}
          </span>
        ) : null}
      </div>

      <div className="field">
        <label htmlFor="currentChallenge">Message / workflow details</label>
        <textarea
          id="currentChallenge"
          name="currentChallenge"
          defaultValue={values.currentChallenge}
          required
          aria-describedby={
            state.errors?.currentChallenge ? errorId("currentChallenge") : undefined
          }
          placeholder="Tell us what happens today when leads call, message, book, or need follow-up."
        />
        {state.errors?.currentChallenge ? (
          <span className="field-error" id={errorId("currentChallenge")}>
            {state.errors.currentChallenge}
          </span>
        ) : null}
      </div>

      <SubmitButton pendingLabel="Sending request...">Request My Free AI Audit</SubmitButton>
    </form>
  );
}
