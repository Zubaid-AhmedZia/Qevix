import { AnimatedTicker } from "@/components/motion/animated-ticker";
import { Reveal } from "@/components/motion/reveal";
import { tickerItems } from "@/content/site";

export function CredibilityStrip() {
  return (
    <section className="ticker-section" aria-label="Automation capabilities">
      <Reveal className="container ticker-intro">
        <p className="section-kicker">Built like a growth system</p>
        <h2>Voice, follow-up, booking, CRM, and reporting working together.</h2>
      </Reveal>
      <AnimatedTicker items={tickerItems} />
    </section>
  );
}
