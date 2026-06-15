"use client";

import Image from "next/image";
import { useState } from "react";
import {
  CalendarCheck,
  MessageSquareText,
  PhoneCall,
  Workflow
} from "lucide-react";

const flowItems = [
  {
    label: "Call answered",
    icon: PhoneCall
  },
  {
    label: "Follow-up sent",
    icon: MessageSquareText
  },
  {
    label: "Booking routed",
    icon: CalendarCheck
  },
  {
    label: "CRM updated",
    icon: Workflow
  }
];

export function HeroAutomationScene() {
  const [active, setActive] = useState(false);

  const stageClasses = active ? "hero-visual hero-stage is-active" : "hero-visual hero-stage";

  return (
    <div
      className={stageClasses}
      aria-label="QevixAi automation system visual"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
    >
      <div className="hero-visual-inner">
        <div className="hero-logo-node" tabIndex={0}>
          <div className="hero-logo-system" aria-hidden="true">
            <Image
              src="/qevix_logo_exact_high_quality_4x-Photoroom.png"
              alt=""
              width={2400}
              height={2400}
              // sizes="(min-width: 1040px) 320px, 210px"
              priority
            />
          </div>
        </div>

        <div className="hero-hover-stack" aria-hidden={!active}>
          {flowItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                className="hero-hover-card"
                key={item.label}
              >
                <span className="icon-bubble">
                  <Icon aria-hidden="true" size={21} />
                </span>
                <div>
                  <strong>{item.label}</strong>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
