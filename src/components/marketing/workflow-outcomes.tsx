import { CheckCircle2, Sparkles } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

const outcomes = [
  "New enquiries are captured fast.",
  "Follow-up happens automatically.",
  "Humans get cleaner context.",
  "Owners see where leads get stuck."
];

export function WorkflowOutcomes() {
  return (
    <section className="section outcome-section">
      <div className="container outcome-panel">
        <Reveal>
          <p className="section-kicker">Workflow outcomes</p>
          <h2 className="section-heading">
            Less Chasing. Cleaner Handoffs. More Booked Opportunities.
          </h2>
        </Reveal>
        <div className="outcome-list">
          {outcomes.map((item) => (
            <div className="outcome-item" key={item}>
              <CheckCircle2 aria-hidden="true" size={20} />
              <span>{item}</span>
            </div>
          ))}
        </div>
        <div className="outcome-orbit" aria-hidden="true">
          <Sparkles size={58} />
        </div>
      </div>
    </section>
  );
}
