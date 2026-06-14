import type { Metadata } from "next";
import { MessageSquare, ShieldCheck } from "lucide-react";
import { ContactForm } from "@/components/forms/contact-form";

export const metadata: Metadata = {
  title: "Contact sales",
  description: "Contact QevixAi about automation strategy, setup, partnerships, or product questions."
};

export default function ContactPage() {
  return (
    <main className="form-page">
      <div className="container form-layout">
        <div>
          <p className="section-kicker">Contact</p>
          <h1 className="section-heading">Talk to QevixAi about your automation workflow.</h1>
          <p className="section-lede">
            Use this route for sales questions, setup details, partnerships, or product
            conversations. Share the workflow you want to improve and the team will have
            enough context to respond with a practical next step.
          </p>

          <ul className="control-list hero-actions">
            {[
              "Discuss voice agent scope and guardrails",
              "Review follow-up, CRM, and booking handoffs",
              "Get a clear recommendation for the next step"
            ].map((item) => (
              <li key={item}>
                <ShieldCheck aria-hidden="true" size={18} className="positive" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="form-card">
          <div className="eyebrow">
            <MessageSquare aria-hidden="true" size={16} />
            Contact sales
          </div>
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
