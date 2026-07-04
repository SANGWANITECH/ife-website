import type { Metadata } from "next";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/ui/ContactForm";
import { org } from "@/content/org";

export const metadata: Metadata = {
  title: "Contact Us — Immunization for Everyone",
  description: "Get in touch with Immunization for Everyone.",
};

export default function ContactPage() {
  const whatsappHref = `https://wa.me/${org.whatsapp.replace(/[^0-9]/g, "")}`;

  return (
    <main className="flex-1">
      {/* Page header */}
      <section className="border-b border-black/5 bg-ife-paper py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center sm:px-8 lg:px-12">
          <span className="text-xs font-semibold uppercase tracking-wide text-ife-green">
            Contact Us
          </span>
          <h1 className="mt-3 font-display text-3xl font-bold text-ife-green-deep sm:text-4xl">
            Get in Touch
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ife-grey">
            Have a question, want to volunteer, or interested in partnering
            with us? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Details + Form */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:px-12">
          {/* Contact details */}
          <div>
            <h2 className="font-display text-xl font-semibold text-ife-ink">
              Contact Details
            </h2>

            <ul className="mt-6 space-y-5">
              <li className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ife-green-deep/10 text-ife-green-deep">
                  <Mail className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-medium text-ife-ink">Email</p>
                  <a
                    href={`mailto:${org.email}`}
                    className="text-sm text-ife-grey hover:text-ife-green-deep"
                  >
                    {org.email}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ife-green-deep/10 text-ife-green-deep">
                  <Phone className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-medium text-ife-ink">Phone</p>
                  <div className="flex flex-col">
                    {org.phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone}`}
                        className="text-sm text-ife-grey hover:text-ife-green-deep"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ife-green-deep/10 text-ife-green-deep">
                  <MapPin className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-medium text-ife-ink">Location</p>
                  <p className="text-sm text-ife-grey">{org.address}</p>
                </div>
              </li>
            </ul>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-ife-red px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              <MessageCircle className="h-4 w-4" />
              Message us on WhatsApp
            </a>
          </div>

             
          {/* Contact form */}
          <div>
            <h2 className="font-display text-xl font-semibold text-ife-ink">
              Send a Message
            </h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}