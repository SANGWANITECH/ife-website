"use client";

import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Send } from "lucide-react";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("Missing EmailJS environment variables");
      setStatus("error");
      return;
    }

    try {
      await emailjs.sendForm(serviceId, templateId, e.currentTarget, publicKey);
      setStatus("success");
      e.currentTarget.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="text-sm font-medium text-ife-ink">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-1.5 w-full rounded-lg border border-black/10 bg-white px-4 py-2.5 text-sm text-ife-ink outline-none focus:border-ife-green-deep"
        />
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium text-ife-ink">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1.5 w-full rounded-lg border border-black/10 bg-white px-4 py-2.5 text-sm text-ife-ink outline-none focus:border-ife-green-deep"
        />
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-ife-ink">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-1.5 w-full resize-none rounded-lg border border-black/10 bg-white px-4 py-2.5 text-sm text-ife-ink outline-none focus:border-ife-green-deep"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center gap-2 rounded-full bg-ife-red px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        <Send className="h-4 w-4" />
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p className="text-sm font-medium text-ife-green-deep">
          Message sent  we&apos;ll get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm font-medium text-ife-red">
          Something went wrong. Please try again or reach us on WhatsApp.
        </p>
      )}
    </form>
  );
}