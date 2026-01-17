
import Link from "next/link"
import { Separator } from "./ui/separator"
import logoImage from '../../utils/img/fulllogo_transparent.png'


export function Footer() {
  return (
    <footer className="bg-[#0000007a] text-zinc-300">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          
          {/* Brand */}
          <div>
            <h2 className="text-xl font-semibold tracking-wide text-[#d4af37]">
              <img src={logoImage.src} alt="Enwiya Lawfare Logo" className="h-10 md:h-50 w-auto" />
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-zinc-400">
              Dedicated to justice, integrity, and results. Providing
              strategic legal representation with professionalism and care.
            </p>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-200">
              Practice Areas
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-[#d4af37] transition">
                  Corporate Law
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#d4af37] transition">
                  Criminal Defense
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#d4af37] transition">
                  Family Law
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#d4af37] transition">
                  Civil Litigation
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-200">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-[#d4af37] transition">
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
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-200">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>📍 New York, NY</li>
              <li>📞 (212) 555-0198</li>
              <li>✉️ contact@enwiyalawfare.com</li>
            </ul>
          </div>

        </div>

        <Separator className="my-10 bg-zinc-800" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-zinc-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} Enwiya Lawfare. All rights reserved.
          </p>
          <p className="text-center md:text-right">
            Attorney Advertising. Prior results do not guarantee a similar outcome.
          </p>
        </div>
      </div>
    </footer>
  )
}
