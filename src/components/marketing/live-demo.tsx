"use client";

import { useState } from "react";
import { CalendarCheck, MessageSquareText, PlayCircle, Workflow } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { demoTranscripts } from "@/content/demo-transcripts";

export function LiveDemo() {
  const [activeId, setActiveId] = useState(demoTranscripts[0].id);
  const active = demoTranscripts.find((demo) => demo.id === activeId) ?? demoTranscripts[0];

  return (
    <section className="section demo-section" id="demo">
      <div className="container">
        <Reveal>
          <p className="section-kicker">Live automation</p>
          <h2 className="section-heading">See QevixAi Handle a Lead in Real Time</h2>
          <p className="section-lede">
            From first enquiry to booked appointment, QevixAi keeps the conversation moving.
          </p>
        </Reveal>

        <div className="demo-shell">
          <div className="tab-list" role="tablist" aria-label="Automation examples">
            {demoTranscripts.map((demo) => (
              <button
                className="tab-button"
                id={`${demo.id}-tab`}
                type="button"
                role="tab"
                aria-selected={demo.id === active.id}
                aria-controls={`${demo.id}-panel`}
                key={demo.id}
                onClick={() => setActiveId(demo.id)}
              >
                {demo.label}
              </button>
            ))}
          </div>

          <div
            className="demo-panel"
            id={`${active.id}-panel`}
            role="tabpanel"
            aria-labelledby={`${active.id}-tab`}
          >
            <div className="demo-conversation">
              <div className="bubble caller">
                <span>Caller</span>
                <p>{active.caller}</p>
              </div>
              <div className="bubble ai">
                <span>QevixAi</span>
                <p>{active.ai}</p>
              </div>
            </div>

            <div className="details-grid">
              {active.details.map((detail) => (
                <div className="detail-item" key={detail.label}>
                  <span>{detail.label}</span>
                  <strong>{detail.value}</strong>
                </div>
              ))}
            </div>

            <div className="final-action">
              <Workflow aria-hidden="true" size={22} />
              <div>
                <strong>Final action</strong>
                <p>{active.finalAction}</p>
              </div>
            </div>
          </div>

          <div className="button-row">
            <ButtonLink href="/#demo" variant="secondary" eventName="demo_cta_click">
              <PlayCircle aria-hidden="true" size={18} />
              See a Live Demo
            </ButtonLink>
            <ButtonLink href="/book-demo" eventName="demo_cta_click">
              <CalendarCheck aria-hidden="true" size={18} />
              Book a Free AI Audit
            </ButtonLink>
            <span className="chip">
              <MessageSquareText aria-hidden="true" size={15} />
              Follow-up path included
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
