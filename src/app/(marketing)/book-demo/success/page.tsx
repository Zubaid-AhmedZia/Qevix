import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Demo request received",
  description: "Your QevixAi demo request has been received."
};

export default function DemoSuccessPage() {
  return (
    <main className="container">
      <section className="success-card">
        <p className="section-kicker">Request received</p>
        <h1>Thanks. Your demo request was submitted.</h1>
        <p>
          The next step is to review your call workflow, industry, and routing needs so
          QevixAi can recommend the right setup.
        </p>
        <div className="button-row">
          <ButtonLink href="/">Back to homepage</ButtonLink>
          <ButtonLink href="/contact" variant="secondary" eventName="contact_cta_click">
            Contact sales
          </ButtonLink>
        </div>
      </section>
    </main>
  );
}
