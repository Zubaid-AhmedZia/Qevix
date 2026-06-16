import type { Metadata } from "next";
import { CalendarCheck, CheckCircle2 } from "lucide-react";
import { DemoRequestForm } from "@/components/forms/demo-request-form";

export const metadata: Metadata = {
  title: "Book Your Free AI Audit",
  description:
    "Request a free QevixAi audit for AI receptionist, follow-up, booking, and lead qualification workflows."
};

export default function BookDemoPage() {
  return (
    <main className="form-page">
      <div className="container form-layout">
        <div>
          <p className="section-kicker">Free AI audit</p>
          <h1 className="section-heading">Book Your Free AI Audit</h1>
          <p className="section-lede">
            Tell us how your business handles calls, leads, appointments, and follow-ups.
            We will recommend a practical AI receptionist workflow.
          </p>

          <ul className="control-list hero-actions">
            {[
              "Map your busiest call and lead paths",
              "Review booking and follow-up rules",
              "Find where leads, time, or appointments are being lost"
            ].map((item) => (
              <li key={item}>
                <CheckCircle2 aria-hidden="true" size={18} className="positive" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="form-card">
          <div className="eyebrow">
            <CalendarCheck aria-hidden="true" size={16} />
            AI audit request
          </div>
          <DemoRequestForm />
        </div>
      </div>
    </main>
  );
}
