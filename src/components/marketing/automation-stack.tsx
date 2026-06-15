import {
  BarChart3,
  CalendarDays,
  Globe2,
  MessagesSquare,
  PhoneCall,
  Workflow
} from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger-group";
import { automationServices } from "@/content/site";

const icons = [PhoneCall, MessagesSquare, Workflow, CalendarDays, Globe2, BarChart3];

export function AutomationStack() {
  return (
    <section className="section stack-section" id="automation-stack">
      <div className="container">
        <Reveal>
          <p className="section-kicker">Automation stack</p>
          <h2 className="section-heading">
            Stop Chasing Leads Manually
          </h2>
          <p className="section-lede">
            QevixAi turns calls, forms, follow-ups, bookings, and summaries into one
            responsive workflow.
          </p>
        </Reveal>

        <StaggerGroup className="service-grid">
          {automationServices.map((service, index) => {
            const Icon = icons[index];
            return (
              <StaggerItem className="service-card" key={service.title}>
                <div className="service-top">
                  <span className="icon-tile">
                    <Icon aria-hidden="true" size={22} />
                  </span>
                  <span>{service.eyebrow}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.body}</p>
                <ul>
                  {service.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
