"use client";

import { useFormStatus } from "react-dom";
import { buttonClassName } from "@/components/ui/button";

export function SubmitButton({
  children,
  pending,
  pendingLabel
}: {
  children: string;
  pending?: boolean;
  pendingLabel: string;
}) {
  const formStatus = useFormStatus();
  const isPending = pending ?? formStatus.pending;

  return (
    <button className={buttonClassName("primary")} type="submit" disabled={isPending}>
      {isPending ? pendingLabel : children}
    </button>
  );
}
