import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { programmes } from "@/content/programmes";

export function ProgrammesPreview() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wide text-ife-green">
            Our Programmes
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-ife-ink sm:text-4xl">
            Six ways we advance immunization equity
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ife-grey">
            From grassroots education to policy advocacy, each programme
            targets a different barrier standing between communities and the
            vaccines they need.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programmes.map((p) => (
            <Link
              key={p.id}
              href={`/programmes#${p.id}`}
              className="group flex flex-col rounded-2xl border border-black/5 bg-ife-paper p-6 transition-shadow hover:shadow-md"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ife-green-deep font-display text-sm font-semibold text-white">
                {String(p.number).padStart(2, "0")}
              </span>

              <h3 className="mt-4 font-display text-lg font-semibold text-ife-ink">
                {p.title}
              </h3>

              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ife-grey">
                {p.description}
              </p>

              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-ife-green-deep">
                Learn more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}