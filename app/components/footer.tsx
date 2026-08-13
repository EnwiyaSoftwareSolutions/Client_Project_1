"use client";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "./ui/separator";
import logoImage from "../../utils/img/fulllogo_transparent.png";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import {
  ArrowRight,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Scale,
} from "lucide-react";
import { OfficeInfo, useOfficeInfoStore } from "../../store/useOfficeInfoStore";

const ZERO_WIDTH = "\u200B";

const withHiddenSeparators = (value: string) =>
  value.split("").join(ZERO_WIDTH);
// const keepDialableChars = (value: string) => value.replace(/[^\d+]/g, "")

function SafePhone({ phone }: { phone?: string }) {
  if (!phone) {
    return <span>Phone unavailable</span>;
  }

  // const dialValue = keepDialableChars(phone)
  const obfuscatedDisplay = withHiddenSeparators(phone);

  return (
    <span className="text-[var(--muted-foreground)]">{obfuscatedDisplay}</span>
    // <button
    //   type="button"
    //   onClick={() => {
    //     if (!dialValue) return
    //     window.location.href = `tel:${dialValue}`
    //   }}
    //   className="text-left transition-colors hover:text-[var(--primary-accent)]"
    //   aria-label="Call us"
    // >
    //   {obfuscatedDisplay}
    // </button>
  );
}

function SafeEmail({ email }: { email?: string }) {
  if (!email) {
    return <span>Email unavailable</span>;
  }

  const [local, domain] = email.split("@");

  if (!local || !domain) {
    return <span>{email}</span>;
  }

  const obfuscatedDisplay = withHiddenSeparators(`${local}@${domain}`);

  return (
    <button
      type="button"
      onClick={() => {
        const actualEmail = `${local}@${domain}`;
        window.location.href = `mailto:${actualEmail}`;
      }}
      className="break-all text-left transition-colors hover:text-[var(--primary-accent)]"
      aria-label="Send us an email"
    >
      {obfuscatedDisplay}
    </button>
  );
}

