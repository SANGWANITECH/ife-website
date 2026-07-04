import type { Metadata } from "next";
import Link from "next/link";
import { Target, Eye, MapPin, Calendar, ArrowRight } from "lucide-react";
import { DoseTick } from "@/components/ui/DoseTick";
import { org } from "@/content/org";

export const metadata: Metadata = {
  title: "About Us — Immunization for Everyone",
  description: org.intro,
};

export default function AboutPage() {
  return (
    <main className="flex-1">
      {/* Page header */}
      <section className="border-b border-black/5 bg-ife-paper py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-wide text-ife-green">
            About Us
          </span>
          <h1 className="mt-3 font-display text-3xl font-bold text-ife-green-deep sm:text-4xl">
            Advancing Immunization Equity
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ife-grey">
            {org.intro}
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-ife-grey">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-ife-green-deep" />
              Based in {org.address}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-ife-green-deep" />
              Est. 2026
            </span>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-black/5 bg-ife-paper p-8">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ife-green-deep/10 text-ife-green-deep">
                <Target className="h-5 w-5" />
              </span>
              <h2 className="mt-4 font-display text-xl font-semibold text-ife-ink">
                Our Mission
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ife-grey">
                {org.mission}
              </p>
            </div>

            <div className="rounded-2xl border border-black/5 bg-ife-paper p-8">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ife-green-deep/10 text-ife-green-deep">
                <Eye className="h-5 w-5" />
              </span>
              <h2 className="mt-4 font-display text-xl font-semibold text-ife-ink">
                Our Vision
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ife-grey">
                {org.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="bg-ife-paper py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-wide text-ife-green">
              Our Objectives
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-ife-ink sm:text-4xl">
              What we&apos;re working toward
            </h2>
          </div>

          <ul className="mt-10 space-y-4">
            {org.objectives.map((objective) => (
              <li
                key={objective}
                className="flex items-start gap-3 rounded-xl border border-black/5 bg-white p-5"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ife-green/15 text-ife-green">
                  <DoseTick className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm leading-relaxed text-ife-ink">
                  {objective}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-wide text-ife-green">
            What Drives Us
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-ife-ink sm:text-4xl">
            Our Core Values
          </h2>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {org.values.map((value) => (
              <span
                key={value}
                className="inline-flex items-center gap-2 rounded-full border border-ife-green-deep/15 bg-ife-paper px-5 py-2.5 text-sm font-medium text-ife-ink"
              >
                <DoseTick className="h-4 w-4 text-ife-green-deep" />
                {value}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-ife-green-deep py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            Want to be part of this?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            There are several ways to support equitable immunization access 
            see how you can get involved.
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