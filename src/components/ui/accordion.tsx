import type { ReactNode } from "react";

export function AccordionItem({
  question,
  children
}: {
  question: string;
  children: ReactNode;
}) {
  return (
    <details className="faq-item">
      <summary>{question}</summary>
      <div className="faq-answer">{children}</div>
    </details>
  );
}
