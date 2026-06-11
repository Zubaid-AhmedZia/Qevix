import { CheckCircle2, Settings2 } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { controlFeatures } from "@/content/site";

export function ControlPanel() {
  return (
    <section className="section">
      <div className="container">
        <div className="control-grid">
          <div>
            <p className="section-kicker">Control and transparency</p>
            <h2 className="section-heading">
              You stay in control. QevixAi does the repetitive work.
            </h2>
            <p className="section-lede">
              Set business hours, define when calls are transferred, review conversation
              summaries, and refine what the AI should answer on its own.
            </p>

            <ul className="control-list">
              {controlFeatures.map((feature) => (
                <li key={feature}>
                  <CheckCircle2 aria-hidden="true" size={18} className="positive" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="button-row hero-actions">
              <ButtonLink
                href="/contact"
                variant="secondary"
                eventName="contact_cta_click"
              >
                Contact sales
              </ButtonLink>
            </div>
          </div>

          <div className="admin-panel" aria-label="QevixAi admin controls mockup">
            <div className="mock-toolbar">
              <span>Admin controls</span>
              <Settings2 aria-hidden="true" size={18} />
            </div>
            <div className="admin-panel-body">
              <div className="setting-row">
                <div>
                  <strong>After-hours coverage</strong>
                  <span>Route missed calls to QevixAi</span>
                </div>
                <span className="toggle" aria-hidden="true" />
              </div>
              <div className="setting-row">
                <div>
                  <strong>Escalation rules</strong>
                  <span>Transfer urgent calls to the right team</span>
                </div>
                <span className="toggle" aria-hidden="true" />
              </div>
              <div className="setting-row">
                <div>
                  <strong>Team notifications</strong>
                  <span>Send summaries after qualified calls</span>
                </div>
                <span className="toggle" aria-hidden="true" />
              </div>
              <div className="summary-card">
                <strong>Latest summary</strong>
                <p>
                  Caller requested a new appointment, preferred Friday afternoon, and
                  asked for parking instructions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
