"use client";

import { useState, type FormEvent } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialFormData: FormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function updateField(field: keyof FormData, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (status === "error" || status === "success") {
      setStatus("idle");
      setErrorMessage("");
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = (await response.json()) as { error?: string; message?: string };

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setStatus("success");
      setFormData(initialFormData);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong. Please try again."
      );
    }
  }

  const inputClassName =
    "mt-2 w-full rounded-lg border border-[var(--game-border)] bg-[var(--game-bg)]/60 px-4 py-3 text-[var(--apple-gray-100)] placeholder:text-[var(--apple-gray-400)] outline-none transition focus:border-[var(--game-cyan)] focus:ring-1 focus:ring-[var(--game-cyan)]";

  return (
    <form
      onSubmit={handleSubmit}
      className="game-hud rounded-lg p-6 md:p-8"
      noValidate
    >
      <p className="font-game text-[10px] tracking-[0.2em] text-[var(--game-gold)] uppercase">
        Send a message
      </p>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <label className="block text-sm text-[var(--apple-gray-300)]">
          Name
          <input
            name="name"
            type="text"
            required
            maxLength={100}
            autoComplete="name"
            value={formData.name}
            onChange={(e) => updateField("name", e.target.value)}
            placeholder="Your name"
            className={inputClassName}
            aria-required="true"
          />
        </label>

        <label className="block text-sm text-[var(--apple-gray-300)]">
          Email
          <input
            name="email"
            type="email"
            required
            maxLength={200}
            autoComplete="email"
            value={formData.email}
            onChange={(e) => updateField("email", e.target.value)}
            placeholder="your.email@example.com"
            className={inputClassName}
            aria-required="true"
          />
        </label>
      </div>

      <label className="mt-5 block text-sm text-[var(--apple-gray-300)]">
        Subject
        <input
          name="subject"
          type="text"
          required
          maxLength={200}
          value={formData.subject}
          onChange={(e) => updateField("subject", e.target.value)}
          placeholder="What's this about?"
          className={inputClassName}
          aria-required="true"
        />
      </label>

      <label className="mt-5 block text-sm text-[var(--apple-gray-300)]">
        Message
        <textarea
          name="message"
          required
          maxLength={5000}
          rows={6}
          value={formData.message}
          onChange={(e) => updateField("message", e.target.value)}
          placeholder="Tell me about your project or opportunity..."
          className={`${inputClassName} resize-y`}
          aria-required="true"
        />
      </label>

      {status === "success" && (
        <p
          role="status"
          className="mt-5 rounded-lg border border-[var(--game-green)]/40 bg-[var(--game-green)]/10 px-4 py-3 text-sm text-[var(--game-green)]"
        >
          Message sent. I&apos;ll get back to you soon.
        </p>
      )}

      {status === "error" && (
        <p
          role="alert"
          className="mt-5 rounded-lg border border-red-400/40 bg-red-500/10 px-4 py-3 text-sm text-red-300"
        >
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 inline-flex items-center justify-center rounded-lg bg-[var(--game-cyan)] px-6 py-3 text-sm font-semibold text-[var(--game-bg)] transition hover:bg-[var(--game-green)] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Send Message →"}
      </button>
    </form>
  );
}
