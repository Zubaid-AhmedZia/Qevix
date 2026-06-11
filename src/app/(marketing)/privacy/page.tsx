import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy",
  description: "QevixAi website privacy notice for form submissions and site usage."
};

export default function PrivacyPage() {
  return (
    <main className="container legal-content">
      <p className="section-kicker">Privacy</p>
      <h1>Privacy notice</h1>
      <p>Last updated: June 12, 2026</p>
      <p>
        This notice explains what information QevixAi collects through this website and
        how that information is used to respond to demo requests and business enquiries.
      </p>

      <h2>Information collected</h2>
      <p>
        The demo and contact forms may collect your name, work email, phone number,
        company, website, industry, approximate call volume, plan interest, topic, and
        message. The site may also receive standard technical information such as browser
        type, device information, pages viewed, and timestamps.
      </p>

      <h2>How information is used</h2>
      <p>
        Form information is used to respond to your enquiry, prepare relevant demo
        follow-up, understand your call workflow, and improve the clarity of the website.
        QevixAi does not publish form submissions or use them as testimonials without
        separate permission.
      </p>

      <h2>Analytics and cookies</h2>
      <p>
        This build includes first-party click event handling for key calls to action. It
        does not include a paid or third-party analytics integration. If QevixAi later adds
        analytics, cookie, or advertising tools, this notice should be updated before launch.
      </p>

      <h2>Third-party processors</h2>
      <p>
        Hosting, form handling, email, CRM, analytics, or scheduling tools may process data
        if QevixAi configures them later. No paid third-party lead or analytics service is
        hard-coded in this build.
      </p>

      <h2>Retention</h2>
      <p>
        QevixAi should keep form submissions only as long as needed to respond to the
        enquiry, maintain business records, and meet legal or operational requirements.
      </p>

      <h2>Your choices</h2>
      <p>
        You can request access, correction, or deletion of information submitted through
        the site by using the <Link href="/contact">contact form</Link>.
      </p>
    </main>
  );
}
