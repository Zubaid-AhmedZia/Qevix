import { CalendarCheck, CheckCircle2, Clock3, PlayCircle } from "lucide-react";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";
import { heroContent } from "@/content/site";

export function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <p className="eyebrow">
            <Clock3 aria-hidden="true" size={16} />
            {heroContent.eyebrow}
          </p>
          <h1>{heroContent.title}</h1>
          <p className="hero-copy">{heroContent.body}</p>

          <ul className="microproof" aria-label="Product proof points">
            {heroContent.proof.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="button-row hero-actions">
            <ButtonLink href="/book-demo" eventName="hero_cta_click">
              <CalendarCheck aria-hidden="true" size={18} />
              Book a demo
            </ButtonLink>
            <ButtonLink
              href="/#demo"
              variant="secondary"
              eventName="demo_cta_click"
            >
              <PlayCircle aria-hidden="true" size={18} />
              Watch a sample call
            </ButtonLink>
          </div>
        </div>

        <div className="product-frame" aria-label="QevixAi call handling mockup">
          <div className="mock-toolbar">
            <span>Live call workspace</span>
            <span className="mock-status">
              <span className="status-dot" />
              Handling call
            </span>
          </div>
          <div className="mock-body">
            <div className="transcript-card">
              <div className="transcript-line">
                <span>Caller</span>
                <p>I need to book a consultation and ask if you are open after work.</p>
              </div>
              <div className="transcript-line">
                <span>QevixAi</span>
                <p>
                  I can help with both. I will check the next available times and collect
                  the details the team needs before confirming.
                </p>
              </div>
            </div>

            <div className="booking-card">
              <strong>Booking confirmed</strong>
              <p>Thursday at 5:30 PM with location notes and caller details attached.</p>
            </div>

            <div className="summary-card">
              <strong>Call summary</strong>
              <p>
                New lead qualified, appointment booked, after-hours preference captured,
                team notified.
              </p>
            </div>

            <div className="chip-row">
              <span className="chip">
                <CheckCircle2 aria-hidden="true" size={15} />
                Lead captured
              </span>
              <span className="chip">
                <CheckCircle2 aria-hidden="true" size={15} />
                Warm handoff ready
              </span>
            </div>

            <div className="snapshot-wrap">
              <Image
                src="/product-snapshot.svg"
                alt="QevixAi product interface with live transcript, booking confirmation, and call summary"
                width={960}
                height={620}
                sizes="(min-width: 760px) 42vw, 100vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
