"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { SubmitButton } from "@/components/forms/submit-button";
import {
  getContactValues,
  validateContact,
  type ContactErrors,
  type ContactValues
} from "@/lib/validation/contact-schema";

const topics = [
  "Get a custom automation plan",
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
  const [values, setValues] = useState<ContactValues>(initialValues);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [message, setMessage] = useState<string>();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextValues = getContactValues(new FormData(event.currentTarget));
    const result = validateContact(nextValues);

    setValues(nextValues);
    setErrors(result.errors);

    if (!result.valid) {
      setMessage("Please fix the highlighted fields.");
      return;
    }

    window.location.href = "/contact/success";
  }

  return (
    <form className="form-grid" noValidate onSubmit={handleSubmit}>
      {message ? (
        <p className="form-message" role="alert">
          {message}
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
        <label htmlFor="company">Company</label>
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
        <label htmlFor="topic">Topic</label>
        <select
          id="topic"
          name="topic"
          defaultValue={values.topic}
          required
          aria-describedby={errors.topic ? errorId("topic") : undefined}
        >
          <option value="">Choose a topic</option>
          {topics.map((topic) => (
            <option value={topic} key={topic}>
              {topic}
            </option>
          ))}
        </select>
        {errors.topic ? (
          <span className="field-error" id={errorId("topic")}>
            {errors.topic}
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
          aria-describedby={errors.message ? errorId("message") : undefined}
          placeholder="Share what you want to discuss."
        />
        {errors.message ? (
          <span className="field-error" id={errorId("message")}>
            {errors.message}
          </span>
        ) : null}
      </div>

      <SubmitButton pendingLabel="Sending message...">
        Get Your Custom Automation Plan
      </SubmitButton>
    </form>
  );
}
