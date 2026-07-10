"use client";

import { useState, FormEvent } from "react";
import { Send } from "lucide-react";
import { org } from "@/content/org";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const subject = encodeURIComponent(`Message from ${name} — IFE Website`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:${org.email}?subject=${subject}&body=${body}`;
    setSent(true);
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
        className="inline-flex items-center gap-2 rounded-full bg-ife-red px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
      >
        <Send className="h-4 w-4" />
        Send Message
      </button>

      {sent && (
        <p className="text-sm font-medium text-ife-green-deep">
          Your email app should now be open with the message ready to send.
        </p>
      )}

      <p className="text-xs text-ife-grey">
        This opens your email app with the message pre-filled, just hit send
        from there.
      </p>
    </form>
  );
}
