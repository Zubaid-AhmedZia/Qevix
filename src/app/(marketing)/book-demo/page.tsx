import type { Metadata } from "next";
import { CalendarCheck, CheckCircle2 } from "lucide-react";
import { DemoRequestForm } from "@/components/forms/demo-request-form";

export const metadata: Metadata = {
  title: "Book a demo",
  description:
    "Request a QevixAi demo and share your industry, call volume, and current workflow."
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
          <p className="section-kicker">Book a demo</p>
          <h1 className="section-heading">
            See how QevixAi would answer calls for your business.
          </h1>
          <p className="section-lede">
            Share the basics about your industry, call volume, and current workflow. The
            demo request routes through a server action with validation and a success page.
          </p>

          <ul className="control-list hero-actions">
            {[
              "Plan preselection from pricing buttons",
              "No fake phone number or copied competitor contact details",
              "Workflow details used to recommend the right setup"
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
            Demo request
          </div>
          <DemoRequestForm defaultPlan={defaultPlan} />
        </div>
      </div>
    </main>
  );
}
