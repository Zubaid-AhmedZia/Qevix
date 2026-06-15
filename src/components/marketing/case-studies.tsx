import { TrendingUp } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger-group";
import { caseStudies } from "@/content/site";

export function CaseStudies() {
  return (
    <section className="section case-study-section" aria-labelledby="case-study-heading">
      <div className="container">
        <Reveal>
          <p className="section-kicker">Real results</p>
          <h2 className="section-heading" id="case-study-heading">
            Real Workflows. Real Results.
          </h2>
          <p className="section-lede">
            QevixAi helps businesses respond faster, reduce manual work, and book more
            opportunities.
          </p>
        </Reveal>

        <StaggerGroup className="case-study-grid">
          {caseStudies.map((study) => (
            <StaggerItem className="case-study-card" key={study.industry}>
              <div className="case-study-top">
                <span className="icon-tile">
                  <TrendingUp aria-hidden="true" size={21} />
                </span>
                <span>{study.industry}</span>
              </div>
              <div className="case-metric-list">
                {study.metrics.map((metric) => (
                  <div className="case-metric" key={metric.label}>
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                  </div>
                ))}
              </div>
              <p>{study.body}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
