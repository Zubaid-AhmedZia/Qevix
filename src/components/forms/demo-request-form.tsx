"use client";

import type { FormEvent } from "react";
import { useEffect, useState } from "react";
import { SubmitButton } from "@/components/forms/submit-button";
import {
  getDemoRequestValues,
  validateDemoRequest,
  type DemoRequestErrors,
  type DemoRequestValues
} from "@/lib/validation/demo-request-schema";

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

const validPlans = new Set(["starter", "growth", "multi-location"]);

function errorId(name: string) {
  return `${name}-error`;
}

export function DemoRequestForm() {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    industry: "",
    callVolume: "",
    mainGoal: "",
    plan: "",
    currentChallenge: ""
  };
  const [values, setValues] = useState<DemoRequestValues>(initialValues);
  const [errors, setErrors] = useState<DemoRequestErrors>({});
  const [message, setMessage] = useState<string>();

  useEffect(() => {
    const plan = new URLSearchParams(window.location.search).get("plan") ?? "";
    if (validPlans.has(plan)) {
      setValues((current) => ({ ...current, plan }));
    }
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextValues = getDemoRequestValues(new FormData(event.currentTarget));
    const result = validateDemoRequest(nextValues);

    setValues(nextValues);
    setErrors(result.errors);

    if (!result.valid) {
      setMessage("Please fix the highlighted fields.");
      return;
    }

    window.location.href = "/book-demo/success";
  }

  return (
    <form className="form-grid" noValidate onSubmit={handleSubmit}>
      {message ? (
        <p className="form-message" role="alert">
          {message}
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
          aria-describedby={errors.name ? errorId("name") : undefined}
        />
        {errors.name ? (
          <span className="field-error" id={errorId("name")}>
            {errors.name}
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
          aria-describedby={errors.email ? errorId("email") : undefined}
        />
        {errors.email ? (
          <span className="field-error" id={errorId("email")}>
            {errors.email}
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
          aria-describedby={errors.company ? errorId("company") : undefined}
        />
        {errors.company ? (
          <span className="field-error" id={errorId("company")}>
            {errors.company}
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
          aria-describedby={errors.industry ? errorId("industry") : undefined}
        >
          <option value="">Select an industry</option>
          {industries.map((industry) => (
            <option value={industry} key={industry}>
              {industry}
            </option>
          ))}
        </select>
        {errors.industry ? (
          <span className="field-error" id={errorId("industry")}>
            {errors.industry}
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
          aria-describedby={errors.callVolume ? errorId("callVolume") : undefined}
        >
          <option value="">Select call volume</option>
          {callVolumes.map((volume) => (
            <option value={volume} key={volume}>
              {volume}
            </option>
          ))}
        </select>
        {errors.callVolume ? (
          <span className="field-error" id={errorId("callVolume")}>
            {errors.callVolume}
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
          aria-describedby={errors.mainGoal ? errorId("mainGoal") : undefined}
        >
          <option value="">Select main goal</option>
          {mainGoals.map((goal) => (
            <option value={goal} key={goal}>
              {goal}
            </option>
          ))}
        </select>
        {errors.mainGoal ? (
          <span className="field-error" id={errorId("mainGoal")}>
            {errors.mainGoal}
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
          aria-describedby={errors.currentChallenge ? errorId("currentChallenge") : undefined}
          placeholder="Tell us what happens today when leads call, message, book, or need follow-up."
        />
        {errors.currentChallenge ? (
          <span className="field-error" id={errorId("currentChallenge")}>
            {errors.currentChallenge}
          </span>
        ) : null}
      </div>

      <SubmitButton pendingLabel="Sending request...">Request My Free AI Audit</SubmitButton>
    </form>
  );
}
