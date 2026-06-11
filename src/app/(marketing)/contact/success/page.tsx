import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Message received",
  description: "Your QevixAi contact message has been received."
};

export default function ContactSuccessPage() {
  return (
    <main className="container">
      <section className="success-card">
        <p className="section-kicker">Message received</p>
        <h1>Thanks. Your message was submitted.</h1>
        <p>
          The team can now review your enquiry and respond with the right next step for
          your call workflow.
        </p>
        <div className="button-row">
          <ButtonLink href="/">Back to homepage</ButtonLink>
          <ButtonLink href="/book-demo" variant="secondary" eventName="demo_cta_click">
            Book a demo
          </ButtonLink>
        </div>
      </section>
    </main>
  );
}
