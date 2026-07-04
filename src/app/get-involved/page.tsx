import type { Metadata } from "next";
import { MessageCircle, HandHeart, Handshake, Wallet, IdCard } from "lucide-react";
import { org } from "@/content/org";

export const metadata: Metadata = {
  title: "Get Involved — Immunization for Everyone",
  description:
    "Volunteer, donate, partner, or become a member of Immunization for Everyone.",
};

export default function GetInvolvedPage() {
  const whatsappHref = `https://wa.me/${org.whatsapp.replace(/[^0-9]/g, "")}`;

  const paths = [
    {
      icon: HandHeart,
      title: "Volunteer",
      description:
        "Join our outreach and education efforts in communities across Malawi. We welcome volunteers for community sensitization, school health talks, event support, and content creation  no medical background required for most roles.",
      cta: "Message us to volunteer",
    },
    {
      icon: Wallet,
      title: "Donate",
      description:
        "We rely on donations to fund programme materials, outreach activities, and community education. We don't yet have online payment set up — message us directly and we'll share the best way to contribute.",
      cta: "Get donation details",
    },
    {
      icon: Handshake,
      title: "Partner With Us",
      description:
        "Organizations, institutions, and agencies working toward immunization equity, public health, or community development  we're open to partnerships that expand our reach and impact.",
      cta: "Start a conversation",
    },
    {
      icon: IdCard,
      title: "Become a Member",
      description:
        "Membership is open to individuals, organizations, and institutions supporting IFE's mission. Regular membership is MWK 5,000 annually, giving you voting rights at general meetings and the ability to nominate board members.",
      cta: "Ask about membership",
    },
  ];

  return (
    <main className="flex-1">
      {/* Page header */}
      <section className="border-b border-black/5 bg-ife-paper py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center sm:px-8 lg:px-12">
          <span className="text-xs font-semibold uppercase tracking-wide text-ife-green">
            Get Involved
          </span>
          <h1 className="mt-3 font-display text-3xl font-bold text-ife-green-deep sm:text-4xl">
            Every Dose Needs a Hand Behind It
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ife-grey">
            Whether it&apos;s your time, your resources, or your
            organization, there&apos;s a place for you in this work.
          </p>
        </div>
      </section>

      {/* Involvement paths */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {paths.map((path) => (
              <div
                key={path.title}
                className="flex flex-col rounded-2xl border border-black/5 bg-ife-paper p-8"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ife-red/10 text-ife-red">
                  <path.icon className="h-6 w-6" />
                </span>
                <h2 className="mt-4 font-display text-lg font-semibold text-ife-ink">
                  {path.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ife-grey">
                  {path.description}
                </p>
                
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-ife-red px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                >
                  <MessageCircle className="h-4 w-4" />
                  {path.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}