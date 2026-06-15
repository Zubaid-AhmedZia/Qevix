import { Bot, Headphones, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger-group";
import { ButtonLink } from "@/components/ui/button";
import { voiceAgentFeatures } from "@/content/site";

const icons = [Headphones, ShieldCheck, Bot];

export function CapabilityGrid() {
  return (
    <section className="section voice-section" id="voice-agents">
      <div className="container voice-layout">
        <Reveal>
          <p className="section-kicker">AI voice agents</p>
          <h2 className="section-heading">
            Answer Leads Instantly, Even When Your Team Is Busy
          </h2>
          <p className="section-lede">
            QevixAi captures intent, books next steps, and routes the right conversations
            to a human.
          </p>
          <div className="button-row hero-actions">
            <ButtonLink href="/contact" variant="secondary" eventName="contact_cta_click">
              Get Your Custom Automation Plan
            </ButtonLink>
          </div>
        </Reveal>

        <StaggerGroup className="voice-card-stack">
          {voiceAgentFeatures.map((feature, index) => {
            const Icon = icons[index];
            return (
              <StaggerItem className="voice-card" key={feature.title}>
                <span className="icon-tile">
                  <Icon aria-hidden="true" size={22} />
                </span>
                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.body}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
