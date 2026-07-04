import Link from "next/link";
import { MessageCircle, ArrowRight } from "lucide-react";
import { org } from "@/content/org";
import { DoseTick } from "@/components/ui/DoseTick";

export function Hero() {
  const whatsappHref = `https://wa.me/${org.whatsapp.replace(/[^0-9]/g, "")}`;

  return (
    <section className="relative overflow-hidden bg-ife-paper">
      <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-ife-green-deep/20 bg-ife-green-deep/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-ife-green-deep">
          <DoseTick className="h-3.5 w-3.5" />
          Est. 2026
        </span>

        <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-ife-green-deep sm:text-5xl md:text-6xl">
          {org.slogan}.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ife-grey sm:text-lg">
          {org.mission}
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-ife-red px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            <MessageCircle className="h-4 w-4" />
            Get Involved
          </a>
          <Link
            href="/about"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-ife-green-deep/20 px-6 py-3 text-sm font-semibold text-ife-green-deep transition-colors hover:bg-ife-green-deep/5"
          >
            Learn About Us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Signature dose-timeline visual — ties directly to the slogan */}
      <div className="border-t border-black/5 bg-white/40 py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <DoseTimeline />
        </div>
      </div>
    </section>
  );
}

function DoseTimeline() {
  const steps = [
    "Awareness",
    "Access",
    "Advocacy",
    "Action",
    "Healthier Communities",
  ];

  return (
    <div className="flex items-center justify-between">
      {steps.map((step, i) => {
        const isLast = i === steps.length - 1;
        return (
          <div key={step} className="flex flex-1 items-center last:flex-none">
            <div className="flex min-w-0 flex-col items-center gap-2">
              <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 ${
                  isLast
                    ? "border-ife-red bg-ife-red text-white"
                    : "border-ife-green bg-ife-green/10 text-ife-green"
                }`}
              >
                <DoseTick className="h-4 w-4" />
              </div>
              <span className="w-16 text-center text-[9px] font-medium leading-tight text-ife-grey sm:w-auto sm:text-[11px]">
                {step}
              </span>
            </div>
            {!isLast && (
              <div className="mx-1 h-px flex-1 border-t border-dashed border-ife-green/40 sm:mx-2" />
            )}
          </div>
        );
      })}
    </div>
  );
}