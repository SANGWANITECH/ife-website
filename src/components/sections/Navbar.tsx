"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, HandHeart } from "lucide-react";
import { navLinks } from "@/content/nav";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-ife-paper/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo lockup */}
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo-icon.png"
            alt="IFE"
            width={198}
            height={126}
            className="h-10 w-auto"
            priority
          />
          <span className="font-display text-lg font-semibold tracking-tight text-ife-green-deep">
            Immunization for Everyone
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  active
                    ? "text-ife-green-deep"
                    : "text-ife-ink/70 hover:text-ife-green-deep"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/get-involved"
          className="hidden items-center gap-2 rounded-full bg-ife-red px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90 md:inline-flex"
        >
          <HandHeart className="h-4 w-4" />
          Get Involved
        </Link>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-ife-ink md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-black/5 bg-ife-paper px-4 pb-4 pt-2 md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-md px-3 py-2 text-sm font-medium ${
                    active
                      ? "bg-ife-green-deep/10 text-ife-green-deep"
                      : "text-ife-ink/80 hover:bg-ife-green-deep/5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/get-involved"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-ife-red px-4 py-2.5 text-sm font-semibold text-white"
            >
              <HandHeart className="h-4 w-4" />
              Get Involved
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}