import { MessageCircle, HandHeart, Handshake } from "lucide-react";
import { org } from "@/content/org";

export function GetInvolvedCta() {
  const whatsappHref = `https://wa.me/${org.whatsapp.replace(/[^0-9]/g, "")}`;

  const paths = [
    {
      icon: HandHeart,
      title: "Volunteer",
      description:
        "Join our outreach and education efforts in communities across Malawi.",
      cta: "Message us on WhatsApp",
    },
    {
      icon: MessageCircle,
      title: "Donate",
      description:
        "Support programme costs, materials, and community outreach initiatives.",
      cta: "Get donation details",
    },
    {
      icon: Handshake,
      title: "Partner With Us",
      description:
        "Organizations, institutions, and agencies working toward the same goal.",
      cta: "Start a conversation",
    },
  ];

  return (
    <section className="bg-ife-paper py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wide text-ife-green">
            Get Involved
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-ife-ink sm:text-4xl">
            Every dose needs a hand behind it
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ife-grey">
            Whether it&apos;s your time, your resources, or your organization,
           there&apos;s a place for you in this work.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {paths.map((path) => (
            <a
              key={path.title}
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center rounded-2xl border border-black/5 bg-white p-8 text-center transition-shadow hover:shadow-md"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ife-red/10 text-ife-red">
                <path.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-ife-ink">
                {path.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ife-grey">
                {path.description}
              </p>
              <span className="mt-4 text-sm font-semibold text-ife-red">
                {path.cta}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}