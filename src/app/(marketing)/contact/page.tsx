import type { Metadata } from "next";
import { MessageSquare, ShieldCheck } from "lucide-react";
import { ContactForm } from "@/components/forms/contact-form";

export const metadata: Metadata = {
  title: "Contact sales",
  description: "Contact QevixAi about sales, setup, partnerships, or product questions."
};

export default function ContactPage() {
  return (
    <main className="form-page">
      <div className="container form-layout">
        <div>
          <p className="section-kicker">Contact</p>
          <h1 className="section-heading">Talk to QevixAi about your call workflow.</h1>
          <p className="section-lede">
            Use this route for sales questions, setup details, or product conversations.
            Direct email and phone details can be added when QevixAi has confirmed channels.
          </p>

          <ul className="control-list hero-actions">
            {[
              "No placeholder contact details",
              "Server-side validation before success",
              "Plain-text errors for accessible correction"
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
