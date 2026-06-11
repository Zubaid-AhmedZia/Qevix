import { CalendarDays, PhoneCall, Route, UserCheck } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { capabilities } from "@/content/site";

const icons = [PhoneCall, UserCheck, CalendarDays, Route];

export function CapabilityGrid() {
  return (
    <section className="section section-muted" id="product">
      <div className="container">
        <p className="section-kicker">Product</p>
        <h2 className="section-heading">One AI receptionist. Four jobs done well.</h2>
        <p className="section-lede">
          Focus the product around practical call outcomes: answer, qualify, book, and
          hand off with context when a person is needed.
        </p>

        <div className="card-grid four">
          {capabilities.map((capability, index) => {
            const Icon = icons[index];
            return (
              <article className="capability-card" key={capability.title}>
                <span className="icon-tile">
                  <Icon aria-hidden="true" size={21} />
                </span>
                <h3>{capability.title}</h3>
                <p>{capability.body}</p>
              </article>
            );
          })}
        </div>

        <div className="button-row hero-actions">
          <ButtonLink
            href="/contact"
            variant="secondary"
            eventName="contact_cta_click"
          >
            Talk to sales
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
