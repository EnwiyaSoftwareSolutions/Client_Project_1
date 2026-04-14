"use client"
import Link from "next/link"
import { Separator } from "./ui/separator"
import logoImage from '../../utils/img/fulllogo_transparent.png'
import { usePathname } from "next/navigation"



export function Footer() {
  const pathname = usePathname();

  return (
    <div>
       {pathname.startsWith("/AdminPage") ? null : (
    <footer className="relative bg-gradient-to-br from-[var(--boxgradient-color)]/20 via-[var(--primary-accent)]/8 to-transparent text-[var(--muted-foreground)]">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          
          {/* Brand */}
          <div>
            <h2 className="text-xl font-semibold tracking-wide text-[var(--primary-accent)]">
              <img src={logoImage.src} alt="Enwiya Lawfare Logo" className=" w-auto" />
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[var(--muted-foreground)]">
              Dedicated to justice, integrity, and results. Providing
              strategic legal representation with professionalism and care.
            </p>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
              Practice Areas
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-[var(--primary-accent)] transition">
                  Corporate Law
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#d4af37] transition">
                  Estate Planning
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#d4af37] transition">
                  Probate
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#d4af37] transition">
                  Immigration
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-[var(--primary-accent)] transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/stories" className="hover:text-[#d4af37] transition">
                  Case Stories
                </Link>
              </li>
              <li>
                <Link href="/achievements" className="hover:text-[#d4af37] transition">
                  Achievements
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#d4af37] transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-[var(--muted-foreground)]">
              <li>📍 New York, NY</li>
              <li>📞  </li>
              <li>✉️ contact@enwiyalawfare.com</li>
            </ul>
          </div>

        </div>

        <Separator className="my-10 bg-[var(--border)]" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-[var(--muted-foreground)] md:flex-row">
          <p>
            © {new Date().getFullYear()} Enwiya Lawfare. All rights reserved.
          </p>
          <p className="text-center md:text-right">
            Attorney Advertising. Prior results do not guarantee a similar outcome.
          </p>
        </div>
      </div>
    </footer>
       )}
    </div>
  )
}