export function Footer() {
  const pathname = usePathname();
  const officeInfo = useOfficeInfoStore((state) => state.officeInfo);
  const fetchOfficeInfo = useOfficeInfoStore((state) => state.fetchOfficeInfo);

  useEffect(() => {
    void fetchOfficeInfo();
  }, [fetchOfficeInfo]);

  const officeList: OfficeInfo[] = officeInfo?.documents ?? [];

  const preferredOffice = officeList.find((office) => {
    const rawName = office.office_name ?? office.name ?? "";
    return rawName.trim().toLowerCase() === "enwiya law firm";
  });

  const displayOffices = preferredOffice
    ? [preferredOffice]
    : officeList.slice(0, 1);
  const generatedYear = new Date().getFullYear();

  return (
    <div>
      {pathname.startsWith("/AdminPage") ? null : (
        <footer className="relative overflow-hidden border-t border-[var(--setBorderColorGold)]/40 bg-gradient-to-br from-[var(--background)] via-[var(--background)] to-[var(--boxgradient-color)]/10 text-[var(--muted-foreground)]">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--primary-accent)]/70 to-transparent" />
          <div className="pointer-events-none absolute -left-24 top-8 h-56 w-56 rounded-full bg-[var(--primary-accent)]/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 bottom-8 h-56 w-56 rounded-full bg-[var(--primary-accent)]/10 blur-3xl" />

          <div className="mx-auto max-w-7xl px-6 py-16">
            {/* Call to action */}
            <div className="mb-12 flex flex-col items-center justify-between gap-6 rounded-2xl border border-[var(--setBorderColorGold)]/40 bg-[var(--primary-accent)]/5 px-8 py-8 text-center md:flex-row md:text-left">
              <div>
                <h2 className="text-lg font-semibold text-[var(--headder-text-color)] md:text-xl">
                  Ready to discuss your case?
                </h2>
                <p className="mt-1 text-sm text-[var(--muted-foreground)]/90">
                  Schedule a confidential consultation with our legal team
                  today.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[var(--setBorderColorGold)]/50 bg-[var(--primary-accent)]/15 px-6 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--headder-text-color)] transition-all hover:-translate-y-0.5 hover:bg-[var(--primary-accent)]/25"
              >
                Get in touch
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
              {/* Brand */}
              <div>
                <Link
                  href="/"
                  className="inline-flex items-center transition-opacity position-relative hover:opacity-85"
                >
                  <Image
                    src={logoImage}
                    alt="Enwiya Lawfare Logo"
                    className="h-[120px] w-auto"
                    priority
                  />
                </Link>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-[var(--muted-foreground)]/90">
                  Dedicated to justice, integrity, and results. Providing
                  strategic legal representation with professionalism and care.
                </p>
                <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[var(--setBorderColorGold)]/40 bg-[var(--primary-accent)]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--headder-text-color)]">
                  <Scale className="h-3.5 w-3.5" />
                  Client-first legal counsel
                </div>
              </div>

              {/* Practice Areas */}
              <div>
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--headder-text-color)]">
                  Practice Areas
                </h3>
                <ul className="space-y-2.5 text-sm">
                  <li>
                    <Link
                      href="/practice-area/corporate"
                      className="inline-flex items-center gap-2 transition-colors hover:text-[var(--primary-accent)]"
                    >
                      <ArrowRight className="h-3.5 w-3.5 text-[var(--primary-accent)]/80" />
                      Business & Corporate Law
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/practice-area/estate"
                      className="inline-flex items-center gap-2 transition-colors hover:text-[var(--primary-accent)]"
                    >
                      <ArrowRight className="h-3.5 w-3.5 text-[var(--primary-accent)]/80" />
                      Estate Planning
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/practice-area/probate"
                      className="inline-flex items-center gap-2 transition-colors hover:text-[var(--primary-accent)]"
                    >
                      <ArrowRight className="h-3.5 w-3.5 text-[var(--primary-accent)]/80" />
                      Probate
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/practice-area/immigration"
                      className="inline-flex items-center gap-2 transition-colors hover:text-[var(--primary-accent)]"
                    >
                      <ArrowRight className="h-3.5 w-3.5 text-[var(--primary-accent)]/80" />
                      Immigration
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--headder-text-color)]">
                  Company
                </h3>
                <ul className="space-y-2.5 text-sm">
                  <li>
                    <Link
                      href="/about"
                      className="inline-flex items-center gap-2 transition-colors hover:text-[var(--primary-accent)]"
                    >
                      <ArrowRight className="h-3.5 w-3.5 text-[var(--primary-accent)]/80" />
                      About Us
                    </Link>
                  </li>
                  {/* <li>
                <Link href="/reviews" className="inline-flex items-center gap-2 transition-colors hover:text-[var(--primary-accent)]">
                  <ArrowRight className="h-3.5 w-3.5 text-[var(--primary-accent)]/80" />
                  Client Reviews
                </Link>
              </li> */}
                  <li>
                    <Link
                      href="/practice-area"
                      className="inline-flex items-center gap-2 transition-colors hover:text-[var(--primary-accent)]"
                    >
                      <ArrowRight className="h-3.5 w-3.5 text-[var(--primary-accent)]/80" />
                      Practice Areas
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 transition-colors hover:text-[var(--primary-accent)]"
                    >
                      <ArrowRight className="h-3.5 w-3.5 text-[var(--primary-accent)]/80" />
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              {/* Contact */}
              {displayOffices.map((i) => {
                return (
                  <div
                    key={
                      i.$id ?? i.id ?? i.office_email ?? i.office_phone_number
                    }
                  >
                    <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--headder-text-color)]">
                      Contact
                    </h3>
                    <ul className="space-y-3 text-sm text-[var(--muted-foreground)]">
                      <li className="flex items-start gap-3">
                        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--primary-accent)]" />
                        <span>{i.office_address || i.mailing_address}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[var(--primary-accent)]" />
                        <SafePhone phone={i.office_phone_number} />
                      </li>
                      <li className="flex items-start gap-3">
                        <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[var(--primary-accent)]" />
                        <SafeEmail email={i.office_email} />
                      </li>
                      <li className="flex items-start gap-3">
                        <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[var(--primary-accent)]" />
                        <a className="block max-w-[200px] break-words whitespace-normal transition-colors hover:text-[var(--primary-accent)]">
                          {i.mailing_address}
                        </a>
                      </li>
                    </ul>
                    {/* <Link
                      href="/contact"
                      className="mt-6 inline-flex items-center gap-2 rounded-full border border-[var(--setBorderColorGold)]/50 bg-[var(--primary-accent)]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--headder-text-color)] transition-all hover:-translate-y-0.5 hover:bg-[var(--primary-accent)]/20"
                    >
                      Book consultation
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link> */}
                    <div className="mt-6 flex items-center gap-3">
                      <a
                        href={i.facebook_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--setBorderColorGold)]/40 bg-[var(--primary-accent)]/10 text-[var(--headder-text-color)] transition-all hover:-translate-y-0.5 hover:bg-[var(--primary-accent)]/20 hover:text-[var(--primary-accent)]"
                      >
                        <Facebook className="h-4 w-4" />
                      </a>
                      <a
                        href={i.instagram_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--setBorderColorGold)]/40 bg-[var(--primary-accent)]/10 text-[var(--headder-text-color)] transition-all hover:-translate-y-0.5 hover:bg-[var(--primary-accent)]/20 hover:text-[var(--primary-accent)]"
                      >
                        <Instagram className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            <Separator className="my-10 bg-[var(--setBorderColorGold)]/30" />

            {/* Bottom */}
            <div className="flex flex-col items-center justify-between gap-4 text-center text-xs uppercase tracking-[0.08em] text-[var(--muted-foreground)]/90 md:flex-row md:text-left">
              <p>
                © {new Date().getFullYear()} Enwiya Law Firm. All rights
                reserved.
              </p>

              <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                <Link
                  href="/privacy-policy"
                  className="transition-colors hover:text-[var(--primary-accent)]"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-of-service"
                  className="transition-colors hover:text-[var(--primary-accent)]"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/disclaimer"
                  className="transition-colors hover:text-[var(--primary-accent)]"
                >
                  Disclaimer
                </Link>
              </nav>
            </div>

            <div className="mt-4 text-center text-xs uppercase tracking-[0.08em] text-[var(--muted-foreground)]/70 md:text-left">
              <p>
                Attorney Advertising. Prior results do not guarantee a similar
                outcome.
              </p>
            </div>

            <div className="relative top-[30px] flex items-center justify-center text-xs uppercase tracking-[0.08em] text-[var(--muted-foreground)]/90 md:flex-row md:text-left">
              <p>
                Developed by Enwiya Software Solutions, LLC. {generatedYear}
              </p>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
