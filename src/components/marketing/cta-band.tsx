import { ButtonLink } from "@/components/ui/button";

export function CTABand() {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-band">
          <h2>Ready to stop losing calls and start capturing more opportunities?</h2>
          <p>
            Book a demo and we will show you how QevixAi would answer calls for your
            business, route real scenarios, and fit into your current process.
          </p>
          <div className="button-row">
            <ButtonLink href="/book-demo" eventName="demo_cta_click">
              Book a demo
            </ButtonLink>
            <ButtonLink
              href="/contact"
              variant="secondary"
              eventName="contact_cta_click"
            >
              Contact sales
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
