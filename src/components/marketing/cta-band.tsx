import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";

export function CTABand() {
  return (
    <section className="section final-section">
      <div className="container">
        <Reveal className="cta-band">
          <p className="section-kicker">Ready when you are</p>
          <h2>Ready to Turn More Enquiries Into Booked Appointments?</h2>
          <p>
            Book a free AI audit and we will show you where your business is losing leads,
            time, or appointments.
          </p>
          <div className="button-row">
            <ButtonLink href="/book-demo" eventName="demo_cta_click">
              Book a Free AI Audit
            </ButtonLink>
            <ButtonLink href="/#demo" variant="secondary" eventName="demo_cta_click">
              See a Live Demo
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
