import type { Metadata } from "next";
import { CalendarCheck, CheckCircle2 } from "lucide-react";
import { DemoRequestForm } from "@/components/forms/demo-request-form";

export const metadata: Metadata = {
  title: "Book Your Free AI Audit",
  description:
    "Request a free QevixAi audit for AI receptionist, follow-up, booking, and lead qualification workflows."
};

const validPlans = new Set(["starter", "growth", "multi-location"]);

type PageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export default async function BookDemoPage({ searchParams }: PageProps) {
  const params = (await searchParams) ?? {};
  const rawPlan = Array.isArray(params.plan) ? params.plan[0] : params.plan;
  const defaultPlan = rawPlan && validPlans.has(rawPlan) ? rawPlan : "";

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
          <DemoRequestForm defaultPlan={defaultPlan} />
        </div>
      </div>
    </main>
  );
}
