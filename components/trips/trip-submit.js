"use client";
import { useFormStatus } from "react-dom";

export default function TripSubmit() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending}>
      {pending ? "Submitting..." : "Share Trip"}{" "}
    </button>
  );
}
