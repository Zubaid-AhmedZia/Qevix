"use client";

import { useActionState } from "react";
import { SubmitButton } from "@/components/forms/submit-button";
import {
  submitContactRequest,
  type ContactRequestState
} from "@/lib/actions/submit-contact-request";

const topics = [
  "Talk to sales",
  "Ask about setup",
  "Partnership enquiry",
  "Support question",
  "Other"
];

function errorId(name: string) {
  return `${name}-error`;
}

export function ContactForm() {
  const initialValues = {
    name: "",
    email: "",
    company: "",
    topic: "",
    message: ""
  };
  const initialState: ContactRequestState = {
    values: initialValues
  };
  const [state, formAction] = useActionState(submitContactRequest, initialState);
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
        <label htmlFor="topic">Topic</label>
        <select
          id="topic"
          name="topic"
          defaultValue={values.topic}
          required
          aria-describedby={state.errors?.topic ? errorId("topic") : undefined}
        >
          <option value="">Choose a topic</option>
          {topics.map((topic) => (
            <option value={topic} key={topic}>
              {topic}
            </option>
          ))}
        </select>
        {state.errors?.topic ? (
          <span className="field-error" id={errorId("topic")}>
            {state.errors.topic}
          </span>
        ) : null}
      </div>

      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          defaultValue={values.message}
          required
          aria-describedby={state.errors?.message ? errorId("message") : undefined}
          placeholder="Share what you want to discuss."
        />
        {state.errors?.message ? (
          <span className="field-error" id={errorId("message")}>
            {state.errors.message}
          </span>
        ) : null}
      </div>

      <SubmitButton pendingLabel="Sending message...">Send message</SubmitButton>
    </form>
  );
}
