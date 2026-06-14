import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms",
  description: "QevixAi website terms of use."
};

export default function TermsPage() {
  return (
    <main className="container legal-content">
      <p className="section-kicker">Terms</p>
      <h1>Terms of use</h1>
      <p>Last updated: June 12, 2026</p>
      <p>
        These terms govern use of the QevixAi marketing website and any enquiries
        submitted through the site.
      </p>

      <h2>Acceptable use</h2>
      <p>
        You may use this website to learn about QevixAi and submit legitimate business
        enquiries. You may not misuse the forms, attempt to disrupt the service, scrape the
        site at unreasonable volume, or submit unlawful, harmful, or misleading content.
      </p>

      <h2>Intellectual property</h2>
      <p>
        The QevixAi name, site copy, product positioning, layout, and interface concepts are
        owned by QevixAi or its licensors. You may not copy, resell, or present them as your
        own without permission.
      </p>

      <h2>Product information</h2>
      <p>
        Website content is provided for general information and may change as the product,
        pricing, workflows, and supported features evolve. Demo discussions and written
        agreements control any specific commercial commitment.
      </p>

      <h2>Disclaimers</h2>
      <p>
        The website is provided as-is and as available. QevixAi does not guarantee that the
        site will be uninterrupted, error-free, or suitable for every business workflow.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, QevixAi is not liable for indirect,
        incidental, special, consequential, or punitive damages arising from use of this
        website.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws that apply to QevixAi's operating
        jurisdiction and any written agreement between QevixAi and the customer.
      </p>

      <h2>Changes</h2>
      <p>
        QevixAi may update these terms as the website, product, or legal requirements
        change. Questions can be submitted through the <Link href="/contact">contact form</Link>.
      </p>
    </main>
  );
}
