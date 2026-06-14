import { CheckCircle2, Sparkles } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

const outcomes = [
  "New enquiries are captured before they cool off.",
  "Follow-up happens from rules, not memory.",
  "Humans receive cleaner context when they need to step in.",
  "Owners can see where calls, leads, and bookings are getting stuck."
];

export function WorkflowOutcomes() {
  return (
    <section className="section outcome-section">
      <div className="container outcome-panel">
        <Reveal>
          <p className="section-kicker">Workflow outcomes</p>
          <h2 className="section-heading">
            Proof starts with the operating outcomes your system can create.
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
