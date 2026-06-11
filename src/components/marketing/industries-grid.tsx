import { Building2, CalendarCheck } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { industries } from "@/content/industries";

export function IndustriesGrid() {
  return (
    <section className="section section-muted" id="industries">
      <div className="container">
        <p className="section-kicker">Industries</p>
        <h2 className="section-heading">Built for any business that runs on calls.</h2>
        <p className="section-lede">
          Specific workflows make the broad promise believable. QevixAi handles repeat
          caller patterns across service, appointment, intake, and routing teams.
        </p>

        <div className="card-grid eight">
          {industries.map((industry) => (
            <article className="industry-card" key={industry.title}>
              <span className="icon-tile">
                <Building2 aria-hidden="true" size={20} />
              </span>
              <h3>{industry.title}</h3>
              <p>{industry.body}</p>
            </article>
          ))}
        </div>

        <div className="button-row hero-actions">
          <ButtonLink
            href="/book-demo?source=industries"
            eventName="demo_cta_click"
            eventProperties={{ source: "industries" }}
          >
            <CalendarCheck aria-hidden="true" size={18} />
            Talk about your industry
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
