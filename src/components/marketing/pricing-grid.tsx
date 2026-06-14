import { CheckCircle2, Sparkles } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger-group";
import { ButtonLink } from "@/components/ui/button";
import { pricingPlans } from "@/content/pricing";
import { cn } from "@/lib/utils/cn";

export function PricingGrid() {
  return (
    <section className="section pricing-section" id="pricing">
      <div className="container">
        <Reveal>
          <p className="section-kicker">Pricing</p>
          <h2 className="section-heading">
            Pricing that matches your workflows, channels, and locations.
          </h2>
          <p className="section-lede">
            QevixAi is scoped around call volume, automation layers, tool connections, and
            handoff complexity. Choose the shape that matches your growth stage, then use
            the demo to turn it into a specific scope.
          </p>
        </Reveal>

        <StaggerGroup className="pricing-grid">
          {pricingPlans.map((plan) => (
            <StaggerItem
              className={cn("pricing-card", plan.featured && "featured")}
              key={plan.id}
            >
              {plan.featured ? (
                <span className="featured-pill">
                  <Sparkles aria-hidden="true" size={14} />
                  Most flexible
                </span>
              ) : null}
              <span className="plan-fit">{plan.fit}</span>
              <h3>{plan.name}</h3>
              <div className="price">{plan.signal}</div>
              <p>{plan.idealFor}</p>
              <ul className="pricing-list">
                {plan.capabilities.map((capability) => (
                  <li key={capability}>
                    <CheckCircle2 aria-hidden="true" size={18} />
                    <span>{capability}</span>
                  </li>
                ))}
                <li>
                  <CheckCircle2 aria-hidden="true" size={18} />
                  <span>{plan.support}</span>
                </li>
              </ul>
              <ButtonLink
                href={`/book-demo?plan=${plan.id}`}
                eventName="pricing_cta_click"
                eventProperties={{ plan: plan.id }}
              >
                Scope this system
              </ButtonLink>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <div className="pricing-method">
          <div>
            <span className="section-kicker">How pricing works</span>
            <h3>Tell us the workflow. We scope the build, monthly management, and launch path.</h3>
          </div>
          <ul>
            <li>Fixed monthly scope after the workflow audit</li>
            <li>Clear proposal once channels, volume, and routing are mapped</li>
            <li>Clear ownership of what is being built and managed</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
