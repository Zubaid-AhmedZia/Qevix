"use client";

import { useFormStatus } from "react-dom";
import { buttonClassName } from "@/components/ui/button";

export function SubmitButton({
  children,
  pendingLabel
}: {
  children: string;
  pendingLabel: string;
}) {
  const { pending } = useFormStatus();

  return (
    <button className={buttonClassName("primary")} type="submit" disabled={pending}>
      {pending ? pendingLabel : children}
    </button>
  );
}
