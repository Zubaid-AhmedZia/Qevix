import { CheckCircle2, SlidersHorizontal } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { controlFeatures } from "@/content/site";

export function ControlPanel() {
  return (
    <section className="section control-section">
      <div className="container control-grid">
        <Reveal>
          <p className="section-kicker">Control and transparency</p>
          <h2 className="section-heading">
            Automation should feel powerful, not mysterious.
          </h2>
          <p className="section-lede">
            You decide what the system can answer, where leads go, when humans step in,
            and how follow-up should continue after the first conversation.
          </p>

          <ul className="control-list">
            {controlFeatures.map((feature) => (
              <li key={feature}>
                <CheckCircle2 aria-hidden="true" size={18} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="button-row hero-actions">
            <ButtonLink href="/contact" variant="secondary" eventName="contact_cta_click">
              Contact sales
            </ButtonLink>
          </div>
        </Reveal>

        <div className="admin-panel" aria-label="QevixAi automation control mockup">
          <div className="mock-toolbar">
            <span>Automation command center</span>
            <SlidersHorizontal aria-hidden="true" size={18} />
          </div>
          <div className="admin-panel-body">
            <div className="setting-row">
              <div>
                <strong>Voice agent scope</strong>
                <span>Answer bookings, FAQs, and lead intake</span>
              </div>
              <span className="toggle" aria-hidden="true" />
            </div>
            <div className="setting-row">
              <div>
                <strong>Follow-up sequence</strong>
                <span>Send missed-call text and booking reminder</span>
              </div>
              <span className="toggle" aria-hidden="true" />
            </div>
            <div className="setting-row">
              <div>
                <strong>CRM routing</strong>
                <span>Move qualified leads to review queue</span>
              </div>
              <span className="toggle" aria-hidden="true" />
            </div>
            <div className="summary-card">
              <strong>Latest workflow insight</strong>
              <p>
                Most after-hours callers ask for availability first. Add that answer to the
                opening flow and route urgent calls faster.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
