import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";

export function CTABand() {
  return (
    <section className="section final-section">
      <div className="container">
        <Reveal className="cta-band">
          <p className="section-kicker">Ready when you are</p>
          <h2>Build the system that answers, follows up, books, and routes for you.</h2>
          <p>
            Bring one real call flow to the demo. QevixAi will show how the voice agent,
            message follow-up, CRM routing, and booking logic can work together for your
            business.
          </p>
          <div className="button-row">
            <ButtonLink href="/book-demo" eventName="demo_cta_click">
              Book a demo
            </ButtonLink>
            <ButtonLink href="/contact" variant="secondary" eventName="contact_cta_click">
              Contact sales
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
