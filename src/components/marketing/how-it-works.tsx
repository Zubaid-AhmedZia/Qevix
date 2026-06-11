import { ButtonLink } from "@/components/ui/button";
import { howItWorks } from "@/content/site";

export function HowItWorks() {
  return (
    <section className="section" id="how-it-works">
      <div className="container">
        <p className="section-kicker">How it works</p>
        <h2 className="section-heading">Go live in a few simple steps.</h2>
        <p className="section-lede">
          A product-focused setup path: connect the call flow, add business rules, test
          real scenarios, and refine from call insights.
        </p>

        <div className="card-grid four steps-grid">
          {howItWorks.map((step, index) => (
            <article className="step-card" key={step.title}>
              <span className="step-number">{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>

        <div className="button-row hero-actions">
          <ButtonLink href="/book-demo" eventName="demo_cta_click">
            Book a demo
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
