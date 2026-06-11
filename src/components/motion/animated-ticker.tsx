"use client";

import { motion, useReducedMotion } from "motion/react";

export function AnimatedTicker({ items }: { items: string[] }) {
  const reduceMotion = useReducedMotion();
  const tickerItems = [...items, ...items];

  return (
    <div className="ticker-shell" aria-label="Automation capabilities">
      <motion.div
        className="ticker-track"
        animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
        transition={
          reduceMotion
            ? undefined
            : { duration: 28, ease: "linear", repeat: Infinity }
        }
      >
        {tickerItems.map((item, index) => (
          <span className="ticker-pill" key={`${item}-${index}`}>
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
