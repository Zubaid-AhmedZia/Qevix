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
            Your front desk, intake assistant, and routing layer in one calm voice.
          </h2>
          <p className="section-lede">
            QevixAi does not just answer calls. It listens for intent, captures the right
            details, follows your rules, and gives humans the context they need when a
            conversation deserves a person.
          </p>
          <div className="button-row hero-actions">
            <ButtonLink href="/contact" variant="secondary" eventName="contact_cta_click">
              Talk to sales
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
