import { CalendarCheck, Sparkles } from "lucide-react";
import { AnimatedCounter } from "@/components/motion/animated-counter";
import { Reveal } from "@/components/motion/reveal";
import { HeroAutomationScene } from "@/components/marketing/hero-automation-scene";
import { ButtonLink } from "@/components/ui/button";
import { heroContent, workflowOutcomes } from "@/content/site";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true" />
      <div className="container hero-grid">
        <Reveal className="hero-copy-block">
          <p className="eyebrow">
            <Sparkles aria-hidden="true" size={16} />
            {heroContent.eyebrow}
          </p>
          <h1>
            {heroContent.titlePrefix} <span>{heroContent.titleAccent}</span>
          </h1>
          <p className="hero-copy">{heroContent.body}</p>

          <ul className="microproof" aria-label="QevixAi proof points">
            {heroContent.proof.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="button-row hero-actions">
            <ButtonLink href="/book-demo" eventName="hero_cta_click">
              <CalendarCheck aria-hidden="true" size={18} />
              {heroContent.primaryCta}
            </ButtonLink>
            <ButtonLink href="/#demo" variant="secondary" eventName="demo_cta_click">
              {heroContent.secondaryCta}
            </ButtonLink>
          </div>
        </Reveal>

        <HeroAutomationScene />
      </div>

      <div className="container hero-metrics" aria-label="Operational outcomes">
        {workflowOutcomes.map((metric) => (
          <AnimatedCounter
            key={metric.label}
            value={metric.value}
            suffix={metric.suffix}
            label={metric.label}
          />
        ))}
      </div>
    </section>
  );
}
