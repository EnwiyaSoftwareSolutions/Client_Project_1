"use client"
import Image from "next/image"
import Link from "next/link"
import { Separator } from "./ui/separator"
import logoImage from '../../utils/img/fulllogo_transparent.png'
import { usePathname } from "next/navigation"
import userInfo from '../data/userInfo'
import { ArrowRight, Mail, MapPin, Phone, Scale } from "lucide-react"


export function Footer() {
  const pathname = usePathname();

  return (
    <div>
       {pathname.startsWith("/AdminPage") ? null : (
    <footer className="relative overflow-hidden border-t border-[var(--setBorderColorGold)]/40 bg-gradient-to-br from-[var(--background)] via-[var(--background)] to-[var(--boxgradient-color)]/10 text-[var(--muted-foreground)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--primary-accent)]/70 to-transparent" />
      <div className="pointer-events-none absolute -left-24 top-8 h-56 w-56 rounded-full bg-[var(--primary-accent)]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-8 h-56 w-56 rounded-full bg-[var(--primary-accent)]/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center transition-opacity hover:opacity-85">
              <Image src={logoImage} alt="Enwiya Lawfare Logo" className="h-12 w-auto" priority />
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
                <Link href="/practice-area/corporate" className="inline-flex items-center gap-2 transition-colors hover:text-[var(--primary-accent)]">
                  <ArrowRight className="h-3.5 w-3.5 text-[var(--primary-accent)]/80" />
                  Business & Corporate Law
                </Link>
              </li>
              <li>
                <Link href="/practice-area/estate" className="inline-flex items-center gap-2 transition-colors hover:text-[var(--primary-accent)]">
                  <ArrowRight className="h-3.5 w-3.5 text-[var(--primary-accent)]/80" />
                  Estate Planning
                </Link>
              </li>
              <li>
                <Link href="/practice-area/probate" className="inline-flex items-center gap-2 transition-colors hover:text-[var(--primary-accent)]">
                  <ArrowRight className="h-3.5 w-3.5 text-[var(--primary-accent)]/80" />
                  Probate
                </Link>
              </li>
              <li>
                <Link href="/practice-area/immigration" className="inline-flex items-center gap-2 transition-colors hover:text-[var(--primary-accent)]">
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
                <Link href="/about" className="inline-flex items-center gap-2 transition-colors hover:text-[var(--primary-accent)]">
                  <ArrowRight className="h-3.5 w-3.5 text-[var(--primary-accent)]/80" />
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="inline-flex items-center gap-2 transition-colors hover:text-[var(--primary-accent)]">
                  <ArrowRight className="h-3.5 w-3.5 text-[var(--primary-accent)]/80" />
                  Client Reviews
                </Link>
              </li>
              <li>
                <Link href="/achievements" className="inline-flex items-center gap-2 transition-colors hover:text-[var(--primary-accent)]">
                  <ArrowRight className="h-3.5 w-3.5 text-[var(--primary-accent)]/80" />
                  Achievements
                </Link>
              </li>
              <li>
                <Link href="/contact" className="inline-flex items-center gap-2 transition-colors hover:text-[var(--primary-accent)]">
                  <ArrowRight className="h-3.5 w-3.5 text-[var(--primary-accent)]/80" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact */}
          {userInfo && userInfo.map((i)=>{
            return (
              <div key={i.name}>
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--headder-text-color)]">
                  Contact
                </h3>
                <ul className="space-y-3 text-sm text-[var(--muted-foreground)]">
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--primary-accent)]" />
                    <span>{i.address}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[var(--primary-accent)]" />
                    <a href={`tel:${i.phone}`} className="transition-colors hover:text-[var(--primary-accent)]">{i.phone}</a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[var(--primary-accent)]" />
                    <a href={`mailto:${i.email}`} className="break-all transition-colors hover:text-[var(--primary-accent)]">{i.email}</a>
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-[var(--setBorderColorGold)]/50 bg-[var(--primary-accent)]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--headder-text-color)] transition-all hover:-translate-y-0.5 hover:bg-[var(--primary-accent)]/20"
                >
                  Book consultation
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            )
          })}

        </div>

        <Separator className="my-10 bg-[var(--setBorderColorGold)]/30" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 text-center text-xs uppercase tracking-[0.08em] text-[var(--muted-foreground)]/90 md:flex-row md:text-left">
          <p>
            © {new Date().getFullYear()} Enwiya Lawfare. All rights reserved.
          </p>
          <p className="md:text-right">
            Attorney Advertising. Prior results do not guarantee a similar outcome.
          </p>
        </div>
      </div>
    </footer>
       )}
    </div>
  )
}
