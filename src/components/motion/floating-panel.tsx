"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

export function FloatingPanel({
  children,
  className,
  delay = 0
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 22, scale: 0.98 }}
      animate={{ opacity: 1, y: [0, -8, 0], scale: 1 }}
      transition={{
        opacity: { duration: 0.55, delay },
        scale: { duration: 0.55, delay },
        y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay }
      }}
    >
      {children}
    </motion.div>
  );
}
