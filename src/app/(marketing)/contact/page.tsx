import type { Metadata } from "next";
import Link from "next/link";
import { MessageSquare, ShieldCheck } from "lucide-react";
import { ContactForm } from "@/components/forms/contact-form";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Get Your Custom Automation Plan",
  description: "Contact QevixAi for a practical AI receptionist and follow-up automation plan."
};

export default function ContactPage() {
  return (
    <main className="form-page">
      <div className="container form-layout">
        <div>
          <p className="section-kicker">Custom automation plan</p>
          <h1 className="section-heading">Get a Practical Plan for Your Workflow</h1>
          <p className="section-lede">
            Share what happens when leads call, message, book, or need follow-up. We will
            recommend the next best workflow. You can also email{" "}
            <Link href={siteConfig.contact.emailHref}>{siteConfig.contact.email}</Link> or call{" "}
            <Link href={siteConfig.contact.phoneHref}>{siteConfig.contact.phone}</Link>.
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
            Custom plan request
          </div>
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
