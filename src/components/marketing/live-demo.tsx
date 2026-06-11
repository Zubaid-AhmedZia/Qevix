"use client";

import { useState } from "react";
import { CalendarCheck, MessageSquareText } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { demoTranscripts } from "@/content/demo-transcripts";

export function LiveDemo() {
  const [activeId, setActiveId] = useState(demoTranscripts[0].id);
  const active = demoTranscripts.find((demo) => demo.id === activeId) ?? demoTranscripts[0];

  return (
    <section className="section" id="demo">
      <div className="container">
        <p className="section-kicker">Live demo</p>
        <h2 className="section-heading">See how QevixAi handles a real call.</h2>
        <p className="section-lede">
          Transcript-only examples show the day-one product behavior without relying on
          autoplaying audio or fragile JavaScript-only content.
        </p>

        <div className="demo-shell">
          <div className="tab-list" role="tablist" aria-label="Call examples">
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
            <div className="demo-columns">
              <div className="transcript-card">
                <div className="transcript-line">
                  <span>Caller</span>
                  <p>{active.caller}</p>
                </div>
                <div className="transcript-line">
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
            </div>

            <div className="booking-card">
              <strong>Final action</strong>
              <p>{active.finalAction}</p>
            </div>
          </div>

          <div className="button-row">
            <ButtonLink href="/book-demo" eventName="demo_cta_click">
              <CalendarCheck aria-hidden="true" size={18} />
              Book a demo
            </ButtonLink>
            <span className="chip">
              <MessageSquareText aria-hidden="true" size={15} />
              Transcript-only, no autoplay
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
