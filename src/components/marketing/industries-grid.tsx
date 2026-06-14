import {
  Building2,
  CalendarCheck,
  HeartPulse,
  Home,
  Scale,
  Sparkles,
  Store,
  Wrench
} from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger-group";
import { ButtonLink } from "@/components/ui/button";
import { industries } from "@/content/industries";

const icons = [Sparkles, HeartPulse, Building2, Wrench, Home, Scale, Store, Building2];

export function IndustriesGrid() {
  return (
    <section className="section industries-section" id="industries">
      <div className="container">
        <Reveal>
          <p className="section-kicker">Industries</p>
          <h2 className="section-heading">
            Designed for businesses that care for people and cannot babysit every channel.
          </h2>
          <p className="section-lede">
            QevixAi is strongest where calls, enquiries, bookings, and follow-up repeat
            every day but still need a professional human-ready handoff.
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
