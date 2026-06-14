import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger-group";
import { howItWorks } from "@/content/site";

export function HowItWorks() {
  return (
    <section className="section process-section" id="process">
      <div className="container">
        <Reveal>
          <p className="section-kicker">Process</p>
          <h2 className="section-heading">From messy customer journey to clean automation system.</h2>
          <p className="section-lede">
            The goal is not to add random AI features. It is to design a dependable path
            from first contact to booked appointment, routed lead, or informed follow-up.
          </p>
        </Reveal>

        <StaggerGroup className="process-grid">
          {howItWorks.map((step, index) => (
            <StaggerItem className="step-card" key={step.title}>
              <span className="step-number">{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <div className="button-row hero-actions">
          <ButtonLink href="/book-demo" eventName="demo_cta_click">
            Book a demo
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
