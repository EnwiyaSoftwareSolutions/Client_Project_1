"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { cn } from "../../lib/utils"
import { Button } from "./ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./ui/navigation-menu"
import logoImage from '../../utils/img/fulllogo_transparent.png'

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Reviews", href: "/reviews" },
  { name: "Stories", href: "/stories" },
  { name: "Achievements", href: "/achievements" },
  { name: "Contact", href: "/contact" },
]

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  // prevent body scroll when mobile menu is open
  useEffect(() => {
    if (typeof window === "undefined") return
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <div>
    <header className="relative sticky top-0 z-50 w-full bg-[#0000007a]/95 backdrop-blur  border-border">
      {/* Absolute logo anchored to the far left */}
      <Link href="/" className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2">
        <img src={logoImage.src} alt="Enwiya Lawfare Logo" className="h-10 md:h-29 pt-2 w-auto" />
      </Link>

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:pl-20">
        
        {/* Site title (kept as link) */}
        {/* <Link href="/" className="flex items-center gap-2">
          <span className="text-lg font-semibold tracking-wide text-[#d4af37]">
            Enwiya Lawfare
          </span>
        </Link> */}

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-6">
            {navItems.map((item) => {
              const isActive = pathname === item.href

              return (
                <NavigationMenuItem key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      "text-sm font-medium transition-colors",
                      isActive
                        ? "text-[#d4af37]"
                        : "text-zinc-300 hover:text-[#d4af37]"
                    )}
                  >
                    {item.name}
                  </Link>
                </NavigationMenuItem>
              )
            })}
          </NavigationMenuList>
        </NavigationMenu>

        {/* CTA (desktop) */}
        <div className="hidden md:flex">
          <Button
            asChild
            className="bg-[#d4af37] text-black hover:bg-[#c9a635] font-semibold"
          >
            <Link href="/contact">Free Consultation</Link>
          </Button>
        </div>

        {/* Mobile Menu (hamburger) */}
        <div className="md:hidden">
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-transparent text-zinc-200 hover:bg-white/5"
          >
            {!open ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>

      </div>
    </header>

      {/* Mobile menu panel */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-[#0b0b0b]/95 backdrop-blur" onClick={() => setOpen(false)} />
          <nav className="relative z-50 h-full w-full overflow-auto">
            <div className="flex h-full flex-col gap-6 p-6">
              <div className="flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                  <img src={logoImage.src} alt="Enwiya Lawfare Logo" className="h-10 w-auto" />
                </Link>
                <button aria-label="Close menu" onClick={() => setOpen(false)} className="h-10 w-10 rounded-md bg-transparent text-zinc-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="mt-4 flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "text-lg font-medium",
                      pathname === item.href ? "text-[#d4af37]" : "text-zinc-200"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="mt-auto">
                <Button asChild className="w-full bg-[#d4af37] text-black">
                  <Link href="/contact" onClick={() => setOpen(false)}>
                    Free Consultation
                  </Link>
                </Button>
              </div>
            </div>
          </nav>
        </div>
      )}
    </div>
  )
}
