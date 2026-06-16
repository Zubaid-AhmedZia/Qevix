import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/button";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "AI audit request received",
  description: "Your QevixAi AI audit request has been received."
};

export default function DemoSuccessPage() {
  return (
    <main className="container">
      <section className="success-card">
        <p className="section-kicker">Request received</p>
        <h1>Your AI Audit Request Has Been Received</h1>
        <p>
          Thanks for reaching out. We will review your workflow and follow up with a
          practical recommendation for QevixAi. For direct follow-up, email{" "}
          <Link href={siteConfig.contact.emailHref}>{siteConfig.contact.email}</Link> or call{" "}
          <Link href={siteConfig.contact.phoneHref}>{siteConfig.contact.phone}</Link>.
        </p>
        <div className="button-row">
          <ButtonLink href="/">Back to homepage</ButtonLink>
          <ButtonLink href="/contact" variant="secondary" eventName="contact_cta_click">
            Get Your Custom Automation Plan
          </ButtonLink>
        </div>
      </section>
    </main>
  );
}
