import { CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { pricingPlans } from "@/content/pricing";
import { cn } from "@/lib/utils/cn";

export function PricingGrid() {
  return (
    <section className="section section-muted" id="pricing">
      <div className="container">
        <p className="section-kicker">Pricing</p>
        <h2 className="section-heading">Pricing that matches how your business handles calls.</h2>
        <p className="section-lede">
          No invented public prices. Each plan routes to a quote form so the setup can match
          call volume, workflows, and locations.
        </p>

        <div className="card-grid pricing-grid">
          {pricingPlans.map((plan) => (
            <article className={cn("pricing-card", plan.featured && "featured")} key={plan.id}>
              <span className="section-kicker">{plan.fit}</span>
              <h3>{plan.name}</h3>
              <p>{plan.idealFor}</p>
              <div className="price">Custom quote</div>
              <ul className="pricing-list">
                {plan.capabilities.map((capability) => (
                  <li key={capability}>
                    <CheckCircle2 aria-hidden="true" size={18} className="positive" />
                    <span>{capability}</span>
                  </li>
                ))}
                <li>
                  <CheckCircle2 aria-hidden="true" size={18} className="positive" />
                  <span>{plan.support}</span>
                </li>
              </ul>
              <ButtonLink
                href={`/book-demo?plan=${plan.id}`}
                eventName="pricing_cta_click"
                eventProperties={{ plan: plan.id }}
              >
                Get quote
              </ButtonLink>
            </article>
          ))}
        </div>

        <p className="pricing-note">
          Custom quote based on call volume, workflows, and locations.
        </p>
      </div>
    </section>
  );
}
