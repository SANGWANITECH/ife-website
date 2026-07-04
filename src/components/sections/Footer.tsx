import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { navLinks } from "@/content/nav";
import { org } from "@/content/org";
import { programmes } from "@/content/programmes";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-white/10 bg-ife-green-deep text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Org blurb */}
          <div>
  <div className="flex items-center gap-2">
    <Image
      src="/images/logo-icon.png"
      alt={org.name}
      width={198}
      height={126}
      className="h-9 w-auto"
    />
    <span className="font-display text-base font-semibold text-white">
      {org.shortName}
    </span>
  </div>
  <p className="mt-3 text-sm leading-relaxed text-white/70">
    {org.slogan}.
  </p>
</div>

          {/* Quick links */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-white/90">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programmes */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-white/90">
              Programmes
            </h3>
            <ul className="mt-4 space-y-2">
              {programmes.slice(0, 5).map((p) => (
                <li key={p.id}>
                  <Link
                    href={`/programmes#${p.id}`}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-white/90">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2 text-sm text-white/70">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                <a href={`mailto:${org.email}`} className="hover:text-white">
                  {org.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/70">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                <a href={`tel:${org.phones[0]}`} className="hover:text-white">
                  {org.phones[0]}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{org.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Dotted dose-record divider */}
        <div className="my-8 border-t border-dashed border-white/15" />

        <div className="flex flex-col items-center justify-between gap-3 text-xs text-white/50 sm:flex-row">
          <p>
            © {year} {org.name}. All rights reserved.
          </p>
          <p>
            developed by{" "}
            <a
              href="https://ram-techs.online/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              RAMTECH
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}