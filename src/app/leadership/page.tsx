import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DoseTick } from "@/components/ui/DoseTick";
import { TeamCard } from "@/components/ui/TeamCard";
import { team } from "@/content/team";
import { org } from "@/content/org";

export const metadata: Metadata = {
  title: "Leadership — Immunization for Everyone",
  description:
    "Meet the executive team and advisory council behind Immunization for Everyone.",
};

export default function LeadershipPage() {
  return (
    <main className="flex-1">
      {/* Page header */}
      <section className="border-b border-black/5 bg-ife-paper py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center sm:px-8 lg:px-12">
          <span className="text-xs font-semibold uppercase tracking-wide text-ife-green">
            Leadership
          </span>
          <h1 className="mt-3 font-display text-3xl font-bold text-ife-green-deep sm:text-4xl">
            The People Behind IFE
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ife-grey">
            A team of students and young professionals committed to making
            immunization access equitable for everyone.
          </p>
        </div>
      </section>

      {/* Executive Team */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-12">
          <h2 className="text-center font-display text-2xl font-bold text-ife-ink sm:text-3xl">
            Executive Team
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Council */}
      <section className="bg-ife-paper py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center sm:px-8 lg:px-12">
          <h2 className="font-display text-2xl font-bold text-ife-ink sm:text-3xl">
            Advisory Council
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-ife-grey">
            Experienced advisors supporting IFE&apos;s strategic direction.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {org.advisoryCouncil.map((name) => (
              <span
                key={name}
                className="inline-flex items-center gap-2 rounded-full border border-ife-green-deep/15 bg-white px-5 py-2.5 text-sm font-medium text-ife-ink"
              >
                <DoseTick className="h-4 w-4 text-ife-green-deep" />
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-ife-green-deep py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-6 text-center sm:px-8 lg:px-12">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            Interested in joining the team?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            We&apos;re always open to volunteers and collaborators who share
            our mission.
          </p>
          <Link
            href="/get-involved"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-ife-red px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Get Involved
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}