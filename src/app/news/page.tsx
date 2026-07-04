import type { Metadata } from "next";
import { Newspaper, MessageCircle } from "lucide-react";
import { news } from "@/content/news";
import { org } from "@/content/org";

export const metadata: Metadata = {
  title: "News & Updates — Immunization for Everyone",
  description: "Latest news and updates from Immunization for Everyone.",
};

export default function NewsPage() {
  const whatsappHref = `https://wa.me/${org.whatsapp.replace(/[^0-9]/g, "")}`;

  return (
    <main className="flex-1">
      {/* Page header */}
      <section className="border-b border-black/5 bg-ife-paper py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center sm:px-8 lg:px-12">
          <span className="text-xs font-semibold uppercase tracking-wide text-ife-green">
            News & Updates
          </span>
          <h1 className="mt-3 font-display text-3xl font-bold text-ife-green-deep sm:text-4xl">
            What&apos;s Happening at IFE
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ife-grey">
            Updates on our programmes, outreach activities, and milestones as
            we grow.
          </p>
        </div>
      </section>

      {news.length === 0 ? (
        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-md px-6 text-center">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-ife-green-deep/10 text-ife-green-deep">
              <Newspaper className="h-6 w-6" />
            </span>
            <h2 className="mt-5 font-display text-xl font-semibold text-ife-ink">
              No updates yet
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-ife-grey">
              We&apos;re just getting started check back soon for updates
              on our programmes and outreach activities.
            </p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-ife-red px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              <MessageCircle className="h-4 w-4" />
              Follow updates on WhatsApp
            </a>
          </div>
        </section>
      ) : (
        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {news.map((post) => (
                <article
                  key={post.id}
                  className="rounded-2xl border border-black/5 bg-ife-paper p-6"
                >
                  <time className="text-xs font-semibold uppercase tracking-wide text-ife-green">
                    {new Date(post.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                  <h2 className="mt-2 font-display text-lg font-semibold text-ife-ink">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-ife-grey">
                    {post.excerpt}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}