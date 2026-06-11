"use client";

import { useEffect, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";

export function AnimatedCounter({
  value,
  suffix = "",
  label
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();
  const [current, setCurrent] = useState(reduceMotion ? value : 0);

  useEffect(() => {
    if (!inView || reduceMotion) {
      if (reduceMotion) setCurrent(value);
      return;
    }

    const duration = 900;
    const start = performance.now();
    let frame = 0;

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduceMotion, value]);

  return (
    <div className="metric-card">
      <span className="metric-value" ref={ref}>
        {current}
        {suffix}
      </span>
      <span className="metric-label">{label}</span>
    </div>
  );
}
