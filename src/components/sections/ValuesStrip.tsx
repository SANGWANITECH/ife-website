import { DoseTick } from "@/components/ui/DoseTick";
import { org } from "@/content/org";

export function ValuesStrip() {
  return (
    <section className="bg-ife-green-deep py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <span className="text-xs font-semibold uppercase tracking-wide text-ife-green">
          What Drives Us
        </span>
        <h2 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">
          Our Core Values
        </h2>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {org.values.map((value) => (
            <span
              key={value}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white"
            >
              <DoseTick className="h-4 w-4 text-ife-green" />
              {value}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}