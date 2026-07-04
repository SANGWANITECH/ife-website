import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Users } from "lucide-react";
import { DoseTick } from "@/components/ui/DoseTick";
import { programmes } from "@/content/programmes";

export const metadata: Metadata = {
  title: "Our Programmes — Immunization for Everyone",
  description:
    "Six programmes advancing equitable immunization access across Malawi and beyond.",
};

export default function ProgrammesPage() {
  return (
    <main className="flex-1">
      {/* Page header */}
      <section className="border-b border-black/5 bg-ife-paper py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-wide text-ife-green">
            Our Programmes
          </span>
          <h1 className="mt-3 font-display text-3xl font-bold text-ife-green-deep sm:text-4xl">
            Six Ways We Advance Immunization Equity
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ife-grey">
            From grassroots education to policy advocacy, each programme
            targets a different barrier standing between communities and the
            vaccines they need.
          </p>
        </div>
      </section>

      {/* Programme blocks */}
      {programmes.map((p, i) => (
        <section
          key={p.id}
          id={p.id}
          className={`scroll-mt-24 py-16 sm:py-20 ${
            i % 2 === 0 ? "bg-white" : "bg-ife-paper"
          }`}
        >
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ife-green-deep font-display text-base font-semibold text-white">
                {String(p.number).padStart(2, "0")}
              </span>
              <h2 className="font-display text-2xl font-bold text-ife-ink sm:text-3xl">
                {p.title}
              </h2>
            </div>

            <p className="mt-5 text-base leading-relaxed text-ife-grey">
              {p.description}
            </p>

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-black/5 bg-white/60 p-6">
                <span className="flex items-center gap-2 text-sm font-semibold text-ife-green-deep">
                  <Users className="h-4 w-4" />
                  Beneficiaries
                </span>
                <p className="mt-2 text-sm leading-relaxed text-ife-grey">
                  {p.beneficiaries}
                </p>
              </div>

              <div className="rounded-xl border border-black/5 bg-white/60 p-6">
                <span className="text-sm font-semibold text-ife-green-deep">
                  Key Activities
                </span>
                <ul className="mt-3 space-y-2">
                  {p.activities.map((activity) => (
                    <li
                      key={activity}
                      className="flex items-start gap-2 text-sm leading-relaxed text-ife-grey"
                    >
                      <DoseTick className="mt-0.5 h-4 w-4 shrink-0 text-ife-green" />
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Closing CTA */}
      <section className="bg-ife-green-deep py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            Want to support one of these programmes?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            Volunteer your time, partner with us, or help fund the work
            directly.
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