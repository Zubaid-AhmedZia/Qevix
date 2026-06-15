import {
  Building2,
  CalendarCheck,
  HeartPulse,
  Home,
  Sparkles,
  Wrench
} from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger-group";
import { ButtonLink } from "@/components/ui/button";
import { industries } from "@/content/industries";

const icons = [HeartPulse, Wrench, Building2, Sparkles, CalendarCheck, Home];

export function IndustriesGrid() {
  return (
    <section className="section industries-section" id="industries">
      <div className="container">
        <Reveal>
          <p className="section-kicker">Industries</p>
          <h2 className="section-heading">
            Built for Businesses That Depend on Fast Responses
          </h2>
          <p className="section-lede">
            QevixAi adapts to your workflow: calls, leads, bookings, follow-ups, and handoffs.
          </p>
        </Reveal>

        <StaggerGroup className="industry-grid">
          {industries.map((industry, index) => {
            const Icon = icons[index] ?? Building2;
            return (
              <StaggerItem className="industry-card" key={industry.title}>
                <span className="icon-tile">
                  <Icon aria-hidden="true" size={21} />
                </span>
                <h3>{industry.title}</h3>
                <p>{industry.body}</p>
              </StaggerItem>
            );
          })}
        </StaggerGroup>

        <div className="button-row hero-actions">
          <ButtonLink
            href="/contact"
            eventName="contact_cta_click"
            eventProperties={{ source: "industries" }}
          >
            <CalendarCheck aria-hidden="true" size={18} />
            Not sure if it fits? Get Your Custom Automation Plan
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
