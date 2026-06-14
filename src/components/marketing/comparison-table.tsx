import { CheckCircle2, MinusCircle, Sparkles } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger-group";
import { ButtonLink } from "@/components/ui/button";
import { comparisonRows } from "@/content/site";

export function ComparisonTable() {
  const featuredRows = comparisonRows.slice(0, 4);

  return (
    <section className="section comparison-section" aria-labelledby="comparison-heading">
      <div className="container">
        <Reveal>
          <p className="section-kicker">Why QevixAi wins</p>
          <h2 className="section-heading" id="comparison-heading">
            Stop comparing automation to voicemail and phone trees.
          </h2>
          <p className="section-lede">
            QevixAi is built around momentum. Every interaction should answer, qualify,
            book, route, or create the next follow-up without forcing your team into
            another spreadsheet.
          </p>
        </Reveal>

        <StaggerGroup className="comparison-card-grid">
          {featuredRows.map((row) => (
            <StaggerItem className="comparison-card" key={row.label}>
              <div className="comparison-card-top">
                <span className="icon-tile">
                  <Sparkles aria-hidden="true" size={20} />
                </span>
                <span>{row.label}</span>
              </div>
              <h3>{row.qevix}</h3>
              <div className="comparison-card-split">
                <div>
                  <span className="comparison-label positive">
                    <CheckCircle2 aria-hidden="true" size={16} />
                    QevixAi
                  </span>
                  <p>Responds with rules, context, routing, and a visible next step.</p>
                </div>
                <div>
                  <span className="comparison-label negative">
                    <MinusCircle aria-hidden="true" size={16} />
                    Old way
                  </span>
                  <p>{row.voicemail}. {row.ivr}. {row.admin}.</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <div className="button-row hero-actions">
          <ButtonLink href="/#pricing" variant="secondary" eventName="pricing_cta_click">
            See pricing
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
