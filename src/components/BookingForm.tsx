"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function BookingForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div
        className="fade-in in"
        style={{
          background: "#fff",
          borderRadius: "22px",
          padding: "32px",
          textAlign: "center",
        }}
      >
        <div
          className="knob"
          style={{
            width: "64px",
            height: "64px",
            margin: "0 auto 20px",
            fontFamily: "var(--font-archivo-black), sans-serif",
            fontSize: "20px",
          }}
        >
          ✓
        </div>
        <p
          style={{
            fontFamily: "var(--font-archivo), sans-serif",
            fontWeight: 800,
            fontSize: "22px",
            textTransform: "uppercase",
            color: "var(--ink)",
            marginBottom: "8px",
          }}
        >
          Request received.
        </p>
        <p style={{ fontSize: "14px", color: "var(--ink-soft)" }}>
          Thanks for reaching out — Dequan&apos;s team will follow up shortly.
        </p>
      </div>
    );
  }

  return (
    <form className="fade-in" onSubmit={handleSubmit}>
      <div className="form-row">
        <div>
          <label htmlFor="name">Your Name</label>
          <input id="name" name="name" type="text" required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required />
        </div>
      </div>
      <div className="form-row">
        <div>
          <label htmlFor="company">Production / Company</label>
          <input id="company" name="company" type="text" />
        </div>
        <div>
          <label htmlFor="dates">Project Dates</label>
          <input id="dates" name="dates" type="text" />
        </div>
      </div>
      <div>
        <label htmlFor="projectType">Project Type</label>
        <input
          id="projectType"
          name="projectType"
          type="text"
          placeholder="Film, TV, Digital, Commercial, Event..."
        />
      </div>
      <div>
        <label htmlFor="details">Details</label>
        <textarea
          id="details"
          name="details"
          rows={5}
          placeholder="Tell us about the role, timeline, and budget range."
          required
        />
      </div>
      {status === "error" && <p className="form-error">{errorMessage}</p>}
      <button type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send Booking Request"}
      </button>
    </form>
  );
}
