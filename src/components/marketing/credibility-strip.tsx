import { Badge } from "@/components/ui/badge";
import { credibility } from "@/content/site";

export function CredibilityStrip() {
  return (
    <section className="credibility" aria-label="QevixAi capabilities and industries">
      <div className="container credibility-inner">
        <p className="credibility-copy">{credibility.text}</p>
        <div className="chip-row" aria-label="QevixAi capabilities">
          {credibility.chips.map((chip) => (
            <Badge key={chip}>{chip}</Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
